import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import { renderRoutes } from "./module-317.js";
let n;
const p = inject("rootStore")(n = observer(n = ((Component_1)=>{
    module55(a, Component_1);
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
        e.state = {
            fetchFin: true
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.props.initProjectWebsocket?.("cluster", "workspace");
            }
        },
        {
            key: "render",
            value: function() {
                const route = this.props.route;
                return renderRoutes(route.routes);
            }
        },
        {
            key: "licenseInfo",
            get: function() {
                return this.props.rootStore.licenseInfo;
            }
        },
        {
            key: "navs",
            get: function() {
                return globals.app.getPlatformSettingsNavs(false);
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default p;
