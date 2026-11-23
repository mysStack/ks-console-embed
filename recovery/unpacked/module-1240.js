import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-192.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module793 from "./module-793.js";
import { isHasRadonDBAuthorized } from "./module-52.js";
import { trigger } from "./module-792.js";
import { inject, observer } from "./module-239.js";
import module961 from "./module-961.js";
import module26 from "./module-26.js";
let c;
const R = inject("rootStore", "projectStore")(c = observer(c = trigger(c = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.store = new module961;
        e.handleTabChange = function(t) {
            const params = e.props.match.params;
            const { workspace, cluster, namespace } = params;
            e.props.rootStore.routing.push(`/${workspace}/clusters/${cluster}/projects/${namespace}/applications/${t}`);
        };
        e.showDeploySampleApp = function() {
            const e_props = e.props;
            const { rootStore, projectStore, match } = e_props;
            e.trigger("crd.app.create", {
                sampleApp: "bookinfo",
                module: "applications",
                ...match.params,
                store: e.store,
                projectDetail: projectStore.detail,
                success: function(e) {
                    return rootStore.routing.push(e);
                }
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module793, {
                    ...this.props,
                    description: t("APPLICATIONS_DESC"),
                    tabs: globals.app.hasKSModule("openpitrix") ? this.tabs : undefined,
                    tips: this.tips
                });
            }
        },
        {
            key: "canDeployComposingApp",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                const n = globals.app.getActions({
                    workspace,
                    cluster,
                    project: namespace,
                    module: "deployments"
                }).includes("create");
                const o = globals.app.getActions({
                    workspace,
                    cluster,
                    project: namespace,
                    module: "services"
                }).includes("create");
                return n && o;
            }
        },
        {
            key: "tabs",
            get: function() {
                const type = this.props.type;
                const options = [];
                if (type !== "composing") {
                    options.push({
                        value: "template",
                        label: t("TEMPLATE_BASED_APP_PL")
                    });
                }
                const r = {
                    value: "database",
                    label: t("RADONDB_APPS")
                };
                if (isHasRadonDBAuthorized()) {
                    options.splice(1, 0, r);
                }
                if (module26(globals, "ksConfig.nativehelmrelease", false)) {
                    options.push({
                        value: "others",
                        label: t("OTHER_APP_PL")
                    });
                }
                return {
                    value: type,
                    onChange: this.handleTabChange,
                    options
                };
            }
        },
        {
            key: "tips",
            get: function() {
                if (this.props.type === "database") {
                    return [
                        {
                            title: t("WHAT_ARE_RADONDB_APPS"),
                            description: t("RADONDB_APPS_DESC")
                        }
                    ];
                }
                if (this.props.type === "template") {
                    return [
                        {
                            title: t("APP_TYPES_Q"),
                            description: t("APP_TYPES_A")
                        }
                    ];
                }
                return [
                    {
                        title: t("HOW_TO_USE_APP_GOVERN_Q"),
                        description: t("HOW_TO_USE_APP_GOVERN_A"),
                        operation: this.canDeployComposingApp ? module553.default.createElement(module186.Button, {
                            onClick: this.showDeploySampleApp
                        }, t("DEPLOY_SAMPLE_APP")) : null,
                        closable: false
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component)) || c) || c) || c;
export default R;
