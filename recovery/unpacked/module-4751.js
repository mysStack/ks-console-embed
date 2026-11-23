import "./module-15.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-109.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module833 from "./module-833.js";
import Module949 from "./module-949.js";
import { getMinuteValue, getTimeRange } from "./module-847.js";
import Module1914 from "./module-1914.js";
import module4773 from "./module-4773.js";
let o;
const b = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
        n.handleRefresh = function() {
            n.getData();
        };
        n.handleAutoFetch = function() {
            const autoFetch = n.state.autoFetch;
            n.setState({
                autoFetch: !autoFetch
            }, function() {
                if (n.state.autoFetch) {
                    n.interval = setInterval(()=>{
                        n.getData();
                    }, 10000);
                } else if (n.interval) {
                    clearInterval(n.interval);
                }
            });
        };
        n.handleLookbackChange = function({ step, times, ...rest }) {
            const o = getTimeRange({
                step: getMinuteValue(step),
                times
            });
            const { start, end } = o;
            const i = rest.start || start;
            const u = rest.end || end;
            const duration = Math.floor(u - i);
            n.setState({
                duration
            }, function() {
                n.getData();
            });
        };
        n.operations = function() {
            const autoFetch = n.state.autoFetch;
            return <div className={module4773.operations}><Module949 className={module4773.timeSelect} onChange={n.handleLookbackChange} showStep={false} dark arrowIcon="chevron-down" step="1m" times={1}/><module186.Button type="flat" icon={autoFetch ? "pause" : "start"} onClick={n.handleAutoFetch}/><module186.Button type="flat" icon="refresh" onClick={n.handleRefresh}/></div>;
        };
        n.renderHeader = function() {
            return <div className={module4773.cardHeader}>{n.operations()}{t("TRAFFIC_MONITORING")}</div>;
        };
        n.state = {
            isGraphLoading: true,
            duration: 60,
            autoFetch: false
        };
        n.store = e.detailStore;
        n.module = e.module;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.unmount = true;
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }
        },
        {
            key: "getData",
            value: function() {
                const _this = this;
                const params = this.props.match.params;
                const { cluster, namespace, name } = params;
                const duration = this.state.duration;
                this.setState({
                    isGraphLoading: true
                });
                this.store.fetchGraph({
                    cluster,
                    namespace,
                    app: name,
                    duration
                }).then(()=>{
                    if (!_this.unmount) {
                        _this.setState({
                            isGraphLoading: false
                        });
                    }
                });
            }
        },
        {
            key: "renderContent",
            value: function() {
                const isGraphLoading = this.state.isGraphLoading;
                const graph = this.store.graph;
                const { data, health } = graph;
                if (module63(data) || module63(data.nodes)) {
                    if (isGraphLoading) {
                        return <module186.Loading className={module4773.loading}/>;
                    }
                    return <Module833 className={module4773.emptyList} image="/assets/traffic-management.svg" title={t("NO_DATA")} desc={t("TRAFFIC_MONITORING_UNAVAILABLE_DESC")}/>;
                }
                return <div className={module4773.main}><Module1914 className={module4773.graph} data={data} health={health} store={this.store} loading={isGraphLoading} onFetch={this.handleRefresh}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <>{this.renderHeader()}{this.renderContent()}</>;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default b;
