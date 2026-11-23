import { asyncMap, complementError, convertFieldsError, deepMerge, format, warning } from "unpacked/module-850.js";
import module3111 from "unpacked/module-3111.js";
import { messages, newMessages } from "unpacked/module-3131.js";
function s(e) {
    this.rules = null;
    this._messages = messages;
    this.define(e);
}
s.prototype = {
    messages: function(e) {
        if (e) {
            this._messages = deepMerge(newMessages(), e);
        }
        return this._messages;
    },
    define: function(e) {
        if (!e) {
            throw new Error("Cannot configure a schema with no rules");
        }
        if ((e === undefined ? "undefined" : typeof e) !== "object" || Array.isArray(e)) {
            throw new Error("Rules must be an object");
        }
        this.rules = {};
        let t;
        let n;
        for(t in e){
            if (e.hasOwnProperty(t)) {
                n = e[t];
                this.rules[t] = Array.isArray(n) ? n : [
                    n
                ];
            }
        }
    },
    validate: function(e, n = {}, r = function() {}) {
        const _this = this;
        let source = e;
        let c = n;
        let f = r;
        if (typeof c === "function") {
            f = c;
            c = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
            if (f) {
                f();
            }
            return Promise.resolve();
        }
        function d(e) {
            let t;
            let n;
            let r;
            let o = [];
            let i = {};
            for(r = 0; r < e.length; r++){
                t = e[r];
                n = undefined;
                if (Array.isArray(t)) {
                    o = (n = o).concat.apply(n, t);
                } else {
                    o.push(t);
                }
            }
            if (o.length) {
                i = convertFieldsError(o);
            } else {
                o = null;
                i = null;
            }
            f(o, i);
        }
        if (c.messages) {
            let p = this.messages();
            if (p === messages) {
                p = newMessages();
            }
            deepMerge(p, c.messages);
            c.messages = p;
        } else {
            c.messages = this.messages();
        }
        let h;
        let v;
        const g = {};
        const y = c.keys || Object.keys(this.rules);
        y.forEach((field)=>{
            h = _this.rules[field];
            v = source[field];
            h.forEach((r)=>{
                let i = r;
                if (typeof i.transform === "function") {
                    if (source === e) {
                        source = {
                            ...source
                        };
                    }
                    v = source[field] = i.transform(v);
                }
                i = typeof i === "function" ? {
                    validator: i
                } : {
                    ...i
                };
                i.validator = _this.getValidationMethod(i);
                i.field = field;
                i.fullField = i.fullField || field;
                i.type = _this.getType(i);
                if (i.validator) {
                    g[field] = g[field] || [];
                    g[field].push({
                        rule: i,
                        value: v,
                        source,
                        field
                    });
                }
            });
        });
        const m = {};
        return asyncMap(g, c, function(e, t) {
            const e_rule = e.rule;
            let r = !(e_rule.type !== "object" && e_rule.type !== "array" || typeof e_rule.fields !== "object" && typeof e_rule.defaultField !== "object");
            function l(e, t) {
                return {
                    ...t,
                    fullField: `${e_rule.fullField}.${e}`
                };
            }
            function u(i = []) {
                let u = i;
                if (!Array.isArray(u)) {
                    u = [
                        u
                    ];
                }
                if (!c.suppressWarning && u.length) {
                    s.warning("async-validator:", u);
                }
                if (u.length && e_rule.message) {
                    u = [].concat(e_rule.message);
                }
                u = u.map(complementError(e_rule));
                if (c.first && u.length) {
                    m[e_rule.field] = 1;
                    return t(u);
                }
                if (r) {
                    if (e_rule.required && !e.value) {
                        u = e_rule.message ? [].concat(e_rule.message).map(complementError(e_rule)) : c.error ? [
                            c.error(e_rule, format(c.messages.required, e_rule.field))
                        ] : [];
                        return t(u);
                    }
                    let f = {};
                    if (e_rule.defaultField) {
                        for(const d in e.value){
                            if (e.value.hasOwnProperty(d)) {
                                f[d] = e_rule.defaultField;
                            }
                        }
                    }
                    for(const p in f = {
                        ...f,
                        ...e.rule.fields
                    }){
                        if (f.hasOwnProperty(p)) {
                            const h = Array.isArray(f[p]) ? f[p] : [
                                f[p]
                            ];
                            f[p] = h.map(l.bind(null, p));
                        }
                    }
                    const v = new s(f);
                    v.messages(c.messages);
                    if (e.rule.options) {
                        e.rule.options.messages = c.messages;
                        e.rule.options.error = c.error;
                    }
                    v.validate(e.value, e.rule.options || c, function(e) {
                        const n = [];
                        if (u && u.length) {
                            n.push.apply(n, u);
                        }
                        if (e && e.length) {
                            n.push.apply(n, e);
                        }
                        t(n.length ? n : null);
                    });
                } else {
                    t(u);
                }
            }
            r = r && (e_rule.required || !e_rule.required && e.value);
            e_rule.field = e.field;
            let f;
            if (e_rule.asyncValidator) {
                f = e_rule.asyncValidator(e_rule, e.value, u, e.source, c);
            } else {
                if (e_rule.validator) {
                    if ((f = e_rule.validator(e_rule, e.value, u, e.source, c)) === true) {
                        u();
                    } else if (f === false) {
                        u(e_rule.message || `${e_rule.field} fails`);
                    } else if (f instanceof Array) {
                        u(f);
                    } else if (f instanceof Error) {
                        u(f.message);
                    }
                }
            }
            if (f && f.then) {
                f.then(()=>u(), (e)=>u(e));
            }
        }, function(e) {
            d(e);
        });
    },
    getType: function(e) {
        if (e.type === undefined && e.pattern instanceof RegExp) {
            e.type = "pattern";
        }
        if (typeof e.validator !== "function" && e.type && !module3111.hasOwnProperty(e.type)) {
            throw new Error(format("Unknown rule type %s", e.type));
        }
        return e.type || "string";
    },
    getValidationMethod: function(e) {
        if (typeof e.validator === "function") {
            return e.validator;
        }
        const t = Object.keys(e);
        const n = t.indexOf("message");
        if (n !== -1) {
            t.splice(n, 1);
        }
        if (t.length === 1 && t[0] === "required") {
            return module3111.required;
        }
        return module3111[this.getType(e)] || false;
    }
};
s.register = function(e, t) {
    if (typeof t !== "function") {
        throw new Error("Cannot register a validator by type, validator is not a function");
    }
    module3111[e] = t;
};
s.warning = warning;
s.messages = messages;
export default s;
