import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import module446 from "unpacked/module-446.js";
import module856 from "unpacked/module-856.js";
import module186 from "unpacked/module-186.js";
import { getHostClusterName, safeParseJSON } from "utils/index";
import { trigger } from "utils/action";
import module105 from "utils/object.mapper";
import module438 from "stores/cluster";
import module955 from "unpacked/module-955.js";
import module325 from "stores/websocket";
import Module1391 from "pages/clusters/components/Cards/Cluster";
import Module793 from "unpacked/module-793.js";
import Module833 from "unpacked/module-833.js";
import Module875 from "components/Tables/Base/Empty";
import Module887 from "components/Tables/Base/Pagination";
import Module916 from "components/Tables/Base/FilterInput";
import Module1046 from "unpacked/module-1046.js";
import modal from "unpacked/module-5195.js";
import module5197 from "unpacked/module-5197.js";
let i;
const Y = "edge_cluster_overview_hide_columns";
const F = inject("rootStore")(i = observer(i = trigger(i = ((Component_1)=>{
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
    function n(e) {
        let r;
        module36(this, n);
        r = a.call(this, e);
        r.initData = function(e = {}) {
            r.fetchHostData(e);
            r.fetchMemberData(e);
            r.fetchData(e);
        };
        r.getClusterParamsLabel = function(e, t) {
            const a = t ? "cluster-role.kubesphere.io/host=" : "!cluster-role.kubesphere.io/host";
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
                a,
                "!cluster-role.kubesphere.io/edge"
            ]).filter(Boolean).join(",");
        };
        r.fetchData = function(e = {}) {
            r.store.fetchList({
                ...module189(e, "group", "tags", "__index"),
                limit: e.limit || 10,
                labelSelector: "cluster-role.kubesphere.io/edge"
            });
        };
        r.fetchMemberData = function(e = {}) {
            r.memberStore.fetchListByUser({
                ...module189(e, "group", "tags", "__index"),
                limit: -1,
                labelSelector: r.getClusterParamsLabel(e, false)
            });
        };
        r.fetchHostData = function(e = {}) {
            r.hostStore.fetchListByUser({
                ...module189(e, "group", "tags", "__index"),
                labelSelector: r.getClusterParamsLabel(e, true),
                limit: -1
            });
        };
        r.handlePagination = function(e) {
            r.fetchData(e);
        };
        r.handleRefresh = function() {
            r.fetchData({
                page: 1
            });
        };
        r.handleSearch = function(e) {
            r.fetchData(e);
            r.fetchHostData(e);
        };
        r.enterEdgewizeCluster = async (t)=>{
            r.routing.push(`/v2/edgewize/clusters/${t}/nodes`);
        };
        r.showAddCluster = function() {
            r.trigger("edge.cluster.add", {
                module: "clusters",
                title: t("CREATE_EDGEWIZE_CLUSTER"),
                hostedInOptions: r.hostedInOptions,
                success: function() {
                    r.routing.push();
                    r.initData();
                }
            });
        };
        r.getItemActions = function(e) {
            return [
                {
                    key: "pen",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    show: true,
                    onClick: function(e) {
                        r.trigger("resource.baseinfo.edit", {
                            detail: e,
                            modal,
                            hostedInOptions: r.hostedInOptions,
                            success: r.initData
                        });
                    }
                },
                {
                    key: "data",
                    icon: "data",
                    text: t("VIEW_KUBECONFIG"),
                    show: false,
                    onClick: function(e) {
                        r.trigger("cluster.viewKubeConfig", {
                            detail: e,
                            isEdgeWize: true,
                            success: r.initData
                        });
                    }
                },
                {
                    key: "trash",
                    icon: "trash",
                    text: t("DELETE_CLUSTER"),
                    show: true,
                    onClick: function(e) {
                        r.trigger("cluster.unbind", {
                            detail: {
                                ...e,
                                tags: (e.tags || []).map((e)=>(r.tagsStore.tags || []).find((t)=>t.name === e.name)).filter(Boolean)
                            },
                            isEdgeWize: true,
                            success: r.initData
                        });
                    }
                }
            ].filter((e)=>e.show);
        };
        r.handleReset = function() {
            r.initData(r.state.filters);
        };
        r.clearFilter = function() {
            r.setState({
                filters: {}
            });
            r.initData();
        };
        r.handleColumnsHide = function(e) {
            r.setState({
                hideColumns: e
            }, function() {
                const e = safeParseJSON(localStorage.getItem("hide-columns"), {});
                e[Y] = r.state.hideColumns;
                localStorage.setItem("hide-columns", JSON.stringify(e));
            });
        };
        r.handleFilterChange = function(filters) {
            r.setState({
                filters
            });
            r.handleSearch(filters);
        };
        const i = module26(safeParseJSON(localStorage.getItem("hide-columns"), {}), Y, []);
        r.store = new module955;
        r.hostStore = new module438;
        r.memberStore = new module438;
        r.state = {
            filters: {},
            hideColumns: i
        };
        return r;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.initData();
                this.websocket = new module325;
                this.initWebsocket();
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
                this.websocket.watch("/apis/cluster.kubesphere.io/v1alpha1/watch/clusters");
                this.fetchData = module856(this.fetchData, 500);
                this.disposer = module14.reaction(function() {
                    return _this.websocket.message;
                }, function(a) {
                    if (a.object.kind === "Cluster") {
                        const n = module105.clusters(a.object);
                        if (a.type === "MODIFIED") {
                            _this.store.list.updateItem(n);
                        }
                        if (!(a.type !== "ADDED" || n.name === t || module14.toJS(_this.store.list.data).find((e)=>e.name === n.name))) {
                            _this.store.list.addItem(n);
                        }
                        if (a.type === "DELETED") {
                            _this.store.list.deleteItem(n);
                        }
                    }
                });
            }
        },
        {
            key: "renderListDataNotFound",
            value: function() {
                return <Module875 icon="exclamation" title={t("NO_MATCHING_RESULT_FOUND")} desc={null} action=<p>{t("YOU_CAN_TRY_TO")}<span className={module5197.emptyAction} onClick={this.handleReset} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module5197.emptyAction} onClick={this.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p>/>;
            }
        },
        {
            key: "renderEmptyList",
            value: function() {
                return <Module833 icon="cluster" title={t("NO_CLUSTER_TIP")} desc={t("NO_CLUSTER_TIP_DESC")} actions={this.isOperation ? <module186.Button type="control" onClick={this.showAddCluster}>{t("ADD_CLUSTER")}</module186.Button> : null}/>;
            }
        },
        {
            key: "renderList",
            value: function() {
                const _this = this;
                const list = this.store.list;
                const { data, page, total, limit } = list;
                const hideColumns = this.state.hideColumns;
                const u = module446(data, function(e) {
                    return e.expiredDay;
                });
                if (module63(data)) {
                    if (module63(this.state.filters)) {
                        return this.renderEmptyList();
                    }
                    return this.renderListDataNotFound();
                }
                return <ul className={module5197.cards}>{!module63(u) && <div>{u.map((t)=><Module1391 isEdgeWize key={t.name} data={t} onEnter={_this.enterEdgewizeCluster} isOperation={_this.isOperation} itemActions={_this.getItemActions(t)} hideColumns={hideColumns}/>)}<div className="text-right margin-t12"><Module887 page={page} total={total} limit={limit} onChange={this.handlePagination}/></div></div>}</ul>;
            }
        },
        {
            key: "renderSearch",
            value: function() {
                const hideColumns = this.state.hideColumns;
                return <div className={module5197.searchPanel}><Module916 placeholder={t("SEARCH_BY_NAME")} columns={this.filterColumns} onChange={this.handleFilterChange} filters={this.state.filters}/><module186.Button type="flat" icon="refresh" onClick={this.handleRefresh} data-test="cluster-refresh"/><Module1046 className={module5197.columnMenu} title={t("CUSTOM_COLUMNS")} columns={this.clusterColumns} value={hideColumns} onChange={this.handleColumnsHide}/>{this.enabledActions.includes("create") && <module186.Button type="control" onClick={this.showAddCluster} data-test="edgewize-cluster-create">{t("CREATE_EDGEWIZE_CLUSTER")}</module186.Button>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const isLoading = this.store.list.isLoading;
                return <div className={module5197.wrapper}><Module793 className={module5197.banner} icon="edge-cluster" title={t("EDGEWIZE_MANAGEMENT")} description={t("EDGEWIZE_MANAGEMENT_DESC")} tabs={this.tabs} tabsActions={this.renderSearch()}/>{isLoading ? <module186.Loading className={module5197.loading}/> : this.renderList()}</div>;
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
})(Component)) || i) || i) || i;
export default F;
