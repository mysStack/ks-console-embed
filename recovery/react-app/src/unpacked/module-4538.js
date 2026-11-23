import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module1436 from "unpacked/module-1436.js";
import Module789 from "components/Base/Avatar";
import Module848 from "components/Base/Empty";
import module186 from "unpacked/module-186.js";
import Module1046 from "unpacked/module-1046.js";
import Module887 from "components/Tables/Base/Pagination";
import { MONITOR_RANK_METERIC_LOCALS, MONITOR_RANK_UNIT_MAP, PROJECT_RANK_RESOURCE_ICON_MAP } from "utils/constants";
import { getSuitableUnit, getValueByUnit } from "utils/monitoring";
import { hideGPUByLicense } from "utils/index";
import Module987 from "components/Tables/Ranking";
import module4539 from "unpacked/module-4539.js";
let o;
let c;
let s;
let l;
let i;
let u;
const U = {
    limit: 10,
    page: 1,
    sort_type: "desc"
};
const B = inject("rootStore")(o = observer((c = ((Component_1)=>{
    module55(r, Component_1);
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
        module65(e, "hideColumns", s, module88(e));
        module65(e, "type", l, module88(e));
        e.sourceMap = {
            workload: {
                store: new module1436({
                    ...U,
                    cluster: e.cluster,
                    namespaces: e.namespace
                }),
                icon: "backup",
                name: "workload"
            },
            deployment: {
                store: new module1436({
                    ...U,
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
                    ...U,
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
                    ...U,
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
        e.transData = function(e, a) {
            let n = "";
            let o = "";
            const c = e?.[a] ?? 0;
            const s = MONITOR_RANK_UNIT_MAP[a];
            switch(s){
                case "%":
                    n = `${getValueByUnit(c, s)}%`;
                    break;
                case "":
                    n = Math.round(100 * c) / 100;
                    break;
                default:
                    o = getSuitableUnit(c, s);
                    n = getValueByUnit(c, o);
            }
            return `${n} ${o === "core" ? t("CORE_PL") : o}`;
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
        e.fetchRankData = function(t) {
            e.store.fetchAll({
                ...t
            });
        };
        module65(e, "onChange", i, module88(e));
        module65(e, "handleColumnsHide", u, module88(e));
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
            key: "renderToolbar",
            value: function() {
                return <div className={module3(module4539.toolbar, module4539.pane__toolbar, module4539.pane)}><module186.RadioGroup wrapClassName="radio-group-button" value={this.type} onChange={this.onChange}><module186.RadioButton value="workload">{t("WORKLOAD")}</module186.RadioButton><module186.RadioButton value="deployment">{t("DEPLOYMENT")}</module186.RadioButton><module186.RadioButton value="statefulset">{t("STATEFULSET")}</module186.RadioButton><module186.RadioButton value="daemonset">{t("DAEMONSET")}</module186.RadioButton></module186.RadioGroup><div className={module4539.toolbar_filter}><Module1046 className={module4539.columnMenu} title={t("CUSTOM_COLUMNS")} columns={this.columns} value={module14.toJS(this.hideColumns)} onChange={this.handleColumnsHide}/><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/><module186.Select className={module4539.sortTypeSelect} value={this.store.sort_type} onChange={this.store.changeSortType} options={[
                    {
                        value: "desc",
                        label: t("SORT_BY_DESC")
                    },
                    {
                        value: "asc",
                        label: t("SORT_BY_ASC")
                    }
                ]}/></div></div>;
            }
        },
        {
            key: "renderList",
            value: function() {
                const dataSource = this.store.data.toJS();
                return <div className={module4539.listContainer}><Module987 columns={this.filteredColumns} dataSource={dataSource} emptyText=<Module848/> loading={this.store.isLoading} store={this.store}/>{this.renderPagination()}</div>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module4539.pane, module4539.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4539.wrapper}>{this.renderToolbar()}{this.renderList()}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.sourceMap[this.type].store;
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
                const _this = this;
                const name = this.sourceMap[this.type].name;
                return this.store.sort_metric_options.filter((t)=>!module14.toJS(_this.hideColumns).includes(`${t}-${name}`)).map((e)=>({
                        value: e,
                        label: t(`SORT_BY_${e.toUpperCase()}`)
                    }));
            }
        },
        {
            key: "columns",
            get: function() {
                const _this = this;
                const r = this.sourceMap[this.type];
                const { store, url, name, icon } = r;
                const l = store.sort_metric_options?.map(function(sort_metric) {
                    return {
                        key: `${sort_metric}-${name}`,
                        sort_metric,
                        title: t(MONITOR_RANK_METERIC_LOCALS[sort_metric]),
                        isHideable: true,
                        render: function(t) {
                            return <div><h3>{_this.transData(t, sort_metric)}</h3></div>;
                        }
                    };
                });
                const i = [
                    {
                        title: t(name === "namespace" ? "PROJECT" : name.toUpperCase()),
                        width: "15%",
                        key: name,
                        render: function(e) {
                            let to = url?.();
                            let title = e?.[name];
                            let icon_1 = icon;
                            if (e.workload_type) {
                                to = _this.getWorkloadLink(e);
                                title = e.workload.replace(/\w+:/, "");
                                icon_1 = PROJECT_RANK_RESOURCE_ICON_MAP[e.workload_type];
                            }
                            return <Module789 className={module4539.avatar} icon={icon_1} title={title} desc={t(e?.workload_type?.toUpperCase())} iconSize={40} to={to}/>;
                        }
                    }
                ];
                return hideGPUByLicense([].concat(i, module61(l)), this.cluster);
            }
        },
        {
            key: "filteredColumns",
            get: function() {
                const _this = this;
                return this.columns.filter((t)=>!_this.hideColumns.includes(t.key || t.dataIndex));
            }
        }
    ]);
    return r;
})(Component), s = module49(c.prototype, "hideColumns", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), l = module49(c.prototype, "type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "workload";
    }
}), i = module49(c.prototype, "onChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.store.sort_metric = _this.store.sort_metric_options[0];
            _this.hideColumns = [];
            new Promise((resolve)=>{
                _this.type = t;
                resolve();
            }).then(()=>{
                _this.fetchRankData();
            });
        };
    }
}), u = module49(c.prototype, "handleColumnsHide", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.hideColumns = t;
            const name = _this.sourceMap[_this.type].name;
            if (t.includes(`${_this.store.sort_metric}-${name}`)) {
                const n = _this.store.sort_metric_options.filter((e)=>!t.includes(`${e}-${name}`));
                _this.store.changeSortMetric(n[0] ?? "");
            }
        };
    }
}), o = c)) || o) || o;
export default B;
