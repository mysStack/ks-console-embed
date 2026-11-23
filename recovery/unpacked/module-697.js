import module296 from "./module-296.js";
export default function(e, t) {
    const n = t ? module296(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
};
