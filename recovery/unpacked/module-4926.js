import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import Module790 from "./module-790.js";
import Module4927 from "./module-4927.js";
import module4929 from "./module-4929.js";
let o;
const _ = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
        t.store = e.detailStore;
        t.module = e.module;
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const workloads = module14.toJS(this.store.detail).workloads;
                return <Module790 title={t("WORKLOAD_PL")}>{module63(workloads) ? <div className={module4929.empty}>{t("NO_AVAILABLE_RESOURCE_VALUE", {
                    resource: t("WORKLOAD")
                })}</div> : workloads.map((detail)=><Module4927 key={detail.name} detail={detail} prefix={_this.prefix}/>)}</Module790>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default _;
