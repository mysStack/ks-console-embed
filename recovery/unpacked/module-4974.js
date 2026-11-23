import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import { trigger } from "./module-792.js";
import Module793 from "./module-793.js";
import Module1867 from "./module-1867.js";
let o;
const y = inject("rootStore", "projectStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
                const _this = this;
                return <><Module793 icon="loadbalancer" title={t("GATEWAY_SETTINGS")} description={t("PROJECT_GATEWAY_DESC")} tabs={this.tabs}/><div>{this.clusters.map((cluster)=><Module1867 key={cluster.name} cluster={cluster} {..._this.props} actions={_this.enableActions}/>)}</div></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.projectStore;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.store.detail.clusters;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "enableActions",
            get: function() {
                return globals.app.getActions({
                    module: "project-settings",
                    project: this.namespace,
                    fedproject: true
                });
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default y;
