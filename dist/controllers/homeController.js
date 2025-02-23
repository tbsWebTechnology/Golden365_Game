"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _md = _interopRequireDefault(require("md5"));
var _express = _interopRequireDefault(require("express"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // import e from "express";
_dotenv["default"].config();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
var homePage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var isAuthenticated, _yield$connection$que, _yield$connection$que2, settings, app, app_name, app_about, app_notification, notice1, notice2, notice3, bannersDir;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          isAuthenticated = !!req.cookies.auth; // true if logged in, false if not
          _context.next = 4;
          return _connectDB["default"].query('SELECT `app` , `app_name`, `app_about` , `app_notification` , `notice1` , `notice2` , `notice3` FROM admin_ac');
        case 4:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          settings = _yield$connection$que2[0];
          app = settings[0].app;
          app_name = settings[0].app_name;
          app_about = settings[0].app_about;
          app_notification = settings[0].app_notification;
          notice1 = settings[0].notice1;
          notice2 = settings[0].notice2;
          notice3 = settings[0].notice3;
          bannersDir = _path["default"].join(_dirname, '../public/uploads/banners');
          _fs["default"].readdir(bannersDir, function (err, files) {
            if (err) {
              console.error('Error reading banner files:', err);
              return res.status(500).send('Internal server error');
            }
            // Filter out directories and get only file names
            var bannerFiles = files.filter(function (file) {
              return _fs["default"].statSync(_path["default"].join(bannersDir, file)).isFile();
            });
            res.render("home/index.ejs", {
              app: app,
              banners: bannerFiles,
              isAuthenticated: isAuthenticated,
              app_name: app_name,
              app_about: app_about,
              app_notification: app_notification,
              notice1: notice1,
              notice2: notice2,
              notice3: notice3
            }); // Pass banner files to the member page template
          });
          _context.next = 21;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send('Internal server error'));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 18]]);
  }));
  return function homePage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Function to handle fetching banner files for the admin panel
var getBannerFiles = function getBannerFiles(req, res) {
  // Read the contents of the 'uploads/banners' directory
  var bannersDir = _path["default"].join(_dirname, '../uploads/banners');
  _fs["default"].readdir(bannersDir, function (err, files) {
    if (err) {
      console.error('Error reading banner files:', err);
      return res.status(500).send('Internal server error');
    }
    // Filter out directories and get only file names
    var bannerFiles = files.filter(function (file) {
      return _fs["default"].statSync(_path["default"].join(bannersDir, file)).isFile();
    });
    res.render('index', {
      banners: bannerFiles
    }); // Pass banner files to the homepage template
  });
};
var activityPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", res.render("checkIn/activity.ejs"));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function activityPage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var supportPage = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var auth, _yield$connection$que3, _yield$connection$que4, users, telegram, _yield$connection$que5, _yield$connection$que6, _settings, _yield$connection$que7, _yield$connection$que8, settings, _yield$connection$que9, _yield$connection$que10, check, _yield$connection$que11, _yield$connection$que12, _yield$connection$que13, _yield$connection$que14;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          auth = req.cookies.auth;
          _context3.next = 3;
          return _connectDB["default"].query("SELECT `level`, `ctv` FROM users WHERE token = ?", [auth]);
        case 3:
          _yield$connection$que3 = _context3.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          users = _yield$connection$que4[0];
          telegram = "";
          if (!(users.length == 0)) {
            _context3.next = 16;
            break;
          }
          _context3.next = 10;
          return _connectDB["default"].query("SELECT `telegram`, `cskh` FROM admin_ac");
        case 10:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          _settings = _yield$connection$que6[0];
          telegram = _settings[0].telegram;
          _context3.next = 43;
          break;
        case 16:
          if (!(users[0].level != 0)) {
            _context3.next = 24;
            break;
          }
          _context3.next = 19;
          return _connectDB["default"].query("SELECT * FROM admin_ac");
        case 19:
          _yield$connection$que7 = _context3.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          settings = _yield$connection$que8[0];
          _context3.next = 42;
          break;
        case 24:
          _context3.next = 26;
          return _connectDB["default"].query("SELECT `telegram` FROM point_list WHERE phone = ?", [users[0].ctv]);
        case 26:
          _yield$connection$que9 = _context3.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          check = _yield$connection$que10[0];
          if (!(check.length == 0)) {
            _context3.next = 37;
            break;
          }
          _context3.next = 32;
          return _connectDB["default"].query("SELECT * FROM admin_ac");
        case 32:
          _yield$connection$que11 = _context3.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          settings = _yield$connection$que12[0];
          _context3.next = 42;
          break;
        case 37:
          _context3.next = 39;
          return _connectDB["default"].query("SELECT `telegram` FROM point_list WHERE phone = ?", [users[0].ctv]);
        case 39:
          _yield$connection$que13 = _context3.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          settings = _yield$connection$que14[0];
        case 42:
          telegram = settings[0].telegram;
        case 43:
          return _context3.abrupt("return", res.render("member/support.ejs", {
            telegram: telegram
          }));
        case 44:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function supportPage(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var originalPage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", res.render("home/original.ejs"));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function originalPage(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var fishingPage = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", res.render("home/fishing.ejs"));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function fishingPage(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var casinosPage = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", res.render("home/casinos.ejs"));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function casinosPage(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var slotsPage = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", res.render("home/slots.ejs"));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function slotsPage(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var betHistoryPage = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", res.render("member/bet-history.ejs"));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function betHistoryPage(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var betk3Page = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", res.render("member/k3-bet-history.ejs"));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function betk3Page(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var bet5dPage = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          return _context10.abrupt("return", res.render("member/5d-bet-history.ejs"));
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function bet5dPage(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var betwingoPage = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", res.render("member/wingo-bet-history.ejs"));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function betwingoPage(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var bettrxwingoPage = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", res.render("member/trx-wingo-bet-history.ejs"));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function bettrxwingoPage(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var attendancePage = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          return _context13.abrupt("return", res.render("checkIn/attendance.ejs"));
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function attendancePage(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var firstDepositBonusPage = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          return _context14.abrupt("return", res.render("checkIn/firstDepositBonus.ejs"));
        case 1:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function firstDepositBonusPage(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var promotionRebateRatioPage = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          return _context15.abrupt("return", res.render("promotion/rebateRadio.ejs"));
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function promotionRebateRatioPage(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var rebatePage = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          return _context16.abrupt("return", res.render("checkIn/rebate.ejs"));
        case 1:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function rebatePage(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var vipPage = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          return _context17.abrupt("return", res.render("checkIn/vip.ejs"));
        case 1:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function vipPage(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var newHot = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          return _context18.abrupt("return", res.render("checkIn/newHot.ejs"));
        case 1:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function newHot(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var youtube = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          return _context19.abrupt("return", res.render("checkIn/youtube.ejs"));
        case 1:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function youtube(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var program = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          return _context20.abrupt("return", res.render("checkIn/program.ejs"));
        case 1:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function program(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var winzo = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          return _context21.abrupt("return", res.render("checkIn/winzo.ejs"));
        case 1:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function winzo(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var agent = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          return _context22.abrupt("return", res.render("checkIn/agent.ejs"));
        case 1:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function agent(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var mystery = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          return _context23.abrupt("return", res.render("checkIn/mystery.ejs"));
        case 1:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function mystery(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
var dailyCheck = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          return _context24.abrupt("return", res.render("checkIn/dailyCheck.ejs"));
        case 1:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function dailyCheck(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
var jackpotPage = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          return _context25.abrupt("return", res.render("checkIn/jackpot.ejs"));
        case 1:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function jackpotPage(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
var dailytaskPage = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          return _context26.abrupt("return", res.render("checkIn/dailytask.ejs"));
        case 1:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function dailytaskPage(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
var invibonusPage = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          return _context27.abrupt("return", res.render("checkIn/invibonus.ejs"));
        case 1:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function invibonusPage(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
var invitationRulesPage = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          return _context28.abrupt("return", res.render("checkIn/invitationRules.ejs"));
        case 1:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function invitationRulesPage(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
var jackpotRulesPage = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          return _context29.abrupt("return", res.render("checkIn/rules.ejs"));
        case 1:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function jackpotRulesPage(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
var aviatorBettingRewardPage = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          return _context30.abrupt("return", res.render("checkIn/aviator_betting_reward.ejs"));
        case 1:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return function aviatorBettingRewardPage(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}();
var socialVideoAwardPagePage = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          return _context31.abrupt("return", res.render("checkIn/social_video_award.ejs"));
        case 1:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return function socialVideoAwardPagePage(_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}();
var jackpotWiningStarPage = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          return _context32.abrupt("return", res.render("checkIn/wining_star.ejs"));
        case 1:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }));
  return function jackpotWiningStarPage(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}();
var checkInPage = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          return _context33.abrupt("return", res.render("checkIn/checkIn.ejs"));
        case 1:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return function checkInPage(_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}();
var checkDes = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          return _context34.abrupt("return", res.render("checkIn/checkDes.ejs"));
        case 1:
        case "end":
          return _context34.stop();
      }
    }, _callee34);
  }));
  return function checkDes(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}();
var checkRecord = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          return _context35.abrupt("return", res.render("checkIn/checkRecord.ejs"));
        case 1:
        case "end":
          return _context35.stop();
      }
    }, _callee35);
  }));
  return function checkRecord(_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}();
var addBank = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          return _context36.abrupt("return", res.render("wallet/addbank.ejs"));
        case 1:
        case "end":
          return _context36.stop();
      }
    }, _callee36);
  }));
  return function addBank(_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}();
var selectBank = /*#__PURE__*/function () {
  var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
    return _regeneratorRuntime().wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
        case 0:
          return _context37.abrupt("return", res.render("wallet/selectBank.ejs"));
        case 1:
        case "end":
          return _context37.stop();
      }
    }, _callee37);
  }));
  return function selectBank(_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}();
var invitationRecord = /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
    return _regeneratorRuntime().wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          return _context38.abrupt("return", res.render("checkIn/invitationRecord.ejs"));
        case 1:
        case "end":
          return _context38.stop();
      }
    }, _callee38);
  }));
  return function invitationRecord(_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}();
var rechargeAwardCollectionRecord = /*#__PURE__*/function () {
  var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
    return _regeneratorRuntime().wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          return _context39.abrupt("return", res.render("checkIn/rechargeAwardCollectionRecord.ejs"));
        case 1:
        case "end":
          return _context39.stop();
      }
    }, _callee39);
  }));
  return function rechargeAwardCollectionRecord(_x77, _x78) {
    return _ref39.apply(this, arguments);
  };
}();
var attendanceRecordPage = /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          return _context40.abrupt("return", res.render("checkIn/attendanceRecord.ejs"));
        case 1:
        case "end":
          return _context40.stop();
      }
    }, _callee40);
  }));
  return function attendanceRecordPage(_x79, _x80) {
    return _ref40.apply(this, arguments);
  };
}();
var attendanceRulesPage = /*#__PURE__*/function () {
  var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          return _context41.abrupt("return", res.render("checkIn/attendanceRules.ejs"));
        case 1:
        case "end":
          return _context41.stop();
      }
    }, _callee41);
  }));
  return function attendanceRulesPage(_x81, _x82) {
    return _ref41.apply(this, arguments);
  };
}();
var changeAvatarPage = /*#__PURE__*/function () {
  var _ref42 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(req, res) {
    return _regeneratorRuntime().wrap(function _callee42$(_context42) {
      while (1) switch (_context42.prev = _context42.next) {
        case 0:
          return _context42.abrupt("return", res.render("member/change_avatar.ejs"));
        case 1:
        case "end":
          return _context42.stop();
      }
    }, _callee42);
  }));
  return function changeAvatarPage(_x83, _x84) {
    return _ref42.apply(this, arguments);
  };
}();

// promotion
var promotionPage = /*#__PURE__*/function () {
  var _ref43 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(req, res) {
    return _regeneratorRuntime().wrap(function _callee43$(_context43) {
      while (1) switch (_context43.prev = _context43.next) {
        case 0:
          return _context43.abrupt("return", res.render("promotion/promotion.ejs"));
        case 1:
        case "end":
          return _context43.stop();
      }
    }, _callee43);
  }));
  return function promotionPage(_x85, _x86) {
    return _ref43.apply(this, arguments);
  };
}();
var subordinatesPage = /*#__PURE__*/function () {
  var _ref44 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(req, res) {
    return _regeneratorRuntime().wrap(function _callee44$(_context44) {
      while (1) switch (_context44.prev = _context44.next) {
        case 0:
          return _context44.abrupt("return", res.render("promotion/subordinates.ejs"));
        case 1:
        case "end":
          return _context44.stop();
      }
    }, _callee44);
  }));
  return function subordinatesPage(_x87, _x88) {
    return _ref44.apply(this, arguments);
  };
}();
var promotion1Page = /*#__PURE__*/function () {
  var _ref45 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45(req, res) {
    return _regeneratorRuntime().wrap(function _callee45$(_context45) {
      while (1) switch (_context45.prev = _context45.next) {
        case 0:
          return _context45.abrupt("return", res.render("promotion/promotion1.ejs"));
        case 1:
        case "end":
          return _context45.stop();
      }
    }, _callee45);
  }));
  return function promotion1Page(_x89, _x90) {
    return _ref45.apply(this, arguments);
  };
}();
var TeamPartnerPage = /*#__PURE__*/function () {
  var _ref46 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(req, res) {
    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
      while (1) switch (_context46.prev = _context46.next) {
        case 0:
          return _context46.abrupt("return", res.render("promotion/TeamPartner.ejs"));
        case 1:
        case "end":
          return _context46.stop();
      }
    }, _callee46);
  }));
  return function TeamPartnerPage(_x91, _x92) {
    return _ref46.apply(this, arguments);
  };
}();
var turntablePage = /*#__PURE__*/function () {
  var _ref47 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47(req, res) {
    return _regeneratorRuntime().wrap(function _callee47$(_context47) {
      while (1) switch (_context47.prev = _context47.next) {
        case 0:
          return _context47.abrupt("return", res.render("promotion/turntable.ejs"));
        case 1:
        case "end":
          return _context47.stop();
      }
    }, _callee47);
  }));
  return function turntablePage(_x93, _x94) {
    return _ref47.apply(this, arguments);
  };
}();
var RulesPage = /*#__PURE__*/function () {
  var _ref48 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(req, res) {
    return _regeneratorRuntime().wrap(function _callee48$(_context48) {
      while (1) switch (_context48.prev = _context48.next) {
        case 0:
          return _context48.abrupt("return", res.render("promotion/Rules.ejs"));
        case 1:
        case "end":
          return _context48.stop();
      }
    }, _callee48);
  }));
  return function RulesPage(_x95, _x96) {
    return _ref48.apply(this, arguments);
  };
}();
var DetailsPage = /*#__PURE__*/function () {
  var _ref49 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(req, res) {
    return _regeneratorRuntime().wrap(function _callee49$(_context49) {
      while (1) switch (_context49.prev = _context49.next) {
        case 0:
          return _context49.abrupt("return", res.render("promotion/Detail.ejs"));
        case 1:
        case "end":
          return _context49.stop();
      }
    }, _callee49);
  }));
  return function DetailsPage(_x97, _x98) {
    return _ref49.apply(this, arguments);
  };
}();
var PromotionsharePage = /*#__PURE__*/function () {
  var _ref50 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50(req, res) {
    return _regeneratorRuntime().wrap(function _callee50$(_context50) {
      while (1) switch (_context50.prev = _context50.next) {
        case 0:
          return _context50.abrupt("return", res.render("promotion/PromotionShare.ejs"));
        case 1:
        case "end":
          return _context50.stop();
      }
    }, _callee50);
  }));
  return function PromotionsharePage(_x99, _x100) {
    return _ref50.apply(this, arguments);
  };
}();
var IntroducePage = /*#__PURE__*/function () {
  var _ref51 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51(req, res) {
    return _regeneratorRuntime().wrap(function _callee51$(_context51) {
      while (1) switch (_context51.prev = _context51.next) {
        case 0:
          return _context51.abrupt("return", res.render("promotion/Introduce.ejs"));
        case 1:
        case "end":
          return _context51.stop();
      }
    }, _callee51);
  }));
  return function IntroducePage(_x101, _x102) {
    return _ref51.apply(this, arguments);
  };
}();
var promotionmyTeamPage = /*#__PURE__*/function () {
  var _ref52 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52(req, res) {
    return _regeneratorRuntime().wrap(function _callee52$(_context52) {
      while (1) switch (_context52.prev = _context52.next) {
        case 0:
          return _context52.abrupt("return", res.render("promotion/myTeam.ejs"));
        case 1:
        case "end":
          return _context52.stop();
      }
    }, _callee52);
  }));
  return function promotionmyTeamPage(_x103, _x104) {
    return _ref52.apply(this, arguments);
  };
}();
var promotionDesPage = /*#__PURE__*/function () {
  var _ref53 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(req, res) {
    return _regeneratorRuntime().wrap(function _callee53$(_context53) {
      while (1) switch (_context53.prev = _context53.next) {
        case 0:
          return _context53.abrupt("return", res.render("promotion/promotionDes.ejs"));
        case 1:
        case "end":
          return _context53.stop();
      }
    }, _callee53);
  }));
  return function promotionDesPage(_x105, _x106) {
    return _ref53.apply(this, arguments);
  };
}();
var comhistoryPage = /*#__PURE__*/function () {
  var _ref54 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(req, res) {
    return _regeneratorRuntime().wrap(function _callee54$(_context54) {
      while (1) switch (_context54.prev = _context54.next) {
        case 0:
          return _context54.abrupt("return", res.render("promotion/comhistory.ejs"));
        case 1:
        case "end":
          return _context54.stop();
      }
    }, _callee54);
  }));
  return function comhistoryPage(_x107, _x108) {
    return _ref54.apply(this, arguments);
  };
}();
var tutorialPage = /*#__PURE__*/function () {
  var _ref55 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(req, res) {
    return _regeneratorRuntime().wrap(function _callee55$(_context55) {
      while (1) switch (_context55.prev = _context55.next) {
        case 0:
          return _context55.abrupt("return", res.render("promotion/tutorial.ejs"));
        case 1:
        case "end":
          return _context55.stop();
      }
    }, _callee55);
  }));
  return function tutorialPage(_x109, _x110) {
    return _ref55.apply(this, arguments);
  };
}();
var bonusRecordPage = /*#__PURE__*/function () {
  var _ref56 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(req, res) {
    return _regeneratorRuntime().wrap(function _callee56$(_context56) {
      while (1) switch (_context56.prev = _context56.next) {
        case 0:
          return _context56.abrupt("return", res.render("promotion/bonusrecord.ejs"));
        case 1:
        case "end":
          return _context56.stop();
      }
    }, _callee56);
  }));
  return function bonusRecordPage(_x111, _x112) {
    return _ref56.apply(this, arguments);
  };
}();

// wallet

var transactionhistoryPage = /*#__PURE__*/function () {
  var _ref57 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(req, res) {
    return _regeneratorRuntime().wrap(function _callee57$(_context57) {
      while (1) switch (_context57.prev = _context57.next) {
        case 0:
          return _context57.abrupt("return", res.render("wallet/transactionhistory.ejs"));
        case 1:
        case "end":
          return _context57.stop();
      }
    }, _callee57);
  }));
  return function transactionhistoryPage(_x113, _x114) {
    return _ref57.apply(this, arguments);
  };
}();
var casinoHistoryPage = /*#__PURE__*/function () {
  var _ref58 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(req, res) {
    return _regeneratorRuntime().wrap(function _callee58$(_context58) {
      while (1) switch (_context58.prev = _context58.next) {
        case 0:
          return _context58.abrupt("return", res.render("member/casino-bet-history.ejs"));
        case 1:
        case "end":
          return _context58.stop();
      }
    }, _callee58);
  }));
  return function casinoHistoryPage(_x115, _x116) {
    return _ref58.apply(this, arguments);
  };
}();
var fishingHistoryPage = /*#__PURE__*/function () {
  var _ref59 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59(req, res) {
    return _regeneratorRuntime().wrap(function _callee59$(_context59) {
      while (1) switch (_context59.prev = _context59.next) {
        case 0:
          return _context59.abrupt("return", res.render("member/fishing-bet-history.ejs"));
        case 1:
        case "end":
          return _context59.stop();
      }
    }, _callee59);
  }));
  return function fishingHistoryPage(_x117, _x118) {
    return _ref59.apply(this, arguments);
  };
}();
var rummyHistoryPage = /*#__PURE__*/function () {
  var _ref60 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(req, res) {
    return _regeneratorRuntime().wrap(function _callee60$(_context60) {
      while (1) switch (_context60.prev = _context60.next) {
        case 0:
          return _context60.abrupt("return", res.render("member/rummy-bet-history.ejs"));
        case 1:
        case "end":
          return _context60.stop();
      }
    }, _callee60);
  }));
  return function rummyHistoryPage(_x119, _x120) {
    return _ref60.apply(this, arguments);
  };
}();
var originalHistoryPage = /*#__PURE__*/function () {
  var _ref61 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(req, res) {
    return _regeneratorRuntime().wrap(function _callee61$(_context61) {
      while (1) switch (_context61.prev = _context61.next) {
        case 0:
          return _context61.abrupt("return", res.render("member/original-bet-history.ejs"));
        case 1:
        case "end":
          return _context61.stop();
      }
    }, _callee61);
  }));
  return function originalHistoryPage(_x121, _x122) {
    return _ref61.apply(this, arguments);
  };
}();
var slotsHistoryPage = /*#__PURE__*/function () {
  var _ref62 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62(req, res) {
    return _regeneratorRuntime().wrap(function _callee62$(_context62) {
      while (1) switch (_context62.prev = _context62.next) {
        case 0:
          return _context62.abrupt("return", res.render("member/slots-bet-history.ejs"));
        case 1:
        case "end":
          return _context62.stop();
      }
    }, _callee62);
  }));
  return function slotsHistoryPage(_x123, _x124) {
    return _ref62.apply(this, arguments);
  };
}();
var strongBoxPage = /*#__PURE__*/function () {
  var _ref63 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63(req, res) {
    return _regeneratorRuntime().wrap(function _callee63$(_context63) {
      while (1) switch (_context63.prev = _context63.next) {
        case 0:
          return _context63.abrupt("return", res.render("member/strongbox.ejs"));
        case 1:
        case "end":
          return _context63.stop();
      }
    }, _callee63);
  }));
  return function strongBoxPage(_x125, _x126) {
    return _ref63.apply(this, arguments);
  };
}();
var walletPage = /*#__PURE__*/function () {
  var _ref64 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64(req, res) {
    return _regeneratorRuntime().wrap(function _callee64$(_context64) {
      while (1) switch (_context64.prev = _context64.next) {
        case 0:
          return _context64.abrupt("return", res.render("wallet/index.ejs"));
        case 1:
        case "end":
          return _context64.stop();
      }
    }, _callee64);
  }));
  return function walletPage(_x127, _x128) {
    return _ref64.apply(this, arguments);
  };
}();

// const rechargePage = async (req, res) => {
//   return res.render("wallet/recharge.ejs", {
//     MINIMUM_MONEY_USDT: process.env.MINIMUM_MONEY_USDT,
//     MINIMUM_MONEY_INR: process.env.MINIMUM_MONEY_INR,
//     USDT_INR_EXCHANGE_RATE: process.env.USDT_INR_EXCHANGE_RATE,
//   });
// };

var rechargePage = /*#__PURE__*/function () {
  var _ref65 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65(req, res) {
    var _yield$connection$que15, _yield$connection$que16, results, adminData;
    return _regeneratorRuntime().wrap(function _callee65$(_context65) {
      while (1) switch (_context65.prev = _context65.next) {
        case 0:
          _context65.prev = 0;
          _context65.next = 3;
          return _connectDB["default"].query("SELECT mininrdep, minusdtdep, inrusdtrate, minfirstrech FROM admin_ac LIMIT 1");
        case 3:
          _yield$connection$que15 = _context65.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          results = _yield$connection$que16[0];
          if (!(!results || results.length === 0)) {
            _context65.next = 9;
            break;
          }
          console.error("No admin configuration found in admin_ac table");
          return _context65.abrupt("return", res.status(404).send("Admin configuration not found"));
        case 9:
          adminData = results[0]; // Extract the first result
          return _context65.abrupt("return", res.render("wallet/recharge.ejs", {
            MINIMUM_MONEY_USDT: adminData.minusdtdep,
            MINIMUM_MONEY_INR: adminData.mininrdep,
            USDT_INR_EXCHANGE_RATE: adminData.inrusdtrate,
            MIN_FIRST_RECHARGE: adminData.minfirstrech
          }));
        case 13:
          _context65.prev = 13;
          _context65.t0 = _context65["catch"](0);
          console.error("Error fetching admin configuration:", _context65.t0);
          return _context65.abrupt("return", res.status(500).send("Internal server error"));
        case 17:
        case "end":
          return _context65.stop();
      }
    }, _callee65, null, [[0, 13]]);
  }));
  return function rechargePage(_x129, _x130) {
    return _ref65.apply(this, arguments);
  };
}();
var rechargerecordPage = /*#__PURE__*/function () {
  var _ref66 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66(req, res) {
    return _regeneratorRuntime().wrap(function _callee66$(_context66) {
      while (1) switch (_context66.prev = _context66.next) {
        case 0:
          return _context66.abrupt("return", res.render("wallet/rechargerecord.ejs"));
        case 1:
        case "end":
          return _context66.stop();
      }
    }, _callee66);
  }));
  return function rechargerecordPage(_x131, _x132) {
    return _ref66.apply(this, arguments);
  };
}();
var withdrawalPage = /*#__PURE__*/function () {
  var _ref67 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67(req, res) {
    return _regeneratorRuntime().wrap(function _callee67$(_context67) {
      while (1) switch (_context67.prev = _context67.next) {
        case 0:
          return _context67.abrupt("return", res.render("wallet/withdrawal.ejs", {
            MINIMUM_MONEY_USDT: process.env.MINIMUM_WITHDRAWAL_MONEY_USDT,
            MINIMUM_MONEY_INR: process.env.MINIMUM_WITHDRAWAL_MONEY_INR,
            USDT_INR_EXCHANGE_RATE: process.env.USDT_INR_EXCHANGE_RATE
          }));
        case 1:
        case "end":
          return _context67.stop();
      }
    }, _callee67);
  }));
  return function withdrawalPage(_x133, _x134) {
    return _ref67.apply(this, arguments);
  };
}();
var withdrawalrecordPage = /*#__PURE__*/function () {
  var _ref68 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68(req, res) {
    return _regeneratorRuntime().wrap(function _callee68$(_context68) {
      while (1) switch (_context68.prev = _context68.next) {
        case 0:
          return _context68.abrupt("return", res.render("wallet/withdrawalrecord.ejs"));
        case 1:
        case "end":
          return _context68.stop();
      }
    }, _callee68);
  }));
  return function withdrawalrecordPage(_x135, _x136) {
    return _ref68.apply(this, arguments);
  };
}();
var transfer = /*#__PURE__*/function () {
  var _ref69 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69(req, res) {
    return _regeneratorRuntime().wrap(function _callee69$(_context69) {
      while (1) switch (_context69.prev = _context69.next) {
        case 0:
          return _context69.abrupt("return", res.render("wallet/transfer.ejs"));
        case 1:
        case "end":
          return _context69.stop();
      }
    }, _callee69);
  }));
  return function transfer(_x137, _x138) {
    return _ref69.apply(this, arguments);
  };
}();

// member page
var mianPage = /*#__PURE__*/function () {
  var _ref70 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70(req, res) {
    var auth, _yield$connection$que17, _yield$connection$que18, user, _yield$connection$que19, _yield$connection$que20, settings, cskh, level;
    return _regeneratorRuntime().wrap(function _callee70$(_context70) {
      while (1) switch (_context70.prev = _context70.next) {
        case 0:
          auth = req.cookies.auth;
          _context70.next = 3;
          return _connectDB["default"].query("SELECT `level` FROM users WHERE `token` = ? ", [auth]);
        case 3:
          _yield$connection$que17 = _context70.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          user = _yield$connection$que18[0];
          _context70.next = 8;
          return _connectDB["default"].query("SELECT `cskh` FROM admin_ac");
        case 8:
          _yield$connection$que19 = _context70.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          settings = _yield$connection$que20[0];
          cskh = settings[0].cskh;
          level = user[0].level;
          return _context70.abrupt("return", res.render("member/index.ejs", {
            level: level,
            cskh: cskh
          }));
        case 14:
        case "end":
          return _context70.stop();
      }
    }, _callee70);
  }));
  return function mianPage(_x139, _x140) {
    return _ref70.apply(this, arguments);
  };
}();
var settingsPage = /*#__PURE__*/function () {
  var _ref71 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71(req, res) {
    var auth, _yield$connection$que21, _yield$connection$que22, user;
    return _regeneratorRuntime().wrap(function _callee71$(_context71) {
      while (1) switch (_context71.prev = _context71.next) {
        case 0:
          auth = req.cookies.auth;
          _context71.next = 3;
          return _connectDB["default"].query("SELECT * FROM users WHERE `token` = ? ", [auth]);
        case 3:
          _yield$connection$que21 = _context71.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          user = _yield$connection$que22[0];
          return _context71.abrupt("return", res.render("member/settings.ejs", {
            NICKNAME: user[0].name_user,
            USER_ID: user[0].id_user
          }));
        case 7:
        case "end":
          return _context71.stop();
      }
    }, _callee71);
  }));
  return function settingsPage(_x141, _x142) {
    return _ref71.apply(this, arguments);
  };
}();
var aboutPage = /*#__PURE__*/function () {
  var _ref72 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72(req, res) {
    return _regeneratorRuntime().wrap(function _callee72$(_context72) {
      while (1) switch (_context72.prev = _context72.next) {
        case 0:
          return _context72.abrupt("return", res.render("member/about/index.ejs"));
        case 1:
        case "end":
          return _context72.stop();
      }
    }, _callee72);
  }));
  return function aboutPage(_x143, _x144) {
    return _ref72.apply(this, arguments);
  };
}();
var guidePage = /*#__PURE__*/function () {
  var _ref73 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73(req, res) {
    return _regeneratorRuntime().wrap(function _callee73$(_context73) {
      while (1) switch (_context73.prev = _context73.next) {
        case 0:
          return _context73.abrupt("return", res.render("member/guide.ejs"));
        case 1:
        case "end":
          return _context73.stop();
      }
    }, _callee73);
  }));
  return function guidePage(_x145, _x146) {
    return _ref73.apply(this, arguments);
  };
}();
var feedbackPage = /*#__PURE__*/function () {
  var _ref74 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74(req, res) {
    return _regeneratorRuntime().wrap(function _callee74$(_context74) {
      while (1) switch (_context74.prev = _context74.next) {
        case 0:
          return _context74.abrupt("return", res.render("member/feedback.ejs"));
        case 1:
        case "end":
          return _context74.stop();
      }
    }, _callee74);
  }));
  return function feedbackPage(_x147, _x148) {
    return _ref74.apply(this, arguments);
  };
}();
var notificationPage = /*#__PURE__*/function () {
  var _ref75 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75(req, res) {
    return _regeneratorRuntime().wrap(function _callee75$(_context75) {
      while (1) switch (_context75.prev = _context75.next) {
        case 0:
          return _context75.abrupt("return", res.render("member/notification.ejs"));
        case 1:
        case "end":
          return _context75.stop();
      }
    }, _callee75);
  }));
  return function notificationPage(_x149, _x150) {
    return _ref75.apply(this, arguments);
  };
}();
var loginNotificationPage = /*#__PURE__*/function () {
  var _ref76 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76(req, res) {
    return _regeneratorRuntime().wrap(function _callee76$(_context76) {
      while (1) switch (_context76.prev = _context76.next) {
        case 0:
          return _context76.abrupt("return", res.render("member/login_notification.ejs"));
        case 1:
        case "end":
          return _context76.stop();
      }
    }, _callee76);
  }));
  return function loginNotificationPage(_x151, _x152) {
    return _ref76.apply(this, arguments);
  };
}();
var recordsalary = /*#__PURE__*/function () {
  var _ref77 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77(req, res) {
    return _regeneratorRuntime().wrap(function _callee77$(_context77) {
      while (1) switch (_context77.prev = _context77.next) {
        case 0:
          return _context77.abrupt("return", res.render("member/about/recordsalary.ejs"));
        case 1:
        case "end":
          return _context77.stop();
      }
    }, _callee77);
  }));
  return function recordsalary(_x153, _x154) {
    return _ref77.apply(this, arguments);
  };
}();
var privacyPolicy = /*#__PURE__*/function () {
  var _ref78 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee78(req, res) {
    return _regeneratorRuntime().wrap(function _callee78$(_context78) {
      while (1) switch (_context78.prev = _context78.next) {
        case 0:
          return _context78.abrupt("return", res.render("member/about/privacyPolicy.ejs"));
        case 1:
        case "end":
          return _context78.stop();
      }
    }, _callee78);
  }));
  return function privacyPolicy(_x155, _x156) {
    return _ref78.apply(this, arguments);
  };
}();
var newtutorial = /*#__PURE__*/function () {
  var _ref79 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee79(req, res) {
    return _regeneratorRuntime().wrap(function _callee79$(_context79) {
      while (1) switch (_context79.prev = _context79.next) {
        case 0:
          return _context79.abrupt("return", res.render("member/newtutorial.ejs"));
        case 1:
        case "end":
          return _context79.stop();
      }
    }, _callee79);
  }));
  return function newtutorial(_x157, _x158) {
    return _ref79.apply(this, arguments);
  };
}();
var forgot = /*#__PURE__*/function () {
  var _ref80 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee80(req, res) {
    var auth, _yield$connection$que23, _yield$connection$que24, user, time;
    return _regeneratorRuntime().wrap(function _callee80$(_context80) {
      while (1) switch (_context80.prev = _context80.next) {
        case 0:
          auth = req.cookies.auth;
          _context80.next = 3;
          return _connectDB["default"].query("SELECT `time_otp` FROM users WHERE token = ? ", [auth]);
        case 3:
          _yield$connection$que23 = _context80.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          user = _yield$connection$que24[0];
          time = user[0].time_otp;
          return _context80.abrupt("return", res.render("member/forgot.ejs", {
            time: time
          }));
        case 8:
        case "end":
          return _context80.stop();
      }
    }, _callee80);
  }));
  return function forgot(_x159, _x160) {
    return _ref80.apply(this, arguments);
  };
}();
var redenvelopes = /*#__PURE__*/function () {
  var _ref81 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee81(req, res) {
    return _regeneratorRuntime().wrap(function _callee81$(_context81) {
      while (1) switch (_context81.prev = _context81.next) {
        case 0:
          return _context81.abrupt("return", res.render("member/redenvelopes.ejs"));
        case 1:
        case "end":
          return _context81.stop();
      }
    }, _callee81);
  }));
  return function redenvelopes(_x161, _x162) {
    return _ref81.apply(this, arguments);
  };
}();
var newGift = /*#__PURE__*/function () {
  var _ref82 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee82(req, res) {
    return _regeneratorRuntime().wrap(function _callee82$(_context82) {
      while (1) switch (_context82.prev = _context82.next) {
        case 0:
          return _context82.abrupt("return", res.render("checkIn/newGift.ejs"));
        case 1:
        case "end":
          return _context82.stop();
      }
    }, _callee82);
  }));
  return function newGift(_x163, _x164) {
    return _ref82.apply(this, arguments);
  };
}();
var riskAgreement = /*#__PURE__*/function () {
  var _ref83 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee83(req, res) {
    return _regeneratorRuntime().wrap(function _callee83$(_context83) {
      while (1) switch (_context83.prev = _context83.next) {
        case 0:
          return _context83.abrupt("return", res.render("member/about/riskAgreement.ejs"));
        case 1:
        case "end":
          return _context83.stop();
      }
    }, _callee83);
  }));
  return function riskAgreement(_x165, _x166) {
    return _ref83.apply(this, arguments);
  };
}();
var myProfilePage = /*#__PURE__*/function () {
  var _ref84 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee84(req, res) {
    return _regeneratorRuntime().wrap(function _callee84$(_context84) {
      while (1) switch (_context84.prev = _context84.next) {
        case 0:
          return _context84.abrupt("return", res.render("member/myProfile.ejs"));
        case 1:
        case "end":
          return _context84.stop();
      }
    }, _callee84);
  }));
  return function myProfilePage(_x167, _x168) {
    return _ref84.apply(this, arguments);
  };
}();
var getSalaryRecord = /*#__PURE__*/function () {
  var _ref85 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee85(req, res) {
    var auth, _yield$connection$que25, _yield$connection$que26, rows, rowstr, _yield$connection$que27, _yield$connection$que28, getPhone;
    return _regeneratorRuntime().wrap(function _callee85$(_context85) {
      while (1) switch (_context85.prev = _context85.next) {
        case 0:
          auth = req.cookies.auth;
          _context85.next = 3;
          return _connectDB["default"].query("SELECT * FROM users WHERE token = ?", [auth]);
        case 3:
          _yield$connection$que25 = _context85.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          rows = _yield$connection$que26[0];
          rowstr = rows[0];
          if (rows) {
            _context85.next = 9;
            break;
          }
          return _context85.abrupt("return", res.status(200).json({
            message: "Failed",
            status: false
          }));
        case 9:
          _context85.next = 11;
          return _connectDB["default"].query("SELECT * FROM salary WHERE phone = ? ORDER BY time DESC", [rowstr.phone]);
        case 11:
          _yield$connection$que27 = _context85.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          getPhone = _yield$connection$que28[0];
          console.log("asdasdasd : " + [rows.phone]);
          return _context85.abrupt("return", res.status(200).json({
            message: "Success",
            status: true,
            data: {},
            rows: getPhone
          }));
        case 16:
        case "end":
          return _context85.stop();
      }
    }, _callee85);
  }));
  return function getSalaryRecord(_x169, _x170) {
    return _ref85.apply(this, arguments);
  };
}();
var homeController = {
  casinoHistoryPage: casinoHistoryPage,
  fishingHistoryPage: fishingHistoryPage,
  rummyHistoryPage: rummyHistoryPage,
  originalHistoryPage: originalHistoryPage,
  slotsHistoryPage: slotsHistoryPage,
  homePage: homePage,
  checkInPage: checkInPage,
  invibonusPage: invibonusPage,
  rebatePage: rebatePage,
  jackpotPage: jackpotPage,
  originalPage: originalPage,
  fishingPage: fishingPage,
  casinosPage: casinosPage,
  slotsPage: slotsPage,
  betHistoryPage: betHistoryPage,
  betk3Page: betk3Page,
  bet5dPage: bet5dPage,
  betwingoPage: betwingoPage,
  bettrxwingoPage: bettrxwingoPage,
  vipPage: vipPage,
  strongBoxPage: strongBoxPage,
  activityPage: activityPage,
  TeamPartnerPage: TeamPartnerPage,
  dailytaskPage: dailytaskPage,
  promotionPage: promotionPage,
  subordinatesPage: subordinatesPage,
  promotion1Page: promotion1Page,
  turntablePage: turntablePage,
  IntroducePage: IntroducePage,
  DetailsPage: DetailsPage,
  RulesPage: RulesPage,
  PromotionsharePage: PromotionsharePage,
  walletPage: walletPage,
  mianPage: mianPage,
  myProfilePage: myProfilePage,
  promotionmyTeamPage: promotionmyTeamPage,
  promotionDesPage: promotionDesPage,
  comhistoryPage: comhistoryPage,
  tutorialPage: tutorialPage,
  bonusRecordPage: bonusRecordPage,
  rechargePage: rechargePage,
  rechargerecordPage: rechargerecordPage,
  withdrawalPage: withdrawalPage,
  withdrawalrecordPage: withdrawalrecordPage,
  aboutPage: aboutPage,
  privacyPolicy: privacyPolicy,
  riskAgreement: riskAgreement,
  newGift: newGift,
  newtutorial: newtutorial,
  redenvelopes: redenvelopes,
  forgot: forgot,
  checkDes: checkDes,
  newHot: newHot,
  dailyCheck: dailyCheck,
  winzo: winzo,
  agent: agent,
  youtube: youtube,
  program: program,
  mystery: mystery,
  checkRecord: checkRecord,
  addBank: addBank,
  transfer: transfer,
  recordsalary: recordsalary,
  getSalaryRecord: getSalaryRecord,
  transactionhistoryPage: transactionhistoryPage,
  jackpotRulesPage: jackpotRulesPage,
  jackpotWiningStarPage: jackpotWiningStarPage,
  attendancePage: attendancePage,
  firstDepositBonusPage: firstDepositBonusPage,
  aviatorBettingRewardPage: aviatorBettingRewardPage,
  socialVideoAwardPagePage: socialVideoAwardPagePage,
  promotionRebateRatioPage: promotionRebateRatioPage,
  settingsPage: settingsPage,
  guidePage: guidePage,
  feedbackPage: feedbackPage,
  notificationPage: notificationPage,
  loginNotificationPage: loginNotificationPage,
  selectBank: selectBank,
  invitationRecord: invitationRecord,
  rechargeAwardCollectionRecord: rechargeAwardCollectionRecord,
  attendanceRecordPage: attendanceRecordPage,
  attendanceRulesPage: attendanceRulesPage,
  changeAvatarPage: changeAvatarPage,
  invitationRulesPage: invitationRulesPage,
  supportPage: supportPage,
  getBannerFiles: getBannerFiles
};
var _default = exports["default"] = homeController;