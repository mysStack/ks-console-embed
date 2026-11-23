((t)=>{
    const module2127 = require("unpacked/module-2127.js");
    const o = typeof window === "undefined" ? t : window;
    for(var i = [
        "moz",
        "webkit"
    ], a = "AnimationFrame", l = o[`request${a}`], u = o[`cancel${a}`] || o[`cancelRequest${a}`], s = 0; !l && s < i.length; s++){
        l = o[`${i[s]}Request${a}`];
        u = o[`${i[s]}Cancel${a}`] || o[`${i[s]}CancelRequest${a}`];
    }
    if (!l || !u) {
        let c = 0;
        let f = 0;
        const d = [];
        l = function(callback) {
            if (d.length === 0) {
                const t = module2127();
                const n = Math.max(0, 1000 / 60 - (t - c));
                c = n + t;
                setTimeout(()=>{
                    const e = d.slice(0);
                    d.length = 0;
                    for(let t = 0; t < e.length; t++){
                        if (!e[t].cancelled) {
                            try {
                                e[t].callback(c);
                            } catch (error) {
                                setTimeout(()=>{
                                    throw error;
                                }, 0);
                            }
                        }
                    }
                }, Math.round(n));
            }
            d.push({
                handle: ++f,
                callback,
                cancelled: false
            });
            return f;
        };
        u = function(e) {
            for(let t = 0; t < d.length; t++){
                if (d[t].handle === e) {
                    d[t].cancelled = true;
                }
            }
        };
    }
    module.exports = function(e) {
        return l.call(o, e);
    };
    module.exports.cancel = function() {
        u.apply(o, arguments);
    };
    module.exports.polyfill = function(e) {
        if (!e) {
            e = o;
        }
        e.requestAnimationFrame = l;
        e.cancelAnimationFrame = u;
    };
})(require("unpacked/module-69.js").default);
