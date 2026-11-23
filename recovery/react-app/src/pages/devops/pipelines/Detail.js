import "unpacked/module-15.js";
import "unpacked/module-30.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-62.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import { Provider, inject, observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import { getPipelinesStore } from "stores/devops/getPipelines";
import { renderRoutes } from "utils/router.config";
import module5081 from "pages/devops/containers/Pipelines/Detail/routes";
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
