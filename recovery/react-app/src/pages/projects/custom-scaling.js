"use strict";
((e)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("unpacked/module-12.js");
    require("unpacked/module-135.js");
    require("unpacked/module-5.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-73.js");
    require("unpacked/module-18.js");
    require("unpacked/module-16.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-23.js");
    require("unpacked/module-24.js");
    require("unpacked/module-17.js");
    require("unpacked/module-62.js");
    require("unpacked/module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("unpacked/module-12.js");
    require("unpacked/module-135.js");
    require("unpacked/module-45.js");
    require("unpacked/module-5.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-73.js");
    require("unpacked/module-18.js");
    require("unpacked/module-28.js");
    require("unpacked/module-42.js");
    require("unpacked/module-16.js");
    require("unpacked/module-34.js");
    require("unpacked/module-15.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-23.js");
    require("unpacked/module-57.js");
    require("unpacked/module-24.js");
    require("unpacked/module-17.js");
    require("unpacked/module-62.js");
    require("unpacked/module-7.js");
    let o;
    const c = module20(require("unpacked/module-315.js"));
    const s = module20(require("unpacked/module-31.js").default);
    const l = module20(require("unpacked/module-36.js").default);
    const i = module20(require("unpacked/module-37.js").default);
    const u = module20(require("unpacked/module-55.js").default);
    const d = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
    const f = module20(require("unpacked/module-51.js"));
    const p = module20(require("components/Base/Avatar"));
    const m = module20(require("components/Base/Text"));
    const h = module20(require("unpacked/module-793.js"));
    const module794 = require("components/HOCs/withList");
    const g = module20(require("components/Tables/List"));
    const _ = module20(require("unpacked/module-451.js").default);
    const y = module20(require("unpacked/module-553.js"));
    const E = module20(require("unpacked/module-1047.js"));
    const module52 = require("utils/index");
    const module72 = require("utils/constants");
    const O = module20(require("unpacked/module-1979.js"));
    function R(e, t) {
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
    function A(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                R(Object(a), true).forEach((t)=>{
                    s.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                R(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    const T = module794.withProjectList({
        store: new E.default,
        module: "customScalings",
        name: "CUSTOM_SCALING"
    })(o = ((a)=>{
        u.default(n, a);
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
                const r = f.default(e);
                if (t) {
                    const n = f.default(this).constructor;
                    a = Reflect.construct(r, arguments, n);
                } else {
                    a = r.apply(this, arguments);
                }
                return d.default(this, a);
            };
        })(n);
        function n(...c) {
            let a;
            l.default(this, n);
            a = r.call(this, ...c);
            a.getColumns = function() {
                const a_props = a.props;
                const { getSortOrder, module } = a_props;
                return [
                    {
                        title: t("NAME"),
                        dataIndex: "name",
                        sorter: true,
                        sortOrder: getSortOrder("name"),
                        render: function(e, t) {
                            return y.default.createElement(p.default, {
                                icon: module72.ICON_TYPES[module],
                                iconSize: 40,
                                title: module52.getDisplayName(t),
                                desc: t.description || "-",
                                to: `${a.props.match.url}/${e}`,
                                isMultiCluster: t.isFedManaged
                            });
                        }
                    },
                    {
                        title: t("STATUS"),
                        dataIndex: "status",
                        width: 100,
                        render: function(status, r) {
                            return y.default.createElement(O.default, {
                                status,
                                toEvent: function() {
                                    e.navigateTo(`${a.props.match.url}/${r.name}/events`);
                                }
                            });
                        }
                    },
                    {
                        title: t("SCALER"),
                        dataIndex: "triggers",
                        isHideable: true,
                        width: "15%",
                        render: function(e = []) {
                            const t = e.map((e)=>_.default(e.type)).join(",");
                            return t;
                        }
                    },
                    {
                        title: t("SCALING_OBJECT"),
                        dataIndex: "scaleTargetRef",
                        isHideable: true,
                        width: "15%",
                        render: function(e) {
                            return y.default.createElement(m.default, {
                                title: e?.name ?? "-",
                                description: t(e?.kind ?? "-")
                            });
                        }
                    },
                    {
                        title: t("MINIMUM_REPLICAS"),
                        dataIndex: "minReplicaCount",
                        isHideable: true,
                        width: "10%"
                    },
                    {
                        title: t("MAXIMUM_REPLICAS"),
                        dataIndex: "maxReplicaCount",
                        isHideable: true,
                        width: "10%"
                    },
                    {
                        title: t("CREATION_TIME_TCAP"),
                        dataIndex: "createTime",
                        sorter: true,
                        sortOrder: getSortOrder("createTime"),
                        isHideable: true,
                        width: 150,
                        render: function(e) {
                            return module52.getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    }
                ];
            };
            a.showCreate = function() {
                const a_props = a.props;
                const { match, module, getData } = a_props;
                return a.props.trigger("customScaling.create", A(A({
                    module
                }, match.params), {}, {
                    success: getData,
                    title: t("CREATE_CUSTOM_SCALING")
                }));
            };
            return a;
        }
        i.default(n, [
            {
                key: "render",
                value: function() {
                    const props = this.props;
                    const { bannerProps, tableProps } = props;
                    return y.default.createElement(module794.ListPage, c.default({}, this.props, {
                        noWatch: true
                    }), y.default.createElement(h.default, bannerProps), y.default.createElement(g.default, c.default({}, tableProps, {
                        className: "table-2-3",
                        itemActions: this.itemActions,
                        columns: this.getColumns(),
                        onCreate: this.showCreate,
                        searchType: "name"
                    })));
                }
            },
            {
                key: "itemActions",
                get: function() {
                    const props = this.props;
                    const { getData, trigger, name, match } = props;
                    return [
                        {
                            key: "edit",
                            icon: "pen",
                            text: t("EDIT_INFORMATION"),
                            action: "edit",
                            onClick: function(e) {
                                return trigger("resource.baseinfo.edit", {
                                    detail: e,
                                    success: getData
                                });
                            }
                        },
                        {
                            key: "editYaml",
                            icon: "pen",
                            text: t("EDIT_YAML"),
                            action: "edit",
                            onClick: function(e) {
                                return trigger("resource.yaml.edit", {
                                    detail: e,
                                    success: getData
                                });
                            }
                        },
                        {
                            key: "editScale",
                            icon: "pen",
                            text: t("EDIT_SCALING_SETTINGS"),
                            action: "edit",
                            onClick: function(e) {
                                return trigger("customScaling.edit.setting", A({
                                    detail: e,
                                    success: getData
                                }, match.params));
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
                                    detail: e,
                                    success: getData
                                });
                            }
                        }
                    ];
                }
            }
        ]);
        return n;
    })(y.default.Component)) || o;
    exports.default = T;
})(require("unpacked/module-69.js").default);
