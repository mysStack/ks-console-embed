import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import { renderRoutes } from "utils/router.config";
import Nav from "components/Layout/Nav";
import module445 from "stores/workspace";
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
        window.__ksProjectPush = r.handleChange;
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
                const n = module26(e, "[0].items[0]", {});
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
                const detail = this.props.projectStore && this.props.projectStore.detail || {};
                window.__ksProjectDetail = detail;
                if (typeof window.__ksSyncSelector === "function") {
                    window.__ksSyncSelector();
                }
                return module553.default.createElement("div", {
                    className: "ks-page"
                }, module553.default.createElement("div", {
                    className: "ks-page-side"
                }, module553.default.createElement("div", {
                    className: "ks-project-selector-slot",
                    dangerouslySetInnerHTML: {
                        __html: '<div id="ks-project-selector-host"></div>'
                    }
                }), module553.default.createElement(Nav, {
                    className: "ks-page-nav",
                    navs: n,
                    location: this.props.location,
                    match: this.props.match
                })), module553.default.createElement("div", {
                    className: "ks-page-main"
                }, renderRoutes(this.getRoutes(n))));
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
