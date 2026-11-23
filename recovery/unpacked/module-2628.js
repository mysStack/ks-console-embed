import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module186 from "./module-186.js";
import module868 from "./module-868.js";
import module2629 from "./module-2629.js";
import module2632 from "./module-2632.js";
const y = ((e)=>{
    module55(a, e);
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module868, this.props, module553.default.createElement(module186.Select, {
                    className: module2632.schema,
                    name: "scheme",
                    options: this.protocols,
                    defaultValue: "http"
                }), module553.default.createElement(module186.Select, {
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: "network-card"
                    }),
                    name: "port",
                    options: this.ports,
                    placeholder: " "
                }), module553.default.createElement(module186.Input, {
                    name: "path",
                    defaultValue: "/metrics"
                }), module553.default.createElement(module2629, {
                    name: "authType",
                    formData: this.props.value,
                    ...module189(this.props, [
                        "value",
                        "onChange"
                    ])
                }));
            }
        },
        {
            key: "protocols",
            get: function() {
                return [
                    {
                        label: "HTTPS",
                        value: "https"
                    },
                    {
                        label: "HTTP",
                        value: "http"
                    }
                ];
            }
        },
        {
            key: "ports",
            get: function() {
                return module26(this.props, "detail.ports", []).map((e)=>({
                        label: e.name ? `${e.name} (${e.port})` : e.port,
                        value: e.name || e.port
                    }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default y;
