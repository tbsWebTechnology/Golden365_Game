import connection from "../config/connectDB.js";
import jwt from 'jsonwebtoken'
import md5 from "md5";
// import e from "express";
import e from "express";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const homePage = async(req, res) => {
    try {
      let isAuthenticated = !!req.cookies.auth; // true if logged in, false if not

    const [settings] = await connection.query('SELECT `app` , `app_name`, `app_about` , `app_notification` , `notice1` , `notice2` , `notice3` FROM admin_ac');
    let app = settings[0].app;
    
    let app_name = settings[0].app_name;
    let app_about = settings[0].app_about;
    let app_notification = settings[0].app_notification;

    let notice1 = settings[0].notice1;
    let notice2 = settings[0].notice2;
    let notice3 = settings[0].notice3;

    const bannersDir = path.join(__dirname, '../public/uploads/banners');
    fs.readdir(bannersDir, (err, files) => {
        if (err) {
            console.error('Error reading banner files:', err);
            return res.status(500).send('Internal server error');
        }
        // Filter out directories and get only file names
        const bannerFiles = files.filter(file => fs.statSync(path.join(bannersDir, file)).isFile());
        res.render("home/index.ejs", {app, banners: bannerFiles, isAuthenticated, app_name, app_about, app_notification, notice1, notice2, notice3 }); // Pass banner files to the member page template
  

      });
    } catch (error) {
        return res.status(500).send('Internal server error');
    }
}



// Function to handle fetching banner files for the admin panel
const getBannerFiles = (req, res) => {
    // Read the contents of the 'uploads/banners' directory
    const bannersDir = path.join(__dirname, '../uploads/banners');
    fs.readdir(bannersDir, (err, files) => {
        if (err) {
            console.error('Error reading banner files:', err);
            return res.status(500).send('Internal server error');
        }
        // Filter out directories and get only file names
        const bannerFiles = files.filter(file => fs.statSync(path.join(bannersDir, file)).isFile());
        res.render('index', { banners: bannerFiles }); // Pass banner files to the homepage template
    });
};

const activityPage = async (req, res) => {
  return res.render("checkIn/activity.ejs");
};

const supportPage = async (req, res) => {
  let auth = req.cookies.auth;

  const [users] = await connection.query(
    "SELECT `level`, `ctv` FROM users WHERE token = ?",
    [auth],
  );

  let telegram = "";
  if (users.length == 0) {
    let [settings] = await connection.query(
      "SELECT `telegram`, `cskh` FROM admin_ac",
    );
    telegram = settings[0].telegram;
  } else {
    if (users[0].level != 0) {
      var [settings] = await connection.query("SELECT * FROM admin_ac");
    } else {
      var [check] = await connection.query(
        "SELECT `telegram` FROM point_list WHERE phone = ?",
        [users[0].ctv],
      );
      if (check.length == 0) {
        var [settings] = await connection.query("SELECT * FROM admin_ac");
      } else {
        var [settings] = await connection.query(
          "SELECT `telegram` FROM point_list WHERE phone = ?",
          [users[0].ctv],
        );
      }
    }
    telegram = settings[0].telegram;
  }

  return res.render("member/support.ejs", { telegram });
};


const originalPage = async (req, res) => {
  return res.render("home/original.ejs");
}

const fishingPage = async (req, res) => {
  return res.render("home/fishing.ejs");
}

const casinosPage = async (req, res) => {
  return res.render("home/casinos.ejs");
}

const slotsPage = async (req, res) => {
  return res.render("home/slots.ejs");
}

const betHistoryPage = async (req, res) => {
  return res.render("member/bet-history.ejs");
}

const betk3Page = async (req, res) => {
  return res.render("member/k3-bet-history.ejs");
}

const bet5dPage = async (req, res) => {
  return res.render("member/5d-bet-history.ejs");
}

const betwingoPage = async (req, res) => {
  return res.render("member/wingo-bet-history.ejs");
}

const bettrxwingoPage = async (req, res) => {
  return res.render("member/trx-wingo-bet-history.ejs");
}

const attendancePage = async (req, res) => {
  return res.render("checkIn/attendance.ejs");
};
const firstDepositBonusPage = async (req, res) => {
  return res.render("checkIn/firstDepositBonus.ejs");
};
const promotionRebateRatioPage = async (req, res) => {
  return res.render("promotion/rebateRadio.ejs");
};

const rebatePage = async (req, res) => {
  return res.render("checkIn/rebate.ejs");
};

const vipPage = async (req, res) => {
  return res.render("checkIn/vip.ejs");
};
const newHot = async (req, res) => {
  return res.render("checkIn/newHot.ejs");
};
const youtube = async (req, res) => {
  return res.render("checkIn/youtube.ejs");
};
const program = async (req, res) => {
  return res.render("checkIn/program.ejs");
};
const winzo = async (req, res) => {
  return res.render("checkIn/winzo.ejs");
};
const agent = async (req, res) => {
  return res.render("checkIn/agent.ejs");
};
const mystery = async (req, res) => {
  return res.render("checkIn/mystery.ejs");
};
const dailyCheck = async (req, res) => {
  return res.render("checkIn/dailyCheck.ejs");
};

const jackpotPage = async (req, res) => {
  return res.render("checkIn/jackpot.ejs");
};

const dailytaskPage = async (req, res) => {
  return res.render("checkIn/dailytask.ejs");
};

const invibonusPage = async (req, res) => {
  return res.render("checkIn/invibonus.ejs");
};
const invitationRulesPage = async (req, res) => {
  return res.render("checkIn/invitationRules.ejs");
};

const jackpotRulesPage = async (req, res) => {
  return res.render("checkIn/rules.ejs");
};

const aviatorBettingRewardPage = async (req, res) => {
  return res.render("checkIn/aviator_betting_reward.ejs");
};
const socialVideoAwardPagePage = async (req, res) => {
  return res.render("checkIn/social_video_award.ejs");
};

const jackpotWiningStarPage = async (req, res) => {
  return res.render("checkIn/wining_star.ejs");
};

const checkInPage = async (req, res) => {
  return res.render("checkIn/checkIn.ejs");
};

const checkDes = async (req, res) => {
  return res.render("checkIn/checkDes.ejs");
};

const checkRecord = async (req, res) => {
  return res.render("checkIn/checkRecord.ejs");
};

const addBank = async (req, res) => {
  return res.render("wallet/addbank.ejs");
};

const selectBank = async (req, res) => {
  return res.render("wallet/selectBank.ejs");
};
const invitationRecord = async (req, res) => {
  return res.render("checkIn/invitationRecord.ejs");
};
const rechargeAwardCollectionRecord = async (req, res) => {
  return res.render("checkIn/rechargeAwardCollectionRecord.ejs");
};
const attendanceRecordPage = async (req, res) => {
  return res.render("checkIn/attendanceRecord.ejs");
};
const attendanceRulesPage = async (req, res) => {
  return res.render("checkIn/attendanceRules.ejs");
};

const changeAvatarPage = async (req, res) => {
  return res.render("member/change_avatar.ejs");
};

// promotion
const promotionPage = async (req, res) => {
  return res.render("promotion/promotion.ejs");
};

const subordinatesPage = async (req, res) => {
  return res.render("promotion/subordinates.ejs");
};

const promotion1Page = async (req, res) => {
  return res.render("promotion/promotion1.ejs");
};

const TeamPartnerPage = async (req, res) => {
  return res.render("promotion/TeamPartner.ejs");
};

const turntablePage = async (req, res) => {
  return res.render("promotion/turntable.ejs");
};

const RulesPage = async (req, res) => {
  return res.render("promotion/Rules.ejs");
};


const DetailsPage = async (req, res) => {
  return res.render("promotion/Detail.ejs");
};

const PromotionsharePage = async (req, res) => {
  return res.render("promotion/PromotionShare.ejs");
};

const IntroducePage = async (req, res) => {
  return res.render("promotion/Introduce.ejs");
};

const promotionmyTeamPage = async (req, res) => {
  return res.render("promotion/myTeam.ejs");
};

const promotionDesPage = async (req, res) => {
  return res.render("promotion/promotionDes.ejs");
};

const comhistoryPage = async (req, res) => {
  return res.render("promotion/comhistory.ejs");
};

const tutorialPage = async (req, res) => {
  return res.render("promotion/tutorial.ejs");
};

const bonusRecordPage = async (req, res) => {
  return res.render("promotion/bonusrecord.ejs");
};

// wallet

const transactionhistoryPage = async (req, res) => {
  return res.render("wallet/transactionhistory.ejs");
};



const casinoHistoryPage = async (req, res) => {
  return res.render("member/casino-bet-history.ejs");
};


const fishingHistoryPage = async (req, res) => {
  return res.render("member/fishing-bet-history.ejs");
};


const rummyHistoryPage = async (req, res) => {
  return res.render("member/rummy-bet-history.ejs");
};


const originalHistoryPage = async (req, res) => {
  return res.render("member/original-bet-history.ejs");
};

const slotsHistoryPage = async (req, res) => {
  return res.render("member/slots-bet-history.ejs");
};


const strongBoxPage = async (req, res) => {
  return res.render("member/strongbox.ejs");
};

const walletPage = async (req, res) => {
  return res.render("wallet/index.ejs");
};

// const rechargePage = async (req, res) => {
//   return res.render("wallet/recharge.ejs", {
//     MINIMUM_MONEY_USDT: process.env.MINIMUM_MONEY_USDT,
//     MINIMUM_MONEY_INR: process.env.MINIMUM_MONEY_INR,
//     USDT_INR_EXCHANGE_RATE: process.env.USDT_INR_EXCHANGE_RATE,
//   });
// };


const rechargePage = async (req, res) => {
  try {
    // Query the admin_ac table
    const [results] = await connection.query("SELECT mininrdep, minusdtdep, inrusdtrate, minfirstrech FROM admin_ac LIMIT 1");

    if (!results || results.length === 0) {
      console.error("No admin configuration found in admin_ac table");
      return res.status(404).send("Admin configuration not found");
    }

    const adminData = results[0]; // Extract the first result

    return res.render("wallet/recharge.ejs", {
      MINIMUM_MONEY_USDT: adminData.minusdtdep,
      MINIMUM_MONEY_INR: adminData.mininrdep,
      USDT_INR_EXCHANGE_RATE: adminData.inrusdtrate,
      MIN_FIRST_RECHARGE: adminData.minfirstrech,
    });
  } catch (error) {
    console.error("Error fetching admin configuration:", error);
    return res.status(500).send("Internal server error");
  }
};




const rechargerecordPage = async (req, res) => {
  return res.render("wallet/rechargerecord.ejs");
};

const withdrawalPage = async (req, res) => {
  return res.render("wallet/withdrawal.ejs", {
    MINIMUM_MONEY_USDT: process.env.MINIMUM_WITHDRAWAL_MONEY_USDT,
    MINIMUM_MONEY_INR: process.env.MINIMUM_WITHDRAWAL_MONEY_INR,
    USDT_INR_EXCHANGE_RATE: process.env.USDT_INR_EXCHANGE_RATE,
  });
};

const withdrawalrecordPage = async (req, res) => {
  return res.render("wallet/withdrawalrecord.ejs");
};
const transfer = async (req, res) => {
  return res.render("wallet/transfer.ejs");
};

// member page
const mianPage = async (req, res) => {
  let auth = req.cookies.auth;
  const [user] = await connection.query(
    "SELECT `level` FROM users WHERE `token` = ? ",
    [auth],
  );
  const [settings] = await connection.query("SELECT `cskh` FROM admin_ac");
  let cskh = settings[0].cskh;
  let level = user[0].level;
  return res.render("member/index.ejs", { level, cskh });
};

const settingsPage = async (req, res) => {
  let auth = req.cookies.auth;
  const [user] = await connection.query(
    "SELECT * FROM users WHERE `token` = ? ",
    [auth],
  );

  return res.render("member/settings.ejs", {
    NICKNAME: user[0].name_user,
    USER_ID: user[0].id_user,
  });
};

const aboutPage = async (req, res) => {
  return res.render("member/about/index.ejs");
};

const guidePage = async (req, res) => {
  return res.render("member/guide.ejs");
};

const feedbackPage = async (req, res) => {
  return res.render("member/feedback.ejs");
};

const notificationPage = async (req, res) => {
  return res.render("member/notification.ejs");
};

const loginNotificationPage = async (req, res) => {
  return res.render("member/login_notification.ejs");
};

const recordsalary = async (req, res) => {
  return res.render("member/about/recordsalary.ejs");
};

const privacyPolicy = async (req, res) => {
  return res.render("member/about/privacyPolicy.ejs");
};

const newtutorial = async (req, res) => {
  return res.render("member/newtutorial.ejs");
};

const forgot = async (req, res) => {
  let auth = req.cookies.auth;
  const [user] = await connection.query(
    "SELECT `time_otp` FROM users WHERE token = ? ",
    [auth],
  );
  let time = user[0].time_otp;
  return res.render("member/forgot.ejs", { time });
};

const redenvelopes = async (req, res) => {
  return res.render("member/redenvelopes.ejs");
};
const newGift = async (req, res) => {
  return res.render("checkIn/newGift.ejs");
};


const riskAgreement = async (req, res) => {
  return res.render("member/about/riskAgreement.ejs");
};

const myProfilePage = async (req, res) => {
  return res.render("member/myProfile.ejs");
};

const getSalaryRecord = async (req, res) => {
  const auth = req.cookies.auth;

  const [rows] = await connection.query(`SELECT * FROM users WHERE token = ?`, [
    auth,
  ]);
  let rowstr = rows[0];
  if (!rows) {
    return res.status(200).json({
      message: "Failed",
      status: false,
    });
  }
  const [getPhone] = await connection.query(
    `SELECT * FROM salary WHERE phone = ? ORDER BY time DESC`,
    [rowstr.phone],
  );

  console.log("asdasdasd : " + [rows.phone]);
  return res.status(200).json({
    message: "Success",
    status: true,
    data: {},
    rows: getPhone,
  });
};

const homeController = {
  casinoHistoryPage,
  fishingHistoryPage,
  rummyHistoryPage,
  originalHistoryPage,
  slotsHistoryPage,
  homePage,
  checkInPage,
  invibonusPage,
  rebatePage,
  jackpotPage,
  originalPage,
  fishingPage,
  casinosPage,
  slotsPage,
  betHistoryPage,
  betk3Page,
  bet5dPage,
  betwingoPage,
  bettrxwingoPage,
  vipPage,
  strongBoxPage,
  activityPage,
  TeamPartnerPage,
  dailytaskPage,
  promotionPage,
  subordinatesPage,
  promotion1Page,
  turntablePage,
  IntroducePage,
  DetailsPage,
  RulesPage,
  PromotionsharePage,
  walletPage,
  mianPage,
  myProfilePage,
  promotionmyTeamPage,
  promotionDesPage,
  comhistoryPage,
  tutorialPage,
  bonusRecordPage,
  rechargePage,
  rechargerecordPage,
  withdrawalPage,
  withdrawalrecordPage,
  aboutPage,
  privacyPolicy,
  riskAgreement,
  newGift,
  newtutorial,
  redenvelopes,
  forgot,
  checkDes,
  newHot,
  dailyCheck,
  winzo,
  agent,
  youtube,
  program,
  mystery,
  checkRecord,
  addBank,
  transfer,
  recordsalary,
  getSalaryRecord,
  transactionhistoryPage,
  jackpotRulesPage,
  jackpotWiningStarPage,
  attendancePage,
  firstDepositBonusPage,
  aviatorBettingRewardPage,
  socialVideoAwardPagePage,
  promotionRebateRatioPage,
  settingsPage,
  guidePage,
  feedbackPage,
  notificationPage,
  loginNotificationPage,
  selectBank,
  invitationRecord,
  rechargeAwardCollectionRecord,
  attendanceRecordPage,
  attendanceRulesPage,
  changeAvatarPage,
  invitationRulesPage,
  supportPage,
  getBannerFiles,
};

export default homeController;
