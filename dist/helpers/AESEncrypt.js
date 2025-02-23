"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function AesDecrypt(encryptedString, aesKey, aesIv) {
  var key = _cryptoJs["default"].enc.Utf8.parse(aesKey);
  var iv = _cryptoJs["default"].enc.Utf8.parse(aesIv);
  var decrypted = _cryptoJs["default"].AES.decrypt(base64DecodeUrl(encryptedString.trim()), key, {
    iv: iv,
    padding: _cryptoJs["default"].pad.ZeroPadding
  });
  return _cryptoJs["default"].enc.Utf8.stringify(decrypted);
}
function base64DecodeUrl(str) {
  str = (str + "===").slice(0, str.length + str.length % 4);
  return str.replace(/-/g, "+").replace(/_/g, "/");
}
var aesUtil = {
  AesDecrypt: AesDecrypt
};
var _default = exports["default"] = aesUtil;