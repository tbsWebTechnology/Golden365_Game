"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var WITHDRAWAL_METHODS_MAP = {
  USDT_ADDRESS: "USDT_ADDRESS",
  BANK_CARD: "BANK_CARD"
};
var WITHDRAWAL_STATUS_MAP = {
  PENDING: 0,
  APPROVED: 1,
  DENIED: 2
};
var addBankCardPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("wallet/addbank.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addBankCardPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var selectBankPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("wallet/selectBank.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function selectBankPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addUSDTAddressPage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("wallet/addAddress.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function addUSDTAddressPage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var addBankCard = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var timeNow, auth, bankName, recipientName, bankAccountNumber, phoneNumber, IFSC, upiId, user, account, _account, _account2;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          timeNow = Date.now();
          _context4.prev = 1;
          auth = req.cookies.auth;
          if (auth) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Auth is required to fulfill the request!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          bankName = req.body.bankName;
          recipientName = req.body.recipientName;
          bankAccountNumber = req.body.bankAccountNumber;
          phoneNumber = req.body.phoneNumber;
          IFSC = req.body.IFSC;
          upiId = req.body.upiId;
          if (!(!bankName || !recipientName || !bankAccountNumber || !phoneNumber || !IFSC || !upiId)) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "Please fill the required fields",
            status: false,
            timeStamp: timeNow
          }));
        case 13:
          _context4.next = 15;
          return getUserDataByAuthToken(auth);
        case 15:
          user = _context4.sent;
          _context4.next = 18;
          return AccountDB.getUserBankCard({
            userPhoneNumber: user.phone
          });
        case 18:
          account = _context4.sent;
          if (!account.isAvailable) {
            _context4.next = 26;
            break;
          }
          _context4.next = 22;
          return AccountDB.updateUserBankCard({
            userPhoneNumber: user.phone,
            bankName: bankName,
            recipientName: recipientName,
            bankAccountNumber: bankAccountNumber,
            phoneNumber: phoneNumber,
            IFSC: IFSC,
            upiId: upiId
          });
        case 22:
          _account = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            account: _account,
            message: "Successfully Updated Bank Card",
            status: true,
            timeStamp: timeNow
          }));
        case 26:
          _context4.next = 28;
          return AccountDB.createUserBankCard({
            userPhoneNumber: user.phone,
            bankName: bankName,
            recipientName: recipientName,
            bankAccountNumber: bankAccountNumber,
            phoneNumber: phoneNumber,
            IFSC: IFSC,
            upiId: upiId
          });
        case 28:
          _account2 = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            account: _account2,
            message: "Successfully Created Bank Card",
            status: true,
            timeStamp: timeNow
          }));
        case 30:
          _context4.next = 36;
          break;
        case 32:
          _context4.prev = 32;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          return _context4.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 36:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 32]]);
  }));
  return function addBankCard(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getBankCardInfo = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var timeNow, auth, user, account;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          timeNow = Date.now();
          _context5.prev = 1;
          auth = req.cookies.auth;
          if (auth) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Auth is required to fulfill the request!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context5.next = 7;
          return getUserDataByAuthToken(auth);
        case 7:
          user = _context5.sent;
          _context5.next = 10;
          return AccountDB.getUserBankCard({
            userPhoneNumber: user.phone
          });
        case 10:
          account = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            account: account,
            message: "Successfully fetched Bank Card",
            status: true,
            timeStamp: timeNow
          }));
        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 14]]);
  }));
  return function getBankCardInfo(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var addUSDTAddress = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var timeNow, auth, mainNetwork, usdtAddress, addressAlias, user, account, _account3, _account4;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          timeNow = Date.now();
          _context6.prev = 1;
          auth = req.cookies.auth;
          if (auth) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Auth is required to fulfill the request!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          mainNetwork = req.body.mainNetwork;
          usdtAddress = req.body.usdtAddress;
          addressAlias = req.body.addressAlias;
          if (!(!mainNetwork || !usdtAddress || !addressAlias)) {
            _context6.next = 10;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            message: "Please fill the required fields",
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context6.next = 12;
          return getUserDataByAuthToken(auth);
        case 12:
          user = _context6.sent;
          _context6.next = 15;
          return AccountDB.getUserUSDTAddress({
            userPhoneNumber: user.phone
          });
        case 15:
          account = _context6.sent;
          if (!account.isAvailable) {
            _context6.next = 23;
            break;
          }
          _context6.next = 19;
          return AccountDB.updateUserUSDTAddress({
            userPhoneNumber: user.phone,
            mainNetwork: mainNetwork,
            usdtAddress: usdtAddress,
            addressAlias: addressAlias
          });
        case 19:
          _account3 = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            account: _account3,
            message: "Successfully Updated USDT Address",
            status: true,
            timeStamp: timeNow
          }));
        case 23:
          _context6.next = 25;
          return AccountDB.createUserUSDTAddress({
            userPhoneNumber: user.phone,
            mainNetwork: mainNetwork,
            usdtAddress: usdtAddress,
            addressAlias: addressAlias
          });
        case 25:
          _account4 = _context6.sent;
          return _context6.abrupt("return", res.status(200).json({
            account: _account4,
            message: "Successfully Created USDT Address",
            status: true,
            timeStamp: timeNow
          }));
        case 27:
          _context6.next = 33;
          break;
        case 29:
          _context6.prev = 29;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 33:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 29]]);
  }));
  return function addUSDTAddress(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getUSDTAddressInfo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var timeNow, auth, user, account;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          timeNow = Date.now();
          _context7.prev = 1;
          auth = req.cookies.auth;
          if (auth) {
            _context7.next = 5;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: "Auth is required to fulfill the request!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context7.next = 7;
          return getUserDataByAuthToken(auth);
        case 7:
          user = _context7.sent;
          _context7.next = 10;
          return AccountDB.getUserUSDTAddress({
            userPhoneNumber: user.phone
          });
        case 10:
          account = _context7.sent;
          return _context7.abrupt("return", res.status(200).json({
            account: account,
            message: "Successfully fetched USDT Address",
            status: true,
            timeStamp: timeNow
          }));
        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](1);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 18:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 14]]);
  }));
  return function getUSDTAddressInfo(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var createWithdrawalRequest = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var timeNow, auth, withdrawalMethod, amount, AllowedWithdrawAmount, totalBetAmountRemaining, user, _yield$connection$que, _yield$connection$que2, rechargeRow, account, _yield$connection$que3, _yield$connection$que4, adminSettings, _adminSettings$, mininrwit, minusdtwit, inrusdtrate, minimumMoneyAllowed, actualAmount, withd, _withd;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          timeNow = Date.now();
          _context8.prev = 1;
          auth = req.cookies.auth;
          if (auth) {
            _context8.next = 5;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "Auth is required to fulfill the request!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          withdrawalMethod = req.body.withdrawalMethod;
          amount = req.body.amount || 0;
          AllowedWithdrawAmount = req.body.AllowedWithdrawAmount || false;
          totalBetAmountRemaining = req.body.totalBetAmountRemaining || 0;
          if (withdrawalMethod) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "Please select the Withdrawal Method of your choice!",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          if (!(WITHDRAWAL_METHODS_MAP.BANK_CARD !== withdrawalMethod && WITHDRAWAL_METHODS_MAP.USDT_ADDRESS !== withdrawalMethod)) {
            _context8.next = 13;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "Please select a valid the Withdrawal Method!",
            status: false,
            timeStamp: timeNow
          }));
        case 13:
          _context8.next = 15;
          return getUserDataByAuthToken(auth);
        case 15:
          user = _context8.sent;
          _context8.next = 18;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = 1", [user.phone]);
        case 18:
          _yield$connection$que = _context8.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          rechargeRow = _yield$connection$que2[0];
          if (!(rechargeRow.length === 0)) {
            _context8.next = 23;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "You must deposit first to withdraw",
            status: false,
            timeStamp: timeNow
          }));
        case 23:
          account = {
            isAvailable: false
          };
          if (!(WITHDRAWAL_METHODS_MAP.BANK_CARD === withdrawalMethod)) {
            _context8.next = 30;
            break;
          }
          _context8.next = 27;
          return AccountDB.getUserBankCard({
            userPhoneNumber: user.phone
          });
        case 27:
          account = _context8.sent;
          _context8.next = 33;
          break;
        case 30:
          _context8.next = 32;
          return AccountDB.getUserUSDTAddress({
            userPhoneNumber: user.phone
          });
        case 32:
          account = _context8.sent;
        case 33:
          if (account.isAvailable) {
            _context8.next = 35;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "Please add your withdrawal method first!",
            status: false,
            timeStamp: timeNow
          }));
        case 35:
          _context8.next = 37;
          return _connectDB["default"].query("SELECT mininrwit, minusdtwit, inrusdtrate FROM admin_ac LIMIT 1");
        case 37:
          _yield$connection$que3 = _context8.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          adminSettings = _yield$connection$que4[0];
          if (!(!adminSettings || adminSettings.length === 0)) {
            _context8.next = 42;
            break;
          }
          return _context8.abrupt("return", res.status(500).json({
            message: "Failed to fetch withdrawal settings from the database",
            status: false,
            timeStamp: timeNow
          }));
        case 42:
          _adminSettings$ = adminSettings[0], mininrwit = _adminSettings$.mininrwit, minusdtwit = _adminSettings$.minusdtwit, inrusdtrate = _adminSettings$.inrusdtrate;
          minimumMoneyAllowed = withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD ? parseInt(mininrwit) : parseInt(minusdtwit);
          actualAmount = withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD ? parseInt(amount) : parseInt(amount) * parseFloat(inrusdtrate);
          if (!(amount < minimumMoneyAllowed)) {
            _context8.next = 47;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "You can withdraw minimum balance of ".concat(withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD ? "₹" : "$", " ").concat(minimumMoneyAllowed),
            status: false,
            timeStamp: timeNow
          }));
        case 47:
          if (!(Number(user.money) < Number(actualAmount))) {
            _context8.next = 49;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "The balance is not enough to fulfill the request",
            status: false,
            timeStamp: timeNow
          }));
        case 49:
          if (AllowedWithdrawAmount) {
            _context8.next = 51;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: "You must bet ₹ " + totalBetAmountRemaining + " to withdraw",
            status: false,
            timeStamp: timeNow
          }));
        case 51:
          if (!(withdrawalMethod === WITHDRAWAL_METHODS_MAP.BANK_CARD)) {
            _context8.next = 58;
            break;
          }
          _context8.next = 54;
          return _connectDB["default"].query("UPDATE users SET money = money - ?, total_money = total_money - ? WHERE `phone` = ? AND money >= ?", [amount, amount, user.phone, amount]);
        case 54:
          withd = _context8.sent;
          console.log(withd);
          withdrawDB.createBankCardWithdrawalRequest({
            userPhoneNumber: user.phone,
            bankName: account.bankName,
            recipientName: account.recipientName,
            bankAccountNumber: account.bankAccountNumber,
            IFSC: account.IFSC,
            upiId: account.upiId,
            amount: amount
          });
          return _context8.abrupt("return", res.status(200).json({
            message: "Withdrawal request registered Successfully!",
            status: true,
            timeStamp: timeNow
          }));
        case 58:
          if (!(withdrawalMethod === WITHDRAWAL_METHODS_MAP.USDT_ADDRESS)) {
            _context8.next = 65;
            break;
          }
          _context8.next = 61;
          return _connectDB["default"].query("UPDATE users SET money = money - ?, total_money = total_money - ? WHERE `phone` = ? AND money >= ?", [actualAmount, actualAmount, user.phone, amount]);
        case 61:
          _withd = _context8.sent;
          console.log(_withd);
          withdrawDB.createUSDTWithdrawalRequest({
            userPhoneNumber: user.phone,
            mainNetwork: account.mainNetwork,
            usdtAddress: account.usdtAddress,
            addressAlias: account.addressAlias,
            amount: amount
          });
          return _context8.abrupt("return", res.status(200).json({
            message: "Withdrawal request registered Successfully!",
            status: true,
            timeStamp: timeNow
          }));
        case 65:
          return _context8.abrupt("return", res.status(400).json({
            message: "Please select a valid the Withdrawal Method!",
            status: true,
            timeStamp: timeNow
          }));
        case 68:
          _context8.prev = 68;
          _context8.t0 = _context8["catch"](1);
          console.log(_context8.t0);
          return _context8.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 72:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 68]]);
  }));
  return function createWithdrawalRequest(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var listWithdrawalRequests = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var timeNow, auth, withdraw;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          timeNow = Date.now();
          _context9.prev = 1;
          auth = req.cookies.auth;
          if (auth) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            message: "Auth is required to fulfill the request!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context9.next = 7;
          return withdrawDB.getWithdrawalList({
            status: WITHDRAWAL_STATUS_MAP.PENDING
          });
        case 7:
          withdraw = _context9.sent;
          return _context9.abrupt("return", res.status(200).json({
            message: "Withdrawal request fetched!",
            withdrawList: withdraw.isAvailable ? withdraw.withdrawalList : [],
            status: true,
            timeStamp: timeNow
          }));
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](1);
          console.log(_context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 11]]);
  }));
  return function listWithdrawalRequests(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var listWithdrawalHistory = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var timeNow, auth, user, withdraw;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          timeNow = Date.now();
          _context10.prev = 1;
          auth = req.cookies.auth;
          if (auth) {
            _context10.next = 5;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: "Auth is required to fulfill the request!",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context10.next = 7;
          return getUserDataByAuthToken(auth);
        case 7:
          user = _context10.sent;
          _context10.next = 10;
          return withdrawDB.getWithdrawalList({
            status: undefined,
            userPhoneNumber: user.phone
          });
        case 10:
          withdraw = _context10.sent;
          return _context10.abrupt("return", res.status(200).json({
            message: "Withdrawal request fetched!",
            withdrawList: withdraw.isAvailable ? withdraw.withdrawalList : [],
            status: true,
            timeStamp: timeNow
          }));
        case 14:
          _context10.prev = 14;
          _context10.t0 = _context10["catch"](1);
          console.log(_context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 14]]);
  }));
  return function listWithdrawalHistory(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var approveOrDenyWithdrawalRequest = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var timeNow, auth, id, status, remarks, withdraw, amount, actualAmount;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          timeNow = Date.now();
          _context11.prev = 1;
          auth = req.cookies.auth;
          id = req.body.id;
          status = req.body.status;
          remarks = req.body.remarks;
          if (auth) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "Admin authentication is required!",
            status: false,
            timeStamp: timeNow
          }));
        case 8:
          if (!(!id || !status)) {
            _context11.next = 10;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "Please Provide the required fields!",
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context11.next = 12;
          return withdrawDB.getWithdrawalById(id);
        case 12:
          withdraw = _context11.sent;
          if (withdraw.isAvailable) {
            _context11.next = 15;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "Withdrawal request not found!",
            status: false,
            timeStamp: timeNow
          }));
        case 15:
          if (!(status == WITHDRAWAL_STATUS_MAP.APPROVED)) {
            _context11.next = 19;
            break;
          }
          _context11.next = 18;
          return _connectDB["default"].execute("UPDATE withdraw SET status = 1, remarks = ? WHERE id = ?", [remarks, id]);
        case 18:
          return _context11.abrupt("return", res.status(200).json({
            message: "Approved Withdrawal Request!",
            status: true,
            timeStamp: timeNow
          }));
        case 19:
          if (!(status == WITHDRAWAL_STATUS_MAP.DENIED)) {
            _context11.next = 32;
            break;
          }
          amount = Number(withdraw.withdrawal.amount);
          actualAmount = withdraw.withdrawal.type === WITHDRAWAL_METHODS_MAP.BANK_CARD ? Number(amount) : Number(amount) * Number(process.env.USDT_INR_EXCHANGE_RATE);
          console.log("amount", withdraw.withdrawal.phoneNumber);
          console.log("amount", withdraw.withdrawal);
          console.log("amount", process.env.USDT_INR_EXCHANGE_RATE);
          console.log("amount", amount);
          console.log("actualAmount", actualAmount);
          _context11.next = 29;
          return _connectDB["default"].query("UPDATE withdraw SET status = 2, remarks = ? WHERE id = ?", [remarks, id]);
        case 29:
          _context11.next = 31;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [actualAmount, withdraw.withdrawal.phoneNumber]);
        case 31:
          return _context11.abrupt("return", res.status(200).json({
            message: "Denied Withdrawal Request!",
            status: true,
            timeStamp: timeNow
          }));
        case 32:
          _context11.next = 38;
          break;
        case 34:
          _context11.prev = 34;
          _context11.t0 = _context11["catch"](1);
          console.log(_context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 38:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 34]]);
  }));
  return function approveOrDenyWithdrawalRequest(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var approveAndInitiateAquapayWithdrawalRequest = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var timeNow, auth, id, password, withdraw, response, remarks, _error$response, _error$response2, _error$response2$data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          timeNow = Date.now();
          _context12.prev = 1;
          auth = req.cookies.auth;
          id = req.body.id;
          password = req.body.password;
          if (auth) {
            _context12.next = 7;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Admin authentication is required!",
            status: false,
            timeStamp: timeNow
          }));
        case 7:
          if (id) {
            _context12.next = 9;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Please Provide the required fields!",
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context12.next = 11;
          return withdrawDB.getWithdrawalById(id);
        case 11:
          withdraw = _context12.sent;
          if (withdraw.isAvailable) {
            _context12.next = 14;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Withdrawal request not found!",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          console.log("withdraw", {
            amount: withdraw.withdrawal.amount,
            accountName: withdraw.withdrawal.recipientName,
            accountNumber: withdraw.withdrawal.bankAccountNumber,
            ifscCode: withdraw.withdrawal.IFSC,
            username: process.env.AQUA_PAY_USERNAME,
            password: password,
            callbackUrl: "".concat(process.env.APP_BASE_URL, "/api/withdrawal/aqua_callback")
          });
          _context12.next = 17;
          return (0, _axios["default"])({
            method: "post",
            url: "https://api.cpmall.co.in/api/external/initiate_payout",
            data: {
              amount: withdraw.withdrawal.amount,
              accountName: withdraw.withdrawal.recipientName,
              accountNumber: withdraw.withdrawal.bankAccountNumber,
              ifscCode: withdraw.withdrawal.IFSC,
              remark: "Payout is initiated from auto withdrawal system",
              username: process.env.AQUA_PAY_USERNAME,
              password: password,
              callbackUrl: "".concat(process.env.APP_BASE_URL, "/api/withdrawal/aqua_callback")
            }
          });
        case 17:
          response = _context12.sent;
          console.log("response", response.data);
          remarks = "\n      Payout is bing processed by our partnered banks. It will be credited to your account within 24 hours.\n    ";
          _context12.next = 22;
          return _connectDB["default"].execute("UPDATE withdraw SET status = 1, remarks = ?, order_id = ? WHERE id = ?", [remarks, response.data.data.orderId, id]);
        case 22:
          return _context12.abrupt("return", res.status(200).json({
            message: "Approved Withdrawal Request!",
            status: true,
            timeStamp: timeNow
          }));
        case 25:
          _context12.prev = 25;
          _context12.t0 = _context12["catch"](1);
          console.log(_context12.t0 === null || _context12.t0 === void 0 ? void 0 : (_error$response = _context12.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
          return _context12.abrupt("return", res.status(500).json({
            message: (_context12.t0 === null || _context12.t0 === void 0 ? void 0 : (_error$response2 = _context12.t0.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message) || "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 29:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 25]]);
  }));
  return function approveAndInitiateAquapayWithdrawalRequest(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var verifyAquapayWithdrawalRequest = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var timeNow, orderId, state, amount, _yield$connection$que5, _yield$connection$que6, rows, withdraw, remarks, _remarks;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          timeNow = Date.now();
          _context13.prev = 1;
          orderId = req.body.orderId;
          state = req.body.state;
          amount = req.body.amount;
          if (!(!orderId || !state || !amount)) {
            _context13.next = 7;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Please Provide the required fields!",
            status: false,
            timeStamp: timeNow
          }));
        case 7:
          _context13.next = 9;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE `order_id` = ?", [orderId]);
        case 9:
          _yield$connection$que5 = _context13.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          rows = _yield$connection$que6[0];
          if (!(rows.length === 0)) {
            _context13.next = 14;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Withdrawal request not found!",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          withdraw = rows[0];
          if (!(state === 1)) {
            _context13.next = 20;
            break;
          }
          remarks = "\n        The payout has been successfully processed and credited to your account.\n      ";
          _context13.next = 19;
          return _connectDB["default"].execute("UPDATE withdraw SET remarks = ? WHERE id = ?", [remarks, withdraw.id]);
        case 19:
          return _context13.abrupt("return", res.status(200).json({
            message: "Confirmed Withdrawal Request!",
            status: true,
            timeStamp: timeNow
          }));
        case 20:
          if (!(state === 3)) {
            _context13.next = 27;
            break;
          }
          _remarks = "\n        The payout was declined by the bank. Please check the details and try again.\n      ";
          _context13.next = 24;
          return _connectDB["default"].query("UPDATE withdraw SET status = 2, remarks = ? WHERE id = ?", [_remarks, withdraw.id]);
        case 24:
          _context13.next = 26;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ?", [withdraw.money, withdraw.phone]);
        case 26:
          return _context13.abrupt("return", res.status(200).json({
            message: "Denied Withdrawal Request!",
            status: true,
            timeStamp: timeNow
          }));
        case 27:
          _context13.next = 33;
          break;
        case 29:
          _context13.prev = 29;
          _context13.t0 = _context13["catch"](1);
          console.log(_context13.t0);
          return _context13.abrupt("return", res.status(500).json({
            message: "Something went wrong!",
            status: false,
            timeStamp: timeNow
          }));
        case 33:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 29]]);
  }));
  return function verifyAquapayWithdrawalRequest(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

// helpers ---------------
var getUserDataByAuthToken = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(authToken) {
    var _yield$connection$que7, _yield$connection$que8, users, user;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return _connectDB["default"].query("SELECT `phone`, `code`,`name_user`,`invite`,`money` FROM users WHERE `token` = ? ", [authToken]);
        case 2:
          _yield$connection$que7 = _context14.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          users = _yield$connection$que8[0];
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
            invite: user.invite,
            money: user.money
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
var AccountDB = {
  getUserBankCard: function getUserBankCard(_ref15) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var userPhoneNumber, type, _yield$connection$que9, _yield$connection$que10, accounts, account;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            userPhoneNumber = _ref15.userPhoneNumber;
            type = WITHDRAWAL_METHODS_MAP.BANK_CARD;
            _context15.next = 4;
            return _connectDB["default"].query("SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?", [userPhoneNumber, type]);
          case 4:
            _yield$connection$que9 = _context15.sent;
            _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
            accounts = _yield$connection$que10[0];
            account = accounts === null || accounts === void 0 ? void 0 : accounts[0];
            if (!(account === undefined || account === null)) {
              _context15.next = 10;
              break;
            }
            return _context15.abrupt("return", {
              isAvailable: false
            });
          case 10:
            return _context15.abrupt("return", {
              isAvailable: true,
              id: account.id,
              userPhoneNumber: account.phone,
              bankName: account.name_bank,
              recipientName: account.name_user,
              bankAccountNumber: account.stk,
              phoneNumber: account.tinh,
              IFSC: account.chi_nhanh,
              upiId: account.sdt,
              type: type
            });
          case 11:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    }))();
  },
  createUserBankCard: function createUserBankCard(_ref16) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var userPhoneNumber, bankName, recipientName, bankAccountNumber, phoneNumber, IFSC, upiId, time, type, _yield$connection$que11, _yield$connection$que12, accounts, account;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            userPhoneNumber = _ref16.userPhoneNumber, bankName = _ref16.bankName, recipientName = _ref16.recipientName, bankAccountNumber = _ref16.bankAccountNumber, phoneNumber = _ref16.phoneNumber, IFSC = _ref16.IFSC, upiId = _ref16.upiId;
            time = new Date().getTime();
            type = WITHDRAWAL_METHODS_MAP.BANK_CARD;
            _context16.next = 5;
            return _connectDB["default"].query("INSERT INTO user_bank SET phone = '".concat(userPhoneNumber, "', name_bank = '").concat(bankName, "', name_user = '").concat(recipientName, "', stk = '").concat(bankAccountNumber, "', tinh = '").concat(phoneNumber, "', chi_nhanh = '").concat(IFSC, "', sdt = '").concat(upiId, "', tp = '").concat(type, "', time = '").concat(time, "'"));
          case 5:
            _context16.next = 7;
            return _connectDB["default"].query("SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?", [userPhoneNumber, type]);
          case 7:
            _yield$connection$que11 = _context16.sent;
            _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
            accounts = _yield$connection$que12[0];
            account = accounts === null || accounts === void 0 ? void 0 : accounts[0];
            if (!(account === undefined || account === null)) {
              _context16.next = 13;
              break;
            }
            return _context16.abrupt("return", {
              isCreated: false
            });
          case 13:
            return _context16.abrupt("return", {
              isCreated: true,
              userPhoneNumber: account.phone,
              bankName: account.name_bank,
              recipientName: account.name_user,
              bankAccountNumber: account.stk,
              phoneNumber: account.tinh,
              IFSC: account.chi_nhanh,
              upiId: account.sdt,
              type: type
            });
          case 14:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }))();
  },
  updateUserBankCard: function updateUserBankCard(_ref17) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      var userPhoneNumber, bankName, recipientName, bankAccountNumber, phoneNumber, IFSC, upiId, time, type, _yield$connection$que13, _yield$connection$que14, accounts, account;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            userPhoneNumber = _ref17.userPhoneNumber, bankName = _ref17.bankName, recipientName = _ref17.recipientName, bankAccountNumber = _ref17.bankAccountNumber, phoneNumber = _ref17.phoneNumber, IFSC = _ref17.IFSC, upiId = _ref17.upiId;
            time = new Date().getTime();
            type = WITHDRAWAL_METHODS_MAP.BANK_CARD;
            _context17.next = 5;
            return _connectDB["default"].query("UPDATE user_bank SET name_bank = '".concat(bankName, "', name_user = '").concat(recipientName, "', stk = '").concat(bankAccountNumber, "', tinh = '").concat(phoneNumber, "', chi_nhanh = '").concat(IFSC, "', sdt = '").concat(upiId, "', time = '").concat(time, "' WHERE phone = '").concat(userPhoneNumber, "' AND tp = '").concat(type, "'"));
          case 5:
            _context17.next = 7;
            return _connectDB["default"].query("SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?", [userPhoneNumber, type]);
          case 7:
            _yield$connection$que13 = _context17.sent;
            _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
            accounts = _yield$connection$que14[0];
            account = accounts === null || accounts === void 0 ? void 0 : accounts[0];
            if (!(account === undefined || account === null)) {
              _context17.next = 13;
              break;
            }
            return _context17.abrupt("return", {
              isCreated: false
            });
          case 13:
            return _context17.abrupt("return", {
              isAvailable: true,
              userPhoneNumber: account.phone,
              bankName: account.name_bank,
              recipientName: account.name_user,
              bankAccountNumber: account.stk,
              phoneNumber: account.tinh,
              IFSC: account.chi_nhanh,
              upiId: account.sdt,
              type: type
            });
          case 14:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
    }))();
  },
  getUserUSDTAddress: function getUserUSDTAddress(_ref18) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
      var userPhoneNumber, type, _yield$connection$que15, _yield$connection$que16, accounts, account;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            userPhoneNumber = _ref18.userPhoneNumber;
            type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;
            _context18.next = 4;
            return _connectDB["default"].query("SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?", [userPhoneNumber, type]);
          case 4:
            _yield$connection$que15 = _context18.sent;
            _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
            accounts = _yield$connection$que16[0];
            account = accounts === null || accounts === void 0 ? void 0 : accounts[0];
            if (!(account === undefined || account === null)) {
              _context18.next = 10;
              break;
            }
            return _context18.abrupt("return", {
              isAvailable: false
            });
          case 10:
            return _context18.abrupt("return", {
              isAvailable: true,
              id: account.id,
              userPhoneNumber: account.phone,
              mainNetwork: account.name_bank,
              usdtAddress: account.stk,
              addressAlias: account.sdt,
              type: type
            });
          case 11:
          case "end":
            return _context18.stop();
        }
      }, _callee18);
    }))();
  },
  createUserUSDTAddress: function createUserUSDTAddress(_ref19) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      var userPhoneNumber, mainNetwork, usdtAddress, addressAlias, time, type, _yield$connection$que17, _yield$connection$que18, accounts, account;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            userPhoneNumber = _ref19.userPhoneNumber, mainNetwork = _ref19.mainNetwork, usdtAddress = _ref19.usdtAddress, addressAlias = _ref19.addressAlias;
            time = new Date().getTime();
            type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;
            _context19.next = 5;
            return _connectDB["default"].query("INSERT INTO user_bank SET phone = '".concat(userPhoneNumber, "', name_bank =' ").concat(mainNetwork, "', stk = '").concat(usdtAddress, "', sdt = '").concat(addressAlias, "', tp = '").concat(type, "', time = '").concat(time, "'"));
          case 5:
            _context19.next = 7;
            return _connectDB["default"].query("SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?", [userPhoneNumber, type]);
          case 7:
            _yield$connection$que17 = _context19.sent;
            _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
            accounts = _yield$connection$que18[0];
            account = accounts === null || accounts === void 0 ? void 0 : accounts[0];
            if (!(account === undefined || account === null)) {
              _context19.next = 13;
              break;
            }
            return _context19.abrupt("return", {
              isCreated: false
            });
          case 13:
            return _context19.abrupt("return", {
              isCreated: true,
              userPhoneNumber: account.phone,
              mainNetwork: account.name_bank,
              usdtAddress: account.stk,
              addressAlias: account.sdt,
              type: type
            });
          case 14:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }))();
  },
  updateUserUSDTAddress: function updateUserUSDTAddress(_ref20) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var userPhoneNumber, mainNetwork, usdtAddress, addressAlias, time, type, _yield$connection$que19, _yield$connection$que20, accounts, account;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            userPhoneNumber = _ref20.userPhoneNumber, mainNetwork = _ref20.mainNetwork, usdtAddress = _ref20.usdtAddress, addressAlias = _ref20.addressAlias;
            time = new Date().getTime();
            type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;
            _context20.next = 5;
            return _connectDB["default"].query("UPDATE user_bank SET name_bank = '".concat(mainNetwork, "', stk = '").concat(usdtAddress, "', sdt = '").concat(addressAlias, "', time = '").concat(time, "' WHERE phone = '").concat(userPhoneNumber, "' AND tp = '").concat(type, "'"));
          case 5:
            _context20.next = 7;
            return _connectDB["default"].query("SELECT * FROM user_bank WHERE `phone` = ? AND `tp` = ?", [userPhoneNumber, type]);
          case 7:
            _yield$connection$que19 = _context20.sent;
            _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
            accounts = _yield$connection$que20[0];
            account = accounts === null || accounts === void 0 ? void 0 : accounts[0];
            if (!(account === undefined || account === null)) {
              _context20.next = 13;
              break;
            }
            return _context20.abrupt("return", {
              isAvailable: false
            });
          case 13:
            return _context20.abrupt("return", {
              isAvailable: true,
              userPhoneNumber: account.phone,
              mainNetwork: account.name_bank,
              usdtAddress: account.stk,
              addressAlias: account.sdt,
              type: type
            });
          case 14:
          case "end":
            return _context20.stop();
        }
      }, _callee20);
    }))();
  }
};
var getTodayString = function getTodayString() {
  return (0, _moment["default"])().format("YYYY-MM-DD h:mm:ss A");
};
var getOrderId = function getOrderId() {
  var date = new Date();
  var id_time = date.getUTCFullYear() + "" + date.getUTCMonth() + 1 + "" + date.getUTCDate();
  var id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;
  return id_time + "" + id_order;
};
var withdrawDB = {
  getWithdrawalById: function getWithdrawalById(id) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
      var _withdrawalList$map;
      var _yield$connection$que21, _yield$connection$que22, withdrawalList;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return _connectDB["default"].query("SELECT * FROM withdraw WHERE `id` = ?", [id]);
          case 2:
            _yield$connection$que21 = _context21.sent;
            _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
            withdrawalList = _yield$connection$que22[0];
            if (!(withdrawalList.length === 0)) {
              _context21.next = 7;
              break;
            }
            return _context21.abrupt("return", {
              isAvailable: false
            });
          case 7:
            return _context21.abrupt("return", {
              isAvailable: true,
              withdrawal: (_withdrawalList$map = withdrawalList.map(function (item) {
                if (item.tp === WITHDRAWAL_METHODS_MAP.BANK_CARD) {
                  return {
                    id: item.id,
                    orderId: item.id_order,
                    phoneNumber: item.phone,
                    status: item.status,
                    bankName: item.name_bank,
                    recipientName: item.name_user,
                    bankAccountNumber: item.stk,
                    IFSC: item.ifsc,
                    upiId: item.sdt,
                    type: item.tp,
                    time: item.time,
                    today: item.today,
                    amount: item.money,
                    remarks: item.remarks
                  };
                } else if (item.tp === WITHDRAWAL_METHODS_MAP.USDT_ADDRESS) {
                  return {
                    id: item.id,
                    orderId: item.id_order,
                    phoneNumber: item.phone,
                    status: item.status,
                    mainNetwork: item.name_bank,
                    usdtAddress: item.stk,
                    addressAlias: item.sdt,
                    type: item.tp,
                    time: item.time,
                    today: item.today,
                    amount: item.money,
                    remarks: item.remarks
                  };
                } else {
                  return {
                    id: item.id,
                    orderId: item.id_order,
                    phoneNumber: item.phone,
                    status: item.status,
                    bankName: item.name_bank,
                    recipientName: item.name_user,
                    bankAccountNumber: item.stk,
                    IFSC: item.ifsc,
                    upiId: item.sdt,
                    type: item.tp,
                    time: item.time,
                    today: item.today,
                    amount: item.money,
                    remarks: item.remarks
                  };
                }
              })) === null || _withdrawalList$map === void 0 ? void 0 : _withdrawalList$map[0]
            });
          case 8:
          case "end":
            return _context21.stop();
        }
      }, _callee21);
    }))();
  },
  getWithdrawalList: function getWithdrawalList(_ref21) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
      var userPhoneNumber, status, _ref22, _ref23, withdrawalList;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            userPhoneNumber = _ref21.userPhoneNumber, status = _ref21.status;
            if (!(status === undefined)) {
              _context22.next = 7;
              break;
            }
            _context22.next = 4;
            return _connectDB["default"].query("SELECT * FROM withdraw WHERE `phone` = ?", [userPhoneNumber]);
          case 4:
            _context22.t0 = _context22.sent;
            _context22.next = 17;
            break;
          case 7:
            if (!userPhoneNumber) {
              _context22.next = 13;
              break;
            }
            _context22.next = 10;
            return _connectDB["default"].query("SELECT * FROM withdraw WHERE `phone` = ? AND `status` = ?", [userPhoneNumber, status]);
          case 10:
            _context22.t1 = _context22.sent;
            _context22.next = 16;
            break;
          case 13:
            _context22.next = 15;
            return _connectDB["default"].query("SELECT * FROM withdraw WHERE `status` = ?", [status]);
          case 15:
            _context22.t1 = _context22.sent;
          case 16:
            _context22.t0 = _context22.t1;
          case 17:
            _ref22 = _context22.t0;
            _ref23 = _slicedToArray(_ref22, 1);
            withdrawalList = _ref23[0];
            if (!(withdrawalList.length === 0)) {
              _context22.next = 22;
              break;
            }
            return _context22.abrupt("return", {
              isAvailable: false
            });
          case 22:
            return _context22.abrupt("return", {
              isAvailable: true,
              withdrawalList: withdrawalList.map(function (item) {
                if (item.tp === WITHDRAWAL_METHODS_MAP.BANK_CARD) {
                  return {
                    id: item.id,
                    orderId: item.id_order,
                    phoneNumber: item.phone,
                    status: item.status,
                    bankName: item.name_bank,
                    recipientName: item.name_user,
                    bankAccountNumber: item.stk,
                    IFSC: item.ifsc,
                    upiId: item.sdt,
                    type: item.tp,
                    time: item.time,
                    today: item.today,
                    amount: item.money,
                    remarks: item.remarks
                  };
                } else if (item.tp === WITHDRAWAL_METHODS_MAP.USDT_ADDRESS) {
                  return {
                    id: item.id,
                    orderId: item.id_order,
                    phoneNumber: item.phone,
                    status: item.status,
                    mainNetwork: item.name_bank,
                    usdtAddress: item.stk,
                    addressAlias: item.sdt,
                    type: item.tp,
                    time: item.time,
                    today: item.today,
                    amount: item.money,
                    remarks: item.remarks
                  };
                } else {
                  return {
                    id: item.id,
                    orderId: item.id_order,
                    phoneNumber: item.phone,
                    status: item.status,
                    bankName: item.name_bank,
                    recipientName: item.name_user,
                    bankAccountNumber: item.stk,
                    IFSC: item.ifsc,
                    upiId: item.sdt,
                    type: item.tp,
                    time: item.time,
                    today: item.today,
                    amount: item.money,
                    remarks: item.remarks
                  };
                }
              })
            });
          case 23:
          case "end":
            return _context22.stop();
        }
      }, _callee22);
    }))();
  },
  createUSDTWithdrawalRequest: function createUSDTWithdrawalRequest(_ref24) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
      var userPhoneNumber, mainNetwork, usdtAddress, addressAlias, amount, time, type;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            userPhoneNumber = _ref24.userPhoneNumber, mainNetwork = _ref24.mainNetwork, usdtAddress = _ref24.usdtAddress, addressAlias = _ref24.addressAlias, amount = _ref24.amount;
            time = new Date().getTime();
            type = WITHDRAWAL_METHODS_MAP.USDT_ADDRESS;
            _context23.next = 5;
            return _connectDB["default"].query("INSERT INTO withdraw SET id_order = '".concat(getOrderId(), "', phone = '").concat(userPhoneNumber, "', name_bank = '").concat(mainNetwork, "', stk = '").concat(usdtAddress, "', sdt = '").concat(addressAlias, "', tp = '").concat(type, "', time = '").concat(time, "', today = '").concat(getTodayString(), "', money = '").concat(amount, "'"));
          case 5:
          case "end":
            return _context23.stop();
        }
      }, _callee23);
    }))();
  },
  createBankCardWithdrawalRequest: function createBankCardWithdrawalRequest(_ref25) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      var userPhoneNumber, bankName, recipientName, bankAccountNumber, IFSC, upiId, amount, time, type;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            userPhoneNumber = _ref25.userPhoneNumber, bankName = _ref25.bankName, recipientName = _ref25.recipientName, bankAccountNumber = _ref25.bankAccountNumber, IFSC = _ref25.IFSC, upiId = _ref25.upiId, amount = _ref25.amount;
            time = new Date().getTime(); //phoneNumber
            type = WITHDRAWAL_METHODS_MAP.BANK_CARD;
            _context24.next = 5;
            return _connectDB["default"].query("INSERT INTO withdraw SET id_order = '".concat(getOrderId(), "', phone = '").concat(userPhoneNumber, "', name_bank = '").concat(bankName, "', name_user = '").concat(recipientName, "', stk = '").concat(bankAccountNumber, "', ifsc = '").concat(IFSC, "', sdt = '").concat(upiId, "', tp = '").concat(type, "', time = '").concat(time, "', today = '").concat(getTodayString(), "', money = '").concat(amount, "'"));
          case 5:
          case "end":
            return _context24.stop();
        }
      }, _callee24);
    }))();
  },
  changeWithdrawalStatus: function changeWithdrawalStatus(_ref26) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
      var status, id;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            status = _ref26.status, id = _ref26.id;
            _context25.next = 3;
            return _connectDB["default"].query("UPDATE users SET status = '".concat(status, "' WHERE id = ").concat(id));
          case 3:
          case "end":
            return _context25.stop();
        }
      }, _callee25);
    }))();
  }
};
var gamesDB = {
  getTotalBettingAmount: function getTotalBettingAmount(_ref27) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
      var userPhoneNumber, _yield$connection$que23, _yield$connection$que24, gameWingo, gameWingoBettingAmount, _yield$connection$que25, _yield$connection$que26, gameK3, gameK3BettingAmount, _yield$connection$que27, _yield$connection$que28, game5D, game5DBettingAmount;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            userPhoneNumber = _ref27.userPhoneNumber;
            _context26.next = 3;
            return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM minutes_1 WHERE phone = ?", [userPhoneNumber]);
          case 3:
            _yield$connection$que23 = _context26.sent;
            _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
            gameWingo = _yield$connection$que24[0];
            gameWingoBettingAmount = gameWingo[0].totalBettingAmount;
            _context26.next = 9;
            return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM result_k3 WHERE phone = ?", [userPhoneNumber]);
          case 9:
            _yield$connection$que25 = _context26.sent;
            _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
            gameK3 = _yield$connection$que26[0];
            gameK3BettingAmount = gameK3[0].totalBettingAmount;
            _context26.next = 15;
            return _connectDB["default"].query("SELECT SUM(money) as totalBettingAmount FROM result_5d WHERE phone = ?", [userPhoneNumber]);
          case 15:
            _yield$connection$que27 = _context26.sent;
            _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
            game5D = _yield$connection$que28[0];
            game5DBettingAmount = game5D[0].totalBettingAmount;
            return _context26.abrupt("return", gameWingoBettingAmount + gameK3BettingAmount + game5DBettingAmount);
          case 20:
          case "end":
            return _context26.stop();
        }
      }, _callee26);
    }))();
  }
};
var depositDB = {
  getTotalDeposit: function getTotalDeposit(_ref28) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
      var userPhoneNumber, _yield$connection$que29, _yield$connection$que30, deposit, totalDepositAmount;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            userPhoneNumber = _ref28.userPhoneNumber;
            _context27.next = 3;
            return _connectDB["default"].query("SELECT SUM(money) as totalDepositAmount FROM recharge WHERE phone = ? AND status = 1", [userPhoneNumber]);
          case 3:
            _yield$connection$que29 = _context27.sent;
            _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
            deposit = _yield$connection$que30[0];
            totalDepositAmount = deposit[0].totalDepositAmount;
            return _context27.abrupt("return", totalDepositAmount);
          case 8:
          case "end":
            return _context27.stop();
        }
      }, _callee27);
    }))();
  }
};
var withdrawalController = {
  addBankCard: addBankCard,
  getBankCardInfo: getBankCardInfo,
  addUSDTAddress: addUSDTAddress,
  getUSDTAddressInfo: getUSDTAddressInfo,
  createWithdrawalRequest: createWithdrawalRequest,
  listWithdrawalRequests: listWithdrawalRequests,
  listWithdrawalHistory: listWithdrawalHistory,
  approveOrDenyWithdrawalRequest: approveOrDenyWithdrawalRequest,
  addBankCardPage: addBankCardPage,
  addUSDTAddressPage: addUSDTAddressPage,
  selectBankPage: selectBankPage,
  approveAndInitiateAquapayWithdrawalRequest: approveAndInitiateAquapayWithdrawalRequest,
  verifyAquapayWithdrawalRequest: verifyAquapayWithdrawalRequest
};
var _default = exports["default"] = withdrawalController;