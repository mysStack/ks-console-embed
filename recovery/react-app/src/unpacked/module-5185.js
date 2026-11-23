import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-436.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import module797 from "components/Tables/List";
import module789 from "components/Base/Avatar";
import module796 from "components/Base/Status";
import module791 from "components/Base/Text";
import { getNodeStatus } from "utils/node";
import { NODE_STATUS } from "utils/constants";
import { getValueByUnit } from "utils/monitoring";
import module954 from "unpacked/module-954.js";
import module953 from "unpacked/module-953.js";
import module1573 from "unpacked/module-1573.js";
const N = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota",
    gpu_used: "edge_node_gpu_usage",
    gpu_total: "edge_node_gpu_total",
    gpu_utilization: "edge_node_gpu_utilization",
    gpu_memory_usage: "edge_node_gpu_memory_usage",
    gpu_memory_total: "edge_node_gpu_memory_total",
    gpu_memory_utilization: "edge_node_gpu_memory_utilization",
    npu_used: "edge_node_npu_usage",
    npu_total: "edge_node_npu_total",
    npu_utilization: "edge_node_npu_utilization",
    npu_memory_usage: "edge_node_npu_memory_usage",
    npu_memory_total: "edge_node_npu_memory_total",
    npu_memory_utilization: "edge_node_npu_memory_utilization"
};
const A = new module953;
export const EdgewizeNodeTable = module553.forwardRef(function(e, ref) {
    const _this = this;
    const { node, prefix, getSortOrder, getFilteredValue, itemActions } = e;
    const itemActions_1 = itemActions === undefined ? [] : itemActions;
    const { tableActions, cluster } = e;
    const I = new module954({
        cluster
    });
    const x = module553.useState({
        order: undefined,
        reverse: undefined
    });
    const M = module96(x, 2);
    M[0];
    M[1];
    const L = module553.useState({
        data: [],
        name: "EDGE_NODE",
        module: "edgenodes",
        authKey: "nodes",
        enabledActions: e?.tableProps?.enabledActions,
        rowKey: "metadata.name",
        tableId: "",
        isEmptyList: false,
        pagination: {
            page: 1,
            limit: 10,
            total: 0
        }
    });
    const j = module96(L, 2);
    const U = j[0];
    const z = j[1];
    function G(e) {
        return Y.apply(this, arguments);
    }
    function Y() {
        return (Y = async function t(a) {
            let r;
            r = await A.getTreeNode({
                ...e?.match?.params,
                ...a,
                cluster,
                nodetree: node?.key
            });
            z({
                ...U,
                data: r.items,
                pagination: {
                    ...U.pagination,
                    data: r.items,
                    total: r.totalItems
                }
            });
        }).apply(this, arguments);
    }
    function F(e, t) {
        const a = {};
        t.forEach((t)=>{
            a[t.type] = parseFloat(((e, t, a)=>{
                const I_data = I.data;
                const r = (module26(I_data[t], "data.result") || []).find((t)=>module26(t, "metric.node") === e.name);
                return getValueByUnit(module26(r, "value[1]", 0), a);
            })(e, N[t.type], t.unit));
        });
        return a;
    }
    module553.useEffect(function() {
        if (_this) {
            _this.getData = G;
            _this.props = e;
        }
        if (node?.key) {
            G({});
        }
    }, [
        node
    ]);
    return module553.default.createElement(module797, {
        ref,
        ...U,
        onFetch: G,
        onCreate: !module63(node) && function() {
            return e.trigger("node.bound.node.group", {
                parentKey: node?.key,
                cluster,
                success: G
            });
        },
        itemActions: itemActions_1,
        tableActions,
        columns: [
            {
                title: t("NAME"),
                dataIndex: "metadata.name",
                sorter: true,
                sortOrder: getSortOrder?.("name"),
                search: true,
                render: function(title, t) {
                    const metadata = (t || {}).metadata;
                    const r = t.ip;
                    t.labels;
                    const t_importStatus = t.importStatus;
                    const i = metadata.labels?.["kubeedge.io/internal-ip"] || r;
                    return module553.default.createElement(module789, {
                        icon: "edge-node",
                        iconSize: 40,
                        to: t_importStatus !== "success" ? null : `${prefix}/${title}`,
                        title,
                        desc: i ?? "-"
                    });
                }
            },
            {
                title: t("STATUS"),
                dataIndex: "status",
                filters: NODE_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    })),
                filteredValue: getFilteredValue?.("status"),
                isHideable: true,
                search: true,
                render: function(e, a) {
                    let n;
                    const r = getNodeStatus(a);
                    const a_taints = a.taints;
                    return module553.default.createElement("div", {
                        className: module1573.status
                    }, module553.default.createElement(module796, {
                        type: r,
                        name: t(`NODE_STATUS_${r.toUpperCase()}`)
                    }), !module63(a_taints) && a.importStatus === "success" && module553.default.createElement(module186.Tooltip, {
                        content: (n = a_taints, module553.default.createElement("div", null, module553.default.createElement("div", null, t("TAINTS"), ":"), module553.default.createElement("div", null, n.map((e)=>{
                            const t = `${e.key}=${e.value || ""}:${e.effect}`;
                            return module553.default.createElement("div", {
                                key: t
                            }, t);
                        }))))
                    }, module553.default.createElement("span", {
                        className: module1573.taints
                    }, a_taints.length)));
                }
            },
            {
                title: t("CPU"),
                key: "cpu",
                isHideable: true,
                render: function(e) {
                    const t = F(e, [
                        {
                            type: "cpu_used",
                            unit: "Core"
                        },
                        {
                            type: "cpu_total",
                            unit: "Core"
                        },
                        {
                            type: "cpu_utilisation"
                        }
                    ]);
                    return module553.default.createElement(module791, {
                        title: module553.default.createElement("div", {
                            className: module1573.resource
                        }, module553.default.createElement("span", null, `${Math.round(100 * t.cpu_utilisation)}%`), t.cpu_utilisation >= 0.9 && module553.default.createElement(module186.Icon, {
                            name: "exclamation"
                        })),
                        description: `${t.cpu_used}/${t.cpu_total} Core`
                    });
                }
            },
            {
                title: t("MEMORY"),
                key: "memory",
                isHideable: true,
                render: function(e) {
                    const t = F(e, [
                        {
                            type: "memory_used",
                            unit: "Gi"
                        },
                        {
                            type: "memory_total",
                            unit: "Gi"
                        },
                        {
                            type: "memory_utilisation"
                        }
                    ]);
                    return module553.default.createElement(module791, {
                        title: module553.default.createElement("div", {
                            className: module1573.resource
                        }, module553.default.createElement("span", null, `${Math.round(100 * t.memory_utilisation)}%`), t.memory_utilisation >= 0.9 && module553.default.createElement(module186.Icon, {
                            name: "exclamation"
                        })),
                        description: `${t.memory_used}/${t.memory_total} GiB`
                    });
                }
            },
            {
                title: t("POD_PL"),
                key: "pods",
                isHideable: true,
                render: function(e) {
                    const t = F(e, [
                        {
                            type: "pod_used"
                        },
                        {
                            type: "pod_total"
                        }
                    ]);
                    const a = t.pod_total ? parseFloat(t.pod_used / t.pod_total) : 0;
                    return module553.default.createElement(module791, {
                        title: `${Math.round(100 * a)}%`,
                        description: `${t.pod_used}/${t.pod_total}`
                    });
                }
            },
            {
                title: t("FROM_NODE_GROUP"),
                dataIndex: "nodegroup",
                isHideable: false,
                search: false,
                render: function(e, t) {
                    const metadata = (t || {}).metadata;
                    return metadata?.labels["apps.edgewize.io/nodegroup"] || "";
                }
            }
        ],
        isLoading: U?.isLoading
    });
});
export default EdgewizeNodeTable;
