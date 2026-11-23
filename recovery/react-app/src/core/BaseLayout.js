import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import { inject, observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import * as module553 from "unpacked/module-553.js";
import module325 from "stores/websocket";
import { isAppsPage } from "utils/index";
import { getScrollTop } from "utils/dom";
import { initAlias, initEvents } from "utils/events";
import { renderRoutes } from "utils/router.config";
import module770 from "unpacked/module-770.js";
let a;
let i;
let l;
const x = inject("rootStore")(a = observer((l = i = ((e)=>{
    module55(n, e);
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
            let n;
            const r = module51(e);
            if (t) {
                const o = module51(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module56(this, n);
        };
    })(n);
    function n(e) {
        let r;
        module36(this, n);
        r = t.call(this, e);
        r.handleScroll = function() {
            if (r.headerRef && r.headerRef.current) {
                const e = getScrollTop();
                const t = r.headerRef.current.classList;
                const n = t.contains("header-shadow");
                const o = t.contains("apps-dark-header");
                if (e >= 4 && !n) {
                    t.add("header-shadow");
                } else if (e < 4 && n) {
                    t.remove("header-shadow");
                }
                if (isAppsPage()) {
                    if (e >= 10 && !o) {
                        t.add("apps-dark-header");
                    } else if (e < 10 && o) {
                        t.remove("apps-dark-header");
                    }
                }
            }
        };
        r.handleClick = function(e) {
            if (r.navRef.current && !r.navRef.current.contains(e.target)) {
                r.props.rootStore.hideGlobalNav();
                document.removeEventListener("click", r.handleClick);
            }
        };
        r.handleJumpTo = function(e) {
            r.props.rootStore.routing.push(e);
        };
        r.navRef = module553.default.createRef();
        r.headerRef = module553.default.createRef();
        r.routes = e.route.routes;
        r.websocket = new module325;
        return r;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("scroll", this.handleScroll);
                this.subscribe = initEvents.apply(undefined, module61(initAlias));
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const showGlobalNav = this.props.rootStore.showGlobalNav;
                if (showGlobalNav && showGlobalNav !== e.rootStore.showGlobalNav) {
                    document.removeEventListener("click", this.handleClick);
                    document.addEventListener("click", this.handleClick);
                }
                if (!(globals.user || isAppsPage(this.props.location.path))) {
                    location.href = "/login";
                }
                if (globals.user && globals.user.uninitialized === "true") {
                    location.href = "/password/confirm";
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("scroll", this.handleScroll);
                this.subscribe?.();
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", {
                    className: module770.main
                }, renderRoutes(this.routes));
            }
        },
        {
            key: "showKubeControl",
            get: function() {
                return globals.app.isClusterAdmin;
            }
        }
    ]);
    return n;
})(module553.Component), i.propTypes = {
    children: module1.node,
    location: module1.object
}, a = l)) || a) || a;
export default x;
