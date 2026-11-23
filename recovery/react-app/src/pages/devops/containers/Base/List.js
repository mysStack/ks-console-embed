import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import { Nav } from "components/Layout/index";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import module5044 from "unpacked/module-5044.js";
import * as module553 from "unpacked/module-553.js";
import { getIndexRoute, renderRoutes } from "utils/router.config";
import module5052 from "unpacked/module-5052.js";
let i;
const S = inject("rootStore", "devopsStore")(i = observer(i = ((e)=>{
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
        e.handleChange = function(t) {
            return e.routing.push(t);
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, route, location } = props;
                const devopsStore = this.props.devopsStore;
                const { initializing, detail } = devopsStore;
                const d = globals.app.getDevOpsNavs({
                    devops: this.devops,
                    cluster: this.cluster,
                    workspace: this.workspace
                });
                const f = [
                    {
                        cate: "",
                        items: d?.[0]?.children ?? []
                    }
                ];
                const navs = this.isHostCluster ? f : f.map((e)=>{
                    const t = e.items.filter((e)=>e.name !== "cd");
                    e.items = t;
                    return e;
                });
                const S = module26(navs, "[0].items[0].name", "management");
                const D = S === "management" ? "base-info" : S;
                if (initializing) {
                    return module553.default.createElement(module186.Loading, {
                        className: module5052.loading
                    });
                }
                return module553.default.createElement("div", {
                    className: "ks-page"
                }, module553.default.createElement("div", {
                    className: "ks-page-side",
                    style: {
                        zIndex: 99
                    }
                }, module553.default.createElement(module5044, {
                    type: "devops",
                    title: t("DEVOPS_PROJECT_LOW"),
                    detail,
                    onChange: this.handleChange,
                    workspace: this.workspace,
                    cluster: this.cluster
                }), module553.default.createElement(Nav, {
                    className: "ks-page-nav",
                    navs,
                    location,
                    match
                })), module553.default.createElement("div", {
                    className: "ks-page-main"
                }, renderRoutes([].concat(module61(route.routes), [
                    getIndexRoute({
                        path: route.path,
                        to: `${route.path}/${D}`,
                        exact: true
                    })
                ]), {
                    isHostCluster: this.isHostCluster
                })));
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.match.params.devops;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "isHostCluster",
            get: function() {
                return !window.parent?.globals?.app.isMultiCluster || this.cluster === this.props.devopsStore.hostName;
            }
        }
    ]);
    return n;
})(module553.Component)) || i) || i;
export default S;
