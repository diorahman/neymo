/** @module Verify */
import Neymo from './neymo';

/** Class representing Verify */
export default class Verify extends Neymo {

    /**
     * Constructs the Verify API object.
     *
     * @param {String} key
     * @param {String} secret
     * @param [Object] options
     */
    constructor(key, secret,
            { brand = 'HOOQ', senderId = 'HOOQ', codeLength = 6,
                lg = 'en-us', require_type = 'Mobile', pin_expiry = 300, next_event_wait = 900 } = {}) {
        super(key, secret, 'https://api.nexmo.com/verify/json');
        this.options = {
            brand,
            senderId,
            codeLength,
            lg,
            require_type,
            pin_expiry,
            next_event_wait
        };
    }

    async request(number) {
        const type = 'request',
            payload = { number, type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }

    async check(request_id, code) {
        const type = 'check',
            payload = { request_id, code, type };
        this.url = 'https://api.nexmo.com/verify/check/json';
        Object.assign(payload, this.options);
        return await this.send(payload);
    }

    async search(request_id) {
        const type = 'search',
            payload = { request_id, type };
        this.url = 'https://api.nexmo.com/verify/search/json';
        Object.assign(payload);
        return await this.send(payload);
    }

    async next(request_id) {
        const type = 'next',
            payload = { request_id, cmd: 'trigger_next_event', type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }

    async cancel(request_id) {
        const type = 'cancel',
            payload = { request_id, cmd: 'cancel', type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }
}
