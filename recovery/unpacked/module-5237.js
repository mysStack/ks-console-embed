import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { Provider, inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { renderRoutes } from "./module-317.js";
import module970 from "./module-970.js";
let i;
const v = inject("rootStore")(i = observer(i = ((e)=>{
    module55(n, e);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = a.call(this, e);
        t.store = new module970;
        t.init(e.match.params);
        return t;
    }
    module37(n, [
        {
            key: "init",
            value: async function(t) {
                this.store.initializing = true;
                await this.store.fetchDetail(t);
                this.store.initializing = false;
            }
        },
        {
            key: "render",
            value: function() {
                if (this.store.initializing) {
                    return module553.default.createElement(module186.Loading, {
                        className: "ks-page-loading"
                    });
                }
                return module553.default.createElement(Provider, {
                    projectStore: this.store
                }, renderRoutes(this.props.route.routes));
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.match.params.namespace;
            }
        }
    ]);
    return n;
})(module553.Component)) || i) || i;
export default v;
