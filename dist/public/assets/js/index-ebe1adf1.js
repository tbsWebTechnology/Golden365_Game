"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _pageActivityD7400c = require("./page-activity-d7400c46.js");
var _modules19b274fa = require("./modules-19b274fa.js");
var _pageLogin9b7da66e = require("./page-login-9b7da66e.js");
require("./native/index-af56580e.js");
require("./en-e37c8d16.js");
require("./rus-fa520a45.js");
require("./vi-4d184023.js");
require("./id-b68147a7.js");
require("./hd-f4af6a25.js");
require("./tha-8c779b1d.js");
require("./md-ff63ea6c.js");
require("./bra-5f377834.js");
require("./my-148303f2.js");
require("./bdt-90374e22.js");
require("./zh-cec1c228.js");
require("./pak-d8df7ac9.js");
require("./ar-65aca80a.js");
require("./page-home-acc0a510.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
window.getBuildInfo = function () {
  return {
    buildTime: "9/10/2024, 1:36:31 AM",
    branch: "origin/masterBranch/main-v2.24 commitId:e64e661ee5353063864e9456e03996eed9779cb5"
  };
};
(function () {
  var e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var o = _step.value;
      n(o);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  new MutationObserver(function (o) {
    var _iterator2 = _createForOfIteratorHelper(o),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var i = _step2.value;
        if (i.type === "childList") {
          var _iterator3 = _createForOfIteratorHelper(i.addedNodes),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var u = _step3.value;
              u.tagName === "LINK" && u.rel === "modulepreload" && n(u);
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
  function s(o) {
    var i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    var i = s(o);
    fetch(o.href, i);
  }
})();
var Vt = {
    "class": "tabbar__container"
  },
  Rt = ["onClick"],
  Ft = {
    key: 1,
    "class": "promotionBg"
  },
  Gt = {
    key: 2
  },
  Ot = (0, _modules19b274fa._)({
    __name: "index2",
    setup: function setup(t) {
      var e = (0, _modules19b274fa.P)(),
        s = (0, _modules19b274fa.Q)();
      function n(_x) {
        return _n.apply(this, arguments);
      }
      function _n() {
        _n = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(i) {
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
        return _n.apply(this, arguments);
      }
      var o = [{
        name: "promotion"
      }, {
        name: "activity"
      }, {
        name: "home"
      }, {
        name: "wallet"
      }, {
        name: "main"
      }];
      return function (i, u) {
        var c = (0, _modules19b274fa.a2)("svg-icon");
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("div", Vt, [((0, _modules19b274fa.o)(), (0, _modules19b274fa.j)(_modules19b274fa.a4, null, (0, _modules19b274fa.a5)(o, function (l, v) {
          return (0, _modules19b274fa.l)("div", {
            "class": (0, _modules19b274fa.a9)(["tabbar__container-item", {
              active: l.name === (0, _modules19b274fa.H)(s).name
            }]),
            key: l + "" + v,
            onClick: function onClick(m) {
              return n(l.name);
            }
          }, [v !== 2 ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(c, {
            key: 0,
            name: l.name === (0, _modules19b274fa.H)(s).name ? "p3_".concat(l.name, "_a") : "p3_".concat(l.name)
          }, null, 8, ["name"])) : (0, _modules19b274fa.a1)("v-if", !0), v == 2 ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("div", Ft, [(0, _modules19b274fa.a6)(c, {
            name: l.name === (0, _modules19b274fa.H)(s).name ? "p3_".concat(l.name, "_a") : "p3_".concat(l.name)
          }, null, 8, ["name"])])) : ((0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("span", Gt, (0, _modules19b274fa.a0)(i.$t(l.name)), 1))], 10, Rt);
        }), 64))]);
      };
    }
  });
var jt = (0, _pageActivityD7400c._)(Ot, [["__scopeId", "data-v-fb80cf49"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/TabBar/index2.vue"]]);
function Ht() {
  var t = (0, _pageActivityD7400c.G)(),
    e = function e() {
      document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0);
    };
  (0, _modules19b274fa.A)(function () {
    document.addEventListener("visibilitychange", e);
  }), (0, _modules19b274fa.N)(function () {
    document.removeEventListener("visibilitychange", e);
  });
}
var Ut = (0, _modules19b274fa._)({
  __name: "Customer",
  setup: function setup(t) {
    (0, _modules19b274fa.ap)(function (p) {
      return {
        "f6a705e1-currentFontFamily": R.value
      };
    });
    var e = (0, _modules19b274fa.r)(!1),
      s = (0, _modules19b274fa.r)({
        x: 0,
        y: 0
      }),
      n = (0, _modules19b274fa.r)(0),
      o = (0, _modules19b274fa.r)(0),
      i = (0, _modules19b274fa.r)(0),
      u = (0, _modules19b274fa.r)(0),
      c = (0, _modules19b274fa.r)(0),
      l = (0, _modules19b274fa.r)(0),
      v = (0, _modules19b274fa.r)();
    var m, L, T, E;
    var _xt = (0, _pageLogin9b7da66e.u)({
        ServerType: 2
      }),
      G = _xt.getSelfCustomerServiceLink;
    function O() {
      j(m, L, T, E) || G();
    }
    (0, _modules19b274fa.A)(function () {
      v.value = document.getElementById("customerId");
    });
    function w(p) {
      e.value = !0;
      var g;
      p.touches ? g = p.touches[0] : g = p, s.value.x = g.clientX, s.value.y = g.clientY, n.value = v.value.offsetLeft, o.value = v.value.offsetTop, m = p.clientX, L = p.clientY;
    }
    function C(p) {
      if (e.value) {
        var g,
          B = document.getElementById("customerId"),
          F = B.clientWidth,
          z = B.clientHeight,
          Y = document.documentElement.clientHeight,
          b = document.documentElement.clientWidth;
        p.touches ? g = p.touches[0] : g = p, i.value = g.clientX - s.value.x, u.value = g.clientY - s.value.y, c.value = n.value + i.value, l.value = o.value + u.value, c.value <= 0 && (c.value = 0), l.value <= 0 && (l.value = 0), c.value >= b - F && (c.value = b - F), l.value >= Y - z && (l.value = Y - z), v.value.style.left = c.value + "px", v.value.style.top = l.value + "px", document.addEventListener("touchmove", function () {
          p.preventDefault();
        }, !1);
      }
      p.stopPropagation(), p.preventDefault();
    }
    function S(p) {
      e.value = !1, T = p.clientX, E = p.clientY;
    }
    function j(p, g, B, F) {
      return !(Math.sqrt((p - B) * (p - B) + (g - F) * (g - F)) <= 1);
    }
    var R = (0, _modules19b274fa.r)("bahnschrift");
    return function (p, g) {
      var B = (0, _modules19b274fa.a3)("lazy");
      return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("div", {
        "class": "customer",
        onClick: O,
        onMousedown: w,
        onTouchstart: w,
        onMousemove: C,
        onTouchmove: C,
        onMouseup: S,
        id: "customerId"
      }, [(0, _modules19b274fa.aa)((0, _modules19b274fa.l)("img", null, null, 512), [[B, (0, _modules19b274fa.H)(_pageActivityD7400c.g)("home", "icon_sevice")]])], 32);
    };
  }
});
var Mt = (0, _pageActivityD7400c._)(Ut, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/Customer.vue"]]),
  Wt = "/assets/png/logo-57dd9283.png";
var Kt = {},
  ge = function ge(t) {
    return (0, _modules19b274fa.af)("data-v-5eb72be7"), t = t(), (0, _modules19b274fa.ag)(), t;
  },
  zt = {
    "class": "start-page"
  },
  Yt = ge(function () {
    return (0, _modules19b274fa.l)("div", {
      "class": "dice"
    }, null, -1);
  }),
  qt = ge(function () {
    return (0, _modules19b274fa.l)("img", {
      "class": "logo",
      src: Wt
    }, null, -1);
  });
function Xt(t, e) {
  return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("div", zt, [(0, _modules19b274fa.l)("div", null, [Yt, (0, _modules19b274fa.l)("p", null, (0, _modules19b274fa.a0)(t.$t("fairAndSafe")), 1), qt])]);
}
var Jt = (0, _pageActivityD7400c._)(Kt, [["render", Xt], ["__scopeId", "data-v-5eb72be7"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/entrance/ar062/StartPage.vue"]]),
  Qt = {
    "class": "header"
  },
  Zt = {
    "class": "title"
  },
  es = {
    "class": "tip"
  },
  ts = {
    "class": "container"
  },
  ss = {
    "class": "footer"
  },
  as = (0, _modules19b274fa._)({
    __name: "dialog",
    setup: function setup(t) {
      var e = (0, _modules19b274fa.P)(),
        s = (0, _modules19b274fa.Q)(),
        n = (0, _modules19b274fa.r)(!1),
        _te = (0, _pageActivityD7400c.b0)(),
        o = _te.closeFirstSave,
        _ce = (0, _pageActivityD7400c.aY)(),
        i = _ce.ActiveSotre,
        u = _ce.getFirstRechargeList,
        c = (0, _modules19b274fa.q)(new Date()).format("YYYY-MM-DD"),
        l = (0, _modules19b274fa.Z)("firstSave", null),
        v = (0, _modules19b274fa.J)(function () {
          return l.value == c;
        }),
        m = function m() {
          v.value ? (l.value = "", localStorage.removeItem("firstSave")) : l.value = c;
        },
        L = function L() {
          n.value = !1, o();
        },
        T = ["activity", "home", "main", "wallet", "promotion"];
      (0, _modules19b274fa.G)(function () {
        return s.name;
      }, function (w) {
        T.includes(s.name) && E();
      });
      var E = function E() {
          l.value != c && u().then(function (w) {
            if (!w.length) {
              n.value = !1, o();
              return;
            }
            var C = w.find(function (S) {
              return S.isFinshed;
            });
            C && (i.value.isShowFirstSaveDialog = !1), C || (n.value = !0);
          });
        },
        G = function G() {
          n.value = !1, o(!0), e.push({
            name: "FirstRecharge"
          });
        },
        O = function O() {
          n.value = !1, o(!0), e.push({
            name: "Recharge"
          });
        };
      return (0, _modules19b274fa.A)(function () {
        T.includes(s.name) && E();
      }), function (w, C) {
        var S = (0, _modules19b274fa.a2)("svg-icon"),
          j = (0, _modules19b274fa.a2)("van-dialog");
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(j, {
          show: n.value,
          "onUpdate:show": C[0] || (C[0] = function (R) {
            return n.value = R;
          }),
          className: "firstSaveDialog"
        }, {
          title: (0, _modules19b274fa.a7)(function () {
            return [(0, _modules19b274fa.l)("div", Qt, [(0, _modules19b274fa.l)("div", Zt, (0, _modules19b274fa.a0)(w.$t("firstDialogH")), 1), (0, _modules19b274fa.l)("div", es, (0, _modules19b274fa.a0)(w.$t("firstDialogTip")), 1)])];
          }),
          footer: (0, _modules19b274fa.a7)(function () {
            return [(0, _modules19b274fa.l)("div", ss, [(0, _modules19b274fa.l)("div", {
              "class": (0, _modules19b274fa.a9)(["active", {
                a: v.value
              }]),
              onClick: m
            }, [(0, _modules19b274fa.a6)(S, {
              name: "active"
            }), (0, _modules19b274fa.a8)((0, _modules19b274fa.a0)(w.$t("noTipToday")), 1)], 2), (0, _modules19b274fa.l)("div", {
              "class": "btn",
              onClick: G
            }, (0, _modules19b274fa.a0)(w.$t("activity")), 1)])];
          }),
          "default": (0, _modules19b274fa.a7)(function () {
            return [(0, _modules19b274fa.l)("div", ts, [(0, _modules19b274fa.a6)(_pageActivityD7400c.dA, {
              list: (0, _modules19b274fa.H)(i).FirstRechargeList,
              onGorecharge: O
            }, null, 8, ["list"])]), (0, _modules19b274fa.l)("div", {
              "class": "close",
              onClick: L
            })];
          }),
          _: 1
        }, 8, ["show"]);
      };
    }
  });
var os = (0, _pageActivityD7400c._)(as, [["__scopeId", "data-v-9cd12fb2"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/Activity/FirstRecharge/dialog.vue"]]),
  ns = {
    "class": "dialog-window"
  },
  is = {
    "class": "dialog-wrapper"
  },
  ls = {
    "class": "dialog-title"
  },
  cs = {
    "class": "dialog-content"
  },
  rs = {
    "class": "dialog-window"
  },
  us = {
    "class": "dialog-wrapper"
  },
  ds = {
    "class": "dialog-title"
  },
  vs = {
    "class": "dialog-tips"
  },
  _s = {
    "class": "dialog-content"
  },
  ms = {
    "class": "dialog-tips",
    style: {
      "margin-bottom": "0"
    }
  },
  ps = {
    "class": "dialog-window"
  },
  fs = {
    "class": "dialog-wrapper"
  },
  gs = {
    "class": "dialog-tips",
    style: {
      "margin-top": "10px"
    }
  },
  hs = {
    "class": "dialog-title",
    style: {
      "margin-top": "0"
    }
  },
  bs = {
    "class": "dialog-tips"
  },
  ys = {
    "class": "dialog-content"
  },
  ws = (0, _modules19b274fa._)({
    __name: "AllPageDialog",
    setup: function setup(t) {
      (0, _modules19b274fa.Q)();
      var _ce2 = (0, _pageActivityD7400c.aY)(),
        e = _ce2.ActiveSotre,
        _te2 = (0, _pageActivityD7400c.b0)(),
        s = _te2.store,
        n = _te2.closeInvite,
        o = _te2.showFirstSave,
        i = _te2.onReturnAwards;
      return function (u, c) {
        var l = (0, _modules19b274fa.a2)("van-dialog"),
          v = (0, _modules19b274fa.a3)("lazy");
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)(_modules19b274fa.a4, null, [(0, _modules19b274fa.H)(o) ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(os, {
          key: 0
        })) : (0, _modules19b274fa.a1)("v-if", !0), (0, _modules19b274fa.a6)(l, {
          show: (0, _modules19b274fa.H)(e).showReceiveDialog,
          "onUpdate:show": c[1] || (c[1] = function (m) {
            return (0, _modules19b274fa.H)(e).showReceiveDialog = m;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modules19b274fa.a7)(function () {
            return [(0, _modules19b274fa.l)("div", ns, [(0, _modules19b274fa.l)("div", is, [(0, _modules19b274fa.aa)((0, _modules19b274fa.l)("img", null, null, 512), [[v, (0, _modules19b274fa.H)(_pageActivityD7400c.g)("public", "succeed")]]), (0, _modules19b274fa.l)("div", ls, (0, _modules19b274fa.a0)(u.$t("awardsReceived")), 1), (0, _modules19b274fa.l)("div", cs, [(0, _modules19b274fa.aa)((0, _modules19b274fa.l)("img", null, null, 512), [[v, (0, _modules19b274fa.H)(_pageActivityD7400c.g)("activity/DailyTask", "amountIcon")]]), (0, _modules19b274fa.l)("span", null, (0, _modules19b274fa.a0)((0, _modules19b274fa.H)(_pageActivityD7400c.o)((0, _modules19b274fa.H)(e).receiveAmount)), 1)]), (0, _modules19b274fa.l)("div", {
              "class": "dialog-btn",
              onClick: c[0] || (c[0] = function (m) {
                return (0, _modules19b274fa.H)(e).showReceiveDialog = !1;
              })
            }, (0, _modules19b274fa.a0)(u.$t("confirm")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modules19b274fa.a6)(l, {
          show: (0, _modules19b274fa.H)(s).invite,
          "onUpdate:show": c[3] || (c[3] = function (m) {
            return (0, _modules19b274fa.H)(s).invite = m;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modules19b274fa.a7)(function () {
            return [(0, _modules19b274fa.l)("div", rs, [(0, _modules19b274fa.l)("div", us, [(0, _modules19b274fa.aa)((0, _modules19b274fa.l)("img", null, null, 512), [[v, (0, _modules19b274fa.H)(_pageActivityD7400c.g)("public", "succeed")]]), (0, _modules19b274fa.l)("div", ds, (0, _modules19b274fa.a0)(u.$t("inviteTips")), 1), (0, _modules19b274fa.l)("p", vs, (0, _modules19b274fa.a0)(u.$t("inviteAmount")), 1), (0, _modules19b274fa.l)("div", _s, [(0, _modules19b274fa.l)("span", ms, (0, _modules19b274fa.a0)(u.$t("commissionAmount")), 1), (0, _modules19b274fa.l)("span", null, (0, _modules19b274fa.a0)((0, _modules19b274fa.H)(_pageActivityD7400c.o)((0, _modules19b274fa.H)(s).rebateAmount)), 1)]), (0, _modules19b274fa.l)("div", {
              "class": "dialog-btn",
              onClick: c[2] || (c[2] = function (m) {
                return (0, _modules19b274fa.H)(n)();
              })
            }, (0, _modules19b274fa.a0)(u.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modules19b274fa.a6)(l, {
          show: (0, _modules19b274fa.H)(s).oldUser,
          "onUpdate:show": c[5] || (c[5] = function (m) {
            return (0, _modules19b274fa.H)(s).oldUser = m;
          }),
          "show-confirm-button": !1,
          "close-on-click-overlay": !0,
          className: "noOverHidden"
        }, {
          "default": (0, _modules19b274fa.a7)(function () {
            return [(0, _modules19b274fa.l)("div", ps, [(0, _modules19b274fa.l)("div", fs, [(0, _modules19b274fa.aa)((0, _modules19b274fa.l)("img", null, null, 512), [[v, (0, _modules19b274fa.H)(_pageActivityD7400c.g)("public", "succeed")]]), (0, _modules19b274fa.l)("p", gs, (0, _modules19b274fa.a0)(u.$t("oldPromptTip")), 1), (0, _modules19b274fa.l)("div", hs, (0, _modules19b274fa.a0)(u.$t("oldPrompt")), 1), (0, _modules19b274fa.l)("p", bs, (0, _modules19b274fa.a0)(u.$t("oldPromptGift")), 1), (0, _modules19b274fa.l)("div", ys, [(0, _modules19b274fa.l)("span", null, (0, _modules19b274fa.a0)((0, _modules19b274fa.H)(_pageActivityD7400c.o)((0, _modules19b274fa.H)(s).returnAwards)), 1)]), (0, _modules19b274fa.l)("div", {
              "class": "dialog-btn",
              onClick: c[4] || (c[4] = function (m) {
                return (0, _modules19b274fa.H)(i)();
              })
            }, (0, _modules19b274fa.a0)(u.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"])], 64);
      };
    }
  });
var ks = (0, _pageActivityD7400c._)(ws, [["__scopeId", "data-v-3d4fafbb"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/AllPageDialog.vue"]]),
  Ss = (0, _modules19b274fa._)({
    __name: "App",
    setup: function setup(t) {
      (0, _modules19b274fa.ap)(function (b) {
        return {
          "f13b4d11-currentFontFamily": R.value
        };
      });
      var _te3 = (0, _pageActivityD7400c.b0)(),
        e = _te3.openAll,
        s = (0, _pageActivityD7400c.bq)(),
        n = (0, _modules19b274fa.r)(!1),
        o = (0, _modules19b274fa.r)(!1),
        i = (0, _modules19b274fa.Q)(),
        u = (0, _pageActivityD7400c.u)(),
        c = (0, _pageActivityD7400c.S)(),
        _Fe = (0, _modules19b274fa.K)(),
        l = _Fe.locale,
        v = (0, _pageActivityD7400c.G)(),
        m = (0, _modules19b274fa.r)(!1),
        L = (0, _modules19b274fa.J)(function () {
          return i.meta.tabBar;
        }),
        T = "public3Home",
        E = (0, _modules19b274fa.J)(function () {
          return ["electronic", "blackGoldHome"].includes(T) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path);
        }),
        G = (0, _modules19b274fa.r)(0),
        O = (0, _modules19b274fa.r)(Math.floor(Math.random() * 1e4)),
        w = (0, _modules19b274fa.J)(function () {
          return i.name + O.value;
        }),
        C = function C() {
          s.on("changeKeepAliveKey", function () {
            O.value = Math.floor(Math.random() * 1e4);
          });
        };
      sessionStorage.getItem("isload") ? n.value = !1 : (o.value = !0, sessionStorage.setItem("isload", o.value.toString()), n.value = !0), c.getHomeSetting(), (0, _modules19b274fa.G)(function () {
        return c.getAreacode;
      }, function (b) {
        b && u.setNumberType(b.substring(1));
      }), (0, _modules19b274fa.G)(function () {
        return c.getDL;
      }, function (b) {
        l.value = b, v.updateLanguage(b), (0, _pageActivityD7400c.bb)(b), (0, _pageActivityD7400c.bc)(_pageActivityD7400c.K.global.t);
      }), setTimeout(function () {
        n.value = !1;
      }, 2e3);
      var S = (0, _modules19b274fa.r)(!1),
        j = (0, _pageActivityD7400c.a)();
      j.$subscribe(function (b, N) {
        S.value = N.isLoading, j.setLoading(S.value);
      });
      var R = (0, _modules19b274fa.r)("bahnschrift");
      var p = (0, _pageActivityD7400c.dB)(),
        g = c.getLanguage,
        B = (0, _pageActivityD7400c.dC)(p, g);
      var F = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(b) {
            var N, q;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  N = [{
                    title: "vi",
                    fontStyle: "bahnschrift"
                  }, {
                    title: "else",
                    fontStyle: "'Roboto', 'Inter', sans-serif"
                  }], q = N.findIndex(function (X) {
                    return X.title == B;
                  });
                  q >= 0 ? R.value = N[q].fontStyle : R.value = N[N.length - 1].fontStyle;
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function F(_x2) {
            return _ref.apply(this, arguments);
          };
        }(),
        z = function z() {
          s.on("keyChange", function () {
            G.value++;
          }), s.on("changeIsGame", function () {
            m.value = !m.value, S.value = !S.value;
          });
        },
        Y = function Y() {
          s.off("keyChange"), s.off("changeKeepAliveKey"), s.off("changeIsGame");
        };
      return u.setNumberType(c.getAreacode.substring(1)), F(), (0, _modules19b274fa.A)(function () {
        (0, _pageActivityD7400c.dD)() && (0, _pageActivityD7400c.dE)(), e(), Y(), z(), C(), localStorage.getItem("language") && (0, _pageActivityD7400c.ba)(localStorage.getItem("language"));
      }), Ht(), function (b, N) {
        var q = (0, _modules19b274fa.a2)("LoadingView");
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)(_modules19b274fa.a4, null, [(0, _modules19b274fa.a6)(q, {
          loading: S.value,
          type: "loading",
          isGame: m.value
        }, {
          "default": (0, _modules19b274fa.a7)(function () {
            return [((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)((0, _modules19b274fa.H)(_modules19b274fa.b2), {
              key: G.value
            }, {
              "default": (0, _modules19b274fa.a7)(function (_ref2) {
                var X = _ref2.Component;
                return [((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(_modules19b274fa.aD, {
                  max: 1
                }, [(0, _modules19b274fa.H)(i).meta.keepAlive ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)((0, _modules19b274fa.aC)(X), {
                  key: w.value
                })) : (0, _modules19b274fa.a1)("v-if", !0)], 1024)), (0, _modules19b274fa.H)(i).meta.keepAlive ? (0, _modules19b274fa.a1)("v-if", !0) : ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)((0, _modules19b274fa.aC)(X), {
                  key: 0
                }))];
              }),
              _: 1
            })), (0, _modules19b274fa.a1)("online custom service"), E.value ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(Mt, {
              key: 0
            })) : (0, _modules19b274fa.a1)("v-if", !0), L.value ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(jt, {
              key: 1
            })) : (0, _modules19b274fa.a1)("v-if", !0)];
          }),
          _: 1
        }, 8, ["loading", "isGame"]), n.value ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(Jt, {
          key: 0
        })) : (0, _modules19b274fa.a1)("v-if", !0), (0, _modules19b274fa.a6)(ks)], 64);
      };
    }
  });
var $s = (0, _pageActivityD7400c._)(Ss, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/entrance/ar062/App.vue"]]);
var Cs = {
    mounted: function mounted(t, e) {
      if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
      var s = null;
      var n = e.value[0],
        o = e.value[1];
      t.__handleClick__ = function () {
        s && clearTimeout(s), s = setTimeout(function () {
          n();
        }, o || 500);
      }, t.addEventListener("click", t.__handleClick__);
    },
    beforeUnmount: function beforeUnmount(t) {
      t.removeEventListener("click", t.__handleClick__);
    }
  },
  As = {
    mounted: function mounted(t, e) {
      if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
      var s = null;
      var n = e.value[0],
        o = e.value[1];
      t.__handleClick__ = function () {
        s && clearTimeout(s), t.disabled || (t.disabled = !0, n(), s = setTimeout(function () {
          t.disabled = !1;
        }, o || 500));
      }, t.addEventListener("click", t.__handleClick__);
    },
    beforeUnmount: function beforeUnmount(t) {
      t.removeEventListener("click", t.__handleClick__);
    }
  },
  Is = {
    mounted: function mounted(t, e) {
      t.addEventListener("input", function (s) {
        var o = t.value.replace(/\D+/g, "");
        t.value = o, e.value = o;
      });
    }
  },
  Ds = function Ds(t) {
    return {
      beforeMount: function beforeMount(e, s) {
        e.classList.add("ar-lazyload");
        var n = s.value;
        e.dataset.origin = n, t.observe(e);
      },
      updated: function updated(e, s) {
        e.dataset.origin = s.value, t.observe(e);
      },
      unmounted: function unmounted(e, s) {
        t.unobserve(e);
      },
      mounted: function mounted(e, s) {
        t.observe(e);
      }
    };
  },
  Ls = {
    mounted: function mounted(t, e) {
      var s = 0;
      var n = e.value && e.value.wait ? e.value.wait : 3e3,
        o = function o(i) {
          var u = Date.now();
          u - s >= n && (s = u, e.value && e.value.handler && e.value.handler(i));
        };
      t.addEventListener("click", o), t._throttleClickCleanup = function () {
        t.removeEventListener("click", o);
      };
    },
    unmounted: function unmounted(t) {
      t._throttleClickCleanup && t._throttleClickCleanup(), delete t._throttleClickCleanup;
    }
  },
  Ts = {
    mounted: function mounted(t, e) {
      var s = e.value;
      var n = (0, _modules19b274fa.X)("permission", null);
      n.value === null || !s || (n && (n = JSON.parse(n.value)), n && n[s] === !1 && (t.style.display = "none"));
    }
  },
  ie = {
    debounce: Cs,
    throttle: As,
    onlyNum: Is,
    throttleClick: Ls,
    haspermission: Ts
  },
  Es = {
    install: function install(t) {
      Object.keys(ie).forEach(function (s) {
        t.directive(s, ie[s]);
      });
      var e = new IntersectionObserver(function (s) {
        s.forEach(function (n) {
          if (n.isIntersecting) {
            var o = n.target;
            o.src = o.dataset.origin || (0, _pageActivityD7400c.i)("images", "avatar"), o.onerror = function () {
              e.unobserve(o);
              var i = o.dataset.img || (0, _pageActivityD7400c.i)("images", "avatar");
              if (!i || i != null && i.includes("undefined")) {
                o.onerror = null;
                return;
              }
              o.src = i, o.style.objectFit = "contain";
            }, o.classList.remove("ar-lazyload"), e.unobserve(o);
          }
        });
      }, {
        rootMargin: "0px 0px -50px 0px"
      });
      t.directive("lazy", Ds(e));
    }
  },
  Bs = {
    "class": "navbar-fixed"
  },
  Ps = {
    "class": "navbar__content"
  },
  Ns = {
    "class": "navbar__content-center"
  },
  xs = {
    "class": "navbar__content-title"
  },
  Vs = (0, _modules19b274fa._)({
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
      var s = (0, _modules19b274fa.r)(),
        n = (0, _pageActivityD7400c.S)(),
        o = (0, _modules19b274fa.J)(function () {
          return n.getHeadLogo;
        }),
        i = function i() {
          e("click-left");
        },
        u = function u() {
          e("click-right");
        };
      return (0, _modules19b274fa.A)(function () {}), function (c, l) {
        var v = (0, _modules19b274fa.a2)("van-icon");
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("div", {
          "class": "navbar",
          ref_key: "navbar",
          ref: s
        }, [(0, _modules19b274fa.l)("div", Bs, [(0, _modules19b274fa.l)("div", Ps, [(0, _modules19b274fa.l)("div", {
          "class": "navbar__content-left",
          onClick: i
        }, [(0, _modules19b274fa.ac)(c.$slots, "left", {}, function () {
          return [t.leftArrow ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.ae)(v, {
            key: 0,
            name: "arrow-left"
          })) : (0, _modules19b274fa.a1)("v-if", !0)];
        }, !0)]), (0, _modules19b274fa.l)("div", Ns, [t.headLogo ? ((0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("div", {
          key: 0,
          "class": "headLogo",
          style: (0, _modules19b274fa.$)({
            backgroundImage: "url(" + (t.headerUrl || o.value) + ")"
          })
        }, null, 4)) : (0, _modules19b274fa.a1)("v-if", !0), (0, _modules19b274fa.ac)(c.$slots, "center", {}, function () {
          return [(0, _modules19b274fa.l)("div", xs, (0, _modules19b274fa.a0)(t.title), 1)];
        }, !0)]), (0, _modules19b274fa.l)("div", {
          "class": "navbar__content-right",
          onClick: u
        }, [(0, _modules19b274fa.ac)(c.$slots, "right", {}, void 0, !0)])])])], 512);
      };
    }
  });
var Rs = (0, _pageActivityD7400c._)(Vs, [["__scopeId", "data-v-12a80a3e"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/NavBar.vue"]]),
  Fs = {
    "class": "ar-loading-view"
  },
  Gs = {
    "class": "loading-wrapper"
  },
  Os = {
    "class": "com__box"
  },
  js = (0, _modules19b274fa.k)('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1),
  Hs = {
    "class": "skeleton-wrapper"
  },
  Us = {
    "class": "iosDialog"
  },
  Ms = {
    "class": "title"
  },
  Ws = {
    "class": "websit_info"
  },
  Ks = ["src"],
  zs = {
    "class": "link"
  },
  Ys = {
    "class": "text"
  },
  qs = {
    "class": "text"
  },
  Xs = {
    "class": "text"
  },
  Js = ["src"],
  Qs = (0, _modules19b274fa._)({
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
        s = (0, _modules19b274fa.r)();
      var n = null;
      var _Te = (0, _pageActivityD7400c.h)(),
        o = _Te.homeState,
        i = _Te.downloadIcon,
        u = _Te.webSiteUrl,
        c = (0, _modules19b274fa.J)(function () {
          return location.origin || "";
        });
      return (0, _modules19b274fa.A)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _modules19b274fa.B)();
            case 2:
              n = _modules19b274fa.b3.loadAnimation({
                container: s.value,
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
      }))), (0, _modules19b274fa.G)(function () {
        return e.loading;
      }, function () {
        e.type === "loading" && !e.isGame && (e.loading ? n && n.play() : n && n.stop());
      }), (0, _modules19b274fa.N)(function () {
        n && n.destroy(), n = null;
      }), function (l, v) {
        var m = (0, _modules19b274fa.a2)("VanSkeleton"),
          L = (0, _modules19b274fa.a2)("svg-icon"),
          T = (0, _modules19b274fa.a2)("van-popup");
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)(_modules19b274fa.a4, null, [(0, _modules19b274fa.aa)((0, _modules19b274fa.l)("div", Fs, [(0, _modules19b274fa.ac)(l.$slots, "template", {}, function () {
          return [(0, _modules19b274fa.aa)((0, _modules19b274fa.l)("div", Gs, [(0, _modules19b274fa.a1)(" <VanLoading /> "), (0, _modules19b274fa.aa)((0, _modules19b274fa.l)("div", {
            ref_key: "element",
            ref: s,
            "class": "loading-animat"
          }, null, 512), [[_modules19b274fa.ak, !l.isGame]]), (0, _modules19b274fa.aa)((0, _modules19b274fa.l)("div", Os, [(0, _modules19b274fa.a1)(" loading "), js, (0, _modules19b274fa.a1)(" 说明：组件名 ")], 512), [[_modules19b274fa.ak, l.isGame]]), (0, _modules19b274fa.a1)(' <div class="animation"></div> ')], 512), [[_modules19b274fa.ak, l.type === "loading"]]), (0, _modules19b274fa.aa)((0, _modules19b274fa.l)("div", Hs, [(0, _modules19b274fa.a6)(m, {
            row: 10
          }), (0, _modules19b274fa.a6)(m, {
            title: "",
            avatar: "",
            row: 5
          }), (0, _modules19b274fa.a6)(m, {
            title: "",
            row: 5
          })], 512), [[_modules19b274fa.ak, l.type === "skeleton"]])];
        }, !0)], 512), [[_modules19b274fa.ak, l.loading]]), (0, _modules19b274fa.ac)(l.$slots, "default", {}, void 0, !0), (0, _modules19b274fa.a6)(T, {
          show: (0, _modules19b274fa.H)(o).iosDialog,
          "onUpdate:show": v[0] || (v[0] = function (E) {
            return (0, _modules19b274fa.H)(o).iosDialog = E;
          }),
          round: "",
          closeable: "",
          position: "bottom",
          style: {
            height: "40%"
          }
        }, {
          "default": (0, _modules19b274fa.a7)(function () {
            return [(0, _modules19b274fa.l)("div", Us, [(0, _modules19b274fa.l)("div", Ms, (0, _modules19b274fa.a0)(l.$t("pwaInstall")), 1), (0, _modules19b274fa.l)("div", Ws, [(0, _modules19b274fa.l)("img", {
              "class": "icon",
              src: (0, _modules19b274fa.H)(i)
            }, null, 8, Ks), (0, _modules19b274fa.l)("div", zs, [(0, _modules19b274fa.l)("div", null, (0, _modules19b274fa.a0)(c.value.split("://")[1]), 1), (0, _modules19b274fa.l)("div", null, (0, _modules19b274fa.a0)(c.value), 1)])]), (0, _modules19b274fa.l)("div", Ys, [(0, _modules19b274fa.a8)("1. " + (0, _modules19b274fa.a0)(l.$t("pwaText1")) + " ", 1), (0, _modules19b274fa.a6)(L, {
              name: "share"
            })]), (0, _modules19b274fa.l)("div", qs, [(0, _modules19b274fa.a8)("2. " + (0, _modules19b274fa.a0)(l.$t("pwaText2")) + " ", 1), (0, _modules19b274fa.l)("span", null, [(0, _modules19b274fa.a8)((0, _modules19b274fa.a0)(l.$t("pwaText3")) + " ", 1), (0, _modules19b274fa.a6)(L, {
              name: "add_icon"
            })])]), (0, _modules19b274fa.l)("div", Xs, [(0, _modules19b274fa.a8)("3. " + (0, _modules19b274fa.a0)(l.$t("pwaText4")) + " ", 1), (0, _modules19b274fa.l)("img", {
              "class": "icon",
              src: (0, _modules19b274fa.H)(i)
            }, null, 8, Js)])])];
          }),
          _: 1
        }, 8, ["show"])], 64);
      };
    }
  });
var Zs = (0, _pageActivityD7400c._)(Qs, [["__scopeId", "data-v-647954c7"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/LoadingView.vue"]]);
var ea = ["xlink:href"],
  ta = {
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
        s = (0, _modules19b274fa.J)(function () {
          return "#icon-".concat(e.name);
        }),
        n = (0, _modules19b274fa.J)(function () {
          return e.name ? "svg-icon icon-".concat(e.name) : "svg-icon";
        });
      return function (o, i) {
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("svg", (0, _modules19b274fa.a$)({
          "class": n.value
        }, o.$attrs, {
          style: {
            color: t.color
          }
        }), [(0, _modules19b274fa.l)("use", {
          "xlink:href": s.value
        }, null, 8, ea)], 16);
      };
    }
  },
  sa = (0, _pageActivityD7400c._)(ta, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/svgIcons.vue"]]),
  aa = {
    "class": "ar-searchbar__selector"
  },
  oa = {
    "class": "ar-searchbar__selector-default"
  },
  na = (0, _modules19b274fa._)({
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
      var s = function s() {
        e("click-select");
      };
      return function (n, o) {
        var i = (0, _modules19b274fa.a2)("van-icon");
        return (0, _modules19b274fa.o)(), (0, _modules19b274fa.j)("div", aa, [(0, _modules19b274fa.l)("div", {
          onClick: s
        }, [(0, _modules19b274fa.l)("span", oa, (0, _modules19b274fa.a0)(t.selectName), 1), (0, _modules19b274fa.a6)(i, {
          name: "arrow-down"
        })])]);
      };
    }
  });
var ia = (0, _pageActivityD7400c._)(na, [["__scopeId", "data-v-fa757a88"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/ArSelect.vue"]]),
  la = function la(t) {
    t.component("NavBar", Rs), t.component("LoadingView", Zs), t.component("ArSelect", ia), t.component("svg-icon", sa), t.use(_modules19b274fa.b4).use(_modules19b274fa.b5).use(_modules19b274fa.b6).use(_modules19b274fa.b7).use(_modules19b274fa.b8).use(_modules19b274fa.b9).use(_modules19b274fa.ba).use(_modules19b274fa.bb).use(_modules19b274fa.bc).use(_modules19b274fa.bd).use(_modules19b274fa.be).use(_modules19b274fa.bf).use(_modules19b274fa.bg).use(_modules19b274fa.bh).use(_modules19b274fa.bi).use(_modules19b274fa.bj).use(_modules19b274fa.bk).use(_modules19b274fa.bl).use(_modules19b274fa.bm).use(_modules19b274fa.bn).use(_modules19b274fa.bo).use(_modules19b274fa.bp).use(_modules19b274fa.bq).use(_modules19b274fa.br).use(_modules19b274fa.bs).use(_modules19b274fa.bt).use(_modules19b274fa.bu).use(_modules19b274fa.bv).use(_modules19b274fa.bw).use(_modules19b274fa.bx).use(_modules19b274fa.by).use(_modules19b274fa.bz).use(_modules19b274fa.bA).use(_modules19b274fa.bB).use(_modules19b274fa.bC).use(_modules19b274fa.bD).use(_modules19b274fa.bE).use(_pageActivityD7400c.K).use(Es).use(_modules19b274fa.bF).use(_modules19b274fa.bG);
    var e = t.config.globalProperties,
      s = {};
    s.TopHeight = 38, Object.keys(_pageActivityD7400c.dF.refiter).forEach(function (n) {
      s[n] = _pageActivityD7400c.dF.refiter[n];
    }), e.$u = s;
  };
({}).VITE_POINT && _pageActivityD7400c.dG[{}.VITE_POINT]();
_pageActivityD7400c.r.addRoute({
  path: "/",
  name: "home",
  component: function component() {
    return (0, _pageActivityD7400c.j)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("./page-home-acc0a510.js"));
      }).then(function (t) {
        return t.X;
      });
    }, ["assets/js/page-home-acc0a510.js", "assets/js/modules-19b274fa.js", "assets/css/modules-5dd73da0.css", "assets/js/page-activity-d7400c46.js", "assets/js/native/index-af56580e.js", "assets/js/en-e37c8d16.js", "assets/js/rus-fa520a45.js", "assets/js/vi-4d184023.js", "assets/js/id-b68147a7.js", "assets/js/hd-f4af6a25.js", "assets/js/tha-8c779b1d.js", "assets/js/md-ff63ea6c.js", "assets/js/bra-5f377834.js", "assets/js/my-148303f2.js", "assets/js/bdt-90374e22.js", "assets/js/zh-cec1c228.js", "assets/js/pak-d8df7ac9.js", "assets/js/ar-65aca80a.js", "assets/css/page-activity-93a8910e.css", "assets/css/page-home-a4807077.css"]);
  },
  meta: {
    title: "home",
    tabBar: !0,
    keepAlive: !1
  }
});
var se = (0, _modules19b274fa.bH)($s),
  he = (0, _modules19b274fa.bI)();
la(se);
he.use(_modules19b274fa.bJ);
se.use(_pageActivityD7400c.r).use(he);
se.mount("#app");