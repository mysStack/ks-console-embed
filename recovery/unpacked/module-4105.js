import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { CLUSTER_CREATING_STEPS } from "./module-1847.js";
import module4106 from "./module-4106.js";
const g = ((e)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "getBarLength",
            value: function(e) {
                if (e.length === 0) {
                    return "20px";
                }
                const t = e.length - 1;
                const status = e[t].status;
                return `calc(${20 * t}% - ${24 * t - (status ? 80 : 60)}px)`;
            }
        },
        {
            key: "render",
            value: function() {
                const e = module26(this.props.detail, "status.Conditions", []);
                return module553.default.createElement("div", {
                    className: module4106.wrapper
                }, module553.default.createElement("div", {
                    className: module4106.card
                }, module553.default.createElement("div", {
                    className: module4106.title
                }, t("CLUSTER_CREATION_PROGRESS"), " ", module553.default.createElement(module186.Tooltip, {
                    content: t("CLUSTER_CREATION_PROGRESS_TIP")
                }, module553.default.createElement(module186.Icon, {
                    name: "question"
                }))), module553.default.createElement("div", {
                    className: module4106.progress
                }, module553.default.createElement("div", {
                    className: module4106.bar
                }, module553.default.createElement("div", {
                    className: module4106.colorBar,
                    style: {
                        width: this.getBarLength(e)
                    }
                })), module553.default.createElement("div", {
                    className: module4106.dots
                }, CLUSTER_CREATING_STEPS.map((a, r)=>module553.default.createElement("div", {
                        key: a,
                        style: {
                            left: `${20 * r}%`
                        }
                    }, module553.default.createElement("div", {
                        className: module3(module4106.circle, module31({}, module4106.checked, r <= e.length - 1))
                    }, r <= e.length - 1 && (module26(e, `[${r}].status`) ? module553.default.createElement(module186.Icon, {
                        name: "check",
                        size: 14,
                        type: "light"
                    }) : module553.default.createElement(module186.Icon, {
                        name: "dot",
                        size: 14,
                        type: "light"
                    }))), module553.default.createElement("div", null, t(a.toUpperCase().replace(/\s+/g, "_")))))))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
