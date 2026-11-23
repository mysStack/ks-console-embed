import "./module-15.js";
import "./module-11.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import { renderRoutes } from "./module-317.js";
import module4443 from "./module-4443.js";
let o;
const h = inject("rootStore", "workspaceStore")(o = observer(o = ((Component_1)=>{
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
                return <div className={module4443.wrapper}><div className={module4443.main}>{renderRoutes(this.routes)}</div></div>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("HOW_TO_APPLY_MORE_CLUSTER_Q"),
                        description: t("HOW_TO_APPLY_MORE_CLUSTER_A")
                    }
                ];
            }
        },
        {
            key: "routes",
            get: function() {
                const props = this.props;
                const { route, workspaceStore } = props;
                const route_routes = route.routes;
                if (workspaceStore.isEdge) {
                    return route_routes.filter((e)=>e.name !== "clusters");
                }
                return route_routes;
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default h;
