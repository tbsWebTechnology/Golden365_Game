"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateClaimRewardID = void 0;
exports.generateCommissionId = generateCommissionId;
exports.generatePeriod = generatePeriod;
exports.getBonuses = getBonuses;
exports.getDayTime = void 0;
exports.getNthMinuteSinceDayStart = getNthMinuteSinceDayStart;
exports.yesterdayTime = exports.monthTime = exports.getTodayStartTime = exports.getTimeBasedOnDate = exports.getStartOfWeekTimestamp = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import GameRepresentationIds from "../constants/game_representation_id"

function getNthMinuteSinceDayStart() {
  var now = (0, _moment["default"])();
  var startOfDay = (0, _moment["default"])().startOf("day");
  var diff = now.diff(startOfDay, "minutes");
  return diff;
}
function generatePeriod(gameRepresentationId) {
  var TodayPeriod = (0, _moment["default"])().format("YYYYMMDD");
  var nthMinuteSinceDayStart = getNthMinuteSinceDayStart() + 1;
  var paddedNthMinuteSinceDayStart = _lodash["default"].padStart(nthMinuteSinceDayStart.toString(), 4, "0");
  var NewGamePeriod = "".concat(TodayPeriod).concat(gameRepresentationId).concat(paddedNthMinuteSinceDayStart);
  return parseInt(NewGamePeriod);
}
var generateClaimRewardID = exports.generateClaimRewardID = function generateClaimRewardID() {
  var min = 1;
  var max = 2147483647;
  var id = Math.floor(Math.random() * (max - min + 1)) + min;
  return id;
};
var getTodayStartTime = exports.getTodayStartTime = function getTodayStartTime() {
  var now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};
var getTimeBasedOnDate = exports.getTimeBasedOnDate = function getTimeBasedOnDate(inputDate) {
  var inputDateObj = new Date(inputDate);
  var now = new Date();
  if (inputDateObj < new Date(now.toDateString())) {
    inputDateObj.setHours(23, 59, 59, 999);
    return inputDateObj.getTime();
  } else {
    return now.getTime();
  }
};
var getStartOfWeekTimestamp = exports.getStartOfWeekTimestamp = function getStartOfWeekTimestamp() {
  var now = new Date();
  var dayOfWeek = now.getDay(); // Day of week (0-6), Sunday is 0
  var diff = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // Calculate difference to Monday
  var startOfWeek = new Date(now.setDate(now.getDate() + diff)); // Set to the previous or current Monday
  startOfWeek.setHours(0, 0, 0, 0); // Set time to 00:00:00.000

  return startOfWeek.getTime();
};
var yesterdayTime = exports.yesterdayTime = function yesterdayTime() {
  var currentDate = new Date();
  var startOfYesterday = new Date(currentDate);
  startOfYesterday.setDate(currentDate.getDate() - 1);
  startOfYesterday.setHours(0, 0, 0, 0);
  var endOfYesterday = new Date(currentDate);
  endOfYesterday.setDate(currentDate.getDate() - 1);
  endOfYesterday.setHours(23, 59, 59, 999);

  // Convert to timestamps
  var startOfYesterdayTimestamp = startOfYesterday.getTime();
  var endOfYesterdayTimestamp = endOfYesterday.getTime();
  return {
    startOfYesterdayTimestamp: startOfYesterdayTimestamp,
    endOfYesterdayTimestamp: endOfYesterdayTimestamp
  };
};
var monthTime = exports.monthTime = function monthTime() {
  var currentDate = new Date();
  var startOfMonth = new Date(currentDate);
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);
  var endOfMonth = new Date(currentDate);
  endOfMonth.setDate(currentDate.getDate());
  return {
    startOfMonthTimestamp: startOfMonth.getTime(),
    endOfMonthTimestamp: endOfMonth.getTime()
  };
};
var getDayTime = exports.getDayTime = function getDayTime() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var currentDate = new Date(time);
  var startOfDay = new Date(currentDate);
  startOfDay.setHours(0, 0, 0, 0);
  var endOfDay = new Date(currentDate);
  endOfDay.setHours(23, 59, 59, 999);
  return {
    startOfDayTimestamp: startOfDay.getTime(),
    endOfDayTimestamp: endOfDay.getTime()
  };
};
function generateCommissionId() {
  var timestamp = Date.now(); // Current timestamp in milliseconds
  var randomNum = Math.floor(Math.random() * 100000); // Random number between 0 and 99999
  return "cmn-".concat(timestamp, "-").concat(randomNum);
}
function getBonuses(amount) {
  var bonusTable = {
    100: {
      selfBonus: 28,
      uplineBonus: 28
    },
    200: {
      selfBonus: 48,
      uplineBonus: 58
    },
    500: {
      selfBonus: 108,
      uplineBonus: 128
    },
    1000: {
      selfBonus: 188,
      uplineBonus: 208
    },
    5000: {
      selfBonus: 288,
      uplineBonus: 768
    },
    10000: {
      selfBonus: 488,
      uplineBonus: 1288
    },
    50000: {
      selfBonus: 2888,
      uplineBonus: 6888
    },
    100000: {
      selfBonus: 5008,
      uplineBonus: 9999
    }
  };
  if (amount >= 100 && amount < 200) {
    return bonusTable[100];
  } else if (amount >= 200 && amount < 500) {
    return bonusTable[200];
  } else if (amount >= 500 && amount < 1000) {
    return bonusTable[500];
  } else if (amount >= 1000 && amount < 5000) {
    return bonusTable[1000];
  } else if (amount >= 5000 && amount < 10000) {
    return bonusTable[5000];
  } else if (amount >= 10000 && amount < 50000) {
    return bonusTable[10000];
  } else if (amount >= 50000 && amount < 100000) {
    return bonusTable[50000];
  } else if (amount >= 100000) {
    return bonusTable[100000];
  } else {
    return {
      selfBonus: 0,
      uplineBonus: 0
    };
  }
}