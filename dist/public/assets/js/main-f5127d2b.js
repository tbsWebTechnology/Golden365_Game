"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.render = d;
var _vendorB = require("./vendor-b2024301.js");
var n = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none"
  },
  s = (0, _vendorB.Y)("path", {
    stroke: "#789DD4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M24 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
  }, null, -1),
  r = (0, _vendorB.Y)("path", {
    stroke: "#789DD4",
    "stroke-width": "2",
    d: "M7 35a9 9 0 0 1 9-9h16a9 9 0 1 1 0 18H16a9 9 0 0 1-9-9Z"
  }, null, -1),
  a = [s, r];
function d(i, c) {
  return (0, _vendorB.P)(), (0, _vendorB.V)("svg", n, [].concat(a));
}
var l = exports["default"] = {
  render: d
};