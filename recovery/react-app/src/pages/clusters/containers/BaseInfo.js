import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module186 from "unpacked/module-186.js";
import modal from "unpacked/module-1788.js";
import Module790 from "components/Base/Panel";
import Module791 from "components/Base/Text";
import Module793 from "unpacked/module-793.js";
import { ClusterTagItem } from "unpacked/module-925.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module946 from "unpacked/module-946.js";
import module891 from "unpacked/module-891.js";
import { coreUnitTS, getDisplayNameNew, getDomTitle, hideGPUByLicense } from "utils/index";
import { trigger } from "utils/action";
import { CLUSTER_PROVIDER_ICON } from "utils/constants";
import { getLastMonitoringData, getSuitableUnit, getValueByUnit } from "utils/monitoring";
import module3799 from "unpacked/module-3799.js";
import Module1215 from "unpacked/module-1215.js";
let d;
const N = {
    cpu_usage: "cluster_cpu_total",
    memory_usage: "cluster_memory_total",
    gpu_usage: "cluster_gpu_usage",
    gpu_memory_usage: "cluster_gpu_memory_usage",
    disk_size_usage: "cluster_disk_size_capacity",
    node_count: "cluster_node_total"
};
const R = inject("rootStore", "clusterStore")(d = observer(d = trigger(d = ((Component_1)=>{
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
        e.state = {
            confirm: false
        };
        e.monitorStore = new module891;
        e.tagsStore = new module946;
        e.fetchTagGroupList = function() {
            e.tagsStore.fetchGroupList();
        };
        e.getValue = function(e, r) {
            const n = module26(e, "value[1]", 0);
            var a = getSuitableUnit(n, r) || a;
            const o = getValueByUnit(n, a);
            const u = coreUnitTS(o, a);
            return `${o} ${t(u)}`;
        };
        e.fetchData = function() {
            const name = e.store.detail.name;
            e.store.fetchVersion({
                cluster: name
            });
            e.monitorStore.fetchMetrics({
                cluster: name,
                metrics: Object.values(hideGPUByLicense(N, name)),
                last: true
            });
        };
        e.fetchClusterDetail = function() {
            e.store.fetchDetail({
                name: e.props.match.params.cluster
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
                },
                {
                    name: "DISK",
                    icon: "storage",
                    value: e.getValue(t[N.disk_size_usage], "disk")
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
        e.manageButtonClick = function(t, r) {
            const n = e.enableManageAction.filter((e)=>e.actionName === r)[0];
            if (n) {
                n.onClick();
            }
        };
        e.renderManageButton = function() {
            const e_enableManageAction = e.enableManageAction;
            const content = <module186.Menu onClick={e.manageButtonClick}>{e_enableManageAction.map((e)=><module186.Menu.MenuItem key={e.actionName}><module186.Icon name={e.icon} type="light"/>{e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            if (e_enableManageAction.length > 1) {
                return <Module1215 className={module3799.manage} content={content}/>;
            }
            return e_enableManageAction.length > 0 && <module186.Button className={module3799.singleButton} onClick={function() {
                return e_enableManageAction[0].onClick();
            }}>{e_enableManageAction[0].text}</module186.Button>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.store.detail.isReady) {
                    this.fetchData();
                }
                this.fetchTagGroupList();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                const { provider, kubernetesVersion, tags } = detail;
                const i = this.getResourceOptions();
                return <><Module793 icon="cluster" title={t("BASIC_INFORMATION")} description={t("CLUSTER_BASE_INFO_DESC")}/><Module790 title={t("CLUSTER_INFORMATION")}><div className={module3799.header}><Module791 icon={CLUSTER_PROVIDER_ICON[provider] || "kubernetes"} title={getDomTitle(getDisplayNameNew(this.store.detail))} description={t("CLUSTER")} ellipsis/>{provider && <Module791 title={provider} description={t("PROVIDER")}/>}<Module791 title={kubernetesVersion || this.store.version} description={t("KUBERNETES_VERSION")}/>{this.editPromission && this.renderManageButton()}</div><div className={module3799.content}>{i.map((e)=><Module791 key={e.name} icon={e.icon} title={e.value} description={t(e.name)}/>)}</div></Module790><Module790 title={t("CLUSTER_TAGS")}>{tags.length > 0 && <div className={module3799.tags}>{tags.map((t)=>{
                    const r = (_this.tagsStore.tags || []).find((e)=>e.name === t.name);
                    if (r) {
                        return <ClusterTagItem {...r} key={r.name}/>;
                    }
                    return null;
                })}</div>}</Module790></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.clusterStore;
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
                const detail = this.store.detail;
                const e_isHost = detail.isHost;
                const n = e_isHost !== undefined && e_isHost;
                const a = detail.connectionType === "proxy";
                const enabledActions = this.enabledActions;
                const u = [];
                if (enabledActions.includes("edit") && globals.app.isMultiCluster) {
                    u.push({
                        actionName: "resource.baseinfo.edit",
                        onClick: this.showEdit,
                        icon: "pen",
                        text: t("EDIT_INFORMATION")
                    });
                }
                if (module26(window, "globals.user.globalrole", "") === "platform-admin" || module26(window, "globals.user.globalRules.clusters", []).includes("manage")) {
                    u.push({
                        actionName: "cluster.tag.clusterItemTags",
                        onClick: this.showTags,
                        icon: "add",
                        text: t("ADD_TAGS")
                    });
                }
                if (globals.app.isMultiCluster && !n && !a && enabledActions.includes("edit")) {
                    u.push({
                        actionName: "cluster.update.kubeconfig",
                        icon: "data",
                        text: t("UPDATE_KUBECONFIG"),
                        onClick: this.updateKubeConfig
                    });
                }
                if (globals.app.isMultiCluster && enabledActions.includes("delete") && !this.store.detail.isHost) {
                    u.push({
                        actionName: "cluster.unbind",
                        onClick: this.handleUnbind,
                        icon: "trash",
                        text: t("REMOVE_CLUSTER")
                    });
                }
                return u;
            }
        }
    ]);
    return n;
})(Component)) || d) || d) || d;
export default R;
