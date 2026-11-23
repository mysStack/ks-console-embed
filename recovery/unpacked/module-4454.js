import "./module-15.js";
import "./module-5.js";
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
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import Module833 from "./module-833.js";
import module891 from "./module-891.js";
import Module4455 from "./module-4455.js";
let o;
const g = inject("rootStore", "workspaceStore")(o = observer(o = ((Component_1)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.monitorStore = new module891;
        e.state = {
            confirm: false,
            workspaces: {}
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                if (!globals.app.isMultiCluster) {
                    return null;
                }
                const e = module14.toJS(this.store.clusters);
                const { data, isLoading } = e;
                if (module63(data) && !isLoading) {
                    return <Module833 icon="cluster" title={t("NO_CLUSTER_AVAILABLE")} desc={t("WORKSPACE_NO_CLUSTER_TIP")}/>;
                }
                return data.map((cluster)=><Module4455 key={cluster.name} cluster={cluster}/>);
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.workspaceStore;
            }
        },
        {
            key: "module",
            get: function() {
                return "BaseInfo";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default g;
