import { CircularList } from "./module-5734.js";
import { EventEmitter } from "./module-965.js";
import { BufferLine } from "./module-1464.js";
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
export const DEFAULT_ATTR = 131840;
export const CHAR_DATA_ATTR_INDEX = 0;
export const CHAR_DATA_CHAR_INDEX = 1;
export const CHAR_DATA_WIDTH_INDEX = 2;
export const CHAR_DATA_CODE_INDEX = 3;
export const MAX_BUFFER_SIZE = 4294967295;
export const NULL_CELL_CHAR = " ";
export const NULL_CELL_WIDTH = 1;
export const NULL_CELL_CODE = 32;
export class Buffer {
    constructor(e, t){
        this._terminal = e;
        this._hasScrollback = t;
        this.markers = [];
        this.clear();
    }
    get hasScrollback() {
        return this._hasScrollback && this.lines.maxLength > this._terminal.rows;
    }
    get isCursorInViewport() {
        const e = this.ybase + this.y - this.ydisp;
        return e >= 0 && e < this._terminal.rows;
    }
    _getCorrectBufferLength(e) {
        if (!this._hasScrollback) {
            return e;
        }
        const i = e + this._terminal.options.scrollback;
        if (i > MAX_BUFFER_SIZE) {
            return MAX_BUFFER_SIZE;
        }
        return i;
    }
    fillViewportRows() {
        if (this.lines.length === 0) {
            for(let e = this._terminal.rows; e--;){
                this.lines.push(BufferLine.blankLine(this._terminal.cols, DEFAULT_ATTR));
            }
        }
    }
    clear() {
        this.ydisp = 0;
        this.ybase = 0;
        this.y = 0;
        this.x = 0;
        this.lines = new CircularList(this._getCorrectBufferLength(this._terminal.rows));
        this.scrollTop = 0;
        this.scrollBottom = this._terminal.rows - 1;
        this.setupTabStops();
    }
    resize(e, i) {
        const r = this._getCorrectBufferLength(i);
        if (r > this.lines.maxLength) {
            this.lines.maxLength = r;
        }
        if (this.lines.length > 0) {
            if (this._terminal.cols < e) {
                const n = [
                    DEFAULT_ATTR,
                    NULL_CELL_CHAR,
                    NULL_CELL_WIDTH,
                    NULL_CELL_CODE
                ];
                for(let s = 0; s < this.lines.length; s++){
                    while(this.lines.get(s).length < e){
                        this.lines.get(s).push(n);
                    }
                }
            }
            let o = 0;
            if (this._terminal.rows < i) {
                for(var l = this._terminal.rows; l < i; l++){
                    if (this.lines.length < i + this.ybase) {
                        if (this.ybase > 0 && this.lines.length <= this.ybase + this.y + o + 1) {
                            this.ybase--;
                            o++;
                            if (this.ydisp > 0) {
                                this.ydisp--;
                            }
                        } else {
                            this.lines.push(BufferLine.blankLine(e, DEFAULT_ATTR));
                        }
                    }
                }
            } else {
                for(l = this._terminal.rows; l > i; l--){
                    if (this.lines.length > i + this.ybase) {
                        if (this.lines.length > this.ybase + this.y + 1) {
                            this.lines.pop();
                        } else {
                            this.ybase++;
                            this.ydisp++;
                        }
                    }
                }
            }
            if (r < this.lines.maxLength) {
                const h = this.lines.length - r;
                if (h > 0) {
                    this.lines.trimStart(h);
                    this.ybase = Math.max(this.ybase - h, 0);
                    this.ydisp = Math.max(this.ydisp - h, 0);
                }
                this.lines.maxLength = r;
            }
            this.x = Math.min(this.x, e - 1);
            this.y = Math.min(this.y, i - 1);
            if (o) {
                this.y += o;
            }
            this.savedY = Math.min(this.savedY, i - 1);
            this.savedX = Math.min(this.savedX, e - 1);
            this.scrollTop = 0;
        }
        this.scrollBottom = i - 1;
    }
    stringIndexToBufferIndex(e, i) {
        while(i){
            for(let r = this.lines.get(e), n = 0; n < r.length; ++n){
                if ((i -= r.get(n)[CHAR_DATA_CHAR_INDEX].length) < 0) {
                    return [
                        e,
                        n
                    ];
                }
            }
            e++;
        }
        return [
            e,
            0
        ];
    }
    translateBufferLineToString(e, i, r = 0, n = null) {
        let s = "";
        const o = this.lines.get(e);
        if (!o) {
            return "";
        }
        let a = r;
        if (n === null) {
            n = o.length;
        }
        let l = n;
        for(let h = 0; h < o.length; h++){
            const c = o.get(h);
            s += c[CHAR_DATA_CHAR_INDEX];
            if (c[CHAR_DATA_WIDTH_INDEX] === 0) {
                if (r >= h) {
                    a--;
                }
                if (n > h) {
                    l--;
                }
            } else if (c[CHAR_DATA_CHAR_INDEX].length > 1) {
                if (r > h) {
                    a += c[CHAR_DATA_CHAR_INDEX].length - 1;
                }
                if (n > h) {
                    l += c[CHAR_DATA_CHAR_INDEX].length - 1;
                }
            }
        }
        if (i) {
            const u = s.search(/\s+$/);
            if (u !== -1) {
                l = Math.min(l, u);
            }
            if (l <= a) {
                return "";
            }
        }
        return s.substring(a, l);
    }
    getWrappedRangeForLine(e) {
        for(var first = e, last = e; first > 0 && this.lines.get(first).isWrapped;){
            first--;
        }
        while(last + 1 < this.lines.length && this.lines.get(last + 1).isWrapped){
            last++;
        }
        return {
            first,
            last
        };
    }
    setupTabStops(e) {
        for(e != null ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._terminal.cols; e += this._terminal.options.tabStopWidth){
            this.tabs[e] = true;
        }
    }
    prevStop(e) {
        for(e == null && (e = this.x); !this.tabs[--e] && e > 0;);
        if (e >= this._terminal.cols) {
            return this._terminal.cols - 1;
        }
        if (e < 0) {
            return 0;
        }
        return e;
    }
    nextStop(e) {
        for(e == null && (e = this.x); !this.tabs[++e] && e < this._terminal.cols;);
        if (e >= this._terminal.cols) {
            return this._terminal.cols - 1;
        }
        if (e < 0) {
            return 0;
        }
        return e;
    }
    addMarker(e) {
        const _this = this;
        const i = new Marker(e);
        this.markers.push(i);
        i.register(this.lines.addDisposableListener("trim", function(e) {
            i.line -= e;
            if (i.line < 0) {
                i.dispose();
            }
        }));
        i.register(i.addDisposableListener("dispose", function() {
            return _this._removeMarker(i);
        }));
        return i;
    }
    _removeMarker(e) {
        this.markers.splice(this.markers.indexOf(e), 1);
    }
    iterator(e, t, i, r, n) {
        return new BufferStringIterator(this, e, t, i, r, n);
    }
}
export const Marker = ((EventEmitter_1)=>{
    function t(i) {
        const r = EventEmitter_1.call(this) || this;
        r.line = i;
        r._id = t._nextId++;
        r.isDisposed = false;
        return r;
    }
    n(t, EventEmitter_1);
    Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.dispose = function() {
        if (!this.isDisposed) {
            this.isDisposed = true;
            this.emit("dispose");
            EventEmitter_1.prototype.dispose.call(this);
        }
    };
    t._nextId = 1;
    return t;
})(EventEmitter);
export class BufferStringIterator {
    constructor(e, t, i = 0, r = e.lines.length, n = 0, s = 0){
        this._buffer = e;
        this._trimRight = t;
        this._startIndex = i;
        this._endIndex = r;
        this._startOverscan = n;
        this._endOverscan = s;
        if (this._startIndex < 0) {
            this._startIndex = 0;
        }
        if (this._endIndex > this._buffer.lines.length) {
            this._endIndex = this._buffer.lines.length;
        }
        this._current = this._startIndex;
    }
    hasNext() {
        return this._current < this._endIndex;
    }
    next() {
        const range = this._buffer.getWrappedRangeForLine(this._current);
        if (range.first < this._startIndex - this._startOverscan) {
            range.first = this._startIndex - this._startOverscan;
        }
        if (range.last > this._endIndex + this._endOverscan) {
            range.last = this._endIndex + this._endOverscan;
        }
        range.first = Math.max(range.first, 0);
        range.last = Math.min(range.last, this._buffer.lines.length);
        let content = "";
        for(let i = range.first; i <= range.last; ++i){
            content += this._buffer.translateBufferLineToString(i, !!this._trimRight && i === range.last);
        }
        this._current = range.last + 1;
        return {
            range,
            content
        };
    }
}
