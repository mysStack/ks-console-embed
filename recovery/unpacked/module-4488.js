const module1237 = require("./module-1237.js").default;
const module4489 = require("./module-4489.js");
const module1427 = require("./module-1427.js").default;
const a = require("./module-1883.js")("IE_PROTO");
const l = function() {};
let u = function() {
    let e;
    const t = require("./module-1874.js").default("iframe");
    let module1427_length = module1427.length;
    t.style.display = "none";
    require("./module-4491.js").default.appendChild(t);
    t.src = "javascript:";
    (e = t.contentWindow.document).open();
    e.write("<script>document.F=Object<\/script>");
    e.close();
    for(u = e.F; module1427_length--;){
        delete u.prototype[module1427[module1427_length]];
    }
    return u();
};
module.exports = Object.create || function(e, t) {
    let n;
    if (e !== null) {
        l.prototype = module1237(e);
        n = new l;
        l.prototype = null;
        n[a] = e;
    } else {
        n = u();
    }
    if (t === undefined) {
        return n;
    }
    return module4489(n, t);
};
