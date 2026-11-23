import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject } from "unpacked/module-239.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module805 from "unpacked/module-805.js";
import Module797 from "components/Tables/List";
import { getDisplayName, getLocalTime } from "utils/index";
import { getWorkloadStatus } from "utils/status";
import { CRONJOB_STATUS, ICON_TYPES } from "utils/constants";
import module318 from "stores/workload/index";
let o;
const R = withProjectList({
    store: new module318("cronjobs"),
    module: "cronjobs",
    name: "CRONJOB"
})(o = inject("workspaceStore")(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.handleTabChange = function(t) {
            e.props.routing.push(`${e.prefix}/${t}`);
        };
        e.handleSwitch = function(t, a, r = "") {
            e.props.store.switch(t, a, r).then(()=>{
                e.props.routing.query();
            });
        };
        e.getItemDesc = function(a) {
            const r = getWorkloadStatus(a, e.props.module);
            const { status, reason } = r;
            if (reason) {
                return <Module805 status={status} reason={t(reason)} data={a}/>;
            }
            return a.description || "-";
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, getFilteredValue, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={e.getItemDesc(a)} to={`${e.prefix}/${module}/${t}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    width: "15%",
                    render: function(e, a) {
                        const status = getWorkloadStatus(a, module).status;
                        return <Module796 type={status} name={t(`CRONJOB_${status.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("SCHEDULE"),
                    dataIndex: "spec.schedule",
                    isHideable: true,
                    width: "15%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("workload.create", {
                module,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                supportGpuSelect: true,
                isProject: true,
                isEdge: e.isEdge,
                k8sVersion: e.k8sVersion,
                success: function() {
                    return e.props.routing.query();
                },
                rootStore: e.props.rootStore
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getStatus",
            value: function() {
                return CRONJOB_STATUS.map((e)=>({
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
                return <ListPage {...this.props}><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate}/></ListPage>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace, cluster } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        },
        {
            key: "k8sVersion",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return globals.clusterConfig?.[cluster]?.k8sVersion;
            }
        },
        {
            key: "isEdge",
            get: function() {
                return this.props.workspaceStore.isEdge;
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.props.module,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "jobs",
                            label: t("JOB_PL")
                        },
                        {
                            value: "cronjobs",
                            label: t("CRONJOB_PL")
                        }
                    ]
                };
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            trigger("resource.baseinfo.edit", {
                                detail: t,
                                k8sVersion: _this.k8sVersion,
                                success: function() {
                                    return _this.props.routing.query();
                                }
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(t) {
                            trigger("resource.yaml.edit", {
                                detail: t,
                                k8sVersion: _this.k8sVersion,
                                success: function() {
                                    return _this.props.routing.query();
                                }
                            });
                        }
                    },
                    {
                        show: function(e) {
                            return e.suspend;
                        },
                        key: "start",
                        icon: "start",
                        text: t("START"),
                        action: "edit",
                        onClick: function(t) {
                            _this.handleSwitch(t, true, _this.k8sVersion);
                        }
                    },
                    {
                        show: function(e) {
                            return !e.suspend;
                        },
                        key: "pause",
                        icon: "stop",
                        text: t("PAUSE"),
                        action: "edit",
                        onClick: function(t) {
                            _this.handleSwitch(t, false, _this.k8sVersion);
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            trigger("resource.delete", {
                                type: name,
                                detail: t,
                                k8sVersion: _this.k8sVersion,
                                success: function() {
                                    return _this.props.routing.query();
                                }
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
const A = inject()(function(e) {
    const cluster = e.match.params.cluster;
    const k8sVersion = globals.clusterConfig?.[cluster]?.k8sVersion;
    return <R k8sVersion={k8sVersion} {...e}/>;
});
export default A;
