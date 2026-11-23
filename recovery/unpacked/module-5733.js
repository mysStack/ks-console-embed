import { Buffer } from "./module-923.js";
import { EventEmitter } from "./module-965.js";
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
export const BufferSet = ((EventEmitter_1)=>{
    function t(t) {
        const i = EventEmitter_1.call(this) || this;
        i._terminal = t;
        i._normal = new Buffer(i._terminal, true);
        i._normal.fillViewportRows();
        i._alt = new Buffer(i._terminal, false);
        i._activeBuffer = i._normal;
        i.setupTabStops();
        return i;
    }
    n(t, EventEmitter_1);
    Object.defineProperty(t.prototype, "alt", {
        get: function() {
            return this._alt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(t.prototype, "active", {
        get: function() {
            return this._activeBuffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(t.prototype, "normal", {
        get: function() {
            return this._normal;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.activateNormalBuffer = function() {
        if (this._activeBuffer !== this._normal) {
            this._alt.clear();
            this._activeBuffer = this._normal;
            this.emit("activate", {
                activeBuffer: this._normal,
                inactiveBuffer: this._alt
            });
        }
    };
    t.prototype.activateAltBuffer = function() {
        if (this._activeBuffer !== this._alt) {
            this._alt.fillViewportRows();
            this._activeBuffer = this._alt;
            this.emit("activate", {
                activeBuffer: this._alt,
                inactiveBuffer: this._normal
            });
        }
    };
    t.prototype.resize = function(e, t) {
        this._normal.resize(e, t);
        this._alt.resize(e, t);
    };
    t.prototype.setupTabStops = function(e) {
        this._normal.setupTabStops(e);
        this._alt.setupTabStops(e);
    };
    return t;
})(EventEmitter);
