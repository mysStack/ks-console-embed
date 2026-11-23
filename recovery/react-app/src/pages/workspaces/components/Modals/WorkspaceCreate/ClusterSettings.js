import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module1776 from "pages/workspaces/components/Modals/WorkspaceCreate/ClusterSettings/ClusterSelect";
import Module3620 from "unpacked/module-3620.js";
import module3622 from "unpacked/module-3622.js";
const v = ((Component_1)=>{
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
                const props = this.props;
                const { formRef, formTemplate } = props;
                const n = formTemplate.clusterType === "edge";
                const type = n ? t("EDGE_CLUSTER") : t("KS_CLUSTER");
                return <div className={module3622.wrapper}><div className={module3622.step}><div>{t("CLUSTER_SETTINGS")}</div><p>{t("SELECT_CLUSTERS_DESC", {
                    type
                })}</p></div><module186.Form data={formTemplate} ref={formRef}><module186.Form.Item label={t("AVAILABLE_CLUSTERS", {
                    type
                })}>{n ? <Module3620 name="spec.placement.clusters"/> : <Module1776 name="spec.placement.clusters"/>}</module186.Form.Item></module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
