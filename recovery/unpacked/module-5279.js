import "./module-15.js";
import "./module-5.js";
import "./module-48.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-188.js";
import "./module-45.js";
import "./module-28.js";
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
import { Link } from "./module-433.js";
import { inject, observer } from "./module-239.js";
import module244 from "./module-244.js";
import module801 from "./module-801.js";
import module26 from "./module-26.js";
import module242 from "./module-242.js";
import module186 from "./module-186.js";
import { renderRoutes } from "./module-317.js";
import { Nav } from "./module-1075.js";
import module5280 from "./module-5280.js";
let c;
const k = inject("rootStore", "nodeGroupStore")(c = observer(c = ((e)=>{
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.enterGroup = async (r)=>e.routing.push(`/node-groups/clusters/${e.cluster}/${r}/`);
        e.fetchConfigz = module801(module44(module41.mark(function* t() {
            if (yield e.props.nodeGroupStore.fetchClusterConfigz({
                cluster: e.cluster
            })) {
                module242(globals, `need_rebuild_${e.cluster}_nav`);
                e.forceUpdate();
            }
        })), 3000);
        return e;
    }
    module37(n, [
        {
            key: "getUserRules",
            value: function(e) {
                this.props.rootStore.getRules(e);
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.getUserRules({
                    cluster: this.cluster,
                    nodegroup: this.group
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                module26(globals, `need_rebuild_nodegroup_${this.group}_nav`, false);
                if (e.match.params.group !== this.group) {
                    this.getUserRules({
                        cluster: this.cluster,
                        nodegroup: this.group
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, route, location } = props;
                const detail = this.props.nodeGroupStore.detail;
                const o_aliasName = detail.aliasName;
                const value = `${this.group}${o_aliasName && ` (${o_aliasName})`}`;
                const to = (module244.parse(location.search.slice(1)) || {}).path || sessionStorage.getItem("NODE_GROUP_NEED_BACK");
                if (to) {
                    sessionStorage.setItem("NODE_GROUP_NEED_BACK", to);
                }
                return module553.default.createElement("div", {
                    className: "ks-page"
                }, module553.default.createElement("div", {
                    className: "ks-page-side"
                }, to && module553.default.createElement(Link, {
                    to,
                    onClick: function() {
                        sessionStorage.removeItem("NODE_GROUP_NEED_BACK");
                    }
                }, module553.default.createElement(module186.Icon, {
                    name: "chevron-left",
                    size: 20
                }), t("BACK_EDGEWIZE_NODEGROUP")), module553.default.createElement(module5280, {
                    icon: detail.icon || "edge-cluster",
                    value,
                    cluster: this.cluster,
                    onChange: this.enterGroup
                }), module553.default.createElement(Nav, {
                    className: "ks-page-nav",
                    navs: this.nodeGroupNavs,
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
            key: "group",
            get: function() {
                return this.props.match.params.group;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "nodeGroupNavs",
            get: function() {
                return globals.app.getNodeGroupNavs(this.group);
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        }
    ]);
    return n;
})(module553.Component)) || c) || c;
export default k;
