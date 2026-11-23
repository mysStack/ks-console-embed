import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-75.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { Component } from "./module-900.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { withRouter } from "./module-433.js";
import { MODULE_KIND_MAP } from "./module-72.js";
let n;
let l;
n = inject("rootStore");
const b = withRouter(l = n(l = observer(l = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.watch) {
                    this.initWebsocket();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const detailStore = this.props.stores.detailStore;
                if (detailStore && "getWatchUrl" in detailStore) {
                    const a = detailStore.getWatchUrl(this.props.match.params);
                    this.websocket.watch(a);
                    const r = MODULE_KIND_MAP[this.props.module];
                    const n = detailStore.mapper;
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(a) {
                        if (a.object.kind === r && a.type === "MODIFIED") {
                            Object.assign(detailStore.detail, {
                                ..._this.props.match.params,
                                ...n(module14.toJS(a.object))
                            });
                        }
                    });
                }
            }
        },
        {
            key: "inCluster",
            get: function() {
                return this.props.match.path.startsWith("/clusters");
            }
        },
        {
            key: "websocket",
            get: function() {
                return this.props.rootStore.websocket;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return globals.app.getActions({
                    skipAuth: this.props.skipAuth,
                    module: this.authKey,
                    fedproject: module26(this.props, "match.url", "").indexOf("federatedprojects") > -1,
                    ...this.inCluster ? {
                        cluster
                    } : {
                        cluster,
                        workspace,
                        project: namespace
                    }
                });
            }
        }
    ]);
    return a;
})(Component)) || l) || l) || l;
export default b;
