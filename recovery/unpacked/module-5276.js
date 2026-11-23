import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module446 from "./module-446.js";
import module856 from "./module-856.js";
import module186 from "./module-186.js";
import { getHostClusterName, safeParseJSON } from "./module-52.js";
import { trigger } from "./module-792.js";
import module105 from "./module-105.js";
import module854 from "./module-854.js";
import Module1391 from "./module-1391.js";
import Module793 from "./module-793.js";
import Module833 from "./module-833.js";
import Module875 from "./module-875.js";
import Module887 from "./module-887.js";
import Module916 from "./module-916.js";
import module5277 from "./module-5277.js";
let u;
const L = "edge_cluster_overview_hide_columns";
const U = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.initData = function(e = {}) {
            t.fetchData(e);
        };
        t.getClusterParamsLabel = function(e, t) {
            const r = t ? "cluster-role.kubesphere.io/host=" : "!cluster-role.kubesphere.io/host";
            let e_group = e.group;
            const e_tags = e.tags;
            let o = e_tags === undefined ? [] : e_tags;
            if (e_group) {
                e_group = `cluster.kubesphere.io/group=${e_group}`;
            }
            o = Array.isArray(o) ? o.map((e)=>`label.cluster.kubesphere.io/${e}`) : `cluster.kubesphere.io/group=${o}`;
            return [
                e_group
            ].concat(module61(o), [
                r
            ]).filter(Boolean).join(",");
        };
        t.getParamsLabel = function({ group }) {
            if (group) {
                group = `cluster.edgewize.io/group=${group}`;
            }
            return [
                group,
                "!cluster-role.edgewize.io/host"
            ].filter(Boolean).join(",");
        };
        t.fetchData = function(e = {}) {
            t.store.fetchList({
                ...module189(e, "group", "tags", "__index"),
                cluster: t.props.match.params.cluster,
                limit: e.limit || 10,
                labelSelector: "apps.edgewize.io/namespace-default"
            });
        };
        t.handlePagination = function(e) {
            t.fetchData(e);
        };
        t.handleRefresh = function() {
            t.fetchData({
                page: 1
            });
        };
        t.handleSearch = function(e) {
            t.fetchData(e);
            t.fetchHostData(e);
        };
        t.enterNodeGroupCluster = async (r)=>{
            t.routing.push(`/v2/edgewize/clusters/${r}`);
        };
        t.showAddNodeGroup = function() {
            t.trigger("node.group.create", {});
        };
        t.getItemActions = function() {
            return [].filter((e)=>e.show);
        };
        t.handleReset = function() {
            t.initData(t.state.filters);
        };
        t.clearFilter = function() {
            t.setState({
                filters: {}
            });
            t.initData();
        };
        t.handleColumnsHide = function(e) {
            t.setState({
                hideColumns: e
            }, function() {
                const e = safeParseJSON(localStorage.getItem("hide-columns"), {});
                e[L] = t.state.hideColumns;
                localStorage.setItem("hide-columns", JSON.stringify(e));
            });
        };
        t.handleFilterChange = function(filters) {
            t.setState({
                filters
            });
            t.handleSearch(filters);
        };
        const a = module26(safeParseJSON(localStorage.getItem("hide-columns"), {}), L, []);
        t.store = new module854;
        t.state = {
            filters: {},
            hideColumns: a
        };
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.initData();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const t = getHostClusterName();
                this.websocket.watch("/kapis/infra.edgewize.io/v1alpha1/edgeclusters/host/apis/infra.edgewize.io/v1alpha1/watch/clusters");
                this.fetchData = module856(this.fetchData, 500);
                this.disposer = module14.reaction(function() {
                    return _this.websocket.message;
                }, function(r) {
                    if (r.object.kind === "Cluster") {
                        const n = module105.clusters(r.object);
                        if (r.type === "MODIFIED") {
                            _this.store.list.updateItem(n);
                        }
                        if (!(r.type !== "ADDED" || n.name === t || module14.toJS(_this.store.list.data).find((e)=>e.name === n.name))) {
                            _this.store.list.addItem(n);
                        }
                        if (r.type === "DELETED") {
                            _this.store.list.deleteItem(n);
                        }
                    }
                });
            }
        },
        {
            key: "renderListDataNotFound",
            value: function() {
                return <Module875 icon="exclamation" title={t("NO_MATCHING_RESULT_FOUND")} desc={null} action=<p>{t("YOU_CAN_TRY_TO")}<span className={module5277.emptyAction} onClick={this.handleReset} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module5277.emptyAction} onClick={this.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p>/>;
            }
        },
        {
            key: "renderEmptyList",
            value: function() {
                return <Module833 icon="cluster" title={t("NO_CLUSTER_TIP")} desc={t("NO_CLUSTER_TIP_DESC")} actions={null}/>;
            }
        },
        {
            key: "renderList",
            value: function() {
                const _this = this;
                const list = this.store.list;
                const { data, page, total, limit } = list;
                const hideColumns = this.state.hideColumns;
                const c = module446(data, function(e) {
                    return e.expiredDay;
                });
                if (module63(data)) {
                    if (module63(this.state.filters)) {
                        return this.renderEmptyList();
                    }
                    return this.renderListDataNotFound();
                }
                return <ul className={module5277.cards}>{!module63(c) && <div>{c.map((t)=><Module1391 isEdgeWize key={t.name} data={t} onEnter={_this.enterEdgewizeCluster} isOperation={_this.isOperation} itemActions={_this.getItemActions(t)} hideColumns={hideColumns}/>)}<div className="text-right margin-t12"><Module887 page={page} total={total} limit={limit} onChange={this.handlePagination}/></div></div>}</ul>;
            }
        },
        {
            key: "renderSearch",
            value: function() {
                return <div className={module5277.searchPanel}><Module916 placeholder={t("SEARCH_BY_NAME")} columns={this.filterColumns} onChange={this.handleFilterChange} filters={this.state.filters}/><module186.Button type="flat" icon="refresh" onClick={this.handleRefresh} data-test="cluster-refresh"/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const isLoading = this.store.list.isLoading;
                return <div className={module5277.wrapper}><Module793 className={module5277.banner} icon="edge-cluster" title={t("NODE_GROUP_PL")} description={t("NODE_GROUP_DESC")} tabs={this.tabs} tabsActions={this.renderSearch()}/>{isLoading ? <module186.Loading className={module5277.loading}/> : this.renderList()}</div>;
            }
        },
        {
            key: "authKey",
            get: function() {
                return "clusters";
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: "clusters",
                    options: []
                };
            }
        },
        {
            key: "filterColumns",
            get: function() {
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    }
                ];
            }
        },
        {
            key: "clusterColumns",
            get: function() {
                return [
                    {
                        title: t("CLUSTER_NAME"),
                        dataIndex: "name"
                    },
                    {
                        title: t("NODE_COUNT"),
                        dataIndex: "nodeCount",
                        isHideable: true
                    },
                    {
                        title: t("KUBERNETES_VERSION"),
                        dataIndex: "version",
                        isHideable: true
                    },
                    {
                        title: t("HOSTED_IN"),
                        dataIndex: "hostCluster",
                        isHideable: true
                    },
                    {
                        title: t("CREATION_TIME"),
                        dataIndex: "createTime",
                        isHideable: true
                    }
                ];
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: this.authKey
                });
            }
        },
        {
            key: "isOperation",
            get: function() {
                return this.enabledActions.includes("create");
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "hostedInOptions",
            get: function() {
                if (globals.app.isMultiCluster) {
                    const e = [];
                    if (!module63(module14.toJS(this.hostStore.list.data))) {
                        e.push({
                            label: t("HOST_CLUSTER"),
                            options: module14.toJS(this.hostStore.list.data).map(({ name })=>({
                                    label: name,
                                    value: name
                                }))
                        });
                    }
                    if (!module63(module14.toJS(this.memberStore.list.data))) {
                        e.push({
                            label: t("MEMBER_CLUSTER"),
                            options: module14.toJS(this.memberStore.list.data).map(({ name })=>({
                                    label: name,
                                    value: name
                                }))
                        });
                    }
                    return e;
                }
            }
        }
    ]);
    return n;
})(Component)) || u) || u) || u;
export default U;
