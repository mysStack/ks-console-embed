import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
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
import module41 from "./module-41.js";
import "./module-31.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import module74 from "./module-74.js";
import { Provider, inject, observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import module438 from "./module-438.js";
import { renderRoutes } from "./module-317.js";
let o;
const R = inject("rootStore")(o = observer(o = ((e)=>{
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
        t.state = {
            fetchFin: true
        };
        t.store = new module438;
        return t;
    }
    module37(r, [
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
                                if (!t.cluster) {
                                    e.next = 10;
                                    break;
                                }
                                e.next = 4;
                                return Promise.all([
                                    this.store.fetchDetail({
                                        name: t.cluster
                                    }),
                                    this.props.rootStore.getRules({
                                        cluster: t.cluster
                                    })
                                ]);
                            case 4:
                                if (!this.store.detail.isReady) {
                                    e.next = 7;
                                    break;
                                }
                                e.next = 7;
                                return this.store.fetchProjects({
                                    cluster: t.cluster
                                });
                            case 7:
                                module74(globals, `clusterConfig.${t.cluster}`, this.store.detail.configz);
                                if (module26(this.store.detail.configz, "ksVersion") === "") {
                                    module74(globals, `need_rebuild_observability_${t.cluster}_nav`, true);
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
                            case 10:
                                this.store.initializing = false;
                            case 11:
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
    return r;
})(module553.Component)) || o) || o;
export default R;
