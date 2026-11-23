import "./module-15.js";
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
import module26 from "./module-26.js";
import module321 from "./module-321.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module805 from "./module-805.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "./module-72.js";
import { getWorkloadStatus } from "./module-434.js";
import module4952 from "./module-4952.js";
const E = ((e)=>{
    module55(a, e);
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
                const props = this.props;
                const { data, clusters, module } = props;
                const o = module321(clusters, "name");
                return module553.default.createElement("div", {
                    className: module4952.wrapper
                }, module553.default.createElement("div", {
                    className: module4952.tags
                }, data.clusters.map((e)=>{
                    const t = o[e.name];
                    if (!t) {
                        return null;
                    }
                    const a = module26(data, `resources[${t.name}]`, {});
                    const c = module26(data, `clusterTemplates[${t.name}].spec.replicas`, 0);
                    const u = getWorkloadStatus(a, module);
                    const { status, reason } = u;
                    return module553.default.createElement(module186.Tag, {
                        key: t.name,
                        type: CLUSTER_GROUP_TAG_TYPE[t.group],
                        className: module4952.tag
                    }, module553.default.createElement(module186.Icon, {
                        name: CLUSTER_PROVIDER_ICON[t.provider] || "kubernetes",
                        size: 16,
                        type: "light"
                    }), module553.default.createElement("span", null, a.availablePodNums || a.readyPodNums || 0, " /", " ", c), " ", reason && module553.default.createElement(module805, {
                        status,
                        data: a
                    }));
                })), module553.default.createElement("p", null, t("REPLICAS_CURRENT"), "/", t("REPLICAS_DESIRED")));
            }
        }
    ]);
    return a;
})(module553.Component);
export default E;
