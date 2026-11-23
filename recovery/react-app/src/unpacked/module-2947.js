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
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import "./module-553.js";
import module74 from "./module-74.js";
import module801 from "./module-801.js";
import module186 from "./module-186.js";
import { observer } from "./module-239.js";
import module1297 from "components/Forms/Workload/ContainerSettings/ReplicasControl";
import module2948 from "./module-2948.js";
const h = ((e)=>{
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
    function a(...l_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...l_1);
        e.triggerChange = module801(function() {
            const e_props = e.props;
            const { template, onChange, name } = e_props;
            const replicas = e.state.replicas;
            module74(template, name, replicas);
            if (onChange) {
                onChange(replicas);
            }
        }, 200);
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                return <div className={module2948.wrapper}><module186.Columns className="is-vcentered is-2"><module186.Column className="is-narrow">{this.renderReplicas()}</module186.Column></module186.Columns></div>;
            }
        }
    ]);
    return a;
})(module1297);
const E = observer(h);
export default E;
