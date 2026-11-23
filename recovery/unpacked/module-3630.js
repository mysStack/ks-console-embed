import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import module3631 from "./module-3631.js";
import Module3632 from "./module-3632.js";
import Module3634 from "./module-3634.js";
import module3636 from "./module-3636.js";
let c;
const O = {
    cluster_count: "kubesphere_cluser_count",
    edge_cluster_count: "kubesphere_edge_cluster_count",
    workspace_count: "kubesphere_workspace_count",
    account_count: "kubesphere_user_count",
    app_template_count: "kubesphere_app_template_count"
};
const x = inject("rootStore")(c = observer(c = ((Component_1)=>{
    module55(u, Component_1);
    var e = ((M)=>{
        const e = (()=>{
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
            } catch (M) {
                return false;
            }
        })();
        return function() {
            let t;
            const u = module51(M);
            if (e) {
                const N = module51(this).constructor;
                t = Reflect.construct(u, arguments, N);
            } else {
                t = u.apply(this, arguments);
            }
            return module56(this, t);
        };
    })(u);
    function u(...N) {
        let M;
        module36(this, u);
        M = e.call(this, ...N);
        M.monitorStore = new module3631;
        M.handleClusterClick = function() {
            M.props.rootStore.routing.push("/clusters");
        };
        M.handleEdgeClusterClick = function() {
            M.props.rootStore.routing.push("/v2/edgewize");
        };
        return M;
    }
    module37(u, [
        {
            key: "componentDidMount",
            value: function() {
                this.monitorStore.fetchMetrics({
                    metrics: Object.values(O)
                });
            }
        },
        {
            key: "render",
            value: function() {
                const isLoading = this.monitorStore.isLoading;
                const e = module26(this.monitorStore.data, `${O.edge_cluster_count}.data.result[0].value[1]`);
                const u = module26(this.monitorStore.data, `${O.cluster_count}.data.result[0].value[1]`) - e;
                const N = module26(globals, "ksConfig.ksVersion", "");
                return <module186.Loading spinning={isLoading}><><Module790 className={module3636.info} title={t("PLATFORM_INFORMATION")}><Module791 title={N.replace("v", "")} description={t("PLATFORM_VERSION")}/>{globals.app.isMultiCluster ? <Module791 title={u} description={u === "1" ? t("CLUSTER") : t("CLUSTER_PL")} onClick={this.handleClusterClick}/> : <Module791 title={1} description={t("CLUSTER")} onClick={this.handleClusterClick}/>}{e > 0 && <Module791 title={e} description={e === "1" ? t("EDGE_CLUSTER") : t("EDGE_CLUSTER_PL")} onClick={this.handleEdgeClusterClick}/>}</Module790><Module790 className={module3636.status} title={t("PLATFORM_RESOURCES")}><Module3632 metrics={this.monitorStore.data}/></Module790><Module790 title={t("RECENT_ACCESS")}><Module3634/></Module790></></module186.Loading>;
            }
        }
    ]);
    return u;
})(Component)) || c) || c;
export default x;
