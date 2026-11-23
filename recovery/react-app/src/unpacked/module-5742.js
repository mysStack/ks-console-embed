import { CHAR_DATA_ATTR_INDEX, CHAR_DATA_CHAR_INDEX, CHAR_DATA_CODE_INDEX, CHAR_DATA_WIDTH_INDEX, NULL_CELL_CODE } from "unpacked/module-923.js";
import { INVERTED_DEFAULT_COLOR } from "unpacked/module-1146.js";
import { GridCache } from "unpacked/module-5743.js";
import { BaseRenderLayer } from "unpacked/module-1256.js";
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
export const TextRenderLayer = ((BaseRenderLayer_1)=>{
    function t(t, i, r, n, s) {
        const o = BaseRenderLayer_1.call(this, t, "text", i, s, r) || this;
        o._characterOverlapCache = {};
        o._state = new GridCache;
        o._characterJoinerRegistry = n;
        return o;
    }
    n(t, BaseRenderLayer_1);
    t.prototype.resize = function(t, i) {
        BaseRenderLayer_1.prototype.resize.call(this, t, i);
        const r = this._getFont(t, false, false);
        if (!(this._characterWidth === i.scaledCharWidth && this._characterFont === r)) {
            this._characterWidth = i.scaledCharWidth;
            this._characterFont = r;
            this._characterOverlapCache = {};
        }
        this._state.clear();
        this._state.resize(t.cols, t.rows);
    };
    t.prototype.reset = function(e) {
        this._state.clear();
        this.clearAll();
    };
    t.prototype._forEachCell = function(e, t, i, r, n) {
        for(let a = t; a <= i; a++){
            const l = a + e.buffer.ydisp;
            const h = e.buffer.lines.get(l);
            const c = r ? r.getJoinedCharacters(l) : [];
            for(let u = 0; u < e.cols; u++){
                const _ = h.get(u);
                let f = _[CHAR_DATA_CODE_INDEX];
                let d = _[CHAR_DATA_CHAR_INDEX];
                const p = _[CHAR_DATA_ATTR_INDEX];
                let m = _[CHAR_DATA_WIDTH_INDEX];
                let y = false;
                let C = u;
                if (m !== 0) {
                    if (c.length > 0 && u === c[0][0]) {
                        y = true;
                        const g = c.shift();
                        d = e.buffer.translateBufferLineToString(l, true, g[0], g[1]);
                        m = g[1] - g[0];
                        f = Infinity;
                        C = g[1] - 1;
                    }
                    if (!y && this._isOverlapping(_) && C < h.length - 1 && h.get(C + 1)[CHAR_DATA_CODE_INDEX] === NULL_CELL_CODE) {
                        m = 2;
                    }
                    const v = p >> 18;
                    let b = 511 & p;
                    let w = p >> 9 & 511;
                    if (8 & v) {
                        const S = b;
                        b = w;
                        if ((w = S) === 256) {
                            w = INVERTED_DEFAULT_COLOR;
                        }
                        if (b === 257) {
                            b = INVERTED_DEFAULT_COLOR;
                        }
                    }
                    n(f, d, m, u, a, w, b, v);
                    u = C;
                }
            }
        }
    };
    t.prototype._drawBackground = function(e, t, i) {
        const _this = this;
        const _ctx = this._ctx;
        const e_cols = e.cols;
        let a = 0;
        let l = 0;
        let h = null;
        _ctx.save();
        this._forEachCell(e, t, i, null, function(e, t, i, c, u, _, f, d) {
            let p = null;
            if (f === INVERTED_DEFAULT_COLOR) {
                p = _this._colors.foreground.css;
            } else if (f < 256) {
                p = _this._colors.ansi[f].css;
            }
            if (h === null) {
                a = c;
                l = u;
            }
            if (u !== l) {
                _ctx.fillStyle = h;
                _this.fillCells(a, l, e_cols - a, 1);
                a = c;
                l = u;
            } else if (h !== p) {
                _ctx.fillStyle = h;
                _this.fillCells(a, l, c - a, 1);
                a = c;
                l = u;
            }
            h = p;
        });
        if (h !== null) {
            _ctx.fillStyle = h;
            this.fillCells(a, l, e_cols - a, 1);
        }
        _ctx.restore();
    };
    t.prototype._drawForeground = function(e, t, i) {
        const _this = this;
        this._forEachCell(e, t, i, this._characterJoinerRegistry, function(t, i, n, s, a, l, h, c) {
            if (!(16 & c)) {
                if (2 & c) {
                    _this._ctx.save();
                    if (l === INVERTED_DEFAULT_COLOR) {
                        _this._ctx.fillStyle = _this._colors.background.css;
                    } else {
                        _this._ctx.fillStyle = l < 256 ? _this._colors.ansi[l].css : _this._colors.foreground.css;
                    }
                    _this.fillBottomLineAtCells(s, a, n);
                    _this._ctx.restore();
                }
                _this.drawChars(e, i, t, n, s, a, l, h, !!(1 & c), !!(32 & c), !!(64 & c));
            }
        });
    };
    t.prototype.onGridChanged = function(e, t, i) {
        if (this._state.cache.length !== 0) {
            if (this._charAtlas) {
                this._charAtlas.beginFrame();
            }
            this.clearCells(0, t, e.cols, i - t + 1);
            this._drawBackground(e, t, i);
            this._drawForeground(e, t, i);
        }
    };
    t.prototype.onOptionsChanged = function(e) {
        this.setTransparency(e, e.options.allowTransparency);
    };
    t.prototype._isOverlapping = function(e) {
        if (e[CHAR_DATA_WIDTH_INDEX] !== 1) {
            return false;
        }
        if (e[CHAR_DATA_CODE_INDEX] < 256) {
            return false;
        }
        const t = e[CHAR_DATA_CHAR_INDEX];
        if (this._characterOverlapCache.hasOwnProperty(t)) {
            return this._characterOverlapCache[t];
        }
        this._ctx.save();
        this._ctx.font = this._characterFont;
        const i = Math.floor(this._ctx.measureText(t).width) > this._characterWidth;
        this._ctx.restore();
        this._characterOverlapCache[t] = i;
        return i;
    };
    return t;
})(BaseRenderLayer);
