import "./module-15.js";
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
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import { isEdgeWizePage } from "./module-52.js";
import Module1177 from "./module-1177.js";
import Module1331 from "./module-1331.js";
import module2956 from "./module-2956.js";
const b = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleOk = function() {
            const n_props = n.props;
            const { onOk, detail } = n_props;
            if (detail) {
                if (module26(detail, "metadata.annotations['devops.kubesphere.io/donotautoscale']")) {
                    module74(detail, "metadata.annotations['devops.kubesphere.io/donotautoscale']", "true");
                }
                n.content.current.validate(function() {
                    onOk(detail);
                });
            }
        };
        n.renderEnableUpdate = function() {
            const detail = n.props.detail;
            if (module26(detail, "metadata.annotations.serviceName")) {
                return <div className={module2956.checkboxCard}><label><module186.Form.Item><module186.Checkbox name="isUpdateWorkload" defaultValue><span name className={module2956.title}>{t("S2I_UPDATE_WORKLOAD")}</span></module186.Checkbox></module186.Form.Item></label><p className={module2956.desc}>{t("S2I_UPDATA_WORKLOAD_DESC")}</p></div>;
            }
            return null;
        };
        n.form = createRef();
        n.content = createRef();
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel, cluster, detail, namespace } = props;
                const c = module26(detail, "spec.config.isBinaryURL");
                return <module788.Form formRef={this.form} width={691} title={t("RUN")} icon="cdn" onOk={this.handleOk} okText={t("RUN")} onCancel={onCancel} visible={visible} data={detail} isSubmitting={isSubmitting}>{c ? <Module1331 formTemplate={detail} formRef={this.content} cluster={cluster} namespace={namespace} mode="edit"/> : <Module1177 isEdgeWize={isEdgeWizePage()} formTemplate={detail} formRef={this.content} cluster={cluster} namespace={namespace} mode="edit"/>}{this.renderEnableUpdate()}</module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
b.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
