import "./module-15.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import module831 from "./module-831.js";
import module1 from "./module-1.js";
import Module788 from "./module-788.js";
import Module1621 from "./module-1621.js";
import module5196 from "./module-5196.js";
const v = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = a.call(this, e);
        t.handleOk = function() {
            const onOk = t.props.onOk;
            const current = t.formRef.current;
            onOk?.(current.getData());
        };
        t.formRef = createRef();
        t.formTemplateData = module831(module14.toJS(e.detail._originData));
        return t;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                return <Module788 width={691} title={t("EDIT_INFORMATION")} description={t("EDIT_CLUSTER_INFO_DESC")} icon="cluster" okText={t("OK")} onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><Module1621 {...this.props} isEdit formRef={this.formRef} formTemplate={this.formTemplateData} onOk={this.handleOk} className={module5196.editForm}/></Module788>;
            }
        },
        {
            key: "isMultiCluster",
            get: function() {
                return globals.app.isMultiCluster;
            }
        },
        {
            key: "clusterName",
            get: function() {
                return this.formTemplateData.metadata.name;
            }
        },
        {
            key: "options",
            get: function() {
                const hostedInOptions = this.props.hostedInOptions;
                if (!this.isMultiCluster && this.clusterName) {
                    return [
                        {
                            label: this.clusterName,
                            value: this.clusterName
                        }
                    ];
                }
                return hostedInOptions;
            }
        }
    ]);
    return n;
})(Component);
export default v;
v.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isEdit: module1.bool,
    isSubmitting: module1.bool
};
v.defaultProps = {
    visible: false,
    isEdit: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
