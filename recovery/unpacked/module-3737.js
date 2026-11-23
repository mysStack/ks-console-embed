import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
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
import Module811 from "./module-811.js";
import Module793 from "./module-793.js";
import Module789 from "./module-789.js";
import module240 from "./module-240.js";
import { ListPage, withClusterList } from "./module-794.js";
import Module1068 from "./module-1068.js";
import Module805 from "./module-805.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module318 from "./module-318.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import { ICON_TYPES, JOB_STATUS } from "./module-72.js";
import { getWorkloadStatus } from "./module-434.js";
let o;
const C = withClusterList({
    store: new module318("jobs"),
    module: "jobs",
    name: "JOB",
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
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(r)} desc={e.getItemDesc(r)} isMultiCluster={r.isFedManaged} to={`/clusters/${cluster}/projects/${r.namespace}/${module}/${t}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    width: "20%",
                    render: function(e, data) {
                        return <Module1068 data={data} module={module}/>;
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
                    title: t("LAST_RUN_TIME"),
                    dataIndex: "updateTime",
                    sorter: true,
                    sortOrder: getSortOrder("updateTime"),
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { query, match, module } = e_props;
            return e.props.trigger("workload.create", {
                module,
                namespace: query.namespace,
                cluster: match.params.cluster,
                rootStore: e.props.rootStore
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "getStatus",
            value: function() {
                return JOB_STATUS.map((e)=>({
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
                const { trigger, name, store } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "rerun",
                        icon: "refresh",
                        text: t("RERUN"),
                        action: "edit",
                        onClick: function(r) {
                            store.rerun(r).then(()=>{
                                module240.success(t("OPERATION_SUCCESS"));
                            }).catch((e)=>{
                                console.error(e);
                                module240.error(t("OPERATION_FAILED"), e.message);
                            }).finally(()=>{
                                _this.props.routing.query();
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o;
export default C;
