import "./module-15.js";
import "./module-5.js";
import "./module-828.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module801 from "./module-801.js";
import module186 from "./module-186.js";
import module816 from "./module-816.js";
import module805 from "./module-805.js";
import { getWorkloadStatus } from "./module-434.js";
import module325 from "./module-325.js";
import module1252 from "./module-1252.js";
let c;
const b = observer(c = ((e)=>{
    module55(r, e);
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
    })(r);
    function r(...n_1) {
        let e;
        module36(this, r);
        e = t.call(this, ...n_1);
        e.websocket = new module325;
        e.state = {
            replicas: module26(e.props, "workload.podNums", 0)
        };
        e.triggerReplicasChange = module801(module44(module41.mark(function* t() {
            let r;
            let a;
            let n;
            r = e.props;
            a = r.cluster;
            n = r.onReplicasChange;
            yield n(a.name, e.state.replicas);
        })), 1000);
        e.handleAdd = function() {
            e.setState(function(e) {
                return {
                    replicas: e.replicas + 1
                };
            }, e.triggerReplicasChange);
        };
        e.handleSubStract = function() {
            e.setState(function({ replicas }) {
                return {
                    replicas: Math.max(replicas - 1, 0)
                };
            }, e.triggerReplicasChange);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (module26(this.props.workload, "name") !== module26(e.workload, "name")) {
                    this.setState({
                        replicas: module26(this.props, "workload.podNums", 0)
                    });
                    this.unInitWebsocket();
                    this.initWebsocket();
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.initWebsocket();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.unInitWebsocket();
            }
        },
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const props = this.props;
                const { workload, store } = props;
                const n = store.resourceStore.getWatchUrl(workload);
                if (workload && n) {
                    this.websocket.watch(n);
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(e) {
                        if (e.type === "MODIFIED") {
                            store.updateResource(workload.cluster, e.object);
                        }
                    });
                }
            }
        },
        {
            key: "unInitWebsocket",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
                this.websocket.close();
            }
        },
        {
            key: "render",
            value: function() {
                const { cluster, workload = {}, store, onReplicasChange } = this.props;
                const replicas = this.state.replicas;
                const workload_podNums = workload.podNums;
                const l = workload_podNums === undefined ? 0 : workload_podNums;
                const workload_readyPodNums = workload.readyPodNums;
                const s = workload_readyPodNums === undefined ? 0 : workload_readyPodNums;
                const f = l - s;
                const d = getWorkloadStatus(workload, store.resourceStore.module);
                const { status, reason } = d;
                return module553.default.createElement("div", {
                    className: module1252.cluster
                }, module553.default.createElement(module816, {
                    cluster,
                    tagClass: "float-right",
                    theme: "light"
                }), module553.default.createElement("div", {
                    className: module1252.bottom
                }, module553.default.createElement("div", {
                    className: module1252.replicas
                }, module553.default.createElement("span", {
                    className: module1252.readyNum
                }, s), " /", " ", module553.default.createElement("span", {
                    className: module1252.readyNum
                }, replicas), " ", reason && module553.default.createElement(module805, {
                    status,
                    data: workload
                })), module553.default.createElement("div", {
                    className: module1252.pods
                }, Array(Math.min(l, 6)).fill("").map((e, t)=>module553.default.createElement("img", {
                        key: t,
                        src: t < f ? "/assets/pod-waiting.svg" : "/assets/pod-ready.svg",
                        alt: ""
                    })), l > 6 && module553.default.createElement(module186.Icon, {
                    name: "more",
                    className: module1252.more,
                    size: 28,
                    color: f > 6 ? {
                        primary: "#f5a623",
                        secondary: "#f5a623"
                    } : {
                        primary: "#479e88",
                        secondary: "#479e88"
                    }
                })), onReplicasChange && module553.default.createElement("div", {
                    className: module1252.control
                }, module553.default.createElement(module186.Icon, {
                    name: "add",
                    type: "light",
                    size: 24,
                    clickable: true,
                    onClick: this.handleAdd
                }), module553.default.createElement(module186.Icon, {
                    name: "substract",
                    type: "light",
                    size: 24,
                    clickable: true,
                    onClick: this.handleSubStract
                }))));
            }
        }
    ]);
    return r;
})(module553.Component)) || c;
export default b;
