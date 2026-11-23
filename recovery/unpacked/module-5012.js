import "./module-15.js";
import "./module-5.js";
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
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module5013 from "./module-5013.js";
const h = ((e)=>{
    module55(a, e);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, gateway } = props;
                if (module63(detail.ports)) {
                    return null;
                }
                return module553.default.createElement("div", {
                    className: module5013.portsWrapper
                }, detail.ports.map((e, key)=>module553.default.createElement("div", {
                        key,
                        className: module5013.ports
                    }, module553.default.createElement(module186.Icon, {
                        name: "pod",
                        size: 40
                    }), module553.default.createElement("div", {
                        className: module5013.port
                    }, module553.default.createElement("p", null, module553.default.createElement("strong", null, e.targetPort)), module553.default.createElement("p", null, t("CONTAINER_PORT_SCAP"))), module553.default.createElement("div", {
                        className: module5013.protocol
                    }, "→ ", e.protocol, " → "), module553.default.createElement(module186.Icon, {
                        name: "network-router",
                        size: 40
                    }), module553.default.createElement("div", {
                        className: module5013.port
                    }, module553.default.createElement("p", null, module553.default.createElement("strong", null, e.port)), module553.default.createElement("p", null, t("SERVICE_PORT_SCAP"))), e.nodePort && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                        className: module5013.protocol
                    }, "→ ", e.protocol, " → "), module553.default.createElement(module186.Icon, {
                        name: "nodes",
                        size: 40
                    }), module553.default.createElement("div", {
                        className: module5013.port
                    }, module553.default.createElement("p", null, module553.default.createElement("strong", null, e.nodePort)), module553.default.createElement("div", null, t("NODE_PORT_SCAP"), module553.default.createElement(module186.Tooltip, {
                        content: t("SERVICE_NODE_PORT_DESC"),
                        trigger: "hover"
                    }, module553.default.createElement(module186.Icon, {
                        name: "information"
                    })))), gateway && gateway.defaultIngress && module553.default.createElement("a", {
                        href: `http://${gateway.defaultIngress}:${e.nodePort}`,
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }, module553.default.createElement(module186.Button, {
                        className: module5013.access
                    }, t("ACCESS_SERVICE")))))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default h;
