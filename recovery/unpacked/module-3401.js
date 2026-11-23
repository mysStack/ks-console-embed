import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import "./module-45.js";
import "./module-442.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module243 from "./module-243.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module1064 from "./module-1064.js";
import module3403 from "./module-3403.js";
import module1744 from "./module-1744.js";
import Module985 from "./module-985.js";
import module3405 from "./module-3405.js";
let p;
let m;
let h;
const T = observer((m = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.logStatisticsStore = new module3403;
        e.histogramStore = new module1744({
            startTime: Date.now() - 43200000,
            endTime: Date.now(),
            interval: "30m"
        });
        e.supportQueryParams = [
            {
                icon: "magnifier",
                title: t("SEARCH_BY_KEYWORD"),
                tips: t("CONTAINER_LOG_KEYWORD_TIP"),
                key: "log_query"
            },
            {
                icon: "project",
                title: t("SEARCH_BY_PROJECT"),
                tips: t("CONTAINER_LOG_PROJECT_TIP"),
                key: "namespace_query"
            },
            {
                icon: "backup",
                title: t("SEARCH_BY_WORKLOAD"),
                tips: t("CONTAINER_LOG_WORKLOAD_TIP"),
                key: "workload_query"
            },
            {
                icon: "pod",
                title: t("SEARCH_BY_POD"),
                tips: t("CONTAINER_LOG_POD_TIP"),
                key: "pod_query"
            },
            {
                icon: "docker",
                title: t("SEARCH_BY_CONTAINER"),
                tips: t("CONTAINER_LOG_CONTAINER_TIP"),
                key: "container_query"
            }
        ];
        e.watchCluster = function() {
            const searchInputState = e.props.searchInputState;
            e.disposer = module14.reaction(function() {
                return searchInputState.cluster;
            }, function(t) {
                if (t !== "") {
                    e.updateStatistics(t);
                }
            });
        };
        module65(e, "selectedDurationParameter", h, module88(e));
        e.selectedParameter = function(t) {
            e.props.searchInputState.nextParamsKey = t.currentTarget.dataset.query;
        };
        e.onSearchParamsChange = function() {
            e.props.formStepState.next();
        };
        e.onClusterChange = function(t) {
            e.props.searchInputState.setCluster(t);
        };
        e.clusterRenderer = function(e) {
            return t("CLUSTER_VALUE", {
                value: e.label
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.watchCluster();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "updateStatistics",
            value: function(cluster) {
                this.logStatisticsStore.fetch({
                    cluster
                });
                this.histogramStore.fetch({
                    cluster
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <div><div className={module3405.pane}>{this.renderBanner()}</div><div className={module3405.tips}><div className={module3405.pane}><module186.Loading spinning={this.histogramStore.isLoading}><>{this.renderSearchBar()}<h3 className={module3405.rule}>{t("QUERYING_RULES")}</h3>{this.renderRecentLogs()}</></module186.Loading>{this.renderQueryItems()}</div></div></div>;
            }
        },
        {
            key: "renderBanner",
            value: function() {
                return <div className={module3405.banner}><div className={module3405.illustration}><img src="/assets/log-statistics.svg" alt="log-statistics"/></div><module186.Loading spinning={this.logStatisticsStore.isLoading}><div className={module3405.statistics}><h3>{t.html("TOTAL_LOGS_TODAY", {
                    containers: this.logStatisticsStore.containersCount,
                    logs: this.logStatisticsStore.logsCount,
                    className: module3405.count
                })}</h3><p><module186.Icon name="clock"/>{t("START_TIME_VALUE", {
                    value: module243(this.logStatisticsStore.startTime).format("YYYY-MM-DD HH:mm:ss")
                })}</p></div></module186.Loading></div>;
            }
        },
        {
            key: "renderSearchBar",
            value: function() {
                const props = this.props;
                const { searchInputState, clustersOpts } = props;
                return <div className={module3405.searchBarContainer}>{globals.app.isMultiCluster && <module186.Select className={module3405.clusterSelector} value={searchInputState.cluster} options={clustersOpts} valueRenderer={this.clusterRenderer} onChange={this.onClusterChange}/>}<Module985 className={module3405.searchBar} onChange={this.onSearchParamsChange} params={searchInputState} dropDownItems={{
                    log_query: {
                        icon: "magnifier",
                        text: t("KEYWORD")
                    },
                    namespace_query: {
                        icon: "project",
                        text: t("PROJECT")
                    },
                    workload_query: {
                        icon: "backup",
                        text: t("WORKLOAD")
                    },
                    pod_query: {
                        icon: "pod",
                        text: t("POD")
                    },
                    container_query: {
                        icon: "docker",
                        text: t("CONTAINER")
                    }
                }}/></div>;
            }
        },
        {
            key: "renderRecentLogs",
            value: function() {
                return <div className={module3(module3405.card, module3405.recent)}><div className={module3405.recentSummary}><h2 className={module3405.count}>{this.histogramStore.logsCount}</h2><p>{t("CONTAINER_LOGS_12H")}</p></div><div className={module3405.chart}><Module1064 xKey="time" data={module14.toJS(this.histogramStore.histograms)} legend={[
                    [
                        "count",
                        t("CONTAINER_LOG_COUNT")
                    ]
                ]} interval={this.histogramStore.interval} onBarClick={this.selectedDurationParameter}/></div></div>;
            }
        },
        {
            key: "renderQueryItems",
            value: function() {
                const _this = this;
                return this.supportQueryParams.map((t)=><div className={module3(module3405.card, module3405.category)} key={t.key} data-query={t.key} onClick={_this.selectedParameter}><div className={module3405.icon}>{t.iconUrl ? <div><img src={t.iconUrl}/></div> : <module186.Icon name={t.icon} size={40}/>}</div><div className={module3405.desc}><h4>{t.title}</h4><p>{t.tips}</p></div></div>);
            }
        }
    ]);
    return r;
})(Component), h = module49(m.prototype, "selectedDurationParameter", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            let a;
            let r;
            let n;
            let l;
            const t_time = t.time;
            const o = t_time === undefined ? 0 : t_time;
            const interval = _this.histogramStore.interval;
            const searchInputState = _this.props.searchInputState;
            searchInputState.durationAlias = "";
            searchInputState.end = Math.ceil(o / 1000) + (a = interval.match(/(\d+)(\w+)/), ((n = (r = module96(a, 3))[1]) === undefined ? 0 : n) * ({
                s: 1,
                m: 60,
                h: 3600,
                d: 86400
            })[(l = r[2]) === undefined ? "s" : l]);
            searchInputState.start = Math.ceil(o / 1000);
            searchInputState.step = "1m";
            _this.props.formStepState.next();
        };
    }
}), p = m)) || p;
export default T;
