import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { getNodeRoles, getNodeStatus } from "./module-444.js";
import { trigger } from "./module-792.js";
import module858 from "./module-858.js";
import Module825 from "./module-825.js";
import Module796 from "./module-796.js";
import routes from "./module-3960.js";
let o;
const C = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.store = new module858;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, node } = params;
            e.store.fetchDetail({
                name: node,
                cluster
            });
        };
        e.getOperations = function() {
            const unschedulable = e.store.detail.unschedulable;
            return [
                {
                    key: "cordon",
                    type: unschedulable ? "control" : "danger",
                    text: unschedulable ? t("UNCORDON") : t("CORDON"),
                    action: "edit",
                    onClick: e.handleCordon
                },
                {
                    key: "eidtLabel",
                    icon: "pen",
                    text: t("EDIT_LABELS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("node.labels", {
                            title: t("LABEL_PL"),
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "taintManagement",
                    icon: "wrench",
                    text: t("EDIT_TAINTS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("node.taint", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const r = module14.toJS(e.store.detail);
            if (!module63(r)) {
                const n = getNodeStatus(r);
                const a = <Module796 type={n} name={t(`NODE_STATUS_${n.toUpperCase()}`)}/>;
                const o = module26(r, "status.addresses[0].address", "-");
                const u = r.nodeInfo || {};
                return [
                    {
                        name: t("STATUS"),
                        value: a
                    },
                    {
                        name: t("IP_ADDRESS"),
                        value: o
                    },
                    {
                        name: t("ROLE"),
                        value: getNodeRoles(r.labels).map((e)=>t(e.replace(/[- ]/g, "_").toUpperCase())).join("/") || "-"
                    },
                    {
                        name: t("OS_VERSION"),
                        value: u.osImage
                    },
                    {
                        name: t("OS_TYPE"),
                        value: t(u.operatingSystem.toUpperCase())
                    },
                    {
                        name: t("KERNEL_VERSION"),
                        value: u.kernelVersion
                    },
                    {
                        name: t("CONTAINER_RUNTIME"),
                        value: u.containerRuntimeVersion
                    },
                    {
                        name: t("KUBELET_VERSION"),
                        value: u.kubeletVersion
                    },
                    {
                        name: t("KUBE_PROXY_VERSION"),
                        value: u.kubeProxyVersion
                    },
                    {
                        name: t("ARCHITECTURE"),
                        value: u.architecture.toUpperCase()
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(r.createTime).format("YYYY-MM-DD HH:mm:ss")
                    }
                ];
            }
        };
        e.handleCordon = function() {
            const t = module14.toJS(e.store.detail);
            if (t.unschedulable) {
                e.store.uncordon(t).then(e.fetchData);
            } else {
                e.store.cordon(t).then(e.fetchData);
            }
        };
        return e;
    }
    module37(n, [
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
                const r = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("EDGE_NODE_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={routes} {...r}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "edgenodes";
            }
        },
        {
            key: "name",
            get: function() {
                return "EDGE_NODE";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/clusters/${cluster}/edgenodes`;
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default C;
