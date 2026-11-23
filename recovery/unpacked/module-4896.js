import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import { inject, observer } from "./module-239.js";
import Module4897 from "./module-4897.js";
import Module1977 from "./module-1977.js";
import module4902 from "./module-4902.js";
let o;
const g = inject("detailStore", "s2iRunStore")(o = observer(o = ((Component_1)=>{
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
                const params = this.props.match.params;
                const runDetail = this.props.s2iRunStore.runDetail;
                return <><div className={module4902.title}>{t("LAST_BUILD_ENVIRONMENT")}</div><div className={module4902.card}><Module4897 isB2i={this.isB2i} runDetail={runDetail} params={params}/></div><div className={module4902.title}>{t("RUN_RECORDS")}</div><div className={module4902.card}><Module1977 isB2i={this.isB2i} params={params}/></div></>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "isB2i",
            get: function() {
                return module26(this.store.detail, "spec.config.isBinaryURL");
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default g;
