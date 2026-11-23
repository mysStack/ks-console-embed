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
export const MouseZoneManager = ((Disposable_1)=>{
    function t(t) {
        const i = Disposable_1.call(this) || this;
        i._terminal = t;
        i._zones = [];
        i._areZonesActive = false;
        i._tooltipTimeout = null;
        i._currentZone = null;
        i._lastHoverCoords = [
            null,
            null
        ];
        i.register(addDisposableDomListener(i._terminal.element, "mousedown", function(e) {
            return i._onMouseDown(e);
        }));
        i._mouseMoveListener = function(e) {
            return i._onMouseMove(e);
        };
        i._clickListener = function(e) {
            return i._onClick(e);
        };
        return i;
    }
    n(t, Disposable_1);
    t.prototype.dispose = function() {
        Disposable_1.prototype.dispose.call(this);
        this._deactivate();
    };
    t.prototype.add = function(e) {
        this._zones.push(e);
        if (this._zones.length === 1) {
            this._activate();
        }
    };
    t.prototype.clearAll = function(e, t) {
        if (this._zones.length !== 0) {
            if (!t) {
                e = 0;
                t = this._terminal.rows - 1;
            }
            for(let i = 0; i < this._zones.length; i++){
                const _zone = this._zones[i];
                if (_zone.y1 > e && _zone.y1 <= t + 1 || _zone.y2 > e && _zone.y2 <= t + 1 || _zone.y1 < e && _zone.y2 > t + 1) {
                    if (this._currentZone && this._currentZone === _zone) {
                        this._currentZone.leaveCallback();
                        this._currentZone = null;
                    }
                    this._zones.splice(i--, 1);
                }
            }
            if (this._zones.length === 0) {
                this._deactivate();
            }
        }
    };
    t.prototype._activate = function() {
        if (!this._areZonesActive) {
            this._areZonesActive = true;
            this._terminal.element.addEventListener("mousemove", this._mouseMoveListener);
            this._terminal.element.addEventListener("click", this._clickListener);
        }
    };
    t.prototype._deactivate = function() {
        if (this._areZonesActive) {
            this._areZonesActive = false;
            this._terminal.element.removeEventListener("mousemove", this._mouseMoveListener);
            this._terminal.element.removeEventListener("click", this._clickListener);
        }
    };
    t.prototype._onMouseMove = function(e) {
        if (!(this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY)) {
            this._onHover(e);
            this._lastHoverCoords = [
                e.pageX,
                e.pageY
            ];
        }
    };
    t.prototype._onHover = function(e) {
        const _this = this;
        const i = this._findZoneEventAt(e);
        if (i !== this._currentZone) {
            if (this._currentZone) {
                this._currentZone.leaveCallback();
                this._currentZone = null;
                if (this._tooltipTimeout) {
                    clearTimeout(this._tooltipTimeout);
                }
            }
            if (i) {
                this._currentZone = i;
                if (i.hoverCallback) {
                    i.hoverCallback(e);
                }
                this._tooltipTimeout = setTimeout(()=>_this._onTooltip(e), 500);
            }
        }
    };
    t.prototype._onTooltip = function(e) {
        this._tooltipTimeout = null;
        const t = this._findZoneEventAt(e);
        if (t && t.tooltipCallback) {
            t.tooltipCallback(e);
        }
    };
    t.prototype._onMouseDown = function(e) {
        if (this._areZonesActive) {
            const t = this._findZoneEventAt(e);
            if (t && t.willLinkActivate(e)) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }
    };
    t.prototype._onClick = function(e) {
        const t = this._findZoneEventAt(e);
        if (t) {
            t.clickCallback(e);
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    };
    t.prototype._findZoneEventAt = function(e) {
        const t = this._terminal.mouseHelper.getCoords(e, this._terminal.screenElement, this._terminal.charMeasure, this._terminal.options.lineHeight, this._terminal.cols, this._terminal.rows);
        if (!t) {
            return null;
        }
        const i = t[0];
        const r = t[1];
        for(let n = 0; n < this._zones.length; n++){
            const _zone = this._zones[n];
            if (_zone.y1 === _zone.y2) {
                if (r === _zone.y1 && i >= _zone.x1 && i < _zone.x2) {
                    return _zone;
                }
            } else if (r === _zone.y1 && i >= _zone.x1 || r === _zone.y2 && i < _zone.x2 || r > _zone.y1 && r < _zone.y2) {
                return _zone;
            }
        }
        return null;
    };
    return t;
})(Disposable);
export const MouseZone = function(e, t, i, r, n, s, o, a, l) {
    this.x1 = e;
    this.y1 = t;
    this.x2 = i;
    this.y2 = r;
    this.clickCallback = n;
    this.hoverCallback = s;
    this.tooltipCallback = o;
    this.leaveCallback = a;
    this.willLinkActivate = l;
};
