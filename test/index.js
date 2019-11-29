import test from 'ava';
import { Sms, Verify } from '../lib';

test('Yay!', async (t) => {
    //
    const sms = new Sms('key', 'secret'),
        verify = new Verify('key', 'secret');
    t.truthy(sms);
    t.truthy(verify);
    t.truthy(sms['sendText']);
    t.pass();
});
