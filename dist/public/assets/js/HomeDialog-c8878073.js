"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.D = void 0;
var _indexFbf0707b = require("./index-fbf0707b.js");
var _vendorB = require("./vendor-b2024301.js");
var B = {
    "class": "dialog__container",
    role: "dialog",
    tabindex: "0"
  },
  D = {
    "class": "dialog__container-img"
  },
  $ = {
    alt: ""
  },
  O = {
    "class": "dialog__container-title"
  },
  T = {
    "class": "dialog__container-content"
  },
  b = {
    "class": "dialog__container-footer"
  },
  x = (0, _vendorB.O)({
    __name: "HomeDialog",
    props: {
      show: {
        type: Boolean,
        "default": !1
      },
      title: {
        type: String,
        "default": ""
      },
      confirmText: {
        type: String,
        "default": "comfirm"
      },
      showCancelBtn: {
        type: Boolean,
        "default": !0
      },
      cancelText: {
        type: String,
        "default": "cancel"
      },
      clickOutSide: {
        type: Boolean,
        "default": !1
      },
      pathname: {
        type: String,
        "default": "main/Laundry"
      },
      picname: {
        type: String,
        "default": "superjackpotHome"
      }
    },
    emits: ["update:show", "confirm"],
    setup: function setup(t, _ref) {
      var i = _ref.emit;
      var s = t,
        _p = (0, _vendorB.y)(),
        f = _p.t;
      (0, _vendorB.C)(function () {
        return s.show;
      }, function (e) {
        e ? window.addEventListener("touchmove", c, {
          passive: !1
        }) : window.removeEventListener("touchmove", c);
      });
      function m(e) {
        s.clickOutSide && i("update:show", !1);
      }
      var c = function c(e) {
        s.show && e.preventDefault();
      };
      return function (e, a) {
        var v = (0, _vendorB.a0)("lazy");
        return (0, _vendorB.P)(), (0, _vendorB.V)("div", {
          "class": (0, _vendorB.R)(["dialog", {
            active: t.show,
            inactive: !t.show
          }])
        }, [(0, _vendorB.Y)("div", B, [(0, _vendorB.Y)("div", D, [(0, _vendorB.ab)(e.$slots, "header", {}, function () {
          return [(0, _vendorB.a1)((0, _vendorB.Y)("img", $, null, 512), [[v, (0, _vendorB.T)(_indexFbf0707b.g)(t.pathname, t.picname)]])];
        }, !0)]), (0, _vendorB.Y)("div", O, [(0, _vendorB.ab)(e.$slots, "title", {}, function () {
          return [(0, _vendorB.Y)("h1", null, (0, _vendorB._)((0, _vendorB.T)(f)(t.title)), 1)];
        }, !0)]), (0, _vendorB.Y)("div", T, [(0, _vendorB.ab)(e.$slots, "content", {}, void 0, !0)]), (0, _vendorB.Y)("div", b, [(0, _vendorB.ab)(e.$slots, "footer", {}, function () {
          return [t.showCancelBtn ? ((0, _vendorB.P)(), (0, _vendorB.V)("button", {
            key: 0,
            onClick: a[0] || (a[0] = function () {
              i("update:show", !1);
            })
          }, (0, _vendorB._)(e.$t(t.cancelText)), 1)) : (0, _vendorB.Z)("", !0), (0, _vendorB.Y)("button", {
            onClick: a[1] || (a[1] = function () {
              i("confirm");
            })
          }, (0, _vendorB._)(e.$t(t.confirmText)), 1)];
        }, !0)])]), (0, _vendorB.Y)("div", {
          "class": "dialog__outside",
          onClick: m
        })], 2);
      };
    }
  });
var H = exports.D = (0, _indexFbf0707b._)(x, [["__scopeId", "data-v-c1509e82"]]);