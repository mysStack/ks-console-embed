import { DIM_OPACITY } from "./module-1146.js";
import { CHAR_ATLAS_CELL_SPACING } from "./module-2012.js";
import { generateStaticCharAtlasTexture } from "./module-2011.js";
import defaultExport from "./module-1465.js";
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
const l = ((defaultExport_1)=>{
    function t(t, i) {
        const r = defaultExport_1.call(this) || this;
        r._document = t;
        r._config = i;
        r._canvasFactory = function(e, t) {
            const canvasElement = r._document.createElement("canvas");
            canvasElement.width = e;
            canvasElement.height = t;
            return canvasElement;
        };
        return r;
    }
    n(t, defaultExport_1);
    t.prototype._doWarmUp = function() {
        const _this = this;
        const t = generateStaticCharAtlasTexture(window, this._canvasFactory, this._config);
        if (t instanceof HTMLCanvasElement) {
            this._texture = t;
        } else {
            t.then((t)=>{
                _this._texture = t;
            });
        }
    };
    t.prototype._isCached = function(e, t) {
        const i = e.code < 256;
        const r = e.fg < 16;
        const n = e.fg >= 256;
        const s = e.bg >= 256;
        return i && (r || n) && s && !e.italic;
    };
    t.prototype.draw = function(e, t, i, r) {
        if (this._texture === null || this._texture === undefined) {
            return false;
        }
        let n = 0;
        if (t.fg < 256) {
            n = 2 + t.fg + (t.bold ? 16 : 0);
        } else if (t.bold) {
            n = 1;
        }
        if (!this._isCached(t, n)) {
            return false;
        }
        e.save();
        const a = this._config.scaledCharWidth + CHAR_ATLAS_CELL_SPACING;
        const l = this._config.scaledCharHeight + CHAR_ATLAS_CELL_SPACING;
        if (t.dim) {
            e.globalAlpha = DIM_OPACITY;
        }
        e.drawImage(this._texture, t.code * a, n * l, a, this._config.scaledCharHeight, i, r, a, this._config.scaledCharHeight);
        e.restore();
        return true;
    };
    return t;
})(defaultExport);
export default l;
