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
import { Link } from "./module-433.js";
import { inject, observer } from "./module-239.js";
import module321 from "./module-321.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module816 from "./module-816.js";
import Module1410 from "./module-1410.js";
import module438 from "./module-438.js";
import module437 from "./module-437.js";
import module3980 from "./module-3980.js";
let o;
const b = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.fedStore = new module437({
            module: "namespaces"
        });
        e.clusterStore = new module438;
        return e;
    }
    module37(n, [
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
                const o = module321(this.clusterStore.list.data, "name");
                return <Module790 title={t("CLUSTER_PL")}><module186.Alert type="warning" message={t("MULTI_CLUSTER_PROJECT_TIP")} hideIcon/><div className={module3980.clusters}>{clusters.map((e)=>{
                    if (o[e.name]) {
                        return <Link key={e.name} className={module3980.cluster} to={`/clusters/${e.name}/projects/${name}`}><Module816 cluster={o[e.name]} theme="light" tagClass="float-right"/></Link>;
                    }
                    return null;
                })}</div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.props.detailStore.detail;
                return <>{this.isFedManaged && this.renderPlacement()}<Module1410 match={this.props.match} workspace={detail.workspace}/></>;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.props.detailStore.detail.isFedManaged;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default b;
