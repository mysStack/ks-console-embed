import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import Module802 from "./module-802.js";
import { isEdgeWizePage } from "./module-52.js";
import Module945 from "./module-945.js";
import module3891 from "./module-3891.js";
let l;
const y = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
        t.store = e.detailStore;
        t.module = e.module;
        return t;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function(e = {}) {
                return <div className={module3891.wrapper}><ul>{Object.entries(e).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const r = t[1];
                    return <li key={a}><div className="h6">{a}</div><pre className={module3891.value}>{r}</pre></li>;
                })}</ul></div>;
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const params = this.props.match.params;
                const { name, namespace } = params;
                if (this.store.detail.isFedManaged) {
                    return <Module945 module={this.store.module} name={name} namespace={namespace} isEdgeWize={isEdgeWizePage()}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.store;
                const { detail, isLoading } = store;
                return <div>{this.renderPlacement()}<Module802 title={t("DATA")} loading={isLoading}>{this.renderContent(detail.data)}</Module802></div>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default y;
