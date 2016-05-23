/** @module Index */
import { install } from 'source-map-support'; install();

import Sms from './sms';
import Verify from './verify';
import { NeymoError } from './error.js';

// Exposes main entrypoint to the lib.
export { Sms, Verify };

// Exposes the lib error.
export { NeymoError };
