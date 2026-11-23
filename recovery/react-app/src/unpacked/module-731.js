import module732 from "unpacked/module-732.js";
const o = Symbol("max");
const a = Symbol("length");
const i = Symbol("lengthCalculator");
const l = Symbol("allowStale");
const s = Symbol("maxAge");
const u = Symbol("dispose");
const c = Symbol("noDisposeOnSet");
const f = Symbol("lruList");
const d = Symbol("cache");
const p = Symbol("updateAgeOnGet");
const h = ()=>1;
const v = (e, t, n)=>{
    const r = e[d].get(t);
    if (r) {
        const t = r.value;
        if (m(e, t)) {
            y(e, r);
            if (!e[l]) {
                return;
            }
        } else {
            if (n) {
                if (e[p]) {
                    r.value.now = Date.now();
                }
                e[f].unshiftNode(r);
            }
        }
        return t.value;
    }
};
const m = (e, t)=>{
    if (!t || !t.maxAge && !e[s]) {
        return false;
    }
    const n = Date.now() - t.now;
    if (t.maxAge) {
        return n > t.maxAge;
    }
    return e[s] && n > e[s];
};
const g = (e)=>{
    if (e[a] > e[o]) {
        for(let t = e[f].tail; e[a] > e[o] && t !== null;){
            const n = t.prev;
            y(e, t);
            t = n;
        }
    }
};
const y = (e, t)=>{
    if (t) {
        const n = t.value;
        if (e[u]) {
            e[u](n.key, n.value);
        }
        e[a] -= n.length;
        e[d].delete(n.key);
        e[f].removeNode(t);
    }
};
class b {
    constructor(e, t, n, r, o){
        this.key = e;
        this.value = t;
        this.length = n;
        this.now = r;
        this.maxAge = o || 0;
    }
}
const C = (e, t, n, r)=>{
    let n_value = n.value;
    if (m(e, n_value)) {
        y(e, n);
        if (!e[l]) {
            n_value = undefined;
        }
    }
    if (n_value) {
        t.call(r, n_value.value, n_value.key, e);
    }
};
export default class {
    constructor(max){
        if (typeof max === "number") {
            max = {
                max
            };
        }
        if (!max) {
            max = {};
        }
        if (max.max && (typeof max.max !== "number" || max.max < 0)) {
            throw new TypeError("max must be a non-negative number");
        }
        this[o] = max.max || Infinity;
        const t = max.length || h;
        this[i] = typeof t !== "function" ? h : t;
        this[l] = max.stale || false;
        if (max.maxAge && typeof max.maxAge !== "number") {
            throw new TypeError("maxAge must be a number");
        }
        this[s] = max.maxAge || 0;
        this[u] = max.dispose;
        this[c] = max.noDisposeOnSet || false;
        this[p] = max.updateAgeOnGet || false;
        this.reset();
    }
    set max(e) {
        if (typeof e !== "number" || e < 0) {
            throw new TypeError("max must be a non-negative number");
        }
        this[o] = e || Infinity;
        g(this);
    }
    get max() {
        return this[o];
    }
    set allowStale(e) {
        this[l] = !!e;
    }
    get allowStale() {
        return this[l];
    }
    set maxAge(e) {
        if (typeof e !== "number") {
            throw new TypeError("maxAge must be a non-negative number");
        }
        this[s] = e;
        g(this);
    }
    get maxAge() {
        return this[s];
    }
    set lengthCalculator(e) {
        if (typeof e !== "function") {
            e = h;
        }
        if (e !== this[i]) {
            this[i] = e;
            this[a] = 0;
            this[f].forEach((e)=>{
                e.length = this[i](e.value, e.key);
                this[a] += e.length;
            });
        }
        g(this);
    }
    get lengthCalculator() {
        return this[i];
    }
    get length() {
        return this[a];
    }
    get itemCount() {
        return this[f].length;
    }
    rforEach(e, t) {
        t = t || this;
        for(let n = this[f].tail; n !== null;){
            const r = n.prev;
            C(this, e, n, t);
            n = r;
        }
    }
    forEach(e, t) {
        t = t || this;
        for(let n = this[f].head; n !== null;){
            const r = n.next;
            C(this, e, n, t);
            n = r;
        }
    }
    keys() {
        return this[f].toArray().map((e)=>e.key);
    }
    values() {
        return this[f].toArray().map((e)=>e.value);
    }
    reset() {
        if (this[u] && this[f] && this[f].length) {
            this[f].forEach((e)=>this[u](e.key, e.value));
        }
        this[d] = new Map;
        this[f] = new module732;
        this[a] = 0;
    }
    dump() {
        return this[f].map((e)=>!m(this, e) && {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }).toArray().filter((e)=>e);
    }
    dumpLru() {
        return this[f];
    }
    set(e, t, n) {
        if ((n = n || this[s]) && typeof n !== "number") {
            throw new TypeError("maxAge must be a number");
        }
        const r = n ? Date.now() : 0;
        const l = this[i](t, e);
        if (this[d].has(e)) {
            if (l > this[o]) {
                y(this, this[d].get(e));
                return false;
            }
            const i = this[d].get(e).value;
            if (this[u]) {
                if (!this[c]) {
                    this[u](e, i.value);
                }
            }
            i.now = r;
            i.maxAge = n;
            i.value = t;
            this[a] += l - i.length;
            i.length = l;
            this.get(e);
            g(this);
            return true;
        }
        const p = new b(e, t, l, r, n);
        if (p.length > this[o]) {
            if (this[u]) {
                this[u](e, t);
            }
            return false;
        }
        this[a] += p.length;
        this[f].unshift(p);
        this[d].set(e, this[f].head);
        g(this);
        return true;
    }
    has(e) {
        if (!this[d].has(e)) {
            return false;
        }
        const value = this[d].get(e).value;
        return !m(this, value);
    }
    get(e) {
        return v(this, e, true);
    }
    peek(e) {
        return v(this, e, false);
    }
    pop() {
        const tail = this[f].tail;
        if (tail) {
            y(this, tail);
            return tail.value;
        }
        return null;
    }
    del(e) {
        y(this, this[d].get(e));
    }
    load(e) {
        this.reset();
        const t = Date.now();
        for(let n = e.length - 1; n >= 0; n--){
            const r = e[n];
            const o = r.e || 0;
            if (o === 0) {
                this.set(r.k, r.v);
            } else {
                const e = o - t;
                if (e > 0) {
                    this.set(r.k, r.v, e);
                }
            }
        }
    }
    prune() {
        this[d].forEach((e, t)=>v(this, t, false));
    }
};
