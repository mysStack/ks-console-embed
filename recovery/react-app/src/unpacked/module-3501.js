import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-30.js";
import "./module-42.js";
import "./module-57.js";
import "./module-38.js";
import "./module-32.js";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import { getClusterUrl, getWebSocketProtocol } from "utils/index";
let s;
const m = module553.lazy(function() {
    return import("components/Terminal");
});
const h = observer(s = ((e)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.resizeTerminal = function() {
            if (e.terminalRef) {
                e.terminalRef.onResize();
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const isEdgeNode = this.props.isEdgeNode;
                if (!this.props.url) {
                    return null;
                }
                return module553.default.createElement("div", {
                    style: {
                        height: "100%",
                        borderRadius: "4px",
                        background: "#181d28",
                        padding: "12px",
                        color: "#fff"
                    }
                }, module553.default.createElement(module553.Suspense, {
                    fallback: "Loading"
                }, this.props.isLoading ? "Loading" : module553.default.createElement(m, {
                    websocketUrl: this.url,
                    key: this.url,
                    terminalOpts: {
                        theme: {
                            background: "#181d28"
                        }
                    },
                    isEdgeNode,
                    ref: function(t) {
                        _this.terminalRef = t;
                    }
                })));
            }
        },
        {
            key: "url",
            get: function() {
                return `${getWebSocketProtocol(window.location.protocol)}://${window.location.host}${getClusterUrl(`/${this.props.url}`)}`;
            }
        }
    ]);
    return a;
})(module553.Component)) || s;
export default h;
