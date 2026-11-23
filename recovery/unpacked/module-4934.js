import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { inject, observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import module438 from "./module-438.js";
import { renderRoutes } from "./module-317.js";
let o;
const h = inject("rootStore", "projectStore")(o = observer(o = ((e)=>{
    module55(r, e);
    var t = ((e)=>{
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
    })(r);
    function r(e) {
        let a;
        module36(this, r);
        a = t.call(this, e);
        a.state = {
            fetchFin: false
        };
        a.handleChange = function(e) {
            return a.routing.push(e);
        };
        a.store = new module438;
        return a;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const route = this.props.route;
                return module553.default.createElement(module553.default.Fragment, null, renderRoutes(route.routes));
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return r;
})(module553.Component)) || o) || o;
export default h;
