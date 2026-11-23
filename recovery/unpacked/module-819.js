"use strict";
const hasOwnProperty = Object.prototype.hasOwnProperty;
function o(e, t) {
    return hasOwnProperty.call(e, t);
}
function i(e) {
    return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (65535 & e) == 65535 || (65535 & e) == 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function a(e) {
    if (e > 65535) {
        const t = 55296 + ((e -= 65536) >> 10);
        const n = 56320 + (1023 & e);
        return String.fromCharCode(t, n);
    }
    return String.fromCharCode(e);
}
const l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
const u = new RegExp(`${l.source}|${/&([a-z#][a-z0-9]{1,31});/gi.source}`, "gi");
const s = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
const module2344 = require("./module-2344.js").default;
const f = /[&<>"]/;
const d = /[&<>"]/g;
const p = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
};
function h(e) {
    return p[e];
}
const v = /[.?*+^$[\]\\(){}|-]/g;
const module1302 = require("./module-1302.js").default;
exports.lib = {};
exports.lib.mdurl = require("./module-1557.js");
exports.lib.ucmicro = require("./module-2349.js");
exports.assign = function(e) {
    const t = Array.prototype.slice.call(arguments, 1);
    t.forEach((t)=>{
        if (t) {
            if (typeof t !== "object") {
                throw new TypeError(`${t}must be object`);
            }
            Object.keys(t).forEach((n)=>{
                e[n] = t[n];
            });
        }
    });
    return e;
};
exports.isString = function(e) {
    return ((e)=>Object.prototype.toString.call(e))(e) === "[object String]";
};
exports.has = o;
exports.unescapeMd = function(e) {
    if (e.indexOf("\\") < 0) {
        return e;
    }
    return e.replace(l, "$1");
};
exports.unescapeAll = function(e) {
    if (e.indexOf("\\") < 0 && e.indexOf("&") < 0) {
        return e;
    }
    return e.replace(u, (e, t, n)=>t || ((e, t)=>{
            let n = 0;
            if (o(module2344, t)) {
                return module2344[t];
            }
            if (t.charCodeAt(0) === 35 && s.test(t) && i(n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10))) {
                return a(n);
            }
            return e;
        })(e, n));
};
exports.isValidEntityCode = i;
exports.fromCodePoint = a;
exports.escapeHtml = function(e) {
    if (f.test(e)) {
        return e.replace(d, h);
    }
    return e;
};
exports.arrayReplaceAt = function(e, t, n) {
    return [].concat(e.slice(0, t), n, e.slice(t + 1));
};
exports.isSpace = function(e) {
    switch(e){
        case 9:
        case 32:
            return true;
    }
    return false;
};
exports.isWhiteSpace = function(e) {
    if (e >= 8192 && e <= 8202) {
        return true;
    }
    switch(e){
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
            return true;
    }
    return false;
};
exports.isMdAsciiPunct = function(e) {
    switch(e){
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
            return true;
        default:
            return false;
    }
};
exports.isPunctChar = function(e) {
    return module1302.test(e);
};
exports.escapeRE = function(e) {
    return e.replace(v, "\\$&");
};
exports.normalizeReference = function(e) {
    return e.trim().replace(/\s+/g, " ").toUpperCase();
};
