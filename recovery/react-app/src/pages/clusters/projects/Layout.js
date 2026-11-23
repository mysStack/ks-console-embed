import "unpacked/module-15.js";
import "unpacked/module-30.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-62.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { Provider, inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import { renderRoutes } from "utils/router.config";
import module439 from "stores/project";
let u;
const v = inject("rootStore")(u = observer(u = ((e)=>{
    module55(n, e);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.store = new module439;
        t.init(e.match.params);
        return t;
    }
    module37(n, [
        {
            key: "init",
            value: async function(t) {
                this.store.initializing = true;
                await Promise.all([
                    this.store.fetchDetail(t),
                    this.props.rootStore.getRules(t)
                ]);
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
})(module553.Component)) || u) || u;
export default v;
