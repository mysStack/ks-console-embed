export const format = function(...t) {
    let r = 1;
    const o = t[0];
    const t_length = t.length;
    if (typeof o === "function") {
        return o.apply(null, t.slice(1));
    }
    if (typeof o === "string") {
        let l = String(o).replace(i, (e)=>{
            if (e === "%%") {
                return "%";
            }
            if (r >= t_length) {
                return e;
            }
            switch(e){
                case "%s":
                    return String(t[r++]);
                case "%d":
                    return Number(t[r++]);
                case "%j":
                    try {
                        return JSON.stringify(t[r++]);
                    } catch (e) {
                        return "[Circular]";
                    }
                    break;
                default:
                    return e;
            }
        });
        let u = t[r];
        for(; r < t_length; u = t[++r]){
            l += ` ${u}`;
        }
        return l;
    }
    return o;
};
export const isEmptyValue = function(e, t) {
    return e == null || !(t !== "array" || !Array.isArray(e) || e.length) || !(!((e)=>e === "string" || e === "url" || e === "hex" || e === "email" || e === "pattern")(t) || typeof e !== "string" || e);
};
export const isEmptyObject = function(e) {
    return Object.keys(e).length === 0;
};
export const asyncMap = function(e, t, n, r) {
    if (t.first) {
        return l(((e)=>{
            const t = [];
            Object.keys(e).forEach((n)=>{
                t.push.apply(t, e[n]);
            });
            return t;
        })(e), n, r);
    }
    let o = t.firstFields || [];
    if (o === true) {
        o = Object.keys(e);
    }
    const i = Object.keys(e);
    const i_length = i.length;
    let s = 0;
    const errors = [];
    const f = new Promise((resolve, reject)=>{
        const d = function(e) {
            errors.push.apply(errors, e);
            if (++s === i_length) {
                r(errors);
                if (errors.length) {
                    return reject({
                        errors,
                        fields: convertFieldsError(errors)
                    });
                }
                return resolve();
            }
        };
        i.forEach((t)=>{
            const r = e[t];
            if (o.indexOf(t) !== -1) {
                l(r, n, d);
            } else {
                ((e, t, n)=>{
                    const r = [];
                    let o = 0;
                    const e_length = e.length;
                    function a(e) {
                        r.push.apply(r, e);
                        if (++o === e_length) {
                            n(r);
                        }
                    }
                    e.forEach((e)=>{
                        t(e, a);
                    });
                })(r, n, d);
            }
        });
    });
    f.catch((e)=>e);
    return f;
};
export const complementError = function(e) {
    return function(t) {
        if (t && t.message) {
            t.field = t.field || e.fullField;
            return t;
        }
        return {
            message: typeof t === "function" ? t() : t,
            field: t.field || e.fullField
        };
    };
};
export const deepMerge = function(e, t) {
    if (t) {
        for(const n in t){
            if (t.hasOwnProperty(n)) {
                const i = t[n];
                if ((i === undefined ? "undefined" : typeof i) === "object" && typeof e[n] === "object") {
                    e[n] = {
                        ...e[n],
                        ...i
                    };
                } else {
                    e[n] = i;
                }
            }
        }
    }
    return e;
};
var i = /%[sdj%]/g;
export function convertFieldsError(e) {
    if (!e || !e.length) {
        return null;
    }
    const t = {};
    e.forEach((e)=>{
        const e_field = e.field;
        t[e_field] = t[e_field] || [];
        t[e_field].push(e);
    });
    return t;
}
function l(e, t, n) {
    let r = 0;
    const e_length = e.length;
    (function i(a) {
        if (a && a.length) {
            n(a);
        } else {
            const l = r;
            r += 1;
            if (l < e_length) {
                t(e[l], i);
            } else {
                n([]);
            }
        }
    })([]);
}
export const warning = function() {};
