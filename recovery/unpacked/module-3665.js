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
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module446 from "./module-446.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module793 from "./module-793.js";
import Module833 from "./module-833.js";
import Module1391 from "./module-1391.js";
import module438 from "./module-438.js";
import { trigger } from "./module-792.js";
import modal from "./module-1788.js";
import Module916 from "./module-916.js";
import module946 from "./module-946.js";
import module3 from "./module-3.js";
import Module875 from "./module-875.js";
import Module887 from "./module-887.js";
import Module1046 from "./module-1046.js";
import { getHostClusterName, safeParseJSON } from "./module-52.js";
import { ReactComponent } from "./module-3676.js";
import module3677 from "./module-3677.js";
let h;
const Y = "cluster_overview_hide_columns";
const V = inject("rootStore")(h = observer(h = trigger(h = ((Component_1)=>{
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
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.fetchTagGroupList = function() {
            a.tagsStore.fetchGroupList();
        };
        a.handleTabChange = function(e) {
            a.routing.push(`/clusters/${e}`);
        };
        a.initData = function(e = {}) {
            a.fetchHostData(e);
            a.fetchData(e);
        };
        a.getParamsLabel = function(e, t) {
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
                r,
                "!cluster-role.kubesphere.io/edge"
            ]).filter(Boolean).join(",");
        };
        a.fetchData = function(e = {}) {
            a.store.fetchListByUser({
                ...module189(e, "group", "tags", "__index"),
                limit: e.limit || 10,
                page: e.page || 1,
                labelSelector: a.getParamsLabel(e, false)
            });
        };
        a.fetchHostData = function(e = {}) {
            a.hostStore.fetchListByUser({
                ...module189(e, "group", "tags", "__index"),
                labelSelector: a.getParamsLabel(e, true),
                limit: -1
            });
        };
        a.showAddCluster = function() {
            a.trigger("cluster.add", {
                module: "clusters",
                success: a.routing.push,
                tagsStore: a.tagsStore,
                onAddTags: a.showAddTags
            });
        };
        a.handlePagination = function(e) {
            a.fetchData(e);
        };
        a.handleRefresh = function() {
            a.fetchData({
                page: 1
            });
        };
        a.handleSearch = function(e) {
            a.fetchData(e);
            a.fetchHostData(e);
        };
        a.enterCluster = async (t)=>{
            a.routing.push(`/clusters/${t}/overview`);
        };
        a.handleBindTags = function(e, t, r = true) {
            const data = a.store.list.data;
            const checked = a.state.checked;
            const data_1 = a.hostStore.list.data;
            a.trigger("cluster.tag.clusterItemTags", {
                detail: e,
                defaultValue: t,
                value: t,
                success: function() {
                    a.initData();
                    a.setState({
                        checked: []
                    });
                },
                tagsGroup: a.tagsStore.tagsGroup,
                store: a.tagsStore,
                onAddTags: a.showAddTags,
                tags: r ? data.concat(data_1).filter((e)=>checked.includes(e.name)) : [
                    e
                ]
            });
        };
        a.showAddTags = function() {
            a.trigger("cluster.tag.add", {
                success: a.tagsStore.fetchGroupList,
                store: a.tagsStore
            });
        };
        a.getItemActions = function(e) {
            return [
                {
                    key: "pen",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    show: true,
                    onClick: function(e) {
                        a.trigger("resource.baseinfo.edit", {
                            detail: e,
                            modal,
                            success: a.initData
                        });
                    }
                },
                {
                    key: "tag",
                    icon: "add",
                    text: t("ADD_TAGS"),
                    show: module26(window, "globals.user.globalrole", "") === "platform-admin" || module26(window, "globals.user.globalRules.clusters", []).includes("manage"),
                    onClick: function(e) {
                        a.handleBindTags(e, e.tags.map((e)=>(a.tagsStore.tags || []).find((t)=>t.name === e.name)).filter(Boolean), false);
                    }
                },
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_CONFIG"),
                    show: !e.isHost,
                    onClick: function(e) {
                        a.trigger("cluster.editConfig", {
                            detail: e,
                            success: a.initData
                        });
                    }
                },
                {
                    key: "data",
                    icon: "data",
                    text: t("UPDATE_KUBECONFIG"),
                    show: !e.isHost && e.connectionType !== "proxy",
                    onClick: function(e) {
                        a.trigger("cluster.updateKubeConfig", {
                            detail: e,
                            success: a.initData
                        });
                    }
                },
                {
                    key: "trash",
                    icon: "trash",
                    text: t("REMOVE_CLUSTER"),
                    show: !e.isHost,
                    onClick: function(e) {
                        a.trigger("cluster.unbind", {
                            detail: {
                                ...e,
                                tags: (e.tags ?? []).map((e)=>(a.tagsStore.tags || []).find((t)=>t.name === e.name)).filter(Boolean)
                            },
                            success: a.initData
                        });
                    }
                }
            ].filter((e)=>e.show);
        };
        a.handleChecked = function(e, t) {
            a.setState(function({ checked }) {
                return {
                    checked: t ? [].concat(module61(checked), [
                        e
                    ]) : checked.filter((t)=>t !== e)
                };
            });
        };
        a.handleReset = function() {
            a.initData(a.state.filters);
        };
        a.clearFilter = function() {
            a.setState({
                filters: {}
            });
            a.initData();
        };
        a.handleSelectAll = function(e) {
            if (e) {
                a.setState({
                    checked: [].concat(module61(a.hostStore.list.data.filter((e)=>e.tags.length < 5).map((e)=>e.name)), module61(a.store.list.data.filter((e)=>e.tags.length < 5).map((e)=>e.name)))
                });
            } else {
                a.setState({
                    checked: []
                });
            }
        };
        a.renderAction = function() {
            let e;
            const a_state = a.state;
            const r_checked = a_state.checked;
            if (a_state.showCheckbox) {
                e = r_checked.length === 0 ? {
                    indeterminate: false,
                    checked: false
                } : r_checked.length < a.hostStore.list.data.filter((e)=>e.tags.length < 5).length + a.store.list.data.filter((e)=>e.tags.length < 5).length ? {
                    indeterminate: true,
                    checked: false
                } : {
                    indeterminate: false,
                    checked: true
                };
                return <div className={module3677.action}><module186.Checkbox {...e} onChange={a.handleSelectAll}>{t("SELECT_ALL")}</module186.Checkbox><module186.Button disabled={!r_checked.length} onClick={function() {
                    return a.handleBindTags(r_checked.map((name)=>({
                            name
                        })), []);
                }}>{t("ADD_TAGS")}</module186.Button><div><module186.Button onClick={function() {
                    return a.setState({
                        showCheckbox: false
                    });
                }} type="flat">{t("DESELECT")}</module186.Button></div></div>;
            }
            return null;
        };
        a.handleColumnsHide = function(e) {
            a.setState({
                hideColumns: e
            }, function() {
                const e = safeParseJSON(localStorage.getItem("hide-columns"), {});
                e[Y] = a.state.hideColumns;
                localStorage.setItem("hide-columns", JSON.stringify(e));
            });
        };
        a.handleFilterChange = function(filters) {
            a.setState({
                filters
            });
            a.handleSearch(filters);
        };
        a.store = new module438;
        a.hostStore = new module438;
        a.tagsStore = new module946;
        const c = module26(safeParseJSON(localStorage.getItem("hide-columns"), {}), Y, []);
        a.state = {
            filters: {},
            checked: [],
            showCheckbox: false,
            hideColumns: c
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.initData();
                this.fetchTagGroupList();
            }
        },
        {
            key: "renderList",
            value: function() {
                let hostKsVersion;
                const _this = this;
                const list = this.store.list;
                const { data, page, total, limit, isLoading } = list;
                const state = this.state;
                const { checked, showCheckbox, hideColumns } = state;
                const list_1 = this.hostStore.list;
                const { data: data_1, isLoading: isLoading_1 } = list_1;
                if (module63(data) && !isLoading && !isLoading_1 && module63(data_1) && module63(this.state.filters)) {
                    return <Module833 icon="cluster" title={t("NO_CLUSTER_TIP")} desc={t("NO_CLUSTER_TIP_DESC")} actions={this.isOperation ? <module186.Button type="control" onClick={this.showAddCluster}>{t("ADD_CLUSTER")}</module186.Button> : null}/>;
                }
                if (isLoading || isLoading_1) {
                    return <module186.Loading className={module3677.loading}/>;
                }
                if (module63(data) && !isLoading && !isLoading_1 && module63(data_1) && !module63(this.state.filters)) {
                    return <Module875 icon="exclamation" title={t("NO_MATCHING_RESULT_FOUND")} desc={null} action=<p>{t("YOU_CAN_TRY_TO")}<span className={module3677.emptyAction} onClick={this.handleReset} data-test="table-empty-refresh">{t("REFRESH_DATA")}</span>{t("OR")}<span className={module3677.emptyAction} onClick={this.clearFilter} data-test="table-empty-clear-filter">{t("CLEAR_SEARCH_CONDITIONS")}</span></p>/>;
                }
                if (!isLoading && module63(data) && !isLoading_1 && module63(data_1)) {
                    return <><div className="h6 margin-b12">{t("CLUSTER_PL")} <span className={module3677.total}>{total}</span></div><div className={module3677.noData}><img src="/assets/empty-card.svg" alt=""/><p>{t("NO_RESOURCE_FOUND")}</p></div></>;
                }
                if (globals.ksConfig.multicluster) {
                    const v = getHostClusterName();
                    const O = data_1.find((e)=>module26(e, "name", "") === v);
                    hostKsVersion = module26(O, "configz.ksVersion", "");
                }
                const S = module446(data, function(e) {
                    return e.expiredDay;
                });
                return <ul className={module3677.cards}>{!module63(data_1) && <div className="margin-b12"><div className={module3677.title}><div className="h6">{data_1.length === 1 ? t("HOST_CLUSTER_TCAP") : t("HOST_CLUSTER_PL_TCAP")}</div>{!showCheckbox && <div className={module3677.batchManage} onClick={function() {
                    return _this.setState(function() {
                        return {
                            showCheckbox: true
                        };
                    });
                }}><module186.Icon name="cogwheel"/><span className="margin-l4">{t("BATCH_MANAGE")}</span></div>}</div>{data_1.map((e)=><Module1391 showCheckbox={showCheckbox} checked={checked.includes(e.name)} onChangeChecked={_this.handleChecked} key={e.name} data={e} onEnter={_this.enterCluster} isOperation={_this.isOperation} itemActions={_this.getItemActions(e)} tagList={_this.tagsStore.tags} hideColumns={hideColumns} isMainCluster/>)}</div>}{!module63(S) && <div><div className="h6">{t("MEMBER_CLUSTER_TCAP_PL")} <span className={module3677.total}>{total}</span></div>{S.map((t)=><Module1391 key={t.name} showCheckbox={showCheckbox} checked={checked.includes(t.name)} onChangeChecked={_this.handleChecked} data={t} onEnter={_this.enterCluster} isOperation={_this.isOperation} itemActions={_this.getItemActions(t)} tagList={_this.tagsStore.tags} hideColumns={hideColumns} hostKsVersion={hostKsVersion} isMainCluster/>)}<div className="text-right margin-t12"><Module887 page={page} total={total} limit={limit} onChange={this.handlePagination}/></div></div>}</ul>;
            }
        },
        {
            key: "renderSearch",
            value: function() {
                const hideColumns = this.state.hideColumns;
                return <div className={module3677.searchPanel}><Module916 placeholder={t("SEARCH_BY_NAME")} columns={this.columns} onChange={this.handleFilterChange} filters={this.state.filters}/><module186.Button type="flat" icon="refresh" onClick={this.handleRefresh} data-test="cluster-refresh"/><Module1046 className={module3677.columnMenu} title={t("CUSTOM_COLUMNS")} columns={this.clusterColumns} value={hideColumns} onChange={this.handleColumnsHide}/>{this.enabledActions.includes("create") && <module186.Button type="control" onClick={this.showAddCluster} data-test="cluster-create">{t("ADD_CLUSTER")}</module186.Button>}</div>;
            }
        },
        {
            key: "renderAlertBanner",
            value: function() {
                return <div className={module3(module3677.alertBannerWrapper)}><div className={module3677.alertContent}><div className={module3677.icon}><ReactComponent width={16} height={16}/></div><div className={module3677.content}>{t("CLUSTER_BANNER_ALERT")}</div></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3677.wrapper}><Module793 className={module3677.banner} icon="cluster" title={t("CLUSTER_MANAGEMENT")} description={t("CLUSTER_DESC")} tabs={this.tabs} tabsActions={this.renderSearch()}/>{this.renderAlertBanner()}{this.renderAction()}{this.renderList()}</div>;
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
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "clusters",
                            label: t("CLUSTER_PL")
                        },
                        globals.user.globalrole === "platform-admin" && {
                            value: "tags",
                            label: t("CLUSTER_TAGS")
                        }
                    ]
                };
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
                return this.enabledActions;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "columns",
            get: function() {
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "alias",
                        title: t("ALIAS")
                    },
                    {
                        dataIndex: "group",
                        title: t("TYPE"),
                        search: true,
                        filters: (this.tagsStore.group ?? []).map((e)=>({
                                text: e,
                                value: e
                            })),
                        renderSearch: function(e) {
                            return <div className="flex"><div className={module3(module3677.clusterGroupTag, module31({}, module3677[e.key], true))}>{t(`ENV_${e.label.toUpperCase()}`)}</div>{e.label}</div>;
                        }
                    },
                    {
                        dataIndex: "tags",
                        title: t("TAG"),
                        filters: (this.tagsStore.tags ?? []).map((e)=>({
                                text: `${e.label}:${e.value}`,
                                value: e.name
                            })),
                        search: true,
                        multi: true,
                        renderSearch: function(e) {
                            return <div>{e.label}</div>;
                        }
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
                        title: t("KUBESPHERE_VERSION"),
                        dataIndex: "ksVersion",
                        isHideable: true
                    },
                    {
                        title: t("PROVIDER"),
                        dataIndex: "provider",
                        isHideable: true
                    },
                    {
                        title: t("TAG_PL"),
                        dataIndex: "tags",
                        isHideable: true
                    },
                    {
                        title: t("CREATION_TIME"),
                        dataIndex: "createTime",
                        isHideable: true
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || h) || h) || h;
export default V;
