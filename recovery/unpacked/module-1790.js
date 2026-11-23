import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module65 from "./module-65.js";
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
import Module789 from "./module-789.js";
import Module848 from "./module-848.js";
import Module1046 from "./module-1046.js";
import Module887 from "./module-887.js";
import Module987 from "./module-987.js";
import module159 from "./module-159.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module1208 from "./module-1208.js";
import module1392 from "./module-1392.js";
import module1210 from "./module-1210.js";
import { hideGPUByLicense, showNameAndAlias } from "./module-52.js";
import { COLOR_QOS, MONITOR_RANK_METERIC_LOCALS, MONITOR_RANK_UNIT_MAP } from "./module-72.js";
import { getSuitableUnit, getValueByUnit } from "./module-795.js";
import module3683 from "./module-3683.js";
let l;
let u;
let o;
let i;
let c;
const F = {
    limit: 10,
    page: 1,
    sort_type: "desc"
};
l = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        module65(e, "type", u, module88(e));
        module65(e, "hideColumns", o, module88(e));
        e.sourceMap = {
            node: {
                store: new module1208({
                    ...F,
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
                    ...F,
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
                    ...F,
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
        e.transData = function(e, a) {
            let r = "";
            let unit = "";
            const l = e?.[a];
            if (a.indexOf("used_limits") > 0 || a.indexOf("used_requests") > 0) {
                r = module159(l) || l === "" ? "N/A" : "";
            }
            if (!r) {
                const u = MONITOR_RANK_UNIT_MAP[a];
                const o = l ?? 0;
                switch(u){
                    case "%":
                        r = `${getValueByUnit(o, u)}%`;
                        break;
                    case "":
                        r = Math.round(100 * o) / 100;
                        break;
                    default:
                        unit = getSuitableUnit(o, u);
                        r = getValueByUnit(o, unit);
                }
            }
            return `${unit === "gpu" ? `${r} GPU` : unit === "core" ? t("VALUE_CORES", {
                value: r
            }) : t("VALUE_UNIT", {
                value: r,
                unit
            })}`;
        };
        e.renderQos = function(e) {
            return <>{e.qos_class && <module186.Tooltip content={COLOR_QOS[e.qos_class].label}><span style={{
                display: "inline-block",
                marginRight: "4px",
                width: "16px",
                height: "16px",
                lineHeight: "16px",
                textAlign: "center",
                borderRadius: "2px",
                color: COLOR_QOS[e.qos_class].color,
                background: COLOR_QOS[e.qos_class].background
            }}>{e.qos_class.slice(0, 1).toUpperCase()}</span></module186.Tooltip>}</>;
        };
        e.fetchRankData = function(t) {
            e.store.fetchAll({
                ...t,
                cluster_resources_filter: e.clusters
            });
        };
        module65(e, "onChange", i, module88(e));
        module65(e, "handleColumnsHide", c, module88(e));
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
            key: "renderToolbar",
            value: function() {
                return <div className={module3(module3683.toolbar, module3683.pane__toolbar, module3683.pane)}><module186.RadioGroup wrapClassName="radio-group-button" value={this.type} onChange={this.onChange}><module186.RadioButton value="node">{t("NODE_PL")}</module186.RadioButton><module186.RadioButton value="project">{t("PROJECT_PL")}</module186.RadioButton><module186.RadioButton value="pod">{t("POD_PL")}</module186.RadioButton></module186.RadioGroup><div className={module3683.toolbar_filter}><Module1046 className={module3683.columnMenu} title={t("CUSTOM_COLUMNS")} columns={this.columns} value={module14.toJS(this.hideColumns)} onChange={this.handleColumnsHide}/><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/><module186.Select className={module3683.sortTypeSelect} value={this.store.sort_type} onChange={this.store.changeSortType} options={[
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
                return <div className={module3683.listContainer}><Module987 columns={this.filteredColumns} dataSource={dataSource} emptyText=<Module848/> loading={this.store.isLoading} store={this.store}/>{this.renderPagination()}</div>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module3683.pane, module3683.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={this.store.changePagination}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3683.wrapper}>{this.renderToolbar()}{this.renderList()}</div>;
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
                return this.props.cluster;
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
                const { store, icon, name, url, desc, descLabel } = r;
                const f = store.sort_metric_options?.map(function(sort_metric) {
                    return {
                        key: `${sort_metric}-${name}`,
                        sort_metric,
                        title: t(`${MONITOR_RANK_METERIC_LOCALS[sort_metric]}_TCAP`),
                        isHideable: true,
                        render: function(t) {
                            return <div><h3>{_this.transData(t, sort_metric)}</h3></div>;
                        }
                    };
                });
                const d = [
                    {
                        title: t(name === "namespace" ? "PROJECT" : name.toUpperCase()),
                        width: "15%",
                        key: name,
                        render: function(e) {
                            let desc_1 = descLabel ? `${t(descLabel)}: ${e?.[desc]} || '-'` : e?.[desc];
                            if (descLabel === "WORKSPACES") {
                                desc_1 = <span>{`${t(descLabel)}: `}{showNameAndAlias(e?.[desc], "workspace") || "-"}</span>;
                            }
                            if (descLabel === "PROJECTS") {
                                desc_1 = <span>{`${t(descLabel)}: `}{showNameAndAlias(e?.[desc], "project") || "-"}</span>;
                            }
                            const n = _this.renderQos(e);
                            return <Module789 className={module3683.avatar} icon={icon} title=<>{n}{name === "namespace" ? showNameAndAlias(e?.[name], "project") : e?.[name] || "-"}</> desc={desc_1} iconSize={40} to={url(e?.[name], e?.namespace)}/>;
                        }
                    }
                ];
                return hideGPUByLicense([].concat(d, module61(f)), this.cluster);
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
})(Component);
u = module49(l.prototype, "type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "node";
    }
});
o = module49(l.prototype, "hideColumns", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
i = module49(l.prototype, "onChange", [
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
});
c = module49(l.prototype, "handleColumnsHide", [
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
});
const G = l;
const V = inject("rootStore")(observer(G));
export default V;
const B = G;
export { B as Component };
