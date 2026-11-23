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
import "./module-24.js";
import "./module-17.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module1395 from "./module-1395.js";
import module1205 from "./module-1205.js";
import Module4415 from "./module-4415.js";
import module1870 from "./module-1870.js";
let o;
const w = observer(o = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.fetchData = function(e = {}) {
            const n_props = n.props;
            const { appId, versionId, workspace } = n_props;
            const cluster = n.state.cluster;
            n.store.fetchList({
                app_id: appId,
                version_id: versionId,
                workspace,
                cluster,
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
        n.handleSearch = function(keyword) {
            n.searchValue = keyword;
            n.fetchData({
                keyword
            });
        };
        n.handleRefresh = function() {
            const e = n.searchValue ? {
                keyword: n.searchValue
            } : {};
            n.fetchData(e);
        };
        n.handlePage = function(page) {
            n.fetchData({
                page
            });
        };
        n.handleClusterChange = function(cluster) {
            n.setState({
                cluster
            }, function() {
                n.fetchData();
            });
        };
        n.renderHeader = function() {
            return <div className={module1870.header}>{n.renderClusters()}<module186.InputSearch className={module1870.search} name="search" placeholder={t("SEARCH_BY_NAME")} onSearch={n.handleSearch}/><div className={module1870.actions}><module186.Button type="flat" icon="refresh" onClick={n.handleRefresh}/></div></div>;
        };
        n.renderFooter = function() {
            const e = n.getPagination();
            const { total, page, limit } = e;
            return <module186.Level className={module1870.footer}><module186.LevelLeft>{t("TOTAL_ITEMS", {
                num: total
            })}</module186.LevelLeft><module186.LevelRight><module186.Pagination page={page} total={total} limit={limit} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        n.state = {
            uploadModal: false,
            cluster: module26(e, "clusters[0].name", "")
        };
        n.store = new module1205;
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderClusters",
            value: function() {
                const clusters = this.props.clusters;
                if (module63(clusters)) {
                    return null;
                }
                const clusters_1 = clusters.map((cluster)=>({
                        label: cluster.name,
                        value: cluster.name,
                        disabled: !cluster.isReady,
                        cluster
                    }));
                return <Module1395 clusters={clusters_1} cluster={this.state.cluster} onChange={this.handleClusterChange}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const versionId = this.props.versionId;
                const list = this.store.list;
                const r_data = list.data;
                if (list.isLoading) {
                    return <module186.Loading className={module1870.loading}/>;
                }
                return <div className={module1870.body}>{module63(r_data) ? <div className={module1870.empty}>{t("NO_RESOURCE_FOUND")}</div> : r_data.map((detail)=><Module4415 key={detail.name} detail={detail} showVersion={!versionId}/>)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title, hideHeader, hideFooter } = props;
                return <Module790 className={module3(module1870.main, className)} title={title || t("APP_INSTANCES")}><div className={module1870.inner}>{!hideHeader && this.renderHeader()}{this.renderContent()}{!hideFooter && this.renderFooter()}</div></Module790>;
            }
        }
    ]);
    return a;
})(Component)) || o;
export default w;
