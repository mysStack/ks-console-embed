import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
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
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import Module793 from "./module-793.js";
import Module4649 from "./module-4649.js";
let o;
const y = inject("rootStore", "projectStore")(o = observer(o = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <div><Module793 icon="log" title={t("LOG_COLLECTION")} description={t("DISK_LOG_COLLECTION_DESC")} tips={this.tips}/>{globals.app.hasClusterExtensionModule(this.cluster, "whizard-logging") && !this.disabledLoggingSideCar && <Module4649 store={this.store} actions={this.enableActions}/>}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.projectStore;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "enableActions",
            get: function() {
                return globals.app.getActions({
                    module: "project-settings",
                    ...this.props.match.params,
                    project: this.namespace
                });
            }
        },
        {
            key: "disabledLoggingSideCar",
            get: function() {
                return !module63(globals.config.disabledLoggingSidecarNamespace) && globals.config.disabledLoggingSidecarNamespace.includes(this.namespace);
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("COLLECT_LOGS_ON_VOLUMES_Q"),
                        description: t("COLLECT_LOGS_ON_VOLUMES_A")
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default y;
