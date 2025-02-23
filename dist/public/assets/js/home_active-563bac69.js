"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.render = r;
var _vendorB = require("./vendor-b2024301.js");
var a = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none"
  },
  s = (0, _vendorB.Y)("path", {
    fill: "url(#a)",
    "fill-rule": "evenodd",
    d: "M5 19.843a6 6 0 0 1 2.664-4.987l13.5-9.03a6 6 0 0 1 6.672 0l13.5 9.03A6 6 0 0 1 44 19.843v21.185a2 2 0 0 1-2 2H27.526a2 2 0 0 1-2-2V31.19a2 2 0 0 0-2-2h-6.263a2 2 0 0 0-2 2v9.837a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm27.507 4.317a2 2 0 0 0 2-2v-1.031a2 2 0 0 0-2-2h-4.98a2 2 0 0 0-2 2v1.03a2 2 0 0 0 2 2z",
    "clip-rule": "evenodd"
  }, null, -1),
  l = (0, _vendorB.Y)("defs", null, [(0, _vendorB.Y)("linearGradient", {
    id: "a",
    x1: "5",
    x2: "47.278",
    y1: "13",
    y2: "26.218",
    gradientUnits: "userSpaceOnUse"
  }, [(0, _vendorB.Y)("stop", {
    "stop-color": "#3687FF"
  }), (0, _vendorB.Y)("stop", {
    offset: "1",
    "stop-color": "#52F5FF"
  })])], -1),
  n = [s, l];
function r(c, d) {
  return (0, _vendorB.P)(), (0, _vendorB.V)("svg", a, [].concat(n));
}
var h = exports["default"] = {
  render: r
};