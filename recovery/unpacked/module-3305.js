import "./module-15.js";
import "./module-197.js";
import "./module-6.js";
import "./module-84.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-860.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1113 from "./module-1113.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module189 from "./module-189.js";
import module159 from "./module-159.js";
import module199 from "./module-199.js";
import module241 from "./module-241.js";
import module457 from "./module-457.js";
import module186 from "./module-186.js";
import Module830 from "./module-830.js";
import { QUOTAS_MAP } from "./module-72.js";
import { resourceLimitKey } from "./module-52.js";
import Module3306 from "./module-3306.js";
import { QUOTAS_KEY_MODULE_MAP } from "./module-1729.js";
import module3307 from "./module-3307.js";
const N = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleAddQuotaItem = function(items) {
            t.setState({
                items
            }, function() {
                const a = module26(t.props.data, "spec.hard");
                const r = module241(a, t.omitKeys);
                const n = {};
                items.forEach(({ module, value })=>{
                    if (!module159(module)) {
                        const r = module26(QUOTAS_MAP, `${module}.name`, module);
                        n[`${r}`] = value;
                    }
                });
                module74(t.props.data, "spec.hard", module199(n, r));
            });
        };
        t.checkItemValid = function(e) {
            return !module63(e) && e.module;
        };
        t.state = {
            items: module61(t.getItems(e))
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.data !== this.props.data) {
                    this.setState({
                        items: module61(this.getItems(this.props))
                    });
                }
            }
        },
        {
            key: "getItems",
            value: function(e) {
                const t = module189(module26(e.data, "spec.hard", {}), this.omitKeys);
                const a = module457(t, function(e, t) {
                    return t.includes("requests.storage") || t.includes("persistentvolumeclaims");
                });
                const r = [];
                module1113(a, function(value, t) {
                    const a = {
                        module: QUOTAS_KEY_MODULE_MAP[t] || t,
                        value
                    };
                    r.push(a);
                });
                const n = r.findIndex((e)=>e.module === "pods");
                if (n > 0) {
                    const l = r[0];
                    r[0] = r[n];
                    r[n] = l;
                }
                if (n < 0) {
                    r.unshift({
                        module: "pods",
                        value: ""
                    });
                }
                return r;
            }
        },
        {
            key: "render",
            value: function() {
                const items = this.state.items;
                return <div className={module3307.wrapper}><module186.Form.Item><Module830 value={items} itemType="object" addText={t("ADD")} onChange={this.handleAddQuotaItem} checkItemValid={this.checkItemValid}><Module3306 isFederated={this.props.isFederated}/></Module830></module186.Form.Item></div>;
            }
        },
        {
            key: "omitKeys",
            get: function() {
                const supportGpuType = globals.config.supportGpuType;
                const t = module61(resourceLimitKey);
                supportGpuType.forEach((e)=>t.push(`limits.${e}`, `requests.${e}`));
                return t;
            }
        }
    ]);
    return r;
})(Component);
export default N;
