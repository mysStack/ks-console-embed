import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
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
import "unpacked/module-57.js";
import "unpacked/module-58.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module244 from "unpacked/module-244.js";
import { joinSelector } from "utils/index";
import module186 from "unpacked/module-186.js";
import Module833 from "unpacked/module-833.js";
import Module1917 from "pages/projects/components/Cards/Tracing";
import Module1919 from "pages/projects/components/Modals/TracingDetail";
import Module1982 from "unpacked/module-1982.js";
import Module949 from "components/Cards/Monitoring/Controller/TimeSelector";
import { getMinuteValue, getTimeRange } from "stores/monitoring/base";
import module443 from "stores/service";
import module4993 from "unpacked/module-4993.js";
let o;
const A = inject("detailStore", "projectStore")(o = observer(o = ((Component_1)=>{
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
        n.fetchTracing = function() {
            const namespace = module14.toJS(n.detailStore.detail).namespace;
            const cluster = n.state.cluster;
            const r = n.getServiceMeshEnabled(cluster);
            if (cluster && r) {
                const a = {
                    namespace,
                    cluster: cluster.name,
                    service: n.state.serviceName,
                    ...n.state.query
                };
                n.resourceStore.fetchTracing(a);
            }
        };
        n.showDetailModal = function(selectItem) {
            n.setState({
                showDetailModal: true,
                selectItem
            });
        };
        n.hideDetailModal = function() {
            n.setState({
                showDetailModal: false,
                selectItem: {}
            });
        };
        n.handleClusterChange = function(e) {
            n.setState({
                cluster: e
            }, function() {
                n.getData();
            });
        };
        n.handleServiceChange = function(serviceName) {
            n.setState({
                serviceName
            }, function() {
                n.fetchTracing();
            });
        };
        n.handleRefresh = function() {
            n.fetchTracing();
        };
        n.handleLookbackChange = function({ step, times, ...rest }) {
            const o = getTimeRange({
                step: getMinuteValue(step),
                times
            });
            const { start, end } = o;
            const start_1 = 1000 * (rest.start || start);
            const end_1 = 1000 * (rest.end || end);
            n.setState(function(e) {
                return {
                    query: {
                        ...e.query,
                        start: start_1,
                        end: end_1
                    }
                };
            }, function() {
                return n.fetchTracing();
            });
        };
        n.handleLimitChange = function(limit) {
            n.setState(function(t) {
                return {
                    query: {
                        ...t.query,
                        limit
                    }
                };
            }, function() {
                return n.fetchTracing();
            });
        };
        n.serviceRenderer = function(e) {
            return <span>{t("SERVICE_VALUE", {
                value: e.label
            })}</span>;
        };
        n.renderMicroServiceTip = function(e) {
            const r = n.getServiceMeshEnabled(e);
            return <span className={module4993.tag}><module186.Icon name={r ? "success" : "exclamation"} color={r ? {
                primary: "#00aa72",
                secondary: "#90e0c5"
            } : {
                primary: "#d0a406",
                secondary: "#f0c426"
            }}/> <span>{r ? t("APPLICATION_GOVERNANCE_ENABLED") : t("APPLICATION_GOVERNANCE_DISABLED")}</span></span>;
        };
        n.detailStore = e.detailStore;
        n.resourceStore = n.detailStore.resourceStore;
        n.serviceStore = new module443;
        const o = module244.parse(location.search.slice(1));
        const u = module26(n.props.projectStore, "detail.clusters", []);
        const i = u.find((e)=>module26(e, "configz.servicemesh")) || u[0] || {};
        const s = getTimeRange({
            step: getMinuteValue("5m"),
            times: 60
        });
        const { start, end } = s;
        n.state = {
            cluster: i,
            showDetailModal: false,
            selectItem: {},
            serviceName: "",
            query: {
                limit: 5,
                start: 1000 * start,
                end: 1000 * end
            },
            defaultService: o.service
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
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
                const detail = this.detailStore.detail;
                const { selector, namespace } = detail;
                const cluster = this.state.cluster;
                const o = this.getServiceMeshEnabled(cluster);
                if (cluster && o && selector) {
                    const c = {
                        namespace,
                        cluster: cluster.name,
                        labelSelector: joinSelector(selector)
                    };
                    this.serviceStore.fetchListByK8s(c).then(()=>{
                        const t = module14.toJS(_this.serviceStore.list.data);
                        if (t.length > 0) {
                            _this.setState({
                                serviceName: t[0].name
                            }, function() {
                                return _this.fetchTracing();
                            });
                        }
                    });
                }
            }
        },
        {
            key: "renderOperations",
            value: function() {
                const query = this.state.query;
                return <div className={module4993.operations}><module186.Select options={this.services} value={this.state.serviceName} prefixIcon=<module186.Icon name="appcenter"/> onChange={this.handleServiceChange} valueRenderer={this.serviceRenderer}/><Module949 className={module4993.timeSelect} dark onChange={this.handleLookbackChange} showStep={false} arrowIcon="chevron-down"/><module186.Select value={query.limit} options={this.limitOptions} onChange={this.handleLimitChange}/><module186.Button type="flat" icon="refresh" onClick={this.handleRefresh}/></div>;
            }
        },
        {
            key: "renderTracing",
            value: function() {
                const cluster = this.state.cluster;
                const resourceStore = this.resourceStore;
                const { tracing, isTracingLoading } = resourceStore;
                const list = this.serviceStore.list;
                const { isLoading, data } = list;
                const l = this.getServiceMeshEnabled(cluster);
                if (cluster && l) {
                    if (!isLoading && module63(data)) {
                        return null;
                    }
                    return <Module1917 loading={isTracingLoading} data={tracing.data} operations={this.renderOperations()} onItemClick={this.showDetailModal}/>;
                }
                return <Module833 image="/assets/traffic-management.svg" title={t("TRACING_UNAVAILABLE")} desc={t("APPLICATION_GOVERNANCE_NOT_ENABLED")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const clusters = this.props.projectStore.detail.clusters;
                return <div><Module1982 value={this.state.cluster} options={clusters} onChange={this.handleClusterChange} extra={this.renderMicroServiceTip}/>{this.renderTracing()}<Module1919 detail={this.state.selectItem} visible={this.state.showDetailModal} onCancel={this.hideDetailModal}/></div>;
            }
        },
        {
            key: "limitOptions",
            get: function() {
                return [
                    {
                        label: t("LAST_NUM_RECORDS", {
                            num: 5
                        }),
                        value: 5
                    },
                    {
                        label: t("LAST_NUM_RECORDS", {
                            num: 10
                        }),
                        value: 10
                    },
                    {
                        label: t("LAST_NUM_RECORDS", {
                            num: 20
                        }),
                        value: 20
                    },
                    {
                        label: t("LAST_NUM_RECORDS", {
                            num: 50
                        }),
                        value: 50
                    }
                ];
            }
        },
        {
            key: "services",
            get: function() {
                return this.serviceStore.list.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        type: e.type
                    }));
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default A;
