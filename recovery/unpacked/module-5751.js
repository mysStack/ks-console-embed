import { BaseRenderLayer } from "./module-1256.js";
import { INVERTED_DEFAULT_COLOR } from "./module-1146.js";
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
export const LinkRenderLayer = ((BaseRenderLayer_1)=>{
    function t(t, i, r, n) {
        const s = BaseRenderLayer_1.call(this, t, "link", i, true, r) || this;
        s._state = null;
        n.linkifier.on("linkhover", function(e) {
            return s._onLinkHover(e);
        });
        n.linkifier.on("linkleave", function(e) {
            return s._onLinkLeave(e);
        });
        return s;
    }
    n(t, BaseRenderLayer_1);
    t.prototype.resize = function(t, i) {
        BaseRenderLayer_1.prototype.resize.call(this, t, i);
        this._state = null;
    };
    t.prototype.reset = function(e) {
        this._clearCurrentLink();
    };
    t.prototype._clearCurrentLink = function() {
        if (this._state) {
            this.clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
            const e = this._state.y2 - this._state.y1 - 1;
            if (e > 0) {
                this.clearCells(0, this._state.y1 + 1, this._state.cols, e);
            }
            this.clearCells(0, this._state.y2, this._state.x2, 1);
            this._state = null;
        }
    };
    t.prototype._onLinkHover = function(e) {
        if (e.fg === INVERTED_DEFAULT_COLOR) {
            this._ctx.fillStyle = this._colors.background.css;
        } else if (e.fg < 256) {
            this._ctx.fillStyle = this._colors.ansi[e.fg].css;
        } else {
            this._ctx.fillStyle = this._colors.foreground.css;
        }
        if (e.y1 === e.y2) {
            this.fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
        } else {
            this.fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
            for(let t = e.y1 + 1; t < e.y2; t++){
                this.fillBottomLineAtCells(0, t, e.cols);
            }
            this.fillBottomLineAtCells(0, e.y2, e.x2);
        }
        this._state = e;
    };
    t.prototype._onLinkLeave = function(e) {
        this._clearCurrentLink();
    };
    return t;
})(BaseRenderLayer);
