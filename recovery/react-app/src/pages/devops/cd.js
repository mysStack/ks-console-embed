import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-110.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
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
import module49 from "unpacked/module-49.js";
import Module789 from "components/Base/Avatar";
import Module793 from "unpacked/module-793.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import module241 from "unpacked/module-241.js";
import module14 from "unpacked/module-14.js";
import { Component } from "unpacked/module-553.js";
import module1193 from "stores/cd";
import module438 from "stores/cluster";
import { getDisplayName, getLocalTime } from "utils/index";
import { CD_SYNC_STATUS, CD_WEATHER_STATUS } from "utils/constants";
import Module5056 from "unpacked/module-5056.js";
import Module1986 from "unpacked/module-1986.js";
import Module1461 from "unpacked/module-1461.js";
import module5060 from "unpacked/module-5060.js";
let u;
let c;
const M = module794({
    store: new module1193,
    module: "cds",
    name: "CONTINUOUS_DEPLOYMENT",
    rowKey: "name",
    authKey: "applications"
})((c = ((Component_1)=>{
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
        e.clusterStore = new module438;
        e.getData = async (r)=>{
            await e.props.store.fetchList({
                devops: e.devops,
                ...e.props.match.params,
                ...r
            });
            await e.props.store.fetchStatusSummary({
                devops: e.devops,
                cluster: e.cluster
            });
        };
        e.handleFetch = function(t, r) {
            e.routing.query(t, r);
        };
        e.handleCreate = function() {
            e.props.trigger("cd.create", {
                title: t("CREATE_CONTINUOUS_DEPLOYMENT"),
                devops: e.devops,
                cluster: e.cluster,
                module: "cds",
                noCodeEdit: true,
                success: e.getData
            });
        };
        e.handleSync = function(r) {
            const e_props = e.props;
            e_props.trigger("cd.sync", {
                module: e_props.module,
                title: t("SYNC_RESOURCE"),
                formTemplate: module241(r, "repoSource"),
                devops: e.devops,
                cluster: e.cluster,
                application: r.name,
                noCodeEdit: true,
                success: e.getData
            });
        };
        e.getWeatherStatus = function() {
            return CD_WEATHER_STATUS.map((e)=>({
                    text: t(e.text),
                    value: e.value
                }));
        };
        e.getSyncStatus = function() {
            return CD_SYNC_STATUS.map((e)=>({
                    text: t(e.text),
                    value: e.value
                }));
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, getFilteredValue } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "20%",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, r) {
                        return <Module789 to={`${e.prefix}/${t}`} desc={r.description} title={getDisplayName(r)}/>;
                    }
                },
                {
                    title: t("HEALTH_STATUS"),
                    dataIndex: "healthStatus",
                    width: "20%",
                    filters: e.getWeatherStatus(),
                    filteredValue: getFilteredValue("healthStatus"),
                    search: true,
                    render: function(e = "Unknown") {
                        return <Module1461 type={e} label={t(e)}/>;
                    }
                },
                {
                    title: t("SYNC_STATUS"),
                    dataIndex: "syncStatus",
                    filters: e.getSyncStatus(),
                    filteredValue: getFilteredValue("syncStatus"),
                    search: true,
                    width: "20%",
                    render: function(e = "Unknown") {
                        return <Module1461 type={e} label={e}/>;
                    }
                },
                {
                    title: t("DEPLOY_LOCATION"),
                    dataIndex: "destination",
                    isHideable: true,
                    width: "20%",
                    render: function(destination) {
                        return <Module1986 destination={destination} clustersDetail={e.clusters}/>;
                    }
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "updateTime",
                    sorter: true,
                    sortOrder: getSortOrder("updateTime"),
                    isHideable: true,
                    width: "20%",
                    render: function(e, t) {
                        const r = module26(t, "status.reconciledAt");
                        if (r) {
                            return getLocalTime(r).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
                }
            ];
        };
        e.handleFilter = function(t) {
            const filters = e.props.store.list.filters;
            Object.keys(filters).forEach((e)=>{
                if (Object.values(t).includes(filters[e])) {
                    t[e] = "";
                }
            });
            e.handleFetch(t);
        };
        e.renderStatusCard = function() {
            const filters = e.props.store.list.filters;
            const { total = 0, healthStatus = {} } = e.props.store.summary;
            const l = [
                {
                    title: "HEALTHY",
                    color: "#55BC8A",
                    used: healthStatus.Healthy || 0,
                    total,
                    icon: "/assets/cd/health.svg",
                    label: "HEALTH_STATUS"
                },
                {
                    title: "DEGRADED",
                    color: "#CA2621",
                    used: healthStatus.Degraded || 0,
                    total,
                    icon: "/assets/cd/degraded.svg",
                    label: "HEALTH_STATUS"
                },
                {
                    title: "PROGRESSING",
                    color: "#F5A623",
                    used: healthStatus.Progressing || 0,
                    total,
                    icon: "/assets/cd/progressing.svg",
                    label: "HEALTH_STATUS"
                }
            ];
            return <div className={module5060.warper__item}>{l.map((r)=><Module5056 item={r} key={r.title} type="healthStatus" click={e.handleFilter} label={r.label} filters={filters}/>)}</div>;
        };
        e.renderSyncStatusCard = function() {
            const filters = e.props.store.list.filters;
            const { total = 0, syncStatus = {} } = e.props.store.summary;
            const l = [
                {
                    title: "SYNCED",
                    color: "#55BC8A",
                    used: syncStatus.Synced || 0,
                    total,
                    icon: "/assets/cd/synced.svg",
                    label: "SYNC_STATUS"
                },
                {
                    title: "OUTOFSYNC",
                    filterValue: "OutOfSync",
                    color: "#F5A623",
                    used: syncStatus.OutOfSync || 0,
                    total,
                    icon: "/assets/cd/outofsync.svg",
                    label: "SYNC_STATUS"
                },
                {
                    title: "UNKNOWN",
                    color: "#36435C",
                    used: syncStatus.Unknown || 0,
                    total,
                    icon: "/assets/cd/unknown.svg",
                    label: "SYNC_STATUS"
                }
            ];
            return <div className={module5060.warper__item}>{l.map((r)=><Module5056 item={r} type="syncStatus" key={r.title} click={e.handleFilter} label={r.label} filters={filters}/>)}</div>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.clusterStore.fetchList({
                    limit: -1
                });
                this.getData();
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const tableProps = this.props.tableProps;
                const n = module14.toJS(this.props.store.list);
                const { filters, selectedRowKeys, isLoading, total } = n;
                const u = module189(filters, [
                    "limit",
                    "page"
                ]);
                const tableActions = {
                    onSelectRowKeys: this.props.store.setSelectRowKeys,
                    selectedRowKeys,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return _this.props.trigger("cd.batch.delete", {
                                    rowKey: "name",
                                    devops: _this.devops,
                                    cluster: _this.cluster,
                                    success: function() {
                                        setTimeout(()=>{
                                            _this.handleFetch();
                                        }, 1000);
                                    }
                                });
                            }
                        }
                    ]
                };
                const onCreate = this.enabledActions.includes("create") ? this.handleCreate : null;
                const showEmpty = isLoading === false && total === 0 && Object.keys(u).length <= 0;
                return <Module797 rowKey="name" {...tableProps} columns={this.getColumns()} onCreate={onCreate} onFetch={this.handleFetch} tableActions={tableActions} itemActions={this.itemActions} isLoading={isLoading} showEmpty={showEmpty} enabledActions={this.enabledActions}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const bannerProps = this.props.bannerProps;
                return <ListPage {...this.props} getData={this.getData}><Module793 {...bannerProps}/><div>{!this.hideSummary && <div className={module5060.status__container}><div className={module5060.warper__container}>{this.renderStatusCard()}</div><div className={module5060.warper__container}>{this.renderSyncStatusCard()}</div></div>}{this.renderContent()}</div></ListPage>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.clusterStore.list.data;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "applications",
                    cluster: this.cluster,
                    devops: this.devops
                });
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.match.params.devops;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "prefix",
            get: function() {
                this.props.match.url.endsWith("/");
                return this.props.match.url;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "hideSummary",
            get: function() {
                const { healthStatus = {}, syncStatus = {} } = module14.toJS(this.props.store.summary);
                return [].concat(Object.values(healthStatus)).concat(Object.values(syncStatus)).every((e)=>!e);
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, routing } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(t) {
                            trigger("resource.baseinfo.edit", {
                                detail: {
                                    ...t,
                                    cluster: _this.cluster
                                },
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "yaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(t) {
                            trigger("resource.yaml.edit", {
                                detail: {
                                    ...t,
                                    cluster: _this.cluster
                                },
                                success: routing.query
                            });
                        }
                    },
                    {
                        key: "sync",
                        icon: "changing-over",
                        text: t("SYNC"),
                        action: "edit",
                        onClick: function(t) {
                            _this.handleSync(t);
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            trigger("cd.delete", {
                                type: "CONTINUOUS_DEPLOYMENT",
                                detail,
                                cluster: _this.cluster,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component), module49(c.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(c.prototype, "clusters"), c.prototype), u = c)) || u;
export default M;
