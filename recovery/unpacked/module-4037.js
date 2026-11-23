import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module96 from "./module-96.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import { startAutoRefresh, stopAutoRefresh } from "./module-795.js";
import module1074 from "./module-1074.js";
import Module790 from "./module-790.js";
import Module4038 from "./module-4038.js";
import module1842 from "./module-1842.js";
let s;
let f;
let d;
const P = {
    cpu: "ingress_request_cpu_usage",
    memory: "ingress_request_memory_bytes"
};
const A = observer((d = f = ((Component_1)=>{
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
                            n.store.podList.isLoading = false;
                            return e.abrupt("return");
                        case 4:
                            limit = n.props.limit;
                            if (r) {
                                n.store.podList.silent = true;
                            }
                            e.next = 8;
                            return n.store.getGatewayPodsList({
                                limit,
                                ...n.state.params,
                                ...l
                            });
                        case 8:
                            n.store.podList.silent = false;
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
            const podList = n.store.podList;
            const { data, isLoading } = podList;
            if (module63(data) || isLoading || module63(n.state.params)) {
                return false;
            }
            const params = n.state.params;
            const { gatewayName, namespace, workspace, cluster } = params;
            n.monitorStore.fetchMetrics({
                step: "1m",
                times: 30,
                resources: data.map((e)=>e.name),
                metrics: Object.values(P),
                namespace,
                workspace: namespace ? undefined : workspace,
                cluster: cluster || n.cluster,
                ...e,
                component: "ingress",
                job: `${gatewayName}-metrics`
            });
        };
        n.getPagination = function() {
            const podList = n.store.podList;
            return {
                page: podList.page,
                limit: podList.limit,
                total: podList.total
            };
        };
        n.getPodMetrics = function() {
            const data = n.monitorStore.data;
            const t = {};
            Object.entries(P).forEach((a)=>{
                const r = module96(a, 2);
                const n = r[0];
                const l = r[1];
                const o = module26(data, `${l}.data.result`) || [];
                t[n] = o[0];
            });
            return t;
        };
        n.handleSearch = function(search) {
            n.searchValue = search;
            n.fetchData({
                search
            });
        };
        n.handleRefresh = function() {
            const e = n.searchValue ? {
                search: n.searchValue
            } : {};
            n.fetchData(e);
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
                    label: e,
                    value: e
                }));
        };
        n.renderHeader = function() {
            return <div className={module1842.header}><module186.InputSearch className={module1842.search} name="search" placeholder={t("SEARCH")} onSearch={n.handleSearch}/><div className={module1842.actions}><module186.Button type="flat" icon="refresh" onClick={n.handleRefresh}/></div></div>;
        };
        n.renderFooter = function() {
            const e = n.getPagination();
            const e_total = e.total;
            return <module186.Level className={module1842.footer}><module186.LevelLeft>{t("TOTAL_ITEMS", {
                num: e_total
            })}</module186.LevelLeft><module186.LevelRight><module186.Pagination {...e} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        n.store = e.store;
        n.monitorStore = new module1074;
        n.state = {
            expandItem: "",
            params: e.params
        };
        return n;
    }
    module37(r, [
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
                const prefix = this.props.prefix;
                const podList = this.store.podList;
                const { data, isLoading, silent } = podList;
                const o = <div className={module1842.body}>{module63(data) ? <div className={module1842.empty}>{t("NO_RESOURCE_FOUND")}</div> : data.map((detail)=><Module4038 key={detail.uid} prefix={prefix} detail={detail} metrics={_this.getPodMetrics(detail)} loading={_this.monitorStore.isLoading} refreshing={_this.monitorStore.isRefreshing} isExpand={_this.state.expandItem === detail.uid} onExpand={_this.handleExpand}/>)}</div>;
                if (silent) {
                    return o;
                }
                return <module186.Loading spinning={isLoading}>{o}</module186.Loading>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title, hideHeader, hideFooter, noWrapper } = props;
                const data = this.store.podList.data;
                if (noWrapper) {
                    return this.renderContent();
                }
                return <Module790 className={module3(module1842.main, className)} title={t(title)} empty={t("NO_AVAILABLE_RESOURCE_VALUE", {
                    resource: t("POD")
                })} isEmpty={module63(data)}>{!hideHeader && this.renderHeader()}{this.renderContent()}{!hideFooter && this.renderFooter()}</Module790>;
            }
        },
        {
            key: "isWorkspaceGateway",
            get: function() {
                const params = this.props.params;
                const { workspace, namespace } = params;
                return workspace && !namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                const cluster = this.props.params.cluster;
                if ((location?.pathname).indexOf("federatedprojects") > -1 || this.isWorkspaceGateway) {
                    return localStorage.getItem("federated-cluster");
                }
                return cluster;
            }
        }
    ]);
    return r;
})(Component), f.propTypes = {
    prefix: module1.string,
    title: module1.string,
    detail: module1.object,
    details: module1.object,
    hideHeader: module1.bool,
    hideFooter: module1.bool,
    onPage: module1.func,
    limit: module1.number
}, f.defaultProps = {
    title: "PODS",
    detail: {},
    details: {},
    hideHeader: false,
    hideFooter: false,
    onPage: function() {}
}, s = d)) || s;
export default A;
