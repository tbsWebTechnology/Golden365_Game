"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _reward_types = require("../constants/reward_types.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var VIP_REWORDS_LIST = [{
  level: 0,
  expRequired: 0,
  levelUpReward: 0,
  monthlyReward: 0,
  safePercentage: 0,
  rebateRate: 0
}, {
  level: 1,
  expRequired: 3000,
  levelUpReward: 60,
  monthlyReward: 30,
  safePercentage: 0.2,
  rebateRate: 0.05
}, {
  level: 2,
  expRequired: 30000,
  levelUpReward: 180,
  monthlyReward: 90,
  safePercentage: 0.2,
  rebateRate: 0.05
}, {
  level: 3,
  expRequired: 500000,
  levelUpReward: 600,
  monthlyReward: 280,
  safePercentage: 0.2,
  rebateRate: 0.1
}, {
  level: 4,
  expRequired: 5000000,
  levelUpReward: 1600,
  monthlyReward: 600,
  safePercentage: 0.3,
  rebateRate: 0.1
}, {
  level: 5,
  expRequired: 10000000,
  levelUpReward: 4000,
  monthlyReward: 1600,
  safePercentage: 0.3,
  rebateRate: 0.1
}, {
  level: 6,
  expRequired: 80000000,
  levelUpReward: 16000,
  monthlyReward: 4000,
  safePercentage: 0.3,
  rebateRate: 0.15
}, {
  level: 7,
  expRequired: 300000000,
  levelUpReward: 65000,
  monthlyReward: 16000,
  safePercentage: 0.4,
  rebateRate: 0.15
}, {
  level: 8,
  expRequired: 1000000000,
  levelUpReward: 170000,
  monthlyReward: 65000,
  safePercentage: 0.4,
  rebateRate: 0.15
}, {
  level: 9,
  expRequired: 5000000000,
  levelUpReward: 700000,
  monthlyReward: 170000,
  safePercentage: 0.4,
  rebateRate: 0.2
}, {
  level: 10,
  expRequired: 9999999999,
  levelUpReward: 1700000,
  monthlyReward: 700000,
  safePercentage: 0.7,
  rebateRate: 0.3
}];

// helpers ---------------------------------------------------------------------
var getSubordinateDataByPhone = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(phone) {
    var _yield$connection$que, _yield$connection$que2, gameWingo, gameWingoBettingAmount, _yield$connection$que3, _yield$connection$que4, gameK3, gameK3BettingAmount, _yield$connection$que5, _yield$connection$que6, game5D, game5DBettingAmount, _yield$connection$que7, _yield$connection$que8, gameTrxWingo, gameTrxWingoBettingAmount;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM minutes_1 WHERE phone = ?", [phone]);
        case 2:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          gameWingo = _yield$connection$que2[0];
          gameWingoBettingAmount = gameWingo[0].totalBettingAmount || 0;
          _context.next = 8;
          return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM result_k3 WHERE phone = ?", [phone]);
        case 8:
          _yield$connection$que3 = _context.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          gameK3 = _yield$connection$que4[0];
          gameK3BettingAmount = gameK3[0].totalBettingAmount || 0;
          _context.next = 14;
          return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM result_5d WHERE phone = ?", [phone]);
        case 14:
          _yield$connection$que5 = _context.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          game5D = _yield$connection$que6[0];
          game5DBettingAmount = game5D[0].totalBettingAmount || 0;
          _context.next = 20;
          return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM trx_wingo_bets WHERE phone = ?", [phone]);
        case 20:
          _yield$connection$que7 = _context.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          gameTrxWingo = _yield$connection$que8[0];
          gameTrxWingoBettingAmount = gameTrxWingo[0].totalBettingAmount || 0;
          return _context.abrupt("return", {
            bettingAmount: parseInt(gameWingoBettingAmount) + parseInt(gameK3BettingAmount) + parseInt(game5DBettingAmount) + parseInt(gameTrxWingoBettingAmount)
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getSubordinateDataByPhone(_x) {
    return _ref.apply(this, arguments);
  };
}();
var insertRewordClaim = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref2) {
    var rewardId, rewardType, phone, amount, status, time;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          rewardId = _ref2.rewardId, rewardType = _ref2.rewardType, phone = _ref2.phone, amount = _ref2.amount, status = _ref2.status, time = _ref2.time;
          _context2.next = 3;
          return _connectDB["default"].execute("INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)", [rewardId, rewardType, phone, amount, status, time]);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function insertRewordClaim(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
// ------------------------------------------------------------------------------

// controllers -----------------------------------------------------------------
var releaseVIPLevel = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var _yield$connection$que9, _yield$connection$que10, users, _iterator, _step, _loop;
    return _regeneratorRuntime().wrap(function _callee3$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _connectDB["default"].query("SELECT `vip_level`, `phone`, `money` FROM `users`");
        case 3:
          _yield$connection$que9 = _context4.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          users = _yield$connection$que10[0];
          _iterator = _createForOfIteratorHelper(users);
          _context4.prev = 7;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var user, phone, money, lastVipLevel, _yield$getSubordinate, expPoint, currentVipLevel;
            return _regeneratorRuntime().wrap(function _loop$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  user = _step.value;
                  phone = user.phone, money = user.money, lastVipLevel = user.vip_level;
                  _context3.next = 4;
                  return getSubordinateDataByPhone(phone);
                case 4:
                  _yield$getSubordinate = _context3.sent;
                  expPoint = _yield$getSubordinate.bettingAmount;
                  currentVipLevel = VIP_REWORDS_LIST.find(function (vip, index) {
                    if (VIP_REWORDS_LIST !== null && VIP_REWORDS_LIST !== void 0 && VIP_REWORDS_LIST[index + 1]) {
                      return expPoint >= vip.expRequired && expPoint < VIP_REWORDS_LIST[index + 1].expRequired;
                    } else {
                      return expPoint >= vip.expRequired;
                    }
                  });
                  if (!(currentVipLevel.level === 0)) {
                    _context3.next = 9;
                    break;
                  }
                  return _context3.abrupt("return", 1);
                case 9:
                  if (!(currentVipLevel.level > lastVipLevel)) {
                    _context3.next = 16;
                    break;
                  }
                  _context3.next = 12;
                  return _connectDB["default"].execute("UPDATE users SET vip_level = ?, money = money + ?, total_money = total_money + ? WHERE phone = ?", [currentVipLevel.level, currentVipLevel.levelUpReward, currentVipLevel.levelUpReward, phone]);
                case 12:
                  _context3.next = 14;
                  return insertRewordClaim({
                    rewardId: currentVipLevel.level,
                    rewardType: _reward_types.REWARD_TYPES_MAP.VIP_LEVEL_UP_BONUS,
                    phone: phone,
                    amount: currentVipLevel.levelUpReward,
                    status: _reward_types.REWARD_STATUS_TYPES_MAP.SUCCESS,
                    time: (0, _moment["default"])().unix()
                  });
                case 14:
                  _context3.next = 18;
                  break;
                case 16:
                  _context3.next = 18;
                  return _connectDB["default"].execute("UPDATE users SET vip_level = ? WHERE phone = ?", [currentVipLevel.level, phone]);
                case 18:
                  _context3.next = 20;
                  return insertRewordClaim({
                    rewardId: currentVipLevel.level,
                    rewardType: _reward_types.REWARD_TYPES_MAP.VIP_MONTHLY_REWARD,
                    phone: phone,
                    amount: currentVipLevel.monthlyReward,
                    status: _reward_types.REWARD_STATUS_TYPES_MAP.SUCCESS,
                    time: (0, _moment["default"])().unix()
                  });
                case 20:
                  _context3.next = 22;
                  return _connectDB["default"].execute("UPDATE users SET money = money + ? WHERE phone = ?", [currentVipLevel.monthlyReward, phone]);
                case 22:
                case "end":
                  return _context3.stop();
              }
            }, _loop);
          });
          _iterator.s();
        case 10:
          if ((_step = _iterator.n()).done) {
            _context4.next = 16;
            break;
          }
          return _context4.delegateYield(_loop(), "t0", 12);
        case 12:
          if (!_context4.t0) {
            _context4.next = 14;
            break;
          }
          return _context4.abrupt("continue", 14);
        case 14:
          _context4.next = 10;
          break;
        case 16:
          _context4.next = 21;
          break;
        case 18:
          _context4.prev = 18;
          _context4.t1 = _context4["catch"](7);
          _iterator.e(_context4.t1);
        case 21:
          _context4.prev = 21;
          _iterator.f();
          return _context4.finish(21);
        case 24:
          _context4.next = 29;
          break;
        case 26:
          _context4.prev = 26;
          _context4.t2 = _context4["catch"](0);
          console.log(_context4.t2);
        case 29:
        case "end":
          return _context4.stop();
      }
    }, _callee3, null, [[0, 26], [7, 18, 21, 24]]);
  }));
  return function releaseVIPLevel() {
    return _ref4.apply(this, arguments);
  };
}();

// releaseVIPLevel();

var getMyVIPLevelInfo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var authToken, _yield$connection$exe, _yield$connection$exe2, users, phone, vipLevel, _yield$getSubordinate2, expPoint, payoutDaysLeft;
    return _regeneratorRuntime().wrap(function _callee4$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          authToken = req.cookies.auth;
          if (authToken) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(401).json({
            status: false,
            message: "Unauthorized"
          }));
        case 4:
          _context5.next = 6;
          return _connectDB["default"].execute("SELECT `phone`, `vip_level` FROM `users` WHERE `token` = ?", [authToken]);
        case 6:
          _yield$connection$exe = _context5.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          users = _yield$connection$exe2[0];
          phone = users[0].phone;
          vipLevel = users[0].vip_level;
          _context5.next = 13;
          return getSubordinateDataByPhone(phone);
        case 13:
          _yield$getSubordinate2 = _context5.sent;
          expPoint = _yield$getSubordinate2.bettingAmount;
          payoutDaysLeft = (0, _moment["default"])().startOf("month").add(1, "month").add(2, "hours").diff((0, _moment["default"])(), "days");
          res.status(200).json({
            status: true,
            data: {
              expPoint: expPoint,
              vipLevel: vipLevel,
              payoutDaysLeft: payoutDaysLeft
            }
          });
          _context5.next = 23;
          break;
        case 19:
          _context5.prev = 19;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.status(500).json({
            status: false,
            message: "Internal server error"
          });
        case 23:
        case "end":
          return _context5.stop();
      }
    }, _callee4, null, [[0, 19]]);
  }));
  return function getMyVIPLevelInfo(_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();
var getVIPHistory = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var authToken, _yield$connection$exe3, _yield$connection$exe4, users, phone, _yield$connection$exe5, _yield$connection$exe6, claimedRewards;
    return _regeneratorRuntime().wrap(function _callee5$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          authToken = req.cookies.auth;
          if (authToken) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            status: false,
            message: "Unauthorized"
          }));
        case 4:
          _context6.next = 6;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ?", [authToken]);
        case 6:
          _yield$connection$exe3 = _context6.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          users = _yield$connection$exe4[0];
          phone = users[0].phone;
          _context6.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `phone` = ? AND (type = ? OR type = ?)", [phone, _reward_types.REWARD_TYPES_MAP.VIP_LEVEL_UP_BONUS, _reward_types.REWARD_TYPES_MAP.VIP_MONTHLY_REWARD]);
        case 12:
          _yield$connection$exe5 = _context6.sent;
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5, 1);
          claimedRewards = _yield$connection$exe6[0];
          res.status(200).json({
            status: true,
            list: claimedRewards
          });
          _context6.next = 22;
          break;
        case 18:
          _context6.prev = 18;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          res.status(500).json({
            status: false,
            message: "Internal server error"
          });
        case 22:
        case "end":
          return _context6.stop();
      }
    }, _callee5, null, [[0, 18]]);
  }));
  return function getVIPHistory(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();
var vipController = {
  releaseVIPLevel: releaseVIPLevel,
  getMyVIPLevelInfo: getMyVIPLevelInfo,
  getVIPHistory: getVIPHistory
};
var _default = exports["default"] = vipController;