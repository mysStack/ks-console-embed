import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import { getIndexRoute, renderRoutes } from "./module-317.js";
import { Nav } from "./module-1075.js";
import module186 from "./module-186.js";
import module4342 from "./module-4342.js";
const v = ((e)=>{
    module55(n, e);
    var r = ((t)=>{
        const e = (()=>{
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
            } catch (t) {
                return false;
            }
        })();
        return function() {
            let r;
            const n = module51(t);
            if (e) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n() {
        module36(this, n);
        return r.apply(this, arguments);
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, route, location } = props;
                const navs = globals.app.getAccessNavs();
                const c = module26(navs, "[0].items[0].name");
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: "ks-page-side"
                }, module553.default.createElement("div", {
                    className: module4342.titleWrapper
                }, module553.default.createElement("div", {
                    className: module4342.icon
                }, module553.default.createElement(module186.Icon, {
                    name: "key",
                    size: 40,
                    type: "light"
                })), module553.default.createElement("div", {
                    className: module4342.text
                }, module553.default.createElement("div", {
                    className: "h6"
                }, t("ACCESS_CONTROL")))), module553.default.createElement(Nav, {
                    className: "ks-page-nav",
                    navs,
                    location,
                    match
                })), module553.default.createElement("div", {
                    className: "ks-page-main"
                }, renderRoutes([].concat(module61(route.routes), [
                    getIndexRoute({
                        path: route.path,
                        to: `${route.path}/${c}`,
                        exact: true
                    })
                ]))));
            }
        }
    ]);
    return n;
})(module553.Component);
export default v;
