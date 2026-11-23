import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
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
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module325 from "./module-325.js";
import module3706 from "./module-3706.js";
import module3708 from "./module-3708.js";
let o;
const y = observer(o = ((e)=>{
    module55(r, e);
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
    })(r);
    function r(...a) {
        let e;
        module36(this, r);
        e = t.call(this, ...a);
        e.store = e.props.store;
        e.websocket = new module325;
        e.initWebsocket = function() {
            const name = e.props.name;
            if (name) {
                const r = e.store.getWatchUrl({
                    name
                });
                if (r) {
                    e.websocket.watch(r);
                    e.disposer = module14.reaction(function() {
                        return e.websocket.message;
                    }, function(t) {
                        if (!(t.type !== "MODIFIED" && t.type !== "ADDED")) {
                            e.store.detail = e.store.mapper(module14.toJS(t.object));
                        }
                    });
                }
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.initWebsocket();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.websocket.close();
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                return module553.default.createElement("div", {
                    className: "padding-12"
                }, module553.default.createElement(module3706, {
                    detail
                }), module553.default.createElement(module3708, {
                    detail
                }));
            }
        }
    ]);
    return r;
})(module553.Component)) || o;
export default y;
