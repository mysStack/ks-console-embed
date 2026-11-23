import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module1030 from "./module-1030.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module816 from "./module-816.js";
import module438 from "./module-438.js";
import module916 from "./module-916.js";
import module791 from "./module-791.js";
import { ClusterTagGroup } from "./module-925.js";
import module946 from "./module-946.js";
import module875 from "./module-875.js";
import module3619 from "./module-3619.js";
let o;
const A = observer(o = ((e)=>{
    module55(n, e);
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
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...a_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...a_1);
        e.clusterStore = new module438;
        e.tagsStore = new module946;
        e.state = {
            showTip: false,
            hostClusters: [],
            filters: {}
        };
        e.getParams = function(e = {}, t) {
            let e_group = e.group;
            const e_tags = e.tags;
            let n = e_tags === undefined ? [] : e_tags;
            if (e_group) {
                e_group = `cluster.kubesphere.io/group=${e_group}`;
            }
            n = n.map((e)=>`label.cluster.kubesphere.io/${e}`);
            return {
                ...module189(e, "group", "tags", "__index"),
                labelSelector: [
                    e_group
                ].concat(module61(n), [
                    t
                ]).filter(Boolean).join(",")
            };
        };
        e.handleClick = function(t) {
            let a;
            const { value = [], onChange } = e.props;
            const cluster = t.currentTarget.dataset.cluster;
            a = value.some((e)=>e.name === cluster) ? value.filter((e)=>e.name !== cluster) : [].concat(module61(value), [
                {
                    name: cluster
                }
            ]);
            e.setState({
                showTip: a.some((t)=>e.state.hostClusters.includes(t.name))
            });
            onChange(a);
        };
        e.handleCheckboxClick = function(e) {
            return e.stopPropagation();
        };
        e.clearFilter = function() {
            e.setState({
                filters: {}
            });
            e.fetchData();
        };
        e.handleReset = function() {
            const filters = e.state.filters;
            e.fetchData(filters);
        };
        e.sortClusters = function(e) {
            const t = e.filter((e)=>e && e.isHost);
            const a = e.filter((e)=>e && !e.isHost);
            return [].concat(module61(t), module61(a));
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.tagsStore.fetchGroupList();
            }
        },
        {
            key: "fetchData",
            value: async function() {
                let t;
                let a;
                const r = arguments;
                t = r.length > 0 && r[0] !== undefined ? r[0] : {};
                a = "!cluster-role.kubesphere.io/edge";
                if (globals.app.hasPermission({
                    module: "clusters",
                    action: "manage"
                })) {
                    await this.clusterStore.fetchList({
                        limit: -1,
                        ...this.getParams(t, a)
                    });
                } else {
                    await this.clusterStore.fetchGrantedList({
                        limit: -1,
                        ...this.getParams(t, a)
                    });
                }
                this.setState({
                    hostClusters: this.clusterStore.list.data.filter((e)=>e.isHost).map((e)=>e.name)
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const { value = [], noTip = false } = this.props;
                const filters = this.state.filters;
                const i = module14.toJS(this.clusterStore.list);
                const { data, isLoading } = i;
                if (module63(data) && module63(filters) && !isLoading) {
                    return module553.default.createElement(module186.Alert, {
                        type: "warning",
                        message: t("NO_CLUSTER_AVAILABLE_DESC", {
                            type: t("KS_CLUSTER")
                        })
                    });
                }
                const d = module1030(this.sortClusters(data), function(e) {
                    return globals.app.hasClusterModule(e.name, "whizard-monitoring");
                });
                return module553.default.createElement("div", {
                    className: module3619.wrapper
                }, this.state.showTip && !noTip && module553.default.createElement(module186.Alert, {
                    className: "margin-b12",
                    type: "warning",
                    message: t("SELECT_HOST_CLUSTER_WARNING")
                }), module553.default.createElement("div", null, module553.default.createElement("div", {
                    className: "margin-b12"
                }, module553.default.createElement(module916, {
                    placeholder: t("SEARCH_BY_NAME"),
                    columns: this.columns,
                    onChange: function(filters_1) {
                        _this.setState({
                            filters: filters_1
                        });
                        _this.fetchData(filters_1);
                    },
                    filters: this.state.filters
                }))), d.map((cluster)=>module553.default.createElement("div", {
                        key: cluster.name,
                        className: module3(module3619.item, module31({}, module3619.disabled, !globals.app.isMultiCluster)),
                        "data-cluster": cluster.name,
                        onClick: globals.app.isMultiCluster ? _this.handleClick : null
                    }, module553.default.createElement(module186.Checkbox, {
                        checked: value.some((e)=>e.name === cluster.name),
                        disabled: !globals.app.isMultiCluster,
                        onClick: _this.handleCheckboxClick
                    }), module553.default.createElement(module816, {
                        className: module3619.cluster,
                        cluster,
                        noTip: true
                    }), module553.default.createElement(module791, {
                        title: module553.default.createElement(ClusterTagGroup, {
                            data: (cluster.tags ?? []).map((t)=>(_this.tagsStore.tags || []).find((e)=>t.name === e.name)).filter(Boolean),
                            empty: "-"
                        }),
                        description: t("TAG_PL")
                    }))), isLoading && module553.default.createElement(module186.Loading, {
                    size: "large",
                    className: module3619.loading
                }), module63(data) && module553.default.createElement(module875, {
                    icon: "exclamation",
                    title: t("NO_MATCHING_RESULT_FOUND"),
                    desc: null,
                    action: module553.default.createElement("p", null, t("YOU_CAN_TRY_TO"), module553.default.createElement("span", {
                        className: module3619.action,
                        onClick: this.handleReset,
                        "data-test": "table-empty-refresh"
                    }, t("REFRESH_DATA")), t("OR"), module553.default.createElement("span", {
                        className: module3619.action,
                        onClick: this.clearFilter,
                        "data-test": "table-empty-clear-filter"
                    }, t("CLEAR_SEARCH_CONDITIONS")))
                }));
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
                        title: t("ALIAS"),
                        search: true
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
                            return module553.default.createElement("div", {
                                className: "flex"
                            }, module553.default.createElement("div", {
                                className: module3(module3619.clusterGroupTag, module31({}, module3619[e.key], true))
                            }, t(`ENV_${e.label.toUpperCase()}`)), e.label);
                        }
                    },
                    {
                        dataIndex: "tags",
                        title: t("TAG_PL"),
                        filters: (this.tagsStore.tags ?? []).map((e)=>({
                                text: `${e.label}:${e.value}`,
                                value: e.name
                            })),
                        search: true,
                        multi: true,
                        renderSearch: function(e) {
                            return module553.default.createElement("div", null, e.label);
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(module553.Component)) || o;
export default A;
