import "./module-15.js";
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
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import Module2465 from "./module-2465.js";
import module2466 from "./module-2466.js";
let l;
let u;
let o;
const toolbar = {
    h1: true,
    h2: true,
    h3: true,
    h4: true,
    img: false,
    link: true,
    code: true,
    preview: true,
    expand: true,
    undo: true,
    redo: true,
    save: false,
    subfield: true
};
const E = observer((o = u = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleChange = function(readme) {
            t.setState({
                readme
            });
            t.props.handleChange(readme, "abstraction");
        };
        t.state = {
            readme: e.detail.abstraction
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const readme = this.state.readme;
                return <><div className={module2466.header}>{t("APP_INTRODUCTION")}</div><div className={module2466.readmeEdit}><Module2465 value={readme} onChange={this.handleChange} placeholder={t("START_EDITING")} toolbar={toolbar}/></div></>;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    detail: module1.object,
    store: module1.object,
    handleChange: module1.func
}, u.defaultProps = {
    detail: {},
    store: {},
    handleChange: function() {}
}, l = o)) || l;
export default E;
