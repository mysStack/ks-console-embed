import "./module-15.js";
import "./module-18.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module790 from "./module-790.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module1839 from "./module-1839.js";
let u;
const y = inject("detailStore")(u = observer(u = ((e)=>{
    module55(r, e);
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
                const annotations = this.detail.annotations;
                return module553.default.createElement(module790, {
                    title: t("ANNOTATION_PL")
                }, module553.default.createElement("div", {
                    className: module1839.container
                }, module553.default.createElement("ul", null, module63(annotations) ? module553.default.createElement("li", null, t("NO_DATA")) : Object.entries(annotations).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const r = t[1];
                    return module553.default.createElement("li", {
                        key: a
                    }, module553.default.createElement("span", {
                        className: module1839.key
                    }, a), module553.default.createElement("span", null, r));
                }))));
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "detail",
            get: function() {
                return this.store.gateway.data || {};
            }
        }
    ]);
    return r;
})(module553.Component)) || u) || u;
export default y;
