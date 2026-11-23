import { BaseRenderLayer } from "./module-1256.js";
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
export const SelectionRenderLayer = ((BaseRenderLayer_1)=>{
    function t(t, i, r) {
        const n = BaseRenderLayer_1.call(this, t, "selection", i, true, r) || this;
        n._clearState();
        return n;
    }
    n(t, BaseRenderLayer_1);
    t.prototype._clearState = function() {
        this._state = {
            start: null,
            end: null,
            columnSelectMode: null,
            ydisp: null
        };
    };
    t.prototype.resize = function(t, i) {
        BaseRenderLayer_1.prototype.resize.call(this, t, i);
        this._clearState();
    };
    t.prototype.reset = function(e) {
        if (this._state.start && this._state.end) {
            this._clearState();
            this.clearAll();
        }
    };
    t.prototype.onSelectionChanged = function(e, t, i, r) {
        if (this._didStateChange(t, i, r, e.buffer.ydisp) && (this.clearAll(), t && i)) {
            const n = t[1] - e.buffer.ydisp;
            const s = i[1] - e.buffer.ydisp;
            const o = Math.max(n, 0);
            const a = Math.min(s, e.rows - 1);
            if (!(o >= e.rows || a < 0)) {
                this._ctx.fillStyle = this._colors.selection.css;
                if (r) {
                    var l = t[0];
                    const h = i[0] - l;
                    const c = a - o + 1;
                    this.fillCells(l, o, h, c);
                } else {
                    l = n === o ? t[0] : 0;
                    const u = o === a ? i[0] : e.cols;
                    this.fillCells(l, o, u - l, 1);
                    const _ = Math.max(a - o - 1, 0);
                    this.fillCells(0, o + 1, e.cols, _);
                    if (o !== a) {
                        const f = s === a ? i[0] : e.cols;
                        this.fillCells(0, a, f, 1);
                    }
                }
                this._state.start = [
                    t[0],
                    t[1]
                ];
                this._state.end = [
                    i[0],
                    i[1]
                ];
                this._state.columnSelectMode = r;
                this._state.ydisp = e.buffer.ydisp;
            }
        }
    };
    t.prototype._didStateChange = function(e, t, i, r) {
        return !this._areCoordinatesEqual(e, this._state.start) || !this._areCoordinatesEqual(t, this._state.end) || i !== this._state.columnSelectMode || r !== this._state.ydisp;
    };
    t.prototype._areCoordinatesEqual = function(e, t) {
        return !(!e || !t) && e[0] === t[0] && e[1] === t[1];
    };
    return t;
})(BaseRenderLayer);
