"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GAME_CATEGORIES_MAP = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
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
var GAME_CATEGORIES_MAP = exports.GAME_CATEGORIES_MAP = {
  SLOT: 1000,
  POKER: 2000,
  LOBBY: 3000,
  FISHING: 4000,
  CASINO: 5000
};
var gameCategoriesPage = function gameCategoriesPage(GameCategoriesId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
      var _response$data, response, slotsGame;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _axios["default"])({
              method: "GET",
              url: "https://api.7xclub.live/list",
              data: {
                agentId: process.env.JILI_AGENT_ID,
                agentKey: process.env.JILI_AGENT_KEY,
                gameBaseUrl: process.env.JILI_GAME_BASE_URL,
                secretKey: process.env.BYTE_FUSION_SECRET_KEY
              }
            });
          case 3:
            response = _context.sent;
            slotsGame = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.gameData.find(function (item) {
              return item.id === GameCategoriesId;
            });
            return _context.abrupt("return", res.render("jili/index.ejs", {
              gameName: slotsGame.name,
              gameList: slotsGame.list,
              headerDisplay: "",
              tabAddressJili: req._parsedOriginalUrl.pathname.split("/")[2],
              tabAddressJdb: req._parsedOriginalUrl.pathname.split("/")[2]
            }));
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: "Something went wrong!"
            }));
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};
var gameSlotsPage = function gameSlotsPage(GameCategoriesId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
      var _response$data2, _response$data3, response, slotsGame;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _axios["default"])({
              method: "GET",
              url: "https://api.7xclub.live/list",
              data: {
                agentId: process.env.JILI_AGENT_ID,
                agentKey: process.env.JILI_AGENT_KEY,
                gameBaseUrl: process.env.JILI_GAME_BASE_URL,
                secretKey: process.env.BYTE_FUSION_SECRET_KEY
              }
            });
          case 3:
            response = _context2.sent;
            console.log(response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.gameData);
            slotsGame = response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.gameData.find(function (item) {
              return item.id === GameCategoriesId;
            });
            return _context2.abrupt("return", res.render("jili/slots.ejs", {
              // gameName: slotsGame.name,
              gameList: slotsGame.list
            }));
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).json({
              message: "Something went wrong!"
            }));
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getGameLink = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _response$data4, token, gameId, _yield$connection$exe, _yield$connection$exe2, rows, response, _error$response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          token = req.cookies.auth;
          gameId = req.query.game_id;
          _context3.next = 5;
          return _connectDB["default"].execute("SELECT `token`, `status` FROM `users` WHERE `token` = ? AND `veri` = 1 AND `apigame` = 1", [token]);
        case 5:
          _yield$connection$exe = _context3.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          rows = _yield$connection$exe2[0];
          if (!(auth !== rows[0].token && rows[0].status !== 1)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Login is required to access this api",
            isAuthorized: false
          }));
        case 10:
          if (gameId) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "gameID is required!",
            isAuthorized: true
          }));
        case 12:
          console.log({
            gameId: gameId,
            agentId: process.env.JILI_AGENT_ID,
            agentKey: process.env.JILI_AGENT_KEY,
            gameBaseUrl: process.env.JILI_GAME_BASE_URL,
            token: token,
            secretKey: process.env.BYTE_FUSION_SECRET_KEY
          });
          _context3.next = 15;
          return (0, _axios["default"])({
            method: "POST",
            url: "https://api.7xclub.live/devil",
            data: {
              gameId: gameId,
              agentId: process.env.JILI_AGENT_ID,
              agentKey: process.env.JILI_AGENT_KEY,
              gameBaseUrl: process.env.JILI_GAME_BASE_URL,
              token: token,
              secretKey: process.env.BYTE_FUSION_SECRET_KEY
            },
            headers: {
              "Content-Type": "application/json"
            }
          });
        case 15:
          response = _context3.sent;
          return _context3.abrupt("return", res.redirect(response === null || response === void 0 ? void 0 : (_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : _response$data4.gameLink));
        case 19:
          _context3.prev = 19;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          console.log(_context3.t0 === null || _context3.t0 === void 0 ? void 0 : (_error$response = _context3.t0.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
          return _context3.abrupt("return", res.status(500).json({
            message: "Something went wrong!"
          }));
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 19]]);
  }));
  return function getGameLink(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var gameList = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _axios["default"])({
            method: "GET",
            url: "https://api.7xclub.live/list",
            data: {
              agentId: process.env.JILI_AGENT_ID,
              agentKey: process.env.JILI_AGENT_KEY,
              gameBaseUrl: process.env.JILI_GAME_BASE_URL,
              secretKey: process.env.BYTE_FUSION_SECRET_KEY
            }
          });
        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            gameData: response.data.gameData
          }));
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(401).json({
            errorCode: 4,
            message: "Error while fetching from database!"
          }));
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function gameList(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var auth = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _rows$, _req$body, reqId, token, _yield$connection$exe3, _yield$connection$exe4, rows, _rows$2, _rows$3, _rows$4, username, balance, _token;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body = req.body, reqId = _req$body.reqId, token = _req$body.token; // Check if reqId and token are provided
          if (!(!reqId || !token)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            errorCode: 5,
            message: "Request ID and token are required"
          }));
        case 4:
          _context5.next = 6;
          return _connectDB["default"].execute("SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1", [token]);
        case 6:
          _yield$connection$exe3 = _context5.sent;
          _yield$connection$exe4 = _slicedToArray(_yield$connection$exe3, 1);
          rows = _yield$connection$exe4[0];
          if (!(((_rows$ = rows[0]) === null || _rows$ === void 0 ? void 0 : _rows$.status) == 1)) {
            _context5.next = 14;
            break;
          }
          // Get user details from the database
          username = (_rows$2 = rows[0]) === null || _rows$2 === void 0 ? void 0 : _rows$2.phone;
          balance = (_rows$3 = rows[0]) === null || _rows$3 === void 0 ? void 0 : _rows$3.money;
          _token = (_rows$4 = rows[0]) === null || _rows$4 === void 0 ? void 0 : _rows$4.token; // Return the user details as the response
          return _context5.abrupt("return", res.status(200).json({
            errorCode: 0,
            message: "Success",
            currency: "INR",
            username: username,
            balance: balance,
            token: _token
          }));
        case 14:
          return _context5.abrupt("return", res.status(401).json({
            errorCode: 4,
            message: "Token expired or invalid"
          }));
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", res.status(500).json({
            errorCode: 4,
            message: "Error while fetching from database!"
          }));
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 17]]);
  }));
  return function auth(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var bet = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body2, _req$body3, _req$body4, _req$body5, _req$body6, _req$body7, _req$body8, _req$body9, _req$body10, _req$body11, _req$body12, _req$body13, _req$body14, _req$body15, _req$body16;
    var reqId, token, currency, game, wagersTime, betAmount, round, winloseAmount, isFreeRound, userId, transactionId, platform, statementType, gameCategory, freeSpinData, _rows$5, _yield$connection$exe5, _yield$connection$exe6, rows, _rows$6, _rows$7, _rows$8, username, balance, _token2, finalAmount;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          reqId = (_req$body2 = req.body) === null || _req$body2 === void 0 ? void 0 : _req$body2.reqId;
          token = (_req$body3 = req.body) === null || _req$body3 === void 0 ? void 0 : _req$body3.token;
          currency = (_req$body4 = req.body) === null || _req$body4 === void 0 ? void 0 : _req$body4.currency;
          game = (_req$body5 = req.body) === null || _req$body5 === void 0 ? void 0 : _req$body5.game;
          wagersTime = (_req$body6 = req.body) === null || _req$body6 === void 0 ? void 0 : _req$body6.wagersTime;
          betAmount = (_req$body7 = req.body) === null || _req$body7 === void 0 ? void 0 : _req$body7.betAmount;
          round = (_req$body8 = req.body) === null || _req$body8 === void 0 ? void 0 : _req$body8["round(*)"];
          winloseAmount = (_req$body9 = req.body) === null || _req$body9 === void 0 ? void 0 : _req$body9.winloseAmount;
          isFreeRound = (_req$body10 = req.body) === null || _req$body10 === void 0 ? void 0 : _req$body10.isFreeRound;
          userId = (_req$body11 = req.body) === null || _req$body11 === void 0 ? void 0 : _req$body11.userId;
          transactionId = (_req$body12 = req.body) === null || _req$body12 === void 0 ? void 0 : _req$body12.transactionId;
          platform = (_req$body13 = req.body) === null || _req$body13 === void 0 ? void 0 : _req$body13.platform;
          statementType = (_req$body14 = req.body) === null || _req$body14 === void 0 ? void 0 : _req$body14.statementType;
          gameCategory = (_req$body15 = req.body) === null || _req$body15 === void 0 ? void 0 : _req$body15.gameCategory;
          freeSpinData = (_req$body16 = req.body) === null || _req$body16 === void 0 ? void 0 : _req$body16.freeSpinData; // console.log("bet");
          // console.log(reqId);
          // console.log(token);
          _context6.prev = 15;
          // // console.log({
          //    reqId,
          //    token,
          //    currency,
          //    game,
          //    wagersTime,
          //    betAmount,
          //    round,
          //    winloseAmount,
          //    isFreeRound,
          //    userId,
          //    transactionId,
          //    platform,
          //    statementType,
          //    gameCategory,
          //    freeSpinData,
          // })

          console.log("Player Bet Request");
          console.log(req.body);

          // Check if reqId and token are provided
          if (!(!reqId || !token)) {
            _context6.next = 20;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            errorCode: 4,
            message: "Request ID and token are required"
          }));
        case 20:
          _context6.next = 22;
          return _connectDB["default"].execute("SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1", [token]);
        case 22:
          _yield$connection$exe5 = _context6.sent;
          _yield$connection$exe6 = _slicedToArray(_yield$connection$exe5, 1);
          rows = _yield$connection$exe6[0];
          if (!(((_rows$5 = rows[0]) === null || _rows$5 === void 0 ? void 0 : _rows$5.status) == 1)) {
            _context6.next = 36;
            break;
          }
          // console.log(rows[0]?.status, 1)
          // Get user details from the database
          username = (_rows$6 = rows[0]) === null || _rows$6 === void 0 ? void 0 : _rows$6.phone;
          balance = (_rows$7 = rows[0]) === null || _rows$7 === void 0 ? void 0 : _rows$7.money;
          _token2 = (_rows$8 = rows[0]) === null || _rows$8 === void 0 ? void 0 : _rows$8.token; // console.log(balance, betAmount, winloseAmount)
          if (!(balance < betAmount)) {
            _context6.next = 31;
            break;
          }
          return _context6.abrupt("return", res.status(400).json({
            errorCode: 2,
            message: "Not enough balance to bet"
          }));
        case 31:
          console.log("finalAmount", Number(balance - betAmount + winloseAmount));
          finalAmount = Number(balance - betAmount + winloseAmount);
          _context6.next = 35;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, username]);
        case 35:
          return _context6.abrupt("return", res.status(200).json({
            errorCode: 0,
            message: "success",
            username: username,
            currency: "INR",
            balance: finalAmount,
            txId: transactionId,
            token: _token2
          }));
        case 36:
          return _context6.abrupt("return", res.status(401).json({
            errorCode: 4,
            message: "Token expired or invalid"
          }));
        case 39:
          _context6.prev = 39;
          _context6.t0 = _context6["catch"](15);
          console.log(_context6.t0);
          return _context6.abrupt("return", res.status(401).json({
            errorCode: 4,
            message: "Error while fetching from database!"
          }));
        case 43:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[15, 39]]);
  }));
  return function bet(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var cancelBet = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body17, _req$body18, _req$body19, _req$body20;
    var reqId, token, betAmount, winloseAmount, _rows$9, _yield$connection$exe7, _yield$connection$exe8, rows, _rows$10, _rows$11, _rows$12, username, balance, _token3, finalAmount;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          reqId = (_req$body17 = req.body) === null || _req$body17 === void 0 ? void 0 : _req$body17.reqId;
          token = (_req$body18 = req.body) === null || _req$body18 === void 0 ? void 0 : _req$body18.token; // const currency = req.body?.currency
          // const game = req.body?.game
          // const wagersTime = req.body?.wagersTime
          betAmount = (_req$body19 = req.body) === null || _req$body19 === void 0 ? void 0 : _req$body19.betAmount; // const round = req.body?.["round(*)"]
          winloseAmount = (_req$body20 = req.body) === null || _req$body20 === void 0 ? void 0 : _req$body20.winloseAmount; // const userId = req.body?.userId
          // const transactionId = req.body?.transactionId
          // const platform = req.body?.platform
          // const statementType = req.body?.statementType
          // const gameCategory = req.body?.gameCategory
          // const freeSpinData = req.body?.freeSpinData
          // console.log("cancelBet");
          // console.log(reqId);
          // console.log(token);
          _context7.prev = 4;
          console.log("Player cancelBet Request");
          console.log(req.body);

          // Check if reqId and token are provided
          if (!(!reqId || !token)) {
            _context7.next = 9;
            break;
          }
          return _context7.abrupt("return", res.status(400).json({
            errorCode: 4,
            message: "Request ID and token are required"
          }));
        case 9:
          _context7.next = 11;
          return _connectDB["default"].execute("SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1", [token]);
        case 11:
          _yield$connection$exe7 = _context7.sent;
          _yield$connection$exe8 = _slicedToArray(_yield$connection$exe7, 1);
          rows = _yield$connection$exe8[0];
          if (!(((_rows$9 = rows[0]) === null || _rows$9 === void 0 ? void 0 : _rows$9.status) == 1)) {
            _context7.next = 23;
            break;
          }
          username = (_rows$10 = rows[0]) === null || _rows$10 === void 0 ? void 0 : _rows$10.phone;
          balance = (_rows$11 = rows[0]) === null || _rows$11 === void 0 ? void 0 : _rows$11.money;
          _token3 = (_rows$12 = rows[0]) === null || _rows$12 === void 0 ? void 0 : _rows$12.token; // if (balance <= betAmount) {
          //    return res.status(400).json({
          //       errorCode: 2,
          //       message: "Bet request failed!",
          //    })
          // }
          // console.log(balance);
          // console.log(betAmount);
          // console.log(winloseAmount);
          // console.log(balance, preserve, betAmount, winloseAmount)
          console.log("finalAmount", Number(balance + betAmount - winloseAmount));
          finalAmount = Number(balance + betAmount - winloseAmount);
          _context7.next = 22;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, username]);
        case 22:
          return _context7.abrupt("return", res.status(200).json({
            errorCode: 0,
            message: "success",
            username: username,
            currency: "INR",
            balance: finalAmount,
            token: _token3
          }));
        case 23:
          return _context7.abrupt("return", res.status(401).json({
            errorCode: 4,
            message: "Token expired or invalid"
          }));
        case 26:
          _context7.prev = 26;
          _context7.t0 = _context7["catch"](4);
          console.log(_context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            errorCode: 5,
            message: "Error while fetching from database!"
          }));
        case 30:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[4, 26]]);
  }));
  return function cancelBet(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var sessionBet = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body21, _req$body22, _req$body23, _req$body24, _req$body25;
    var reqId, token, betAmount, winloseAmount, preserve, _rows$13, _yield$connection$exe9, _yield$connection$exe10, rows, _rows$14, _rows$15, _rows$16, username, balance, _token4, finalAmount;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          reqId = (_req$body21 = req.body) === null || _req$body21 === void 0 ? void 0 : _req$body21.reqId;
          token = (_req$body22 = req.body) === null || _req$body22 === void 0 ? void 0 : _req$body22.token; // const currency = req.body?.currency
          // const game = req.body?.game
          // const wagersTime = req.body?.wagersTime
          betAmount = Number((_req$body23 = req.body) === null || _req$body23 === void 0 ? void 0 : _req$body23.betAmount); // const round = req.body?.["round(*)"]
          winloseAmount = Number((_req$body24 = req.body) === null || _req$body24 === void 0 ? void 0 : _req$body24.winloseAmount);
          preserve = (_req$body25 = req.body) === null || _req$body25 === void 0 ? void 0 : _req$body25.preserve; // const isFreeRound = req.body?.isFreeRound
          // const userId = req.body?.userId
          // const transactionId = req.body?.transactionId
          // const platform = req.body?.platform
          // const statementType = req.body?.statementType
          // const gameCategory = req.body?.gameCategory
          // const freeSpinData = req.body?.freeSpinData
          // console.log("sessionBet");
          console.log("Player sessionBet Request");
          console.log(req.body);
          _context8.prev = 7;
          if (!(!reqId || !token)) {
            _context8.next = 10;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            errorCode: 4,
            message: "Request ID and token are required"
          }));
        case 10:
          _context8.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1", [token]);
        case 12:
          _yield$connection$exe9 = _context8.sent;
          _yield$connection$exe10 = _slicedToArray(_yield$connection$exe9, 1);
          rows = _yield$connection$exe10[0];
          if (!(((_rows$13 = rows[0]) === null || _rows$13 === void 0 ? void 0 : _rows$13.status) == 1)) {
            _context8.next = 29;
            break;
          }
          // console.log(rows[0]?.status, 1)
          // Get user details from the database
          username = (_rows$14 = rows[0]) === null || _rows$14 === void 0 ? void 0 : _rows$14.phone;
          balance = Number((_rows$15 = rows[0]) === null || _rows$15 === void 0 ? void 0 : _rows$15.money);
          _token4 = (_rows$16 = rows[0]) === null || _rows$16 === void 0 ? void 0 : _rows$16.token;
          if (!(balance <= betAmount)) {
            _context8.next = 21;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            errorCode: 2,
            message: "Bet request failed!"
          }));
        case 21:
          console.log(balance, betAmount, winloseAmount);
          finalAmount = 0;
          if (preserve === 0 && betAmount > 0 && winloseAmount === 0) {
            finalAmount = Number(balance - betAmount);
            console.log("finalAmount = Number(balance - betAmount);");
          } else if (preserve === 0 && betAmount === 0 && winloseAmount >= 0) {
            finalAmount = Number(balance + winloseAmount);
            console.log("finalAmount = Number(balance + winloseAmount);");
          } else if (preserve > 0 && betAmount === 0 && winloseAmount === 0) {
            finalAmount = Number(balance - preserve);
            console.log("finalAmount = Number(balance - preserve);");
          } else if (preserve > 0 && betAmount >= 0 && winloseAmount >= 0) {
            finalAmount = Number(balance + preserve - betAmount + winloseAmount);
            console.log("finalAmount = Number(balance + preserve - betAmount + winloseAmount);");
          }
          console.log(finalAmount);
          console.log(Number(balance + winloseAmount));
          _context8.next = 28;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, username]);
        case 28:
          return _context8.abrupt("return", res.status(200).json({
            errorCode: 0,
            message: "success",
            username: username,
            currency: "INR",
            balance: finalAmount,
            // txId: transactionId,
            token: _token4
          }));
        case 29:
          return _context8.abrupt("return", res.status(401).json({
            errorCode: 4,
            message: "Token expired or invalid"
          }));
        case 32:
          _context8.prev = 32;
          _context8.t0 = _context8["catch"](7);
          console.log(_context8.t0);
          return _context8.abrupt("return", res.status(500).json({
            errorCode: 5,
            message: "Error while fetching from database!"
          }));
        case 36:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[7, 32]]);
  }));
  return function sessionBet(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var cancelSessionBet = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$body26, _req$body27, _req$body28, _req$body29, _req$body30;
    var reqId, token, betAmount, winloseAmount, preserve, _rows$17, _yield$connection$exe11, _yield$connection$exe12, rows, _rows$18, _rows$19, _rows$20, username, balance, _token5, finalAmount;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          reqId = (_req$body26 = req.body) === null || _req$body26 === void 0 ? void 0 : _req$body26.reqId;
          token = (_req$body27 = req.body) === null || _req$body27 === void 0 ? void 0 : _req$body27.token; // const currency = req.body?.currency
          // const game = req.body?.game
          // const wagersTime = req.body?.wagersTime
          betAmount = (_req$body28 = req.body) === null || _req$body28 === void 0 ? void 0 : _req$body28.betAmount; // const round = req.body?.["round(*)"]
          winloseAmount = (_req$body29 = req.body) === null || _req$body29 === void 0 ? void 0 : _req$body29.winloseAmount;
          preserve = (_req$body30 = req.body) === null || _req$body30 === void 0 ? void 0 : _req$body30.preserve; // const isFreeRound = req.body?.isFreeRound
          // const userId = req.body?.userId
          // const transactionId = req.body?.transactionId
          // const platform = req.body?.platform
          // const statementType = req.body?.statementType
          // const gameCategory = req.body?.gameCategory
          // const freeSpinData = req.body?.freeSpinData
          // console.log("cancelSessionBet");
          console.log("Player cancelSessionBet Request");
          console.log(req.body);
          _context9.prev = 7;
          if (!(!reqId || !token)) {
            _context9.next = 10;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            errorCode: 5,
            message: "Request ID and token are required"
          }));
        case 10:
          _context9.next = 12;
          return _connectDB["default"].execute("SELECT * FROM `users` WHERE `token` = ? AND `veri` = 1", [token]);
        case 12:
          _yield$connection$exe11 = _context9.sent;
          _yield$connection$exe12 = _slicedToArray(_yield$connection$exe11, 1);
          rows = _yield$connection$exe12[0];
          if (!(((_rows$17 = rows[0]) === null || _rows$17 === void 0 ? void 0 : _rows$17.status) == 1)) {
            _context9.next = 26;
            break;
          }
          // console.log(rows[0]?.status, 1)
          // Get user details from the database
          username = (_rows$18 = rows[0]) === null || _rows$18 === void 0 ? void 0 : _rows$18.phone;
          balance = (_rows$19 = rows[0]) === null || _rows$19 === void 0 ? void 0 : _rows$19.money;
          _token5 = (_rows$20 = rows[0]) === null || _rows$20 === void 0 ? void 0 : _rows$20.token;
          if (!(balance <= betAmount)) {
            _context9.next = 21;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
            message: "Bet request failed!"
          }));
        case 21:
          if (preserve === 0) {
            finalAmount = Number(balance + betAmount);
          } else if (preserve > 0) {
            finalAmount = Number(balance + preserve);
          }
          console.log(finalAmount);
          _context9.next = 25;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, username]);
        case 25:
          return _context9.abrupt("return", res.status(200).json({
            errorCode: 0,
            message: "success",
            username: username,
            currency: "INR",
            balance: finalAmount,
            token: _token5
          }));
        case 26:
          return _context9.abrupt("return", res.status(401).json({
            errorCode: 4,
            message: "Token expired or invalid"
          }));
        case 29:
          _context9.prev = 29;
          _context9.t0 = _context9["catch"](7);
          console.log(_context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            errorCode: 4,
            message: "Error while fetching from database!"
          }));
        case 33:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[7, 29]]);
  }));
  return function cancelSessionBet(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var jiliGamesController = {
  auth: auth,
  bet: bet,
  getGameLink: getGameLink,
  gameList: gameList,
  gameCategoriesPage: gameCategoriesPage,
  cancelBet: cancelBet,
  cancelSessionBet: cancelSessionBet,
  sessionBet: sessionBet,
  gameSlotsPage: gameSlotsPage
};
var _default = exports["default"] = jiliGamesController;