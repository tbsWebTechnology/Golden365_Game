"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _md = _interopRequireDefault(require("md5"));
var _request = _interopRequireDefault(require("request"));
var _axios = _interopRequireDefault(require("axios"));
var _reward_types = require("../constants/reward_types.js");
var _games = require("../helpers/games.js");
var _excluded = ["id", "password", "ip", "veri", "ip_address", "status", "time", "token"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
var randomNumber = function randomNumber(min, max) {
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
};
var verifyCode = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var auth, now, timeEnd, otp, user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          auth = req.cookies.auth;
          now = new Date().getTime();
          timeEnd = +new Date() + 1000 * (60 * 2 + 0) + 500;
          otp = randomNumber(100000, 999999);
          _context2.next = 6;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ? ", [auth]);
        case 6:
          conswit[rows] = _context2.sent;
          if (rows) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            message: "Account does not exist",
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          user = rows[0];
          if (!(user.time_otp - now <= 0)) {
            _context2.next = 14;
            break;
          }
          (0, _request["default"])("http://47.243.168.18:9090/sms/batch/v2?appkey=NFJKdK&appsecret=brwkTw&phone=84".concat(user.phone, "&msg=Your verification code is ").concat(otp, "&extend=").concat(now), /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(error, response, body) {
              var data;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    data = JSON.parse(body);
                    if (!(data.code == "00000")) {
                      _context.next = 5;
                      break;
                    }
                    _context.next = 4;
                    return _connectDB["default"].execute("UPDATE users SET otp = ?, time_otp = ? WHERE phone = ? ", [otp, timeEnd, user.phone]);
                  case 4:
                    return _context.abrupt("return", res.status(200).json({
                      message: "Submitted successfully",
                      status: true,
                      timeStamp: timeNow,
                      timeEnd: timeEnd
                    }));
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3, _x4, _x5) {
              return _ref2.apply(this, arguments);
            };
          }());
          _context2.next = 15;
          break;
        case 14:
          return _context2.abrupt("return", res.status(200).json({
            message: "Send SMS regularly.",
            status: false,
            timeStamp: timeNow
          }));
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function verifyCode(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var aviator = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var auth;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          auth = req.cookies.auth;
          res.redirect("https://jetx.asia/theninja/src/api/userapi.php?action=loginandregisterbyauth&token=".concat(auth));
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function aviator(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
var userInfo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var auth, _yield$connection$que, _yield$connection$que2, rows, _yield$connection$que3, _yield$connection$que4, recharge, totalRecharge, isFirstRecharge, _yield$connection$que5, _yield$connection$que6, withdraw, totalWithdraw, _rows$, id, password, ip, veri, ip_address, status, time, token, others;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context4.next = 5;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ?", [auth]);
        case 5:
          _yield$connection$que = _context4.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          if (!(!rows || rows.length === 0)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context4.next = 12;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE `phone` = ? AND status = 1", [rows[0].phone]);
        case 12:
          _yield$connection$que3 = _context4.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          recharge = _yield$connection$que4[0];
          totalRecharge = 0;
          recharge.forEach(function (data) {
            totalRecharge += data.money;
          });

          // Check if it's the user's first recharge
          isFirstRecharge = recharge.length === 0;
          _context4.next = 20;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE `phone` = ? AND status = 1", [rows[0].phone]);
        case 20:
          _yield$connection$que5 = _context4.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          withdraw = _yield$connection$que6[0];
          totalWithdraw = 0;
          withdraw.forEach(function (data) {
            totalWithdraw += data.money;
          });
          _rows$ = rows[0], id = _rows$.id, password = _rows$.password, ip = _rows$.ip, veri = _rows$.veri, ip_address = _rows$.ip_address, status = _rows$.status, time = _rows$.time, token = _rows$.token, others = _objectWithoutProperties(_rows$, _excluded);
          return _context4.abrupt("return", res.status(200).json({
            message: "Success",
            status: true,
            data: {
              code: others.code,
              id_user: others.id_user,
              name_user: others.name_user,
              phone_user: others.phone,
              money_user: others.money,
              bonus_money: others.bonus_money,
              third_party_money: others.third_party_money,
              safe_bonus: others.safe_bonus,
              avatar: others.avatar,
              level: others.level,
              total_withdraw: totalWithdraw,
              total_recharge: totalRecharge,
              vip_level: others.vip_level,
              isFirstRecharge: isFirstRecharge // New flag to indicate the first recharge
            },
            totalRecharge: totalRecharge,
            totalWithdraw: totalWithdraw,
            timeStamp: timeNow
          }));
        case 27:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function userInfo(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
var changeUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var auth, name, type, _yield$connection$que7, _yield$connection$que8, rows;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          auth = req.cookies.auth;
          name = req.body.name;
          type = req.body.type;
          _context5.next = 5;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ? ", [auth]);
        case 5:
          _yield$connection$que7 = _context5.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          rows = _yield$connection$que8[0];
          if (!(!rows || !type || !name)) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 10:
          _context5.t0 = type;
          _context5.next = _context5.t0 === "editname" ? 13 : 17;
          break;
        case 13:
          _context5.next = 15;
          return _connectDB["default"].query("UPDATE users SET name_user = ? WHERE `token` = ? ", [name, auth]);
        case 15:
          return _context5.abrupt("return", res.status(200).json({
            message: "Username modification successful",
            status: true,
            timeStamp: timeNow
          }));
        case 17:
          return _context5.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function changeUser(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();
var changePassword = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var auth, password, newPassWord, _yield$connection$que9, _yield$connection$que10, rows;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          auth = req.cookies.auth;
          password = req.body.password;
          newPassWord = req.body.newPassWord; // let otp = req.body.otp;
          if (!(!password || !newPassWord)) {
            _context6.next = 5;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context6.next = 7;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ? AND `password` = ? ", [auth, (0, _md["default"])(password)]);
        case 7:
          _yield$connection$que9 = _context6.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          rows = _yield$connection$que10[0];
          if (!(rows.length == 0)) {
            _context6.next = 12;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            message: "Incorrect password",
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          _context6.next = 14;
          return _connectDB["default"].query("UPDATE users SET otp = ?, password = ?, plain_password = ? WHERE `token` = ? ", [randomNumber(100000, 999999), (0, _md["default"])(newPassWord), newPassWord, auth]);
        case 14:
          return _context6.abrupt("return", res.status(200).json({
            message: "Password modification successful",
            status: true,
            timeStamp: timeNow
          }));
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function changePassword(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();
var checkInHandling = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var auth, data, _yield$connection$que11, _yield$connection$que12, rows, _yield$connection$que13, _yield$connection$que14, point_list, _yield$connection$que15, _yield$connection$que16, point_lists, check, _point_list, get, _yield$connection$que17, _yield$connection$que18, _point_lists, _check, _point_list2, _get, _yield$connection$que19, _yield$connection$que20, _point_lists2, _check2, _point_list3, _get2, _yield$connection$que21, _yield$connection$que22, _point_lists3, _check3, _point_list4, _get3, _yield$connection$que23, _yield$connection$que24, _point_lists4, _check4, _point_list5, _get4, _yield$connection$que25, _yield$connection$que26, _point_lists5, _check5, _point_list6, _get5, _yield$connection$que27, _yield$connection$que28, _point_lists6, _check6, _point_list7, _get6;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          auth = req.cookies.auth;
          data = req.body.data;
          if (auth) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context7.next = 6;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ? ", [auth]);
        case 6:
          _yield$connection$que11 = _context7.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          rows = _yield$connection$que12[0];
          if (rows) {
            _context7.next = 11;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          if (data) {
            _context7.next = 18;
            break;
          }
          _context7.next = 14;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 14:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          point_list = _yield$connection$que14[0];
          return _context7.abrupt("return", res.status(200).json({
            message: "No More Data",
            datas: point_list,
            status: true,
            timeStamp: timeNow
          }));
        case 18:
          if (!data) {
            _context7.next = 180;
            break;
          }
          if (!(data == 1)) {
            _context7.next = 42;
            break;
          }
          _context7.next = 22;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 22:
          _yield$connection$que15 = _context7.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          point_lists = _yield$connection$que16[0];
          check = rows[0].money;
          _point_list = point_lists[0];
          get = 300;
          if (!(check >= data && _point_list.total1 != 0)) {
            _context7.next = 36;
            break;
          }
          _context7.next = 31;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [_point_list.total1, rows[0].phone]);
        case 31:
          _context7.next = 33;
          return _connectDB["default"].query("UPDATE point_list SET total1 = ? WHERE phone = ? ", [0, rows[0].phone]);
        case 33:
          return _context7.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list.total1, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 36:
          if (!(check < get && _point_list.total1 != 0)) {
            _context7.next = 40;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Please Recharge ₹ 300 to claim gift.",
            status: false,
            timeStamp: timeNow
          }));
        case 40:
          if (!(_point_list.total1 == 0)) {
            _context7.next = 42;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "You have already received this gift",
            status: false,
            timeStamp: timeNow
          }));
        case 42:
          if (!(data == 2)) {
            _context7.next = 65;
            break;
          }
          _context7.next = 45;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 45:
          _yield$connection$que17 = _context7.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          _point_lists = _yield$connection$que18[0];
          _check = rows[0].money;
          _point_list2 = _point_lists[0];
          _get = 3000;
          if (!(_check >= _get && _point_list2.total2 != 0)) {
            _context7.next = 59;
            break;
          }
          _context7.next = 54;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [_point_list2.total2, rows[0].phone]);
        case 54:
          _context7.next = 56;
          return _connectDB["default"].query("UPDATE point_list SET total2 = ? WHERE phone = ? ", [0, rows[0].phone]);
        case 56:
          return _context7.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list2.total2, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 59:
          if (!(_check < _get && _point_list2.total2 != 0)) {
            _context7.next = 63;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Please Recharge ₹ 3000 to claim gift.",
            status: false,
            timeStamp: timeNow
          }));
        case 63:
          if (!(_point_list2.total2 == 0)) {
            _context7.next = 65;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "You have already received this gift",
            status: false,
            timeStamp: timeNow
          }));
        case 65:
          if (!(data == 3)) {
            _context7.next = 88;
            break;
          }
          _context7.next = 68;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 68:
          _yield$connection$que19 = _context7.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          _point_lists2 = _yield$connection$que20[0];
          _check2 = rows[0].money;
          _point_list3 = _point_lists2[0];
          _get2 = 6000;
          if (!(_check2 >= _get2 && _point_list3.total3 != 0)) {
            _context7.next = 82;
            break;
          }
          _context7.next = 77;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [_point_list3.total3, rows[0].phone]);
        case 77:
          _context7.next = 79;
          return _connectDB["default"].query("UPDATE point_list SET total3 = ? WHERE phone = ? ", [0, rows[0].phone]);
        case 79:
          return _context7.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list3.total3, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 82:
          if (!(_check2 < _get2 && _point_list3.total3 != 0)) {
            _context7.next = 86;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Please Recharge ₹ 6000 to claim gift.",
            status: false,
            timeStamp: timeNow
          }));
        case 86:
          if (!(_point_list3.total3 == 0)) {
            _context7.next = 88;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "You have already received this gift",
            status: false,
            timeStamp: timeNow
          }));
        case 88:
          if (!(data == 4)) {
            _context7.next = 111;
            break;
          }
          _context7.next = 91;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 91:
          _yield$connection$que21 = _context7.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          _point_lists3 = _yield$connection$que22[0];
          _check3 = rows[0].money;
          _point_list4 = _point_lists3[0];
          _get3 = 12000;
          if (!(_check3 >= _get3 && _point_list4.total4 != 0)) {
            _context7.next = 105;
            break;
          }
          _context7.next = 100;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [_point_list4.total4, rows[0].phone]);
        case 100:
          _context7.next = 102;
          return _connectDB["default"].query("UPDATE point_list SET total4 = ? WHERE phone = ? ", [0, rows[0].phone]);
        case 102:
          return _context7.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list4.total4, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 105:
          if (!(_check3 < _get3 && _point_list4.total4 != 0)) {
            _context7.next = 109;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Please Recharge ₹ 12000 to claim gift.",
            status: false,
            timeStamp: timeNow
          }));
        case 109:
          if (!(_point_list4.total4 == 0)) {
            _context7.next = 111;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "You have already received this gift",
            status: false,
            timeStamp: timeNow
          }));
        case 111:
          if (!(data == 5)) {
            _context7.next = 134;
            break;
          }
          _context7.next = 114;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 114:
          _yield$connection$que23 = _context7.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          _point_lists4 = _yield$connection$que24[0];
          _check4 = rows[0].money;
          _point_list5 = _point_lists4[0];
          _get4 = 28000;
          if (!(_check4 >= _get4 && _point_list5.total5 != 0)) {
            _context7.next = 128;
            break;
          }
          _context7.next = 123;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [_point_list5.total5, rows[0].phone]);
        case 123:
          _context7.next = 125;
          return _connectDB["default"].query("UPDATE point_list SET total5 = ? WHERE phone = ? ", [0, rows[0].phone]);
        case 125:
          return _context7.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list5.total5, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 128:
          if (!(_check4 < _get4 && _point_list5.total5 != 0)) {
            _context7.next = 132;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Please Recharge ₹ 28000 to claim gift.",
            status: false,
            timeStamp: timeNow
          }));
        case 132:
          if (!(_point_list5.total5 == 0)) {
            _context7.next = 134;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "You have already received this gift",
            status: false,
            timeStamp: timeNow
          }));
        case 134:
          if (!(data == 6)) {
            _context7.next = 157;
            break;
          }
          _context7.next = 137;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 137:
          _yield$connection$que25 = _context7.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          _point_lists5 = _yield$connection$que26[0];
          _check5 = rows[0].money;
          _point_list6 = _point_lists5[0];
          _get5 = 100000;
          if (!(_check5 >= _get5 && _point_list6.total6 != 0)) {
            _context7.next = 151;
            break;
          }
          _context7.next = 146;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [_point_list6.total6, rows[0].phone]);
        case 146:
          _context7.next = 148;
          return _connectDB["default"].query("UPDATE point_list SET total6 = ? WHERE phone = ? ", [0, rows[0].phone]);
        case 148:
          return _context7.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list6.total6, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 151:
          if (!(_check5 < _get5 && _point_list6.total6 != 0)) {
            _context7.next = 155;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Please Recharge ₹ 100000 to claim gift.",
            status: false,
            timeStamp: timeNow
          }));
        case 155:
          if (!(_point_list6.total6 == 0)) {
            _context7.next = 157;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "You have already received this gift",
            status: false,
            timeStamp: timeNow
          }));
        case 157:
          if (!(data == 7)) {
            _context7.next = 180;
            break;
          }
          _context7.next = 160;
          return _connectDB["default"].query("SELECT * FROM point_list WHERE `phone` = ? ", [rows[0].phone]);
        case 160:
          _yield$connection$que27 = _context7.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          _point_lists6 = _yield$connection$que28[0];
          _check6 = rows[0].money;
          _point_list7 = _point_lists6[0];
          _get6 = 200000;
          if (!(_check6 >= _get6 && _point_list7.total7 != 0)) {
            _context7.next = 174;
            break;
          }
          _context7.next = 169;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ? ", [_point_list7.total7, rows[0].phone]);
        case 169:
          _context7.next = 171;
          return _connectDB["default"].query("UPDATE point_list SET total7 = ? WHERE phone = ? ", [0, rows[0].phone]);
        case 171:
          return _context7.abrupt("return", res.status(200).json({
            message: "You just received \u20B9 ".concat(_point_list7.total7, ".00"),
            status: true,
            timeStamp: timeNow
          }));
        case 174:
          if (!(_check6 < _get6 && _point_list7.total7 != 0)) {
            _context7.next = 178;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "Please Recharge ₹200000 to claim gift.",
            status: false,
            timeStamp: timeNow
          }));
        case 178:
          if (!(_point_list7.total7 == 0)) {
            _context7.next = 180;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: "You have already received this gift",
            status: false,
            timeStamp: timeNow
          }));
        case 180:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function checkInHandling(_x14, _x15) {
    return _ref7.apply(this, arguments);
  };
}();
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
var promotion = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var auth, _yield$connection$que29, _yield$connection$que30, user, _yield$connection$que31, _yield$connection$que32, level, userInfo, _yield$connection$que33, _yield$connection$que34, f1s, f1_today, i, f1_time, check, f_all_today, _i, f1_code, _f1_time, check_f1, _yield$connection$que35, _yield$connection$que36, f2s, _i2, f2_code, f2_time, check_f2, _yield$connection$que37, _yield$connection$que38, f3s, _i3, f3_code, f3_time, check_f3, _yield$connection$que39, _yield$connection$que40, f4s, _i4, f4_code, f4_time, check_f4, f2, _i5, _f1_code, _yield$connection$que41, _yield$connection$que42, _f2s, f3, _i6, _f1_code2, _yield$connection$que43, _yield$connection$que44, _f2s2, _i7, _f2_code, _yield$connection$que45, _yield$connection$que46, _f3s, f4, _i8, _f1_code3, _yield$connection$que47, _yield$connection$que48, _f2s3, _i9, _f2_code2, _yield$connection$que49, _yield$connection$que50, _f3s2, _i10, _f3_code, _yield$connection$que51, _yield$connection$que52, _f4s, selectedData, fetchInvitesByCode, _fetchInvitesByCode, _iterator, _step, initialInfoF1, rosesF1, rosesAll, rosesAdd;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _fetchInvitesByCode = function _fetchInvitesByCode3() {
            _fetchInvitesByCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(code) {
              var depth,
                _yield$connection$que53,
                _yield$connection$que54,
                inviteData,
                _iterator2,
                _step2,
                invite,
                _args8 = arguments;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    depth = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : 1;
                    if (!(depth > 6)) {
                      _context8.next = 3;
                      break;
                    }
                    return _context8.abrupt("return");
                  case 3:
                    _context8.next = 5;
                    return _connectDB["default"].query("SELECT `id_user`,`name_user`,`phone`, `code`, `invite`, `rank`, `user_level`, `total_money` FROM users WHERE `invite` = ?", [code]);
                  case 5:
                    _yield$connection$que53 = _context8.sent;
                    _yield$connection$que54 = _slicedToArray(_yield$connection$que53, 1);
                    inviteData = _yield$connection$que54[0];
                    if (!(inviteData.length > 0)) {
                      _context8.next = 27;
                      break;
                    }
                    _iterator2 = _createForOfIteratorHelper(inviteData);
                    _context8.prev = 10;
                    _iterator2.s();
                  case 12:
                    if ((_step2 = _iterator2.n()).done) {
                      _context8.next = 19;
                      break;
                    }
                    invite = _step2.value;
                    selectedData.push(invite);
                    _context8.next = 17;
                    return fetchInvitesByCode(invite.code, depth + 1);
                  case 17:
                    _context8.next = 12;
                    break;
                  case 19:
                    _context8.next = 24;
                    break;
                  case 21:
                    _context8.prev = 21;
                    _context8.t0 = _context8["catch"](10);
                    _iterator2.e(_context8.t0);
                  case 24:
                    _context8.prev = 24;
                    _iterator2.f();
                    return _context8.finish(24);
                  case 27:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, null, [[10, 21, 24, 27]]);
            }));
            return _fetchInvitesByCode.apply(this, arguments);
          };
          fetchInvitesByCode = function _fetchInvitesByCode2(_x18) {
            return _fetchInvitesByCode.apply(this, arguments);
          };
          auth = req.cookies.auth;
          if (auth) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context9.next = 7;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite`, `roses_f`, `roses_f1`, `roses_today` FROM users WHERE `token` = ? ", [auth]);
        case 7:
          _yield$connection$que29 = _context9.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          user = _yield$connection$que30[0];
          _context9.next = 12;
          return _connectDB["default"].query("SELECT * FROM level");
        case 12:
          _yield$connection$que31 = _context9.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          level = _yield$connection$que32[0];
          if (user) {
            _context9.next = 17;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 17:
          userInfo = user[0]; // Directly referred level-1 users
          _context9.next = 20;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ", [userInfo.code]);
        case 20:
          _yield$connection$que33 = _context9.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          f1s = _yield$connection$que34[0];
          // Directly referred users today
          f1_today = 0;
          for (i = 0; i < f1s.length; i++) {
            f1_time = f1s[i].time;
            check = timerJoin(f1_time) == timerJoin() ? true : false;
            if (check) {
              f1_today += 1;
            }
          }

          // All direct referrals today
          f_all_today = 0;
          _i = 0;
        case 27:
          if (!(_i < f1s.length)) {
            _context9.next = 69;
            break;
          }
          f1_code = f1s[_i].code;
          _f1_time = f1s[_i].time;
          check_f1 = timerJoin(_f1_time) == timerJoin() ? true : false;
          if (check_f1) f_all_today += 1;

          // Total level-2 referrals today
          _context9.next = 34;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ", [f1_code]);
        case 34:
          _yield$connection$que35 = _context9.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          f2s = _yield$connection$que36[0];
          _i2 = 0;
        case 38:
          if (!(_i2 < f2s.length)) {
            _context9.next = 66;
            break;
          }
          f2_code = f2s[_i2].code;
          f2_time = f2s[_i2].time;
          check_f2 = timerJoin(f2_time) == timerJoin() ? true : false;
          if (check_f2) f_all_today += 1;

          // Total level-3 referrals today
          _context9.next = 45;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ", [f2_code]);
        case 45:
          _yield$connection$que37 = _context9.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          f3s = _yield$connection$que38[0];
          _i3 = 0;
        case 49:
          if (!(_i3 < f3s.length)) {
            _context9.next = 63;
            break;
          }
          f3_code = f3s[_i3].code;
          f3_time = f3s[_i3].time;
          check_f3 = timerJoin(f3_time) == timerJoin() ? true : false;
          if (check_f3) f_all_today += 1;

          // Total level-4 referrals today
          _context9.next = 56;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite`, `time` FROM users WHERE `invite` = ? ", [f3_code]);
        case 56:
          _yield$connection$que39 = _context9.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          f4s = _yield$connection$que40[0];
          for (_i4 = 0; _i4 < f4s.length; _i4++) {
            f4_code = f4s[_i4].code;
            f4_time = f4s[_i4].time;
            check_f4 = timerJoin(f4_time) == timerJoin() ? true : false;
            if (check_f4) f_all_today += 1;
          }
        case 60:
          _i3++;
          _context9.next = 49;
          break;
        case 63:
          _i2++;
          _context9.next = 38;
          break;
        case 66:
          _i++;
          _context9.next = 27;
          break;
        case 69:
          // Total level-2 referrals
          f2 = 0;
          _i5 = 0;
        case 71:
          if (!(_i5 < f1s.length)) {
            _context9.next = 82;
            break;
          }
          _f1_code = f1s[_i5].code;
          _context9.next = 75;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ", [_f1_code]);
        case 75:
          _yield$connection$que41 = _context9.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 1);
          _f2s = _yield$connection$que42[0];
          f2 += _f2s.length;
        case 79:
          _i5++;
          _context9.next = 71;
          break;
        case 82:
          // Total level-3 referrals
          f3 = 0;
          _i6 = 0;
        case 84:
          if (!(_i6 < f1s.length)) {
            _context9.next = 106;
            break;
          }
          _f1_code2 = f1s[_i6].code;
          _context9.next = 88;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ", [_f1_code2]);
        case 88:
          _yield$connection$que43 = _context9.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 1);
          _f2s2 = _yield$connection$que44[0];
          _i7 = 0;
        case 92:
          if (!(_i7 < _f2s2.length)) {
            _context9.next = 103;
            break;
          }
          _f2_code = _f2s2[_i7].code;
          _context9.next = 96;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ", [_f2_code]);
        case 96:
          _yield$connection$que45 = _context9.sent;
          _yield$connection$que46 = _slicedToArray(_yield$connection$que45, 1);
          _f3s = _yield$connection$que46[0];
          if (_f3s.length > 0) f3 += _f3s.length;
        case 100:
          _i7++;
          _context9.next = 92;
          break;
        case 103:
          _i6++;
          _context9.next = 84;
          break;
        case 106:
          // Total level-4 referrals
          f4 = 0;
          _i8 = 0;
        case 108:
          if (!(_i8 < f1s.length)) {
            _context9.next = 141;
            break;
          }
          _f1_code3 = f1s[_i8].code;
          _context9.next = 112;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ", [_f1_code3]);
        case 112:
          _yield$connection$que47 = _context9.sent;
          _yield$connection$que48 = _slicedToArray(_yield$connection$que47, 1);
          _f2s3 = _yield$connection$que48[0];
          _i9 = 0;
        case 116:
          if (!(_i9 < _f2s3.length)) {
            _context9.next = 138;
            break;
          }
          _f2_code2 = _f2s3[_i9].code;
          _context9.next = 120;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ", [_f2_code2]);
        case 120:
          _yield$connection$que49 = _context9.sent;
          _yield$connection$que50 = _slicedToArray(_yield$connection$que49, 1);
          _f3s2 = _yield$connection$que50[0];
          _i10 = 0;
        case 124:
          if (!(_i10 < _f3s2.length)) {
            _context9.next = 135;
            break;
          }
          _f3_code = _f3s2[_i10].code;
          _context9.next = 128;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `invite` = ? ", [_f3_code]);
        case 128:
          _yield$connection$que51 = _context9.sent;
          _yield$connection$que52 = _slicedToArray(_yield$connection$que51, 1);
          _f4s = _yield$connection$que52[0];
          if (_f4s.length > 0) f4 += _f4s.length;
        case 132:
          _i10++;
          _context9.next = 124;
          break;
        case 135:
          _i9++;
          _context9.next = 116;
          break;
        case 138:
          _i8++;
          _context9.next = 108;
          break;
        case 141:
          selectedData = [];
          if (!(f1s.length > 0)) {
            _context9.next = 161;
            break;
          }
          _iterator = _createForOfIteratorHelper(f1s);
          _context9.prev = 144;
          _iterator.s();
        case 146:
          if ((_step = _iterator.n()).done) {
            _context9.next = 153;
            break;
          }
          initialInfoF1 = _step.value;
          selectedData.push(initialInfoF1);
          _context9.next = 151;
          return fetchInvitesByCode(initialInfoF1.code);
        case 151:
          _context9.next = 146;
          break;
        case 153:
          _context9.next = 158;
          break;
        case 155:
          _context9.prev = 155;
          _context9.t0 = _context9["catch"](144);
          _iterator.e(_context9.t0);
        case 158:
          _context9.prev = 158;
          _iterator.f();
          return _context9.finish(158);
        case 161:
          rosesF1 = parseFloat(userInfo.roses_f);
          rosesAll = parseFloat(userInfo.roses_f1);
          rosesAdd = rosesF1 + rosesAll;
          return _context9.abrupt("return", res.status(200).json({
            message: "Receive success",
            level: level,
            info: user,
            status: true,
            invite: {
              f1: f1s.length,
              total_f: selectedData.length,
              f1_today: f1_today,
              f_all_today: f_all_today,
              roses_f1: userInfo.roses_f1,
              roses_f: userInfo.roses_f,
              roses_all: rosesAdd,
              roses_today: userInfo.roses_today
            },
            timeStamp: timeNow
          }));
        case 165:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[144, 155, 158, 161]]);
  }));
  return function promotion(_x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}();
var myTeam = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var auth, _yield$connection$que55, _yield$connection$que56, user, _yield$connection$que57, _yield$connection$que58, level;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context10.next = 3;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context10.next = 5;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 5:
          _yield$connection$que55 = _context10.sent;
          _yield$connection$que56 = _slicedToArray(_yield$connection$que55, 1);
          user = _yield$connection$que56[0];
          _context10.next = 10;
          return _connectDB["default"].query("SELECT * FROM level");
        case 10:
          _yield$connection$que57 = _context10.sent;
          _yield$connection$que58 = _slicedToArray(_yield$connection$que57, 1);
          level = _yield$connection$que58[0];
          if (user) {
            _context10.next = 15;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 15:
          return _context10.abrupt("return", res.status(200).json({
            message: "Receive success",
            level: level,
            info: user,
            status: true,
            timeStamp: timeNow
          }));
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function myTeam(_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();
var listMyTeam = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var auth, _yield$connection$que59, _yield$connection$que60, user, userInfo, _yield$connection$que61, _yield$connection$que62, f1, _yield$connection$que63, _yield$connection$que64, mem, _yield$connection$que65, _yield$connection$que66, total_roses, selectedData, fetchUserDataByCode, _fetchUserDataByCode, newMem;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _fetchUserDataByCode = function _fetchUserDataByCode3() {
            _fetchUserDataByCode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(code) {
              var depth,
                _yield$connection$que67,
                _yield$connection$que68,
                userData,
                _iterator3,
                _step3,
                _turnoverData$,
                _turnoverData$2,
                _user,
                _yield$connection$que69,
                _yield$connection$que70,
                turnoverData,
                _yield$connection$que71,
                _yield$connection$que72,
                inviteCountData,
                inviteCount,
                userObject,
                _args11 = arguments;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    depth = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : 1;
                    if (!(depth > 6)) {
                      _context11.next = 3;
                      break;
                    }
                    return _context11.abrupt("return");
                  case 3:
                    _context11.next = 5;
                    return _connectDB["default"].query("SELECT `id_user`, `name_user`, `phone`, `code`, `invite`, `rank`, `total_money` FROM users WHERE `invite` = ?", [code]);
                  case 5:
                    _yield$connection$que67 = _context11.sent;
                    _yield$connection$que68 = _slicedToArray(_yield$connection$que67, 1);
                    userData = _yield$connection$que68[0];
                    if (!(userData.length > 0)) {
                      _context11.next = 39;
                      break;
                    }
                    _iterator3 = _createForOfIteratorHelper(userData);
                    _context11.prev = 10;
                    _iterator3.s();
                  case 12:
                    if ((_step3 = _iterator3.n()).done) {
                      _context11.next = 31;
                      break;
                    }
                    _user = _step3.value;
                    _context11.next = 16;
                    return _connectDB["default"].query("SELECT `phone`, `daily_turn_over`, `total_turn_over` FROM turn_over WHERE `phone` = ?", [_user.phone]);
                  case 16:
                    _yield$connection$que69 = _context11.sent;
                    _yield$connection$que70 = _slicedToArray(_yield$connection$que69, 1);
                    turnoverData = _yield$connection$que70[0];
                    _context11.next = 21;
                    return _connectDB["default"].query("SELECT COUNT(*) as invite_count FROM users WHERE `invite` = ?", [_user.code]);
                  case 21:
                    _yield$connection$que71 = _context11.sent;
                    _yield$connection$que72 = _slicedToArray(_yield$connection$que71, 1);
                    inviteCountData = _yield$connection$que72[0];
                    inviteCount = inviteCountData[0].invite_count;
                    userObject = _objectSpread(_objectSpread({}, _user), {}, {
                      invite_count: inviteCount,
                      user_level: depth,
                      daily_turn_over: ((_turnoverData$ = turnoverData[0]) === null || _turnoverData$ === void 0 ? void 0 : _turnoverData$.daily_turn_over) || 0,
                      total_turn_over: ((_turnoverData$2 = turnoverData[0]) === null || _turnoverData$2 === void 0 ? void 0 : _turnoverData$2.total_turn_over) || 0
                    });
                    selectedData.push(userObject);
                    _context11.next = 29;
                    return fetchUserDataByCode(_user.code, depth + 1);
                  case 29:
                    _context11.next = 12;
                    break;
                  case 31:
                    _context11.next = 36;
                    break;
                  case 33:
                    _context11.prev = 33;
                    _context11.t0 = _context11["catch"](10);
                    _iterator3.e(_context11.t0);
                  case 36:
                    _context11.prev = 36;
                    _iterator3.f();
                    return _context11.finish(36);
                  case 39:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[10, 33, 36, 39]]);
            }));
            return _fetchUserDataByCode.apply(this, arguments);
          };
          fetchUserDataByCode = function _fetchUserDataByCode2(_x23) {
            return _fetchUserDataByCode.apply(this, arguments);
          };
          auth = req.cookies.auth;
          if (auth) {
            _context12.next = 5;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          _context12.next = 7;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 7:
          _yield$connection$que59 = _context12.sent;
          _yield$connection$que60 = _slicedToArray(_yield$connection$que59, 1);
          user = _yield$connection$que60[0];
          if (user) {
            _context12.next = 12;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          userInfo = user[0];
          _context12.next = 15;
          return _connectDB["default"].query("SELECT `id_user`, `phone`, `code`, `invite`,`roses_f`, `rank`, `name_user`,`status`,`total_money`, `time` FROM users WHERE `invite` = ? ORDER BY id DESC", [userInfo.code]);
        case 15:
          _yield$connection$que61 = _context12.sent;
          _yield$connection$que62 = _slicedToArray(_yield$connection$que61, 1);
          f1 = _yield$connection$que62[0];
          _context12.next = 20;
          return _connectDB["default"].query("SELECT `id_user`, `phone`, `time` FROM users WHERE `invite` = ? ORDER BY id DESC LIMIT 100", [userInfo.code]);
        case 20:
          _yield$connection$que63 = _context12.sent;
          _yield$connection$que64 = _slicedToArray(_yield$connection$que63, 1);
          mem = _yield$connection$que64[0];
          _context12.next = 25;
          return _connectDB["default"].query("SELECT `f1`,`invite`, `code`,`phone`,`time` FROM roses WHERE `invite` = ? ORDER BY id DESC LIMIT 100", [userInfo.code]);
        case 25:
          _yield$connection$que65 = _context12.sent;
          _yield$connection$que66 = _slicedToArray(_yield$connection$que65, 1);
          total_roses = _yield$connection$que66[0];
          selectedData = [];
          _context12.next = 31;
          return fetchUserDataByCode(userInfo.code);
        case 31:
          newMem = [];
          mem.map(function (data) {
            var objectMem = {
              id_user: data.id_user,
              phone: "+91" + data.phone,
              time: data.time
            };
            return newMem.push(objectMem);
          });
          return _context12.abrupt("return", res.status(200).json({
            message: "Receive success",
            f1: selectedData,
            f1_direct: f1,
            mem: newMem,
            total_roses: total_roses,
            status: true,
            timeStamp: timeNow
          }));
        case 34:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function listMyTeam(_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}();
var wowpay = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var auth, money;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          auth = req.cookies.auth;
          money = req.body.money; // Fetching the user's mobile number from the database using auth token
          // Your existing controller code here
        case 2:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function wowpay(_x24, _x25) {
    return _ref11.apply(this, arguments);
  };
}();
var recharge = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var auth, money, type, typeid, minimumMoney, _yield$connection$que73, _yield$connection$que74, user, userInfo, _yield$connection$que75, _yield$connection$que76, recharge, _formateT, _timerJoin, time, date, checkTime, id_time, id_order, client_transaction_id, formData, sql, _yield$connection$que77, _yield$connection$que78, _recharge, moneyString, apiData, apiResponse, _sql, _yield$connection$que79, _yield$connection$que80, _recharge2;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          auth = req.cookies.auth;
          money = req.body.money;
          type = req.body.type;
          typeid = req.body.typeid;
          minimumMoney = process.env.MINIMUM_MONEY_INR;
          if (!(type != "cancel")) {
            _context14.next = 8;
            break;
          }
          if (!(!auth || !money || money < minimumMoney - 1)) {
            _context14.next = 8;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 8:
          _context14.next = 10;
          return _connectDB["default"].query("SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 10:
          _yield$connection$que73 = _context14.sent;
          _yield$connection$que74 = _slicedToArray(_yield$connection$que73, 1);
          user = _yield$connection$que74[0];
          userInfo = user[0];
          if (user) {
            _context14.next = 16;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 16:
          if (!(type == "cancel")) {
            _context14.next = 20;
            break;
          }
          _context14.next = 19;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE phone = ? AND id_order = ? AND status = ? ", [userInfo.phone, typeid, 0]);
        case 19:
          return _context14.abrupt("return", res.status(200).json({
            message: "Cancelled order successfully",
            status: true,
            timeStamp: timeNow
          }));
        case 20:
          _context14.next = 22;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = ? ", [userInfo.phone, 0]);
        case 22:
          _yield$connection$que75 = _context14.sent;
          _yield$connection$que76 = _slicedToArray(_yield$connection$que75, 1);
          recharge = _yield$connection$que76[0];
          if (!(recharge.length == 0)) {
            _context14.next = 72;
            break;
          }
          _formateT = function _formateT(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
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
            var years = _formateT(date.getFullYear());
            var months = _formateT(date.getMonth() + 1);
            var days = _formateT(date.getDate());
            var hours = date.getHours() % 12;
            hours = hours === 0 ? 12 : hours;
            var ampm = date.getHours() < 12 ? "AM" : "PM";
            var minutes = _formateT(date.getMinutes());
            var seconds = _formateT(date.getSeconds());
            return years + "-" + months + "-" + days + " " + hours + ":" + minutes + ":" + seconds + " " + ampm;
          };
          time = new Date().getTime();
          date = new Date();
          checkTime = _timerJoin(time);
          id_time = date.getUTCFullYear() + "" + date.getUTCMonth() + 1 + "" + date.getUTCDate();
          id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000; // let vat = Math.floor(Math.random() * (2000 - 0 + 1) ) + 0;
          money = Number(money);
          client_transaction_id = id_time + id_order;
          formData = {
            username: process.env.accountBank,
            secret_key: process.env.secret_key,
            client_transaction: client_transaction_id,
            amount: money
          };
          if (!(type == "momo")) {
            _context14.next = 46;
            break;
          }
          sql = "INSERT INTO recharge SET \n            id_order = ?,\n            transaction_id = ?,\n            phone = ?,\n            money = ?,\n            type = ?,\n            status = ?,\n            today = ?,\n            url = ?,\n            time = ?";
          _context14.next = 40;
          return _connectDB["default"].execute(sql, [client_transaction_id, "NULL", userInfo.phone, money, type, 0, checkTime, "NULL", time]);
        case 40:
          _context14.next = 42;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = ? ", [userInfo.phone, 0]);
        case 42:
          _yield$connection$que77 = _context14.sent;
          _yield$connection$que78 = _slicedToArray(_yield$connection$que77, 1);
          _recharge = _yield$connection$que78[0];
          return _context14.abrupt("return", res.status(200).json({
            message: "Received successfully",
            datas: _recharge[0],
            status: true,
            timeStamp: timeNow
          }));
        case 46:
          moneyString = money.toString();
          apiData = {
            key: "60a9ca13-6929-4e40-b687-ff7293e61dce",
            client_txn_id: client_transaction_id,
            amount: moneyString,
            p_info: "WINGO PAYMENT",
            customer_name: userInfo.name_user,
            customer_email: "manas.xdr@gmail.com",
            customer_mobile: userInfo.phone,
            redirect_url: "https://bharatgames.site/wallet/verify/upi",
            udf1: "Indnclub"
          };
          _context14.prev = 48;
          _context14.next = 51;
          return _axios["default"].post("https://api.ekqr.in/api/create_order", apiData);
        case 51:
          apiResponse = _context14.sent;
          if (!(apiResponse.data.status == true)) {
            _context14.next = 64;
            break;
          }
          _sql = "INSERT INTO recharge SET \n                id_order = ?,\n                transaction_id = ?,\n                phone = ?,\n                money = ?,\n                type = ?,\n                status = ?,\n                today = ?,\n                url = ?,\n                time = ?";
          _context14.next = 56;
          return _connectDB["default"].execute(_sql, [client_transaction_id, "0", userInfo.phone, money, type, 0, checkTime, "0", timeNow]);
        case 56:
          _context14.next = 58;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = ? ", [userInfo.phone, 0]);
        case 58:
          _yield$connection$que79 = _context14.sent;
          _yield$connection$que80 = _slicedToArray(_yield$connection$que79, 1);
          _recharge2 = _yield$connection$que80[0];
          return _context14.abrupt("return", res.status(200).json({
            message: "Received successfully",
            datas: _recharge2[0],
            payment_url: apiResponse.data.data.payment_url,
            status: true,
            timeStamp: timeNow
          }));
        case 64:
          return _context14.abrupt("return", res.status(500).json({
            message: "Failed to create order",
            status: false
          }));
        case 65:
          _context14.next = 70;
          break;
        case 67:
          _context14.prev = 67;
          _context14.t0 = _context14["catch"](48);
          return _context14.abrupt("return", res.status(500).json({
            message: "API request failed",
            status: false
          }));
        case 70:
          _context14.next = 73;
          break;
        case 72:
          return _context14.abrupt("return", res.status(200).json({
            message: "Received successfully",
            datas: recharge[0],
            status: true,
            timeStamp: timeNow
          }));
        case 73:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[48, 67]]);
  }));
  return function recharge(_x26, _x27) {
    return _ref12.apply(this, arguments);
  };
}();
var cancelRecharge = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var auth, _yield$connection$que81, _yield$connection$que82, user, _userInfo, result;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          auth = req.cookies.auth;
          if (auth) {
            _context15.next = 4;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            message: "Authorization is required to access this API!",
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context15.next = 6;
          return _connectDB["default"].query("SELECT `phone`, `code`,`name_user`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 6:
          _yield$connection$que81 = _context15.sent;
          _yield$connection$que82 = _slicedToArray(_yield$connection$que81, 1);
          user = _yield$connection$que82[0];
          if (user) {
            _context15.next = 11;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            message: "Authorization is required to access this API!",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          _userInfo = user[0];
          _context15.next = 14;
          return _connectDB["default"].query("DELETE FROM recharge WHERE phone = ? AND status = ?", [_userInfo.phone, 0]);
        case 14:
          result = _context15.sent;
          if (!(result.affectedRows > 0)) {
            _context15.next = 19;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            message: "All the pending recharges has been deleted successfully!",
            status: true,
            timeStamp: timeNow
          }));
        case 19:
          return _context15.abrupt("return", res.status(200).json({
            message: "There was no pending recharges for this user or delete operation has been failed!",
            status: true,
            timeStamp: timeNow
          }));
        case 20:
          _context15.next = 26;
          break;
        case 22:
          _context15.prev = 22;
          _context15.t0 = _context15["catch"](0);
          console.error("API error: ", _context15.t0);
          return _context15.abrupt("return", res.status(500).json({
            message: "API Request failed!",
            status: false,
            timeStamp: timeNow
          }));
        case 26:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 22]]);
  }));
  return function cancelRecharge(_x28, _x29) {
    return _ref13.apply(this, arguments);
  };
}();
var addBank = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var timeNow, auth, bankName, recipientName, bankAccountNumber, phoneNumber, IFSC, upiId, time, _yield$connection$que83, _yield$connection$que84, user, _userInfo2, _yield$connection$que85, _yield$connection$que86, user_bank, _yield$connection$que87, _yield$connection$que88, user_bank2, sql;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          timeNow = Date.now();
          _context16.prev = 1;
          auth = req.cookies.auth; // let name_bank = req.body.name_bank
          // let name_user = req.body.name_user
          // let stk = req.body.stk
          // let email = req.body.email
          // let sdt = req.body.sdt
          // let tinh = req.body.tinh
          bankName = req.body.bankName;
          recipientName = req.body.recipientName;
          bankAccountNumber = req.body.bankAccountNumber;
          phoneNumber = req.body.phoneNumber;
          IFSC = req.body.IFSC;
          upiId = req.body.upiId;
          time = new Date().getTime();
          if (!(!auth || !name_bank || !name_user || !stk || !email || !stk || !tinh)) {
            _context16.next = 12;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          _context16.next = 14;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 14:
          _yield$connection$que83 = _context16.sent;
          _yield$connection$que84 = _slicedToArray(_yield$connection$que83, 1);
          user = _yield$connection$que84[0];
          _userInfo2 = user[0];
          if (user) {
            _context16.next = 20;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 20:
          _context16.next = 22;
          return _connectDB["default"].query("SELECT * FROM user_bank WHERE tinh = ? ", [tinh]);
        case 22:
          _yield$connection$que85 = _context16.sent;
          _yield$connection$que86 = _slicedToArray(_yield$connection$que85, 1);
          user_bank = _yield$connection$que86[0];
          _context16.next = 27;
          return _connectDB["default"].query("SELECT * FROM user_bank WHERE phone = ? ", [_userInfo2.phone]);
        case 27:
          _yield$connection$que87 = _context16.sent;
          _yield$connection$que88 = _slicedToArray(_yield$connection$que87, 1);
          user_bank2 = _yield$connection$que88[0];
          if (!(user_bank.length == 0 && user_bank2.length == 0)) {
            _context16.next = 37;
            break;
          }
          sql = "INSERT INTO user_bank SET \n        phone = ?,\n        name_bank = ?,\n        name_user = ?,\n        stk = ?,\n        email = ?,\n        sdt = ?,\n        tinh = ?,\n        time = ?";
          _context16.next = 34;
          return _connectDB["default"].execute(sql, [_userInfo2.phone, name_bank, name_user, stk, email, sdt, tinh, time]);
        case 34:
          return _context16.abrupt("return", res.status(200).json({
            message: "Successfully added bank",
            status: true,
            timeStamp: timeNow
          }));
        case 37:
          if (!(user_bank.length == 0)) {
            _context16.next = 43;
            break;
          }
          _context16.next = 40;
          return _connectDB["default"].query("UPDATE user_bank SET tinh = ? WHERE phone = ? ", [tinh, _userInfo2.phone]);
        case 40:
          return _context16.abrupt("return", res.status(200).json({
            message: "KYC Already Done",
            status: false,
            timeStamp: timeNow
          }));
        case 43:
          if (!(user_bank2.length > 0)) {
            _context16.next = 47;
            break;
          }
          _context16.next = 46;
          return _connectDB["default"].query("UPDATE user_bank SET name_bank = ?, name_user = ?, stk = ?, email = ?, sdt = ?, tinh = ?, time = ? WHERE phone = ?", [name_bank, name_user, stk, email, sdt, tinh, time, _userInfo2.phone]);
        case 46:
          return _context16.abrupt("return", res.status(200).json({
            message: "your account is updated",
            status: false,
            timeStamp: timeNow
          }));
        case 47:
          _context16.next = 53;
          break;
        case 49:
          _context16.prev = 49;
          _context16.t0 = _context16["catch"](1);
          console.log(_context16.t0);
          return _context16.abrupt("return", res.status(500).json({
            message: "",
            status: false,
            timeStamp: timeNow
          }));
        case 53:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 49]]);
  }));
  return function addBank(_x30, _x31) {
    return _ref14.apply(this, arguments);
  };
}();
var infoUserBank = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var auth, _yield$connection$que89, _yield$connection$que90, user, _timeNow, _userInfo3, _yield$connection$que91, _yield$connection$que92, lastRecharge, lastRechargeRemainingBet, _yield$connection$que93, _yield$connection$que94, lastBetResetTime, lastBetResetTimeRemainingBet, betTimeInterval, _yield$connection$que95, _yield$connection$que96, giftCardUsed, giftCardTotalAmount, specificRewardTypes, rewardTypesString, _yield$connection$que97, _yield$connection$que98, claimRewards, totalClaimRewards, _yield$connection$que99, _yield$connection$que100, wingoLossResult, wingoLossMoney, _yield$connection$que101, _yield$connection$que102, k3LossResult, k3LossMoney, _yield$connection$que103, _yield$connection$que104, G5LossResult, G5dLossMoney, _yield$connection$que105, _yield$connection$que106, trxWingoLossResult, trxWingoLossMoney, _yield$connection$que107, _yield$connection$que108, withdrawResult, totalWithdraw, _yield$connection$que109, _yield$connection$que110, withdrawPendingResult, totalWithdrawPending, totalLoss, calculation, totalBetAmountRemaining, allowedWithdrawAmount;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          auth = req.cookies.auth;
          _context17.prev = 1;
          if (auth) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: _timeNow
          }));
        case 4:
          _context17.next = 6;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ? ", [auth]);
        case 6:
          _yield$connection$que89 = _context17.sent;
          _yield$connection$que90 = _slicedToArray(_yield$connection$que89, 1);
          user = _yield$connection$que90[0];
          if (user) {
            _context17.next = 11;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: _timeNow
          }));
        case 11:
          _timeNow = Date.now();
          _userInfo3 = user[0]; // *****************************************LAST RECHARGE BET TIME*****************************************
          _context17.next = 15;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = '".concat(_userInfo3.phone, "' AND status = 1 ORDER BY time_remaining_bet DESC LIMIT 1"));
        case 15:
          _yield$connection$que91 = _context17.sent;
          _yield$connection$que92 = _slicedToArray(_yield$connection$que91, 1);
          lastRecharge = _yield$connection$que92[0];
          lastRechargeRemainingBet = lastRecharge.length === 0 ? 0 : Number(lastRecharge[0].remaining_bet) || 0; // *****************************************WHEN BET RESET TIME*****************************************
          _context17.next = 21;
          return _connectDB["default"].query("SELECT time_remaining_bet FROM recharge WHERE phone = '".concat(_userInfo3.phone, "' AND status = 1 AND remaining_bet = 0 ORDER BY time_remaining_bet DESC LIMIT 1"));
        case 21:
          _yield$connection$que93 = _context17.sent;
          _yield$connection$que94 = _slicedToArray(_yield$connection$que93, 1);
          lastBetResetTime = _yield$connection$que94[0];
          lastBetResetTimeRemainingBet = lastBetResetTime.length > 0 ? lastBetResetTime[0] : {
            time_remaining_bet: null
          };
          betTimeInterval = !lastBetResetTimeRemainingBet.time_remaining_bet ? "" : "AND time > ".concat(lastBetResetTime[0].time_remaining_bet); // *****************************************GIFT CARD USED AFTER THE LAST RECHARGE TIME*****************************************
          _context17.next = 28;
          return _connectDB["default"].query("SELECT SUM(money) AS giftCardTotalAmount FROM redenvelopes_used WHERE phone_used = '".concat(_userInfo3.phone, "' ").concat(betTimeInterval));
        case 28:
          _yield$connection$que95 = _context17.sent;
          _yield$connection$que96 = _slicedToArray(_yield$connection$que95, 1);
          giftCardUsed = _yield$connection$que96[0];
          giftCardTotalAmount = Number(giftCardUsed[0].giftCardTotalAmount) || 0;
          specificRewardTypes = [_reward_types.REWARD_TYPES_MAP.FIRST_RECHARGE_BONUS, _reward_types.REWARD_TYPES_MAP.DAILY_RECHARGE_BONUS, _reward_types.REWARD_TYPES_MAP.FIRST_RECHARGE_AGENT_BONUS, _reward_types.REWARD_TYPES_MAP.DAILY_RECHARGE_AGENT_BONUS, _reward_types.REWARD_TYPES_MAP.WELCOME_BONUS, _reward_types.REWARD_TYPES_MAP.INVITER_BONUS, _reward_types.REWARD_TYPES_MAP.REFUND_AMOUNT, _reward_types.REWARD_TYPES_MAP.WALLET_TRANSFER];
          rewardTypesString = specificRewardTypes.map(function (type) {
            return "'".concat(type, "'");
          }).join(", ");
          _context17.next = 36;
          return _connectDB["default"].query("\n         SELECT SUM(amount) AS totalClaimRewards \n         FROM claimed_rewards \n         WHERE phone = ? \n         AND type IN (".concat(rewardTypesString, ")\n         ").concat(betTimeInterval, "\n         "), [_userInfo3.phone]);
        case 36:
          _yield$connection$que97 = _context17.sent;
          _yield$connection$que98 = _slicedToArray(_yield$connection$que97, 1);
          claimRewards = _yield$connection$que98[0];
          totalClaimRewards = Number(claimRewards[0].totalClaimRewards) || 0; // *****************************************BET LOSS CALCULATIONS*****************************************
          _context17.next = 42;
          return _connectDB["default"].query("SELECT SUM(money) AS totalMoney,SUM(fee) AS totalFees FROM minutes_1 WHERE phone = '".concat(_userInfo3.phone, "' ").concat(betTimeInterval));
        case 42:
          _yield$connection$que99 = _context17.sent;
          _yield$connection$que100 = _slicedToArray(_yield$connection$que99, 1);
          wingoLossResult = _yield$connection$que100[0];
          wingoLossMoney = parseFloat(wingoLossResult[0].totalMoney) + parseFloat(wingoLossResult[0].totalFees) || 0;
          _context17.next = 48;
          return _connectDB["default"].query("SELECT SUM(money) AS k3LossMoney FROM result_k3 WHERE phone = '".concat(_userInfo3.phone, "' ").concat(betTimeInterval));
        case 48:
          _yield$connection$que101 = _context17.sent;
          _yield$connection$que102 = _slicedToArray(_yield$connection$que101, 1);
          k3LossResult = _yield$connection$que102[0];
          k3LossMoney = Number(k3LossResult[0].k3LossMoney) || 0;
          _context17.next = 54;
          return _connectDB["default"].query("SELECT SUM(money) AS G5dLossMoney FROM result_5d WHERE phone = '".concat(_userInfo3.phone, "' ").concat(betTimeInterval));
        case 54:
          _yield$connection$que103 = _context17.sent;
          _yield$connection$que104 = _slicedToArray(_yield$connection$que103, 1);
          G5LossResult = _yield$connection$que104[0];
          G5dLossMoney = Number(G5LossResult[0].G5dLossMoney) || 0;
          _context17.next = 60;
          return _connectDB["default"].query("SELECT SUM(money) AS trxWingoLossMoney FROM trx_wingo_bets WHERE phone = '".concat(_userInfo3.phone, "' ").concat(betTimeInterval));
        case 60:
          _yield$connection$que105 = _context17.sent;
          _yield$connection$que106 = _slicedToArray(_yield$connection$que105, 1);
          trxWingoLossResult = _yield$connection$que106[0];
          trxWingoLossMoney = Number(trxWingoLossResult[0].trxWingoLossMoney) || 0;
          _context17.next = 66;
          return _connectDB["default"].query("SELECT SUM(money) AS totalWithdraw FROM withdraw WHERE phone = '".concat(_userInfo3.phone, "' AND status = 1"));
        case 66:
          _yield$connection$que107 = _context17.sent;
          _yield$connection$que108 = _slicedToArray(_yield$connection$que107, 1);
          withdrawResult = _yield$connection$que108[0];
          totalWithdraw = Number(withdrawResult[0].totalWithdraw) || 0;
          _context17.next = 72;
          return _connectDB["default"].query("SELECT SUM(money) AS totalWithdrawPending FROM withdraw WHERE phone = '".concat(_userInfo3.phone, "' AND status = 0"));
        case 72:
          _yield$connection$que109 = _context17.sent;
          _yield$connection$que110 = _slicedToArray(_yield$connection$que109, 1);
          withdrawPendingResult = _yield$connection$que110[0];
          totalWithdrawPending = Number(withdrawPendingResult[0].totalWithdrawPending) || 0;
          totalLoss = wingoLossMoney + k3LossMoney + G5dLossMoney + trxWingoLossMoney;
          console.log("totalLoss", totalLoss);
          console.log("totalWithdraw", totalWithdraw);
          console.log("totalWithdrawPending", totalWithdrawPending);

          // *****************************************WITHDRAWAL CALCULATIONS*****************************************
          calculation = lastRechargeRemainingBet + totalClaimRewards + giftCardTotalAmount - totalLoss;
          totalBetAmountRemaining = calculation < 0 ? 0 : calculation; // console.log("lastRechargeId", lastRecharge[0].id)
          allowedWithdrawAmount = totalBetAmountRemaining === 0;
          console.log(lastRechargeRemainingBet, totalClaimRewards, giftCardTotalAmount);
          console.log(totalLoss, lastRechargeRemainingBet, allowedWithdrawAmount, calculation);
          if (!(calculation < 0 && lastRecharge.length > 0)) {
            _context17.next = 88;
            break;
          }
          _context17.next = 88;
          return _connectDB["default"].query("UPDATE recharge SET remaining_bet = 0, time_remaining_bet = ? WHERE id = ? AND status = 1", [_timeNow, lastRecharge[0].id]);
        case 88:
          return _context17.abrupt("return", res.status(200).json({
            message: "Received successfully",
            userInfo: {
              code: user[0].code,
              id_user: user[0].id_user,
              name_user: user[0].name_user,
              phone_user: user[0].phone,
              money_user: user[0].money,
              bonus_money: user[0].bonus_money,
              avatar: user[0].avatar
            },
            totalBetAmountRemaining: totalBetAmountRemaining,
            allowedWithdrawAmount: allowedWithdrawAmount,
            status: true,
            timeStamp: _timeNow
          }));
        case 91:
          _context17.prev = 91;
          _context17.t0 = _context17["catch"](1);
          console.log(_context17.t0);
          res.status(500).json({
            message: _context17.t0.message,
            status: false,
            timeStamp: timeNow
          });
        case 95:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 91]]);
  }));
  return function infoUserBank(_x32, _x33) {
    return _ref15.apply(this, arguments);
  };
}();
var withdrawal3 = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var auth, money, password, _yield$connection$que111, _yield$connection$que112, user, userInfo, date, id_time, id_order, formateT, timerJoin, dates, checkTime, _yield$connection$que113, _yield$connection$que114, recharge, _yield$connection$que115, _yield$connection$que116, minutes_1, total, total2, result, _yield$connection$que117, _yield$connection$que118, user_bank, _yield$connection$que119, _yield$connection$que120, withdraw, infoBank, sql;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          timerJoin = function _timerJoin2() {
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
          formateT = function _formateT2(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
          auth = req.cookies.auth;
          money = req.body.money;
          password = req.body.password;
          if (!(!auth || !money || !password || money < 299)) {
            _context18.next = 7;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 7:
          _context18.next = 9;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite`, `money` FROM users WHERE `token` = ? AND password = ?", [auth, (0, _md["default"])(password)]);
        case 9:
          _yield$connection$que111 = _context18.sent;
          _yield$connection$que112 = _slicedToArray(_yield$connection$que111, 1);
          user = _yield$connection$que112[0];
          if (!(user.length == 0)) {
            _context18.next = 14;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            message: "incorrect password",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          userInfo = user[0];
          date = new Date();
          id_time = date.getUTCFullYear() + "" + date.getUTCMonth() + 1 + "" + date.getUTCDate();
          id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;
          dates = new Date().getTime();
          checkTime = timerJoin(dates);
          _context18.next = 22;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = 1", [userInfo.phone]);
        case 22:
          _yield$connection$que113 = _context18.sent;
          _yield$connection$que114 = _slicedToArray(_yield$connection$que113, 1);
          recharge = _yield$connection$que114[0];
          _context18.next = 27;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ?", [userInfo.phone]);
        case 27:
          _yield$connection$que115 = _context18.sent;
          _yield$connection$que116 = _slicedToArray(_yield$connection$que115, 1);
          minutes_1 = _yield$connection$que116[0];
          total = 0;
          recharge.forEach(function (data) {
            total += parseFloat(data.money);
          });
          total2 = 0;
          minutes_1.forEach(function (data) {
            total2 += parseFloat(data.money);
          });
          result = 0;
          if (total - total2 > 0) result = total - total2;
          result = Math.max(result, 0);
          _context18.next = 39;
          return _connectDB["default"].query("SELECT * FROM user_bank WHERE `phone` = ?", [userInfo.phone]);
        case 39:
          _yield$connection$que117 = _context18.sent;
          _yield$connection$que118 = _slicedToArray(_yield$connection$que117, 1);
          user_bank = _yield$connection$que118[0];
          _context18.next = 44;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE `phone` = ? AND today = ?", [userInfo.phone, checkTime]);
        case 44:
          _yield$connection$que119 = _context18.sent;
          _yield$connection$que120 = _slicedToArray(_yield$connection$que119, 1);
          withdraw = _yield$connection$que120[0];
          if (!(user_bank.length != 0)) {
            _context18.next = 74;
            break;
          }
          if (!(withdraw.length < 3)) {
            _context18.next = 71;
            break;
          }
          if (!(userInfo.money - money >= 0)) {
            _context18.next = 68;
            break;
          }
          if (!(result == 0)) {
            _context18.next = 65;
            break;
          }
          if (!(total - total2 >= 0)) {
            _context18.next = 56;
            break;
          }
          if (!(result == 0)) {
            _context18.next = 54;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            message: "The total bet is not enough to fulfill the request",
            status: false,
            timeStamp: timeNow
          }));
        case 54:
          _context18.next = 63;
          break;
        case 56:
          infoBank = user_bank[0];
          sql = "INSERT INTO withdraw SET \n                    id_order = ?,\n                    phone = ?,\n                    money = ?,\n                    stk = ?,\n                    name_bank = ?,\n                    ifsc = ?,\n                    name_user = ?,\n                    status = ?,\n                    today = ?,\n                    time = ?";
          _context18.next = 60;
          return _connectDB["default"].execute(sql, [id_time + "" + id_order, userInfo.phone, money, infoBank.stk, infoBank.name_bank, infoBank.email, infoBank.name_user, 0, checkTime, dates]);
        case 60:
          _context18.next = 62;
          return _connectDB["default"].query("UPDATE users SET money = money - ? WHERE phone = ? ", [money, userInfo.phone]);
        case 62:
          return _context18.abrupt("return", res.status(200).json({
            message: "Withdrawal successful",
            status: true,
            money: userInfo.money - money,
            timeStamp: timeNow
          }));
        case 63:
          _context18.next = 66;
          break;
        case 65:
          return _context18.abrupt("return", res.status(200).json({
            message: "The total bet is not enough to fulfill the request",
            status: false,
            timeStamp: timeNow
          }));
        case 66:
          _context18.next = 69;
          break;
        case 68:
          return _context18.abrupt("return", res.status(200).json({
            message: "The balance is not enough to fulfill the request",
            status: false,
            timeStamp: timeNow
          }));
        case 69:
          _context18.next = 72;
          break;
        case 71:
          return _context18.abrupt("return", res.status(200).json({
            message: "You can only make 2 withdrawals per day",
            status: false,
            timeStamp: timeNow
          }));
        case 72:
          _context18.next = 75;
          break;
        case 74:
          return _context18.abrupt("return", res.status(200).json({
            message: "Please link your bank first",
            status: false,
            timeStamp: timeNow
          }));
        case 75:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function withdrawal3(_x34, _x35) {
    return _ref16.apply(this, arguments);
  };
}();
var transfer = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var auth, amount, receiver_phone, date, id_order, time, client_transaction_id, _yield$connection$que121, _yield$connection$que122, user, userInfo, sender_phone, sender_money, formateT, timerJoin, dates, checkTime, _yield$connection$que123, _yield$connection$que124, recharge, _yield$connection$que125, _yield$connection$que126, minutes_1, total, total2, result, _yield$connection$que127, _yield$connection$que128, receiver, money, total_money, sql, sql_recharge;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          timerJoin = function _timerJoin3() {
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
          formateT = function _formateT3(params) {
            var result = params < 10 ? "0" + params : params;
            return result;
          };
          auth = req.cookies.auth;
          amount = req.body.amount;
          receiver_phone = req.body.phone;
          date = new Date(); // let id_time = date.getUTCFullYear() + '' + (date.getUTCMonth() + 1) + '' + date.getUTCDate();
          id_order = Math.floor(Math.random() * (99999999999999 - 10000000000000 + 1)) + 10000000000000;
          time = new Date().getTime();
          client_transaction_id = id_order;
          _context19.next = 11;
          return _connectDB["default"].query("SELECT `phone`,`money`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 11:
          _yield$connection$que121 = _context19.sent;
          _yield$connection$que122 = _slicedToArray(_yield$connection$que121, 1);
          user = _yield$connection$que122[0];
          userInfo = user[0];
          sender_phone = userInfo.phone;
          sender_money = parseInt(userInfo.money);
          if (user) {
            _context19.next = 19;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 19:
          dates = new Date().getTime();
          checkTime = timerJoin(dates);
          _context19.next = 23;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = 1 ", [userInfo.phone]);
        case 23:
          _yield$connection$que123 = _context19.sent;
          _yield$connection$que124 = _slicedToArray(_yield$connection$que123, 1);
          recharge = _yield$connection$que124[0];
          _context19.next = 28;
          return _connectDB["default"].query("SELECT * FROM minutes_1 WHERE phone = ? ", [userInfo.phone]);
        case 28:
          _yield$connection$que125 = _context19.sent;
          _yield$connection$que126 = _slicedToArray(_yield$connection$que125, 1);
          minutes_1 = _yield$connection$que126[0];
          total = 0;
          recharge.forEach(function (data) {
            total += data.money;
          });
          total2 = 0;
          minutes_1.forEach(function (data) {
            total2 += data.money;
          });
          result = 0;
          if (total - total2 > 0) result = total - total2;

          // console.log('date:', result);
          if (!(result == 0)) {
            _context19.next = 62;
            break;
          }
          if (!(sender_money >= amount)) {
            _context19.next = 59;
            break;
          }
          _context19.next = 41;
          return _connectDB["default"].query("SELECT * FROM users WHERE `phone` = ?", [receiver_phone]);
        case 41:
          _yield$connection$que127 = _context19.sent;
          _yield$connection$que128 = _slicedToArray(_yield$connection$que127, 1);
          receiver = _yield$connection$que128[0];
          if (!(receiver.length === 1 && sender_phone !== receiver_phone)) {
            _context19.next = 56;
            break;
          }
          money = sender_money - amount;
          total_money = amount + receiver[0].total_money; // await connection.query('UPDATE users SET money = ? WHERE phone = ?', [money, sender_phone]);
          // await connection.query(`UPDATE users SET money = money + ? WHERE phone = ?`, [amount, receiver_phone]);
          sql = "INSERT INTO balance_transfer (sender_phone, receiver_phone, amount) VALUES (?, ?, ?)";
          _context19.next = 50;
          return _connectDB["default"].execute(sql, [sender_phone, receiver_phone, amount]);
        case 50:
          sql_recharge = "INSERT INTO recharge (id_order, transaction_id, phone, money, type, status, today, url, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
          _context19.next = 53;
          return _connectDB["default"].execute(sql_recharge, [client_transaction_id, 0, receiver_phone, amount, "wallet", 0, checkTime, 0, time]);
        case 53:
          return _context19.abrupt("return", res.status(200).json({
            message: "Requested ".concat(amount, " sent successfully"),
            status: true,
            timeStamp: timeNow
          }));
        case 56:
          return _context19.abrupt("return", res.status(200).json({
            message: "".concat(receiver_phone, " is not a valid user mobile number"),
            status: false,
            timeStamp: timeNow
          }));
        case 57:
          _context19.next = 60;
          break;
        case 59:
          return _context19.abrupt("return", res.status(200).json({
            message: "Your balance is not enough",
            status: false,
            timeStamp: timeNow
          }));
        case 60:
          _context19.next = 63;
          break;
        case 62:
          return _context19.abrupt("return", res.status(200).json({
            message: "The total bet is not enough to fulfill the request",
            status: false,
            timeStamp: timeNow
          }));
        case 63:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function transfer(_x36, _x37) {
    return _ref17.apply(this, arguments);
  };
}();

// get transfer balance data
var transferHistory = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var auth, _yield$connection$que129, _yield$connection$que130, user, userInfo, _yield$connection$que131, _yield$connection$que132, history, _yield$connection$que133, _yield$connection$que134, receive;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          auth = req.cookies.auth;
          _context20.next = 3;
          return _connectDB["default"].query("SELECT `phone`,`money`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 3:
          _yield$connection$que129 = _context20.sent;
          _yield$connection$que130 = _slicedToArray(_yield$connection$que129, 1);
          user = _yield$connection$que130[0];
          userInfo = user[0];
          if (user) {
            _context20.next = 9;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          _context20.next = 11;
          return _connectDB["default"].query("SELECT * FROM balance_transfer WHERE sender_phone = ?", [userInfo.phone]);
        case 11:
          _yield$connection$que131 = _context20.sent;
          _yield$connection$que132 = _slicedToArray(_yield$connection$que131, 1);
          history = _yield$connection$que132[0];
          _context20.next = 16;
          return _connectDB["default"].query("SELECT * FROM balance_transfer WHERE receiver_phone = ?", [userInfo.phone]);
        case 16:
          _yield$connection$que133 = _context20.sent;
          _yield$connection$que134 = _slicedToArray(_yield$connection$que133, 1);
          receive = _yield$connection$que134[0];
          if (!(receive.length > 0 || history.length > 0)) {
            _context20.next = 21;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            message: "Success",
            receive: receive,
            datas: history,
            status: true,
            timeStamp: timeNow
          }));
        case 21:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function transferHistory(_x38, _x39) {
    return _ref18.apply(this, arguments);
  };
}();
var recharge2 = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var auth, money, _yield$connection$que135, _yield$connection$que136, user, userInfo, _yield$connection$que137, _yield$connection$que138, recharge, _yield$connection$que139, _yield$connection$que140, bank_recharge;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          auth = req.cookies.auth;
          money = req.body.money;
          if (auth) {
            _context21.next = 4;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context21.next = 6;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 6:
          _yield$connection$que135 = _context21.sent;
          _yield$connection$que136 = _slicedToArray(_yield$connection$que135, 1);
          user = _yield$connection$que136[0];
          userInfo = user[0];
          if (user) {
            _context21.next = 12;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          _context21.next = 14;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = ? ", [userInfo.phone, 0]);
        case 14:
          _yield$connection$que137 = _context21.sent;
          _yield$connection$que138 = _slicedToArray(_yield$connection$que137, 1);
          recharge = _yield$connection$que138[0];
          _context21.next = 19;
          return _connectDB["default"].query("SELECT * FROM bank_recharge");
        case 19:
          _yield$connection$que139 = _context21.sent;
          _yield$connection$que140 = _slicedToArray(_yield$connection$que139, 1);
          bank_recharge = _yield$connection$que140[0];
          if (!(recharge.length != 0)) {
            _context21.next = 26;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            message: "Received successfully",
            datas: recharge[0],
            infoBank: bank_recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 26:
          return _context21.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 27:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function recharge2(_x40, _x41) {
    return _ref19.apply(this, arguments);
  };
}();
var listRecharge = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var auth, _yield$connection$que141, _yield$connection$que142, user, userInfo, _yield$connection$que143, _yield$connection$que144, recharge;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context22.next = 3;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context22.next = 5;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 5:
          _yield$connection$que141 = _context22.sent;
          _yield$connection$que142 = _slicedToArray(_yield$connection$que141, 1);
          user = _yield$connection$que142[0];
          userInfo = user[0];
          if (user) {
            _context22.next = 11;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          _context22.next = 13;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? ORDER BY id DESC ", [userInfo.phone]);
        case 13:
          _yield$connection$que143 = _context22.sent;
          _yield$connection$que144 = _slicedToArray(_yield$connection$que143, 1);
          recharge = _yield$connection$que144[0];
          return _context22.abrupt("return", res.status(200).json({
            message: "Receive success",
            datas: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 17:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function listRecharge(_x42, _x43) {
    return _ref20.apply(this, arguments);
  };
}();
var listGameswingo = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var auth, _yield$connection$que145, _yield$connection$que146, user, userInfo, sql, _yield$connection$que147, _yield$connection$que148, rows;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context23.next = 3;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 3:
          _context23.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
        case 5:
          _yield$connection$que145 = _context23.sent;
          _yield$connection$que146 = _slicedToArray(_yield$connection$que145, 1);
          user = _yield$connection$que146[0];
          userInfo = user[0];
          if (userInfo) {
            _context23.next = 11;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 11:
          // Define the criteria for fetching data
          sql = "SELECT \n      id_product, phone, code, invite, stage, level, money, amount, fee, \n      get, game, bet, status, today, time \n  FROM minutes_1 \n  WHERE phone = ? AND code = ?"; // Execute the query to fetch data
          _context23.next = 14;
          return _connectDB["default"].query('SELECT * FROM minutes_1 WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
        case 14:
          _yield$connection$que147 = _context23.sent;
          _yield$connection$que148 = _slicedToArray(_yield$connection$que147, 1);
          rows = _yield$connection$que148[0];
          if (!(rows.length > 0)) {
            _context23.next = 21;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: rows,
            status: true,
            timeStamp: new Date().toISOString()
          }));
        case 21:
          return _context23.abrupt("return", res.status(200).json({
            message: 'No data found',
            datas: [],
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 22:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function listGameswingo(_x44, _x45) {
    return _ref21.apply(this, arguments);
  };
}();
var listGamesk3 = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var auth, _yield$connection$que149, _yield$connection$que150, user, userInfo, sql, _yield$connection$que151, _yield$connection$que152, rows;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context24.next = 3;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 3:
          _context24.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
        case 5:
          _yield$connection$que149 = _context24.sent;
          _yield$connection$que150 = _slicedToArray(_yield$connection$que149, 1);
          user = _yield$connection$que150[0];
          userInfo = user[0];
          if (userInfo) {
            _context24.next = 11;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 11:
          // Define the criteria for fetching data
          sql = "SELECT \n      id_product, phone, code, invite, stage, level, money, price, amount, fee, \n      get, game, bet, status, today, time \n  FROM result_k3 \n  WHERE phone = ? AND code = ?"; // Execute the query to fetch data
          _context24.next = 14;
          return _connectDB["default"].query('SELECT * FROM result_k3 WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
        case 14:
          _yield$connection$que151 = _context24.sent;
          _yield$connection$que152 = _slicedToArray(_yield$connection$que151, 1);
          rows = _yield$connection$que152[0];
          if (!(rows.length > 0)) {
            _context24.next = 21;
            break;
          }
          return _context24.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: rows,
            status: true,
            timeStamp: new Date().toISOString()
          }));
        case 21:
          return _context24.abrupt("return", res.status(200).json({
            message: 'No data found',
            datas: [],
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 22:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function listGamesk3(_x46, _x47) {
    return _ref22.apply(this, arguments);
  };
}();
var listGames5d = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var auth, _yield$connection$que153, _yield$connection$que154, user, userInfo, sql, _yield$connection$que155, _yield$connection$que156, rows;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context25.next = 3;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 3:
          _context25.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
        case 5:
          _yield$connection$que153 = _context25.sent;
          _yield$connection$que154 = _slicedToArray(_yield$connection$que153, 1);
          user = _yield$connection$que154[0];
          userInfo = user[0];
          if (userInfo) {
            _context25.next = 11;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 11:
          // Define the criteria for fetching data
          sql = "SELECT \n      id_product, phone, code, invite, stage, level, money, price, amount, fee, \n      get, game, bet, status, today, time \n  FROM result_5d \n  WHERE phone = ? AND code = ?"; // Execute the query to fetch data
          _context25.next = 14;
          return _connectDB["default"].query('SELECT * FROM result_5d WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
        case 14:
          _yield$connection$que155 = _context25.sent;
          _yield$connection$que156 = _slicedToArray(_yield$connection$que155, 1);
          rows = _yield$connection$que156[0];
          if (!(rows.length > 0)) {
            _context25.next = 21;
            break;
          }
          return _context25.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: rows,
            status: true,
            timeStamp: new Date().toISOString()
          }));
        case 21:
          return _context25.abrupt("return", res.status(200).json({
            message: 'No data found',
            datas: [],
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 22:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function listGames5d(_x48, _x49) {
    return _ref23.apply(this, arguments);
  };
}();
var listGamestrx = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var auth, _yield$connection$que157, _yield$connection$que158, user, userInfo, sql, _yield$connection$que159, _yield$connection$que160, rows;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context26.next = 3;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 3:
          _context26.next = 5;
          return _connectDB["default"].query('SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?', [auth]);
        case 5:
          _yield$connection$que157 = _context26.sent;
          _yield$connection$que158 = _slicedToArray(_yield$connection$que157, 1);
          user = _yield$connection$que158[0];
          userInfo = user[0];
          if (userInfo) {
            _context26.next = 11;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            message: 'Failed',
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 11:
          // Define the criteria for fetching data
          sql = "SELECT \n      id_product, phone, code, invite, stage, level, money, amount, fee, \n      get, game, bet, status, today, time \n  FROM trx_wingo_bets \n  WHERE phone = ? AND code = ?"; // Execute the query to fetch data
          _context26.next = 14;
          return _connectDB["default"].query('SELECT * FROM trx_wingo_bets WHERE phone = ? ORDER BY id DESC ', [userInfo.phone]);
        case 14:
          _yield$connection$que159 = _context26.sent;
          _yield$connection$que160 = _slicedToArray(_yield$connection$que159, 1);
          rows = _yield$connection$que160[0];
          if (!(rows.length > 0)) {
            _context26.next = 21;
            break;
          }
          return _context26.abrupt("return", res.status(200).json({
            message: 'Receive success',
            datas: rows,
            status: true,
            timeStamp: new Date().toISOString()
          }));
        case 21:
          return _context26.abrupt("return", res.status(200).json({
            message: 'No data found',
            datas: [],
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 22:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function listGamestrx(_x50, _x51) {
    return _ref24.apply(this, arguments);
  };
}();
var search = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var auth, phone, _yield$connection$que161, _yield$connection$que162, user, userInfo, _yield$connection$que163, _yield$connection$que164, users, _yield$connection$que165, _yield$connection$que166, _users;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          auth = req.cookies.auth;
          phone = req.body.phone;
          if (auth) {
            _context27.next = 4;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          _context27.next = 6;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite`, `level` FROM users WHERE `token` = ? ", [auth]);
        case 6:
          _yield$connection$que161 = _context27.sent;
          _yield$connection$que162 = _slicedToArray(_yield$connection$que161, 1);
          user = _yield$connection$que162[0];
          if (!(user.length == 0)) {
            _context27.next = 11;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          userInfo = user[0];
          if (!(userInfo.level == 1)) {
            _context27.next = 21;
            break;
          }
          _context27.next = 15;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ? ORDER BY id DESC ", [phone]);
        case 15:
          _yield$connection$que163 = _context27.sent;
          _yield$connection$que164 = _slicedToArray(_yield$connection$que163, 1);
          users = _yield$connection$que164[0];
          return _context27.abrupt("return", res.status(200).json({
            message: "Receive success",
            datas: users,
            status: true,
            timeStamp: timeNow
          }));
        case 21:
          if (!(userInfo.level == 2)) {
            _context27.next = 38;
            break;
          }
          _context27.next = 24;
          return _connectDB["default"].query("SELECT * FROM users WHERE phone = ? ORDER BY id DESC ", [phone]);
        case 24:
          _yield$connection$que165 = _context27.sent;
          _yield$connection$que166 = _slicedToArray(_yield$connection$que165, 1);
          _users = _yield$connection$que166[0];
          if (!(_users.length == 0)) {
            _context27.next = 31;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            message: "Receive success",
            datas: [],
            status: true,
            timeStamp: timeNow
          }));
        case 31:
          if (!(_users[0].ctv == userInfo.phone)) {
            _context27.next = 35;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            message: "Receive success",
            datas: _users,
            status: true,
            timeStamp: timeNow
          }));
        case 35:
          return _context27.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 36:
          _context27.next = 39;
          break;
        case 38:
          return _context27.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 39:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function search(_x52, _x53) {
    return _ref25.apply(this, arguments);
  };
}();
var listWithdraw = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var auth, _yield$connection$que167, _yield$connection$que168, user, userInfo, _yield$connection$que169, _yield$connection$que170, recharge;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context28.next = 3;
            break;
          }
          return _context28.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 3:
          _context28.next = 5;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 5:
          _yield$connection$que167 = _context28.sent;
          _yield$connection$que168 = _slicedToArray(_yield$connection$que167, 1);
          user = _yield$connection$que168[0];
          userInfo = user[0];
          if (user) {
            _context28.next = 11;
            break;
          }
          return _context28.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 11:
          _context28.next = 13;
          return _connectDB["default"].query("SELECT * FROM withdraw WHERE phone = ? ORDER BY id DESC ", [userInfo.phone]);
        case 13:
          _yield$connection$que169 = _context28.sent;
          _yield$connection$que170 = _slicedToArray(_yield$connection$que169, 1);
          recharge = _yield$connection$que170[0];
          return _context28.abrupt("return", res.status(200).json({
            message: "Receive success",
            datas: recharge,
            status: true,
            timeStamp: timeNow
          }));
        case 17:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function listWithdraw(_x54, _x55) {
    return _ref26.apply(this, arguments);
  };
}();
var constructTransactionsQuery = function constructTransactionsQuery() {
  var filterType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "All";
  var startDate = arguments.length > 1 ? arguments[1] : undefined;
  var endDate = arguments.length > 2 ? arguments[2] : undefined;
  var phone = arguments.length > 3 ? arguments[3] : undefined;
  var limit = arguments.length > 4 ? arguments[4] : undefined;
  var offset = arguments.length > 5 ? arguments[5] : undefined;
  var queries = {
    Bets: {
      query: "SELECT id_product AS id, (money + fee) AS money, 'negative' AS type, 'Bet' AS name, time FROM minutes_1 WHERE phone = ? AND time >= ? AND time <= ?",
      count: "SELECT COUNT(*) AS totalCount FROM minutes_1 WHERE phone = ? AND time >= ? AND time <= ?"
    },
    "trxBets": {
      query: "SELECT id_product AS id, (money + fee) AS money, 'negative' AS type, 'Bet' AS name, time FROM trx_wingo_bets WHERE phone = ? AND time >= ? AND time <= ?",
      count: "SELECT COUNT(*) AS totalCount FROM trx_wingo_bets WHERE phone = ? AND time >= ? AND time <= ?"
    },
    "Bet Win": {
      query: "SELECT id_product AS id, get AS money, 'positive' AS type, 'Win' AS name, time FROM minutes_1 WHERE phone = ? AND get > 0 AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM minutes_1 WHERE phone = ? AND get > 0 AND time >= ? AND time <=?"
    },
    "trxBet Win": {
      query: "SELECT id_product AS id, get AS money, 'positive' AS type, 'Win' AS name, time FROM trx_wingo_bets WHERE phone = ? AND get > 0 AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM trx_wingo_bets WHERE phone = ? AND get > 0 AND time >= ? AND time <=?"
    },
    Recharge: {
      query: "SELECT id_order AS id, money, 'positive' AS type, 'Recharge' AS name, time FROM recharge WHERE phone = ? AND status = 1 AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM recharge WHERE phone = ? AND status = 1 AND time >= ? AND time <=?"
    },
    Withdraw: {
      query: "SELECT id_order AS id, money, 'negative' AS type, 'Withdraw' AS name, time FROM withdraw WHERE phone = ? AND status = 1 AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM withdraw WHERE phone = ? AND status = 1 AND time >= ? AND time <=?"
    },
    Commissions: {
      query: "SELECT commission_id AS id, SUM(money) AS money, 'positive' AS type, 'Commission' AS name, time FROM commissions WHERE phone = ? AND time >= ? AND time <=? GROUP BY time",
      count: "SELECT COUNT(*) AS totalCount FROM (SELECT time FROM commissions WHERE phone = ? AND time >= ? AND time <=? GROUP BY time) AS grouped"
    },
    "Gift Vouchers": {
      query: "SELECT id_redenvelops AS id, money, 'positive' AS type, 'Red Envelopes' AS name, time FROM redenvelopes_used WHERE phone_used = ? AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM redenvelopes_used WHERE phone_used = ? AND time >= ? AND time <=?"
    },
    Salary: {
      query: "SELECT id, amount AS money, 'positive' AS type, CONCAT(type, ' SALARY') AS name, time FROM salary WHERE phone = ? AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM salary WHERE phone = ? AND time >= ? AND time <=?"
    },
    Advance: {
      query: "SELECT id, amount AS money, 'positive' AS type, CONCAT(type, ' SALARY') AS name, time FROM advance WHERE phone = ? AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM advance WHERE phone = ? AND time >= ? AND time <=?"
    },
    "Claimed Rewards": {
      query: "SELECT time AS id, amount AS money, 'positive' AS type, type AS name, time FROM claimed_rewards WHERE phone = ? AND time >= ? AND time <=?",
      count: "SELECT COUNT(*) AS totalCount FROM claimed_rewards WHERE phone = ? AND time >= ? AND time <=?"
    }
  };
  if (filterType === "All") {
    // Construct combined queries and total count queries
    var selectedQueries = Object.values(queries).map(function (query) {
      return "(".concat(query.query, ")");
    }).join(" UNION ALL ");
    var totalCountQueries = Object.values(queries).map(function (query) {
      return "(".concat(query.count, ")");
    }).join(" + ");
    var transactionsQuery = "\n       SELECT * FROM (".concat(selectedQueries, ") AS combined\n       ORDER BY time DESC\n       LIMIT ").concat(limit, " OFFSET ").concat(offset, "\n     ");
    var totalCountQuery = "\n       SELECT ".concat(totalCountQueries, " AS totalCount\n     ");
    var params = Object.values(queries).flatMap(function (query) {
      return [phone, startDate, endDate];
    });
    return {
      transactionsQuery: transactionsQuery,
      totalCountQuery: totalCountQuery,
      params: params
    };
  }
  if (filterType === 'Bets' || filterType === 'Bet Win') {
    var _queries$filterType, _queries, _queries$filterType2, _queries2;
    var selectedQuery = "".concat(((_queries$filterType = queries[filterType]) === null || _queries$filterType === void 0 ? void 0 : _queries$filterType.query) || '', " UNION ALL ").concat(((_queries = queries["trx".concat(filterType)]) === null || _queries === void 0 ? void 0 : _queries.query) || '');
    var _totalCountQueries = "(".concat(((_queries$filterType2 = queries[filterType]) === null || _queries$filterType2 === void 0 ? void 0 : _queries$filterType2.count) || '0', ") + (").concat(((_queries2 = queries["trx".concat(filterType)]) === null || _queries2 === void 0 ? void 0 : _queries2.count) || '0', ")");
    var _totalCountQuery = "\n       SELECT ".concat(_totalCountQueries, " AS totalCount\n     ");
    var _transactionsQuery = "".concat(selectedQuery, "\n       ORDER BY time DESC\n       LIMIT ").concat(limit, " OFFSET ").concat(offset, "\n     ");
    var _params = [phone, startDate, endDate, phone, startDate, endDate];
    return {
      transactionsQuery: _transactionsQuery,
      totalCountQuery: _totalCountQuery,
      params: _params
    };
  } else {
    var _queries$filterType3, _queries$filterType4;
    // Handle specific filterType
    var _selectedQuery = (_queries$filterType3 = queries[filterType]) === null || _queries$filterType3 === void 0 ? void 0 : _queries$filterType3.query;
    var _totalCountQuery2 = (_queries$filterType4 = queries[filterType]) === null || _queries$filterType4 === void 0 ? void 0 : _queries$filterType4.count;
    if (_selectedQuery && _totalCountQuery2) {
      var _transactionsQuery2 = "\n         ".concat(_selectedQuery, "\n         ORDER BY time DESC\n         LIMIT ").concat(limit, " OFFSET ").concat(offset, "\n       ");
      var _params2 = [phone, startDate, endDate];
      return {
        transactionsQuery: _transactionsQuery2,
        totalCountQuery: _totalCountQuery2,
        params: _params2
      };
    } else {
      throw new Error("Invalid filterType \"".concat(filterType, "\" provided."));
    }
  }
};
var listTransaction = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var _req$query;
    var auth, _yield$connection$que171, _yield$connection$que172, user, userInfo, page, limit, startDate, endDate, filterType, offset, _constructTransaction, transactionsQuery, totalCountQuery, params, _yield$connection$que173, _yield$connection$que174, transactions, _yield$connection$que175, _yield$connection$que176, totalCount, totalPages;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context29.next = 3;
            break;
          }
          return _context29.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 3:
          _context29.next = 5;
          return _connectDB["default"].query("SELECT `phone`, `code`, `invite` FROM users WHERE `token` = ?", [auth]);
        case 5:
          _yield$connection$que171 = _context29.sent;
          _yield$connection$que172 = _slicedToArray(_yield$connection$que171, 1);
          user = _yield$connection$que172[0];
          userInfo = user[0];
          if (userInfo) {
            _context29.next = 11;
            break;
          }
          return _context29.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: new Date().toISOString()
          }));
        case 11:
          page = parseInt(req.query.page) || 1;
          limit = parseInt(req.query.limit) || 10;
          startDate = Number(req === null || req === void 0 ? void 0 : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.startDate) || '';
          endDate = startDate ? (0, _games.getDayTime)(startDate).endOfDayTimestamp : new Date().getTime();
          filterType = req.query.filterType || "All";
          offset = (page - 1) * limit;
          _constructTransaction = constructTransactionsQuery(filterType, startDate, endDate, userInfo.phone, limit, offset), transactionsQuery = _constructTransaction.transactionsQuery, totalCountQuery = _constructTransaction.totalCountQuery, params = _constructTransaction.params;
          _context29.next = 20;
          return _connectDB["default"].query(transactionsQuery, params);
        case 20:
          _yield$connection$que173 = _context29.sent;
          _yield$connection$que174 = _slicedToArray(_yield$connection$que173, 1);
          transactions = _yield$connection$que174[0];
          _context29.next = 25;
          return _connectDB["default"].query(totalCountQuery, params);
        case 25:
          _yield$connection$que175 = _context29.sent;
          _yield$connection$que176 = _slicedToArray(_yield$connection$que175, 1);
          totalCount = _yield$connection$que176[0];
          totalPages = Math.ceil(totalCount[0].totalCount / limit);
          res.json({
            message: "Success",
            status: true,
            data: transactions,
            totalPages: totalPages,
            currentPage: page,
            timeStamp: new Date().toISOString()
          });
        case 30:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function listTransaction(_x56, _x57) {
    return _ref27.apply(this, arguments);
  };
}();
var useRedenvelope = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var auth, code, _yield$connection$que177, _yield$connection$que178, user, _userInfo4, _yield$connection$que179, _yield$connection$que180, redenvelopes, redenvelope, _yield$connection$que181, _yield$connection$que182, redenvelopesUsed, time, sql, _yield$connection$que183, _yield$connection$que184, redenvelopesUsedByAll;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.prev = 0;
          auth = req.cookies.auth;
          code = req.body.code;
          if (auth) {
            _context30.next = 5;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "Authentication failed",
            status: false,
            timeStamp: timeNow
          }));
        case 5:
          if (code) {
            _context30.next = 7;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "Please provide a redemption code",
            status: false,
            timeStamp: timeNow
          }));
        case 7:
          _context30.next = 9;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 9:
          _yield$connection$que177 = _context30.sent;
          _yield$connection$que178 = _slicedToArray(_yield$connection$que177, 1);
          user = _yield$connection$que178[0];
          if (!(user.length === 0)) {
            _context30.next = 14;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "Authentication failed, Login again",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          _userInfo4 = user === null || user === void 0 ? void 0 : user[0];
          _context30.next = 17;
          return _connectDB["default"].query("SELECT * FROM redenvelopes WHERE id_redenvelope = ?", [code]);
        case 17:
          _yield$connection$que179 = _context30.sent;
          _yield$connection$que180 = _slicedToArray(_yield$connection$que179, 1);
          redenvelopes = _yield$connection$que180[0];
          if (!(redenvelopes.length === 0)) {
            _context30.next = 22;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "Invalid Redemption code",
            status: false,
            timeStamp: timeNow
          }));
        case 22:
          redenvelope = redenvelopes === null || redenvelopes === void 0 ? void 0 : redenvelopes[0];
          if (!(Number(redenvelope.expire_date) !== 0 && Number(redenvelope.expire_date) < new Date().getTime())) {
            _context30.next = 25;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "Gift code expired",
            status: false,
            timeStamp: timeNow
          }));
        case 25:
          if (!(redenvelope.for_new_users && Number(user.time) < Number(redenvelope.time))) {
            _context30.next = 27;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "This gift code is only valid for new users!",
            status: false,
            timeStamp: timeNow
          }));
        case 27:
          _context30.next = 29;
          return _connectDB["default"].query("SELECT * FROM redenvelopes_used WHERE id_redenvelops = ? AND phone_used = ?", [code, _userInfo4 === null || _userInfo4 === void 0 ? void 0 : _userInfo4.phone]);
        case 29:
          _yield$connection$que181 = _context30.sent;
          _yield$connection$que182 = _slicedToArray(_yield$connection$que181, 1);
          redenvelopesUsed = _yield$connection$que182[0];
          if (!(redenvelopesUsed.length > 0)) {
            _context30.next = 34;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "Gift code already used",
            status: false,
            timeStamp: timeNow
          }));
        case 34:
          if (!(redenvelope.status == 1)) {
            _context30.next = 36;
            break;
          }
          return _context30.abrupt("return", res.status(200).json({
            message: "Gift code fully used",
            status: false,
            timeStamp: timeNow
          }));
        case 36:
          time = new Date().getTime();
          sql = "INSERT INTO redenvelopes_used SET phone = ?, phone_used = ?, id_redenvelops = ?, money = ?, `time` = ? ";
          _context30.next = 40;
          return _connectDB["default"].query(sql, [redenvelope.phone, _userInfo4.phone, redenvelope.id_redenvelope, redenvelope.money, time]);
        case 40:
          _context30.next = 42;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE `phone` = ? ", [redenvelope.money, _userInfo4.phone]);
        case 42:
          _context30.next = 44;
          return _connectDB["default"].query("SELECT * FROM redenvelopes_used WHERE id_redenvelops = ? ", [code]);
        case 44:
          _yield$connection$que183 = _context30.sent;
          _yield$connection$que184 = _slicedToArray(_yield$connection$que183, 1);
          redenvelopesUsedByAll = _yield$connection$que184[0];
          if (!(redenvelopesUsedByAll.length >= redenvelope.used)) {
            _context30.next = 50;
            break;
          }
          _context30.next = 50;
          return _connectDB["default"].query("UPDATE redenvelopes SET status = ? WHERE `id_redenvelope` = ? ", [1, redenvelope.id_redenvelope]);
        case 50:
          return _context30.abrupt("return", res.status(200).json({
            message: "Received successfully + \u20B9".concat(redenvelope.money),
            status: true,
            timeStamp: timeNow
          }));
        case 53:
          _context30.prev = 53;
          _context30.t0 = _context30["catch"](0);
          console.log(_context30.t0);
          res.status(500).json({
            message: "Internal server error",
            status: false,
            timeStamp: timeNow
          });
        case 57:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[0, 53]]);
  }));
  return function useRedenvelope(_x58, _x59) {
    return _ref28.apply(this, arguments);
  };
}();
var callback_bank = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var transaction_id, client_transaction_id, amount, requested_datetime, expired_datetime, payment_datetime, status, _yield$connection$que185, _yield$connection$que186, info;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          transaction_id = req.body.transaction_id;
          client_transaction_id = req.body.client_transaction_id;
          amount = req.body.amount;
          requested_datetime = req.body.requested_datetime;
          expired_datetime = req.body.expired_datetime;
          payment_datetime = req.body.payment_datetime;
          status = req.body.status;
          if (transaction_id) {
            _context31.next = 9;
            break;
          }
          return _context31.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 9:
          if (!(status == 2)) {
            _context31.next = 22;
            break;
          }
          _context31.next = 12;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id_order = ?", [client_transaction_id]);
        case 12:
          _context31.next = 14;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE id_order = ?", [client_transaction_id]);
        case 14:
          _yield$connection$que185 = _context31.sent;
          _yield$connection$que186 = _slicedToArray(_yield$connection$que185, 1);
          info = _yield$connection$que186[0];
          _context31.next = 19;
          return _connectDB["default"].query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ", [info[0].money, info[0].money, info[0].phone]);
        case 19:
          return _context31.abrupt("return", res.status(200).json({
            message: 0,
            status: true
          }));
        case 22:
          _context31.next = 24;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id = ?", [id]);
        case 24:
          return _context31.abrupt("return", res.status(200).json({
            message: "Cancellation successful",
            status: true,
            datas: recharge
          }));
        case 25:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return function callback_bank(_x60, _x61) {
    return _ref29.apply(this, arguments);
  };
}();
var confirmRecharge = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var _req$body;
    var auth, client_txn_id, _yield$connection$que187, _yield$connection$que188, user, userInfo, _yield$connection$que189, _yield$connection$que190, recharge, rechargeData, date, dd, mm, yyyy, formattedDate, apiData, apiResponse, apiRecord, money;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          auth = req.cookies.auth; //let money = req.body.money;
          //let paymentUrl = req.body.payment_url;
          client_txn_id = (_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.client_txn_id;
          if (client_txn_id) {
            _context32.next = 4;
            break;
          }
          return _context32.abrupt("return", res.status(200).json({
            message: "client_txn_id is required",
            status: false,
            timeStamp: timeNow
          }));
        case 4:
          if (auth) {
            _context32.next = 6;
            break;
          }
          return _context32.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 6:
          _context32.next = 8;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 8:
          _yield$connection$que187 = _context32.sent;
          _yield$connection$que188 = _slicedToArray(_yield$connection$que187, 1);
          user = _yield$connection$que188[0];
          userInfo = user[0];
          if (user) {
            _context32.next = 14;
            break;
          }
          return _context32.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 14:
          _context32.next = 16;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = ? ", [userInfo.phone, 0]);
        case 16:
          _yield$connection$que189 = _context32.sent;
          _yield$connection$que190 = _slicedToArray(_yield$connection$que189, 1);
          recharge = _yield$connection$que190[0];
          if (!(recharge.length != 0)) {
            _context32.next = 58;
            break;
          }
          rechargeData = recharge[0];
          date = new Date(rechargeData.today);
          dd = String(date.getDate()).padStart(2, "0");
          mm = String(date.getMonth() + 1).padStart(2, "0");
          yyyy = date.getFullYear();
          formattedDate = "".concat(dd, "-").concat(mm, "-").concat(yyyy);
          apiData = {
            key: "60a9ca13-6929-4e40-b687-ff7293e61dce",
            client_txn_id: client_txn_id,
            txn_date: formattedDate
          };
          _context32.prev = 27;
          _context32.next = 30;
          return _axios["default"].post("https://api.ekqr.in/api/check_order_status", apiData);
        case 30:
          apiResponse = _context32.sent;
          // console.log(apiResponse.data)
          apiRecord = apiResponse.data.data;
          if (!(apiRecord.status === "scanning")) {
            _context32.next = 34;
            break;
          }
          return _context32.abrupt("return", res.status(200).json({
            message: "Waiting for confirmation",
            status: false,
            timeStamp: timeNow
          }));
        case 34:
          if (!(apiRecord.client_txn_id === rechargeData.id_order && apiRecord.customer_mobile === rechargeData.phone && apiRecord.amount === rechargeData.money)) {
            _context32.next = 50;
            break;
          }
          if (!(apiRecord.status === "success")) {
            _context32.next = 44;
            break;
          }
          _context32.next = 38;
          return _connectDB["default"].query("UPDATE recharge SET status = 1 WHERE id = ? AND id_order = ? AND phone = ? AND money = ?", [rechargeData.id, apiRecord.client_txn_id, apiRecord.customer_mobile, apiRecord.amount]);
        case 38:
          // const [code] = await connection.query(`SELECT invite, total_money from users WHERE phone = ?`, [apiRecord.customer_mobile]);
          // const [data] = await connection.query('SELECT recharge_bonus_2, recharge_bonus FROM admin_ac WHERE id = 1');
          // let selfBonus = info[0].money * (data[0].recharge_bonus_2 / 100);
          // let money = info[0].money + selfBonus;
          money = apiRecord.amount;
          _context32.next = 41;
          return _connectDB["default"].query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE phone = ? ", [money, money, apiRecord.customer_mobile]);
        case 41:
          return _context32.abrupt("return", res.status(200).json({
            message: "Successful application confirmation",
            status: true,
            datas: recharge
          }));
        case 44:
          if (!(apiRecord.status === "failure" || apiRecord.status === "close")) {
            _context32.next = 48;
            break;
          }
          _context32.next = 47;
          return _connectDB["default"].query("UPDATE recharge SET status = 2 WHERE id = ? AND id_order = ? AND phone = ? AND money = ?", [rechargeData.id, apiRecord.client_txn_id, apiRecord.customer_mobile, apiRecord.amount]);
        case 47:
          return _context32.abrupt("return", res.status(200).json({
            message: "Payment failure",
            status: true,
            timeStamp: timeNow
          }));
        case 48:
          _context32.next = 51;
          break;
        case 50:
          return _context32.abrupt("return", res.status(200).json({
            message: "Mismtach data",
            status: true,
            timeStamp: timeNow
          }));
        case 51:
          _context32.next = 56;
          break;
        case 53:
          _context32.prev = 53;
          _context32.t0 = _context32["catch"](27);
          console.error(_context32.t0);
        case 56:
          _context32.next = 59;
          break;
        case 58:
          return _context32.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false,
            timeStamp: timeNow
          }));
        case 59:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[27, 53]]);
  }));
  return function confirmRecharge(_x62, _x63) {
    return _ref30.apply(this, arguments);
  };
}();
var confirmUSDTRecharge = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return function confirmUSDTRecharge(_x64, _x65) {
    return _ref31.apply(this, arguments);
  };
}();
var updateRecharge = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var auth, money, order_id, data, _yield$connection$que191, _yield$connection$que192, user, userInfo, _yield$connection$que193, _yield$connection$que194, utr, utrInfo;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          auth = req.cookies.auth;
          money = req.body.money;
          order_id = req.body.id_order;
          data = req.body.inputData;
          _context34.next = 6;
          return _connectDB["default"].query("SELECT `phone`, `code`,`invite` FROM users WHERE `token` = ? ", [auth]);
        case 6:
          _yield$connection$que191 = _context34.sent;
          _yield$connection$que192 = _slicedToArray(_yield$connection$que191, 1);
          user = _yield$connection$que192[0];
          userInfo = user[0];
          if (user) {
            _context34.next = 12;
            break;
          }
          return _context34.abrupt("return", res.status(200).json({
            message: "user not found",
            status: false,
            timeStamp: timeNow
          }));
        case 12:
          _context34.next = 14;
          return _connectDB["default"].query("SELECT * FROM recharge WHERE `utr` = ? ", [data]);
        case 14:
          _yield$connection$que193 = _context34.sent;
          _yield$connection$que194 = _slicedToArray(_yield$connection$que193, 1);
          utr = _yield$connection$que194[0];
          utrInfo = utr[0];
          if (utrInfo) {
            _context34.next = 24;
            break;
          }
          _context34.next = 21;
          return _connectDB["default"].query("UPDATE recharge SET utr = ? WHERE phone = ? AND id_order = ?", [data, userInfo.phone, order_id]);
        case 21:
          return _context34.abrupt("return", res.status(200).json({
            message: "UTR updated",
            status: true,
            timeStamp: timeNow
          }));
        case 24:
          return _context34.abrupt("return", res.status(200).json({
            message: "UTR is already in use",
            status: false,
            timeStamp: timeNow
          }));
        case 25:
        case "end":
          return _context34.stop();
      }
    }, _callee34);
  }));
  return function updateRecharge(_x66, _x67) {
    return _ref32.apply(this, arguments);
  };
}();
var transferIn = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var _req$body2, phone, amount, transactionConnection, _yield$transactionCon, _yield$transactionCon2, users, user, currentMoney, currentThirdPartyMoney, updatedMoney, updatedThirdPartyMoney, transferId, epochTime;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _req$body2 = req.body, phone = _req$body2.phone, amount = _req$body2.amount;
          if (!(!phone || !amount || amount <= 0)) {
            _context35.next = 3;
            break;
          }
          return _context35.abrupt("return", res.status(400).json({
            message: "Invalid input data"
          }));
        case 3:
          _context35.prev = 3;
          _context35.next = 6;
          return _connectDB["default"].getConnection();
        case 6:
          transactionConnection = _context35.sent;
          _context35.next = 9;
          return transactionConnection.beginTransaction();
        case 9:
          _context35.next = 11;
          return transactionConnection.query("SELECT money, third_party_money FROM users WHERE phone = ?", [phone]);
        case 11:
          _yield$transactionCon = _context35.sent;
          _yield$transactionCon2 = _slicedToArray(_yield$transactionCon, 1);
          users = _yield$transactionCon2[0];
          if (!(users.length === 0)) {
            _context35.next = 16;
            break;
          }
          throw new Error("User not found");
        case 16:
          user = users[0];
          currentMoney = parseFloat(user.money); // Convert to number
          currentThirdPartyMoney = parseFloat(user.third_party_money || 0); // Convert to number, default 0
          // Validate funds
          if (!(isNaN(currentMoney) || isNaN(currentThirdPartyMoney))) {
            _context35.next = 21;
            break;
          }
          throw new Error("Invalid user data: money or third_party_money is not a number");
        case 21:
          if (!(currentMoney < parseFloat(amount))) {
            _context35.next = 23;
            break;
          }
          throw new Error("Insufficient funds");
        case 23:
          // Calculate updated balances
          updatedMoney = (currentMoney - parseFloat(amount)).toFixed(2);
          updatedThirdPartyMoney = (currentThirdPartyMoney + parseFloat(amount)).toFixed(2); // Update user balances
          _context35.next = 27;
          return transactionConnection.query("UPDATE users SET money = ?, third_party_money = ? WHERE phone = ?", [updatedMoney, updatedThirdPartyMoney, phone]);
        case 27:
          // Insert into safe_transfer
          transferId = Math.floor(100000000000 + Math.random() * 900000000000).toString();
          epochTime = Date.now(); // Get current epoch timestamp
          _context35.next = 31;
          return transactionConnection.query("INSERT INTO safe_transfer (phone, transfer_id, amount, type, time) VALUES (?, ?, ?, ?, ?)", [phone, transferId, parseFloat(amount), 1, epochTime]);
        case 31:
          _context35.next = 33;
          return transactionConnection.commit();
        case 33:
          return _context35.abrupt("return", res.status(200).json({
            message: "Transfer successful",
            transferId: transferId,
            timeStamp: epochTime // Include epoch timestamp in the response
          }));
        case 36:
          _context35.prev = 36;
          _context35.t0 = _context35["catch"](3);
          if (!transactionConnection) {
            _context35.next = 41;
            break;
          }
          _context35.next = 41;
          return transactionConnection.rollback();
        case 41:
          console.error("Error in transferIn:", _context35.t0);
          return _context35.abrupt("return", res.status(500).json({
            message: _context35.t0.message || "Internal server error"
          }));
        case 43:
          _context35.prev = 43;
          if (!transactionConnection) {
            _context35.next = 47;
            break;
          }
          _context35.next = 47;
          return transactionConnection.release();
        case 47:
          return _context35.finish(43);
        case 48:
        case "end":
          return _context35.stop();
      }
    }, _callee35, null, [[3, 36, 43, 48]]);
  }));
  return function transferIn(_x68, _x69) {
    return _ref33.apply(this, arguments);
  };
}();
var transferOut = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
    var _req$body3, phone, amount, transactionConnection, _yield$transactionCon3, _yield$transactionCon4, users, user, currentMoney, currentThirdPartyMoney, updatedMoney, updatedThirdPartyMoney, transferId, epochTime;
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          _req$body3 = req.body, phone = _req$body3.phone, amount = _req$body3.amount;
          if (!(!phone || !amount || amount <= 0)) {
            _context36.next = 3;
            break;
          }
          return _context36.abrupt("return", res.status(400).json({
            message: "Invalid input data"
          }));
        case 3:
          _context36.prev = 3;
          _context36.next = 6;
          return _connectDB["default"].getConnection();
        case 6:
          transactionConnection = _context36.sent;
          _context36.next = 9;
          return transactionConnection.beginTransaction();
        case 9:
          _context36.next = 11;
          return transactionConnection.query("SELECT money, third_party_money FROM users WHERE phone = ?", [phone]);
        case 11:
          _yield$transactionCon3 = _context36.sent;
          _yield$transactionCon4 = _slicedToArray(_yield$transactionCon3, 1);
          users = _yield$transactionCon4[0];
          if (!(users.length === 0)) {
            _context36.next = 16;
            break;
          }
          throw new Error("User not found");
        case 16:
          user = users[0];
          currentMoney = parseFloat(user.money); // Convert to number
          currentThirdPartyMoney = parseFloat(user.third_party_money || 0); // Convert to number, default 0
          // Validate funds
          if (!(isNaN(currentMoney) || isNaN(currentThirdPartyMoney))) {
            _context36.next = 21;
            break;
          }
          throw new Error("Invalid user data: money or third_party_money is not a number");
        case 21:
          if (!(currentThirdPartyMoney < parseFloat(amount))) {
            _context36.next = 23;
            break;
          }
          throw new Error("Insufficient third-party funds");
        case 23:
          // Calculate updated balances
          updatedMoney = (currentMoney + parseFloat(amount)).toFixed(2);
          updatedThirdPartyMoney = (currentThirdPartyMoney - parseFloat(amount)).toFixed(2); // Update user balances
          _context36.next = 27;
          return transactionConnection.query("UPDATE users SET money = ?, third_party_money = ? WHERE phone = ?", [updatedMoney, updatedThirdPartyMoney, phone]);
        case 27:
          // Insert into safe_transfer
          transferId = Math.floor(100000000000 + Math.random() * 900000000000).toString();
          epochTime = Date.now(); // Get current epoch timestamp
          _context36.next = 31;
          return transactionConnection.query("INSERT INTO safe_transfer (phone, transfer_id, amount, type, time) VALUES (?, ?, ?, ?, ?)", [phone, transferId, parseFloat(amount), 2, epochTime] // `type` is 2 for transfer-out
          );
        case 31:
          _context36.next = 33;
          return transactionConnection.commit();
        case 33:
          return _context36.abrupt("return", res.status(200).json({
            message: "Transfer successful",
            transferId: transferId,
            timeStamp: epochTime // Include epoch timestamp in the response
          }));
        case 36:
          _context36.prev = 36;
          _context36.t0 = _context36["catch"](3);
          if (!transactionConnection) {
            _context36.next = 41;
            break;
          }
          _context36.next = 41;
          return transactionConnection.rollback();
        case 41:
          console.error("Error in transferOut:", _context36.t0);
          return _context36.abrupt("return", res.status(500).json({
            message: _context36.t0.message || "Internal server error"
          }));
        case 43:
          _context36.prev = 43;
          if (!transactionConnection) {
            _context36.next = 47;
            break;
          }
          _context36.next = 47;
          return transactionConnection.release();
        case 47:
          return _context36.finish(43);
        case 48:
        case "end":
          return _context36.stop();
      }
    }, _callee36, null, [[3, 36, 43, 48]]);
  }));
  return function transferOut(_x70, _x71) {
    return _ref34.apply(this, arguments);
  };
}();
var transferInHistory = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
    var auth, _yield$connection$que195, _yield$connection$que196, user, userPhone, _yield$connection$que197, _yield$connection$que198, _transferHistory, PaymentMethodsMap, formattedHistory;
    return _regeneratorRuntime().wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context37.next = 3;
            break;
          }
          return _context37.abrupt("return", res.status(400).json({
            message: "Authentication required",
            status: false,
            timeStamp: Date.now()
          }));
        case 3:
          _context37.prev = 3;
          _context37.next = 6;
          return _connectDB["default"].query("SELECT phone FROM users WHERE `token` = ?", [auth]);
        case 6:
          _yield$connection$que195 = _context37.sent;
          _yield$connection$que196 = _slicedToArray(_yield$connection$que195, 1);
          user = _yield$connection$que196[0];
          if (!(user.length === 0)) {
            _context37.next = 11;
            break;
          }
          return _context37.abrupt("return", res.status(404).json({
            message: "User not found",
            status: false,
            timeStamp: Date.now()
          }));
        case 11:
          userPhone = user[0].phone; // Fetch transfer-in history
          _context37.next = 14;
          return _connectDB["default"].query("SELECT transfer_id, amount, type, time FROM safe_transfer WHERE phone = ? ORDER BY time DESC", [userPhone]);
        case 14:
          _yield$connection$que197 = _context37.sent;
          _yield$connection$que198 = _slicedToArray(_yield$connection$que197, 1);
          _transferHistory = _yield$connection$que198[0];
          if (!(_transferHistory.length === 0)) {
            _context37.next = 19;
            break;
          }
          return _context37.abrupt("return", res.status(200).json({
            message: "No history available",
            status: true,
            data: [],
            timeStamp: Date.now()
          }));
        case 19:
          // Define Payment Method Mapping
          PaymentMethodsMap = {
            1: "Invest",
            2: "Withdraw",
            3: "Revenue"
          }; // Format the transfer history for the UI
          formattedHistory = _transferHistory.map(function (data) {
            return {
              id: data.transfer_id,
              amount: parseFloat(data.amount).toFixed(2),
              type: PaymentMethodsMap[data.type] || "Unknown",
              time: data.time
            };
          });
          return _context37.abrupt("return", res.status(200).json({
            message: "Transfer-In history retrieved successfully",
            status: true,
            data: formattedHistory,
            timeStamp: Date.now()
          }));
        case 24:
          _context37.prev = 24;
          _context37.t0 = _context37["catch"](3);
          console.error("Error fetching transfer-in history:", _context37.t0);
          return _context37.abrupt("return", res.status(500).json({
            message: "Internal server error",
            status: false,
            timeStamp: Date.now()
          }));
        case 28:
        case "end":
          return _context37.stop();
      }
    }, _callee37, null, [[3, 24]]);
  }));
  return function transferInHistory(_x72, _x73) {
    return _ref35.apply(this, arguments);
  };
}();
var checkSubordinateRecharge = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
    var auth, _yield$connection$que199, _yield$connection$que200, user, userCode, _yield$connection$que201, _yield$connection$que202, subordinates, firstRechargeDone, anyRecharge;
    return _regeneratorRuntime().wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context39.next = 3;
            break;
          }
          return _context39.abrupt("return", res.status(401).json({
            status: false,
            message: "Unauthorized"
          }));
        case 3:
          _context39.prev = 3;
          _context39.next = 6;
          return _connectDB["default"].query("SELECT code FROM users WHERE token = ?", [auth]);
        case 6:
          _yield$connection$que199 = _context39.sent;
          _yield$connection$que200 = _slicedToArray(_yield$connection$que199, 1);
          user = _yield$connection$que200[0];
          if (!(!user || user.length === 0)) {
            _context39.next = 11;
            break;
          }
          return _context39.abrupt("return", res.status(404).json({
            status: false,
            message: "User not found"
          }));
        case 11:
          userCode = user[0].code; // Fetch subordinates' phones
          _context39.next = 14;
          return _connectDB["default"].query("SELECT phone FROM users WHERE invite = ?", [userCode]);
        case 14:
          _yield$connection$que201 = _context39.sent;
          _yield$connection$que202 = _slicedToArray(_yield$connection$que201, 1);
          subordinates = _yield$connection$que202[0];
          if (!(!subordinates || subordinates.length === 0)) {
            _context39.next = 19;
            break;
          }
          return _context39.abrupt("return", res.status(200).json({
            status: false,
            message: "No subordinates"
          }));
        case 19:
          _context39.next = 21;
          return Promise.all(subordinates.map( /*#__PURE__*/function () {
            var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(sub) {
              var _yield$connection$que203, _yield$connection$que204, _recharge3;
              return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                while (1) switch (_context38.prev = _context38.next) {
                  case 0:
                    _context38.prev = 0;
                    _context38.next = 3;
                    return _connectDB["default"].query("SELECT * FROM recharge WHERE phone = ? AND status = 1 LIMIT 1", [sub.phone]);
                  case 3:
                    _yield$connection$que203 = _context38.sent;
                    _yield$connection$que204 = _slicedToArray(_yield$connection$que203, 1);
                    _recharge3 = _yield$connection$que204[0];
                    return _context38.abrupt("return", _recharge3.length > 0);
                  case 9:
                    _context38.prev = 9;
                    _context38.t0 = _context38["catch"](0);
                    return _context38.abrupt("return", false);
                  case 12:
                  case "end":
                    return _context38.stop();
                }
              }, _callee38, null, [[0, 9]]);
            }));
            return function (_x76) {
              return _ref37.apply(this, arguments);
            };
          }()));
        case 21:
          firstRechargeDone = _context39.sent;
          // Determine if any subordinate has recharged
          anyRecharge = firstRechargeDone.some(function (done) {
            return done;
          });
          return _context39.abrupt("return", res.status(200).json({
            status: true,
            firstRechargeDone: anyRecharge
          }));
        case 26:
          _context39.prev = 26;
          _context39.t0 = _context39["catch"](3);
          return _context39.abrupt("return", res.status(500).json({
            status: false,
            message: "Internal Server Error"
          }));
        case 29:
        case "end":
          return _context39.stop();
      }
    }, _callee39, null, [[3, 26]]);
  }));
  return function checkSubordinateRecharge(_x74, _x75) {
    return _ref36.apply(this, arguments);
  };
}();
var getInvitationRecord = /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
    var auth, _yield$connection$que205, _yield$connection$que206, user, _userInfo5, _yield$connection$que207, _yield$connection$que208, invites;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          _context40.prev = 0;
          auth = req.cookies.auth;
          if (auth) {
            _context40.next = 4;
            break;
          }
          return _context40.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 4:
          _context40.next = 6;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ?", [auth]);
        case 6:
          _yield$connection$que205 = _context40.sent;
          _yield$connection$que206 = _slicedToArray(_yield$connection$que205, 1);
          user = _yield$connection$que206[0];
          if (user.length) {
            _context40.next = 11;
            break;
          }
          return _context40.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 11:
          _userInfo5 = user[0]; // Fetch all invited members and check if the bonus has been claimed
          _context40.next = 14;
          return _connectDB["default"].query("SELECT \n              u.id_user AS uid,\n              u.phone,\n              u.time AS create_time,\n              u.name_user AS username,\n              u.amount,\n              EXISTS (\n                  SELECT 1 \n                  FROM claimed_rewards \n                  WHERE reward_id = u.phone AND type = 'INVITER BONUS'\n              ) AS bonusClaimed\n          FROM users u\n          WHERE u.invite = ?", [_userInfo5.code]);
        case 14:
          _yield$connection$que207 = _context40.sent;
          _yield$connection$que208 = _slicedToArray(_yield$connection$que207, 1);
          invites = _yield$connection$que208[0];
          res.status(200).json({
            message: "Successfully fetched invited members",
            data: invites,
            status: true
          });
          _context40.next = 24;
          break;
        case 20:
          _context40.prev = 20;
          _context40.t0 = _context40["catch"](0);
          console.error("Error fetching invitation records:", _context40.t0);
          res.status(500).json({
            message: "Server error",
            status: false
          });
        case 24:
        case "end":
          return _context40.stop();
      }
    }, _callee40, null, [[0, 20]]);
  }));
  return function getInvitationRecord(_x77, _x78) {
    return _ref38.apply(this, arguments);
  };
}();
var getClaimedRewards = /*#__PURE__*/function () {
  var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    var _yield$connection$que209, _yield$connection$que210, claimedRewards;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          _context41.prev = 0;
          _context41.next = 3;
          return _connectDB["default"].query("SELECT reward_id FROM claimed_rewards WHERE type = 'INVITER BONUS'");
        case 3:
          _yield$connection$que209 = _context41.sent;
          _yield$connection$que210 = _slicedToArray(_yield$connection$que209, 1);
          claimedRewards = _yield$connection$que210[0];
          res.status(200).json({
            message: "Successfully fetched claimed rewards",
            data: claimedRewards,
            status: true
          });
          _context41.next = 13;
          break;
        case 9:
          _context41.prev = 9;
          _context41.t0 = _context41["catch"](0);
          console.error("Error fetching claimed rewards:", _context41.t0);
          res.status(500).json({
            message: "Server error",
            status: false
          });
        case 13:
        case "end":
          return _context41.stop();
      }
    }, _callee41, null, [[0, 9]]);
  }));
  return function getClaimedRewards(_x79, _x80) {
    return _ref39.apply(this, arguments);
  };
}();
var claimBonus = /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(req, res) {
    var auth, phone, _yield$connection$que211, _yield$connection$que212, user, loggedInUser, _yield$connection$que213, _yield$connection$que214, existingClaim, _yield$connection$que215, _yield$connection$que216, bonusAmountResult, bonusAmount, currentTimeMillis, _yield$connection$que217, _yield$connection$que218, insertResult, _yield$connection$que219, _yield$connection$que220, updateMoneyResult;
    return _regeneratorRuntime().wrap(function _callee42$(_context42) {
      while (1) switch (_context42.prev = _context42.next) {
        case 0:
          _context42.prev = 0;
          auth = req.cookies.auth;
          if (auth) {
            _context42.next = 4;
            break;
          }
          return _context42.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 4:
          phone = req.body.phone; // Get phone from request body
          if (phone) {
            _context42.next = 7;
            break;
          }
          return _context42.abrupt("return", res.status(400).json({
            message: "Invalid input data"
          }));
        case 7:
          _context42.next = 9;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ?", [auth]);
        case 9:
          _yield$connection$que211 = _context42.sent;
          _yield$connection$que212 = _slicedToArray(_yield$connection$que211, 1);
          user = _yield$connection$que212[0];
          if (user.length) {
            _context42.next = 14;
            break;
          }
          return _context42.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 14:
          loggedInUser = user[0]; // Check if the bonus has already been claimed
          _context42.next = 17;
          return _connectDB["default"].query("SELECT * FROM claimed_rewards WHERE reward_id = ? AND phone = ? AND type = 'INVITER BONUS'", [phone, loggedInUser.phone]);
        case 17:
          _yield$connection$que213 = _context42.sent;
          _yield$connection$que214 = _slicedToArray(_yield$connection$que213, 1);
          existingClaim = _yield$connection$que214[0];
          if (!(existingClaim.length > 0)) {
            _context42.next = 22;
            break;
          }
          return _context42.abrupt("return", res.status(400).json({
            message: "Bonus already claimed for this user",
            status: false,
            reason: "ALREADY_CLAIMED"
          }));
        case 22:
          _context42.next = 24;
          return _connectDB["default"].query("SELECT INVITER_BONUS_MONEY_ON_REGISTER FROM admin_ac LIMIT 1");
        case 24:
          _yield$connection$que215 = _context42.sent;
          _yield$connection$que216 = _slicedToArray(_yield$connection$que215, 1);
          bonusAmountResult = _yield$connection$que216[0];
          if (bonusAmountResult.length) {
            _context42.next = 29;
            break;
          }
          return _context42.abrupt("return", res.status(500).json({
            message: "Failed to fetch bonus amount from admin settings"
          }));
        case 29:
          bonusAmount = bonusAmountResult[0].INVITER_BONUS_MONEY_ON_REGISTER; // Get the current time as a UNIX timestamp in milliseconds
          currentTimeMillis = Date.now(); // Insert the claimed bonus into claimed_rewards table
          _context42.next = 33;
          return _connectDB["default"].query("INSERT INTO claimed_rewards (phone, reward_id, type, amount, status, time) VALUES (?, ?, ?, ?, ?, ?)", [loggedInUser.phone,
          // Phone of the logged-in user (inviter)
          phone,
          // Phone of the invited user
          "INVITER BONUS",
          // Bonus type
          bonusAmount,
          // Bonus amount
          "1",
          // Status of the claim (1 for success/claimed)
          currentTimeMillis // Current time in milliseconds
          ]);
        case 33:
          _yield$connection$que217 = _context42.sent;
          _yield$connection$que218 = _slicedToArray(_yield$connection$que217, 1);
          insertResult = _yield$connection$que218[0];
          if (!(insertResult.affectedRows === 0)) {
            _context42.next = 38;
            break;
          }
          return _context42.abrupt("return", res.status(500).json({
            message: "Failed to claim bonus. Please try again later."
          }));
        case 38:
          _context42.next = 40;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ?", [bonusAmount, loggedInUser.phone]);
        case 40:
          _yield$connection$que219 = _context42.sent;
          _yield$connection$que220 = _slicedToArray(_yield$connection$que219, 1);
          updateMoneyResult = _yield$connection$que220[0];
          if (!(updateMoneyResult.affectedRows === 0)) {
            _context42.next = 45;
            break;
          }
          return _context42.abrupt("return", res.status(500).json({
            message: "Bonus claimed but failed to update user balance. Please contact support."
          }));
        case 45:
          return _context42.abrupt("return", res.status(200).json({
            message: "Bonus claimed successfully",
            status: true
          }));
        case 48:
          _context42.prev = 48;
          _context42.t0 = _context42["catch"](0);
          console.error("Error claiming bonus:", _context42.t0);
          res.status(500).json({
            message: "Server error",
            status: false
          });
        case 52:
        case "end":
          return _context42.stop();
      }
    }, _callee42, null, [[0, 48]]);
  }));
  return function claimBonus(_x81, _x82) {
    return _ref40.apply(this, arguments);
  };
}();
var getTotalInvitationBonus = /*#__PURE__*/function () {
  var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(req, res) {
    var auth, _yield$connection$que221, _yield$connection$que222, user, loggedInPhone, _yield$connection$que223, _yield$connection$que224, totalBonus, _yield$connection$que225, _yield$connection$que226, invitationCount;
    return _regeneratorRuntime().wrap(function _callee43$(_context43) {
      while (1) switch (_context43.prev = _context43.next) {
        case 0:
          _context43.prev = 0;
          auth = req.cookies.auth;
          if (auth) {
            _context43.next = 4;
            break;
          }
          return _context43.abrupt("return", res.status(401).json({
            message: "Unauthorized"
          }));
        case 4:
          _context43.next = 6;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ?", [auth]);
        case 6:
          _yield$connection$que221 = _context43.sent;
          _yield$connection$que222 = _slicedToArray(_yield$connection$que221, 1);
          user = _yield$connection$que222[0];
          if (user.length) {
            _context43.next = 11;
            break;
          }
          return _context43.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 11:
          loggedInPhone = user[0].phone; // Logged-in user's phone number (0000000000)
          // Calculate the total bonus amount directly from claimed_rewards
          _context43.next = 14;
          return _connectDB["default"].query("SELECT IFNULL(SUM(amount), 0) AS total FROM claimed_rewards WHERE phone = ? AND type = 'INVITER BONUS'", [loggedInPhone]);
        case 14:
          _yield$connection$que223 = _context43.sent;
          _yield$connection$que224 = _slicedToArray(_yield$connection$que223, 1);
          totalBonus = _yield$connection$que224[0];
          _context43.next = 19;
          return _connectDB["default"].query("SELECT COUNT(*) AS total FROM claimed_rewards WHERE phone = ? AND type = 'INVITER BONUS'", [loggedInPhone]);
        case 19:
          _yield$connection$que225 = _context43.sent;
          _yield$connection$que226 = _slicedToArray(_yield$connection$que225, 1);
          invitationCount = _yield$connection$que226[0];
          res.status(200).json({
            message: "Successfully fetched invitation data",
            data: {
              totalBonus: totalBonus[0].total || 0,
              // Total bonus or 0
              effectiveInvitationCount: invitationCount[0].total || 0 // Total count or 0
            },
            status: true
          });
          _context43.next = 29;
          break;
        case 25:
          _context43.prev = 25;
          _context43.t0 = _context43["catch"](0);
          console.error("Error fetching invitation data:", _context43.t0);
          res.status(500).json({
            message: "Server error",
            status: false
          });
        case 29:
        case "end":
          return _context43.stop();
      }
    }, _callee43, null, [[0, 25]]);
  }));
  return function getTotalInvitationBonus(_x83, _x84) {
    return _ref41.apply(this, arguments);
  };
}();
var getAdminConfig = /*#__PURE__*/function () {
  var _ref42 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee44$(_context44) {
      while (1) switch (_context44.prev = _context44.next) {
        case 0:
          _context44.prev = 0;
          _context44.next = 3;
          return _connectDB["default"].query('SELECT minusdtdep, mininrdep, inrusdtrate, safeinterest FROM admin_ac LIMIT 1');
        case 3:
          result = _context44.sent;
          if (!(result.length === 0)) {
            _context44.next = 6;
            break;
          }
          return _context44.abrupt("return", res.status(404).json({
            status: false,
            message: 'Admin configuration not found'
          }));
        case 6:
          // Respond with the fetched data
          res.json({
            status: true,
            data: result[0]
          });
          _context44.next = 12;
          break;
        case 9:
          _context44.prev = 9;
          _context44.t0 = _context44["catch"](0);
          // Handle errors
          res.status(500).json({
            status: false,
            message: 'Failed to fetch admin configuration',
            error: _context44.t0.message
          });
        case 12:
        case "end":
          return _context44.stop();
      }
    }, _callee44, null, [[0, 9]]);
  }));
  return function getAdminConfig(_x85, _x86) {
    return _ref42.apply(this, arguments);
  };
}();
var getNotifications = /*#__PURE__*/function () {
  var _ref43 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(req, res) {
    var _yield$connection$que227, _yield$connection$que228, notifications;
    return _regeneratorRuntime().wrap(function _callee45$(_context45) {
      while (1) switch (_context45.prev = _context45.next) {
        case 0:
          _context45.prev = 0;
          _context45.next = 3;
          return _connectDB["default"].query("SELECT id, heading, image, content, link, time FROM notification ORDER BY time DESC");
        case 3:
          _yield$connection$que227 = _context45.sent;
          _yield$connection$que228 = _slicedToArray(_yield$connection$que227, 1);
          notifications = _yield$connection$que228[0];
          res.status(200).json({
            message: "Successfully fetched notifications",
            data: notifications,
            // Array of notifications
            status: true
          });
          _context45.next = 13;
          break;
        case 9:
          _context45.prev = 9;
          _context45.t0 = _context45["catch"](0);
          console.error("Error fetching notifications:", _context45.t0);
          res.status(500).json({
            message: "Server error",
            status: false
          });
        case 13:
        case "end":
          return _context45.stop();
      }
    }, _callee45, null, [[0, 9]]);
  }));
  return function getNotifications(_x87, _x88) {
    return _ref43.apply(this, arguments);
  };
}();

// Feedback submission function
var submitFeedback = /*#__PURE__*/function () {
  var _ref44 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(req, res) {
    var auth, _yield$connection$que229, _yield$connection$que230, user, phone, feedback, date_time, query;
    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
      while (1) switch (_context46.prev = _context46.next) {
        case 0:
          auth = req.cookies.auth; // Get the authentication token from cookies.
          if (auth) {
            _context46.next = 3;
            break;
          }
          return _context46.abrupt("return", res.status(401).json({
            message: "Unauthorized. Please log in first."
          }));
        case 3:
          _context46.next = 5;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ?", [auth]);
        case 5:
          _yield$connection$que229 = _context46.sent;
          _yield$connection$que230 = _slicedToArray(_yield$connection$que229, 1);
          user = _yield$connection$que230[0];
          if (!(!user || user.length === 0)) {
            _context46.next = 10;
            break;
          }
          return _context46.abrupt("return", res.status(404).json({
            message: "User not found."
          }));
        case 10:
          phone = user[0].phone; // Get the phone number of the logged-in user.
          feedback = req.body.feedback; // Extract feedback from request body.
          if (feedback) {
            _context46.next = 14;
            break;
          }
          return _context46.abrupt("return", res.status(400).json({
            message: "Feedback is required!"
          }));
        case 14:
          date_time = new Date().toISOString(); // Capture the current date and time.
          // Insert feedback into the database
          query = "INSERT INTO feedbacks (phone, feedback, date_time) VALUES (?, ?, ?)";
          _context46.next = 18;
          return _connectDB["default"].query(query, [phone, feedback, date_time]);
        case 18:
          res.status(200).json({
            message: "Feedback submitted successfully!"
          });
        case 19:
        case "end":
          return _context46.stop();
      }
    }, _callee46);
  }));
  return function submitFeedback(_x89, _x90) {
    return _ref44.apply(this, arguments);
  };
}();
var getTotalBetAmount = /*#__PURE__*/function () {
  var _ref45 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(req, res) {
    var auth, _yield$connection$que231, _yield$connection$que232, user, phone, queries, today, yesterday, formatDate, dates, results, totalBetAmounts, details;
    return _regeneratorRuntime().wrap(function _callee48$(_context48) {
      while (1) switch (_context48.prev = _context48.next) {
        case 0:
          auth = req.cookies.auth; // Get user token from cookies
          if (auth) {
            _context48.next = 3;
            break;
          }
          return _context48.abrupt("return", res.status(401).json({
            message: "Unauthorized",
            status: false
          }));
        case 3:
          _context48.next = 5;
          return _connectDB["default"].query("SELECT phone FROM users WHERE token = ?", [auth]);
        case 5:
          _yield$connection$que231 = _context48.sent;
          _yield$connection$que232 = _slicedToArray(_yield$connection$que231, 1);
          user = _yield$connection$que232[0];
          if (user.length) {
            _context48.next = 10;
            break;
          }
          return _context48.abrupt("return", res.status(404).json({
            message: "User not found",
            status: false
          }));
        case 10:
          phone = user[0].phone; // SQL queries for today's and yesterday's bets
          queries = {
            wingo: "SELECT SUM(money + fee) AS total FROM minutes_1 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;",
            k3: "SELECT SUM(money) AS total FROM result_k3 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;",
            g5: "SELECT SUM(money) AS total FROM result_5d WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;",
            trx: "SELECT SUM(money) AS total FROM trx_wingo_bets WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?;"
          }; // Get yesterday's and today's dates in 'YYYY-MM-DD' format
          today = new Date();
          yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          formatDate = function formatDate(date) {
            return date.toISOString().split('T')[0];
          };
          dates = {
            today: formatDate(today),
            yesterday: formatDate(yesterday)
          };
          _context48.prev = 17;
          _context48.next = 20;
          return Promise.all(Object.entries(queries).map( /*#__PURE__*/function () {
            var _ref47 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(_ref46) {
              var _ref48, game, query, _yield$connection$que233, _yield$connection$que234, yesterdayData, _yield$connection$que235, _yield$connection$que236, todayData;
              return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                while (1) switch (_context47.prev = _context47.next) {
                  case 0:
                    _ref48 = _slicedToArray(_ref46, 2), game = _ref48[0], query = _ref48[1];
                    _context47.next = 3;
                    return _connectDB["default"].query(query, [phone, dates.yesterday]);
                  case 3:
                    _yield$connection$que233 = _context47.sent;
                    _yield$connection$que234 = _slicedToArray(_yield$connection$que233, 1);
                    yesterdayData = _yield$connection$que234[0];
                    _context47.next = 8;
                    return _connectDB["default"].query(query, [phone, dates.today]);
                  case 8:
                    _yield$connection$que235 = _context47.sent;
                    _yield$connection$que236 = _slicedToArray(_yield$connection$que235, 1);
                    todayData = _yield$connection$que236[0];
                    return _context47.abrupt("return", {
                      game: game,
                      yesterday: yesterdayData[0].total || 0,
                      today: todayData[0].total || 0
                    });
                  case 12:
                  case "end":
                    return _context47.stop();
                }
              }, _callee47);
            }));
            return function (_x93) {
              return _ref47.apply(this, arguments);
            };
          }()));
        case 20:
          results = _context48.sent;
          // Sum total bets for yesterday and today
          totalBetAmounts = results.reduce(function (acc, curr) {
            acc.yesterday += curr.yesterday;
            acc.today += curr.today;
            return acc;
          }, {
            yesterday: 0,
            today: 0
          }); // Prepare response details
          details = results.reduce(function (acc, curr) {
            acc[curr.game] = {
              yesterday: curr.yesterday,
              today: curr.today
            };
            return acc;
          }, {});
          return _context48.abrupt("return", res.status(200).json({
            message: "Total bet amounts retrieved",
            totalBetAmounts: totalBetAmounts,
            details: details
          }));
        case 26:
          _context48.prev = 26;
          _context48.t0 = _context48["catch"](17);
          console.error("Error fetching bet amounts:", _context48.t0);
          return _context48.abrupt("return", res.status(500).json({
            message: "Internal Server Error",
            status: false,
            error: _context48.t0
          }));
        case 30:
        case "end":
          return _context48.stop();
      }
    }, _callee48, null, [[17, 26]]);
  }));
  return function getTotalBetAmount(_x91, _x92) {
    return _ref45.apply(this, arguments);
  };
}();

// Redeem rebate for yesterday's total bets
var redeemRebate = /*#__PURE__*/function () {
  var _ref49 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(req, res) {
    var auth, _yield$connection$que237, _yield$connection$que238, user, phone, todayDate, _yield$connection$que239, _yield$connection$que240, existingClaim, yesterdayDate, formattedYesterday, _yield$connection$que241, _yield$connection$que242, _yield$connection$que243, yesterdayBetTotals, rebateAmount, currentTimeMillis, _yield$connection$que244, _yield$connection$que245, updateMoneyResult;
    return _regeneratorRuntime().wrap(function _callee49$(_context49) {
      while (1) switch (_context49.prev = _context49.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context49.next = 3;
            break;
          }
          return _context49.abrupt("return", res.status(401).json({
            message: "Unauthorized. Please log in.",
            status: false
          }));
        case 3:
          _context49.prev = 3;
          _context49.next = 6;
          return _connectDB["default"].query("SELECT phone FROM users WHERE token = ?", [auth]);
        case 6:
          _yield$connection$que237 = _context49.sent;
          _yield$connection$que238 = _slicedToArray(_yield$connection$que237, 1);
          user = _yield$connection$que238[0];
          if (user.length) {
            _context49.next = 11;
            break;
          }
          return _context49.abrupt("return", res.status(404).json({
            message: "User not found.",
            status: false
          }));
        case 11:
          phone = user[0].phone;
          todayDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD format
          // Check if the user has already claimed the rebate today
          _context49.next = 15;
          return _connectDB["default"].query("SELECT * FROM claimed_rewards WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? AND type = ?", [phone, todayDate, "REBATE"]);
        case 15:
          _yield$connection$que239 = _context49.sent;
          _yield$connection$que240 = _slicedToArray(_yield$connection$que239, 1);
          existingClaim = _yield$connection$que240[0];
          if (!existingClaim.length) {
            _context49.next = 20;
            break;
          }
          return _context49.abrupt("return", res.status(400).json({
            message: "Rebate already claimed for today.",
            status: false
          }));
        case 20:
          // Calculate the rebate amount (0.05% of yesterday's total bet)
          yesterdayDate = new Date();
          yesterdayDate.setDate(yesterdayDate.getDate() - 1);
          formattedYesterday = yesterdayDate.toISOString().split("T")[0];
          _context49.next = 25;
          return _connectDB["default"].query("SELECT \n          COALESCE(SUM(money), 0) AS totalYesterday \n        FROM (\n          SELECT money FROM minutes_1 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? \n          UNION ALL\n          SELECT money FROM result_k3 WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? \n          UNION ALL\n          SELECT money FROM result_5d WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ? \n          UNION ALL\n          SELECT money FROM trx_wingo_bets WHERE phone = ? AND DATE(FROM_UNIXTIME(time / 1000)) = ?\n      ) AS combined", [phone, formattedYesterday, phone, formattedYesterday, phone, formattedYesterday, phone, formattedYesterday]);
        case 25:
          _yield$connection$que241 = _context49.sent;
          _yield$connection$que242 = _slicedToArray(_yield$connection$que241, 1);
          _yield$connection$que243 = _slicedToArray(_yield$connection$que242[0], 1);
          yesterdayBetTotals = _yield$connection$que243[0];
          rebateAmount = (yesterdayBetTotals.totalYesterday || 0) * 0.0005; // 0.05% rebate
          if (!(rebateAmount <= 0)) {
            _context49.next = 32;
            break;
          }
          return _context49.abrupt("return", res.status(400).json({
            message: "No rebate available for yesterday's bets.",
            status: false
          }));
        case 32:
          // Insert claimed rebate into claimed_rewards
          currentTimeMillis = Date.now();
          _context49.next = 35;
          return _connectDB["default"].query("INSERT INTO claimed_rewards (phone, reward_id, type, amount, status, time) VALUES (?, ?, ?, ?, ?, ?)", [phone, phone, "REBATE", rebateAmount, "1", currentTimeMillis]);
        case 35:
          _context49.next = 37;
          return _connectDB["default"].query("UPDATE users SET money = money + ? WHERE phone = ?", [rebateAmount, phone]);
        case 37:
          _yield$connection$que244 = _context49.sent;
          _yield$connection$que245 = _slicedToArray(_yield$connection$que244, 1);
          updateMoneyResult = _yield$connection$que245[0];
          if (!(updateMoneyResult.affectedRows === 0)) {
            _context49.next = 42;
            break;
          }
          return _context49.abrupt("return", res.status(500).json({
            message: "Failed to update balance. Please try again later."
          }));
        case 42:
          res.status(200).json({
            message: "Rebate claimed successfully!",
            rebateAmount: rebateAmount
          });
          _context49.next = 49;
          break;
        case 45:
          _context49.prev = 45;
          _context49.t0 = _context49["catch"](3);
          console.error("Error redeeming rebate:", _context49.t0);
          res.status(500).json({
            message: "Server error",
            status: false
          });
        case 49:
        case "end":
          return _context49.stop();
      }
    }, _callee49, null, [[3, 45]]);
  }));
  return function redeemRebate(_x94, _x95) {
    return _ref49.apply(this, arguments);
  };
}();

// Fetch claimed rebate history of the user
var getClaimedRebates = /*#__PURE__*/function () {
  var _ref50 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(req, res) {
    var auth, _yield$connection$que246, _yield$connection$que247, user, phone, _yield$connection$que248, _yield$connection$que249, claimedRewards;
    return _regeneratorRuntime().wrap(function _callee50$(_context50) {
      while (1) switch (_context50.prev = _context50.next) {
        case 0:
          auth = req.cookies.auth;
          if (auth) {
            _context50.next = 3;
            break;
          }
          return _context50.abrupt("return", res.status(401).json({
            message: "Unauthorized. Please log in.",
            status: false
          }));
        case 3:
          _context50.prev = 3;
          _context50.next = 6;
          return _connectDB["default"].query("SELECT phone FROM users WHERE token = ?", [auth]);
        case 6:
          _yield$connection$que246 = _context50.sent;
          _yield$connection$que247 = _slicedToArray(_yield$connection$que246, 1);
          user = _yield$connection$que247[0];
          if (user.length) {
            _context50.next = 11;
            break;
          }
          return _context50.abrupt("return", res.status(404).json({
            message: "User not found.",
            status: false
          }));
        case 11:
          phone = user[0].phone; // Fetch claimed rebates for the user
          _context50.next = 14;
          return _connectDB["default"].query("SELECT type, amount, FROM_UNIXTIME(time / 1000) AS claimedAt FROM claimed_rewards WHERE phone = ? AND type = 'REBATE' ORDER BY time DESC", [phone]);
        case 14:
          _yield$connection$que248 = _context50.sent;
          _yield$connection$que249 = _slicedToArray(_yield$connection$que248, 1);
          claimedRewards = _yield$connection$que249[0];
          res.status(200).json({
            message: "Successfully fetched claimed rebates",
            data: claimedRewards,
            status: true
          });
          _context50.next = 24;
          break;
        case 20:
          _context50.prev = 20;
          _context50.t0 = _context50["catch"](3);
          console.error("Error fetching claimed rebates:", _context50.t0);
          res.status(500).json({
            message: "Server error",
            status: false
          });
        case 24:
        case "end":
          return _context50.stop();
      }
    }, _callee50, null, [[3, 20]]);
  }));
  return function getClaimedRebates(_x96, _x97) {
    return _ref50.apply(this, arguments);
  };
}();
var userController = {
  userInfo: userInfo,
  changeUser: changeUser,
  promotion: promotion,
  myTeam: myTeam,
  wowpay: wowpay,
  recharge: recharge,
  recharge2: recharge2,
  listRecharge: listRecharge,
  listWithdraw: listWithdraw,
  listTransaction: listTransaction,
  changePassword: changePassword,
  checkInHandling: checkInHandling,
  infoUserBank: infoUserBank,
  addBank: addBank,
  withdrawal3: withdrawal3,
  transfer: transfer,
  transferHistory: transferHistory,
  getInvitationRecord: getInvitationRecord,
  getClaimedRewards: getClaimedRewards,
  claimBonus: claimBonus,
  getNotifications: getNotifications,
  submitFeedback: submitFeedback,
  redeemRebate: redeemRebate,
  getClaimedRebates: getClaimedRebates,
  getTotalBetAmount: getTotalBetAmount,
  getAdminConfig: getAdminConfig,
  getTotalInvitationBonus: getTotalInvitationBonus,
  callback_bank: callback_bank,
  checkSubordinateRecharge: checkSubordinateRecharge,
  listMyTeam: listMyTeam,
  verifyCode: verifyCode,
  aviator: aviator,
  useRedenvelope: useRedenvelope,
  search: search,
  updateRecharge: updateRecharge,
  transferIn: transferIn,
  transferOut: transferOut,
  transferInHistory: transferInHistory,
  confirmRecharge: confirmRecharge,
  cancelRecharge: cancelRecharge,
  confirmUSDTRecharge: confirmUSDTRecharge,
  listGameswingo: listGameswingo,
  listGamesk3: listGamesk3,
  listGames5d: listGames5d,
  listGamestrx: listGamestrx
};
var _default = exports["default"] = userController;