import "./module-15.js";
import "./module-18.js";
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
import { PureComponent } from "./module-553.js";
import Module814 from "./module-814.js";
import module4614 from "./module-4614.js";
const f = ((PureComponent_1)=>{
    module55(a, PureComponent_1);
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
            key: "getDetails",
            value: function(e) {
                return [
                    {
                        title: this.props.data.length,
                        description: "COUNT",
                        className: module4614.texts
                    },
                    {
                        title: e.kubernetes_ip.value || "-",
                        description: "IP",
                        className: module4614.texts
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const data = this.props.data;
                return <Module814>{data.map((t)=><Module814.Item key={t.id} className={module4614.wrapper} titleClass={module4614.title} icon="pod" status={t.kubernetes_state.value} title={t.label.value} description={t.kubernetes_state.value} details={_this.getDetails(t)}/>)}</Module814>;
            }
        }
    ]);
    return a;
})(PureComponent);
export default f;
