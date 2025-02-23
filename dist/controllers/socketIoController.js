"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _connectDB = _interopRequireDefault(require("../config/connectDB.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var sendMessageAdmin = function sendMessageAdmin(io) {
  io.on("connection", function (socket) {
    socket.on("data-server-trx-wingo", function (msg) {
      io.emit("data-server-trx-wingo", msg);
    });
    socket.on("data-server", function (msg) {
      io.emit("data-server", msg);
    });
    socket.on("data-server_2", function (msg) {
      io.emit("data-server_2", msg);
    });
    socket.on("data-server-5", function (msg) {
      io.emit("data-server-5", msg);
    });
    socket.on("data-server-3", function (msg) {
      io.emit("data-server-3", msg);
    });
    // socket.on("disconnect", () => {
    // console.log('a user disconnect ' + socket.id);
    // });
  });
};
var socketIoController = {
  sendMessageAdmin: sendMessageAdmin
};
var _default = exports["default"] = socketIoController;