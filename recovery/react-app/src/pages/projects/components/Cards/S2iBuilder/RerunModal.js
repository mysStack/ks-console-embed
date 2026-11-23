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
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module3850 from "unpacked/module-3850.js";
const h = ((Component_1)=>{
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
            const onOk = n.props.onOk;
            if (n.form) {
                onOk((n.form.current || {}).getData());
            }
        };
        n.renderEnableUpdate = function() {
            return <div className={module3850.checkboxCard}><label><module186.Form.Item><module186.Checkbox name="isUpdateWorkload" defaultValue><span name className={module3850.title}>{t("S2I_UPDATE_WORKLOAD")}</span></module186.Checkbox></module186.Form.Item></label><p className={module3850.desc}>{t("S2I_UPDATA_WORKLOAD_DESC")}</p></div>;
        };
        n.form = createRef();
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel, detail } = props;
                return <module788.Form formRef={this.form} width={691} title={t("RERUN")} icon="cdn" onOk={this.handleOk} okText={t("RERUN")} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("CODE_REPOSITORY_URL")}><module186.Input name="url" defaultValue={detail.sourceUrl} readOnly/></module186.Form.Item><module186.Form.Item label={t("NEW_TAG")}><module186.Input name="newTag" placeholder={t("NEW_TAG_DESC")}/></module186.Form.Item>{this.renderEnableUpdate()}</module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
h.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false,
    url: ""
};
