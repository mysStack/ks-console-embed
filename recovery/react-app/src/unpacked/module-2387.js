import module2344 from "unpacked/module-2344.js";
import { has, isValidEntityCode, fromCodePoint } from "unpacked/module-819.js";
const l = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
const u = /^&([a-z][a-z0-9]{1,31});/i;
export default function(e, t) {
    let n;
    let s;
    const { pos, posMax } = e;
    if (e.src.charCodeAt(pos) !== 38) {
        return false;
    }
    if (pos + 1 < posMax) {
        if (e.src.charCodeAt(pos + 1) === 35) {
            if (s = e.src.slice(pos).match(l)) {
                if (!t) {
                    n = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10);
                    e.pending += isValidEntityCode(n) ? fromCodePoint(n) : fromCodePoint(65533);
                }
                e.pos += s[0].length;
                return true;
            }
        } else if ((s = e.src.slice(pos).match(u)) && has(module2344, s[1])) {
            if (!t) {
                e.pending += module2344[s[1]];
            }
            e.pos += s[0].length;
            return true;
        }
    }
    if (!t) {
        e.pending += "&";
    }
    e.pos++;
    return true;
};
