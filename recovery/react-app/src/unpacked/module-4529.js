import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module65 from "unpacked/module-65.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module1102 from "unpacked/module-1102.js";
import module791 from "components/Base/Text";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module1436 from "unpacked/module-1436.js";
import { MONITOR_RANK_UNIT_MAP, PROJECT_RANK_RESOURCE_ICON_MAP } from "utils/constants";
import { getSuitableUnit, getValueByUnit } from "utils/monitoring";
import module4530 from "unpacked/module-4530.js";
let c;
let s;
let l;
const x = {
    limit: 10,
    page: 1,
    sort_type: "desc"
};
const M = observer((s = ((e)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.sourceMap = {
            workload: {
                store: new module1436({
                    ...x,
                    cluster: e.cluster,
                    namespaces: e.namespace
                }),
                icon: "backup",
                name: "workload"
            },
            deployment: {
                store: new module1436({
                    ...x,
                    cluster: e.cluster,
                    namespaces: e.namespace,
                    kind: "deployment"
                }),
                icon: "backup",
                name: "deployment",
                url: function(t) {
                    return e.getLink(t, "Deployment");
                }
            },
            statefulset: {
                store: new module1436({
                    ...x,
                    cluster: e.cluster,
                    namespaces: e.namespace,
                    kind: "statefulset"
                }),
                icon: "stateful-set",
                name: "statefulset",
                url: function(t) {
                    return e.getLink(t, "StatefulSet");
                }
            },
            daemonset: {
                store: new module1436({
                    ...x,
                    cluster: e.cluster,
                    namespaces: e.namespace,
                    kind: "daemonset"
                }),
                icon: "deamon-set",
                name: "daemonset",
                url: function(t) {
                    return e.getLink(t, "DaemonSet");
                }
            }
        };
        e.getLink = function(t, a) {
            const currentResource = e.props.currentResource;
            const { workspace, cluster, namespace } = currentResource;
            const s = `${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects/${namespace}`;
            return ({
                Deployment: `${s}/deployments/${t}`,
                StatefulSet: `${s}/statefulsets/${t}`,
                DaemonSet: `${s}/daemonsets/${t}`
            })[a];
        };
        e.transData = function(a) {
            let r = "";
            let unit = "";
            const o = module26(a, e.store.sort_metric, 0);
            const c = MONITOR_RANK_UNIT_MAP[e.store.sort_metric];
            switch(c){
                case "%":
                    r = `${getValueByUnit(o, c)}%`;
                    break;
                case "":
                    r = Math.round(100 * o) / 100;
                    break;
                default:
                    unit = getSuitableUnit(o, c);
                    r = getValueByUnit(o, unit);
            }
            return `${unit === "gpu" ? `${r} GPU` : unit === "core" ? t("VALUE_CORES", {
                value: r
            }) : t("VALUE_UNIT", {
                value: r,
                unit
            })}`;
        };
        module65(e, "store", l, module88(e));
        e.state = {
            sourceType: e.props.isEdge ? "deployment" : "workload",
            data: [],
            sortType: "desc",
            isFold: true
        };
        e.getMetrics = function(t) {
            e.store.fetchAll({
                ...t
            });
        };
        e.handleChangeSource = function(sourceType) {
            e.setState({
                sourceType,
                sortType: "desc"
            });
            e.store = e.sourceMap[sourceType].store;
            e.getMetrics();
        };
        e.handleChangeSortMetric = function(t) {
            e.setState({
                sortType: "desc"
            });
            e.store.changeSortMetric(t);
        };
        e.handleTypeChange = function(t) {
            e.setState({
                sortType: t
            });
            e.getMetrics({
                sort_type: t
            });
        };
        e.renderPanelHeader = function() {
            const sortType = e.state.sortType;
            return module553.default.createElement("div", {
                className: module4530.title
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
        e.renderListItems = function(a, r) {
            if (module63(a)) {
                return module553.default.createElement(module1102, null);
            }
            return module553.default.createElement(module553.default.Fragment, null, a.map((a, n)=>{
                let icon = e.sourceMap[r].icon;
                let to = e.sourceMap[r].url?.();
                let d = module26(a, e.sourceMap[r].name, "-");
                if (a.workload_type) {
                    to = e.getWorkloadLink(a);
                    d = a.workload.replace(/\w+:/, "");
                    icon = PROJECT_RANK_RESOURCE_ICON_MAP[a.workload_type];
                }
                return module553.default.createElement("div", {
                    key: `${d}-${n}`,
                    className: module4530.listItem
                }, module553.default.createElement(module186.Icon, {
                    style: {
                        width: 52
                    },
                    name: icon,
                    size: 40,
                    className: "margin-r12"
                }), module553.default.createElement(module791, {
                    className: module4530.textBox,
                    title: module553.default.createElement("div", {
                        className: module3(module4530.text, module31({}, module4530.noLabel, a.role !== "master"))
                    }, module553.default.createElement(Link, {
                        to
                    }, d), a.role === "master" && module553.default.createElement("span", {
                        className: module4530.label
                    }, t("CONTROL_PLANE"))),
                    description: t(a?.workload_type?.toUpperCase())
                }), module553.default.createElement("p", {
                    className: module4530.cpu
                }, e.transData(a)));
            }));
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
            key: "getWorkloadLink",
            value: function(e) {
                const e_workload_type = e.workload_type;
                if (e_workload_type !== "Pod") {
                    const r = (e == null ? undefined : e.workload.replace(/\w+:/, "")) ?? "-";
                    return this.getLink(r, e_workload_type);
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.getMetrics();
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.store;
                const { data, isLoading } = store;
                const state = this.state;
                const { sourceType, isFold } = state;
                const s = data.length > 5;
                const l = isFold ? data.slice(0, 5) : data;
                return module553.default.createElement("div", {
                    className: module4530.container
                }, this.renderPanelHeader(), module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module4530.header
                }, module553.default.createElement(module186.Select, {
                    className: module4530.select,
                    value: sourceType,
                    onChange: this.handleChangeSource,
                    options: this.sourceOptions
                }), module553.default.createElement(module186.Select, {
                    className: module4530.select,
                    value: this.store.sort_metric,
                    onChange: this.handleChangeSortMetric,
                    options: this.options
                })), module553.default.createElement("div", {
                    className: module4530.list,
                    style: {
                        height: s && !isFold ? "auto" : "392px"
                    }
                }, this.renderListItems(l, sourceType), s && module553.default.createElement(module186.Button, {
                    className: module4530.fold,
                    icon: isFold ? "chevron-down" : "chevron-up",
                    onClick: this.toggleFold
                }, isFold ? t("UNFOLD") : t("FOLD"))), module553.default.createElement("div", {
                    className: module4530.more
                }, module553.default.createElement(module186.Button, {
                    onClick: this.showMoreModal
                }, t("VIEW_MORE"))))));
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.currentResource.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.currentResource.namespace;
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
                const isEdge = this.props.isEdge;
                return [
                    {
                        label: t("WORKLOAD_PL"),
                        value: "workload",
                        isHidden: isEdge
                    },
                    {
                        label: t("DEPLOYMENT_PL"),
                        value: "deployment"
                    },
                    {
                        label: t("STATEFULSET_PL"),
                        value: "statefulset",
                        isHidden: isEdge
                    },
                    {
                        label: t("DAEMONSET_PL"),
                        value: "daemonset",
                        isHidden: isEdge
                    }
                ].filter((e)=>!e.isHidden);
            }
        }
    ]);
    return r;
})(module553.Component), l = module49(s.prototype, "store", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return this.sourceMap[this.state.sourceType].store;
    }
}), c = s)) || c;
export default M;
