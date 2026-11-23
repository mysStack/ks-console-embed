import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module793 from "./module-793.js";
import { coreUnitTS, getDisplayName, hideGPUByLicense } from "./module-52.js";
import { trigger } from "./module-792.js";
import { getLastMonitoringData, getSuitableUnit, getValueByUnit } from "./module-795.js";
import module891 from "./module-891.js";
import module946 from "./module-946.js";
import module438 from "./module-438.js";
import modal from "./module-5221.js";
import Module5222 from "./module-5222.js";
import module5224 from "./module-5224.js";
let o;
const N = {
    cpu_usage: "cluster_cpu_total",
    memory_usage: "cluster_memory_total",
    gpu_usage: "cluster_gpu_usage",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    disk_size_usage: "cluster_disk_size_capacity",
    node_count: "cluster_node_total"
};
const A = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        e.state = {
            confirm: false
        };
        e.monitorStore = new module891;
        e.tagsStore = new module946;
        e.clusterStore = new module438;
        e.fetchTagGroupList = function() {
            e.tagsStore.fetchGroupList();
        };
        e.getValue = function(e, a) {
            const n = module26(e, "value[1]", 0);
            var r = getSuitableUnit(n, a) || r;
            const o = getValueByUnit(n, r);
            const i = coreUnitTS(o, r);
            return `${o} ${t(i)}`;
        };
        e.fetchData = function() {
            const cluster = e.props.match.params.cluster;
            e.store.fetchDetail({
                name: cluster
            });
            e.store.fetchVersion({
                cluster
            });
            e.monitorStore.fetchMetrics({
                cluster,
                metrics: Object.values(hideGPUByLicense(N, cluster)),
                last: true
            });
        };
        e.getResourceOptions = function() {
            if (e.monitorStore.isLoading) {
                return [];
            }
            const t = getLastMonitoringData(e.monitorStore.data);
            const name = e.store.detail.name;
            const n = [
                {
                    name: e.getValue(t[N.node_count]) === 1 ? "NODE" : "NODES",
                    icon: "nodes",
                    value: e.getValue(t[N.node_count])
                },
                {
                    name: "CPU",
                    icon: "cpu",
                    value: e.getValue(t[N.cpu_usage], "cpu")
                },
                {
                    name: "MEMORY",
                    icon: "memory",
                    value: e.getValue(t[N.memory_usage], "memory")
                },
                {
                    name: "GPU",
                    icon: "gpu",
                    value: e.getValue(t[N.gpu_usage], "cpu")
                },
                {
                    name: "GPU_MEMORY",
                    icon: "computing",
                    value: e.getValue(t[N.gpu_memory_usage], "memory")
                }
            ];
            return hideGPUByLicense(n, name);
        };
        e.showEdit = function() {
            e.trigger("resource.baseinfo.edit", {
                detail: e.store.detail,
                modal,
                success: e.fetchClusterDetail
            });
        };
        e.showTags = function() {
            e.trigger("cluster.tag.clusterItemTags", {
                detail: e.store.detail,
                success: e.fetchClusterDetail,
                defaultValue: e.store.detail.tags.map((t)=>(e.tagsStore.tags || []).find((e)=>e.name === t.name)).filter(Boolean),
                tagsGroup: e.tagsStore.tagsGroup,
                store: e.tagsStore,
                onAddTags: e.showAddTags,
                tags: [
                    e.store.detail
                ]
            });
        };
        e.showAddTags = function() {
            e.trigger("cluster.tag.add", {
                success: e.tagsStore.fetchGroupList,
                store: e.tagsStore
            });
        };
        e.handleChange = function(confirm) {
            e.setState({
                confirm
            });
        };
        e.handleUnbind = function() {
            e.trigger("cluster.unbind", {
                store: e.store,
                detail: e.store.detail,
                success: function() {
                    return e.props.rootStore.routing.push("/clusters");
                }
            });
        };
        e.updateKubeConfig = function() {
            e.trigger("cluster.updateKubeConfig", {
                detail: e.store.detail,
                success: e.fetchClusterDetail
            });
        };
        e.manageButtonClick = function(t, a) {
            const n = e.enableManageAction.filter((e)=>e.actionName === a)[0];
            if (n) {
                n.onClick();
            }
        };
        e.renderManageButton = function() {
            const e_enableManageAction = e.enableManageAction;
            const content = <module186.Menu onClick={e.manageButtonClick}>{e_enableManageAction.map((e)=><module186.Menu.MenuItem key={e.actionName}><module186.Icon name={e.icon} type="light"/>{e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            if (e_enableManageAction.length > 1) {
                return <Module5222 className={module5224.manage} content={content}/>;
            }
            return e_enableManageAction.length > 0 && <module186.Button className={module5224.singleButton} onClick={function() {
                return e_enableManageAction[0].onClick();
            }}>{e_enableManageAction[0].text}</module186.Button>;
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
                const kubernetesVersion = this.store.detail.kubernetesVersion;
                const a = this.getResourceOptions();
                return <><Module793 icon="cdn" title={t("BASIC_INFORMATION")} description={t("CLUSTER_BASE_INFO_DESC")}/><Module790 title={t("CLUSTER_INFORMATION")}><div className={module5224.header}><Module791 icon="edge-node" title={getDisplayName(this.store.detail)} description={t("EDGE_CLUSTER")}/><Module791 title={kubernetesVersion || this.store.version} description={t("KUBERNETES_VERSION")}/>{this.editPromission && this.renderManageButton()}</div><div className={module5224.content}>{a.map((e)=><Module791 key={e.name} icon={e.icon} title={e.value} description={t(e.name)}/>)}</div></Module790></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.clusterStore;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "cluster-settings",
                    cluster: this.props.match.params.cluster
                });
            }
        },
        {
            key: "editPromission",
            get: function() {
                return globals.user.globalRules.clusters?.includes("manage");
            }
        },
        {
            key: "enableManageAction",
            get: function() {
                return [
                    {
                        actionName: "resource.baseinfo.edit",
                        onClick: this.showEdit,
                        icon: "pen",
                        text: t("EDIT_INFORMATION")
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default A;
