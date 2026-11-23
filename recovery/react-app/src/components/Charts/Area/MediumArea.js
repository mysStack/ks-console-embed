import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module449 from "unpacked/module-449.js";
import module63 from "unpacked/module-63.js";
import { COLORS_MAP } from "utils/constants";
import Module901 from "unpacked/module-901.js";
import Module870 from "unpacked/module-870.js";
import Module871 from "unpacked/module-871.js";
import Module948 from "unpacked/module-948.js";
import Module872 from "unpacked/module-872.js";
import Module863 from "unpacked/module-863.js";
import { coreUnitTS } from "utils/index";
import module186 from "unpacked/module-186.js";
import module2171 from "unpacked/module-2171.js";
const D = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderFilters",
            value: function() {
                const filters = this.props.filters;
                if (filters) {
                    return <div className={module2171.filters} onClick={function(e) {
                        e.stopPropagation();
                    }}><module186.Select {...filters}/></div>;
                }
                return null;
            }
        },
        {
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const { title, unit, renderTitle } = props;
                if (!props.noTitle) {
                    if (renderTitle) {
                        return renderTitle();
                    }
                    const l = coreUnitTS(this.lastValue, unit);
                    return <><div className={module2171.title}><span><strong>{this.lastValue}</strong> {t(l)}</span>{this.lastValue === 1 || unit ? t(title) : t(`${title}_PL`)}</div>{this.renderFilters()}</>;
                }
            }
        },
        {
            key: "renderArea",
            value: function() {
                const props = this.props;
                const { unit, areaColors, renderArea } = props;
                if (renderArea) {
                    return renderArea();
                }
                return this.series.map((e, r)=>{
                    const n = COLORS_MAP[areaColors[r]];
                    return <Module901 key={e} dataKey={e} stroke={n} fillOpacity="0.1" fill={n} unit={unit}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { width, height, xKey, data, top } = props;
                return <div className={module2171.chart} style={{
                    width,
                    height
                }}>{this.renderTitle()}{module63(data) ? <p className={module2171.noData}>{t("NO_DATA")}</p> : <Module872 width="100%" height="100%" debounce={1}><Module948 data={data} margin={{
                    top,
                    left: 4,
                    right: 4,
                    bottom: 4
                }}><Module871 dataKey={xKey} hide/><Module870 wrapperStyle={{
                    zIndex: 1000
                }} cursor={{
                    stroke: COLORS_MAP.dark,
                    strokeDasharray: "3,2",
                    strokeWidth: 2
                }} content=<Module863/>/>{this.renderArea()}</Module948></Module872>}</div>;
            }
        },
        {
            key: "series",
            get: function() {
                const props = this.props;
                const { xKey, data } = props;
                return Object.keys(data[0] || {}).filter((e)=>e !== xKey);
            }
        },
        {
            key: "lastValue",
            get: function() {
                const data = this.props.data;
                const r = module26(this.series, [
                    0
                ], "");
                return module449(data)?.[r] ?? 0;
            }
        }
    ]);
    return r;
})(Component);
export default D;
D.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    height: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    title: module1.string,
    xKey: module1.string,
    unit: module1.string,
    data: module1.array,
    areaColors: module1.array,
    renderTitle: module1.func,
    renderArea: module1.func,
    top: module1.number
};
D.defaultProps = {
    width: 280,
    height: 100,
    title: "Title",
    xKey: "time",
    unit: "",
    areaColors: [
        "green",
        "blue",
        "yellow",
        "red",
        "orange"
    ],
    data: [],
    top: 45
};
