"use strict";
((module)=>{
    const module20 = require("./module-20.js").default;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-23.js");
    require("./module-24.js");
    require("./module-17.js");
    require("./module-62.js");
    require("./module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-45.js");
    require("./module-5.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-28.js");
    require("./module-42.js");
    require("./module-34.js");
    require("./module-15.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-23.js");
    require("./module-57.js");
    require("./module-24.js");
    require("./module-17.js");
    require("./module-62.js");
    require("./module-7.js");
    const o = module20(require("./module-315.js"));
    const c = module20(require("./module-41.js"));
    require("./module-41.js");
    let s;
    const l = module20(require("./module-44.js").default);
    const i = module20(require("./module-31.js").default);
    const u = module20(require("./module-36.js").default);
    const d = module20(require("./module-37.js").default);
    const f = module20(require("./module-55.js").default);
    const p = module20(require("./module-56.js").default);
    const m = module20(require("./module-51.js"));
    const h = module20(require("./module-553.js"));
    const v = module20(require("./module-26.js").default);
    const module186 = require("./module-186.js");
    const _ = module20(require("./module-240.js"));
    const y = module20(require("./module-797.js"));
    const E = module20(require("./module-1025.js"));
    const b = module20(require("./module-793.js"));
    const module794 = require("./module-794.js");
    const module52 = require("./module-52.js");
    const R = module20(require("./module-485.js"));
    const A = module20(require("./module-4662.js"));
    function T(e, t) {
        const a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            a.push.apply(a, r);
        }
        return a;
    }
    function k(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                T(Object(a), true).forEach((t)=>{
                    i.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                T(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    const D = module794.withProjectList({
        store: new R.default,
        module: "edgeappsets",
        name: "BATCH_APP_DEPLOY"
    })(s = ((a)=>{
        f.default(n, a);
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
                let a;
                const r = m.default(e);
                if (t) {
                    const n = m.default(this).constructor;
                    a = Reflect.construct(r, arguments, n);
                } else {
                    a = r.apply(this, arguments);
                }
                return p.default(this, a);
            };
        })(n);
        function n(a) {
            let o;
            u.default(this, n);
            o = r.call(this, a);
            o.getData = function(e) {
                const o_props = o.props;
                const t_match = o_props.match;
                o_props.store.fetchList(k(k({}, t_match.params), e));
            };
            o.getColumns = function() {
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        isHideable: true,
                        search: true,
                        width: 412,
                        render: function(iconLetter, t) {
                            return h.default.createElement(E.default, {
                                isApp: true,
                                avatar: v.default(t, "app.icon"),
                                iconLetter,
                                iconSize: 40,
                                title: module52.getDisplayName(t),
                                desc: t.description || "-",
                                to: `${o.props.match.url}/${iconLetter}`,
                                isMultiCluster: t.isFedManaged
                            });
                        }
                    },
                    {
                        title: t("TASK_EXE_STATUS"),
                        dataIndex: "status",
                        isHideable: true,
                        width: 412,
                        render: function(workloadStatus) {
                            return h.default.createElement(A.default, {
                                workloadStatus
                            });
                        }
                    },
                    {
                        title: t("UPDATE_TIME_SCAP"),
                        dataIndex: "updateTime",
                        isHideable: true,
                        width: 200,
                        sorter: true,
                        render: function(e) {
                            return module52.getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    }
                ];
            };
            o.handleDeleteWorkloadsChange = function(delete_workloads) {
                o.setState({
                    delete_workloads
                });
            };
            o.handleDelete = (()=>{
                const e = l.default(c.default.mark(function* e(a) {
                    let r;
                    let n;
                    r = o.props.store;
                    n = v.default(o.state, "delete_workloads", false);
                    yield r.delete(a, n);
                    _.default.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            o.handleBatchDelete = function() {
                const store = o.props.store;
                const selectedRowKeys = store.list.selectedRowKeys;
                const delete_workloads = o.state.delete_workloads;
                return store.batchDelete(selectedRowKeys, delete_workloads);
            };
            o.showCreate = function() {
                const o_props = o.props;
                const { match, trigger, rootStore } = o_props;
                o.props.trigger("batch.deploy.app.create", k(k({
                    module
                }, match.params), {}, {
                    routing: rootStore.routing,
                    trigger
                }));
            };
            o.state = {
                delete_workloads: false
            };
            return o;
        }
        d.default(n, [
            {
                key: "render",
                value: function() {
                    const props = this.props;
                    const { bannerProps, tableProps } = props;
                    return h.default.createElement(module794.ListPage, o.default({}, this.props, {
                        noWatch: true
                    }), h.default.createElement(b.default, o.default({}, bannerProps, {
                        icon: "application",
                        getData: this.getData
                    })), h.default.createElement(y.default, o.default({}, tableProps, {
                        tableActions: this.tableActions,
                        itemActions: this.itemActions,
                        columns: this.getColumns(),
                        onCreate: this.showCreate
                    })));
                }
            },
            {
                key: "namespace",
                get: function() {
                    return this.props.match.params.namespace;
                }
            },
            {
                key: "tableActions",
                get: function() {
                    const _this = this;
                    const props = this.props;
                    const { tableProps, trigger } = props;
                    const selectedRowKeys = props.store.list.selectedRowKeys;
                    return k(k({}, tableProps.tableActions), {}, {
                        onCreate: this.showCreate,
                        selectActions: [
                            {
                                key: "delete",
                                type: "danger",
                                text: t("DELETE"),
                                action: "delete",
                                onClick: function() {
                                    return trigger("app.deploy.batch.delete", {
                                        type: "EDGE_APPLICATION",
                                        selectedRowKeys,
                                        onOk: _this.handleBatchDelete,
                                        success: function() {
                                            _this.getData();
                                            _this.setState({
                                                delete_workloads: undefined
                                            });
                                        },
                                        renderExtra: function() {
                                            return h.default.createElement(module186.Checkbox, {
                                                className: "margin-t12",
                                                onChange: _this.handleDeleteWorkloadsChange
                                            }, t("DEL_ALL_WORKLOAD_IN_EDGE_APP"));
                                        }
                                    });
                                }
                            }
                        ],
                        emptyProps: {
                            icon: "application"
                        }
                    });
                }
            },
            {
                key: "itemActions",
                get: function() {
                    const _this = this;
                    const trigger = this.props.trigger;
                    return [
                        {
                            key: "edit",
                            icon: "pen",
                            text: t("EDIT_INFORMATION"),
                            action: "edit",
                            onClick: function(detail) {
                                return trigger("resource.baseinfo.edit", {
                                    detail,
                                    hideAlias: true,
                                    success: _this.getData
                                });
                            }
                        },
                        {
                            key: "delete",
                            icon: "trash",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function(detail) {
                                return trigger("resource.delete", {
                                    type: "EDGE_APPLICATION",
                                    detail,
                                    onOk: function() {
                                        return _this.handleDelete(detail);
                                    },
                                    success: function() {
                                        _this.getData();
                                        _this.setState({
                                            delete_workloads: undefined
                                        });
                                    },
                                    renderExtra: function() {
                                        return h.default.createElement(module186.Checkbox, {
                                            className: "margin-t12",
                                            onChange: _this.handleDeleteWorkloadsChange
                                        }, t("DEL_ALL_WORKLOAD_IN_EDGE_APP"));
                                    }
                                });
                            }
                        }
                    ];
                }
            }
        ]);
        return n;
    })(h.default.Component)) || s;
    exports.default = D;
})(require("./module-139.js").default(module));
