"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Create a connection pool with error handling and configuration
var connection = _promise["default"].createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'diuwin',
  waitForConnections: true,
  // Waits for a connection before throwing an error
  connectionLimit: 10,
  // Limits the number of concurrent connections
  queueLimit: 0,
  // No queue limit
  connectTimeout: 10000,
  // 10 seconds connection timeout
  acquireTimeout: 10000 // 10 seconds to acquire a connection
});

// Event listeners for connection and error events
connection.on('connection', function (connection) {
  console.log('Connected to the MySQL server.');
});
connection.on('error', function (err) {
  console.error('MySQL connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('MySQL connection was closed.');
  } else if (err.code === 'ER_CON_COUNT_ERROR') {
    console.error('MySQL has too many connections.');
  } else if (err.code === 'ECONNREFUSED') {
    console.error('MySQL connection was refused.');
  } else {
    throw err; // Throw the error for other unexpected issues
  }
});
var _default = exports["default"] = connection;