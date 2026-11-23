import { MouseHelper } from "unpacked/module-2015.js";
import { isLinux, isMSWindows, isMac } from "unpacked/module-1147.js";
import { EventEmitter } from "unpacked/module-965.js";
import { SelectionModel } from "unpacked/module-5755.js";
import { CHAR_DATA_CHAR_INDEX, CHAR_DATA_CODE_INDEX, CHAR_DATA_WIDTH_INDEX } from "unpacked/module-923.js";
import { AltClickHandler } from "unpacked/module-5756.js";
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
const u = String.fromCharCode(160);
const _ = new RegExp(u, "g");
export const SelectionManager = ((EventEmitter_1)=>{
    function t(t, i) {
        const r = EventEmitter_1.call(this) || this;
        r._terminal = t;
        r._charMeasure = i;
        r._enabled = true;
        r._initListeners();
        r.enable();
        r._model = new SelectionModel(t);
        r._activeSelectionMode = 0;
        return r;
    }
    n(t, EventEmitter_1);
    t.prototype.dispose = function() {
        EventEmitter_1.prototype.dispose.call(this);
        this._removeMouseDownListeners();
    };
    Object.defineProperty(t.prototype, "_buffer", {
        get: function() {
            return this._terminal.buffers.active;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype._initListeners = function() {
        const _this = this;
        this._mouseMoveListener = function(t) {
            return _this._onMouseMove(t);
        };
        this._mouseUpListener = function(t) {
            return _this._onMouseUp(t);
        };
        this._trimListener = function(t) {
            return _this._onTrim(t);
        };
        this.initBuffersListeners();
    };
    t.prototype.initBuffersListeners = function() {
        const _this = this;
        this._terminal.buffer.lines.on("trim", this._trimListener);
        this._terminal.buffers.on("activate", function(t) {
            return _this._onBufferActivate(t);
        });
    };
    t.prototype.disable = function() {
        this.clearSelection();
        this._enabled = false;
    };
    t.prototype.enable = function() {
        this._enabled = true;
    };
    Object.defineProperty(t.prototype, "selectionStart", {
        get: function() {
            return this._model.finalSelectionStart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(t.prototype, "selectionEnd", {
        get: function() {
            return this._model.finalSelectionEnd;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(t.prototype, "hasSelection", {
        get: function() {
            const finalSelectionStart = this._model.finalSelectionStart;
            const finalSelectionEnd = this._model.finalSelectionEnd;
            return !(!finalSelectionStart || !finalSelectionEnd || finalSelectionStart[0] === finalSelectionEnd[0] && finalSelectionStart[1] === finalSelectionEnd[1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(t.prototype, "selectionText", {
        get: function() {
            const finalSelectionStart = this._model.finalSelectionStart;
            const finalSelectionEnd = this._model.finalSelectionEnd;
            if (!finalSelectionStart || !finalSelectionEnd) {
                return "";
            }
            const i = [];
            if (this._activeSelectionMode === 3) {
                if (finalSelectionStart[0] === finalSelectionEnd[0]) {
                    return "";
                }
                for(var r = finalSelectionStart[1]; r <= finalSelectionEnd[1]; r++){
                    var n = this._buffer.translateBufferLineToString(r, true, finalSelectionStart[0], finalSelectionEnd[0]);
                    i.push(n);
                }
            } else {
                const s = finalSelectionStart[1] === finalSelectionEnd[1] ? finalSelectionEnd[0] : null;
                i.push(this._buffer.translateBufferLineToString(finalSelectionStart[1], true, finalSelectionStart[0], s));
                for(r = finalSelectionStart[1] + 1; r <= finalSelectionEnd[1] - 1; r++){
                    var a = this._buffer.lines.get(r);
                    n = this._buffer.translateBufferLineToString(r, true);
                    if (a.isWrapped) {
                        i[i.length - 1] += n;
                    } else {
                        i.push(n);
                    }
                }
                if (finalSelectionStart[1] !== finalSelectionEnd[1]) {
                    a = this._buffer.lines.get(finalSelectionEnd[1]);
                    n = this._buffer.translateBufferLineToString(finalSelectionEnd[1], true, 0, finalSelectionEnd[0]);
                    if (a.isWrapped) {
                        i[i.length - 1] += n;
                    } else {
                        i.push(n);
                    }
                }
            }
            return i.map((e)=>e.replace(_, " ")).join(isMSWindows ? "\r\n" : "\n");
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.clearSelection = function() {
        this._model.clearSelection();
        this._removeMouseDownListeners();
        this.refresh();
    };
    t.prototype.refresh = function(e) {
        const _this = this;
        if (!this._refreshAnimationFrame) {
            this._refreshAnimationFrame = window.requestAnimationFrame(function() {
                return _this._refresh();
            });
        }
        if (isLinux && e && this.selectionText.length) {
            this.emit("newselection", this.selectionText);
        }
    };
    t.prototype._refresh = function() {
        this._refreshAnimationFrame = null;
        this.emit("refresh", {
            start: this._model.finalSelectionStart,
            end: this._model.finalSelectionEnd,
            columnSelectMode: this._activeSelectionMode === 3
        });
    };
    t.prototype.isClickInSelection = function(e) {
        const t = this._getMouseBufferCoords(e);
        const finalSelectionStart = this._model.finalSelectionStart;
        const finalSelectionEnd = this._model.finalSelectionEnd;
        return !(!finalSelectionStart || !finalSelectionEnd) && (t[1] > finalSelectionStart[1] && t[1] < finalSelectionEnd[1] || finalSelectionStart[1] === finalSelectionEnd[1] && t[1] === finalSelectionStart[1] && t[0] > finalSelectionStart[0] && t[0] < finalSelectionEnd[0] || finalSelectionStart[1] < finalSelectionEnd[1] && t[1] === finalSelectionEnd[1] && t[0] < finalSelectionEnd[0]);
    };
    t.prototype.selectWordAtCursor = function(e) {
        const t = this._getMouseBufferCoords(e);
        if (t) {
            this._selectWordAt(t, false);
            this._model.selectionEnd = null;
            this.refresh(true);
        }
    };
    t.prototype.selectAll = function() {
        this._model.isSelectAllActive = true;
        this.refresh();
        this._terminal.emit("selection");
    };
    t.prototype.selectLines = function(e, t) {
        this._model.clearSelection();
        e = Math.max(e, 0);
        t = Math.min(t, this._terminal.buffer.lines.length - 1);
        this._model.selectionStart = [
            0,
            e
        ];
        this._model.selectionEnd = [
            this._terminal.cols,
            t
        ];
        this.refresh();
        this._terminal.emit("selection");
    };
    t.prototype._onTrim = function(e) {
        if (this._model.onTrim(e)) {
            this.refresh();
        }
    };
    t.prototype._getMouseBufferCoords = function(e) {
        const t = this._terminal.mouseHelper.getCoords(e, this._terminal.screenElement, this._charMeasure, this._terminal.options.lineHeight, this._terminal.cols, this._terminal.rows, true);
        if (t) {
            t[0]--;
            t[1]--;
            t[1] += this._terminal.buffer.ydisp;
            return t;
        }
        return null;
    };
    t.prototype._getMouseEventScrollAmount = function(e) {
        let t = MouseHelper.getCoordsRelativeToElement(e, this._terminal.screenElement)[1];
        const i = this._terminal.rows * Math.ceil(this._charMeasure.height * this._terminal.options.lineHeight);
        if (t >= 0 && t <= i) {
            return 0;
        }
        if (t > i) {
            t -= i;
        }
        t = Math.min(Math.max(t, -50), 50);
        return (t /= 50) / Math.abs(t) + Math.round(14 * t);
    };
    t.prototype.shouldForceSelection = function(e) {
        if (isMac) {
            return e.altKey && this._terminal.options.macOptionClickForcesSelection;
        }
        return e.shiftKey;
    };
    t.prototype.onMouseDown = function(e) {
        this._mouseDownTimeStamp = e.timeStamp;
        if ((e.button !== 2 || !this.hasSelection) && e.button === 0) {
            if (!this._enabled) {
                if (!this.shouldForceSelection(e)) {
                    return;
                }
                e.stopPropagation();
            }
            e.preventDefault();
            this._dragScrollAmount = 0;
            if (this._enabled && e.shiftKey) {
                this._onIncrementalClick(e);
            } else if (e.detail === 1) {
                this._onSingleClick(e);
            } else if (e.detail === 2) {
                this._onDoubleClick(e);
            } else if (e.detail === 3) {
                this._onTripleClick(e);
            }
            this._addMouseDownListeners();
            this.refresh(true);
        }
    };
    t.prototype._addMouseDownListeners = function() {
        const _this = this;
        this._terminal.element.ownerDocument.addEventListener("mousemove", this._mouseMoveListener);
        this._terminal.element.ownerDocument.addEventListener("mouseup", this._mouseUpListener);
        this._dragScrollIntervalTimer = setInterval(()=>_this._dragScroll(), 50);
    };
    t.prototype._removeMouseDownListeners = function() {
        if (this._terminal.element.ownerDocument) {
            this._terminal.element.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener);
            this._terminal.element.ownerDocument.removeEventListener("mouseup", this._mouseUpListener);
        }
        clearInterval(this._dragScrollIntervalTimer);
        this._dragScrollIntervalTimer = null;
    };
    t.prototype._onIncrementalClick = function(e) {
        if (this._model.selectionStart) {
            this._model.selectionEnd = this._getMouseBufferCoords(e);
        }
    };
    t.prototype._onSingleClick = function(e) {
        this._model.selectionStartLength = 0;
        this._model.isSelectAllActive = false;
        this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0;
        this._model.selectionStart = this._getMouseBufferCoords(e);
        if (this._model.selectionStart) {
            this._model.selectionEnd = null;
            const t = this._buffer.lines.get(this._model.selectionStart[1]);
            if (t) {
                if (!(t.length >= this._model.selectionStart[0])) {
                    if (t.get(this._model.selectionStart[0])[CHAR_DATA_WIDTH_INDEX] === 0) {
                        this._model.selectionStart[0]++;
                    }
                }
            }
        }
    };
    t.prototype._onDoubleClick = function(e) {
        const t = this._getMouseBufferCoords(e);
        if (t) {
            this._activeSelectionMode = 1;
            this._selectWordAt(t, true);
        }
    };
    t.prototype._onTripleClick = function(e) {
        const t = this._getMouseBufferCoords(e);
        if (t) {
            this._activeSelectionMode = 2;
            this._selectLineAt(t[1]);
        }
    };
    t.prototype.shouldColumnSelect = function(e) {
        return e.altKey && !(isMac && this._terminal.options.macOptionClickForcesSelection);
    };
    t.prototype._onMouseMove = function(e) {
        e.stopImmediatePropagation();
        const t = this._model.selectionEnd ? [
            this._model.selectionEnd[0],
            this._model.selectionEnd[1]
        ] : null;
        this._model.selectionEnd = this._getMouseBufferCoords(e);
        if (this._model.selectionEnd) {
            if (this._activeSelectionMode === 2) {
                if (this._model.selectionEnd[1] < this._model.selectionStart[1]) {
                    this._model.selectionEnd[0] = 0;
                } else {
                    this._model.selectionEnd[0] = this._terminal.cols;
                }
            } else if (this._activeSelectionMode === 1) {
                this._selectToWordAt(this._model.selectionEnd);
            }
            this._dragScrollAmount = this._getMouseEventScrollAmount(e);
            if (this._activeSelectionMode !== 3) {
                if (this._dragScrollAmount > 0) {
                    this._model.selectionEnd[0] = this._terminal.cols;
                } else if (this._dragScrollAmount < 0) {
                    this._model.selectionEnd[0] = 0;
                }
            }
            if (this._model.selectionEnd[1] < this._buffer.lines.length) {
                const i = this._buffer.lines.get(this._model.selectionEnd[1]).get(this._model.selectionEnd[0]);
                if (i && i[CHAR_DATA_WIDTH_INDEX] === 0) {
                    this._model.selectionEnd[0]++;
                }
            }
            if (!(t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1])) {
                this.refresh(true);
            }
        } else {
            this.refresh(true);
        }
    };
    t.prototype._dragScroll = function() {
        if (this._dragScrollAmount) {
            this._terminal.scrollLines(this._dragScrollAmount, false);
            if (this._dragScrollAmount > 0) {
                if (this._activeSelectionMode !== 3) {
                    this._model.selectionEnd[0] = this._terminal.cols;
                }
                this._model.selectionEnd[1] = Math.min(this._terminal.buffer.ydisp + this._terminal.rows, this._terminal.buffer.lines.length - 1);
            } else {
                if (this._activeSelectionMode !== 3) {
                    this._model.selectionEnd[0] = 0;
                }
                this._model.selectionEnd[1] = this._terminal.buffer.ydisp;
            }
            this.refresh();
        }
    };
    t.prototype._onMouseUp = function(e) {
        const t = e.timeStamp - this._mouseDownTimeStamp;
        this._removeMouseDownListeners();
        if (this.selectionText.length <= 1 && t < 500) {
            new AltClickHandler(e, this._terminal).move();
        } else if (this.hasSelection) {
            this._terminal.emit("selection");
        }
    };
    t.prototype._onBufferActivate = function(e) {
        this.clearSelection();
        e.inactiveBuffer.lines.off("trim", this._trimListener);
        e.activeBuffer.lines.on("trim", this._trimListener);
    };
    t.prototype._convertViewportColToCharacterIndex = function(e, t) {
        let i = t[0];
        for(let r = 0; t[0] >= r; r++){
            const n = e.get(r);
            if (n[CHAR_DATA_WIDTH_INDEX] === 0) {
                i--;
            } else if (n[CHAR_DATA_CHAR_INDEX].length > 1 && t[0] !== r) {
                i += n[CHAR_DATA_CHAR_INDEX].length - 1;
            }
        }
        return i;
    };
    t.prototype.setSelection = function(e, t, i) {
        this._model.clearSelection();
        this._removeMouseDownListeners();
        this._model.selectionStart = [
            e,
            t
        ];
        this._model.selectionStartLength = i;
        this.refresh();
    };
    t.prototype._getWordAt = function(e, t, i = true, r = true) {
        if (e[0] >= this._terminal.cols) {
            return null;
        }
        const n = this._buffer.lines.get(e[1]);
        if (!n) {
            return null;
        }
        const s = this._buffer.translateBufferLineToString(e[1], false);
        let o = this._convertViewportColToCharacterIndex(n, e);
        let a = o;
        const l = e[0] - o;
        let c = 0;
        let u = 0;
        let _ = 0;
        let f = 0;
        if (s.charAt(o) === " ") {
            while(o > 0 && s.charAt(o - 1) === " "){
                o--;
            }
            while(a < s.length && s.charAt(a + 1) === " "){
                a++;
            }
        } else {
            let d = e[0];
            let p = e[0];
            if (n.get(d)[CHAR_DATA_WIDTH_INDEX] === 0) {
                c++;
                d--;
            }
            if (n.get(p)[CHAR_DATA_WIDTH_INDEX] === 2) {
                u++;
                p++;
            }
            if (n.get(p)[CHAR_DATA_CHAR_INDEX].length > 1) {
                f += n.get(p)[CHAR_DATA_CHAR_INDEX].length - 1;
                a += n.get(p)[CHAR_DATA_CHAR_INDEX].length - 1;
            }
            while(d > 0 && o > 0 && !this._isCharWordSeparator(n.get(d - 1))){
                if ((m = n.get(d - 1))[CHAR_DATA_WIDTH_INDEX] === 0) {
                    c++;
                    d--;
                } else if (m[CHAR_DATA_CHAR_INDEX].length > 1) {
                    _ += m[CHAR_DATA_CHAR_INDEX].length - 1;
                    o -= m[CHAR_DATA_CHAR_INDEX].length - 1;
                }
                o--;
                d--;
            }
            while(p < n.length && a + 1 < s.length && !this._isCharWordSeparator(n.get(p + 1))){
                var m;
                if ((m = n.get(p + 1))[CHAR_DATA_WIDTH_INDEX] === 2) {
                    u++;
                    p++;
                } else if (m[CHAR_DATA_CHAR_INDEX].length > 1) {
                    f += m[CHAR_DATA_CHAR_INDEX].length - 1;
                    a += m[CHAR_DATA_CHAR_INDEX].length - 1;
                }
                a++;
                p++;
            }
        }
        a++;
        let start = o + l - c + _;
        let length = Math.min(this._terminal.cols, a - o + c + u - _ - f);
        if (!t && s.slice(o, a).trim() === "") {
            return null;
        }
        if (i && start === 0 && n.get(0)[CHAR_DATA_CODE_INDEX] !== 32) {
            const g = this._buffer.lines.get(e[1] - 1);
            if (g && n.isWrapped && g.get(this._terminal.cols - 1)[CHAR_DATA_CODE_INDEX] !== 32) {
                const v = this._getWordAt([
                    this._terminal.cols - 1,
                    e[1] - 1
                ], false, true, false);
                if (v) {
                    const b = this._terminal.cols - v.start;
                    start -= b;
                    length += b;
                }
            }
        }
        if (r && start + length === this._terminal.cols && n.get(this._terminal.cols - 1)[CHAR_DATA_CODE_INDEX] !== 32) {
            const w = this._buffer.lines.get(e[1] + 1);
            if (w && w.isWrapped && w.get(0)[CHAR_DATA_CODE_INDEX] !== 32) {
                const S = this._getWordAt([
                    0,
                    e[1] + 1
                ], false, false, true);
                if (S) {
                    length += S.length;
                }
            }
        }
        return {
            start,
            length
        };
    };
    t.prototype._selectWordAt = function(e, t) {
        const i = this._getWordAt(e, t);
        if (i) {
            while(i.start < 0){
                i.start += this._terminal.cols;
                e[1]--;
            }
            this._model.selectionStart = [
                i.start,
                e[1]
            ];
            this._model.selectionStartLength = i.length;
        }
    };
    t.prototype._selectToWordAt = function(e) {
        const t = this._getWordAt(e, true);
        if (t) {
            let i = e[1];
            while(t.start < 0){
                t.start += this._terminal.cols;
                i--;
            }
            if (!this._model.areSelectionValuesReversed()) {
                while(t.start + t.length > this._terminal.cols){
                    t.length -= this._terminal.cols;
                    i++;
                }
            }
            this._model.selectionEnd = [
                this._model.areSelectionValuesReversed() ? t.start : t.start + t.length,
                i
            ];
        }
    };
    t.prototype._isCharWordSeparator = function(e) {
        return e[CHAR_DATA_WIDTH_INDEX] !== 0 && " ()[]{}'\"".indexOf(e[CHAR_DATA_CHAR_INDEX]) >= 0;
    };
    t.prototype._selectLineAt = function(e) {
        const t = this._buffer.getWrappedRangeForLine(e);
        this._model.selectionStart = [
            0,
            t.first
        ];
        this._model.selectionEnd = [
            this._terminal.cols,
            t.last
        ];
        this._model.selectionStartLength = 0;
    };
    return t;
})(EventEmitter);
