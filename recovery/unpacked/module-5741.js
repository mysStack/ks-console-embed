import { TextRenderLayer } from "./module-5742.js";
import { SelectionRenderLayer } from "./module-5749.js";
import { CursorRenderLayer } from "./module-5750.js";
import { ColorManager } from "./module-1257.js";
import { LinkRenderLayer } from "./module-5751.js";
import { EventEmitter } from "./module-965.js";
import { RenderDebouncer } from "./module-1466.js";
import { ScreenDprMonitor } from "./module-2013.js";
import { CharacterJoinerRegistry } from "./module-5752.js";
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
export const Renderer = ((EventEmitter_1)=>{
    function t(t, i) {
        const r = EventEmitter_1.call(this) || this;
        r._terminal = t;
        r._isPaused = false;
        r._needsFullRefresh = false;
        const allowTransparency = r._terminal.options.allowTransparency;
        r.colorManager = new ColorManager(document, allowTransparency);
        r._characterJoinerRegistry = new CharacterJoinerRegistry(t);
        if (i) {
            r.colorManager.setTheme(i);
        }
        r._renderLayers = [
            new TextRenderLayer(r._terminal.screenElement, 0, r.colorManager.colors, r._characterJoinerRegistry, allowTransparency),
            new SelectionRenderLayer(r._terminal.screenElement, 1, r.colorManager.colors),
            new LinkRenderLayer(r._terminal.screenElement, 2, r.colorManager.colors, r._terminal),
            new CursorRenderLayer(r._terminal.screenElement, 3, r.colorManager.colors)
        ];
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
        r._devicePixelRatio = window.devicePixelRatio;
        r._updateDimensions();
        r.onOptionsChanged();
        r._renderDebouncer = new RenderDebouncer(r._terminal, r._renderRows.bind(r));
        r._screenDprMonitor = new ScreenDprMonitor;
        r._screenDprMonitor.setListener(function() {
            return r.onWindowResize(window.devicePixelRatio);
        });
        r.register(r._screenDprMonitor);
        if ("IntersectionObserver" in window) {
            const c = new IntersectionObserver(function(e) {
                return r.onIntersectionChange(e[0]);
            }, {
                threshold: 0
            });
            c.observe(r._terminal.element);
            r.register({
                dispose: function() {
                    return c.disconnect();
                }
            });
        }
        return r;
    }
    n(t, EventEmitter_1);
    t.prototype.dispose = function() {
        EventEmitter_1.prototype.dispose.call(this);
        this._renderLayers.forEach((e)=>e.dispose());
    };
    t.prototype.onIntersectionChange = function(e) {
        this._isPaused = e.intersectionRatio === 0;
        if (!this._isPaused && this._needsFullRefresh) {
            this._terminal.refresh(0, this._terminal.rows - 1);
        }
    };
    t.prototype.onWindowResize = function(e) {
        if (this._devicePixelRatio !== e) {
            this._devicePixelRatio = e;
            this.onResize(this._terminal.cols, this._terminal.rows);
        }
    };
    t.prototype.setTheme = function(e) {
        const _this = this;
        this.colorManager.setTheme(e);
        this._renderLayers.forEach((e)=>{
            e.onThemeChanged(_this._terminal, _this.colorManager.colors);
            e.reset(_this._terminal);
        });
        if (this._isPaused) {
            this._needsFullRefresh = true;
        } else {
            this._terminal.refresh(0, this._terminal.rows - 1);
        }
        return this.colorManager.colors;
    };
    t.prototype.onResize = function(e, t) {
        const _this = this;
        this._updateDimensions();
        this._renderLayers.forEach((e)=>e.resize(_this._terminal, _this.dimensions));
        if (this._isPaused) {
            this._needsFullRefresh = true;
        } else {
            this._terminal.refresh(0, this._terminal.rows - 1);
        }
        this._terminal.screenElement.style.width = `${this.dimensions.canvasWidth}px`;
        this._terminal.screenElement.style.height = `${this.dimensions.canvasHeight}px`;
        this.emit("resize", {
            width: this.dimensions.canvasWidth,
            height: this.dimensions.canvasHeight
        });
    };
    t.prototype.onCharSizeChanged = function() {
        this.onResize(this._terminal.cols, this._terminal.rows);
    };
    t.prototype.onBlur = function() {
        const _this = this;
        this._runOperation(function(t) {
            return t.onBlur(_this._terminal);
        });
    };
    t.prototype.onFocus = function() {
        const _this = this;
        this._runOperation(function(t) {
            return t.onFocus(_this._terminal);
        });
    };
    t.prototype.onSelectionChanged = function(e, t, i = false) {
        const _this = this;
        this._runOperation(function(n) {
            return n.onSelectionChanged(_this._terminal, e, t, i);
        });
    };
    t.prototype.onCursorMove = function() {
        const _this = this;
        this._runOperation(function(t) {
            return t.onCursorMove(_this._terminal);
        });
    };
    t.prototype.onOptionsChanged = function() {
        const _this = this;
        this.colorManager.allowTransparency = this._terminal.options.allowTransparency;
        this._runOperation(function(t) {
            return t.onOptionsChanged(_this._terminal);
        });
    };
    t.prototype.clear = function() {
        const _this = this;
        this._runOperation(function(t) {
            return t.reset(_this._terminal);
        });
    };
    t.prototype._runOperation = function(e) {
        if (this._isPaused) {
            this._needsFullRefresh = true;
        } else {
            this._renderLayers.forEach((t)=>e(t));
        }
    };
    t.prototype.refreshRows = function(e, t) {
        if (this._isPaused) {
            this._needsFullRefresh = true;
        } else {
            this._renderDebouncer.refresh(e, t);
        }
    };
    t.prototype._renderRows = function(start, end) {
        const _this = this;
        this._renderLayers.forEach((r)=>r.onGridChanged(_this._terminal, start, end));
        this._terminal.emit("refresh", {
            start,
            end
        });
    };
    t.prototype._updateDimensions = function() {
        if (this._terminal.charMeasure.width && this._terminal.charMeasure.height) {
            this.dimensions.scaledCharWidth = Math.floor(this._terminal.charMeasure.width * window.devicePixelRatio);
            this.dimensions.scaledCharHeight = Math.ceil(this._terminal.charMeasure.height * window.devicePixelRatio);
            this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._terminal.options.lineHeight);
            this.dimensions.scaledCharTop = this._terminal.options.lineHeight === 1 ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2);
            this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._terminal.options.letterSpacing);
            this.dimensions.scaledCharLeft = Math.floor(this._terminal.options.letterSpacing / 2);
            this.dimensions.scaledCanvasHeight = this._terminal.rows * this.dimensions.scaledCellHeight;
            this.dimensions.scaledCanvasWidth = this._terminal.cols * this.dimensions.scaledCellWidth;
            this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio);
            this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio);
            this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._terminal.rows;
            this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._terminal.cols;
        }
    };
    t.prototype.registerCharacterJoiner = function(e) {
        return this._characterJoinerRegistry.registerCharacterJoiner(e);
    };
    t.prototype.deregisterCharacterJoiner = function(e) {
        return this._characterJoinerRegistry.deregisterCharacterJoiner(e);
    };
    return t;
})(EventEmitter);
