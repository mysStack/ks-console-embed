import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-98.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import Module802 from "components/Base/Card";
import module5040 from "unpacked/module-5040.js";
let o;
const v = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.store = e.detailStore;
        t.module = e.module;
        return t;
    }
    module37(a, [
        {
            key: "renderContent",
            value: function(e = {}) {
                return <div className={module5040.wrapper}><ul>{Object.entries(e).map((e)=>{
                    const t = module96(e, 2);
                    const r = t[0];
                    const a = t[1];
                    return <li key={r}><div className="h6">{r}</div><pre className={module5040.value}>{a}</pre></li>;
                })}</ul></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.store;
                const { detail, isLoading } = store;
                return <Module802 title={t("DATA")} loading={isLoading}>{this.renderContent(detail.data)}</Module802>;
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default v;
