let _webpackDefault = {};
let r;
(()=>{
    "use strict";
    const hasOwnProperty = {}.hasOwnProperty;
    function o(...args) {
        const e = [];
        for (const r of args){
            if (r) {
                const a = typeof r;
                if (a === "string" || a === "number") {
                    e.push(r);
                } else if (Array.isArray(r) && r.length) {
                    const i = o.apply(null, r);
                    if (i) {
                        e.push(i);
                    }
                } else if (a === "object") {
                    for(const l in r){
                        if (hasOwnProperty.call(r, l) && r[l]) {
                            e.push(l);
                        }
                    }
                }
            }
        }
        return e.join(" ");
    }
    if (_webpackDefault) {
        o.default = o;
        _webpackDefault = o;
    } else if ((r = o) !== undefined) {
        _webpackDefault = r;
    }
})();
export default _webpackDefault;
