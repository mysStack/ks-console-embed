import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
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
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module789 from "components/Base/Avatar";
import Module848 from "components/Base/Empty";
import Module1046 from "unpacked/module-1046.js";
import Module887 from "components/Tables/Base/Pagination";
import Module987 from "components/Tables/Ranking";
import module159 from "unpacked/module-159.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module4291 from "unpacked/module-4291.js";
import module1208 from "unpacked/module-1208.js";
import module1392 from "unpacked/module-1392.js";
import module1210 from "unpacked/module-1210.js";
import { getDomTitle, hideGPUByLicense, showNameAndAlias } from "utils/index";
import { CLUSTER_PROVIDER_ICON, COLOR_QOS, MONITOR_RANK_METERIC_LOCALS, MONITOR_RANK_UNIT_MAP } from "utils/constants";
import { getSuitableUnit, getValueByUnit } from "utils/monitoring";
import module4292 from "unpacked/module-4292.js";
import Module4295 from "unpacked/module-4295.js";
import module4296 from "unpacked/module-4296.js";
let u;
let l;
let o;
let c;
let i;
let s;
let d;
const z = {
    limit: 10,
    page: 1,
    sort_type: "desc"
};
const W = inject("rootStore")(u = observer((l = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.state = {
            customPanelModalVisible: false
        };
        module65(e, "type", o, module88(e));
        e.rowKey = function() {
            return ({
                project: "namespace",
                cluster: "cluster",
                pod: "pod",
                node: "node"
            })[e.type];
        };
        module65(e, "hideColumns", c, module88(e));
        e.sourceMap = {
            cluster: {
                store: new module4291({
                    ...z
                }),
                icon: "cluster",
                name: "cluster",
                url: function(e) {
                    return `/whizard-telemetry/${e}/overview`;
                }
            },
            node: {
                store: new module1208({
                    ...z
                }),
                icon: "nodes",
                name: "node",
                url: function(e, t) {
                    return `/whizard-telemetry/${t}/nodes/${e}/status`;
                }
            },
            pod: {
                store: new module1392({
                    ...z
                }),
                icon: "pod",
                name: "pod",
                url: function(e, t, a) {
                    return `/whizard-telemetry/${t}/projects/${a}/pods/${e}/resource-status`;
                }
            },
            project: {
                store: new module1210({
                    ...z
                }),
                icon: "project",
                name: "namespace",
                url: function(e, t) {
                    return `/whizard-telemetry/${t}/projects/${e}/overview`;
                }
            }
        };
        e.transData = function(e, a) {
            let r = "";
            let unit = "";
            const u = e?.[a];
            if (a.indexOf("used_limits") > 0 || a.indexOf("used_requests") > 0) {
                r = module159(u) || u === "" ? "N/A" : "";
            }
            if (!r) {
                const l = MONITOR_RANK_UNIT_MAP[a];
                const o = u ?? 0;
                switch(l){
                    case "%":
                        r = `${getValueByUnit(o, l)}%`;
                        break;
                    case "":
                        r = Math.round(100 * o) / 100;
                        break;
                    default:
                        unit = getSuitableUnit(o, l);
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
                ...e.resourcesParams
            });
        };
        module65(e, "onChange", i, module88(e));
        module65(e, "handleColumnsHide", s, module88(e));
        module65(e, "handleRefresh", d, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const clusterList = this.props.clusterList;
                if (clusterList && clusterList.length > 0) {
                    this.fetchRankData();
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.clusterList !== this.props.clusterList) {
                    this.fetchRankData();
                }
            }
        },
        {
            key: "renderTop",
            value: function() {
                const showCustomPanelModal = this.props.showCustomPanelModal;
                return <div className={module4296.topWrapper}><div className={module4296.titleWrapper}>{t("WHIZARD_MONITORING.RESOURCE_RANKING_PL")}</div><module186.Button type="control" icon="layout" iconType="light" className={module4296.mainFilterClusterButton} onClick={showCustomPanelModal}>{t("SELECT_CLUSTER")}</module186.Button></div>;
            }
        },
        {
            key: "renderToolbar",
            value: function() {
                return <div className={module3(module4296.toolbar, module4296.pane__toolbar, module4296.pane)}><module186.RadioGroup wrapClassName="radio-group-button" value={this.type} onChange={this.onChange} disabled={this.store.isLoading}><module186.RadioButton value="cluster">{t("CLUSTER_PL")}</module186.RadioButton><module186.RadioButton value="node">{t("NODE_PL")}</module186.RadioButton><module186.RadioButton value="project">{t("PROJECT_PL")}</module186.RadioButton><module186.RadioButton value="pod">{t("POD_PL")}</module186.RadioButton></module186.RadioGroup><div className={module4296.toolbar_filter}><module186.Button type="flat" icon="refresh" onClick={this.handleRefresh} data-test="table-refresh"/><Module1046 className={module4296.columnMenu} title={t("CUSTOM_COLUMNS")} columns={this.columns} value={module14.toJS(this.hideColumns)} onChange={this.handleColumnsHide}/><module186.Select value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options} disabled={this.store.isLoading}/><module186.Select className={module4296.sortTypeSelect} value={this.store.sort_type} onChange={this.store.changeSortType} disabled={this.store.isLoading} options={[
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
                const dataSource = this.store.data.toJS().map((e)=>({
                        ...e,
                        id: module4292.v4()
                    }));
                return <div className={module4296.listContainer}><Module987 columns={this.filteredColumns} dataSource={dataSource} emptyText=<Module848/> loading={this.store.isLoading} store={this.store} rowKey="id"/>{this.renderPagination()}</div>;
            }
        },
        {
            key: "renderPagination",
            value: function() {
                const _this = this;
                const store = this.store;
                const { page, total, limit } = store;
                return <div className={module3(module4296.pane, module4296.pane__pagination)}><Module887 page={page} total={total} limit={limit} onChange={function(t) {
                    _this.store.changePagination(t, _this.resourcesParams);
                }}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4296.wrapper}>{this.renderTop()}{this.renderToolbar()}{this.renderList()}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.sourceMap[this.type].store;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.props.clusterList.map((e)=>e && e.name)?.join("|");
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
                const { store, name, icon, url } = r;
                const c = store.sort_metric_options?.map(function(sort_metric) {
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
                const i = [
                    {
                        title: t(name === "namespace" ? "PROJECT" : name.toUpperCase()),
                        width: "15%",
                        key: name,
                        render: function(e) {
                            let r;
                            let icon_1;
                            if (name === "cluster") {
                                const d = _this.props.clusterList?.filter(function(t) {
                                    return t.name === e.cluster;
                                })?.[0] ?? {};
                                icon_1 = CLUSTER_PROVIDER_ICON[d.provider] || "kubernetes";
                                r = d.isHost ? t("HOST_CLUSTER_SCAP") : t("MEMBER_CLUSTER_SCAP");
                            } else {
                                r = `${t("CLUSTER_PL")}: ${showNameAndAlias(e?.cluster, "cluster", {}, true, function() {
                                    return _this.forceUpdate();
                                }) ?? "-"}`;
                                icon_1 = icon;
                            }
                            const p = _this.renderQos(e);
                            const m = name === "namespace" ? <Module4295 data={e}/> : name === "cluster" ? showNameAndAlias(e?.[name], "cluster", {}, true, function() {
                                return _this.forceUpdate();
                            }) : e?.[name];
                            return <Module789 className={module4296.avatar} icon={icon_1} title=<>{p}{getDomTitle(m)}</> desc={getDomTitle(r)} iconSize={40} to={url(e?.[name], e?.cluster, e?.namespace)}/>;
                        }
                    }
                ];
                return hideGPUByLicense([].concat(i, module61(c)));
            }
        },
        {
            key: "filteredColumns",
            get: function() {
                const _this = this;
                return this.columns.filter((t)=>!_this.hideColumns.includes(t.key || t.dataIndex));
            }
        },
        {
            key: "resourcesParams",
            get: function() {
                if (this.type === "cluster") {
                    return {
                        resources_filter: this.clusters
                    };
                }
                return {
                    cluster_resources_filter: this.clusters
                };
            }
        }
    ]);
    return r;
})(Component), o = module49(l.prototype, "type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        if (this.props.type) {
            if (this.props.type === "namespace") {
                return "project";
            }
            return this.props.type;
        }
        return "cluster";
    }
}), c = module49(l.prototype, "hideColumns", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), i = module49(l.prototype, "onChange", [
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
}), s = module49(l.prototype, "handleColumnsHide", [
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
}), d = module49(l.prototype, "handleRefresh", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.store.changePagination({
                page: 1,
                limit: 10
            }, _this.resourcesParams);
        };
    }
}), u = l)) || u) || u;
export default W;
