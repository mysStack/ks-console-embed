import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import Module5107 from "./module-5107.js";
import Module5109 from "./module-5109.js";
let a;
const m = inject("rootStore", "sonarqubeStore")(a = observer(a = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...a_1) {
        let e;
        module36(this, r);
        e = t.call(this, ...a_1);
        e.renderResult = function() {
            const { detail = {}, isLoading } = e.props.sonarqubeStore;
            return <Module5107 detail={detail} loading={isLoading}/>;
        };
        e.renderIssues = function() {
            const { detail = {}, isLoading } = e.props.sonarqubeStore;
            return <Module5109 detail={detail} issues={module14.toJS(detail.issues)} loading={isLoading}/>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const { detail = {}, isLoading } = this.props.sonarqubeStore;
                if (!(detail.totalStatus || isLoading)) {
                    this.props.rootStore.routing.push("./activity");
                }
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderResult()}{this.renderIssues()}</div>;
            }
        }
    ]);
    return r;
})(Component)) || a) || a;
export default m;
