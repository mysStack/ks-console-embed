"use strict";
let r;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventCenter = undefined;
exports.SYNC_EVENT = undefined;
const o = new ((r = require("unpacked/module-2163.js")) && r.__esModule ? r : {
    default: r
}).default;
exports.eventCenter = o;
if (o.setMaxListeners) {
    o.setMaxListeners(10);
}
exports.SYNC_EVENT = "recharts.syncMouseEvents";
