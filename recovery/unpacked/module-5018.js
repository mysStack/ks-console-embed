import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module321 from "./module-321.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module5019 from "./module-5019.js";
let n;
const v = inject("detailStore", "projectStore")(n = observer(n = ((Component_1)=>{
    module55(r, Component_1);
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
    })(r);
    function r(...n) {
        let e;
        module36(this, r);
        e = t.call(this, ...n);
        e.store = e.props.detailStore;
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const { detail, resources = {}, isResourcesLoading } = this.store;
                const u = module321(this.props.projectStore.detail.clusters, "name");
                return <module186.Loading spinning={isResourcesLoading}><div>{detail.clusters.map((t)=><Module5019 key={t.name} {..._this.props.match.params} detail={resources[t.name]} cluster={u[t.name]}/>)}</div></module186.Loading>;
            }
        }
    ]);
    return r;
})(Component)) || n) || n;
export default v;
