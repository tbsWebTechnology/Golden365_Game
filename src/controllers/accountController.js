import axios from "axios";
import connection from "../config/connectDB.js";
import jwt from "jsonwebtoken";
import md5 from "md5";
import moment from "moment";
import Joi from "joi";
import bcrypt from "bcrypt";
import _ from "lodash";

const timeNow = Date.now();
const saltRounds = parseInt(process.env.SALT_ROUNDS || 5);

export const PaymentStatusMap = {
  PENDING: 0,
  SUCCESS: 1,
  CANCELLED: 2,
};


const loginPage = async (req, res) => {
  return res.render("account/login.ejs");
};


const adminloginPage = async (req, res) => {
  return res.render("account/admin-login.ejs");
};

const registerPage = async (req, res) => {
  return res.render("account/register.ejs");
};

const forgotPage = async (req, res) => {
  return res.render("account/forgot.ejs");
};

const forgotResetPage = async (req, res) => {
  return res.render("account/forgot_reset.ejs");
};

const keFuMenu = async (req, res) => {
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

  return res.render("keFuMenu.ejs", { telegram });
};

const login = async (req, res) => {
  const schema = Joi.object({
    phoneNumber: Joi.string().length(10).required(),
    pwd: Joi.string().min(6).required(),
    dialCode: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let { phoneNumber, pwd, dialCode } = req.body;

  try {
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE phone = ? AND dial_code = ?",
      [phoneNumber, dialCode],
    );
    if (_.isEmpty(rows)) {
      return res.status(200).json({
        message: "Incorrect Phone Number or Password",
        status: false,
      });
    }

    const validPassword = await bcrypt.compare(pwd, rows[0].password);

    if (!validPassword) {
      return res.status(400).json({
        status: false,
        message: "Invalid password",
      });
    }

    if (rows[0].status !== 1) {
      return res.status(200).json({
        message: "Account has been locked",
        status: false,
      });
    }

    const { password, money, ip, veri, ip_address, status, time, ...others } =
      rows[0];
    const accessToken = jwt.sign(
      {
        user: { ...others },
        timeNow: timeNow,
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1d" },
    );

    await connection.execute(
      "UPDATE `users` SET `token` = ? WHERE `phone` = ? ",
      [md5(accessToken), phoneNumber],
    );
    return res.status(200).json({
      message: "Login Successfully!",
      status: true,
      token: accessToken,
      value: md5(accessToken),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};



// const register = async (req, res) => {
//   try {
//     const schema = Joi.object({
//       phoneNumber: Joi.string().length(10).required(),
//       pwd: Joi.string().min(6).required(),
//       invitecode: Joi.string().required(),
//       dialCode: Joi.string().required(),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) {
//       console.error("Validation error:", error.details[0].message);
//       return res.status(400).json({ message: error.details[0].message });
//     }

//     let { phoneNumber, pwd, invitecode, dialCode } = req.body;

//     console.log("Received registration data:", req.body);

//     let id_user = utils.generateUniqueNumberCodeByDigit(7);

//     while (true) {
//       try {
//         const [rows] = await connection.query(
//           "SELECT `id_user` FROM users WHERE `id_user` = ?",
//           [id_user]
//         );

//         if (_.isEmpty(rows)) {
//           break;
//         }

//         id_user = utils.generateUniqueNumberCodeByDigit(7);
//       } catch (error) {
//         console.error("Error while generating unique id_user:", error);
//         throw error;
//       }
//     }

//     console.log("Generated unique id_user:", id_user);

//     let otp = utils.generateUniqueNumberCodeByDigit(6);
//     let name_user = "Member" + utils.generateUniqueNumberCodeByDigit(5);
//     let code = utils.generateUniqueNumberCodeByDigit(5) + id_user;

//     console.log("Generated OTP, name_user, and code:", { otp, name_user, code });

//     try {
//       const [adminData] = await connection.query(
//         "SELECT BONUS_MONEY_ON_REGISTER, INVITER_BONUS_MONEY_ON_REGISTER FROM admin_ac LIMIT 1"
//       );
//       var bonus_money = parseFloat(adminData[0]?.BONUS_MONEY_ON_REGISTER || 0);
//       var inv_bonus_money = parseFloat(adminData[0]?.INVITER_BONUS_MONEY_ON_REGISTER || 0);
//     } catch (error) {
//       console.error("Error fetching admin data:", error);
//       throw error;
//     }

//     console.log("Fetched admin data:", { bonus_money, inv_bonus_money });

//     let ip = utils.getIpAddress(req);
//     let time = moment().valueOf();

//     try {
//       const [check_u] = await connection.query("SELECT * FROM users WHERE phone = ?", [phoneNumber]);
//       const [check_i] = await connection.query("SELECT * FROM users WHERE code = ?", [invitecode]);
//       const [check_ip] = await connection.query("SELECT * FROM users WHERE ip_address = ?", [ip]);

//       if (check_u.length > 0) {
//         console.warn("Phone number already registered:", phoneNumber);
//         return res.status(200).json({
//           message: "Registered phone number",
//           status: false,
//         });
//       }

//       if (check_i.length === 0) {
//         console.warn("Invalid referral code:", invitecode);
//         return res.status(200).json({
//           message: "Referrer code does not exist",
//           status: false,
//         });
//       }

//       if (check_ip.length > 3) {
//         console.warn("IP address already registered:", ip);
//         return res.status(200).json({
//           message: "Registered IP address",
//           status: false,
//         });
//       }
//     } catch (error) {
//       console.error("Error checking existing user data:", error);
//       throw error;
//     }

//     console.log("User validation checks passed");

//     let check_i; // Declare in a higher scope
// try {
//   [check_i] = await connection.query("SELECT * FROM users WHERE code = ?", [invitecode]);
//   if (!check_i || check_i.length === 0) {
//     console.warn("Invalid referral code:", invitecode);
//     return res.status(200).json({
//       message: "Referrer code does not exist",
//       status: false,
//     });
//   }
// } catch (error) {
//   console.error("Error fetching referrer data:", error);
//   throw error;
// }

// console.log("Referrer data fetched successfully:", check_i);

// let ctv = check_i[0].level == 2 ? check_i[0].phone : check_i[0].ctv;


//   //   try {


//   //     console.log("Insert data:", {
//   //   id_user,
//   //   phoneNumber,
//   //   name_user,
//   //   hashedPassword,
//   //   pwd,
//   //   bonus_money,
//   //   code,
//   //   invitecode,
//   //   ctv,
//   //   otp,
//   //   ip,
//   //   time,
//   //   dialCode,
//   // });

//   let hashedPassword; // Declare hashedPassword in the correct scope

//   try {
//     if (!pwd || typeof pwd !== "string") {
//       console.error("Invalid password:", pwd);
//       throw new Error("Password is required and must be a string");
//     }

//     console.log("Hashing password with salt rounds:", 10);
//     hashedPassword = await bcrypt.hash(pwd, 10); // Assign hashed password
//     console.log("Hashed password:", hashedPassword);

//     const sql =
//       "INSERT INTO users SET id_user = ?, phone = ?, name_user = ?, password = ?, plain_password = ?, money = ?, bonus_money = ?, third_party_money = ?, code = ?, invite = ?, ctv = ?, veri = ?, otp = ?, ip_address = ?, status = ?, time = ?, dial_code = ?";
//     await connection.execute(sql, [
//       id_user,
//       phoneNumber,
//       name_user,
//       hashedPassword, // Use hashedPassword here
//       pwd,
//       bonus_money,
//       bonus_money,
//       0,
//       code,
//       invitecode,
//       ctv,
//       1,
//       otp,
//       ip,
//       1,
//       time,
//       dialCode,
//     ]);

//     console.log("User successfully inserted into users table");
//   } catch (error) {
//     console.error("Error inserting user data:", error.message);
//     if (error.sqlMessage) {
//       console.error("SQL Error Message:", error.sqlMessage);
//     }
//     throw error;
//   }

//     try {
//       await connection.execute("INSERT INTO point_list SET phone = ?", [phoneNumber]);
//       console.log("User successfully added to point_list table");
//     } catch (error) {
//       console.error("Error inserting into point_list table:", error);
//       throw error;
//     }

//     // Additional processing...
//     console.log("Processing inviter data and rewards...");

//     try {
//       const [rows] = await connection.query("SELECT * FROM users WHERE phone = ?", [phoneNumber]);
//       const others = rows[0];

//       const accessToken = jwt.sign(
//         {
//           user: {
//             ...others,
//             password: undefined,
//             money: undefined,
//             ip: undefined,
//             veri: undefined,
//             ip_address: undefined,
//             status: undefined,
//             time: undefined,
//           },
//           timeNow: Date.now(),
//         },
//         process.env.JWT_ACCESS_TOKEN,
//         { expiresIn: "1d" }
//       );

//       await connection.execute("UPDATE `users` SET `token` = ? WHERE `phone` = ?", [md5(accessToken), phoneNumber]);
//       console.log("Access token successfully generated and updated for user:", phoneNumber);

//       return res.status(200).json({
//         message: "Registered successfully",
//         status: true,
//         token: accessToken,
//         value: md5(accessToken),
//       });
//     } catch (error) {
//       console.error("Error generating or updating access token:", error);
//       throw error;
//     }
//   } catch (error) {
//     console.error("Unexpected error in register function:", error);
//     return res.status(500).json({
//       status: false,
//       message: "Internal Server Error",
//     });
//   }
// };











const register = async (req, res) => {
  try {
    const schema = Joi.object({
      phoneNumber: Joi.string().length(10).required(),
      pwd: Joi.string().min(6).required(),
      invitecode: Joi.string().required(),
      dialCode: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let { phoneNumber, pwd, invitecode, dialCode } = req.body;

    let id_user = utils.generateUniqueNumberCodeByDigit(7);

    while (true) {
      const [rows] = await connection.query(
        "SELECT `id_user` FROM users WHERE `id_user` = ?",
        [id_user]
      );

      if (_.isEmpty(rows)) {
        break;
      }

      id_user = utils.generateUniqueNumberCodeByDigit(7);
    }

    let otp = utils.generateUniqueNumberCodeByDigit(6);
    let name_user = "Member" + utils.generateUniqueNumberCodeByDigit(5);
    let code = utils.generateUniqueNumberCodeByDigit(5) + id_user;
    // let bonus_money = parseFloat(process.env.BONUS_MONEY_ON_REGISTER || 0); 
    // Fetch bonus_money from the admin_ac table
    const [adminData] = await connection.query("SELECT BONUS_MONEY_ON_REGISTER, INVITER_BONUS_MONEY_ON_REGISTER FROM admin_ac LIMIT 1");
    let bonus_money = parseFloat(adminData[0]?.BONUS_MONEY_ON_REGISTER || 0); // Fallback to 0 if not found



    let inv_bonus_money = parseFloat(adminData[0]?.INVITER_BONUS_MONEY_ON_REGISTER || 0); // Fallback to 0 if not found


    let ip = utils.getIpAddress(req);
    let time = moment().valueOf();

    const [check_u] = await connection.query("SELECT * FROM users WHERE phone = ?", [phoneNumber]);

    const [check_ip] = await connection.query("SELECT * FROM users WHERE ip_address = ?", [ip]);

    if (check_u.length > 0) {
      return res.status(200).json({
        message: "Registered phone number",
        status: false,
      });
    }

    // if (check_i.length === 0) {
    //   return res.status(200).json({
    //     message: "Referrer code does not exist",
    //     status: false,
    //   });
    // }

    if (check_ip.length > 3) {
      return res.status(200).json({
        message: "Registered IP address",
        status: false,
      });
    }

    let check_i; // Declare in a higher scope
    try {
      [check_i] = await connection.query("SELECT * FROM users WHERE code = ?", [invitecode]);
      if (!check_i || check_i.length === 0) {
        console.warn("Invalid referral code:", invitecode);
        return res.status(200).json({
          message: "Referrer code does not exist",
          status: false,
        });
      }
    } catch (error) {
      console.error("Error fetching referrer data:", error);
      throw error;
    }

    console.log("Referrer data fetched successfully:", check_i);

    let ctv = check_i[0].level == 2 ? check_i[0].phone : check_i[0].ctv;
    let hashedPassword; // Declare hashedPassword in the correct scope

    try {
      if (!pwd || typeof pwd !== "string") {
        console.error("Invalid password:", pwd);
        throw new Error("Password is required and must be a string");
      }

      console.log("Hashing password with salt rounds:", 10);
      hashedPassword = await bcrypt.hash(pwd, 10); // Assign hashed password
      console.log("Hashed password:", hashedPassword);

      const sql =
        "INSERT INTO users SET id_user = ?, phone = ?, name_user = ?, password = ?, plain_password = ?, money = ?, bonus_money = ?, third_party_money = ?, code = ?, invite = ?, ctv = ?, veri = ?, otp = ?, ip_address = ?, status = ?, time = ?, dial_code = ?";
      await connection.execute(sql, [
        id_user,
        phoneNumber,
        name_user,
        hashedPassword, // Use hashedPassword here
        pwd,
        bonus_money,
        bonus_money,
        0,
        code,
        invitecode,
        ctv,
        1,
        otp,
        ip,
        1,
        time,
        dialCode,
      ]);

      console.log("User successfully inserted into users table");
    } catch (error) {
      console.error("Error inserting user data:", error.message);
      if (error.sqlMessage) {
        console.error("SQL Error Message:", error.sqlMessage);
      }
      throw error;
    }



    await connection.execute("INSERT INTO point_list SET phone = ?", [phoneNumber]);

    let [check_code] = await connection.query("SELECT * FROM users WHERE invite = ?", [invitecode]);

    if (check_i.name_user !== "Admin") {
      let levels = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];

      for (let i = 0; i < levels.length; i++) {
        if (check_code.length < levels[i]) {
          break;
        }
        await connection.execute("UPDATE users SET user_level = ? WHERE code = ?", [i + 1, invitecode]);
      }
    }

    let sql4 = "INSERT INTO turn_over SET phone = ?, code = ?, invite = ?";
    await connection.query(sql4, [phoneNumber, code, invitecode]);

    const [rows] = await connection.query("SELECT * FROM users WHERE phone = ?", [phoneNumber]);
    const others = rows[0];

    const accessToken = jwt.sign(
      {
        user: {
          ...others,
          password: undefined,
          money: undefined,
          ip: undefined,
          veri: undefined,
          ip_address: undefined,
          status: undefined,
          time: undefined,
        },
        timeNow: timeNow,
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1d" }
    );

    await connection.execute("UPDATE `users` SET `token` = ? WHERE `phone` = ?", [md5(accessToken), phoneNumber]);

    // Insert into the claimed_rewards table for the new user
    const claimedRewardSql = `
INSERT INTO claimed_rewards (phone, reward_id, type, amount, status, time)
VALUES (?, ?, ?, ?, ?, ?)
`;
    const userRewardId = utils.generateUniqueNumberCodeByDigit(6); // Unique reward ID for the new user
    const userRewardType = "WELCOME BONUS"; // Reward type for the new user
    const userRewardStatus = "1"; // Define the status based on your business logic

    await connection.execute(claimedRewardSql, [
      phoneNumber,
      userRewardId,
      userRewardType,
      bonus_money,
      userRewardStatus,
      Date.now() // Generates the timestamp in milliseconds
    ]);

    // Query to retrieve inviter's phone number and current money balance using the invite code
    const inviterPhoneQuery = "SELECT phone, money FROM users WHERE code = ?";
    const [inviterData] = await connection.query(inviterPhoneQuery, [invitecode]);

    if (inviterData.length > 0) {
      const inviterPhoneNumber = inviterData[0].phone;
      const inviterCurrentMoney = parseFloat(inviterData[0].money);

      // Calculate the new balance for the inviter, using bonus_money
      const newInviterMoney = inviterCurrentMoney + inv_bonus_money;

      // Update the inviter's money balance in the users table
      const updateInviterMoneySql = "UPDATE users SET money = ? WHERE phone = ?";
      await connection.execute(updateInviterMoneySql, [newInviterMoney, inviterPhoneNumber]);

      // Insert into the claimed_rewards table for the inviter
      const inviterRewardId = utils.generateUniqueNumberCodeByDigit(6);
      const inviterRewardType = "INVITER BONUS";
      const inviterRewardStatus = "1";

      await connection.execute(claimedRewardSql, [
        inviterPhoneNumber,
        inviterRewardId,
        inviterRewardType,
        inv_bonus_money, // Using the same bonus amount for inviter
        inviterRewardStatus,
        Date.now() // Generates the timestamp in milliseconds
      ]);
    }

    return res.status(200).json({
      message: "Registered successfully",
      status: true,
      token: accessToken,
      value: md5(accessToken),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};














const sendOtpCode = async (req, res) => {
  try {
    const schema = Joi.object({
      phone: Joi.string().length(10).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: error.details[0].message, status: false });
    }

    let { phone } = req.body;
    let now = new Date().getTime();
    let timeEnd = moment().add(1, "minute").valueOf();
    let otp = utils.generateUniqueNumberCodeByDigit(6);

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE `phone` = ? AND veri = 1",
      [phone],
    );

    if (_.isEmpty(rows)) {
      return res.status(200).json({
        message: "Otp sent successfully",
        status: false,
      });
    }

    if (rows[0].time_otp - now <= 0) {
      const response = await axios({
        method: "GET",
        url: `https://www.fast2sms.com/dev/bulkV2`,
        params: {
          authorization: process.env.FAST2SMS_API,
          route: "q",
          message: `Your verification code is ${otp}`,
          flash: 0,
          numbers: phone,
        },
      });

      if (response.data.return) {
        await connection.execute(
          "UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ",
          [otp, timeEnd, phone],
        );
        return res.status(200).json({
          message: "Otp sent successfully",
          status: true,
          timeStamp: now,
          timeEnd: timeEnd,
        });
      }

      return res.status(400).json({
        message: "Unable to send OTP code",
        status: false,
      });
    } else {
      return res.status(200).json({
        message: "You can send otp code again after 1 minute",
        status: false,
        timeEnd: rows[0].time_otp,
        timeStamp: now,
      });
    }
  } catch (error) {
    console.log(error);
    console.log(error.response.data);
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false });
  }
};

const resetPasswordByOtpAndPhone = async (req, res) => {
  try {
    const schema = Joi.object({
      phone: Joi.string().length(10).required(),
      otp: Joi.number().integer().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .json({ message: error.details[0].message, status: false });
    }

    let { phone, otp, password: newPassword } = req.body;

    const [rows] = await connection.query(
      "SELECT `otp`, `time_otp` FROM users WHERE `phone` = ? AND veri = 1",
      [phone],
    );

    if (_.isEmpty(rows)) {
      return res.status(400).json({
        message: "Account does not exist",
        status: false,
        timeStamp: new Date().getTime(),
      });
    }

    let user = rows[0];
    let now = new Date().getTime();

    if (user.time_otp - now > 0) {
      if (parseInt(user.otp) === otp) {
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        await connection.execute(
          "UPDATE users SET password = ?, plain_password = ? WHERE phone = ? ",
          [hashedPassword, newPassword, phone],
        );
        return res.status(200).json({
          message: "Change password successfully",
          status: true,
          timeStamp: now,
        });
      }

      return res.status(400).json({
        message: "OTP code is incorrect",
        status: false,
        timeStamp: now,
      });
    }

    return res.status(400).json({
      message: "OTP code has expired",
      status: false,
      timeStamp: now,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

const resetPasswordByPassword = async (req, res) => {
  try {
    console.log("✅ API Hit: resetPasswordByPassword");

    let auth = req.cookies.auth;
    console.log("🔹 Auth Token:", auth);

    const schema = Joi.object({
      password: Joi.string().min(6).required(),
      newPassWord: Joi.string().min(6).required(),
      RePassWord: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      console.log("❌ Validation Error:", error.details[0].message);
      return res.status(200).json({
        message: error.details[0].message,
        status: false,
      });
    }

    let { password, newPassWord, RePassWord } = req.body;

    console.log("🔹 Old Password:", password);
    console.log("🔹 New Password:", newPassWord);
    console.log("🔹 Re-entered Password:", RePassWord);

    if (newPassWord !== RePassWord) {
      console.log("❌ Error: Passwords do not match");
      return res.status(200).json({
        message: "Password does not match",
        status: false,
      });
    }

    console.log("🔍 Checking if user exists...");

    const [users] = await connection.query(
      "SELECT * FROM users WHERE token = ?",
      [auth]
    );

    console.log("🔹 User Found:", users.length > 0 ? "Yes" : "No");

    if (_.isEmpty(users)) {
      console.log("❌ Error: Account does not exist");
      return res.status(200).json({
        message: "Account does not exist",
        status: false,
        timeStamp: new Date().getTime(),
      });
    }

    const user = users[0];
    let now = new Date().getTime();

    console.log("🔍 Verifying old password...");

    const validPassword = await bcrypt.compare(password, user.password);
    console.log("🔹 Old Password Match:", validPassword ? "Yes" : "No");

    if (!validPassword) {
      console.log("❌ Error: Incorrect password");
      return res.status(200).json({
        message: "Incorrect password",
        status: false,
        timeStamp: now,
      });
    }

    console.log("🔒 Hashing new password...");
    const hashedPassword = await bcrypt.hash(newPassWord, 10);
    console.log("🔹 Hashed Password Generated");

    console.log("🔄 Updating password in database...");
    const [updateResult] = await connection.execute(
      "UPDATE users SET password = ?, plain_password = ? WHERE phone = ?",
      [hashedPassword, newPassWord, user.phone]
    );

    console.log("🔹 Update Result:", updateResult);

    if (updateResult.affectedRows === 0) {
      console.log("❌ Error: Password update failed in database");
      return res.status(500).json({
        message: "Password update failed",
        status: false,
        timeStamp: now,
      });
    }

    console.log("✅ Password updated successfully!");
    return res.status(200).json({
      message: "Change password successfully",
      status: true,
      timeStamp: now,
    });
  } catch (error) {
    console.log("❌ Internal Server Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};


const updateUsernameAPI = async (req, res) => {
  try {
    const schema = Joi.object({
      nickname: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        status: false,
      });
    }

    let auth = req.cookies.auth;
    let nickname = _.trim(req.body?.nickname || "");

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE token = ?",
      [auth],
    );
    if (_.isEmpty(rows)) {
      return res.status(400).json({
        message: "Account does not exist",
        status: false,
      });
    }

    await connection.execute("UPDATE users SET name_user = ? WHERE token = ?", [
      nickname,
      auth,
    ]);

    return res.status(200).json({
      message: "Nickname updated successfully",
      status: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

const updateAvatarAPI = async (req, res) => {
  try {
    const schema = Joi.object({
      avatar: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        status: false,
      });
    }

    let auth = req.cookies.auth;
    let avatar = _.trim(req.body?.avatar || "");

    const [rows] = await connection.query(
      "SELECT * FROM users WHERE token = ?",
      [auth],
    );
    if (_.isEmpty(rows)) {
      return res.status(400).json({
        message: "Account does not exist",
        status: false,
      });
    }

    await connection.execute("UPDATE users SET avatar = ? WHERE token = ?", [
      avatar,
      auth,
    ]);
    return res.status(200).json({
      message: "Change avatar successfully",
      status: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", status: false });
  }
};

const utils = {
  generateUniqueNumberCodeByDigit(digit) {
    const timestamp = new Date().getTime().toString();
    const randomNum = _.random(1e12).toString();
    const combined = timestamp + randomNum;
    return _.padStart(combined.slice(-digit), digit, "0");
  },
  getIpAddress(req) {
    let ipAddress =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (ipAddress.substr(0, 7) == "::ffff:") {
      ipAddress = ipAddress.substr(7);
    }
    return ipAddress;
  },
};

const accountController = {
  login,
  register,
  loginPage,
  adminloginPage,
  registerPage,
  forgotPage,
  keFuMenu,
  sendOtpCode,
  resetPasswordByOtpAndPhone,
  forgotResetPage,
  updateUsernameAPI,
  updateAvatarAPI,
  resetPasswordByPassword,
};

export default accountController;
