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
import Module811 from "pages/clusters/components/ResourceTable";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import { ListPage, withClusterList } from "components/HOCs/withList";
import Module805 from "unpacked/module-805.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module318 from "stores/workload/index";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { CRONJOB_STATUS, ICON_TYPES } from "utils/constants";
import { getWorkloadStatus } from "utils/status";
import { inject } from "unpacked/module-239.js";
let o;
const C = withClusterList({
    store: new module318("cronjobs"),
    module: "cronjobs",
    name: "CRONJOB",
    rowKey: "uid"
})(o = ((Component_1)=>{
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
        e.handleTabChange = function(t) {
            const cluster = e.props.match.params.cluster;
            e.props.routing.push(`/clusters/${cluster}/${t}`);
        };
        e.handleSwitch = function(t, r, n = "") {
            e.props.store.switch(t, r, n).then(()=>{
                e.props.routing.query();
            });
        };
        e.getItemDesc = function(r) {
            const n = getWorkloadStatus(r, e.props.module);
            const { status, reason } = n;
            if (reason) {
                return <Module805 status={status} reason={t(reason)} data={r}/>;
            }
            return r.description || "-";
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, getFilteredValue, module } = e_props;
            const cluster = e.props.match.params.cluster;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, r) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(r)} desc={e.getItemDesc(r)} to={`/clusters/${cluster}/projects/${r.namespace}/${module}/${t}`}/>;
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
                    render: function(e, r) {
                        const status = getWorkloadStatus(r, module).status;
                        return <Module796 type={status} name={t(`CRONJOB_${status.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true,
                    width: "18%",
                    render: function(e) {
                        return <Link to={`/clusters/${cluster}/projects/${e}`}>{showNameAndAlias(e, "project")}</Link>;
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
            const { query, match, module } = e_props;
            const i = globals.clusterConfig?.[match.params.cluster]?.k8sVersion;
            return e.props.trigger("workload.create", {
                module,
                namespace: query.namespace,
                cluster: match.params.cluster,
                k8sVersion: i,
                success: function() {
                    return e.props.routing.query();
                },
                rootStore: e.props.rootStore
            });
        };
        return e;
    }
    module37(n, [
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
                const { match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} tabs={this.tabs}/><Module811 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster}/></ListPage>;
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
                            const o = globals.clusterConfig?.[t?.cluster]?.k8sVersion;
                            trigger("resource.baseinfo.edit", {
                                detail: t,
                                k8sVersion: o,
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
                            const o = globals.clusterConfig?.[t?.cluster]?.k8sVersion;
                            trigger("resource.yaml.edit", {
                                detail: t,
                                k8sVersion: o,
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
                            const a = globals.clusterConfig?.[t?.cluster]?.k8sVersion;
                            _this.handleSwitch(t, true, a);
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
                            const a = globals.clusterConfig?.[t?.cluster]?.k8sVersion;
                            _this.handleSwitch(t, false, a);
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            const u = globals.clusterConfig?.[t?.cluster]?.k8sVersion;
                            trigger("resource.delete", {
                                type: name,
                                detail: t,
                                k8sVersion: u,
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
    return n;
})(Component)) || o;
const T = inject()(function(e) {
    const cluster = e.match.params.cluster;
    const a = globals.clusterConfig?.[cluster]?.k8sVersion;
    return <C k8sVersion={a} {...e}/>;
});
export default T;
