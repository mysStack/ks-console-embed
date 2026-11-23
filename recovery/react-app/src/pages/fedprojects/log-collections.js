import "unpacked/module-15.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import Module793 from "unpacked/module-793.js";
import Module4972 from "unpacked/module-4972.js";
let o;
const v = inject("rootStore", "projectStore")(o = observer(o = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const name = this.store.detail.name;
                return <div><Module793 icon="log" title={t("LOG_COLLECTION")} description={t("DISK_LOG_COLLECTION_DESC")} tips={this.tips}/>{!this.disabledLoggingSideCar && <Module4972 namespace={name} actions={this.enableActions}/>}</div>;
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
                    project: this.namespace,
                    fedproject: true,
                    cluster: this.cluster
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
    return a;
})(Component)) || o) || o;
export default v;
