"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _crypto = _interopRequireDefault(require("crypto"));
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
var _AESEncrypt = _interopRequireDefault(require("../helpers/AESEncrypt.js"));
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
var dc = process.env.JDB_DC;
var key = process.env.JDB_KEY;
var iv = process.env.JDB_IV;
var agentId = process.env.JDB_AGENT_ID;
var API_URL = process.env.JDB_API_URL;
var tagList = [{
  id: 1,
  name: "popular",
  displayName: "Popular"
}, {
  id: 2,
  name: "casino",
  displayName: "Casino"
}, {
  id: 3,
  name: "slots",
  displayName: "Slots"
}, {
  id: 4,
  name: "fishing",
  displayName: "Fishing"
}, {
  id: 5,
  name: "rummy",
  displayName: "Rummy"
}, {
  id: 6,
  name: "original",
  displayName: "Original"
}, {
  id: 7,
  name: "popular_quick",
  displayName: "Popular Quick"
}];
var gameCategoriesPage = function gameCategoriesPage(GameTagId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
      var _tagList$find, _tagList$find2, _response$data, response, tagName, displayName, gameList, currentPath;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _axios["default"])({
              method: "GET",
              url: "".concat(process.env.APP_BASE_URL, "/jdb_game_list.json")
            });
          case 3:
            response = _context.sent;
            tagName = (_tagList$find = tagList.find(function (item) {
              return item.id === GameTagId;
            })) === null || _tagList$find === void 0 ? void 0 : _tagList$find.name;
            displayName = (_tagList$find2 = tagList.find(function (item) {
              return item.id === GameTagId;
            })) === null || _tagList$find2 === void 0 ? void 0 : _tagList$find2.displayName;
            gameList = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.filter(function (item) {
              return item.tag.includes(tagName);
            });
            currentPath = req._parsedOriginalUrl.pathname.split("/")[2];
            return _context.abrupt("return", res.render("jdb/index.ejs", {
              gameName: displayName,
              gameList: gameList.map(function (item) {
                return {
                  g_type: item.g_type,
                  m_type: item.m_type,
                  name: item.name,
                  image_src: item.image
                };
              }),
              headerDisplay: currentPath === "popular" || currentPath === "original" ? "hide" : "",
              tabAddressJili: currentPath,
              tabAddressJdb: currentPath
            }));
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", res.status(500).json({
              message: "Something went wrong!"
            }));
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};
var gameSlotsPage = function gameSlotsPage(GameTagId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
      var _tagList$find3, _response$data2, response, tagName, gameList;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _axios["default"])({
              method: "GET",
              url: "".concat(process.env.APP_BASE_URL, "/jdb_game_list.json")
            });
          case 3:
            response = _context2.sent;
            tagName = (_tagList$find3 = tagList.find(function (item) {
              return item.id === GameTagId;
            })) === null || _tagList$find3 === void 0 ? void 0 : _tagList$find3.name; // const displayName = tagList.find(item => item.id === GameTagId)?.displayName;
            gameList = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.filter(function (item) {
              return item.tag.includes(tagName);
            }); // const currentPath = req._parsedOriginalUrl.pathname.split("/")[2];
            return _context2.abrupt("return", res.render("jdb/slots.ejs", {
              gameList: gameList.map(function (item) {
                return {
                  g_type: item.g_type,
                  m_type: item.m_type,
                  name: item.name,
                  image_src: item.image
                };
              })
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
var gameQuickPopularList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _tagList$find4, _response$data3, response, tagName, gameList;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _axios["default"])({
            method: "GET",
            url: "".concat(process.env.APP_BASE_URL, "/jdb_game_list.json")
          });
        case 3:
          response = _context3.sent;
          tagName = (_tagList$find4 = tagList.find(function (item) {
            return item.id === 7;
          })) === null || _tagList$find4 === void 0 ? void 0 : _tagList$find4.name;
          gameList = response === null || response === void 0 ? void 0 : (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.filter(function (item) {
            return item.tag.includes(tagName);
          });
          return _context3.abrupt("return", res.status(200).send({
            gameList: gameList.map(function (item) {
              return {
                g_type: item.g_type,
                m_type: item.m_type,
                name: item.name,
                image_src: item.image
              };
            })
          }));
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            message: "Something went wrong!"
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function gameQuickPopularList(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var generateGameLink = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var mType, gType, token, iv, key, parent, _yield$connection$exe, _yield$connection$exe2, rows, uid, data, jsonData, encryptedData, encodedData, apiUrl, response, responseData, gameUrl;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          mType = req.query.m_type;
          gType = req.query.g_type; // Fetch the token from cookies
          token = req.cookies.auth; // Fetch iv, key, and parent from environment variables
          iv = process.env.JDB_IV;
          key = process.env.JDB_KEY;
          parent = process.env.PARENT;
          _context4.prev = 6;
          if (!(!token || !iv || !key || !parent)) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            error: 'Missing required parameters.'
          }));
        case 9:
          _context4.next = 11;
          return _connectDB["default"].execute("SELECT `phone` FROM `users` WHERE `token` = ? AND `veri` = 1 AND `apigame` = 1", [token]);
        case 11:
          _yield$connection$exe = _context4.sent;
          _yield$connection$exe2 = _slicedToArray(_yield$connection$exe, 1);
          rows = _yield$connection$exe2[0];
          if (!(rows.length === 0)) {
            _context4.next = 16;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            error: 'Invalid or expired token.'
          }));
        case 16:
          // Extract the uid (phone number) from the query result
          uid = rows[0].phone; // Prepare data for API request
          data = {
            action: 21,
            parent: parent,
            ts: Date.now(),
            // Current timestamp in milliseconds
            uid: uid,
            mType: mType || '',
            // Machine Type (optional)
            gType: gType || '',
            // Game Type (optional)
            activityIds: ['1234', '5678'] // Assuming activityIds is needed
          }; // Convert data to JSON
          jsonData = JSON.stringify(data); // Encrypt the data
          encryptedData = encryptData(jsonData, key, iv); // Encode encrypted data
          encodedData = encodeURIComponent(encryptedData); // Define the API URL
          apiUrl = "https://api.jdb711.com/apiRequest.do?dc=prox&x=".concat(encodedData); // Make API request
          _context4.next = 24;
          return _axios["default"].get(apiUrl);
        case 24:
          response = _context4.sent;
          // Check API response
          responseData = response.data;
          console.log('API Response:', responseData); // Debugging line
          if (!(responseData.status === '0000')) {
            _context4.next = 35;
            break;
          }
          gameUrl = responseData.path; // URL to launch the game
          // Log the URL for debugging
          console.log('Generated Game URL:', gameUrl);

          // Validate and log the URL
          if (!(!gameUrl || typeof gameUrl !== 'string')) {
            _context4.next = 32;
            break;
          }
          return _context4.abrupt("return", res.status(500).json({
            error: 'Invalid game URL.'
          }));
        case 32:
          // Ensure URL is properly encoded
          try {
            new URL(gameUrl); // This will throw an error if the URL is invalid
            res.redirect(gameUrl);
          } catch (e) {
            console.error('Invalid URL:', e);
            res.status(500).json({
              error: 'Generated URL is invalid.'
            });
          }
          _context4.next = 36;
          break;
        case 35:
          res.status(400).json({
            error: responseData.err_text
          });
        case 36:
          _context4.next = 42;
          break;
        case 38:
          _context4.prev = 38;
          _context4.t0 = _context4["catch"](6);
          console.error('Error:', _context4.t0); // Debugging line
          res.status(500).json({
            error: _context4.t0.message
          });
        case 42:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[6, 38]]);
  }));
  return function generateGameLink(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Helper function to encrypt data
var encryptData = function encryptData(data, key, iv) {
  var cipher = _crypto["default"].createCipheriv('aes-128-cbc', Buffer.from(key), Buffer.from(iv));
  var encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher["final"]('base64');
  return encrypted.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
var mainFunction = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var x, response, data, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          x = req.body.x;
          if (x) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            status: "9999",
            err_text: "x is required for jdb!"
          }));
        case 4:
          response = _AESEncrypt["default"].AesDecrypt(x, key, iv);
          data = JSON.parse(response);
          _context5.next = 8;
          return getUserDataByAuthPhoneNumber(data === null || data === void 0 ? void 0 : data.uid);
        case 8:
          user = _context5.sent;
          console.log(data);
          _context5.t0 = data === null || data === void 0 ? void 0 : data.action;
          _context5.next = _context5.t0 === 6 ? 13 : _context5.t0 === 8 ? 14 : _context5.t0 === 4 ? 15 : _context5.t0 === 9 ? 16 : _context5.t0 === 10 ? 17 : _context5.t0 === 11 ? 18 : _context5.t0 === 12 ? 19 : _context5.t0 === 13 ? 20 : _context5.t0 === 14 ? 21 : _context5.t0 === 15 ? 22 : _context5.t0 === 16 ? 23 : 24;
          break;
        case 13:
          return _context5.abrupt("return", getBalance({
            data: data,
            user: user,
            res: res
          }));
        case 14:
          return _context5.abrupt("return", betNSettle({
            data: data,
            user: user,
            res: res
          }));
        case 15:
          return _context5.abrupt("return", cancelBetNSettle({
            data: data,
            user: user,
            res: res
          }));
        case 16:
          return _context5.abrupt("return", bet({
            data: data,
            user: user,
            res: res
          }));
        case 17:
          return _context5.abrupt("return", settle({
            data: data,
            user: user,
            res: res
          }));
        case 18:
          return _context5.abrupt("return", cancelBet({
            data: data,
            user: user,
            res: res
          }));
        case 19:
          return _context5.abrupt("return", activityReward({
            data: data,
            user: user,
            res: res
          }));
        case 20:
          return _context5.abrupt("return", withdraw({
            data: data,
            user: user,
            res: res
          }));
        case 21:
          return _context5.abrupt("return", deposit({
            data: data,
            user: user,
            res: res
          }));
        case 22:
          return _context5.abrupt("return", cancelWithdraw({
            data: data,
            user: user,
            res: res
          }));
        case 23:
          return _context5.abrupt("return", freeSpinReward({
            data: data,
            user: user,
            res: res
          }));
        case 24:
          return _context5.abrupt("return", res.status(200).json({
            status: "9999",
            err_text: "Invalid action!"
          }));
        case 25:
          _context5.next = 31;
          break;
        case 27:
          _context5.prev = 27;
          _context5.t1 = _context5["catch"](0);
          console.log(_context5.t1);
          return _context5.abrupt("return", res.status(200).json({
            status: "9999",
            err_text: "Something went wrong! Internal server error!"
          }));
        case 31:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 27]]);
  }));
  return function mainFunction(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getBalance = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref6) {
    var data, user, res;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          data = _ref6.data, user = _ref6.user, res = _ref6.res;
          return _context6.abrupt("return", res.status(200).json({
            status: "0000",
            balance: user.money,
            err_text: ""
          }));
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getBalance(_x11) {
    return _ref7.apply(this, arguments);
  };
}();
var betNSettle = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(_ref8) {
    var data, user, res, gType, bet, win, denom, userMoney, passBet, finalAmount;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          data = _ref8.data, user = _ref8.user, res = _ref8.res;
          gType = data.gType;
          bet = Number(data.bet);
          win = Number(data.win);
          denom = data.denom;
          userMoney = Number(user.money);
          passBet = null;
          if ([0, 7, 9, 12].includes(parseInt(gType))) {
            passBet = userMoney >= bet;
          } else {
            passBet = false;
          }
          if (!passBet) {
            _context7.next = 15;
            break;
          }
          finalAmount = Number(userMoney + bet + win).toFixed(2);
          _context7.next = 12;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, user.phone]);
        case 12:
          return _context7.abrupt("return", res.status(200).json({
            status: "0000",
            balance: finalAmount,
            err_text: ""
          }));
        case 15:
          return _context7.abrupt("return", res.status(200).json({
            status: "6006",
            balance: userMoney,
            err_text: "Insufficient balance!"
          }));
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function betNSettle(_x12) {
    return _ref9.apply(this, arguments);
  };
}();
var cancelBetNSettle = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_ref10) {
    var data, user, res;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          data = _ref10.data, user = _ref10.user, res = _ref10.res;
          return _context8.abrupt("return", res.status(200).json({
            status: "0000",
            balance: user.money,
            err_text: ""
          }));
        case 2:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function cancelBetNSettle(_x13) {
    return _ref11.apply(this, arguments);
  };
}();
var bet = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref12) {
    var data, user, res, amount, userMoney, finalAmount, cUser;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          data = _ref12.data, user = _ref12.user, res = _ref12.res;
          amount = Number(data.amount);
          userMoney = Number(user.money);
          if (!(userMoney >= amount)) {
            _context9.next = 13;
            break;
          }
          finalAmount = Number(userMoney - amount).toFixed(2);
          _context9.next = 7;
          return _connectDB["default"].query("UPDATE users SET money = money - ?, total_money =  total_money - ? WHERE `phone` = ?", [amount, amount, user.phone]);
        case 7:
          _context9.next = 9;
          return getUserDataByAuthPhoneNumber(user.phone);
        case 9:
          cUser = _context9.sent;
          return _context9.abrupt("return", res.status(200).json({
            status: "0000",
            balance: cUser.money,
            err_text: ""
          }));
        case 13:
          return _context9.abrupt("return", res.status(200).json({
            status: "6006",
            balance: userMoney,
            err_text: "Insufficient balance!"
          }));
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function bet(_x14) {
    return _ref13.apply(this, arguments);
  };
}();
var settle = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(_ref14) {
    var data, user, res, amount, userMoney, finalAmount;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          data = _ref14.data, user = _ref14.user, res = _ref14.res;
          amount = Number(data.amount);
          userMoney = Number(user.money);
          finalAmount = Number(userMoney + amount).toFixed(2);
          _context10.next = 6;
          return _connectDB["default"].query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?", [amount, amount, user.phone]);
        case 6:
          return _context10.abrupt("return", res.status(200).json({
            status: "0000",
            balance: finalAmount,
            err_text: ""
          }));
        case 7:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function settle(_x15) {
    return _ref15.apply(this, arguments);
  };
}();
var cancelBet = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(_ref16) {
    var data, user, res, amount, userMoney, finalAmount;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          data = _ref16.data, user = _ref16.user, res = _ref16.res;
          amount = Number(data.amount);
          userMoney = Number(user.money);
          finalAmount = Number(userMoney + amount).toFixed(2);
          _context11.next = 6;
          return _connectDB["default"].query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?", [amount, amount, user.phone]);
        case 6:
          return _context11.abrupt("return", res.status(200).json({
            status: "0000",
            balance: finalAmount,
            err_text: ""
          }));
        case 7:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function cancelBet(_x16) {
    return _ref17.apply(this, arguments);
  };
}();
var activityReward = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(_ref18) {
    var data, user, res, amount, userMoney, finalAmount;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          data = _ref18.data, user = _ref18.user, res = _ref18.res;
          // TODO: database to insert notification for user
          amount = Number(data.amount);
          userMoney = Number(user.money);
          finalAmount = Number(userMoney + amount).toFixed(2);
          _context12.next = 6;
          return _connectDB["default"].query("UPDATE users SET money = money + ?, total_money = total_money + ? WHERE `phone` = ?", [amount, amount, user.phone]);
        case 6:
          return _context12.abrupt("return", res.status(200).json({
            status: "0000",
            balance: finalAmount,
            err_text: ""
          }));
        case 7:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function activityReward(_x17) {
    return _ref19.apply(this, arguments);
  };
}();
var withdraw = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(_ref20) {
    var data, user, res, amount, userMoney, finalAmount;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          data = _ref20.data, user = _ref20.user, res = _ref20.res;
          amount = Number(data.amount);
          userMoney = Number(user.money);
          if (!(userMoney >= amount)) {
            _context13.next = 10;
            break;
          }
          finalAmount = Number(userMoney - amount).toFixed(2);
          _context13.next = 7;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, user.phone]);
        case 7:
          return _context13.abrupt("return", res.status(200).json({
            status: "0000",
            err_text: ""
          }));
        case 10:
          return _context13.abrupt("return", res.status(200).json({
            status: "6006",
            err_text: "Insufficient balance!"
          }));
        case 11:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function withdraw(_x18) {
    return _ref21.apply(this, arguments);
  };
}();
var deposit = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(_ref22) {
    var data, user, res, amount, userMoney, finalAmount;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          data = _ref22.data, user = _ref22.user, res = _ref22.res;
          amount = Number(data.amount);
          userMoney = Number(user.money);
          finalAmount = Number(userMoney + amount).toFixed(2);
          _context14.next = 6;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, user.phone]);
        case 6:
          return _context14.abrupt("return", res.status(200).json({
            status: "0000",
            balance: finalAmount,
            err_text: ""
          }));
        case 7:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function deposit(_x19) {
    return _ref23.apply(this, arguments);
  };
}();
var cancelWithdraw = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(_ref24) {
    var data, user, res, amount, userMoney, finalAmount;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          data = _ref24.data, user = _ref24.user, res = _ref24.res;
          amount = Number(data.amount);
          userMoney = Number(user.money);
          finalAmount = Number(userMoney + amount).toFixed(2);
          _context15.next = 6;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, user.phone]);
        case 6:
          return _context15.abrupt("return", res.status(200).json({
            status: "0000",
            balance: finalAmount,
            err_text: ""
          }));
        case 7:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function cancelWithdraw(_x20) {
    return _ref25.apply(this, arguments);
  };
}();
var freeSpinReward = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(_ref26) {
    var data, user, res, amount, userMoney, finalAmount;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          data = _ref26.data, user = _ref26.user, res = _ref26.res;
          amount = Number(data.amount);
          userMoney = Number(user.money);
          finalAmount = Number(userMoney + amount).toFixed(2);
          _context16.next = 6;
          return _connectDB["default"].query("UPDATE users SET money = ?, total_money = ? WHERE `phone` = ?", [finalAmount, finalAmount, user.phone]);
        case 6:
          return _context16.abrupt("return", res.status(200).json({
            status: "0000",
            balance: finalAmount,
            err_text: ""
          }));
        case 7:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function freeSpinReward(_x21) {
    return _ref27.apply(this, arguments);
  };
}();
var jdbController = {
  generateGameLink: generateGameLink,
  mainFunction: mainFunction,
  gameCategoriesPage: gameCategoriesPage,
  gameQuickPopularList: gameQuickPopularList,
  gameSlotsPage: gameSlotsPage
};
var getUserDataByAuthPhoneNumber = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(phoneNumber) {
    var _yield$connection$que, _yield$connection$que2, users, user;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return _connectDB["default"].query("SELECT `phone`, `money`, `name_user` FROM users WHERE `phone` = ? ", [phoneNumber]);
        case 2:
          _yield$connection$que = _context17.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          users = _yield$connection$que2[0];
          user = users === null || users === void 0 ? void 0 : users[0];
          if (!(user === undefined || user === null)) {
            _context17.next = 8;
            break;
          }
          throw Error("Unable to get user data!");
        case 8:
          return _context17.abrupt("return", {
            phone: user.phone,
            money: Number(user.money),
            username: user.name_user
          });
        case 9:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function getUserDataByAuthPhoneNumber(_x22) {
    return _ref28.apply(this, arguments);
  };
}();
var _default = exports["default"] = jdbController;