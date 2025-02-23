"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _modulesAa8ffe = require("./modules-aa8ffe67.js");
var _pageActivity6d = require("./page-activity-6d456111.js");
var _pageHome67e89e9a = require("./page-home-67e89e9a.js");
require("./native/index-3d731397.js");
require("./en-53bf8069.js");
require("./rus-ecb14220.js");
require("./vi-60d1c3eb.js");
require("./id-16b6cb52.js");
require("./hd-c5b1d7e8.js");
require("./tha-330057b2.js");
require("./md-e8a5e3b0.js");
require("./bra-38f5b166.js");
require("./my-32fb9d60.js");
require("./bdt-d8f19d0c.js");
require("./zh-7d334abd.js");
require("./pak-dbcb2394.js");
require("./ar-78aaffbf.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  var a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var t = _step.value;
      o(t);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  new MutationObserver(function (t) {
    var _iterator2 = _createForOfIteratorHelper(t),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var i = _step2.value;
        if (i.type === "childList") {
          var _iterator3 = _createForOfIteratorHelper(i.addedNodes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var n = _step3.value;
              n.tagName === "LINK" && n.rel === "modulepreload" && o(n);
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
  function e(t) {
    var i = {};
    return t.integrity && (i.integrity = t.integrity), t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? i.credentials = "include" : t.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function o(t) {
    if (t.ep) return;
    t.ep = !0;
    var i = e(t);
    fetch(t.href, i);
  }
})();
var Pt = {
    "class": "tabbar__container"
  },
  Bt = ["onClick"],
  Rt = {
    key: 0,
    "class": "promotionBg"
  },
  Vt = (0, _modulesAa8ffe.X)({
    __name: "index",
    setup: function setup(s) {
      var a = (0, _modulesAa8ffe.K)(),
        e = (0, _modulesAa8ffe.M)();
      function o(_x) {
        return _o.apply(this, arguments);
      }
      function _o() {
        _o = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(i) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return a.push({
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
      var t = [{
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
      return function (i, n) {
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", Pt, [((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)(_modulesAa8ffe.a4, null, (0, _modulesAa8ffe.a5)(t, function (l, c) {
          return (0, _modulesAa8ffe._)("div", {
            "class": (0, _modulesAa8ffe.a9)(["tabbar__container-item", {
              active: l.name === (0, _modulesAa8ffe.D)(e).name
            }]),
            key: l + "" + c,
            onClick: function onClick(d) {
              return o(l.name);
            }
          }, [(0, _modulesAa8ffe._)("div", {
            "class": "tab_icon",
            style: (0, _modulesAa8ffe.$)({
              backgroundImage: "url(".concat((0, _modulesAa8ffe.D)(_pageActivity6d.g)("tabBarIcons", l.name === (0, _modulesAa8ffe.D)(e).name && l.name !== "promotion" ? l.name + "_active" : l.name), ")")
            })
          }, null, 4), l.name === "promotion" ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", Rt)) : (0, _modulesAa8ffe.a1)("", !0), (0, _modulesAa8ffe._)("span", null, (0, _modulesAa8ffe.a0)(i.$t(l.name)), 1)], 10, Bt);
        }), 64))]);
      };
    }
  });
var Nt = (0, _pageActivity6d._)(Vt, [["__scopeId", "data-v-48aa04ea"]]);
function qt() {
  var s = (0, _pageActivity6d.G)(),
    a = function a() {
      document.visibilityState === "visible" ? s.setvisibility() : s.setvisibility(0);
    };
  (0, _modulesAa8ffe.w)(function () {
    document.addEventListener("visibilitychange", a);
  }), (0, _modulesAa8ffe.I)(function () {
    document.removeEventListener("visibilitychange", a);
  });
}
var Ot = (0, _modulesAa8ffe.X)({
  __name: "Customer",
  setup: function setup(s) {
    (0, _modulesAa8ffe.aB)(function (v) {
      return {
        "17a7a9f6": D.value
      };
    });
    var a = (0, _modulesAa8ffe.r)(!1),
      e = (0, _modulesAa8ffe.r)({
        x: 0,
        y: 0
      }),
      o = (0, _modulesAa8ffe.r)(0),
      t = (0, _modulesAa8ffe.r)(0),
      i = (0, _modulesAa8ffe.r)(0),
      n = (0, _modulesAa8ffe.r)(0),
      l = (0, _modulesAa8ffe.r)(0),
      c = (0, _modulesAa8ffe.r)(0),
      d = (0, _modulesAa8ffe.r)();
    var _, H, G, R;
    var M = (0, _modulesAa8ffe.K)();
    function K() {
      N(_, H, G, R) || M.push({
        name: "CustomerService"
      });
    }
    (0, _modulesAa8ffe.w)(function () {
      d.value = document.getElementById("customerId");
    });
    function V(v) {
      a.value = !0;
      var g;
      v.touches ? g = v.touches[0] : g = v, e.value.x = g.clientX, e.value.y = g.clientY, o.value = d.value.offsetLeft, t.value = d.value.offsetTop, _ = v.clientX, H = v.clientY;
    }
    function h(v) {
      if (a.value) {
        var g,
          A = document.getElementById("customerId"),
          q = A.clientWidth,
          X = A.clientHeight,
          J = document.documentElement.clientHeight,
          Q = document.documentElement.clientWidth;
        v.touches ? g = v.touches[0] : g = v, i.value = g.clientX - e.value.x, n.value = g.clientY - e.value.y, l.value = o.value + i.value, c.value = t.value + n.value, l.value <= 0 && (l.value = 0), c.value <= 0 && (c.value = 0), l.value >= Q - q && (l.value = Q - q), c.value >= J - X && (c.value = J - X), d.value.style.left = l.value + "px", d.value.style.top = c.value + "px", document.addEventListener("touchmove", function () {
          v.preventDefault();
        }, !1);
      }
      v.stopPropagation(), v.preventDefault();
    }
    function T(v) {
      a.value = !1, G = v.clientX, R = v.clientY;
    }
    function N(v, g, A, q) {
      return !(Math.sqrt((v - A) * (v - A) + (g - q) * (g - q)) <= 1);
    }
    var D = (0, _modulesAa8ffe.r)("bahnschrift");
    return function (v, g) {
      var A = (0, _modulesAa8ffe.a3)("lazy");
      return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", {
        "class": "customer",
        onClick: K,
        onMousedown: V,
        onTouchstart: V,
        onMousemove: h,
        onTouchmove: h,
        onMouseup: T,
        id: "customerId"
      }, [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("img", null, null, 512), [[A, (0, _modulesAa8ffe.D)(_pageActivity6d.g)("home", "icon_sevice")]])], 32);
    };
  }
});
var Ht = ["src"],
  Gt = (0, _modulesAa8ffe.X)({
    __name: "StartPage",
    setup: function setup(s) {
      var a = "p3",
        e = {}.VITE_STARTEXT || "";
      return function (o, t) {
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", {
          "class": (0, _modulesAa8ffe.a9)(["start-page", [(0, _modulesAa8ffe.D)(a)]])
        }, [(0, _modulesAa8ffe._)("div", null, [(0, _modulesAa8ffe._)("div", {
          "class": (0, _modulesAa8ffe.a9)(["dice", [(0, _modulesAa8ffe.D)(a)]])
        }, null, 2), (0, _modulesAa8ffe._)("p", null, (0, _modulesAa8ffe.a0)((0, _modulesAa8ffe.D)(e) || o.$t("fairAndSafe")), 1), (0, _modulesAa8ffe._)("img", {
          "class": (0, _modulesAa8ffe.a9)(["logo", [(0, _modulesAa8ffe.D)(a)]]),
          src: (0, _modulesAa8ffe.D)(_pageActivity6d.g)("home/StartPage", (0, _modulesAa8ffe.D)(_pageActivity6d.aQ)())
        }, null, 10, Ht)])], 2);
      };
    }
  });
var Mt = (0, _pageActivity6d._)(Gt, [["__scopeId", "data-v-4c7c9f53"]]),
  Ut = {
    "class": "header"
  },
  Ft = {
    "class": "title"
  },
  jt = {
    "class": "tip"
  },
  Kt = {
    "class": "container"
  },
  zt = {
    "class": "footer"
  },
  Yt = (0, _modulesAa8ffe.X)({
    __name: "dialog",
    setup: function setup(s) {
      var a = (0, _modulesAa8ffe.K)(),
        e = (0, _modulesAa8ffe.M)(),
        o = (0, _modulesAa8ffe.r)(!1),
        _ie = (0, _pageActivity6d.aV)(),
        t = _ie.store,
        i = _ie.closeFirstSave,
        _ge = (0, _pageActivity6d.dw)(),
        n = _ge.ActiveSotre,
        l = _ge.getFirstRechargeList,
        c = (0, _modulesAa8ffe.m)(new Date()).format("YYYY-MM-DD"),
        d = (0, _modulesAa8ffe.W)("firstSave", null),
        _ = (0, _modulesAa8ffe.F)(function () {
          return d.value == c;
        }),
        H = function H() {
          _.value ? (d.value = "", localStorage.removeItem("firstSave")) : d.value = c;
        },
        G = function G() {
          o.value = !1, i();
        },
        R = ["activity", "home", "main", "wallet", "promotion"];
      (0, _modulesAa8ffe.C)(function () {
        return e.name;
      }, function (h) {
        R.includes(e.name) && M();
      });
      var M = function M() {
          d.value != c && l().then(function (h) {
            if (!h.length) {
              o.value = !1, i();
              return;
            }
            var T = h.find(function (N) {
              return N.isFinshed;
            });
            T && (n.value.isShowFirstSaveDialog = !1), T || (o.value = !0);
          });
        },
        K = function K() {
          o.value = !1, i(!0), a.push({
            name: "FirstRecharge"
          });
        },
        V = function V() {
          o.value = !1, i(!0), a.push({
            name: "Recharge"
          });
        };
      return (0, _modulesAa8ffe.w)(function () {
        R.includes(e.name) && M();
      }), function (h, T) {
        var N = (0, _modulesAa8ffe.a2)("van-dialog");
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(N, {
          show: o.value,
          "onUpdate:show": T[0] || (T[0] = function (D) {
            return o.value = D;
          }),
          className: "firstSaveDialog"
        }, {
          title: (0, _modulesAa8ffe.a7)(function () {
            return [(0, _modulesAa8ffe._)("div", Ut, [(0, _modulesAa8ffe._)("div", Ft, (0, _modulesAa8ffe.a0)(h.$t("firstDialogH")), 1), (0, _modulesAa8ffe._)("div", jt, (0, _modulesAa8ffe.a0)(h.$t("firstDialogTip")), 1)])];
          }),
          footer: (0, _modulesAa8ffe.a7)(function () {
            return [(0, _modulesAa8ffe._)("div", zt, [(0, _modulesAa8ffe._)("div", {
              "class": (0, _modulesAa8ffe.a9)(["active", {
                a: _.value
              }]),
              onClick: H
            }, (0, _modulesAa8ffe.a0)(h.$t("noTipToday")), 3), (0, _modulesAa8ffe._)("div", {
              "class": "btn",
              onClick: K
            }, (0, _modulesAa8ffe.a0)(h.$t("activity")), 1)])];
          }),
          "default": (0, _modulesAa8ffe.a7)(function () {
            return [(0, _modulesAa8ffe._)("div", Kt, [(0, _modulesAa8ffe.a6)(_pageActivity6d.dx, {
              list: (0, _modulesAa8ffe.D)(n).FirstRechargeList,
              onGorecharge: V
            }, null, 8, ["list"])]), (0, _modulesAa8ffe._)("div", {
              "class": "close",
              onClick: G
            })];
          }),
          _: 1
        }, 8, ["show"]);
      };
    }
  });
var Wt = (0, _pageActivity6d._)(Yt, [["__scopeId", "data-v-98ead68b"]]),
  Xt = {
    "class": "dialog-window"
  },
  Jt = {
    "class": "dialog-wrapper"
  },
  Qt = {
    "class": "dialog-title"
  },
  Zt = {
    "class": "dialog-content"
  },
  ea = {
    "class": "dialog-window"
  },
  ta = {
    "class": "dialog-wrapper"
  },
  aa = {
    "class": "dialog-title"
  },
  sa = {
    "class": "dialog-tips"
  },
  oa = {
    "class": "dialog-content"
  },
  na = {
    "class": "dialog-tips",
    style: {
      "margin-bottom": "0"
    }
  },
  ia = {
    "class": "dialog-window"
  },
  la = {
    "class": "dialog-wrapper"
  },
  ra = {
    "class": "dialog-tips",
    style: {
      "margin-top": "10px"
    }
  },
  ca = {
    "class": "dialog-title",
    style: {
      "margin-top": "0"
    }
  },
  ua = {
    "class": "dialog-tips"
  },
  da = {
    "class": "dialog-content"
  },
  _a = (0, _modulesAa8ffe.X)({
    __name: "AllPageDialog",
    setup: function setup(s) {
      (0, _modulesAa8ffe.M)();
      var _ge2 = (0, _pageActivity6d.dw)(),
        a = _ge2.ActiveSotre,
        _ie2 = (0, _pageActivity6d.aV)(),
        e = _ie2.store,
        o = _ie2.closeInvite,
        t = _ie2.showFirstSave,
        i = _ie2.onReturnAwards;
      return function (n, l) {
        var c = (0, _modulesAa8ffe.a2)("van-dialog"),
          d = (0, _modulesAa8ffe.a3)("lazy");
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)(_modulesAa8ffe.a4, null, [(0, _modulesAa8ffe.D)(t) ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(Wt, {
          key: 0
        })) : (0, _modulesAa8ffe.a1)("", !0), (0, _modulesAa8ffe.a6)(c, {
          show: (0, _modulesAa8ffe.D)(a).showReceiveDialog,
          "onUpdate:show": l[1] || (l[1] = function (_) {
            return (0, _modulesAa8ffe.D)(a).showReceiveDialog = _;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modulesAa8ffe.a7)(function () {
            return [(0, _modulesAa8ffe._)("div", Xt, [(0, _modulesAa8ffe._)("div", Jt, [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("img", null, null, 512), [[d, (0, _modulesAa8ffe.D)(_pageActivity6d.g)("activity/DailyTask", "confirmationReceived")]]), (0, _modulesAa8ffe._)("div", Qt, (0, _modulesAa8ffe.a0)(n.$t("awardsReceived")), 1), (0, _modulesAa8ffe._)("div", Zt, [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("img", null, null, 512), [[d, (0, _modulesAa8ffe.D)(_pageActivity6d.g)("activity/DailyTask", "amountIcon")]]), (0, _modulesAa8ffe._)("span", null, (0, _modulesAa8ffe.a0)((0, _modulesAa8ffe.D)(_pageActivity6d.C)((0, _modulesAa8ffe.D)(a).receiveAmount)), 1)]), (0, _modulesAa8ffe._)("div", {
              "class": "dialog-btn",
              onClick: l[0] || (l[0] = function (_) {
                return (0, _modulesAa8ffe.D)(a).showReceiveDialog = !1;
              })
            }, (0, _modulesAa8ffe.a0)(n.$t("confirm")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modulesAa8ffe.a6)(c, {
          show: (0, _modulesAa8ffe.D)(e).invite,
          "onUpdate:show": l[3] || (l[3] = function (_) {
            return (0, _modulesAa8ffe.D)(e).invite = _;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modulesAa8ffe.a7)(function () {
            return [(0, _modulesAa8ffe._)("div", ea, [(0, _modulesAa8ffe._)("div", ta, [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("img", null, null, 512), [[d, (0, _modulesAa8ffe.D)(_pageActivity6d.g)("activity/DailyTask", "confirmationReceived")]]), (0, _modulesAa8ffe._)("div", aa, (0, _modulesAa8ffe.a0)(n.$t("inviteTips")), 1), (0, _modulesAa8ffe._)("p", sa, (0, _modulesAa8ffe.a0)(n.$t("inviteAmount")), 1), (0, _modulesAa8ffe._)("div", oa, [(0, _modulesAa8ffe._)("span", na, (0, _modulesAa8ffe.a0)(n.$t("commissionAmount")), 1), (0, _modulesAa8ffe._)("span", null, (0, _modulesAa8ffe.a0)((0, _modulesAa8ffe.D)(_pageActivity6d.C)((0, _modulesAa8ffe.D)(e).rebateAmount)), 1)]), (0, _modulesAa8ffe._)("div", {
              "class": "dialog-btn",
              onClick: l[2] || (l[2] = function (_) {
                return (0, _modulesAa8ffe.D)(o)();
              })
            }, (0, _modulesAa8ffe.a0)(n.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modulesAa8ffe.a6)(c, {
          show: (0, _modulesAa8ffe.D)(e).oldUser,
          "onUpdate:show": l[5] || (l[5] = function (_) {
            return (0, _modulesAa8ffe.D)(e).oldUser = _;
          }),
          "show-confirm-button": !1,
          "close-on-click-overlay": !0,
          className: "noOverHidden"
        }, {
          "default": (0, _modulesAa8ffe.a7)(function () {
            return [(0, _modulesAa8ffe._)("div", ia, [(0, _modulesAa8ffe._)("div", la, [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("img", null, null, 512), [[d, (0, _modulesAa8ffe.D)(_pageActivity6d.g)("activity/DailyTask", "confirmationReceived")]]), (0, _modulesAa8ffe._)("p", ra, (0, _modulesAa8ffe.a0)(n.$t("oldPromptTip")), 1), (0, _modulesAa8ffe._)("div", ca, (0, _modulesAa8ffe.a0)(n.$t("oldPrompt")), 1), (0, _modulesAa8ffe._)("p", ua, (0, _modulesAa8ffe.a0)(n.$t("oldPromptGift")), 1), (0, _modulesAa8ffe._)("div", da, [(0, _modulesAa8ffe._)("span", null, (0, _modulesAa8ffe.a0)((0, _modulesAa8ffe.D)(_pageActivity6d.C)((0, _modulesAa8ffe.D)(e).returnAwards)), 1)]), (0, _modulesAa8ffe._)("div", {
              "class": "dialog-btn",
              onClick: l[4] || (l[4] = function (_) {
                return (0, _modulesAa8ffe.D)(i)();
              })
            }, (0, _modulesAa8ffe.a0)(n.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"])], 64);
      };
    }
  });
var ma = (0, _pageActivity6d._)(_a, [["__scopeId", "data-v-d6eace8a"]]),
  va = {
    "class": "test"
  },
  pa = {
    key: 0,
    "class": "test_box"
  },
  fa = (0, _modulesAa8ffe.X)({
    __name: "index",
    setup: function setup(s) {
      var a = [{
          name: "blue",
          pageName: "blueHome"
        }, {
          name: "blackGold",
          pageName: "blackGoldHome"
        }, {
          name: "whiteGold",
          pageName: "whiteGoldHome"
        }, {
          name: "electronic",
          pageName: "electronic"
        }],
        e = (0, _modulesAa8ffe.K)(),
        o = Object.assign({
          "/src/views/home/other/blackGoldHome.vue": function _src_views_home_other_blackGoldHomeVue() {
            return (0, _pageActivity6d.v)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("./page-home-67e89e9a.js"));
              }).then(function (n) {
                return n.O;
              });
            }, ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-activity-6d456111.js", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css", "assets/css/page-home-482c7bbf.css"]);
          },
          "/src/views/home/other/blueHome.vue": function _src_views_home_other_blueHomeVue() {
            return (0, _pageActivity6d.v)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("./page-home-67e89e9a.js"));
              }).then(function (n) {
                return n.P;
              });
            }, ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-activity-6d456111.js", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css", "assets/css/page-home-482c7bbf.css"]);
          },
          "/src/views/home/other/damanHome.vue": function _src_views_home_other_damanHomeVue() {
            return (0, _pageActivity6d.v)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("./page-home-67e89e9a.js"));
              }).then(function (n) {
                return n.Q;
              });
            }, ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-activity-6d456111.js", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css", "assets/css/page-home-482c7bbf.css"]);
          },
          "/src/views/home/other/electronic.vue": function _src_views_home_other_electronicVue() {
            return (0, _pageActivity6d.v)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("./page-home-67e89e9a.js"));
              }).then(function (n) {
                return n.R;
              });
            }, ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-activity-6d456111.js", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css", "assets/css/page-home-482c7bbf.css"]);
          },
          "/src/views/home/other/redHome.vue": function _src_views_home_other_redHomeVue() {
            return (0, _pageActivity6d.v)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("./page-home-67e89e9a.js"));
              }).then(function (n) {
                return n.S;
              });
            }, ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-activity-6d456111.js", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css", "assets/css/page-home-482c7bbf.css"]);
          },
          "/src/views/home/other/whiteGoldHome.vue": function _src_views_home_other_whiteGoldHomeVue() {
            return (0, _pageActivity6d.v)(function () {
              return Promise.resolve().then(function () {
                return _interopRequireWildcard(require("./page-home-67e89e9a.js"));
              }).then(function (n) {
                return n.T;
              });
            }, ["assets/js/page-home-67e89e9a.js", "assets/js/modules-aa8ffe67.js", "assets/css/modules-8b01ca49.css", "assets/js/page-activity-6d456111.js", "assets/js/native/index-3d731397.js", "assets/js/en-53bf8069.js", "assets/js/rus-ecb14220.js", "assets/js/vi-60d1c3eb.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-38f5b166.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-dbcb2394.js", "assets/js/ar-78aaffbf.js", "assets/css/page-activity-9da3f4e3.css", "assets/css/page-home-482c7bbf.css"]);
          }
        }),
        t = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(n) {
            var l;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(e.currentRoute.value.name === n)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  l = o["/src/views/home/other/".concat(n, ".vue")];
                  e.removeRoute("home"), e.addRoute({
                    path: "/",
                    name: "home",
                    component: l,
                    meta: {
                      title: "home",
                      tabBar: !0,
                      KeepAlive: !1
                    }
                  }), e.push("/");
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function t(_x2) {
            return _ref.apply(this, arguments);
          };
        }(),
        i = (0, _modulesAa8ffe.r)(!1);
      return function (n, l) {
        var c = (0, _modulesAa8ffe.a2)("van-button");
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", va, [(0, _modulesAa8ffe.a6)(c, {
          type: "primary",
          onClick: l[0] || (l[0] = function (d) {
            return i.value = !i.value;
          })
        }, {
          "default": (0, _modulesAa8ffe.a7)(function () {
            return [(0, _modulesAa8ffe.a8)((0, _modulesAa8ffe.a0)(i.value ? "隐藏" : "展开"), 1)];
          }),
          _: 1
        }), i.value ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", pa, [((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)(_modulesAa8ffe.a4, null, (0, _modulesAa8ffe.a5)(a, function (d) {
          return (0, _modulesAa8ffe.a6)(c, {
            type: "primary",
            onClick: function onClick(_) {
              return t(d.pageName);
            }
          }, {
            "default": (0, _modulesAa8ffe.a7)(function () {
              return [(0, _modulesAa8ffe.a8)((0, _modulesAa8ffe.a0)(d.name), 1)];
            }),
            _: 2
          }, 1032, ["onClick"]);
        }), 64))])) : (0, _modulesAa8ffe.a1)("", !0)]);
      };
    }
  });
var ga = (0, _pageActivity6d._)(fa, [["__scopeId", "data-v-bfc96ef7"]]),
  ha = (0, _modulesAa8ffe.X)({
    __name: "App",
    setup: function setup(s) {
      (0, _modulesAa8ffe.aB)(function (I) {
        return {
          76181987: g.value
        };
      });
      var _ie3 = (0, _pageActivity6d.aV)(),
        a = _ie3.openAll,
        e = (0, _pageActivity6d.b2)(),
        o = (0, _modulesAa8ffe.r)(!1),
        t = (0, _modulesAa8ffe.r)(!1),
        i = (0, _modulesAa8ffe.M)(),
        n = (0, _pageActivity6d.u)(),
        l = (0, _pageActivity6d.S)(),
        _Ie = (0, _modulesAa8ffe.G)(),
        c = _Ie.locale,
        d = (0, _pageActivity6d.G)(),
        _ = (0, _modulesAa8ffe.r)(!1),
        H = (0, _modulesAa8ffe.F)(function () {
          return i.meta.tabBar;
        });
      var G = ["development"];
      var R = (0, _modulesAa8ffe.F)(function () {
          return G.includes("production.bigmumbai") && i.path === "/";
        }),
        M = "whiteGoldHome",
        K = (0, _modulesAa8ffe.F)(function () {
          return ["electronic", "blackGoldHome"].includes(M) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path);
        }),
        V = (0, _modulesAa8ffe.r)(0),
        h = (0, _modulesAa8ffe.r)(Math.floor(Math.random() * 1e4)),
        T = (0, _modulesAa8ffe.F)(function () {
          return i.name + h.value;
        }),
        N = function N() {
          e.on("changeKeepAliveKey", function () {
            h.value = Math.floor(Math.random() * 1e4);
          });
        };
      sessionStorage.getItem("isload") ? o.value = !1 : (t.value = !0, sessionStorage.setItem("isload", t.value.toString()), o.value = !0), l.getHomeSetting(), (0, _modulesAa8ffe.C)(function () {
        return l.getAreacode;
      }, function (I) {
        I && n.setNumberType(I.substring(1));
      }), (0, _modulesAa8ffe.C)(function () {
        return l.getDL;
      }, function (I) {
        c.value = I, d.updateLanguage(I), (0, _pageActivity6d.i)(I), (0, _pageActivity6d.j)(_pageActivity6d.k.global.t);
      }), setTimeout(function () {
        o.value = !1;
      }, 2e3);
      var D = (0, _modulesAa8ffe.r)(!1),
        v = (0, _pageActivity6d.a)();
      v.$subscribe(function (I, P) {
        D.value = P.isLoading, v.setLoading(D.value);
      });
      var g = (0, _modulesAa8ffe.r)("bahnschrift");
      var A = (0, _pageActivity6d.dy)(),
        q = l.getLanguage,
        X = (0, _pageActivity6d.dz)(A, q);
      var J = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(I) {
            var P, Z;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  P = [{
                    title: "vi",
                    fontStyle: "bahnschrift"
                  }, {
                    title: "else",
                    fontStyle: "'Roboto', 'Inter', sans-serif"
                  }], Z = P.findIndex(function (ee) {
                    return ee.title == X;
                  });
                  Z >= 0 ? g.value = P[Z].fontStyle : g.value = P[P.length - 1].fontStyle;
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function J(_x3) {
            return _ref2.apply(this, arguments);
          };
        }(),
        Q = function Q() {
          e.on("keyChange", function () {
            V.value++;
          }), e.on("changeIsGame", function () {
            _.value = !_.value, D.value = !D.value;
          });
        },
        we = function we() {
          e.off("keyChange"), e.off("changeKeepAliveKey"), e.off("changeIsGame");
        };
      return n.setNumberType(l.getAreacode.substring(1)), J(), (0, _modulesAa8ffe.w)(function () {
        (0, _pageActivity6d.dA)() && (0, _pageActivity6d.dB)(), a(), we(), Q(), N(), localStorage.getItem("language") && (0, _pageActivity6d.s)(localStorage.getItem("language"));
      }), qt(), function (I, P) {
        var Z = (0, _modulesAa8ffe.a2)("LoadingView");
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)(_modulesAa8ffe.a4, null, [(0, _modulesAa8ffe.a6)(Z, {
          loading: D.value,
          type: "loading",
          isGame: _.value
        }, {
          "default": (0, _modulesAa8ffe.a7)(function () {
            return [((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)((0, _modulesAa8ffe.D)(_modulesAa8ffe.b5), {
              key: V.value
            }, {
              "default": (0, _modulesAa8ffe.a7)(function (_ref3) {
                var ee = _ref3.Component;
                return [((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(_modulesAa8ffe.aD, {
                  max: 1
                }, [(0, _modulesAa8ffe.D)(i).meta.keepAlive ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)((0, _modulesAa8ffe.aj)(ee), {
                  key: T.value
                })) : (0, _modulesAa8ffe.a1)("", !0)], 1024)), (0, _modulesAa8ffe.D)(i).meta.keepAlive ? (0, _modulesAa8ffe.a1)("", !0) : ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)((0, _modulesAa8ffe.aj)(ee), {
                  key: 0
                }))];
              }),
              _: 1
            })), K.value ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(Ot, {
              key: 0
            })) : ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)((0, _modulesAa8ffe.D)(_modulesAa8ffe.b6), {
              key: 1,
              license: "15861567"
            })), H.value ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(Nt, {
              key: 2
            })) : (0, _modulesAa8ffe.a1)("", !0)];
          }),
          _: 1
        }, 8, ["loading", "isGame"]), o.value ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(Mt, {
          key: 0
        })) : (0, _modulesAa8ffe.a1)("", !0), (0, _modulesAa8ffe.a6)(ma), R.value ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(ga, {
          key: 1
        })) : (0, _modulesAa8ffe.a1)("", !0)], 64);
      };
    }
  });
var ya = function ya(s, a) {
  var e = s[a];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise(function (o, t) {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(t.bind(null, new Error("Unknown variable dynamic import: " + a)));
  });
};
var ba = {
    mounted: function mounted(s, a) {
      if (typeof a.value[0] != "function" || typeof a.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
      var e = null;
      var o = a.value[0],
        t = a.value[1];
      s.__handleClick__ = function () {
        e && clearTimeout(e), e = setTimeout(function () {
          o();
        }, t || 500);
      }, s.addEventListener("click", s.__handleClick__);
    },
    beforeUnmount: function beforeUnmount(s) {
      s.removeEventListener("click", s.__handleClick__);
    }
  },
  wa = {
    mounted: function mounted(s, a) {
      if (typeof a.value[0] != "function" || typeof a.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
      var e = null;
      var o = a.value[0],
        t = a.value[1];
      s.__handleClick__ = function () {
        e && clearTimeout(e), s.disabled || (s.disabled = !0, o(), e = setTimeout(function () {
          s.disabled = !1;
        }, t || 500));
      }, s.addEventListener("click", s.__handleClick__);
    },
    beforeUnmount: function beforeUnmount(s) {
      s.removeEventListener("click", s.__handleClick__);
    }
  },
  ka = {
    mounted: function mounted(s, a) {
      s.addEventListener("input", function (e) {
        var t = s.value.replace(/\D+/g, "");
        s.value = t, a.value = t;
      });
    }
  },
  Sa = function Sa(s) {
    return {
      beforeMount: function beforeMount(a, e) {
        a.classList.add("ar-lazyload");
        var o = e.value;
        a.dataset.origin = o, s.observe(a);
      },
      updated: function updated(a, e) {
        a.dataset.origin = e.value, s.observe(a);
      },
      unmounted: function unmounted(a, e) {
        s.unobserve(a);
      },
      mounted: function mounted(a, e) {
        s.observe(a);
      }
    };
  },
  Ia = {
    mounted: function mounted(s, a) {
      var e = 0;
      var o = a.value && a.value.wait ? a.value.wait : 3e3,
        t = function t(i) {
          var n = Date.now();
          n - e >= o && (e = n, a.value && a.value.handler && a.value.handler(i));
        };
      s.addEventListener("click", t), s._throttleClickCleanup = function () {
        s.removeEventListener("click", t);
      };
    },
    unmounted: function unmounted(s) {
      s._throttleClickCleanup && s._throttleClickCleanup(), delete s._throttleClickCleanup;
    }
  },
  Ca = {
    mounted: function mounted(s, a) {
      var e = a.value;
      var o = (0, _modulesAa8ffe.T)("permission", null);
      o.value === null || !e || (o && (o = JSON.parse(o.value)), o && o[e] === !1 && (s.style.display = "none"));
    }
  },
  de = {
    debounce: ba,
    throttle: wa,
    onlyNum: ka,
    throttleClick: Ia,
    haspermission: Ca
  },
  La = {
    install: function install(s) {
      Object.keys(de).forEach(function (e) {
        s.directive(e, de[e]);
      });
      var a = new IntersectionObserver(function (e) {
        e.forEach(function (o) {
          if (o.isIntersecting) {
            var t = o.target;
            t.src = t.dataset.origin || (0, _pageActivity6d.g)("images", "avatar"), t.onerror = function () {
              a.unobserve(t);
              var i = t.dataset.img || (0, _pageActivity6d.g)("images", "avatar");
              if (!i || i != null && i.includes("undefined")) {
                t.onerror = null;
                return;
              }
              t.src = i, t.style.objectFit = "contain";
            }, t.classList.remove("ar-lazyload"), a.unobserve(t);
          }
        });
      }, {
        rootMargin: "0px 0px -50px 0px"
      });
      s.directive("lazy", Sa(a));
    }
  },
  Ea = {
    "class": "navbar__content"
  },
  $a = {
    "class": "navbar__content-center"
  },
  Ta = {
    "class": "navbar__content-title"
  },
  Da = (0, _modulesAa8ffe.X)({
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
        "default": "#fff"
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
    setup: function setup(s, _ref4) {
      var a = _ref4.emit;
      var e = (0, _modulesAa8ffe.r)(),
        o = (0, _pageActivity6d.S)(),
        t = (0, _modulesAa8ffe.F)(function () {
          return o.getHeadLogo;
        }),
        i = function i() {
          a("click-left");
        },
        n = function n() {
          a("click-right");
        };
      return (0, _modulesAa8ffe.w)(function () {}), function (l, c) {
        var d = (0, _modulesAa8ffe.a2)("van-icon");
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", {
          "class": "navbar",
          ref_key: "navbar",
          ref: e
        }, [(0, _modulesAa8ffe._)("div", {
          "class": (0, _modulesAa8ffe.a9)(["navbar-fixed", [s.backgroundColor != "#fff" && "wc"]]),
          style: (0, _modulesAa8ffe.$)({
            background: s.backgroundColor
          })
        }, [(0, _modulesAa8ffe._)("div", Ea, [(0, _modulesAa8ffe._)("div", {
          "class": "navbar__content-left",
          onClick: i
        }, [(0, _modulesAa8ffe.ac)(l.$slots, "left", {}, function () {
          return [s.leftArrow ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.ae)(d, {
            key: 0,
            name: "arrow-left"
          })) : (0, _modulesAa8ffe.a1)("", !0)];
        }, !0)]), (0, _modulesAa8ffe._)("div", $a, [s.headLogo ? ((0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", {
          key: 0,
          "class": "headLogo",
          style: (0, _modulesAa8ffe.$)({
            backgroundImage: "url(" + (s.headerUrl || t.value) + ")"
          })
        }, null, 4)) : (0, _modulesAa8ffe.a1)("", !0), (0, _modulesAa8ffe.ac)(l.$slots, "center", {}, function () {
          return [(0, _modulesAa8ffe._)("div", Ta, (0, _modulesAa8ffe.a0)(s.title), 1)];
        }, !0)]), (0, _modulesAa8ffe._)("div", {
          "class": "navbar__content-right",
          onClick: n
        }, [(0, _modulesAa8ffe.ac)(l.$slots, "right", {}, void 0, !0)])])], 6)], 512);
      };
    }
  });
var Aa = (0, _pageActivity6d._)(Da, [["__scopeId", "data-v-19888208"]]),
  xa = {
    "class": "ar-loading-view"
  },
  Pa = {
    "class": "loading-wrapper"
  },
  Ba = {
    "class": "com__box"
  },
  Ra = (0, _modulesAa8ffe.am)('<div class="loading" data-v-4d8a8acc><div class="shape shape-1" data-v-4d8a8acc></div><div class="shape shape-2" data-v-4d8a8acc></div><div class="shape shape-3" data-v-4d8a8acc></div><div class="shape shape-4" data-v-4d8a8acc></div></div>', 1),
  Va = [Ra],
  Na = {
    "class": "skeleton-wrapper"
  },
  qa = (0, _modulesAa8ffe.X)({
    __name: "LoadingView",
    props: {
      loading: {
        type: Boolean
      },
      type: {},
      isGame: {
        type: Boolean
      }
    },
    setup: function setup(s) {
      var a = s,
        e = (0, _modulesAa8ffe.r)();
      var o = null;
      return (0, _modulesAa8ffe.w)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var t;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              t = "bigMumbai";
              _context4.next = 3;
              return (0, _modulesAa8ffe.x)();
            case 3:
              o = _modulesAa8ffe.b7.loadAnimation({
                container: e.value,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: "/loading/".concat(t, "/data.json")
              });
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))), (0, _modulesAa8ffe.C)(function () {
        return a.loading;
      }, function () {
        a.type === "loading" && !a.isGame && (a.loading ? o && o.play() : o && o.stop());
      }), (0, _modulesAa8ffe.I)(function () {
        o && o.destroy(), o = null;
      }), function (t, i) {
        var n = (0, _modulesAa8ffe.a2)("VanSkeleton");
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)(_modulesAa8ffe.a4, null, [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("div", xa, [(0, _modulesAa8ffe.ac)(t.$slots, "template", {}, function () {
          return [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("div", Pa, [(0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("div", {
            ref_key: "element",
            ref: e,
            "class": "loading-animat"
          }, null, 512), [[_modulesAa8ffe.al, !t.isGame]]), (0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("div", Ba, Va, 512), [[_modulesAa8ffe.al, t.isGame]])], 512), [[_modulesAa8ffe.al, t.type === "loading"]]), (0, _modulesAa8ffe.aa)((0, _modulesAa8ffe._)("div", Na, [(0, _modulesAa8ffe.a6)(n, {
            row: 10
          }), (0, _modulesAa8ffe.a6)(n, {
            title: "",
            avatar: "",
            row: 5
          }), (0, _modulesAa8ffe.a6)(n, {
            title: "",
            row: 5
          })], 512), [[_modulesAa8ffe.al, t.type === "skeleton"]])];
        }, !0)], 512), [[_modulesAa8ffe.al, t.loading]]), (0, _modulesAa8ffe.ac)(t.$slots, "default", {}, void 0, !0)], 64);
      };
    }
  });
var Oa = (0, _pageActivity6d._)(qa, [["__scopeId", "data-v-4d8a8acc"]]),
  Ha = {
    "class": "ar-searchbar__selector"
  },
  Ga = {
    "class": "ar-searchbar__selector-default"
  },
  Ma = (0, _modulesAa8ffe.X)({
    __name: "ArSelect",
    props: {
      selectName: {
        type: String,
        "default": ""
      }
    },
    emits: ["click-select"],
    setup: function setup(s, _ref6) {
      var a = _ref6.emit;
      var e = function e() {
        a("click-select");
      };
      return function (o, t) {
        var i = (0, _modulesAa8ffe.a2)("van-icon");
        return (0, _modulesAa8ffe.Y)(), (0, _modulesAa8ffe.Z)("div", Ha, [(0, _modulesAa8ffe._)("div", {
          onClick: e
        }, [(0, _modulesAa8ffe._)("span", Ga, (0, _modulesAa8ffe.a0)(s.selectName), 1), (0, _modulesAa8ffe.a6)(i, {
          name: "arrow-down"
        })])]);
      };
    }
  });
var Ua = (0, _pageActivity6d._)(Ma, [["__scopeId", "data-v-3b481cc4"]]),
  Fa = "whiteGoldHome";
ya(Object.assign({
  "../assets/styles/other/blackGoldHome/reset.scss": function _assets_styles_other_blackGoldHome_resetScss() {
    return (0, _pageActivity6d.v)(function () {
      return Promise.resolve({});
    }, ["assets/css/reset-8972b5eb.css"]);
  },
  "../assets/styles/other/blueHome/reset.scss": function _assets_styles_other_blueHome_resetScss() {
    return (0, _pageActivity6d.v)(function () {
      return Promise.resolve({});
    }, ["assets/css/reset-58948e2b.css"]);
  },
  "../assets/styles/other/damanHome/reset.scss": function _assets_styles_other_damanHome_resetScss() {
    return (0, _pageActivity6d.v)(function () {
      return Promise.resolve({});
    }, ["assets/css/reset-b438533a.css"]);
  },
  "../assets/styles/other/electronic/reset.scss": function _assets_styles_other_electronic_resetScss() {
    return (0, _pageActivity6d.v)(function () {
      return Promise.resolve({});
    }, ["assets/css/reset-7c75dfed.css"]);
  },
  "../assets/styles/other/redHome/reset.scss": function _assets_styles_other_redHome_resetScss() {
    return (0, _pageActivity6d.v)(function () {
      return Promise.resolve({});
    }, ["assets/css/reset-b72ca269.css"]);
  },
  "../assets/styles/other/whiteGoldHome/reset.scss": function _assets_styles_other_whiteGoldHome_resetScss() {
    return (0, _pageActivity6d.v)(function () {
      return Promise.resolve({});
    }, ["assets/css/reset-910da13b.css"]);
  }
}), "../assets/styles/other/".concat(Fa, "/reset.scss"));
var ja = function ja(s) {
  s.component("NavBar", Aa), s.component("LoadingView", Oa), s.component("ArSelect", Ua), s.component("svg-icon", _pageHome67e89e9a.d), s.use(_modulesAa8ffe.b8).use(_modulesAa8ffe.b9).use(_modulesAa8ffe.ba).use(_modulesAa8ffe.bb).use(_modulesAa8ffe.bc).use(_modulesAa8ffe.bd).use(_modulesAa8ffe.be).use(_modulesAa8ffe.bf).use(_modulesAa8ffe.bg).use(_modulesAa8ffe.bh).use(_modulesAa8ffe.bi).use(_modulesAa8ffe.bj).use(_modulesAa8ffe.bk).use(_modulesAa8ffe.bl).use(_modulesAa8ffe.bm).use(_modulesAa8ffe.bn).use(_modulesAa8ffe.bo).use(_modulesAa8ffe.bp).use(_modulesAa8ffe.bq).use(_modulesAa8ffe.br).use(_modulesAa8ffe.bs).use(_modulesAa8ffe.bt).use(_modulesAa8ffe.bu).use(_modulesAa8ffe.bv).use(_modulesAa8ffe.bw).use(_modulesAa8ffe.bx).use(_modulesAa8ffe.by).use(_modulesAa8ffe.bz).use(_modulesAa8ffe.bA).use(_modulesAa8ffe.bB).use(_modulesAa8ffe.bC).use(_modulesAa8ffe.bD).use(_modulesAa8ffe.bE).use(_modulesAa8ffe.bF).use(_modulesAa8ffe.bG).use(_modulesAa8ffe.bH).use(_modulesAa8ffe.bI).use(_pageActivity6d.k).use(La).use(_modulesAa8ffe.bJ);
  var a = s.config.globalProperties,
    e = {};
  e.TopHeight = 38, Object.keys(_pageActivity6d.dC.refiter).forEach(function (o) {
    e[o] = _pageActivity6d.dC.refiter[o];
  }), a.$u = e;
};
function Ka() {
  var s = window.location.hash;
  s.includes("?") || (s = location.search);
  function a(e) {
    if (e) {
      var i = e.indexOf("?");
      i !== -1 && (e = e.substring(i + 1));
      var o = e.split("&"),
        t = {};
      return o.forEach(function (n) {
        var l = n.split("=");
        t[l[0]] = decodeURIComponent(l[1]);
      }), t;
    } else return {};
  }
  return a(s);
}
var y = Ka(),
  za = {
    "91club": function club() {
      var s = {
          356634288423: "749293993830590"
        },
        a = y.invitationCode || sessionStorage.getItem("invitecode"),
        e = y.fb_dynamic_pixel || s[a] || "";
      y.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", e);
      var o = y.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || s[a];
      o && (function (t, i, n, l, c, d, _) {
        t.fbq || (c = t.fbq = function () {
          c.callMethod ? c.callMethod.apply(c, arguments) : c.queue.push(arguments);
        }, t._fbq || (t._fbq = c), c.push = c, c.loaded = !0, c.version = "2.0", c.queue = [], d = i.createElement(n), d.async = !0, d.src = l, _ = i.getElementsByTagName(n)[0], _.parentNode.insertBefore(d, _));
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", o), fbq("track", "PageView"));
    },
    yjlottery: function yjlottery() {
      (function (s, a, e, o, t, i, n) {
        s.fbq || (t = s.fbq = function () {
          t.callMethod ? t.callMethod.apply(t, arguments) : t.queue.push(arguments);
        }, s._fbq || (s._fbq = t), t.push = t, t.loaded = !0, t.version = "2.0", t.queue = [], i = a.createElement(e), i.async = !0, i.src = o, n = a.getElementsByTagName(e)[0], n.parentNode.insertBefore(i, n));
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", "865606625239361"), fbq("track", "PageView");
    },
    "66lottery": function lottery() {
      y.gtagId && localStorage.setItem("gtagId", y.gtagId), y.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", y.fb_dynamic_pixel);
      var s = y.gtagId || localStorage.getItem("gtagId") || "AW-11352382371",
        a = y.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || "";
      (function () {
        window.dataLayer = window.dataLayer || [];
        function e() {
          dataLayer.push(arguments);
        }
        window.gtag = e;
        var o = document.createElement("script");
        o.src = "https://www.googletagmanager.com/gtag/js?id=" + s;
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(o, t), e("js", new Date()), e("config", s);
      })(), a && (function (e, o, t, i, n, l, c) {
        e.fbq || (n = e.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        }, e._fbq || (e._fbq = n), n.push = n, n.loaded = !0, n.version = "2.0", n.queue = [], l = o.createElement(t), l.async = !0, l.src = i, c = o.getElementsByTagName(t)[0], c.parentNode.insertBefore(l, c));
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", a), fbq("track", "PageView"));
    },
    lottery7: function lottery7() {
      var s = {
          18685100001: "749293993830590"
        },
        a = y.invitationCode || sessionStorage.getItem("invitecode"),
        e = y.fb_dynamic_pixel || s[a] || "";
      y.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", e);
      var o = y.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || s[a];
      o && (function (t, i, n, l, c, d, _) {
        t.fbq || (c = t.fbq = function () {
          c.callMethod ? c.callMethod.apply(c, arguments) : c.queue.push(arguments);
        }, t._fbq || (t._fbq = c), c.push = c, c.loaded = !0, c.version = "2.0", c.queue = [], d = i.createElement(n), d.async = !0, d.src = l, _ = i.getElementsByTagName(n)[0], _.parentNode.insertBefore(d, _));
      }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", o), fbq("track", "PageView"));
    }
  };
({}).VITE_POINT && za[{}.VITE_POINT]();
var le = (0, _modulesAa8ffe.bK)(ha),
  be = (0, _modulesAa8ffe.bL)();
ja(le);
be.use(_modulesAa8ffe.bM);
le.use(_pageActivity6d.a9).use(be);
le.mount("#app");