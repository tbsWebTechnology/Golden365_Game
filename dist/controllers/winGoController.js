"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _game_representation_id = _interopRequireDefault(require("../constants/game_representation_id.js"));
var _games = require("../helpers/games.js");
var _excluded = ["id", "phone", "code", "invite", "level", "game"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// helper functions
function generateProductId() {
  var date = new Date();
  var years = formatTime(date.getFullYear());
  var months = formatTime(date.getMonth() + 1);
  var days = formatTime(date.getDate());
  return years + months + days + Math.floor(Math.random() * 1000000000000000);
}
function determineColor(join) {
  return JOIN_COLOR_MAP[join] || (join % 2 === 0 ? "red" : "green");
}
function generateCheckJoin(join) {
  if (!isNumber(join) && join === "l" || join === "n") {
    return "\n      <div data-v-a9660e98=\"\" class=\"van-image\" style=\"width: 30px; height: 30px;\">\n          <img src=\"/images/".concat(join === "n" ? "small" : "big", ".png\" class=\"van-image__img\">\n      </div>\n      ");
  } else {
    return "\n      <span data-v-a9660e98=\"\">".concat(isNumber(join) ? join : "", "</span>\n      ");
  }
}
// end helper functions

var winGoPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("bet/wingo/win.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function winGoPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var winGoPage3 = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("bet/wingo/win3.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function winGoPage3(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var winGoPage5 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("bet/wingo/win5.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function winGoPage5(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var winGoPage10 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("bet/wingo/win10.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function winGoPage10(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var isNumber = function isNumber(params) {
  var pattern = /^[0-9]*\d$/;
  return pattern.test(params);
};
function formateT(params) {
  var result = params < 10 ? "0" + params : params;
  return result;
}
function timerJoin() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var addHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var date = "";
  if (params) {
    date = new Date(Number(params));
  } else {
    date = new Date();
  }
  date.setHours(date.getHours() + addHours);
  var years = formateT(date.getFullYear());
  var months = formateT(date.getMonth() + 1);
  var days = formateT(date.getDate());
  var hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  var ampm = date.getHours() < 12 ? "AM" : "PM";
  var minutes = formateT(date.getMinutes());
  var seconds = formateT(date.getSeconds());
  return years + "-" + months + "-" + days + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;
}
var rosesPlus = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(phone, money) {
    var levels,
      timeNow,
      _yield$connection$que,
      _yield$connection$que2,
      userResult,
      userInfo,
      userReferrer,
      commissionsToInsert,
      usersToUpdate,
      i,
      levelCommission,
      _yield$connection$que3,
      _yield$connection$que4,
      referrerRows,
      referrerInfo,
      commissionId,
      updatePromises,
      _args5 = arguments;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          levels = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : [];
          timeNow = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : "";
          _context5.prev = 2;
          _context5.next = 5;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `money` FROM users WHERE phone = ? AND veri = 1 LIMIT 1", [phone]);
        case 5:
          _yield$connection$que = _context5.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          userResult = _yield$connection$que2[0];
          userInfo = userResult[0];
          if (userInfo) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return");
        case 11:
          userReferrer = userInfo.invite;
          commissionsToInsert = [];
          usersToUpdate = [];
          i = 0;
        case 15:
          if (!(i < levels.length)) {
            _context5.next = 35;
            break;
          }
          levelCommission = levels[i] * money;
          _context5.next = 19;
          return _connectDB["default"].query("SELECT phone, money, code, invite FROM users WHERE code = ?", [userReferrer]);
        case 19:
          _yield$connection$que3 = _context5.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          referrerRows = _yield$connection$que4[0];
          referrerInfo = referrerRows[0];
          if (!referrerInfo) {
            _context5.next = 30;
            break;
          }
          commissionId = (0, _games.generateCommissionId)();
          commissionsToInsert.push([commissionId, referrerInfo.phone, userInfo.phone, levelCommission, i + 1, timeNow]);
          usersToUpdate.push([levelCommission, referrerInfo.phone]);
          userReferrer = referrerInfo.invite;
          _context5.next = 32;
          break;
        case 30:
          console.log("Level ".concat(i + 1, " referrer not found."));
          return _context5.abrupt("break", 35);
        case 32:
          i++;
          _context5.next = 15;
          break;
        case 35:
          if (!(commissionsToInsert.length > 0)) {
            _context5.next = 38;
            break;
          }
          _context5.next = 38;
          return _connectDB["default"].query("INSERT INTO commissions (commission_id, phone, from_user_phone, money, level, time) VALUES ?", [commissionsToInsert]);
        case 38:
          if (!(usersToUpdate.length > 0)) {
            _context5.next = 42;
            break;
          }
          updatePromises = usersToUpdate.map(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
              money = _ref7[0],
              phone = _ref7[1];
            return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ?", [money, phone]);
          });
          _context5.next = 42;
          return Promise.all(updatePromises);
        case 42:
          return _context5.abrupt("return", {
            success: true,
            message: "Commissions calculated and inserted successfully."
          });
        case 45:
          _context5.prev = 45;
          _context5.t0 = _context5["catch"](2);
          console.error(_context5.t0);
          return _context5.abrupt("return", {
            success: false,
            message: _context5.t0.message
          });
        case 49:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 45]]);
  }));
  return function rosesPlus(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var distributeCommission = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _yesterdayTime, startOfYesterdayTimestamp, endOfYesterdayTimestamp, _yield$connection$que5, _yield$connection$que6, levelResult, levels, _yield$connection$que7, _yield$connection$que8, bets, promises, response;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _yesterdayTime = (0, _games.yesterdayTime)(), startOfYesterdayTimestamp = _yesterdayTime.startOfYesterdayTimestamp, endOfYesterdayTimestamp = _yesterdayTime.endOfYesterdayTimestamp;
          _context6.next = 4;
          return _connectDB["default"].query("SELECT f1 FROM level");
        case 4:
          _yield$connection$que5 = _context6.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          levelResult = _yield$connection$que6[0];
          levels = levelResult.map(function (row) {
            return row.f1 / 100;
          }); // const [bets] = await connection.query('SELECT phone, SUM(money + fee) AS total_money FROM minutes_1 WHERE time > ? AND time <= ? GROUP BY phone', [startOfDay, endTime]);
          _context6.next = 10;
          return _connectDB["default"].query("\n      SELECT phone, SUM(total_money) AS total_money\n      FROM (\n        SELECT phone, SUM(money + fee) AS total_money\n        FROM minutes_1\n        WHERE time > ? AND time <= ?\n        GROUP BY phone\n        UNION ALL\n        SELECT phone, SUM(money + fee) AS total_money\n        FROM trx_wingo_bets\n        WHERE time > ? AND time <= ?\n        GROUP BY phone\n      ) AS combined\n      GROUP BY phone\n      ", [startOfYesterdayTimestamp, endOfYesterdayTimestamp, startOfYesterdayTimestamp, endOfYesterdayTimestamp]);
        case 10:
          _yield$connection$que7 = _context6.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          bets = _yield$connection$que8[0];
          promises = bets.map(function (bet) {
            return rosesPlus(bet.phone, bet.total_money, levels, endOfYesterdayTimestamp);
          });
          _context6.next = 16;
          return Promise.all(promises);
        case 16:
          response = _context6.sent;
          return _context6.abrupt("return", {
            success: true,
            message: "Commissions distributed successfully."
          });
        case 20:
          _context6.prev = 20;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          return _context6.abrupt("return", {
            success: false,
            message: _context6.t0.message
          });
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 20]]);
  }));
  return function distributeCommission() {
    return _ref8.apply(this, arguments);
  };
}();
var VALID_TYPE_IDS = [1, 3, 5, 10];
var GAME_JOIN_MAP = {
  1: "wingo",
  3: "wingo3",
  5: "wingo5",
  10: "wingo10"
};
var JOIN_COLOR_MAP = {
  l: "big",
  n: "small",
  t: "violet",
  d: "red",
  x: "green",
  0: "red-violet",
  5: "green-violet"
};
var betWinGo = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body, typeid, join, x, money, auth, gameJoin, _yield$connection$que9, _yield$connection$que10, winGoNow, _yield$connection$que11, _yield$connection$que12, user, userInfo, period, fee, total, timeNow, check, date, years, months, days, id_product, formatTime, color, checkJoin, result, timerJoin, checkTime, sql, previous_bonus_money, totalBetMoney, isBonusWalletEnabled, mainWalletBetMoney, bonusWalletBetMoney, _yield$connection$que13, _yield$connection$que14, users;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          timerJoin = function _timerJoin() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var addHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var date = "";
            if (params) {
              date = new Date(Number(params));
            } else {
              date = new Date();
            }
            date.setHours(date.getHours() + addHours);
            var years = formateT(date.getFullYear());
            var months = formateT(date.getMonth() + 1);
            var days = formateT(date.getDate());
            var hours = date.getHours() % 12;
            hours = hours === 0 ? 12 : hours;
            var ampm = date.getHours() < 12 ? "AM" : "PM";
            var minutes = formateT(date.getMinutes());
            var seconds = formateT(date.getSeconds());
            return years + "-" + months + "-" + days + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;
          };
          _req$body = req.body, typeid = _req$body.typeid, join = _req$body.join, x = _req$body.x, money = _req$body.money;
          auth = req.cookies.auth;
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context7.next = 5;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 5:
          gameJoin = "";
          if (typeid == 1) gameJoin = "wingo";
          if (typeid == 3) gameJoin = "wingo3";
          if (typeid == 5) gameJoin = "wingo5";
          if (typeid == 10) gameJoin = "wingo10";
          _context7.next = 12;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1", [gameJoin]);
        case 12:
          _yield$connection$que9 = _context7.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          winGoNow = _yield$connection$que10[0];
          _context7.next = 17;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `level`, `money`, `bonus_money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ", [auth]);
        case 17:
          _yield$connection$que11 = _context7.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          user = _yield$connection$que12[0];
          if (!(!winGoNow[0] || !user[0] || !isNumber(x) || !isNumber(money))) {
            _context7.next = 22;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 22:
          userInfo = user[0];
          period = winGoNow[0].period;
          fee = x * money * 0.02;
          total = x * money - fee;
          timeNow = Date.now();
          check = userInfo.money - total;
          console.log("fee", fee);
          console.log("total", total);
          console.log("check", check);
          console.log("timeNow", timeNow);
          date = new Date();
          years = formateT(date.getFullYear());
          months = formateT(date.getMonth() + 1);
          days = formateT(date.getDate());
          id_product = years + months + days + Math.floor(Math.random() * 1000000000000000);
          formatTime = timerJoin();
          color = "";
          if (join == "l") {
            color = "big";
          } else if (join == "n") {
            color = "small";
          } else if (join == "t") {
            color = "violet";
          } else if (join == "d") {
            color = "red";
          } else if (join == "x") {
            color = "green";
          } else if (join == "0") {
            color = "red-violet";
          } else if (join == "5") {
            color = "green-violet";
          } else if (join % 2 == 0) {
            color = "red";
          } else if (join % 2 != 0) {
            color = "green";
          }
          checkJoin = "";
          if (!isNumber(join) && join == "l" || join == "n") {
            checkJoin = "\n        <div data-v-a9660e98=\"\" class=\"van-image\" style=\"width: 30px; height: 30px;\">\n            <img src=\"/images/".concat(join == "n" ? "small" : "big", ".png\" class=\"van-image__img\">\n        </div>\n        ");
          } else {
            checkJoin = "\n        <span data-v-a9660e98=\"\">".concat(isNumber(join) ? join : "", "</span>\n        ");
          }
          result = "\n    <div data-v-a9660e98=\"\" issuenumber=\"".concat(period, "\" addtime=\"").concat(formatTime, "\" rowid=\"1\" class=\"hb\">\n        <div data-v-a9660e98=\"\" class=\"item c-row\">\n            <div data-v-a9660e98=\"\" class=\"result\">\n                <div data-v-a9660e98=\"\" class=\"select select-").concat(color, "\">\n                    ").concat(checkJoin, "\n                </div>\n            </div>\n            <div data-v-a9660e98=\"\" class=\"c-row c-row-between info\">\n                <div data-v-a9660e98=\"\">\n                    <div data-v-a9660e98=\"\" class=\"issueName\">\n                        ").concat(period, "\n                    </div>\n                    <div data-v-a9660e98=\"\" class=\"tiem\">").concat(formatTime, "</div>\n                </div>\n            </div>\n        </div>\n        <!---->\n    </div>\n    ");
          checkTime = timerJoin(date.getTime());
          if (!(check >= 0)) {
            _context7.next = 64;
            break;
          }
          sql = "INSERT INTO minutes_1 SET \n        id_product = ?,\n        phone = ?,\n        code = ?,\n        invite = ?,\n        stage = ?,\n        level = ?,\n        money = ?,\n        amount = ?,\n        fee = ?,\n        get = ?,\n        game = ?,\n        bet = ?,\n        status = ?,\n        today = ?,\n        time = ?";
          _context7.next = 48;
          return _connectDB["default"].query(sql, [id_product, userInfo.phone, userInfo.code, userInfo.invite, period, userInfo.level, total, x, fee, 0, gameJoin, join, 0, checkTime, timeNow]);
        case 48:
          previous_bonus_money = userInfo.bonus_money;
          totalBetMoney = money * x;
          isBonusWalletEnabled = process.env.ENABLE_BONUS_MONEY === "true";
          mainWalletBetMoney = isBonusWalletEnabled ? totalBetMoney * 1 : totalBetMoney;
          bonusWalletBetMoney = isBonusWalletEnabled ? totalBetMoney * 0.00 : 0;
          if (!(previous_bonus_money >= bonusWalletBetMoney)) {
            mainWalletBetMoney = totalBetMoney;
            bonusWalletBetMoney = 0;
          }
          _context7.next = 56;
          return _connectDB["default"].query("UPDATE users SET money = money - ?, total_money = total_money - ?, bonus_money = bonus_money - ? WHERE token = ?", [mainWalletBetMoney, mainWalletBetMoney, bonusWalletBetMoney, auth]);
        case 56:
          _context7.next = 58;
          return _connectDB["default"].query("SELECT `money`, `bonus_money`, `level` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ", [auth]);
        case 58:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          users = _yield$connection$que14[0];
          return _context7.abrupt("return", res.status(200).json({
            message: "Successful bet",
            status: true,
            data: result,
            change: users[0].level,
            money: users[0].money,
            bonus_money: users[0].bonus_money
          }));
        case 64:
          return _context7.abrupt("return", res.status(200).json({
            message: "The amount is not enough",
            status: false
          }));
        case 65:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function betWinGo(_x11, _x12) {
    return _ref9.apply(this, arguments);
  };
}();
var listOrderOld = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body2, typeid, pageno, pageto, auth, _yield$connection$que15, _yield$connection$que16, user, game, _yield$connection$que17, _yield$connection$que18, wingo, _yield$connection$que19, _yield$connection$que20, wingoAll, _yield$connection$que21, _yield$connection$que22, period, page;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body2 = req.body, typeid = _req$body2.typeid, pageno = _req$body2.pageno, pageto = _req$body2.pageto;
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context8.next = 3;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 3:
          if (!(pageno < 0 || pageto < 0)) {
            _context8.next = 5;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            page: 1,
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          _context8.next = 8;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ", [auth]);
        case 8:
          _yield$connection$que15 = _context8.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          user = _yield$connection$que16[0];
          if (user[0]) {
            _context8.next = 13;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: "Authentication failed!",
            status: true
          }));
        case 13:
          game = "";
          if (typeid == 1) game = "wingo";
          if (typeid == 3) game = "wingo3";
          if (typeid == 5) game = "wingo5";
          if (typeid == 10) game = "wingo10";
          _context8.next = 20;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status != 0 AND game = ? ORDER BY id DESC LIMIT ?, ?", [game, Number(pageno), Number(pageto)]);
        case 20:
          _yield$connection$que17 = _context8.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          wingo = _yield$connection$que18[0];
          _context8.next = 25;
          return _connectDB["default"].query("SELECT COUNT(*) as game_length FROM wingo WHERE status != 0 AND game = ?", [game]);
        case 25:
          _yield$connection$que19 = _context8.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          wingoAll = _yield$connection$que20[0];
          _context8.next = 30;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1", [game]);
        case 30:
          _yield$connection$que21 = _context8.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          period = _yield$connection$que22[0];
          if (!(wingo.length == 0 && period.length !== 0)) {
            _context8.next = 35;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            period: period[0].period,
            page: 1,
            status: false
          }));
        case 35:
          if (!(period.length == 0)) {
            _context8.next = 37;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: "Unable to get previous period",
            status: true
          }));
        case 37:
          page = Math.ceil(wingoAll[0].game_length / 10);
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Receive success",
            data: {
              gameslist: wingo
            },
            period: period[0].period,
            page: page,
            status: true
          }));
        case 39:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function listOrderOld(_x13, _x14) {
    return _ref10.apply(this, arguments);
  };
}();
var GetMyEmerdList = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body3, typeid, pageno, pageto, auth, game, _yield$connection$que23, _yield$connection$que24, user, _yield$connection$que25, _yield$connection$que26, minutes_1, _yield$connection$que27, _yield$connection$que28, minutes_1All, page, datas;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$body3 = req.body, typeid = _req$body3.typeid, pageno = _req$body3.pageno, pageto = _req$body3.pageto; // if (!pageno || !pageto) {
          //     pageno = 0;
          //     pageto = 10;
          // }
          if (!(typeid != 1 && typeid != 3 && typeid != 5 && typeid != 10)) {
            _context9.next = 3;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 3:
          if (!(pageno < 0 || pageto < 0)) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            page: 1,
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          game = "";
          if (typeid == 1) game = "wingo";
          if (typeid == 3) game = "wingo3";
          if (typeid == 5) game = "wingo5";
          if (typeid == 10) game = "wingo10";
          _context9.next = 13;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1", [auth]);
        case 13:
          _yield$connection$que23 = _context9.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          user = _yield$connection$que24[0];
          _context9.next = 18;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? AND game = ? ORDER BY id DESC LIMIT ?, ?", [user[0].phone, game, Number(pageno), Number(pageto)]);
        case 18:
          _yield$connection$que25 = _context9.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          minutes_1 = _yield$connection$que26[0];
          _context9.next = 23;
          return _connectDB["default"].query("SELECT COUNT(*) as bet_length FROM minutes_1 WHERE phone = ? AND game = ?", [user[0].phone, game]);
        case 23:
          _yield$connection$que27 = _context9.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          minutes_1All = _yield$connection$que28[0];
          if (minutes_1[0]) {
            _context9.next = 28;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            code: 0,
            msg: "No more data",
            data: {
              gameslist: []
            },
            page: 1,
            status: false
          }));
        case 28:
          if (!(!pageno || !pageto || !user[0] || !minutes_1[0])) {
            _context9.next = 30;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 30:
          page = Math.ceil(minutes_1All[0].bet_length / 10);
          datas = minutes_1.map(function (data) {
            var id = data.id,
              phone = data.phone,
              code = data.code,
              invite = data.invite,
              level = data.level,
              game = data.game,
              others = _objectWithoutProperties(data, _excluded);
            return others;
          });
          return _context9.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Receive success",
            data: {
              gameslist: datas
            },
            page: page,
            status: true
          }));
        case 33:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function GetMyEmerdList(_x15, _x16) {
    return _ref11.apply(this, arguments);
  };
}();
var addWinGo = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(game) {
    var join, _yield$connection$que29, _yield$connection$que30, winGoNow, isPendingGame, _yield$connection$que31, _yield$connection$que32, setting, previousPeriod, amount, _yield$connection$que33, _yield$connection$que34, minPlayers, betColumns, totalMoneyPromises, categories, smallestCategory, colorBets, betsForCategory, availableBets, lowestBet, _betColumns, _categories, _colorBets, _smallestCategory, _betsForCategory, _availableBets, _lowestBet, nextResult, newArr, result, arr, check, i, adminWingoKey, timeNow, gameRepresentationId, NewGamePeriod;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          join = "";
          if (game == 1) join = "wingo";
          if (game == 3) join = "wingo3";
          if (game == 5) join = "wingo5";
          if (game == 10) join = "wingo10";
          _context12.next = 8;
          return _connectDB["default"].query("SELECT period FROM wingo WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1", [join]);
        case 8:
          _yield$connection$que29 = _context12.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          winGoNow = _yield$connection$que30[0];
          isPendingGame = winGoNow.length > 0;
          if (!isPendingGame) {
            _context12.next = 76;
            break;
          }
          _context12.next = 15;
          return _connectDB["default"].query("SELECT * FROM `admin_ac` ");
        case 15:
          _yield$connection$que31 = _context12.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          setting = _yield$connection$que32[0];
          previousPeriod = winGoNow[0].period;
          amount = Math.floor(Math.random() * 10);
          _context12.next = 22;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE status = 0 AND game = ?", [join]);
        case 22:
          _yield$connection$que33 = _context12.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          minPlayers = _yield$connection$que34[0];
          if (!(minPlayers.length >= 2)) {
            _context12.next = 39;
            break;
          }
          betColumns = [
          // red_small
          {
            name: "red_0",
            bets: ["0", "t", "d", "n"]
          }, {
            name: "red_2",
            bets: ["2", "d", "n"]
          }, {
            name: "red_4",
            bets: ["4", "d", "n"]
          },
          // green small
          {
            name: "green_1",
            bets: ["1", "x", "n"]
          }, {
            name: "green_3",
            bets: ["3", "x", "n"]
          },
          // green big
          {
            name: "green_5",
            bets: ["5", "x", "t", "l"]
          }, {
            name: "green_7",
            bets: ["7", "x", "l"]
          }, {
            name: "green_9",
            bets: ["9", "x", "l"]
          },
          // red big
          {
            name: "red_6",
            bets: ["6", "d", "l"]
          }, {
            name: "red_8",
            bets: ["8", "d", "l"]
          }];
          totalMoneyPromises = betColumns.map( /*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(column) {
              var _result$;
              var placeholders, query, _yield$connection$que35, _yield$connection$que36, result;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    // Generate placeholders for the array elements
                    placeholders = column.bets.map(function () {
                      return "?";
                    }).join(","); // Prepare the query, using placeholders for the array
                    query = "\n                   SELECT SUM(money) AS total_money\n                   FROM minutes_1\n                   WHERE game = ? AND status = 0 AND bet IN (".concat(placeholders, ")\n               "); // Execute the query, spreading the array into the parameters
                    _context10.next = 4;
                    return _connectDB["default"].query(query, [join].concat(_toConsumableArray(column.bets)));
                  case 4:
                    _yield$connection$que35 = _context10.sent;
                    _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
                    result = _yield$connection$que36[0];
                    return _context10.abrupt("return", {
                      name: column.name,
                      total_money: (_result$ = result[0]) !== null && _result$ !== void 0 && _result$.total_money ? parseInt(result[0].total_money, 10) : 0
                    });
                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }));
            return function (_x18) {
              return _ref13.apply(this, arguments);
            };
          }());
          _context12.next = 30;
          return Promise.all(totalMoneyPromises);
        case 30:
          categories = _context12.sent;
          smallestCategory = categories.reduce(function (smallest, category) {
            return smallest === null || category.total_money < smallest.total_money ? category : smallest;
          }, null);
          colorBets = {
            red_6: [6],
            red_8: [8],
            red_2: [2],
            //0 removed
            red_4: [4],
            green_3: [3],
            green_7: [7],
            //5 removed
            green_9: [9],
            //
            green_1: [1],
            green_5: [5],
            red_0: [0]
          };
          betsForCategory = colorBets[smallestCategory.name] || [];
          availableBets = betsForCategory.filter(function (bet) {
            return !categories.find(function (category) {
              return category.name === smallestCategory.name && category.total_money < smallestCategory.total_money;
            });
          });
          if (availableBets.length > 0) {
            lowestBet = availableBets[0];
          } else {
            lowestBet = betsForCategory.reduce(function (lowest, bet) {
              return bet < lowest ? bet : lowest;
            });
          }
          amount = lowestBet;
          _context12.next = 50;
          break;
        case 39:
          if (!(minPlayers.length === 1 && parseFloat(minPlayers[0].money) >= 20)) {
            _context12.next = 50;
            break;
          }
          _betColumns = [{
            name: "red_small",
            bets: ["0", "2", "4", "d", "n"]
          }, {
            name: "red_big",
            bets: ["6", "8", "d", "l"]
          }, {
            name: "green_big",
            bets: ["5", "7", "9", "x", "l"]
          }, {
            name: "green_small",
            bets: ["1", "3", "x", "n"]
          }, {
            name: "violet_small",
            bets: ["0", "t", "n"]
          }, {
            name: "violet_big",
            bets: ["5", "t", "l"]
          }];
          _context12.next = 43;
          return Promise.all(_betColumns.map( /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(column) {
              var _result$2;
              var _yield$connection$que37, _yield$connection$que38, result;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return _connectDB["default"].query("\n                     SELECT SUM(money) AS total_money\n                     FROM minutes_1\n                     WHERE game = ? AND status = 0 AND bet IN (?)\n                     ", [join, column.bets]);
                  case 2:
                    _yield$connection$que37 = _context11.sent;
                    _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
                    result = _yield$connection$que38[0];
                    return _context11.abrupt("return", {
                      name: column.name,
                      total_money: parseInt((_result$2 = result[0]) === null || _result$2 === void 0 ? void 0 : _result$2.total_money) || 0
                    });
                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
            return function (_x19) {
              return _ref14.apply(this, arguments);
            };
          }()));
        case 43:
          _categories = _context12.sent;
          _colorBets = {
            red_big: [6, 8],
            red_small: [2, 4],
            //0 removed
            green_big: [7, 9],
            //5 removed
            green_small: [1, 3],
            violet_big: [5],
            violet_small: [0]
          };
          _smallestCategory = _categories.reduce(function (smallest, category) {
            return !smallest || category.total_money < smallest.total_money ? category : smallest;
          });
          _betsForCategory = _colorBets[_smallestCategory.name] || [];
          _availableBets = _betsForCategory.filter(function (bet) {
            return !_categories.find(function (category) {
              return category.name === _smallestCategory.name && category.total_money < _smallestCategory.total_money;
            });
          });
          _lowestBet = _availableBets.length > 0 ? _availableBets[0] : Math.min.apply(Math, _toConsumableArray(_betsForCategory));
          amount = _lowestBet;
        case 50:
          nextResult = "";
          if (game == 1) nextResult = setting[0].wingo1;
          if (game == 3) nextResult = setting[0].wingo3;
          if (game == 5) nextResult = setting[0].wingo5;
          if (game == 10) nextResult = setting[0].wingo10;
          newArr = "";
          if (!(nextResult == "-1")) {
            _context12.next = 62;
            break;
          }
          _context12.next = 59;
          return _connectDB["default"].query("UPDATE wingo SET amount = ?, status = 1, release_status = 1 WHERE period = ? AND game = ?", [amount, previousPeriod, join]);
        case 59:
          newArr = "-1";
          _context12.next = 69;
          break;
        case 62:
          // admin set result
          result = "";
          arr = nextResult.split("|");
          check = arr.length;
          if (check == 1) {
            newArr = "-1";
          } else {
            for (i = 1; i < arr.length; i++) {
              newArr += arr[i] + "|";
            }
            newArr = newArr.slice(0, -1);
          }
          result = arr[0];
          _context12.next = 69;
          return _connectDB["default"].query("UPDATE wingo SET amount = ?, status = 1, release_status = 1 WHERE period = ? AND game = ?", [result, previousPeriod, join]);
        case 69:
          adminWingoKey = "";
          if (game == 1) adminWingoKey = "wingo1";
          if (game == 3) adminWingoKey = "wingo3";
          if (game == 5) adminWingoKey = "wingo5";
          if (game == 10) adminWingoKey = "wingo10";
          _context12.next = 76;
          return _connectDB["default"].query("UPDATE admin_ac SET ".concat(adminWingoKey, " = ?"), [newArr]);
        case 76:
          timeNow = Date.now();
          gameRepresentationId = _game_representation_id["default"].WINGO[game];
          NewGamePeriod = (0, _games.generatePeriod)(gameRepresentationId); //console.log(NewGamePeriod, join);
          _context12.next = 81;
          return _connectDB["default"].query("\n         INSERT INTO wingo\n         SET period = ?, amount = 0, game = ?, status = 0, time = ?\n      ", [NewGamePeriod, join, timeNow]);
        case 81:
          _context12.next = 86;
          break;
        case 83:
          _context12.prev = 83;
          _context12.t0 = _context12["catch"](0);
          if (_context12.t0) {
            console.log(_context12.t0);
          }
        case 86:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 83]]);
  }));
  return function addWinGo(_x17) {
    return _ref12.apply(this, arguments);
  };
}();
var handlingWinGo1P = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(typeid) {
    var game, _yield$connection$que39, _yield$connection$que40, winGoNow, result, _yield$connection$que41, _yield$connection$que42, order, i, orders, _result, bet, total, id, phone, winAmount, _yield$connection$que43, _yield$connection$que44, users, totals;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          game = "";
          if (typeid == 1) game = "wingo";
          if (typeid == 3) game = "wingo3";
          if (typeid == 5) game = "wingo5";
          if (typeid == 10) game = "wingo10";
          _context13.next = 8;
          return _connectDB["default"].query("SELECT * FROM wingo WHERE status = 1 AND release_status = 1 AND game = ? ORDER BY id DESC LIMIT 1", [game]);
        case 8:
          _yield$connection$que39 = _context13.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          winGoNow = _yield$connection$que40[0];
          if (!(winGoNow.length === 0)) {
            _context13.next = 13;
            break;
          }
          return _context13.abrupt("return");
        case 13:
          _context13.next = 15;
          return _connectDB["default"].query("UPDATE minutes_1 SET result = ? WHERE status = 0 AND game = ?", [winGoNow[0].amount, game]);
        case 15:
          result = Number(winGoNow[0].amount);
          _context13.next = 18;
          return batchUpdateBetStatus(result, game);
        case 18:
          _context13.next = 20;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE status = 0 AND game = ?", [game]);
        case 20:
          _yield$connection$que41 = _context13.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 1);
          order = _yield$connection$que42[0];
          i = 0;
        case 24:
          if (!(i < order.length)) {
            _context13.next = 45;
            break;
          }
          orders = order[i];
          _result = orders.result;
          bet = orders.bet;
          total = orders.money;
          id = orders.id;
          phone = orders.phone;
          winAmount = calculateWinAmount(bet, _result, total);
          _context13.next = 34;
          return _connectDB["default"].query("SELECT `money` FROM `users` WHERE `phone` = ?", [phone]);
        case 34:
          _yield$connection$que43 = _context13.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 1);
          users = _yield$connection$que44[0];
          totals = parseFloat(users[0].money) + parseFloat(winAmount);
          _context13.next = 40;
          return _connectDB["default"].query("UPDATE `minutes_1` SET `get` = ?, `status` = 1 WHERE `id` = ?", [parseFloat(winAmount), id]);
        case 40:
          _context13.next = 42;
          return _connectDB["default"].query("UPDATE `users` SET `money` = ? WHERE `phone` = ?", [totals, phone]);
        case 42:
          i++;
          _context13.next = 24;
          break;
        case 45:
          _context13.next = 47;
          return _connectDB["default"].query("UPDATE wingo SET release_status = 2 WHERE period = ? AND game = ?", [winGoNow[0].period, game]);
        case 47:
          _context13.next = 52;
          break;
        case 49:
          _context13.prev = 49;
          _context13.t0 = _context13["catch"](0);
          console.log(_context13.t0);
        case 52:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 49]]);
  }));
  return function handlingWinGo1P(_x20) {
    return _ref15.apply(this, arguments);
  };
}();
var batchUpdateBetStatus = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(result, game) {
    var validBets, batchSize, offset, _yield$connection$exe, _yield$connection$exe2, rows;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          validBets = getValidBets(result);
          batchSize = 1000; // Adjust this based on your data volume and server capacity
          offset = 0;
        case 3:
          if (!true) {
            _context14.next = 14;
            break;
          }
          _context14.next = 6;
          return _connectDB["default"].execute("UPDATE minutes_1 SET status = 2 \n       WHERE status = 0 AND game = ? AND bet NOT IN (".concat(validBets.map(function () {
            return "?";
          }).join(","), ")\n       LIMIT ").concat(batchSize), [game].concat(_toConsumableArray(validBets)));
        case 6:
          _yield$connection$exe = _context14.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          rows = _yield$connection$exe2[0];
          if (!(rows.affectedRows === 0)) {
            _context14.next = 11;
            break;
          }
          return _context14.abrupt("break", 14);
        case 11:
          // No more rows to update
          offset += batchSize;
          _context14.next = 3;
          break;
        case 14:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function batchUpdateBetStatus(_x21, _x22) {
    return _ref16.apply(this, arguments);
  };
}();
var getValidBets = function getValidBets(result) {
  result = Number(result);
  var baseValidBets = [result.toString()];
  if (result % 2 === 0) baseValidBets.push("d");else baseValidBets.push("x");
  if (result === 0 || result === 5) baseValidBets.push("t");
  if (result <= 4) baseValidBets.push("n");else baseValidBets.push("l");
  return baseValidBets;
};
var calculateWinAmount = function calculateWinAmount(bet, result, total) {
  var winAmount = 0;
  if (bet == "l" || bet == "n") {
    winAmount = total * 2;
  } else {
    if (result == 0 || result == 5) {
      if (bet == "d" || bet == "x") {
        winAmount = total * 1.5;
      } else if (bet == "t") {
        winAmount = total * 4.5;
      } else if (bet == "0" || bet == "5") {
        winAmount = total * 4.5;
      }
    } else {
      if (result == 1 && bet == "1") {
        winAmount = total * 9;
      } else {
        if (result == 1 && bet == "x") {
          winAmount = total * 2;
        }
      }
      if (result == 2 && bet == "2") {
        winAmount = total * 9;
      } else {
        if (result == 2 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 3 && bet == "3") {
        winAmount = total * 9;
      } else {
        if (result == 3 && bet == "x") {
          winAmount = total * 2;
        }
      }
      if (result == 4 && bet == "4") {
        winAmount = total * 9;
      } else {
        if (result == 4 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 6 && bet == "6") {
        winAmount = total * 9;
      } else {
        if (result == 6 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 7 && bet == "7") {
        winAmount = total * 9;
      } else {
        if (result == 7 && bet == "x") {
          winAmount = total * 2;
        }
      }
      if (result == 8 && bet == "8") {
        winAmount = total * 9;
      } else {
        if (result == 8 && bet == "d") {
          winAmount = total * 2;
        }
      }
      if (result == 9 && bet == "9") {
        winAmount = total * 9;
      } else {
        if (result == 9 && bet == "x") {
          winAmount = total * 2;
        }
      }
    }
  }
  return winAmount;
};
var winGoController = {
  winGoPage: winGoPage,
  betWinGo: betWinGo,
  listOrderOld: listOrderOld,
  GetMyEmerdList: GetMyEmerdList,
  handlingWinGo1P: handlingWinGo1P,
  addWinGo: addWinGo,
  distributeCommission: distributeCommission,
  winGoPage3: winGoPage3,
  winGoPage5: winGoPage5,
  winGoPage10: winGoPage10
};
var _default = exports["default"] = winGoController;