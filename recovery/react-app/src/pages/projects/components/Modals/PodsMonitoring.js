import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module989 from "unpacked/module-989.js";
import Module1799 from "components/Modals/Monitoring/Controller";
import Module3860 from "pages/projects/components/Modals/PodsMonitoring/Resources";
import Module3861 from "pages/projects/components/Modals/PodsMonitoring/Charts";
import module1401 from "unpacked/module-1401.js";
let o;
let i;
let c;
const R = observer((c = i = ((Component_1)=>{
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
        r.getItemName = function(e) {
            return module26(e, "metric.pod", "-");
        };
        r.fetchResources = async (t)=>{
            await r.resourceStore.fetchSortedMetrics({
                metrics: [
                    r.metricType
                ],
                limit: 20,
                ...r.resourceParams,
                ...t
            });
        };
        r.fetchMonitorings = async (t)=>{
            let resources;
            resources = r.state.checked;
            await r.monitorStore.fetchMetrics({
                resources,
                metrics: [
                    r.metricType
                ],
                ...r.resourceParams,
                ...t
            });
        };
        r.fetchData = async function e() {
            let t;
            const a = arguments;
            t = a.length > 0 && a[0] !== undefined ? a[0] : {};
            r.params = t;
            await r.fetchResources();
            await r.fetchMonitorings(t);
        };
        r.handleChangeChecked = function(e) {
            r.setState({
                checked: e
            }, function() {
                const checked = r.state.checked;
                const t = r.monitorsData.map(r.getItemName);
                checked.some((e)=>!t.includes(e) && (r.fetchMonitorings({
                        pods: [
                            e
                        ],
                        more: true,
                        ...r.params
                    }), true));
            });
        };
        r.state = {
            checked: []
        };
        r.init();
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                module14.when(function() {
                    return !module63(_this.resourcesData) && module63(_this.state.checked);
                }, function() {
                    const defaultChecked = _this.props.defaultChecked;
                    const a = _this.resourcesData.map((t)=>_this.getItemName(t)).slice(0, defaultChecked);
                    _this.setState({
                        checked: a
                    });
                });
            }
        },
        {
            key: "init",
            value: function() {
                const e = new module989;
                this.resourceStore = e;
                this.monitorStore = e;
            }
        },
        {
            key: "renderCharts",
            value: function() {
                const _this = this;
                const config = this.props.config;
                const checked = this.state.checked;
                const r = [];
                checked.forEach((t)=>{
                    const a = _this.monitorsData.find((a)=>_this.getItemName(a) === t);
                    if (a) {
                        r.push(a);
                    }
                });
                return <Module3861 loading={this.monitorStore.isLoading} config={config} data={r}/>;
            }
        },
        {
            key: "renderResroucesList",
            value: function() {
                const config = this.props.config;
                const checked = this.state.checked;
                const resources = this.resources;
                const { page, total, isLoading } = resources;
                return <Module3860 loading={isLoading} config={config} name={this.name} page={page} total={total} checked={checked} data={this.resourcesData} onFetch={this.fetchResources} onChange={this.handleChangeChecked}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module1799 visible={visible} onFetch={this.fetchData} onCancel={onCancel} loading={isLoading} refreshing={isRefreshing} {...this.monitorOptions}><div className={module1401.content}>{this.renderResroucesList()}{this.renderCharts()}</div></Module1799>;
            }
        },
        {
            key: "monitorOptions",
            get: function() {
                return {
                    times: 50,
                    step: "5m"
                };
            }
        },
        {
            key: "name",
            get: function() {
                return "POD_PL";
            }
        },
        {
            key: "metrics",
            get: function() {
                return this.monitorStore.data;
            }
        },
        {
            key: "metricType",
            get: function() {
                return this.props.config.metricType;
            }
        },
        {
            key: "resourceParams",
            get: function() {
                const props = this.props;
                const e_module = props.module;
                return {
                    cluster: props.cluster,
                    namespace: props.namespace,
                    workload_kind: e_module,
                    workload_name: props.name
                };
            }
        },
        {
            key: "resources",
            get: function() {
                return module14.toJS(module26(this.resourceStore, "sort", {}));
            }
        },
        {
            key: "resourcesData",
            get: function() {
                return module26(this.resources, `data[${this.metricType}].data.result`, []);
            }
        },
        {
            key: "monitorsData",
            get: function() {
                return module26(this.monitorStore, `data[${this.metricType}].data.result`, []);
            }
        }
    ]);
    return a;
})(Component), i.propTypes = {
    visible: module1.bool,
    defaultChecked: module1.number,
    limit: module1.number,
    config: module1.object,
    onCancel: module1.func,
    module: module1.string,
    name: module1.string,
    namespace: module1.string,
    cluster: module1.string
}, i.defaultProps = {
    visible: false,
    defaultChecked: 5,
    limit: 10,
    config: {},
    module: "deployments",
    name: "",
    namespace: "",
    cluster: "",
    onCancel: function() {}
}, o = c)) || o;
export default R;
