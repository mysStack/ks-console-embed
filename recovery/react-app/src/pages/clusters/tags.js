import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import { trigger } from "utils/action";
import Module793 from "unpacked/module-793.js";
import module946 from "unpacked/module-946.js";
import module438 from "stores/cluster";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module833 from "unpacked/module-833.js";
import Module797 from "components/Tables/List";
import module3 from "unpacked/module-3.js";
import { getLocalTime } from "utils/index";
import module794, { ListPage } from "components/HOCs/withList";
import module937 from "unpacked/module-937.js";
import module3823 from "unpacked/module-3823.js";
let p;
const P = ()=>module26(window, "globals.user.globalrole", "") === "platform-admin";
const I = module937([
    "tags-duotone"
])(p = module794({
    store: new module946("labels"),
    module: "nodes",
    authKey: "cluster_tags",
    name: "CLUSTER_TAGs"
})(p = inject("rootStore")(p = observer(p = trigger(p = ((Component_1)=>{
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
        t.initData = function() {
            t.fetchData();
        };
        t.fetchData = function(e = {}) {
            t.store.fetchList({
                ...e,
                limit: 10
            });
        };
        t.handleTabChange = function() {
            t.routing.push("/clusters");
        };
        t.showAddTags = function() {
            t.trigger("cluster.tag.add", {
                module: "clusters",
                success: t.routing.query,
                store: t.store
            });
        };
        t.store = t.props.store;
        t.clusterStore = new module438;
        return t;
    }
    module37(n, [
        {
            key: "getColumns",
            value: function() {
                const getSortOrder = this.props.getSortOrder;
                return [
                    {
                        title: t("CLUSTER_TAG"),
                        dataIndex: "id",
                        isHideable: true,
                        render: function(e, t) {
                            return <div className={module3(module3823.clusterTagItem)}><div className={module3823.label}>{t.label}</div><div className={module3823.value}>{t.value}</div></div>;
                        }
                    },
                    {
                        title: t("CLUSTER"),
                        dataIndex: "clusters",
                        isHideable: true,
                        render: function(e) {
                            return e.length;
                        }
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        sorter: true,
                        sortOrder: getSortOrder("createTime"),
                        isHideable: true,
                        width: 200,
                        render: function(e) {
                            if (e) {
                                return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                            }
                            return "-";
                        }
                    }
                ];
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.initData();
            }
        },
        {
            key: "renderList",
            value: function() {
                const list = this.store.list;
                const { filters, isLoading, data, page } = list;
                const tableProps = this.props.tableProps;
                if (!module63(data) || isLoading || !module63(filters) || page !== 1 && page) {
                    return <Module797 {...tableProps} data={data} loading={isLoading} enabledActions={P() ? [
                        "edit",
                        "bind",
                        "hasBundled",
                        "delete",
                        "create"
                    ] : module26(window, "globals.user.globalRules.clusters", []).includes("manage") ? [
                        "view",
                        "bind",
                        "hasBundled"
                    ] : [
                        "view"
                    ]} itemActions={this.itemActions} rowKey="name" tableActions={this.tableActions} columns={this.getColumns()} onCreate={this.showAddTags} searchType="name"/>;
                }
                return <Module833 icon="tags-duotone" title={t("NO_CLUSTER_TAGS")} desc={t("NO_CLUSTER_TAGS_DESC")} actions={P() ? <module186.Button type="control" onClick={this.showAddTags}>{t("CREATE")}</module186.Button> : null}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3823.wrapper}><ListPage {...this.props}><Module793 className={module3823.banner} icon="cluster" title={t("CLUSTER_MANAGEMENT")} description={t("CLUSTER_DESC")} tabs={this.tabs}/>{this.renderList()}</ListPage></div>;
            }
        },
        {
            key: "authKey",
            get: function() {
                return "clusters";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                return {
                    ...this.props.tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                _this.trigger("cluster.tag.delete", {
                                    type: _this.name,
                                    detail: _this.store.list.data.filter((t)=>_this.store.list.selectedRowKeys.includes(t.name)),
                                    success: _this.routing.query
                                });
                            }
                        }
                    ]
                };
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: "tags",
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "clusters",
                            label: t("CLUSTER_PL")
                        },
                        {
                            value: "tags",
                            label: t("CLUSTER_TAGS")
                        }
                    ]
                };
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(t) {
                            return _this.trigger("cluster.tag.edit", {
                                name: t.name,
                                detail: [
                                    {
                                        key: t.label,
                                        value: t.value
                                    }
                                ],
                                store: _this.store,
                                success: _this.routing.query
                            });
                        }
                    },
                    {
                        key: "bind",
                        icon: "link",
                        action: "bind",
                        text: t("ADD_TO_CLUSTERS"),
                        onClick: function(t) {
                            _this.trigger("cluster.tag.bind", {
                                detail: t,
                                getList: _this.clusterStore.fetchAllCluster,
                                success: _this.routing.query
                            });
                        }
                    },
                    {
                        key: "hasBundled",
                        icon: "eye",
                        text: t("REMOVE_FROM_CLUSTERS"),
                        action: "hasBundled",
                        disabled: function(e) {
                            return !e?.clusters?.length;
                        },
                        onClick: function(t) {
                            _this.trigger("cluster.tag.hasBundled", {
                                detail: t,
                                getList: _this.clusterStore.fetchAllCluster,
                                success: _this.routing.query
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(t) {
                            return _this.trigger("cluster.tag.delete", {
                                type: _this.name,
                                resource: t.name,
                                detail: t,
                                success: _this.routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || p) || p) || p) || p) || p;
export default I;
