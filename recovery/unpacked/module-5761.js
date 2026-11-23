import { EventEmitter } from "./module-965.js";
import { ColorManager } from "./module-1257.js";
import { RenderDebouncer } from "./module-1466.js";
import { BOLD_CLASS, CURSOR_CLASS, CURSOR_STYLE_BAR_CLASS, CURSOR_STYLE_BLOCK_CLASS, CURSOR_STYLE_UNDERLINE_CLASS, DomRendererRowFactory, ITALIC_CLASS } from "./module-5762.js";
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
let h = 1;
export const DomRenderer = ((EventEmitter_1)=>{
    function t(t, i) {
        const r = EventEmitter_1.call(this) || this;
        r._terminal = t;
        r._terminalClass = h++;
        r._rowElements = [];
        const allowTransparency = r._terminal.options.allowTransparency;
        r.colorManager = new ColorManager(document, allowTransparency);
        r.setTheme(i);
        r._rowContainer = document.createElement("div");
        r._rowContainer.classList.add("xterm-rows");
        r._rowContainer.style.lineHeight = "normal";
        r._rowContainer.setAttribute("aria-hidden", "true");
        r._refreshRowElements(r._terminal.cols, r._terminal.rows);
        r._selectionContainer = document.createElement("div");
        r._selectionContainer.classList.add("xterm-selection");
        r._selectionContainer.setAttribute("aria-hidden", "true");
        r.dimensions = {
            scaledCharWidth: null,
            scaledCharHeight: null,
            scaledCellWidth: null,
            scaledCellHeight: null,
            scaledCharLeft: null,
            scaledCharTop: null,
            scaledCanvasWidth: null,
            scaledCanvasHeight: null,
            canvasWidth: null,
            canvasHeight: null,
            actualCellWidth: null,
            actualCellHeight: null
        };
        r._updateDimensions();
        r._renderDebouncer = new RenderDebouncer(r._terminal, r._renderRows.bind(r));
        r._rowFactory = new DomRendererRowFactory(document);
        r._terminal.element.classList.add(`xterm-dom-renderer-owner-${r._terminalClass}`);
        r._terminal.screenElement.appendChild(r._rowContainer);
        r._terminal.screenElement.appendChild(r._selectionContainer);
        r._terminal.linkifier.on("linkhover", function(e) {
            return r._onLinkHover(e);
        });
        r._terminal.linkifier.on("linkleave", function(e) {
            return r._onLinkLeave(e);
        });
        return r;
    }
    n(t, EventEmitter_1);
    t.prototype.dispose = function() {
        this._terminal.element.classList.remove(`xterm-dom-renderer-owner-${this._terminalClass}`);
        this._terminal.screenElement.removeChild(this._rowContainer);
        this._terminal.screenElement.removeChild(this._selectionContainer);
        this._terminal.screenElement.removeChild(this._themeStyleElement);
        this._terminal.screenElement.removeChild(this._dimensionsStyleElement);
        EventEmitter_1.prototype.dispose.call(this);
    };
    t.prototype._updateDimensions = function() {
        const _this = this;
        this.dimensions.scaledCharWidth = this._terminal.charMeasure.width * window.devicePixelRatio;
        this.dimensions.scaledCharHeight = this._terminal.charMeasure.height * window.devicePixelRatio;
        this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth;
        this.dimensions.scaledCellHeight = this.dimensions.scaledCharHeight;
        this.dimensions.scaledCharLeft = 0;
        this.dimensions.scaledCharTop = 0;
        this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._terminal.cols;
        this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._terminal.rows;
        this.dimensions.canvasWidth = this._terminal.charMeasure.width * this._terminal.cols;
        this.dimensions.canvasHeight = this._terminal.charMeasure.height * this._terminal.rows;
        this.dimensions.actualCellWidth = this._terminal.charMeasure.width;
        this.dimensions.actualCellHeight = this._terminal.charMeasure.height;
        this._rowElements.forEach((t)=>{
            t.style.width = `${_this.dimensions.canvasWidth}px`;
            t.style.height = `${_this._terminal.charMeasure.height}px`;
        });
        if (!this._dimensionsStyleElement) {
            this._dimensionsStyleElement = document.createElement("style");
            this._terminal.screenElement.appendChild(this._dimensionsStyleElement);
        }
        const t = `${this._terminalSelector} .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: ${this._terminal.charMeasure.width}px}`;
        this._dimensionsStyleElement.innerHTML = t;
        this._selectionContainer.style.height = this._terminal._viewportElement.style.height;
        this._rowContainer.style.width = `${this.dimensions.canvasWidth}px`;
        this._rowContainer.style.height = `${this.dimensions.canvasHeight}px`;
    };
    t.prototype.setTheme = function(e) {
        const _this = this;
        if (e) {
            this.colorManager.setTheme(e);
        }
        if (!this._themeStyleElement) {
            this._themeStyleElement = document.createElement("style");
            this._terminal.screenElement.appendChild(this._themeStyleElement);
        }
        let i = `${this._terminalSelector} .xterm-rows { color: ${this.colorManager.colors.foreground.css}; background-color: ${this.colorManager.colors.background.css}; font-family: ${this._terminal.getOption("fontFamily")}; font-size: ${this._terminal.getOption("fontSize")}px;}`;
        i += `${this._terminalSelector} span:not(.${BOLD_CLASS}) { font-weight: ${this._terminal.options.fontWeight};}${this._terminalSelector} span.${BOLD_CLASS} { font-weight: ${this._terminal.options.fontWeightBold};}${this._terminalSelector} span.${ITALIC_CLASS} { font-style: italic;}`;
        i += `${this._terminalSelector} .xterm-rows:not(.xterm-focus) .${CURSOR_CLASS} { outline: 1px solid ${this.colorManager.colors.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .xterm-rows.xterm-focus .${CURSOR_CLASS}.${CURSOR_STYLE_BLOCK_CLASS} { background-color: ${this.colorManager.colors.cursor.css}; color: ${this.colorManager.colors.cursorAccent.css};}${this._terminalSelector} .xterm-rows.xterm-focus .${CURSOR_CLASS}.${CURSOR_STYLE_BAR_CLASS} { box-shadow: 1px 0 0 ${this.colorManager.colors.cursor.css} inset;}${this._terminalSelector} .xterm-rows.xterm-focus .${CURSOR_CLASS}.${CURSOR_STYLE_UNDERLINE_CLASS} { box-shadow: 0 -1px 0 ${this.colorManager.colors.cursor.css} inset;}`;
        i += `${this._terminalSelector} .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector} .xterm-selection div { position: absolute; background-color: ${this.colorManager.colors.selection.css};}`;
        this.colorManager.colors.ansi.forEach((e, r)=>{
            i += `${_this._terminalSelector} .xterm-fg-${r} { color: ${e.css}; }${_this._terminalSelector} .xterm-bg-${r} { background-color: ${e.css}; }`;
        });
        this._themeStyleElement.innerHTML = i;
        return this.colorManager.colors;
    };
    t.prototype.onWindowResize = function(e) {
        this._updateDimensions();
    };
    t.prototype._refreshRowElements = function(e, t) {
        for(let i = this._rowElements.length; i <= t; i++){
            const r = document.createElement("div");
            this._rowContainer.appendChild(r);
            this._rowElements.push(r);
        }
        while(this._rowElements.length > t){
            this._rowContainer.removeChild(this._rowElements.pop());
        }
    };
    t.prototype.onResize = function(e, t) {
        this._refreshRowElements(e, t);
        this._updateDimensions();
    };
    t.prototype.onCharSizeChanged = function() {
        this._updateDimensions();
    };
    t.prototype.onBlur = function() {
        this._rowContainer.classList.remove("xterm-focus");
    };
    t.prototype.onFocus = function() {
        this._rowContainer.classList.add("xterm-focus");
    };
    t.prototype.onSelectionChanged = function(e, t, i) {
        while(this._selectionContainer.children.length){
            this._selectionContainer.removeChild(this._selectionContainer.children[0]);
        }
        if (e && t) {
            const r = e[1] - this._terminal.buffer.ydisp;
            const n = t[1] - this._terminal.buffer.ydisp;
            const s = Math.max(r, 0);
            const o = Math.min(n, this._terminal.rows - 1);
            if (!(s >= this._terminal.rows || o < 0)) {
                const a = document.createDocumentFragment();
                if (i) {
                    a.appendChild(this._createSelectionElement(s, e[0], t[0], o - s + 1));
                } else {
                    const l = r === s ? e[0] : 0;
                    const h = s === o ? t[0] : this._terminal.cols;
                    a.appendChild(this._createSelectionElement(s, l, h));
                    const c = o - s - 1;
                    a.appendChild(this._createSelectionElement(s + 1, 0, this._terminal.cols, c));
                    if (s !== o) {
                        const u = n === o ? t[0] : this._terminal.cols;
                        a.appendChild(this._createSelectionElement(o, 0, u));
                    }
                }
                this._selectionContainer.appendChild(a);
            }
        }
    };
    t.prototype._createSelectionElement = function(e, t, i, r = 1) {
        const divElement = document.createElement("div");
        divElement.style.height = `${r * this._terminal.charMeasure.height}px`;
        divElement.style.top = `${e * this._terminal.charMeasure.height}px`;
        divElement.style.left = `${t * this._terminal.charMeasure.width}px`;
        divElement.style.width = `${this._terminal.charMeasure.width * (i - t)}px`;
        return divElement;
    };
    t.prototype.onCursorMove = function() {};
    t.prototype.onOptionsChanged = function() {
        this._updateDimensions();
        this.setTheme(undefined);
        this._terminal.refresh(0, this._terminal.rows - 1);
    };
    t.prototype.clear = function() {
        this._rowElements.forEach((e)=>e.innerHTML = "");
    };
    t.prototype.refreshRows = function(e, t) {
        this._renderDebouncer.refresh(e, t);
    };
    t.prototype._renderRows = function(start, end) {
        const _terminal = this._terminal;
        const r = _terminal.buffer.ybase + _terminal.buffer.y;
        const n = this._terminal.buffer.x;
        for(let s = start; s <= end; s++){
            const o = this._rowElements[s];
            o.innerHTML = "";
            const a = s + _terminal.buffer.ydisp;
            const l = _terminal.buffer.lines.get(a);
            const h = _terminal.options.cursorStyle;
            o.appendChild(this._rowFactory.createRow(l, a === r, h, n, _terminal.charMeasure.width, _terminal.cols));
        }
        this._terminal.emit("refresh", {
            start,
            end
        });
    };
    Object.defineProperty(t.prototype, "_terminalSelector", {
        get: function() {
            return `.xterm-dom-renderer-owner-${this._terminalClass}`;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.registerCharacterJoiner = function(e) {
        return -1;
    };
    t.prototype.deregisterCharacterJoiner = function(e) {
        return false;
    };
    t.prototype._onLinkHover = function(e) {
        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, true);
    };
    t.prototype._onLinkLeave = function(e) {
        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, false);
    };
    t.prototype._setCellUnderline = function(e, t, i, r, n, s) {
        while(e !== t || i !== r){
            this._rowElements[i].children[e].style.textDecoration = s ? "underline" : "none";
            if ((e = (e + 1) % n) == 0) {
                i++;
            }
        }
    };
    return t;
})(EventEmitter);
