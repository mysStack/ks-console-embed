const r = {
    "./locale": 418,
    "./locale.js": 418
};
function o(e) {
    const t = a(e);
    return require(t);
}
function a(e) {
    if (!Object.prototype.hasOwnProperty.call(r, e)) {
        const t = new Error(`Cannot find module '${e}'`);
        t.code = "MODULE_NOT_FOUND";
        throw t;
    }
    return r[e];
}
o.keys = function() {
    return Object.keys(r);
};
o.resolve = a;
module.exports = o;
o.id = 661;
