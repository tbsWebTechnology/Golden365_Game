"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var gameStatisticsPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("member/game_statistics.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function gameStatisticsPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var gameStatistics = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var auth, type, _yield$connection$que, _yield$connection$que2, user, userInfo, startDate, endDate, _yield$connection$que3, _yield$connection$que4, wingo1, wingoBetCount, _yield$connection$que5, _yield$connection$que6, k31, k3BetCount, _yield$connection$que7, _yield$connection$que8, G5d1, g5dBetCount, _yield$connection$que9, _yield$connection$que10, trxWingo1, trxWingoBetCount, _yield$connection$que11, _yield$connection$que12, wingo2, wingoBetAmount, _yield$connection$que13, _yield$connection$que14, k32, k3BetAmount, _yield$connection$que15, _yield$connection$que16, G5d2, g5dBetAmount, _yield$connection$que17, _yield$connection$que18, trxWingo2, trxWingoBetAmount, _yield$connection$que19, _yield$connection$que20, wingo3, wingoWinAmount, _yield$connection$que21, _yield$connection$que22, k33, k3WinAmount, _yield$connection$que23, _yield$connection$que24, G5d3, g5dWinAmount, _yield$connection$que25, _yield$connection$que26, trxWingo3, trxWingoWinAmount, totalBetCount, totalBetAmount, totalWinAmount;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          auth = req.cookies.auth;
          type = req.query.type;
          _context2.next = 5;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ? ", [auth]);
        case 5:
          _yield$connection$que = _context2.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          user = _yield$connection$que2[0];
          userInfo = user[0];
          startDate = 0;
          endDate = 0;
          if (type === "today") {
            startDate = new Date().setHours(0, 0, 0, 0);
            endDate = new Date().setHours(23, 59, 59, 999);
          } else if (type === "yesterday") {
            startDate = new Date(new Date().setDate(new Date().getDate() - 1)).setHours(0, 0, 0, 0);
            endDate = new Date(new Date().setDate(new Date().getDate() - 1)).setHours(23, 59, 59, 999);
          } else if (type === "week") {
            startDate = new Date(new Date().setDate(new Date().getDate() - 7)).setHours(0, 0, 0, 0);
            endDate = new Date().setHours(23, 59, 59, 999);
          } else if (type === "month") {
            startDate = new Date(new Date().setDate(new Date().getDate() - 30)).setHours(0, 0, 0, 0);
            endDate = new Date().setHours(23, 59, 59, 999);
          } else if (type === "all") {
            startDate = 0;
            endDate = new Date().setHours(23, 59, 59, 999);
          }
          _context2.next = 14;
          return _connectDB["default"].query("SELECT COUNT(*) AS wingoBetCount FROM minutes_1 WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 14:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          wingo1 = _yield$connection$que4[0];
          wingoBetCount = parseInt(wingo1[0].wingoBetCount || 0);
          _context2.next = 20;
          return _connectDB["default"].query("SELECT COUNT(*) AS k3BetCount FROM result_k3 WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 20:
          _yield$connection$que5 = _context2.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          k31 = _yield$connection$que6[0];
          k3BetCount = parseInt(k31[0].k3BetCount || 0);
          _context2.next = 26;
          return _connectDB["default"].query("SELECT COUNT(*) AS g5dBetCount FROM result_5d WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 26:
          _yield$connection$que7 = _context2.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          G5d1 = _yield$connection$que8[0];
          g5dBetCount = parseInt(G5d1[0].g5dBetCount || 0);
          _context2.next = 32;
          return _connectDB["default"].query("SELECT COUNT(*) AS trxWingoBetCount FROM trx_wingo_bets WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 32:
          _yield$connection$que9 = _context2.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          trxWingo1 = _yield$connection$que10[0];
          trxWingoBetCount = parseInt(trxWingo1[0].trxWingoBetCount || 0);
          _context2.next = 38;
          return _connectDB["default"].query("SELECT SUM(money + fee) AS wingoBetAmount FROM minutes_1 WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 38:
          _yield$connection$que11 = _context2.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          wingo2 = _yield$connection$que12[0];
          wingoBetAmount = parseInt(wingo2[0].wingoBetAmount || 0);
          _context2.next = 44;
          return _connectDB["default"].query("SELECT SUM(money) AS k3BetAmount FROM result_k3 WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 44:
          _yield$connection$que13 = _context2.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          k32 = _yield$connection$que14[0];
          k3BetAmount = parseInt(k32[0].k3BetAmount || 0);
          _context2.next = 50;
          return _connectDB["default"].query("SELECT SUM(money) AS g5dBetAmount FROM result_5d WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 50:
          _yield$connection$que15 = _context2.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          G5d2 = _yield$connection$que16[0];
          g5dBetAmount = parseInt(G5d2[0].g5dBetAmount || 0);
          _context2.next = 56;
          return _connectDB["default"].query("SELECT SUM(amount) AS trxWingoBetAmount FROM trx_wingo_bets WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 56:
          _yield$connection$que17 = _context2.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          trxWingo2 = _yield$connection$que18[0];
          trxWingoBetAmount = parseInt(trxWingo2[0].trxWingoBetAmount || 0);
          _context2.next = 62;
          return _connectDB["default"].query("SELECT SUM(get) AS wingoWinAmount FROM minutes_1 WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 62:
          _yield$connection$que19 = _context2.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          wingo3 = _yield$connection$que20[0];
          wingoWinAmount = parseInt(wingo3[0].wingoWinAmount || 0);
          _context2.next = 68;
          return _connectDB["default"].query("SELECT SUM(get) AS k3WinAmount FROM result_k3 WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 68:
          _yield$connection$que21 = _context2.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          k33 = _yield$connection$que22[0];
          k3WinAmount = parseInt(k33[0].k3WinAmount || 0);
          _context2.next = 74;
          return _connectDB["default"].query("SELECT SUM(get) AS g5dWinAmount FROM result_5d WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 74:
          _yield$connection$que23 = _context2.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          G5d3 = _yield$connection$que24[0];
          g5dWinAmount = parseInt(G5d3[0].g5dWinAmount || 0);
          _context2.next = 80;
          return _connectDB["default"].query("SELECT SUM(get) AS trxWingoWinAmount FROM trx_wingo_bets WHERE phone = ? AND time BETWEEN '?' AND '?'", [userInfo.phone, startDate, endDate]);
        case 80:
          _yield$connection$que25 = _context2.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          trxWingo3 = _yield$connection$que26[0];
          trxWingoWinAmount = parseInt(trxWingo3[0].trxWingoWinAmount || 0);
          totalBetCount = (wingoBetCount || 0) + (k3BetCount || 0) + (g5dBetCount || 0) + (trxWingoBetCount || 0);
          totalBetAmount = (wingoBetAmount || 0) + (k3BetAmount || 0) + (g5dBetAmount || 0) + (trxWingoBetAmount || 0);
          totalWinAmount = (wingoWinAmount || 0) + (k3WinAmount || 0) + (g5dWinAmount || 0) + (trxWingoWinAmount || 0);
          return _context2.abrupt("return", res.status(200).send({
            status: 200,
            totalBetAmount: totalBetAmount,
            list: [{
              title: "lottery",
              totalBetAmount: totalBetAmount,
              numberOfBets: totalBetCount,
              totalWinAmount: totalWinAmount
            }],
            message: "Game statistics fetched successfully"
          }));
        case 90:
          _context2.prev = 90;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          return _context2.abrupt("return", res.status(500).send({
            status: 500,
            message: "Something went wrong! Please try again later."
          }));
        case 94:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 90]]);
  }));
  return function gameStatistics(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var autoCleanOldGames = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var TwoDayAgoUnixMoment;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          TwoDayAgoUnixMoment = (0, _moment["default"])().subtract(2, "days").valueOf();
          _context3.next = 4;
          return _connectDB["default"].execute("DELETE FROM wingo WHERE time < '".concat(TwoDayAgoUnixMoment, "'"));
        case 4:
          _context3.next = 6;
          return _connectDB["default"].execute("DELETE FROM 5d WHERE time < '".concat(TwoDayAgoUnixMoment, "'"));
        case 6:
          _context3.next = 8;
          return _connectDB["default"].execute("DELETE FROM k3 WHERE time < '".concat(TwoDayAgoUnixMoment, "'"));
        case 8:
          _context3.next = 10;
          return _connectDB["default"].execute("DELETE FROM trx_wingo_game WHERE time < '".concat(TwoDayAgoUnixMoment, "'"));
        case 10:
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          console.log("Failed to delete old games table!");
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function autoCleanOldGames() {
    return _ref3.apply(this, arguments);
  };
}();
var updateSafeBonusAndTransfer = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var _yield$connection$que27, _yield$connection$que28, adminConfig, safeInterest, _yield$connection$que29, _yield$connection$que30, users, _iterator, _step, user, phone, third_party_money, safe_bonus, bonusAmount, updatedSafeBonus, updatedThirdPartyMoney, transactionConnection, transferId, epochTime;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _connectDB["default"].query("SELECT safeinterest FROM admin_ac LIMIT 1");
        case 3:
          _yield$connection$que27 = _context4.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          adminConfig = _yield$connection$que28[0];
          if (!(!adminConfig || adminConfig.length === 0)) {
            _context4.next = 9;
            break;
          }
          console.error("Failed to fetch safeinterest value. Aborting.");
          return _context4.abrupt("return");
        case 9:
          safeInterest = parseFloat(adminConfig[0].safeinterest);
          if (!(isNaN(safeInterest) || safeInterest <= 0)) {
            _context4.next = 13;
            break;
          }
          console.error("Invalid safeinterest value. Aborting.");
          return _context4.abrupt("return");
        case 13:
          _context4.next = 15;
          return _connectDB["default"].query("SELECT phone, third_party_money, safe_bonus FROM users WHERE third_party_money > 0");
        case 15:
          _yield$connection$que29 = _context4.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          users = _yield$connection$que30[0];
          if (!(users.length === 0)) {
            _context4.next = 21;
            break;
          }
          console.log("No users with third_party_money to update.");
          return _context4.abrupt("return");
        case 21:
          _iterator = _createForOfIteratorHelper(users);
          _context4.prev = 22;
          _iterator.s();
        case 24:
          if ((_step = _iterator.n()).done) {
            _context4.next = 60;
            break;
          }
          user = _step.value;
          phone = user.phone, third_party_money = user.third_party_money, safe_bonus = user.safe_bonus;
          bonusAmount = parseFloat((parseFloat(third_party_money) * safeInterest).toFixed(2)); // Calculate bonus based on safeinterest
          if (!(isNaN(bonusAmount) || bonusAmount <= 0)) {
            _context4.next = 31;
            break;
          }
          console.error("Invalid bonus amount for user ".concat(phone, ". Skipping."));
          return _context4.abrupt("continue", 58);
        case 31:
          // Safely add the bonus amount to the current safe_bonus and third_party_money
          updatedSafeBonus = parseFloat((parseFloat(safe_bonus || 0) + bonusAmount).toFixed(2));
          updatedThirdPartyMoney = parseFloat((parseFloat(third_party_money) + bonusAmount).toFixed(2));
          _context4.next = 35;
          return _connectDB["default"].getConnection();
        case 35:
          transactionConnection = _context4.sent;
          _context4.prev = 36;
          _context4.next = 39;
          return transactionConnection.beginTransaction();
        case 39:
          _context4.next = 41;
          return transactionConnection.query("UPDATE users SET safe_bonus = ?, third_party_money = ? WHERE phone = ?", [updatedSafeBonus, updatedThirdPartyMoney, phone]);
        case 41:
          // Insert into safe_transfer table
          transferId = Math.floor(100000000000 + Math.random() * 900000000000).toString();
          epochTime = Date.now();
          _context4.next = 45;
          return transactionConnection.query("INSERT INTO safe_transfer (phone, transfer_id, amount, type, time) VALUES (?, ?, ?, ?, ?)", [phone, transferId, bonusAmount, 3, epochTime]);
        case 45:
          _context4.next = 47;
          return transactionConnection.commit();
        case 47:
          console.log("Successfully updated safe_bonus, third_party_money, and logged transfer for user ".concat(phone, "."));
          _context4.next = 55;
          break;
        case 50:
          _context4.prev = 50;
          _context4.t0 = _context4["catch"](36);
          _context4.next = 54;
          return transactionConnection.rollback();
        case 54:
          console.error("Error processing user ".concat(phone, ":"), _context4.t0);
        case 55:
          _context4.prev = 55;
          transactionConnection.release();
          return _context4.finish(55);
        case 58:
          _context4.next = 24;
          break;
        case 60:
          _context4.next = 65;
          break;
        case 62:
          _context4.prev = 62;
          _context4.t1 = _context4["catch"](22);
          _iterator.e(_context4.t1);
        case 65:
          _context4.prev = 65;
          _iterator.f();
          return _context4.finish(65);
        case 68:
          _context4.next = 73;
          break;
        case 70:
          _context4.prev = 70;
          _context4.t2 = _context4["catch"](0);
          console.error("Error in updateSafeBonusAndTransfer:", _context4.t2);
        case 73:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 70], [22, 62, 65, 68], [36, 50, 55, 58]]);
  }));
  return function updateSafeBonusAndTransfer() {
    return _ref4.apply(this, arguments);
  };
}();
var gameController = {
  gameStatistics: gameStatistics,
  gameStatisticsPage: gameStatisticsPage,
  autoCleanOldGames: autoCleanOldGames,
  updateSafeBonusAndTransfer: updateSafeBonusAndTransfer // Added function
};
var _default = exports["default"] = gameController;