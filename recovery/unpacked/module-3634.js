import "./module-15.js";
import "./module-18.js";
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
import * as module553 from "./module-553.js";
import module63 from "./module-63.js";
import module60 from "./module-60.js";
import module3 from "./module-3.js";
import module791 from "./module-791.js";
import { safeParseJSON } from "./module-52.js";
import module3635 from "./module-3635.js";
import module1778 from "./module-1778.js";
const o = ((M)=>{
    module55(u, M);
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
            key: "render",
            value: function() {
                const className = this.props.className;
                const histories = this.histories;
                if (module63(histories) || !module60(histories)) {
                    return module553.default.createElement("div", {
                        className: module1778.empty
                    }, module553.default.createElement(module791, {
                        title: t("NO_HISTORY_TITLE"),
                        description: t("NO_HISTORY_DESC")
                    }));
                }
                return module553.default.createElement("div", {
                    className: module3(module1778.historiesNew, className)
                }, histories.map((M)=>module553.default.createElement(module3635, {
                        key: M.url,
                        data: M
                    })));
            }
        },
        {
            key: "histories",
            get: function() {
                return safeParseJSON(localStorage.getItem("history-cache"), {})[globals.user.username] || [];
            }
        }
    ]);
    return u;
})(module553.Component);
export default o;
