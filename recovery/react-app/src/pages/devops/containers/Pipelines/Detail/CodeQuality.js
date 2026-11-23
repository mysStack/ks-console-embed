import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import Module5107 from "pages/devops/components/Cards/CodeQualityResult";
import Module5109 from "pages/devops/components/Cards/CodeQualityIssues";
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
