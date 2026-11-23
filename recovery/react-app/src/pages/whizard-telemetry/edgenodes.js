import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
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
import "unpacked/module-436.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import { cpuFormat, memoryFormat } from "utils/index";
import { ICON_TYPES, NODE_STATUS } from "utils/constants";
import { getNodeStatus } from "utils/node";
import { getValueByUnit } from "utils/monitoring";
import module1174 from "stores/edgenode";
import module1137 from "unpacked/module-1137.js";
import modal from "components/Modals/KubeCtl";
import { ListPage, withClusterList } from "components/HOCs/withList";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module791 from "components/Base/Text";
import module788 from "components/Base/Modal";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import module4126 from "unpacked/module-4126.js";
let c;
const j = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota"
};
const x = withClusterList({
    store: new module1174,
    name: "EDGE_NODE",
    module: "edgenodes"
})(c = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.store = e.props.store;
        e.monitoringStore = new module1137({
            cluster: e.cluster
        });
        e.getData = async (a)=>{
            await e.store.fetchList({
                ...a,
                ...e.props.match.params,
                type: "edgenode"
            });
            await e.monitoringStore.fetchMetrics({
                ...e.props.match.params,
                resources: e.store.list.data.map((e)=>e.name),
                metrics: Object.values(j),
                last: true
            });
        };
        e.getUnschedulable = function(e) {
            return e.taints.some((e)=>e.key === "node.kubernetes.io/unschedulable");
        };
        e.getReady = function(e) {
            return e.conditions.some((e)=>e.type === "Ready" && e.status === "True");
        };
        e.handleOpenTerminal = function(t) {
            var a = module788.open({
                onOk: function() {
                    module788.close(a);
                },
                modal,
                cluster: e.cluster,
                title: t.name,
                nodename: t.name
            });
        };
        e.getLastValue = function(t, a, r) {
            const data = e.monitoringStore.data;
            const u = (module26(data[a], "data.result") || []).find((e)=>module26(e, "metric.node") === t.name);
            return getValueByUnit(module26(u, "value[1]", 0), r);
        };
        e.getRecordMetrics = function(t, a) {
            const r = {};
            a.forEach((a)=>{
                r[a.type] = parseFloat(e.getLastValue(t, j[a.type], a.unit));
            });
            return r;
        };
        e.renderTaintsTip = function(e) {
            return <div><div>{t("TAINTS")}:</div><div>{e.map((e)=>{
                const t = `${e.key}=${e.value || ""}:${e.effect}`;
                return <div key={t}>{t}</div>;
            })}</div></div>;
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { module, prefix, getSortOrder, getFilteredValue } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(title, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} to={t.importStatus !== "success" ? null : `${prefix}/${title}`} title={title} desc={t.ip}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    render: function(a, r) {
                        const n = getNodeStatus(r);
                        const r_taints = r.taints;
                        return <div className={module4126.status}><Module796 type={n} name={t(`NODE_STATUS_${n.toUpperCase()}`)}/>{!module63(r_taints) && r.importStatus === "success" && <module186.Tooltip content={e.renderTaintsTip(r_taints)}><span className={module4126.taints}>{r_taints.length}</span></module186.Tooltip>}</div>;
                    }
                },
                {
                    title: t("ROLE"),
                    dataIndex: "role",
                    isHideable: true,
                    search: true,
                    render: function(e) {
                        return e.map((e)=>t(e.replace("-", "_").toUpperCase())).join("/");
                    }
                }
            ];
        };
        e.renderCPUTooltip = function(e) {
            const a = <p>{cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')) === 1 ? t("CPU_LIMIT_SI", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
            }) : t("CPU_LIMIT_PL", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-limits-fraction"]')
            })}</p>;
            return <module186.Tooltip content={a} placement="top"><Module791 title={cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-limits"]')) === 1 ? t("CPU_REQUEST_SI", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-requests"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
            }) : t("CPU_REQUEST_PL", {
                core: cpuFormat(module26(e, 'annotations["node.kubesphere.io/cpu-requests"]')),
                percent: module26(e, 'annotations["node.kubesphere.io/cpu-requests-fraction"]')
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        e.renderMemoryTooltip = function(e) {
            const a = <p>{t("MEMORY_LIMIT_VALUE", {
                gib: memoryFormat(module26(e, 'annotations["node.kubesphere.io/memory-limits"]'), "Gi"),
                percent: module26(e, 'annotations["node.kubesphere.io/memory-limits-fraction"]')
            })}</p>;
            return <module186.Tooltip content={a} placement="top"><Module791 title={t("MEMORY_REQUEST_VALUE", {
                gib: memoryFormat(module26(e, 'annotations["node.kubesphere.io/memory-requests"]'), "Gi"),
                percent: module26(e, 'annotations["node.kubesphere.io/memory-requests-fraction"]')
            })} description={t("RESOURCE_REQUEST")}/></module186.Tooltip>;
        };
        return e;
    }
    module37(r, [
        {
            key: "getStatus",
            value: function() {
                return NODE_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                const isLoading = this.monitoringStore.isLoading;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} title={t("EDGE_NODE_PL")} tips={this.tips}/><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} isLoading={tableProps.isLoading || isLoading}/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "isExpired",
            get: function() {
                return globals.licenseInfo?.isExpired || false;
            }
        },
        {
            key: "isUnAuthorized",
            get: function() {
                return globals.licenseInfo?.isUnAuthorized || false;
            }
        },
        {
            key: "isOverLimit",
            get: function() {
                return globals.licenseInfo.isOverLimit || false;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    actions: [],
                    selectActions: []
                };
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WHAT_IS_NODE_TAINTS_Q"),
                        description: t("WHAT_IS_NODE_TAINTS_A")
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || c;
export default x;
