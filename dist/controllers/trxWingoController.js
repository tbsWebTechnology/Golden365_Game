"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TRX_WINGO_GAME_TYPE_MAP = exports.TRX_WINGO_GAME_STATUS_MAP = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _axios = _interopRequireDefault(require("axios"));
var _lodash = _interopRequireDefault(require("lodash"));
var _game_representation_id = _interopRequireDefault(require("../constants/game_representation_id.js"));
var _games = require("../helpers/games.js");
var _excluded = ["id", "phone", "code", "invite", "level", "game"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var TRX_WINGO_GAME_STATUS_MAP = exports.TRX_WINGO_GAME_STATUS_MAP = {
  PENDING: 0,
  COMPLETED: 1
};
var TRX_WINGO_GAME_TYPE_MAP = exports.TRX_WINGO_GAME_TYPE_MAP = {
  MIN_1: "trx_wingo",
  MIN_3: "trx_wingo3",
  MIN_5: "trx_wingo5",
  MIN_10: "trx_wingo10"
};
var trxWingoBlockPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("bet/trx_wingo/trx_block.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function trxWingoBlockPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var trxWingoPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("bet/trx_wingo/win.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function trxWingoPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var trxWingoPage3 = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("bet/trx_wingo/win3.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function trxWingoPage3(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var trxWingoPage5 = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("bet/trx_wingo/win5.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function trxWingoPage5(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var trxWingoPage10 = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", res.render("bet/trx_wingo/win10.ejs"));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function trxWingoPage10(_x9, _x10) {
    return _ref5.apply(this, arguments);
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
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(auth, money) {
    var _yield$connection$que, _yield$connection$que2, level, _yield$connection$que3, _yield$connection$que4, user, userInfo, _yield$connection$que5, _yield$connection$que6, f1, infoF1, levelIndex, rosesF, timeNow, sql2, sql3, _yield$connection$que7, _yield$connection$que8, fNext;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _connectDB["default"].query("SELECT * FROM level ");
        case 2:
          _yield$connection$que = _context6.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          level = _yield$connection$que2[0];
          _context6.next = 7;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `user_level`, `total_money` FROM users WHERE token = ? AND veri = 1 LIMIT 1 ", [auth]);
        case 7:
          _yield$connection$que3 = _context6.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          user = _yield$connection$que4[0];
          userInfo = user[0];
          _context6.next = 13;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ", [userInfo.invite]);
        case 13:
          _yield$connection$que5 = _context6.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          f1 = _yield$connection$que6[0];
          if (!(userInfo.total_money >= 100)) {
            _context6.next = 47;
            break;
          }
          if (!(f1.length > 0)) {
            _context6.next = 47;
            break;
          }
          infoF1 = f1[0];
          levelIndex = 1;
        case 20:
          if (!(levelIndex <= 6)) {
            _context6.next = 47;
            break;
          }
          rosesF = 0;
          if (!(infoF1.user_level >= levelIndex && infoF1.total_money >= 100)) {
            _context6.next = 34;
            break;
          }
          rosesF = money / 100 * level[levelIndex - 1].f1;
          if (!(rosesF > 0)) {
            _context6.next = 34;
            break;
          }
          _context6.next = 27;
          return _connectDB["default"].query("UPDATE users SET money = money + ?, roses_f = roses_f + ?, roses_today = roses_today + ? WHERE phone = ? ", [rosesF, rosesF, rosesF, infoF1.phone]);
        case 27:
          timeNow = Date.now();
          sql2 = "INSERT INTO roses SET \n                            phone = ?,\n                            code = ?,\n                            invite = ?,\n                            f1 = ?,\n                            time = ?";
          _context6.next = 31;
          return _connectDB["default"].query(sql2, [infoF1.phone, infoF1.code, infoF1.invite, rosesF, timeNow]);
        case 31:
          sql3 = "\n                            INSERT INTO turn_over (phone, code, invite, daily_turn_over, total_turn_over)\n                            VALUES (?, ?, ?, ?, ?)\n                            ON DUPLICATE KEY UPDATE\n                            daily_turn_over = daily_turn_over + VALUES(daily_turn_over),\n                            total_turn_over = total_turn_over + VALUES(total_turn_over)\n                            ";
          _context6.next = 34;
          return _connectDB["default"].query(sql3, [infoF1.phone, infoF1.code, infoF1.invite, money, money]);
        case 34:
          _context6.next = 36;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE code = ? AND veri = 1 LIMIT 1 ", [infoF1.invite]);
        case 36:
          _yield$connection$que7 = _context6.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          fNext = _yield$connection$que8[0];
          if (!(fNext.length > 0)) {
            _context6.next = 43;
            break;
          }
          infoF1 = fNext[0];
          _context6.next = 44;
          break;
        case 43:
          return _context6.abrupt("break", 47);
        case 44:
          levelIndex++;
          _context6.next = 20;
          break;
        case 47:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function rosesPlus(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var betTrxWingo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _timerJoin, _req$body, typeid, join, x, money, auth, gameJoin, _yield$connection$que9, _yield$connection$que10, trxWingoNow, _yield$connection$que11, _yield$connection$que12, user, userInfo, period, fee, total, timeNow, check, date, years, months, days, id_product, formatTime, color, checkJoin, result, checkTime, sql, _yield$connection$que13, _yield$connection$que14, users;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _timerJoin = function _timerJoin() {
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
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 6:
          gameJoin = "";
          if (typeid == 1) gameJoin = "trx_wingo";
          if (typeid == 3) gameJoin = "trx_wingo3";
          if (typeid == 5) gameJoin = "trx_wingo5";
          if (typeid == 10) gameJoin = "trx_wingo10";
          _context7.next = 13;
          return _connectDB["default"].query("SELECT period FROM trx_wingo_game WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1 ", [gameJoin]);
        case 13:
          _yield$connection$que9 = _context7.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          trxWingoNow = _yield$connection$que10[0];
          _context7.next = 18;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ", [auth]);
        case 18:
          _yield$connection$que11 = _context7.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          user = _yield$connection$que12[0];
          if (!(!trxWingoNow[0] || !user[0] || !isNumber(x) || !isNumber(money))) {
            _context7.next = 23;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 23:
          userInfo = user[0];
          period = trxWingoNow[0].period;
          fee = x * money * 0.02;
          total = x * money - fee;
          timeNow = Date.now();
          check = userInfo.money - total;
          date = new Date();
          years = formateT(date.getFullYear());
          months = formateT(date.getMonth() + 1);
          days = formateT(date.getDate());
          id_product = years + months + days + Math.floor(Math.random() * 1000000000000000);
          formatTime = _timerJoin();
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
          checkTime = _timerJoin(date.getTime());
          if (!(check >= 0)) {
            _context7.next = 57;
            break;
          }
          sql = "INSERT INTO trx_wingo_bets SET \n            id_product = ?,\n            phone = ?,\n            code = ?,\n            invite = ?,\n            stage = ?,\n            level = ?,\n            money = ?,\n            amount = ?,\n            fee = ?,\n            get = ?,\n            game = ?,\n            bet = ?,\n            status = ?,\n            today = ?,\n            time = ?";
          _context7.next = 45;
          return _connectDB["default"].query(sql, [id_product, userInfo.phone, userInfo.code, userInfo.invite, period, userInfo.level, total, x, fee, 0, gameJoin, join, 0, checkTime, timeNow]);
        case 45:
          _context7.next = 47;
          return _connectDB["default"].query("UPDATE `users` SET `money` = `money` - ? WHERE `token` = ? ", [money * x, auth]);
        case 47:
          _context7.next = 49;
          return _connectDB["default"].query("SELECT `money`, `level` FROM users WHERE token = ? AND veri = 1  LIMIT 1 ", [auth]);
        case 49:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          users = _yield$connection$que14[0];
          _context7.next = 54;
          return rosesPlus(auth, money * x);
        case 54:
          return _context7.abrupt("return", res.status(200).json({
            message: "Successful bet",
            status: true,
            data: result,
            change: users[0].level,
            money: users[0].money
          }));
        case 57:
          return _context7.abrupt("return", res.status(200).json({
            message: "The amount is not enough",
            status: false
          }));
        case 58:
          _context7.next = 63;
          break;
        case 60:
          _context7.prev = 60;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(200).json({
            message: "Error!",
            status: false
          }));
        case 63:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 60]]);
  }));
  return function betTrxWingo(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var listOrderOld = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body2, typeid, pageno, pageto, auth, _yield$connection$que15, _yield$connection$que16, user, game, _yield$connection$que17, _yield$connection$que18, trx_wingo, _yield$connection$que19, _yield$connection$que20, trx_wingoAll, _yield$connection$que21, _yield$connection$que22, period, page;
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
          game = "";
          if (typeid == 1) game = TRX_WINGO_GAME_TYPE_MAP.MIN_1;
          if (typeid == 3) game = TRX_WINGO_GAME_TYPE_MAP.MIN_3;
          if (typeid == 5) game = TRX_WINGO_GAME_TYPE_MAP.MIN_5;
          if (typeid == 10) game = TRX_WINGO_GAME_TYPE_MAP.MIN_10;
          _context8.next = 18;
          return _connectDB["default"].query("SELECT * FROM trx_wingo_game WHERE status != 0 AND game = ? ORDER BY id DESC LIMIT ?, ?", [game, Number(pageno), Number(pageto)]);
        case 18:
          _yield$connection$que17 = _context8.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          trx_wingo = _yield$connection$que18[0];
          _context8.next = 23;
          return _connectDB["default"].query("SELECT COUNT(*) as game_length FROM trx_wingo_game WHERE status != 0 AND game = ?", [game]);
        case 23:
          _yield$connection$que19 = _context8.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          trx_wingoAll = _yield$connection$que20[0];
          _context8.next = 28;
          return _connectDB["default"].query("SELECT period FROM trx_wingo_game WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1", [game]);
        case 28:
          _yield$connection$que21 = _context8.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          period = _yield$connection$que22[0];
          if (trx_wingo[0]) {
            _context8.next = 33;
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
        case 33:
          if (!(!pageno || !pageto || !user[0] || !trx_wingo[0] || !period[0])) {
            _context8.next = 35;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 35:
          page = Math.ceil(trx_wingoAll[0].game_length / 10);
          return _context8.abrupt("return", res.status(200).json({
            code: 0,
            msg: "Receive success",
            data: {
              gameslist: trx_wingo
            },
            period: period[0].period,
            page: page,
            status: true
          }));
        case 37:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function listOrderOld(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var GetMyEmerdList = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body3, typeid, pageno, pageto, auth, game, _yield$connection$que23, _yield$connection$que24, user, _yield$connection$que25, _yield$connection$que26, trx_wingo_bets, _yield$connection$que27, _yield$connection$que28, trx_wingo_betsAll, page, datas;
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
          if (typeid == 1) game = "trx_wingo";
          if (typeid == 3) game = "trx_wingo3";
          if (typeid == 5) game = "trx_wingo5";
          if (typeid == 10) game = "trx_wingo10";
          _context9.next = 13;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite`, `level`, `money` FROM users WHERE token = ? AND veri = 1 LIMIT 1", [auth]);
        case 13:
          _yield$connection$que23 = _context9.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          user = _yield$connection$que24[0];
          _context9.next = 18;
          return _connectDB["default"].query("SELECT * FROM trx_wingo_bets WHERE phone = ? AND game = ? ORDER BY id DESC LIMIT ?, ?", [user[0].phone, game, Number(pageno), Number(pageto)]);
        case 18:
          _yield$connection$que25 = _context9.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          trx_wingo_bets = _yield$connection$que26[0];
          _context9.next = 23;
          return _connectDB["default"].query("SELECT COUNT(*) as bet_length FROM trx_wingo_bets WHERE phone = ? AND game = ? ORDER BY id DESC", [user[0].phone, game]);
        case 23:
          _yield$connection$que27 = _context9.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          trx_wingo_betsAll = _yield$connection$que28[0];
          if (trx_wingo_bets[0]) {
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
          if (!(!pageno || !pageto || !user[0] || !trx_wingo_bets[0])) {
            _context9.next = 30;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: "Error!",
            status: true
          }));
        case 30:
          page = Math.ceil(trx_wingo_betsAll[0].bet_length / 10);
          datas = trx_wingo_bets.map(function (data) {
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
  return function GetMyEmerdList(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
function minutesPassedSince(time) {
  var inputTime = (0, _moment["default"])(time);
  var minutesDiff = (0, _moment["default"])().diff(inputTime, "minutes");
  return minutesDiff;
}
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
var generateResultByHash = function generateResultByHash(hash) {
  var hashItemList = hash.split("");
  var Result = "";
  for (var index = 0; index < hashItemList.length; index++) {
    var hashItem = hashItemList[hashItemList.length - 1 - index];
    var NUMBER_LIST = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var _isNumber = NUMBER_LIST.includes(hashItem);
    if (_isNumber) {
      Result = hashItem;
      break;
    }
  }
  return Result;
};
function getNthMinuteSinceDayStart() {
  var now = (0, _moment["default"])();
  var startOfDay = (0, _moment["default"])().startOf("day");
  var diff = now.diff(startOfDay, "minutes");
  return diff;
}
var addTrxWingo = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(game) {
    var _trxWingoNow$, _trxWingoNow$2, join, _yield$connection$que29, _yield$connection$que30, trxWingoNow, isPendingGame, PendingGamePeriod, isAdminManipulatedResult, response, NextBlock, BlockId, BlockTime, Hash, Result, gameRepresentationId, NewGamePeriod, timeNow, _yield$connection$que31, _yield$connection$que32, trxWinGoTest, _error$response;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          join = "";
          if (game == 1) join = TRX_WINGO_GAME_TYPE_MAP.MIN_1;
          if (game == 3) join = TRX_WINGO_GAME_TYPE_MAP.MIN_3;
          if (game == 5) join = TRX_WINGO_GAME_TYPE_MAP.MIN_5;
          if (game == 10) join = TRX_WINGO_GAME_TYPE_MAP.MIN_10;

          // console.log(join)
          _context10.next = 8;
          return _connectDB["default"].query("SELECT period FROM trx_wingo_game WHERE status = 0 AND game = ? ORDER BY id DESC LIMIT 1", [join]);
        case 8:
          _yield$connection$que29 = _context10.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          trxWingoNow = _yield$connection$que30[0];
          isPendingGame = trxWingoNow.length;
          PendingGamePeriod = trxWingoNow !== null && trxWingoNow !== void 0 && (_trxWingoNow$ = trxWingoNow[0]) !== null && _trxWingoNow$ !== void 0 && _trxWingoNow$.period ? parseInt(trxWingoNow === null || trxWingoNow === void 0 ? void 0 : (_trxWingoNow$2 = trxWingoNow[0]) === null || _trxWingoNow$2 === void 0 ? void 0 : _trxWingoNow$2.period) : 0;
          if (!isPendingGame) {
            _context10.next = 30;
            break;
          }
          // console.log("TRX WINGO GAME PENDING GAME INSERTIONS Start")
          isAdminManipulatedResult = false;
          if (!isAdminManipulatedResult) {
            _context10.next = 18;
            break;
          }
          _context10.next = 30;
          break;
        case 18:
          _context10.next = 20;
          return (0, _axios["default"])({
            method: "GET",
            url: "https://apilist.tronscanapi.com/api/block?sort=-balance&start=0&limit=20&producer=&number=&start_timestamp=&end_timestamp=",
            headers: {
              "TRON-PRO-API-KEY": process.env.TRON_API_KEY
            }
          });
        case 20:
          response = _context10.sent;
          NextBlock = response.data.data.map(function (item) {
            return {
              id: item.number,
              hash: item.hash,
              blockTime: item.timestamp,
              timeSS: (0, _moment["default"])(item.timestamp).format("ss")
            };
          }).find(function (item) {
            return item.timeSS === "54";
          });
          if (!(NextBlock === undefined)) {
            _context10.next = 24;
            break;
          }
          throw new Error("NextBlock is undefined");
        case 24:
          BlockId = NextBlock.id;
          BlockTime = NextBlock.blockTime;
          Hash = NextBlock.hash;
          Result = generateResultByHash(Hash); // console.log({
          //    BlockId,
          //    BlockTime: moment(BlockTime).format("HH:mm:ss"),
          //    Hash,
          //    Result,
          // })
          _context10.next = 30;
          return _connectDB["default"].query("\n               UPDATE trx_wingo_game\n               SET result = ?, status = ?, block_id = ?, block_time = ?, hash = ?, release_status = 1\n               WHERE period = ? AND game = ?\n               ", [Result, TRX_WINGO_GAME_STATUS_MAP.COMPLETED, BlockId, BlockTime, Hash, PendingGamePeriod, join]);
        case 30:
          gameRepresentationId = _game_representation_id["default"].TRXWINGO[game];
          NewGamePeriod = (0, _games.generatePeriod)(gameRepresentationId);
          timeNow = Date.now();
          _context10.next = 35;
          return _connectDB["default"].query("SELECT period FROM trx_wingo_game WHERE period = ? AND game = ?", [NewGamePeriod, join]);
        case 35:
          _yield$connection$que31 = _context10.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          trxWinGoTest = _yield$connection$que32[0];
          if (!(trxWinGoTest.length > 0)) {
            _context10.next = 40;
            break;
          }
          return _context10.abrupt("return");
        case 40:
          _context10.next = 42;
          return _connectDB["default"].query("INSERT INTO trx_wingo_game SET period = ?, result = 0, game = ?, status = 0, block_id = 0, block_time = '', hash = '', time = ?", [NewGamePeriod, join, timeNow]);
        case 42:
          _context10.next = 47;
          break;
        case 44:
          _context10.prev = 44;
          _context10.t0 = _context10["catch"](0);
          if ((_context10.t0 === null || _context10.t0 === void 0 ? void 0 : (_error$response = _context10.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 403) {
            console.log("API Quota Exceeded for 30 seconds");
            console.log(_context10.t0.response.data.Error);
          } else console.log(_context10.t0);
        case 47:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 44]]);
  }));
  return function addTrxWingo(_x19) {
    return _ref10.apply(this, arguments);
  };
}();
var handlingTrxWingo1P = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(typeid) {
    var game, _yield$connection$que33, _yield$connection$que34, trxWingoNow, result, _yield$connection$que35, _yield$connection$que36, order, i, orders, _result, bet, total, id, phone, nhan_duoc, _yield$connection$que37, _yield$connection$que38, users, totals, sql;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          game = "";
          if (typeid == 1) game = "trx_wingo";
          if (typeid == 3) game = "trx_wingo3";
          if (typeid == 5) game = "trx_wingo5";
          if (typeid == 10) game = "trx_wingo10";
          _context11.next = 8;
          return _connectDB["default"].query("SELECT * FROM trx_wingo_game WHERE status = 1 AND release_status = 1 AND game = ? ORDER BY id DESC LIMIT 1", [game]);
        case 8:
          _yield$connection$que33 = _context11.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          trxWingoNow = _yield$connection$que34[0];
          if (!(trxWingoNow.length === 0)) {
            _context11.next = 13;
            break;
          }
          return _context11.abrupt("return");
        case 13:
          _context11.next = 15;
          return _connectDB["default"].query("UPDATE trx_wingo_bets SET result = ? WHERE status = 0 AND game = ?", [trxWingoNow[0].result, game]);
        case 15:
          result = Number(trxWingoNow[0].result);
          _context11.t0 = result;
          _context11.next = _context11.t0 === 0 ? 19 : _context11.t0 === 1 ? 22 : _context11.t0 === 2 ? 25 : _context11.t0 === 3 ? 28 : _context11.t0 === 4 ? 31 : _context11.t0 === 5 ? 34 : _context11.t0 === 6 ? 37 : _context11.t0 === 7 ? 40 : _context11.t0 === 8 ? 43 : _context11.t0 === 9 ? 46 : 49;
          break;
        case 19:
          _context11.next = 21;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "0", "t")', [game]);
        case 21:
          return _context11.abrupt("break", 50);
        case 22:
          _context11.next = 24;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "1")', [game]);
        case 24:
          return _context11.abrupt("break", 50);
        case 25:
          _context11.next = 27;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "2")', [game]);
        case 27:
          return _context11.abrupt("break", 50);
        case 28:
          _context11.next = 30;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "3")', [game]);
        case 30:
          return _context11.abrupt("break", 50);
        case 31:
          _context11.next = 33;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "4")', [game]);
        case 33:
          return _context11.abrupt("break", 50);
        case 34:
          _context11.next = 36;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "5", "t")', [game]);
        case 36:
          return _context11.abrupt("break", 50);
        case 37:
          _context11.next = 39;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "6")', [game]);
        case 39:
          return _context11.abrupt("break", 50);
        case 40:
          _context11.next = 42;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "7")', [game]);
        case 42:
          return _context11.abrupt("break", 50);
        case 43:
          _context11.next = 45;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "d", "8")', [game]);
        case 45:
          return _context11.abrupt("break", 50);
        case 46:
          _context11.next = 48;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet NOT IN ("l", "n", "x", "9")', [game]);
        case 48:
          return _context11.abrupt("break", 50);
        case 49:
          return _context11.abrupt("break", 50);
        case 50:
          if (!(result < 5)) {
            _context11.next = 55;
            break;
          }
          _context11.next = 53;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet = "l"', [game]);
        case 53:
          _context11.next = 57;
          break;
        case 55:
          _context11.next = 57;
          return _connectDB["default"].query('UPDATE trx_wingo_bets SET status = 2 WHERE status = 0 AND game = ? AND bet = "n"', [game]);
        case 57:
          _context11.next = 59;
          return _connectDB["default"].query("SELECT * FROM trx_wingo_bets WHERE status = 0 AND game = ?", [game]);
        case 59:
          _yield$connection$que35 = _context11.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          order = _yield$connection$que36[0];
          i = 0;
        case 63:
          if (!(i < order.length)) {
            _context11.next = 86;
            break;
          }
          orders = order[i];
          _result = orders.result;
          bet = orders.bet;
          total = orders.money;
          id = orders.id;
          phone = orders.phone;
          nhan_duoc = 0; // x - green
          // t - Violet
          // d - red
          // Sirf 1-4 aur 6-9 tk hi *9 aana chahiye
          // Aur 0 aur 5 pe *4.5
          // Aur red aur green pe *2
          // 1,2,3,4,6,7,8,9
          if (bet == "l" || bet == "n") {
            nhan_duoc = total * 2;
          } else {
            if (_result == 0 || _result == 5) {
              if (bet == "d" || bet == "x") {
                nhan_duoc = total * 1.5;
              } else if (bet == "t") {
                nhan_duoc = total * 4.5;
              } else if (bet == "0" || bet == "5") {
                nhan_duoc = total * 4.5;
              }
            } else {
              if (_result == 1 && bet == "1") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 1 && bet == "x") {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 2 && bet == "2") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 2 && bet == "d") {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 3 && bet == "3") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 3 && bet == "x") {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 4 && bet == "4") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 4 && bet == "d") {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 6 && bet == "6") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 6 && bet == "d") {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 7 && bet == "7") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 7 && bet == "x") {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 8 && bet == "8") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 8 && bet == "d") {
                  nhan_duoc = total * 2;
                }
              }
              if (_result == 9 && bet == "9") {
                nhan_duoc = total * 9;
              } else {
                if (_result == 9 && bet == "x") {
                  nhan_duoc = total * 2;
                }
              }
            }
          }
          _context11.next = 74;
          return _connectDB["default"].query("SELECT `money` FROM `users` WHERE `phone` = ?", [phone]);
        case 74:
          _yield$connection$que37 = _context11.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          users = _yield$connection$que38[0];
          totals = parseFloat(users[0].money) + parseFloat(nhan_duoc);
          _context11.next = 80;
          return _connectDB["default"].query("UPDATE `trx_wingo_bets` SET `get` = ?, `status` = 1 WHERE `id` = ?", [parseFloat(nhan_duoc), id]);
        case 80:
          sql = "UPDATE `users` SET `money` = ? WHERE `phone` = ?";
          _context11.next = 83;
          return _connectDB["default"].query(sql, [totals, phone]);
        case 83:
          i++;
          _context11.next = 63;
          break;
        case 86:
          _context11.next = 88;
          return _connectDB["default"].query("UPDATE trx_wingo_game SET release_status = 2 WHERE period = ? AND game = ?", [trxWingoNow[0].period, game]);
        case 88:
          _context11.next = 93;
          break;
        case 90:
          _context11.prev = 90;
          _context11.t1 = _context11["catch"](0);
          console.log(_context11.t1);
        case 93:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 90]]);
  }));
  return function handlingTrxWingo1P(_x20) {
    return _ref11.apply(this, arguments);
  };
}();
var trxWingoController = {
  trxWingoPage: trxWingoPage,
  betTrxWingo: betTrxWingo,
  listOrderOld: listOrderOld,
  GetMyEmerdList: GetMyEmerdList,
  handlingTrxWingo1P: handlingTrxWingo1P,
  addTrxWingo: addTrxWingo,
  trxWingoPage3: trxWingoPage3,
  trxWingoPage5: trxWingoPage5,
  trxWingoPage10: trxWingoPage10,
  trxWingoBlockPage: trxWingoBlockPage
};
var _default = exports["default"] = trxWingoController;