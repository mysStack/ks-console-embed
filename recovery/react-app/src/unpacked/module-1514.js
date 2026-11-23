"use strict";
require.r(exports);
(function(e) {
    const n = function() {
        if (typeof Map !== "undefined") {
            return Map;
        }
        function e(__entries__, t) {
            let n = -1;
            __entries__.some((e, r)=>e[0] === t && (n = r, true));
            return n;
        }
        return class t {
            constructor(){
                this.__entries__ = [];
            }
            get size() {
                return this.__entries__.length;
            }
            get(t) {
                const n = e(this.__entries__, t);
                const r = this.__entries__[n];
                return r && r[1];
            }
            set(t, n) {
                const r = e(this.__entries__, t);
                if (~r) {
                    this.__entries__[r][1] = n;
                } else {
                    this.__entries__.push([
                        t,
                        n
                    ]);
                }
            }
            delete(t) {
                const __entries__ = this.__entries__;
                const r = e(__entries__, t);
                if (~r) {
                    __entries__.splice(r, 1);
                }
            }
            has(t) {
                return !!~e(this.__entries__, t);
            }
            clear() {
                this.__entries__.splice(0);
            }
            forEach(e, t = null) {
                for (const o of this.__entries__){
                    e.call(t, o[1], o[0]);
                }
            }
        };
    }();
    const r = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
    const o = e !== undefined && e.Math === Math ? e : typeof self !== "undefined" && self.Math === Math ? self : typeof window !== "undefined" && window.Math === Math ? window : Function("return this")();
    const i = typeof requestAnimationFrame === "function" ? requestAnimationFrame.bind(o) : (e)=>setTimeout(()=>e(Date.now()), 1000 / 60);
    const a = [
        "top",
        "right",
        "bottom",
        "left",
        "width",
        "height",
        "size",
        "weight"
    ];
    const l = typeof MutationObserver !== "undefined";
    const u = function() {
        class e {
            constructor(){
                this.connected_ = false;
                this.mutationEventsAdded_ = false;
                this.mutationsObserver_ = null;
                this.observers_ = [];
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
                this.refresh = ((e, t)=>{
                    let n = false;
                    let r = false;
                    let o = 0;
                    function a() {
                        if (n) {
                            n = false;
                            e();
                        }
                        if (r) {
                            u();
                        }
                    }
                    function l() {
                        i(a);
                    }
                    function u() {
                        const e = Date.now();
                        if (n) {
                            if (e - o < 2) {
                                return;
                            }
                            r = true;
                        } else {
                            n = true;
                            r = false;
                            setTimeout(l, 20);
                        }
                        o = e;
                    }
                    return u;
                })(this.refresh.bind(this));
            }
            addObserver(e) {
                if (!~this.observers_.indexOf(e)) {
                    this.observers_.push(e);
                }
                if (!this.connected_) {
                    this.connect_();
                }
            }
            removeObserver(e) {
                const observers_ = this.observers_;
                const n = observers_.indexOf(e);
                if (~n) {
                    observers_.splice(n, 1);
                }
                if (!observers_.length && this.connected_) {
                    this.disconnect_();
                }
            }
            refresh() {
                if (this.updateObservers_()) {
                    this.refresh();
                }
            }
            updateObservers_() {
                const e = this.observers_.filter((e)=>{
                    e.gatherActive();
                    return e.hasActive();
                });
                e.forEach((e)=>e.broadcastActive());
                return e.length > 0;
            }
            connect_() {
                if (r && !this.connected_) {
                    document.addEventListener("transitionend", this.onTransitionEnd_);
                    window.addEventListener("resize", this.refresh);
                    if (l) {
                        this.mutationsObserver_ = new MutationObserver(this.refresh);
                        this.mutationsObserver_.observe(document, {
                            attributes: true,
                            childList: true,
                            characterData: true,
                            subtree: true
                        });
                    } else {
                        document.addEventListener("DOMSubtreeModified", this.refresh);
                        this.mutationEventsAdded_ = true;
                    }
                    this.connected_ = true;
                }
            }
            disconnect_() {
                if (r && this.connected_) {
                    document.removeEventListener("transitionend", this.onTransitionEnd_);
                    window.removeEventListener("resize", this.refresh);
                    if (this.mutationsObserver_) {
                        this.mutationsObserver_.disconnect();
                    }
                    if (this.mutationEventsAdded_) {
                        document.removeEventListener("DOMSubtreeModified", this.refresh);
                    }
                    this.mutationsObserver_ = null;
                    this.mutationEventsAdded_ = false;
                    this.connected_ = false;
                }
            }
            onTransitionEnd_({ propertyName = "" }) {
                if (a.some((e)=>!!~propertyName.indexOf(e))) {
                    this.refresh();
                }
            }
            static getInstance() {
                if (!this.instance_) {
                    this.instance_ = new e;
                }
                return this.instance_;
            }
        }
        e.instance_ = null;
        return e;
    }();
    const s = (e, t)=>{
        for (const o of Object.keys(t)){
            Object.defineProperty(e, o, {
                value: t[o],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }
        return e;
    };
    const c = (e)=>e && e.ownerDocument && e.ownerDocument.defaultView || o;
    const f = g(0, 0, 0, 0);
    function d(e) {
        return parseFloat(e) || 0;
    }
    function p(e, ...t_1) {
        return t_1.reduce((acc, item)=>acc + d(e[`border-${item}-width`]), 0);
    }
    const h = typeof SVGGraphicsElement !== "undefined" ? (e)=>e instanceof c(e).SVGGraphicsElement : (e)=>e instanceof c(e).SVGElement && typeof e.getBBox === "function";
    function v(target) {
        if (r) {
            if (h(target)) {
                return ((target_1)=>{
                    const t = target_1.getBBox();
                    return g(0, 0, t.width, t.height);
                })(target);
            }
            return ((target_1)=>{
                const { clientWidth, clientHeight } = target_1;
                if (!clientWidth && !clientHeight) {
                    return f;
                }
                const r = c(target_1).getComputedStyle(target_1);
                const o = ((e)=>{
                    const t = {};
                    for (const o of [
                        "top",
                        "right",
                        "bottom",
                        "left"
                    ]){
                        const i = e[`padding-${o}`];
                        t[o] = d(i);
                    }
                    return t;
                })(r);
                const i = o.left + o.right;
                const a = o.top + o.bottom;
                let l = d(r.width);
                let u = d(r.height);
                if (r.boxSizing === "border-box") {
                    if (Math.round(l + i) !== clientWidth) {
                        l -= p(r, "left", "right") + i;
                    }
                    if (Math.round(u + a) !== clientHeight) {
                        u -= p(r, "top", "bottom") + a;
                    }
                }
                if (!((e)=>e === c(e).document.documentElement)(target_1)) {
                    const s = Math.round(l + i) - clientWidth;
                    const h = Math.round(u + a) - clientHeight;
                    if (Math.abs(s) !== 1) {
                        l -= s;
                    }
                    if (Math.abs(h) !== 1) {
                        u -= h;
                    }
                }
                return g(o.left, o.top, l, u);
            })(target);
        }
        return f;
    }
    function g(x_1, y_1, width, height) {
        return {
            x: x_1,
            y: y_1,
            width,
            height
        };
    }
    class y {
        constructor(e){
            this.broadcastWidth = 0;
            this.broadcastHeight = 0;
            this.contentRect_ = g(0, 0, 0, 0);
            this.target = e;
        }
        isActive() {
            const e = v(this.target);
            this.contentRect_ = e;
            return e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
        }
        broadcastRect() {
            const contentRect_ = this.contentRect_;
            this.broadcastWidth = contentRect_.width;
            this.broadcastHeight = contentRect_.height;
            return contentRect_;
        }
    }
    const m = function(target, t) {
        let n;
        let r;
        let o;
        let width;
        let height;
        let l;
        let contentRect;
        r = (n = t).x;
        o = n.y;
        width = n.width;
        height = n.height;
        l = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
        contentRect = Object.create(l.prototype);
        s(contentRect, {
            x: r,
            y: o,
            width,
            height,
            top: o,
            right: r + width,
            bottom: height + o,
            left: r
        });
        s(this, {
            target,
            contentRect
        });
    };
    class b {
        constructor(e, t, r){
            this.activeObservations_ = [];
            this.observations_ = new n;
            if (typeof e !== "function") {
                throw new TypeError("The callback provided as parameter 1 is not a function.");
            }
            this.callback_ = e;
            this.controller_ = t;
            this.callbackCtx_ = r;
        }
        observe(e) {
            if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
            }
            if (typeof Element !== "undefined" && Element instanceof Object) {
                if (!(e instanceof c(e).Element)) {
                    throw new TypeError('parameter 1 is not of type "Element".');
                }
                const t = this.observations_;
                if (!t.has(e)) {
                    t.set(e, new y(e));
                    this.controller_.addObserver(this);
                    this.controller_.refresh();
                }
            }
        }
        unobserve(e) {
            if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
            }
            if (typeof Element !== "undefined" && Element instanceof Object) {
                if (!(e instanceof c(e).Element)) {
                    throw new TypeError('parameter 1 is not of type "Element".');
                }
                const t = this.observations_;
                if (t.has(e)) {
                    t.delete(e);
                    if (!t.size) {
                        this.controller_.removeObserver(this);
                    }
                }
            }
        }
        disconnect() {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
        }
        gatherActive() {
            const _this = this;
            this.clearActive();
            this.observations_.forEach((t)=>{
                if (t.isActive()) {
                    _this.activeObservations_.push(t);
                }
            });
        }
        broadcastActive() {
            if (this.hasActive()) {
                const e = this.callbackCtx_;
                const t = this.activeObservations_.map((e)=>new m(e.target, e.broadcastRect()));
                this.callback_.call(e, t, e);
                this.clearActive();
            }
        }
        clearActive() {
            this.activeObservations_.splice(0);
        }
        hasActive() {
            return this.activeObservations_.length > 0;
        }
    }
    const x = typeof WeakMap !== "undefined" ? new WeakMap : new n;
    const w = function e(t) {
        if (!(this instanceof e)) {
            throw new TypeError("Cannot call a class as a function.");
        }
        if (!arguments.length) {
            throw new TypeError("1 argument required, but only 0 present.");
        }
        const n = u.getInstance();
        const r = new b(t, n, this);
        x.set(this, r);
    };
    [
        "observe",
        "unobserve",
        "disconnect"
    ].forEach((e)=>{
        w.prototype[e] = function() {
            return x.get(this)[e](...arguments);
        };
    });
    const _ = o.ResizeObserver !== undefined ? o.ResizeObserver : w;
    exports.default = _;
}).call(this, require("./module-69.js").default);
