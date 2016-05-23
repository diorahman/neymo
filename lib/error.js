/** The base extensible error class */
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

/** Wraps Neymo errors */
class NeymoError extends BaseError {
    constructor(message, code, ref, to, source = 'Neymo') {
        // Hence we know which place is failing by just reading the message
        super(`${message} (${code} of ${source})`);
        this.code = code;
        this.source = source;
        this.ref = ref;
        this.to = to;
        this.name = this.constructor.name;
    }
}

export { NeymoError };
