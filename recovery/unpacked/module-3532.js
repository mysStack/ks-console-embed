import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import { getAreaChartOps } from "./module-795.js";
import Module791 from "./module-791.js";
import { SimpleArea } from "./module-799.js";
import module3533 from "./module-3533.js";
const O = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            activeTab: module26(module88(e), "props.tabs[0].key", "")
        };
        e.handleTabClick = function(t) {
            return e.setState({
                activeTab: t.currentTarget.dataset.key
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "renderTabList",
            value: function() {
                const _this = this;
                const tabs = this.props.tabs;
                const activeTab = this.state.activeTab;
                if (module63(tabs)) {
                    return null;
                }
                return <div className={module3533.tabHeader}>{tabs.map((t)=><div key={t.key} className={module3(module3533.tabHeaderItem, module31({}, module3533.active, t.key === activeTab))} data-key={t.key} onClick={_this.handleTabClick}><Module791 icon={t.icon} title={!t.data || module159(t.titleValue) ? "-" : `${t.titleValue} ${t.unit}`} description={t.title}/></div>)}</div>;
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
                return <div className={module3533.tabContent}><SimpleArea width="100%" height={200} yAxis={{
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
                return <div className={module3533.wrapper}>{this.renderTabList()}{this.renderTabContent()}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default O;
O.propTypes = {
    tabs: module1.array
};
O.defaultProps = {
    tabs: []
};
