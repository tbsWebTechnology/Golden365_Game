import connection from "../config/connectDB.js";
import moment from "moment";

const gameStatisticsPage = async (req, res) => {
  return res.render("member/game_statistics.ejs");
};

const gameStatistics = async (req, res) => {
  try {
    let auth = req.cookies.auth;
    let type = req.query.type;

    const [user] = await connection.query(
      "SELECT * FROM users WHERE `token` = ? ",
      [auth],
    );
    const userInfo = user[0];

    let startDate = 0;
    let endDate = 0;
    if (type === "today") {
      startDate = new Date().setHours(0, 0, 0, 0);
      endDate = new Date().setHours(23, 59, 59, 999);
    } else if (type === "yesterday") {
      startDate = new Date(
        new Date().setDate(new Date().getDate() - 1),
      ).setHours(0, 0, 0, 0);
      endDate = new Date(new Date().setDate(new Date().getDate() - 1)).setHours(
        23,
        59,
        59,
        999,
      );
    } else if (type === "week") {
      startDate = new Date(
        new Date().setDate(new Date().getDate() - 7),
      ).setHours(0, 0, 0, 0);
      endDate = new Date().setHours(23, 59, 59, 999);
    } else if (type === "month") {
      startDate = new Date(
        new Date().setDate(new Date().getDate() - 30),
      ).setHours(0, 0, 0, 0);
      endDate = new Date().setHours(23, 59, 59, 999);
    } else if (type === "all") {
      startDate = 0;
      endDate = new Date().setHours(23, 59, 59, 999);
    }

    const [wingo1] = await connection.query(
      "SELECT COUNT(*) AS wingoBetCount FROM minutes_1 WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const wingoBetCount = parseInt(wingo1[0].wingoBetCount || 0);
    const [k31] = await connection.query(
      "SELECT COUNT(*) AS k3BetCount FROM result_k3 WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const k3BetCount = parseInt(k31[0].k3BetCount || 0);
    const [G5d1] = await connection.query(
      "SELECT COUNT(*) AS g5dBetCount FROM result_5d WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const g5dBetCount = parseInt(G5d1[0].g5dBetCount || 0);
    const [trxWingo1] = await connection.query(
      "SELECT COUNT(*) AS trxWingoBetCount FROM trx_wingo_bets WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const trxWingoBetCount = parseInt(trxWingo1[0].trxWingoBetCount || 0);




    const [wingo2] = await connection.query(
      "SELECT SUM(money + fee) AS wingoBetAmount FROM minutes_1 WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const wingoBetAmount = parseInt(wingo2[0].wingoBetAmount || 0);

    const [k32] = await connection.query(
      "SELECT SUM(money) AS k3BetAmount FROM result_k3 WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const k3BetAmount = parseInt(k32[0].k3BetAmount || 0);

    const [G5d2] = await connection.query(
      "SELECT SUM(money) AS g5dBetAmount FROM result_5d WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const g5dBetAmount = parseInt(G5d2[0].g5dBetAmount || 0);

    const [trxWingo2] = await connection.query(
      "SELECT SUM(amount) AS trxWingoBetAmount FROM trx_wingo_bets WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const trxWingoBetAmount = parseInt(trxWingo2[0].trxWingoBetAmount || 0);




    const [wingo3] = await connection.query(
      "SELECT SUM(get) AS wingoWinAmount FROM minutes_1 WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const wingoWinAmount = parseInt(wingo3[0].wingoWinAmount || 0);
    const [k33] = await connection.query(
      "SELECT SUM(get) AS k3WinAmount FROM result_k3 WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const k3WinAmount = parseInt(k33[0].k3WinAmount || 0);
    const [G5d3] = await connection.query(
      "SELECT SUM(get) AS g5dWinAmount FROM result_5d WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const g5dWinAmount = parseInt(G5d3[0].g5dWinAmount || 0);
    const [trxWingo3] = await connection.query(
      "SELECT SUM(get) AS trxWingoWinAmount FROM trx_wingo_bets WHERE phone = ? AND time BETWEEN '?' AND '?'",
      [userInfo.phone, startDate, endDate],
    );
    const trxWingoWinAmount = parseInt(trxWingo3[0].trxWingoWinAmount || 0);




    const totalBetCount =
  (wingoBetCount || 0) + (k3BetCount || 0) + (g5dBetCount || 0) + (trxWingoBetCount || 0);
const totalBetAmount =
  (wingoBetAmount || 0) + (k3BetAmount || 0) + (g5dBetAmount || 0) + (trxWingoBetAmount || 0);
const totalWinAmount =
  (wingoWinAmount || 0) + (k3WinAmount || 0) + (g5dWinAmount || 0) + (trxWingoWinAmount || 0);

 
  


    return res.status(200).send({
      status: 200,
      totalBetAmount: totalBetAmount,
      list: [
        {
          title: "lottery",
          totalBetAmount: totalBetAmount,
          numberOfBets: totalBetCount,
          totalWinAmount: totalWinAmount,
        },
      ],
      message: "Game statistics fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: "Something went wrong! Please try again later.",
    });
  }
};

const autoCleanOldGames = async () => {
  try {
    const TwoDayAgoUnixMoment = moment().subtract(2, "days").valueOf();

    await connection.execute(
      `DELETE FROM wingo WHERE time < '${TwoDayAgoUnixMoment}'`,
    );
    await connection.execute(
      `DELETE FROM 5d WHERE time < '${TwoDayAgoUnixMoment}'`,
    );
    await connection.execute(
      `DELETE FROM k3 WHERE time < '${TwoDayAgoUnixMoment}'`,
    );
    await connection.execute(
      `DELETE FROM trx_wingo_game WHERE time < '${TwoDayAgoUnixMoment}'`,
    );
  } catch (error) {
    console.log(error);
    console.log("Failed to delete old games table!");
  }
};






const updateSafeBonusAndTransfer = async () => {
  try {
    // Fetch `safeinterest` from the `admin_ac` table
    const [adminConfig] = await connection.query(
      "SELECT safeinterest FROM admin_ac LIMIT 1"
    );

    if (!adminConfig || adminConfig.length === 0) {
      console.error("Failed to fetch safeinterest value. Aborting.");
      return;
    }

    const safeInterest = parseFloat(adminConfig[0].safeinterest);

    if (isNaN(safeInterest) || safeInterest <= 0) {
      console.error("Invalid safeinterest value. Aborting.");
      return;
    }

    // Fetch users with `third_party_money` greater than 0
    const [users] = await connection.query(
      "SELECT phone, third_party_money, safe_bonus FROM users WHERE third_party_money > 0"
    );

    if (users.length === 0) {
      console.log("No users with third_party_money to update.");
      return;
    }

    for (const user of users) {
      const { phone, third_party_money, safe_bonus } = user;
      const bonusAmount = parseFloat(
        (parseFloat(third_party_money) * safeInterest).toFixed(2)
      ); // Calculate bonus based on safeinterest

      if (isNaN(bonusAmount) || bonusAmount <= 0) {
        console.error(`Invalid bonus amount for user ${phone}. Skipping.`);
        continue;
      }

      // Safely add the bonus amount to the current safe_bonus and third_party_money
      const updatedSafeBonus = parseFloat(
        (parseFloat(safe_bonus || 0) + bonusAmount).toFixed(2)
      );
      const updatedThirdPartyMoney = parseFloat(
        (parseFloat(third_party_money) + bonusAmount).toFixed(2)
      );

      const transactionConnection = await connection.getConnection();
      try {
        await transactionConnection.beginTransaction();

        // Update safe_bonus and third_party_money in users table
        await transactionConnection.query(
          "UPDATE users SET safe_bonus = ?, third_party_money = ? WHERE phone = ?",
          [updatedSafeBonus, updatedThirdPartyMoney, phone]
        );

        // Insert into safe_transfer table
        const transferId = Math.floor(
          100000000000 + Math.random() * 900000000000
        ).toString();
        const epochTime = Date.now();
        await transactionConnection.query(
          "INSERT INTO safe_transfer (phone, transfer_id, amount, type, time) VALUES (?, ?, ?, ?, ?)",
          [phone, transferId, bonusAmount, 3, epochTime]
        );

        await transactionConnection.commit();
        console.log(
          `Successfully updated safe_bonus, third_party_money, and logged transfer for user ${phone}.`
        );
      } catch (err) {
        await transactionConnection.rollback();
        console.error(`Error processing user ${phone}:`, err);
      } finally {
        transactionConnection.release();
      }
    }
  } catch (err) {
    console.error("Error in updateSafeBonusAndTransfer:", err);
  }
};





const gameController = {
  gameStatistics,
  gameStatisticsPage,
  autoCleanOldGames,
  updateSafeBonusAndTransfer, // Added function
};

export default gameController;
