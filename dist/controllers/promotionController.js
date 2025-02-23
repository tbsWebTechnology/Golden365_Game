"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _reward_types = require("../constants/reward_types.js");
var _paymentController = require("./paymentController.js");
var _games = require("../helpers/games.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // Ensure the correct import
function getOrdinal(n) {
  var s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
var getSubordinateDataByPhone = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(phone) {
    var _yield$connection$exe, _yield$connection$exe2, _yield$connection$exe3, row_1, rechargeQuantity, _yield$connection$exe4, _yield$connection$exe5, _yield$connection$exe6, row_2, rechargeAmount, _yield$connection$exe7, _yield$connection$exe8, _yield$connection$exe9, row_3, firstRechargeAmount, _yield$connection$que, _yield$connection$que2, gameWingo, gameWingoBettingAmount, _yield$connection$que3, _yield$connection$que4, gameK3, gameK3BettingAmount, _yield$connection$que5, _yield$connection$que6, game5D, game5DBettingAmount;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _connectDB["default"].execute("SELECT COUNT(*) AS `count` FROM `recharge` WHERE `phone` = ? AND `status` = ?", [phone, _paymentController.PaymentStatusMap.SUCCESS]);
        case 2:
          _yield$connection$exe = _context.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          _yield$connection$exe3 = _slicedToArray(_yield$connection$exe2[0], 1);
          row_1 = _yield$connection$exe3[0];
          rechargeQuantity = row_1.count;
          _context.next = 9;
          return _connectDB["default"].execute("SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ?", [phone, _paymentController.PaymentStatusMap.SUCCESS]);
        case 9:
          _yield$connection$exe4 = _context.sent;
          _yield$connection$exe5 = _slicedToArray(_yield$connection$exe4, 1);
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5[0], 1);
          row_2 = _yield$connection$exe6[0];
          rechargeAmount = row_2.sum;
          _context.next = 16;
          return _connectDB["default"].execute("SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ? ORDER BY id LIMIT 1 ", [phone, _paymentController.PaymentStatusMap.SUCCESS]);
        case 16:
          _yield$connection$exe7 = _context.sent;
          _yield$connection$exe8 = _slicedToArray(_yield$connection$exe7, 1);
          _yield$connection$exe9 = _slicedToArray(_yield$connection$exe8[0], 1);
          row_3 = _yield$connection$exe9[0];
          firstRechargeAmount = row_3.sum;
          _context.next = 23;
          return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM minutes_1 WHERE phone = ?", [phone]);
        case 23:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          gameWingo = _yield$connection$que2[0];
          gameWingoBettingAmount = gameWingo[0].totalBettingAmount || 0;
          _context.next = 29;
          return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM result_k3 WHERE phone = ?", [phone]);
        case 29:
          _yield$connection$que3 = _context.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          gameK3 = _yield$connection$que4[0];
          gameK3BettingAmount = gameK3[0].totalBettingAmount || 0;
          _context.next = 35;
          return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM result_5d WHERE phone = ?", [phone]);
        case 35:
          _yield$connection$que5 = _context.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          game5D = _yield$connection$que6[0];
          game5DBettingAmount = game5D[0].totalBettingAmount || 0;
          return _context.abrupt("return", {
            rechargeQuantity: rechargeQuantity,
            rechargeAmount: rechargeAmount,
            firstRechargeAmount: firstRechargeAmount,
            bettingAmount: parseInt(gameWingoBettingAmount) + parseInt(gameK3BettingAmount) + parseInt(game5DBettingAmount)
          });
        case 40:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getSubordinateDataByPhone(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getSubordinatesListDataByCode = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(code, startDate) {
    var _ref3, _ref4, subordinatesList, subordinatesCount, subordinatesRechargeQuantity, subordinatesRechargeAmount, subordinatesWithDepositCount, subordinatesFirstDepositAmount, subordinatesWithBettingCount, subordinatesBettingAmount, index, subordinate, _yield$getSubordinate, rechargeQuantity, rechargeAmount, bettingAmount, firstRechargeAmount;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!startDate) {
            _context2.next = 6;
            break;
          }
          _context2.next = 3;
          return _connectDB["default"].execute("SELECT `code`, `phone`, `id_user`, `level`, `time` FROM `users` WHERE `invite` = ? AND time <= ?", [code, startDate]);
        case 3:
          _context2.t0 = _context2.sent;
          _context2.next = 9;
          break;
        case 6:
          _context2.next = 8;
          return _connectDB["default"].execute("SELECT `code`, `phone`, `id_user`, `time` FROM `users` WHERE `invite` = ?", [code]);
        case 8:
          _context2.t0 = _context2.sent;
        case 9:
          _ref3 = _context2.t0;
          _ref4 = _slicedToArray(_ref3, 1);
          subordinatesList = _ref4[0];
          subordinatesCount = subordinatesList.length;
          subordinatesRechargeQuantity = 0;
          subordinatesRechargeAmount = 0;
          subordinatesWithDepositCount = 0;
          subordinatesFirstDepositAmount = 0;
          subordinatesWithBettingCount = 0;
          subordinatesBettingAmount = 0;
          index = 0;
        case 20:
          if (!(index < subordinatesList.length)) {
            _context2.next = 44;
            break;
          }
          subordinate = subordinatesList[index];
          _context2.next = 24;
          return getSubordinateDataByPhone(subordinate.phone);
        case 24:
          _yield$getSubordinate = _context2.sent;
          rechargeQuantity = _yield$getSubordinate.rechargeQuantity;
          rechargeAmount = _yield$getSubordinate.rechargeAmount;
          bettingAmount = _yield$getSubordinate.bettingAmount;
          firstRechargeAmount = _yield$getSubordinate.firstRechargeAmount;
          subordinatesRechargeQuantity += parseInt(rechargeQuantity) || 0;
          subordinatesRechargeAmount += parseInt(rechargeAmount) || 0;
          subordinatesList[index]["rechargeQuantity"] = parseInt(rechargeQuantity) || 0;
          subordinatesList[index]["rechargeAmount"] = parseInt(rechargeAmount) || 0;
          subordinatesList[index]["bettingAmount"] = parseInt(bettingAmount) || 0;
          subordinatesList[index]["firstRechargeAmount"] = parseInt(firstRechargeAmount) || 0;
          subordinatesList[index]["level"] = subordinatesList[index]["level"] || 0;
          subordinatesList[index]["commission"] = subordinatesList[index]["commission"] || 0;
          subordinatesWithBettingCount += parseInt(bettingAmount) > 0 ? 1 : 0;
          subordinatesBettingAmount += parseInt(bettingAmount);
          subordinatesFirstDepositAmount += parseInt(firstRechargeAmount) || 0;
          if (rechargeAmount > 0) {
            subordinatesWithDepositCount++;
          }
        case 41:
          index++;
          _context2.next = 20;
          break;
        case 44:
          return _context2.abrupt("return", {
            subordinatesList: subordinatesList,
            subordinatesCount: subordinatesCount,
            subordinatesRechargeQuantity: subordinatesRechargeQuantity,
            subordinatesRechargeAmount: subordinatesRechargeAmount,
            subordinatesWithDepositCount: subordinatesWithDepositCount,
            subordinatesWithBettingCount: subordinatesWithBettingCount,
            subordinatesBettingAmount: subordinatesBettingAmount,
            subordinatesFirstDepositAmount: subordinatesFirstDepositAmount
          });
        case 45:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getSubordinatesListDataByCode(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var getOneLevelTeamSubordinatesData = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(directSubordinatesList) {
    var oneLevelTeamSubordinatesCount, oneLevelTeamSubordinatesRechargeQuantity, oneLevelTeamSubordinatesRechargeAmount, oneLevelTeamSubordinatesWithDepositCount, oneLevelTeamSubordinatesList, _iterator, _step, directSubordinate, indirectSubordinatesData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          oneLevelTeamSubordinatesCount = 0;
          oneLevelTeamSubordinatesRechargeQuantity = 0;
          oneLevelTeamSubordinatesRechargeAmount = 0;
          oneLevelTeamSubordinatesWithDepositCount = 0;
          oneLevelTeamSubordinatesList = [];
          _iterator = _createForOfIteratorHelper(directSubordinatesList);
          _context3.prev = 6;
          _iterator.s();
        case 8:
          if ((_step = _iterator.n()).done) {
            _context3.next = 20;
            break;
          }
          directSubordinate = _step.value;
          _context3.next = 12;
          return getSubordinatesListDataByCode(directSubordinate.code);
        case 12:
          indirectSubordinatesData = _context3.sent;
          oneLevelTeamSubordinatesList = [].concat(_toConsumableArray(oneLevelTeamSubordinatesList), _toConsumableArray(indirectSubordinatesData.subordinatesList));
          oneLevelTeamSubordinatesCount += indirectSubordinatesData.subordinatesCount;
          oneLevelTeamSubordinatesRechargeQuantity += indirectSubordinatesData.subordinatesRechargeQuantity;
          oneLevelTeamSubordinatesRechargeAmount += indirectSubordinatesData.subordinatesRechargeAmount;
          oneLevelTeamSubordinatesWithDepositCount += indirectSubordinatesData.subordinatesWithDepositCount;
        case 18:
          _context3.next = 8;
          break;
        case 20:
          _context3.next = 25;
          break;
        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3["catch"](6);
          _iterator.e(_context3.t0);
        case 25:
          _context3.prev = 25;
          _iterator.f();
          return _context3.finish(25);
        case 28:
          return _context3.abrupt("return", {
            oneLevelTeamSubordinatesCount: oneLevelTeamSubordinatesCount,
            oneLevelTeamSubordinatesRechargeQuantity: oneLevelTeamSubordinatesRechargeQuantity,
            oneLevelTeamSubordinatesRechargeAmount: oneLevelTeamSubordinatesRechargeAmount,
            oneLevelTeamSubordinatesWithDepositCount: oneLevelTeamSubordinatesWithDepositCount,
            oneLevelTeamSubordinatesList: oneLevelTeamSubordinatesList
          });
        case 29:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[6, 22, 25, 28]]);
  }));
  return function getOneLevelTeamSubordinatesData(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

// const subordinatesDataAPI = async (req, res) => {
//   try {
//       const authToken = req.cookies.auth;
//       const [userRow] = await connection.execute("SELECT `code`, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
//       const user = userRow?.[0];

//       if (!user) {
//          return res.status(401).json({ message: "Unauthorized" });
//       }

//       const directSubordinatesData = await getSubordinatesListDataByCode(user.code);

//       let directSubordinatesCount = directSubordinatesData.subordinatesCount;
//       let directSubordinatesRechargeQuantity = directSubordinatesData.subordinatesRechargeQuantity;
//       let directSubordinatesRechargeAmount = directSubordinatesData.subordinatesRechargeAmount;
//       let directSubordinatesWithDepositCount = directSubordinatesData.subordinatesWithDepositCount;

//       const directSubordinatesList = directSubordinatesData.subordinatesList;

//       let teamSubordinatesCount = directSubordinatesCount;
//       let teamSubordinatesRechargeQuantity = directSubordinatesRechargeQuantity;
//       let teamSubordinatesRechargeAmount = directSubordinatesRechargeAmount;
//       let teamSubordinatesWithDepositCount = directSubordinatesWithDepositCount;

//       let tempSubordinatesList = directSubordinatesList;

//       for (let index = 0; index < 10; index++) {
//          const element = await getOneLevelTeamSubordinatesData(tempSubordinatesList);

//          tempSubordinatesList = element.oneLevelTeamSubordinatesList;
//          teamSubordinatesCount += element.oneLevelTeamSubordinatesCount;
//          teamSubordinatesRechargeQuantity += element.oneLevelTeamSubordinatesRechargeQuantity;
//          teamSubordinatesRechargeAmount += element.oneLevelTeamSubordinatesRechargeAmount;
//          teamSubordinatesWithDepositCount += element.oneLevelTeamSubordinatesWithDepositCount;
//       }

//       return res.status(200).json({
//          data: {
//             directSubordinatesCount,
//             directSubordinatesRechargeQuantity,
//             directSubordinatesRechargeAmount,
//             directSubordinatesWithDepositCount,
//             teamSubordinatesCount,
//             teamSubordinatesRechargeQuantity,
//             teamSubordinatesRechargeAmount,
//             teamSubordinatesWithDepositCount,
//          },
//       });
//   } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: error.message });
//   }
// };
var createInviteMap = function createInviteMap(rows) {
  var inviteMap = {};
  rows.forEach(function (user) {
    if (!inviteMap[user.invite]) {
      inviteMap[user.invite] = [];
    }
    inviteMap[user.invite].push(user);
  });
  return inviteMap;
};
var _getLevelUsers = function getLevelUsers(inviteMap, userCode, currentLevel, maxLevel) {
  if (currentLevel > maxLevel) return [];
  var levelUsers = inviteMap[userCode] || [];
  if (levelUsers.length === 0) return [];
  return levelUsers.flatMap(function (user) {
    return [_objectSpread(_objectSpread({}, user), {}, {
      user_level: currentLevel
    })].concat(_toConsumableArray(_getLevelUsers(inviteMap, user.code, currentLevel + 1, maxLevel)));
  });
};
var getUserLevels = function getUserLevels(rows, userCode) {
  var maxLevel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var inviteMap = createInviteMap(rows);
  var usersByLevels = _getLevelUsers(inviteMap, userCode, 1, maxLevel);
  return {
    usersByLevels: usersByLevels,
    level1Referrals: inviteMap[userCode]
  };
};
var userStats = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(startTime, endTime) {
    var phone,
      _yield$connection$que7,
      _yield$connection$que8,
      rows,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          phone = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : "";
          _context4.next = 3;
          return _connectDB["default"].query("\n      SELECT\n          u.phone,\n          u.invite,\n          u.code,\n          u.time,\n          u.id_user,\n          COALESCE(r.total_deposit_amount, 0) AS total_deposit_amount,\n          COALESCE(r.total_deposit_number, 0) AS total_deposit_number,\n          COALESCE(m.total_bets, 0) AS total_bets,\n          COALESCE(m.total_bet_amount, 0) AS total_bet_amount,\n          COALESCE(c.total_commission, 0) AS total_commission\n      FROM\n          users u\n      LEFT JOIN\n          (\n              SELECT\n                  phone,\n                  SUM(CASE WHEN status = 1 THEN COALESCE(money, 0) ELSE 0 END) AS total_deposit_amount,\n                  COUNT(CASE WHEN status = 1 THEN phone ELSE NULL END) AS total_deposit_number\n              FROM\n                  recharge\n              WHERE\n                  time > ? AND time < ?\n              GROUP BY\n                  phone\n          ) r ON u.phone = r.phone\n      LEFT JOIN\n          (\n              SELECT \n                  phone,\n                  COALESCE(SUM(total_bet_amount), 0) AS total_bet_amount,\n                  COALESCE(SUM(total_bets), 0) AS total_bets\n              FROM (\n                  SELECT \n                      phone,\n                      SUM(money + fee) AS total_bet_amount,\n                      COUNT(*) AS total_bets\n                  FROM minutes_1\n                  WHERE time >= ? AND time <= ?\n                  GROUP BY phone\n                  UNION ALL\n                  SELECT \n                      phone,\n                      SUM(money + fee) AS total_bet_amount,\n                      COUNT(*) AS total_bets\n                  FROM trx_wingo_bets\n                  WHERE time >= ? AND time <= ?\n                  GROUP BY phone\n              ) AS combined\n              GROUP BY phone\n          ) m ON u.phone = m.phone\n      LEFT JOIN\n          (\n              SELECT\n                  from_user_phone AS phone,\n                  SUM(money) AS total_commission\n              FROM\n                  commissions\n              WHERE\n                  time > ? AND time <= ? AND phone = ?\n              GROUP BY\n                  from_user_phone\n          ) c ON u.phone = c.phone\n      GROUP BY\n          u.phone\n      ORDER BY\n          u.time DESC;\n      ", [startTime, endTime, startTime, endTime, startTime, endTime, startTime, endTime, phone]);
        case 3:
          _yield$connection$que7 = _context4.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          rows = _yield$connection$que8[0];
          return _context4.abrupt("return", rows);
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function userStats(_x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();
var getCommissionStatsByTime = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(time, phone) {
    var _yesterdayTime, startOfYesterdayTimestamp, endOfYesterdayTimestamp, _yield$connection$exe10, _yield$connection$exe11, commissionRow;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _yesterdayTime = (0, _games.yesterdayTime)(), startOfYesterdayTimestamp = _yesterdayTime.startOfYesterdayTimestamp, endOfYesterdayTimestamp = _yesterdayTime.endOfYesterdayTimestamp;
          _context5.next = 3;
          return _connectDB["default"].execute("\n      SELECT\n          time,\n          SUM(COALESCE(c.money, 0)) AS total_commission,\n          SUM(CASE \n              WHEN c.time >= ? \n              THEN COALESCE(c.money, 0)\n              ELSE 0 \n          END) AS last_week_commission,\n          SUM(CASE \n              WHEN c.time > ? AND c.time <= ?\n              THEN COALESCE(c.money, 0)\n              ELSE 0 \n          END) AS yesterday_commission\n      FROM\n          commissions c\n      WHERE\n          c.phone = ?\n      ", [time, startOfYesterdayTimestamp, endOfYesterdayTimestamp, phone]);
        case 3:
          _yield$connection$exe10 = _context5.sent;
          _yield$connection$exe11 = _slicedToArray(_yield$connection$exe10, 1);
          commissionRow = _yield$connection$exe11[0];
          return _context5.abrupt("return", (commissionRow === null || commissionRow === void 0 ? void 0 : commissionRow[0]) || {});
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getCommissionStatsByTime(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();
var subordinatesDataAPI = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var authToken, startOfWeek, _yesterdayTime2, startOfYesterdayTimestamp, endOfYesterdayTimestamp, _yield$connection$exe12, _yield$connection$exe13, userRow, user, commissions, userStatsData, _getUserLevels, _getUserLevels$usersB, usersByLevels, _getUserLevels$level, level1Referrals, directSubordinatesCount, noOfRegisteredSubordinates, directSubordinatesRechargeQuantity, directSubordinatesRechargeAmount, directSubordinatesWithDepositCount, teamSubordinatesCount, noOfRegisterAll, noOfRegisterAllSubordinates, teamSubordinatesRechargeQuantity, teamSubordinatesRechargeAmount, teamSubordinatesWithDepositCount, totalCommissions, totalCommissionsThisWeek, totalCommissionsYesterday;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          authToken = req.cookies.auth;
          startOfWeek = (0, _games.getStartOfWeekTimestamp)();
          _yesterdayTime2 = (0, _games.yesterdayTime)(), startOfYesterdayTimestamp = _yesterdayTime2.startOfYesterdayTimestamp, endOfYesterdayTimestamp = _yesterdayTime2.endOfYesterdayTimestamp;
          _context6.next = 6;
          return _connectDB["default"].execute("SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 6:
          _yield$connection$exe12 = _context6.sent;
          _yield$connection$exe13 = _slicedToArray(_yield$connection$exe12, 1);
          userRow = _yield$connection$exe13[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 12:
          _context6.next = 14;
          return getCommissionStatsByTime(startOfWeek, user.phone);
        case 14:
          commissions = _context6.sent;
          _context6.next = 17;
          return userStats(startOfYesterdayTimestamp, endOfYesterdayTimestamp);
        case 17:
          userStatsData = _context6.sent;
          // console.timeEnd("getUserLevels");
          _getUserLevels = getUserLevels(userStatsData, user.code), _getUserLevels$usersB = _getUserLevels.usersByLevels, usersByLevels = _getUserLevels$usersB === void 0 ? [] : _getUserLevels$usersB, _getUserLevels$level = _getUserLevels.level1Referrals, level1Referrals = _getUserLevels$level === void 0 ? [] : _getUserLevels$level;
          directSubordinatesCount = level1Referrals.length;
          noOfRegisteredSubordinates = level1Referrals.filter(function (user) {
            return user.time >= startOfYesterdayTimestamp;
          }).length;
          directSubordinatesRechargeQuantity = level1Referrals.reduce(function (acc, curr) {
            return acc + curr.total_deposit_number;
          }, 0);
          directSubordinatesRechargeAmount = level1Referrals.reduce(function (acc, curr) {
            return acc + +curr.total_deposit_amount;
          }, 0);
          directSubordinatesWithDepositCount = level1Referrals.filter(function (user) {
            return user.total_deposit_number === 1;
          }).length;
          teamSubordinatesCount = usersByLevels.length;
          noOfRegisterAll = usersByLevels.filter(function (user) {
            return user.time >= startOfYesterdayTimestamp;
          });
          noOfRegisterAllSubordinates = noOfRegisterAll.length;
          teamSubordinatesRechargeQuantity = usersByLevels.reduce(function (acc, curr) {
            return acc + curr.total_deposit_number;
          }, 0);
          teamSubordinatesRechargeAmount = usersByLevels.reduce(function (acc, curr) {
            return acc + +curr.total_deposit_amount;
          }, 0);
          teamSubordinatesWithDepositCount = usersByLevels.filter(function (user) {
            return user.total_deposit_number === 1;
          }).length;
          totalCommissions = (commissions === null || commissions === void 0 ? void 0 : commissions.total_commission) || 0;
          totalCommissionsThisWeek = (commissions === null || commissions === void 0 ? void 0 : commissions.last_week_commission) || 0;
          totalCommissionsYesterday = (commissions === null || commissions === void 0 ? void 0 : commissions.yesterday_commission) || 0;
          return _context6.abrupt("return", res.status(200).json({
            data: {
              directSubordinatesCount: directSubordinatesCount,
              noOfRegisteredSubordinates: noOfRegisteredSubordinates,
              directSubordinatesRechargeQuantity: directSubordinatesRechargeQuantity,
              directSubordinatesRechargeAmount: directSubordinatesRechargeAmount,
              directSubordinatesWithDepositCount: directSubordinatesWithDepositCount,
              teamSubordinatesCount: teamSubordinatesCount,
              noOfRegisterAllSubordinates: noOfRegisterAllSubordinates,
              teamSubordinatesRechargeQuantity: teamSubordinatesRechargeQuantity,
              teamSubordinatesRechargeAmount: teamSubordinatesRechargeAmount,
              teamSubordinatesWithDepositCount: teamSubordinatesWithDepositCount,
              totalCommissions: totalCommissions,
              totalCommissionsThisWeek: totalCommissionsThisWeek,
              totalCommissionsYesterday: totalCommissionsYesterday
            }
          }));
        case 36:
          _context6.prev = 36;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            message: _context6.t0.message
          }));
        case 40:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 36]]);
  }));
  return function subordinatesDataAPI(_x9, _x10) {
    return _ref8.apply(this, arguments);
  };
}();

// const subordinatesDataByTimeAPI = async (req, res) => {
//    try {
//       const authToken = req.cookies.auth;
//       const [userRow] = await connection.execute("SELECT `code`, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
//       const user = userRow?.[0];
//       const startDate = req.query.startDate;
//       console.log('===================',req.query.startDate)

//       if (!user) {
//          return res.status(401).json({ message: "Unauthorized" });
//       }

//       const directSubordinatesData = await getSubordinatesListDataByCode(user.code, startDate);

//       let directSubordinatesCount = directSubordinatesData.subordinatesCount;
//       let directSubordinatesRechargeQuantity = directSubordinatesData.subordinatesRechargeQuantity;
//       let directSubordinatesRechargeAmount = directSubordinatesData.subordinatesRechargeAmount;
//       let directSubordinatesWithDepositCount = directSubordinatesData.subordinatesWithDepositCount;
//       let directSubordinatesWithBettingCount = directSubordinatesData.subordinatesWithBettingCount;
//       let directSubordinatesBettingAmount = directSubordinatesData.subordinatesBettingAmount;
//       let directSubordinatesFirstDepositAmount = directSubordinatesData.subordinatesFirstDepositAmount;

//       const directSubordinatesList = directSubordinatesData.subordinatesList;

//       res.status(200).json({
//          status: true,
//          data: {
//             directSubordinatesCount,
//             directSubordinatesRechargeQuantity,
//             directSubordinatesRechargeAmount,
//             directSubordinatesWithDepositCount,
//             directSubordinatesWithBettingCount,
//             directSubordinatesBettingAmount,
//             directSubordinatesFirstDepositAmount,
//             directSubordinatesList,
//          },
//          message: "Successfully fetched subordinates data",
//       });
//    } catch (error) {
//       console.log(error);
//       res.status(500).json({
//          message: "Something went wrong!",
//          error,
//       });
//    }
// };

var subordinatesDataByTimeAPI = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var authToken, _yield$connection$exe14, _yield$connection$exe15, userRow, user, startDate, endDate, searchFromUid, levelFilter, page, limit, offset, userStatsData, _getUserLevels2, _getUserLevels2$users, usersByLevels, filteredUsers, sortedUsersByBet, subordinatesRechargeQuantity, subordinatesRechargeAmount, subordinatesWithBetting, subordinatesWithBettingCount, subordinatesBettingAmount, subordinatesWithFirstDeposit, subordinatesWithFirstDepositCount, subordinatesWithFirstDepositAmount, paginatedUsers, totalUsers, totalPages;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          authToken = req.cookies.auth;
          _context7.next = 4;
          return _connectDB["default"].execute("SELECT `code`,phone, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe14 = _context7.sent;
          _yield$connection$exe15 = _slicedToArray(_yield$connection$exe14, 1);
          userRow = _yield$connection$exe15[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          startDate = +req.query.startDate;
          endDate = (0, _games.getTimeBasedOnDate)(startDate);
          searchFromUid = req.query.id || "";
          levelFilter = req.query.level;
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10;
          offset = (page - 1) * limit; // const levelFilter = "";
          // console.log("===================", req.query.startDate, searchFromUid, levelFilter);
          if (user) {
            _context7.next = 17;
            break;
          }
          return _context7.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 17:
          _context7.next = 19;
          return userStats(startDate, endDate, user.phone);
        case 19:
          userStatsData = _context7.sent;
          // console.time('getUserLevels'); // Start the timer
          _getUserLevels2 = getUserLevels(userStatsData, user.code), _getUserLevels2$users = _getUserLevels2.usersByLevels, usersByLevels = _getUserLevels2$users === void 0 ? [] : _getUserLevels2$users; // console.timeEnd('getUserLevels'); //
          // const filteredUsers = usersByLevels.filter(user => user.time >= startDate && user.id_user.includes(searchFromUid) && (levelFilter !== "All" ? user.user_level === +levelFilter : true));
          filteredUsers = usersByLevels.filter(function (user) {
            return user.id_user.includes(searchFromUid) && (levelFilter !== "All" ? user.user_level === +levelFilter : true);
          }); // const usersFilterByPositiveData = filteredUsers.filter(
          //   (user) =>
          //     user.total_deposit_number > 0 ||
          //     user.total_deposit_amount > 0 ||
          //     user.total_bets > 0,
          // );
          sortedUsersByBet = filteredUsers.sort(function (a, b) {
            return b.total_bet_amount - a.total_bet_amount;
          });
          subordinatesRechargeQuantity = filteredUsers.reduce(function (acc, curr) {
            return acc + curr.total_deposit_number;
          }, 0);
          subordinatesRechargeAmount = filteredUsers.reduce(function (acc, curr) {
            return acc + +curr.total_deposit_amount;
          }, 0);
          /**********************for bets ********************************** */
          subordinatesWithBetting = filteredUsers.filter(function (user) {
            return user.total_bets > 0;
          });
          subordinatesWithBettingCount = subordinatesWithBetting.length;
          subordinatesBettingAmount = subordinatesWithBetting.reduce(function (acc, curr) {
            return acc + +curr.total_bet_amount;
          }, 0).toFixed();
          /**********************for first deposit ********************************** */
          subordinatesWithFirstDeposit = filteredUsers.filter(function (user) {
            return user.total_deposit_number === 1;
          });
          subordinatesWithFirstDepositCount = subordinatesWithFirstDeposit.length;
          subordinatesWithFirstDepositAmount = subordinatesWithFirstDeposit.reduce(function (acc, curr) {
            return acc + +curr.total_deposit_amount;
          }, 0); //for pagination
          paginatedUsers = sortedUsersByBet.slice(offset, offset + limit);
          totalUsers = sortedUsersByBet.length;
          totalPages = Math.ceil(totalUsers / limit);
          res.json({
            status: true,
            meta: {
              totalPages: totalPages,
              currentPage: page
            },
            data: {
              usersByLevels: paginatedUsers,
              subordinatesRechargeQuantity: subordinatesRechargeQuantity,
              subordinatesRechargeAmount: subordinatesRechargeAmount,
              subordinatesWithBettingCount: subordinatesWithBettingCount,
              subordinatesBettingAmount: subordinatesBettingAmount,
              subordinatesWithFirstDepositCount: subordinatesWithFirstDepositCount,
              subordinatesWithFirstDepositAmount: subordinatesWithFirstDepositAmount
            },
            message: "Successfully fetched subordinates data"
          });
          _context7.next = 41;
          break;
        case 37:
          _context7.prev = 37;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            message: _context7.t0.message
          }));
        case 41:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 37]]);
  }));
  return function subordinatesDataByTimeAPI(_x11, _x12) {
    return _ref9.apply(this, arguments);
  };
}();
var subordinatesAPI = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var authToken, _yield$connection$exe16, _yield$connection$exe17, userRow, type, _yesterdayTime3, startOfYesterdayTimestamp, endOfYesterdayTimestamp, _monthTime, startOfMonthTimestamp, endOfMonthTimestamp, startDate, endDate, user, userStatsData, _getUserLevels3, level1Referrals, users;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          authToken = req.cookies.auth;
          _context8.next = 4;
          return _connectDB["default"].execute("SELECT `code`,phone, `invite` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe16 = _context8.sent;
          _yield$connection$exe17 = _slicedToArray(_yield$connection$exe16, 1);
          userRow = _yield$connection$exe17[0];
          type = req.query.type || "today";
          _yesterdayTime3 = (0, _games.yesterdayTime)(), startOfYesterdayTimestamp = _yesterdayTime3.startOfYesterdayTimestamp, endOfYesterdayTimestamp = _yesterdayTime3.endOfYesterdayTimestamp;
          _monthTime = (0, _games.monthTime)(), startOfMonthTimestamp = _monthTime.startOfMonthTimestamp, endOfMonthTimestamp = _monthTime.endOfMonthTimestamp;
          startDate = type === "today" ? (0, _games.getTodayStartTime)() : type === "yesterday" ? startOfYesterdayTimestamp : type === "this month" ? startOfMonthTimestamp : "";
          endDate = type === "today" ? new Date().getTime() : type === "yesterday" ? endOfYesterdayTimestamp : type === "this month" ? endOfMonthTimestamp : "";
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context8.next = 15;
            break;
          }
          return _context8.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 15:
          _context8.next = 17;
          return userStats(startDate, endDate, user.phone);
        case 17:
          userStatsData = _context8.sent;
          // console.time('getUserLevels'); // Start the timer
          _getUserLevels3 = getUserLevels(userStatsData, user.code), level1Referrals = _getUserLevels3.level1Referrals;
          users = level1Referrals.map(function (user) {
            var phone = user.phone,
              uid = user.id_user,
              time = user.time;
            var phoneFormat = phone.slice(0, 3) + "****" + phone.slice(7);
            var timeUtc = new Date(parseInt(time)).toLocaleString("en-GB", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
              timeZone: "UTC"
            }).replace(",", "");
            if (user.time >= startDate) return {
              phone: phoneFormat,
              uid: uid,
              time: timeUtc
            };else return null;
          }).filter(Boolean);
          res.status(200).json({
            status: true,
            type: type,
            users: users,
            message: "Successfully fetched subordinates data"
          });
          _context8.next = 27;
          break;
        case 23:
          _context8.prev = 23;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          return _context8.abrupt("return", res.status(500).json({
            message: _context8.t0.message
          }));
        case 27:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 23]]);
  }));
  return function subordinatesAPI(_x13, _x14) {
    return _ref10.apply(this, arguments);
  };
}();
var InvitationBonusList = [{
  id: 1,
  numberOfInvitedMembers: 3,
  numberOfDeposits: 3,
  amountOfRechargePerPerson: 555,
  bonusAmount: 199
}, {
  id: 2,
  numberOfInvitedMembers: 5,
  numberOfDeposits: 5,
  amountOfRechargePerPerson: 555,
  bonusAmount: 299
}, {
  id: 3,
  numberOfInvitedMembers: 10,
  numberOfDeposits: 10,
  amountOfRechargePerPerson: 1111,
  bonusAmount: 599
}, {
  id: 4,
  numberOfInvitedMembers: 30,
  numberOfDeposits: 30,
  amountOfRechargePerPerson: 1111,
  bonusAmount: 1799
}, {
  id: 5,
  numberOfInvitedMembers: 50,
  numberOfDeposits: 50,
  amountOfRechargePerPerson: 1111,
  bonusAmount: 2799
}, {
  id: 6,
  numberOfInvitedMembers: 75,
  numberOfDeposits: 75,
  amountOfRechargePerPerson: 1555,
  bonusAmount: 4799
}, {
  id: 7,
  numberOfInvitedMembers: 100,
  numberOfDeposits: 100,
  amountOfRechargePerPerson: 1555,
  bonusAmount: 6799
}, {
  id: 8,
  numberOfInvitedMembers: 200,
  numberOfDeposits: 200,
  amountOfRechargePerPerson: 1555,
  bonusAmount: 12229
}, {
  id: 9,
  numberOfInvitedMembers: 500,
  numberOfDeposits: 500,
  amountOfRechargePerPerson: 1777,
  bonusAmount: 33339
}, {
  id: 10,
  numberOfInvitedMembers: 1000,
  numberOfDeposits: 1000,
  amountOfRechargePerPerson: 1777,
  bonusAmount: 64449
}, {
  id: 11,
  numberOfInvitedMembers: 2000,
  numberOfDeposits: 2000,
  amountOfRechargePerPerson: 1777,
  bonusAmount: 122229
}, {
  id: 12,
  numberOfInvitedMembers: 5000,
  numberOfDeposits: 5000,
  amountOfRechargePerPerson: 2111,
  bonusAmount: 299999
}, {
  id: 13,
  numberOfInvitedMembers: 10000,
  numberOfDeposits: 10000,
  amountOfRechargePerPerson: 2555,
  bonusAmount: 999999
}];
var getInvitationBonus = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var authToken, _yield$connection$exe18, _yield$connection$exe19, userRow, user, directSubordinatesData, directSubordinatesCount, directSubordinatesRechargeAmount, _yield$connection$exe20, _yield$connection$exe21, claimedRewardsRow, invitationBonusData;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          authToken = req.cookies.auth;
          _context9.next = 4;
          return _connectDB["default"].execute("SELECT `code`, `invite`, `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe18 = _context9.sent;
          _yield$connection$exe19 = _slicedToArray(_yield$connection$exe18, 1);
          userRow = _yield$connection$exe19[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          console.log(user);
          if (user) {
            _context9.next = 11;
            break;
          }
          return _context9.abrupt("return", res.status(401).json({
            status: false,
            message: "Unauthorized"
          }));
        case 11:
          _context9.next = 13;
          return getSubordinatesListDataByCode(user.code);
        case 13:
          directSubordinatesData = _context9.sent;
          directSubordinatesCount = directSubordinatesData.subordinatesCount;
          directSubordinatesRechargeAmount = directSubordinatesData.subordinatesRechargeAmount;
          _context9.next = 18;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.INVITATION_BONUS, user.phone]);
        case 18:
          _yield$connection$exe20 = _context9.sent;
          _yield$connection$exe21 = _slicedToArray(_yield$connection$exe20, 1);
          claimedRewardsRow = _yield$connection$exe21[0];
          invitationBonusData = InvitationBonusList.map(function (item) {
            var currentNumberOfDeposits = directSubordinatesData.subordinatesList.filter(function (subordinate) {
              return subordinate.rechargeAmount >= item.amountOfRechargePerPerson;
            }).length;
            return {
              id: item.id,
              isFinished: directSubordinatesCount >= item.numberOfInvitedMembers && currentNumberOfDeposits >= item.numberOfDeposits,
              isClaimed: claimedRewardsRow.some(function (claimedReward) {
                return claimedReward.reward_id === item.id;
              }),
              required: {
                numberOfInvitedMembers: item.numberOfInvitedMembers,
                numberOfDeposits: item.numberOfDeposits,
                amountOfRechargePerPerson: item.amountOfRechargePerPerson
              },
              current: {
                numberOfInvitedMembers: Math.min(directSubordinatesCount, item.numberOfInvitedMembers),
                numberOfDeposits: Math.min(currentNumberOfDeposits, item.numberOfDeposits),
                amountOfRechargePerPerson: Math.min(directSubordinatesRechargeAmount, item.amountOfRechargePerPerson)
              },
              bonusAmount: item.bonusAmount
            };
          });
          return _context9.abrupt("return", res.status(200).json({
            data: invitationBonusData,
            status: true,
            message: "Successfully fetched invitation bonus data"
          }));
        case 25:
          _context9.prev = 25;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            message: _context9.t0.message
          }));
        case 29:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 25]]);
  }));
  return function getInvitationBonus(_x15, _x16) {
    return _ref11.apply(this, arguments);
  };
}();
var claimInvitationBonus = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var authToken, invitationBonusId, _yield$connection$exe22, _yield$connection$exe23, userRow, user, directSubordinatesData, directSubordinatesCount, directSubordinatesRechargeAmount, _yield$connection$exe24, _yield$connection$exe25, claimedRewardsRow, invitationBonusData, claimableBonusData, claimedRewardsData, claimedBonusData, time;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          authToken = req.cookies.auth;
          invitationBonusId = req.body.id;
          _context10.next = 5;
          return _connectDB["default"].execute("SELECT `code`, `invite`, `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 5:
          _yield$connection$exe22 = _context10.sent;
          _yield$connection$exe23 = _slicedToArray(_yield$connection$exe22, 1);
          userRow = _yield$connection$exe23[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context10.next = 11;
            break;
          }
          return _context10.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 11:
          _context10.next = 13;
          return getSubordinatesListDataByCode(user.code);
        case 13:
          directSubordinatesData = _context10.sent;
          directSubordinatesCount = directSubordinatesData.subordinatesCount;
          directSubordinatesRechargeAmount = directSubordinatesData.subordinatesRechargeAmount;
          _context10.next = 18;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.INVITATION_BONUS, user.phone]);
        case 18:
          _yield$connection$exe24 = _context10.sent;
          _yield$connection$exe25 = _slicedToArray(_yield$connection$exe24, 1);
          claimedRewardsRow = _yield$connection$exe25[0];
          invitationBonusData = InvitationBonusList.map(function (item) {
            var currentNumberOfDeposits = directSubordinatesData.subordinatesList.filter(function (subordinate) {
              return subordinate.rechargeAmount >= item.amountOfRechargePerPerson;
            }).length;
            return {
              id: item.id,
              isFinished: directSubordinatesCount >= item.numberOfInvitedMembers && currentNumberOfDeposits >= item.numberOfDeposits,
              isClaimed: claimedRewardsRow.some(function (claimedReward) {
                return claimedReward.reward_id === item.id;
              }),
              required: {
                numberOfInvitedMembers: item.numberOfInvitedMembers,
                numberOfDeposits: item.numberOfDeposits,
                amountOfRechargePerPerson: item.amountOfRechargePerPerson
              },
              current: {
                numberOfInvitedMembers: Math.min(directSubordinatesCount, item.numberOfInvitedMembers),
                numberOfDeposits: Math.min(currentNumberOfDeposits, item.numberOfDeposits),
                amountOfRechargePerPerson: Math.min(directSubordinatesRechargeAmount, item.amountOfRechargePerPerson)
              },
              bonusAmount: item.bonusAmount
            };
          });
          claimableBonusData = invitationBonusData.filter(function (item) {
            return item.isFinished && item.id === invitationBonusId;
          });
          if (!(claimableBonusData.length === 0)) {
            _context10.next = 25;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            status: false,
            message: "You does not meet the requirements to claim this reword!"
          }));
        case 25:
          claimedRewardsData = invitationBonusData.find(function (item) {
            return item.isClaimed && item.id === invitationBonusId;
          });
          if (!((claimedRewardsData === null || claimedRewardsData === void 0 ? void 0 : claimedRewardsData.id) === invitationBonusId)) {
            _context10.next = 28;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            status: false,
            message: "Bonus already claimed"
          }));
        case 28:
          claimedBonusData = claimableBonusData === null || claimableBonusData === void 0 ? void 0 : claimableBonusData.find(function (item) {
            return item.id === invitationBonusId;
          });
          time = (0, _moment["default"])().valueOf();
          _context10.next = 32;
          return _connectDB["default"].execute("UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?", [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone]);
        case 32:
          _context10.next = 34;
          return _connectDB["default"].execute("INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)", [invitationBonusId, _reward_types.REWARD_TYPES_MAP.INVITATION_BONUS, user.phone, claimedBonusData.bonusAmount, _reward_types.REWARD_STATUS_TYPES_MAP.SUCCESS, time]);
        case 34:
          return _context10.abrupt("return", res.status(200).json({
            status: true,
            message: "Successfully claimed invitation bonus"
          }));
        case 37:
          _context10.prev = 37;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            message: _context10.t0.message
          }));
        case 41:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 37]]);
  }));
  return function claimInvitationBonus(_x17, _x18) {
    return _ref12.apply(this, arguments);
  };
}();
var getInvitedMembers = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var authToken, _yield$connection$exe26, _yield$connection$exe27, userRow, user, _yield$connection$exe28, _yield$connection$exe29, invitedMembers, index, invitedMember, _yield$connection$exe30, _yield$connection$exe31, _yield$connection$exe32, row_2, rechargeAmount;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          authToken = req.cookies.auth;
          _context11.next = 4;
          return _connectDB["default"].execute("SELECT `code`, `invite`, `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe26 = _context11.sent;
          _yield$connection$exe27 = _slicedToArray(_yield$connection$exe26, 1);
          userRow = _yield$connection$exe27[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context11.next = 10;
            break;
          }
          return _context11.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 10:
          _context11.next = 12;
          return _connectDB["default"].execute("SELECT `phone`, `time`, `id_user`, `id_user`, `name_user` FROM `users` WHERE `invite` = ?", [user.code]);
        case 12:
          _yield$connection$exe28 = _context11.sent;
          _yield$connection$exe29 = _slicedToArray(_yield$connection$exe28, 1);
          invitedMembers = _yield$connection$exe29[0];
          index = 0;
        case 16:
          if (!(index < invitedMembers.length)) {
            _context11.next = 29;
            break;
          }
          invitedMember = invitedMembers[index];
          _context11.next = 20;
          return _connectDB["default"].execute("SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ?", [invitedMember.phone, _paymentController.PaymentStatusMap.SUCCESS]);
        case 20:
          _yield$connection$exe30 = _context11.sent;
          _yield$connection$exe31 = _slicedToArray(_yield$connection$exe30, 1);
          _yield$connection$exe32 = _slicedToArray(_yield$connection$exe31[0], 1);
          row_2 = _yield$connection$exe32[0];
          rechargeAmount = row_2.sum;
          invitedMembers[index]["rechargeAmount"] = rechargeAmount;
        case 26:
          index++;
          _context11.next = 16;
          break;
        case 29:
          return _context11.abrupt("return", res.status(200).json({
            data: invitedMembers.map(function (invitedMember) {
              return {
                uid: invitedMember.id_user,
                phone: invitedMember.phone,
                create_time: (0, _moment["default"])(invitedMember.time, "x").format("YYYY-MM-DD HH:mm:ss"),
                amount: invitedMember.rechargeAmount,
                username: invitedMember.name_user
              };
            }),
            status: true,
            message: "Successfully fetched invited members"
          }));
        case 32:
          _context11.prev = 32;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            message: _context11.t0.message
          }));
        case 36:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 32]]);
  }));
  return function getInvitedMembers(_x19, _x20) {
    return _ref13.apply(this, arguments);
  };
}();
var DailyRechargeBonusList = [{
  id: 1,
  rechargeAmount: 1000,
  bonusAmount: 38
}, {
  id: 2,
  rechargeAmount: 5000,
  bonusAmount: 128
}, {
  id: 3,
  rechargeAmount: 10000,
  bonusAmount: 208
}, {
  id: 4,
  rechargeAmount: 50000,
  bonusAmount: 508
}, {
  id: 5,
  rechargeAmount: 100000,
  bonusAmount: 888
}];
var getDailyRechargeReword = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var authToken, _yield$connection$exe33, _yield$connection$exe34, userRow, user, today, _yield$connection$exe35, _yield$connection$exe36, todayRechargeRow, todayRechargeAmount, _yield$connection$exe37, _yield$connection$exe38, claimedRewardsRow, dailyRechargeRewordList;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          authToken = req.cookies.auth;
          _context12.next = 4;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe33 = _context12.sent;
          _yield$connection$exe34 = _slicedToArray(_yield$connection$exe33, 1);
          userRow = _yield$connection$exe34[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context12.next = 10;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 10:
          today = (0, _moment["default"])().startOf("day").valueOf();
          _context12.next = 13;
          return _connectDB["default"].execute("SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ? AND `time` >= ?", [user.phone, _paymentController.PaymentStatusMap.SUCCESS, today]);
        case 13:
          _yield$connection$exe35 = _context12.sent;
          _yield$connection$exe36 = _slicedToArray(_yield$connection$exe35, 1);
          todayRechargeRow = _yield$connection$exe36[0];
          todayRechargeAmount = todayRechargeRow[0].sum || 0;
          _context12.next = 19;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ? AND `time` >= ?", [_reward_types.REWARD_TYPES_MAP.DAILY_MISSION_BONUS, user.phone, today]);
        case 19:
          _yield$connection$exe37 = _context12.sent;
          _yield$connection$exe38 = _slicedToArray(_yield$connection$exe37, 1);
          claimedRewardsRow = _yield$connection$exe38[0];
          console.log("claimedRewardsRow", [_reward_types.REWARD_TYPES_MAP.DAILY_MISSION_BONUS, user.phone, today]);
          console.log("claimedRewardsRow", claimedRewardsRow);
          dailyRechargeRewordList = DailyRechargeBonusList.map(function (item) {
            console.log("item", todayRechargeAmount);
            console.log("item", item.rechargeAmount);
            console.log("item", claimedRewardsRow.some(function (claimedReward) {
              return claimedReward.reward_id === item.id;
            }));
            return {
              id: item.id,
              rechargeAmount: Math.min(todayRechargeAmount, item.rechargeAmount),
              requiredRechargeAmount: item.rechargeAmount,
              bonusAmount: item.bonusAmount,
              isFinished: todayRechargeAmount >= item.rechargeAmount,
              isClaimed: claimedRewardsRow.some(function (claimedReward) {
                return claimedReward.reward_id === item.id;
              })
            };
          });
          return _context12.abrupt("return", res.status(200).json({
            data: dailyRechargeRewordList,
            status: true,
            message: "Successfully fetched daily recharge bonus data"
          }));
        case 28:
          _context12.prev = 28;
          _context12.t0 = _context12["catch"](0);
          console.log(_context12.t0);
          return _context12.abrupt("return", res.status(500).json({
            message: _context12.t0.message
          }));
        case 32:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 28]]);
  }));
  return function getDailyRechargeReword(_x21, _x22) {
    return _ref14.apply(this, arguments);
  };
}();
var claimDailyRechargeReword = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var authToken, dailyRechargeRewordId, _yield$connection$exe39, _yield$connection$exe40, userRow, user, today, _yield$connection$exe41, _yield$connection$exe42, todayRechargeRow, todayRechargeAmount, _yield$connection$exe43, _yield$connection$exe44, claimedRewardsRow, dailyRechargeRewordList, claimableBonusData, claimedBonusData, _yield$connection$que9, _yield$connection$que10, bonusList, time;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          authToken = req.cookies.auth;
          dailyRechargeRewordId = req.body.id;
          _context13.next = 5;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 5:
          _yield$connection$exe39 = _context13.sent;
          _yield$connection$exe40 = _slicedToArray(_yield$connection$exe39, 1);
          userRow = _yield$connection$exe40[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context13.next = 11;
            break;
          }
          return _context13.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 11:
          today = (0, _moment["default"])().startOf("day").valueOf();
          _context13.next = 14;
          return _connectDB["default"].execute("SELECT SUM(money) AS `sum` FROM `recharge` WHERE `phone` = ? AND `status` = ? AND `time` >= ?", [user.phone, _paymentController.PaymentStatusMap.SUCCESS, today]);
        case 14:
          _yield$connection$exe41 = _context13.sent;
          _yield$connection$exe42 = _slicedToArray(_yield$connection$exe41, 1);
          todayRechargeRow = _yield$connection$exe42[0];
          todayRechargeAmount = todayRechargeRow[0].sum || 0;
          _context13.next = 20;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ? AND `time` >= ?", [_reward_types.REWARD_TYPES_MAP.DAILY_MISSION_BONUS, user.phone, today]);
        case 20:
          _yield$connection$exe43 = _context13.sent;
          _yield$connection$exe44 = _slicedToArray(_yield$connection$exe43, 1);
          claimedRewardsRow = _yield$connection$exe44[0];
          dailyRechargeRewordList = DailyRechargeBonusList.map(function (item) {
            return {
              id: item.id,
              rechargeAmount: todayRechargeAmount,
              requiredRechargeAmount: item.rechargeAmount,
              bonusAmount: item.bonusAmount,
              isFinished: todayRechargeAmount >= item.rechargeAmount,
              isClaimed: claimedRewardsRow.some(function (claimedReward) {
                return claimedReward.reward_id === item.rechargeAmount;
              })
            };
          });
          claimableBonusData = dailyRechargeRewordList.filter(function (item) {
            return item.isFinished && item.rechargeAmount >= item.requiredRechargeAmount;
          });
          if (!(claimableBonusData.length === 0)) {
            _context13.next = 27;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            status: false,
            message: "You does not meet the requirements to claim this reword!"
          }));
        case 27:
          claimedBonusData = claimableBonusData === null || claimableBonusData === void 0 ? void 0 : claimableBonusData.find(function (item) {
            return item.id === dailyRechargeRewordId;
          });
          _context13.next = 30;
          return _connectDB["default"].query("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ? AND `time` >= ? AND `reward_id` = ?", [_reward_types.REWARD_TYPES_MAP.DAILY_MISSION_BONUS, user.phone, today, claimedBonusData.id]);
        case 30:
          _yield$connection$que9 = _context13.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          bonusList = _yield$connection$que10[0];
          if (!(bonusList.length > 0)) {
            _context13.next = 35;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            status: false,
            message: "Bonus already claimed"
          }));
        case 35:
          time = (0, _moment["default"])().valueOf();
          _context13.next = 38;
          return _connectDB["default"].execute("UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?", [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone]);
        case 38:
          _context13.next = 40;
          return _connectDB["default"].execute("INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)", [claimedBonusData.id, _reward_types.REWARD_TYPES_MAP.DAILY_MISSION_BONUS, user.phone, claimedBonusData.bonusAmount, _reward_types.REWARD_STATUS_TYPES_MAP.SUCCESS, time]);
        case 40:
          return _context13.abrupt("return", res.status(200).json({
            status: true,
            message: "Successfully claimed daily recharge bonus"
          }));
        case 43:
          _context13.prev = 43;
          _context13.t0 = _context13["catch"](0);
          console.log(_context13.t0);
          return _context13.abrupt("return", res.status(500).json({
            message: _context13.t0.message
          }));
        case 47:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 43]]);
  }));
  return function claimDailyRechargeReword(_x23, _x24) {
    return _ref15.apply(this, arguments);
  };
}();
var dailyRechargeRewordRecord = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var authToken, _yield$connection$exe45, _yield$connection$exe46, userRow, user, _yield$connection$exe47, _yield$connection$exe48, claimedRewardsRow, claimedRewardsData;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          authToken = req.cookies.auth;
          _context14.next = 4;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe45 = _context14.sent;
          _yield$connection$exe46 = _slicedToArray(_yield$connection$exe45, 1);
          userRow = _yield$connection$exe46[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context14.next = 10;
            break;
          }
          return _context14.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 10:
          _context14.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.DAILY_MISSION_BONUS, user.phone]);
        case 12:
          _yield$connection$exe47 = _context14.sent;
          _yield$connection$exe48 = _slicedToArray(_yield$connection$exe47, 1);
          claimedRewardsRow = _yield$connection$exe48[0];
          claimedRewardsData = claimedRewardsRow.map(function (claimedReward) {
            var currentDailyRechargeReword = DailyRechargeBonusList.find(function (item) {
              return (item === null || item === void 0 ? void 0 : item.id) === (claimedReward === null || claimedReward === void 0 ? void 0 : claimedReward.reward_id);
            });
            return {
              id: claimedReward.reward_id,
              requireRechargeAmount: (currentDailyRechargeReword === null || currentDailyRechargeReword === void 0 ? void 0 : currentDailyRechargeReword.rechargeAmount) || 0,
              amount: claimedReward.amount,
              status: claimedReward.status,
              time: _moment["default"].unix(claimedReward.time).format("YYYY-MM-DD HH:mm:ss")
            };
          });
          console.log(user);
          return _context14.abrupt("return", res.status(200).json({
            data: claimedRewardsData,
            status: true,
            message: "Successfully fetched daily recharge bonus record"
          }));
        case 20:
          _context14.prev = 20;
          _context14.t0 = _context14["catch"](0);
          console.log(_context14.t0);
          return _context14.abrupt("return", res.status(500).json({
            message: "Something went wrong"
          }));
        case 24:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 20]]);
  }));
  return function dailyRechargeRewordRecord(_x25, _x26) {
    return _ref16.apply(this, arguments);
  };
}();
var firstRechargeBonusList = [{
  id: 1,
  rechargeAmount: 100000,
  bonusAmount: 5888,
  agentBonus: 0
}, {
  id: 2,
  rechargeAmount: 50000,
  bonusAmount: 2888,
  agentBonus: 0
}, {
  id: 3,
  rechargeAmount: 10000,
  bonusAmount: 488,
  agentBonus: 0
}, {
  id: 4,
  rechargeAmount: 5000,
  bonusAmount: 288,
  agentBonus: 0
}, {
  id: 5,
  rechargeAmount: 1000,
  bonusAmount: 188,
  agentBonus: 0
}, {
  id: 6,
  rechargeAmount: 500,
  bonusAmount: 108,
  agentBonus: 0
}, {
  id: 7,
  rechargeAmount: 200,
  bonusAmount: 48,
  agentBonus: 0
}, {
  id: 8,
  rechargeAmount: 100,
  bonusAmount: 28,
  agentBonus: 0
}];
var getFirstRechargeRewords = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var authToken, _yield$connection$exe49, _yield$connection$exe50, userRow, user, _yield$connection$exe51, _yield$connection$exe52, claimedRewardsRow, _yield$connection$exe53, _yield$connection$exe54, rechargeRow, firstRecharge, firstRechargeRewordList;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          authToken = req.cookies.auth;
          _context15.next = 4;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe49 = _context15.sent;
          _yield$connection$exe50 = _slicedToArray(_yield$connection$exe49, 1);
          userRow = _yield$connection$exe50[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context15.next = 10;
            break;
          }
          return _context15.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 10:
          _context15.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, user.phone]);
        case 12:
          _yield$connection$exe51 = _context15.sent;
          _yield$connection$exe52 = _slicedToArray(_yield$connection$exe51, 1);
          claimedRewardsRow = _yield$connection$exe52[0];
          _context15.next = 17;
          return _connectDB["default"].execute("SELECT * FROM `recharge` WHERE `phone` = ? AND `status` = ? ORDER BY id DESC LIMIT 1", [user.phone, _paymentController.PaymentStatusMap.SUCCESS]);
        case 17:
          _yield$connection$exe53 = _context15.sent;
          _yield$connection$exe54 = _slicedToArray(_yield$connection$exe53, 1);
          rechargeRow = _yield$connection$exe54[0];
          firstRecharge = (rechargeRow === null || rechargeRow === void 0 ? void 0 : rechargeRow[0]) || {
            money: 0
          };
          firstRechargeRewordList = firstRechargeBonusList.map(function (item, index) {
            var _firstRechargeBonusLi;
            return {
              id: item.id,
              currentRechargeAmount: Math.min(item.rechargeAmount, firstRecharge.money),
              requiredRechargeAmount: item.rechargeAmount,
              bonusAmount: item.bonusAmount,
              agentBonus: item.agentBonus,
              isFinished: index === 0 ? firstRecharge.money >= item.rechargeAmount : firstRecharge.money >= item.rechargeAmount && ((_firstRechargeBonusLi = firstRechargeBonusList[index - 1]) === null || _firstRechargeBonusLi === void 0 ? void 0 : _firstRechargeBonusLi.rechargeAmount) > firstRecharge.money,
              isClaimed: !!claimedRewardsRow.find(function (claimedReward) {
                return claimedReward.reward_id === item.id;
              })
            };
          });
          return _context15.abrupt("return", res.status(200).json({
            data: firstRechargeRewordList,
            isExpired: firstRechargeRewordList.some(function (item) {
              return item.isFinished && item.isClaimed;
            }),
            status: true,
            message: "Successfully fetched first recharge bonus data"
          }));
        case 25:
          _context15.prev = 25;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          return _context15.abrupt("return", res.status(500).json({
            message: _context15.t0.message
          }));
        case 29:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 25]]);
  }));
  return function getFirstRechargeRewords(_x27, _x28) {
    return _ref17.apply(this, arguments);
  };
}();

// const claimFirstRechargeReword = async (req, res) => {
//   try {
//     const authToken = req.cookies.auth;
//     const firstRechargeRewordId = req.body.id;
//     const [userRow] = await connection.execute(
//       "SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1",
//       [authToken],
//     );
//     const user = userRow?.[0];

//     if (!user) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const [claimedRewardsRow] = await connection.execute(
//       "SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?",
//       [REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, user.phone],
//     );
//     const [rechargeRow] = await connection.execute(
//       "SELECT * FROM `recharge` WHERE `phone` = ? AND `status` = ? ORDER BY id DESC LIMIT 1",
//       [user.phone, PaymentStatusMap.SUCCESS],
//     );
//     const firstRecharge = rechargeRow?.[0];

//     if (!firstRecharge) {
//       return res.status(400).json({
//         status: false,
//         message: "No successful recharge found",
//       });
//     }

//     const firstRechargeRewordList = firstRechargeBonusList.map((item, index) => ({
//       id: item.id,
//       currentRechargeAmount: Math.min(item.rechargeAmount, firstRecharge.money),
//       requiredRechargeAmount: item.rechargeAmount,
//       bonusAmount: item.bonusAmount,
//       agentBonus: item.agentBonus,
//       isFinished:
//         index === 0
//           ? firstRecharge.money >= item.rechargeAmount
//           : firstRecharge.money >= item.rechargeAmount &&
//             firstRechargeBonusList[index - 1]?.rechargeAmount > firstRecharge.money,
//       isClaimed: !!claimedRewardsRow.find(
//         (claimedReward) => claimedReward.reward_id === item.id
//       ),
//     }));

//     const claimableBonusData = firstRechargeRewordList.filter(
//       (item) => item.isFinished && !item.isClaimed
//     );

//     if (claimableBonusData.length === 0) {
//       return res.status(400).json({
//         status: false,
//         message: "You do not meet the requirements to claim this reward!",
//       });
//     }

//     const claimedBonusData = claimableBonusData.find(
//       (item) => item.id === firstRechargeRewordId
//     );

//     if (!claimedBonusData) {
//       return res.status(400).json({
//         status: false,
//         message: "Invalid reward ID or reward not claimable",
//       });
//     }

//     const time = moment().valueOf();

//     await connection.execute(
//       "UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?",
//       [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone],
//     );

//     await connection.execute(
//       "INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)",
//       [
//         claimedBonusData.id,
//         REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS,
//         user.phone,
//         claimedBonusData.bonusAmount,
//         REWARD_STATUS_TYPES_MAP.SUCCESS,
//         time,
//       ],
//     );

//     return res.status(200).json({
//       status: true,
//       message: "Successfully claimed first recharge bonus",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: error.message });
//   }
// };

var claimFirstRechargeReword = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var authToken, firstRechargeRewordId, _connection, _yield$_connection$ex, _yield$_connection$ex2, userRow, user, _yield$_connection$ex3, _yield$_connection$ex4, claimedRewardsRow, _yield$_connection$ex5, _yield$_connection$ex6, rechargeRow, firstRecharge, firstRechargeRewordList, claimableBonusData, claimedBonusData, time, _yield$_connection$ex7, _yield$_connection$ex8, updatedClaimedRewardsRow, updatedList;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          authToken = req.cookies.auth;
          firstRechargeRewordId = req.body.id;
          if (!(!firstRechargeRewordId || typeof firstRechargeRewordId !== "number")) {
            _context16.next = 5;
            break;
          }
          return _context16.abrupt("return", res.status(400).json({
            status: false,
            message: "Invalid reward ID provided"
          }));
        case 5:
          _context16.next = 7;
          return _connectDB["default"].getConnection();
        case 7:
          _connection = _context16.sent;
          _context16.prev = 8;
          _context16.next = 11;
          return _connection.execute("SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 11:
          _yield$_connection$ex = _context16.sent;
          _yield$_connection$ex2 = _slicedToArray(_yield$_connection$ex, 1);
          userRow = _yield$_connection$ex2[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context16.next = 17;
            break;
          }
          return _context16.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 17:
          _context16.next = 19;
          return _connection.execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, user.phone]);
        case 19:
          _yield$_connection$ex3 = _context16.sent;
          _yield$_connection$ex4 = _slicedToArray(_yield$_connection$ex3, 1);
          claimedRewardsRow = _yield$_connection$ex4[0];
          _context16.next = 24;
          return _connection.execute("SELECT * FROM `recharge` WHERE `phone` = ? AND `status` = ? ORDER BY id DESC LIMIT 1", [user.phone, _paymentController.PaymentStatusMap.SUCCESS]);
        case 24:
          _yield$_connection$ex5 = _context16.sent;
          _yield$_connection$ex6 = _slicedToArray(_yield$_connection$ex5, 1);
          rechargeRow = _yield$_connection$ex6[0];
          firstRecharge = rechargeRow === null || rechargeRow === void 0 ? void 0 : rechargeRow[0];
          if (firstRecharge) {
            _context16.next = 30;
            break;
          }
          return _context16.abrupt("return", res.status(400).json({
            status: false,
            message: "No successful recharge found"
          }));
        case 30:
          firstRechargeRewordList = firstRechargeBonusList.map(function (item) {
            var claimedReward = claimedRewardsRow.find(function (reward) {
              return parseInt(reward.reward_id) === parseInt(item.id);
            });
            // console.log(`Reward ID: ${item.id}, Claimed Reward:`, claimedReward);
            return {
              id: item.id,
              currentRechargeAmount: Math.min(item.rechargeAmount, firstRecharge.money),
              requiredRechargeAmount: item.rechargeAmount,
              bonusAmount: item.bonusAmount,
              agentBonus: item.agentBonus,
              isFinished: firstRecharge.money >= item.rechargeAmount,
              isClaimed: !!claimedReward // This will return true if found
            };
          });
          claimableBonusData = firstRechargeRewordList.filter(function (item) {
            return item.isFinished && !item.isClaimed;
          });
          if (!(claimableBonusData.length === 0)) {
            _context16.next = 34;
            break;
          }
          return _context16.abrupt("return", res.status(400).json({
            status: false,
            message: "Reward not claimable!"
          }));
        case 34:
          claimedBonusData = claimableBonusData.find(function (item) {
            return item.id === firstRechargeRewordId;
          });
          if (claimedBonusData) {
            _context16.next = 37;
            break;
          }
          return _context16.abrupt("return", res.status(400).json({
            status: false,
            message: "Invalid reward ID or not claimable"
          }));
        case 37:
          time = (0, _moment["default"])().valueOf();
          _context16.next = 40;
          return _connection.beginTransaction();
        case 40:
          _context16.next = 42;
          return _connection.execute("UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?", [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone]);
        case 42:
          _context16.next = 44;
          return _connection.execute("INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)", [claimedBonusData.id, _reward_types.REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, user.phone, claimedBonusData.bonusAmount, _reward_types.REWARD_STATUS_TYPES_MAP.SUCCESS, time]);
        case 44:
          _context16.next = 46;
          return _connection.commit();
        case 46:
          _connection.release();
          _context16.next = 49;
          return _connection.execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, user.phone]);
        case 49:
          _yield$_connection$ex7 = _context16.sent;
          _yield$_connection$ex8 = _slicedToArray(_yield$_connection$ex7, 1);
          updatedClaimedRewardsRow = _yield$_connection$ex8[0];
          updatedList = firstRechargeBonusList.map(function (item) {
            return {
              id: item.id,
              isClaimed: !!updatedClaimedRewardsRow.find(function (claimedReward) {
                return parseInt(claimedReward.reward_id) === item.id;
              })
            };
          });
          return _context16.abrupt("return", res.status(200).json({
            status: true,
            message: "Successfully claimed first recharge bonus",
            data: updatedList
          }));
        case 56:
          _context16.prev = 56;
          _context16.t0 = _context16["catch"](8);
          _context16.next = 60;
          return _connection.rollback();
        case 60:
          _connection.release();
          console.error("Transaction error:", _context16.t0);
          return _context16.abrupt("return", res.status(500).json({
            message: "Error processing reward claim"
          }));
        case 63:
          _context16.next = 69;
          break;
        case 65:
          _context16.prev = 65;
          _context16.t1 = _context16["catch"](0);
          console.error("Error:", _context16.t1);
          return _context16.abrupt("return", res.status(500).json({
            message: _context16.t1.message
          }));
        case 69:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 65], [8, 56]]);
  }));
  return function claimFirstRechargeReword(_x29, _x30) {
    return _ref18.apply(this, arguments);
  };
}();
var AttendanceBonusList = [{
  id: 1,
  days: 1,
  bonusAmount: 5,
  requiredAmount: 200
}, {
  id: 2,
  days: 2,
  bonusAmount: 18,
  requiredAmount: 1000
}, {
  id: 3,
  days: 3,
  bonusAmount: 100,
  requiredAmount: 3000
}, {
  id: 4,
  days: 4,
  bonusAmount: 200,
  requiredAmount: 10000
}, {
  id: 5,
  days: 5,
  bonusAmount: 400,
  requiredAmount: 20000
}, {
  id: 6,
  days: 6,
  bonusAmount: 3000,
  requiredAmount: 100000
}, {
  id: 7,
  days: 7,
  bonusAmount: 7000,
  requiredAmount: 200000
}];
var getAttendanceBonus = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var authToken, _yield$connection$exe55, _yield$connection$exe56, userRow, user, _yield$connection$exe57, _yield$connection$exe58, claimedRewardsRow, attendanceBonusId, lastClaimedReword, lastClaimedRewordTime, lastClaimedRewordDate, today, claimedBonusData;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          authToken = req.cookies.auth;
          _context17.next = 4;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe55 = _context17.sent;
          _yield$connection$exe56 = _slicedToArray(_yield$connection$exe55, 1);
          userRow = _yield$connection$exe56[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context17.next = 10;
            break;
          }
          return _context17.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 10:
          _context17.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.ATTENDANCE_BONUS, user.phone]);
        case 12:
          _yield$connection$exe57 = _context17.sent;
          _yield$connection$exe58 = _slicedToArray(_yield$connection$exe57, 1);
          claimedRewardsRow = _yield$connection$exe58[0];
          attendanceBonusId = 0;
          if (claimedRewardsRow.length === 0) {
            attendanceBonusId = 0;
          } else {
            lastClaimedReword = claimedRewardsRow === null || claimedRewardsRow === void 0 ? void 0 : claimedRewardsRow[claimedRewardsRow.length - 1];
            lastClaimedRewordTime = (lastClaimedReword === null || lastClaimedReword === void 0 ? void 0 : lastClaimedReword.time) || 0;
            lastClaimedRewordDate = _moment["default"].unix(lastClaimedRewordTime).startOf("day");
            today = (0, _moment["default"])().startOf("day");
            if (today.diff(lastClaimedRewordDate, "days") < 1) {
              attendanceBonusId = lastClaimedReword.reward_id;
            } else if (today.diff(lastClaimedRewordDate, "days") >= 2) {
              attendanceBonusId = 0;
            } else {
              attendanceBonusId = lastClaimedReword.reward_id;
            }
          }
          claimedBonusData = AttendanceBonusList.find(function (item) {
            return item.id === attendanceBonusId;
          });
          return _context17.abrupt("return", res.status(200).json({
            status: true,
            data: {
              id: (claimedBonusData === null || claimedBonusData === void 0 ? void 0 : claimedBonusData.id) || 0,
              days: (claimedBonusData === null || claimedBonusData === void 0 ? void 0 : claimedBonusData.days) || 0,
              bonusAmount: (claimedBonusData === null || claimedBonusData === void 0 ? void 0 : claimedBonusData.bonusAmount) || 0
            },
            message: "Successfully fetched attendance bonus data"
          }));
        case 21:
          _context17.prev = 21;
          _context17.t0 = _context17["catch"](0);
          console.log(_context17.t0);
          return _context17.abrupt("return", res.status(500).json({
            status: true,
            message: _context17.t0.message
          }));
        case 25:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 21]]);
  }));
  return function getAttendanceBonus(_x31, _x32) {
    return _ref19.apply(this, arguments);
  };
}();
var claimAttendanceBonus = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var authToken, _yield$connection$exe59, _yield$connection$exe60, userRow, user, _yield$connection$exe61, _yield$connection$exe62, claimedRewardsRow, attendanceBonusId, lastClaimedReword, lastClaimedRewordTime, lastClaimedRewordDate, today, claimedBonusData, _yield$connection$que11, _yield$connection$que12, rechargeTotal, totalRecharge, check, time;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          authToken = req.cookies.auth;
          _context18.next = 4;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe59 = _context18.sent;
          _yield$connection$exe60 = _slicedToArray(_yield$connection$exe59, 1);
          userRow = _yield$connection$exe60[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context18.next = 10;
            break;
          }
          return _context18.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 10:
          _context18.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.ATTENDANCE_BONUS, user.phone]);
        case 12:
          _yield$connection$exe61 = _context18.sent;
          _yield$connection$exe62 = _slicedToArray(_yield$connection$exe61, 1);
          claimedRewardsRow = _yield$connection$exe62[0];
          if (!claimedRewardsRow.map(function (item) {
            return item.reward_id;
          }).includes(7)) {
            _context18.next = 17;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            status: false,
            message: "You have already claimed the attendance bonus for 7 days"
          }));
        case 17:
          attendanceBonusId = 0;
          if (!(claimedRewardsRow.length === 0)) {
            _context18.next = 22;
            break;
          }
          attendanceBonusId = 1;
          _context18.next = 31;
          break;
        case 22:
          lastClaimedReword = claimedRewardsRow === null || claimedRewardsRow === void 0 ? void 0 : claimedRewardsRow[claimedRewardsRow.length - 1];
          lastClaimedRewordTime = (lastClaimedReword === null || lastClaimedReword === void 0 ? void 0 : lastClaimedReword.time) || 0;
          lastClaimedRewordDate = _moment["default"].unix(lastClaimedRewordTime).startOf("day");
          today = (0, _moment["default"])().startOf("day");
          if (!(today.diff(lastClaimedRewordDate, "days") < 1)) {
            _context18.next = 30;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            status: false,
            message: "You have already claimed the attendance bonus today"
          }));
        case 30:
          if (today.diff(lastClaimedRewordDate, "days") >= 2) {
            attendanceBonusId = 1;
          } else {
            attendanceBonusId = lastClaimedReword.reward_id + 1;
          }
        case 31:
          claimedBonusData = AttendanceBonusList.find(function (item) {
            return item.id === attendanceBonusId;
          });
          _context18.next = 34;
          return _connectDB["default"].query("SELECT SUM(money) AS total_recharge FROM recharge WHERE status = 1 AND phone = ?", [user.phone]);
        case 34:
          _yield$connection$que11 = _context18.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          rechargeTotal = _yield$connection$que12[0];
          totalRecharge = +rechargeTotal[0].total_recharge || 0;
          check = totalRecharge >= claimedBonusData.requiredAmount;
          if (check) {
            _context18.next = 41;
            break;
          }
          return _context18.abrupt("return", res.status(400).json({
            status: false,
            message: "Total Recharge amount doesn't met the Required Amount !"
          }));
        case 41:
          time = (0, _moment["default"])().valueOf();
          _context18.next = 44;
          return _connectDB["default"].execute("UPDATE `users` SET `money` = `money` + ?, `total_money` = `total_money` + ? WHERE `phone` = ?", [claimedBonusData.bonusAmount, claimedBonusData.bonusAmount, user.phone]);
        case 44:
          _context18.next = 46;
          return _connectDB["default"].execute("INSERT INTO `claimed_rewards` (`reward_id`, `type`, `phone`, `amount`, `status`, `time`) VALUES (?, ?, ?, ?, ?, ?)", [claimedBonusData.id, _reward_types.REWARD_TYPES_MAP.ATTENDANCE_BONUS, user.phone, claimedBonusData.bonusAmount, _reward_types.REWARD_STATUS_TYPES_MAP.SUCCESS, time]);
        case 46:
          return _context18.abrupt("return", res.status(200).json({
            status: true,
            message: "Successfully claimed attendance bonus for ".concat(getOrdinal(claimedBonusData.days), " day")
          }));
        case 49:
          _context18.prev = 49;
          _context18.t0 = _context18["catch"](0);
          console.log(_context18.t0);
          return _context18.abrupt("return", res.status(500).json({
            status: true,
            message: _context18.t0.message
          }));
        case 53:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 49]]);
  }));
  return function claimAttendanceBonus(_x33, _x34) {
    return _ref20.apply(this, arguments);
  };
}();
var getAttendanceBonusRecord = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var authToken, _yield$connection$exe63, _yield$connection$exe64, userRow, user, _yield$connection$exe65, _yield$connection$exe66, claimedRewardsRow, claimedRewardsData;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          authToken = req.cookies.auth;
          _context19.next = 4;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1", [authToken]);
        case 4:
          _yield$connection$exe63 = _context19.sent;
          _yield$connection$exe64 = _slicedToArray(_yield$connection$exe63, 1);
          userRow = _yield$connection$exe64[0];
          user = userRow === null || userRow === void 0 ? void 0 : userRow[0];
          if (user) {
            _context19.next = 10;
            break;
          }
          return _context19.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 10:
          _context19.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `claimed_rewards` WHERE `type` = ? AND `phone` = ?", [_reward_types.REWARD_TYPES_MAP.ATTENDANCE_BONUS, user.phone]);
        case 12:
          _yield$connection$exe65 = _context19.sent;
          _yield$connection$exe66 = _slicedToArray(_yield$connection$exe65, 1);
          claimedRewardsRow = _yield$connection$exe66[0];
          claimedRewardsData = claimedRewardsRow.map(function (claimedReward) {
            var currentAttendanceBonus = AttendanceBonusList.find(function (item) {
              return (item === null || item === void 0 ? void 0 : item.id) === (claimedReward === null || claimedReward === void 0 ? void 0 : claimedReward.reward_id);
            });
            return {
              id: claimedReward.reward_id,
              days: (currentAttendanceBonus === null || currentAttendanceBonus === void 0 ? void 0 : currentAttendanceBonus.days) || 0,
              amount: claimedReward.amount,
              status: claimedReward.status,
              time: _moment["default"].unix(claimedReward.time).format("YYYY-MM-DD HH:mm:ss")
            };
          });
          return _context19.abrupt("return", res.status(200).json({
            data: claimedRewardsData,
            status: true,
            message: "Successfully fetched attendance bonus record"
          }));
        case 19:
          _context19.prev = 19;
          _context19.t0 = _context19["catch"](0);
          console.log(_context19.t0);
          return _context19.abrupt("return", res.status(500).json({
            status: true,
            message: _context19.t0.message
          }));
        case 23:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 19]]);
  }));
  return function getAttendanceBonusRecord(_x35, _x36) {
    return _ref21.apply(this, arguments);
  };
}();
var promotionController = {
  subordinatesDataAPI: subordinatesDataAPI,
  subordinatesAPI: subordinatesAPI,
  getInvitationBonus: getInvitationBonus,
  claimInvitationBonus: claimInvitationBonus,
  getInvitedMembers: getInvitedMembers,
  getDailyRechargeReword: getDailyRechargeReword,
  claimDailyRechargeReword: claimDailyRechargeReword,
  dailyRechargeRewordRecord: dailyRechargeRewordRecord,
  getFirstRechargeRewords: getFirstRechargeRewords,
  claimFirstRechargeReword: claimFirstRechargeReword,
  claimAttendanceBonus: claimAttendanceBonus,
  getAttendanceBonusRecord: getAttendanceBonusRecord,
  getAttendanceBonus: getAttendanceBonus,
  subordinatesDataByTimeAPI: subordinatesDataByTimeAPI
};
var _default = exports["default"] = promotionController;