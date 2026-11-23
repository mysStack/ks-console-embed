import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-193.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module136 from "unpacked/module-136.js";
import module1024 from "unpacked/module-1024.js";
import module186 from "unpacked/module-186.js";
import { getAreaChartOps } from "utils/monitoring";
import module4831 from "unpacked/module-4831.js";
import { SimpleArea } from "components/Charts/index";
import { withRouter } from "unpacked/module-47.js";
import module14 from "unpacked/module-14.js";
import Module4832 from "unpacked/module-4832.js";
import { RadonDBAppId } from "unpacked/module-817.js";
import module4834 from "unpacked/module-4834.js";
import module4845 from "unpacked/module-4845.js";
import { mergerValues } from "unpacked/module-4846.js";
let n;
let o;
function N(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
n = inject("detailStore");
const I = withRouter(o = n(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.fetchData = function(e) {
            r.step = e.step;
            r.times = e.times;
            r.monitorStore.fetchMetrics({
                config: r.getConfig(),
                metrics: [],
                fillZero: false,
                cluster: r.cluster,
                namespace: r.namespace,
                ...e
            });
        };
        r.getMonitoringCfgs = function() {
            return r.chartConfig.getMonitoringCfgs(r.metrics);
        };
        r.renderSimpleArea = function(e) {
            const t = r.props.columns || 1;
            for(var a = Math.ceil(e.length / t), n = [], o = 0; o < a; o++){
                const s = [];
                for(let l = 0; l < t; l++){
                    const i = e[o + l];
                    i.dot = i.dot ? i.dot : 0;
                    const u = getAreaChartOps(i);
                    s.push(<module186.Column><SimpleArea showAll key={u.title} width="100%" isTranslate={false} {...u}/></module186.Column>);
                }
                n.push(<module186.Columns>{s}</module186.Columns>);
            }
            return n;
        };
        r.monitorStore = new module4831({
            cluster: r.cluster
        });
        r.step = "10m";
        r.times = 30;
        return r;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(e.monitorDbNode === this.props.monitorDbNode && e.nodeRole === this.props.nodeRole)) {
                    this.fetchData({
                        step: this.step,
                        times: this.times
                    });
                }
            }
        },
        {
            key: "getConfig",
            value: function() {
                const props = this.props;
                const { monitorDbNode, detailStore } = props;
                return this.chartConfig.getConfig(detailStore, monitorDbNode);
            }
        },
        {
            key: "render",
            value: function() {
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const r = this.getMonitoringCfgs();
                const props = this.props;
                const { exitHandler, customSelect } = props;
                return <Module4832 onFetch={this.fetchData} loading={isLoading} refreshing={isRefreshing} closeBtn={exitHandler ? <module186.Button className={module4845.button} type="control" icon="close" iconType="light" onClick={exitHandler}/> : null} step={this.step} times={this.times} isEmpty={module63(this.metrics)} customSelect={customSelect}>{this.renderSimpleArea(r)}</Module4832>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "metrics",
            get: function() {
                const e = module136(module26(module14.toJS(this.monitorStore), "data", {}));
                Object.values(e).map((e)=>{
                    const t = module26(e, "data.result", []);
                    if (module1024(t)) {
                        const a = mergerValues(t);
                        module74(e, "data.result", [
                            a
                        ]);
                    }
                    return e;
                });
                return e;
            }
        },
        {
            key: "namespace",
            get: function() {
                const detailStore = this.props.detailStore;
                return module26(detailStore, "detail.namespace", "");
            }
        },
        {
            key: "chartConfig",
            get: function() {
                const { detailStore, monitorDbNode = {}, nodeRole } = this.props;
                if (module26(monitorDbNode, "isPredixy")) {
                    return module4834.predixy;
                }
                let o = "";
                switch(module26(detailStore, "detail.app_id")){
                    case RadonDBAppId.ClickHouse:
                        o = "ck";
                        break;
                    case RadonDBAppId.PostgreSQL:
                        o = `pg.${monitorDbNode.nodeRole || "postgresql"}`;
                        return module26(module4834, o);
                    case RadonDBAppId.MySQL:
                        o = "mysql";
                        break;
                    case RadonDBAppId.RedisCluster:
                    case RadonDBAppId.RedisSentinel:
                        o = "redis";
                        break;
                    case RadonDBAppId.MongoDB:
                        o = "mongo";
                        break;
                    case RadonDBAppId.Elasticsearch:
                        o = "eck.pod";
                        break;
                    case RadonDBAppId.Kafka:
                        o = `${nodeRole}.pod`;
                        break;
                    case RadonDBAppId.OpenSearch:
                        const c = module26(monitorDbNode, "name");
                        o = /^oslst/.test(c) ? "opensearch.logstash" : "opensearch.pod";
                }
                if (module63(monitorDbNode)) {
                    o = o.replace(".pod", ".main");
                }
                return module26(module4834, o);
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default I;
