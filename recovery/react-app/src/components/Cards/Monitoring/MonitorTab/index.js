import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { getAreaChartOps, getValueByUnit } from "utils/monitoring";
import Module791 from "components/Base/Text";
import { SimpleArea } from "components/Charts/index";
import module3950 from "unpacked/module-3950.js";
const O = ((Component_1)=>{
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
            activeTab: module26(module88(e), "props.tabs[0].key", "")
        };
        e.getLastValue = function(e, t) {
            const a = module26(e, "[0].values", []);
            return getValueByUnit(a[a.length - 1][1], t);
        };
        e.handleTabClick = function(t) {
            return e.setState({
                activeTab: t.currentTarget.dataset.key
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderTabList",
            value: function() {
                const _this = this;
                const tabs = this.props.tabs;
                const activeTab = this.state.activeTab;
                if (module63(tabs)) {
                    return null;
                }
                return <div className={module3950.tabHeader}>{tabs.map((a)=><div key={a.key} className={module3(module3950.tabHeaderItem, module31({}, module3950.active, a.key === activeTab))} data-key={a.key} onClick={_this.handleTabClick}><Module791 icon={a.icon} title={a.data ? `${_this.getLastValue(a.data, a.unit)}%` : "0%"} description={t(`${a.title}_SCAP`)}/></div>)}</div>;
            }
        },
        {
            key: "renderTabContent",
            value: function() {
                const tabs = this.props.tabs;
                const activeTab = this.state.activeTab;
                const a = tabs.find((e)=>e.key === activeTab);
                if (!a || !a.data) {
                    return null;
                }
                const r = getAreaChartOps(a);
                return <div className={module3950.tabContent}><SimpleArea width="100%" height={200} theme="dark" yAxis={{
                    hide: true,
                    domain: [
                        0,
                        100
                    ]
                }} {...r}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3950.wrapper}>{this.renderTabList()}{this.renderTabContent()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.propTypes = {
    tabs: module1.array
};
O.defaultProps = {
    tabs: []
};
