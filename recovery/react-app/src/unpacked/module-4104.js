import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module325 from "stores/websocket";
import module4105 from "unpacked/module-4105.js";
import module4107 from "unpacked/module-4107.js";
let u;
const y = observer(u = ((e)=>{
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
        e.store = e.props.store;
        e.websocket = new module325;
        e.initWebsocket = function() {
            const name = e.props.name;
            if (name) {
                const a = e.store.getWatchUrl({
                    name
                });
                if (a) {
                    e.websocket.watch(a);
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
    module37(a, [
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
                }, module553.default.createElement(module4105, {
                    detail
                }), module553.default.createElement(module4107, {
                    detail
                }));
            }
        }
    ]);
    return a;
})(module553.Component)) || u;
export default y;
