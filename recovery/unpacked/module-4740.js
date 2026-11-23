import "./module-15.js";
import "./module-30.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-32.js";
import "./module-45.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import module63 from "./module-63.js";
import module195 from "./module-195.js";
import module4741 from "./module-4741.js";
let o;
const _ = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
            key: "renderConfig",
            value: function(e, t) {
                if (module63(e)) {
                    return null;
                }
                return <><div className={module4741.text}>{t}</div><ul className={module4741.values}>{e.map((e, key)=><li key={key}><span>{module195(e) ? e : JSON.stringify(e)}</span></li>)}</ul></>;
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.detailStore.detail;
                const { uri, order, filters, predicates } = detail;
                return <div className={module4741.main}><Module790 title={t("RULES")}><div className={module4741.card}><div className={module4741.content}><module186.Icon name="loadbalancer" size={40}/><div className={module4741.title}>{uri}<div>{t("MICROSERVICE_ORDER")}: {order}</div></div></div>{this.renderConfig(predicates, t("PREDICATE"))}{this.renderConfig(filters, t("MICROSERVICE_ROUTE_FILTER"))}</div></Module790></div>;
            }
        },
        {
            key: "detailStore",
            get: function() {
                return this.props.detailStore;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default _;
