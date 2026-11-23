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
import * as module553 from "./module-553.js";
import module790 from "./module-790.js";
import module791 from "./module-791.js";
import { createCenterWindowOpt } from "./module-453.js";
import module3686 from "./module-3686.js";
const g = ((e)=>{
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
        e.handleTool = function(t) {
            window.open(t.currentTarget.dataset.url, t.currentTarget.dataset.title, e.getWindowOpts());
        };
        return e;
    }
    module37(n, [
        {
            key: "getWindowOpts",
            value: function() {
                return createCenterWindowOpt({
                    width: 1200,
                    height: 800,
                    scrollbars: 1,
                    resizable: 1
                });
            }
        },
        {
            key: "render",
            value: function() {
                const cluster = this.props.cluster;
                return module553.default.createElement(module790, {
                    title: t("TOOLS"),
                    className: module3686.toolContainer
                }, module553.default.createElement("div", {
                    className: module3686.level
                }, module553.default.createElement("div", {
                    "data-title": "KubeCtl",
                    "data-url": `/terminal/kubectl/${cluster}`,
                    onClick: this.handleTool
                }, module553.default.createElement(module791, {
                    icon: "terminal",
                    title: "kubectl",
                    description: t("KUBECTL_DESC")
                })), module553.default.createElement("div", {
                    "data-title": "KubeConfig",
                    "data-url": `/clusters/${cluster}/kubeConfig`,
                    onClick: this.handleTool
                }, module553.default.createElement(module791, {
                    icon: "data",
                    title: "kubeconfig",
                    description: t("KUBECONFIG_DESC")
                }))));
            }
        }
    ]);
    return n;
})(module553.Component);
export default g;
