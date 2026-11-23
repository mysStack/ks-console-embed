import module8 from "./module-8.js";
import module127 from "./module-127.js";
import module222 from "./module-222.js";
import module54 from "./module-54.js";
import module256 from "./module-256.js";
import module99 from "./module-99.js";
import module90 from "./module-90.js";
import module178 from "./module-178.js";
import module40 from "./module-40.js";
import module179 from "./module-179.js";
import module124 from "./module-124.js";
const h = module179("slice");
const v = module40("species");
module8({
    target: "Array",
    proto: true,
    forced: !h
}, {
    slice: function(e, t) {
        let n;
        let r;
        let f;
        const d = module90(this);
        const h = module99(d);
        let y = module256(e, h);
        const b = module256(t === undefined ? h : t, h);
        if (module127(d) && (n = d.constructor, (module222(n) && (n === Array || module127(n.prototype)) || module54(n) && (n = n[v]) === null) && (n = undefined), n === Array || n === undefined)) {
            return module124(d, y, b);
        }
        r = new (n === undefined ? Array : n)(Math.max(b - y, 0));
        for(f = 0; y < b; y++, f++){
            if (y in d) {
                module178(r, f, d[y]);
            }
        }
        r.length = f;
        return r;
    }
});
