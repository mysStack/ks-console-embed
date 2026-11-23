import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module790 from "components/Base/Panel";
import module791 from "components/Base/Text";
import { createCenterWindowOpt } from "utils/dom";
import module4081 from "unpacked/module-4081.js";
const v = ((e)=>{
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
        e.handleTool = function(t) {
            window.open(t.currentTarget.dataset.url, t.currentTarget.dataset.title, e.getWindowOpts());
        };
        return e;
    }
    module37(r, [
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
                    className: module4081.toolContainer
                }, module553.default.createElement("div", {
                    className: module4081.level
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
    return r;
})(module553.Component);
export default v;
