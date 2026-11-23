import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "utils/babel-helpers/initializerWarningHelper";
import module49 from "unpacked/module-49.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import { Component, useEffect, useRef } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module159 from "unpacked/module-159.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import Module5775 from "unpacked/module-5775.js";
import Module3472 from "unpacked/module-3472.js";
import module3474 from "unpacked/module-3474.js";
import Module3475 from "unpacked/module-3475.js";
import module186 from "unpacked/module-186.js";
import module3476 from "unpacked/module-3476.js";
let u;
let o;
let i;
let c;
let s;
function AComponent({ measure, data, height, children, ...rest }) {
    const uRef = useRef(null);
    useEffect(function() {
        if (uRef.current?.getBoundingClientRect().height !== height) {
            measure();
        }
    }, [
        data
    ]);
    return <div {...rest} ref={uRef}>{children}</div>;
}
const j = observer((s = c = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.measureCache = new module3474({
            fixedWidth: true,
            minHeight: e.props.defaultRowHeight
        });
        e.clearMeasurerCache = function() {
            e.measureCache.clearAll();
        };
        e.onTrClick = function({ target, currentTarget }) {
            const n = function e(target_1) {
                const a = module26(target_1, "dataset.itemIndex");
                if (target_1 !== currentTarget) {
                    if (module159(a)) {
                        return e(target_1.parentNode);
                    }
                    return a;
                }
            }(target);
            if (!module159(n)) {
                const l = e.props.data[n];
                if (e.props.onTrClick) {
                    e.props.onTrClick(l);
                }
            }
        };
        module65(e, "toggleCol", i, module88(e));
        e.handleRefresh = function() {
            location.reload();
        };
        e.renderDropdownContent = function() {
            return <div className={module3476.dropdown}><h3>{t("CUSTOM_COLUMNS")}</h3>{e.dropDownCols.map((t, a)=><div key={t.thead} className={module3476.visibleItem} data-index={a} onClick={e.toggleCol}><module186.Icon name={t.hidden ? "eye-closed" : "eye"}/><span>{t.thead}</span></div>)}</div>;
        };
        e.renderItem = function({ index, key, parent, style }) {
            const u = e.props.data[index] || {};
            return <Module3475 key={key} parent={parent} columnIndex={0} rowIndex={index} cache={e.measureCache}>{function({ measure, registerChild }) {
                return <div style={style} ref={registerChild}><AComponent measure={measure} data={e.visibleCol} data-item-index={index} height={e.measureCache._rowHeightCache?.[key]} className={module3(module3476.tr, e.props.trCLassName)}>{e.visibleCol.map((e)=><div key={e.key} className={module3(module3476.bodyItems, e.className)}>{e.content(u)}</div>)}</AComponent></div>;
            }}</Module3475>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function() {
                this.clearMeasurerCache();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { data, body, tableRef, onScroll } = props;
                const data_length = data.length;
                return <div className={module3476.table}>{this.renderTitle()}<div className={module3(module3476.body, body)} onClick={this.onTrClick}><Module3472 onResize={this.CellMeasurerCache}>{function({ width, height }) {
                    return <Module5775 ref={tableRef} width={width} height={height} overscanRowCount={10} rowRenderer={_this.renderItem} onScroll={onScroll} rowCount={data_length} rowHeight={_this.measureCache.rowHeight} deferredMeasurementCache={_this.measureCache} data={data} visibleCol={_this.visibleCol}/>;
                }}</Module3472></div></div>;
            }
        },
        {
            key: "renderTitle",
            value: function() {
                return <div className={module3(module3476.header, this.props.header)}>{this.visibleCol.map((e)=><div key={e.key} className={module3(module3476.headerItems, e.className)}>{e.thead}</div>)}{module63(module14.toJS(this.dropDownCols)) ? null : <div className={module3476.visibleBtn}><module186.Dropdown placement="bottomRight" content={this.renderDropdownContent()} onOpen={this.handleOpen} onClose={this.handleClose}><div>{t("CUSTOM_COLUMNS")} <module186.Icon name="cogwheel"/></div></module186.Dropdown></div>}</div>;
            }
        },
        {
            key: "dropDownCols",
            get: function() {
                return this.props.cols.filter((e)=>!e.mustShow);
            }
        },
        {
            key: "visibleCol",
            get: function() {
                return this.props.cols.filter((e)=>!e.hidden);
            }
        }
    ]);
    return r;
})(Component), c.defaultProps = {
    defaultRowHeight: 32
}, o = s, module49(o.prototype, "dropDownCols", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "dropDownCols"), o.prototype), module49(o.prototype, "visibleCol", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "visibleCol"), o.prototype), i = module49(o.prototype, "toggleCol", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const index = t.currentTarget.dataset.index;
            const r = _this.dropDownCols[index];
            r.hidden = !r.hidden;
            _this.clearMeasurerCache();
        };
    }
}), u = o)) || u;
export default j;
