var Reflect = require('reflect-r');var regeneratorRuntime = require('babel-regenerator-runtime');'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NeymoError = exports.Verify = exports.Sms = undefined;

var _sourceMapSupport = require('source-map-support');

var _sms = require('./sms');

var _sms2 = _interopRequireDefault(_sms);

var _verify = require('./verify');

var _verify2 = _interopRequireDefault(_verify);

var _error = require('./error.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _sourceMapSupport.install)(); /** @module Index */


// Exposes main entrypoint to the lib.
exports.Sms = _sms2.default;
exports.Verify = _verify2.default;

// Exposes the lib error.

exports.NeymoError = _error.NeymoError;
//# sourceMappingURL=index.js.map
