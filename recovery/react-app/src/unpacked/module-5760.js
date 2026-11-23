import { blankLine, tooMuchOutput } from "unpacked/module-1467.js";
import { isMac } from "unpacked/module-1147.js";
import { RenderDebouncer } from "unpacked/module-1466.js";
import { addDisposableDomListener } from "unpacked/module-1254.js";
import { Disposable } from "unpacked/module-1027.js";
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
export const AccessibilityManager = ((Disposable_1)=>{
    function t(t) {
        const i = Disposable_1.call(this) || this;
        i._terminal = t;
        i._liveRegionLineCount = 0;
        i._charsToConsume = [];
        i._accessibilityTreeRoot = document.createElement("div");
        i._accessibilityTreeRoot.classList.add("xterm-accessibility");
        i._rowContainer = document.createElement("div");
        i._rowContainer.classList.add("xterm-accessibility-tree");
        i._rowElements = [];
        for(let r = 0; r < i._terminal.rows; r++){
            i._rowElements[r] = i._createAccessibilityTreeNode();
            i._rowContainer.appendChild(i._rowElements[r]);
        }
        i._topBoundaryFocusListener = function(e) {
            return i._onBoundaryFocus(e, 0);
        };
        i._bottomBoundaryFocusListener = function(e) {
            return i._onBoundaryFocus(e, 1);
        };
        i._rowElements[0].addEventListener("focus", i._topBoundaryFocusListener);
        i._rowElements[i._rowElements.length - 1].addEventListener("focus", i._bottomBoundaryFocusListener);
        i._refreshRowsDimensions();
        i._accessibilityTreeRoot.appendChild(i._rowContainer);
        i._renderRowsDebouncer = new RenderDebouncer(i._terminal, i._renderRows.bind(i));
        i._refreshRows();
        i._liveRegion = document.createElement("div");
        i._liveRegion.classList.add("live-region");
        i._liveRegion.setAttribute("aria-live", "assertive");
        i._accessibilityTreeRoot.appendChild(i._liveRegion);
        i._terminal.element.insertAdjacentElement("afterbegin", i._accessibilityTreeRoot);
        i.register(i._renderRowsDebouncer);
        i.register(i._terminal.addDisposableListener("resize", function(e) {
            return i._onResize(e.rows);
        }));
        i.register(i._terminal.addDisposableListener("refresh", function(e) {
            return i._refreshRows(e.start, e.end);
        }));
        i.register(i._terminal.addDisposableListener("scroll", function(e) {
            return i._refreshRows();
        }));
        i.register(i._terminal.addDisposableListener("a11y.char", function(e) {
            return i._onChar(e);
        }));
        i.register(i._terminal.addDisposableListener("linefeed", function() {
            return i._onChar("\n");
        }));
        i.register(i._terminal.addDisposableListener("a11y.tab", function(e) {
            return i._onTab(e);
        }));
        i.register(i._terminal.addDisposableListener("key", function(e) {
            return i._onKey(e);
        }));
        i.register(i._terminal.addDisposableListener("blur", function() {
            return i._clearLiveRegion();
        }));
        i.register(i._terminal.addDisposableListener("dprchange", function() {
            return i._refreshRowsDimensions();
        }));
        i.register(i._terminal.renderer.addDisposableListener("resize", function() {
            return i._refreshRowsDimensions();
        }));
        i.register(addDisposableDomListener(window, "resize", function() {
            return i._refreshRowsDimensions();
        }));
        return i;
    }
    n(t, Disposable_1);
    t.prototype.dispose = function() {
        Disposable_1.prototype.dispose.call(this);
        this._terminal.element.removeChild(this._accessibilityTreeRoot);
        this._rowElements.length = 0;
    };
    t.prototype._onBoundaryFocus = function(e, t) {
        const e_target = e.target;
        const r = this._rowElements[t === 0 ? 1 : this._rowElements.length - 2];
        if (e_target.getAttribute("aria-posinset") !== (t === 0 ? "1" : `${this._terminal.buffer.lines.length}`) && e.relatedTarget === r) {
            let n;
            let s;
            if (t === 0) {
                n = e_target;
                s = this._rowElements.pop();
                this._rowContainer.removeChild(s);
            } else {
                n = this._rowElements.shift();
                s = e_target;
                this._rowContainer.removeChild(n);
            }
            n.removeEventListener("focus", this._topBoundaryFocusListener);
            s.removeEventListener("focus", this._bottomBoundaryFocusListener);
            if (t === 0) {
                var o = this._createAccessibilityTreeNode();
                this._rowElements.unshift(o);
                this._rowContainer.insertAdjacentElement("afterbegin", o);
            } else {
                o = this._createAccessibilityTreeNode();
                this._rowElements.push(o);
                this._rowContainer.appendChild(o);
            }
            this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener);
            this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener);
            this._terminal.scrollLines(t === 0 ? -1 : 1);
            this._rowElements[t === 0 ? 1 : this._rowElements.length - 2].focus();
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    };
    t.prototype._onResize = function(e) {
        this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
        for(let t = this._rowContainer.children.length; t < this._terminal.rows; t++){
            this._rowElements[t] = this._createAccessibilityTreeNode();
            this._rowContainer.appendChild(this._rowElements[t]);
        }
        while(this._rowElements.length > e){
            this._rowContainer.removeChild(this._rowElements.pop());
        }
        this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener);
        this._refreshRowsDimensions();
    };
    t.prototype._createAccessibilityTreeNode = function() {
        const divElement = document.createElement("div");
        divElement.setAttribute("role", "listitem");
        divElement.tabIndex = -1;
        this._refreshRowDimensions(divElement);
        return divElement;
    };
    t.prototype._onTab = function(e) {
        for(let t = 0; t < e; t++){
            this._onChar(" ");
        }
    };
    t.prototype._onChar = function(e) {
        const _this = this;
        if (this._liveRegionLineCount < 21) {
            if (this._charsToConsume.length > 0) {
                if (this._charsToConsume.shift() !== e) {
                    this._announceCharacter(e);
                }
            } else {
                this._announceCharacter(e);
            }
            if (e === "\n") {
                this._liveRegionLineCount++;
                if (this._liveRegionLineCount === 21) {
                    this._liveRegion.textContent += tooMuchOutput;
                }
            }
            if (isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode) {
                setTimeout(()=>{
                    _this._accessibilityTreeRoot.appendChild(_this._liveRegion);
                }, 0);
            }
        }
    };
    t.prototype._clearLiveRegion = function() {
        this._liveRegion.textContent = "";
        this._liveRegionLineCount = 0;
        if (isMac && this._liveRegion.parentNode) {
            this._accessibilityTreeRoot.removeChild(this._liveRegion);
        }
    };
    t.prototype._onKey = function(e) {
        this._clearLiveRegion();
        this._charsToConsume.push(e);
    };
    t.prototype._refreshRows = function(e, t) {
        this._renderRowsDebouncer.refresh(e, t);
    };
    t.prototype._renderRows = function(e, t) {
        const buffer = this._terminal.buffer;
        const r = buffer.lines.length.toString();
        for(let n = e; n <= t; n++){
            const o = buffer.translateBufferLineToString(buffer.ydisp + n, true);
            const a = (buffer.ydisp + n + 1).toString();
            const l = this._rowElements[n];
            l.textContent = o.length === 0 ? blankLine : o;
            l.setAttribute("aria-posinset", a);
            l.setAttribute("aria-setsize", r);
        }
    };
    t.prototype._refreshRowsDimensions = function() {
        if (this._terminal.renderer.dimensions.actualCellHeight) {
            if (this._rowElements.length !== this._terminal.rows) {
                this._onResize(this._terminal.rows);
            }
            for(let e = 0; e < this._terminal.rows; e++){
                this._refreshRowDimensions(this._rowElements[e]);
            }
        }
    };
    t.prototype._refreshRowDimensions = function(e) {
        e.style.height = `${this._terminal.renderer.dimensions.actualCellHeight}px`;
    };
    t.prototype._announceCharacter = function(e) {
        if (e === " ") {
            this._liveRegion.innerHTML += "&nbsp;";
        } else {
            this._liveRegion.textContent += e;
        }
    };
    return t;
})(Disposable);
