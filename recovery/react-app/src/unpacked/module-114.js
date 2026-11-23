"use strict";
let r;
const module50 = require("./module-50.js").default;
const module288 = require("./module-288.js");
const module283 = require("./module-283.js").default;
const module173 = require("./module-173.js").default;
const module376 = require("./module-376.js").default;
const module219 = require("./module-219.js").default;
const c = require("./module-220.js").default("IE_PROTO");
const f = function() {};
const d = function(e) {
    return `<script>${e}</script>`;
};
const p = function(e) {
    e.write(d(""));
    e.close();
    const Object = e.parentWindow.Object;
    e = null;
    return Object;
};
let h = function() {
    try {
        r = new ActiveXObject("htmlfile");
    } catch (e) {}
    let e;
    let t;
    h = typeof document !== "undefined" ? document.domain && r ? p(r) : ((t = module219("iframe")).style.display = "none", module376.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F) : p(r);
    for(let n = module283.length; n--;){
        delete h.prototype[module283[n]];
    }
    return h();
};
module173[c] = true;
module.exports = Object.create || function(e, t) {
    let n;
    if (e !== null) {
        f.prototype = module50(e);
        n = new f;
        f.prototype = null;
        n[c] = e;
    } else {
        n = h();
    }
    if (t === undefined) {
        return n;
    }
    return module288.f(n, t);
};
