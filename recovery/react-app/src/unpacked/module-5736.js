import { Disposable } from "unpacked/module-1027.js";
import { addDisposableDomListener } from "unpacked/module-1254.js";
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
export const Viewport = ((Disposable_1)=>{
    function t(t, i, r, n) {
        const s = Disposable_1.call(this) || this;
        s._terminal = t;
        s._viewportElement = i;
        s._scrollArea = r;
        s._charMeasure = n;
        s.scrollBarWidth = 0;
        s._currentRowHeight = 0;
        s._lastRecordedBufferLength = 0;
        s._lastRecordedViewportHeight = 0;
        s._lastRecordedBufferHeight = 0;
        s._lastScrollTop = 0;
        s._wheelPartialScroll = 0;
        s._refreshAnimationFrame = null;
        s._ignoreNextScrollEvent = false;
        s.scrollBarWidth = s._viewportElement.offsetWidth - s._scrollArea.offsetWidth || 15;
        s.register(addDisposableDomListener(s._viewportElement, "scroll", s._onScroll.bind(s)));
        setTimeout(()=>s.syncScrollArea(), 0);
        return s;
    }
    n(t, Disposable_1);
    t.prototype.onThemeChanged = function(e) {
        this._viewportElement.style.backgroundColor = e.background.css;
    };
    t.prototype._refresh = function() {
        const _this = this;
        if (this._refreshAnimationFrame === null) {
            this._refreshAnimationFrame = requestAnimationFrame(()=>_this._innerRefresh());
        }
    };
    t.prototype._innerRefresh = function() {
        if (this._charMeasure.height > 0) {
            this._currentRowHeight = this._terminal.renderer.dimensions.scaledCellHeight / window.devicePixelRatio;
            this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
            const e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._terminal.renderer.dimensions.canvasHeight);
            if (this._lastRecordedBufferHeight !== e) {
                this._lastRecordedBufferHeight = e;
                this._scrollArea.style.height = `${this._lastRecordedBufferHeight}px`;
            }
        }
        const t = this._terminal.buffer.ydisp * this._currentRowHeight;
        if (this._viewportElement.scrollTop !== t) {
            this._ignoreNextScrollEvent = true;
            this._viewportElement.scrollTop = t;
        }
        this._refreshAnimationFrame = null;
    };
    t.prototype.syncScrollArea = function() {
        if (this._lastRecordedBufferLength !== this._terminal.buffer.lines.length) {
            this._lastRecordedBufferLength = this._terminal.buffer.lines.length;
            return void this._refresh();
        }
        if (this._lastRecordedViewportHeight === this._terminal.renderer.dimensions.canvasHeight) {
            const e = this._terminal.buffer.ydisp * this._currentRowHeight;
            if (!(this._lastScrollTop === e && this._lastScrollTop === this._viewportElement.scrollTop && this._terminal.renderer.dimensions.scaledCellHeight / window.devicePixelRatio === this._currentRowHeight)) {
                this._refresh();
            }
        } else {
            this._refresh();
        }
    };
    t.prototype._onScroll = function(e) {
        this._lastScrollTop = this._viewportElement.scrollTop;
        if (this._viewportElement.offsetParent) {
            if (this._ignoreNextScrollEvent) {
                this._ignoreNextScrollEvent = false;
            } else {
                const t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._terminal.buffer.ydisp;
                this._terminal.scrollLines(t, true);
            }
        }
    };
    t.prototype.onWheel = function(e) {
        const t = this._getPixelsScrolled(e);
        if (t !== 0) {
            this._viewportElement.scrollTop += t;
            e.preventDefault();
        }
    };
    t.prototype._getPixelsScrolled = function(e) {
        if (e.deltaY === 0) {
            return 0;
        }
        let e_deltaY = e.deltaY;
        if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) {
            e_deltaY *= this._currentRowHeight;
        } else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
            e_deltaY *= this._currentRowHeight * this._terminal.rows;
        }
        return e_deltaY;
    };
    t.prototype.getLinesScrolled = function(e) {
        if (e.deltaY === 0) {
            return 0;
        }
        let e_deltaY = e.deltaY;
        if (e.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
            e_deltaY /= this._currentRowHeight + 0;
            this._wheelPartialScroll += e_deltaY;
            e_deltaY = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1);
            this._wheelPartialScroll %= 1;
        } else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
            e_deltaY *= this._terminal.rows;
        }
        return e_deltaY;
    };
    t.prototype.onTouchStart = function(e) {
        this._lastTouchY = e.touches[0].pageY;
    };
    t.prototype.onTouchMove = function(e) {
        const t = this._lastTouchY - e.touches[0].pageY;
        this._lastTouchY = e.touches[0].pageY;
        if (t !== 0) {
            this._viewportElement.scrollTop += t;
            e.preventDefault();
        }
    };
    return t;
})(Disposable);
