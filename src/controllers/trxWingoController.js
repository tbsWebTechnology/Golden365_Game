import moment from "moment";
import connection from "../config/connectDB.js";
import axios from "axios";
import _ from "lodash";
import GameRepresentationIds from "../constants/game_representation_id.js";
import { generatePeriod } from "../helpers/games.js";

export const TRX_WINGO_GAME_STATUS_MAP = {
  PENDING: 0,
  COMPLETED: 1,
};

export const TRX_WINGO_GAME_TYPE_MAP = {
  MIN_1: "trx_wingo",
  MIN_3: "trx_wingo3",
  MIN_5: "trx_wingo5",
  MIN_10: "trx_wingo10",
};

const trxWingoBlockPage = async (req, res) => {
  return res.render("bet/trx_wingo/trx_block.ejs");
};

const trxWingoPage = async (req, res) => {
  return res.render("bet/trx_wingo/win.ejs");
};

const trxWingoPage3 = async (req, res) => {
  return res.render("bet/trx_wingo/win3.ejs");
};

const trxWingoPage5 = async (req, res) => {
  return res.render("bet/trx_wingo/win5.ejs");
};

const trxWingoPage10 = async (req, res) => {
  return res.render("bet/trx_wingo/win10.ejs");
};

const isNumber = (params) => {
  let pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};

function formateT(params) {
  let result = params < 10 ? "0" + params : params;
  return result;
}

function timerJoin(params = "", addHours = 0) {
  let date = "";
  if (params) {
    date = new Date(Number(params));
  } else {
    date = new Date();
  }

  date.setHours(date.getHours() + addHours);

  let years = formateT(date.getFullYear());
  let months = formateT(date.getMonth() + 1);
  let days = formateT(date.getDate());

  let hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  let ampm = date.getHours() < 12 ? "AM" : "PM";

  let minutes = formateT(date.getMinutes());
  let seconds = formateT(date.getSeconds());

  return (
    years +
    "-" +
    months +
    "-" +
    days +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    " " +
    ampm
  );
}

const rosesPlus = async (auth, money) => {
  const [level] = await connection.query("SELECT * FROM level ");

  const [user] = await connection.query(
    "SELECT `phone`, `code`, `invite`, `user_level`, `total_money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ",
    [auth],
  );
  let userInfo = user[0];
  const [f1] = await connection.query(
    "SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ",
    [userInfo.invite],
  );

  if (userInfo.total_money >= 100) {
    if (f1.length > 0) {
      let infoF1 = f1[0];
      for (let levelIndex = 1; levelIndex <= 6; levelIndex++) {
        let rosesF = 0;
        if (infoF1.user_level >= levelIndex && infoF1.total_money >= 100) {
          rosesF = (money / 100) * level[levelIndex - 1].f1;
          if (rosesF > 0) {
            await connection.query(
              "UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ",
              [rosesF, rosesF, rosesF, infoF1.phone],
            );
            let timeNow = Date.now();
            const sql2 = `INSERT INTO roses SET 
                            phone = ?,
                            code = ?,
                            invite = ?,
                            f1 = ?,
                            time = ?`;
            await connection.query(sql2, [
              infoF1.phone,
              infoF1.code,
              infoF1.invite,
              rosesF,
              timeNow,
            ]);

            const sql3 = `
                            INSERT INTO turn_over (phone, code, invite, daily_turn_over, total_turn_over)
                            VALUES (?, ?, ?, ?, ?)
                            ON DUPLICATE KEY UPDATE
                            daily_turn_over = daily_turn_over + VALUES(daily_turn_over),
                            total_turn_over = total_turn_over + VALUES(total_turn_over)
                            `;

            await connection.query(sql3, [
              infoF1.phone,
              infoF1.code,
              infoF1.invite,
              money,
              money,
            ]);
          }
        }
        const [fNext] = await connection.query(
          "SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ",
          [infoF1.invite],
        );
        if (fNext.length > 0) {
          infoF1 = fNext[0];
        } else {
          break;
        }
      }
    }
  }
};



const betTrxWingo = async (req, res) => {
  try {
    let { typeid, join, x, money } = req.body;
    let auth = req.cookies.auth;

    console.log(`Received Bet Request: typeid=${typeid}, join=${join}, x=${x}, money=${money}`);

    // Ensure typeid is valid
    const gameTypeKeys = { 1: "MIN_1", 3: "MIN_3", 5: "MIN_5", 10: "MIN_10" };

    if (!gameTypeKeys[typeid]) {
      console.error("Invalid game type received:", typeid);
      return res.status(400).json({ message: "Error! Invalid game type", status: false });
    }

    let gameJoin = TRX_WINGO_GAME_TYPE_MAP[gameTypeKeys[typeid]];

    console.log(`Fetching active period for game: ${gameJoin}`);
    const [trxWingoNow] = await connection.query(
      `SELECT period FROM trx_wingo_game WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1`,
      [gameJoin]
    );

    if (!trxWingoNow[0]) {
      console.log("No active period found! Creating new period...");
      let timeNow = Date.now();
      let period = moment(timeNow).format("YYYYMMDDHHmmss");

      await connection.query(
        `INSERT INTO trx_wingo_game (period, result, game, status, block_id, block_time, hash, time)
         VALUES (?, 0, ?, 0, 0, '', '', ?)`,
        [period, gameJoin, timeNow]
      );

      return res.status(200).json({
        message: "Error! No active period. New period created, try again.",
        status: false
      });
    }

    console.log("Active Period Found:", trxWingoNow[0].period);
    const [user] = await connection.query(
      "SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1",
      [auth]
    );

    if (!user[0]) {
      console.log("User not found!");
      return res.status(400).json({ message: "Error! User not found", status: false });
    }

    console.log("User Balance:", user[0].money);
    if (!isNumber(x) || !isNumber(money)) {
      return res.status(400).json({ message: "Error! Invalid bet amount", status: false });
    }

    let userInfo = user[0];
    let period = trxWingoNow[0].period;
    let fee = x * money * 0.02;
    let total = x * money - fee;

    if (userInfo.money < total) {
      return res.status(400).json({ message: "Error! Insufficient funds", status: false });
    }

    let betId = `${moment().format("YYYYMMDDHHmmss")}${Math.floor(Math.random() * 100000)}`;
    let timeNow = Date.now();

    await connection.query(
      `INSERT INTO trx_wingo_bets (id_product, phone, code, invite, stage, level, money, amount, fee, game, bet, status, time)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)`,
      [betId, userInfo.phone, userInfo.code, userInfo.invite, period, userInfo.level, total, x, fee, gameJoin, join, timeNow]
    );

    await connection.query("UPDATE users SET money = money - ? WHERE token = ?", [money * x, auth]);

    const [updatedUser] = await connection.query(
      "SELECT money FROM users WHERE token = ? AND veri = 1 LIMIT 1",
      [auth]
    );

    return res.status(200).json({
      message: "Successful bet",
      status: true,
      period: period,
      money: updatedUser[0].money
    });

  } catch (error) {
    console.error("Error in betTrxWingo:", error);
    return res.status(500).json({ message: "Error!", status: false });
  }
};




const listOrderOld = async (req, res) => {
  let { typeid, pageno, pageto } = req.body;

  if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }
  if (pageno < 0 || pageto < 0) {
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      page: 1,
      status: false,
    });
  }
  let auth = req.cookies.auth;
  const [user] = await connection.query(
    "SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ",
    [auth],
  );

  let game = "";
  if (typeid == 1) game = TRX_WINGO_GAME_TYPE_MAP.MIN_1;
  if (typeid == 3) game = TRX_WINGO_GAME_TYPE_MAP.MIN_3;
  if (typeid == 5) game = TRX_WINGO_GAME_TYPE_MAP.MIN_5;
  if (typeid == 10) game = TRX_WINGO_GAME_TYPE_MAP.MIN_10;

  const [trx_wingo] = await connection.query(
    "SELECT * FROM trx_wingo_game WHERE status != 0 AND game = ? ORDER BY id DESC LIMIT ?, ?",
    [game, Number(pageno), Number(pageto)],
  );

  const [trx_wingoAll] = await connection.query(
    "SELECT COUNT(*) as game_length FROM trx_wingo_game WHERE status != 0 AND game = ?",
    [game],
  );
  const [period] = await connection.query(
    "SELECT period FROM trx_wingo_game WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1",
    [game],
  );
  if (!trx_wingo[0]) {
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      page: 1,
      status: false,
    });
  }

  if (!pageno || !pageto || !user[0] || !trx_wingo[0] || !period[0]) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }

  let page = Math.ceil(trx_wingoAll[0].game_length / 10);

  return res.status(200).json({
    code: 0,
    msg: "Receive success",
    data: {
      gameslist: trx_wingo,
    },
    period: period[0].period,
    page: page,
    status: true,
  });
};

const GetMyEmerdList = async (req, res) => {
  let { typeid, pageno, pageto } = req.body;

  // if (!pageno || !pageto) {
  //     pageno = 0;
  //     pageto = 10;
  // }

  if (typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }

  if (pageno < 0 || pageto < 0) {
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      page: 1,
      status: false,
    });
  }
  let auth = req.cookies.auth;

  let game = "";
  if (typeid == 1) game = "trx_wingo";
  if (typeid == 3) game = "trx_wingo3";
  if (typeid == 5) game = "trx_wingo5";
  if (typeid == 10) game = "trx_wingo10";

  const [user] = await connection.query(
    "SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1",
    [auth],
  );
  const [trx_wingo_bets] = await connection.query(
    "SELECT * FROM trx_wingo_bets WHERE phone = ? AND game = ? ORDER BY id DESC LIMIT ?, ?",
    [user[0].phone, game, Number(pageno), Number(pageto)],
  );
  const [trx_wingo_betsAll] = await connection.query(
    "SELECT COUNT(*) as bet_length FROM trx_wingo_bets WHERE phone = ? AND game = ? ORDER BY id DESC",
    [user[0].phone, game],
  );

  if (!trx_wingo_bets[0]) {
    return res.status(200).json({
      code: 0,
      msg: "No more data",
      data: {
        gameslist: [],
      },
      page: 1,
      status: false,
    });
  }
  if (!pageno || !pageto || !user[0] || !trx_wingo_bets[0]) {
    return res.status(200).json({
      message: "Error!",
      status: true,
    });
  }

  let page = Math.ceil(trx_wingo_betsAll[0].bet_length / 10);

  let datas = trx_wingo_bets.map((data) => {
    let { id, phone, code, invite, level, game, ...others } = data;
    return others;
  });

  return res.status(200).json({
    code: 0,
    msg: "Receive success",
    data: {
      gameslist: datas,
    },
    page: page,
    status: true,
  });
};

function minutesPassedSince(time) {
  const inputTime = moment(time);
  const minutesDiff = moment().diff(inputTime, "minutes");
  return minutesDiff;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const generateResultByHash = (hash) => {
  const hashItemList = hash.split("");

  let Result = "";
  for (let index = 0; index < hashItemList.length; index++) {
    const hashItem = hashItemList[hashItemList.length - 1 - index];

    const NUMBER_LIST = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const isNumber = NUMBER_LIST.includes(hashItem);
    if (isNumber) {
      Result = hashItem;
      break;
    }
  }

  return Result;
};

function getNthMinuteSinceDayStart() {
  const now = moment();
  const startOfDay = moment().startOf("day");
  const diff = now.diff(startOfDay, "minutes");
  return diff;
}

const addTrxWingo = async (game) => {
  try {
    let gameJoin = TRX_WINGO_GAME_TYPE_MAP[`MIN_${game}`];

    console.log(`Ensuring Active Period Exists for: ${gameJoin}`);

    const [trxWingoNow] = await connection.query(
      "SELECT period FROM trx_wingo_game WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1",
      [gameJoin]
    );

    if (trxWingoNow.length === 0) {
      console.log("No Active Period Found! Creating New Game Period...");
      let timeNow = Date.now();
      let period = moment(timeNow).format("YYYYMMDDHHmmss");

      await connection.query(
        "INSERT INTO trx_wingo_game SET period = ?, result = 0, game = ?, status = 0, block_id = 0, block_time = '', hash = '', time = ?",
        [period, gameJoin, timeNow]
      );

      console.log("New Game Period Created Successfully!");
    } else {
      console.log("Active Game Period Found:", trxWingoNow[0].period);
    }
  } catch (error) {
    console.error("Error in addTrxWingo:", error);
  }
};

const handlingTrxWingo1P = async (typeid) => {
  try {
    let game = "";
    if (typeid == 1) game = "trx_wingo";
    if (typeid == 3) game = "trx_wingo3";
    if (typeid == 5) game = "trx_wingo5";
    if (typeid == 10) game = "trx_wingo10";

    const [trxWingoNow] = await connection.query(
      "SELECT * FROM trx_wingo_game WHERE status = 1 AND release_status = 1 AND game = ? ORDER BY id DESC LIMIT 1",
      [game],
    );

    if (trxWingoNow.length === 0) {
      return;
    }

    // update ket qua
    await connection.query(
      "UPDATE trx_wingo_bets SET result = ? WHERE status = 0 AND game = ?",
      [trxWingoNow[0].result, game],
    );

    let result = Number(trxWingoNow[0].result);
    switch (result) {
      case 0:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "0", "t")',
          [game],
        );
        break;
      case 1:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "1")',
          [game],
        );
        break;
      case 2:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "2")',
          [game],
        );
        break;
      case 3:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "3")',
          [game],
        );
        break;
      case 4:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "4")',
          [game],
        );
        break;
      case 5:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "5", "t")',
          [game],
        );
        break;
      case 6:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "6")',
          [game],
        );
        break;
      case 7:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "7")',
          [game],
        );
        break;
      case 8:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "8")',
          [game],
        );
        break;
      case 9:
        await connection.query(
          'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "9")',
          [game],
        );
        break;
      default:
        break;
    }

    if (result < 5) {
      await connection.query(
        'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet = "l"',
        [game],
      );
    } else {
      await connection.query(
        'UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet = "n"',
        [game],
      );
    }

    // lấy ra danh sách đặt cược chưa xử lý
    const [order] = await connection.query(
      "SELECT * FROM trx_wingo_bets WHERE status = 0 AND game = ?",
      [game],
    );
    for (let i = 0; i < order.length; i++) {
      let orders = order[i];
      let result = orders.result;
      let bet = orders.bet;
      let total = orders.money;
      let id = orders.id;
      let phone = orders.phone;
      var nhan_duoc = 0;
      // x - green
      // t - Violet
      // d - red

      // Sirf 1-4 aur 6-9 tk hi *9 aana chahiye
      // Aur 0 aur 5 pe *4.5
      // Aur red aur green pe *2
      // 1,2,3,4,6,7,8,9

      if (bet == "l" || bet == "n") {
        nhan_duoc = total * 2;
      } else {
        if (result == 0 || result == 5) {
          if (bet == "d" || bet == "x") {
            nhan_duoc = total * 1.5;
          } else if (bet == "t") {
            nhan_duoc = total * 4.5;
          } else if (bet == "0" || bet == "5") {
            nhan_duoc = total * 4.5;
          }
        } else {
          if (result == 1 && bet == "1") {
            nhan_duoc = total * 9;
          } else {
            if (result == 1 && bet == "x") {
              nhan_duoc = total * 2;
            }
          }
          if (result == 2 && bet == "2") {
            nhan_duoc = total * 9;
          } else {
            if (result == 2 && bet == "d") {
              nhan_duoc = total * 2;
            }
          }
          if (result == 3 && bet == "3") {
            nhan_duoc = total * 9;
          } else {
            if (result == 3 && bet == "x") {
              nhan_duoc = total * 2;
            }
          }
          if (result == 4 && bet == "4") {
            nhan_duoc = total * 9;
          } else {
            if (result == 4 && bet == "d") {
              nhan_duoc = total * 2;
            }
          }
          if (result == 6 && bet == "6") {
            nhan_duoc = total * 9;
          } else {
            if (result == 6 && bet == "d") {
              nhan_duoc = total * 2;
            }
          }
          if (result == 7 && bet == "7") {
            nhan_duoc = total * 9;
          } else {
            if (result == 7 && bet == "x") {
              nhan_duoc = total * 2;
            }
          }
          if (result == 8 && bet == "8") {
            nhan_duoc = total * 9;
          } else {
            if (result == 8 && bet == "d") {
              nhan_duoc = total * 2;
            }
          }
          if (result == 9 && bet == "9") {
            nhan_duoc = total * 9;
          } else {
            if (result == 9 && bet == "x") {
              nhan_duoc = total * 2;
            }
          }
        }
      }
      const [users] = await connection.query(
        "SELECT `money` FROM `users` WHERE `phone` = ?",
        [phone],
      );
      let totals = parseFloat(users[0].money) + parseFloat(nhan_duoc);
      await connection.query(
        "UPDATE `trx_wingo_bets` SET `get` = ?, `status` = 1 WHERE `id` = ?",
        [parseFloat(nhan_duoc), id],
      );
      const sql = "UPDATE `users` SET `money` = ? WHERE `phone` = ?";
      await connection.query(sql, [totals, phone]);
    }

    await connection.query(
      "UPDATE trx_wingo_game SET release_status = 2 WHERE period = ? AND game = ?",
      [trxWingoNow[0].period, game],
    );
  } catch (error) {
    console.log(error);
  }
};

const trxWingoController = {
  trxWingoPage,
  betTrxWingo,
  listOrderOld,
  GetMyEmerdList,
  handlingTrxWingo1P,
  addTrxWingo,
  trxWingoPage3,
  trxWingoPage5,
  trxWingoPage10,
  trxWingoBlockPage,
};

export default trxWingoController;
