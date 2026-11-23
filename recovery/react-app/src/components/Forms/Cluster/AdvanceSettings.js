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
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module800 from "components/Inputs/NumberInput";
import module2690 from "unpacked/module-2690.js";
import Module1179 from "components/Forms/Cluster/Title";
import Module2691 from "components/Forms/Cluster/AdvanceSettings/KSSettings";
const E = ((Component_1)=>{
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
                const { store, formRef, formTemplate } = props;
                return <div className={module2690.wrapper}><Module1179 title={t("ADVANCED_SETTINGS")} description={t("CLUSTER_ADVANCED_SETTINGS_DESC")}/><module186.Form className={module2690.form} data={formTemplate} ref={formRef}><module186.Form.Group label={t("KUBESPHERE_SETTINGS")} desc={t("CLUSTER_KUBESPHERE_SETTINGS_DESC")} checkable keepDataWhenUnCheck><module186.Form.Item><Module2691 name="spec.addons[1].sources.chart.values" components={module26(store.kubekey, "parameters.kubesphere.components", [])}/></module186.Form.Item></module186.Form.Group><module186.Form.Group label={t("PRIVATE_REGISTRY_CONFIGURATION")} desc={t("CLUSTER_PRIVATE_REGISTRY_DESC")} checkable keepDataWhenUnCheck><module186.Form.Item label={t("PRIVATE_REGISTRY")}><module186.Input name="spec.registry.privateRegistry"/></module186.Form.Item></module186.Form.Group><module186.Form.Group label={t("CLUSTER_CONTROLPLANE_ENDPOINT")} desc={t("CLUSTER_CONTROLPLANE_ENDPOINT_DESC")} checkable keepDataWhenUnCheck><module186.Form.Item label={t("DOMAIN")}><module186.Input name="spec.controlPlaneEndpoint.domain"/></module186.Form.Item><module186.Form.Item label={t("ADDRESS")}><module186.Input name="spec.controlPlaneEndpoint.address"/></module186.Form.Item><module186.Form.Item label={t("PORT")}><Module800 name="spec.controlPlaneEndpoint.port" integer min={0} max={65535}/></module186.Form.Item></module186.Form.Group><module186.Form.Group label={t("ETCD_BACKUP")} desc={t("CLUSTER_ETCD_BACKUP_DESC")} checkable keepDataWhenUnCheck><module186.Form.Item label={t("ETCD_BACKUP_DIR")} desc={t("CLUSTER_ETCD_BACKUP_DIR_DESC")}><module186.Input name="spec.kubernetes.etcdBackupDir"/></module186.Form.Item><module186.Form.Item label={t("ETCD_BACKUP_PERIOD")} desc={t("CLUSTER_ETCD_BACKUP_PERIOD_DESC")}><Module800 name="spec.kubernetes.etcdBackupPeriod" integer min={0}/></module186.Form.Item><module186.Form.Item label={t("KEEP_BACKUP_NUMBER")} desc={t("CLUSTER_ETCD_BACKUP_NUMBER_DESC")}><Module800 name="spec.kubernetes.keepBackupNumber" integer min={0}/></module186.Form.Item></module186.Form.Group></module186.Form></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
