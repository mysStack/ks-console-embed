"use strict";
const r = require("./module-40.js").default("iterator");
let o = false;
try {
    let a = 0;
    const i = {
        next: function() {
            return {
                done: !!a++
            };
        },
        return: function() {
            o = true;
        }
    };
    i[r] = function() {
        return this;
    };
    Array.from(i, function() {
        throw 2;
    });
} catch (e) {}
module.exports = function(e, t) {
    try {
        if (!t && !o) {
            return false;
        }
    } catch (e) {
        return false;
    }
    let n = false;
    try {
        const a = {};
        a[r] = function() {
            return {
                next: function() {
                    return {
                        done: n = true
                    };
                }
            };
        };
        e(a);
    } catch (e) {}
    return n;
};
