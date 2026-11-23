import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module31 from "./module-31.js";
import { PureComponent } from "./module-553.js";
import module106 from "./module-106.js";
import "./module-1756.js";
import "./module-1.js";
let r;
let o;
o = r = ((PureComponent_1)=>{
    function t(...o_1) {
        let n;
        module36(this, t);
        n = module56(this, module51(t).call(this, ...o_1));
        module31(module88(n), "_child", undefined);
        module31(module88(n), "_measure", function() {
            const { cache, columnIndex = 0, parent, rowIndex = n.props.index || 0 } = n.props;
            const u = n._getCellMeasurements();
            const { height, width } = u;
            if (!(height === cache.getHeight(rowIndex, columnIndex) && width === cache.getWidth(rowIndex, columnIndex))) {
                cache.set(rowIndex, columnIndex, width, height);
                if (parent && typeof parent.recomputeGridSize === "function") {
                    parent.recomputeGridSize({
                        columnIndex,
                        rowIndex
                    });
                }
            }
        });
        module31(module88(n), "_registerChild", function(e) {
            if (!(!e || e instanceof Element)) {
                console.warn("CellMeasurer registerChild expects to be passed Element or null");
            }
            n._child = e;
            if (e) {
                n._maybeMeasureCell();
            }
        });
        return n;
    }
    module55(t, PureComponent_1);
    module37(t, [
        {
            key: "componentDidMount",
            value: function() {
                this._maybeMeasureCell();
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                this._maybeMeasureCell();
            }
        },
        {
            key: "render",
            value: function() {
                const children = this.props.children;
                if (typeof children === "function") {
                    return children({
                        measure: this._measure,
                        registerChild: this._registerChild
                    });
                }
                return children;
            }
        },
        {
            key: "_getCellMeasurements",
            value: function() {
                const cache = this.props.cache;
                const t = this._child || module106.findDOMNode(this);
                if (t && t.ownerDocument && t.ownerDocument.defaultView && t instanceof t.ownerDocument.defaultView.HTMLElement) {
                    const n = t.style.width;
                    const r = t.style.height;
                    if (!cache.hasFixedWidth()) {
                        t.style.width = "auto";
                    }
                    if (!cache.hasFixedHeight()) {
                        t.style.height = "auto";
                    }
                    const height = Math.ceil(t.offsetHeight);
                    const width = Math.ceil(t.offsetWidth);
                    if (n) {
                        t.style.width = n;
                    }
                    if (r) {
                        t.style.height = r;
                    }
                    return {
                        height,
                        width
                    };
                }
                return {
                    height: 0,
                    width: 0
                };
            }
        },
        {
            key: "_maybeMeasureCell",
            value: function() {
                const { cache, columnIndex = 0, parent, rowIndex = this.props.index || 0 } = this.props;
                if (!cache.has(rowIndex, columnIndex)) {
                    const l = this._getCellMeasurements();
                    const { height, width } = l;
                    cache.set(rowIndex, columnIndex, width, height);
                    if (parent && typeof parent.invalidateCellSizeAfterRender === "function") {
                        parent.invalidateCellSizeAfterRender({
                            columnIndex,
                            rowIndex
                        });
                    }
                }
            }
        }
    ]);
    return t;
})(PureComponent);
module31(r, "propTypes", null);
const w = o;
export { w as default };
module31(w, "__internalCellMeasurerFlag", false);
