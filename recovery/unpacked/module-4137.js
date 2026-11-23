import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module793 from "./module-793.js";
import { renderRoutes } from "./module-317.js";
import module884 from "./module-884.js";
import module4138 from "./module-4138.js";
let u;
const b = inject("rootStore")(u = observer(u = ((Component_1)=>{
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
        const n = new module884({
            cluster: t.cluster
        });
        t.props.rootStore.register("monitoring", n);
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.rootStore.monitoring.checkEtcd();
            }
        },
        {
            key: "render",
            value: function() {
                return <module186.Loading spinning={this.props.rootStore.monitoring.etcdChecking}><><Module793 icon="linechart" title={t("CLUSTER_STATUS")} description={t("MONITORING_CLUSTER_DESC")} routes={this.routes}/>{renderRoutes(module4138)}</></module186.Loading>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "routes",
            get: function() {
                const _this = this;
                return module4138.filter((t)=>!!t.title && (!t.requireETCD || _this.props.rootStore.monitoring.supportETCD)).map((e)=>({
                        ...e,
                        name: e.path.split("/").pop()
                    }));
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default b;
