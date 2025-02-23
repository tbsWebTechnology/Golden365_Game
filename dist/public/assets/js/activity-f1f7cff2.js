"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.render = r;
var _vendorB = require("./vendor-b2024301.js");
var n = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none"
  },
  a = (0, _vendorB.Y)("path", {
    stroke: "#789DD4",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M38 30H10a6 6 0 0 0 0 12h28a6 6 0 0 0 0-12M36 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16M5.414 15.414a2 2 0 0 1 0-2.828l6.172-6.172a2 2 0 0 1 2.828 0l6.172 6.172a2 2 0 0 1 0 2.828l-6.172 6.172a2 2 0 0 1-2.828 0z"
  }, null, -1),
  s = [a];
function r(c, i) {
  return (0, _vendorB.P)(), (0, _vendorB.V)("svg", n, [].concat(s));
}
var d = exports["default"] = {
  render: r
};