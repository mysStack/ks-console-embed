import "./module-15.js";
import "./module-5.js";
import "./module-86.js";
import "./module-192.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-45.js";
import "./module-28.js";
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
import { getLocalTime, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module834 from "./module-834.js";
import Module825 from "./module-825.js";
import module4027 from "./module-4027.js";
let l;
const S = inject("rootStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.store = new module834;
        e.state = {
            isCluster: false
        };
        e.fetchData = function() {
            let t;
            t = e.cluster && e.workspace && !e.namespace ? "workspace" : e.workspace && e.namespace ? "project" : "cluster";
            e.store.getGateway({
                type: t,
                cluster: e.cluster,
                namespace: e.namespace,
                workspace: e.workspace
            });
        };
        e.judgeIsCluster = function() {
            const isCluster = module26(e.props.location, "state.isCluster", false);
            e.setState({
                isCluster
            });
        };
        e.getOperations = function() {
            const a = module14.toJS(e.detail);
            const namespace = e.type === "cluster" ? "" : e.namespace;
            const n = [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("gateways.edit", {
                            cluster: e.cluster,
                            namespace,
                            type: a.gatewayType,
                            name: a.name,
                            workspace: e.workspace,
                            detail: module14.toJS(e.detail._originData),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "update",
                    icon: "update",
                    text: t("UPDATE"),
                    action: "manage",
                    disabled: !module63(a.createTime),
                    onClick: function() {
                        return e.trigger("gateways.edit", {
                            cluster: e.cluster,
                            namespace,
                            name: a.name,
                            workspace: e.workspace,
                            detail: module14.toJS(e.detail._originData),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DISABLE"),
                    action: "delete",
                    onClick: function() {
                        return e.trigger("gateways.delete", {
                            cluster: e.cluster,
                            namespace,
                            name: a.name,
                            workspace: e.workspace,
                            detail: module14.toJS(e.detail),
                            success: function() {
                                e.props.rootStore.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
            if (!module63(a.createTime)) {
                n.splice(1, 1);
            }
            return n;
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.detail) || {};
            if (!module63(a)) {
                return [
                    {
                        name: t("CLUSTER"),
                        value: showNameAndAlias(e.cluster, "cluster")
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
                const params = this.props.match.params;
                const { workspace, namespace } = params;
                if (this.store.gateway.isLoading && !this.store.gateway.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const l = {
                    module: this.module,
                    name: this.detail.name,
                    operations: this.getOperations(),
                    authKey: namespace ? "ks-project-gateway" : workspace ? "ks-workspace-gateway" : "cluster-settings",
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: namespace ? t("PROJECT_GATEWAY") : workspace ? t("WORKSPACE_GATEWAY") : t("CLUSTER_GATEWAY"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={module4027(this.props.match.path)} {...l}/>;
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
            key: "isWorkspaceGateway",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace } = params;
                return workspace && !namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                const cluster = this.props.match.params.cluster;
                const pathname = this.props.location.pathname;
                if (pathname.indexOf("/federatedprojects/") > -1 || pathname.indexOf("/workspaces/") > -1) {
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
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "type",
            get: function() {
                if (this.cluster && !this.workspace) {
                    return "cluster";
                }
                if (this.workspace && !this.cluster) {
                    return "workspace";
                }
                return "project";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const workspace = this.props.match.params.workspace;
                const t = this.props.match.url.split("gateways")[0];
                return `${t}${workspace ? "gateways" : "gateways/cluster"}`;
            }
        }
    ]);
    return r;
})(Component)) || l) || l) || l;
export default S;
