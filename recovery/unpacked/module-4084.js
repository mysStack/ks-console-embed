import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module1102 from "./module-1102.js";
import module791 from "./module-791.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module1162 from "./module-1162.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import { Link } from "./module-433.js";
import module1208 from "./module-1208.js";
import module1392 from "./module-1392.js";
import module1210 from "./module-1210.js";
import { getDomTitle, showNameAndAlias } from "./module-52.js";
import { COLOR_QOS, MONITOR_RANK_UNIT_MAP } from "./module-72.js";
import { getSuitableUnit, getValueByUnit } from "./module-795.js";
import module4085 from "./module-4085.js";
let l;
let o;
let c;
const U = {
    limit: 10,
    page: 1,
    sort_type: "desc"
};
const V = observer((o = ((e)=>{
    module55(r, e);
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
        e.sourceMap = {
            node: {
                store: new module1208({
                    ...U,
                    cluster: e.cluster
                }),
                icon: "nodes",
                name: "node",
                desc: "host_ip",
                url: function(t) {
                    return `/whizard-telemetry/${e.cluster}/nodes/${t}`;
                }
            },
            pod: {
                store: new module1392({
                    ...U,
                    cluster: e.cluster
                }),
                icon: "pod",
                name: "pod",
                desc: "namespace",
                descLabel: "PROJECTS",
                url: function(t, a) {
                    return `/whizard-telemetry/${e.cluster}/projects/${a}/pods/${t}`;
                }
            },
            project: {
                store: new module1210({
                    ...U,
                    cluster: e.cluster
                }),
                icon: "project",
                name: "namespace",
                desc: "workspace",
                descLabel: "WORKSPACES",
                url: function(t) {
                    return `/whizard-telemetry/${e.cluster}/projects/${t}`;
                }
            }
        };
        e.transData = function(a) {
            let r = "";
            let n = "";
            const u = module26(a, e.store.sort_metric, 0);
            const l = MONITOR_RANK_UNIT_MAP[e.store.sort_metric];
            switch(l){
                case "%":
                    r = `${getValueByUnit(u, l)}%`;
                    break;
                case "":
                    r = Math.round(100 * u) / 100;
                    break;
                default:
                    n = getSuitableUnit(u, l);
                    r = getValueByUnit(u, n);
            }
            return `${r} ${n === "core" ? t("CORE_PL") : n}`;
        };
        module65(e, "store", c, module88(e));
        e.state = {
            sourceType: "node",
            data: [],
            sortType: "desc",
            isFold: true
        };
        e.handleChangeSource = function(sourceType) {
            e.setState({
                sourceType
            });
            e.store = e.sourceMap[sourceType].store;
            e.handleTypeChange("desc");
        };
        e.handleTypeChange = function(t) {
            e.setState({
                sortType: t
            });
            e.fetchRankData({
                sort_type: t
            });
        };
        e.handleChangeMetricType = function(t) {
            e.store.changeSortMetric(t, {
                cluster_resources_filter: e.cluster,
                sort_type: "desc"
            });
            e.setState({
                sortType: "desc"
            });
        };
        e.fetchRankData = function(t) {
            const a = {
                cluster_resources_filter: e.cluster
            };
            e.store.fetchAll({
                ...t,
                ...a
            });
        };
        e.renderPanelHeader = function() {
            const sortType = e.state.sortType;
            return module553.default.createElement("div", {
                className: module4085.title
            }, module553.default.createElement("div", null, t("RESOURCE_USAGE_RANKING")), module553.default.createElement(module186.RadioGroup, {
                mode: "button",
                value: sortType,
                onChange: e.handleTypeChange
            }, module553.default.createElement(module186.RadioButton, {
                value: "desc"
            }, module553.default.createElement(module186.Icon, {
                name: "sort-descending",
                size: 16
            })), module553.default.createElement(module186.RadioButton, {
                value: "asc"
            }, module553.default.createElement(module186.Icon, {
                name: "sort-ascending",
                size: 16
            }))));
        };
        e.renderQos = function(e) {
            return module553.default.createElement(module186.Tooltip, {
                content: COLOR_QOS[e.qos_class].label
            }, module553.default.createElement("span", {
                style: {
                    marginRight: "4px",
                    minWidth: "16px",
                    height: "16px",
                    lineHeight: "16px",
                    textAlign: "center",
                    borderRadius: "2px",
                    color: COLOR_QOS[e.qos_class].color,
                    background: COLOR_QOS[e.qos_class].background
                }
            }, e.qos_class.slice(0, 1).toUpperCase()));
        };
        e.renderListItems = function(a, r) {
            if (module63(a)) {
                return module553.default.createElement(module1102, null);
            }
            const n = (a)=>{
                const descLabel = e.sourceMap[r].descLabel;
                if (descLabel) {
                    if (descLabel === "PROJECTS") {
                        return getDomTitle(`${t(descLabel)}: ${showNameAndAlias(module26(a, e.sourceMap[r].desc), "project", {}, true, function() {
                            return e.forceUpdate();
                        }) || "-"}`);
                    }
                    if (descLabel === "WORKSPACES") {
                        return getDomTitle(`${t(descLabel)}: ${showNameAndAlias(module26(a, e.sourceMap[r].desc), "workspace", {}, true, function() {
                            return e.forceUpdate();
                        }) || "-"}`);
                    }
                }
                return getDomTitle(module26(a, e.sourceMap[r].desc, "-"));
            };
            const u = [
                "project"
            ];
            return module553.default.createElement(module553.default.Fragment, null, a.map((a, l)=>module553.default.createElement("div", {
                    key: `${a[r]}-${l}`,
                    className: module4085.listItem
                }, module553.default.createElement(module186.Icon, {
                    style: {
                        width: 52
                    },
                    name: e.sourceMap[r].icon,
                    size: 40,
                    className: "margin-r12"
                }), module553.default.createElement(module791, {
                    className: module4085.textBox,
                    title: module553.default.createElement("div", {
                        className: module3(module4085.text, module31({}, module4085.noLabel, a.role !== "master"))
                    }, a.qos_class && e.renderQos(a), module553.default.createElement(Link, {
                        to: e.sourceMap[r].url(module26(a, e.sourceMap[r].name), module26(a, "namespace"))
                    }, getDomTitle(module1162(u, function(e) {
                        return e === r;
                    }) ? showNameAndAlias(module26(a, e.sourceMap[r].name), r, {}, true, function() {
                        e.forceUpdate();
                    }) : module26(a, e.sourceMap[r].name, "-"))), a.role === "master" && module553.default.createElement("span", {
                        className: module4085.label
                    }, t("CONTROL_PLANE"))),
                    description: n(a)
                }), module553.default.createElement("p", {
                    className: module4085.cpu
                }, e.transData(a)))));
        };
        e.toggleFold = function() {
            e.setState({
                isFold: !e.state.isFold
            });
        };
        e.showMoreModal = function() {
            e.props.showRankModal?.();
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchRankData();
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.store;
                const { data, isLoading } = store;
                const state = this.state;
                const { sourceType, isFold } = state;
                const o = data.length > 5;
                const c = isFold ? data.slice(0, 5) : data;
                return module553.default.createElement("div", {
                    className: module4085.container
                }, this.renderPanelHeader(), module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module4085.header
                }, module553.default.createElement(module186.Select, {
                    className: module4085.select,
                    value: sourceType,
                    onChange: this.handleChangeSource,
                    options: this.sourceOptions
                }), module553.default.createElement(module186.Select, {
                    className: module4085.select,
                    value: this.store.sort_metric,
                    onChange: this.handleChangeMetricType,
                    options: this.options
                })), module553.default.createElement("div", {
                    className: module4085.list,
                    style: {
                        height: o && !isFold ? "auto" : "392px"
                    }
                }, this.renderListItems(c, sourceType), o && module553.default.createElement(module186.Button, {
                    className: module4085.fold,
                    icon: isFold ? "chevron-down" : "chevron-up",
                    onClick: this.toggleFold
                }, isFold ? t("UNFOLD") : t("FOLD"))), module553.default.createElement("div", {
                    className: module4085.more
                }, module553.default.createElement(module186.Button, {
                    onClick: this.showMoreModal
                }, t("VIEW_MORE"))))));
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        },
        {
            key: "options",
            get: function() {
                return this.store.sort_metric_options.map((e)=>({
                        value: e,
                        label: t(`SORT_BY_${e.toUpperCase()}`)
                    }));
            }
        },
        {
            key: "sourceOptions",
            get: function() {
                return [
                    {
                        label: t("NODES"),
                        value: "node"
                    },
                    {
                        label: t("PODS"),
                        value: "pod"
                    },
                    {
                        label: t("PROJECT_PL"),
                        value: "project"
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component), c = module49(o.prototype, "store", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return this.sourceMap[this.state.sourceType].store;
    }
}), l = o)) || l;
export default V;
