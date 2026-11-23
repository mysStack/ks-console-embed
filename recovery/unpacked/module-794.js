import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-245.js";
import "./module-42.js";
import "./module-448.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module801 from "./module-801.js";
import module63 from "./module-63.js";
import module244 from "./module-244.js";
import module837 from "./module-837.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import { trigger } from "./module-792.js";
import module105 from "./module-105.js";
export default R;
export const withProjectList = function(e) {
    return R({
        injectStores: [
            "rootStore",
            "projectStore"
        ],
        ...e
    });
};
export const withClusterList = function(e) {
    return R({
        injectStores: [
            "rootStore",
            "clusterStore"
        ],
        ...e
    });
};
export const withDevOpsList = function(e) {
    return R({
        injectStores: [
            "rootStore",
            "devopsStore"
        ],
        ...e
    });
};
function T(e) {
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
}
function R(e) {
    return function(a) {
        const R = observer(a);
        const n = ((Component_1)=>{
            module55(l, Component_1);
            var n = T(l);
            function l(t) {
                let a;
                module36(this, l);
                a = n.call(this, t);
                a.getData = async function e() {
                    let t;
                    let r;
                    let n;
                    let l;
                    let u;
                    const i = arguments;
                    t = i.length > 0 && i[0] !== undefined ? i[0] : {};
                    ({ silent: r, ...n } = t);
                    a.query = n;
                    l = {};
                    if (a.props.clusterStore) {
                        l.namespace = a.props.clusterStore.project;
                    }
                    if (r) {
                        a.list.silent = true;
                    }
                    u = {
                        ...l,
                        ...a.props.match.params,
                        ...n
                    };
                    if (a.searchByApp) {
                        u.searchByApp = a.searchByApp;
                    }
                    await a.store.fetchList(u);
                    a.list.silent = false;
                };
                a.getSortOrder = function(e) {
                    return a.list.order === e && (a.list.reverse ? "descend" : "ascend");
                };
                a.getFilteredValue = function(e) {
                    return a.list.filters[e];
                };
                a.store = e.store || t.store || {};
                a.list = a.store.list || {};
                a.module = e.module || "";
                a.authKey = e.authKey || e.module;
                a.name = e.name || "";
                a.title = `${e.name}_PL`;
                a.rowKey = e.rowKey || "name";
                a.query = {};
                a.skipAuth = e.skipAuth;
                return a;
            }
            module37(l, [
                {
                    key: "getTableProps",
                    value: function() {
                        const { data, filters = {}, keyword, selectedRowKeys, isLoading, total, page, limit, silent } = this.list;
                        const pagination = {
                            total,
                            page,
                            limit
                        };
                        const isEmptyList = isLoading === false && total === 0 && Object.keys(filters).length <= 0 && module63(keyword);
                        return {
                            data,
                            filters,
                            keyword,
                            pagination,
                            isLoading,
                            selectedRowKeys: module14.toJS(selectedRowKeys),
                            silentLoading: silent,
                            isEmptyList,
                            rowKey: this.rowKey,
                            module: this.module,
                            name: this.name,
                            enabledActions: this.enabledActions,
                            itemActions: this.defaultItemActions,
                            tableActions: this.defaultTableActions,
                            tableId: this.props.match.path
                        };
                    }
                },
                {
                    key: "getBannerProps",
                    value: function() {
                        return {
                            className: "margin-b12",
                            title: t(this.title),
                            description: t(`${this.name.replace(/\s+/g, "_").toUpperCase()}_DESC`),
                            module: this.module
                        };
                    }
                },
                {
                    key: "render",
                    value: function() {
                        return <R name={this.name} module={this.module} store={this.store} prefix={this.prefix} routing={this.routing} query={this.query} bannerProps={this.getBannerProps()} tableProps={this.getTableProps()} getSortOrder={this.getSortOrder} getFilteredValue={this.getFilteredValue} enabledActions={this.enabledActions} trigger={this.trigger.bind(this)} getData={this.getData} {...this.props}/>;
                    }
                },
                {
                    key: "routing",
                    get: function() {
                        return this.props.rootStore.routing;
                    }
                },
                {
                    key: "prefix",
                    get: function() {
                        return this.props.match.url;
                    }
                },
                {
                    key: "defaultItemActions",
                    get: function() {
                        const _this = this;
                        return [
                            {
                                key: "edit",
                                icon: "pen",
                                text: t("EDIT_INFORMATION"),
                                action: "edit",
                                onClick: function(detail) {
                                    return _this.trigger("resource.baseinfo.edit", {
                                        detail,
                                        success: _this.routing.query
                                    });
                                }
                            },
                            {
                                key: "delete",
                                icon: "trash",
                                text: t("DELETE"),
                                action: "delete",
                                onClick: function(detail) {
                                    return _this.trigger("resource.delete", {
                                        type: _this.name,
                                        resource: detail.name,
                                        detail,
                                        success: _this.routing.query
                                    });
                                }
                            }
                        ];
                    }
                },
                {
                    key: "enabledActions",
                    get: function() {
                        const url = this.props.match.url;
                        return globals.app.getActions({
                            module: this.authKey,
                            skipAuth: this.skipAuth,
                            ...this.props.match.params,
                            project: this.props.match.params.namespace,
                            fedproject: url.indexOf("federatedprojects") > -1,
                            devops: this.props.match.params.devops,
                            nodegroup: this.props.match.params.group
                        });
                    }
                },
                {
                    key: "defaultTableActions",
                    get: function() {
                        const _this = this;
                        return {
                            onFetch: this.routing.query,
                            onSelectRowKeys: this.list.setSelectRowKeys,
                            selectActions: [
                                {
                                    key: "delete",
                                    type: "danger",
                                    text: t("DELETE"),
                                    action: "delete",
                                    onClick: function() {
                                        return _this.trigger("resource.batch.delete", {
                                            type: _this.name,
                                            rowKey: _this.rowKey,
                                            success: _this.routing.query,
                                            k8sVersion: _this.props.k8sVersion
                                        });
                                    }
                                }
                            ]
                        };
                    }
                },
                {
                    key: "searchByApp",
                    get: function() {
                        let t;
                        return (t = e.searchByApp) !== null && t !== undefined && t;
                    }
                }
            ]);
            return l;
        })(Component);
        const i = e.injectStores || [
            "rootStore"
        ];
        return inject.apply(undefined, module61(i))(observer(trigger(n)));
    };
}
export const ListPage = ((Component_1)=>{
    module55(a, Component_1);
    var t = T(a);
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                if (!this.props.noWatch) {
                    this.initWebsocket();
                }
                this.unsubscribe = this.routing.history.subscribe(function(t) {
                    if (t.pathname === _this.props.match.url) {
                        const a = module244.parse(t.search.slice(1));
                        _this.query = a || {};
                        _this.props.getData(a);
                    }
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(e.match.params, this.props.match.params)) {
                    this.props.getData();
                    if (!this.props.noWatch) {
                        this.initWebsocket();
                    }
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const isFederated = this.props.isFederated;
                if ("getWatchListUrl" in this.store) {
                    const a = this.store.getWatchListUrl(this.props.match.params);
                    this.websocket.watch(a);
                    const r = module801(function(t) {
                        if (!_this.store.list.isLoading) {
                            const a = module244.parse(location.search.slice(1));
                            return _this.props.getData({
                                ...a,
                                ...t,
                                silent: true
                            });
                        }
                    }, 1000);
                    let n = MODULE_KIND_MAP[this.props.module];
                    if (isFederated) {
                        n = `Federated${n}`;
                    }
                    const l = isFederated ? module105.federated(this.store.mapper) : this.store.mapper;
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, this.props.onMessage || function(t) {
                        if (t.object.kind === n) {
                            if (t.type === "MODIFIED") {
                                const a = {
                                    ..._this.props.match.params,
                                    ...l(module14.toJS(t.object))
                                };
                                _this.store.list.updateItem(a);
                            } else {
                                if (!(t.type !== "DELETED" && t.type !== "ADDED")) {
                                    r();
                                }
                            }
                        }
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                return this.props.children;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        },
        {
            key: "websocket",
            get: function() {
                return this.props.rootStore.websocket;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return a;
})(Component);
