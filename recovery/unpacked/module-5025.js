import "./module-15.js";
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
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module321 from "./module-321.js";
import module186 from "./module-186.js";
import { learnMoreTip } from "./module-52.js";
import Module5026 from "./module-5026.js";
import module5028 from "./module-5028.js";
let o;
const g = inject("detailStore", "projectStore")(o = observer(o = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const clusters = this.store.detail.clusters;
                const a = t.html("VOLUME_MONITORING_TIP");
                return <div className={module5028.main}><module186.Alert type="info" className="margin-b12" message={learnMoreTip(a)}/>{clusters.map((t)=><Module5026 key={t.name} match={_this.props.match} cluster={_this.clusterMap[t.name] || t}/>)}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "clusterMap",
            get: function() {
                return module321(this.props.projectStore.detail.clusters, "name");
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default g;
