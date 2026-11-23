import "./module-15.js";
import "./module-5.js";
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
import { highlightPromql } from "./module-1493.js";
import module1235 from "./module-1235.js";
const p = ((e)=>{
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
        e.state = {
            html: highlightPromql(e.props.query)
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.query !== this.props.query) {
                    this.setState({
                        html: highlightPromql(this.props.query)
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", {
                    className: module1235.query,
                    dangerouslySetInnerHTML: {
                        __html: this.state.html
                    }
                });
            }
        }
    ]);
    return a;
})(module553.Component);
export default p;
