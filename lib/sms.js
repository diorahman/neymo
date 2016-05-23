/** @module Sms */
import Neymo from './neymo';

// sms types
const TYPES = {
    Text: 'text',
    Bnary: 'binary',
    WAPPush: 'wappush',
    Unicode: 'unicode',
    vCal: 'vcal',
    vCard: 'vcard'
};

/** Class representing Sms */
export default class Sms extends Neymo {

    /**
     * Constructs the Sms API object.
     *
     * @param {String} key
     * @param {String} secret
     * @param [Object] options
     */
    constructor(key, secret, { statusReportReq = 1, ttl = 1000 * 30, messageClass, callback, validity } = {}) {
        super(key, secret, 'https://rest.nexmo.com/sms/json');
        this.options = {
            statusReportReq,
            ttl,
            messageClass,
            callback,
            validity
        };
    }

    /**
     * Sends text message.
     *
     * @param {String} from - The sender number.
     * @param {String} to - The recipient number.
     * @param {String} text - The text message.
     */
    async sendText(from, to, text, isUnicode = false) {
        const type = isUnicode ? TYPES.Unicode : TYPES.Text,
            payload = { from, to, text, type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }

    /**
     * Sends unicode text message.
     *
     * @param {String} from - The sender number.
     * @param {String} to - The recipient number.
     * @param {String} unicodeText - The unicode text message.
     */
    async sendUnicode(from, to, unicodeText) {
        return await this.sendText(from, to, unicodeText, true);
    }

    /**
     * Sends binary message.
     *
     * @param {String} from - The sender number.
     * @param {String} to - The recipient number.
     * @param {String} body - The body message.
     */
    async sendBinary(from, to, body, { udh, protocolId } = {}) {
        const type = TYPES.Binary,
            payload = { from, to, body, udh, protocolId, type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }

    /**
     * Sends binary message.
     *
     * @param {String} from - The sender number.
     * @param {String} to - The recipient number.
     * @param {String} vcal - The vCal to be sent.
     */
    async sendvCal(from, to, vcal) {
        const type = TYPES.vCal,
            payload = { from, to, vcal, type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }

    /**
     * Sends binary message.
     *
     * @param {String} from - The sender number.
     * @param {String} to - The recipient number.
     * @param {String} vcard - The vCard to be sent.
     */
    async sendvCard(from, to, vcard) {
        const type = TYPES.vCard,
            payload = { from, to, vcard, type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }

    /**
     * Sends WAP push.
     *
     * @param {String} from - The sender number.
     * @param {String} to - The recipient number.
     * @param {String} title - The title to be sent.
     * @param {String} url - The URL to be sent.
     */
    async sendWAPPush(from, to, title = 'HOOQ', url = 'https://www.hooq.tv') {
        const type = TYPES.WAPPush,
            payload = { from, to, title, url, type };
        Object.assign(payload, this.options);
        return await this.send(payload);
    }
}
