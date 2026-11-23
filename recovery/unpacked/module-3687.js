import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module791 from "./module-791.js";
import module26 from "./module-26.js";
import { inject } from "./module-239.js";
import * as module553 from "./module-553.js";
import { getDomTitle } from "./module-52.js";
import module3688 from "./module-3688.js";
let u;
const v = inject("rootStore")(u = ((e)=>{
    module55(n, e);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.handleClick = function() {
            const e_props = e.props;
            const t_cluster = e_props.cluster;
            e_props.rootStore.routing.push(`/clusters/${t_cluster.name}/visibility`);
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, version } = props;
                return module553.default.createElement("div", {
                    className: module3688.container
                }, module553.default.createElement("div", {
                    className: module3688.title
                }, module553.default.createElement("p", null, t("BASIC_INFORMATION"))), module553.default.createElement("div", {
                    className: module3688.level
                }, module553.default.createElement(module791, {
                    title: getDomTitle(cluster.provider),
                    description: t("PROVIDER")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(cluster.visibility === "public" ? t("VISIBILITY_PUBLIC") : t("VISIBILITY_PARTIAL")),
                    description: t("CLUSTER_VISIBILITY_SCAP"),
                    onClick: this.handleClick
                }), module553.default.createElement(module791, {
                    title: getDomTitle(cluster.kubernetesVersion || version),
                    description: t("KUBERNETES_VERSION")
                }), module553.default.createElement(module791, {
                    title: getDomTitle(module26(cluster, "configz.ksVersion", "-")),
                    description: t("KUBESPHERE_VERSION")
                })));
            }
        }
    ]);
    return n;
})(module553.Component)) || u;
export default v;
