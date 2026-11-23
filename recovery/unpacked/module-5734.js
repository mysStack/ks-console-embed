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
export const CircularList = ((EventEmitter_1)=>{
    function t(t) {
        const i = EventEmitter_1.call(this) || this;
        i._maxLength = t;
        i._array = new Array(i._maxLength);
        i._startIndex = 0;
        i._length = 0;
        return i;
    }
    n(t, EventEmitter_1);
    Object.defineProperty(t.prototype, "maxLength", {
        get: function() {
            return this._maxLength;
        },
        set: function(e) {
            if (this._maxLength !== e) {
                const t = new Array(e);
                for(let i = 0; i < Math.min(e, this.length); i++){
                    t[i] = this._array[this._getCyclicIndex(i)];
                }
                this._array = t;
                this._maxLength = e;
                this._startIndex = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this._length;
        },
        set: function(e) {
            if (e > this._length) {
                for(let t = this._length; t < e; t++){
                    this._array[t] = undefined;
                }
            }
            this._length = e;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.get = function(e) {
        return this._array[this._getCyclicIndex(e)];
    };
    t.prototype.set = function(e, t) {
        this._array[this._getCyclicIndex(e)] = t;
    };
    t.prototype.push = function(e) {
        this._array[this._getCyclicIndex(this._length)] = e;
        if (this._length === this._maxLength) {
            this._startIndex++;
            if (this._startIndex === this._maxLength) {
                this._startIndex = 0;
            }
            this.emit("trim", 1);
        } else {
            this._length++;
        }
    };
    t.prototype.pop = function() {
        return this._array[this._getCyclicIndex(this._length-- - 1)];
    };
    t.prototype.splice = function(e, t, ...i) {
        if (t) {
            for(var n = e; n < this._length - t; n++){
                this._array[this._getCyclicIndex(n)] = this._array[this._getCyclicIndex(n + t)];
            }
            this._length -= t;
        }
        if (i && i.length) {
            for(n = this._length - 1; n >= e; n--){
                this._array[this._getCyclicIndex(n + i.length)] = this._array[this._getCyclicIndex(n)];
            }
            for(n = 0; n < i.length; n++){
                this._array[this._getCyclicIndex(e + n)] = i[n];
            }
            if (this._length + i.length > this.maxLength) {
                const s = this._length + i.length - this.maxLength;
                this._startIndex += s;
                this._length = this.maxLength;
                this.emit("trim", s);
            } else {
                this._length += i.length;
            }
        }
    };
    t.prototype.trimStart = function(e) {
        if (e > this._length) {
            e = this._length;
        }
        this._startIndex += e;
        this._length -= e;
        this.emit("trim", e);
    };
    t.prototype.shiftElements = function(e, t, i) {
        if (!(t <= 0)) {
            if (e < 0 || e >= this._length) {
                throw new Error("start argument out of range");
            }
            if (e + i < 0) {
                throw new Error("Cannot shift elements in list beyond index 0");
            }
            if (i > 0) {
                for(var r = t - 1; r >= 0; r--){
                    this.set(e + r + i, this.get(e + r));
                }
                const n = e + t + i - this._length;
                if (n > 0) {
                    for(this._length += n; this._length > this.maxLength;){
                        this._length--;
                        this._startIndex++;
                        this.emit("trim", 1);
                    }
                }
            } else {
                for(r = 0; r < t; r++){
                    this.set(e + r + i, this.get(e + r));
                }
            }
        }
    };
    t.prototype._getCyclicIndex = function(e) {
        return (this._startIndex + e) % this.maxLength;
    };
    return t;
})(EventEmitter);
