"use strict";
// Webcrack of Wakaru-failed webpack factory module-958 (vendor.js).
// lodash `_isBuffer`: Buffer.isBuffer or stubFalse (module-1115).
const root = require("../../unpacked/module-861.js");
const stubFalse = require("../../unpacked/module-1115.js");
const BufferImpl = root && root.a && root.a.Buffer;
const nativeIsBuffer = BufferImpl ? BufferImpl.isBuffer : undefined;
const isBuffer = nativeIsBuffer || stubFalse.a;
module.exports = { a: isBuffer, default: isBuffer };
