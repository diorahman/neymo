var Reflect = require('reflect-r');var regeneratorRuntime = require('babel-regenerator-runtime');'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
        var instance = Reflect.construct(cls, Array.from(arguments));
        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
        return instance;
    }

    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
        constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });

    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
        ExtendableBuiltin.__proto__ = cls;
    }

    return ExtendableBuiltin;
}

/** The base extensible error class */

var BaseError = function (_extendableBuiltin2) {
    _inherits(BaseError, _extendableBuiltin2);

    function BaseError(message) {
        _classCallCheck(this, BaseError);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseError).call(this, message));

        _this.name = _this.constructor.name;
        return _this;
    }

    return BaseError;
}(_extendableBuiltin(Error));

/** Wraps Neymo errors */


var NeymoError = function (_BaseError) {
    _inherits(NeymoError, _BaseError);

    function NeymoError(message, code, ref, to) {
        var source = arguments.length <= 4 || arguments[4] === undefined ? 'Neymo' : arguments[4];

        _classCallCheck(this, NeymoError);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(NeymoError).call(this, message + ' (' + code + ' of ' + source + ')'));
        // Hence we know which place is failing by just reading the message


        _this2.code = code;
        _this2.source = source;
        _this2.ref = ref;
        _this2.to = to;
        _this2.name = _this2.constructor.name;
        return _this2;
    }

    return NeymoError;
}(BaseError);

exports.NeymoError = NeymoError;
//# sourceMappingURL=error.js.map
