import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module801 from "unpacked/module-801.js";
import module26 from "unpacked/module-26.js";
import module242 from "unpacked/module-242.js";
import { renderRoutes } from "utils/router.config";
let u;
const _ = inject("rootStore", "clusterStore")(u = observer(u = ((e)=>{
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r(...a) {
        let e;
        module36(this, r);
        e = t.call(this, ...a);
        e.enterCluster = async (r)=>e.routing.push(`/clusters/${r}/overview`);
        e.fetchConfigz = module801(module44(module41.mark(function* t() {
            if (yield e.props.clusterStore.fetchClusterConfigz({
                cluster: e.cluster
            })) {
                globals.app.getClusterNavs(e.cluster);
                module242(globals, `need_rebuild_${e.cluster}_nav`);
                e.forceUpdate();
            }
        })), 3000);
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function() {
                if (module26(globals, `need_rebuild_${this.cluster}_nav`, false)) {
                    this.fetchConfigz();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const route = this.props.route;
                return module553.default.createElement(module553.default.Fragment, null, renderRoutes(route.routes));
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
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
})(module553.Component)) || u) || u;
export default _;
