import "./module-12.js";
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
import * as module553 from "./module-553.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { Provider, inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { renderRoutes } from "./module-317.js";
import module437 from "./module-437.js";
import module438 from "./module-438.js";
import module4933 from "./module-4933.js";
let u;
const C = inject("rootStore")(u = observer(u = ((e)=>{
    module55(a, e);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.store = new module437({
            module: "namespaces"
        });
        t.clusterStore = new module438;
        t.init(e.match.params);
        return t;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.project !== e.match.params.namespace) {
                    this.init(this.props.match.params);
                }
            }
        },
        {
            key: "init",
            value: async function(t) {
                this.store.initializing = true;
                await Promise.all([
                    this.store.fetchDetail({
                        ...t,
                        name: t.namespace
                    }),
                    this.props.rootStore.getRules({
                        workspace: t.workspace
                    })
                ]);
                await this.props.rootStore.getRules({
                    ...t,
                    fedProCluster: this.store.detail.clusters.map((e)=>e.name).join("_")
                });
                await this.clusterStore.fetchList({
                    names: this.store.detail.clusters.map((e)=>e.name).join(","),
                    sortBy: "createTime",
                    ascending: true,
                    limit: -1
                });
                this.store.detail.clusters = module14.toJS(this.clusterStore.list.data);
                this.store.detail.clusters.forEach((e)=>{
                    module74(globals, `clusterConfig.${e.name}`, e.configz);
                });
                globals.app.cacheHistory(this.props.match.url, {
                    type: "Multi-cluster Project",
                    name: this.store.detail.name,
                    aliasName: this.store.detail.aliasName,
                    isFedManaged: true
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
                    projectStore: this.store
                }, renderRoutes(module4933));
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.match.params.namespace;
            }
        }
    ]);
    return a;
})(module553.Component)) || u) || u;
export default C;
