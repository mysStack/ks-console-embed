import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module791 from "components/Base/Text";
import module1068 from "pages/projects/components/JobStatus";
import module318 from "stores/workload/index";
import module325 from "stores/websocket";
import module1040 from "stores/container";
import { PATTERN_UTC_TIME } from "utils/constants";
import { CLUSTER_CREATING_STEPS } from "pages/clusters/containers/Overview/Initializing/KubeKeyCluster/constants";
import module3709 from "unpacked/module-3709.js";
let u;
const D = observer(u = ((e)=>{
    module55(n, e);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.watchLogs = function() {
            const e = module26(t.props.detail, "status.jobInfo");
            t.containerStore.watchLogs({
                namespace: e.namespace,
                podName: module26(e, "pods[0].name"),
                container: module26(e, "pods[0].containers[0].name"),
                timestamps: true,
                follow: true
            }, t.scrollToBottom);
        };
        t.watchJob = function() {
            const e = module26(t.props.detail, "status.jobInfo");
            const r = t.workloadStore.getWatchUrl(e);
            if (r) {
                t.websocket.watch(r);
                t.jobDisposer = module14.reaction(function() {
                    return t.websocket.message;
                }, function(e) {
                    if (!(e.type !== "MODIFIED" && e.type !== "ADDED")) {
                        t.workloadStore.detail = t.workloadStore.mapper(module14.toJS(e.object));
                    }
                });
            }
        };
        t.handleToggle = function() {
            t.setState(function(e) {
                return {
                    showContent: !e.showContent
                };
            });
        };
        t.scrollToBottom = function() {
            const current = t.logRef.current;
            if (current) {
                current.scrollTop = current.scrollHeight;
            }
        };
        t.state = {
            showContent: false
        };
        t.logRef = module553.default.createRef();
        t.workloadStore = new module318("jobs");
        t.containerStore = new module1040;
        t.websocket = new module325;
        t.jobNameDisposer = module14.when(function() {
            return !module63(module26(t.props.detail, "status.jobInfo.name"));
        }, function() {
            return t.watchJob();
        });
        t.podNameDisposer = module14.when(function() {
            return !module63(module26(t.props.detail, "status.jobInfo.pods[0].name"));
        }, function() {
            return t.watchLogs();
        });
        return t;
    }
    module37(n, [
        {
            key: "componentWillUnmount",
            value: function() {
                this.websocket.close();
                if (this.jobDisposer) {
                    this.jobDisposer();
                }
                if (this.jobNameDisposer) {
                    this.jobNameDisposer();
                }
                if (this.podNameDisposer) {
                    this.podNameDisposer();
                }
                this.containerStore.stopWatchLogs();
            }
        },
        {
            key: "renderTitle",
            value: function() {
                const showContent = this.state.showContent;
                const r = module26(this.props.detail, "status.Conditions", []);
                const n = CLUSTER_CREATING_STEPS[Math.max(r.length - 1, 0)];
                const a = module14.toJS(this.workloadStore.detail);
                const title = a.startTime ? module553.default.createElement(module1068, {
                    data: a,
                    module: "jobs"
                }) : "-";
                return module553.default.createElement("div", {
                    className: module3(module3709.title, module31({}, module3709.isOpen, showContent)),
                    onClick: this.handleToggle
                }, module553.default.createElement(module791, {
                    icon: "log",
                    title: t("LOGS"),
                    description: t("CURRENT_STEP", {
                        step: t(n.toUpperCase().replace(/\s+/g, "_"))
                    })
                }), module553.default.createElement(module791, {
                    title,
                    description: t("STATUS")
                }));
            }
        },
        {
            key: "renderContent",
            value: function() {
                const data = this.containerStore.logs.data;
                const showContent = this.state.showContent;
                const n = module63(data) ? t("FETCHING_LOGS") : data;
                const a = String(n).replace(/\\r\\n/g, "\n").split("\n");
                return module553.default.createElement("div", {
                    className: module3(module3709.content, module31({}, module3709.visible, showContent))
                }, module553.default.createElement("div", {
                    className: module3709.logs,
                    ref: this.logRef
                }, a.map((e, t)=>{
                    const r = e.match(PATTERN_UTC_TIME);
                    const key = r ? r[0] : t;
                    const __html = r ? e.replace(r[0], "") : e;
                    return module553.default.createElement("p", {
                        key,
                        dangerouslySetInnerHTML: {
                            __html
                        }
                    });
                })));
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", {
                    className: module3709.wrapper
                }, this.renderTitle(), this.renderContent());
            }
        }
    ]);
    return n;
})(module553.Component)) || u;
export default D;
