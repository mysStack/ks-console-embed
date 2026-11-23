import "./module-15.js";
import "./module-30.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
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
import module26 from "./module-26.js";
import { Provider, inject, observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import { getPipelinesStore } from "./module-5079.js";
import { renderRoutes } from "./module-317.js";
import module5081 from "./module-5081.js";
let i;
const E = inject("rootStore", "devopsStore")(i = observer(i = ((e)=>{
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
        t.store = new (getPipelinesStore(t.ksVersion));
        t.init(e.match.params);
        return t;
    }
    module37(n, [
        {
            key: "init",
            value: async function(t) {
                this.store.initializing = true;
                await Promise.all([
                    this.props.devopsStore.fetchDetail(t),
                    this.store.fetchDetail(t),
                    this.props.rootStore.getRules({
                        workspace: t.workspace
                    })
                ]);
                await this.props.rootStore.getRules({
                    cluster: t.cluster,
                    workspace: t.workspace,
                    devops: t.devops
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
                    pipelineStore: this.store
                }, renderRoutes(module5081));
            }
        },
        {
            key: "ksVersion",
            get: function() {
                const cluster = this.props.match.params.cluster;
                if (window.parent?.globals?.app.isMultiCluster) {
                    return module26(window, `parent.globals.clusterConfig.${cluster}.ksVersion`);
                }
                return module26(window, "parent.globals.ksConfig.ksVersion");
            }
        }
    ]);
    return n;
})(module553.Component)) || i) || i;
export default E;
