import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-30.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import * as module553 from "unpacked/module-553.js";
import { Router } from "unpacked/module-47.js";
import { createBrowserHistory } from "unpacked/module-83.js";
import { Provider } from "unpacked/module-239.js";
import module431 from "unpacked/module-431.js";
import { renderRoutes } from "utils/router.config";
import { fireEvent, lazy } from "utils/index";
import module762 from "unpacked/module-762.js";
import module26 from "unpacked/module-26.js";
import module483 from "stores/root";
import "unpacked/module-765.js";
import "unpacked/module-766.js";
import { getStore } from "unpacked/module-767.js";
import module768 from "core/routes";
const E = lazy(function() {
    return import("unpacked/module-776.js");
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
            basename: (window.location.pathname === "/consolev3" || window.location.pathname.startsWith("/consolev3/")) ? "/consolev3" : ""
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
