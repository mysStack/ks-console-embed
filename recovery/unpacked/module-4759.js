import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module4760 from "./module-4760.js";
import Module4765 from "./module-4765.js";
import Module4769 from "./module-4769.js";
import module4771 from "./module-4771.js";
const CollapseItem = module186.Collapse.CollapseItem;
const _ = ((Component_1)=>{
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
        e.state = {
            name: module26(e.props, "data.name"),
            activeKey: [
                "monitor"
            ]
        };
        e.handleCollapseChange = function(activeKey) {
            e.setState({
                activeKey
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, fullScreen } = props;
                if (!data.nodes) {
                    return null;
                }
                const n = data.nodes.find((e)=>e.data.nodeType === "service");
                if (!n) {
                    return null;
                }
                const protocol = module26(n, "data.traffic[0].protocol");
                return <div className={module3(module4771.detail, "ks-service-detail")}><div className={module3(module4771.wrapper, module31({}, module4771.fullscreen, fullScreen))}><div className={module4771.title}><module186.Icon name="network-router" size={32}/><div><div className="h5">{data.name}</div><p>{t("SERVICE")}</p></div></div><module186.Collapse activeKey={this.state.activeKey} onChange={this.handleCollapseChange} accordion>{<CollapseItem label={t("TRAFFIC_MONITORING")} key="monitor"><Module4760 detail={data} store={this.props.store} protocol={protocol}/></CollapseItem>}{<CollapseItem label={t("TRAFFIC_MANAGEMENT")} key="form"><Module4765 detail={data} store={this.props.store} protocol={protocol}/></CollapseItem>}{<CollapseItem label={t("POD_PL")} key="pods"><Module4769 detail={data} store={this.props.store}/></CollapseItem>}</module186.Collapse></div></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                const a = module26(e, "data.name");
                if (t.name !== a) {
                    return {
                        activeKey: [
                            "monitor"
                        ],
                        name: a
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default _;
_.propTypes = {
    type: module1.string,
    data: module1.object
};
