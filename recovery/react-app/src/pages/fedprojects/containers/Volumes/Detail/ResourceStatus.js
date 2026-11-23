import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module321 from "unpacked/module-321.js";
import module186 from "unpacked/module-186.js";
import { learnMoreTip } from "utils/index";
import Module5026 from "pages/fedprojects/containers/Volumes/Detail/ResourceStatus/UsageCard";
import module5028 from "unpacked/module-5028.js";
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
