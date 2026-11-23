import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import module1407 from "stores/monitoring/container";
import { observer } from "unpacked/module-239.js";
import module4616 from "unpacked/module-4616.js";
import module1837 from "unpacked/module-1837.js";
let o;
const y = {
    cpu_usage: "container_cpu_usage",
    memory_usage: "container_memory_usage_wo_cache"
};
const E = observer(o = ((e)=>{
    module55(a, e);
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
        r.fetchData = function() {
            const containerName = r.state.containerName;
            const params = r.props.match.params;
            const { cluster, namespace } = params;
            r.monitorStore.fetchMetrics({
                cluster,
                namespace,
                container: containerName,
                podName: r.podName,
                metrics: Object.values(y)
            });
        };
        r.handleContainerChange = function(containerName) {
            r.setState({
                containerName
            }, function() {
                r.fetchData();
            });
        };
        r.state = {
            podsId: "",
            containerName: ""
        };
        r.monitorStore = new module1407;
        return r;
    }
    module37(a, [
        {
            key: "getOptions",
            value: function(e) {
                if (e.length > 0) {
                    const t = [
                        "POD"
                    ];
                    e[0].nodes = e[0].nodes.filter((e)=>t.indexOf(e.label) === -1);
                }
                for(var a = e.length > 0 ? module61(e[0].nodes.map((e)=>({
                        label: e.label,
                        value: e.label,
                        icon: "docker"
                    }))) : [], r = [], n = {}, o = 0; o < a.length; o++){
                    if (!n[a[o].label]) {
                        r.push(a[o]);
                        n[a[o].label] = true;
                    }
                }
                return r;
            }
        },
        {
            key: "render",
            value: function() {
                const monitorStore = this.monitorStore;
                const { isLoading, isRefreshing } = monitorStore;
                const containerName = this.state.containerName;
                return module553.default.createElement("div", {
                    className: module4616.container
                }, module553.default.createElement(module186.Select, {
                    className: module4616.containerSelect,
                    options: this.getOptions(this.containers),
                    onChange: this.handleContainerChange,
                    value: containerName
                }), module553.default.createElement("div", null, module553.default.createElement(module1837, {
                    type: "cpu",
                    title: "CPU Usage(m)",
                    metrics: this.cpuMetric,
                    isLoading: isLoading || isRefreshing,
                    showDay: 172800
                }), module553.default.createElement(module1837, {
                    type: "memory",
                    title: "Memory Usage(Mi)",
                    metrics: this.memoryMetric,
                    isLoading: isLoading || isRefreshing,
                    showDay: 172800
                })));
            }
        },
        {
            key: "podName",
            get: function() {
                const e = module26(this.props.detail, "children", []).filter((e)=>e.label === "Pods");
                if (e.length > 0) {
                    return e[0].nodes[0].label;
                }
                return "";
            }
        },
        {
            key: "containers",
            get: function() {
                return module26(this.props.detail, "children", []).filter((e)=>e.label === "Containers");
            }
        },
        {
            key: "cpuMetric",
            get: function() {
                const containerName = this.state.containerName;
                const data = this.monitorStore.data;
                if (containerName === "") {
                    return [];
                }
                return module26(data, `${y.cpu_usage}.data.result`);
            }
        },
        {
            key: "memoryMetric",
            get: function() {
                const containerName = this.state.containerName;
                const data = this.monitorStore.data;
                if (containerName === "") {
                    return [];
                }
                return module26(data, `${y.memory_usage}.data.result`);
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                const podsId = module26(e.detail, "id", "");
                if (podsId !== t.podsId) {
                    return {
                        containerName: "",
                        podsId
                    };
                }
                return null;
            }
        }
    ]);
    return a;
})(module553.Component)) || o;
export default E;
