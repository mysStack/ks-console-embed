import { DIM_OPACITY, INVERTED_DEFAULT_COLOR } from "./module-1146.js";
import { acquireCharAtlas } from "./module-2010.js";
import { CHAR_DATA_CHAR_INDEX } from "./module-923.js";
export const BaseRenderLayer = (()=>{
    function e(e, t, i, r, n) {
        this._container = e;
        this._alpha = r;
        this._colors = n;
        this._scaledCharWidth = 0;
        this._scaledCharHeight = 0;
        this._scaledCellWidth = 0;
        this._scaledCellHeight = 0;
        this._scaledCharLeft = 0;
        this._scaledCharTop = 0;
        this._currentGlyphIdentifier = {
            chars: "",
            code: 0,
            bg: 0,
            fg: 0,
            bold: false,
            dim: false,
            italic: false
        };
        this._canvas = document.createElement("canvas");
        this._canvas.classList.add(`xterm-${t}-layer`);
        this._canvas.style.zIndex = i.toString();
        this._initCanvas();
        this._container.appendChild(this._canvas);
    }
    e.prototype.dispose = function() {
        this._container.removeChild(this._canvas);
        if (this._charAtlas) {
            this._charAtlas.dispose();
        }
    };
    e.prototype._initCanvas = function() {
        this._ctx = this._canvas.getContext("2d", {
            alpha: this._alpha
        });
        if (!this._alpha) {
            this.clearAll();
        }
    };
    e.prototype.onOptionsChanged = function(e) {};
    e.prototype.onBlur = function(e) {};
    e.prototype.onFocus = function(e) {};
    e.prototype.onCursorMove = function(e) {};
    e.prototype.onGridChanged = function(e, t, i) {};
    e.prototype.onSelectionChanged = function(e, t, i, r = false) {};
    e.prototype.onThemeChanged = function(e, t) {
        this._refreshCharAtlas(e, t);
    };
    e.prototype.setTransparency = function(e, t) {
        if (t !== this._alpha) {
            const i = this._canvas;
            this._alpha = t;
            this._canvas = this._canvas.cloneNode();
            this._initCanvas();
            this._container.replaceChild(this._canvas, i);
            this._refreshCharAtlas(e, this._colors);
            this.onGridChanged(e, 0, e.rows - 1);
        }
    };
    e.prototype._refreshCharAtlas = function(e, t) {
        if (!(this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0)) {
            this._charAtlas = acquireCharAtlas(e, t, this._scaledCharWidth, this._scaledCharHeight);
            this._charAtlas.warmUp();
        }
    };
    e.prototype.resize = function(e, t) {
        this._scaledCellWidth = t.scaledCellWidth;
        this._scaledCellHeight = t.scaledCellHeight;
        this._scaledCharWidth = t.scaledCharWidth;
        this._scaledCharHeight = t.scaledCharHeight;
        this._scaledCharLeft = t.scaledCharLeft;
        this._scaledCharTop = t.scaledCharTop;
        this._canvas.width = t.scaledCanvasWidth;
        this._canvas.height = t.scaledCanvasHeight;
        this._canvas.style.width = `${t.canvasWidth}px`;
        this._canvas.style.height = `${t.canvasHeight}px`;
        if (!this._alpha) {
            this.clearAll();
        }
        this._refreshCharAtlas(e, this._colors);
    };
    e.prototype.fillCells = function(e, t, i, r) {
        this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, i * this._scaledCellWidth, r * this._scaledCellHeight);
    };
    e.prototype.fillBottomLineAtCells = function(e, t, i = 1) {
        this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, i * this._scaledCellWidth, window.devicePixelRatio);
    };
    e.prototype.fillLeftLineAtCell = function(e, t) {
        this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio, this._scaledCellHeight);
    };
    e.prototype.strokeRectAtCell = function(e, t, i, r) {
        this._ctx.lineWidth = window.devicePixelRatio;
        this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, i * this._scaledCellWidth - window.devicePixelRatio, r * this._scaledCellHeight - window.devicePixelRatio);
    };
    e.prototype.clearAll = function() {
        if (this._alpha) {
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        } else {
            this._ctx.fillStyle = this._colors.background.css;
            this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        }
    };
    e.prototype.clearCells = function(e, t, i, r) {
        if (this._alpha) {
            this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, i * this._scaledCellWidth, r * this._scaledCellHeight);
        } else {
            this._ctx.fillStyle = this._colors.background.css;
            this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, i * this._scaledCellWidth, r * this._scaledCellHeight);
        }
    };
    e.prototype.fillCharTrueColor = function(e, t, i, r) {
        this._ctx.font = this._getFont(e, false, false);
        this._ctx.textBaseline = "top";
        this._clipRow(e, r);
        this._ctx.fillText(t[CHAR_DATA_CHAR_INDEX], i * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop);
    };
    e.prototype.drawChars = function(e, t, i, n, s, o, a, l, h, c, u) {
        a += e.options.drawBoldTextInBrightColors && h && a < 8 && a !== INVERTED_DEFAULT_COLOR ? 8 : 0;
        this._currentGlyphIdentifier.chars = t;
        this._currentGlyphIdentifier.code = i;
        this._currentGlyphIdentifier.bg = l;
        this._currentGlyphIdentifier.fg = a;
        this._currentGlyphIdentifier.bold = h && e.options.enableBold;
        this._currentGlyphIdentifier.dim = c;
        this._currentGlyphIdentifier.italic = u;
        if (!(this._charAtlas && this._charAtlas.draw(this._ctx, this._currentGlyphIdentifier, s * this._scaledCellWidth + this._scaledCharLeft, o * this._scaledCellHeight + this._scaledCharTop))) {
            this._drawUncachedChars(e, t, n, a, s, o, h && e.options.enableBold, c, u);
        }
    };
    e.prototype._drawUncachedChars = function(e, t, i, n, s, o, a, l, h) {
        this._ctx.save();
        this._ctx.font = this._getFont(e, a, h);
        this._ctx.textBaseline = "top";
        if (n === INVERTED_DEFAULT_COLOR) {
            this._ctx.fillStyle = this._colors.background.css;
        } else {
            this._ctx.fillStyle = n < 256 ? this._colors.ansi[n].css : this._colors.foreground.css;
        }
        this._clipRow(e, o);
        if (l) {
            this._ctx.globalAlpha = DIM_OPACITY;
        }
        this._ctx.fillText(t, s * this._scaledCellWidth + this._scaledCharLeft, o * this._scaledCellHeight + this._scaledCharTop);
        this._ctx.restore();
    };
    e.prototype._clipRow = function(e, t) {
        this._ctx.beginPath();
        this._ctx.rect(0, t * this._scaledCellHeight, e.cols * this._scaledCellWidth, this._scaledCellHeight);
        this._ctx.clip();
    };
    e.prototype._getFont = function(e, t, i) {
        return `${i ? "italic" : ""} ${t ? e.options.fontWeightBold : e.options.fontWeight} ${e.options.fontSize * window.devicePixelRatio}px ${e.options.fontFamily}`;
    };
    return e;
})();
