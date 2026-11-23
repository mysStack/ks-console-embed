import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module41 from "unpacked/module-41.js";
import "unpacked/module-31.js";
import module58 from "unpacked/module-58.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module807 from "unpacked/module-807.js";
import module63 from "unpacked/module-63.js";
import module198 from "unpacked/module-198.js";
import module26 from "unpacked/module-26.js";
import module856 from "unpacked/module-856.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module790 from "components/Base/Panel";
import { trigger } from "utils/action";
import module105 from "utils/object.mapper";
import { API_VERSIONS } from "utils/constants";
import { startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import module452 from "stores/pod";
import module325 from "stores/websocket";
import module1365 from "unpacked/module-1365.js";
import module989 from "unpacked/module-989.js";
import module1399 from "unpacked/module-1399.js";
import module1400 from "unpacked/module-1400.js";
import { hideGPUByLicense, joinSelector, showNameAndAlias } from "utils/index";
import Module3838 from "components/Cards/Pods/Item";
import module1810 from "unpacked/module-1810.js";
let s;
let f;
let d;
const q = {
    cpu: "pod_cpu_usage",
    memory: "pod_memory_usage_wo_cache",
    gpu: "pod_gpu_usage",
    gpu_memory: "pod_gpu_memory_usage"
};
const H = inject("rootStore")(s = observer(s = trigger((d = f = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getParams = function(e) {
            const n_props = n.props;
            const { detail, details } = n_props;
            const l = module14.toJS((n_props.isFederated ? details[e] : detail) || {});
            const { name, namespace, kind, uid } = l;
            const selector = [
                l.selector,
                module26(l, "spec.selector.matchLabels"),
                module26(l, "_originData.spec.selector.matchLabels"),
                module26(l, "spec.template.metadata.labels"),
                l.labels
            ].find(function(e) {
                return e && !module63(e);
            }) || {};
            const d = kind || module26(l._originData, "kind", "");
            let p = {};
            if (e) {
                p.cluster = e;
            }
            if (namespace) {
                p.namespace = namespace;
            }
            switch(d){
                case "PVC":
                    p.pvcName = name;
                    break;
                case "Node":
                    p.nodeName = name;
                    break;
                case "Namespace":
                    p.namespace = name;
                    break;
                case "Service":
                case "IPPool":
                    p.labelSelector = joinSelector(selector);
                    break;
                default:
                    p.ownerKind = d === "Deployment" || d === "deployments" ? "ReplicaSet" : d;
                    p.labelSelector = joinSelector(selector);
            }
            if (module198(p, "labelSelector") && module63(selector)) {
                p = {};
            }
            return p;
        };
        n.fetchData = module44(module41.mark(function e() {
            let t;
            let a;
            let r;
            let l;
            let limit;
            const i = arguments;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            t = i.length > 0 && i[0] !== undefined ? i[0] : {};
                            a = t.noMetrics;
                            r = t.silent;
                            l = module58(t, [
                                "noMetrics",
                                "silent"
                            ]);
                            if (!module63(n.state.params)) {
                                e.next = 4;
                                break;
                            }
                            n.store.list.isLoading = false;
                            return e.abrupt("return");
                        case 4:
                            limit = n.props.limit;
                            if (r) {
                                n.store.list.silent = true;
                            }
                            e.next = 8;
                            return n.store.fetchList({
                                limit,
                                ...n.state.params,
                                ...l
                            });
                        case 8:
                            n.store.list.silent = false;
                            if (!a) {
                                n.fetchMetrics();
                            }
                        case 10:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.fetchMetrics = function(e = {}) {
            const selectCluster = n.state.selectCluster;
            const list = n.store.list;
            const { data, isLoading } = list;
            return !(module63(data) || isLoading || module63(n.state.params)) && !!globals.app.hasClusterModule(selectCluster, "whizard-monitoring") && void n.monitorStore.fetchMetrics({
                step: "1m",
                times: 30,
                resources: data.map((e)=>e.name),
                metrics: Object.values(hideGPUByLicense(q, selectCluster)),
                ...n.state.params,
                ...e
            });
        };
        n.getPagination = function() {
            const list = n.store.list;
            return {
                page: list.page,
                limit: list.limit,
                total: list.total
            };
        };
        n.getPodMetrics = function(e) {
            const data = n.monitorStore.data;
            const a = {};
            const cluster = n.state.cluster;
            Object.entries(hideGPUByLicense(q, cluster)).forEach((r)=>{
                const n = module96(r, 2);
                const l = n[0];
                const o = n[1];
                const i = module26(data, `${o}.data.result`) || [];
                a[l] = i.find((t)=>module26(t, "metric.pod") === e.name);
            });
            return a;
        };
        n.handleSearch = function(e) {
            n.searchValue = e;
            n.fetchData({
                name: e
            }).then(()=>{
                n.props.onSearch(e);
            });
        };
        n.handleRefresh = function() {
            const e = n.searchValue ? {
                name: n.searchValue
            } : {};
            n.fetchData(e).then(()=>{
                const n_props = n.props;
                const { onSearch, onRefresh } = n_props;
                if (module63(e)) {
                    onRefresh();
                } else {
                    onSearch(n.searchValue);
                }
            });
        };
        n.handlePage = function(page) {
            n.fetchData({
                page
            }).then(()=>{
                n.props.onPage(page);
            });
        };
        n.handleExpand = function(e) {
            n.setState(function(t) {
                return {
                    expandItem: t.expandItem === e ? "" : e
                };
            });
        };
        n.getClustersOptions = function() {
            return n.props.clusters.map((e)=>({
                    label: <span>{showNameAndAlias(e, "cluster")}</span>,
                    value: e
                }));
        };
        n.handleClusterChange = function(selectCluster) {
            n.setState({
                selectCluster,
                params: n.getParams(selectCluster)
            }, function() {
                n.fetchData();
                n.initWebsocket();
            });
        };
        n.renderHeader = function() {
            const isFederated = n.props.isFederated;
            const selectCluster = n.state.selectCluster;
            return <div className={module1810.header}>{isFederated && <module186.Select key={selectCluster} name="cluster" prefixIcon=<module186.Icon name="cluster"/> className={module1810.cluster} value={selectCluster} options={n.getClustersOptions()} onChange={n.handleClusterChange}/>}<module186.InputSearch className={module1810.search} name="search" placeholder={t("SEARCH_BY_NAME")} onSearch={n.handleSearch}/><div className={module1810.actions}><module186.Button type="flat" icon="refresh" onClick={n.handleRefresh}/></div></div>;
        };
        n.handleShowEvents = function(e) {
            n.trigger("pod.events", {
                detail: e,
                title: <span><module186.Icon name="event"/>{t("VIEW_EVENTS")}</span>,
                isEdgeWize: n.props.isEdgeWize,
                cluster: e.cluster
            });
        };
        n.renderFooter = function() {
            const e = n.getPagination();
            const e_total = e.total;
            return <module186.Level className={module1810.footer}><module186.LevelLeft>{t("TOTAL_ITEMS", {
                num: e_total
            })}</module186.LevelLeft><module186.LevelRight><module186.Pagination {...e} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        const i = module26(n.props.rootStore, "routing.location.pathname", "").indexOf("observability") > -1;
        n.store = e.isEdgeWize ? new module1365 : new module452;
        n.monitorStore = i ? new module1400 : e.isEdgeWize ? new module1399 : new module989;
        const s = e.isFederated ? module26(e, "clusters[0]") : e.detail.cluster;
        n.state = {
            expandItem: "",
            selectCluster: s || "",
            params: n.getParams(s)
        };
        n.websocket = new module325;
        n.initWebsocket();
        return n;
    }
    module37(r, [
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const getReplica = this.props.getReplica;
                const { selectCluster, params = {} } = this.state;
                const { namespace, labelSelector } = params;
                const i = `${this.props.isEdgeWize ? API_VERSIONS.edgewize : ""}${selectCluster ? `/clusters/${selectCluster}` : ""}/api/v1/watch/namespaces/${namespace}/pods?labelSelector=${labelSelector}`;
                if (i && namespace && labelSelector) {
                    this.websocket.watch(i);
                    this.fetchData = module856(this.fetchData, 2000);
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(a) {
                        if (a.object.kind === "Pod") {
                            if (a.type === "MODIFIED") {
                                const n = {
                                    cluster: selectCluster,
                                    ...module105.pods(module14.toJS(a.object))
                                };
                                _this.store.list.updateItem(n);
                                if (getReplica) {
                                    getReplica();
                                }
                            } else {
                                if (!(a.type !== "DELETED" && a.type !== "ADDED")) {
                                    _this.fetchData({
                                        silent: true
                                    });
                                    if (getReplica) {
                                        getReplica();
                                    }
                                }
                            }
                        }
                    });
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { detail, details, isFederated } = props;
                const u = isFederated && !module807(details, e.details);
                const nameChanged = module26(detail, "name") !== module26(e.detail, "name");
                const selectorChanged = JSON.stringify(module14.toJS(module26(detail, "selector"))) !== JSON.stringify(module14.toJS(module26(e.detail, "selector")));
                if (detail !== e.detail || u || nameChanged || selectorChanged) {
                    const o = isFederated ? module26(this.props, "clusters[0]") : detail.cluster;
                    this.setState({
                        expandItem: "",
                        selectCluster: o || "",
                        params: this.getParams(o)
                    }, function() {
                        _this.fetchData();
                        _this.initWebsocket();
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                startAutoRefresh(this, {
                    method: "fetchMetrics",
                    leading: false
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                stopAutoRefresh(this);
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const props = this.props;
                const { prefix, isFederated, isEdgeWize, showMonitoring } = props;
                const list = this.store.list;
                const { data, isLoading, silent } = list;
                const selectCluster = this.state.selectCluster;
                const d = <div className={module1810.body}>{module63(data) ? <div className={module1810.empty}>{t("NO_RESOURCE_FOUND")}</div> : data.map((t)=><Module3838 isEdgeWize={isEdgeWize} key={t.uid} prefix={isFederated ? `${prefix}/clusters/${selectCluster}` : prefix} detail={t} showMonitoring={showMonitoring} metrics={_this.getPodMetrics(t)} loading={_this.monitorStore.isLoading} refreshing={_this.monitorStore.isRefreshing} isExpand={_this.state.expandItem === t.uid} onExpand={_this.handleExpand} onShowEvents={_this.handleShowEvents}/>)}</div>;
                if (silent) {
                    return d;
                }
                return <module186.Loading spinning={isLoading}>{d}</module186.Loading>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title, hideHeader, hideFooter, noWrapper } = props;
                const data = this.store.list.data;
                if (noWrapper) {
                    return this.renderContent();
                }
                return <Module790 className={module3(module1810.main, className)} title={t(title)} empty={t("EMPTY_WRAPPER", {
                    resource: t("POD")
                })} isEmpty={module63(data)}>{!hideHeader && this.renderHeader()}{this.renderContent()}{!hideFooter && this.renderFooter()}</Module790>;
            }
        }
    ]);
    return r;
})(Component), f.propTypes = {
    prefix: module1.string,
    isEdgeWize: module1.bool,
    title: module1.string,
    detail: module1.object,
    details: module1.object,
    hideHeader: module1.bool,
    hideFooter: module1.bool,
    isFederated: module1.bool,
    onSearch: module1.func,
    onRefresh: module1.func,
    onPage: module1.func,
    limit: module1.number,
    showMonitoring: module1.bool
}, f.defaultProps = {
    title: "PODS",
    detail: {},
    details: {},
    isEdgeWize: false,
    hideHeader: false,
    hideFooter: false,
    isFederated: false,
    showMonitoring: true,
    onSearch: function() {},
    onRefresh: function() {},
    onPage: function() {}
}, s = d)) || s) || s) || s;
export default H;
