import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { getDisplayName, getLocalTime } from "utils/index";
import { getNodeRoles, getNodeStatus } from "utils/node";
import { trigger } from "utils/action";
import module858 from "stores/node";
import Module825 from "unpacked/module-825.js";
import Module796 from "components/Base/Status";
import routes from "pages/clusters/containers/EdgeNodes/Detail/routes";
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
