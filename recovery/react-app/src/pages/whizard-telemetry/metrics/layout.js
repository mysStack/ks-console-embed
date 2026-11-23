import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import { inject, observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import * as module553 from "unpacked/module-553.js";
import { renderRoutes } from "utils/router.config";
import { Nav } from "components/Layout/index";
import module4288 from "unpacked/module-4288.js";
let l;
const E = inject("rootStore")(l = observer(l = ((e)=>{
    module55(r, e);
    var a = ((e)=>{
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
    })(r);
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            isHideNav: false
        };
        e.handleNav = function() {
            e.setState({
                isHideNav: !e.state.isHideNav
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentWillUnmount",
            value: function() {
                this.setState = function() {
                    return false;
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, route, location } = props;
                const isHideNav = this.state.isHideNav;
                return module553.default.createElement("div", {
                    className: module3("ks-page", module4288.pageWrapper, isHideNav ? module4288.hideNav : module4288.showNav)
                }, module553.default.createElement("div", {
                    className: module3("ks-page-side", module4288.pageSideWrapper, module31({}, module4288.show, !isHideNav))
                }, module553.default.createElement("div", {
                    className: module4288.navWrapper
                }, module553.default.createElement("div", {
                    className: module4288.titleWrapper
                }, module553.default.createElement("div", {
                    className: module4288.icon
                }, module553.default.createElement(module186.Icon, {
                    name: "observability",
                    size: 40,
                    type: "light"
                })), module553.default.createElement("div", {
                    className: module4288.text
                }, module553.default.createElement("div", {
                    className: "h6"
                }, t("OBSERVABILITY_CENTER")))), module553.default.createElement(Nav, {
                    className: module3("ks-page-nav", module4288.pageNav),
                    navs: this.navs,
                    location,
                    match,
                    fold: isHideNav
                }), module553.default.createElement("div", {
                    className: module3(module4288.foldWrapper, isHideNav ? module4288.folded : ""),
                    onClick: this.handleNav
                }, module553.default.createElement("img", {
                    src: "/assets/packup.svg"
                }), module553.default.createElement("span", null, t(isHideNav ? "WHIZARD_MONITORING.UNFOLD" : "WHIZARD_MONITORING.PACK_UP"))))), module553.default.createElement("div", {
                    className: module3("ks-page-main", module4288.pageMainWrapper)
                }, renderRoutes(route.routes)));
            }
        },
        {
            key: "navs",
            get: function() {
                return globals.app.getWhizardTelemetryNavs(true);
            }
        }
    ]);
    return r;
})(module553.Component)) || l) || l;
export default E;
