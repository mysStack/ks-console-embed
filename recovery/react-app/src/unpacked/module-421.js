import module114 from "unpacked/module-114.js";
import module113 from "unpacked/module-113.js";
import module493 from "unpacked/module-493.js";
import module142 from "unpacked/module-142.js";
import module254 from "unpacked/module-254.js";
import module103 from "unpacked/module-103.js";
import module213 from "unpacked/module-213.js";
import module289 from "unpacked/module-289.js";
import module272 from "unpacked/module-272.js";
import module269 from "unpacked/module-269.js";
import module33 from "unpacked/module-33.js";
import module420 from "unpacked/module-420.js";
import module101 from "unpacked/module-101.js";
const module420_fastKey = module420.fastKey;
const { set, getterFor } = module101;
export default {
    getConstructor: function(e, t, AS_ENTRIES, c) {
        const f = e(function(that, o) {
            module254(that, f_prototype);
            set(that, {
                type: t,
                index: module114(null),
                first: undefined,
                last: undefined,
                size: 0
            });
            if (!module33) {
                that.size = 0;
            }
            if (!module103(o)) {
                module213(o, that[c], {
                    that,
                    AS_ENTRIES
                });
            }
        });
        var f_prototype = f.prototype;
        const v = getterFor(t);
        const y = (e, t, n)=>{
            let r;
            let o;
            const a = v(e);
            let i = b(e, t);
            if (i) {
                i.value = n;
            } else {
                a.last = i = {
                    index: o = module420_fastKey(t, true),
                    key: t,
                    value: n,
                    previous: r = a.last,
                    next: undefined,
                    removed: false
                };
                if (!a.first) {
                    a.first = i;
                }
                if (r) {
                    r.next = i;
                }
                if (module33) {
                    a.size++;
                } else {
                    e.size++;
                }
                if (o !== "F") {
                    a.index[o] = i;
                }
            }
            return e;
        };
        var b = (e, t)=>{
            let n;
            const r = v(e);
            const o = module420_fastKey(t);
            if (o !== "F") {
                return r.index[o];
            }
            for(n = r.first; n; n = n.next){
                if (n.key === t) {
                    return n;
                }
            }
        };
        module493(f_prototype, {
            clear: function() {
                const e = v(this);
                for(let t = e.first; t;){
                    t.removed = true;
                    if (t.previous) {
                        t.previous = t.previous.next = undefined;
                    }
                    t = t.next;
                }
                e.first = e.last = undefined;
                e.index = module114(null);
                if (module33) {
                    e.size = 0;
                } else {
                    this.size = 0;
                }
            },
            delete: function(e) {
                const t = v(this);
                const n = b(this, e);
                if (n) {
                    const { next, previous } = n;
                    delete t.index[n.index];
                    n.removed = true;
                    if (previous) {
                        previous.next = next;
                    }
                    if (next) {
                        next.previous = previous;
                    }
                    if (t.first === n) {
                        t.first = next;
                    }
                    if (t.last === n) {
                        t.last = previous;
                    }
                    if (module33) {
                        t.size--;
                    } else {
                        this.size--;
                    }
                }
                return !!n;
            },
            forEach: function(e, _param_1) {
                for(let t, n = v(this), r = module142(e, _param_1); t = t ? t.next : n.first;){
                    r(t.value, t.key, this);
                    while(t && t.removed){
                        t = t.previous;
                    }
                }
            },
            has: function(e) {
                return !!b(this, e);
            }
        });
        module493(f_prototype, AS_ENTRIES ? {
            get: function(e) {
                const t = b(this, e);
                return t && t.value;
            },
            set: function(e, t) {
                return y(this, e === 0 ? 0 : e, t);
            }
        } : {
            add: function(e) {
                return y(this, e = e === 0 ? 0 : e, e);
            }
        });
        if (module33) {
            module113(f_prototype, "size", {
                configurable: true,
                get: function() {
                    return v(this).size;
                }
            });
        }
        return f;
    },
    setStrong: function(e, t, n) {
        const r = `${t} Iterator`;
        const o = getterFor(t);
        const a = getterFor(r);
        module289(e, t, function(target, kind) {
            set(this, {
                type: r,
                target,
                state: o(target),
                kind,
                last: undefined
            });
        }, function() {
            const e = a(this);
            const e_kind = e.kind;
            for(var n = e.last; n && n.removed;){
                n = n.previous;
            }
            if (e.target && (e.last = n = n ? n.next : e.state.first)) {
                return module272(e_kind === "keys" ? n.key : e_kind === "values" ? n.value : [
                    n.key,
                    n.value
                ], false);
            }
            e.target = undefined;
            return module272(undefined, true);
        }, n ? "entries" : "values", !n, true);
        module269(t);
    }
};
