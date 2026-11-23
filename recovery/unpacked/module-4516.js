import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import { renderRoutes } from "./module-317.js";
import module445 from "./module-445.js";
let o;
const v = inject("rootStore", "workspaceStore", "projectStore")(o = observer(o = ((e)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.workspaceStore = new module445;
        r.state = {
            fetchFin: false
        };
        r.handleChange = function(e) {
            return r.props.rootStore.routing.push(e);
        };
        r.workspaceStore = new module445;
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const match = this.props.match;
                this.workspaceStore.fetchDetail(match.params);
            }
        },
        {
            key: "getRoutes",
            value: function(e) {
                const route = this.props.route;
                const { routes, path } = route;
                const n = module26(e, "[0]", {});
                const o = module26(n.children, "[0].name") || n.name;
                if (o) {
                    if (routes) {
                        routes.forEach((e)=>{
                            if (e.path === path && e.redirect) {
                                e.redirect.to = `${path}/${o}`;
                            }
                        });
                    }
                    return routes;
                }
                return [];
            }
        },
        {
            key: "render",
            value: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                const n = globals.app.getProjectNavs({
                    cluster,
                    workspace,
                    project: namespace,
                    licenseInfo: this.licenseInfo,
                    isEdge: this.props.workspaceStore.isEdge
                });
                if (this.edgeCluster === "") {
                    const l = n?.[0]?.items?.filter(function(e) {
                        return e.name === "settings";
                    })?.[0];
                    if (l) {
                        l.children = l.children.filter((e)=>e.name !== "node-groups");
                    }
                }
                return module553.default.createElement(module553.default.Fragment, null, renderRoutes(this.getRoutes(n)));
            }
        },
        {
            key: "edgeCluster",
            get: function() {
                return module26(this.workspaceStore.detail, "_originData.metadata.labels['cluster-role.kubesphere.io/edge']", "");
            }
        },
        {
            key: "licenseInfo",
            get: function() {
                return this.props.rootStore.licenseInfo;
            }
        }
    ]);
    return a;
})(module553.Component)) || o) || o;
export default v;
