import "./module-15.js";
import "./module-73.js";
import "./module-18.js";
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
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { getBrowserLang } from "./module-52.js";
import module26 from "./module-26.js";
import module201 from "./module-201.js";
import module4005 from "./module-4005.js";
const m = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const { templates, roleCategory = [] } = this.props;
                const n = module201("lang") || getBrowserLang();
                return <ul className={module4005.wrapper} data-test="rule-list">{roleCategory.map((e)=>{
                    const l = templates[e.name] || [];
                    const u = e?.displayName?.[n] || e?.displayName?.en;
                    if (l.length < 1) {
                        return null;
                    }
                    return <li key={e.name}><div className={module4005.name}>{u}</div><div>{l.map((e)=>module26(e, `_originData.spec.displayName[${n}]`) || module26(e, "_originData.spec.displayName.en")).join("  |  ")}</div></li>;
                })}</ul>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
