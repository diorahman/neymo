var Reflect = require('reflect-r');var regeneratorRuntime = require('babel-regenerator-runtime');'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _neymo = require('./neymo');

var _neymo2 = _interopRequireDefault(_neymo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @module Sms */


// sms types
var TYPES = {
    Text: 'text',
    Bnary: 'binary',
    WAPPush: 'wappush',
    Unicode: 'unicode',
    vCal: 'vcal',
    vCard: 'vcard'
};

/** Class representing Sms */

var Sms = function (_Neymo) {
    _inherits(Sms, _Neymo);

    /**
     * Constructs the Sms API object.
     *
     * @param {String} key
     * @param {String} secret
     * @param [Object] options
     */
    function Sms(key, secret) {
        var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref$statusReportReq = _ref.statusReportReq,
            statusReportReq = _ref$statusReportReq === undefined ? 1 : _ref$statusReportReq,
            _ref$ttl = _ref.ttl,
            ttl = _ref$ttl === undefined ? 1000 * 30 : _ref$ttl,
            messageClass = _ref.messageClass,
            callback = _ref.callback,
            validity = _ref.validity;

        _classCallCheck(this, Sms);

        var _this = _possibleConstructorReturn(this, (Sms.__proto__ || Object.getPrototypeOf(Sms)).call(this, key, secret, 'https://rest.nexmo.com/sms/json'));

        _this.options = {
            statusReportReq: statusReportReq,
            ttl: ttl,
            messageClass: messageClass,
            callback: callback,
            validity: validity
        };
        return _this;
    }

    /**
     * Sends text message.
     *
     * @param {String} from - The sender number.
     * @param {String} to - The recipient number.
     * @param {String} text - The text message.
     */


    _createClass(Sms, [{
        key: 'sendText',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(from, to, text) {
                var isUnicode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                var type, payload;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                type = isUnicode ? TYPES.Unicode : TYPES.Text, payload = { from: from, to: to, text: text, type: type };

                                Object.assign(payload, this.options);
                                _context.next = 4;
                                return this.send(payload);

                            case 4:
                                return _context.abrupt('return', _context.sent);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function sendText(_x2, _x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return sendText;
        }()

        /**
         * Sends unicode text message.
         *
         * @param {String} from - The sender number.
         * @param {String} to - The recipient number.
         * @param {String} unicodeText - The unicode text message.
         */

    }, {
        key: 'sendUnicode',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(from, to, unicodeText) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.sendText(from, to, unicodeText, true);

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function sendUnicode(_x6, _x7, _x8) {
                return _ref3.apply(this, arguments);
            }

            return sendUnicode;
        }()

        /**
         * Sends binary message.
         *
         * @param {String} from - The sender number.
         * @param {String} to - The recipient number.
         * @param {String} body - The body message.
         */

    }, {
        key: 'sendBinary',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(from, to, body) {
                var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                    udh = _ref5.udh,
                    protocolId = _ref5.protocolId;

                var type, payload;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                type = TYPES.Binary, payload = { from: from, to: to, body: body, udh: udh, protocolId: protocolId, type: type };

                                Object.assign(payload, this.options);
                                _context3.next = 4;
                                return this.send(payload);

                            case 4:
                                return _context3.abrupt('return', _context3.sent);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function sendBinary(_x9, _x10, _x11) {
                return _ref4.apply(this, arguments);
            }

            return sendBinary;
        }()

        /**
         * Sends binary message.
         *
         * @param {String} from - The sender number.
         * @param {String} to - The recipient number.
         * @param {String} vcal - The vCal to be sent.
         */

    }, {
        key: 'sendvCal',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(from, to, vcal) {
                var type, payload;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                type = TYPES.vCal, payload = { from: from, to: to, vcal: vcal, type: type };

                                Object.assign(payload, this.options);
                                _context4.next = 4;
                                return this.send(payload);

                            case 4:
                                return _context4.abrupt('return', _context4.sent);

                            case 5:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function sendvCal(_x13, _x14, _x15) {
                return _ref6.apply(this, arguments);
            }

            return sendvCal;
        }()

        /**
         * Sends binary message.
         *
         * @param {String} from - The sender number.
         * @param {String} to - The recipient number.
         * @param {String} vcard - The vCard to be sent.
         */

    }, {
        key: 'sendvCard',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(from, to, vcard) {
                var type, payload;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                type = TYPES.vCard, payload = { from: from, to: to, vcard: vcard, type: type };

                                Object.assign(payload, this.options);
                                _context5.next = 4;
                                return this.send(payload);

                            case 4:
                                return _context5.abrupt('return', _context5.sent);

                            case 5:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function sendvCard(_x16, _x17, _x18) {
                return _ref7.apply(this, arguments);
            }

            return sendvCard;
        }()

        /**
         * Sends WAP push.
         *
         * @param {String} from - The sender number.
         * @param {String} to - The recipient number.
         * @param {String} title - The title to be sent.
         * @param {String} url - The URL to be sent.
         */

    }, {
        key: 'sendWAPPush',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(from, to) {
                var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'HOOQ';
                var url = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'https://www.hooq.tv';
                var type, payload;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                type = TYPES.WAPPush, payload = { from: from, to: to, title: title, url: url, type: type };

                                Object.assign(payload, this.options);
                                _context6.next = 4;
                                return this.send(payload);

                            case 4:
                                return _context6.abrupt('return', _context6.sent);

                            case 5:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function sendWAPPush(_x19, _x20) {
                return _ref8.apply(this, arguments);
            }

            return sendWAPPush;
        }()
    }]);

    return Sms;
}(_neymo2.default);

exports.default = Sms;
//# sourceMappingURL=sms.js.map
