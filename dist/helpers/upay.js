"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _md = _interopRequireDefault(require("md5"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var upay = {
  generateSignature: function generateSignature(params, key) {
    // let stringA = "";

    // Object.entries(data).forEach(([key, value]) => {
    //   if (value !== null && value !== "") {
    //     stringA += `${key}=${value}&`;
    //   }
    // });

    // console.log(stringA);

    // let stringSignTemp = `${stringA}appSecret=${key}`;
    // console.log(stringSignTemp);

    var sortedKeys = Object.keys(params).sort();
    var stringA = "";
    sortedKeys.forEach(function (k) {
      if (params[k] !== null && params[k] !== "") {
        stringA += "".concat(k, "=").concat(params[k], "&");
      }
    });
    stringA = stringA.slice(0, -1);
    stringA += "&appSecret=".concat(key);
    var signature = (0, _md["default"])(stringA).toUpperCase();
    console.log(signature);
    return signature;
  }
};
var _default = exports["default"] = upay;