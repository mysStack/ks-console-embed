import "./module-15.js";
import "./module-11.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import module831 from "./module-831.js";
import module186 from "./module-186.js";
import module788 from "components/Base/Modal";
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleOk = function(e) {
            const t_props = t.props;
            const { onOk, store, detail } = t_props;
            const store_list = store.list;
            const u = module14.toJS(store_list.selectedRowKeys);
            const c = u ? u.filter((e)=>e !== detail.uid) : "";
            onOk(e);
            if (u) {
                store_list.setSelectRowKeys(c);
            }
        };
        t.state = {
            formData: module831(module14.toJS(e.detail._originData || e.detail))
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        formData: module831(module14.toJS(this.props.detail._originData || this.props.detail))
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                const formData = this.state.formData;
                return <module788.Form data={formData} width={691} title={t("EDIT_INFORMATION")} icon="pen" onOk={this.handleOk} okText={t("OK")} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("NAME")}><module186.Input name="metadata.name" disabled/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_DESC")}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("storageclasses")}><module186.Select name={'metadata.labels["storage.kubesphere.io/storagetype"]'} options={this.options} clearable/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module788.Form>;
            }
        },
        {
            key: "options",
            get: function() {
                return [
                    {
                        value: "BlockStorage",
                        label: t("BLOCK_STORAGE")
                    },
                    {
                        value: "ObjectStorage",
                        label: t("OBJECT_STORAGE")
                    },
                    {
                        value: "FileStorage",
                        label: t("FILE_STORAGE")
                    },
                    {
                        value: "Undefined",
                        label: t("UNCLASSIFIED")
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
h.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
