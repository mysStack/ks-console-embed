import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-18.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import { QUOTAS_MAP } from "./module-72.js";
import Module868 from "./module-868.js";
import Module800 from "./module-800.js";
import { FEDERATED_PROJECT_UNSOPPORT_QUOTA, RESERVED_MODULES } from "./module-1729.js";
const E = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.handleLimitValue = function(t) {
            e.props.onChange(t);
        };
        e.renderInputByModule = function() {
            const value = e.props.value;
            if (Object.keys(QUOTAS_MAP).includes(value.module)) {
                return <Module800 name="value" className="margin-l12" placeholder={t("QUOTA")} integer/>;
            }
            return <module186.Input name="value" className="margin-l12" placeholder={t("QUOTA")}/>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const value = this.props.value;
                return <Module868 value={value} onChange={this.handleLimitValue}><module186.Select name="module" options={this.options} searchable disabled={value.module === "pods"} placeholder={t("SELECT_RESOURCE_TIP")}/>{this.renderInputByModule()}</Module868>;
            }
        },
        {
            key: "options",
            get: function() {
                const _this = this;
                const props = this.props;
                const a_arrayValue = props.arrayValue;
                const module = props.value.module;
                const o = a_arrayValue.map((e)=>e.module);
                const u = [].concat(module61(o.filter((e)=>e !== module)), module61(RESERVED_MODULES));
                return Object.keys(QUOTAS_MAP).filter((t)=>!(u.includes(t) || _this.props.isFederated && FEDERATED_PROJECT_UNSOPPORT_QUOTA.includes(t))).map((e)=>({
                        label: t(`NUMBER_OF_${e.toUpperCase()}`),
                        value: e
                    }));
            }
        }
    ]);
    return r;
})(Component);
export default E;
