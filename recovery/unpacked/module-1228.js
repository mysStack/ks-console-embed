import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-84.js";
import "./module-48.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime, isEdgeWizePage, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module452 from "./module-452.js";
import module1365 from "./module-1365.js";
import Module806 from "./module-806.js";
import module3896 from "./module-3896.js";
const O = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.isEdgeWize = isEdgeWizePage();
        e.store = e.isEdgeWize ? new module1365 : new module452;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace, podName } = params;
            e.store.fetchDetail({
                cluster,
                namespace,
                name: podName
            });
        };
        e.getOperations = function() {
            return [
                {
                    key: "viewYaml",
                    icon: "eye",
                    text: t("VIEW_YAML"),
                    action: "view",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            readOnly: true
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: e.store.detail,
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = e.store.detail;
            const u = detail === undefined ? {} : detail;
            if (module63(u)) {
                return null;
            }
            const u_podStatus = u.podStatus;
            const { status, type, restarts } = u_podStatus;
            return [
                {
                    name: t("CLUSTER"),
                    value: showNameAndAlias(cluster, "cluster")
                },
                {
                    name: t("PROJECT"),
                    value: showNameAndAlias(namespace, "project")
                },
                {
                    name: t("APP"),
                    value: u.app
                },
                {
                    name: t("STATUS"),
                    value: type !== "running" && type !== "completed" ? t(status) : t(type.toUpperCase())
                },
                {
                    name: t("POD_IP_ADDRESS"),
                    value: u.podIp
                },
                {
                    name: t("NODE_NAME"),
                    value: u.node
                },
                {
                    name: t("NODE_IP_ADDRESS"),
                    value: u.nodeIp
                },
                {
                    name: t("RESTART_PL"),
                    value: restarts
                },
                {
                    name: t("QOS_CLASS"),
                    value: module26(u, "status.qosClass")
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(u.createTime).format("YYYY-MM-DD HH:mm:ss")
                },
                {
                    name: t("CREATOR"),
                    value: u.creator
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("POD_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module3896(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "pods";
            }
        },
        {
            key: "name",
            get: function() {
                return "POD";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                const n = localStorage.getItem("pod-detail-referrer");
                if (n) {
                    if (n.includes("consolev3")) {
                        return n.slice(10);
                    }
                    return n;
                }
                if (workspace) {
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        }
    ]);
    return r;
})(Component);
const S = inject("rootStore")(observer(trigger(O)));
export default S;
const C = O;
export { C as Component };
