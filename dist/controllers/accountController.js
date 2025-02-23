"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PaymentStatusMap = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _moment = _interopRequireDefault(require("moment"));
var _joi = _interopRequireDefault(require("joi"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _lodash = _interopRequireDefault(require("lodash"));
var _excluded = ["password", "money", "ip", "veri", "ip_address", "status", "time"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var timeNow = Date.now();
var saltRounds = parseInt(process.env.SALT_ROUNDS || 5);
var PaymentStatusMap = exports.PaymentStatusMap = {
  PENDING: 0,
  SUCCESS: 1,
  CANCELLED: 2
};
var loginPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render("account/login.ejs"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loginPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var adminloginPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("account/admin-login.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function adminloginPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var registerPage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", res.render("account/register.ejs"));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function registerPage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var forgotPage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("account/forgot.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function forgotPage(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var forgotResetPage = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", res.render("account/forgot_reset.ejs"));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function forgotResetPage(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var keFuMenu = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var auth, _yield$connection$que, _yield$connection$que2, users, telegram, _yield$connection$que3, _yield$connection$que4, _settings, _yield$connection$que5, _yield$connection$que6, settings, _yield$connection$que7, _yield$connection$que8, check, _yield$connection$que9, _yield$connection$que10, _yield$connection$que11, _yield$connection$que12;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          auth = req.cookies.auth;
          _context6.next = 3;
          return _connectDB["default"].query("SELECT `level`, `ctv` FROM users WHERE token = ?", [auth]);
        case 3:
          _yield$connection$que = _context6.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          users = _yield$connection$que2[0];
          telegram = "";
          if (!(users.length == 0)) {
            _context6.next = 16;
            break;
          }
          _context6.next = 10;
          return _connectDB["default"].query("SELECT `telegram`, `cskh` FROM admin_ac");
        case 10:
          _yield$connection$que3 = _context6.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          _settings = _yield$connection$que4[0];
          telegram = _settings[0].telegram;
          _context6.next = 43;
          break;
        case 16:
          if (!(users[0].level != 0)) {
            _context6.next = 24;
            break;
          }
          _context6.next = 19;
          return _connectDB["default"].query("SELECT * FROM admin_ac");
        case 19:
          _yield$connection$que5 = _context6.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          settings = _yield$connection$que6[0];
          _context6.next = 42;
          break;
        case 24:
          _context6.next = 26;
          return _connectDB["default"].query("SELECT `telegram` FROM point_list WHERE phone = ?", [users[0].ctv]);
        case 26:
          _yield$connection$que7 = _context6.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          check = _yield$connection$que8[0];
          if (!(check.length == 0)) {
            _context6.next = 37;
            break;
          }
          _context6.next = 32;
          return _connectDB["default"].query("SELECT * FROM admin_ac");
        case 32:
          _yield$connection$que9 = _context6.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          settings = _yield$connection$que10[0];
          _context6.next = 42;
          break;
        case 37:
          _context6.next = 39;
          return _connectDB["default"].query("SELECT `telegram` FROM point_list WHERE phone = ?", [users[0].ctv]);
        case 39:
          _yield$connection$que11 = _context6.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          settings = _yield$connection$que12[0];
        case 42:
          telegram = settings[0].telegram;
        case 43:
          return _context6.abrupt("return", res.render("keFuMenu.ejs", {
            telegram: telegram
          }));
        case 44:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function keFuMenu(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var login = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var schema, _schema$validate, error, _req$body, phoneNumber, pwd, dialCode, _yield$connection$que13, _yield$connection$que14, rows, validPassword, _rows$, password, money, ip, veri, ip_address, status, time, others, accessToken;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          schema = _joi["default"].object({
            phoneNumber: _joi["default"].string().length(10).required(),
            pwd: _joi["default"].string().min(6).required(),
            dialCode: _joi["default"].string().required()
          });
          _schema$validate = schema.validate(req.body), error = _schema$validate.error;
          if (!error) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            message: error.details[0].message
          }));
        case 4:
          _req$body = req.body, phoneNumber = _req$body.phoneNumber, pwd = _req$body.pwd, dialCode = _req$body.dialCode;
          _context7.prev = 5;
          _context7.next = 8;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ? AND dial_code = ?", [phoneNumber, dialCode]);
        case 8:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          rows = _yield$connection$que14[0];
          if (!_lodash["default"].isEmpty(rows)) {
            _context7.next = 13;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Incorrect Phone Number or Password",
            status: false
          }));
        case 13:
          _context7.next = 15;
          return _bcrypt["default"].compare(pwd, rows[0].password);
        case 15:
          validPassword = _context7.sent;
          if (validPassword) {
            _context7.next = 18;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            status: false,
            message: "Invalid password"
          }));
        case 18:
          if (!(rows[0].status !== 1)) {
            _context7.next = 20;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Account has been locked",
            status: false
          }));
        case 20:
          _rows$ = rows[0], password = _rows$.password, money = _rows$.money, ip = _rows$.ip, veri = _rows$.veri, ip_address = _rows$.ip_address, status = _rows$.status, time = _rows$.time, others = _objectWithoutProperties(_rows$, _excluded);
          accessToken = _jsonwebtoken["default"].sign({
            user: _objectSpread({}, others),
            timeNow: timeNow
          }, process.env.JWT_ACCESS_TOKEN, {
            expiresIn: "1d"
          });
          _context7.next = 24;
          return _connectDB["default"].execute("UPDATE `users` SET `token` = ? WHERE `phone` = ? ", [(0, _md["default"])(accessToken), phoneNumber]);
        case 24:
          return _context7.abrupt("return", res.status(200).json({
            message: "Login Successfully!",
            status: true,
            token: accessToken,
            value: (0, _md["default"])(accessToken)
          }));
        case 27:
          _context7.prev = 27;
          _context7.t0 = _context7["catch"](5);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            status: false,
            message: "Internal Server Error"
          }));
        case 31:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[5, 27]]);
  }));
  return function login(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

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

var register = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _adminData$, _adminData$2, schema, _schema$validate2, error, _req$body2, phoneNumber, pwd, invitecode, dialCode, id_user, _yield$connection$que15, _yield$connection$que16, _rows, otp, name_user, code, _yield$connection$que17, _yield$connection$que18, adminData, bonus_money, inv_bonus_money, ip, time, _yield$connection$que19, _yield$connection$que20, check_u, _yield$connection$que21, _yield$connection$que22, check_ip, check_i, _yield$connection$que23, _yield$connection$que24, ctv, hashedPassword, sql, _yield$connection$que25, _yield$connection$que26, check_code, levels, i, sql4, _yield$connection$que27, _yield$connection$que28, rows, others, accessToken, claimedRewardSql, userRewardId, userRewardType, userRewardStatus, inviterPhoneQuery, _yield$connection$que29, _yield$connection$que30, inviterData, inviterPhoneNumber, inviterCurrentMoney, newInviterMoney, updateInviterMoneySql, inviterRewardId, inviterRewardType, inviterRewardStatus;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          schema = _joi["default"].object({
            phoneNumber: _joi["default"].string().length(10).required(),
            pwd: _joi["default"].string().min(6).required(),
            invitecode: _joi["default"].string().required(),
            dialCode: _joi["default"].string().required()
          });
          _schema$validate2 = schema.validate(req.body), error = _schema$validate2.error;
          if (!error) {
            _context8.next = 5;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            message: error.details[0].message
          }));
        case 5:
          _req$body2 = req.body, phoneNumber = _req$body2.phoneNumber, pwd = _req$body2.pwd, invitecode = _req$body2.invitecode, dialCode = _req$body2.dialCode;
          id_user = utils.generateUniqueNumberCodeByDigit(7);
        case 7:
          if (!true) {
            _context8.next = 18;
            break;
          }
          _context8.next = 10;
          return _connectDB["default"].query("SELECT `id_user` FROM users WHERE `id_user` = ?", [id_user]);
        case 10:
          _yield$connection$que15 = _context8.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          _rows = _yield$connection$que16[0];
          if (!_lodash["default"].isEmpty(_rows)) {
            _context8.next = 15;
            break;
          }
          return _context8.abrupt("break", 18);
        case 15:
          id_user = utils.generateUniqueNumberCodeByDigit(7);
          _context8.next = 7;
          break;
        case 18:
          otp = utils.generateUniqueNumberCodeByDigit(6);
          name_user = "Member" + utils.generateUniqueNumberCodeByDigit(5);
          code = utils.generateUniqueNumberCodeByDigit(5) + id_user; // let bonus_money = parseFloat(process.env.BONUS_MONEY_ON_REGISTER || 0); 
          // Fetch bonus_money from the admin_ac table
          _context8.next = 23;
          return _connectDB["default"].query("SELECT BONUS_MONEY_ON_REGISTER, INVITER_BONUS_MONEY_ON_REGISTER FROM admin_ac LIMIT 1");
        case 23:
          _yield$connection$que17 = _context8.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          adminData = _yield$connection$que18[0];
          bonus_money = parseFloat(((_adminData$ = adminData[0]) === null || _adminData$ === void 0 ? void 0 : _adminData$.BONUS_MONEY_ON_REGISTER) || 0); // Fallback to 0 if not found
          inv_bonus_money = parseFloat(((_adminData$2 = adminData[0]) === null || _adminData$2 === void 0 ? void 0 : _adminData$2.INVITER_BONUS_MONEY_ON_REGISTER) || 0); // Fallback to 0 if not found
          ip = utils.getIpAddress(req);
          time = (0, _moment["default"])().valueOf();
          _context8.next = 32;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ?", [phoneNumber]);
        case 32:
          _yield$connection$que19 = _context8.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          check_u = _yield$connection$que20[0];
          _context8.next = 37;
          return _connectDB["default"].query("SELECT * FROM users WHERE ip_address = ?", [ip]);
        case 37:
          _yield$connection$que21 = _context8.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          check_ip = _yield$connection$que22[0];
          if (!(check_u.length > 0)) {
            _context8.next = 42;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: "Registered phone number",
            status: false
          }));
        case 42:
          if (!(check_ip.length > 3)) {
            _context8.next = 44;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: "Registered IP address",
            status: false
          }));
        case 44:
          _context8.prev = 44;
          _context8.next = 47;
          return _connectDB["default"].query("SELECT * FROM users WHERE code = ?", [invitecode]);
        case 47:
          _yield$connection$que23 = _context8.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          check_i = _yield$connection$que24[0];
          if (!(!check_i || check_i.length === 0)) {
            _context8.next = 53;
            break;
          }
          console.warn("Invalid referral code:", invitecode);
          return _context8.abrupt("return", res.status(200).json({
            message: "Referrer code does not exist",
            status: false
          }));
        case 53:
          _context8.next = 59;
          break;
        case 55:
          _context8.prev = 55;
          _context8.t0 = _context8["catch"](44);
          console.error("Error fetching referrer data:", _context8.t0);
          throw _context8.t0;
        case 59:
          console.log("Referrer data fetched successfully:", check_i);
          ctv = check_i[0].level == 2 ? check_i[0].phone : check_i[0].ctv;
          _context8.prev = 61;
          if (!(!pwd || typeof pwd !== "string")) {
            _context8.next = 65;
            break;
          }
          console.error("Invalid password:", pwd);
          throw new Error("Password is required and must be a string");
        case 65:
          console.log("Hashing password with salt rounds:", 10);
          _context8.next = 68;
          return _bcrypt["default"].hash(pwd, 10);
        case 68:
          hashedPassword = _context8.sent;
          // Assign hashed password
          console.log("Hashed password:", hashedPassword);
          sql = "INSERT INTO users SET id_user = ?, phone = ?, name_user = ?, password = ?, plain_password = ?, money = ?, bonus_money = ?, third_party_money = ?, code = ?, invite = ?, ctv = ?, veri = ?, otp = ?, ip_address = ?, status = ?, time = ?, dial_code = ?";
          _context8.next = 73;
          return _connectDB["default"].execute(sql, [id_user, phoneNumber, name_user, hashedPassword,
          // Use hashedPassword here
          pwd, bonus_money, bonus_money, 0, code, invitecode, ctv, 1, otp, ip, 1, time, dialCode]);
        case 73:
          console.log("User successfully inserted into users table");
          _context8.next = 81;
          break;
        case 76:
          _context8.prev = 76;
          _context8.t1 = _context8["catch"](61);
          console.error("Error inserting user data:", _context8.t1.message);
          if (_context8.t1.sqlMessage) {
            console.error("SQL Error Message:", _context8.t1.sqlMessage);
          }
          throw _context8.t1;
        case 81:
          _context8.next = 83;
          return _connectDB["default"].execute("INSERT INTO point_list SET phone = ?", [phoneNumber]);
        case 83:
          _context8.next = 85;
          return _connectDB["default"].query("SELECT * FROM users WHERE invite = ?", [invitecode]);
        case 85:
          _yield$connection$que25 = _context8.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          check_code = _yield$connection$que26[0];
          if (!(check_i.name_user !== "Admin")) {
            _context8.next = 99;
            break;
          }
          levels = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44];
          i = 0;
        case 91:
          if (!(i < levels.length)) {
            _context8.next = 99;
            break;
          }
          if (!(check_code.length < levels[i])) {
            _context8.next = 94;
            break;
          }
          return _context8.abrupt("break", 99);
        case 94:
          _context8.next = 96;
          return _connectDB["default"].execute("UPDATE users SET user_level = ? WHERE code = ?", [i + 1, invitecode]);
        case 96:
          i++;
          _context8.next = 91;
          break;
        case 99:
          sql4 = "INSERT INTO turn_over SET phone = ?, code = ?, invite = ?";
          _context8.next = 102;
          return _connectDB["default"].query(sql4, [phoneNumber, code, invitecode]);
        case 102:
          _context8.next = 104;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ?", [phoneNumber]);
        case 104:
          _yield$connection$que27 = _context8.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          rows = _yield$connection$que28[0];
          others = rows[0];
          accessToken = _jsonwebtoken["default"].sign({
            user: _objectSpread(_objectSpread({}, others), {}, {
              password: undefined,
              money: undefined,
              ip: undefined,
              veri: undefined,
              ip_address: undefined,
              status: undefined,
              time: undefined
            }),
            timeNow: timeNow
          }, process.env.JWT_ACCESS_TOKEN, {
            expiresIn: "1d"
          });
          _context8.next = 111;
          return _connectDB["default"].execute("UPDATE `users` SET `token` = ? WHERE `phone` = ?", [(0, _md["default"])(accessToken), phoneNumber]);
        case 111:
          // Insert into the claimed_rewards table for the new user
          claimedRewardSql = "\nINSERT INTO claimed_rewards (phone, reward_id, type, amount, status, time)\nVALUES (?, ?, ?, ?, ?, ?)\n";
          userRewardId = utils.generateUniqueNumberCodeByDigit(6); // Unique reward ID for the new user
          userRewardType = "WELCOME BONUS"; // Reward type for the new user
          userRewardStatus = "1"; // Define the status based on your business logic
          _context8.next = 117;
          return _connectDB["default"].execute(claimedRewardSql, [phoneNumber, userRewardId, userRewardType, bonus_money, userRewardStatus, Date.now() // Generates the timestamp in milliseconds
          ]);
        case 117:
          // Query to retrieve inviter's phone number and current money balance using the invite code
          inviterPhoneQuery = "SELECT phone, money FROM users WHERE code = ?";
          _context8.next = 120;
          return _connectDB["default"].query(inviterPhoneQuery, [invitecode]);
        case 120:
          _yield$connection$que29 = _context8.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          inviterData = _yield$connection$que30[0];
          if (!(inviterData.length > 0)) {
            _context8.next = 135;
            break;
          }
          inviterPhoneNumber = inviterData[0].phone;
          inviterCurrentMoney = parseFloat(inviterData[0].money); // Calculate the new balance for the inviter, using bonus_money
          newInviterMoney = inviterCurrentMoney + inv_bonus_money; // Update the inviter's money balance in the users table
          updateInviterMoneySql = "UPDATE users SET money = ? WHERE phone = ?";
          _context8.next = 130;
          return _connectDB["default"].execute(updateInviterMoneySql, [newInviterMoney, inviterPhoneNumber]);
        case 130:
          // Insert into the claimed_rewards table for the inviter
          inviterRewardId = utils.generateUniqueNumberCodeByDigit(6);
          inviterRewardType = "INVITER BONUS";
          inviterRewardStatus = "1";
          _context8.next = 135;
          return _connectDB["default"].execute(claimedRewardSql, [inviterPhoneNumber, inviterRewardId, inviterRewardType, inv_bonus_money,
          // Using the same bonus amount for inviter
          inviterRewardStatus, Date.now() // Generates the timestamp in milliseconds
          ]);
        case 135:
          return _context8.abrupt("return", res.status(200).json({
            message: "Registered successfully",
            status: true,
            token: accessToken,
            value: (0, _md["default"])(accessToken)
          }));
        case 138:
          _context8.prev = 138;
          _context8.t2 = _context8["catch"](0);
          console.log(_context8.t2);
          return _context8.abrupt("return", res.status(500).json({
            status: false,
            message: "Internal Server Error"
          }));
        case 142:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 138], [44, 55], [61, 76]]);
  }));
  return function register(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var sendOtpCode = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var schema, _schema$validate3, error, phone, now, timeEnd, otp, _yield$connection$que31, _yield$connection$que32, rows, response;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          schema = _joi["default"].object({
            phone: _joi["default"].string().length(10).required()
          });
          _schema$validate3 = schema.validate(req.body), error = _schema$validate3.error;
          if (!error) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            message: error.details[0].message,
            status: false
          }));
        case 5:
          phone = req.body.phone;
          now = new Date().getTime();
          timeEnd = (0, _moment["default"])().add(1, "minute").valueOf();
          otp = utils.generateUniqueNumberCodeByDigit(6);
          _context9.next = 11;
          return _connectDB["default"].query("SELECT * FROM users WHERE `phone` = ? AND veri = 1", [phone]);
        case 11:
          _yield$connection$que31 = _context9.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          rows = _yield$connection$que32[0];
          if (!_lodash["default"].isEmpty(rows)) {
            _context9.next = 16;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: "Otp sent successfully",
            status: false
          }));
        case 16:
          if (!(rows[0].time_otp - now <= 0)) {
            _context9.next = 27;
            break;
          }
          _context9.next = 19;
          return (0, _axios["default"])({
            method: "GET",
            url: "https://www.fast2sms.com/dev/bulkV2",
            params: {
              authorization: process.env.FAST2SMS_API,
              route: "q",
              message: "Your verification code is ".concat(otp),
              flash: 0,
              numbers: phone
            }
          });
        case 19:
          response = _context9.sent;
          if (!response.data["return"]) {
            _context9.next = 24;
            break;
          }
          _context9.next = 23;
          return _connectDB["default"].execute("UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ", [otp, timeEnd, phone]);
        case 23:
          return _context9.abrupt("return", res.status(200).json({
            message: "Otp sent successfully",
            status: true,
            timeStamp: now,
            timeEnd: timeEnd
          }));
        case 24:
          return _context9.abrupt("return", res.status(400).json({
            message: "Unable to send OTP code",
            status: false
          }));
        case 27:
          return _context9.abrupt("return", res.status(200).json({
            message: "You can send otp code again after 1 minute",
            status: false,
            timeEnd: rows[0].time_otp,
            timeStamp: now
          }));
        case 28:
          _context9.next = 35;
          break;
        case 30:
          _context9.prev = 30;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          console.log(_context9.t0.response.data);
          return _context9.abrupt("return", res.status(500).json({
            message: "Internal Server Error",
            status: false
          }));
        case 35:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 30]]);
  }));
  return function sendOtpCode(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var resetPasswordByOtpAndPhone = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var schema, _schema$validate4, error, _req$body3, phone, otp, newPassword, _yield$connection$que33, _yield$connection$que34, rows, user, now, hashedPassword;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          schema = _joi["default"].object({
            phone: _joi["default"].string().length(10).required(),
            otp: _joi["default"].number().integer().required(),
            password: _joi["default"].string().min(6).required()
          });
          _schema$validate4 = schema.validate(req.body), error = _schema$validate4.error;
          if (!error) {
            _context10.next = 5;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: error.details[0].message,
            status: false
          }));
        case 5:
          _req$body3 = req.body, phone = _req$body3.phone, otp = _req$body3.otp, newPassword = _req$body3.password;
          _context10.next = 8;
          return _connectDB["default"].query("SELECT `otp`, `time_otp` FROM users WHERE `phone` = ? AND veri = 1", [phone]);
        case 8:
          _yield$connection$que33 = _context10.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          rows = _yield$connection$que34[0];
          if (!_lodash["default"].isEmpty(rows)) {
            _context10.next = 13;
            break;
          }
          return _context10.abrupt("return", res.status(400).json({
            message: "Account does not exist",
            status: false,
            timeStamp: new Date().getTime()
          }));
        case 13:
          user = rows[0];
          now = new Date().getTime();
          if (!(user.time_otp - now > 0)) {
            _context10.next = 24;
            break;
          }
          if (!(parseInt(user.otp) === otp)) {
            _context10.next = 23;
            break;
          }
          _context10.next = 19;
          return _bcrypt["default"].hash(newPassword, saltRounds);
        case 19:
          hashedPassword = _context10.sent;
          _context10.next = 22;
          return _connectDB["default"].execute("UPDATE users SET password = ?, plain_password = ? WHERE phone = ? ", [hashedPassword, newPassword, phone]);
        case 22:
          return _context10.abrupt("return", res.status(200).json({
            message: "Change password successfully",
            status: true,
            timeStamp: now
          }));
        case 23:
          return _context10.abrupt("return", res.status(400).json({
            message: "OTP code is incorrect",
            status: false,
            timeStamp: now
          }));
        case 24:
          return _context10.abrupt("return", res.status(400).json({
            message: "OTP code has expired",
            status: false,
            timeStamp: now
          }));
        case 27:
          _context10.prev = 27;
          _context10.t0 = _context10["catch"](0);
          console.log(_context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            message: "Internal Server Error",
            status: false
          }));
        case 31:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 27]]);
  }));
  return function resetPasswordByOtpAndPhone(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var resetPasswordByPassword = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var auth, schema, _schema$validate5, error, _req$body4, password, newPassWord, RePassWord, _yield$connection$que35, _yield$connection$que36, users, user, now, validPassword, hashedPassword, _yield$connection$exe, _yield$connection$exe2, updateResult;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          console.log("✅ API Hit: resetPasswordByPassword");
          auth = req.cookies.auth;
          console.log("🔹 Auth Token:", auth);
          schema = _joi["default"].object({
            password: _joi["default"].string().min(6).required(),
            newPassWord: _joi["default"].string().min(6).required(),
            RePassWord: _joi["default"].string().min(6).required()
          });
          _schema$validate5 = schema.validate(req.body), error = _schema$validate5.error;
          if (!error) {
            _context11.next = 9;
            break;
          }
          console.log("❌ Validation Error:", error.details[0].message);
          return _context11.abrupt("return", res.status(200).json({
            message: error.details[0].message,
            status: false
          }));
        case 9:
          _req$body4 = req.body, password = _req$body4.password, newPassWord = _req$body4.newPassWord, RePassWord = _req$body4.RePassWord;
          console.log("🔹 Old Password:", password);
          console.log("🔹 New Password:", newPassWord);
          console.log("🔹 Re-entered Password:", RePassWord);
          if (!(newPassWord !== RePassWord)) {
            _context11.next = 16;
            break;
          }
          console.log("❌ Error: Passwords do not match");
          return _context11.abrupt("return", res.status(200).json({
            message: "Password does not match",
            status: false
          }));
        case 16:
          console.log("🔍 Checking if user exists...");
          _context11.next = 19;
          return _connectDB["default"].query("SELECT * FROM users WHERE token = ?", [auth]);
        case 19:
          _yield$connection$que35 = _context11.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          users = _yield$connection$que36[0];
          console.log("🔹 User Found:", users.length > 0 ? "Yes" : "No");
          if (!_lodash["default"].isEmpty(users)) {
            _context11.next = 26;
            break;
          }
          console.log("❌ Error: Account does not exist");
          return _context11.abrupt("return", res.status(200).json({
            message: "Account does not exist",
            status: false,
            timeStamp: new Date().getTime()
          }));
        case 26:
          user = users[0];
          now = new Date().getTime();
          console.log("🔍 Verifying old password...");
          _context11.next = 31;
          return _bcrypt["default"].compare(password, user.password);
        case 31:
          validPassword = _context11.sent;
          console.log("🔹 Old Password Match:", validPassword ? "Yes" : "No");
          if (validPassword) {
            _context11.next = 36;
            break;
          }
          console.log("❌ Error: Incorrect password");
          return _context11.abrupt("return", res.status(200).json({
            message: "Incorrect password",
            status: false,
            timeStamp: now
          }));
        case 36:
          console.log("🔒 Hashing new password...");
          _context11.next = 39;
          return _bcrypt["default"].hash(newPassWord, 10);
        case 39:
          hashedPassword = _context11.sent;
          console.log("🔹 Hashed Password Generated");
          console.log("🔄 Updating password in database...");
          _context11.next = 44;
          return _connectDB["default"].execute("UPDATE users SET password = ?, plain_password = ? WHERE phone = ?", [hashedPassword, newPassWord, user.phone]);
        case 44:
          _yield$connection$exe = _context11.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          updateResult = _yield$connection$exe2[0];
          console.log("🔹 Update Result:", updateResult);
          if (!(updateResult.affectedRows === 0)) {
            _context11.next = 51;
            break;
          }
          console.log("❌ Error: Password update failed in database");
          return _context11.abrupt("return", res.status(500).json({
            message: "Password update failed",
            status: false,
            timeStamp: now
          }));
        case 51:
          console.log("✅ Password updated successfully!");
          return _context11.abrupt("return", res.status(200).json({
            message: "Change password successfully",
            status: true,
            timeStamp: now
          }));
        case 55:
          _context11.prev = 55;
          _context11.t0 = _context11["catch"](0);
          console.log("❌ Internal Server Error:", _context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            message: "Internal Server Error",
            status: false
          }));
        case 59:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 55]]);
  }));
  return function resetPasswordByPassword(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var updateUsernameAPI = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body5, schema, _schema$validate6, error, auth, nickname, _yield$connection$que37, _yield$connection$que38, rows;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          schema = _joi["default"].object({
            nickname: _joi["default"].string().required()
          });
          _schema$validate6 = schema.validate(req.body), error = _schema$validate6.error;
          if (!error) {
            _context12.next = 5;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: error.details[0].message,
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          nickname = _lodash["default"].trim(((_req$body5 = req.body) === null || _req$body5 === void 0 ? void 0 : _req$body5.nickname) || "");
          _context12.next = 9;
          return _connectDB["default"].query("SELECT * FROM users WHERE token = ?", [auth]);
        case 9:
          _yield$connection$que37 = _context12.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          rows = _yield$connection$que38[0];
          if (!_lodash["default"].isEmpty(rows)) {
            _context12.next = 14;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Account does not exist",
            status: false
          }));
        case 14:
          _context12.next = 16;
          return _connectDB["default"].execute("UPDATE users SET name_user = ? WHERE token = ?", [nickname, auth]);
        case 16:
          return _context12.abrupt("return", res.status(200).json({
            message: "Nickname updated successfully",
            status: true
          }));
        case 19:
          _context12.prev = 19;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", res.status(500).json({
            message: "Internal Server Error",
            status: false
          }));
        case 22:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 19]]);
  }));
  return function updateUsernameAPI(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var updateAvatarAPI = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$body6, schema, _schema$validate7, error, auth, avatar, _yield$connection$que39, _yield$connection$que40, rows;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          schema = _joi["default"].object({
            avatar: _joi["default"].string().required()
          });
          _schema$validate7 = schema.validate(req.body), error = _schema$validate7.error;
          if (!error) {
            _context13.next = 5;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: error.details[0].message,
            status: false
          }));
        case 5:
          auth = req.cookies.auth;
          avatar = _lodash["default"].trim(((_req$body6 = req.body) === null || _req$body6 === void 0 ? void 0 : _req$body6.avatar) || "");
          _context13.next = 9;
          return _connectDB["default"].query("SELECT * FROM users WHERE token = ?", [auth]);
        case 9:
          _yield$connection$que39 = _context13.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          rows = _yield$connection$que40[0];
          if (!_lodash["default"].isEmpty(rows)) {
            _context13.next = 14;
            break;
          }
          return _context13.abrupt("return", res.status(400).json({
            message: "Account does not exist",
            status: false
          }));
        case 14:
          _context13.next = 16;
          return _connectDB["default"].execute("UPDATE users SET avatar = ? WHERE token = ?", [avatar, auth]);
        case 16:
          return _context13.abrupt("return", res.status(200).json({
            message: "Change avatar successfully",
            status: true
          }));
        case 19:
          _context13.prev = 19;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", res.status(500).json({
            message: "Internal Server Error",
            status: false
          }));
        case 22:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 19]]);
  }));
  return function updateAvatarAPI(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var utils = {
  generateUniqueNumberCodeByDigit: function generateUniqueNumberCodeByDigit(digit) {
    var timestamp = new Date().getTime().toString();
    var randomNum = _lodash["default"].random(1e12).toString();
    var combined = timestamp + randomNum;
    return _lodash["default"].padStart(combined.slice(-digit), digit, "0");
  },
  getIpAddress: function getIpAddress(req) {
    var ipAddress = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (ipAddress.substr(0, 7) == "::ffff:") {
      ipAddress = ipAddress.substr(7);
    }
    return ipAddress;
  }
};
var accountController = {
  login: login,
  register: register,
  loginPage: loginPage,
  adminloginPage: adminloginPage,
  registerPage: registerPage,
  forgotPage: forgotPage,
  keFuMenu: keFuMenu,
  sendOtpCode: sendOtpCode,
  resetPasswordByOtpAndPhone: resetPasswordByOtpAndPhone,
  forgotResetPage: forgotResetPage,
  updateUsernameAPI: updateUsernameAPI,
  updateAvatarAPI: updateAvatarAPI,
  resetPasswordByPassword: resetPasswordByPassword
};
var _default = exports["default"] = accountController;