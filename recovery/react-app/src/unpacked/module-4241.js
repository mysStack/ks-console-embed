import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import { inject, observer } from "unpacked/module-239.js";
import module321 from "unpacked/module-321.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import Module816 from "components/Clusters/ClusterTitle";
import Module1410 from "unpacked/module-1410.js";
import module438 from "stores/cluster";
import module437 from "stores/federated";
import module4242 from "unpacked/module-4242.js";
let u;
const S = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
        e.fedStore = new module437({
            module: "namespaces"
        });
        e.clusterStore = new module438;
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.isFedManaged) {
                    const e = this.props.detailStore.detail.name;
                    this.fedStore.fetchDetail({
                        name: e,
                        namespace: e
                    });
                    this.clusterStore.fetchList({
                        limit: -1
                    });
                }
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const { clusters = [], name } = this.fedStore.detail;
                const u = module321(this.clusterStore.list.data, "name");
                return <Module790 title={t("CLUSTER_PL")}><module186.Alert type="warning" message={t("MULTI_CLUSTER_PROJECT_TIP")} hideIcon/><div className={module4242.clusters}>{clusters.map((e)=>{
                    if (u[e.name]) {
                        return <Link key={e.name} className={module4242.cluster} to={`/whizard-telemetry/${e.name}/projects/${name}`}><Module816 cluster={u[e.name]} theme="light" tagClass="float-right"/></Link>;
                    }
                    return null;
                })}</div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.props.detailStore.detail;
                return <>{this.isFedManaged && this.renderPlacement()}<Module1410 match={this.props.match} workspace={detail.workspace} isObservability/></>;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.props.detailStore.detail.isFedManaged;
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default S;
