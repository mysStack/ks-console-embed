import "./module-15.js";
import "./module-11.js";
import "./module-30.js";
import "./module-97.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-38.js";
import "./module-62.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module241 from "./module-241.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { Provider, inject, observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import module438 from "./module-438.js";
import module323 from "./module-323.js";
import { eventBus } from "./module-148.js";
import { eventKeys } from "./module-144.js";
import { renderRoutes } from "./module-317.js";
let i;
const k = inject("rootStore")(i = observer(i = ((e)=>{
    module55(n, e);
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
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.state = {
            fetchFin: true
        };
        t.getHostCluster = async function e() {
            let a;
            let i;
            a = await t.clusterStore.fetchList({
                labelSelector: "cluster-role.kubesphere.io/host=",
                limit: -1
            });
            i = module14.toJS(a).filter((e)=>Object.keys(e.labels).some((e)=>e.endsWith("cluster-role.kubesphere.io/host")));
            t.store.hostName = i[0]?.name ?? "host";
            t.store.hostDetail = i[0];
        };
        t.store = new module323;
        t.clusterStore = new module438;
        t.rootStore = e.rootStore;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(e.match.params.cluster === this.cluster && e.match.params.devops === this.devops)) {
                    this.init();
                }
            }
        },
        {
            key: "init",
            value: async function() {
                let t;
                this.store.initializing = true;
                t = {
                    cluster: this.cluster,
                    devops: this.devops,
                    workspace: this.workspace
                };
                await Promise.all([
                    this.store.fetchDetail(t),
                    this.clusterStore.fetchDetail({
                        name: t.cluster
                    }),
                    this.props.rootStore.getRules({
                        workspace: this.workspace,
                        cluster: t.cluster
                    }),
                    this.getHostCluster()
                ]);
                eventBus.emit(eventKeys.DEVOPS_CHANGE, module14.toJS(this.store.detail));
                await this.props.rootStore.getRules(t);
                module74(globals, `clusterConfig.${t.cluster}`, this.clusterStore.detail.configz);
                globals.app.cacheHistory(this.props.match.url, {
                    type: "DevOps",
                    name: this.store.data.name,
                    aliasName: this.store.data.aliasName,
                    cluster: module241(this.clusterStore.detail, [
                        "name",
                        "aliasName",
                        "group",
                        "provider"
                    ])
                });
                this.store.initializing = false;
            }
        },
        {
            key: "render",
            value: function() {
                if (this.store.initializing) {
                    return module553.default.createElement(module186.Loading, {
                        className: "ks-page-loading"
                    });
                }
                return module553.default.createElement(Provider, {
                    devopsStore: this.store
                }, renderRoutes(this.props.route.routes));
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.match.params.devops;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return n;
})(module553.Component)) || i) || i;
export default k;
