"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _pageActivityD3ba61d = require("./page-activity-d3ba61d1.js");
var _modules6b0d6df = require("./modules-6b0d6df4.js");
require("./native/index-7b2487e5.js");
require("./en-93cdab10.js");
require("./rus-ecb14220.js");
require("./vi-40bd560a.js");
require("./id-24cc3835.js");
require("./hd-c5b1d7e8.js");
require("./tha-330057b2.js");
require("./md-02b1fc1c.js");
require("./bra-1f3ea623.js");
require("./my-80d37f62.js");
require("./bdt-d8f19d0c.js");
require("./zh-3589f8b3.js");
require("./pak-9f46abf2.js");
require("./ar-64903102.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  var e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var s = _step.value;
      o(s);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  new MutationObserver(function (s) {
    var _iterator2 = _createForOfIteratorHelper(s),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var i = _step2.value;
        if (i.type === "childList") {
          var _iterator3 = _createForOfIteratorHelper(i.addedNodes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var r = _step3.value;
              r.tagName === "LINK" && r.rel === "modulepreload" && o(r);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function a(s) {
    var i = {};
    return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function o(s) {
    if (s.ep) return;
    s.ep = !0;
    var i = a(s);
    fetch(s.href, i);
  }
})();
var Pt = {
    "class": "tabbar__container"
  },
  xt = ["onClick"],
  Nt = {
    key: 0,
    "class": "promotionBg"
  },
  Rt = (0, _modules6b0d6df.$)({
    __name: "index",
    setup: function setup(t) {
      var e = (0, _modules6b0d6df.P)(),
        a = (0, _modules6b0d6df.Q)();
      function o(_x) {
        return _o.apply(this, arguments);
      }
      function _o() {
        _o = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(i) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return e.push({
                  name: i
                });
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _o.apply(this, arguments);
      }
      var s = [{
        name: "home"
      }, {
        name: "activity"
      }, {
        name: "promotion"
      }, {
        name: "wallet"
      }, {
        name: "main"
      }];
      return function (i, r) {
        var l = (0, _modules6b0d6df.a3)("svg-icon");
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("div", Pt, [((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)(_modules6b0d6df.a5, null, (0, _modules6b0d6df.a6)(s, function (u, p) {
          return (0, _modules6b0d6df.l)("div", {
            "class": (0, _modules6b0d6df.aa)(["tabbar__container-item", {
              active: u.name === (0, _modules6b0d6df.H)(a).name
            }]),
            key: u + "" + p,
            onClick: function onClick(f) {
              return o(u.name);
            }
          }, [(0, _modules6b0d6df.a7)(l, {
            name: u.name
          }, null, 8, ["name"]), u.name === "promotion" ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("div", Nt)) : (0, _modules6b0d6df.a2)("v-if", !0), (0, _modules6b0d6df.l)("span", null, (0, _modules6b0d6df.a1)(i.$t(u.name)), 1)], 10, xt);
        }), 64))]);
      };
    }
  });
var Ft = (0, _pageActivityD3ba61d._)(Rt, [["__scopeId", "data-v-6ab3f23e"], ["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/TabBar/index.vue"]]);
function Vt() {
  var t = (0, _pageActivityD3ba61d.G)(),
    e = function e() {
      document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0);
    };
  (0, _modules6b0d6df.A)(function () {
    document.addEventListener("visibilitychange", e);
  }), (0, _modules6b0d6df.N)(function () {
    document.removeEventListener("visibilitychange", e);
  });
}
var Gt = (0, _modules6b0d6df.$)({
  __name: "Customer",
  setup: function setup(t) {
    (0, _modules6b0d6df.aq)(function (v) {
      return {
        "f6a705e1-currentFontFamily": N.value
      };
    });
    var e = (0, _modules6b0d6df.r)(!1),
      a = (0, _modules6b0d6df.r)({
        x: 0,
        y: 0
      }),
      o = (0, _modules6b0d6df.r)(0),
      s = (0, _modules6b0d6df.r)(0),
      i = (0, _modules6b0d6df.r)(0),
      r = (0, _modules6b0d6df.r)(0),
      l = (0, _modules6b0d6df.r)(0),
      u = (0, _modules6b0d6df.r)(0),
      p = (0, _modules6b0d6df.r)();
    var f, V, P, x;
    var G = (0, _modules6b0d6df.P)();
    function H() {
      M(f, V, P, x) || G.push({
        name: "CustomerService"
      });
    }
    (0, _modules6b0d6df.A)(function () {
      p.value = document.getElementById("customerId");
    });
    function b(v) {
      e.value = !0;
      var g;
      v.touches ? g = v.touches[0] : g = v, a.value.x = g.clientX, a.value.y = g.clientY, o.value = p.value.offsetLeft, s.value = p.value.offsetTop, f = v.clientX, V = v.clientY;
    }
    function $(v) {
      if (e.value) {
        var g,
          I = document.getElementById("customerId"),
          R = I.clientWidth,
          z = I.clientHeight,
          Y = document.documentElement.clientHeight,
          h = document.documentElement.clientWidth;
        v.touches ? g = v.touches[0] : g = v, i.value = g.clientX - a.value.x, r.value = g.clientY - a.value.y, l.value = o.value + i.value, u.value = s.value + r.value, l.value <= 0 && (l.value = 0), u.value <= 0 && (u.value = 0), l.value >= h - R && (l.value = h - R), u.value >= Y - z && (u.value = Y - z), p.value.style.left = l.value + "px", p.value.style.top = u.value + "px", document.addEventListener("touchmove", function () {
          v.preventDefault();
        }, !1);
      }
      v.stopPropagation(), v.preventDefault();
    }
    function S(v) {
      e.value = !1, P = v.clientX, x = v.clientY;
    }
    function M(v, g, I, R) {
      return !(Math.sqrt((v - I) * (v - I) + (g - R) * (g - R)) <= 1);
    }
    var N = (0, _modules6b0d6df.r)("bahnschrift");
    return function (v, g) {
      var I = (0, _modules6b0d6df.a4)("lazy");
      return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("div", {
        "class": "customer",
        onClick: H,
        onMousedown: b,
        onTouchstart: b,
        onMousemove: $,
        onTouchmove: $,
        onMouseup: S,
        id: "customerId"
      }, [(0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("img", null, null, 512), [[I, (0, _modules6b0d6df.H)(_pageActivityD3ba61d.g)("home", "icon_sevice")]])], 32);
    };
  }
});
var Ht = (0, _pageActivityD3ba61d._)(Gt, [["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/common/Customer.vue"]]),
  Mt = "/assets/png/logo-72b611f7.png";
var Ot = {},
  fe = function fe(t) {
    return (0, _modules6b0d6df.ag)("data-v-5eb72be7"), t = t(), (0, _modules6b0d6df.ah)(), t;
  },
  jt = {
    "class": "start-page"
  },
  Ut = fe(function () {
    return (0, _modules6b0d6df.l)("div", {
      "class": "dice"
    }, null, -1);
  }),
  Kt = fe(function () {
    return (0, _modules6b0d6df.l)("img", {
      "class": "logo",
      src: Mt
    }, null, -1);
  });
function zt(t, e) {
  return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("div", jt, [(0, _modules6b0d6df.l)("div", null, [Ut, (0, _modules6b0d6df.l)("p", null, (0, _modules6b0d6df.a1)(t.$t("fairAndSafe")), 1), Kt])]);
}
var Yt = (0, _pageActivityD3ba61d._)(Ot, [["render", zt], ["__scopeId", "data-v-5eb72be7"], ["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/entrance/tiranga/StartPage.vue"]]),
  qt = {
    "class": "header"
  },
  Xt = {
    "class": "title"
  },
  Wt = {
    "class": "tip"
  },
  Jt = {
    "class": "container"
  },
  Qt = {
    "class": "footer"
  },
  Zt = (0, _modules6b0d6df.$)({
    __name: "dialog",
    setup: function setup(t) {
      var e = (0, _modules6b0d6df.P)(),
        a = (0, _modules6b0d6df.Q)(),
        o = (0, _modules6b0d6df.r)(!1),
        _ee = (0, _pageActivityD3ba61d.b0)(),
        s = _ee.closeFirstSave,
        _re = (0, _pageActivityD3ba61d.dA)(),
        i = _re.ActiveSotre,
        r = _re.getFirstRechargeList,
        l = (0, _modules6b0d6df.q)(new Date()).format("YYYY-MM-DD"),
        u = (0, _modules6b0d6df._)("firstSave", null),
        p = (0, _modules6b0d6df.J)(function () {
          return u.value == l;
        }),
        f = function f() {
          p.value ? (u.value = "", localStorage.removeItem("firstSave")) : u.value = l;
        },
        V = function V() {
          o.value = !1, s();
        },
        P = ["activity", "home", "main", "wallet", "promotion"];
      (0, _modules6b0d6df.G)(function () {
        return a.name;
      }, function (b) {
        P.includes(a.name) && x();
      });
      var x = function x() {
          u.value != l && r().then(function (b) {
            if (!b.length) {
              o.value = !1, s();
              return;
            }
            var $ = b.find(function (S) {
              return S.isFinshed;
            });
            $ && (i.value.isShowFirstSaveDialog = !1), $ || (o.value = !0);
          });
        },
        G = function G() {
          o.value = !1, s(!0), e.push({
            name: "FirstRecharge"
          });
        },
        H = function H() {
          o.value = !1, s(!0), e.push({
            name: "Recharge"
          });
        };
      return (0, _modules6b0d6df.A)(function () {
        P.includes(a.name) && x();
      }), function (b, $) {
        var S = (0, _modules6b0d6df.a3)("svg-icon"),
          M = (0, _modules6b0d6df.a3)("van-dialog");
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)(M, {
          show: o.value,
          "onUpdate:show": $[0] || ($[0] = function (N) {
            return o.value = N;
          }),
          className: "firstSaveDialog"
        }, {
          title: (0, _modules6b0d6df.a8)(function () {
            return [(0, _modules6b0d6df.l)("div", qt, [(0, _modules6b0d6df.l)("div", Xt, (0, _modules6b0d6df.a1)(b.$t("firstDialogH")), 1), (0, _modules6b0d6df.l)("div", Wt, (0, _modules6b0d6df.a1)(b.$t("firstDialogTip")), 1)])];
          }),
          footer: (0, _modules6b0d6df.a8)(function () {
            return [(0, _modules6b0d6df.l)("div", Qt, [(0, _modules6b0d6df.l)("div", {
              "class": (0, _modules6b0d6df.aa)(["active", {
                a: p.value
              }]),
              onClick: f
            }, [(0, _modules6b0d6df.a7)(S, {
              name: "active"
            }), (0, _modules6b0d6df.a9)((0, _modules6b0d6df.a1)(b.$t("noTipToday")), 1)], 2), (0, _modules6b0d6df.l)("div", {
              "class": "btn",
              onClick: G
            }, (0, _modules6b0d6df.a1)(b.$t("activity")), 1)])];
          }),
          "default": (0, _modules6b0d6df.a8)(function () {
            return [(0, _modules6b0d6df.l)("div", Jt, [(0, _modules6b0d6df.a7)(_pageActivityD3ba61d.dB, {
              list: (0, _modules6b0d6df.H)(i).FirstRechargeList,
              onGorecharge: H
            }, null, 8, ["list"])]), (0, _modules6b0d6df.l)("div", {
              "class": "close",
              onClick: V
            })];
          }),
          _: 1
        }, 8, ["show"]);
      };
    }
  });
var ea = (0, _pageActivityD3ba61d._)(Zt, [["__scopeId", "data-v-9cd12fb2"], ["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/Activity/FirstRecharge/dialog.vue"]]),
  ta = {
    "class": "dialog-window"
  },
  aa = {
    "class": "dialog-wrapper"
  },
  sa = {
    "class": "dialog-title"
  },
  oa = {
    "class": "dialog-content"
  },
  na = {
    "class": "dialog-window"
  },
  ia = {
    "class": "dialog-wrapper"
  },
  la = {
    "class": "dialog-title"
  },
  ra = {
    "class": "dialog-tips"
  },
  ca = {
    "class": "dialog-content"
  },
  ua = {
    "class": "dialog-tips",
    style: {
      "margin-bottom": "0"
    }
  },
  da = {
    "class": "dialog-window"
  },
  va = {
    "class": "dialog-wrapper"
  },
  _a = {
    "class": "dialog-tips",
    style: {
      "margin-top": "10px"
    }
  },
  ma = {
    "class": "dialog-title",
    style: {
      "margin-top": "0"
    }
  },
  pa = {
    "class": "dialog-tips"
  },
  fa = {
    "class": "dialog-content"
  },
  ga = (0, _modules6b0d6df.$)({
    __name: "AllPageDialog",
    setup: function setup(t) {
      (0, _modules6b0d6df.Q)();
      var _re2 = (0, _pageActivityD3ba61d.dA)(),
        e = _re2.ActiveSotre,
        _ee2 = (0, _pageActivityD3ba61d.b0)(),
        a = _ee2.store,
        o = _ee2.closeInvite,
        s = _ee2.showFirstSave,
        i = _ee2.onReturnAwards;
      return function (r, l) {
        var u = (0, _modules6b0d6df.a3)("van-dialog"),
          p = (0, _modules6b0d6df.a4)("lazy");
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)(_modules6b0d6df.a5, null, [(0, _modules6b0d6df.H)(s) ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)(ea, {
          key: 0
        })) : (0, _modules6b0d6df.a2)("v-if", !0), (0, _modules6b0d6df.a7)(u, {
          show: (0, _modules6b0d6df.H)(e).showReceiveDialog,
          "onUpdate:show": l[1] || (l[1] = function (f) {
            return (0, _modules6b0d6df.H)(e).showReceiveDialog = f;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modules6b0d6df.a8)(function () {
            return [(0, _modules6b0d6df.l)("div", ta, [(0, _modules6b0d6df.l)("div", aa, [(0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("img", null, null, 512), [[p, (0, _modules6b0d6df.H)(_pageActivityD3ba61d.g)("public", "succeed")]]), (0, _modules6b0d6df.l)("div", sa, (0, _modules6b0d6df.a1)(r.$t("awardsReceived")), 1), (0, _modules6b0d6df.l)("div", oa, [(0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("img", null, null, 512), [[p, (0, _modules6b0d6df.H)(_pageActivityD3ba61d.g)("activity/DailyTask", "amountIcon")]]), (0, _modules6b0d6df.l)("span", null, (0, _modules6b0d6df.a1)((0, _modules6b0d6df.H)(_pageActivityD3ba61d.o)((0, _modules6b0d6df.H)(e).receiveAmount)), 1)]), (0, _modules6b0d6df.l)("div", {
              "class": "dialog-btn",
              onClick: l[0] || (l[0] = function (f) {
                return (0, _modules6b0d6df.H)(e).showReceiveDialog = !1;
              })
            }, (0, _modules6b0d6df.a1)(r.$t("confirm")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modules6b0d6df.a7)(u, {
          show: (0, _modules6b0d6df.H)(a).invite,
          "onUpdate:show": l[3] || (l[3] = function (f) {
            return (0, _modules6b0d6df.H)(a).invite = f;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modules6b0d6df.a8)(function () {
            return [(0, _modules6b0d6df.l)("div", na, [(0, _modules6b0d6df.l)("div", ia, [(0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("img", null, null, 512), [[p, (0, _modules6b0d6df.H)(_pageActivityD3ba61d.g)("public", "succeed")]]), (0, _modules6b0d6df.l)("div", la, (0, _modules6b0d6df.a1)(r.$t("inviteTips")), 1), (0, _modules6b0d6df.l)("p", ra, (0, _modules6b0d6df.a1)(r.$t("inviteAmount")), 1), (0, _modules6b0d6df.l)("div", ca, [(0, _modules6b0d6df.l)("span", ua, (0, _modules6b0d6df.a1)(r.$t("commissionAmount")), 1), (0, _modules6b0d6df.l)("span", null, (0, _modules6b0d6df.a1)((0, _modules6b0d6df.H)(_pageActivityD3ba61d.o)((0, _modules6b0d6df.H)(a).rebateAmount)), 1)]), (0, _modules6b0d6df.l)("div", {
              "class": "dialog-btn",
              onClick: l[2] || (l[2] = function (f) {
                return (0, _modules6b0d6df.H)(o)();
              })
            }, (0, _modules6b0d6df.a1)(r.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modules6b0d6df.a7)(u, {
          show: (0, _modules6b0d6df.H)(a).oldUser,
          "onUpdate:show": l[5] || (l[5] = function (f) {
            return (0, _modules6b0d6df.H)(a).oldUser = f;
          }),
          "show-confirm-button": !1,
          "close-on-click-overlay": !0,
          className: "noOverHidden"
        }, {
          "default": (0, _modules6b0d6df.a8)(function () {
            return [(0, _modules6b0d6df.l)("div", da, [(0, _modules6b0d6df.l)("div", va, [(0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("img", null, null, 512), [[p, (0, _modules6b0d6df.H)(_pageActivityD3ba61d.g)("public", "succeed")]]), (0, _modules6b0d6df.l)("p", _a, (0, _modules6b0d6df.a1)(r.$t("oldPromptTip")), 1), (0, _modules6b0d6df.l)("div", ma, (0, _modules6b0d6df.a1)(r.$t("oldPrompt")), 1), (0, _modules6b0d6df.l)("p", pa, (0, _modules6b0d6df.a1)(r.$t("oldPromptGift")), 1), (0, _modules6b0d6df.l)("div", fa, [(0, _modules6b0d6df.l)("span", null, (0, _modules6b0d6df.a1)((0, _modules6b0d6df.H)(_pageActivityD3ba61d.o)((0, _modules6b0d6df.H)(a).returnAwards)), 1)]), (0, _modules6b0d6df.l)("div", {
              "class": "dialog-btn",
              onClick: l[4] || (l[4] = function (f) {
                return (0, _modules6b0d6df.H)(i)();
              })
            }, (0, _modules6b0d6df.a1)(r.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"])], 64);
      };
    }
  });
var ha = (0, _pageActivityD3ba61d._)(ga, [["__scopeId", "data-v-3d4fafbb"], ["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/common/AllPageDialog.vue"]]),
  ba = (0, _modules6b0d6df.$)({
    __name: "App",
    setup: function setup(t) {
      (0, _modules6b0d6df.aq)(function (h) {
        return {
          "f13b4d11-currentFontFamily": N.value
        };
      });
      var _ee3 = (0, _pageActivityD3ba61d.b0)(),
        e = _ee3.openAll,
        a = (0, _pageActivityD3ba61d.bj)(),
        o = (0, _modules6b0d6df.r)(!1),
        s = (0, _modules6b0d6df.r)(!1),
        i = (0, _modules6b0d6df.Q)(),
        r = (0, _pageActivityD3ba61d.u)(),
        l = (0, _pageActivityD3ba61d.S)(),
        _Re = (0, _modules6b0d6df.K)(),
        u = _Re.locale,
        p = (0, _pageActivityD3ba61d.G)(),
        f = (0, _modules6b0d6df.r)(!1),
        V = (0, _modules6b0d6df.J)(function () {
          return i.meta.tabBar;
        }),
        P = "damanHome",
        x = (0, _modules6b0d6df.J)(function () {
          return ["electronic", "blackGoldHome"].includes(P) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path);
        }),
        G = (0, _modules6b0d6df.r)(0),
        H = (0, _modules6b0d6df.r)(Math.floor(Math.random() * 1e4)),
        b = (0, _modules6b0d6df.J)(function () {
          return i.name + H.value;
        }),
        $ = function $() {
          a.on("changeKeepAliveKey", function () {
            H.value = Math.floor(Math.random() * 1e4);
          });
        };
      sessionStorage.getItem("isload") ? o.value = !1 : (s.value = !0, sessionStorage.setItem("isload", s.value.toString()), o.value = !0), l.getHomeSetting(), (0, _modules6b0d6df.G)(function () {
        return l.getAreacode;
      }, function (h) {
        h && r.setNumberType(h.substring(1));
      }), (0, _modules6b0d6df.G)(function () {
        return l.getDL;
      }, function (h) {
        u.value = h, p.updateLanguage(h), (0, _pageActivityD3ba61d.b4)(h), (0, _pageActivityD3ba61d.b5)(_pageActivityD3ba61d.K.global.t);
      }), setTimeout(function () {
        o.value = !1;
      }, 2e3);
      var S = (0, _modules6b0d6df.r)(!1),
        M = (0, _pageActivityD3ba61d.a)();
      M.$subscribe(function (h, D) {
        S.value = D.isLoading, M.setLoading(S.value);
      });
      var N = (0, _modules6b0d6df.r)("bahnschrift");
      var v = (0, _pageActivityD3ba61d.dC)(),
        g = l.getLanguage,
        I = (0, _pageActivityD3ba61d.dD)(v, g);
      var R = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(h) {
            var D, q;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  D = [{
                    title: "vi",
                    fontStyle: "bahnschrift"
                  }, {
                    title: "else",
                    fontStyle: "'Roboto', 'Inter', sans-serif"
                  }], q = D.findIndex(function (X) {
                    return X.title == I;
                  });
                  q >= 0 ? N.value = D[q].fontStyle : N.value = D[D.length - 1].fontStyle;
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function R(_x2) {
            return _ref.apply(this, arguments);
          };
        }(),
        z = function z() {
          a.on("keyChange", function () {
            G.value++;
          }), a.on("changeIsGame", function () {
            f.value = !f.value, S.value = !S.value;
          });
        },
        Y = function Y() {
          a.off("keyChange"), a.off("changeKeepAliveKey"), a.off("changeIsGame");
        };
      return r.setNumberType(l.getAreacode.substring(1)), R(), (0, _modules6b0d6df.A)(function () {
        (0, _pageActivityD3ba61d.dE)() && (0, _pageActivityD3ba61d.dF)(), e(), Y(), z(), $(), localStorage.getItem("language") && (0, _pageActivityD3ba61d.b3)(localStorage.getItem("language"));
      }), Vt(), function (h, D) {
        var q = (0, _modules6b0d6df.a3)("LoadingView");
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)(_modules6b0d6df.a5, null, [(0, _modules6b0d6df.a7)(q, {
          loading: S.value,
          type: "loading",
          isGame: f.value
        }, {
          "default": (0, _modules6b0d6df.a8)(function () {
            return [((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)((0, _modules6b0d6df.H)(_modules6b0d6df.b5), {
              key: G.value
            }, {
              "default": (0, _modules6b0d6df.a8)(function (_ref2) {
                var X = _ref2.Component;
                return [((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)(_modules6b0d6df.aD, {
                  max: 1
                }, [(0, _modules6b0d6df.H)(i).meta.keepAlive ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)((0, _modules6b0d6df.aC)(X), {
                  key: b.value
                })) : (0, _modules6b0d6df.a2)("v-if", !0)], 1024)), (0, _modules6b0d6df.H)(i).meta.keepAlive ? (0, _modules6b0d6df.a2)("v-if", !0) : ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)((0, _modules6b0d6df.aC)(X), {
                  key: 0
                }))];
              }),
              _: 1
            })), (0, _modules6b0d6df.a2)("online custom service"), x.value ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)(Ht, {
              key: 0
            })) : ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)((0, _modules6b0d6df.H)(_modules6b0d6df.b6), {
              key: 1,
              license: "15861567"
            })), V.value ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)(Ft, {
              key: 2
            })) : (0, _modules6b0d6df.a2)("v-if", !0)];
          }),
          _: 1
        }, 8, ["loading", "isGame"]), o.value ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)(Yt, {
          key: 0
        })) : (0, _modules6b0d6df.a2)("v-if", !0), (0, _modules6b0d6df.a7)(ha)], 64);
      };
    }
  });
var ya = (0, _pageActivityD3ba61d._)(ba, [["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/entrance/tiranga/App.vue"]]);
var wa = {
    mounted: function mounted(t, e) {
      if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
      var a = null;
      var o = e.value[0],
        s = e.value[1];
      t.__handleClick__ = function () {
        a && clearTimeout(a), a = setTimeout(function () {
          o();
        }, s || 500);
      }, t.addEventListener("click", t.__handleClick__);
    },
    beforeUnmount: function beforeUnmount(t) {
      t.removeEventListener("click", t.__handleClick__);
    }
  },
  ka = {
    mounted: function mounted(t, e) {
      if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
      var a = null;
      var o = e.value[0],
        s = e.value[1];
      t.__handleClick__ = function () {
        a && clearTimeout(a), t.disabled || (t.disabled = !0, o(), a = setTimeout(function () {
          t.disabled = !1;
        }, s || 500));
      }, t.addEventListener("click", t.__handleClick__);
    },
    beforeUnmount: function beforeUnmount(t) {
      t.removeEventListener("click", t.__handleClick__);
    }
  },
  Sa = {
    mounted: function mounted(t, e) {
      t.addEventListener("input", function (a) {
        var s = t.value.replace(/\D+/g, "");
        t.value = s, e.value = s;
      });
    }
  },
  Ca = function Ca(t) {
    return {
      beforeMount: function beforeMount(e, a) {
        e.classList.add("ar-lazyload");
        var o = a.value;
        e.dataset.origin = o, t.observe(e);
      },
      updated: function updated(e, a) {
        e.dataset.origin = a.value, t.observe(e);
      },
      unmounted: function unmounted(e, a) {
        t.unobserve(e);
      },
      mounted: function mounted(e, a) {
        t.observe(e);
      }
    };
  },
  $a = {
    mounted: function mounted(t, e) {
      var a = 0;
      var o = e.value && e.value.wait ? e.value.wait : 3e3,
        s = function s(i) {
          var r = Date.now();
          r - a >= o && (a = r, e.value && e.value.handler && e.value.handler(i));
        };
      t.addEventListener("click", s), t._throttleClickCleanup = function () {
        t.removeEventListener("click", s);
      };
    },
    unmounted: function unmounted(t) {
      t._throttleClickCleanup && t._throttleClickCleanup(), delete t._throttleClickCleanup;
    }
  },
  Aa = {
    mounted: function mounted(t, e) {
      var a = e.value;
      var o = (0, _modules6b0d6df.X)("permission", null);
      o.value === null || !a || (o && (o = JSON.parse(o.value)), o && o[a] === !1 && (t.style.display = "none"));
    }
  },
  ie = {
    debounce: wa,
    throttle: ka,
    onlyNum: Sa,
    throttleClick: $a,
    haspermission: Aa
  },
  La = {
    install: function install(t) {
      Object.keys(ie).forEach(function (a) {
        t.directive(a, ie[a]);
      });
      var e = new IntersectionObserver(function (a) {
        a.forEach(function (o) {
          if (o.isIntersecting) {
            var s = o.target;
            s.src = s.dataset.origin || (0, _pageActivityD3ba61d.h)("images", "avatar"), s.onerror = function () {
              e.unobserve(s);
              var i = s.dataset.img || (0, _pageActivityD3ba61d.h)("images", "avatar");
              if (!i || i != null && i.includes("undefined")) {
                s.onerror = null;
                return;
              }
              s.src = i, s.style.objectFit = "contain";
            }, s.classList.remove("ar-lazyload"), e.unobserve(s);
          }
        });
      }, {
        rootMargin: "0px 0px -50px 0px"
      });
      t.directive("lazy", Ca(e));
    }
  },
  Ia = {
    "class": "navbar-fixed"
  },
  Da = {
    "class": "navbar__content"
  },
  Ta = {
    "class": "navbar__content-center"
  },
  Ea = {
    "class": "navbar__content-title"
  },
  Ba = (0, _modules6b0d6df.$)({
    __name: "NavBar",
    props: {
      title: {
        type: String,
        "default": ""
      },
      placeholder: {
        type: Boolean,
        "default": !0
      },
      leftArrow: {
        type: Boolean,
        "default": !1
      },
      backgroundColor: {
        type: String,
        "default": "#f7f8ff"
      },
      classN: {
        type: String,
        "default": ""
      },
      headLogo: {
        type: Boolean,
        "default": !1
      },
      headerUrl: {
        type: String,
        "default": ""
      }
    },
    emits: ["click-left", "click-right"],
    setup: function setup(t, _ref3) {
      var e = _ref3.emit;
      var a = (0, _modules6b0d6df.r)(),
        o = (0, _pageActivityD3ba61d.S)(),
        s = (0, _modules6b0d6df.J)(function () {
          return o.getHeadLogo;
        }),
        i = function i() {
          e("click-left");
        },
        r = function r() {
          e("click-right");
        };
      return (0, _modules6b0d6df.A)(function () {}), function (l, u) {
        var p = (0, _modules6b0d6df.a3)("van-icon");
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("div", {
          "class": "navbar",
          ref_key: "navbar",
          ref: a
        }, [(0, _modules6b0d6df.l)("div", Ia, [(0, _modules6b0d6df.l)("div", Da, [(0, _modules6b0d6df.l)("div", {
          "class": "navbar__content-left",
          onClick: i
        }, [(0, _modules6b0d6df.ad)(l.$slots, "left", {}, function () {
          return [t.leftArrow ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.af)(p, {
            key: 0,
            name: "arrow-left"
          })) : (0, _modules6b0d6df.a2)("v-if", !0)];
        }, !0)]), (0, _modules6b0d6df.l)("div", Ta, [t.headLogo ? ((0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("div", {
          key: 0,
          "class": "headLogo",
          style: (0, _modules6b0d6df.a0)({
            backgroundImage: "url(" + (t.headerUrl || s.value) + ")"
          })
        }, null, 4)) : (0, _modules6b0d6df.a2)("v-if", !0), (0, _modules6b0d6df.ad)(l.$slots, "center", {}, function () {
          return [(0, _modules6b0d6df.l)("div", Ea, (0, _modules6b0d6df.a1)(t.title), 1)];
        }, !0)]), (0, _modules6b0d6df.l)("div", {
          "class": "navbar__content-right",
          onClick: r
        }, [(0, _modules6b0d6df.ad)(l.$slots, "right", {}, void 0, !0)])])])], 512);
      };
    }
  });
var Pa = (0, _pageActivityD3ba61d._)(Ba, [["__scopeId", "data-v-12a80a3e"], ["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/common/NavBar.vue"]]),
  xa = {
    "class": "ar-loading-view"
  },
  Na = {
    "class": "loading-wrapper"
  },
  Ra = {
    "class": "com__box"
  },
  Fa = (0, _modules6b0d6df.k)('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1),
  Va = {
    "class": "skeleton-wrapper"
  },
  Ga = (0, _modules6b0d6df.$)({
    __name: "LoadingView",
    props: {
      loading: {
        type: Boolean,
        required: !0
      },
      type: {
        type: String,
        required: !0
      },
      isGame: {
        type: Boolean,
        required: !0
      }
    },
    setup: function setup(t) {
      var e = t,
        a = (0, _modules6b0d6df.r)();
      var o = null;
      return (0, _modules6b0d6df.A)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _modules6b0d6df.B)();
            case 2:
              o = _modules6b0d6df.b7.loadAnimation({
                container: a.value,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: "/data.json"
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))), (0, _modules6b0d6df.G)(function () {
        return e.loading;
      }, function () {
        e.type === "loading" && !e.isGame && (e.loading ? o && o.play() : o && o.stop());
      }), (0, _modules6b0d6df.N)(function () {
        o && o.destroy(), o = null;
      }), function (s, i) {
        var r = (0, _modules6b0d6df.a3)("VanSkeleton");
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)(_modules6b0d6df.a5, null, [(0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("div", xa, [(0, _modules6b0d6df.ad)(s.$slots, "template", {}, function () {
          return [(0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("div", Na, [(0, _modules6b0d6df.a2)(" <VanLoading /> "), (0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("div", {
            ref_key: "element",
            ref: a,
            "class": "loading-animat"
          }, null, 512), [[_modules6b0d6df.al, !s.isGame]]), (0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("div", Ra, [(0, _modules6b0d6df.a2)(" loading "), Fa, (0, _modules6b0d6df.a2)(" 说明：组件名 ")], 512), [[_modules6b0d6df.al, s.isGame]]), (0, _modules6b0d6df.a2)(' <div class="animation"></div> ')], 512), [[_modules6b0d6df.al, s.type === "loading"]]), (0, _modules6b0d6df.ab)((0, _modules6b0d6df.l)("div", Va, [(0, _modules6b0d6df.a7)(r, {
            row: 10
          }), (0, _modules6b0d6df.a7)(r, {
            title: "",
            avatar: "",
            row: 5
          }), (0, _modules6b0d6df.a7)(r, {
            title: "",
            row: 5
          })], 512), [[_modules6b0d6df.al, s.type === "skeleton"]])];
        }, !0)], 512), [[_modules6b0d6df.al, s.loading]]), (0, _modules6b0d6df.ad)(s.$slots, "default", {}, void 0, !0)], 64);
      };
    }
  });
var Ha = (0, _pageActivityD3ba61d._)(Ga, [["__scopeId", "data-v-647954c7"], ["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/common/LoadingView.vue"]]);
var Ma = ["xlink:href"],
  Oa = {
    __name: "svgIcons",
    props: {
      name: {
        type: String,
        required: !0
      },
      color: {
        type: String,
        "default": ""
      }
    },
    setup: function setup(t) {
      var e = t,
        a = (0, _modules6b0d6df.J)(function () {
          return "#icon-".concat(e.name);
        }),
        o = (0, _modules6b0d6df.J)(function () {
          return e.name ? "svg-icon icon-".concat(e.name) : "svg-icon";
        });
      return function (s, i) {
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("svg", (0, _modules6b0d6df.b2)({
          "class": o.value
        }, s.$attrs, {
          style: {
            color: t.color
          }
        }), [(0, _modules6b0d6df.l)("use", {
          "xlink:href": a.value
        }, null, 8, Ma)], 16);
      };
    }
  },
  ja = (0, _pageActivityD3ba61d._)(Oa, [["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/common/svgIcons.vue"]]),
  Ua = {
    "class": "ar-searchbar__selector"
  },
  Ka = {
    "class": "ar-searchbar__selector-default"
  },
  za = (0, _modules6b0d6df.$)({
    __name: "ArSelect",
    props: {
      selectName: {
        type: String,
        "default": ""
      }
    },
    emits: ["click-select"],
    setup: function setup(t, _ref5) {
      var e = _ref5.emit;
      var a = function a() {
        e("click-select");
      };
      return function (o, s) {
        var i = (0, _modules6b0d6df.a3)("van-icon");
        return (0, _modules6b0d6df.o)(), (0, _modules6b0d6df.j)("div", Ua, [(0, _modules6b0d6df.l)("div", {
          onClick: a
        }, [(0, _modules6b0d6df.l)("span", Ka, (0, _modules6b0d6df.a1)(t.selectName), 1), (0, _modules6b0d6df.a7)(i, {
          name: "arrow-down"
        })])]);
      };
    }
  });
var Ya = (0, _pageActivityD3ba61d._)(za, [["__scopeId", "data-v-fa757a88"], ["__file", "/var/lib/jenkins/workspace/web-印度-Tiranga-webnew/src/components/common/ArSelect.vue"]]),
  qa = function qa(t) {
    t.component("NavBar", Pa), t.component("LoadingView", Ha), t.component("ArSelect", Ya), t.component("svg-icon", ja), t.use(_modules6b0d6df.b8).use(_modules6b0d6df.b9).use(_modules6b0d6df.ba).use(_modules6b0d6df.bb).use(_modules6b0d6df.bc).use(_modules6b0d6df.bd).use(_modules6b0d6df.be).use(_modules6b0d6df.bf).use(_modules6b0d6df.bg).use(_modules6b0d6df.bh).use(_modules6b0d6df.bi).use(_modules6b0d6df.bj).use(_modules6b0d6df.bk).use(_modules6b0d6df.bl).use(_modules6b0d6df.bm).use(_modules6b0d6df.bn).use(_modules6b0d6df.bo).use(_modules6b0d6df.bp).use(_modules6b0d6df.bq).use(_modules6b0d6df.br).use(_modules6b0d6df.bs).use(_modules6b0d6df.bt).use(_modules6b0d6df.bu).use(_modules6b0d6df.bv).use(_modules6b0d6df.bw).use(_modules6b0d6df.bx).use(_modules6b0d6df.by).use(_modules6b0d6df.bz).use(_modules6b0d6df.bA).use(_modules6b0d6df.bB).use(_modules6b0d6df.bC).use(_modules6b0d6df.bD).use(_modules6b0d6df.bE).use(_modules6b0d6df.bF).use(_modules6b0d6df.bG).use(_modules6b0d6df.bH).use(_modules6b0d6df.bI).use(_pageActivityD3ba61d.K).use(La).use(_modules6b0d6df.bJ);
    var e = t.config.globalProperties,
      a = {};
    a.TopHeight = 38, Object.keys(_pageActivityD3ba61d.dG.refiter).forEach(function (o) {
      a[o] = _pageActivityD3ba61d.dG.refiter[o];
    }), e.$u = a;
  };
_pageActivityD3ba61d.r.addRoute({
  path: "/",
  name: "home",
  component: function component() {
    return (0, _pageActivityD3ba61d.i)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("./page-home-5d70e52b.js"));
      }).then(function (t) {
        return t.X;
      });
    }, ["assets/js/page-home-5d70e52b.js", "assets/js/modules-6b0d6df4.js", "assets/css/modules-b642e9bc.css", "assets/js/page-activity-d3ba61d1.js", "assets/js/native/index-7b2487e5.js", "assets/js/en-93cdab10.js", "assets/js/rus-ecb14220.js", "assets/js/vi-40bd560a.js", "assets/js/id-24cc3835.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-02b1fc1c.js", "assets/js/bra-1f3ea623.js", "assets/js/my-80d37f62.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-3589f8b3.js", "assets/js/pak-9f46abf2.js", "assets/js/ar-64903102.js", "assets/css/page-activity-4fe5c6bf.css", "assets/css/page-home-522c97b9.css"]);
  },
  meta: {
    title: "home",
    tabBar: !0,
    keepAlive: !1
  }
});
var ae = (0, _modules6b0d6df.bK)(ya),
  ge = (0, _modules6b0d6df.bL)();
qa(ae);
ge.use(_modules6b0d6df.bM);
ae.use(_pageActivityD3ba61d.r).use(ge);
ae.mount("#app");