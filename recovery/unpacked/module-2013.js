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
export const ScreenDprMonitor = ((Disposable_1)=>{
    function t() {
        return Disposable_1 !== null && Disposable_1.apply(this, arguments) || this;
    }
    n(t, Disposable_1);
    t.prototype.setListener = function(e) {
        const _this = this;
        if (this._listener) {
            this.clearListener();
        }
        this._listener = e;
        this._outerListener = function() {
            _this._listener(window.devicePixelRatio, _this._currentDevicePixelRatio);
            _this._updateDpr();
        };
        this._updateDpr();
    };
    t.prototype.dispose = function() {
        Disposable_1.prototype.dispose.call(this);
        this.clearListener();
    };
    t.prototype._updateDpr = function() {
        if (this._resolutionMediaMatchList) {
            this._resolutionMediaMatchList.removeListener(this._outerListener);
        }
        this._currentDevicePixelRatio = window.devicePixelRatio;
        this._resolutionMediaMatchList = window.matchMedia(`screen and (resolution: ${window.devicePixelRatio}dppx)`);
        this._resolutionMediaMatchList.addListener(this._outerListener);
    };
    t.prototype.clearListener = function() {
        if (this._listener) {
            this._resolutionMediaMatchList.removeListener(this._outerListener);
            this._listener = null;
            this._outerListener = null;
        }
    };
    return t;
})(Disposable);
