import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-84.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module96 from "./module-96.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import { ICON_TYPES } from "./module-72.js";
import module1132 from "./module-1132.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import Module4448 from "./module-4448.js";
import module4450 from "./module-4450.js";
let l;
const O = inject("rootStore")(l = observer(l = ((Component_1)=>{
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
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.fetchData = async function e() {
            t.monitorStore.fetchStatistics(t.workspace);
        };
        t.getLink = function(module) {
            const r = globals.app.getActions({
                module,
                workspace: t.workspace
            });
            if (r.includes("view") || r.includes("manage")) {
                return `/workspaces/${t.workspace}/${module}`;
            }
            return null;
        };
        t.getMetrics = function() {
            const e = module14.toJS(t.monitorStore.statistics.data);
            const r = {};
            Object.entries(e).forEach((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const n = t[1];
                r[a] = module26(n, "data.result[0].value[1]", 0);
            });
            return r;
        };
        t.workspace = e.workspace;
        t.monitorStore = new module1132;
        t.fetchData();
        return t;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const isLoading = this.monitorStore.statistics.isLoading;
                const r = this.getMetrics();
                return <module186.Loading spinning={isLoading}><Module802 className={module4450.card}><module186.Columns><module186.Column><Module4448 icon={ICON_TYPES.projects} desc={r.workspace_namespace_count === "1" ? t("PROJECT") : t("PROJECT_PL")} title={r.workspace_namespace_count} url={this.getLink("projects")} size="large"/></module186.Column>{globals.app.hasKSModule("devops") && <module186.Column><Module4448 icon={ICON_TYPES.devops} desc={r.workspace_devops_project_count === "1" ? t("DEVOPS_PROJECT_TCAP") : t("DEVOPS_PROJECT_TCAP_PL")} title={r.workspace_devops_project_count} url={this.getLink("devops")} size="large"/></module186.Column>}<module186.Column><Module4448 icon={ICON_TYPES.roles} desc={r.workspace_role_count === "1" ? t("ROLE") : t("ROLE_PL")} title={r.workspace_role_count} url={this.getLink("roles")} size="large"/></module186.Column><module186.Column><Module4448 icon={ICON_TYPES.members} desc={r.workspace_member_count === "1" ? t("WORKSPACE_MEMBER_TCAP") : t("WORKSPACE_MEMBER_TCAP_PL")} title={r.workspace_member_count} url={this.getLink("members")} size="large"/></module186.Column></module186.Columns></Module802></module186.Loading>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return a;
})(Component)) || l) || l;
export default O;
