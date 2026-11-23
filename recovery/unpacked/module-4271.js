import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-118.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import Module790 from "./module-790.js";
import Module4272 from "./module-4272.js";
import module4274 from "./module-4274.js";
const v = ((Component_1)=>{
    module55(a, Component_1);
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
    function a(...u) {
        let e;
        module36(this, a);
        e = t.call(this, ...u);
        e.handleReplicaChange = function(t) {
            if (t >= 0) {
                e.props.onScale(t);
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <Module790 className={module3(module4274.replica, className)}><div className={module4274.replicaCount}><Module4272 {...this.replicaStatus}/></div></Module790>;
            }
        },
        {
            key: "replicaStatus",
            get: function() {
                const props = this.props;
                const { module, detail, enableScale } = props;
                let n = {};
                switch(module){
                    default:
                        n = {
                            current: detail.availablePodNums || 0,
                            desire: detail.podNums || 0
                        };
                        break;
                    case "statefulsets":
                        n = {
                            current: module26(detail, "status.currentReplicas", detail.readyPodNums),
                            desire: detail.podNums || 0
                        };
                        break;
                    case "daemonsets":
                        n = {
                            current: module26(detail, "status.numberReady", 0),
                            desire: module26(detail, "status.desiredNumberScheduled", 0)
                        };
                        break;
                    case "gateways":
                        n = {
                            current: Array.isArray(detail.pods) ? detail.pods.length : 1,
                            desire: module26(detail, "replicas", 0)
                        };
                }
                n.onScale = enableScale ? this.handleReplicaChange : null;
                return n;
            }
        }
    ]);
    return a;
})(Component);
export default v;
v.propTypes = {
    module: module1.string,
    detail: module1.object,
    enableScale: module1.bool,
    onScale: module1.func
};
v.defaultProps = {
    module: "deployments",
    enableScale: true,
    onScale: function() {}
};
