import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import "unpacked/module-31.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { Provider, inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module74 from "unpacked/module-74.js";
import module241 from "unpacked/module-241.js";
import { renderRoutes } from "utils/router.config";
import module439 from "stores/project";
import module438 from "stores/cluster";
import module445 from "stores/workspace";
import module4511 from "pages/projects/routes";
let s;
const T = inject("rootStore")(s = observer(s = ((e)=>{
    module55(r, e);
    let t;
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
        t.store = new module439;
        t.clusterStore = new module438;
        t.workspaceStore = new module445;
        t.init(e.match.params);
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const params = e.match.params;
                const { namespace, cluster } = params;
                if (!(this.project === namespace && this.cluster === cluster)) {
                    this.init(this.props.match.params);
                }
            }
        },
        {
            key: "init",
            value: (t = module44(module41.mark(function e(t) {
                let springcloud;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                this.store.initializing = true;
                                e.next = 3;
                                return Promise.all([
                                    this.store.fetchDetail(t),
                                    this.workspaceStore.fetchDetail({
                                        workspace: t.workspace
                                    }),
                                    this.clusterStore.fetchDetail({
                                        name: t.cluster
                                    }),
                                    this.props.rootStore.getRules({
                                        workspace: t.workspace
                                    })
                                ]);
                            case 3:
                                if (this.store.detail.name) {
                                    e.next = 5;
                                    break;
                                }
                                return e.abrupt("return", this.props.rootStore.routing.push("/404"));
                            case 5:
                                e.next = 7;
                                return this.props.rootStore.getRules(t);
                            case 7:
                                e.next = 9;
                                return this.clusterStore.checkSpringCloudIfActive({
                                    cluster: t.cluster
                                });
                            case 9:
                                springcloud = e.sent;
                                module74(globals, `clusterConfig.${t.cluster}`, {
                                    ...this.clusterStore.detail.configz,
                                    k8sVersion: this.clusterStore.detail.kubernetesVersion,
                                    springcloud
                                });
                                globals.app.cacheHistory(this.props.match.url, {
                                    type: "Project",
                                    ...module241(this.store.detail, [
                                        "name",
                                        "aliasName"
                                    ]),
                                    cluster: module241(this.clusterStore.detail, [
                                        "name",
                                        "aliasName",
                                        "group",
                                        "provider"
                                    ])
                                });
                                this.store.initializing = false;
                            case 13:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return t.apply(this, arguments);
            })
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
                    projectStore: this.store,
                    workspaceStore: this.workspaceStore
                }, renderRoutes(module4511));
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        }
    ]);
    return r;
})(module553.Component)) || s) || s;
export default T;
