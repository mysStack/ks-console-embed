import "unpacked/module-15.js";
import "unpacked/module-29.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-58.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module833 from "unpacked/module-833.js";
import Module949 from "components/Cards/Monitoring/Controller/TimeSelector";
import Module1914 from "components/Graph";
import Module1982 from "unpacked/module-1982.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module961 from "stores/application/crd";
import { getMinuteValue, getTimeRange } from "stores/monitoring/base";
import module4991 from "unpacked/module-4991.js";
let u;
const R = inject("detailStore", "projectStore")(u = observer(u = ((Component_1)=>{
    module55(n, Component_1);
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
    })(n);
    function n(e) {
        let r;
        module36(this, n);
        r = a.call(this, e);
        r.fetchApplicationsData = function() {
            const params = r.props.match.params;
            const { workspace, namespace, name } = params;
            const o = {
                cluster: r.state.cluster.name,
                workspace,
                namespace,
                name
            };
            r.store.fetchDetail(o);
        };
        r.handleRefresh = function() {
            r.getData();
        };
        r.handleClusterChange = function(e) {
            r.setState({
                cluster: e
            }, module44(module41.mark(function* e() {
                yield r.fetchApplicationsData();
                yield r.getData();
            })));
        };
        r.handleAutoFetch = function() {
            const autoFetch = r.state.autoFetch;
            r.setState({
                autoFetch: !autoFetch
            }, function() {
                if (r.state.autoFetch) {
                    r.interval = setInterval(()=>{
                        r.getData();
                    }, 10000);
                } else if (r.interval) {
                    clearInterval(r.interval);
                }
            });
        };
        r.handleLookbackChange = function({ step, times, ...rest }) {
            const c = getTimeRange({
                step: getMinuteValue(step),
                times
            });
            const { start, end } = c;
            const i = rest.start || start;
            const s = rest.end || end;
            const duration = Math.floor(s - i);
            r.setState({
                duration
            }, function() {
                r.getData();
            });
        };
        r.operations = function() {
            const autoFetch = r.state.autoFetch;
            return <div className={module4991.operations}><Module949 className={module4991.timeSelect} onChange={r.handleLookbackChange} showStep={false} dark arrowIcon="chevron-down" step="1m" times={1}/><module186.Button type="flat" icon={autoFetch ? "pause" : "start"} onClick={r.handleAutoFetch}/><module186.Button type="flat" icon="refresh" onClick={r.handleRefresh}/></div>;
        };
        r.renderHeader = function() {
            return <div className={module4991.cardHeader}>{r.operations()}{t("TRAFFIC_MONITORING")}</div>;
        };
        r.renderMicroServiceTip = function(e) {
            const a = r.getServiceMeshEnabled(e);
            return <span className={module4991.tag}><module186.Icon name={a ? "success" : "exclamation"} color={a ? {
                primary: "#00aa72",
                secondary: "#90e0c5"
            } : {
                primary: "#d0a406",
                secondary: "#f0c426"
            }}/> <span>{a ? t("APPLICATION_GOVERNANCE_ENABLED") : t("APPLICATION_GOVERNANCE_DISABLED")}</span></span>;
        };
        const u = module26(r.props.projectStore, "detail.clusters", []);
        const s = u.find((e)=>module26(e, "configz.servicemesh")) || u[0] || {};
        r.state = {
            cluster: s,
            isGraphLoading: true,
            duration: 60,
            autoFetch: false
        };
        r.detailStore = e.detailStore;
        r.store = new module961;
        r.module = e.module;
        return r;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                await this.fetchApplicationsData();
                await this.getData();
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
            key: "getServiceMeshEnabled",
            value: function(e) {
                const t = globals.app.hasClusterModule(e.name, "servicemesh");
                return module26(this.detailStore, "detail.serviceMeshEnable", false) && t;
            }
        },
        {
            key: "getData",
            value: function() {
                const _this = this;
                const params = this.props.match.params;
                const { namespace, name } = params;
                const state = this.state;
                const { cluster, duration } = state;
                const u = this.getServiceMeshEnabled(cluster);
                if (cluster && u) {
                    this.setState({
                        isGraphLoading: true
                    });
                    this.store.fetchGraph({
                        cluster: cluster.name,
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
            }
        },
        {
            key: "renderContent",
            value: function() {
                const state = this.state;
                const { isGraphLoading, cluster } = state;
                const graph = this.store.graph;
                const { data, health } = graph;
                const u = this.getServiceMeshEnabled(cluster);
                if (cluster && u) {
                    if (module63(data) || module63(data.nodes)) {
                        if (isGraphLoading) {
                            return <module186.Loading className={module4991.loading}/>;
                        }
                        return <Module833 image="/assets/traffic-management.svg" title={t("NO_DATA")} desc={t("TRAFFIC_MONITORING_UNAVAILABLE_DESC")} actions=<module186.Button onClick={this.handleRefresh}>{t("REFRESH")}</module186.Button>/>;
                    }
                    return <div className={module4991.main}><Module1914 data={data} health={health} store={this.store} loading={isGraphLoading} onFetch={this.handleRefresh}/></div>;
                }
                return <Module833 image="/assets/traffic-management.svg" title={t("TRAFFIC_MANAGEMENT_UNAVAILABLE")} desc={t("APPLICATION_GOVERNANCE_NOT_ENABLED")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const clusters = this.props.projectStore.detail.clusters;
                return <div><Module1982 value={this.state.cluster} options={clusters} onChange={this.handleClusterChange} extra={this.renderMicroServiceTip}/>{this.renderHeader()}{this.renderContent()}</div>;
            }
        }
    ]);
    return n;
})(Component)) || u) || u;
export default R;
