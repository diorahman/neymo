var Reflect = require('reflect-r');var regeneratorRuntime = require('babel-regenerator-runtime');'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** @module Neymo*/


var _error = require('./error');

var _blackadder = require('blackadder');

var _blackadder2 = _interopRequireDefault(_blackadder);

var _changeCase = require('change-case');

var _changeCase2 = _interopRequireDefault(_changeCase);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Class representing Neymo */
var Neymo = function () {
    /**
     * Constructs Neymo
     *
     * @param {String} name - The name.
     */
    function Neymo(key, secret, url) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, Neymo);

        if (!key || !secret) {
            throw new _error.NeymoError('key and secret are required', 40001, 'Neymo.constructor');
        }
        this.credentials = {
            api_key: key,
            api_secret: secret
        };
        this.url = url;
        options.push({ retries: 0 });
        this.client = new _blackadder2.default(options);
    }

    _createClass(Neymo, [{
        key: 'send',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: 'sms' };
                var payload, headers, key;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                payload = {
                                    'client-ref': options.type.substr(0, 3) + '-' + _uuid2.default.v4()
                                }, headers = {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                };


                                for (key in options) {
                                    if (options[key] !== undefined) {
                                        payload[key.indexOf('_') >= 0 ? key : _changeCase2.default.paramCase(key)] = options[key];
                                    }
                                }
                                Object.assign(payload, this.credentials);
                                _context.t0 = this;
                                _context.next = 6;
                                return this.client.post(this.url, payload, { headers: headers });

                            case 6:
                                _context.t1 = _context.sent;
                                return _context.abrupt('return', _context.t0.conclude.call(_context.t0, _context.t1));

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function send() {
                return _ref.apply(this, arguments);
            }

            return send;
        }()
    }, {
        key: 'conclude',
        value: function conclude(_ref2) {
            var body = _ref2.body,
                response = _ref2.response;

            // FIXME; transform to a sensible object
            return body;
        }
    }]);

    return Neymo;
}();

exports.default = Neymo;
//# sourceMappingURL=neymo.js.map
