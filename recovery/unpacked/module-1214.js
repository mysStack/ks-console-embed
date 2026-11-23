import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-245.js";
import "./module-860.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import { getAreaChartOps, getSuitableValue } from "./module-795.js";
import module439 from "./module-439.js";
import module891 from "./module-891.js";
import module186 from "./module-186.js";
import { SimpleArea } from "./module-799.js";
import Module1799 from "./module-1799.js";
import module3787 from "./module-3787.js";
let o;
let i;
let c;
const P = {
    times: 100,
    step: "5m"
};
const A = observer((c = i = ((Component_1)=>{
    module55(n, Component_1);
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
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.fetchNamespaces = function(e = {}) {
            const cluster = t.state.cluster;
            if (e.name) {
                e.nameAndAlias = e.name;
                delete e.name;
            }
            if (cluster) {
                t.projectStore.fetchList({
                    cluster,
                    workspace: t.props.workspace,
                    ...e
                });
            }
        };
        t.fetchData = function(e = {}) {
            t.monitorStore.fetchApplicationResourceMetrics({
                metrics: [
                    t.metricType
                ],
                workspace: t.props.workspace,
                cluster: t.state.cluster,
                ...t.state,
                ...e
            });
        };
        t.handleClusterChange = function(e) {
            if (t.workspaceStore) {
                t.workspaceStore.selectCluster(e);
            }
            t.setState({
                cluster: e
            }, t.fetchNamespaces);
        };
        t.handleNamespaceChange = function(namespace) {
            t.setState({
                namespace
            });
        };
        t.handleSubmit = function() {
            const t_state = t.state;
            const { times, step } = t_state;
            const n = t.formRef.current && t.formRef.current.getData();
            t.setState(n, function() {
                t.fetchData({
                    ...n,
                    times,
                    step
                });
            });
        };
        t.onCancel = function() {
            t.setState({
                ...P,
                namespace: "all",
                metrics_filter: undefined
            }, function() {
                t.props.onCancel();
            });
        };
        t.updateMonitorOptions = function({ times, step }) {
            t.setState({
                times,
                step
            });
        };
        t.projectOptionRenderer = function(e) {
            return <span className={module3787.option}>{e.isFedManaged ? <img className={module3787.indicator} src="/assets/cluster.svg"/> : <module186.Icon name="project"/>}{e.label}</span>;
        };
        t.clusterOptionRenderer = function(e) {
            return <span className={module3787.option}><module186.Icon name="cluster" type="light"/>{e.label}</span>;
        };
        t.clusterValueRenderer = function(e) {
            return <span className={module3787.option}><module186.Icon name="cluster"/>{e.label}</span>;
        };
        t.workspaceStore = e.workspaceStore;
        t.state = {
            cluster: t.workspaceStore ? t.workspaceStore.cluster : module26(e, "cluster", ""),
            namespace: module26(e.detail, "namespace", "all"),
            ...P,
            metrics_filter: undefined
        };
        t.projectStore = new module439;
        t.monitorStore = new module891;
        t.formRef = createRef();
        return t;
    }
    module37(n, [
        {
            key: "componentDidUpdate",
            value: async function(t) {
                let a;
                let r;
                const _this = this;
                if ((a = this.props.visible) && a !== t.visible) {
                    r = this.props.workspaceStore;
                    this.setState({
                        cluster: r ? r.cluster : module26(this.props, "cluster", "")
                    }, module44(module41.mark(function* e() {
                        yield _this.fetchNamespaces();
                        yield _this.fetchData();
                    })));
                }
            }
        },
        {
            key: "renderFilterForm",
            value: function() {
                const _this = this;
                const state = this.state;
                const { cluster, namespace } = state;
                const data = {
                    ...this.state
                };
                const list = this.projectStore.list;
                const pagination = {
                    total: list.total,
                    page: list.page,
                    limit: list.limit
                };
                return <module186.Form className={module3787.form} ref={this.formRef} data={data}>{this.props.workspace && <module186.Form.Item label={t("CLUSTER")}><module186.Select name="cluster" placeholder=" " defaultValue={cluster} options={this.clusters} onChange={this.handleClusterChange} valueRenderer={this.clusterValueRenderer} optionRenderer={this.clusterOptionRenderer} showTip/></module186.Form.Item>}<module186.Form.Item label={t("PROJECT")}><module186.Select name="namespace" placeholder=" " defaultValue={namespace} options={this.namespaces} onFetch={this.fetchNamespaces} onChange={this.handleNamespaceChange} valueRenderer={this.projectOptionRenderer} optionRenderer={this.projectOptionRenderer} isLoading={this.projectStore.list.isLoading} pagination={pagination} searchable clearable/></module186.Form.Item>{this.isPvc && this.props.detail.filters && <module186.Form.Item label={t("storageclasses")}><module186.Select name="metrics_filter" defaultValue="workspace_pvc_bytes_used" onChange={function(metrics_filter) {
                    _this.setState({
                        metrics_filter
                    });
                }} options={this.props.detail.filters.options.map((t)=>({
                        label: t.label,
                        value: _this.props.detail.filters.getMetricsFilter(t.value)
                    }))}/></module186.Form.Item>}<module186.Form.Item><module186.Button type="control" onClick={this.handleSubmit}>{t("OK")}</module186.Button></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "renderChart",
            value: function() {
                const e = {
                    ...this.props.detail,
                    data: this.monitoringData
                };
                const t = getAreaChartOps(e);
                return <div className={module3787.chart}>{module63(t.data) ? <div className={module3787.empty}><img src="/assets/empty-card.svg"/></div> : <SimpleArea width="100%" height="100%" {...t}/>}</div>;
            }
        },
        {
            key: "renderTable",
            value: function() {
                const title = this.props.detail.title;
                const a = {
                    ...this.props.detail
                };
                const { unitType, unit } = a;
                const dataSource = (module26(this.monitoringData, "[0].values") || []).reverse().map((e)=>({
                        time: 1000 * module26(e, "[0]", 0),
                        value: getSuitableValue(module26(e, "[1]", 0), unitType || unit)
                    }));
                const columns = [
                    {
                        key: "time",
                        title: t("TIME"),
                        dataIndex: "time",
                        width: "30%",
                        render: function(e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                    },
                    {
                        key: "usage",
                        title: t("USAGE"),
                        dataIndex: "value"
                    }
                ];
                return <div className={module3787.table}><div className={module3787.box}><div className={module3787.title}>{t(title) || t("RESOURCE_USAGE")}</div><module186.Table columns={columns} dataSource={dataSource} scroll={{
                    y: 200
                }} expandIconAsCell={false} rowKey="time"/></div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { times, step } = state;
                const visible = this.props.visible;
                const resourceMetrics = this.monitorStore.resourceMetrics;
                const { isLoading, isRefreshing } = resourceMetrics;
                if (visible) {
                    return <Module1799 visible={visible} onFetch={this.fetchData} onCancel={this.onCancel} loading={isLoading} refreshing={isRefreshing} times={times} step={step} updateMonitorOptions={this.updateMonitorOptions}><div className={module3787.content}>{this.renderFilterForm()}{this.renderChart()}{this.renderTable()}</div></Module1799>;
                }
                return null;
            }
        },
        {
            key: "metrics",
            get: function() {
                return module14.toJS(this.monitorStore.resourceMetrics.data);
            }
        },
        {
            key: "metricType",
            get: function() {
                let e;
                if (this.isPvc && (e = this.state.metrics_filter) !== null && e !== undefined) {
                    return e;
                }
                return this.props.detail.metricType;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.workspaceStore.clusters.data.map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        cluster: e,
                        disabled: !e.isReady
                    }));
            }
        },
        {
            key: "namespaces",
            get: function() {
                const e = module14.toJS(this.projectStore.list.data).map((e)=>({
                        label: getDisplayName(e),
                        value: e.name,
                        isFedManaged: e.isFedManaged
                    }));
                e.unshift({
                    label: t("ALL"),
                    value: "all"
                });
                return e;
            }
        },
        {
            key: "monitoringData",
            get: function() {
                return module14.toJS(this.monitorStore.resourceMetrics.data);
            }
        },
        {
            key: "isPvc",
            get: function() {
                return this.props.detail.type === "pvc";
            }
        }
    ]);
    return n;
})(Component), i.propTypes = {
    visible: module1.bool,
    detail: module1.object,
    onCancel: module1.func
}, i.defaultProps = {
    visible: false,
    detail: {},
    onCancel: function() {}
}, o = c)) || o;
export default A;
