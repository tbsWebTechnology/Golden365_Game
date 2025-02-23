"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var configViewEngine = function configViewEngine(app) {
  var viewsPath = _path["default"].join(process.cwd(), "src", "views");
  console.log("Views Directory:", viewsPath); // Debugging log
  app.use(_express["default"]["static"](_path["default"].join(process.cwd(), "src", "public")));
  app.set("view engine", "ejs");
  app.set("views", viewsPath);
};
var _default = exports["default"] = configViewEngine;