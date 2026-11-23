import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { joinSelector } from "utils/index";
import module186 from "unpacked/module-186.js";
import Module1917 from "pages/projects/components/Cards/Tracing";
import Module1919 from "pages/projects/components/Modals/TracingDetail";
import Module949 from "components/Cards/Monitoring/Controller/TimeSelector";
import { getMinuteValue, getTimeRange } from "stores/monitoring/base";
import module443 from "stores/service";
import module4786 from "unpacked/module-4786.js";
let o;
const k = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
        n.fetchTracing = function() {
            const e = module14.toJS(n.detailStore.detail);
            const t = {
                cluster: e.cluster,
                namespace: e.namespace,
                service: n.state.serviceName,
                ...n.state.query
            };
            n.detailStore.fetchTracing(t);
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
        n.detailStore = e.detailStore;
        n.serviceStore = new module443;
        const o = getTimeRange({
            step: getMinuteValue("5m"),
            times: 60
        });
        const { start, end } = o;
        n.state = {
            showDetailModal: false,
            selectItem: {},
            serviceName: "",
            query: {
                limit: 5,
                start: 1000 * start,
                end: 1000 * end
            }
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.disposer = module14.when(function() {
                    return !module63(_this.detailStore.detail);
                }, function() {
                    return _this.getData();
                });
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
            key: "getData",
            value: function() {
                const _this = this;
                const t = module14.toJS(this.detailStore.detail);
                const { selector, cluster, namespace } = t;
                if (selector) {
                    const o = {
                        cluster,
                        namespace,
                        labelSelector: joinSelector(selector)
                    };
                    this.serviceStore.fetchListByK8s(o).then(()=>{
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
                return <div className={module4786.operations}><module186.Select options={this.services} value={this.state.serviceName} prefixIcon=<module186.Icon name="appcenter"/> onChange={this.handleServiceChange} valueRenderer={this.serviceRenderer}/><Module949 className={module4786.timeSelect} onChange={this.handleLookbackChange} showStep={false} dark arrowIcon="chevron-down"/><module186.Select value={query.limit} options={this.limitOptions} onChange={this.handleLimitChange}/><module186.Button type="flat" icon="refresh" onClick={this.handleRefresh}/></div>;
            }
        },
        {
            key: "renderTracing",
            value: function() {
                const detailStore = this.detailStore;
                const { tracing, isTracingLoading } = detailStore;
                const list = this.serviceStore.list;
                const { isLoading, data } = list;
                if (!isLoading && module63(data)) {
                    return null;
                }
                return <Module1917 loading={isTracingLoading} data={tracing.data} operations={this.renderOperations()} onItemClick={this.showDetailModal}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderTracing()}<Module1919 detail={this.state.selectItem} visible={this.state.showDetailModal} onCancel={this.hideDetailModal}/></div>;
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
    return r;
})(Component)) || o) || o;
export default k;
