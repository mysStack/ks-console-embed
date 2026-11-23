import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module31 from "./module-31.js";
import "./module-1756.js";
export const DEFAULT_HEIGHT = 30;
export const DEFAULT_WIDTH = 100;
const f = (()=>{
    function e(n = {}) {
        const _this = this;
        module36(this, e);
        module31(this, "_cellHeightCache", {});
        module31(this, "_cellWidthCache", {});
        module31(this, "_columnWidthCache", {});
        module31(this, "_rowHeightCache", {});
        module31(this, "_defaultHeight", undefined);
        module31(this, "_defaultWidth", undefined);
        module31(this, "_minHeight", undefined);
        module31(this, "_minWidth", undefined);
        module31(this, "_keyMapper", undefined);
        module31(this, "_hasFixedHeight", undefined);
        module31(this, "_hasFixedWidth", undefined);
        module31(this, "_columnCount", 0);
        module31(this, "_rowCount", 0);
        module31(this, "columnWidth", function({ index }) {
            const r = _this._keyMapper(0, index);
            if (_this._columnWidthCache[r] !== undefined) {
                return _this._columnWidthCache[r];
            }
            return _this._defaultWidth;
        });
        module31(this, "rowHeight", function({ index }) {
            const r = _this._keyMapper(index, 0);
            if (_this._rowHeightCache[r] !== undefined) {
                return _this._rowHeightCache[r];
            }
            return _this._defaultHeight;
        });
        const { defaultHeight, defaultWidth, fixedHeight, fixedWidth, keyMapper, minHeight, minWidth } = n;
        this._hasFixedHeight = fixedHeight === true;
        this._hasFixedWidth = fixedWidth === true;
        this._minHeight = minHeight || 0;
        this._minWidth = minWidth || 0;
        this._keyMapper = keyMapper || d;
        this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === "number" ? defaultHeight : DEFAULT_HEIGHT);
        this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === "number" ? defaultWidth : DEFAULT_WIDTH);
    }
    module37(e, [
        {
            key: "clear",
            value: function(e, t = 0) {
                const n = this._keyMapper(e, t);
                delete this._cellHeightCache[n];
                delete this._cellWidthCache[n];
                this._updateCachedColumnAndRowSizes(e, t);
            }
        },
        {
            key: "clearAll",
            value: function() {
                this._cellHeightCache = {};
                this._cellWidthCache = {};
                this._columnWidthCache = {};
                this._rowHeightCache = {};
                this._rowCount = 0;
                this._columnCount = 0;
            }
        },
        {
            key: "hasFixedHeight",
            value: function() {
                return this._hasFixedHeight;
            }
        },
        {
            key: "hasFixedWidth",
            value: function() {
                return this._hasFixedWidth;
            }
        },
        {
            key: "getHeight",
            value: function(e, t = 0) {
                if (this._hasFixedHeight) {
                    return this._defaultHeight;
                }
                const n = this._keyMapper(e, t);
                if (this._cellHeightCache[n] !== undefined) {
                    return Math.max(this._minHeight, this._cellHeightCache[n]);
                }
                return this._defaultHeight;
            }
        },
        {
            key: "getWidth",
            value: function(e, t = 0) {
                if (this._hasFixedWidth) {
                    return this._defaultWidth;
                }
                const n = this._keyMapper(e, t);
                if (this._cellWidthCache[n] !== undefined) {
                    return Math.max(this._minWidth, this._cellWidthCache[n]);
                }
                return this._defaultWidth;
            }
        },
        {
            key: "has",
            value: function(e, t = 0) {
                const n = this._keyMapper(e, t);
                return this._cellHeightCache[n] !== undefined;
            }
        },
        {
            key: "set",
            value: function(e, t, n, r) {
                const o = this._keyMapper(e, t);
                if (t >= this._columnCount) {
                    this._columnCount = t + 1;
                }
                if (e >= this._rowCount) {
                    this._rowCount = e + 1;
                }
                this._cellHeightCache[o] = r;
                this._cellWidthCache[o] = n;
                this._updateCachedColumnAndRowSizes(e, t);
            }
        },
        {
            key: "_updateCachedColumnAndRowSizes",
            value: function(e, t) {
                if (!this._hasFixedWidth) {
                    let n = 0;
                    for(let r = 0; r < this._rowCount; r++){
                        n = Math.max(n, this.getWidth(r, t));
                    }
                    const o = this._keyMapper(0, t);
                    this._columnWidthCache[o] = n;
                }
                if (!this._hasFixedHeight) {
                    let i = 0;
                    for(let a = 0; a < this._columnCount; a++){
                        i = Math.max(i, this.getHeight(e, a));
                    }
                    const l = this._keyMapper(e, 0);
                    this._rowHeightCache[l] = i;
                }
            }
        },
        {
            key: "defaultHeight",
            get: function() {
                return this._defaultHeight;
            }
        },
        {
            key: "defaultWidth",
            get: function() {
                return this._defaultWidth;
            }
        }
    ]);
    return e;
})();
export { f as default };
function d(e, t) {
    return `${e}-${t}`;
}
