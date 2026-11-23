const n = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof window.msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
if (n) {
    const r = new Uint8Array(16);
    module.exports = function() {
        n(r);
        return r;
    };
} else {
    const o = new Array(16);
    module.exports = function() {
        let e;
        for(let t = 0; t < 16; t++){
            if ((3 & t) == 0) {
                e = 4294967296 * Math.random();
            }
            o[t] = e >>> ((3 & t) << 3) & 255;
        }
        return o;
    };
}
