import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-38.js";
import "./module-62.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { withRouter } from "./module-47.js";
import { Link } from "./module-433.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module837 from "./module-837.js";
import { joinSelector } from "./module-52.js";
import module452 from "./module-452.js";
import module318 from "./module-318.js";
import Module4770 from "./module-4770.js";
import module1916 from "./module-1916.js";
let o;
const T = withRouter(o = ((Component_1)=>{
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
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.podStore = new module452;
        t.workloadStore = new module318("deployments");
        t.state = {
            workloads: []
        };
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(e.detail, this.props.detail)) {
                    this.getData();
                }
            }
        },
        {
            key: "getData",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let namespace;
                let cluster;
                let i;
                let workloads;
                let s;
                t = this.props;
                a = t.detail;
                r = t.store;
                if (!(!a || !a.name)) {
                    n = r.detail;
                    namespace = n.namespace;
                    cluster = n.cluster;
                    i = a.nodes.filter((e)=>e.data.workload).map((e)=>e.data.workload);
                    await Promise.all([
                        this.workloadStore.fetchList({
                            namespace,
                            cluster,
                            names: i.join(",")
                        }),
                        this.podStore.fetchListByK8s({
                            namespace,
                            cluster,
                            labelSelector: joinSelector({
                                ...r.detail.selector,
                                app: a.name
                            })
                        })
                    ]);
                    workloads = module14.toJS(this.workloadStore.list.data);
                    s = module14.toJS(this.podStore.list.data);
                    workloads.forEach((e)=>{
                        if (e.labels && e.labels.version) {
                            e.pods = s.filter((t)=>t.labels && t.labels.version === e.labels.version && t.labels.app === e.labels.app);
                        }
                    });
                    this.setState({
                        workloads
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const workloads = this.state.workloads;
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return <div className={module1916.wrapper}>{workloads.map((a)=><div className={module1916.item} key={a.uid}><div className={module1916.title}><module186.Icon name="backup" size={32}/><div className={module1916.text}><p><strong><Link to={`/${workspace}/clusters/${cluster}/projects/${namespace}/deployments/${a.name}`}>{a.name}</Link></strong></p><div className={module1916.version}><span>{t("VERSION")}</span> {module26(a, "labels.version")}</div></div></div>{a.pods && <div className={module1916.pods}>{a.pods.map((t)=><Module4770 key={t.uid} data={t} match={_this.props.match}/>)}</div>}</div>)}</div>;
            }
        }
    ]);
    return n;
})(Component)) || o;
export default T;
