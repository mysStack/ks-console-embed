import "unpacked/module-15.js";
import "unpacked/module-197.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-860.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1113 from "unpacked/module-1113.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module189 from "unpacked/module-189.js";
import module159 from "unpacked/module-159.js";
import module199 from "unpacked/module-199.js";
import module241 from "unpacked/module-241.js";
import module457 from "unpacked/module-457.js";
import module186 from "unpacked/module-186.js";
import Module830 from "components/Inputs/ArrayInput";
import { QUOTAS_MAP } from "utils/constants";
import { resourceLimitKey } from "utils/index";
import Module3306 from "components/Modals/QuotaEdit/Quotas/Item";
import { QUOTAS_KEY_MODULE_MAP } from "unpacked/module-1729.js";
import module3307 from "unpacked/module-3307.js";
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
