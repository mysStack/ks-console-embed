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
import module1207 from "./module-1207.js";
import module1789 from "./module-1789.js";
import module1129 from "./module-1129.js";
import { getDomTitle, showNameAndAlias } from "./module-52.js";
import { COLOR_QOS, MONITOR_RANK_UNIT_MAP } from "./module-72.js";
import { getSuitableUnit, getValueByUnit } from "./module-795.js";
import module3690 from "./module-3690.js";
let u;
let i;
let c;
const U = {
    limit: 10,
    page: 1,
    sort_type: "desc"
};
const z = observer((i = ((e)=>{
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
        e.sourceMap = {
            node: {
                store: new module1207({
                    ...U,
                    cluster: e.cluster
                }),
                icon: "nodes",
                name: "node",
                desc: "host_ip",
                url: function(t) {
                    return `/clusters/${e.cluster}/nodes/${t}`;
                }
            },
            pod: {
                store: new module1789({
                    ...U,
                    cluster: e.cluster
                }),
                icon: "pod",
                name: "pod",
                desc: "namespace",
                descLabel: "PROJECTS",
                url: function(t, r) {
                    return `/clusters/${e.cluster}/projects/${r}/pods/${t}`;
                }
            },
            project: {
                store: new module1129({
                    ...U,
                    cluster: e.cluster
                }),
                icon: "project",
                name: "namespace",
                desc: "workspace",
                descLabel: "WORKSPACES",
                url: function(t) {
                    return `/clusters/${e.cluster}/projects/${t}`;
                }
            }
        };
        e.transData = function(r) {
            let n = "";
            let a = "";
            const o = module26(r, e.store.sort_metric, 0);
            const u = MONITOR_RANK_UNIT_MAP[e.store.sort_metric];
            switch(u){
                case "%":
                    n = `${getValueByUnit(o, u)}%`;
                    break;
                case "":
                    n = Math.round(100 * o) / 100;
                    break;
                default:
                    a = getSuitableUnit(o, u);
                    n = getValueByUnit(o, a);
            }
            return `${n} ${a === "core" ? t("CORE_PL") : a}`;
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
        e.handleChangeMetricType = function(t) {
            e.store.changeSortMetric(t, {
                sort_type: "desc"
            });
            e.setState({
                sortType: "desc"
            });
        };
        e.handleTypeChange = function(t) {
            e.setState({
                sortType: t
            });
            e.store.fetchAll({
                sort_type: t
            });
        };
        e.renderPanelHeader = function() {
            const sortType = e.state.sortType;
            return module553.default.createElement("div", {
                className: module3690.title
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
        e.renderListItems = function(r, n) {
            if (module63(r)) {
                return module553.default.createElement(module1102, null);
            }
            const a = (r)=>{
                const descLabel = e.sourceMap[n].descLabel;
                if (descLabel) {
                    if (descLabel === "PROJECTS") {
                        return module553.default.createElement("span", null, getDomTitle(`${t(descLabel)}: ${showNameAndAlias(module26(r, e.sourceMap[n].desc), "project", {}, true, function() {
                            return e.forceUpdate();
                        })}` ?? "-"));
                    }
                    if (descLabel === "WORKSPACES") {
                        return module553.default.createElement("span", null, getDomTitle(`${t(descLabel)}: ${showNameAndAlias(module26(r, e.sourceMap[n].desc), "workspace", {}, true)}` ?? "-"));
                    }
                }
                return getDomTitle(module26(r, e.sourceMap[n].desc, "-"));
            };
            const o = [
                "project"
            ];
            return module553.default.createElement(module553.default.Fragment, null, r.map((r, u)=>module553.default.createElement("div", {
                    key: `${r[n]}-${u}`,
                    className: module3690.listItem
                }, module553.default.createElement(module186.Icon, {
                    style: {
                        width: 52
                    },
                    size: 40,
                    className: "margin-r12",
                    name: e.sourceMap[n].icon
                }), module553.default.createElement(module791, {
                    className: module3690.textBox,
                    title: module553.default.createElement("div", {
                        className: module3(module3690.text, module31({}, module3690.noLabel, r.role !== "master"))
                    }, r.qos_class && e.renderQos(r), module553.default.createElement(Link, {
                        to: e.sourceMap[n].url(module26(r, e.sourceMap[n].name), module26(r, "namespace"))
                    }, getDomTitle(module1162(o, function(e) {
                        return e === n;
                    }) ? showNameAndAlias(module26(r, e.sourceMap[n].name), n, {}, true, function() {
                        return e.forceUpdate();
                    }) : module26(r, e.sourceMap[n].name, "-"))), r.role === "master" && module553.default.createElement("span", {
                        className: module3690.label
                    }, t("CONTROL_PLANE"))),
                    description: a(r)
                }), module553.default.createElement("p", {
                    className: module3690.cpu
                }, e.transData(r)))));
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
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.fetchAll();
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.store;
                const { data, isLoading } = store;
                const state = this.state;
                const { sourceType, isFold } = state;
                const i = data.length > 5;
                const c = isFold ? data.slice(0, 5) : data;
                return module553.default.createElement("div", {
                    className: module3690.container
                }, this.renderPanelHeader(), module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module3690.header
                }, module553.default.createElement(module186.Select, {
                    className: module3690.select,
                    value: sourceType,
                    onChange: this.handleChangeSource,
                    options: this.sourceOptions
                }), module553.default.createElement(module186.Select, {
                    className: module3690.select,
                    value: this.store.sort_metric,
                    onChange: this.handleChangeMetricType,
                    options: this.options
                })), module553.default.createElement("div", {
                    className: module3690.list,
                    style: {
                        height: i && !isFold ? "auto" : "392px"
                    }
                }, this.renderListItems(c, sourceType), i && module553.default.createElement(module186.Button, {
                    className: module3690.fold,
                    icon: isFold ? "chevron-down" : "chevron-up",
                    onClick: this.toggleFold
                }, isFold ? t("UNFOLD") : t("FOLD"))), module553.default.createElement("div", {
                    className: module3690.more
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
    return n;
})(module553.Component), c = module49(i.prototype, "store", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return this.sourceMap[this.state.sourceType].store;
    }
}), u = i)) || u;
export default z;
