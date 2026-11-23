import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-97.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module837 from "./module-837.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module186 from "./module-186.js";
import { compareQuotaAndResources, getContainersResources } from "./module-248.js";
import module1298 from "./module-1298.js";
const E = ((e)=>{
    module55(r, e);
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            checkResult: e.getCheckResult()
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(module837(e.containers, this.props.containers) && module837(e.initContainers, this.props.initContainers) && module837(e.leftQuota, this.props.leftQuota) && module837(e.replicas, this.props.replicas))) {
                    this.setState({
                        checkResult: this.getCheckResult()
                    });
                }
            }
        },
        {
            key: "getCheckResult",
            value: function() {
                const props = this.props;
                const { containers, initContainers, leftQuota, replicas } = props;
                const l = getContainersResources(containers, initContainers, replicas);
                return compareQuotaAndResources(leftQuota, l);
            }
        },
        {
            key: "renderOverCostMessage",
            value: function(e) {
                const a = module26(e, '["requests.cpu"].overcost');
                const r = module26(e, '["requests.memory"].overcost');
                const n = module26(e, '["limits.cpu"].overcost');
                const l = module26(e, '["limits.memory"].overcost');
                return module553.default.createElement(module553.default.Fragment, null, (a || r) && module553.default.createElement("div", {
                    className: module1298.message
                }, module553.default.createElement("span", null, t("RESOURCE_REQUESTS"), ":"), a && module553.default.createElement("span", null, "CPU ", t("COST"), " ", module26(e, '["requests.cpu"].cost', t("NO_LIMIT")), " (", t("PROJECT_REMAINING_QUOTAS"), ": ", module26(e, '["requests.cpu"].namespaceQuota', t("NO_REQUEST")), ", ", t("WORKSPACE_REMAINING_QUOTAS"), ": ", module26(e, '["requests.cpu"].workspaceQuota', t("NO_REQUEST")), ")"), r && module553.default.createElement("span", null, t("MEMORY"), " ", t("COST"), " ", module26(e, '["requests.memory"].cost', t("NO_LIMIT")), " (", t("PROJECT_REMAINING_QUOTAS"), ": ", module26(e, '["requests.memory"].namespaceQuota', t("NO_REQUEST")), ", ", t("WORKSPACE_REMAINING_QUOTAS"), ": ", module26(e, '["requests.memory"].workspaceQuota', t("NO_REQUEST")), ")")), (n || l) && module553.default.createElement("div", {
                    className: module1298.message
                }, module553.default.createElement("span", null, t("RESOURCE_LIMITS"), ":"), n && module553.default.createElement("span", null, "CPU ", t("COST"), " ", module26(e, '["limits.cpu"].cost', t("NO_LIMIT")), " (", t("PROJECT_REMAINING_QUOTAS"), ": ", module26(e, '["limits.cpu"].namespaceQuota', t("NO_LIMIT")), ", ", t("WORKSPACE_REMAINING_QUOTAS"), ": ", module26(e, '["limits.cpu"].workspaceQuota', t("NO_LIMIT")), ")"), l && module553.default.createElement("span", null, t("MEMORY"), " ", t("COST"), " ", module26(e, '["limits.memory"].cost', t("NO_LIMIT")), " (", t("PROJECT_REMAINING_QUOTAS"), ": ", module26(e, '["limits.memory"].namespaceQuota', t("NO_LIMIT")), ", ", t("WORKSPACE_REMAINING_QUOTAS"), ": ", module26(e, '["limits.memory"].workspaceQuota', t("NO_LIMIT")), ")")));
            }
        },
        {
            key: "renderQuotaMessage",
            value: function(e) {
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module1298.message
                }, module553.default.createElement("span", null, t("RESOURCE_REQUESTS"), ": CPU (", t("PROJECT_REMAINING_QUOTAS"), ":", module26(e, '["requests.cpu"].namespaceQuota', t("NO_REQUEST")), ",", t("WORKSPACE_REMAINING_QUOTAS"), ":", module26(e, '["requests.cpu"].workspaceQuota', t("NO_REQUEST")), ");"), module553.default.createElement("span", null, t("MEMORY"), " (", t("PROJECT_REMAINING_QUOTAS"), ":", module26(e, '["requests.memory"].namespaceQuota', t("NO_REQUEST")), ";", t("WORKSPACE_REMAINING_QUOTAS"), ":", module26(e, '["requests.memory"].workspaceQuota', t("NO_REQUEST")), ").")), module553.default.createElement("div", {
                    className: module1298.message
                }, module553.default.createElement("span", null, t("RESOURCE_LIMITS"), ": CPU (", t("PROJECT_REMAINING_QUOTAS"), ":", module26(e, '["limits.cpu"].namespaceQuota', t("NO_LIMIT")), ",", t("WORKSPACE_REMAINING_QUOTAS"), ":", module26(e, '["limits.cpu"].workspaceQuota', t("NO_LIMIT")), ");"), module553.default.createElement("span", null, t("MEMORY"), " (", t("PROJECT_REMAINING_QUOTAS"), ":", module26(e, '["limits.memory"].namespaceQuota', t("NO_LIMIT")), ";", t("WORKSPACE_REMAINING_QUOTAS"), ":", module26(e, '["limits.memory"].workspaceQuota', t("NO_LIMIT")), ").")));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { containers, initContainers } = props;
                const checkResult = this.state.checkResult;
                if (module63(containers) && module63(initContainers)) {
                    return null;
                }
                const l = Object.values(checkResult).some((e)=>(e.namespaceQuota || e.workspaceQuota) && e.overcost === "unset");
                const u = Object.values(checkResult).some((e)=>e.overcost === true);
                const type = (u || l) && this.hasLimitQuota ? "error" : "info";
                const title = u && this.hasLimitQuota ? t("INSUFFICENT_RESOURCES") : l && this.hasLimitQuota ? t("RESOURC_QUOTAS_UNSET") : t("REMAINING_QUOTAS");
                const message = (u || l) && this.hasLimitQuota ? this.renderOverCostMessage(checkResult) : this.renderQuotaMessage(checkResult);
                return module553.default.createElement(module186.Alert, {
                    className: "margin-b12",
                    type,
                    title,
                    message
                });
            }
        },
        {
            key: "hasLimitQuota",
            get: function() {
                const leftQuota = this.props.leftQuota;
                let t = false;
                Object.keys(leftQuota).forEach((a)=>{
                    t = Object.values(leftQuota[a]).some((e)=>!module159(e));
                });
                return t;
            }
        }
    ]);
    return r;
})(module553.Component);
export default E;
