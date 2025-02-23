"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S = void 0;
var _vendorB = require("./vendor-b2024301.js");
var _indexFbf0707b = require("./index-fbf0707b.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var E = {
    "class": "settingPanel__container-items"
  },
  J = ["onClick"],
  W = {
    "class": "settingPanel__container-items__title"
  },
  z = ["src"],
  F = {
    "class": "settingPanel__container-items-right"
  },
  H = (0, _vendorB.O)({
    __name: "index",
    props: {
      type: {
        type: String,
        "default": "default"
      }
    },
    setup: function setup(_) {
      var k = _,
        _O = (0, _vendorB.y)(),
        e = _O.t,
        h = (0, _vendorB.x)(),
        g = (0, _indexFbf0707b.l)(),
        y = (0, _indexFbf0707b.S)(),
        n = (0, _vendorB.v)(function () {
          return g.userInfo;
        }),
        I = (0, _vendorB.v)(function () {
          return y.getIsCanAppDownload;
        }),
        w = (0, _vendorB.v)(function () {
          return k.type !== "default" ? [{
            icon: "languageIcon",
            title: e("switchLanguages"),
            link: "Language",
            isopen: "1"
          }, {
            icon: "notificationCenter",
            title: e("noti"),
            link: "Notification",
            isopen: "1"
          }, {
            icon: "serviceCenter",
            title: e("wholeTimeService"),
            link: "CustomerService",
            isopen: "1"
          }, {
            icon: "guide",
            title: e("guide"),
            link: "Guide",
            isopen: "1"
          }, {
            icon: "about",
            title: e("about"),
            link: "About",
            isopen: "1"
          }, I.value && {
            icon: "down",
            title: e("downloadAPP"),
            link: "",
            isopen: 1
          }].filter(Boolean) : [{
            icon: "notifyIcon",
            title: e("notifications"),
            link: "Messages",
            isopen: "1"
          }, {
            icon: "inviteIcon",
            title: e("invitationBonus"),
            link: "InvitationBonus",
            isopen: n.value.isTaskState,
            haspermission: 15
          }, {
            icon: "giftIcon",
            title: e("giftExchange"),
            link: "RedeemGift",
            isopen: "1"
          }, {
            icon: "cps",
            title: e("cpsTip6"),
            link: "MyCps",
            isopen: n.value.isOpenChampion
          }, {
            icon: "orderIcon",
            title: e("productOrder"),
            link: "PointMall-MyOrders",
            isopen: n.value.isOpenPointMall
          }, {
            icon: "laundryIcon",
            title: e("laundryAmount"),
            link: "Laundry",
            isopen: n.value.isOpenWashCode
          }, {
            icon: "mylottery",
            title: e("MyLottery"),
            link: "PointMall-MyLottery",
            isopen: n.value.isOpenPointMall
          }, {
            icon: "statsIcon",
            title: e("gameStatistics"),
            link: "GameStats",
            isopen: "1",
            haspermission: 17
          }, {
            icon: "superIcon",
            title: e("superjackpot"),
            link: "SuperJackpot",
            isopen: n.value.isOpenJackpotReward
          }, {
            icon: "languageIcon",
            title: e("switchLanguages"),
            link: "Language",
            isopen: "1"
          }];
        });
      function S() {
        return _S.apply(this, arguments);
      }
      function _S() {
        _S = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var t, s, a;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _indexFbf0707b.A)((0, _indexFbf0707b.j)());
              case 2:
                t = _context.sent;
                if (t) {
                  s = navigator.userAgent.toLowerCase(), a = "";
                  s.indexOf("windows") != -1 || s.indexOf("android") != -1 ? a = t.data.androidUrl : s.indexOf("iphone") != -1 || s.indexOf("mac") != -1 || s.indexOf("ipad") != -1 ? a = t.data.iosUrl : a = t.data.androidUrl, (0, _indexFbf0707b.p)(a);
                }
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _S.apply(this, arguments);
      }
      function x(t) {
        if (t.icon == "down") return S();
        h.push({
          name: t.link
        });
      }
      return function (t, s) {
        var a = (0, _vendorB.a3)("van-icon"),
          P = (0, _vendorB.a0)("haspermission");
        return (0, _vendorB.P)(), (0, _vendorB.V)("div", {
          "class": (0, _vendorB.R)(["settingPanel__container", ["panel-".concat(_.type)]])
        }, [(0, _vendorB.Y)("div", E, [((0, _vendorB.P)(!0), (0, _vendorB.V)(_vendorB.W, null, (0, _vendorB.X)(w.value, function (i) {
          var f, v;
          return (0, _vendorB.a1)(((0, _vendorB.P)(), (0, _vendorB.V)("div", {
            key: i.title,
            onClick: function onClick(X) {
              return x(i);
            },
            "class": "settingPanel__container-items__item ar-1px-b"
          }, [(0, _vendorB.Y)("div", W, [(0, _vendorB.Y)("img", {
            src: (0, _vendorB.T)(_indexFbf0707b.g)("main", "".concat(i.icon))
          }, null, 8, z), (0, _vendorB.Y)("span", null, (0, _vendorB._)(i.title), 1)]), (0, _vendorB.Y)("div", F, [(0, _vendorB.a1)((0, _vendorB.Y)("h5", null, (0, _vendorB._)((f = n.value) == null ? void 0 : f.unRead), 513), [[_vendorB.ae, i.icon === "notifyIcon" && ((v = n.value) == null ? void 0 : v.unRead) > 0]]), (0, _vendorB.a1)((0, _vendorB.Y)("span", null, (0, _vendorB._)((0, _vendorB.T)(g).getLanguageName), 513), [[_vendorB.ae, i.icon === "languageIcon"]]), (0, _vendorB.a4)(a, {
            name: "arrow",
            color: "#fff"
          })])], 8, J)), [[_vendorB.ae, i.isopen == "1"], [P, i.haspermission]]);
        }), 128))])], 2);
      };
    }
  });
var K = exports.S = (0, _indexFbf0707b._)(H, [["__scopeId", "data-v-0341cbde"]]);