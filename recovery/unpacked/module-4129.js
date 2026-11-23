import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
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
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import { ListPage, withClusterList } from "./module-794.js";
import Module805 from "./module-805.js";
import Module866 from "./module-866.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module318 from "./module-318.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import { ICON_TYPES, WORKLOAD_STATUS } from "./module-72.js";
import { getWorkloadStatus } from "./module-434.js";
let u;
const R = withClusterList({
    store: new module318("deployments"),
    module: "deployments",
    name: "WORKLOAD",
    rowKey: "uid"
})(u = ((Component_1)=>{
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
        e.handleTabChange = function(t) {
            const cluster = e.props.match.params.cluster;
            e.props.routing.push(`/whizard-telemetry/${cluster}/${t}`);
        };
        e.getItemDesc = function(a) {
            const r = getWorkloadStatus(a, e.props.module);
            const { status, reason } = r;
            if (reason) {
                return <Module805 status={status} reason={t(reason)} data={a}/>;
            }
            return a.description || "-";
        };
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
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
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={e.getItemDesc(a)} isMultiCluster={a.isFedManaged} to={`/whizard-telemetry/${cluster}/projects/${a.namespace}/${module}/${t}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getStatus(),
                    filteredValue: getFilteredValue("status"),
                    isHideable: true,
                    search: true,
                    width: "22%",
                    render: function(e, data) {
                        return <Module866 data={data} module={module}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true,
                    width: "22%",
                    render: function(e) {
                        return <Link to={`/whizard-telemetry/${cluster}/projects/${e}`}>{showNameAndAlias(e, "project")}</Link>;
                    }
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "updateTime",
                    sorter: true,
                    sortOrder: getSortOrder("updateTime"),
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "getStatus",
            value: function() {
                return WORKLOAD_STATUS.map((e)=>({
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
                return <ListPage {...this.props}><Module793 {...bannerProps} tabs={this.tabs}/><Module811 {...tableProps} itemActions={this.itemActions} selectActions={this.selectActions} columns={this.getColumns()} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
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
                            value: "deployments",
                            label: t("DEPLOYMENTS")
                        },
                        {
                            value: "statefulsets",
                            label: t("STATEFULSETS")
                        },
                        {
                            value: "daemonsets",
                            label: t("DAEMONSETS")
                        }
                    ]
                };
            }
        },
        {
            key: "selectActions",
            get: function() {
                return [];
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        }
    ]);
    return r;
})(Component)) || u;
export default R;
