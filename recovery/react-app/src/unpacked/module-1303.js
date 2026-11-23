class r {
    constructor(){
        this.__rules__ = [];
        this.__cache__ = null;
    }
    __find__(e) {
        for(let t = 0; t < this.__rules__.length; t++){
            if (this.__rules__[t].name === e) {
                return t;
            }
        }
        return -1;
    }
    __compile__() {
        const _this = this;
        const t = [
            ""
        ];
        _this.__rules__.forEach((e)=>{
            if (e.enabled) {
                e.alt.forEach((e)=>{
                    if (t.indexOf(e) < 0) {
                        t.push(e);
                    }
                });
            }
        });
        _this.__cache__ = {};
        t.forEach((t)=>{
            _this.__cache__[t] = [];
            _this.__rules__.forEach((n)=>{
                if (n.enabled) {
                    if (!(t && n.alt.indexOf(t) < 0)) {
                        _this.__cache__[t].push(n.fn);
                    }
                }
            });
        });
    }
    at(e, t, n) {
        const r = this.__find__(e);
        const o = n || {};
        if (r === -1) {
            throw new Error(`Parser rule not found: ${e}`);
        }
        this.__rules__[r].fn = t;
        this.__rules__[r].alt = o.alt || [];
        this.__cache__ = null;
    }
    before(e, t, n, r) {
        const o = this.__find__(e);
        const i = r || {};
        if (o === -1) {
            throw new Error(`Parser rule not found: ${e}`);
        }
        this.__rules__.splice(o, 0, {
            name: t,
            enabled: true,
            fn: n,
            alt: i.alt || []
        });
        this.__cache__ = null;
    }
    after(e, t, n, r) {
        const o = this.__find__(e);
        const i = r || {};
        if (o === -1) {
            throw new Error(`Parser rule not found: ${e}`);
        }
        this.__rules__.splice(o + 1, 0, {
            name: t,
            enabled: true,
            fn: n,
            alt: i.alt || []
        });
        this.__cache__ = null;
    }
    push(e, t, n) {
        const r = n || {};
        this.__rules__.push({
            name: e,
            enabled: true,
            fn: t,
            alt: r.alt || []
        });
        this.__cache__ = null;
    }
    enable(e, t) {
        if (!Array.isArray(e)) {
            e = [
                e
            ];
        }
        const n = [];
        e.forEach(function(e) {
            const r = this.__find__(e);
            if (r < 0) {
                if (t) {
                    return;
                }
                throw new Error(`Rules manager: invalid rule name ${e}`);
            }
            this.__rules__[r].enabled = true;
            n.push(e);
        }, this);
        this.__cache__ = null;
        return n;
    }
    enableOnly(e, t) {
        if (!Array.isArray(e)) {
            e = [
                e
            ];
        }
        this.__rules__.forEach((e)=>{
            e.enabled = false;
        });
        this.enable(e, t);
    }
    disable(e, t) {
        if (!Array.isArray(e)) {
            e = [
                e
            ];
        }
        const n = [];
        e.forEach(function(e) {
            const r = this.__find__(e);
            if (r < 0) {
                if (t) {
                    return;
                }
                throw new Error(`Rules manager: invalid rule name ${e}`);
            }
            this.__rules__[r].enabled = false;
            n.push(e);
        }, this);
        this.__cache__ = null;
        return n;
    }
    getRules(e) {
        if (this.__cache__ === null) {
            this.__compile__();
        }
        return this.__cache__[e] || [];
    }
}
export default r;
