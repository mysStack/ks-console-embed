import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-30.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-38.js";
import "./module-32.js";
import * as module553 from "./module-553.js";
import { Router } from "./module-47.js";
import { createBrowserHistory } from "./module-83.js";
import { Provider } from "./module-239.js";
import module431 from "./module-431.js";
import { renderRoutes } from "./module-317.js";
import { fireEvent, lazy } from "./module-52.js";
import module762 from "./module-762.js";
import module26 from "./module-26.js";
import module483 from "./module-483.js";
import "./module-765.js";
import "./module-766.js";
import { getStore } from "./module-767.js";
import module768 from "./module-768.js";
const E = lazy(function() {
    return import("./module-776.js");
});
const k = ((e)=>{
    module55(n, e);
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
            let n;
            const r = module51(e);
            if (t) {
                const o = module51(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module56(this, n);
        };
    })(n);
    function n(e) {
        let r;
        module36(this, n);
        r = t.call(this, e);
        r.offTriggerAction = null;
        r.rootStore = new module483;
        r.history = module431.syncHistoryWithStore(createBrowserHistory({
            basename: "consolev3"
        }), r.rootStore.routing);
        return r;
    }
    module37(n, [
        {
            key: "componentWillMount",
            value: function() {
                if (!document.getElementById("__SVG_SPRITE_NODE__")) {
                    module762();
                    window.iconfont__svg__inject = true;
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.unlisten();
                if (this.offTriggerAction) {
                    this.offTriggerAction();
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                E().then((e)=>{
                    _this.rootStore.registerActions(e.default);
                    if (module26(window.$wujie, "props.actions", false)) {
                        const o = function(e, n) {
                            if (_this.rootStore.actions[e]) {
                                const { v3Module, v3StoreParams, hasRootStore, hasTrigger } = n;
                                const store = getStore(v3Module, v3StoreParams);
                                _this.rootStore.actions[e].on({
                                    ...n,
                                    ...hasRootStore && {
                                        rootStore: _this.rootStore
                                    },
                                    ...hasTrigger && {
                                        trigger: _this.rootStore.triggerAction
                                    },
                                    store
                                });
                            }
                        };
                        window.$wujie?.bus.$on("triggerAction", o);
                        _this.offTriggerAction = function() {
                            window.$wujie?.bus.$off("triggerAction", o);
                        };
                    }
                    const a = module26(window.$wujie, "props.name", "consolev3");
                    window.$wujie?.bus.$emit("loadCompleted", a);
                });
                window.$wujie?.bus.$on("documentClick", function() {
                    if (document.querySelector("#root") && document.querySelector(".popper.is-active.dropdown")) {
                        fireEvent(document.querySelector("#root"), "click");
                    }
                });
                this.unlisten = this.history.listen(function(e) {
                    window.$wujie?.bus.$emit("subRouteChange", "consolev3", e);
                });
            }
        },
        {
            key: "render",
            value: function() {
                const e = module26(window.$wujie, "props.hideRouter", false);
                return module553.default.createElement(Provider, {
                    rootStore: this.rootStore
                }, !e && module553.default.createElement(Router, {
                    history: this.history
                }, renderRoutes(module768)));
            }
        }
    ]);
    return n;
})(module553.Component);
export default k;
