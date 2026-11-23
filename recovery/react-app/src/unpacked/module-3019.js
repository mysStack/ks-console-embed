import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-75.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { withRouter } from "./module-47.js";
import Module1363 from "./module-1363.js";
import module1195 from "./module-1195.js";
let l;
const h = withRouter(l = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { routes, match, history } = props;
                const options = routes.filter((e)=>!!e.name).map((e)=>({
                        label: t(e.title),
                        value: e.name,
                        count: e.count
                    }));
                const u = location.pathname.replace("/consolev3", "");
                const o = options.find((e)=>u.startsWith(`${match.url}/${e.value}`)) || {};
                return <div className={module1195.tabsWrapper}><Module1363 value={o.value} onChange={function(e) {
                    return history.push(`${match.url}/${e}`);
                }} options={options}/></div>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default h;
