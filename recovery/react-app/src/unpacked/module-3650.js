const n = {
    "./cluster.js": () => require("pages/clusters/actions/cluster"),
    "./index.js": () => require("pages/clusters/actions/index")
};
function a(e) {
    const t = o(e);
    return t();
}
function o(e) {
    if (!Object.prototype.hasOwnProperty.call(n, e)) {
        const t = new Error(`Cannot find module '${e}'`);
        t.code = "MODULE_NOT_FOUND";
        throw t;
    }
    return n[e];
}
a.keys = function() {
    return Object.keys(n);
};
a.resolve = o;
module.exports = a;
a.id = 3650;
