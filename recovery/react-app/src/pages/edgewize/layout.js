import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
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
import module74 from "unpacked/module-74.js";
import module26 from "unpacked/module-26.js";
import module241 from "unpacked/module-241.js";
import module186 from "unpacked/module-186.js";
import { renderRoutes } from "utils/router.config";
import module955 from "unpacked/module-955.js";
let u;
const k = inject("rootStore")(u = observer(u = ((e)=>{
    module55(n, e);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = a.call(this, e);
        t.store = new module955;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.init(this.props.match.params);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.match.params.cluster !== this.cluster) {
                    this.init(this.props.match.params);
                }
            }
        },
        {
            key: "init",
            value: (t = module44(module41.mark(function e(t) {
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                this.store.initializing = true;
                                e.next = 3;
                                return this.props.rootStore.getRules(t);
                            case 3:
                                if (!t.cluster) {
                                    e.next = 12;
                                    break;
                                }
                                e.next = 6;
                                return this.store.fetchDetail({
                                    name: t.cluster
                                });
                            case 6:
                                if (!this.store.detail.isReady) {
                                    e.next = 9;
                                    break;
                                }
                                e.next = 9;
                                return this.store.fetchProjects({
                                    cluster: t.cluster
                                });
                            case 9:
                                module74(globals, `edgeClusterConfig.${t.cluster}`, this.store.detail.configz);
                                if (module26(this.store.detail.configz, "ksVersion") === "") {
                                    module74(globals, `need_rebuild_${this.cluster}_nav`, true);
                                }
                                globals.app.cacheHistory(this.props.match.url, {
                                    type: "Cluster",
                                    ...module241(this.store.detail, [
                                        "name",
                                        "aliasName",
                                        "group",
                                        "isHost"
                                    ])
                                });
                            case 12:
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
                    clusterStore: this.store
                }, renderRoutes(this.props.route.routes));
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        }
    ]);
    return n;
})(module553.Component)) || u) || u;
export default k;
