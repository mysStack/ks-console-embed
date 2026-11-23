import "./module-15.js";
import "./module-5.js";
import "./module-86.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import { getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import module834 from "./module-834.js";
import Module825 from "./module-825.js";
import module4261 from "./module-4261.js";
let u;
const O = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.store = new module834;
        e.state = {
            isCluster: false
        };
        e.fetchData = function() {
            const component = e.props.match.params.component;
            e.store.getGateway({
                cluster: e.cluster,
                namespace: e.namespace,
                type: component
            });
        };
        e.judgeIsCluster = function() {
            const isCluster = module26(e.props.location, "state.isCluster", false);
            e.setState({
                isCluster
            });
        };
        e.getOperations = function() {
            return [];
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.detail) || {};
            if (!module63(a)) {
                return [
                    {
                        name: t("CLUSTER"),
                        value: e.cluster
                    },
                    {
                        name: t("CREATION_TIME"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("UPDATE_TIME_TCAP"),
                        value: getLocalTime(a.updateTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.creator
                    }
                ];
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.judgeIsCluster();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                localStorage.removeItem("federated-cluster");
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                const workspace = this.props.match.params.workspace;
                if (this.store.gateway.isLoading && !this.store.gateway.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    module: this.module,
                    name: this.detail.name,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: workspace ? t("PROJECT_GATEWAY") : t("CLUSTER_GATEWAY"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={module4261(this.props.match.path)} {...r}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "gateways";
            }
        },
        {
            key: "detail",
            get: function() {
                return this.store.gateway.data || {};
            }
        },
        {
            key: "cluster",
            get: function() {
                const cluster = this.props.match.params.cluster;
                if (this.props.location.pathname.indexOf("federatedprojects") > -1) {
                    return localStorage.getItem("federated-cluster");
                }
                return cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const workspace = this.props.match.params.workspace;
                return `${this.props.match.url.split("gateways")[0]}${workspace ? "gateways" : "gateways/cluster"}`;
            }
        }
    ]);
    return r;
})(Component)) || u) || u) || u;
export default O;
