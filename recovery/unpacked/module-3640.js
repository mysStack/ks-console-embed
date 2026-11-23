import "./module-15.js";
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
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import Module1743 from "./module-1743.js";
let c;
const T = inject("rootStore")(c = observer(c = ((Component_1)=>{
    module55(u, Component_1);
    var e = ((M)=>{
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
            } catch (M) {
                return false;
            }
        })();
        return function() {
            let t;
            const u = module51(M);
            if (e) {
                const N = module51(this).constructor;
                t = Reflect.construct(u, arguments, N);
            } else {
                t = u.apply(this, arguments);
            }
            return module56(this, t);
        };
    })(u);
    function u() {
        module36(this, u);
        return e.apply(this, arguments);
    }
    module37(u, [
        {
            key: "pageClose",
            value: function() {
                window.opener = null;
                window.open("", "_self", "");
                window.close();
            }
        },
        {
            key: "render",
            value: function() {
                return <Module1743 title={t("CONTAINER_LOG_SEARCH")} onCancel={this.pageClose}/>;
            }
        }
    ]);
    return u;
})(Component)) || c) || c;
export default T;
