import module883 from "./module-883.js";
(function(e, format) {
    format = typeof format === "string" ? module883({
        format
    }, l) : module883(format, l);
    if (typeof e === "string" && (y = format.format, /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(y))) {
        let n;
        const r = format.delimiters.find((e)=>format.format.indexOf(e) !== -1);
        const a = format.strictMode ? r : format.delimiters.find((t)=>e.indexOf(t) !== -1);
        const u = ((e, t)=>{
            const n = [];
            for(let r = Math.min(e.length, t.length), o = 0; o < r; o++){
                n.push([
                    e[o],
                    t[o]
                ]);
            }
            return n;
        })(e.split(a), format.format.toLowerCase().split(r));
        const s = {};
        const c = ((e, t)=>{
            let n;
            if (typeof Symbol === "undefined" || e[Symbol.iterator] == null) {
                if (Array.isArray(e) || (n = i(e))) {
                    if (n) {
                        e = n;
                    }
                    let r = 0;
                    const o = function() {};
                    return {
                        s: o,
                        n: function() {
                            if (r >= e.length) {
                                return {
                                    done: true
                                };
                            }
                            return {
                                done: false,
                                value: e[r++]
                            };
                        },
                        e: function(e) {
                            throw e;
                        },
                        f: o
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            let a;
            let l = true;
            let u = false;
            return {
                s: function() {
                    n = e[Symbol.iterator]();
                },
                n: function() {
                    const e = n.next();
                    l = e.done;
                    return e;
                },
                e: function(e) {
                    u = true;
                    a = e;
                },
                f: function() {
                    try {
                        if (!(l || n.return == null)) {
                            n.return();
                        }
                    } finally{
                        if (u) {
                            throw a;
                        }
                    }
                }
            };
        })(u);
        try {
            for(c.s(); !(n = c.n()).done;){
                g = n.value;
                const f = ((e)=>{
                    if (Array.isArray(e)) {
                        return e;
                    }
                })(g) || ((e, t)=>{
                    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(e)) {
                        const n = [];
                        let r = true;
                        let o = false;
                        let i;
                        try {
                            for(var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), n.length !== 2); r = true);
                        } catch (error) {
                            o = true;
                            i = error;
                        } finally{
                            try {
                                if (!(r || l.return == null)) {
                                    l.return();
                                }
                            } finally{
                                if (o) {
                                    throw i;
                                }
                            }
                        }
                        return n;
                    }
                })(g) || i(g, 2) || (()=>{
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })();
                const d = f[0];
                const p = f[1];
                if (d.length !== p.length) {
                    return false;
                }
                s[p.charAt(0)] = d;
            }
        } catch (error) {
            c.e(error);
        } finally{
            c.f();
        }
        let h = s.y;
        if (s.y.length === 2) {
            const v = parseInt(s.y, 10);
            if (isNaN(v)) {
                return false;
            }
            h = v < (new Date).getFullYear() % 100 ? `20${s.y}` : `19${s.y}`;
        }
        return new Date(`${h}-${s.m}-${s.d}`).getDate() === +s.d;
    }
    var g;
    var y;
    return !format.strictMode && Object.prototype.toString.call(e) === "[object Date]" && isFinite(e);
});
function i(e, t) {
    if (e) {
        if (typeof e === "string") {
            return a(e, t);
        }
        let n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
            n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
            return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return a(e, t);
        }
        return undefined;
    }
}
function a(e, t) {
    if (t == null || t > e.length) {
        t = e.length;
    }
    for(var n = 0, r = new Array(t); n < t; n++){
        r[n] = e[n];
    }
    return r;
}
var l = {
    format: "YYYY/MM/DD",
    delimiters: [
        "/",
        "-"
    ],
    strictMode: false
};
export default exports.default;
