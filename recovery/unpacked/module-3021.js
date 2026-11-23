import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import module814 from "./module-814.js";
import { getDisplayName } from "./module-52.js";
import module3022 from "./module-3022.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleChecked = function(t) {
            const e_props = e.props;
            const a_data = e_props.data;
            e_props.onCheck(a_data, t);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, metricData, checked, disabled } = props;
                const details = [
                    {
                        title: <Module796 type={data.status} name={t(data.status.toUpperCase())} flicker/>,
                        className: module3022.status
                    },
                    {
                        title: data.workspace || "-",
                        description: t("WORKSPACE"),
                        className: module3022.itemText
                    },
                    {
                        title: metricData.cpuUsage,
                        description: t("CPU_USAGE"),
                        className: module3022.itemText
                    },
                    {
                        title: metricData.memoryUsage,
                        description: t("MEMORY_USAGE"),
                        className: module3022.itemText
                    },
                    {
                        title: metricData.podCount,
                        description: t("POD_PL"),
                        className: module3022.itemText
                    }
                ];
                const title = <div className={module3022.title}><module186.Checkbox checked={checked} onChange={this.handleChecked} disabled={disabled}/><Module789 icon="project" iconSize={40} desc={data.description || "-"} title={getDisplayName(data)} noLink/></div>;
                return <module814.Item className={module3(module3022.wrapper)} titleClass={module3022.title} title={title} details={details}/>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
