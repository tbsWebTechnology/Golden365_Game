import connection from "../config/connectDB.js";
import md5 from "md5";
import request from "request";
import axios from "axios";
import { REWARD_TYPES_MAP } from "../constants/reward_types.js";
import { getDayTime } from "../helpers/games.js";

let timeNow = Date.now();

const randomNumber = (min, max) => {
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};

const verifyCode = async (req, res) => {
  let auth = req.cookies.auth;
  let now = new Date().getTime();
  let timeEnd = +new Date() + 1000 * (60 * 2 + 0) + 500;
  let otp = randomNumber(100000, 999999);

  conswit[rows] = await connection.query(
    "SELECT * FROM users WHERE `token` = ? ",
    [auth],
  );
  if (!rows) {
    return res.status(200).json({
      message: "Account does not exist",
      status: false,
      timeStamp: timeNow,
    });
  }
  let user = rows[0];
  if (user.time_otp - now <= 0) {
    request(
      `http://47.243.168.18:9090/sms/batch/v2?appkey=NFJKdK&appsecret=brwkTw&phone=84${user.phone}&msg=Your verification code is ${otp}&extend=${now}`,
      async (error, response, body) => {
        let data = JSON.parse(body);
        if (data.code == "00000") {
          await connection.execute(
            "UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ",
            [otp, timeEnd, user.phone],
          );
          return res.status(200).json({
            message: "Submitted successfully",
            status: true,
            timeStamp: timeNow,
            timeEnd: timeEnd,
          });
        }
      },
    );
  } else {
    return res.status(200).json({
      message: "Send SMS regularly.",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const aviator = async (req, res) => {
  let auth = req.cookies.auth;
  res.redirect(
    `https://jetx.asia/theninja/src/api/userapi.php?action=loginandregisterbyauth&token=${auth}`,
  );
};

const userInfo = async (req, res) => {
  let auth = req.cookies.auth;

  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }

  const [rows] = await connection.query(
    "SELECT * FROM users WHERE `token` = ?",
    [auth]
  );

  if (!rows || rows.length === 0) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }

  const [recharge] = await connection.query(
    "SELECT * FROM recharge WHERE `phone` = ? AND status = 1",
    [rows[0].phone]
  );

  let totalRecharge = 0;
  recharge.forEach((data) => {
    totalRecharge += data.money;
  });

  // Check if it's the user's first recharge
  const isFirstRecharge = recharge.length === 0;

  const [withdraw] = await connection.query(
    "SELECT * FROM withdraw WHERE `phone` = ? AND status = 1",
    [rows[0].phone]
  );

  let totalWithdraw = 0;
  withdraw.forEach((data) => {
    totalWithdraw += data.money;
  });

  const { id, password, ip, veri, ip_address, status, time, token, ...others } =
    rows[0];

  return res.status(200).json({
    message: "Success",
    status: true,
    data: {
      code: others.code,
      id_user: others.id_user,
      name_user: others.name_user,
      phone_user: others.phone,
      money_user: others.money,
      bonus_money: others.bonus_money,
      third_party_money: others.third_party_money,
      safe_bonus: others.safe_bonus,
      avatar: others.avatar,
      level: others.level,
      total_withdraw: totalWithdraw,
      total_recharge: totalRecharge,
      vip_level: others.vip_level,
      isFirstRecharge: isFirstRecharge, // New flag to indicate the first recharge
    },
    totalRecharge: totalRecharge,
    totalWithdraw: totalWithdraw,
    timeStamp: timeNow,
  });
};


const changeUser = async (req, res) => {
  let auth = req.cookies.auth;
  let name = req.body.name;
  let type = req.body.type;

  const [rows] = await connection.query(
    "SELECT * FROM users WHERE `token` = ? ",
    [auth],
  );
  if (!rows || !type || !name)
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  switch (type) {
    case "editname":
      await connection.query(
        "UPDATE users SET name_user = ? WHERE `token` = ? ",
        [name, auth],
      );
      return res.status(200).json({
        message: "Username modification successful",
        status: true,
        timeStamp: timeNow,
      });
      break;

    default:
      return res.status(200).json({
        message: "Failed",
        status: false,
        timeStamp: timeNow,
      });
      break;
  }
};

const changePassword = async (req, res) => {
  let auth = req.cookies.auth;
  let password = req.body.password;
  let newPassWord = req.body.newPassWord;
  // let otp = req.body.otp;

  if (!password || !newPassWord)
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  const [rows] = await connection.query(
    "SELECT * FROM users WHERE `token` = ? AND `password` = ? ",
    [auth, md5(password)],
  );
  if (rows.length == 0)
    return res.status(200).json({
      message: "Incorrect password",
      status: false,
      timeStamp: timeNow,
    });

  
    

  await connection.query(
    "UPDATE users SET otp = ?, password = ?, plain_password = ? WHERE `token` = ? ",
    [randomNumber(100000, 999999), md5(newPassWord), newPassWord, auth],
  );
  return res.status(200).json({
    message: "Password modification successful",
    status: true,
    timeStamp: timeNow,
  });
};

const checkInHandling = async (req, res) => {
  let auth = req.cookies.auth;
  let data = req.body.data;

  if (!auth)
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  const [rows] = await connection.query(
    "SELECT * FROM users WHERE `token` = ? ",
    [auth],
  );
  if (!rows)
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  if (!data) {
    const [point_list] = await connection.query(
      "SELECT * FROM point_list WHERE `phone` = ? ",
      [rows[0].phone],
    );
    return res.status(200).json({
      message: "No More Data",
      datas: point_list,
      status: true,
      timeStamp: timeNow,
    });
  }
  if (data) {
    if (data == 1) {
      const [point_lists] = await connection.query(
        "SELECT * FROM point_list WHERE `phone` = ? ",
        [rows[0].phone],
      );
      let check = rows[0].money;
      let point_list = point_lists[0];
      let get = 300;
      if (check >= data && point_list.total1 != 0) {
        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ? ",
          [point_list.total1, rows[0].phone],
        );
        await connection.query(
          "UPDATE point_list SET total1 = ? WHERE phone = ? ",
          [0, rows[0].phone],
        );
        return res.status(200).json({
          message: `You just received ₹ ${point_list.total1}.00`,
          status: true,
          timeStamp: timeNow,
        });
      } else if (check < get && point_list.total1 != 0) {
        return res.status(200).json({
          message: "Please Recharge ₹ 300 to claim gift.",
          status: false,
          timeStamp: timeNow,
        });
      } else if (point_list.total1 == 0) {
        return res.status(200).json({
          message: "You have already received this gift",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
    if (data == 2) {
      const [point_lists] = await connection.query(
        "SELECT * FROM point_list WHERE `phone` = ? ",
        [rows[0].phone],
      );
      let check = rows[0].money;
      let point_list = point_lists[0];
      let get = 3000;
      if (check >= get && point_list.total2 != 0) {
        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ? ",
          [point_list.total2, rows[0].phone],
        );
        await connection.query(
          "UPDATE point_list SET total2 = ? WHERE phone = ? ",
          [0, rows[0].phone],
        );
        return res.status(200).json({
          message: `You just received ₹ ${point_list.total2}.00`,
          status: true,
          timeStamp: timeNow,
        });
      } else if (check < get && point_list.total2 != 0) {
        return res.status(200).json({
          message: "Please Recharge ₹ 3000 to claim gift.",
          status: false,
          timeStamp: timeNow,
        });
      } else if (point_list.total2 == 0) {
        return res.status(200).json({
          message: "You have already received this gift",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
    if (data == 3) {
      const [point_lists] = await connection.query(
        "SELECT * FROM point_list WHERE `phone` = ? ",
        [rows[0].phone],
      );
      let check = rows[0].money;
      let point_list = point_lists[0];
      let get = 6000;
      if (check >= get && point_list.total3 != 0) {
        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ? ",
          [point_list.total3, rows[0].phone],
        );
        await connection.query(
          "UPDATE point_list SET total3 = ? WHERE phone = ? ",
          [0, rows[0].phone],
        );
        return res.status(200).json({
          message: `You just received ₹ ${point_list.total3}.00`,
          status: true,
          timeStamp: timeNow,
        });
      } else if (check < get && point_list.total3 != 0) {
        return res.status(200).json({
          message: "Please Recharge ₹ 6000 to claim gift.",
          status: false,
          timeStamp: timeNow,
        });
      } else if (point_list.total3 == 0) {
        return res.status(200).json({
          message: "You have already received this gift",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
    if (data == 4) {
      const [point_lists] = await connection.query(
        "SELECT * FROM point_list WHERE `phone` = ? ",
        [rows[0].phone],
      );
      let check = rows[0].money;
      let point_list = point_lists[0];
      let get = 12000;
      if (check >= get && point_list.total4 != 0) {
        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ? ",
          [point_list.total4, rows[0].phone],
        );
        await connection.query(
          "UPDATE point_list SET total4 = ? WHERE phone = ? ",
          [0, rows[0].phone],
        );
        return res.status(200).json({
          message: `You just received ₹ ${point_list.total4}.00`,
          status: true,
          timeStamp: timeNow,
        });
      } else if (check < get && point_list.total4 != 0) {
        return res.status(200).json({
          message: "Please Recharge ₹ 12000 to claim gift.",
          status: false,
          timeStamp: timeNow,
        });
      } else if (point_list.total4 == 0) {
        return res.status(200).json({
          message: "You have already received this gift",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
    if (data == 5) {
      const [point_lists] = await connection.query(
        "SELECT * FROM point_list WHERE `phone` = ? ",
        [rows[0].phone],
      );
      let check = rows[0].money;
      let point_list = point_lists[0];
      let get = 28000;
      if (check >= get && point_list.total5 != 0) {
        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ? ",
          [point_list.total5, rows[0].phone],
        );
        await connection.query(
          "UPDATE point_list SET total5 = ? WHERE phone = ? ",
          [0, rows[0].phone],
        );
        return res.status(200).json({
          message: `You just received ₹ ${point_list.total5}.00`,
          status: true,
          timeStamp: timeNow,
        });
      } else if (check < get && point_list.total5 != 0) {
        return res.status(200).json({
          message: "Please Recharge ₹ 28000 to claim gift.",
          status: false,
          timeStamp: timeNow,
        });
      } else if (point_list.total5 == 0) {
        return res.status(200).json({
          message: "You have already received this gift",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
    if (data == 6) {
      const [point_lists] = await connection.query(
        "SELECT * FROM point_list WHERE `phone` = ? ",
        [rows[0].phone],
      );
      let check = rows[0].money;
      let point_list = point_lists[0];
      let get = 100000;
      if (check >= get && point_list.total6 != 0) {
        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ? ",
          [point_list.total6, rows[0].phone],
        );
        await connection.query(
          "UPDATE point_list SET total6 = ? WHERE phone = ? ",
          [0, rows[0].phone],
        );
        return res.status(200).json({
          message: `You just received ₹ ${point_list.total6}.00`,
          status: true,
          timeStamp: timeNow,
        });
      } else if (check < get && point_list.total6 != 0) {
        return res.status(200).json({
          message: "Please Recharge ₹ 100000 to claim gift.",
          status: false,
          timeStamp: timeNow,
        });
      } else if (point_list.total6 == 0) {
        return res.status(200).json({
          message: "You have already received this gift",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
    if (data == 7) {
      const [point_lists] = await connection.query(
        "SELECT * FROM point_list WHERE `phone` = ? ",
        [rows[0].phone],
      );
      let check = rows[0].money;
      let point_list = point_lists[0];
      let get = 200000;
      if (check >= get && point_list.total7 != 0) {
        await connection.query(
          "UPDATE users SET money = money + ? WHERE phone = ? ",
          [point_list.total7, rows[0].phone],
        );
        await connection.query(
          "UPDATE point_list SET total7 = ? WHERE phone = ? ",
          [0, rows[0].phone],
        );
        return res.status(200).json({
          message: `You just received ₹ ${point_list.total7}.00`,
          status: true,
          timeStamp: timeNow,
        });
      } else if (check < get && point_list.total7 != 0) {
        return res.status(200).json({
          message: "Please Recharge ₹200000 to claim gift.",
          status: false,
          timeStamp: timeNow,
        });
      } else if (point_list.total7 == 0) {
        return res.status(200).json({
          message: "You have already received this gift",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
  }
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

const promotion = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }

  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite`, `roses_f`, `roses_f1`, `roses_today` FROM users WHERE `token` = ? ",
    [auth],
  );
  const [level] = await connection.query("SELECT * FROM level");

  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }

  let userInfo = user[0];

  // Directly referred level-1 users
  const [f1s] = await connection.query(
    "SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ",
    [userInfo.code],
  );

  // Directly referred users today
  let f1_today = 0;
  for (let i = 0; i < f1s.length; i++) {
    const f1_time = f1s[i].time;
    let check = timerJoin(f1_time) == timerJoin() ? true : false;
    if (check) {
      f1_today += 1;
    }
  }

  // All direct referrals today
  let f_all_today = 0;
  for (let i = 0; i < f1s.length; i++) {
    const f1_code = f1s[i].code;
    const f1_time = f1s[i].time;
    let check_f1 = timerJoin(f1_time) == timerJoin() ? true : false;
    if (check_f1) f_all_today += 1;

    // Total level-2 referrals today
    const [f2s] = await connection.query(
      "SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ",
      [f1_code],
    );
    for (let i = 0; i < f2s.length; i++) {
      const f2_code = f2s[i].code;
      const f2_time = f2s[i].time;
      let check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
      if (check_f2) f_all_today += 1;

      // Total level-3 referrals today
      const [f3s] = await connection.query(
        "SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ",
        [f2_code],
      );
      for (let i = 0; i < f3s.length; i++) {
        const f3_code = f3s[i].code;
        const f3_time = f3s[i].time;
        let check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
        if (check_f3) f_all_today += 1;

        // Total level-4 referrals today
        const [f4s] = await connection.query(
          "SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ",
          [f3_code],
        );
        for (let i = 0; i < f4s.length; i++) {
          const f4_code = f4s[i].code;
          const f4_time = f4s[i].time;
          let check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
          if (check_f4) f_all_today += 1;
        }
      }
    }
  }

  // Total level-2 referrals
  let f2 = 0;
  for (let i = 0; i < f1s.length; i++) {
    const f1_code = f1s[i].code;
    const [f2s] = await connection.query(
      "SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ",
      [f1_code],
    );
    f2 += f2s.length;
  }

  // Total level-3 referrals
  let f3 = 0;
  for (let i = 0; i < f1s.length; i++) {
    const f1_code = f1s[i].code;
    const [f2s] = await connection.query(
      "SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ",
      [f1_code],
    );
    for (let i = 0; i < f2s.length; i++) {
      const f2_code = f2s[i].code;
      const [f3s] = await connection.query(
        "SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ",
        [f2_code],
      );
      if (f3s.length > 0) f3 += f3s.length;
    }
  }

  // Total level-4 referrals
  let f4 = 0;
  for (let i = 0; i < f1s.length; i++) {
    const f1_code = f1s[i].code;
    const [f2s] = await connection.query(
      "SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ",
      [f1_code],
    );
    for (let i = 0; i < f2s.length; i++) {
      const f2_code = f2s[i].code;
      const [f3s] = await connection.query(
        "SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ",
        [f2_code],
      );
      for (let i = 0; i < f3s.length; i++) {
        const f3_code = f3s[i].code;
        const [f4s] = await connection.query(
          "SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ",
          [f3_code],
        );
        if (f4s.length > 0) f4 += f4s.length;
      }
    }
  }

  let selectedData = [];

  async function fetchInvitesByCode(code, depth = 1) {
    if (depth > 6) {
      return;
    }

    const [inviteData] = await connection.query(
      "SELECT `id_user`,`name_user`,`phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE `invite` = ?",
      [code],
    );

    if (inviteData.length > 0) {
      for (const invite of inviteData) {
        selectedData.push(invite);
        await fetchInvitesByCode(invite.code, depth + 1);
      }
    }
  }

  if (f1s.length > 0) {
    for (const initialInfoF1 of f1s) {
      selectedData.push(initialInfoF1);
      await fetchInvitesByCode(initialInfoF1.code);
    }
  }

  const rosesF1 = parseFloat(userInfo.roses_f);
  const rosesAll = parseFloat(userInfo.roses_f1);
  let rosesAdd = rosesF1 + rosesAll;

  return res.status(200).json({
    message: "Receive success",
    level: level,
    info: user,
    status: true,
    invite: {
      f1: f1s.length,
      total_f: selectedData.length,
      f1_today: f1_today,
      f_all_today: f_all_today,
      roses_f1: userInfo.roses_f1,
      roses_f: userInfo.roses_f,
      roses_all: rosesAdd,
      roses_today: userInfo.roses_today,
    },
    timeStamp: timeNow,
  });
};

const myTeam = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  const [level] = await connection.query("SELECT * FROM level");
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  return res.status(200).json({
    message: "Receive success",
    level: level,
    info: user,
    status: true,
    timeStamp: timeNow,
  });
};

const listMyTeam = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  let userInfo = user[0];
  const [f1] = await connection.query(
    "SELECT `id_user`, `phone`, `code`, `invite`,`roses_f`, `rank`, `name_user`,`status`,`total_money`, `time` FROM users WHERE `invite` = ? ORDER BY id DESC",
    [userInfo.code],
  );
  const [mem] = await connection.query(
    "SELECT `id_user`, `phone`, `time` FROM users WHERE `invite` = ? ORDER BY id DESC LIMIT 100",
    [userInfo.code],
  );
  const [total_roses] = await connection.query(
    "SELECT `f1`,`invite`, `code`,`phone`,`time` FROM roses WHERE `invite` = ? ORDER BY id DESC LIMIT 100",
    [userInfo.code],
  );

  const selectedData = [];

  async function fetchUserDataByCode(code, depth = 1) {
    if (depth > 6) {
      return;
    }

    const [userData] = await connection.query(
      "SELECT `id_user`, `name_user`, `phone`, `code`, `invite`, `rank`, `total_money` FROM users WHERE `invite` = ?",
      [code],
    );
    if (userData.length > 0) {
      for (const user of userData) {
        const [turnoverData] = await connection.query(
          "SELECT `phone`, `daily_turn_over`, `total_turn_over` FROM turn_over WHERE `phone` = ?",
          [user.phone],
        );
        const [inviteCountData] = await connection.query(
          "SELECT COUNT(*) as invite_count FROM users WHERE `invite` = ?",
          [user.code],
        );
        const inviteCount = inviteCountData[0].invite_count;

        const userObject = {
          ...user,
          invite_count: inviteCount,
          user_level: depth,
          daily_turn_over: turnoverData[0]?.daily_turn_over || 0,
          total_turn_over: turnoverData[0]?.total_turn_over || 0,
        };

        selectedData.push(userObject);
        await fetchUserDataByCode(user.code, depth + 1);
      }
    }
  }

  await fetchUserDataByCode(userInfo.code);

  let newMem = [];
  mem.map((data) => {
    let objectMem = {
      id_user: data.id_user,
      phone:
        "+91" + data.phone,
      time: data.time,
    };

    return newMem.push(objectMem);
  });
  return res.status(200).json({
    message: "Receive success",
    f1: selectedData,
    f1_direct: f1,
    mem: newMem,
    total_roses: total_roses,
    status: true,
    timeStamp: timeNow,
  });
};
const wowpay = async (req, res) => {
  let auth = req.cookies.auth;
  let money = req.body.money;

  // Fetching the user's mobile number from the database using auth token

  // Your existing controller code here
};

const recharge = async (req, res) => {
  let auth = req.cookies.auth;
  let money = req.body.money;
  let type = req.body.type;
  let typeid = req.body.typeid;

  const minimumMoney = process.env.MINIMUM_MONEY_INR;

  if (type != "cancel") {
    if (!auth || !money || money < minimumMoney - 1) {
      return res.status(200).json({
        message: "Failed",
        status: false,
        timeStamp: timeNow,
      });
    }
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  if (type == "cancel") {
    await connection.query(
      "UPDATE recharge SET status = 2 WHERE phone = ? AND id_order = ? AND status = ? ",
      [userInfo.phone, typeid, 0],
    );
    return res.status(200).json({
      message: "Cancelled order successfully",
      status: true,
      timeStamp: timeNow,
    });
  }
  const [recharge] = await connection.query(
    "SELECT * FROM recharge WHERE phone = ? AND status = ? ",
    [userInfo.phone, 0],
  );

  if (recharge.length == 0) {
    let time = new Date().getTime();
    const date = new Date();
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
    let checkTime = timerJoin(time);
    let id_time =
      date.getUTCFullYear() +
      "" +
      date.getUTCMonth() +
      1 +
      "" +
      date.getUTCDate();
    let id_order =
      Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) +
      10000000000000;
    // let vat = Math.floor(Math.random() * (2000 - 0 + 1) ) + 0;

    money = Number(money);
    let client_transaction_id = id_time + id_order;
    const formData = {
      username: process.env.accountBank,
      secret_key: process.env.secret_key,
      client_transaction: client_transaction_id,
      amount: money,
    };

    if (type == "momo") {
      const sql = `INSERT INTO recharge SET 
            id_order = ?,
            transaction_id = ?,
            phone = ?,
            money = ?,
            type = ?,
            status = ?,
            today = ?,
            url = ?,
            time = ?`;
      await connection.execute(sql, [
        client_transaction_id,
        "NULL",
        userInfo.phone,
        money,
        type,
        0,
        checkTime,
        "NULL",
        time,
      ]);
      const [recharge] = await connection.query(
        "SELECT * FROM recharge WHERE phone = ? AND status = ? ",
        [userInfo.phone, 0],
      );
      return res.status(200).json({
        message: "Received successfully",
        datas: recharge[0],
        status: true,
        timeStamp: timeNow,
      });
    }

    const moneyString = money.toString();

    const apiData = {
      key: "60a9ca13-6929-4e40-b687-ff7293e61dce",
      client_txn_id: client_transaction_id,
      amount: moneyString,
      p_info: "WINGO PAYMENT",
      customer_name: userInfo.name_user,
      customer_email: "manas.xdr@gmail.com",
      customer_mobile: userInfo.phone,
      redirect_url: `https://bharatgames.site/wallet/verify/upi`,
      udf1: "Indnclub",
    };

    try {
      const apiResponse = await axios.post(
        "https://api.ekqr.in/api/create_order",
        apiData,
      );

      if (apiResponse.data.status == true) {
        const sql = `INSERT INTO recharge SET 
                id_order = ?,
                transaction_id = ?,
                phone = ?,
                money = ?,
                type = ?,
                status = ?,
                today = ?,
                url = ?,
                time = ?`;

        await connection.execute(sql, [
          client_transaction_id,
          "0",
          userInfo.phone,
          money,
          type,
          0,
          checkTime,
          "0",
          timeNow,
        ]);

        const [recharge] = await connection.query(
          "SELECT * FROM recharge WHERE phone = ? AND status = ? ",
          [userInfo.phone, 0],
        );

        return res.status(200).json({
          message: "Received successfully",
          datas: recharge[0],
          payment_url: apiResponse.data.data.payment_url,
          status: true,
          timeStamp: timeNow,
        });
      } else {
        return res
          .status(500)
          .json({ message: "Failed to create order", status: false });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "API request failed", status: false });
    }
  } else {
    return res.status(200).json({
      message: "Received successfully",
      datas: recharge[0],
      status: true,
      timeStamp: timeNow,
    });
  }
};

const cancelRecharge = async (req, res) => {
  try {
    let auth = req.cookies.auth;

    if (!auth) {
      return res.status(200).json({
        message: "Authorization is required to access this API!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const [user] = await connection.query(
      "SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `token` = ? ",
      [auth],
    );

    if (!user) {
      return res.status(200).json({
        message: "Authorization is required to access this API!",
        status: false,
        timeStamp: timeNow,
      });
    }

    let userInfo = user[0];

    const result = await connection.query(
      "DELETE FROM recharge WHERE phone = ? AND status = ?",
      [userInfo.phone, 0],
    );

    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: "All the pending recharges has been deleted successfully!",
        status: true,
        timeStamp: timeNow,
      });
    } else {
      return res.status(200).json({
        message:
          "There was no pending recharges for this user or delete operation has been failed!",
        status: true,
        timeStamp: timeNow,
      });
    }
  } catch (error) {
    console.error("API error: ", error);
    return res.status(500).json({
      message: "API Request failed!",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const addBank = async (req, res) => {
  let timeNow = Date.now();
  try {
    let auth = req.cookies.auth;
    // let name_bank = req.body.name_bank
    // let name_user = req.body.name_user
    // let stk = req.body.stk
    // let email = req.body.email
    // let sdt = req.body.sdt
    // let tinh = req.body.tinh

    let bankName = req.body.bankName;
    let recipientName = req.body.recipientName;
    let bankAccountNumber = req.body.bankAccountNumber;
    let phoneNumber = req.body.phoneNumber;
    let IFSC = req.body.IFSC;
    let upiId = req.body.upiId;

    let time = new Date().getTime();

    if (!auth || !name_bank || !name_user || !stk || !email || !stk || !tinh) {
      return res.status(200).json({
        message: "Failed",
        status: false,
        timeStamp: timeNow,
      });
    }

    const [user] = await connection.query(
      "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
      [auth],
    );
    let userInfo = user[0];
    if (!user) {
      return res.status(200).json({
        message: "Failed",
        status: false,
        timeStamp: timeNow,
      });
    }

    const [user_bank] = await connection.query(
      "SELECT * FROM user_bank WHERE tinh = ? ",
      [tinh],
    );
    const [user_bank2] = await connection.query(
      "SELECT * FROM user_bank WHERE phone = ? ",
      [userInfo.phone],
    );
    if (user_bank.length == 0 && user_bank2.length == 0) {
      const sql = `INSERT INTO user_bank SET 
        phone = ?,
        name_bank = ?,
        name_user = ?,
        stk = ?,
        email = ?,
        sdt = ?,
        tinh = ?,
        time = ?`;
      await connection.execute(sql, [
        userInfo.phone,
        name_bank,
        name_user,
        stk,
        email,
        sdt,
        tinh,
        time,
      ]);
      return res.status(200).json({
        message: "Successfully added bank",
        status: true,
        timeStamp: timeNow,
      });
    } else if (user_bank.length == 0) {
      await connection.query("UPDATE user_bank SET tinh = ? WHERE phone = ? ", [
        tinh,
        userInfo.phone,
      ]);
      return res.status(200).json({
        message: "KYC Already Done",
        status: false,
        timeStamp: timeNow,
      });
    } else if (user_bank2.length > 0) {
      await connection.query(
        "UPDATE user_bank SET name_bank = ?, name_user = ?, stk = ?, email = ?, sdt = ?, tinh = ?, time = ? WHERE phone = ?",
        [name_bank, name_user, stk, email, sdt, tinh, time, userInfo.phone],
      );
      return res.status(200).json({
        message: "your account is updated",
        status: false,
        timeStamp: timeNow,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "",
      status: false,
      timeStamp: timeNow,
    });
  }
};




const infoUserBank = async (req, res) => {
  let auth = req.cookies.auth;
  try {
    if (!auth) {
      return res.status(200).json({
        message: "Failed",
        status: false,
        timeStamp: timeNow,
      });
    }
    const [user] = await connection.query(
      "SELECT * FROM users WHERE `token` = ? ",
      [auth],
    );

    if (!user) {
      return res.status(200).json({
        message: "Failed",
        status: false,
        timeStamp: timeNow,
      });
    }

    let timeNow = Date.now();
    const userInfo = user[0];

    // *****************************************LAST RECHARGE BET TIME*****************************************
    const [lastRecharge] = await connection.query(
      `SELECT * FROM recharge WHERE phone = '${userInfo.phone}' AND status = 1 ORDER BY time_remaining_bet DESC LIMIT 1`,
    );
    let lastRechargeRemainingBet =
      lastRecharge.length === 0
        ? 0
        : Number(lastRecharge[0].remaining_bet) || 0;

    // *****************************************WHEN BET RESET TIME*****************************************
    const [lastBetResetTime] = await connection.query(
      `SELECT time_remaining_bet FROM recharge WHERE phone = '${userInfo.phone}' AND status = 1 AND remaining_bet = 0 ORDER BY time_remaining_bet DESC LIMIT 1`,
    );
    const lastBetResetTimeRemainingBet = lastBetResetTime.length > 0 ? lastBetResetTime[0] : { time_remaining_bet: null };
    const betTimeInterval =
      !lastBetResetTimeRemainingBet.time_remaining_bet
        ? ""
        : `AND time > ${lastBetResetTime[0].time_remaining_bet}`;

    // *****************************************GIFT CARD USED AFTER THE LAST RECHARGE TIME*****************************************
    const [giftCardUsed] = await connection.query(
      `SELECT SUM(money) AS giftCardTotalAmount FROM redenvelopes_used WHERE phone_used = '${userInfo.phone}' ${betTimeInterval}`,
    );
    const giftCardTotalAmount =
      Number(giftCardUsed[0].giftCardTotalAmount) || 0;

    const specificRewardTypes = [
      REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS,
      REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS,
      REWARD_TYPES_MAP.FIRST_RECHARGE_AGENT_BONUS,
      REWARD_TYPES_MAP.DAILY_RECHARGE_AGENT_BONUS,
      REWARD_TYPES_MAP.WELCOME_BONUS,
      REWARD_TYPES_MAP.INVITER_BONUS,
      REWARD_TYPES_MAP.REFUND_AMOUNT,
      REWARD_TYPES_MAP.WALLET_TRANSFER,
    ];

    const rewardTypesString = specificRewardTypes
      .map((type) => `'${type}'`)
      .join(", ");

    const [claimRewards] = await connection.query(
      `
         SELECT SUM(amount) AS totalClaimRewards 
         FROM claimed_rewards 
         WHERE phone = ? 
         AND type IN (${rewardTypesString})
         ${betTimeInterval}
         `,
      [userInfo.phone],
    );

    const totalClaimRewards = Number(claimRewards[0].totalClaimRewards) || 0;

    // *****************************************BET LOSS CALCULATIONS*****************************************
    const [wingoLossResult] = await connection.query(
      `SELECT SUM(money) AS totalMoney,SUM(fee) AS totalFees FROM minutes_1 WHERE phone = '${userInfo.phone}' ${betTimeInterval}`,
    );
    const wingoLossMoney =
      parseFloat(wingoLossResult[0].totalMoney) +
      parseFloat(wingoLossResult[0].totalFees) || 0;

    const [k3LossResult] = await connection.query(
      `SELECT SUM(money) AS k3LossMoney FROM result_k3 WHERE phone = '${userInfo.phone}' ${betTimeInterval}`,
    );
    const k3LossMoney = Number(k3LossResult[0].k3LossMoney) || 0;

    const [G5LossResult] = await connection.query(
      `SELECT SUM(money) AS G5dLossMoney FROM result_5d WHERE phone = '${userInfo.phone}' ${betTimeInterval}`,
    );
    const G5dLossMoney = Number(G5LossResult[0].G5dLossMoney) || 0;

    const [trxWingoLossResult] = await connection.query(
      `SELECT SUM(money) AS trxWingoLossMoney FROM trx_wingo_bets WHERE phone = '${userInfo.phone}' ${betTimeInterval}`,
    );
    const trxWingoLossMoney =
      Number(trxWingoLossResult[0].trxWingoLossMoney) || 0;

    const [withdrawResult] = await connection.query(
      `SELECT SUM(money) AS totalWithdraw FROM withdraw WHERE phone = '${userInfo.phone}' AND status = 1`,
    );
    const totalWithdraw = Number(withdrawResult[0].totalWithdraw) || 0;

    const [withdrawPendingResult] = await connection.query(
      `SELECT SUM(money) AS totalWithdrawPending FROM withdraw WHERE phone = '${userInfo.phone}' AND status = 0`,
    );
    const totalWithdrawPending =
      Number(withdrawPendingResult[0].totalWithdrawPending) || 0;

    const totalLoss =
      wingoLossMoney + k3LossMoney + G5dLossMoney + trxWingoLossMoney;

    console.log("totalLoss", totalLoss);
    console.log("totalWithdraw", totalWithdraw);
    console.log("totalWithdrawPending", totalWithdrawPending);

    // *****************************************WITHDRAWAL CALCULATIONS*****************************************
    const calculation =
      lastRechargeRemainingBet +
      totalClaimRewards +
      giftCardTotalAmount -
      totalLoss;
    const totalBetAmountRemaining = calculation < 0 ? 0 : calculation;
    // console.log("lastRechargeId", lastRecharge[0].id)
    const allowedWithdrawAmount = totalBetAmountRemaining === 0;
    console.log(
      lastRechargeRemainingBet,
      totalClaimRewards,
      giftCardTotalAmount,
    );
    console.log(
      totalLoss,
      lastRechargeRemainingBet,
      allowedWithdrawAmount,
      calculation,
    );

    if (calculation < 0 && lastRecharge.length > 0) {
      await connection.query(
        `UPDATE recharge SET remaining_bet = 0, time_remaining_bet = ? WHERE id = ? AND status = 1`,
        [timeNow, lastRecharge[0].id],
      );
    }

    // Total bet amount remaining for withdrawal if not remaining bet allow it to withdraw

    return res.status(200).json({
      message: "Received successfully",
      userInfo: {
        code: user[0].code,
        id_user: user[0].id_user,
        name_user: user[0].name_user,
        phone_user: user[0].phone,
        money_user: user[0].money,
        bonus_money: user[0].bonus_money,
        avatar: user[0].avatar,
      },
      totalBetAmountRemaining,
      allowedWithdrawAmount,
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      status: false,
      timeStamp: timeNow,
    });
  }
};

const withdrawal3 = async (req, res) => {
  let auth = req.cookies.auth;
  let money = req.body.money;
  let password = req.body.password;
  if (!auth || !money || !password || money < 299) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite`, `money` FROM users WHERE `token` = ? AND password = ?",
    [auth, md5(password)],
  );

  if (user.length == 0) {
    return res.status(200).json({
      message: "incorrect password",
      status: false,
      timeStamp: timeNow,
    });
  }
  let userInfo = user[0];
  const date = new Date();
  let id_time =
    date.getUTCFullYear() +
    "" +
    date.getUTCMonth() +
    1 +
    "" +
    date.getUTCDate();
  let id_order =
    Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) +
    10000000000000;

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
  let dates = new Date().getTime();
  let checkTime = timerJoin(dates);
  const [recharge] = await connection.query(
    "SELECT * FROM recharge WHERE phone = ? AND status = 1",
    [userInfo.phone],
  );
  const [minutes_1] = await connection.query(
    "SELECT * FROM minutes_1 WHERE phone = ?",
    [userInfo.phone],
  );
  let total = 0;
  recharge.forEach((data) => {
    total += parseFloat(data.money);
  });
  let total2 = 0;
  minutes_1.forEach((data) => {
    total2 += parseFloat(data.money);
  });
  let result = 0;
  if (total - total2 > 0) result = total - total2;
  result = Math.max(result, 0);
  const [user_bank] = await connection.query(
    "SELECT * FROM user_bank WHERE `phone` = ?",
    [userInfo.phone],
  );
  const [withdraw] = await connection.query(
    "SELECT * FROM withdraw WHERE `phone` = ? AND today = ?",
    [userInfo.phone, checkTime],
  );
  if (user_bank.length != 0) {
    if (withdraw.length < 3) {
      if (userInfo.money - money >= 0) {
        if (result == 0) {
          if (total - total2 >= 0) {
            if (result == 0) {
              return res.status(200).json({
                message: "The total bet is not enough to fulfill the request",
                status: false,
                timeStamp: timeNow,
              });
            }
          } else {
            let infoBank = user_bank[0];
            const sql = `INSERT INTO withdraw SET 
                    id_order = ?,
                    phone = ?,
                    money = ?,
                    stk = ?,
                    name_bank = ?,
                    ifsc = ?,
                    name_user = ?,
                    status = ?,
                    today = ?,
                    time = ?`;
            await connection.execute(sql, [
              id_time + "" + id_order,
              userInfo.phone,
              money,
              infoBank.stk,
              infoBank.name_bank,
              infoBank.email,
              infoBank.name_user,
              0,
              checkTime,
              dates,
            ]);
            await connection.query(
              "UPDATE users SET money = money - ? WHERE phone = ? ",
              [money, userInfo.phone],
            );
            return res.status(200).json({
              message: "Withdrawal successful",
              status: true,
              money: userInfo.money - money,
              timeStamp: timeNow,
            });
          }
        } else {
          return res.status(200).json({
            message: "The total bet is not enough to fulfill the request",
            status: false,
            timeStamp: timeNow,
          });
        }
      } else {
        return res.status(200).json({
          message: "The balance is not enough to fulfill the request",
          status: false,
          timeStamp: timeNow,
        });
      }
    } else {
      return res.status(200).json({
        message: "You can only make 2 withdrawals per day",
        status: false,
        timeStamp: timeNow,
      });
    }
  } else {
    return res.status(200).json({
      message: "Please link your bank first",
      status: false,
      timeStamp: timeNow,
    });
  }
};
const transfer = async (req, res) => {
  let auth = req.cookies.auth;
  let amount = req.body.amount;
  let receiver_phone = req.body.phone;
  const date = new Date();
  // let id_time = date.getUTCFullYear() + '' + (date.getUTCMonth() + 1) + '' + date.getUTCDate();
  let id_order =
    Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) +
    10000000000000;
  let time = new Date().getTime();
  let client_transaction_id = id_order;

  const [user] = await connection.query(
    "SELECT `phone`,`money`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];
  let sender_phone = userInfo.phone;
  let sender_money = parseInt(userInfo.money);
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }

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

  let dates = new Date().getTime();
  let checkTime = timerJoin(dates);
  const [recharge] = await connection.query(
    "SELECT * FROM recharge WHERE phone = ? AND status = 1 ",
    [userInfo.phone],
  );
  const [minutes_1] = await connection.query(
    "SELECT * FROM minutes_1 WHERE phone = ? ",
    [userInfo.phone],
  );
  let total = 0;
  recharge.forEach((data) => {
    total += data.money;
  });
  let total2 = 0;
  minutes_1.forEach((data) => {
    total2 += data.money;
  });

  let result = 0;
  if (total - total2 > 0) result = total - total2;

  // console.log('date:', result);
  if (result == 0) {
    if (sender_money >= amount) {
      let [receiver] = await connection.query(
        "SELECT * FROM users WHERE `phone` = ?",
        [receiver_phone],
      );
      if (receiver.length === 1 && sender_phone !== receiver_phone) {
        let money = sender_money - amount;
        let total_money = amount + receiver[0].total_money;
        // await connection.query('UPDATE users SET money = ? WHERE phone = ?', [money, sender_phone]);
        // await connection.query(`UPDATE users SET money = money + ? WHERE phone = ?`, [amount, receiver_phone]);
        const sql =
          "INSERT INTO balance_transfer (sender_phone, receiver_phone, amount) VALUES (?, ?, ?)";
        await connection.execute(sql, [sender_phone, receiver_phone, amount]);
        const sql_recharge =
          "INSERT INTO recharge (id_order, transaction_id, phone, money, type, status, today, url, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        await connection.execute(sql_recharge, [
          client_transaction_id,
          0,
          receiver_phone,
          amount,
          "wallet",
          0,
          checkTime,
          0,
          time,
        ]);

        return res.status(200).json({
          message: `Requested ${amount} sent successfully`,
          status: true,
          timeStamp: timeNow,
        });
      } else {
        return res.status(200).json({
          message: `${receiver_phone} is not a valid user mobile number`,
          status: false,
          timeStamp: timeNow,
        });
      }
    } else {
      return res.status(200).json({
        message: "Your balance is not enough",
        status: false,
        timeStamp: timeNow,
      });
    }
  } else {
    return res.status(200).json({
      message: "The total bet is not enough to fulfill the request",
      status: false,
      timeStamp: timeNow,
    });
  }
};

// get transfer balance data
const transferHistory = async (req, res) => {
  let auth = req.cookies.auth;

  const [user] = await connection.query(
    "SELECT `phone`,`money`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [history] = await connection.query(
    "SELECT * FROM balance_transfer WHERE sender_phone = ?",
    [userInfo.phone],
  );
  const [receive] = await connection.query(
    "SELECT * FROM balance_transfer WHERE receiver_phone = ?",
    [userInfo.phone],
  );
  if (receive.length > 0 || history.length > 0) {
    return res.status(200).json({
      message: "Success",
      receive: receive,
      datas: history,
      status: true,
      timeStamp: timeNow,
    });
  }
};
const recharge2 = async (req, res) => {
  let auth = req.cookies.auth;
  let money = req.body.money;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [recharge] = await connection.query(
    "SELECT * FROM recharge WHERE phone = ? AND status = ? ",
    [userInfo.phone, 0],
  );
  const [bank_recharge] = await connection.query("SELECT * FROM bank_recharge");
  if (recharge.length != 0) {
    return res.status(200).json({
      message: "Received successfully",
      datas: recharge[0],
      infoBank: bank_recharge,
      status: true,
      timeStamp: timeNow,
    });
  } else {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const listRecharge = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [recharge] = await connection.query(
    "SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC ",
    [userInfo.phone],
  );
  return res.status(200).json({
    message: "Receive success",
    datas: recharge,
    status: true,
    timeStamp: timeNow,
  });
};


const listGameswingo = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }

  // Get user information
  const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
  let userInfo = user[0];
  if (!userInfo) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }

  // Define the criteria for fetching data
  const sql = `SELECT 
      id_product, phone, code, invite, stage, level, money, amount, fee, 
      get, game, bet, status, today, time 
  FROM minutes_1 
  WHERE phone = ? AND code = ?`;

  // Execute the query to fetch data
  const [rows] = await connection.query('SELECT * FROM minutes_1 WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]); 


  // Check if data was found
  if (rows.length > 0) {
      // Return the fetched data
      return res.status(200).json({
          message: 'Receive success',
          datas: rows,
          status: true,
          timeStamp: new Date().toISOString(),
      });
  } else {
      return res.status(200).json({
          message: 'No data found',
          datas: [],
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }
};

const listGamesk3 = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }

  // Get user information
  const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
  let userInfo = user[0];
  if (!userInfo) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }

  // Define the criteria for fetching data
  const sql = `SELECT 
      id_product, phone, code, invite, stage, level, money, price, amount, fee, 
      get, game, bet, status, today, time 
  FROM result_k3 
  WHERE phone = ? AND code = ?`;

  // Execute the query to fetch data
  const [rows] = await connection.query('SELECT * FROM result_k3 WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]); 


  // Check if data was found
  if (rows.length > 0) {
      // Return the fetched data
      return res.status(200).json({
          message: 'Receive success',
          datas: rows,
          status: true,
          timeStamp: new Date().toISOString(),
      });
  } else {
      return res.status(200).json({
          message: 'No data found',
          datas: [],
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }
};

const listGames5d = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }

  // Get user information
  const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
  let userInfo = user[0];
  if (!userInfo) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }



  // Define the criteria for fetching data
  const sql = `SELECT 
      id_product, phone, code, invite, stage, level, money, price, amount, fee, 
      get, game, bet, status, today, time 
  FROM result_5d 
  WHERE phone = ? AND code = ?`;

  // Execute the query to fetch data
  const [rows] = await connection.query('SELECT * FROM result_5d WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]); 


  // Check if data was found
  if (rows.length > 0) {
      // Return the fetched data
      return res.status(200).json({
          message: 'Receive success',
          datas: rows,
          status: true,
          timeStamp: new Date().toISOString(),
      });
  } else {
      return res.status(200).json({
          message: 'No data found',
          datas: [],
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }
};


const listGamestrx = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }

  // Get user information
  const [user] = await connection.query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
  let userInfo = user[0];
  if (!userInfo) {
      return res.status(200).json({
          message: 'Failed',
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }


  // Define the criteria for fetching data
  const sql = `SELECT 
      id_product, phone, code, invite, stage, level, money, amount, fee, 
      get, game, bet, status, today, time 
  FROM trx_wingo_bets 
  WHERE phone = ? AND code = ?`;

  // Execute the query to fetch data
  const [rows] = await connection.query('SELECT * FROM trx_wingo_bets WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]); 


  // Check if data was found
  if (rows.length > 0) {
      // Return the fetched data
      return res.status(200).json({
          message: 'Receive success',
          datas: rows,
          status: true,
          timeStamp: new Date().toISOString(),
      });
  } else {
      return res.status(200).json({
          message: 'No data found',
          datas: [],
          status: false,
          timeStamp: new Date().toISOString(),
      });
  }
};

const search = async (req, res) => {
  let auth = req.cookies.auth;
  let phone = req.body.phone;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite`, `level` FROM users WHERE `token` = ? ",
    [auth],
  );
  if (user.length == 0) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  let userInfo = user[0];
  if (userInfo.level == 1) {
    const [users] = await connection.query(
      `SELECT * FROM users WHERE phone = ? ORDER BY id DESC `,
      [phone],
    );
    return res.status(200).json({
      message: "Receive success",
      datas: users,
      status: true,
      timeStamp: timeNow,
    });
  } else if (userInfo.level == 2) {
    const [users] = await connection.query(
      `SELECT * FROM users WHERE phone = ? ORDER BY id DESC `,
      [phone],
    );
    if (users.length == 0) {
      return res.status(200).json({
        message: "Receive success",
        datas: [],
        status: true,
        timeStamp: timeNow,
      });
    } else {
      if (users[0].ctv == userInfo.phone) {
        return res.status(200).json({
          message: "Receive success",
          datas: users,
          status: true,
          timeStamp: timeNow,
        });
      } else {
        return res.status(200).json({
          message: "Failed",
          status: false,
          timeStamp: timeNow,
        });
      }
    }
  } else {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const listWithdraw = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];
  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [recharge] = await connection.query(
    "SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC ",
    [userInfo.phone],
  );
  return res.status(200).json({
    message: "Receive success",
    datas: recharge,
    status: true,
    timeStamp: timeNow,
  });
};




const constructTransactionsQuery = (
  filterType = "All",
  startDate,
  endDate,
  phone,
  limit,
  offset,
) => {
  const queries = {
    Bets: {
      query: `SELECT id_product AS id, (money + fee) AS money, 'negative' AS type, 'Bet' AS name, time FROM minutes_1 WHERE phone = ? AND time >= ? AND time <= ?`,
      count: `SELECT COUNT(*) AS totalCount FROM minutes_1 WHERE phone = ? AND time >= ? AND time <= ?`,
    },
    "trxBets": {
      query: `SELECT id_product AS id, (money + fee) AS money, 'negative' AS type, 'Bet' AS name, time FROM trx_wingo_bets WHERE phone = ? AND time >= ? AND time <= ?`,
      count: `SELECT COUNT(*) AS totalCount FROM trx_wingo_bets WHERE phone = ? AND time >= ? AND time <= ?`,
    },
    "Bet Win": {
      query: `SELECT id_product AS id, get AS money, 'positive' AS type, 'Win' AS name, time FROM minutes_1 WHERE phone = ? AND get > 0 AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM minutes_1 WHERE phone = ? AND get > 0 AND time >= ? AND time <=?`,
    },
    "trxBet Win": {
      query: `SELECT id_product AS id, get AS money, 'positive' AS type, 'Win' AS name, time FROM trx_wingo_bets WHERE phone = ? AND get > 0 AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM trx_wingo_bets WHERE phone = ? AND get > 0 AND time >= ? AND time <=?`,
    },
    Recharge: {
      query: `SELECT id_order AS id, money, 'positive' AS type, 'Recharge' AS name, time FROM recharge WHERE phone = ? AND status = 1 AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM recharge WHERE phone = ? AND status = 1 AND time >= ? AND time <=?`,
    },
    Withdraw: {
      query: `SELECT id_order AS id, money, 'negative' AS type, 'Withdraw' AS name, time FROM withdraw WHERE phone = ? AND status = 1 AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM withdraw WHERE phone = ? AND status = 1 AND time >= ? AND time <=?`,
    },
    Commissions: {
      query: `SELECT commission_id AS id, SUM(money) AS money, 'positive' AS type, 'Commission' AS name, time FROM commissions WHERE phone = ? AND time >= ? AND time <=? GROUP BY time`,
      count: `SELECT COUNT(*) AS totalCount FROM (SELECT time FROM commissions WHERE phone = ? AND time >= ? AND time <=? GROUP BY time) AS grouped`,
    },
    "Gift Vouchers": {
      query: `SELECT id_redenvelops AS id, money, 'positive' AS type, 'Red Envelopes' AS name, time FROM redenvelopes_used WHERE phone_used = ? AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM redenvelopes_used WHERE phone_used = ? AND time >= ? AND time <=?`,
    },
    Salary: {
      query: `SELECT id, amount AS money, 'positive' AS type, CONCAT(type, ' SALARY') AS name, time FROM salary WHERE phone = ? AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM salary WHERE phone = ? AND time >= ? AND time <=?`,
    },
    Advance: {
      query: `SELECT id, amount AS money, 'positive' AS type, CONCAT(type, ' SALARY') AS name, time FROM advance WHERE phone = ? AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM advance WHERE phone = ? AND time >= ? AND time <=?`,
    },
    "Claimed Rewards": {
      query: `SELECT time AS id, amount AS money, 'positive' AS type, type AS name, time FROM claimed_rewards WHERE phone = ? AND time >= ? AND time <=?`,
      count: `SELECT COUNT(*) AS totalCount FROM claimed_rewards WHERE phone = ? AND time >= ? AND time <=?`,
    },
  };

  if (filterType === "All") {
    // Construct combined queries and total count queries
    const selectedQueries = Object.values(queries)
      .map((query) => `(${query.query})`)
      .join(" UNION ALL ");

    const totalCountQueries = Object.values(queries)
      .map((query) => `(${query.count})`)
      .join(" + ");

    const transactionsQuery = `
       SELECT * FROM (${selectedQueries}) AS combined
       ORDER BY time DESC
       LIMIT ${limit} OFFSET ${offset}
     `;

    const totalCountQuery = `
       SELECT ${totalCountQueries} AS totalCount
     `;

    const params = Object.values(queries).flatMap((query) => [
      phone,
      startDate,
      endDate,
    ]);

    return {
      transactionsQuery,
      totalCountQuery,
      params,
    };
  } if (filterType === 'Bets' || filterType === 'Bet Win') {
    const selectedQuery = `${queries[filterType]?.query || ''} UNION ALL ${queries[`trx${filterType}`]?.query || ''}`;
    const totalCountQueries = `(${queries[filterType]?.count || '0'}) + (${queries[`trx${filterType}`]?.count || '0'})`;

    const totalCountQuery = `
       SELECT ${totalCountQueries} AS totalCount
     `;
    const transactionsQuery = `${selectedQuery}
       ORDER BY time DESC
       LIMIT ${limit} OFFSET ${offset}
     `;
    const params = [phone, startDate, endDate, phone, startDate, endDate];
    return {
      transactionsQuery,
      totalCountQuery,
      params,
    };

  } else {
    // Handle specific filterType
    const selectedQuery = queries[filterType]?.query;
    const totalCountQuery = queries[filterType]?.count;

    if (selectedQuery && totalCountQuery) {
      const transactionsQuery = `
         ${selectedQuery}
         ORDER BY time DESC
         LIMIT ${limit} OFFSET ${offset}
       `;

      const params = [phone, startDate, endDate];

      return {
        transactionsQuery,
        totalCountQuery,
        params,
      };
    } else {
      throw new Error(`Invalid filterType "${filterType}" provided.`);
    }
  }
};

const listTransaction = async (req, res) => {
  let auth = req.cookies.auth;
  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: new Date().toISOString(),
    });
  }

  const [user] = await connection.query(
    "SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?",
    [auth],
  );
  let userInfo = user[0];
  if (!userInfo) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: new Date().toISOString(),
    });
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startDate = Number(req?.query?.startDate) || '';
  const endDate = startDate ? getDayTime(startDate).endOfDayTimestamp : new Date().getTime();

  const filterType = req.query.filterType || "All";
  const offset = (page - 1) * limit;

  const { transactionsQuery, totalCountQuery, params } =
    constructTransactionsQuery(
      filterType,
      startDate,
      endDate,
      userInfo.phone,
      limit,
      offset,
    );

  const [transactions] = await connection.query(transactionsQuery, params);
  const [totalCount] = await connection.query(totalCountQuery, params);
  const totalPages = Math.ceil(totalCount[0].totalCount / limit);
  res.json({
    message: "Success",
    status: true,
    data: transactions,
    totalPages: totalPages,
    currentPage: page,
    timeStamp: new Date().toISOString(),
  });
};

const useRedenvelope = async (req, res) => {
  try {
    let auth = req.cookies.auth;
    let code = req.body.code;
    if (!auth) {
      return res.status(200).json({
        message: "Authentication failed",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (!code) {
      return res.status(200).json({
        message: "Please provide a redemption code",
        status: false,
        timeStamp: timeNow,
      });
    }

    const [user] = await connection.query(
      "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
      [auth],
    );
    if (user.length === 0) {
      return res.status(200).json({
        message: "Authentication failed, Login again",
        status: false,
        timeStamp: timeNow,
      });
    }
    let userInfo = user?.[0];

    const [redenvelopes] = await connection.query(
      "SELECT * FROM redenvelopes WHERE id_redenvelope = ?",
      [code],
    );
    if (redenvelopes.length === 0) {
      return res.status(200).json({
        message: "Invalid Redemption code",
        status: false,
        timeStamp: timeNow,
      });
    }
    const redenvelope = redenvelopes?.[0];

    if (
      Number(redenvelope.expire_date) !== 0 &&
      Number(redenvelope.expire_date) < new Date().getTime()
    ) {
      return res.status(200).json({
        message: "Gift code expired",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (
      redenvelope.for_new_users &&
      Number(user.time) < Number(redenvelope.time)
    ) {
      return res.status(200).json({
        message: "This gift code is only valid for new users!",
        status: false,
        timeStamp: timeNow,
      });
    }

    const [redenvelopesUsed] = await connection.query(
      "SELECT * FROM redenvelopes_used WHERE id_redenvelops = ? AND phone_used = ?",
      [code, userInfo?.phone],
    );

    if (redenvelopesUsed.length > 0) {
      return res.status(200).json({
        message: "Gift code already used",
        status: false,
        timeStamp: timeNow,
      });
    }

    if (redenvelope.status == 1) {
      return res.status(200).json({
        message: "Gift code fully used",
        status: false,
        timeStamp: timeNow,
      });
    }

    const time = new Date().getTime();

    let sql =
      "INSERT INTO redenvelopes_used SET phone = ?, phone_used = ?, id_redenvelops = ?, money = ?, `time` = ? ";
    await connection.query(sql, [
      redenvelope.phone,
      userInfo.phone,
      redenvelope.id_redenvelope,
      redenvelope.money,
      time,
    ]);
    await connection.query(
      "UPDATE users SET money = money + ? WHERE `phone` = ? ",
      [redenvelope.money, userInfo.phone],
    );

    const [redenvelopesUsedByAll] = await connection.query(
      "SELECT * FROM redenvelopes_used WHERE id_redenvelops = ? ",
      [code],
    );

    if (redenvelopesUsedByAll.length >= redenvelope.used) {
      await connection.query(
        "UPDATE redenvelopes SET status = ? WHERE `id_redenvelope` = ? ",
        [1, redenvelope.id_redenvelope],
      );
    }

    return res.status(200).json({
      message: `Received successfully + ₹${redenvelope.money}`,
      status: true,
      timeStamp: timeNow,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const callback_bank = async (req, res) => {
  let transaction_id = req.body.transaction_id;
  let client_transaction_id = req.body.client_transaction_id;
  let amount = req.body.amount;
  let requested_datetime = req.body.requested_datetime;
  let expired_datetime = req.body.expired_datetime;
  let payment_datetime = req.body.payment_datetime;
  let status = req.body.status;
  if (!transaction_id) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
  if (status == 2) {
    await connection.query(
      `UPDATE recharge SET status = 1 WHERE id_order = ?`,
      [client_transaction_id],
    );
    const [info] = await connection.query(
      `SELECT * FROM recharge WHERE id_order = ?`,
      [client_transaction_id],
    );
    await connection.query(
      "UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ",
      [info[0].money, info[0].money, info[0].phone],
    );
    return res.status(200).json({
      message: 0,
      status: true,
    });
  } else {
    await connection.query(`UPDATE recharge SET status = 2 WHERE id = ?`, [id]);

    return res.status(200).json({
      message: "Cancellation successful",
      status: true,
      datas: recharge,
    });
  }
};

const confirmRecharge = async (req, res) => {
  let auth = req.cookies.auth;
  //let money = req.body.money;
  //let paymentUrl = req.body.payment_url;
  let client_txn_id = req.body?.client_txn_id;

  if (!client_txn_id) {
    return res.status(200).json({
      message: "client_txn_id is required",
      status: false,
      timeStamp: timeNow,
    });
  }

  if (!auth) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }

  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];

  if (!user) {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }

  const [recharge] = await connection.query(
    "SELECT * FROM recharge WHERE phone = ? AND status = ? ",
    [userInfo.phone, 0],
  );

  if (recharge.length != 0) {
    const rechargeData = recharge[0];
    const date = new Date(rechargeData.today);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const formattedDate = `${dd}-${mm}-${yyyy}`;
    const apiData = {
      key: "60a9ca13-6929-4e40-b687-ff7293e61dce",
      client_txn_id: client_txn_id,
      txn_date: formattedDate,
    };
    try {
      const apiResponse = await axios.post(
        "https://api.ekqr.in/api/check_order_status",
        apiData,
      );
      // console.log(apiResponse.data)
      const apiRecord = apiResponse.data.data;
      if (apiRecord.status === "scanning") {
        return res.status(200).json({
          message: "Waiting for confirmation",
          status: false,
          timeStamp: timeNow,
        });
      }
      if (
        apiRecord.client_txn_id === rechargeData.id_order &&
        apiRecord.customer_mobile === rechargeData.phone &&
        apiRecord.amount === rechargeData.money
      ) {
        if (apiRecord.status === "success") {
          await connection.query(
            `UPDATE recharge SET status = 1 WHERE id = ? AND id_order = ? AND phone = ? AND money = ?`,
            [
              rechargeData.id,
              apiRecord.client_txn_id,
              apiRecord.customer_mobile,
              apiRecord.amount,
            ],
          );
          // const [code] = await connection.query(`SELECT invite, total_money from users WHERE phone = ?`, [apiRecord.customer_mobile]);
          // const [data] = await connection.query('SELECT recharge_bonus_2, recharge_bonus FROM admin_ac WHERE id = 1');
          // let selfBonus = info[0].money * (data[0].recharge_bonus_2 / 100);
          // let money = info[0].money + selfBonus;
          let money = apiRecord.amount;
          await connection.query(
            "UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ",
            [money, money, apiRecord.customer_mobile],
          );
          // let rechargeBonus;
          // if (code[0].total_money <= 0) {
          //     rechargeBonus = apiRecord.customer_mobile * (data[0].recharge_bonus / 100);
          // }
          // else {
          //     rechargeBonus = apiRecord.customer_mobile * (data[0].recharge_bonus_2 / 100);
          // }
          // const percent = rechargeBonus;
          // await connection.query('UPDATE users SET money = money + ?, total_money = total_money + ? WHERE code = ?', [money, money, code[0].invite]);

          return res.status(200).json({
            message: "Successful application confirmation",
            status: true,
            datas: recharge,
          });
        } else if (
          apiRecord.status === "failure" ||
          apiRecord.status === "close"
        ) {
          // console.log(apiRecord.status)
          await connection.query(
            `UPDATE recharge SET status = 2 WHERE id = ? AND id_order = ? AND phone = ? AND money = ?`,
            [
              rechargeData.id,
              apiRecord.client_txn_id,
              apiRecord.customer_mobile,
              apiRecord.amount,
            ],
          );
          return res.status(200).json({
            message: "Payment failure",
            status: true,
            timeStamp: timeNow,
          });
        }
      } else {
        return res.status(200).json({
          message: "Mismtach data",
          status: true,
          timeStamp: timeNow,
        });
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return res.status(200).json({
      message: "Failed",
      status: false,
      timeStamp: timeNow,
    });
  }
};

const confirmUSDTRecharge = async (req, res) => {
  
};

const updateRecharge = async (req, res) => {
  let auth = req.cookies.auth;
  let money = req.body.money;
  let order_id = req.body.id_order;
  let data = req.body.inputData;

  
  const [user] = await connection.query(
    "SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ",
    [auth],
  );
  let userInfo = user[0];
  if (!user) {
    return res.status(200).json({
      message: "user not found",
      status: false,
      timeStamp: timeNow,
    });
  }
  const [utr] = await connection.query(
    "SELECT * FROM recharge WHERE `utr` = ? ",
    [data],
  );
  let utrInfo = utr[0];

  if (!utrInfo) {
    await connection.query(
      "UPDATE recharge SET utr = ? WHERE phone = ? AND id_order = ?",
      [data, userInfo.phone, order_id],
    );
    return res.status(200).json({
      message: "UTR updated",
      status: true,
      timeStamp: timeNow,
    });
  } else {
    return res.status(200).json({
      message: "UTR is already in use",
      status: false,
      timeStamp: timeNow,
    });
  }
};









const transferIn = async (req, res) => {
  const { phone, amount } = req.body;

  if (!phone || !amount || amount <= 0) {
    return res.status(400).json({
      message: "Invalid input data",
    });
  }

  let transactionConnection;

  try {
    // Get a transaction-specific connection
    transactionConnection = await connection.getConnection();
    await transactionConnection.beginTransaction();

    // Fetch the user
    const [users] = await transactionConnection.query(
      "SELECT money, third_party_money FROM users WHERE phone = ?",
      [phone]
    );

    if (users.length === 0) {
      throw new Error("User not found");
    }

    const user = users[0];
    const currentMoney = parseFloat(user.money); // Convert to number
    const currentThirdPartyMoney = parseFloat(user.third_party_money || 0); // Convert to number, default 0

    // Validate funds
    if (isNaN(currentMoney) || isNaN(currentThirdPartyMoney)) {
      throw new Error("Invalid user data: money or third_party_money is not a number");
    }

    if (currentMoney < parseFloat(amount)) {
      throw new Error("Insufficient funds");
    }

    // Calculate updated balances
    const updatedMoney = (currentMoney - parseFloat(amount)).toFixed(2);
    const updatedThirdPartyMoney = (currentThirdPartyMoney + parseFloat(amount)).toFixed(2);

    // Update user balances
    await transactionConnection.query(
      "UPDATE users SET money = ?, third_party_money = ? WHERE phone = ?",
      [updatedMoney, updatedThirdPartyMoney, phone]
    );

    // Insert into safe_transfer
    const transferId = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    const epochTime = Date.now(); // Get current epoch timestamp
    await transactionConnection.query(
      "INSERT INTO safe_transfer (phone, transfer_id, amount, type, time) VALUES (?, ?, ?, ?, ?)",
      [phone, transferId, parseFloat(amount), 1, epochTime]
    );

    // Commit the transaction
    await transactionConnection.commit();

    return res.status(200).json({
      message: "Transfer successful",
      transferId,
      timeStamp: epochTime, // Include epoch timestamp in the response
    });
  } catch (error) {
    // Rollback transaction on error
    if (transactionConnection) {
      await transactionConnection.rollback();
    }
    console.error("Error in transferIn:", error);
    return res.status(500).json({
      message: error.message || "Internal server error",
    });
  } finally {
    // Release the connection back to the pool
    if (transactionConnection) {
      await transactionConnection.release();
    }
  }
};





const transferOut = async (req, res) => {
  const { phone, amount } = req.body;

  if (!phone || !amount || amount <= 0) {
    return res.status(400).json({
      message: "Invalid input data",
    });
  }

  let transactionConnection;

  try {
    // Get a transaction-specific connection
    transactionConnection = await connection.getConnection();
    await transactionConnection.beginTransaction();

    // Fetch the user
    const [users] = await transactionConnection.query(
      "SELECT money, third_party_money FROM users WHERE phone = ?",
      [phone]
    );

    if (users.length === 0) {
      throw new Error("User not found");
    }

    const user = users[0];
    const currentMoney = parseFloat(user.money); // Convert to number
    const currentThirdPartyMoney = parseFloat(user.third_party_money || 0); // Convert to number, default 0

    // Validate funds
    if (isNaN(currentMoney) || isNaN(currentThirdPartyMoney)) {
      throw new Error("Invalid user data: money or third_party_money is not a number");
    }

    if (currentThirdPartyMoney < parseFloat(amount)) {
      throw new Error("Insufficient third-party funds");
    }

    // Calculate updated balances
    const updatedMoney = (currentMoney + parseFloat(amount)).toFixed(2);
    const updatedThirdPartyMoney = (currentThirdPartyMoney - parseFloat(amount)).toFixed(2);

    // Update user balances
    await transactionConnection.query(
      "UPDATE users SET money = ?, third_party_money = ? WHERE phone = ?",
      [updatedMoney, updatedThirdPartyMoney, phone]
    );

    // Insert into safe_transfer
    const transferId = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    const epochTime = Date.now(); // Get current epoch timestamp
    await transactionConnection.query(
      "INSERT INTO safe_transfer (phone, transfer_id, amount, type, time) VALUES (?, ?, ?, ?, ?)",
      [phone, transferId, parseFloat(amount), 2, epochTime] // `type` is 2 for transfer-out
    );

    // Commit the transaction
    await transactionConnection.commit();

    return res.status(200).json({
      message: "Transfer successful",
      transferId,
      timeStamp: epochTime, // Include epoch timestamp in the response
    });
  } catch (error) {
    // Rollback transaction on error
    if (transactionConnection) {
      await transactionConnection.rollback();
    }
    console.error("Error in transferOut:", error);
    return res.status(500).json({
      message: error.message || "Internal server error",
    });
  } finally {
    // Release the connection back to the pool
    if (transactionConnection) {
      await transactionConnection.release();
    }
  }
};





const transferInHistory = async (req, res) => {
  let auth = req.cookies.auth;

  if (!auth) {
    return res.status(400).json({
      message: "Authentication required",
      status: false,
      timeStamp: Date.now(),
    });
  }

  try {
    const [user] = await connection.query(
      "SELECT phone FROM users WHERE `token` = ?",
      [auth]
    );

    if (user.length === 0) {
      return res.status(404).json({
        message: "User not found",
        status: false,
        timeStamp: Date.now(),
      });
    }

    const userPhone = user[0].phone;

    // Fetch transfer-in history
    const [transferHistory] = await connection.query(
      "SELECT transfer_id, amount, type, time FROM safe_transfer WHERE phone = ? ORDER BY time DESC",
      [userPhone]
    );

    if (transferHistory.length === 0) {
      return res.status(200).json({
        message: "No history available",
        status: true,
        data: [],
        timeStamp: Date.now(),
      });
    }

    // Define Payment Method Mapping
    const PaymentMethodsMap = {
      1: "Invest",
      2: "Withdraw",
      3: "Revenue",
    };

    // Format the transfer history for the UI
    const formattedHistory = transferHistory.map((data) => ({
      id: data.transfer_id,
      amount: parseFloat(data.amount).toFixed(2),
      type: PaymentMethodsMap[data.type] || "Unknown",
      time: data.time,
    }));

    return res.status(200).json({
      message: "Transfer-In history retrieved successfully",
      status: true,
      data: formattedHistory,
      timeStamp: Date.now(),
    });
  } catch (error) {
    console.error("Error fetching transfer-in history:", error);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
      timeStamp: Date.now(),
    });
  }
};








const checkSubordinateRecharge = async (req, res) => {
  let auth = req.cookies.auth;

  if (!auth) {
      return res.status(401).json({ status: false, message: "Unauthorized" });
  }

  try {
      // Fetch the user's code
      const [user] = await connection.query("SELECT code FROM users WHERE token = ?", [auth]);
      if (!user || user.length === 0) {
          return res.status(404).json({ status: false, message: "User not found" });
      }

      const userCode = user[0].code;

      // Fetch subordinates' phones
      const [subordinates] = await connection.query("SELECT phone FROM users WHERE invite = ?", [userCode]);
      if (!subordinates || subordinates.length === 0) {
          return res.status(200).json({ status: false, message: "No subordinates" });
      }

      // Check if any subordinate has recharged
      const firstRechargeDone = await Promise.all(
          subordinates.map(async (sub) => {
              try {
                  const [recharge] = await connection.query(
                      "SELECT * FROM recharge WHERE phone = ? AND status = 1 LIMIT 1",
                      [sub.phone]
                  );

                 

                  return recharge.length > 0;
              } catch (error) {
                  
                  return false; // Assume no recharge on error
              }
          })
      );

      // Determine if any subordinate has recharged
      const anyRecharge = firstRechargeDone.some((done) => done);
      return res.status(200).json({ status: true, firstRechargeDone: anyRecharge });
  } catch (error) {
      
      return res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};










const getInvitationRecord = async (req, res) => {
  try {
      const auth = req.cookies.auth;
      if (!auth) return res.status(401).json({ message: "Unauthorized" });

      const [user] = await connection.query(
          "SELECT * FROM users WHERE `token` = ?",
          [auth]
      );

      if (!user.length) return res.status(404).json({ message: "User not found" });

      const userInfo = user[0];

      // Fetch all invited members and check if the bonus has been claimed
      const [invites] = await connection.query(
          `SELECT 
              u.id_user AS uid,
              u.phone,
              u.time AS create_time,
              u.name_user AS username,
              u.amount,
              EXISTS (
                  SELECT 1 
                  FROM claimed_rewards 
                  WHERE reward_id = u.phone AND type = 'INVITER BONUS'
              ) AS bonusClaimed
          FROM users u
          WHERE u.invite = ?`,
          [userInfo.code]
      );

      res.status(200).json({
          message: "Successfully fetched invited members",
          data: invites,
          status: true,
      });
  } catch (error) {
      console.error("Error fetching invitation records:", error);
      res.status(500).json({ message: "Server error", status: false });
  }
};





const getClaimedRewards = async (req, res) => {
  try {
      const [claimedRewards] = await connection.query(
          "SELECT reward_id FROM claimed_rewards WHERE type = 'INVITER BONUS'"
      );

      res.status(200).json({
          message: "Successfully fetched claimed rewards",
          data: claimedRewards,
          status: true,
      });
  } catch (error) {
      console.error("Error fetching claimed rewards:", error);
      res.status(500).json({ message: "Server error", status: false });
  }
};















const claimBonus = async (req, res) => {
  try {
      const auth = req.cookies.auth;
      if (!auth) return res.status(401).json({ message: "Unauthorized" });

      const { phone } = req.body; // Get phone from request body
      if (!phone) return res.status(400).json({ message: "Invalid input data" });

      // Verify logged-in user
      const [user] = await connection.query(
          "SELECT * FROM users WHERE `token` = ?",
          [auth]
      );

      if (!user.length) return res.status(404).json({ message: "User not found" });

      const loggedInUser = user[0];

      // Check if the bonus has already been claimed
      const [existingClaim] = await connection.query(
          "SELECT * FROM claimed_rewards WHERE reward_id = ? AND phone = ? AND type = 'INVITER BONUS'",
          [phone, loggedInUser.phone]
      );

      if (existingClaim.length > 0) {
          return res.status(400).json({
              message: "Bonus already claimed for this user",
              status: false,
              reason: "ALREADY_CLAIMED"
          });
      }

      // Fetch the bonus amount from admin settings
      const [bonusAmountResult] = await connection.query(
          "SELECT INVITER_BONUS_MONEY_ON_REGISTER FROM admin_ac LIMIT 1"
      );

      if (!bonusAmountResult.length) {
          return res.status(500).json({ message: "Failed to fetch bonus amount from admin settings" });
      }

      const bonusAmount = bonusAmountResult[0].INVITER_BONUS_MONEY_ON_REGISTER;

      // Get the current time as a UNIX timestamp in milliseconds
        const currentTimeMillis = Date.now();

        // Insert the claimed bonus into claimed_rewards table
        const [insertResult] = await connection.query(
            "INSERT INTO claimed_rewards (phone, reward_id, type, amount, status, time) VALUES (?, ?, ?, ?, ?, ?)",
            [
                loggedInUser.phone, // Phone of the logged-in user (inviter)
                phone, // Phone of the invited user
                "INVITER BONUS", // Bonus type
                bonusAmount, // Bonus amount
                "1", // Status of the claim (1 for success/claimed)
                currentTimeMillis // Current time in milliseconds
            ]
        );

      if (insertResult.affectedRows === 0) {
          return res.status(500).json({ message: "Failed to claim bonus. Please try again later." });
      }

      // Update the logged-in user's money column
      const [updateMoneyResult] = await connection.query(
        "UPDATE users SET money = money + ? WHERE phone = ?",
        [bonusAmount, loggedInUser.phone]
    );

    if (updateMoneyResult.affectedRows === 0) {
        return res.status(500).json({
            message: "Bonus claimed but failed to update user balance. Please contact support."
        });
    }

      return res.status(200).json({ message: "Bonus claimed successfully", status: true });
  } catch (error) {
      console.error("Error claiming bonus:", error);
      res.status(500).json({ message: "Server error", status: false });
  }
};




const getTotalInvitationBonus = async (req, res) => {
  try {
      const auth = req.cookies.auth;
      if (!auth) return res.status(401).json({ message: "Unauthorized" });

      // Fetch logged-in user's details
      const [user] = await connection.query(
          "SELECT * FROM users WHERE `token` = ?",
          [auth]
      );

      if (!user.length) return res.status(404).json({ message: "User not found" });

      const loggedInPhone = user[0].phone; // Logged-in user's phone number (0000000000)

      // Calculate the total bonus amount directly from claimed_rewards
      const [totalBonus] = await connection.query(
          "SELECT IFNULL(SUM(amount), 0) AS total FROM claimed_rewards WHERE phone = ? AND type = 'INVITER BONUS'",
          [loggedInPhone]
      );

      // Calculate the effective invitation count
      const [invitationCount] = await connection.query(
          "SELECT COUNT(*) AS total FROM claimed_rewards WHERE phone = ? AND type = 'INVITER BONUS'",
          [loggedInPhone]
      );

      res.status(200).json({
          message: "Successfully fetched invitation data",
          data: {
              totalBonus: totalBonus[0].total || 0, // Total bonus or 0
              effectiveInvitationCount: invitationCount[0].total || 0, // Total count or 0
          },
          status: true,
      });
  } catch (error) {
      console.error("Error fetching invitation data:", error);
      res.status(500).json({ message: "Server error", status: false });
  }
};




const getAdminConfig = async (req, res) => {
  try {
      // Query the admin_ac table
      const result = await connection.query('SELECT minusdtdep, mininrdep, inrusdtrate, safeinterest FROM admin_ac LIMIT 1');

      if (result.length === 0) {
          return res.status(404).json({
              status: false,
              message: 'Admin configuration not found',
          });
      }

      // Respond with the fetched data
      res.json({
          status: true,
          data: result[0],
      });
  } catch (error) {
      // Handle errors
      res.status(500).json({
          status: false,
          message: 'Failed to fetch admin configuration',
          error: error.message,
      });
  }
};



const getNotifications = async (req, res) => {
  try {
    // Query to fetch notifications, ordered by time (latest first)
    const [notifications] = await connection.query(
      "SELECT id, heading, image, content, link, time FROM notification ORDER BY time DESC"
    );

    res.status(200).json({
      message: "Successfully fetched notifications",
      data: notifications, // Array of notifications
      status: true,
    });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Server error", status: false });
  }
};


// Feedback submission function
const submitFeedback = async (req, res) => {
  let auth = req.cookies.auth;  // Get the authentication token from cookies.

  if (!auth) {
    return res.status(401).json({ message: "Unauthorized. Please log in first." });
  }

  // Fetch user information based on the auth token
  const [user] = await connection.query("SELECT * FROM users WHERE `token` = ?", [auth]);

  if (!user || user.length === 0) {
    return res.status(404).json({ message: "User not found." });
  }

  const phone = user[0].phone;  // Get the phone number of the logged-in user.
  const { feedback } = req.body;  // Extract feedback from request body.

  if (!feedback) {
    return res.status(400).json({ message: "Feedback is required!" });
  }

  const date_time = new Date().toISOString();  // Capture the current date and time.

  // Insert feedback into the database
  const query = "INSERT INTO feedbacks (phone, feedback, date_time) VALUES (?, ?, ?)";
  await connection.query(query, [phone, feedback, date_time]);

  res.status(200).json({ message: "Feedback submitted successfully!" });
};






const getTotalBetAmount = async (req, res) => {
  let auth = req.cookies.auth; // Get user token from cookies

  if (!auth) {
    return res.status(401).json({ message: "Unauthorized", status: false });
  }

  // Fetch user info
  const [user] = await connection.query("SELECT phone FROM users WHERE token = ?", [auth]);

  if (!user.length) {
    return res.status(404).json({ message: "User not found", status: false });
  }

  const phone = user[0].phone;

  // SQL queries for today's and yesterday's bets
  const queries = {
    wingo: `SELECT SUM(money + fee) AS total FROM minutes_1 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;`,
    k3: `SELECT SUM(money) AS total FROM result_k3 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;`,
    g5: `SELECT SUM(money) AS total FROM result_5d WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;`,
    trx: `SELECT SUM(money) AS total FROM trx_wingo_bets WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;`
  };
  

  // Get yesterday's and today's dates in 'YYYY-MM-DD' format
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const formatDate = (date) => date.toISOString().split('T')[0];
  const dates = {
    today: formatDate(today),
    yesterday: formatDate(yesterday)
  };

  try {
    // Execute queries in parallel for yesterday and today
    const results = await Promise.all(
      Object.entries(queries).map(async ([game, query]) => {
        const [yesterdayData] = await connection.query(query, [phone, dates.yesterday]);
        const [todayData] = await connection.query(query, [phone, dates.today]);

        return {
          game,
          yesterday: yesterdayData[0].total || 0,
          today: todayData[0].total || 0
        };
      })
    );

    // Sum total bets for yesterday and today
    const totalBetAmounts = results.reduce(
      (acc, curr) => {
        acc.yesterday += curr.yesterday;
        acc.today += curr.today;
        return acc;
      },
      { yesterday: 0, today: 0 }
    );

    // Prepare response details
    const details = results.reduce((acc, curr) => {
      acc[curr.game] = { yesterday: curr.yesterday, today: curr.today };
      return acc;
    }, {});

    return res.status(200).json({
      message: "Total bet amounts retrieved",
      totalBetAmounts,
      details
    });
  } catch (error) {
    console.error("Error fetching bet amounts:", error);
    return res.status(500).json({ message: "Internal Server Error", status: false, error });
  }
};








// Redeem rebate for yesterday's total bets
const redeemRebate = async (req, res) => {
  const auth = req.cookies.auth;

  if (!auth) {
    return res.status(401).json({ message: "Unauthorized. Please log in.", status: false });
  }

  try {
    // Fetch user information
    const [user] = await connection.query("SELECT phone FROM users WHERE token = ?", [auth]);
    if (!user.length) {
      return res.status(404).json({ message: "User not found.", status: false });
    }

    const phone = user[0].phone;
    const todayDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format

    // Check if the user has already claimed the rebate today
    const [existingClaim] = await connection.query(
      "SELECT * FROM claimed_rewards WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? AND type = ?",
      [phone, todayDate, "REBATE"]
    );

    if (existingClaim.length) {
      return res.status(400).json({ message: "Rebate already claimed for today.", status: false });
    }

    // Calculate the rebate amount (0.05% of yesterday's total bet)
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const formattedYesterday = yesterdayDate.toISOString().split("T")[0];

    const [[yesterdayBetTotals]] = await connection.query(
      `SELECT 
          COALESCE(SUM(money), 0) AS totalYesterday 
        FROM (
          SELECT money FROM minutes_1 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? 
          UNION ALL
          SELECT money FROM result_k3 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? 
          UNION ALL
          SELECT money FROM result_5d WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? 
          UNION ALL
          SELECT money FROM trx_wingo_bets WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?
      ) AS combined`,
      [phone, formattedYesterday, phone, formattedYesterday, phone, formattedYesterday, phone, formattedYesterday]
    );

    const rebateAmount = (yesterdayBetTotals.totalYesterday || 0) * 0.0005; // 0.05% rebate

    if (rebateAmount <= 0) {
      return res.status(400).json({ message: "No rebate available for yesterday's bets.", status: false });
    }

    // Insert claimed rebate into claimed_rewards
    const currentTimeMillis = Date.now();
    await connection.query(
      "INSERT INTO claimed_rewards (phone, reward_id, type, amount, status, time) VALUES (?, ?, ?, ?, ?, ?)",
      [phone, phone, "REBATE", rebateAmount, "1", currentTimeMillis]
    );

    // Update user's balance
    const [updateMoneyResult] = await connection.query(
      "UPDATE users SET money = money + ? WHERE phone = ?",
      [rebateAmount, phone]
    );

    if (updateMoneyResult.affectedRows === 0) {
      return res.status(500).json({ message: "Failed to update balance. Please try again later." });
    }

    res.status(200).json({ message: "Rebate claimed successfully!", rebateAmount });
  } catch (error) {
    console.error("Error redeeming rebate:", error);
    res.status(500).json({ message: "Server error", status: false });
  }
};


// Fetch claimed rebate history of the user
const getClaimedRebates = async (req, res) => {
  const auth = req.cookies.auth;

  if (!auth) {
      return res.status(401).json({ message: "Unauthorized. Please log in.", status: false });
  }

  try {
      // Fetch user information
      const [user] = await connection.query("SELECT phone FROM users WHERE token = ?", [auth]);
      if (!user.length) {
          return res.status(404).json({ message: "User not found.", status: false });
      }

      const phone = user[0].phone;

      // Fetch claimed rebates for the user
      const [claimedRewards] = await connection.query(
          "SELECT type, amount, FROM_UNIXTIME(time / 1000) AS claimedAt FROM claimed_rewards WHERE phone = ? AND type = 'REBATE' ORDER BY time DESC",
          [phone]
      );

      res.status(200).json({
          message: "Successfully fetched claimed rebates",
          data: claimedRewards,
          status: true,
      });
  } catch (error) {
      console.error("Error fetching claimed rebates:", error);
      res.status(500).json({ message: "Server error", status: false });
  }
};













const userController = {
  userInfo,
  changeUser,
  promotion,
  myTeam,
  wowpay,
  recharge,
  recharge2,
  listRecharge,
  listWithdraw,
  listTransaction,
  changePassword,
  checkInHandling,
  infoUserBank,
  addBank,
  withdrawal3,
  transfer,
  transferHistory,
  getInvitationRecord,
  getClaimedRewards,
  claimBonus,
  getNotifications,
  submitFeedback,
  redeemRebate,
  getClaimedRebates,
  getTotalBetAmount,
  getAdminConfig,
  getTotalInvitationBonus,
  callback_bank,
  checkSubordinateRecharge,
  listMyTeam,
  verifyCode,
  aviator,
  useRedenvelope,
  search,
  updateRecharge,
  transferIn,
  transferOut,
  transferInHistory,
  confirmRecharge,
  cancelRecharge,
  confirmUSDTRecharge,
  listGameswingo,
  listGamesk3,
  listGames5d,
  listGamestrx,
};

export default userController;
