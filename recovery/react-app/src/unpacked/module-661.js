const r = {
    "./locale": () => require("unpacked/module-418.js"),
    "./locale.js": () => require("unpacked/module-418.js")
};
function o(e) {
    const t = a(e);
    return t();
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
