/** @module Neymo*/
import { NeymoError } from './error';
import tarik from 'tarik';
import changeTo from 'change-case';
import uuid from 'uuid';

/** Class representing Neymo */
export default class Neymo {
    /**
     * Constructs Neymo
     *
     * @param {String} name - The name.
     */
    constructor(key, secret, url) {
        if (!key || !secret) {
            throw new NeymoError('key and secret are required', 40001, 'Neymo.constructor');
        }
        this.credentials = {
            api_key: key,
            api_secret: secret
        };
        this.url = url;
        this.client = tarik;
    }

    async send(options = { type: 'sms' }) {
        const payload = {
                'client-ref': `${options.type.substr(0, 3)}-${uuid.v4()}`
            },
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };

        for (let key in options) {
            if (options[key] !== undefined) {
                payload[key.indexOf('_') >= 0 ? key : changeTo.paramCase(key)] = options[key];
            }
        }
        Object.assign(payload, this.credentials);
        return this.conclude(await this.client.post(this.url, payload, { headers }));
    }

    conclude({ body, response }) {
        // FIXME; transform to a sensible object
        return body;
    }
}
