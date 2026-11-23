import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module31 from "./module-31.js";
import { PureComponent } from "./module-553.js";
import "./module-58.js";
import "./module-1.js";
import { polyfill } from "./module-1151.js";
function x(e) {
    let t;
    let n;
    let r = "";
    if (typeof e === "string" || typeof e === "number") {
        r += e;
    } else if (typeof e === "object") {
        if (Array.isArray(e)) {
            for(t = 0; t < e.length; t++){
                if (e[t] && (n = x(e[t]))) {
                    if (r) {
                        r += " ";
                    }
                    r += n;
                }
            }
        } else {
            for(t in e){
                if (e[t]) {
                    if (r) {
                        r += " ";
                    }
                    r += t;
                }
            }
        }
    }
    return r;
}
const w = (...args)=>{
    let e;
    let t;
    for(var n = 0, r = ""; n < args.length;){
        if ((e = args[n++]) && (t = x(e))) {
            if (r) {
                r += " ";
            }
            r += t;
        }
    }
    return r;
};
function _({ cellCount, cellSize, computeMetadataCallback, computeMetadataCallbackProps, nextCellsCount, nextCellSize, nextScrollToIndex, scrollToIndex, updateScrollOffsetForScrollToIndex }) {
    if (!(cellCount === nextCellsCount && (typeof cellSize !== "number" && typeof nextCellSize !== "number" || cellSize === nextCellSize))) {
        computeMetadataCallback(computeMetadataCallbackProps);
        if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
            updateScrollOffsetForScrollToIndex();
        }
    }
}
const E = (()=>{
    function e({ cellCount, cellSizeGetter, estimatedCellSize }) {
        module36(this, e);
        module31(this, "_cellSizeAndPositionData", {});
        module31(this, "_lastMeasuredIndex", -1);
        module31(this, "_lastBatchedIndex", -1);
        module31(this, "_cellCount", undefined);
        module31(this, "_cellSizeGetter", undefined);
        module31(this, "_estimatedCellSize", undefined);
        this._cellSizeGetter = cellSizeGetter;
        this._cellCount = cellCount;
        this._estimatedCellSize = estimatedCellSize;
    }
    module37(e, [
        {
            key: "areOffsetsAdjusted",
            value: function() {
                return false;
            }
        },
        {
            key: "configure",
            value: function({ cellCount, estimatedCellSize, cellSizeGetter }) {
                this._cellCount = cellCount;
                this._estimatedCellSize = estimatedCellSize;
                this._cellSizeGetter = cellSizeGetter;
            }
        },
        {
            key: "getCellCount",
            value: function() {
                return this._cellCount;
            }
        },
        {
            key: "getEstimatedCellSize",
            value: function() {
                return this._estimatedCellSize;
            }
        },
        {
            key: "getLastMeasuredIndex",
            value: function() {
                return this._lastMeasuredIndex;
            }
        },
        {
            key: "getOffsetAdjustment",
            value: function() {
                return 0;
            }
        },
        {
            key: "getSizeAndPositionOfCell",
            value: function(e) {
                if (e < 0 || e >= this._cellCount) {
                    throw Error(`Requested index ${e} is outside of range 0..${this._cellCount}`);
                }
                if (e > this._lastMeasuredIndex) {
                    const t = this.getSizeAndPositionOfLastMeasuredCell();
                    let offset = t.offset + t.size;
                    for(let index = this._lastMeasuredIndex + 1; index <= e; index++){
                        const size = this._cellSizeGetter({
                            index
                        });
                        if (size === undefined || isNaN(size)) {
                            throw Error(`Invalid size returned for cell ${index} of value ${size}`);
                        }
                        if (size === null) {
                            this._cellSizeAndPositionData[index] = {
                                offset,
                                size: 0
                            };
                            this._lastBatchedIndex = e;
                        } else {
                            this._cellSizeAndPositionData[index] = {
                                offset,
                                size
                            };
                            offset += size;
                            this._lastMeasuredIndex = e;
                        }
                    }
                }
                return this._cellSizeAndPositionData[e];
            }
        },
        {
            key: "getSizeAndPositionOfLastMeasuredCell",
            value: function() {
                if (this._lastMeasuredIndex >= 0) {
                    return this._cellSizeAndPositionData[this._lastMeasuredIndex];
                }
                return {
                    offset: 0,
                    size: 0
                };
            }
        },
        {
            key: "getTotalSize",
            value: function() {
                const e = this.getSizeAndPositionOfLastMeasuredCell();
                return e.offset + e.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
            }
        },
        {
            key: "getUpdatedOffsetForIndex",
            value: function({ align = "auto", containerSize, currentOffset, targetIndex }) {
                if (containerSize <= 0) {
                    return 0;
                }
                let a;
                const l = this.getSizeAndPositionOfCell(targetIndex);
                const l_offset = l.offset;
                const s = l_offset - containerSize + l.size;
                switch(align){
                    case "start":
                        a = l_offset;
                        break;
                    case "end":
                        a = s;
                        break;
                    case "center":
                        a = l_offset - (containerSize - l.size) / 2;
                        break;
                    default:
                        a = Math.max(s, Math.min(l_offset, currentOffset));
                }
                const c = this.getTotalSize();
                return Math.max(0, Math.min(c - containerSize, a));
            }
        },
        {
            key: "getVisibleCellRange",
            value: function({ containerSize, offset }) {
                if (this.getTotalSize() === 0) {
                    return {};
                }
                const r = offset + containerSize;
                const start = this._findNearestCell(offset);
                const i = this.getSizeAndPositionOfCell(start);
                offset = i.offset + i.size;
                for(var stop = start; offset < r && stop < this._cellCount - 1;){
                    stop++;
                    offset += this.getSizeAndPositionOfCell(stop).size;
                }
                return {
                    start,
                    stop
                };
            }
        },
        {
            key: "resetCell",
            value: function(e) {
                this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, e - 1);
            }
        },
        {
            key: "_binarySearch",
            value: function(e, t, n) {
                while(t <= e){
                    const r = t + Math.floor((e - t) / 2);
                    const o = this.getSizeAndPositionOfCell(r).offset;
                    if (o === n) {
                        return r;
                    }
                    if (o < n) {
                        t = r + 1;
                    } else if (o > n) {
                        e = r - 1;
                    }
                }
                if (t > 0) {
                    return t - 1;
                }
                return 0;
            }
        },
        {
            key: "_exponentialSearch",
            value: function(e, t) {
                let n = 1;
                while(e < this._cellCount && this.getSizeAndPositionOfCell(e).offset < t){
                    e += n;
                    n *= 2;
                }
                return this._binarySearch(Math.min(e, this._cellCount - 1), Math.floor(e / 2), t);
            }
        },
        {
            key: "_findNearestCell",
            value: function(e) {
                if (isNaN(e)) {
                    throw Error(`Invalid offset ${e} specified`);
                }
                e = Math.max(0, e);
                const t = this.getSizeAndPositionOfLastMeasuredCell();
                const n = Math.max(0, this._lastMeasuredIndex);
                if (t.offset >= e) {
                    return this._binarySearch(n, 0, e);
                }
                return this._exponentialSearch(n, e);
            }
        }
    ]);
    return e;
})();
const M = (()=>{
    function e({ maxScrollSize = typeof window !== "undefined" && window.chrome ? 16777100 : 1500000, ...rest }) {
        module36(this, e);
        module31(this, "_cellSizeAndPositionManager", undefined);
        module31(this, "_maxScrollSize", undefined);
        this._cellSizeAndPositionManager = new E(rest);
        this._maxScrollSize = maxScrollSize;
    }
    module37(e, [
        {
            key: "areOffsetsAdjusted",
            value: function() {
                return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
            }
        },
        {
            key: "configure",
            value: function(e) {
                this._cellSizeAndPositionManager.configure(e);
            }
        },
        {
            key: "getCellCount",
            value: function() {
                return this._cellSizeAndPositionManager.getCellCount();
            }
        },
        {
            key: "getEstimatedCellSize",
            value: function() {
                return this._cellSizeAndPositionManager.getEstimatedCellSize();
            }
        },
        {
            key: "getLastMeasuredIndex",
            value: function() {
                return this._cellSizeAndPositionManager.getLastMeasuredIndex();
            }
        },
        {
            key: "getOffsetAdjustment",
            value: function({ containerSize, offset }) {
                const r = this._cellSizeAndPositionManager.getTotalSize();
                const o = this.getTotalSize();
                const i = this._getOffsetPercentage({
                    containerSize,
                    offset,
                    totalSize: o
                });
                return Math.round(i * (o - r));
            }
        },
        {
            key: "getSizeAndPositionOfCell",
            value: function(e) {
                return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e);
            }
        },
        {
            key: "getSizeAndPositionOfLastMeasuredCell",
            value: function() {
                return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
            }
        },
        {
            key: "getTotalSize",
            value: function() {
                return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
            }
        },
        {
            key: "getUpdatedOffsetForIndex",
            value: function({ align = "auto", containerSize, currentOffset, targetIndex }) {
                currentOffset = this._safeOffsetToOffset({
                    containerSize,
                    offset: currentOffset
                });
                const offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
                    align,
                    containerSize,
                    currentOffset,
                    targetIndex
                });
                return this._offsetToSafeOffset({
                    containerSize,
                    offset
                });
            }
        },
        {
            key: "getVisibleCellRange",
            value: function({ containerSize, offset }) {
                offset = this._safeOffsetToOffset({
                    containerSize,
                    offset
                });
                return this._cellSizeAndPositionManager.getVisibleCellRange({
                    containerSize,
                    offset
                });
            }
        },
        {
            key: "resetCell",
            value: function(e) {
                this._cellSizeAndPositionManager.resetCell(e);
            }
        },
        {
            key: "_getOffsetPercentage",
            value: function({ containerSize, offset, totalSize }) {
                if (totalSize <= containerSize) {
                    return 0;
                }
                return offset / (totalSize - containerSize);
            }
        },
        {
            key: "_offsetToSafeOffset",
            value: function({ containerSize, offset }) {
                const r = this._cellSizeAndPositionManager.getTotalSize();
                const o = this.getTotalSize();
                if (r === o) {
                    return offset;
                }
                const i = this._getOffsetPercentage({
                    containerSize,
                    offset,
                    totalSize: r
                });
                return Math.round(i * (o - containerSize));
            }
        },
        {
            key: "_safeOffsetToOffset",
            value: function({ containerSize, offset }) {
                const r = this._cellSizeAndPositionManager.getTotalSize();
                const o = this.getTotalSize();
                if (r === o) {
                    return offset;
                }
                const i = this._getOffsetPercentage({
                    containerSize,
                    offset,
                    totalSize: o
                });
                return Math.round(i * (r - containerSize));
            }
        }
    ]);
    return e;
})();
function S(e = true) {
    let t = {};
    return function({ callback, indices }) {
        const i = Object.keys(indices);
        const a = !e || i.every((e)=>{
            const t = indices[e];
            if (Array.isArray(t)) {
                return t.length > 0;
            }
            return t >= 0;
        });
        const l = i.length !== Object.keys(t).length || i.some((e)=>{
            const n = t[e];
            const r = indices[e];
            if (Array.isArray(r)) {
                return n.join(",") !== r.join(",");
            }
            return n !== r;
        });
        t = indices;
        if (a && l) {
            callback(indices);
        }
    };
}
function A({ cellSize, cellSizeAndPositionManager, previousCellsCount, previousCellSize, previousScrollToAlignment, previousScrollToIndex, previousSize, scrollOffset, scrollToAlignment, scrollToIndex, size, sizeJustIncreasedFromZero, updateScrollIndexCallback }) {
    const h = cellSizeAndPositionManager.getCellCount();
    const v = scrollToIndex >= 0 && scrollToIndex < h;
    if (v && (size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === "number" && cellSize !== previousCellSize || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
        updateScrollIndexCallback(scrollToIndex);
    } else if (!v && h > 0 && (size < previousSize || h < previousCellsCount) && scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
        updateScrollIndexCallback(h - 1);
    }
}
let k;
let j;
let T;
let P;
const L = !(typeof window === "undefined" || !window.document || !window.document.createElement);
const N = (j = typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).requestAnimationFrame || j.webkitRequestAnimationFrame || j.mozRequestAnimationFrame || j.oRequestAnimationFrame || j.msRequestAnimationFrame || function(e) {
    return j.setTimeout(e, 1000 / 60);
};
const D = j.cancelAnimationFrame || j.webkitCancelAnimationFrame || j.mozCancelAnimationFrame || j.oCancelAnimationFrame || j.msCancelAnimationFrame || function(e) {
    j.clearTimeout(e);
};
const I = N;
const R = D;
const H = (_disablePointerEventsTimeoutId)=>R(_disablePointerEventsTimeoutId.id);
const scrollPositionChangeReason_1 = "requested";
P = T = ((PureComponent_1)=>{
    function t(e) {
        let n;
        module36(this, t);
        n = module56(this, module51(t).call(this, e));
        module31(module88(n), "_onGridRenderedMemoizer", S());
        module31(module88(n), "_onScrollMemoizer", S(false));
        module31(module88(n), "_deferredInvalidateColumnIndex", null);
        module31(module88(n), "_deferredInvalidateRowIndex", null);
        module31(module88(n), "_recomputeScrollLeftFlag", false);
        module31(module88(n), "_recomputeScrollTopFlag", false);
        module31(module88(n), "_horizontalScrollBarSize", 0);
        module31(module88(n), "_verticalScrollBarSize", 0);
        module31(module88(n), "_scrollbarPresenceChanged", false);
        module31(module88(n), "_scrollingContainer", undefined);
        module31(module88(n), "_childrenToDisplay", undefined);
        module31(module88(n), "_columnStartIndex", undefined);
        module31(module88(n), "_columnStopIndex", undefined);
        module31(module88(n), "_rowStartIndex", undefined);
        module31(module88(n), "_rowStopIndex", undefined);
        module31(module88(n), "_renderedColumnStartIndex", 0);
        module31(module88(n), "_renderedColumnStopIndex", 0);
        module31(module88(n), "_renderedRowStartIndex", 0);
        module31(module88(n), "_renderedRowStopIndex", 0);
        module31(module88(n), "_initialScrollTop", undefined);
        module31(module88(n), "_initialScrollLeft", undefined);
        module31(module88(n), "_disablePointerEventsTimeoutId", undefined);
        module31(module88(n), "_styleCache", {});
        module31(module88(n), "_cellCache", {});
        module31(module88(n), "_debounceScrollEndedCallback", function() {
            n._disablePointerEventsTimeoutId = null;
            n.setState({
                isScrolling: false,
                needToResetStyleCache: false
            });
        });
        module31(module88(n), "_invokeOnGridRenderedHelper", function() {
            const onSectionRendered = n.props.onSectionRendered;
            n._onGridRenderedMemoizer({
                callback: onSectionRendered,
                indices: {
                    columnOverscanStartIndex: n._columnStartIndex,
                    columnOverscanStopIndex: n._columnStopIndex,
                    columnStartIndex: n._renderedColumnStartIndex,
                    columnStopIndex: n._renderedColumnStopIndex,
                    rowOverscanStartIndex: n._rowStartIndex,
                    rowOverscanStopIndex: n._rowStopIndex,
                    rowStartIndex: n._renderedRowStartIndex,
                    rowStopIndex: n._renderedRowStopIndex
                }
            });
        });
        module31(module88(n), "_setScrollingContainerRef", function(e) {
            n._scrollingContainer = e;
        });
        module31(module88(n), "_onScroll", function(e) {
            if (e.target === n._scrollingContainer) {
                n.handleScrollEvent(e.target);
            }
        });
        const columnSizeAndPositionManager = new M({
            cellCount: e.columnCount,
            cellSizeGetter: function(n) {
                return t._wrapSizeGetter(e.columnWidth)(n);
            },
            estimatedCellSize: t._getEstimatedColumnSize(e)
        });
        const rowSizeAndPositionManager = new M({
            cellCount: e.rowCount,
            cellSizeGetter: function(n) {
                return t._wrapSizeGetter(e.rowHeight)(n);
            },
            estimatedCellSize: t._getEstimatedRowSize(e)
        });
        n.state = {
            instanceProps: {
                columnSizeAndPositionManager,
                rowSizeAndPositionManager,
                prevColumnWidth: e.columnWidth,
                prevRowHeight: e.rowHeight,
                prevColumnCount: e.columnCount,
                prevRowCount: e.rowCount,
                prevIsScrolling: e.isScrolling === true,
                prevScrollToColumn: e.scrollToColumn,
                prevScrollToRow: e.scrollToRow,
                scrollbarSize: 0,
                scrollbarSizeMeasured: false
            },
            isScrolling: false,
            scrollDirectionHorizontal: 1,
            scrollDirectionVertical: 1,
            scrollLeft: 0,
            scrollTop: 0,
            scrollPositionChangeReason: null,
            needToResetStyleCache: false
        };
        if (e.scrollToRow > 0) {
            n._initialScrollTop = n._getCalculatedScrollTop(e, n.state);
        }
        if (e.scrollToColumn > 0) {
            n._initialScrollLeft = n._getCalculatedScrollLeft(e, n.state);
        }
        return n;
    }
    module55(t, PureComponent_1);
    module37(t, [
        {
            key: "getOffsetForCell",
            value: function({ alignment = this.props.scrollToAlignment, columnIndex = this.props.scrollToColumn, rowIndex = this.props.scrollToRow } = {}) {
                const l = {
                    ...this.props,
                    scrollToAlignment: alignment,
                    scrollToColumn: columnIndex,
                    scrollToRow: rowIndex
                };
                return {
                    scrollLeft: this._getCalculatedScrollLeft(l),
                    scrollTop: this._getCalculatedScrollTop(l)
                };
            }
        },
        {
            key: "getTotalRowsHeight",
            value: function() {
                return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
            }
        },
        {
            key: "getTotalColumnsWidth",
            value: function() {
                return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
            }
        },
        {
            key: "handleScrollEvent",
            value: function({ scrollLeft = 0, scrollTop = 0 }) {
                if (!(scrollTop < 0)) {
                    this._debounceScrollEnded();
                    const i = this.props;
                    const { autoHeight, autoWidth, height, width } = i;
                    const c = this.state.instanceProps;
                    const f = c.scrollbarSize;
                    const totalRowsHeight = c.rowSizeAndPositionManager.getTotalSize();
                    const totalColumnsWidth = c.columnSizeAndPositionManager.getTotalSize();
                    const h = Math.min(Math.max(0, totalColumnsWidth - width + f), scrollLeft);
                    const v = Math.min(Math.max(0, totalRowsHeight - height + f), scrollTop);
                    if (this.state.scrollLeft !== h || this.state.scrollTop !== v) {
                        const g = {
                            isScrolling: true,
                            scrollDirectionHorizontal: h !== this.state.scrollLeft ? h > this.state.scrollLeft ? 1 : -1 : this.state.scrollDirectionHorizontal,
                            scrollDirectionVertical: v !== this.state.scrollTop ? v > this.state.scrollTop ? 1 : -1 : this.state.scrollDirectionVertical,
                            scrollPositionChangeReason: "observed"
                        };
                        if (!autoHeight) {
                            g.scrollTop = v;
                        }
                        if (!autoWidth) {
                            g.scrollLeft = h;
                        }
                        g.needToResetStyleCache = false;
                        this.setState(g);
                    }
                    this._invokeOnScrollMemoizer({
                        scrollLeft: h,
                        scrollTop: v,
                        totalColumnsWidth,
                        totalRowsHeight
                    });
                }
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function({ columnIndex, rowIndex }) {
                this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === "number" ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
                this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === "number" ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
            }
        },
        {
            key: "measureAllCells",
            value: function() {
                const props = this.props;
                const { columnCount, rowCount } = props;
                const instanceProps = this.state.instanceProps;
                instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
                instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
            }
        },
        {
            key: "recomputeGridSize",
            value: function({ columnIndex = 0, rowIndex = 0 } = {}) {
                const props = this.props;
                const { scrollToColumn, scrollToRow } = props;
                const instanceProps = this.state.instanceProps;
                instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
                instanceProps.rowSizeAndPositionManager.resetCell(rowIndex);
                this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === 1 ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
                this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === 1 ? rowIndex <= scrollToRow : rowIndex >= scrollToRow);
                this._styleCache = {};
                this._cellCache = {};
                this.forceUpdate();
            }
        },
        {
            key: "scrollToCell",
            value: function({ columnIndex, rowIndex }) {
                const columnCount = this.props.columnCount;
                const props = this.props;
                if (columnCount > 1 && columnIndex !== undefined) {
                    this._updateScrollLeftForScrollToColumn({
                        ...props,
                        scrollToColumn: columnIndex
                    });
                }
                if (rowIndex !== undefined) {
                    this._updateScrollTopForScrollToRow({
                        ...props,
                        scrollToRow: rowIndex
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { getScrollbarSize, height, scrollLeft, scrollToColumn, scrollTop, scrollToRow, width } = props;
                const instanceProps = this.state.instanceProps;
                this._initialScrollTop = 0;
                this._initialScrollLeft = 0;
                this._handleInvalidatedGridSize();
                if (!instanceProps.scrollbarSizeMeasured) {
                    this.setState(function(e) {
                        const t = {
                            ...e,
                            needToResetStyleCache: false
                        };
                        t.instanceProps.scrollbarSize = getScrollbarSize();
                        t.instanceProps.scrollbarSizeMeasured = true;
                        return t;
                    });
                }
                if (typeof scrollLeft === "number" && scrollLeft >= 0 || typeof scrollTop === "number" && scrollTop >= 0) {
                    const c = t._getScrollToPositionStateUpdate({
                        prevState: this.state,
                        scrollLeft,
                        scrollTop
                    });
                    if (c) {
                        c.needToResetStyleCache = false;
                        this.setState(c);
                    }
                }
                if (this._scrollingContainer) {
                    if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
                        this._scrollingContainer.scrollLeft = this.state.scrollLeft;
                    }
                    if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
                        this._scrollingContainer.scrollTop = this.state.scrollTop;
                    }
                }
                const f = height > 0 && width > 0;
                if (scrollToColumn >= 0 && f) {
                    this._updateScrollLeftForScrollToColumn();
                }
                if (scrollToRow >= 0 && f) {
                    this._updateScrollTopForScrollToRow();
                }
                this._invokeOnGridRenderedHelper();
                this._invokeOnScrollMemoizer({
                    scrollLeft: scrollLeft || 0,
                    scrollTop: scrollTop || 0,
                    totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
                    totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
                });
                this._maybeCallOnScrollbarPresenceChange();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                const _this = this;
                const props = this.props;
                const { autoHeight, autoWidth, columnCount, height, rowCount, scrollToAlignment, scrollToColumn, scrollToRow, width } = props;
                const state = this.state;
                const { scrollLeft, scrollPositionChangeReason, scrollTop, instanceProps } = state;
                this._handleInvalidatedGridSize();
                const m = columnCount > 0 && e.columnCount === 0 || rowCount > 0 && e.rowCount === 0;
                if (scrollPositionChangeReason === scrollPositionChangeReason_1) {
                    if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || m)) {
                        this._scrollingContainer.scrollLeft = scrollLeft;
                    }
                    if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || m)) {
                        this._scrollingContainer.scrollTop = scrollTop;
                    }
                }
                const sizeJustIncreasedFromZero = (e.width === 0 || e.height === 0) && height > 0 && width > 0;
                if (this._recomputeScrollLeftFlag) {
                    this._recomputeScrollLeftFlag = false;
                    this._updateScrollLeftForScrollToColumn(this.props);
                } else {
                    A({
                        cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                        previousCellsCount: e.columnCount,
                        previousCellSize: e.columnWidth,
                        previousScrollToAlignment: e.scrollToAlignment,
                        previousScrollToIndex: e.scrollToColumn,
                        previousSize: e.width,
                        scrollOffset: scrollLeft,
                        scrollToAlignment,
                        scrollToIndex: scrollToColumn,
                        size: width,
                        sizeJustIncreasedFromZero,
                        updateScrollIndexCallback: function() {
                            return _this._updateScrollLeftForScrollToColumn(_this.props);
                        }
                    });
                }
                if (this._recomputeScrollTopFlag) {
                    this._recomputeScrollTopFlag = false;
                    this._updateScrollTopForScrollToRow(this.props);
                } else {
                    A({
                        cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                        previousCellsCount: e.rowCount,
                        previousCellSize: e.rowHeight,
                        previousScrollToAlignment: e.scrollToAlignment,
                        previousScrollToIndex: e.scrollToRow,
                        previousSize: e.height,
                        scrollOffset: scrollTop,
                        scrollToAlignment,
                        scrollToIndex: scrollToRow,
                        size: height,
                        sizeJustIncreasedFromZero,
                        updateScrollIndexCallback: function() {
                            return _this._updateScrollTopForScrollToRow(_this.props);
                        }
                    });
                }
                this._invokeOnGridRenderedHelper();
                if (scrollLeft !== t.scrollLeft || scrollTop !== t.scrollTop) {
                    const totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
                    const totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                    this._invokeOnScrollMemoizer({
                        scrollLeft,
                        scrollTop,
                        totalColumnsWidth,
                        totalRowsHeight
                    });
                }
                this._maybeCallOnScrollbarPresenceChange();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this._disablePointerEventsTimeoutId) {
                    H(this._disablePointerEventsTimeoutId);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { autoContainerWidth, autoHeight, autoWidth, className, containerProps, containerRole, containerStyle, height, id, noContentRenderer, role, style, tabIndex, width } = props;
                const state = this.state;
                const { instanceProps, needToResetStyleCache } = state;
                const x = this._isScrolling();
                const _ = {
                    boxSizing: "border-box",
                    direction: "ltr",
                    height: autoHeight ? "auto" : height,
                    position: "relative",
                    width: autoWidth ? "auto" : width,
                    WebkitOverflowScrolling: "touch",
                    willChange: "transform"
                };
                if (needToResetStyleCache) {
                    this._styleCache = {};
                }
                if (!this.state.isScrolling) {
                    this._resetStyleCache();
                }
                this._calculateChildrenToRender(this.props, this.state);
                const maxWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
                const O = instanceProps.rowSizeAndPositionManager.getTotalSize();
                const E = O > height ? instanceProps.scrollbarSize : 0;
                const M = maxWidth > width ? instanceProps.scrollbarSize : 0;
                if (!(M === this._horizontalScrollBarSize && E === this._verticalScrollBarSize)) {
                    this._horizontalScrollBarSize = M;
                    this._verticalScrollBarSize = E;
                    this._scrollbarPresenceChanged = true;
                }
                _.overflowX = maxWidth + E <= width ? "hidden" : "auto";
                _.overflowY = O + M <= height ? "hidden" : "auto";
                const _childrenToDisplay = this._childrenToDisplay;
                const A = _childrenToDisplay.length === 0 && height > 0 && width > 0;
                return <div ref={this._setScrollingContainerRef} {...containerProps} aria-label={this.props["aria-label"]} aria-readonly={this.props["aria-readonly"]} className={w("ReactVirtualized__Grid", className)} id={id} onScroll={this._onScroll} role={role} style={{
                    ..._,
                    ...style
                }} tabIndex={tabIndex}>{_childrenToDisplay.length > 0 && <div className="ReactVirtualized__Grid__innerScrollContainer" role={containerRole} style={{
                    width: autoContainerWidth ? "auto" : maxWidth,
                    height: O,
                    maxWidth,
                    maxHeight: O,
                    overflow: "hidden",
                    pointerEvents: x ? "none" : "",
                    position: "relative",
                    ...containerStyle
                }}>{_childrenToDisplay}</div>}{A && noContentRenderer()}</div>;
            }
        },
        {
            key: "_calculateChildrenToRender",
            value: function(e = this.props, t = this.state) {
                const { cellRenderer, cellRangeRenderer, columnCount, deferredMeasurementCache, height, overscanColumnCount, overscanIndicesGetter, overscanRowCount, rowCount, width, isScrollingOptOut } = e;
                const { scrollDirectionHorizontal, scrollDirectionVertical, instanceProps } = t;
                const g = this._initialScrollTop > 0 ? this._initialScrollTop : t.scrollTop;
                const y = this._initialScrollLeft > 0 ? this._initialScrollLeft : t.scrollLeft;
                const isScrolling = this._isScrolling(e, t);
                this._childrenToDisplay = [];
                if (height > 0 && width > 0) {
                    const visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
                        containerSize: width,
                        offset: y
                    });
                    const visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
                        containerSize: height,
                        offset: g
                    });
                    const horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
                        containerSize: width,
                        offset: y
                    });
                    const verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
                        containerSize: height,
                        offset: g
                    });
                    this._renderedColumnStartIndex = visibleColumnIndices.start;
                    this._renderedColumnStopIndex = visibleColumnIndices.stop;
                    this._renderedRowStartIndex = visibleRowIndices.start;
                    this._renderedRowStopIndex = visibleRowIndices.stop;
                    const C = overscanIndicesGetter({
                        direction: "horizontal",
                        cellCount: columnCount,
                        overscanCellsCount: overscanColumnCount,
                        scrollDirection: scrollDirectionHorizontal,
                        startIndex: typeof visibleColumnIndices.start === "number" ? visibleColumnIndices.start : 0,
                        stopIndex: typeof visibleColumnIndices.stop === "number" ? visibleColumnIndices.stop : -1
                    });
                    const O = overscanIndicesGetter({
                        direction: "vertical",
                        cellCount: rowCount,
                        overscanCellsCount: overscanRowCount,
                        scrollDirection: scrollDirectionVertical,
                        startIndex: typeof visibleRowIndices.start === "number" ? visibleRowIndices.start : 0,
                        stopIndex: typeof visibleRowIndices.stop === "number" ? visibleRowIndices.stop : -1
                    });
                    let columnStartIndex = C.overscanStartIndex;
                    let columnStopIndex = C.overscanStopIndex;
                    let rowStartIndex = O.overscanStartIndex;
                    let rowStopIndex = O.overscanStopIndex;
                    if (deferredMeasurementCache) {
                        if (!deferredMeasurementCache.hasFixedHeight()) {
                            for(let k = rowStartIndex; k <= rowStopIndex; k++){
                                if (!deferredMeasurementCache.has(k, 0)) {
                                    columnStartIndex = 0;
                                    columnStopIndex = columnCount - 1;
                                    break;
                                }
                            }
                        }
                        if (!deferredMeasurementCache.hasFixedWidth()) {
                            for(let j = columnStartIndex; j <= columnStopIndex; j++){
                                if (!deferredMeasurementCache.has(0, j)) {
                                    rowStartIndex = 0;
                                    rowStopIndex = rowCount - 1;
                                    break;
                                }
                            }
                        }
                    }
                    this._childrenToDisplay = cellRangeRenderer({
                        cellCache: this._cellCache,
                        cellRenderer,
                        columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
                        columnStartIndex,
                        columnStopIndex,
                        deferredMeasurementCache,
                        horizontalOffsetAdjustment,
                        isScrolling,
                        isScrollingOptOut,
                        parent: this,
                        rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
                        rowStartIndex,
                        rowStopIndex,
                        scrollLeft: y,
                        scrollTop: g,
                        styleCache: this._styleCache,
                        verticalOffsetAdjustment,
                        visibleColumnIndices,
                        visibleRowIndices
                    });
                    this._columnStartIndex = columnStartIndex;
                    this._columnStopIndex = columnStopIndex;
                    this._rowStartIndex = rowStartIndex;
                    this._rowStopIndex = rowStopIndex;
                }
            }
        },
        {
            key: "_debounceScrollEnded",
            value: function() {
                const scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
                if (this._disablePointerEventsTimeoutId) {
                    H(this._disablePointerEventsTimeoutId);
                }
                this._disablePointerEventsTimeoutId = ((e, scrollingResetTimeInterval_1)=>{
                    let n;
                    Promise.resolve().then(()=>{
                        n = Date.now();
                    });
                    var r = {
                        id: I(function o() {
                            if (Date.now() - n >= scrollingResetTimeInterval_1) {
                                e.call();
                            } else {
                                r.id = I(o);
                            }
                        })
                    };
                    return r;
                })(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
            }
        },
        {
            key: "_handleInvalidatedGridSize",
            value: function() {
                if (typeof this._deferredInvalidateColumnIndex === "number" && typeof this._deferredInvalidateRowIndex === "number") {
                    const columnIndex = this._deferredInvalidateColumnIndex;
                    const t = this._deferredInvalidateRowIndex;
                    this._deferredInvalidateColumnIndex = null;
                    this._deferredInvalidateRowIndex = null;
                    this.recomputeGridSize({
                        columnIndex,
                        rowIndex: t
                    });
                }
            }
        },
        {
            key: "_invokeOnScrollMemoizer",
            value: function(e) {
                const _this = this;
                const { scrollLeft, scrollTop, totalColumnsWidth, totalRowsHeight } = e;
                this._onScrollMemoizer({
                    callback: function({ scrollLeft, scrollTop }) {
                        const props = _this.props;
                        const a_height = props.height;
                        props.onScroll({
                            clientHeight: a_height,
                            clientWidth: props.width,
                            scrollHeight: totalRowsHeight,
                            scrollLeft,
                            scrollTop,
                            scrollWidth: totalColumnsWidth
                        });
                    },
                    indices: {
                        scrollLeft,
                        scrollTop
                    }
                });
            }
        },
        {
            key: "_isScrolling",
            value: function(e = this.props, t = this.state) {
                if (Object.hasOwnProperty.call(e, "isScrolling")) {
                    return Boolean(e.isScrolling);
                }
                return Boolean(t.isScrolling);
            }
        },
        {
            key: "_maybeCallOnScrollbarPresenceChange",
            value: function() {
                if (this._scrollbarPresenceChanged) {
                    const e = this.props.onScrollbarPresenceChange;
                    this._scrollbarPresenceChanged = false;
                    e({
                        horizontal: this._horizontalScrollBarSize > 0,
                        size: this.state.instanceProps.scrollbarSize,
                        vertical: this._verticalScrollBarSize > 0
                    });
                }
            }
        },
        {
            key: "scrollToPosition",
            value: function({ scrollLeft, scrollTop }) {
                const o = t._getScrollToPositionStateUpdate({
                    prevState: this.state,
                    scrollLeft,
                    scrollTop
                });
                if (o) {
                    o.needToResetStyleCache = false;
                    this.setState(o);
                }
            }
        },
        {
            key: "_getCalculatedScrollLeft",
            value: function(e = this.props, n = this.state) {
                return t._getCalculatedScrollLeft(e, n);
            }
        },
        {
            key: "_updateScrollLeftForScrollToColumn",
            value: function(e = this.props, n = this.state) {
                const r = t._getScrollLeftForScrollToColumnStateUpdate(e, n);
                if (r) {
                    r.needToResetStyleCache = false;
                    this.setState(r);
                }
            }
        },
        {
            key: "_getCalculatedScrollTop",
            value: function(e = this.props, n = this.state) {
                return t._getCalculatedScrollTop(e, n);
            }
        },
        {
            key: "_resetStyleCache",
            value: function() {
                const _styleCache = this._styleCache;
                const _cellCache = this._cellCache;
                const isScrollingOptOut = this.props.isScrollingOptOut;
                this._cellCache = {};
                this._styleCache = {};
                for(let r = this._rowStartIndex; r <= this._rowStopIndex; r++){
                    for(let o = this._columnStartIndex; o <= this._columnStopIndex; o++){
                        const i = `${r}-${o}`;
                        this._styleCache[i] = _styleCache[i];
                        if (isScrollingOptOut) {
                            this._cellCache[i] = _cellCache[i];
                        }
                    }
                }
            }
        },
        {
            key: "_updateScrollTopForScrollToRow",
            value: function(e = this.props, n = this.state) {
                const r = t._getScrollTopForScrollToRowStateUpdate(e, n);
                if (r) {
                    r.needToResetStyleCache = false;
                    this.setState(r);
                }
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(computeMetadataCallbackProps, n) {
                const r = {};
                if (computeMetadataCallbackProps.columnCount === 0 && n.scrollLeft !== 0 || computeMetadataCallbackProps.rowCount === 0 && n.scrollTop !== 0) {
                    r.scrollLeft = 0;
                    r.scrollTop = 0;
                } else if (computeMetadataCallbackProps.scrollLeft !== n.scrollLeft && computeMetadataCallbackProps.scrollToColumn < 0 || computeMetadataCallbackProps.scrollTop !== n.scrollTop && computeMetadataCallbackProps.scrollToRow < 0) {
                    Object.assign(r, t._getScrollToPositionStateUpdate({
                        prevState: n,
                        scrollLeft: computeMetadataCallbackProps.scrollLeft,
                        scrollTop: computeMetadataCallbackProps.scrollTop
                    }));
                }
                let o;
                let i;
                const n_instanceProps = n.instanceProps;
                r.needToResetStyleCache = false;
                if (!(computeMetadataCallbackProps.columnWidth === n_instanceProps.prevColumnWidth && computeMetadataCallbackProps.rowHeight === n_instanceProps.prevRowHeight)) {
                    r.needToResetStyleCache = true;
                }
                n_instanceProps.columnSizeAndPositionManager.configure({
                    cellCount: computeMetadataCallbackProps.columnCount,
                    estimatedCellSize: t._getEstimatedColumnSize(computeMetadataCallbackProps),
                    cellSizeGetter: t._wrapSizeGetter(computeMetadataCallbackProps.columnWidth)
                });
                n_instanceProps.rowSizeAndPositionManager.configure({
                    cellCount: computeMetadataCallbackProps.rowCount,
                    estimatedCellSize: t._getEstimatedRowSize(computeMetadataCallbackProps),
                    cellSizeGetter: t._wrapSizeGetter(computeMetadataCallbackProps.rowHeight)
                });
                if (!(n_instanceProps.prevColumnCount !== 0 && n_instanceProps.prevRowCount !== 0)) {
                    n_instanceProps.prevColumnCount = 0;
                    n_instanceProps.prevRowCount = 0;
                }
                if (computeMetadataCallbackProps.autoHeight && computeMetadataCallbackProps.isScrolling === false && n_instanceProps.prevIsScrolling === true) {
                    Object.assign(r, {
                        isScrolling: false
                    });
                }
                _({
                    cellCount: n_instanceProps.prevColumnCount,
                    cellSize: typeof n_instanceProps.prevColumnWidth === "number" ? n_instanceProps.prevColumnWidth : null,
                    computeMetadataCallback: function() {
                        return n_instanceProps.columnSizeAndPositionManager.resetCell(0);
                    },
                    computeMetadataCallbackProps,
                    nextCellsCount: computeMetadataCallbackProps.columnCount,
                    nextCellSize: typeof computeMetadataCallbackProps.columnWidth === "number" ? computeMetadataCallbackProps.columnWidth : null,
                    nextScrollToIndex: computeMetadataCallbackProps.scrollToColumn,
                    scrollToIndex: n_instanceProps.prevScrollToColumn,
                    updateScrollOffsetForScrollToIndex: function() {
                        o = t._getScrollLeftForScrollToColumnStateUpdate(computeMetadataCallbackProps, n);
                    }
                });
                _({
                    cellCount: n_instanceProps.prevRowCount,
                    cellSize: typeof n_instanceProps.prevRowHeight === "number" ? n_instanceProps.prevRowHeight : null,
                    computeMetadataCallback: function() {
                        return n_instanceProps.rowSizeAndPositionManager.resetCell(0);
                    },
                    computeMetadataCallbackProps,
                    nextCellsCount: computeMetadataCallbackProps.rowCount,
                    nextCellSize: typeof computeMetadataCallbackProps.rowHeight === "number" ? computeMetadataCallbackProps.rowHeight : null,
                    nextScrollToIndex: computeMetadataCallbackProps.scrollToRow,
                    scrollToIndex: n_instanceProps.prevScrollToRow,
                    updateScrollOffsetForScrollToIndex: function() {
                        i = t._getScrollTopForScrollToRowStateUpdate(computeMetadataCallbackProps, n);
                    }
                });
                n_instanceProps.prevColumnCount = computeMetadataCallbackProps.columnCount;
                n_instanceProps.prevColumnWidth = computeMetadataCallbackProps.columnWidth;
                n_instanceProps.prevIsScrolling = computeMetadataCallbackProps.isScrolling === true;
                n_instanceProps.prevRowCount = computeMetadataCallbackProps.rowCount;
                n_instanceProps.prevRowHeight = computeMetadataCallbackProps.rowHeight;
                n_instanceProps.prevScrollToColumn = computeMetadataCallbackProps.scrollToColumn;
                n_instanceProps.prevScrollToRow = computeMetadataCallbackProps.scrollToRow;
                n_instanceProps.scrollbarSize = computeMetadataCallbackProps.getScrollbarSize();
                if (n_instanceProps.scrollbarSize === undefined) {
                    n_instanceProps.scrollbarSizeMeasured = false;
                    n_instanceProps.scrollbarSize = 0;
                } else {
                    n_instanceProps.scrollbarSizeMeasured = true;
                }
                r.instanceProps = n_instanceProps;
                return {
                    ...r,
                    ...o,
                    ...i
                };
            }
        },
        {
            key: "_getEstimatedColumnSize",
            value: function(e) {
                if (typeof e.columnWidth === "number") {
                    return e.columnWidth;
                }
                return e.estimatedColumnSize;
            }
        },
        {
            key: "_getEstimatedRowSize",
            value: function(e) {
                if (typeof e.rowHeight === "number") {
                    return e.rowHeight;
                }
                return e.estimatedRowSize;
            }
        },
        {
            key: "_getScrollToPositionStateUpdate",
            value: function({ prevState, scrollLeft, scrollTop }) {
                const o = {
                    scrollPositionChangeReason: scrollPositionChangeReason_1
                };
                if (typeof scrollLeft === "number" && scrollLeft >= 0) {
                    o.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? 1 : -1;
                    o.scrollLeft = scrollLeft;
                }
                if (typeof scrollTop === "number" && scrollTop >= 0) {
                    o.scrollDirectionVertical = scrollTop > prevState.scrollTop ? 1 : -1;
                    o.scrollTop = scrollTop;
                }
                if (typeof scrollLeft === "number" && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === "number" && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
                    return o;
                }
                return {};
            }
        },
        {
            key: "_wrapSizeGetter",
            value: function(e) {
                if (typeof e === "function") {
                    return e;
                }
                return function() {
                    return e;
                };
            }
        },
        {
            key: "_getCalculatedScrollLeft",
            value: function({ columnCount, height, scrollToAlignment, scrollToColumn, width }, { scrollLeft, instanceProps }) {
                if (columnCount > 0) {
                    const s = columnCount - 1;
                    const c = scrollToColumn < 0 ? s : Math.min(s, scrollToColumn);
                    const f = instanceProps.rowSizeAndPositionManager.getTotalSize();
                    const d = instanceProps.scrollbarSizeMeasured && f > height ? instanceProps.scrollbarSize : 0;
                    return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: scrollToAlignment,
                        containerSize: width - d,
                        currentOffset: scrollLeft,
                        targetIndex: c
                    });
                }
                return 0;
            }
        },
        {
            key: "_getScrollLeftForScrollToColumnStateUpdate",
            value: function(e, n) {
                const n_scrollLeft = n.scrollLeft;
                const o = t._getCalculatedScrollLeft(e, n);
                if (typeof o === "number" && o >= 0 && n_scrollLeft !== o) {
                    return t._getScrollToPositionStateUpdate({
                        prevState: n,
                        scrollLeft: o,
                        scrollTop: -1
                    });
                }
                return {};
            }
        },
        {
            key: "_getCalculatedScrollTop",
            value: function({ height, rowCount, scrollToAlignment, scrollToRow, width }, { scrollTop, instanceProps }) {
                if (rowCount > 0) {
                    const s = rowCount - 1;
                    const c = scrollToRow < 0 ? s : Math.min(s, scrollToRow);
                    const f = instanceProps.columnSizeAndPositionManager.getTotalSize();
                    const d = instanceProps.scrollbarSizeMeasured && f > width ? instanceProps.scrollbarSize : 0;
                    return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
                        align: scrollToAlignment,
                        containerSize: height - d,
                        currentOffset: scrollTop,
                        targetIndex: c
                    });
                }
                return 0;
            }
        },
        {
            key: "_getScrollTopForScrollToRowStateUpdate",
            value: function(e, n) {
                const n_scrollTop = n.scrollTop;
                const o = t._getCalculatedScrollTop(e, n);
                if (typeof o === "number" && o >= 0 && n_scrollTop !== o) {
                    return t._getScrollToPositionStateUpdate({
                        prevState: n,
                        scrollLeft: -1,
                        scrollTop: o
                    });
                }
                return {};
            }
        }
    ]);
    return t;
})(PureComponent);
module31(T, "propTypes", null);
const $ = P;
module31($, "defaultProps", {
    "aria-label": "grid",
    "aria-readonly": true,
    autoContainerWidth: false,
    autoHeight: false,
    autoWidth: false,
    cellRangeRenderer: function(e) {
        const { cellCache, cellRenderer, columnSizeAndPositionManager, columnStartIndex, columnStopIndex, deferredMeasurementCache, horizontalOffsetAdjustment, isScrolling, isScrollingOptOut, parent, rowSizeAndPositionManager, rowStartIndex } = e;
        for(var p = e.rowStopIndex, h = e.styleCache, v = e.verticalOffsetAdjustment, g = e.visibleColumnIndices, y = e.visibleRowIndices, m = [], b = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted(), x = !isScrolling && !b, w = rowStartIndex; w <= p; w++){
            const _ = rowSizeAndPositionManager.getSizeAndPositionOfCell(w);
            for(let columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++){
                const O = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
                const isVisible = columnIndex >= g.start && columnIndex <= g.stop && w >= y.start && w <= y.stop;
                const M = `${w}-${columnIndex}`;
                let style;
                if (x && h[M]) {
                    style = h[M];
                } else if (deferredMeasurementCache && !deferredMeasurementCache.has(w, columnIndex)) {
                    style = {
                        height: "auto",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "auto"
                    };
                } else {
                    style = {
                        height: _.size,
                        left: O.offset + horizontalOffsetAdjustment,
                        position: "absolute",
                        top: _.offset + v,
                        width: O.size
                    };
                    h[M] = style;
                }
                const A = {
                    columnIndex,
                    isScrolling,
                    isVisible,
                    key: M,
                    parent,
                    rowIndex: w,
                    style
                };
                let k;
                if (!isScrollingOptOut && !isScrolling || horizontalOffsetAdjustment || v) {
                    k = cellRenderer(A);
                } else {
                    if (!cellCache[M]) {
                        cellCache[M] = cellRenderer(A);
                    }
                    k = cellCache[M];
                }
                if (k != null && k !== false) {
                    m.push(k);
                }
            }
        }
        return m;
    },
    containerRole: "rowgroup",
    containerStyle: {},
    estimatedColumnSize: 100,
    estimatedRowSize: 30,
    getScrollbarSize: function(e) {
        if ((!k && k !== 0 || e) && L) {
            const t = document.createElement("div");
            t.style.position = "absolute";
            t.style.top = "-9999px";
            t.style.width = "50px";
            t.style.height = "50px";
            t.style.overflow = "scroll";
            document.body.appendChild(t);
            k = t.offsetWidth - t.clientWidth;
            document.body.removeChild(t);
        }
        return k;
    },
    noContentRenderer: function() {
        return null;
    },
    onScroll: function() {},
    onScrollbarPresenceChange: function() {},
    onSectionRendered: function() {},
    overscanColumnCount: 0,
    overscanIndicesGetter: function({ cellCount, overscanCellsCount, scrollDirection, startIndex, stopIndex }) {
        if (scrollDirection === 1) {
            return {
                overscanStartIndex: Math.max(0, startIndex),
                overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
            };
        }
        return {
            overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
            overscanStopIndex: Math.min(cellCount - 1, stopIndex)
        };
    },
    overscanRowCount: 10,
    role: "grid",
    scrollingResetTimeInterval: 150,
    scrollToAlignment: "auto",
    scrollToColumn: -1,
    scrollToRow: -1,
    style: {},
    tabIndex: 0,
    isScrollingOptOut: false
});
polyfill($);
let U;
let Z;
const W = $;
Z = U = ((PureComponent_1)=>{
    function t(...o_1) {
        let n;
        module36(this, t);
        n = module56(this, module51(t).call(this, ...o_1));
        module31(module88(n), "Grid", undefined);
        module31(module88(n), "_cellRenderer", function({ parent, rowIndex, style, isScrolling, isVisible, key }) {
            const rowRenderer = n.props.rowRenderer;
            const s = Object.getOwnPropertyDescriptor(style, "width");
            if (s && s.writable) {
                style.width = "100%";
            }
            return rowRenderer({
                index: rowIndex,
                style,
                isScrolling,
                isVisible,
                key,
                parent
            });
        });
        module31(module88(n), "_setRef", function(e) {
            n.Grid = e;
        });
        module31(module88(n), "_onScroll", function({ clientHeight, scrollHeight, scrollTop }) {
            n.props.onScroll({
                clientHeight,
                scrollHeight,
                scrollTop
            });
        });
        module31(module88(n), "_onSectionRendered", function({ rowOverscanStartIndex, rowOverscanStopIndex, rowStartIndex, rowStopIndex }) {
            n.props.onRowsRendered({
                overscanStartIndex: rowOverscanStartIndex,
                overscanStopIndex: rowOverscanStopIndex,
                startIndex: rowStartIndex,
                stopIndex: rowStopIndex
            });
        });
        return n;
    }
    module55(t, PureComponent_1);
    module37(t, [
        {
            key: "forceUpdateGrid",
            value: function() {
                if (this.Grid) {
                    this.Grid.forceUpdate();
                }
            }
        },
        {
            key: "getOffsetForRow",
            value: function({ alignment, index }) {
                if (this.Grid) {
                    return this.Grid.getOffsetForCell({
                        alignment,
                        rowIndex: index,
                        columnIndex: 0
                    }).scrollTop;
                }
                return 0;
            }
        },
        {
            key: "invalidateCellSizeAfterRender",
            value: function({ columnIndex, rowIndex }) {
                if (this.Grid) {
                    this.Grid.invalidateCellSizeAfterRender({
                        rowIndex,
                        columnIndex
                    });
                }
            }
        },
        {
            key: "measureAllRows",
            value: function() {
                if (this.Grid) {
                    this.Grid.measureAllCells();
                }
            }
        },
        {
            key: "recomputeGridSize",
            value: function({ columnIndex = 0, rowIndex = 0 } = {}) {
                if (this.Grid) {
                    this.Grid.recomputeGridSize({
                        rowIndex,
                        columnIndex
                    });
                }
            }
        },
        {
            key: "recomputeRowHeights",
            value: function(e = 0) {
                if (this.Grid) {
                    this.Grid.recomputeGridSize({
                        rowIndex: e,
                        columnIndex: 0
                    });
                }
            }
        },
        {
            key: "scrollToPosition",
            value: function(scrollTop = 0) {
                if (this.Grid) {
                    this.Grid.scrollToPosition({
                        scrollTop
                    });
                }
            }
        },
        {
            key: "scrollToRow",
            value: function(e = 0) {
                if (this.Grid) {
                    this.Grid.scrollToCell({
                        columnIndex: 0,
                        rowIndex: e
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, noRowsRenderer, scrollToIndex, width } = props;
                const className_1 = w("ReactVirtualized__List", className);
                return <W {...this.props} autoContainerWidth cellRenderer={this._cellRenderer} className={className_1} columnWidth={width} columnCount={1} noContentRenderer={noRowsRenderer} onScroll={this._onScroll} onSectionRendered={this._onSectionRendered} ref={this._setRef} scrollToRow={scrollToIndex}/>;
            }
        }
    ]);
    return t;
})(PureComponent);
module31(U, "propTypes", null);
const K = Z;
export { K as default };
module31(K, "defaultProps", {
    autoHeight: false,
    estimatedRowSize: 30,
    onScroll: function() {},
    noRowsRenderer: function() {
        return null;
    },
    onRowsRendered: function() {},
    overscanIndicesGetter: function({ cellCount, overscanCellsCount, scrollDirection, startIndex, stopIndex }) {
        overscanCellsCount = Math.max(1, overscanCellsCount);
        if (scrollDirection === 1) {
            return {
                overscanStartIndex: Math.max(0, startIndex - 1),
                overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
            };
        }
        return {
            overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
            overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
        };
    },
    overscanRowCount: 10,
    scrollToAlignment: "auto",
    scrollToIndex: -1,
    style: {}
});
