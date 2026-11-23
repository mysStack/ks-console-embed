import "./module-15.js";
import "./module-5.js";
import "./module-190.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-436.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module874 from "./module-874.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import { METER_RESOURCE_TITLE } from "./module-944.js";
import module3536 from "./module-3536.js";
const y = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.renderTooltipContent = function() {
            return <div className={module3536.tooltipContent}><h3>{t("TOTAL_CONSUMPTION_Q")}</h3><p>{t("TOTAL_CONSUMPTION_A")}</p></div>;
        };
        e.getColumns = function() {
            return [
                {
                    title: t("RESOURCE_TYPE"),
                    dataIndex: "type",
                    render: function(e, a) {
                        return <><span style={{
                            background: a.color
                        }}/>{t(METER_RESOURCE_TITLE[e].toUpperCase().replace(/\s+/g, "_"))}</>;
                    }
                },
                {
                    title: t("MAXIMUM_USAGE"),
                    dataIndex: "max_value",
                    render: function(e, t) {
                        return <>{e} {module26(t, "unit.label", "-")}</>;
                    }
                },
                {
                    title: t("MINIMUM_USAGE"),
                    dataIndex: "min_value",
                    render: function(e, t) {
                        return <>{e} {module26(t, "unit.label", "-")}</>;
                    }
                },
                {
                    title: t("AVERAGE_USAGE"),
                    dataIndex: "avg_value",
                    render: function(e, t) {
                        return <>{e} {module26(t, "unit.label", "-")}</>;
                    }
                },
                {
                    title: <div className={module3536.question}>{t("TOTAL_CONSUMPTION")}<module186.Tooltip content={e.renderTooltipContent()} placement="top"><module186.Icon name="question" size={16}/></module186.Tooltip></div>,
                    dataIndex: "sum_value",
                    render: function(e, t) {
                        return <>{e} {module26(t, "unit.label", "-")}</>;
                    }
                }
            ].concat(module61(module63(e.props.priceConfig) ? [] : [
                {
                    title: `${t("PRICE")}`,
                    dataIndex: "fee",
                    render: function(t) {
                        const a = e.props.priceConfig.currency ? e.props.priceConfig.currency : " ";
                        return `${a} ${parseFloat(t).toFixed(2)}`;
                    }
                }
            ]));
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const data = this.props.data;
                return <div className={module3536.tableContainer}><Module874 hideHeader hideFooter rowKey="type" data={data} loading={module63(data)} columns={this.getColumns()}/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
