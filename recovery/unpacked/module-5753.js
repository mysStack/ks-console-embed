import { MouseZone } from "./module-2014.js";
import { EventEmitter } from "./module-965.js";
import { CHAR_DATA_ATTR_INDEX } from "./module-923.js";
import { getStringCellWidth } from "./module-2009.js";
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
export const Linkifier = ((EventEmitter_1)=>{
    function t(t) {
        const i = EventEmitter_1.call(this) || this;
        i._terminal = t;
        i._linkMatchers = [];
        i._nextLinkMatcherId = 0;
        i._rowsToLinkify = {
            start: null,
            end: null
        };
        return i;
    }
    n(t, EventEmitter_1);
    t.prototype.attachToDom = function(e) {
        this._mouseZoneManager = e;
    };
    t.prototype.linkifyRows = function(e, i) {
        const _this = this;
        if (this._mouseZoneManager) {
            if (this._rowsToLinkify.start === null) {
                this._rowsToLinkify.start = e;
                this._rowsToLinkify.end = i;
            } else {
                this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, e);
                this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, i);
            }
            this._mouseZoneManager.clearAll(e, i);
            if (this._rowsTimeoutId) {
                clearTimeout(this._rowsTimeoutId);
            }
            this._rowsTimeoutId = setTimeout(()=>_this._linkifyRows(), t.TIME_BEFORE_LINKIFY);
        }
    };
    t.prototype._linkifyRows = function() {
        this._rowsTimeoutId = null;
        const buffer = this._terminal.buffer;
        const i = buffer.ydisp + this._rowsToLinkify.start;
        if (!(i >= buffer.lines.length)) {
            const r = buffer.ydisp + Math.min(this._rowsToLinkify.end, this._terminal.rows) + 1;
            const n = Math.ceil(t.OVERSCAN_CHAR_LIMIT / this._terminal.cols);
            for(const s = this._terminal.buffer.iterator(false, i, r, n, n); s.hasNext();){
                const o = s.next();
                for(let a = 0; a < this._linkMatchers.length; a++){
                    this._doLinkifyRow(o.range.first, o.content, this._linkMatchers[a]);
                }
            }
            this._rowsToLinkify.start = null;
            this._rowsToLinkify.end = null;
        }
    };
    t.prototype.registerLinkMatcher = function(regex, handler, i = {}) {
        if (!handler) {
            throw new Error("handler must be defined");
        }
        const r = {
            id: this._nextLinkMatcherId++,
            regex,
            handler,
            matchIndex: i.matchIndex,
            validationCallback: i.validationCallback,
            hoverTooltipCallback: i.tooltipCallback,
            hoverLeaveCallback: i.leaveCallback,
            willLinkActivate: i.willLinkActivate,
            priority: i.priority || 0
        };
        this._addLinkMatcherToList(r);
        return r.id;
    };
    t.prototype._addLinkMatcherToList = function(e) {
        if (this._linkMatchers.length !== 0) {
            for(let t = this._linkMatchers.length - 1; t >= 0; t--){
                if (e.priority <= this._linkMatchers[t].priority) {
                    return void this._linkMatchers.splice(t + 1, 0, e);
                }
            }
            this._linkMatchers.splice(0, 0, e);
        } else {
            this._linkMatchers.push(e);
        }
    };
    t.prototype.deregisterLinkMatcher = function(e) {
        for(let t = 0; t < this._linkMatchers.length; t++){
            if (this._linkMatchers[t].id === e) {
                this._linkMatchers.splice(t, 1);
                return true;
            }
        }
        return false;
    };
    t.prototype._doLinkifyRow = function(e, t, matcher) {
        let match;
        const _this = this;
        for(var s = new RegExp(matcher.regex.source, `${matcher.regex.flags}g`), o = -1, l = ()=>{
            const l = match[typeof matcher.matchIndex !== "number" ? 0 : matcher.matchIndex];
            if (!l) {
                if (h._terminal.debug) {
                    console.log({
                        match,
                        matcher
                    });
                    throw new Error("match found without corresponding matchIndex");
                }
                return "break";
            }
            o = t.indexOf(l, o + 1);
            s.lastIndex = o + l.length;
            let c;
            const u = h._terminal.buffer.stringIndexToBufferIndex(e, o);
            const _ = h._terminal.buffer.lines.get(u[0]).get(u[1]);
            if (_) {
                const f = _[CHAR_DATA_ATTR_INDEX];
                c = f >> 9 & 511;
            }
            if (matcher.validationCallback) {
                matcher.validationCallback(l, function(e) {
                    if (!_this._rowsTimeoutId) {
                        if (e) {
                            _this._addLink(u[1], u[0] - _this._terminal.buffer.ydisp, l, matcher, c);
                        }
                    }
                });
            } else {
                h._addLink(u[1], u[0] - h._terminal.buffer.ydisp, l, matcher, c);
            }
        }, h = this; (match = s.exec(t)) !== null && l() !== "break";);
    };
    t.prototype._addLink = function(e, t, i, r, n) {
        const _this = this;
        const a = getStringCellWidth(i);
        const h = e % this._terminal.cols;
        const c = t + Math.floor(e / this._terminal.cols);
        let u = (h + a) % this._terminal.cols;
        let _ = c + Math.floor((h + a) / this._terminal.cols);
        if (u === 0) {
            u = this._terminal.cols;
            _--;
        }
        this._mouseZoneManager.add(new MouseZone(h + 1, c + 1, u + 1, _ + 1, function(e) {
            if (r.handler) {
                return r.handler(e, i);
            }
            window.open(i, "_blank");
        }, function(e) {
            _this.emit("linkhover", _this._createLinkHoverEvent(h, c, u, _, n));
            _this._terminal.element.classList.add("xterm-cursor-pointer");
        }, function(e) {
            _this.emit("linktooltip", _this._createLinkHoverEvent(h, c, u, _, n));
            if (r.hoverTooltipCallback) {
                r.hoverTooltipCallback(e, i);
            }
        }, function() {
            _this.emit("linkleave", _this._createLinkHoverEvent(h, c, u, _, n));
            _this._terminal.element.classList.remove("xterm-cursor-pointer");
            if (r.hoverLeaveCallback) {
                r.hoverLeaveCallback();
            }
        }, function(e) {
            return !r.willLinkActivate || r.willLinkActivate(e, i);
        }));
    };
    t.prototype._createLinkHoverEvent = function(x1, y1, x2, y2, fg) {
        return {
            x1,
            y1,
            x2,
            y2,
            cols: this._terminal.cols,
            fg
        };
    };
    t.TIME_BEFORE_LINKIFY = 200;
    t.OVERSCAN_CHAR_LIMIT = 2000;
    return t;
})(EventEmitter);
