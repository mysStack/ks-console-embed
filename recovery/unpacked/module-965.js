import { Disposable } from "./module-1027.js";
let r;
const n = this && this.__extends || (r = function(e, t) {
    return (r = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for(const i in t){
            if (t.hasOwnProperty(i)) {
                e[i] = t[i];
            }
        }
    })(e, t);
}, (e, t)=>{
    function i() {
        this.constructor = e;
    }
    r(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i);
});
export const EventEmitter = ((Disposable_1)=>{
    function t() {
        const t = Disposable_1.call(this) || this;
        t._events = t._events || {};
        return t;
    }
    n(t, Disposable_1);
    t.prototype.on = function(e, t) {
        this._events[e] = this._events[e] || [];
        this._events[e].push(t);
    };
    t.prototype.addDisposableListener = function(e, t) {
        const _this = this;
        this.on(e, t);
        let r = false;
        return {
            dispose: function() {
                if (!r) {
                    _this.off(e, t);
                    r = true;
                }
            }
        };
    };
    t.prototype.off = function(e, t) {
        if (this._events[e]) {
            const i = this._events[e];
            for(let r = i.length; r--;){
                if (i[r] === t) {
                    return void i.splice(r, 1);
                }
            }
        }
    };
    t.prototype.removeAllListeners = function(e) {
        if (this._events[e]) {
            delete this._events[e];
        }
    };
    t.prototype.emit = function(e, ...t) {
        if (this._events[e]) {
            for(let r = this._events[e], n = 0; n < r.length; n++){
                r[n].apply(this, t);
            }
        }
    };
    t.prototype.listeners = function(e) {
        return this._events[e] || [];
    };
    t.prototype.dispose = function() {
        Disposable_1.prototype.dispose.call(this);
        this._events = {};
    };
    return t;
})(Disposable);
