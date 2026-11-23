import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-10.js";
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
import module186 from "./module-186.js";
import Module3497 from "./module-3497.js";
import module3499 from "./module-3499.js";
const TabPanel = module186.Tabs.TabPanel;
const h = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.renderHeader = function(e) {
            return <div className={module3499.title}>{t(e)}</div>;
        };
        e.renderEventMetadata = function() {
            const eventMetadata = e.props.eventMetadata;
            const a = eventMetadata === undefined ? [] : eventMetadata;
            return e.renderMetadata(a);
        };
        return e;
    }
    module37(r, [
        {
            key: "renderMetadata",
            value: function(t = []) {
                const _this = this;
                return t.map((t)=>{
                    const key = Object.keys(t)[0];
                    return <Module3497 key={key} data={t} renderMetadata={_this.renderMetadata}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <module186.Tabs direction="vertical" className={module3499.tabs}>{<TabPanel label=<module186.Icon name="resource" size={16}/> name="resource"><div className={module3499.content}>{this.renderHeader("METADATA")}{this.renderEventMetadata()}</div></TabPanel>}</module186.Tabs>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
