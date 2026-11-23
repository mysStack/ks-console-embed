import { CHAR_DATA_WIDTH_INDEX } from "unpacked/module-923.js";
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
export const CursorRenderLayer = ((BaseRenderLayer_1)=>{
    function t(t, i, r) {
        const n = BaseRenderLayer_1.call(this, t, "cursor", i, true, r) || this;
        n._state = {
            x: null,
            y: null,
            isFocused: null,
            style: null,
            width: null
        };
        n._cursorRenderers = {
            bar: n._renderBarCursor.bind(n),
            block: n._renderBlockCursor.bind(n),
            underline: n._renderUnderlineCursor.bind(n)
        };
        return n;
    }
    n(t, BaseRenderLayer_1);
    t.prototype.resize = function(t, i) {
        BaseRenderLayer_1.prototype.resize.call(this, t, i);
        this._state = {
            x: null,
            y: null,
            isFocused: null,
            style: null,
            width: null
        };
    };
    t.prototype.reset = function(e) {
        this._clearCursor();
        if (this._cursorBlinkStateManager) {
            this._cursorBlinkStateManager.dispose();
            this._cursorBlinkStateManager = null;
            this.onOptionsChanged(e);
        }
    };
    t.prototype.onBlur = function(e) {
        if (this._cursorBlinkStateManager) {
            this._cursorBlinkStateManager.pause();
        }
        e.refresh(e.buffer.y, e.buffer.y);
    };
    t.prototype.onFocus = function(e) {
        if (this._cursorBlinkStateManager) {
            this._cursorBlinkStateManager.resume(e);
        } else {
            e.refresh(e.buffer.y, e.buffer.y);
        }
    };
    t.prototype.onOptionsChanged = function(e) {
        const _this = this;
        if (e.options.cursorBlink) {
            if (!this._cursorBlinkStateManager) {
                this._cursorBlinkStateManager = new a(e, function() {
                    _this._render(e, true);
                });
            }
        } else {
            if (this._cursorBlinkStateManager) {
                this._cursorBlinkStateManager.dispose();
                this._cursorBlinkStateManager = null;
            }
            e.refresh(e.buffer.y, e.buffer.y);
        }
    };
    t.prototype.onCursorMove = function(e) {
        if (this._cursorBlinkStateManager) {
            this._cursorBlinkStateManager.restartBlinkAnimation(e);
        }
    };
    t.prototype.onGridChanged = function(e, t, i) {
        if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused) {
            this._render(e, false);
        } else {
            this._cursorBlinkStateManager.restartBlinkAnimation(e);
        }
    };
    t.prototype._render = function(e, t) {
        if (e.cursorState && !e.cursorHidden) {
            const i = e.buffer.ybase + e.buffer.y;
            const r = i - e.buffer.ydisp;
            if (r < 0 || r >= e.rows) {
                this._clearCursor();
            } else {
                const n = e.buffer.lines.get(i).get(e.buffer.x);
                if (n) {
                    if (!e.isFocused) {
                        this._clearCursor();
                        this._ctx.save();
                        this._ctx.fillStyle = this._colors.cursor.css;
                        this._renderBlurCursor(e, e.buffer.x, r, n);
                        this._ctx.restore();
                        this._state.x = e.buffer.x;
                        this._state.y = r;
                        this._state.isFocused = false;
                        this._state.style = e.options.cursorStyle;
                        return void (this._state.width = n[CHAR_DATA_WIDTH_INDEX]);
                    }
                    if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                        if (this._state) {
                            if (this._state.x === e.buffer.x && this._state.y === r && this._state.isFocused === e.isFocused && this._state.style === e.options.cursorStyle && this._state.width === n[CHAR_DATA_WIDTH_INDEX]) {
                                return;
                            }
                            this._clearCursor();
                        }
                        this._ctx.save();
                        this._cursorRenderers[e.options.cursorStyle || "block"](e, e.buffer.x, r, n);
                        this._ctx.restore();
                        this._state.x = e.buffer.x;
                        this._state.y = r;
                        this._state.isFocused = false;
                        this._state.style = e.options.cursorStyle;
                        this._state.width = n[CHAR_DATA_WIDTH_INDEX];
                    } else {
                        this._clearCursor();
                    }
                }
            }
        } else {
            this._clearCursor();
        }
    };
    t.prototype._clearCursor = function() {
        if (this._state) {
            this.clearCells(this._state.x, this._state.y, this._state.width, 1);
            this._state = {
                x: null,
                y: null,
                isFocused: null,
                style: null,
                width: null
            };
        }
    };
    t.prototype._renderBarCursor = function(e, t, i, r) {
        this._ctx.save();
        this._ctx.fillStyle = this._colors.cursor.css;
        this.fillLeftLineAtCell(t, i);
        this._ctx.restore();
    };
    t.prototype._renderBlockCursor = function(e, t, i, r) {
        this._ctx.save();
        this._ctx.fillStyle = this._colors.cursor.css;
        this.fillCells(t, i, r[CHAR_DATA_WIDTH_INDEX], 1);
        this._ctx.fillStyle = this._colors.cursorAccent.css;
        this.fillCharTrueColor(e, r, t, i);
        this._ctx.restore();
    };
    t.prototype._renderUnderlineCursor = function(e, t, i, r) {
        this._ctx.save();
        this._ctx.fillStyle = this._colors.cursor.css;
        this.fillBottomLineAtCells(t, i);
        this._ctx.restore();
    };
    t.prototype._renderBlurCursor = function(e, t, i, r) {
        this._ctx.save();
        this._ctx.strokeStyle = this._colors.cursor.css;
        this.strokeRectAtCell(t, i, r[CHAR_DATA_WIDTH_INDEX], 1);
        this._ctx.restore();
    };
    return t;
})(BaseRenderLayer);
class a {
    constructor(e, t){
        this._renderCallback = t;
        this.isCursorVisible = true;
        if (e.isFocused) {
            this._restartInterval();
        }
    }
    get isPaused() {
        return !(this._blinkStartTimeout || this._blinkInterval);
    }
    dispose() {
        if (this._blinkInterval) {
            window.clearInterval(this._blinkInterval);
            this._blinkInterval = null;
        }
        if (this._blinkStartTimeout) {
            window.clearTimeout(this._blinkStartTimeout);
            this._blinkStartTimeout = null;
        }
        if (this._animationFrame) {
            window.cancelAnimationFrame(this._animationFrame);
            this._animationFrame = null;
        }
    }
    restartBlinkAnimation(e) {
        const _this = this;
        if (!this.isPaused) {
            this._animationTimeRestarted = Date.now();
            this.isCursorVisible = true;
            if (!this._animationFrame) {
                this._animationFrame = window.requestAnimationFrame(function() {
                    _this._renderCallback();
                    _this._animationFrame = null;
                });
            }
        }
    }
    _restartInterval(e = 600) {
        const _this = this;
        if (this._blinkInterval) {
            window.clearInterval(this._blinkInterval);
        }
        this._blinkStartTimeout = setTimeout(()=>{
            if (_this._animationTimeRestarted) {
                const e = 600 - (Date.now() - _this._animationTimeRestarted);
                _this._animationTimeRestarted = null;
                if (e > 0) {
                    return void _this._restartInterval(e);
                }
            }
            _this.isCursorVisible = false;
            _this._animationFrame = window.requestAnimationFrame(function() {
                _this._renderCallback();
                _this._animationFrame = null;
            });
            _this._blinkInterval = setInterval(()=>{
                if (_this._animationTimeRestarted) {
                    const e = 600 - (Date.now() - _this._animationTimeRestarted);
                    _this._animationTimeRestarted = null;
                    return void _this._restartInterval(e);
                }
                _this.isCursorVisible = !_this.isCursorVisible;
                _this._animationFrame = window.requestAnimationFrame(function() {
                    _this._renderCallback();
                    _this._animationFrame = null;
                });
            }, 600);
        }, e);
    }
    pause() {
        this.isCursorVisible = true;
        if (this._blinkInterval) {
            window.clearInterval(this._blinkInterval);
            this._blinkInterval = null;
        }
        if (this._blinkStartTimeout) {
            window.clearTimeout(this._blinkStartTimeout);
            this._blinkStartTimeout = null;
        }
        if (this._animationFrame) {
            window.cancelAnimationFrame(this._animationFrame);
            this._animationFrame = null;
        }
    }
    resume(e) {
        this._animationTimeRestarted = null;
        this._restartInterval();
        this.restartBlinkAnimation(e);
    }
}
