import "./module-15.js";
import "./module-73.js";
import "./module-48.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import { isEdgeWizePage } from "./module-52.js";
import Module3897 from "./module-3897.js";
import Module1825 from "./module-1825.js";
let l;
const y = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
            key: "renderContainers",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const { name, cluster, containers, initContainers } = e;
                return <Module3897 prefix={this.prefix} isEdgeWize={isEdgeWizePage()} cluster={cluster} title={t("CONTAINER_PL")} containers={containers} initContainers={initContainers} podName={name}/>;
            }
        },
        {
            key: "renderVolumes",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const { volumes, containers } = e;
                if (module63(volumes)) {
                    return null;
                }
                return <Module1825 isEdgeWize={isEdgeWizePage()} volumes={volumes} containers={containers} loading={this.store.isLoading} match={this.props.match}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderContainers()}{this.renderVolumes()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderContent()}</div>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.props.detailStore.module;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.match.url.split("/").slice(0, -1).join("/");
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default y;
