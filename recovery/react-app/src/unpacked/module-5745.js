import { DIM_OPACITY, INVERTED_DEFAULT_COLOR } from "unpacked/module-1146.js";
import module1465 from "unpacked/module-1465.js";
import { DEFAULT_ANSI_COLORS } from "unpacked/module-1257.js";
import { clearColor } from "unpacked/module-2011.js";
import module5746 from "unpacked/module-5746.js";
import { isFirefox, isSafari } from "unpacked/module-1147.js";
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
const u = {
    css: "rgba(0, 0, 0, 0)",
    rgba: 0
};
const _ = ((e)=>{
    function t(t, i) {
        const r = e.call(this) || this;
        r._config = i;
        r._drawToCacheCount = 0;
        r._glyphsWaitingOnBitmap = [];
        r._bitmapCommitTimeout = null;
        r._bitmap = null;
        r._cacheCanvas = t.createElement("canvas");
        r._cacheCanvas.width = 1024;
        r._cacheCanvas.height = 1024;
        r._cacheCtx = r._cacheCanvas.getContext("2d", {
            alpha: true
        });
        const canvasElement = t.createElement("canvas");
        canvasElement.width = r._config.scaledCharWidth;
        canvasElement.height = r._config.scaledCharHeight;
        r._tmpCtx = canvasElement.getContext("2d", {
            alpha: r._config.allowTransparency
        });
        r._width = Math.floor(1024 / r._config.scaledCharWidth);
        r._height = Math.floor(1024 / r._config.scaledCharHeight);
        const s = r._width * r._height;
        r._cacheMap = new module5746(s);
        r._cacheMap.prealloc(s);
        return r;
    }
    n(t, e);
    t.prototype.dispose = function() {
        if (this._bitmapCommitTimeout !== null) {
            window.clearTimeout(this._bitmapCommitTimeout);
            this._bitmapCommitTimeout = null;
        }
    };
    t.prototype.beginFrame = function() {
        this._drawToCacheCount = 0;
    };
    t.prototype.draw = function(e, t, i, r) {
        if (t.code === 32) {
            return true;
        }
        const n = ((e)=>e.code << 21 | e.bg << 12 | e.fg << 3 | (e.bold ? 0 : 4) + (e.dim ? 0 : 2) + (e.italic ? 0 : 1))(t);
        const s = this._cacheMap.get(n);
        if (s != null) {
            this._drawFromCache(e, s, i, r);
            return true;
        }
        if (this._canCache(t) && this._drawToCacheCount < 100) {
            let o;
            o = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
            const a = this._drawToCache(t, o);
            this._cacheMap.set(n, a);
            this._drawFromCache(e, a, i, r);
            return true;
        }
        return false;
    };
    t.prototype._canCache = function(e) {
        return e.code < 256;
    };
    t.prototype._toCoordinateX = function(e) {
        return e % this._width * this._config.scaledCharWidth;
    };
    t.prototype._toCoordinateY = function(e) {
        return Math.floor(e / this._width) * this._config.scaledCharHeight;
    };
    t.prototype._drawFromCache = function(e, t, i, r) {
        if (!t.isEmpty) {
            const n = this._toCoordinateX(t.index);
            const s = this._toCoordinateY(t.index);
            e.drawImage(t.inBitmap ? this._bitmap : this._cacheCanvas, n, s, this._config.scaledCharWidth, this._config.scaledCharHeight, i, r, this._config.scaledCharWidth, this._config.scaledCharHeight);
        }
    };
    t.prototype._getColorFromAnsiIndex = function(e) {
        if (e < this._config.colors.ansi.length) {
            return this._config.colors.ansi[e];
        }
        return DEFAULT_ANSI_COLORS[e];
    };
    t.prototype._getBackgroundColor = function(e) {
        if (this._config.allowTransparency) {
            return u;
        }
        if (e.bg === INVERTED_DEFAULT_COLOR) {
            return this._config.colors.foreground;
        }
        if (e.bg < 256) {
            return this._getColorFromAnsiIndex(e.bg);
        }
        return this._config.colors.background;
    };
    t.prototype._getForegroundColor = function(e) {
        if (e.fg === INVERTED_DEFAULT_COLOR) {
            return this._config.colors.background;
        }
        if (e.fg < 256) {
            return this._getColorFromAnsiIndex(e.fg);
        }
        return this._config.colors.foreground;
    };
    t.prototype._drawToCache = function(e, index) {
        this._drawToCacheCount++;
        this._tmpCtx.save();
        const i = this._getBackgroundColor(e);
        this._tmpCtx.globalCompositeOperation = "copy";
        this._tmpCtx.fillStyle = i.css;
        this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight);
        this._tmpCtx.globalCompositeOperation = "source-over";
        const r = e.bold ? this._config.fontWeightBold : this._config.fontWeight;
        const n = e.italic ? "italic" : "";
        this._tmpCtx.font = `${n} ${r} ${this._config.fontSize * this._config.devicePixelRatio}px ${this._config.fontFamily}`;
        this._tmpCtx.textBaseline = "top";
        this._tmpCtx.fillStyle = this._getForegroundColor(e).css;
        if (e.dim) {
            this._tmpCtx.globalAlpha = DIM_OPACITY;
        }
        this._tmpCtx.fillText(e.chars, 0, 0);
        this._tmpCtx.restore();
        const o = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight);
        let isEmpty = false;
        if (!this._config.allowTransparency) {
            isEmpty = clearColor(o, i);
        }
        const h = this._toCoordinateX(index);
        const c = this._toCoordinateY(index);
        this._cacheCtx.putImageData(o, h, c);
        const u = {
            index,
            isEmpty,
            inBitmap: false
        };
        this._addGlyphToBitmap(u);
        return u;
    };
    t.prototype._addGlyphToBitmap = function(e) {
        const _this = this;
        if (!(!("createImageBitmap" in window) || isFirefox || isSafari)) {
            this._glyphsWaitingOnBitmap.push(e);
            if (this._bitmapCommitTimeout === null) {
                this._bitmapCommitTimeout = window.setTimeout(function() {
                    return _this._generateBitmap();
                }, 100);
            }
        }
    };
    t.prototype._generateBitmap = function() {
        const _this = this;
        const _glyphsWaitingOnBitmap = this._glyphsWaitingOnBitmap;
        this._glyphsWaitingOnBitmap = [];
        window.createImageBitmap(this._cacheCanvas).then((i)=>{
            _this._bitmap = i;
            for(let r = 0; r < _glyphsWaitingOnBitmap.length; r++){
                _glyphsWaitingOnBitmap[r].inBitmap = true;
            }
        });
        this._bitmapCommitTimeout = null;
    };
    return t;
})(module1465);
export default _;
