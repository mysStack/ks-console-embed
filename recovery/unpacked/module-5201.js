import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module801 from "./module-801.js";
import module26 from "./module-26.js";
import module242 from "./module-242.js";
import { renderRoutes } from "./module-317.js";
import { Nav } from "./module-1075.js";
import module1843 from "./module-1843.js";
let i;
const b = inject("rootStore", "clusterStore")(i = observer(i = ((e)=>{
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(...r) {
        let e;
        module36(this, a);
        e = t.call(this, ...r);
        e.enterCluster = async (t)=>{
            window.location.href = `/v2/edgewize/clusters/${t}/nodes`;
        };
        e.fetchConfigz = module801(module44(module41.mark(function* t() {
            if (yield e.props.clusterStore.fetchClusterConfigz({
                cluster: e.cluster
            })) {
                e.edgeClusterNavs;
                module242(globals, `need_rebuild_${e.cluster}_nav`);
                e.forceUpdate();
            }
        })), 3000);
        return e;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function() {
                if (module26(globals, `need_rebuild_edgewize_${this.cluster}_nav`, false)) {
                    this.fetchConfigz();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, route, location } = props;
                const detail = this.props.clusterStore.detail;
                const r_aliasName = detail.aliasName;
                const value = `${this.cluster}${r_aliasName && ` (${r_aliasName})`}`;
                return module553.default.createElement("div", {
                    className: "ks-page"
                }, module553.default.createElement("div", {
                    className: "ks-page-side"
                }, module553.default.createElement(module1843, {
                    isEdgeWize: true,
                    icon: detail.icon || "edge-cluster",
                    value,
                    onChange: this.enterCluster
                }), module553.default.createElement(Nav, {
                    className: "ks-page-nav",
                    navs: this.edgeClusterNavs,
                    location,
                    match
                })), module553.default.createElement("div", {
                    className: "ks-page-main",
                    style: {
                        height: "calc(100vh - 68px )"
                    }
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
        },
        {
            key: "edgeClusterNavs",
            get: function() {
                return globals.app.getEdgeCalculationNavs(this.cluster);
            }
        }
    ]);
    return a;
})(module553.Component)) || i) || i;
export default b;
