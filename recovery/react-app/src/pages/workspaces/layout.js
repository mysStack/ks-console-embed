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
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import module438 from "stores/cluster";
import { getIndexRoute, renderRoutes } from "utils/router.config";
let l;
const E = inject("rootStore", "workspaceStore")(l = observer(l = ((e)=>{
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
        a.enterWorkspace = async (t)=>a.routing.push(`/workspaces/${t}/`);
        a.store = new module438;
        return a;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { routes = [], path } = this.props.route;
                const detail = this.props.workspaceStore.detail;
                const u = globals.app.getWorkspaceNavs(this.workspace, {
                    isEdge: detail.isEdge
                });
                const l = module26(u, "[0].items[0].name");
                return module553.default.createElement(module553.default.Fragment, null, l && renderRoutes([].concat(module61(routes), [
                    getIndexRoute({
                        path,
                        to: `${path}/${l}`,
                        exact: true
                    }),
                    getIndexRoute({
                        path: "*",
                        to: "/404",
                        exact: true
                    })
                ])));
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
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
})(module553.Component)) || l) || l;
export default E;
