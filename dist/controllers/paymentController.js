"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaymentStatusMap = void 0;
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _axios = _interopRequireDefault(require("axios"));
var _moment = _interopRequireDefault(require("moment"));
var _querystring = _interopRequireDefault(require("querystring"));
var _crypto2 = _interopRequireDefault(require("crypto"));
var _games = require("../helpers/games.js");
var _reward_types = require("../constants/reward_types.js");
var _AppError = _interopRequireDefault(require("../errors/AppError.js"));
var _upay = _interopRequireDefault(require("../helpers/upay.js"));
var _joi = _interopRequireDefault(require("joi"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var timeNow = Date.now();
var PaymentStatusMap = exports.PaymentStatusMap = {
  PENDING: 0,
  SUCCESS: 1,
  CANCELLED: 2
};
var PaymentMethodsMap = {
  UPI_GATEWAY: "upi_gateway",
  UPI_MANUAL: "upi_manual",
  USDT_MANUAL: "usdt_manual",
  WOW_PAY: "wow_pay",
  RS_PAY: "rs_pay",
  USDT: "usdt",
  UPAY: "upay",
  MOTHER: "mother",
  LGPAY: "lgpay"
};

// UPI Manual Payment Integration --------------
var initiateManualUPIPayment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _bank_recharge_momo_d, _bank_recharge_momo_d2, _bank_recharge_momo_d3, _bank_recharge_momo_d4;
    var query, _yield$connection$que, _yield$connection$que2, bank_recharge_momo, bank_recharge_momo_data, momo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          query = req.query;
          _context.next = 3;
          return _connectDB["default"].query("SELECT * FROM bank_recharge WHERE type = 'momo'");
        case 3:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          bank_recharge_momo = _yield$connection$que2[0];
          if (bank_recharge_momo.length) {
            bank_recharge_momo_data = bank_recharge_momo[0];
          }
          momo = {
            bank_name: ((_bank_recharge_momo_d = bank_recharge_momo_data) === null || _bank_recharge_momo_d === void 0 ? void 0 : _bank_recharge_momo_d.name_bank) || "",
            username: ((_bank_recharge_momo_d2 = bank_recharge_momo_data) === null || _bank_recharge_momo_d2 === void 0 ? void 0 : _bank_recharge_momo_d2.name_user) || "",
            upi_id: ((_bank_recharge_momo_d3 = bank_recharge_momo_data) === null || _bank_recharge_momo_d3 === void 0 ? void 0 : _bank_recharge_momo_d3.stk) || "",
            usdt_wallet_address: ((_bank_recharge_momo_d4 = bank_recharge_momo_data) === null || _bank_recharge_momo_d4 === void 0 ? void 0 : _bank_recharge_momo_d4.qr_code_image) || ""
          };
          return _context.abrupt("return", res.render("wallet/manual_payment.ejs", {
            Amount: query === null || query === void 0 ? void 0 : query.am,
            UpiId: momo.upi_id
          }));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function initiateManualUPIPayment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addManualUPIPaymentRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var data, auth, money, utr, minimumMoneyAllowed, _yield$connection$que3, _yield$connection$que4, isUsedUtr, user, pendingRechargeList, deleteRechargeQueries, orderId, newRecharge, recharge;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          data = req.body;
          auth = req.cookies.auth;
          money = parseInt(data.money);
          utr = parseInt(data.utr);
          minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY_INR);
          if (!(!money || !(money >= minimumMoneyAllowed))) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "Money is Required and it should be \u20B9".concat(minimumMoneyAllowed, " or above!"),
            status: false,
            timeStamp: timeNow
          }));
        case 8:
          if (!(!utr && (utr === null || utr === void 0 ? void 0 : utr.length) != 12)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "UPI Ref No. or UTR is Required And it should be 12 digit long",
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context2.next = 12;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE utr = ? ", [utr]);
        case 12:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          isUsedUtr = _yield$connection$que4[0];
          if (!isUsedUtr.length) {
            _context2.next = 17;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            message: "UPI Ref No. or UTR is already used",
            status: false,
            timeStamp: timeNow
          }));
        case 17:
          _context2.next = 19;
          return getUserDataByAuthToken(auth);
        case 19:
          user = _context2.sent;
          _context2.next = 22;
          return rechargeTable.getRecordByPhoneAndStatus({
            phone: user.phone,
            status: PaymentStatusMap.PENDING,
            type: PaymentMethodsMap.UPI_GATEWAY
          });
        case 22:
          pendingRechargeList = _context2.sent;
          if (!(pendingRechargeList.length !== 0)) {
            _context2.next = 27;
            break;
          }
          deleteRechargeQueries = pendingRechargeList.map(function (recharge) {
            return rechargeTable.cancelById(recharge.id);
          });
          _context2.next = 27;
          return Promise.all(deleteRechargeQueries);
        case 27:
          orderId = getRechargeOrderId();
          newRecharge = {
            orderId: orderId,
            transactionId: "NULL",
            utr: utr,
            phone: user.phone,
            money: money,
            type: PaymentMethodsMap.UPI_MANUAL,
            status: 0,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: "NULL",
            time: rechargeTable.getCurrentTimeForTimeField()
          };
          _context2.next = 31;
          return rechargeTable.create(newRecharge);
        case 31:
          recharge = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            message: "Payment Requested successfully Your Balance will update shortly!",
            recharge: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 35:
          _context2.prev = 35;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          });
        case 39:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 35]]);
  }));
  return function addManualUPIPaymentRequest(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
// --------------------------------------------

// USDT Manual Payment Integration ------------
var initiateManualUSDTPayment = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _bank_recharge_momo_d5, _bank_recharge_momo_d6, _bank_recharge_momo_d7, _bank_recharge_momo_d8;
    var query, _yield$connection$que5, _yield$connection$que6, bank_recharge_momo, bank_recharge_momo_data, momo;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          query = req.query;
          _context3.next = 3;
          return _connectDB["default"].query("SELECT * FROM bank_recharge WHERE type = 'momo'");
        case 3:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          bank_recharge_momo = _yield$connection$que6[0];
          if (bank_recharge_momo.length) {
            bank_recharge_momo_data = bank_recharge_momo[0];
          }
          momo = {
            bank_name: ((_bank_recharge_momo_d5 = bank_recharge_momo_data) === null || _bank_recharge_momo_d5 === void 0 ? void 0 : _bank_recharge_momo_d5.name_bank) || "",
            username: ((_bank_recharge_momo_d6 = bank_recharge_momo_data) === null || _bank_recharge_momo_d6 === void 0 ? void 0 : _bank_recharge_momo_d6.name_user) || "",
            upi_id: ((_bank_recharge_momo_d7 = bank_recharge_momo_data) === null || _bank_recharge_momo_d7 === void 0 ? void 0 : _bank_recharge_momo_d7.stk) || "",
            usdt_wallet_address: ((_bank_recharge_momo_d8 = bank_recharge_momo_data) === null || _bank_recharge_momo_d8 === void 0 ? void 0 : _bank_recharge_momo_d8.qr_code_image) || ""
          };
          return _context3.abrupt("return", res.render("wallet/usdt_manual_payment.ejs", {
            Amount: query === null || query === void 0 ? void 0 : query.am,
            UsdtWalletAddress: momo.usdt_wallet_address
          }));
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function initiateManualUSDTPayment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var addManualUSDTPaymentRequest = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var data, auth, money_usdt, money, utr, minimumMoneyAllowed, user, pendingRechargeList, deleteRechargeQueries, orderId, newRecharge, recharge;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          data = req.body;
          auth = req.cookies.auth;
          money_usdt = parseInt(data.money);
          money = money_usdt * 93;
          utr = parseInt(data.utr);
          minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY_USDT);
          if (!(!money || !(money >= minimumMoneyAllowed))) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Money is Required and it should be USDT ".concat(minimumMoneyAllowed.toFixed(2), " or above!"),
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          if (utr) {
            _context4.next = 11;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Ref No. or UTR is Required",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          _context4.next = 13;
          return getUserDataByAuthToken(auth);
        case 13:
          user = _context4.sent;
          _context4.next = 16;
          return rechargeTable.getRecordByPhoneAndStatus({
            phone: user.phone,
            status: PaymentStatusMap.PENDING,
            type: PaymentMethodsMap.UPI_GATEWAY
          });
        case 16:
          pendingRechargeList = _context4.sent;
          if (!(pendingRechargeList.length !== 0)) {
            _context4.next = 21;
            break;
          }
          deleteRechargeQueries = pendingRechargeList.map(function (recharge) {
            return rechargeTable.cancelById(recharge.id);
          });
          _context4.next = 21;
          return Promise.all(deleteRechargeQueries);
        case 21:
          orderId = getRechargeOrderId();
          newRecharge = {
            orderId: orderId,
            transactionId: "NULL",
            utr: utr,
            phone: user.phone,
            money: money,
            type: PaymentMethodsMap.USDT_MANUAL,
            status: 0,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: "NULL",
            time: rechargeTable.getCurrentTimeForTimeField()
          };
          _context4.next = 25;
          return rechargeTable.create(newRecharge);
        case 25:
          recharge = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            message: "Payment Requested successfully Your Balance will update shortly!",
            recharge: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 29:
          _context4.prev = 29;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          });
        case 33:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 29]]);
  }));
  return function addManualUSDTPaymentRequest(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
// --------------------------------------------

// UPI Gateway Payment Integration ------------
var initiateUPIPayment = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var type, auth, money, minimumMoneyAllowed, _ekqrData$data, _ekqrData$data2, _ekqrData$data2$upi_i, _ekqrData$data3, _ekqrData$data3$upi_i, _ekqrData$data4, _ekqrData$data4$upi_i, _ekqrData$data5, _ekqrData$data5$upi_i, user, pendingRechargeList, deleteRechargeQueries, orderId, ekqrResponse, ekqrData, newRecharge, recharge;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          type = PaymentMethodsMap.UPI_GATEWAY;
          auth = req.cookies.auth;
          money = parseInt(req.body.money);
          minimumMoneyAllowed = parseInt(process.env.MINIMUM_MONEY_INR);
          if (!(!money || !(money >= minimumMoneyAllowed))) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Money is Required and it should be \u20B9".concat(minimumMoneyAllowed, " or above!"),
            status: false,
            timeStamp: timeNow
          }));
        case 6:
          _context5.prev = 6;
          _context5.next = 9;
          return getUserDataByAuthToken(auth);
        case 9:
          user = _context5.sent;
          _context5.next = 12;
          return rechargeTable.getRecordByPhoneAndStatus({
            phone: user.phone,
            status: PaymentStatusMap.PENDING,
            type: PaymentMethodsMap.UPI_GATEWAY
          });
        case 12:
          pendingRechargeList = _context5.sent;
          if (!(pendingRechargeList.length !== 0)) {
            _context5.next = 17;
            break;
          }
          deleteRechargeQueries = pendingRechargeList.map(function (recharge) {
            return rechargeTable.cancelById(recharge.id);
          });
          _context5.next = 17;
          return Promise.all(deleteRechargeQueries);
        case 17:
          orderId = getRechargeOrderId();
          _context5.next = 20;
          return _axios["default"].post("https://api.ekqr.in/api/create_order", {
            key: process.env.UPI_GATEWAY_PAYMENT_KEY,
            client_txn_id: orderId,
            amount: String(money),
            p_info: process.env.PAYMENT_INFO,
            customer_name: user.username,
            customer_email: process.env.PAYMENT_EMAIL,
            customer_mobile: user.phone,
            redirect_url: "".concat(process.env.APP_BASE_URL, "/wallet/verify/upi"),
            udf1: process.env.APP_NAME
          });
        case 20:
          ekqrResponse = _context5.sent;
          ekqrData = ekqrResponse === null || ekqrResponse === void 0 ? void 0 : ekqrResponse.data;
          if (!(ekqrData === undefined || ekqrData.status === false)) {
            _context5.next = 24;
            break;
          }
          throw Error("Payment Service: Gateway error from ekqr!");
        case 24:
          newRecharge = {
            orderId: orderId,
            transactionId: "NULL",
            utr: 0,
            phone: user.phone,
            money: money,
            type: type,
            status: 0,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: ekqrData.data.payment_url,
            time: rechargeTable.getCurrentTimeForTimeField()
          };
          _context5.next = 27;
          return rechargeTable.create(newRecharge);
        case 27:
          recharge = _context5.sent;
          console.log(ekqrData);
          return _context5.abrupt("return", res.status(200).json({
            message: "Payment Initiated successfully",
            recharge: recharge,
            urls: {
              web_url: (_ekqrData$data = ekqrData.data) === null || _ekqrData$data === void 0 ? void 0 : _ekqrData$data.payment_url,
              bhim_link: ((_ekqrData$data2 = ekqrData.data) === null || _ekqrData$data2 === void 0 ? void 0 : (_ekqrData$data2$upi_i = _ekqrData$data2.upi_intent) === null || _ekqrData$data2$upi_i === void 0 ? void 0 : _ekqrData$data2$upi_i.bhim_link) || "",
              phonepe_link: ((_ekqrData$data3 = ekqrData.data) === null || _ekqrData$data3 === void 0 ? void 0 : (_ekqrData$data3$upi_i = _ekqrData$data3.upi_intent) === null || _ekqrData$data3$upi_i === void 0 ? void 0 : _ekqrData$data3$upi_i.phonepe_link) || "",
              paytm_link: ((_ekqrData$data4 = ekqrData.data) === null || _ekqrData$data4 === void 0 ? void 0 : (_ekqrData$data4$upi_i = _ekqrData$data4.upi_intent) === null || _ekqrData$data4$upi_i === void 0 ? void 0 : _ekqrData$data4$upi_i.paytm_link) || "",
              gpay_link: ((_ekqrData$data5 = ekqrData.data) === null || _ekqrData$data5 === void 0 ? void 0 : (_ekqrData$data5$upi_i = _ekqrData$data5.upi_intent) === null || _ekqrData$data5$upi_i === void 0 ? void 0 : _ekqrData$data5$upi_i.gpay_link) || ""
            },
            status: true,
            timeStamp: timeNow
          }));
        case 32:
          _context5.prev = 32;
          _context5.t0 = _context5["catch"](6);
          console.log(_context5.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          });
        case 36:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[6, 32]]);
  }));
  return function initiateUPIPayment(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var verifyUPIPayment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var type, auth, orderId, user, recharge, ekqrResponse, ekqrData;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          type = PaymentMethodsMap.UPI_GATEWAY;
          auth = req.cookies.auth;
          orderId = req.query.client_txn_id;
          if (!(!auth || !orderId)) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "orderId is Required!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context6.prev = 5;
          _context6.next = 8;
          return getUserDataByAuthToken(auth);
        case 8:
          user = _context6.sent;
          _context6.next = 11;
          return rechargeTable.getRechargeByOrderId({
            orderId: orderId
          });
        case 11:
          recharge = _context6.sent;
          if (recharge) {
            _context6.next = 14;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Unable to find recharge with this order id!",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          _context6.next = 16;
          return _axios["default"].post("https://api.ekqr.in/api/check_order_status", {
            key: process.env.UPI_GATEWAY_PAYMENT_KEY,
            client_txn_id: orderId,
            txn_date: rechargeTable.getDMYDateOfTodayFiled(recharge.today)
          });
        case 16:
          ekqrResponse = _context6.sent;
          ekqrData = ekqrResponse === null || ekqrResponse === void 0 ? void 0 : ekqrResponse.data;
          if (!(ekqrData === undefined || ekqrData.status === false)) {
            _context6.next = 20;
            break;
          }
          throw Error("Gateway error from ekqr!");
        case 20:
          if (!(ekqrData.data.status === "created")) {
            _context6.next = 22;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: "Your payment request is just created",
            status: false,
            timeStamp: timeNow
          }));
        case 22:
          if (!(ekqrData.data.status === "scanning")) {
            _context6.next = 24;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: "Waiting for confirmation",
            status: false,
            timeStamp: timeNow
          }));
        case 24:
          if (!(ekqrData.data.status === "success")) {
            _context6.next = 31;
            break;
          }
          if (!(recharge.status === PaymentStatusMap.PENDING || recharge.status === PaymentStatusMap.CANCELLED)) {
            _context6.next = 30;
            break;
          }
          _context6.next = 28;
          return rechargeTable.setStatusToSuccessByIdAndOrderId({
            id: recharge.id,
            orderId: recharge.orderId
          });
        case 28:
          _context6.next = 30;
          return addUserAccountBalance({
            phone: user.phone,
            money: recharge.money,
            code: user.code,
            invite: user.invite,
            rechargeId: recharge.id
          });
        case 30:
          return _context6.abrupt("return", res.redirect("/wallet/rechargerecord"));
        case 31:
          _context6.next = 37;
          break;
        case 33:
          _context6.prev = 33;
          _context6.t0 = _context6["catch"](5);
          console.log(_context6.t0);
          res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          });
        case 37:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[5, 33]]);
  }));
  return function verifyUPIPayment(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
// --------------------------------------------

var initiateUpayPayment = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var type, schema, API_URL, APP_ID, APP_SECRET, _schema$validate, error, auth, user, phone, amount, data, signature, response, main, newRechargeParams;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          type = PaymentMethodsMap.UPAY;
          schema = _joi["default"].object({
            am: _joi["default"].number().required()
          });
          API_URL = process.env.UPAY_API_URL;
          APP_ID = process.env.UPAY_APP_ID;
          APP_SECRET = process.env.UPAY_APP_SECRET;
          _schema$validate = schema.validate(req.query), error = _schema$validate.error;
          if (!error) {
            _context7.next = 9;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: error.details[0].message
          }));
        case 9:
          auth = req.cookies.auth;
          _context7.next = 12;
          return getUserDataByAuthToken(auth);
        case 12:
          user = _context7.sent;
          phone = user.phone;
          amount = Number(req.query.am);
          data = {
            appId: APP_ID,
            merchantOrderNo: getRechargeOrderId(),
            chainType: "1",
            fiatAmount: String(amount),
            fiatCurrency: "USD",
            notifyUrl: "".concat(process.env.APP_BASE_URL, "/wallet/verify/upay")
          };
          console.log(data);
          signature = _upay["default"].generateSignature(data, APP_SECRET);
          _context7.next = 20;
          return (0, _axios["default"])({
            url: "".concat(API_URL, "/v1/api/open/order/apply"),
            method: "POST",
            data: _objectSpread(_objectSpread({}, data), {}, {
              attach: phone,
              productName: "Gaming",
              redirectUrl: "".concat(process.env.APP_BASE_URL, "/wallet/rechargerecord"),
              signature: signature
            }),
            headers: {
              "Content-Type": "application/json"
            }
          });
        case 20:
          response = _context7.sent;
          console.log(response.data);
          main = response.data.data;
          newRechargeParams = {
            orderId: main.merchantOrderNo,
            transactionId: main.orderNo,
            utr: 0,
            phone: phone,
            money: amount * Number(process.env.USDT_INR_EXCHANGE_RATE),
            type: type,
            status: PaymentStatusMap.PENDING,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: "",
            time: rechargeTable.getCurrentTimeForTimeField()
          };
          _context7.next = 26;
          return rechargeTable.create(newRechargeParams);
        case 26:
          return _context7.abrupt("return", res.status(200).redirect(response.data.data.payUrl));
        case 29:
          _context7.prev = 29;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            status: false,
            message: "Internal Server Error"
          }));
        case 34:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 29]]);
  }));
  return function initiateUpayPayment(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var verifyUpayPayment = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var type, data, appId, orderNo, merchantOrderNo, chainType, _crypto, actualCrypto, poundage, actualPoundage, status, createdAt, completedAt, attach, signature, recharge, user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          type = PaymentMethodsMap.UPAY;
          data = req.body;
          console.log(data);
          appId = data === null || data === void 0 ? void 0 : data.appId;
          orderNo = data === null || data === void 0 ? void 0 : data.orderNo;
          merchantOrderNo = data === null || data === void 0 ? void 0 : data.merchantOrderNo;
          chainType = data === null || data === void 0 ? void 0 : data.chainType;
          _crypto = data === null || data === void 0 ? void 0 : data.crypto;
          actualCrypto = data === null || data === void 0 ? void 0 : data.actualCrypto;
          poundage = data === null || data === void 0 ? void 0 : data.poundage;
          actualPoundage = data === null || data === void 0 ? void 0 : data.actualPoundage;
          status = Number(data === null || data === void 0 ? void 0 : data.status);
          createdAt = data === null || data === void 0 ? void 0 : data.createdAt;
          completedAt = data === null || data === void 0 ? void 0 : data.completedAt;
          attach = data === null || data === void 0 ? void 0 : data.attach;
          signature = data === null || data === void 0 ? void 0 : data.signature;
          if (!(!appId || !orderNo || !merchantOrderNo || !chainType || !_crypto || !actualCrypto || !poundage || !actualPoundage || !status || !createdAt || !completedAt || !attach || !signature)) {
            _context8.next = 19;
            break;
          }
          return _context8.abrupt("return", res.status(400).send("Invalid Request!"));
        case 19:
          _context8.next = 21;
          return rechargeTable.getRechargeByOrderId({
            orderId: merchantOrderNo
          });
        case 21:
          recharge = _context8.sent;
          if (recharge) {
            _context8.next = 25;
            break;
          }
          console.log({
            message: "Not able to find Requested Recharge for upay verification!",
            timeStamp: timeNow
          });
          return _context8.abrupt("return", res.status(400).send("failed"));
        case 25:
          _context8.next = 27;
          return getUserDataByPhoneNumber(recharge.phone);
        case 27:
          user = _context8.sent;
          if (user) {
            _context8.next = 31;
            break;
          }
          console.log({
            message: "Unable to find this user for upay verification!",
            timeStamp: timeNow
          });
          return _context8.abrupt("return", res.status(400).send("failed"));
        case 31:
          if (recharge) {
            _context8.next = 34;
            break;
          }
          console.log({
            message: "Not able to find Requested Recharge for upay verification!",
            timeStamp: timeNow
          });
          return _context8.abrupt("return", res.status(400).send("failed"));
        case 34:
          if (!(recharge.status === PaymentStatusMap.SUCCESS)) {
            _context8.next = 36;
            break;
          }
          return _context8.abrupt("return", res.status(200).send("success"));
        case 36:
          if (!(status === 0)) {
            _context8.next = 40;
            break;
          }
          _context8.next = 39;
          return rechargeTable.setRechargeStatusById({
            id: recharge.id,
            status: PaymentStatusMap.PENDING
          });
        case 39:
          return _context8.abrupt("return", res.status(200).send("processing"));
        case 40:
          if (!(status === 1)) {
            _context8.next = 46;
            break;
          }
          _context8.next = 43;
          return rechargeTable.setStatusToSuccessByIdAndOrderId({
            id: recharge.id,
            orderId: recharge.orderId
          });
        case 43:
          _context8.next = 45;
          return addUserAccountBalance({
            phone: user.phone,
            money: recharge.money,
            code: user.code,
            invite: user.invite,
            rechargeId: recharge.id
          });
        case 45:
          return _context8.abrupt("return", res.status(200).send("success"));
        case 46:
          if (!(status === 2)) {
            _context8.next = 50;
            break;
          }
          _context8.next = 49;
          return rechargeTable.setRechargeStatusById({
            id: recharge.id,
            status: PaymentStatusMap.CANCELLED
          });
        case 49:
          return _context8.abrupt("return", res.status(200).send("failed"));
        case 50:
          if (!(status === 3)) {
            _context8.next = 54;
            break;
          }
          _context8.next = 53;
          return rechargeTable.setRechargeStatusById({
            id: recharge.id,
            status: PaymentStatusMap.CANCELLED
          });
        case 53:
          return _context8.abrupt("return", res.status(200).send("failed"));
        case 54:
          return _context8.abrupt("return", res.status(200).send("failed"));
        case 57:
          _context8.prev = 57;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);
          return _context8.abrupt("return", res.status(500).send("failed"));
        case 61:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 57]]);
  }));
  return function verifyUpayPayment(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

// RS PAY Payment integration ---------------
var RS_PAY_PAYMENT_STATE = {
  SUCCESS: 1,
  PROCESSING: 2,
  FAILED: 3,
  PARTIALLY_SUCCESS: 4
};
var initiateRspayPayment = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var type, auth, amount, user, phone, merchantId, merchantKey, orderId, params, response, data, newRechargeParams;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          type = PaymentMethodsMap.RS_PAY;
          auth = req.cookies.auth;
          amount = parseFloat(req.query.am);
          if (amount) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            message: "Amount and Phone is Required!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context9.prev = 5;
          _context9.next = 8;
          return getUserDataByAuthToken(auth);
        case 8:
          user = _context9.sent;
          phone = user.phone;
          merchantId = process.env.RSPAY_MERCHANT_ID;
          merchantKey = process.env.RSPAY_MERCHANT_KEY;
          orderId = getRechargeOrderId();
          params = {
            amount: amount.toFixed(2),
            ext: "test",
            merchantId: merchantId,
            merchantOrderId: orderId,
            notifyUrl: "".concat(process.env.APP_BASE_URL, "/wallet/verify/rspay"),
            redirectUrl: "".concat(process.env.APP_BASE_URL, "/wallet/rechargerecord"),
            paymentCurrency: "INR",
            type: 2,
            userName: phone
          };
          params["sign"] = rspay.generateSign(params, merchantKey);
          _context9.next = 17;
          return (0, _axios["default"])({
            method: "POST",
            url: "https://api.rs-pay.cc/apii/in/createOrder",
            data: params,
            headers: {
              "content-type": "application/json"
            }
          });
        case 17:
          response = _context9.sent;
          if (!(parseInt(response.data.status) === 200)) {
            _context9.next = 24;
            break;
          }
          data = response.data.data;
          newRechargeParams = {
            orderId: data.merchantOrderId,
            transactionId: data.orderId,
            utr: 0,
            phone: phone,
            money: data.amount,
            type: type,
            status: PaymentStatusMap.PENDING,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: data.payUrl,
            time: rechargeTable.getCurrentTimeForTimeField()
          };
          _context9.next = 23;
          return rechargeTable.create(newRechargeParams);
        case 23:
          return _context9.abrupt("return", res.redirect(data.payUrl));
        case 24:
          console.log(response.data);
          return _context9.abrupt("return", res.status(400).send("Something went wrong! Please try again later."));
        case 28:
          _context9.prev = 28;
          _context9.t0 = _context9["catch"](5);
          console.log(_context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            status: false,
            message: "Something went wrong!",
            timestamp: timeNow
          }));
        case 32:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[5, 28]]);
  }));
  return function initiateRspayPayment(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var verifyRspayPayment = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var data, merchantId, merchantOrderId, orderId, state, amount, factAmount, ext, utr, sign, recharge, user;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          // const type = PaymentMethodsMap.RS_PAY;
          data = req.body;
          merchantId = data === null || data === void 0 ? void 0 : data.merchantId;
          merchantOrderId = data === null || data === void 0 ? void 0 : data.merchantOrderId;
          orderId = data === null || data === void 0 ? void 0 : data.orderId;
          state = data === null || data === void 0 ? void 0 : data.state;
          amount = data === null || data === void 0 ? void 0 : data.amount;
          factAmount = data === null || data === void 0 ? void 0 : data.factAmount;
          ext = data === null || data === void 0 ? void 0 : data.ext;
          utr = data === null || data === void 0 ? void 0 : data.utr;
          sign = data === null || data === void 0 ? void 0 : data.sign;
          if (!(!merchantId || !merchantOrderId || !orderId || !state || !amount || !factAmount || !ext || !utr || !sign)) {
            _context10.next = 13;
            break;
          }
          return _context10.abrupt("return", res.status(400).send("Invalid Request!"));
        case 13:
          if (!(merchantId !== process.env.RSPAY_MERCHANT_ID)) {
            _context10.next = 15;
            break;
          }
          return _context10.abrupt("return", res.status(401).send("failed"));
        case 15:
          _context10.next = 17;
          return rechargeTable.getRechargeByOrderId({
            orderId: merchantOrderId
          });
        case 17:
          recharge = _context10.sent;
          if (recharge) {
            _context10.next = 21;
            break;
          }
          console.log({
            message: "Not able to find Requested Recharge for rspay verification!",
            timeStamp: timeNow
          });
          return _context10.abrupt("return", res.status(400).send("failed"));
        case 21:
          if (!(parseInt(state) === RS_PAY_PAYMENT_STATE.SUCCESS)) {
            _context10.next = 32;
            break;
          }
          _context10.next = 24;
          return getUserDataByPhoneNumber(recharge.phone);
        case 24:
          user = _context10.sent;
          _context10.next = 27;
          return rechargeTable.setStatusToSuccessByIdAndOrderId({
            id: recharge.id,
            orderId: recharge.orderId,
            utr: utr
          });
        case 27:
          _context10.next = 29;
          return addUserAccountBalance({
            phone: user.phone,
            money: recharge.money,
            code: user.code,
            invite: user.invite,
            rechargeId: recharge.id
          });
        case 29:
          return _context10.abrupt("return", res.status(200).send("success"));
        case 32:
          if (!(parseInt(state) === RS_PAY_PAYMENT_STATE.PROCESSING)) {
            _context10.next = 36;
            break;
          }
          return _context10.abrupt("return", res.status(200).send("processing"));
        case 36:
          if (!(parseInt(state) === RS_PAY_PAYMENT_STATE.FAILED)) {
            _context10.next = 42;
            break;
          }
          _context10.next = 39;
          return rechargeTable.cancelById(recharge.id);
        case 39:
          return _context10.abrupt("return", res.status(200).send("failed"));
        case 42:
          if (!(parseInt(state) === RS_PAY_PAYMENT_STATE.PARTIALLY_SUCCESS)) {
            _context10.next = 46;
            break;
          }
          _context10.next = 45;
          return rechargeTable.cancelById(recharge.id);
        case 45:
          return _context10.abrupt("return", res.status(200).send("partially success"));
        case 46:
          return _context10.abrupt("return", res.status(200).send("failed"));
        case 49:
          _context10.prev = 49;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            errorMessage: _context10.t0.message,
            error: _context10.t0,
            status: false,
            timeStamp: timeNow
          }));
        case 53:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 49]]);
  }));
  return function verifyRspayPayment(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
// --------------------------------------------

// Browse Recharge Record ---------------------
var browseRechargeRecord = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var auth, _yield$connection$que7, _yield$connection$que8, recharge;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          auth = req.cookies.auth;
          if (auth) {
            _context11.next = 4;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            message: "Unauthorized",
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context11.next = 6;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE status = 0 ", []);
        case 6:
          _yield$connection$que7 = _context11.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          recharge = _yield$connection$que8[0];
          return _context11.abrupt("return", res.status(200).json({
            message: "Success",
            status: true,
            list: recharge
          }));
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 12]]);
  }));
  return function browseRechargeRecord(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
// --------------------------------------------

// Set Recharge Status ------------------------
var setRechargeStatus = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var auth, data, recharge, user;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          auth = req.cookies.auth;
          data = {
            id: parseInt(req.body.id),
            status: parseInt(req.body.status)
          };
          if (auth) {
            _context12.next = 5;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            message: "Unauthorized",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          if (!(!data.id || !data.status)) {
            _context12.next = 7;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Invalid Request",
            status: false,
            timeStamp: timeNow
          }));
        case 7:
          _context12.next = 9;
          return rechargeTable.getRechargeById({
            id: data.id
          });
        case 9:
          recharge = _context12.sent;
          if (!(recharge === null)) {
            _context12.next = 12;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Recharge not found!",
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          if (!(recharge.status === PaymentStatusMap.SUCCESS && data.status === PaymentStatusMap.SUCCESS)) {
            _context12.next = 14;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Recharge already verified!",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          if (!(recharge.status === PaymentStatusMap.CANCELLED && data.status === PaymentStatusMap.CANCELLED)) {
            _context12.next = 16;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Recharge already cancelled!",
            status: false,
            timeStamp: timeNow
          }));
        case 16:
          if (!([PaymentStatusMap.SUCCESS, PaymentStatusMap.CANCELLED, PaymentStatusMap.PENDING].includes(data.status) === false)) {
            _context12.next = 20;
            break;
          }
          console.log([PaymentStatusMap.SUCCESS, PaymentStatusMap.CANCELLED, PaymentStatusMap.PENDING]);
          console.log(data.status);
          return _context12.abrupt("return", res.status(400).json({
            message: "Invalid Status!",
            status: false,
            timeStamp: timeNow
          }));
        case 20:
          if (!(data.status === PaymentStatusMap.SUCCESS)) {
            _context12.next = 31;
            break;
          }
          _context12.next = 23;
          return getUserDataByPhoneNumber(recharge.phone);
        case 23:
          user = _context12.sent;
          _context12.next = 26;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id = ?", [data.id]);
        case 26:
          _context12.next = 28;
          return addUserAccountBalance({
            phone: user.phone,
            money: recharge.money,
            code: user.code,
            invite: user.invite,
            rechargeId: recharge.id
          });
        case 28:
          return _context12.abrupt("return", res.status(200).json({
            message: "Recharge verified successfully!",
            status: true,
            timeStamp: timeNow
          }));
        case 31:
          if (!(data.status === PaymentStatusMap.CANCELLED)) {
            _context12.next = 35;
            break;
          }
          _context12.next = 34;
          return rechargeTable.setRechargeStatusById({
            id: data.id,
            status: PaymentStatusMap.CANCELLED
          });
        case 34:
          return _context12.abrupt("return", res.status(200).json({
            message: "Recharge cancelled successfully!",
            status: true,
            timeStamp: timeNow
          }));
        case 35:
          _context12.next = 37;
          return rechargeTable.setRechargeStatusById({
            id: data.id,
            status: PaymentStatusMap.PENDING
          });
        case 37:
          return _context12.abrupt("return", res.status(200).json({
            message: "Recharge set to waiting successfully!",
            status: true,
            timeStamp: timeNow
          }));
        case 40:
          _context12.prev = 40;
          _context12.t0 = _context12["catch"](0);
          console.log(_context12.t0);
          return _context12.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            errorMessage: _context12.t0.message,
            error: _context12.t0,
            status: false,
            timeStamp: timeNow
          }));
        case 44:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 40]]);
  }));
  return function setRechargeStatus(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var walletTransfer = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var schema, _schema$validate2, error, auth, _yield$connection$que9, _yield$connection$que10, rows, sender, validPassword, amount, _yield$connection$que11, _yield$connection$que12, receiverRows, receiver, timestamp, rewardId, currentTimeMillis;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          schema = _joi["default"].object({
            uid: _joi["default"].string().required(),
            amount: _joi["default"].number().required(),
            password: _joi["default"].string().required()
          });
          _schema$validate2 = schema.validate(req.body), error = _schema$validate2.error;
          if (!error) {
            _context13.next = 5;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: error.details[0].message
          }));
        case 5:
          auth = req.cookies.auth; // Fetch logged-in user details
          _context13.next = 8;
          return _connectDB["default"].query("SELECT id_user, phone, money, password FROM users WHERE token = ?", [auth]);
        case 8:
          _yield$connection$que9 = _context13.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          rows = _yield$connection$que10[0];
          if (!_lodash["default"].isEmpty(rows)) {
            _context13.next = 13;
            break;
          }
          return _context13.abrupt("return", res.status(401).json({
            message: "Unauthorized",
            status: false
          }));
        case 13:
          sender = rows[0]; // Validate password
          _context13.next = 16;
          return _bcrypt["default"].compare(req.body.password, sender.password);
        case 16:
          validPassword = _context13.sent;
          if (validPassword) {
            _context13.next = 19;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            status: false,
            message: "Invalid password"
          }));
        case 19:
          if (!(req.body.uid === sender.id_user.toString())) {
            _context13.next = 21;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "You can't transfer money to yourself!",
            status: false
          }));
        case 21:
          amount = parseFloat(req.body.amount); // Validate amount
          if (!(amount <= 0)) {
            _context13.next = 24;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Amount should be greater than 0!",
            status: false
          }));
        case 24:
          if (!(sender.money < amount)) {
            _context13.next = 26;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Insufficient Balance!",
            status: false
          }));
        case 26:
          _context13.next = 28;
          return _connectDB["default"].query("SELECT id_user, phone, money FROM users WHERE id_user = ?", [req.body.uid]);
        case 28:
          _yield$connection$que11 = _context13.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          receiverRows = _yield$connection$que12[0];
          if (!_lodash["default"].isEmpty(receiverRows)) {
            _context13.next = 33;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Receiver not found!",
            status: false
          }));
        case 33:
          receiver = receiverRows[0]; // Perform the transfer
          _context13.next = 36;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE id_user = ?", [amount, receiver.id_user]);
        case 36:
          _context13.next = 38;
          return _connectDB["default"].query("UPDATE users SET money = money - ? WHERE id_user = ?", [amount, sender.id_user]);
        case 38:
          // Record the transfer in the balance_transfer table
          timestamp = Date.now(); // Generate UNIX timestamp in milliseconds
          _context13.next = 41;
          return _connectDB["default"].query("INSERT INTO balance_transfer (sender_uid, receiver_uid, sender_phone, receiver_phone, amount, datetime) VALUES (?, ?, ?, ?, ?, ?)", [sender.id_user, receiver.id_user, sender.phone, receiver.phone, amount, timestamp]);
        case 41:
          // Generate a 6-digit random number for reward_id
          rewardId = Math.floor(100000 + Math.random() * 900000); // Insert into claimed_rewards table
          currentTimeMillis = Date.now();
          _context13.next = 45;
          return _connectDB["default"].query("INSERT INTO claimed_rewards (phone, reward_id, type, amount, status, time) VALUES (?, ?, ?, ?, ?, ?)", [receiver.phone, rewardId, "WALLET TRANSFER", amount, "1",
          // Status of the claim
          currentTimeMillis]);
        case 45:
          return _context13.abrupt("return", res.status(200).json({
            message: "Money transferred successfully!",
            status: true
          }));
        case 48:
          _context13.prev = 48;
          _context13.t0 = _context13["catch"](0);
          console.error("Transfer Error:", _context13.t0);
          return _context13.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false
          }));
        case 52:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 48]]);
  }));
  return function walletTransfer(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

// helpers ---------------
var getUserDataByAuthToken = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(authToken) {
    var _yield$connection$que13, _yield$connection$que14, users, user;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return _connectDB["default"].query("SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `token` = ? ", [authToken]);
        case 2:
          _yield$connection$que13 = _context14.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          users = _yield$connection$que14[0];
          user = users === null || users === void 0 ? void 0 : users[0];
          if (!(user === undefined || user === null)) {
            _context14.next = 8;
            break;
          }
          throw Error("Unable to get user data!");
        case 8:
          return _context14.abrupt("return", {
            phone: user.phone,
            code: user.code,
            username: user.name_user,
            invite: user.invite
          });
        case 9:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function getUserDataByAuthToken(_x27) {
    return _ref14.apply(this, arguments);
  };
}();
var getUserDataByPhoneNumber = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(phoneNumber) {
    var _yield$connection$que15, _yield$connection$que16, users, user;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return _connectDB["default"].query("SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `phone` = ? ", [phoneNumber]);
        case 2:
          _yield$connection$que15 = _context15.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          users = _yield$connection$que16[0];
          user = users === null || users === void 0 ? void 0 : users[0];
          if (!(user === undefined || user === null)) {
            _context15.next = 8;
            break;
          }
          throw Error("Unable to get user data!");
        case 8:
          return _context15.abrupt("return", {
            phone: user.phone,
            code: user.code,
            username: user.name_user,
            invite: user.invite
          });
        case 9:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function getUserDataByPhoneNumber(_x28) {
    return _ref15.apply(this, arguments);
  };
}();
var getUserByInviteCode = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(invite) {
    var _yield$connection$que17, _yield$connection$que18, inviter;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (invite) {
            _context16.next = 2;
            break;
          }
          throw new _AppError["default"]("invite code not provided", 400);
        case 2:
          _context16.next = 4;
          return _connectDB["default"].query("SELECT phone FROM users WHERE `code` = ?", [invite]);
        case 4:
          _yield$connection$que17 = _context16.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          inviter = _yield$connection$que18[0];
          return _context16.abrupt("return", (inviter === null || inviter === void 0 ? void 0 : inviter[0]) || null);
        case 8:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function getUserByInviteCode(_x29) {
    return _ref16.apply(this, arguments);
  };
}();
var addUserMoney = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(phone, money) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          if (!(!phone || !money)) {
            _context17.next = 2;
            break;
          }
          throw new _AppError["default"]("add User Money phone ".concat(phone, " or money ").concat(money, " not provided"), 400);
        case 2:
          _context17.next = 4;
          return _connectDB["default"].query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?", [money, money, phone]);
        case 4:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function addUserMoney(_x30, _x31) {
    return _ref17.apply(this, arguments);
  };
}();
var addUserAccountBalance = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(_ref18) {
    var _adminData$, _adminData$2;
    var money, phone, invite, rechargeId, totalRecharge, _yield$connection$que19, _yield$connection$que20, adminData, usrrech, invrech, userBonus, user_money, dailyRechargeBonus, rewardType, inviter, inviterBonus;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          money = _ref18.money, phone = _ref18.phone, invite = _ref18.invite, rechargeId = _ref18.rechargeId;
          _context18.next = 3;
          return rechargeTable.totalRechargeCount(PaymentStatusMap.SUCCESS, phone);
        case 3:
          totalRecharge = _context18.sent;
          _context18.next = 6;
          return _connectDB["default"].query("SELECT usr_rech_bonus, inv_rech_bonus FROM admin_ac LIMIT 1");
        case 6:
          _yield$connection$que19 = _context18.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          adminData = _yield$connection$que20[0];
          usrrech = parseFloat(((_adminData$ = adminData[0]) === null || _adminData$ === void 0 ? void 0 : _adminData$.usr_rech_bonus) || 0); // Fallback to 0 if not found
          invrech = parseFloat(((_adminData$2 = adminData[0]) === null || _adminData$2 === void 0 ? void 0 : _adminData$2.inv_rech_bonus) || 0); // Fallback to 0 if not found
          userBonus = money / 100 * usrrech; // User's bonus is 5%
          user_money = money + userBonus; // Calculate user's daily recharge bonus if applicable
          dailyRechargeBonus = money >= 50000 ? userBonus : 0; // Update user's balance with the recharge amount + user bonus
          _context18.next = 16;
          return addUserMoney(phone, user_money);
        case 16:
          console.log(phone, money, rechargeId, totalRecharge);
          _context18.next = 19;
          return rechargeTable.updateRemainingBet(phone, money, rechargeId, totalRecharge);
        case 19:
          if (!(userBonus > 0)) {
            _context18.next = 23;
            break;
          }
          rewardType = _reward_types.REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS;
          _context18.next = 23;
          return addUserRewards(phone, userBonus, rewardType);
        case 23:
          _context18.next = 25;
          return getUserByInviteCode(invite);
        case 25:
          inviter = _context18.sent;
          if (!inviter) {
            _context18.next = 32;
            break;
          }
          // Inviter's bonus is 7% of the user's recharge amount
          inviterBonus = money / 100 * invrech; // Add inviter bonus as a daily recharge agent bonus
          _context18.next = 30;
          return addUserRewards(inviter.phone, inviterBonus, _reward_types.REWARD_TYPES_MAP.DAILY_RECHARGE_AGENT_BONUS);
        case 30:
          _context18.next = 32;
          return addUserMoney(inviter.phone, inviterBonus);
        case 32:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function addUserAccountBalance(_x32) {
    return _ref19.apply(this, arguments);
  };
}();
var getRechargeOrderId = function getRechargeOrderId() {
  var date = new Date();
  var id_time = date.getUTCFullYear() + "" + date.getUTCMonth() + 1 + "" + date.getUTCDate();
  var id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;
  return id_time + id_order;
};
var addUserRewards = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(phone, bonus, rewardType) {
    var reward_id, timeNow;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          if (!(!phone || !bonus || !rewardType)) {
            _context19.next = 2;
            break;
          }
          throw new _AppError["default"]("add User Rewards Invalid Parameters phone ".concat(phone, " or bonus ").concat(bonus, " or rewardType ").concat(rewardType), 400);
        case 2:
          reward_id = (0, _games.generateClaimRewardID)();
          timeNow = Date.now();
          _context19.next = 6;
          return _connectDB["default"].query("INSERT INTO claimed_rewards (reward_id,phone, amount, type, time, status) VALUES (?,?,?,?,?,?)", [reward_id, phone, bonus, rewardType, timeNow, _reward_types.REWARD_STATUS_TYPES_MAP.SUCCESS]);
        case 6:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function addUserRewards(_x33, _x34, _x35) {
    return _ref20.apply(this, arguments);
  };
}();
var rechargeTable = {
  getRecordByPhoneAndStatus: function () {
    var _getRecordByPhoneAndStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(_ref21) {
      var phone, status, type, recharge, _yield$connection$que21, _yield$connection$que22, _yield$connection$que23, _yield$connection$que24;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            phone = _ref21.phone, status = _ref21.status, type = _ref21.type;
            if ([PaymentStatusMap.SUCCESS, PaymentStatusMap.CANCELLED, PaymentStatusMap.PENDING].includes(status)) {
              _context20.next = 3;
              break;
            }
            throw Error("Invalid Payment Status!");
          case 3:
            if (!type) {
              _context20.next = 11;
              break;
            }
            _context20.next = 6;
            return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = ? AND type = ?", [phone, status, type]);
          case 6:
            _yield$connection$que21 = _context20.sent;
            _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
            recharge = _yield$connection$que22[0];
            _context20.next = 16;
            break;
          case 11:
            _context20.next = 13;
            return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = ?", [phone, status]);
          case 13:
            _yield$connection$que23 = _context20.sent;
            _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
            recharge = _yield$connection$que24[0];
          case 16:
            return _context20.abrupt("return", recharge.map(function (item) {
              return {
                id: item.id,
                orderId: item.id_order,
                transactionId: item.transaction_id,
                utr: item.utr,
                phone: item.phone,
                money: item.money,
                type: item.type,
                status: item.status,
                today: item.today,
                url: item.url,
                time: item.time
              };
            }));
          case 17:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }));
    function getRecordByPhoneAndStatus(_x36) {
      return _getRecordByPhoneAndStatus.apply(this, arguments);
    }
    return getRecordByPhoneAndStatus;
  }(),
  getRechargeByOrderId: function () {
    var _getRechargeByOrderId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(_ref22) {
      var _recharge$map;
      var orderId, _yield$connection$que25, _yield$connection$que26, recharge;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            orderId = _ref22.orderId;
            _context21.next = 3;
            return _connectDB["default"].query("SELECT * FROM recharge WHERE id_order = ?", [orderId]);
          case 3:
            _yield$connection$que25 = _context21.sent;
            _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
            recharge = _yield$connection$que26[0];
            if (!(recharge.length === 0)) {
              _context21.next = 8;
              break;
            }
            return _context21.abrupt("return", null);
          case 8:
            return _context21.abrupt("return", (_recharge$map = recharge.map(function (item) {
              return {
                id: item.id,
                orderId: item.id_order,
                transactionId: item.transaction_id,
                utr: item.utr,
                phone: item.phone,
                money: item.money,
                type: item.type,
                status: item.status,
                today: item.today,
                url: item.url,
                time: item.time
              };
            })) === null || _recharge$map === void 0 ? void 0 : _recharge$map[0]);
          case 9:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    }));
    function getRechargeByOrderId(_x37) {
      return _getRechargeByOrderId.apply(this, arguments);
    }
    return getRechargeByOrderId;
  }(),
  getRechargeById: function () {
    var _getRechargeById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(_ref23) {
      var _recharge$map2;
      var id, _yield$connection$que27, _yield$connection$que28, recharge;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            id = _ref23.id;
            _context22.next = 3;
            return _connectDB["default"].query("SELECT * FROM recharge WHERE id = ? LIMIT 1", [id]);
          case 3:
            _yield$connection$que27 = _context22.sent;
            _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
            recharge = _yield$connection$que28[0];
            if (!(recharge.length === 0)) {
              _context22.next = 8;
              break;
            }
            return _context22.abrupt("return", null);
          case 8:
            return _context22.abrupt("return", (_recharge$map2 = recharge.map(function (item) {
              return {
                id: item.id,
                orderId: item.id_order,
                transactionId: item.transaction_id,
                utr: item.utr,
                phone: item.phone,
                money: item.money,
                type: item.type,
                status: item.status,
                today: item.today,
                url: item.url,
                time: item.time
              };
            })) === null || _recharge$map2 === void 0 ? void 0 : _recharge$map2[0]);
          case 9:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }));
    function getRechargeById(_x38) {
      return _getRechargeById.apply(this, arguments);
    }
    return getRechargeById;
  }(),
  totalRechargeCount: function () {
    var _totalRechargeCount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(status, phone) {
      var _yield$connection$que29, _yield$connection$que30, totalRechargeRow, totalRecharge;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            if (!(!status || !phone)) {
              _context23.next = 2;
              break;
            }
            throw new _AppError["default"]("Invalid Status or Phone", 400);
          case 2:
            _context23.next = 4;
            return _connectDB["default"].query("SELECT COUNT(*) as count FROM recharge WHERE phone = ? AND status = ?", [phone, status]);
          case 4:
            _yield$connection$que29 = _context23.sent;
            _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
            totalRechargeRow = _yield$connection$que30[0];
            totalRecharge = totalRechargeRow[0].count || 0;
            return _context23.abrupt("return", totalRecharge);
          case 9:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }));
    function totalRechargeCount(_x39, _x40) {
      return _totalRechargeCount.apply(this, arguments);
    }
    return totalRechargeCount;
  }(),
  updateRemainingBet: function () {
    var _updateRemainingBet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(phone, money, rechargeId, totalRecharge) {
      var _previousRecharge$, _yield$connection$que31, _yield$connection$que32, previousRecharge, previousRemainingBet, totalRemainingBet, result;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            console.log("updateRemainingBet called for Phone: ".concat(phone, ", Money: ").concat(money, ", Recharge ID: ").concat(rechargeId, ", Total Recharge: ").concat(totalRecharge));

            // Fetch the previous remaining_bet value
            _context24.next = 4;
            return _connectDB["default"].query("SELECT remaining_bet \n         FROM recharge \n         WHERE phone = ? AND status = 1 \n         ORDER BY time DESC \n         LIMIT 2", [phone]);
          case 4:
            _yield$connection$que31 = _context24.sent;
            _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
            previousRecharge = _yield$connection$que32[0];
            previousRemainingBet = parseFloat((previousRecharge === null || previousRecharge === void 0 ? void 0 : (_previousRecharge$ = previousRecharge[0]) === null || _previousRecharge$ === void 0 ? void 0 : _previousRecharge$.remaining_bet) || 0);
            totalRemainingBet = totalRecharge === 0 ? parseFloat(money) : previousRemainingBet + parseFloat(money);
            console.log("Previous Remaining Bet: ".concat(previousRemainingBet));
            console.log("Calculated Remaining Bet: ".concat(totalRemainingBet));

            // Update the remaining_bet in the recharge table
            _context24.next = 13;
            return _connectDB["default"].query("UPDATE recharge SET remaining_bet = ? WHERE id = ?", [totalRemainingBet.toFixed(2), rechargeId]);
          case 13:
            result = _context24.sent;
            console.log("Remaining bet updated for Recharge ID=".concat(rechargeId, ":"), result);
            if (result[0].affectedRows === 0) {
              console.error("No rows updated for id=".concat(rechargeId, "."));
            }
            _context24.next = 22;
            break;
          case 18:
            _context24.prev = 18;
            _context24.t0 = _context24["catch"](0);
            console.error("Error in updateRemainingBet:", _context24.t0.message);
            throw _context24.t0;
          case 22:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[0, 18]]);
    }));
    function updateRemainingBet(_x41, _x42, _x43, _x44) {
      return _updateRemainingBet.apply(this, arguments);
    }
    return updateRemainingBet;
  }(),
  cancelById: function () {
    var _cancelById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(id) {
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            if (!(typeof id !== "number")) {
              _context25.next = 2;
              break;
            }
            throw Error("Invalid Recharge 'id' expected a number!");
          case 2:
            _context25.next = 4;
            return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id = ?", [id]);
          case 4:
          case "end":
            return _context25.stop();
        }
      }, _callee25);
    }));
    function cancelById(_x45) {
      return _cancelById.apply(this, arguments);
    }
    return cancelById;
  }(),
  setRechargeStatusById: function () {
    var _setRechargeStatusById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(_ref24) {
      var id, status;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            id = _ref24.id, status = _ref24.status;
            if (!(typeof id !== "number")) {
              _context26.next = 3;
              break;
            }
            throw Error("Invalid Recharge 'id' expected a number!");
          case 3:
            if ([PaymentStatusMap.SUCCESS, PaymentStatusMap.CANCELLED, PaymentStatusMap.PENDING].includes(status)) {
              _context26.next = 5;
              break;
            }
            throw Error("Invalid Payment Status!");
          case 5:
            _context26.next = 7;
            return _connectDB["default"].query("UPDATE recharge SET status = ? WHERE id = ?", [status, id]);
          case 7:
          case "end":
            return _context26.stop();
        }
      }, _callee26);
    }));
    function setRechargeStatusById(_x46) {
      return _setRechargeStatusById.apply(this, arguments);
    }
    return setRechargeStatusById;
  }(),
  setStatusToSuccessByIdAndOrderId: function () {
    var _setStatusToSuccessByIdAndOrderId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(_ref25) {
      var id, orderId, utr;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            id = _ref25.id, orderId = _ref25.orderId, utr = _ref25.utr;
            if (!(typeof id !== "number")) {
              _context27.next = 3;
              break;
            }
            throw Error("Invalid Recharge 'id' expected a number!");
          case 3:
            if (!utr) {
              _context27.next = 8;
              break;
            }
            _context27.next = 6;
            return _connectDB["default"].query("UPDATE recharge SET status = 1, utr = ? WHERE id = ? AND id_order = ?", [utr, id, orderId]);
          case 6:
            _context27.next = 10;
            break;
          case 8:
            _context27.next = 10;
            return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id = ? AND id_order = ?", [id, orderId]);
          case 10:
          case "end":
            return _context27.stop();
        }
      }, _callee27);
    }));
    function setStatusToSuccessByIdAndOrderId(_x47) {
      return _setStatusToSuccessByIdAndOrderId.apply(this, arguments);
    }
    return setStatusToSuccessByIdAndOrderId;
  }(),
  getCurrentTimeForTimeField: function getCurrentTimeForTimeField() {
    return (0, _moment["default"])().valueOf();
  },
  getCurrentTimeForTodayField: function getCurrentTimeForTodayField() {
    return (0, _moment["default"])().format("YYYY-DD-MM h:mm:ss A");
  },
  getDMYDateOfTodayFiled: function getDMYDateOfTodayFiled(today) {
    return (0, _moment["default"])(today, "YYYY-DD-MM h:mm:ss A").format("DD-MM-YYYY");
  },
  create: function () {
    var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(newRecharge) {
      var _yield$connection$que33, _yield$connection$que34, recharge;
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            if (newRecharge.url === undefined || newRecharge.url === null) {
              newRecharge.url = "0";
            }
            _context28.next = 3;
            return _connectDB["default"].query("INSERT INTO recharge SET id_order = ?, transaction_id = ?, phone = ?, money = ?, type = ?, status = ?, today = ?, url = ?, time = ?, time_remaining_bet = ?, utr = ?", [newRecharge.orderId, newRecharge.transactionId, newRecharge.phone, newRecharge.money, newRecharge.type, newRecharge.status, newRecharge.today, newRecharge.url, newRecharge.time, newRecharge.time, newRecharge === null || newRecharge === void 0 ? void 0 : newRecharge.utr]);
          case 3:
            _context28.next = 5;
            return _connectDB["default"].query("SELECT * FROM recharge WHERE id_order = ?", [newRecharge.orderId]);
          case 5:
            _yield$connection$que33 = _context28.sent;
            _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
            recharge = _yield$connection$que34[0];
            if (!(recharge.length === 0)) {
              _context28.next = 10;
              break;
            }
            throw Error("Unable to create recharge!");
          case 10:
            return _context28.abrupt("return", recharge[0]);
          case 11:
          case "end":
            return _context28.stop();
        }
      }, _callee28);
    }));
    function create(_x48) {
      return _create.apply(this, arguments);
    }
    return create;
  }()
};
var rspay = {
  generateSign: function generateSign(params, key) {
    var sortedKeys = Object.keys(params).sort();
    var stringA = "";
    sortedKeys.forEach(function (k) {
      if (params[k] !== null && params[k] !== "") {
        stringA += "".concat(k, "=").concat(params[k], "&");
      }
    });
    stringA = stringA.slice(0, -1);
    stringA += "&key=".concat(key);
    return _crypto2["default"].createHash("sha256").update(stringA).digest("hex");
  }
};
var initiateMotherPayment = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var type, auth, amount, user, phone, token, userid, callbackUrl, orderId, params, response, paymentData, newRechargeParams;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          type = PaymentMethodsMap.MOTHER;
          auth = req.cookies.auth;
          amount = parseFloat(req.query.am);
          if (amount) {
            _context29.next = 5;
            break;
          }
          return _context29.abrupt("return", res.status(400).json({
            message: "Amount is required!",
            status: false
          }));
        case 5:
          _context29.prev = 5;
          _context29.next = 8;
          return getUserDataByAuthToken(auth);
        case 8:
          user = _context29.sent;
          phone = user.phone;
          token = "$2y$10$uY5uCfSLBEeumTkqm8KQ2uF4HMqV9vNSktU6AvGq10U/9SQaXZOo6";
          userid = "MP15790";
          callbackUrl = "".concat(process.env.APP_BASE_URL, "/wallet/rechargerecords");
          orderId = getRechargeOrderId();
          params = {
            token: token,
            userid: userid,
            amount: amount.toFixed(2),
            mobile: phone,
            name: user.username || "Testing",
            orderid: orderId,
            callback_url: callbackUrl
          };
          console.log("Sending to MotherPay:", params);
          _context29.next = 18;
          return _axios["default"].post("https://mothersolution.in/api/pg/phonepe/initiate", params, {
            headers: {
              "Content-Type": "application/json"
            }
          });
        case 18:
          response = _context29.sent;
          console.log("MotherPay API Response:", response.data);
          if (!(response.data && response.data.status === true)) {
            _context29.next = 35;
            break;
          }
          paymentData = response.data;
          newRechargeParams = {
            orderId: orderId,
            transactionId: paymentData.transactionId || "N/A",
            utr: 0,
            phone: phone,
            money: amount,
            type: type,
            status: PaymentStatusMap.PENDING,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: paymentData.url || "",
            time: rechargeTable.getCurrentTimeForTimeField()
          };
          console.log("Recharge Parameters:", newRechargeParams);

          // Store recharge record in the database
          _context29.prev = 24;
          _context29.next = 27;
          return rechargeTable.create(newRechargeParams);
        case 27:
          console.log("Recharge record successfully created");
          _context29.next = 34;
          break;
        case 30:
          _context29.prev = 30;
          _context29.t0 = _context29["catch"](24);
          console.error("Failed to create recharge record:", _context29.t0.message);
          return _context29.abrupt("return", res.status(500).json({
            message: "Failed to store recharge record.",
            status: false,
            error: _context29.t0.message
          }));
        case 34:
          return _context29.abrupt("return", res.redirect(paymentData.url));
        case 35:
          return _context29.abrupt("return", res.status(400).json({
            message: response.data.message || "Failed to initiate payment.",
            status: false
          }));
        case 38:
          _context29.prev = 38;
          _context29.t1 = _context29["catch"](5);
          console.error("Error initiating MotherPay payment:", _context29.t1.message);
          return _context29.abrupt("return", res.status(500).json({
            status: false,
            message: "Something went wrong! Please try again later.",
            error: _context29.t1.message
          }));
        case 42:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[5, 38], [24, 30]]);
  }));
  return function initiateMotherPayment(_x49, _x50) {
    return _ref26.apply(this, arguments);
  };
}();
var rechargeCallback = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var _req$body, status, orderid, _yield$connection$que35, _yield$connection$que36, recharge, _recharge$, phone, money, invite, totalRecharge;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _req$body = req.body, status = _req$body.status, orderid = _req$body.client_txn_id;
          console.log("Callback received:", {
            status: status,
            orderid: orderid
          });
          if (!(!status || !orderid)) {
            _context30.next = 4;
            break;
          }
          return _context30.abrupt("return", res.status(400).json({
            message: "Invalid callback data",
            status: false
          }));
        case 4:
          _context30.prev = 4;
          if (!(status === "success")) {
            _context30.next = 28;
            break;
          }
          _context30.next = 8;
          return _connectDB["default"].query("\n        SELECT r.phone, r.money, u.invite \n        FROM recharge r \n        JOIN users u ON r.phone = u.phone \n        WHERE r.id_order = ?\n        ", [orderid]);
        case 8:
          _yield$connection$que35 = _context30.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          recharge = _yield$connection$que36[0];
          if (!(!recharge || recharge.length === 0)) {
            _context30.next = 13;
            break;
          }
          throw new Error("Recharge record not found!");
        case 13:
          _recharge$ = recharge[0], phone = _recharge$.phone, money = _recharge$.money, invite = _recharge$.invite; // Mark the recharge as successful
          _context30.next = 16;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id_order = ?", [orderid]);
        case 16:
          console.log("Recharge confirmed for Order ID:", orderid);

          // Calculate total recharge count
          _context30.next = 19;
          return rechargeTable.totalRechargeCount(PaymentStatusMap.SUCCESS, phone);
        case 19:
          totalRecharge = _context30.sent;
          // Update the remaining_bet field
          console.log("Updating remaining_bet...");
          _context30.next = 23;
          return rechargeTable.updateRemainingBet(phone, money, orderid, totalRecharge);
        case 23:
          _context30.next = 25;
          return addUserAccountBalance({
            money: money,
            phone: phone,
            invite: invite,
            rechargeId: orderid
          });
        case 25:
          console.log("Callback processed successfully for Order ID: ".concat(orderid));
          _context30.next = 35;
          break;
        case 28:
          if (!(status === "failure")) {
            _context30.next = 34;
            break;
          }
          _context30.next = 31;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id_order = ?", [orderid]);
        case 31:
          console.log("Recharge marked as failed for Order ID:", orderid);
          _context30.next = 35;
          break;
        case 34:
          console.warn("Unknown status received:", status);
        case 35:
          return _context30.abrupt("return", res.status(200).json({
            status: true
          }));
        case 38:
          _context30.prev = 38;
          _context30.t0 = _context30["catch"](4);
          console.error("Error processing recharge callback:", _context30.t0.message);
          return _context30.abrupt("return", res.status(500).json({
            status: false,
            message: "Failed to process callback",
            error: _context30.t0.message
          }));
        case 42:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[4, 38]]);
  }));
  return function rechargeCallback(_x51, _x52) {
    return _ref27.apply(this, arguments);
  };
}();
var initiateLgPayPayment = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var minimumMoneyAllowed, money, type, auth, user, orderId, params, keys, stringA, sign, response, data, newRecharge;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.prev = 0;
          minimumMoneyAllowed = 100; // Minimum allowed amount
          money = parseInt(req.query.am, 10); // Parse the amount from query params
          type = PaymentMethodsMap.LGPAY;
          auth = req.cookies.auth; // Retrieve auth token from cookies
          if (auth) {
            _context31.next = 7;
            break;
          }
          return _context31.abrupt("return", res.status(401).json({
            message: "Unauthorized: Auth token is missing.",
            status: false,
            timeStamp: Date.now()
          }));
        case 7:
          console.log("Auth token received:", auth);
          console.log("Received amount:", money);
          console.log("Minimum required amount:", minimumMoneyAllowed);
          if (!(!money || money < minimumMoneyAllowed)) {
            _context31.next = 12;
            break;
          }
          return _context31.abrupt("return", res.status(400).json({
            message: "Money is required and should be \u20B9".concat(minimumMoneyAllowed, " or above!"),
            status: false,
            timeStamp: Date.now()
          }));
        case 12:
          _context31.next = 14;
          return getUserDataByAuthToken(auth);
        case 14:
          user = _context31.sent;
          orderId = getRechargeOrderId();
          params = {
            app_id: "YD3335",
            // Hardcoded app_id
            trade_type: "INRUPI",
            // Use "test" for testing
            order_sn: orderId,
            money: money * 100,
            // Convert amount to cents
            notify_url: "".concat(process.env.APP_BASE_URL, "/payment/lgpay/verifylgpay"),
            return_url: "".concat(process.env.APP_BASE_URL, "/wallet/rechargerecord"),
            ip: req.ip || "127.0.0.1",
            remark: "Test payment"
          }; // Step 1: Generate Signature
          keys = Object.keys(params).sort(); // Sort keys
          stringA = keys.map(function (key) {
            return "".concat(key, "=").concat(params[key]);
          }).join("&");
          stringA += "&key=shVqn014wnbWy31z"; // Hardcoded key
          sign = _crypto2["default"].createHash("md5").update(stringA).digest("hex").toUpperCase(); // Add the signature
          params.sign = sign;

          // Step 2: Send POST request to LG-PAY API
          _context31.next = 24;
          return _axios["default"].post("https://www.lg-pay.com/api/order/create", params, {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
        case 24:
          response = _context31.sent;
          data = response.data;
          if (!(data.status === 1)) {
            _context31.next = 33;
            break;
          }
          // Store the recharge details in the database
          newRecharge = {
            orderId: orderId,
            transactionId: "NULL",
            phone: user.phone,
            money: money,
            type: type,
            status: PaymentStatusMap.PENDING,
            today: rechargeTable.getCurrentTimeForTodayField(),
            url: data.data.pay_url,
            time: rechargeTable.getCurrentTimeForTimeField()
          };
          _context31.next = 30;
          return rechargeTable.create(newRecharge);
        case 30:
          return _context31.abrupt("return", res.redirect(302, data.data.pay_url));
        case 33:
          throw new Error(data.msg || "Payment initiation failed");
        case 34:
          _context31.next = 40;
          break;
        case 36:
          _context31.prev = 36;
          _context31.t0 = _context31["catch"](0);
          console.error("Error initiating LG-PAY payment:", _context31.t0.message);
          return _context31.abrupt("return", res.status(500).json({
            status: false,
            message: "Internal Server Error"
          }));
        case 40:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[0, 36]]);
  }));
  return function initiateLgPayPayment(_x53, _x54) {
    return _ref28.apply(this, arguments);
  };
}();
var verifyLgPayPayment = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var _req$body2, status, orderid, _yield$connection$que37, _yield$connection$que38, existingRecharge, currentStatus, _yield$connection$que39, _yield$connection$que40, recharge, _recharge$2, phone, money, invite, totalRecharge;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _req$body2 = req.body, status = _req$body2.status, orderid = _req$body2.order_sn;
          console.log("Callback received:", {
            status: status,
            orderid: orderid
          });
          if (!(!status || !orderid)) {
            _context32.next = 4;
            break;
          }
          return _context32.abrupt("return", res.status(400).json({
            message: "Invalid callback data",
            status: false
          }));
        case 4:
          _context32.prev = 4;
          _context32.next = 7;
          return _connectDB["default"].query("SELECT status FROM recharge WHERE id_order = ?", [orderid]);
        case 7:
          _yield$connection$que37 = _context32.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          existingRecharge = _yield$connection$que38[0];
          if (!(!existingRecharge || existingRecharge.length === 0)) {
            _context32.next = 12;
            break;
          }
          throw new Error("Recharge record not found!");
        case 12:
          currentStatus = existingRecharge[0].status; // If the recharge is already successful, do nothing
          if (!(currentStatus === 1)) {
            _context32.next = 16;
            break;
          }
          console.log("Recharge already processed successfully for Order ID: ".concat(orderid));
          return _context32.abrupt("return", res.status(200).json({
            status: true,
            message: "Recharge already processed"
          }));
        case 16:
          if (!(status === "1")) {
            _context32.next = 39;
            break;
          }
          _context32.next = 19;
          return _connectDB["default"].query("\n        SELECT r.phone, r.money, u.invite \n        FROM recharge r \n        JOIN users u ON r.phone = u.phone \n        WHERE r.id_order = ?\n        ", [orderid]);
        case 19:
          _yield$connection$que39 = _context32.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          recharge = _yield$connection$que40[0];
          if (!(!recharge || recharge.length === 0)) {
            _context32.next = 24;
            break;
          }
          throw new Error("Recharge record not found!");
        case 24:
          _recharge$2 = recharge[0], phone = _recharge$2.phone, money = _recharge$2.money, invite = _recharge$2.invite; // Mark the recharge as successful
          _context32.next = 27;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id_order = ?", [orderid]);
        case 27:
          console.log("Recharge confirmed for Order ID:", orderid);

          // Calculate total recharge count
          _context32.next = 30;
          return rechargeTable.totalRechargeCount(PaymentStatusMap.SUCCESS, phone);
        case 30:
          totalRecharge = _context32.sent;
          // Update the remaining_bet field
          console.log("Updating remaining_bet...");
          _context32.next = 34;
          return rechargeTable.updateRemainingBet(phone, money, orderid, totalRecharge);
        case 34:
          _context32.next = 36;
          return addUserAccountBalance({
            money: money,
            phone: phone,
            invite: invite,
            rechargeId: orderid
          });
        case 36:
          console.log("Callback processed successfully for Order ID: ".concat(orderid));
          _context32.next = 46;
          break;
        case 39:
          if (!(status === "2")) {
            _context32.next = 45;
            break;
          }
          _context32.next = 42;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id_order = ?", [orderid]);
        case 42:
          console.log("Recharge marked as failed for Order ID:", orderid);
          _context32.next = 46;
          break;
        case 45:
          console.warn("Unknown status received:", status);
        case 46:
          return _context32.abrupt("return", res.status(200).json({
            status: true
          }));
        case 49:
          _context32.prev = 49;
          _context32.t0 = _context32["catch"](4);
          console.error("Error processing recharge callback:", _context32.t0.message);
          return _context32.abrupt("return", res.status(500).json({
            status: false,
            message: "Failed to process callback",
            error: _context32.t0.message
          }));
        case 53:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[4, 49]]);
  }));
  return function verifyLgPayPayment(_x55, _x56) {
    return _ref29.apply(this, arguments);
  };
}();
var paymentController = {
  initiateUPIPayment: initiateUPIPayment,
  verifyUPIPayment: verifyUPIPayment,
  initiateManualUPIPayment: initiateManualUPIPayment,
  addManualUPIPaymentRequest: addManualUPIPaymentRequest,
  addManualUSDTPaymentRequest: addManualUSDTPaymentRequest,
  initiateManualUSDTPayment: initiateManualUSDTPayment,
  initiateRspayPayment: initiateRspayPayment,
  verifyRspayPayment: verifyRspayPayment,
  browseRechargeRecord: browseRechargeRecord,
  setRechargeStatus: setRechargeStatus,
  initiateUpayPayment: initiateUpayPayment,
  verifyUpayPayment: verifyUpayPayment,
  walletTransfer: walletTransfer,
  initiateMotherPayment: initiateMotherPayment,
  rechargeCallback: rechargeCallback,
  initiateLgPayPayment: initiateLgPayPayment,
  verifyLgPayPayment: verifyLgPayPayment
};
var _default = exports["default"] = paymentController;