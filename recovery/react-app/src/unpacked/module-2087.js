import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module830 from "components/Inputs/ArrayInput";
import module189 from "./module-189.js";
import module2088 from "./module-2088.js";
import module1487 from "./module-1487.js";
const y = ((e)=>{
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
        e.handleSelectChange = function(t) {
            e.props.onChange(t.map((e)=>module189(e, "id")));
        };
        e.checkItemValid = function(e) {
            return !!(e.cluster && e.cluster !== "" && e.names && e.names.length > 0);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1487.wrapper
                }, module553.default.createElement(module830, {
                    value: this.props.value.map((e, id)=>({
                            ...e,
                            id
                        })),
                    onChange: this.handleSelectChange,
                    checkItemValid: this.checkItemValid
                }, module553.default.createElement(module2088, {
                    clusterOptions: this.clusterOptions
                })));
            }
        },
        {
            key: "clusterOptions",
            get: function() {
                return this.props.allClusters;
            }
        }
    ]);
    return a;
})(module553.Component);
export default y;
