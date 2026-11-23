import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module243 from "./module-243.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module985 from "./module-985.js";
import Module1064 from "./module-1064.js";
import module1758 from "./module-1758.js";
import { dropDownItems, getSecond, supportQueryParams } from "./module-1759.js";
import module3484 from "./module-3484.js";
let l;
let u;
let o;
const N = observer((u = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.eventSearchStore = new module1758;
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
        module65(e, "selectedDurationParameter", o, module88(e));
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
                this.eventSearchStore.fetchTodayHistogram({
                    cluster
                });
                this.eventSearchStore.fetchHistogram({
                    cluster
                });
            }
        },
        {
            key: "render",
            value: function() {
                return <div><div className={module3484.pane}>{this.renderBanner()}</div><div className={module3484.tips}><div className={module3484.pane}>{this.renderSearchBar()}<h3 className={module3484.rule}>{t("QUERYING_RULES")}</h3>{this.renderRecentLogs()}{this.renderQueryItems()}</div></div></div>;
            }
        },
        {
            key: "renderBanner",
            value: function() {
                const { histogramTodayData = {}, isLoading } = this.eventSearchStore;
                return <div className={module3484.banner}><div className={module3484.illustration}><img src="/assets/log-statistics.svg" alt="log-statistics"/></div><module186.Loading spinning={isLoading}><div className={module3484.statistics}><h3>{histogramTodayData.events ? t.html("TOTAL_EVENTS_TODAY", {
                    events: histogramTodayData.events,
                    className: module3484.count
                }) : t("NO_RESOURCE_EVENTS_TODAY")}</h3>{histogramTodayData.events ? <p><module186.Icon name="clock"/>{t("START_TIME_VALUE", {
                    value: module243(new Date).format("YYYY-MM-DD HH:mm:ss")
                })}</p> : null}</div></module186.Loading></div>;
            }
        },
        {
            key: "renderSearchBar",
            value: function() {
                const props = this.props;
                const { searchInputState, clustersOpts } = props;
                return <div className={module3484.searchBarContainer}>{globals.app.isMultiCluster && <module186.Select className={module3484.clusterSelector} value={searchInputState.cluster} options={clustersOpts} valueRenderer={this.clusterRenderer} onChange={this.onClusterChange}/>}<Module985 className={module3484.searchBar} onChange={this.onSearchParamsChange} params={searchInputState} dropDownItems={dropDownItems}/></div>;
            }
        },
        {
            key: "renderRecentLogs",
            value: function() {
                const { isLoading, histogramData = {}, logsCount, interval } = this.eventSearchStore;
                return <module186.Loading spinning={isLoading}><div className={module3(module3484.card, module3484.recent)}><div className={module3484.recentSummary}><h2 className={module3484.count}>{logsCount || 0}</h2><p>{t("RESOURCE_EVENTS_12H")}</p></div><div className={module3484.chart}><Module1064 xKey="time" data={module14.toJS(histogramData.buckets || [])} legend={[
                    [
                        "count",
                        t("RESOURCE_EVENT_COUNT")
                    ]
                ]} interval={interval || "30m"} onBarClick={this.selectedDurationParameter}/></div></div></module186.Loading>;
            }
        },
        {
            key: "renderQueryItems",
            value: function() {
                const _this = this;
                return supportQueryParams.map((t)=><div className={module3(module3484.card, module3484.category)} key={t.key} data-query={t.key} onClick={_this.selectedParameter}><div className={module3484.icon}>{t.iconUrl ? <div><img src={t.iconUrl}/></div> : <module186.Icon name={t.icon} size={40}/>}</div><div className={module3484.desc}><h4>{t.title}</h4><p>{t.tips}</p></div></div>);
            }
        }
    ]);
    return r;
})(Component), o = module49(u.prototype, "selectedDurationParameter", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ time = 0 }) {
            const interval = _this.eventSearchStore.interval;
            const searchInputState = _this.props.searchInputState;
            searchInputState.durationAlias = "";
            searchInputState.end = Math.ceil(time / 1000) + getSecond(interval);
            searchInputState.start = Math.ceil(time / 1000);
            searchInputState.step = "1m";
            _this.onSearchParamsChange();
        };
    }
}), l = u)) || l;
export default N;
