"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._ = void 0;
var _vendorB = require("./vendor-b2024301.js");
var _indexFbf0707b = require("./index-fbf0707b.js");
var l = {
    "aria-hidden": "true"
  },
  p = ["href", "fill"],
  d = (0, _vendorB.O)({
    __name: "index",
    props: {
      prefix: {
        type: String,
        "default": "cms-icon"
      },
      name: {
        type: String,
        required: !0
      },
      color: {
        type: String,
        "default": ""
      },
      size: {
        type: String,
        "default": "24px"
      }
    },
    setup: function setup(e) {
      var t = e,
        o = (0, _vendorB.v)(function () {
          return "#".concat(t.prefix, "-").concat(t.name);
        });
      return function (f, u) {
        return (0, _vendorB.P)(), (0, _vendorB.V)("span", {
          "class": "cms-icon",
          style: (0, _vendorB.a2)({
            fontSize: e.size
          })
        }, [((0, _vendorB.P)(), (0, _vendorB.V)("svg", l, [(0, _vendorB.Y)("use", {
          href: o.value,
          fill: e.color
        }, null, 8, p)]))], 4);
      };
    }
  });
var y = exports._ = (0, _indexFbf0707b._)(d, [["__scopeId", "data-v-9e5455f6"]]);