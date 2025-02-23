"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _pageActivity500eb = require("./page-activity-500eb065.js");
var _modules8e4eb = require("./modules-8e4eb682.js");
var _pageLoginB89fd3ed = require("./page-login-b89fd3ed.js");
require("./native/index-9a070501.js");
require("./en-15fa07f8.js");
require("./rus-97760f90.js");
require("./vi-2d05655c.js");
require("./id-3117b06e.js");
require("./hd-fd8b192b.js");
require("./tha-8487385e.js");
require("./md-e0522d3b.js");
require("./bra-961b9a7d.js");
require("./my-89562fe6.js");
require("./bdt-d6487d0e.js");
require("./zh-184b2083.js");
require("./pak-3bdeb9cb.js");
require("./ar-7f8a77f5.js");
require("./page-home-74725bb3.js");
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
    buildTime: "8/31/2024, 4:10:31 AM",
    branch: "origin/masterBranch/main-v2.24 commitId:3a1f1dd2b5eabad832436591ce088284d66e4d51"
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
var xt = {
    "class": "tabbar__container"
  },
  Vt = ["onClick"],
  Rt = {
    key: 1,
    "class": "promotionBg"
  },
  Ft = {
    key: 2
  },
  Gt = (0, _modules8e4eb._)({
    __name: "index2",
    setup: function setup(t) {
      var e = (0, _modules8e4eb.P)(),
        s = (0, _modules8e4eb.Q)();
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
        var c = (0, _modules8e4eb.a2)("svg-icon");
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("div", xt, [((0, _modules8e4eb.o)(), (0, _modules8e4eb.j)(_modules8e4eb.a4, null, (0, _modules8e4eb.a5)(o, function (l, v) {
          return (0, _modules8e4eb.l)("div", {
            "class": (0, _modules8e4eb.a9)(["tabbar__container-item", {
              active: l.name === (0, _modules8e4eb.H)(s).name
            }]),
            key: l + "" + v,
            onClick: function onClick(m) {
              return n(l.name);
            }
          }, [v !== 2 ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(c, {
            key: 0,
            name: l.name === (0, _modules8e4eb.H)(s).name ? "p3_".concat(l.name, "_a") : "p3_".concat(l.name)
          }, null, 8, ["name"])) : (0, _modules8e4eb.a1)("v-if", !0), v == 2 ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("div", Rt, [(0, _modules8e4eb.a6)(c, {
            name: l.name === (0, _modules8e4eb.H)(s).name ? "p3_".concat(l.name, "_a") : "p3_".concat(l.name)
          }, null, 8, ["name"])])) : ((0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("span", Ft, (0, _modules8e4eb.a0)(i.$t(l.name)), 1))], 10, Vt);
        }), 64))]);
      };
    }
  });
var Ot = (0, _pageActivity500eb._)(Gt, [["__scopeId", "data-v-fb80cf49"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/TabBar/index2.vue"]]);
function jt() {
  var t = (0, _pageActivity500eb.G)(),
    e = function e() {
      document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0);
    };
  (0, _modules8e4eb.A)(function () {
    document.addEventListener("visibilitychange", e);
  }), (0, _modules8e4eb.N)(function () {
    document.removeEventListener("visibilitychange", e);
  });
}
var Ht = (0, _modules8e4eb._)({
  __name: "Customer",
  setup: function setup(t) {
    (0, _modules8e4eb.ap)(function (p) {
      return {
        "f6a705e1-currentFontFamily": R.value
      };
    });
    var e = (0, _modules8e4eb.r)(!1),
      s = (0, _modules8e4eb.r)({
        x: 0,
        y: 0
      }),
      n = (0, _modules8e4eb.r)(0),
      o = (0, _modules8e4eb.r)(0),
      i = (0, _modules8e4eb.r)(0),
      u = (0, _modules8e4eb.r)(0),
      c = (0, _modules8e4eb.r)(0),
      l = (0, _modules8e4eb.r)(0),
      v = (0, _modules8e4eb.r)();
    var m, L, T, E;
    var _Nt = (0, _pageLoginB89fd3ed.u)({
        ServerType: 2
      }),
      G = _Nt.getSelfCustomerServiceLink;
    function O() {
      j(m, L, T, E) || G();
    }
    (0, _modules8e4eb.A)(function () {
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
    function $(p) {
      e.value = !1, T = p.clientX, E = p.clientY;
    }
    function j(p, g, B, F) {
      return !(Math.sqrt((p - B) * (p - B) + (g - F) * (g - F)) <= 1);
    }
    var R = (0, _modules8e4eb.r)("bahnschrift");
    return function (p, g) {
      var B = (0, _modules8e4eb.a3)("lazy");
      return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("div", {
        "class": "customer",
        onClick: O,
        onMousedown: w,
        onTouchstart: w,
        onMousemove: C,
        onTouchmove: C,
        onMouseup: $,
        id: "customerId"
      }, [(0, _modules8e4eb.aa)((0, _modules8e4eb.l)("img", null, null, 512), [[B, (0, _modules8e4eb.H)(_pageActivity500eb.g)("home", "icon_sevice")]])], 32);
    };
  }
});
var Ut = (0, _pageActivity500eb._)(Ht, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/Customer.vue"]]),
  Mt = "/assets/png/logo-57dd9283.png";
var Wt = {},
  ge = function ge(t) {
    return (0, _modules8e4eb.af)("data-v-5eb72be7"), t = t(), (0, _modules8e4eb.ag)(), t;
  },
  Kt = {
    "class": "start-page"
  },
  zt = ge(function () {
    return (0, _modules8e4eb.l)("div", {
      "class": "dice"
    }, null, -1);
  }),
  Yt = ge(function () {
    return (0, _modules8e4eb.l)("img", {
      "class": "logo",
      src: Mt
    }, null, -1);
  });
function qt(t, e) {
  return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("div", Kt, [(0, _modules8e4eb.l)("div", null, [zt, (0, _modules8e4eb.l)("p", null, (0, _modules8e4eb.a0)(t.$t("fairAndSafe")), 1), Yt])]);
}
var Xt = (0, _pageActivity500eb._)(Wt, [["render", qt], ["__scopeId", "data-v-5eb72be7"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/entrance/ar062/StartPage.vue"]]),
  Jt = {
    "class": "header"
  },
  Qt = {
    "class": "title"
  },
  Zt = {
    "class": "tip"
  },
  es = {
    "class": "container"
  },
  ts = {
    "class": "footer"
  },
  ss = (0, _modules8e4eb._)({
    __name: "dialog",
    setup: function setup(t) {
      var e = (0, _modules8e4eb.P)(),
        s = (0, _modules8e4eb.Q)(),
        n = (0, _modules8e4eb.r)(!1),
        _te = (0, _pageActivity500eb.b0)(),
        o = _te.closeFirstSave,
        _ce = (0, _pageActivity500eb.aY)(),
        i = _ce.ActiveSotre,
        u = _ce.getFirstRechargeList,
        c = (0, _modules8e4eb.q)(new Date()).format("YYYY-MM-DD"),
        l = (0, _modules8e4eb.Z)("firstSave", null),
        v = (0, _modules8e4eb.J)(function () {
          return l.value == c;
        }),
        m = function m() {
          v.value ? (l.value = "", localStorage.removeItem("firstSave")) : l.value = c;
        },
        L = function L() {
          n.value = !1, o();
        },
        T = ["activity", "home", "main", "wallet", "promotion"];
      (0, _modules8e4eb.G)(function () {
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
            var C = w.find(function ($) {
              return $.isFinshed;
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
      return (0, _modules8e4eb.A)(function () {
        T.includes(s.name) && E();
      }), function (w, C) {
        var $ = (0, _modules8e4eb.a2)("svg-icon"),
          j = (0, _modules8e4eb.a2)("van-dialog");
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(j, {
          show: n.value,
          "onUpdate:show": C[0] || (C[0] = function (R) {
            return n.value = R;
          }),
          className: "firstSaveDialog"
        }, {
          title: (0, _modules8e4eb.a7)(function () {
            return [(0, _modules8e4eb.l)("div", Jt, [(0, _modules8e4eb.l)("div", Qt, (0, _modules8e4eb.a0)(w.$t("firstDialogH")), 1), (0, _modules8e4eb.l)("div", Zt, (0, _modules8e4eb.a0)(w.$t("firstDialogTip")), 1)])];
          }),
          footer: (0, _modules8e4eb.a7)(function () {
            return [(0, _modules8e4eb.l)("div", ts, [(0, _modules8e4eb.l)("div", {
              "class": (0, _modules8e4eb.a9)(["active", {
                a: v.value
              }]),
              onClick: m
            }, [(0, _modules8e4eb.a6)($, {
              name: "active"
            }), (0, _modules8e4eb.a8)((0, _modules8e4eb.a0)(w.$t("noTipToday")), 1)], 2), (0, _modules8e4eb.l)("div", {
              "class": "btn",
              onClick: G
            }, (0, _modules8e4eb.a0)(w.$t("activity")), 1)])];
          }),
          "default": (0, _modules8e4eb.a7)(function () {
            return [(0, _modules8e4eb.l)("div", es, [(0, _modules8e4eb.a6)(_pageActivity500eb.dA, {
              list: (0, _modules8e4eb.H)(i).FirstRechargeList,
              onGorecharge: O
            }, null, 8, ["list"])]), (0, _modules8e4eb.l)("div", {
              "class": "close",
              onClick: L
            })];
          }),
          _: 1
        }, 8, ["show"]);
      };
    }
  });
var as = (0, _pageActivity500eb._)(ss, [["__scopeId", "data-v-9cd12fb2"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/Activity/FirstRecharge/dialog.vue"]]),
  os = {
    "class": "dialog-window"
  },
  ns = {
    "class": "dialog-wrapper"
  },
  is = {
    "class": "dialog-title"
  },
  ls = {
    "class": "dialog-content"
  },
  cs = {
    "class": "dialog-window"
  },
  rs = {
    "class": "dialog-wrapper"
  },
  us = {
    "class": "dialog-title"
  },
  ds = {
    "class": "dialog-tips"
  },
  vs = {
    "class": "dialog-content"
  },
  _s = {
    "class": "dialog-tips",
    style: {
      "margin-bottom": "0"
    }
  },
  ms = {
    "class": "dialog-window"
  },
  ps = {
    "class": "dialog-wrapper"
  },
  fs = {
    "class": "dialog-tips",
    style: {
      "margin-top": "10px"
    }
  },
  gs = {
    "class": "dialog-title",
    style: {
      "margin-top": "0"
    }
  },
  hs = {
    "class": "dialog-tips"
  },
  bs = {
    "class": "dialog-content"
  },
  ys = (0, _modules8e4eb._)({
    __name: "AllPageDialog",
    setup: function setup(t) {
      (0, _modules8e4eb.Q)();
      var _ce2 = (0, _pageActivity500eb.aY)(),
        e = _ce2.ActiveSotre,
        _te2 = (0, _pageActivity500eb.b0)(),
        s = _te2.store,
        n = _te2.closeInvite,
        o = _te2.showFirstSave,
        i = _te2.onReturnAwards;
      return function (u, c) {
        var l = (0, _modules8e4eb.a2)("van-dialog"),
          v = (0, _modules8e4eb.a3)("lazy");
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)(_modules8e4eb.a4, null, [(0, _modules8e4eb.H)(o) ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(as, {
          key: 0
        })) : (0, _modules8e4eb.a1)("v-if", !0), (0, _modules8e4eb.a6)(l, {
          show: (0, _modules8e4eb.H)(e).showReceiveDialog,
          "onUpdate:show": c[1] || (c[1] = function (m) {
            return (0, _modules8e4eb.H)(e).showReceiveDialog = m;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modules8e4eb.a7)(function () {
            return [(0, _modules8e4eb.l)("div", os, [(0, _modules8e4eb.l)("div", ns, [(0, _modules8e4eb.aa)((0, _modules8e4eb.l)("img", null, null, 512), [[v, (0, _modules8e4eb.H)(_pageActivity500eb.g)("public", "succeed")]]), (0, _modules8e4eb.l)("div", is, (0, _modules8e4eb.a0)(u.$t("awardsReceived")), 1), (0, _modules8e4eb.l)("div", ls, [(0, _modules8e4eb.aa)((0, _modules8e4eb.l)("img", null, null, 512), [[v, (0, _modules8e4eb.H)(_pageActivity500eb.g)("activity/DailyTask", "amountIcon")]]), (0, _modules8e4eb.l)("span", null, (0, _modules8e4eb.a0)((0, _modules8e4eb.H)(_pageActivity500eb.o)((0, _modules8e4eb.H)(e).receiveAmount)), 1)]), (0, _modules8e4eb.l)("div", {
              "class": "dialog-btn",
              onClick: c[0] || (c[0] = function (m) {
                return (0, _modules8e4eb.H)(e).showReceiveDialog = !1;
              })
            }, (0, _modules8e4eb.a0)(u.$t("confirm")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modules8e4eb.a6)(l, {
          show: (0, _modules8e4eb.H)(s).invite,
          "onUpdate:show": c[3] || (c[3] = function (m) {
            return (0, _modules8e4eb.H)(s).invite = m;
          }),
          "show-confirm-button": !1,
          className: "noOverHidden"
        }, {
          "default": (0, _modules8e4eb.a7)(function () {
            return [(0, _modules8e4eb.l)("div", cs, [(0, _modules8e4eb.l)("div", rs, [(0, _modules8e4eb.aa)((0, _modules8e4eb.l)("img", null, null, 512), [[v, (0, _modules8e4eb.H)(_pageActivity500eb.g)("public", "succeed")]]), (0, _modules8e4eb.l)("div", us, (0, _modules8e4eb.a0)(u.$t("inviteTips")), 1), (0, _modules8e4eb.l)("p", ds, (0, _modules8e4eb.a0)(u.$t("inviteAmount")), 1), (0, _modules8e4eb.l)("div", vs, [(0, _modules8e4eb.l)("span", _s, (0, _modules8e4eb.a0)(u.$t("commissionAmount")), 1), (0, _modules8e4eb.l)("span", null, (0, _modules8e4eb.a0)((0, _modules8e4eb.H)(_pageActivity500eb.o)((0, _modules8e4eb.H)(s).rebateAmount)), 1)]), (0, _modules8e4eb.l)("div", {
              "class": "dialog-btn",
              onClick: c[2] || (c[2] = function (m) {
                return (0, _modules8e4eb.H)(n)();
              })
            }, (0, _modules8e4eb.a0)(u.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"]), (0, _modules8e4eb.a6)(l, {
          show: (0, _modules8e4eb.H)(s).oldUser,
          "onUpdate:show": c[5] || (c[5] = function (m) {
            return (0, _modules8e4eb.H)(s).oldUser = m;
          }),
          "show-confirm-button": !1,
          "close-on-click-overlay": !0,
          className: "noOverHidden"
        }, {
          "default": (0, _modules8e4eb.a7)(function () {
            return [(0, _modules8e4eb.l)("div", ms, [(0, _modules8e4eb.l)("div", ps, [(0, _modules8e4eb.aa)((0, _modules8e4eb.l)("img", null, null, 512), [[v, (0, _modules8e4eb.H)(_pageActivity500eb.g)("public", "succeed")]]), (0, _modules8e4eb.l)("p", fs, (0, _modules8e4eb.a0)(u.$t("oldPromptTip")), 1), (0, _modules8e4eb.l)("div", gs, (0, _modules8e4eb.a0)(u.$t("oldPrompt")), 1), (0, _modules8e4eb.l)("p", hs, (0, _modules8e4eb.a0)(u.$t("oldPromptGift")), 1), (0, _modules8e4eb.l)("div", bs, [(0, _modules8e4eb.l)("span", null, (0, _modules8e4eb.a0)((0, _modules8e4eb.H)(_pageActivity500eb.o)((0, _modules8e4eb.H)(s).returnAwards)), 1)]), (0, _modules8e4eb.l)("div", {
              "class": "dialog-btn",
              onClick: c[4] || (c[4] = function (m) {
                return (0, _modules8e4eb.H)(i)();
              })
            }, (0, _modules8e4eb.a0)(u.$t("receive")), 1)])])];
          }),
          _: 1
        }, 8, ["show"])], 64);
      };
    }
  });
var ws = (0, _pageActivity500eb._)(ys, [["__scopeId", "data-v-3d4fafbb"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/AllPageDialog.vue"]]),
  ks = (0, _modules8e4eb._)({
    __name: "App",
    setup: function setup(t) {
      (0, _modules8e4eb.ap)(function (b) {
        return {
          "f13b4d11-currentFontFamily": R.value
        };
      });
      var _te3 = (0, _pageActivity500eb.b0)(),
        e = _te3.openAll,
        s = (0, _pageActivity500eb.bq)(),
        n = (0, _modules8e4eb.r)(!1),
        o = (0, _modules8e4eb.r)(!1),
        i = (0, _modules8e4eb.Q)(),
        u = (0, _pageActivity500eb.u)(),
        c = (0, _pageActivity500eb.S)(),
        _Fe = (0, _modules8e4eb.K)(),
        l = _Fe.locale,
        v = (0, _pageActivity500eb.G)(),
        m = (0, _modules8e4eb.r)(!1),
        L = (0, _modules8e4eb.J)(function () {
          return i.meta.tabBar;
        }),
        T = "public3Home",
        E = (0, _modules8e4eb.J)(function () {
          return ["electronic", "blackGoldHome"].includes(T) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path);
        }),
        G = (0, _modules8e4eb.r)(0),
        O = (0, _modules8e4eb.r)(Math.floor(Math.random() * 1e4)),
        w = (0, _modules8e4eb.J)(function () {
          return i.name + O.value;
        }),
        C = function C() {
          s.on("changeKeepAliveKey", function () {
            O.value = Math.floor(Math.random() * 1e4);
          });
        };
      sessionStorage.getItem("isload") ? n.value = !1 : (o.value = !0, sessionStorage.setItem("isload", o.value.toString()), n.value = !0), c.getHomeSetting(), (0, _modules8e4eb.G)(function () {
        return c.getAreacode;
      }, function (b) {
        b && u.setNumberType(b.substring(1));
      }), (0, _modules8e4eb.G)(function () {
        return c.getDL;
      }, function (b) {
        l.value = b, v.updateLanguage(b), (0, _pageActivity500eb.bb)(b), (0, _pageActivity500eb.bc)(_pageActivity500eb.K.global.t);
      }), setTimeout(function () {
        n.value = !1;
      }, 2e3);
      var $ = (0, _modules8e4eb.r)(!1),
        j = (0, _pageActivity500eb.a)();
      j.$subscribe(function (b, N) {
        $.value = N.isLoading, j.setLoading($.value);
      });
      var R = (0, _modules8e4eb.r)("bahnschrift");
      var p = (0, _pageActivity500eb.dB)(),
        g = c.getLanguage,
        B = (0, _pageActivity500eb.dC)(p, g);
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
            m.value = !m.value, $.value = !$.value;
          });
        },
        Y = function Y() {
          s.off("keyChange"), s.off("changeKeepAliveKey"), s.off("changeIsGame");
        };
      return u.setNumberType(c.getAreacode.substring(1)), F(), (0, _modules8e4eb.A)(function () {
        (0, _pageActivity500eb.dD)() && (0, _pageActivity500eb.dE)(), e(), Y(), z(), C(), localStorage.getItem("language") && (0, _pageActivity500eb.ba)(localStorage.getItem("language"));
      }), jt(), function (b, N) {
        var q = (0, _modules8e4eb.a2)("LoadingView");
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)(_modules8e4eb.a4, null, [(0, _modules8e4eb.a6)(q, {
          loading: $.value,
          type: "loading",
          isGame: m.value
        }, {
          "default": (0, _modules8e4eb.a7)(function () {
            return [((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)((0, _modules8e4eb.H)(_modules8e4eb.b2), {
              key: G.value
            }, {
              "default": (0, _modules8e4eb.a7)(function (_ref2) {
                var X = _ref2.Component;
                return [((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(_modules8e4eb.aD, {
                  max: 1
                }, [(0, _modules8e4eb.H)(i).meta.keepAlive ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)((0, _modules8e4eb.aC)(X), {
                  key: w.value
                })) : (0, _modules8e4eb.a1)("v-if", !0)], 1024)), (0, _modules8e4eb.H)(i).meta.keepAlive ? (0, _modules8e4eb.a1)("v-if", !0) : ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)((0, _modules8e4eb.aC)(X), {
                  key: 0
                }))];
              }),
              _: 1
            })), (0, _modules8e4eb.a1)("online custom service"), E.value ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(Ut, {
              key: 0
            })) : (0, _modules8e4eb.a1)("v-if", !0), L.value ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(Ot, {
              key: 1
            })) : (0, _modules8e4eb.a1)("v-if", !0)];
          }),
          _: 1
        }, 8, ["loading", "isGame"]), n.value ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(Xt, {
          key: 0
        })) : (0, _modules8e4eb.a1)("v-if", !0), (0, _modules8e4eb.a6)(ws)], 64);
      };
    }
  });
var $s = (0, _pageActivity500eb._)(ks, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/entrance/ar062/App.vue"]]);
var Ss = {
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
  Cs = {
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
  As = {
    mounted: function mounted(t, e) {
      t.addEventListener("input", function (s) {
        var o = t.value.replace(/\D+/g, "");
        t.value = o, e.value = o;
      });
    }
  },
  Is = function Is(t) {
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
  Ds = {
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
  Ls = {
    mounted: function mounted(t, e) {
      var s = e.value;
      var n = (0, _modules8e4eb.X)("permission", null);
      n.value === null || !s || (n && (n = JSON.parse(n.value)), n && n[s] === !1 && (t.style.display = "none"));
    }
  },
  ie = {
    debounce: Ss,
    throttle: Cs,
    onlyNum: As,
    throttleClick: Ds,
    haspermission: Ls
  },
  Ts = {
    install: function install(t) {
      Object.keys(ie).forEach(function (s) {
        t.directive(s, ie[s]);
      });
      var e = new IntersectionObserver(function (s) {
        s.forEach(function (n) {
          if (n.isIntersecting) {
            var o = n.target;
            o.src = o.dataset.origin || (0, _pageActivity500eb.i)("images", "avatar"), o.onerror = function () {
              e.unobserve(o);
              var i = o.dataset.img || (0, _pageActivity500eb.i)("images", "avatar");
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
      t.directive("lazy", Is(e));
    }
  },
  Es = {
    "class": "navbar-fixed"
  },
  Bs = {
    "class": "navbar__content"
  },
  Ps = {
    "class": "navbar__content-center"
  },
  Ns = {
    "class": "navbar__content-title"
  },
  xs = (0, _modules8e4eb._)({
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
      var s = (0, _modules8e4eb.r)(),
        n = (0, _pageActivity500eb.S)(),
        o = (0, _modules8e4eb.J)(function () {
          return n.getHeadLogo;
        }),
        i = function i() {
          e("click-left");
        },
        u = function u() {
          e("click-right");
        };
      return (0, _modules8e4eb.A)(function () {}), function (c, l) {
        var v = (0, _modules8e4eb.a2)("van-icon");
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("div", {
          "class": "navbar",
          ref_key: "navbar",
          ref: s
        }, [(0, _modules8e4eb.l)("div", Es, [(0, _modules8e4eb.l)("div", Bs, [(0, _modules8e4eb.l)("div", {
          "class": "navbar__content-left",
          onClick: i
        }, [(0, _modules8e4eb.ac)(c.$slots, "left", {}, function () {
          return [t.leftArrow ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.ae)(v, {
            key: 0,
            name: "arrow-left"
          })) : (0, _modules8e4eb.a1)("v-if", !0)];
        }, !0)]), (0, _modules8e4eb.l)("div", Ps, [t.headLogo ? ((0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("div", {
          key: 0,
          "class": "headLogo",
          style: (0, _modules8e4eb.$)({
            backgroundImage: "url(" + (t.headerUrl || o.value) + ")"
          })
        }, null, 4)) : (0, _modules8e4eb.a1)("v-if", !0), (0, _modules8e4eb.ac)(c.$slots, "center", {}, function () {
          return [(0, _modules8e4eb.l)("div", Ns, (0, _modules8e4eb.a0)(t.title), 1)];
        }, !0)]), (0, _modules8e4eb.l)("div", {
          "class": "navbar__content-right",
          onClick: u
        }, [(0, _modules8e4eb.ac)(c.$slots, "right", {}, void 0, !0)])])])], 512);
      };
    }
  });
var Vs = (0, _pageActivity500eb._)(xs, [["__scopeId", "data-v-12a80a3e"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/NavBar.vue"]]),
  Rs = {
    "class": "ar-loading-view"
  },
  Fs = {
    "class": "loading-wrapper"
  },
  Gs = {
    "class": "com__box"
  },
  Os = (0, _modules8e4eb.k)('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>', 1),
  js = {
    "class": "skeleton-wrapper"
  },
  Hs = {
    "class": "iosDialog"
  },
  Us = {
    "class": "title"
  },
  Ms = {
    "class": "websit_info"
  },
  Ws = ["src"],
  Ks = {
    "class": "link"
  },
  zs = {
    "class": "text"
  },
  Ys = {
    "class": "text"
  },
  qs = {
    "class": "text"
  },
  Xs = ["src"],
  Js = (0, _modules8e4eb._)({
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
        s = (0, _modules8e4eb.r)();
      var n = null;
      var _Te = (0, _pageActivity500eb.h)(),
        o = _Te.homeState,
        i = _Te.downloadIcon,
        u = _Te.webSiteUrl,
        c = (0, _modules8e4eb.J)(function () {
          return location.origin || "";
        });
      return (0, _modules8e4eb.A)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _modules8e4eb.B)();
            case 2:
              n = _modules8e4eb.b3.loadAnimation({
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
      }))), (0, _modules8e4eb.G)(function () {
        return e.loading;
      }, function () {
        e.type === "loading" && !e.isGame && (e.loading ? n && n.play() : n && n.stop());
      }), (0, _modules8e4eb.N)(function () {
        n && n.destroy(), n = null;
      }), function (l, v) {
        var m = (0, _modules8e4eb.a2)("VanSkeleton"),
          L = (0, _modules8e4eb.a2)("svg-icon"),
          T = (0, _modules8e4eb.a2)("van-popup");
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)(_modules8e4eb.a4, null, [(0, _modules8e4eb.aa)((0, _modules8e4eb.l)("div", Rs, [(0, _modules8e4eb.ac)(l.$slots, "template", {}, function () {
          return [(0, _modules8e4eb.aa)((0, _modules8e4eb.l)("div", Fs, [(0, _modules8e4eb.a1)(" <VanLoading /> "), (0, _modules8e4eb.aa)((0, _modules8e4eb.l)("div", {
            ref_key: "element",
            ref: s,
            "class": "loading-animat"
          }, null, 512), [[_modules8e4eb.ak, !l.isGame]]), (0, _modules8e4eb.aa)((0, _modules8e4eb.l)("div", Gs, [(0, _modules8e4eb.a1)(" loading "), Os, (0, _modules8e4eb.a1)(" 说明：组件名 ")], 512), [[_modules8e4eb.ak, l.isGame]]), (0, _modules8e4eb.a1)(' <div class="animation"></div> ')], 512), [[_modules8e4eb.ak, l.type === "loading"]]), (0, _modules8e4eb.aa)((0, _modules8e4eb.l)("div", js, [(0, _modules8e4eb.a6)(m, {
            row: 10
          }), (0, _modules8e4eb.a6)(m, {
            title: "",
            avatar: "",
            row: 5
          }), (0, _modules8e4eb.a6)(m, {
            title: "",
            row: 5
          })], 512), [[_modules8e4eb.ak, l.type === "skeleton"]])];
        }, !0)], 512), [[_modules8e4eb.ak, l.loading]]), (0, _modules8e4eb.ac)(l.$slots, "default", {}, void 0, !0), (0, _modules8e4eb.a6)(T, {
          show: (0, _modules8e4eb.H)(o).iosDialog,
          "onUpdate:show": v[0] || (v[0] = function (E) {
            return (0, _modules8e4eb.H)(o).iosDialog = E;
          }),
          round: "",
          closeable: "",
          position: "bottom",
          style: {
            height: "40%"
          }
        }, {
          "default": (0, _modules8e4eb.a7)(function () {
            return [(0, _modules8e4eb.l)("div", Hs, [(0, _modules8e4eb.l)("div", Us, (0, _modules8e4eb.a0)(l.$t("pwaInstall")), 1), (0, _modules8e4eb.l)("div", Ms, [(0, _modules8e4eb.l)("img", {
              "class": "icon",
              src: (0, _modules8e4eb.H)(i)
            }, null, 8, Ws), (0, _modules8e4eb.l)("div", Ks, [(0, _modules8e4eb.l)("div", null, (0, _modules8e4eb.a0)(c.value.split("://")[1]), 1), (0, _modules8e4eb.l)("div", null, (0, _modules8e4eb.a0)(c.value), 1)])]), (0, _modules8e4eb.l)("div", zs, [(0, _modules8e4eb.a8)("1. " + (0, _modules8e4eb.a0)(l.$t("pwaText1")) + " ", 1), (0, _modules8e4eb.a6)(L, {
              name: "share"
            })]), (0, _modules8e4eb.l)("div", Ys, [(0, _modules8e4eb.a8)("2. " + (0, _modules8e4eb.a0)(l.$t("pwaText2")) + " ", 1), (0, _modules8e4eb.l)("span", null, [(0, _modules8e4eb.a8)((0, _modules8e4eb.a0)(l.$t("pwaText3")) + " ", 1), (0, _modules8e4eb.a6)(L, {
              name: "add_icon"
            })])]), (0, _modules8e4eb.l)("div", qs, [(0, _modules8e4eb.a8)("3. " + (0, _modules8e4eb.a0)(l.$t("pwaText4")) + " ", 1), (0, _modules8e4eb.l)("img", {
              "class": "icon",
              src: (0, _modules8e4eb.H)(i)
            }, null, 8, Xs)])])];
          }),
          _: 1
        }, 8, ["show"])], 64);
      };
    }
  });
var Qs = (0, _pageActivity500eb._)(Js, [["__scopeId", "data-v-647954c7"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/LoadingView.vue"]]);
var Zs = ["xlink:href"],
  ea = {
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
        s = (0, _modules8e4eb.J)(function () {
          return "#icon-".concat(e.name);
        }),
        n = (0, _modules8e4eb.J)(function () {
          return e.name ? "svg-icon icon-".concat(e.name) : "svg-icon";
        });
      return function (o, i) {
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("svg", (0, _modules8e4eb.a$)({
          "class": n.value
        }, o.$attrs, {
          style: {
            color: t.color
          }
        }), [(0, _modules8e4eb.l)("use", {
          "xlink:href": s.value
        }, null, 8, Zs)], 16);
      };
    }
  },
  ta = (0, _pageActivity500eb._)(ea, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/svgIcons.vue"]]),
  sa = {
    "class": "ar-searchbar__selector"
  },
  aa = {
    "class": "ar-searchbar__selector-default"
  },
  oa = (0, _modules8e4eb._)({
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
        var i = (0, _modules8e4eb.a2)("van-icon");
        return (0, _modules8e4eb.o)(), (0, _modules8e4eb.j)("div", sa, [(0, _modules8e4eb.l)("div", {
          onClick: s
        }, [(0, _modules8e4eb.l)("span", aa, (0, _modules8e4eb.a0)(t.selectName), 1), (0, _modules8e4eb.a6)(i, {
          name: "arrow-down"
        })])]);
      };
    }
  });
var na = (0, _pageActivity500eb._)(oa, [["__scopeId", "data-v-fa757a88"], ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/ArSelect.vue"]]),
  ia = function ia(t) {
    t.component("NavBar", Vs), t.component("LoadingView", Qs), t.component("ArSelect", na), t.component("svg-icon", ta), t.use(_modules8e4eb.b4).use(_modules8e4eb.b5).use(_modules8e4eb.b6).use(_modules8e4eb.b7).use(_modules8e4eb.b8).use(_modules8e4eb.b9).use(_modules8e4eb.ba).use(_modules8e4eb.bb).use(_modules8e4eb.bc).use(_modules8e4eb.bd).use(_modules8e4eb.be).use(_modules8e4eb.bf).use(_modules8e4eb.bg).use(_modules8e4eb.bh).use(_modules8e4eb.bi).use(_modules8e4eb.bj).use(_modules8e4eb.bk).use(_modules8e4eb.bl).use(_modules8e4eb.bm).use(_modules8e4eb.bn).use(_modules8e4eb.bo).use(_modules8e4eb.bp).use(_modules8e4eb.bq).use(_modules8e4eb.br).use(_modules8e4eb.bs).use(_modules8e4eb.bt).use(_modules8e4eb.bu).use(_modules8e4eb.bv).use(_modules8e4eb.bw).use(_modules8e4eb.bx).use(_modules8e4eb.by).use(_modules8e4eb.bz).use(_modules8e4eb.bA).use(_modules8e4eb.bB).use(_modules8e4eb.bC).use(_modules8e4eb.bD).use(_modules8e4eb.bE).use(_pageActivity500eb.K).use(Ts).use(_modules8e4eb.bF);
    var e = t.config.globalProperties,
      s = {};
    s.TopHeight = 38, Object.keys(_pageActivity500eb.dF.refiter).forEach(function (n) {
      s[n] = _pageActivity500eb.dF.refiter[n];
    }), e.$u = s;
  };
({}).VITE_POINT && _pageActivity500eb.dG[{}.VITE_POINT]();
_pageActivity500eb.r.addRoute({
  path: "/",
  name: "home",
  component: function component() {
    return (0, _pageActivity500eb.j)(function () {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("./page-home-74725bb3.js"));
      }).then(function (t) {
        return t.X;
      });
    }, ["assets/js/page-home-74725bb3.js", "assets/js/modules-8e4eb682.js", "assets/css/modules-5dd73da0.css", "assets/js/page-activity-500eb065.js", "assets/js/native/index-9a070501.js", "assets/js/en-15fa07f8.js", "assets/js/rus-97760f90.js", "assets/js/vi-2d05655c.js", "assets/js/id-3117b06e.js", "assets/js/hd-fd8b192b.js", "assets/js/tha-8487385e.js", "assets/js/md-e0522d3b.js", "assets/js/bra-961b9a7d.js", "assets/js/my-89562fe6.js", "assets/js/bdt-d6487d0e.js", "assets/js/zh-184b2083.js", "assets/js/pak-3bdeb9cb.js", "assets/js/ar-7f8a77f5.js", "assets/css/page-activity-93a8910e.css", "assets/css/page-home-a4807077.css"]);
  },
  meta: {
    title: "home",
    tabBar: !0,
    keepAlive: !1
  }
});
var se = (0, _modules8e4eb.bG)($s),
  he = (0, _modules8e4eb.bH)();
ia(se);
he.use(_modules8e4eb.bI);
se.use(_pageActivity500eb.r).use(he);
se.mount("#app");