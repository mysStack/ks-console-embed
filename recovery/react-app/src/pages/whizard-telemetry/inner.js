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
import module1843 from "unpacked/module-1843.js";
import module3 from "unpacked/module-3.js";
import { Nav } from "components/Layout/index";
import module801 from "unpacked/module-801.js";
import module26 from "unpacked/module-26.js";
import module242 from "unpacked/module-242.js";
import { inject, observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import { showNameAndAlias } from "utils/index";
import { renderRoutes } from "utils/router.config";
import module4077 from "unpacked/module-4077.js";
let l;
const R = inject("rootStore", "clusterStore")(l = observer(l = ((e)=>{
    module55(a, e);
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
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.enterCluster = async (a)=>e.routing.push(`/whizard-telemetry/${a}/overview`);
        e.fetchConfigZ = module801(module44(module41.mark(function* t() {
            if (yield e.props.clusterStore.fetchClusterConfigz({
                cluster: e.cluster
            })) {
                globals.app.getObservabilityNavs(e.cluster);
                module242(globals, `need_rebuild_observability_${e.cluster}_nav`);
                e.forceUpdate();
            }
        })), 3000);
        return e;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function() {
                if (module26(globals, `need_rebuild_observability_${this.cluster}_nav`, false)) {
                    this.fetchConfigZ();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, route, location } = props;
                const detail = this.props.clusterStore.detail;
                return module553.default.createElement("div", {
                    className: "ks-page"
                }, module553.default.createElement("div", {
                    className: module3("ks-page-side", module4077.pageSideWrapper)
                }, module553.default.createElement(module1843, {
                    icon: detail.icon,
                    value: showNameAndAlias(this.cluster),
                    onChange: this.enterCluster,
                    showBack: true,
                    path: "/whizard-telemetry/metrics/overview"
                }), module553.default.createElement(Nav, {
                    className: "ks-page-nav",
                    navs: globals.app.getObservabilityNavs(this.cluster),
                    location,
                    match,
                    disabled: !detail.isReady
                })), module553.default.createElement("div", {
                    className: "ks-page-main"
                }, renderRoutes(route.routes)));
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
    return a;
})(module553.Component)) || l) || l;
export default R;
