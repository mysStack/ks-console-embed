import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
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
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import { startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import module1074 from "stores/monitoring/gateway";
import Module790 from "components/Base/Panel";
import Module4276 from "unpacked/module-4276.js";
import module1853 from "unpacked/module-1853.js";
let s;
let d;
let f;
const L = {
    cpu: "ingress_request_cpu_usage",
    memory: "ingress_request_memory_bytes"
};
const I = observer((f = d = ((Component_1)=>{
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
            let u;
            let limit;
            const c = arguments;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            t = c.length > 0 && c[0] !== undefined ? c[0] : {};
                            a = t.noMetrics;
                            r = t.silent;
                            u = module58(t, [
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
                                ...u
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
            n.monitorStore.fetchMetrics({
                step: "1m",
                times: 30,
                resources: data.map((e)=>e.name),
                metrics: Object.values(L),
                ...n.state.params,
                ...e
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
            Object.entries(L).forEach((a)=>{
                const r = module96(a, 2);
                const n = r[0];
                const u = r[1];
                const o = module26(data, `${u}.data.result`) || [];
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
        n.handleClusterChange = function(selectCluster) {
            n.setState({
                selectCluster,
                params: n.getParams(selectCluster)
            }, function() {
                n.fetchData();
            });
        };
        n.renderHeader = function() {
            return <div className={module1853.header}><module186.InputSearch className={module1853.search} name="search" placeholder={t("SEARCH")} onSearch={n.handleSearch}/><div className={module1853.actions}><module186.Button type="flat" icon="refresh" onClick={n.handleRefresh}/></div></div>;
        };
        n.renderFooter = function() {
            const e = n.getPagination();
            const e_total = e.total;
            return <module186.Level className={module1853.footer}><module186.LevelLeft>{t("TOTAL_ITEMS", {
                num: e_total
            })}</module186.LevelLeft><module186.LevelRight><module186.Pagination {...e} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        n.store = e.store;
        n.monitorStore = new module1074;
        const params = e.detail.cluster || e.params;
        n.state = {
            expandItem: "",
            params
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { detail, params } = props;
                if (detail !== e.detail) {
                    const u = detail.cluster || params;
                    this.setState({
                        expandItem: "",
                        selectCluster: u || "",
                        params: this.getParams(u)
                    }, function() {
                        _this.fetchData();
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
                const prefix = this.props.prefix;
                const podList = this.store.podList;
                const { data, isLoading, silent } = podList;
                const o = <div className={module1853.body}>{module63(data) ? <div className={module1853.empty}>{t("NO_RESOURCE_FOUND")}</div> : data.map((detail)=><Module4276 key={detail.uid} prefix={prefix} detail={detail} metrics={_this.getPodMetrics(detail)} loading={_this.monitorStore.isLoading} refreshing={_this.monitorStore.isRefreshing} isExpand={_this.state.expandItem === detail.uid} onExpand={_this.handleExpand}/>)}</div>;
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
                return <Module790 className={module3(module1853.main, className)} title={t(title)} empty={t("NO_AVAILABLE_RESOURCE_VALUE", {
                    resource: t("POD")
                })} isEmpty={module63(data)}>{!hideHeader && this.renderHeader()}{this.renderContent()}{!hideFooter && this.renderFooter()}</Module790>;
            }
        }
    ]);
    return r;
})(Component), d.propTypes = {
    prefix: module1.string,
    title: module1.string,
    detail: module1.object,
    details: module1.object,
    hideHeader: module1.bool,
    hideFooter: module1.bool,
    onPage: module1.func,
    limit: module1.number
}, d.defaultProps = {
    title: "Pods",
    detail: {},
    details: {},
    hideHeader: false,
    hideFooter: false,
    onPage: function() {}
}, s = f)) || s;
export default I;
