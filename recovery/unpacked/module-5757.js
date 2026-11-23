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
export const CharMeasure = ((EventEmitter_1)=>{
    function t(t, i) {
        const r = EventEmitter_1.call(this) || this;
        r._document = t;
        r._parentElement = i;
        r._measureElement = r._document.createElement("span");
        r._measureElement.classList.add("xterm-char-measure-element");
        r._measureElement.textContent = "W";
        r._measureElement.setAttribute("aria-hidden", "true");
        r._parentElement.appendChild(r._measureElement);
        return r;
    }
    n(t, EventEmitter_1);
    Object.defineProperty(t.prototype, "width", {
        get: function() {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(t.prototype, "height", {
        get: function() {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.measure = function(e) {
        this._measureElement.style.fontFamily = e.fontFamily;
        this._measureElement.style.fontSize = `${e.fontSize}px`;
        const t = this._measureElement.getBoundingClientRect();
        if (t.width !== 0 && t.height !== 0) {
            if (!(this._width === t.width && this._height === t.height)) {
                this._width = t.width;
                this._height = Math.ceil(t.height);
                this.emit("charsizechanged");
            }
        }
    };
    return t;
})(EventEmitter);
