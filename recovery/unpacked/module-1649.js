import { a as a_1 } from "./module-1343.js";
export const a = function(e, t) {
    const n = t ? a_1(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
};
