var Reflect = require('reflect-r');var regeneratorRuntime = require('babel-regenerator-runtime');'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _neymo = require('./neymo');

var _neymo2 = _interopRequireDefault(_neymo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @module Verify */


/** Class representing Verify */

var Verify = function (_Neymo) {
    _inherits(Verify, _Neymo);

    /**
     * Constructs the Verify API object.
     *
     * @param {String} key
     * @param {String} secret
     * @param [Object] options
     */

    function Verify(key, secret) {
        var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        var _ref$brand = _ref.brand;
        var brand = _ref$brand === undefined ? 'HOOQ' : _ref$brand;
        var _ref$senderId = _ref.senderId;
        var senderId = _ref$senderId === undefined ? 'HOOQ' : _ref$senderId;
        var _ref$codeLength = _ref.codeLength;
        var codeLength = _ref$codeLength === undefined ? 6 : _ref$codeLength;
        var _ref$lg = _ref.lg;
        var lg = _ref$lg === undefined ? 'en-us' : _ref$lg;
        var _ref$require_type = _ref.require_type;
        var require_type = _ref$require_type === undefined ? 'Mobile' : _ref$require_type;
        var _ref$pin_expiry = _ref.pin_expiry;
        var pin_expiry = _ref$pin_expiry === undefined ? 300 : _ref$pin_expiry;
        var _ref$next_event_wait = _ref.next_event_wait;
        var next_event_wait = _ref$next_event_wait === undefined ? 900 : _ref$next_event_wait;

        _classCallCheck(this, Verify);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Verify).call(this, key, secret, 'https://api.nexmo.com/verify/json'));

        _this.options = {
            brand: brand,
            senderId: senderId,
            codeLength: codeLength,
            lg: lg,
            require_type: require_type,
            pin_expiry: pin_expiry,
            next_event_wait: next_event_wait
        };
        return _this;
    }

    _createClass(Verify, [{
        key: 'request',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(number) {
                var type, payload;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                type = 'request', payload = { number: number, type: type };

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

            function request(_x2) {
                return ref.apply(this, arguments);
            }

            return request;
        }()
    }, {
        key: 'check',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(request_id, code) {
                var type, payload;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                type = 'check', payload = { request_id: request_id, code: code, type: type };

                                this.url = 'https://api.nexmo.com/verify/check/json';
                                Object.assign(payload, this.options);
                                _context2.next = 5;
                                return this.send(payload);

                            case 5:
                                return _context2.abrupt('return', _context2.sent);

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function check(_x3, _x4) {
                return ref.apply(this, arguments);
            }

            return check;
        }()
    }, {
        key: 'search',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(request_id) {
                var type, payload;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                type = 'search', payload = { request_id: request_id, type: type };

                                this.url = 'https://api.nexmo.com/verify/search/json';
                                Object.assign(payload);
                                _context3.next = 5;
                                return this.send(payload);

                            case 5:
                                return _context3.abrupt('return', _context3.sent);

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function search(_x5) {
                return ref.apply(this, arguments);
            }

            return search;
        }()
    }, {
        key: 'next',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(request_id) {
                var type, payload;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                type = 'next', payload = { request_id: request_id, cmd: 'trigger_next_event', type: type };

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

            function next(_x6) {
                return ref.apply(this, arguments);
            }

            return next;
        }()
    }, {
        key: 'cancel',
        value: function () {
            var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(request_id) {
                var type, payload;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                type = 'cancel', payload = { request_id: request_id, cmd: 'cancel', type: type };

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

            function cancel(_x7) {
                return ref.apply(this, arguments);
            }

            return cancel;
        }()
    }]);

    return Verify;
}(_neymo2.default);

exports.default = Verify;
//# sourceMappingURL=verify.js.map
