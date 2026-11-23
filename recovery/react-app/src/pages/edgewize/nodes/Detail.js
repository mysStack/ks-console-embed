import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module1024 from "unpacked/module-1024.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import Module825 from "unpacked/module-825.js";
import { trigger } from "utils/action";
import { getDisplayName, getLocalTime } from "utils/index";
import { getNodeRoles, getNodeStatus } from "utils/node";
import module1038 from "unpacked/module-1038.js";
import module5239 from "unpacked/module-5239.js";
let l;
function D(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let n = Object.getOwnPropertySymbols(e);
        if (t) {
            n = n.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, n);
    }
    return a;
}
const P = inject("rootStore")(l = observer(l = trigger(l = ((Component_1)=>{
    module55(n, Component_1);
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.store = new module1038;
        e.init = async function t() {
            await e.fetchData();
            if (module88(e).nodegroup) {
                await e.store.fetchNodeGroupEdgeNodeDetail(e.nodegroupEdgeNodeParams);
            }
        };
        e.fetchData = async function t() {
            let a;
            let cluster;
            let r;
            a = e.props.match.params;
            cluster = a.cluster;
            r = a.node;
            await e.store.fetchDetail({
                name: r,
                cluster
            });
        };
        e.getOperations = function() {
            const unschedulable = e.store.detail.unschedulable;
            const o = [
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
            const i = e.store.nodegroupEdgeNodeDetail?.annotations?.["apps.edgewize.io/drain-nodegroup"];
            if (i && i === e.nodegroup) {
                o.push({
                    key: "delete",
                    icon: "trash",
                    text: t("UNBOUND_NODE_GROUP"),
                    action: "delete",
                    onClick: function() {
                        return e.trigger("edgeNode.unbound.nodeGroup", {
                            resource: e.nodegroupEdgeNodeParams.name,
                            params: e.nodegroupEdgeNodeParams,
                            store: e.store,
                            success: e.init
                        });
                    }
                });
            }
            return o;
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                const n = getNodeStatus(a);
                const r = <Module796 type={n} name={t(`NODE_STATUS_${n.toUpperCase()}`)}/>;
                const o = module26(a, "status.addresses[0].address", "-");
                const i = a.nodeInfo || {};
                return [
                    {
                        name: t("STATUS"),
                        value: r
                    },
                    {
                        name: t("IP_ADDRESS"),
                        value: o
                    },
                    {
                        name: t("ROLE"),
                        value: getNodeRoles(a.labels).map((e)=>t(e.replace(/[- ]/g, "_").toUpperCase())).join("/") || "-"
                    },
                    {
                        name: t("OS_VERSION"),
                        value: i.osImage
                    },
                    {
                        name: t("OS_TYPE"),
                        value: t(i.operatingSystem.toUpperCase())
                    },
                    {
                        name: t("KERNEL_VERSION"),
                        value: i.kernelVersion
                    },
                    {
                        name: t("CONTAINER_RUNTIME"),
                        value: i.containerRuntimeVersion
                    },
                    {
                        name: t("KUBELET_VERSION"),
                        value: i.kubeletVersion
                    },
                    {
                        name: t("ARCHITECTURE"),
                        value: i.architecture.toUpperCase()
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
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
                this.init();
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
                const t = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        this.breadcrumb
                    ]
                };
                const routes = this.canViewEvents ? module5239 : module5239.filter((e)=>![
                        "EVENT_PL",
                        "POD_PL"
                    ].includes(e.title));
                return <Module825 icon="edge-node" stores={stores} routes={routes} {...t}/>;
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
                return `/v2/edgewize/clusters/${cluster}/nodes`;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    ...this.props.match.params
                });
            }
        },
        {
            key: "canViewEvents",
            get: function() {
                return module1024(this.enabledActions) > 1;
            }
        },
        {
            key: "nodegroup",
            get: function() {
                return module26(this.store.detail, 'labels.["apps.edgewize.io/nodegroup"]', "");
            }
        },
        {
            key: "nodegroupEdgeNodeParams",
            get: function() {
                const params = this.props.match.params;
                const { cluster, node } = params;
                return {
                    cluster,
                    nodegroup: this.nodegroup,
                    name: node
                };
            }
        },
        {
            key: "breadcrumb",
            get: function() {
                const e = {
                    label: t("EDGE_NODE_PL"),
                    url: this.listUrl
                };
                if (this.canViewEvents) {
                    return e;
                }
                if (this.nodegroup) {
                    return {
                        label: t("NODE_ADMINISTRATION_PL"),
                        url: `/node-groups/clusters/${this.cluster}/${this.nodegroup}/nodes`
                    };
                }
                return e;
            }
        }
    ]);
    return n;
})(Component)) || l) || l) || l;
export default P;
