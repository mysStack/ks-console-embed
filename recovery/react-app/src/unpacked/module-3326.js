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
import module26 from "./module-26.js";
import module831 from "./module-831.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import module788 from "components/Base/Modal";
import { PATTERN_HOST, PATTERN_NAME } from "utils/constants";
const y = ((Component_1)=>{
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
        n.nameValidator = function(e, a, r) {
            const isEdit = n.props.isEdit;
            if (!a || isEdit) {
                return r();
            }
            const o = n.props.cluster || module26(n.props.formTemplate, "cluster");
            n.props.store.checkName({
                cluster: o
            }, {
                name: a
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.domainValidator = function(e, a, r) {
            const isEdit = n.props.isEdit;
            if (!a || isEdit) {
                return r();
            }
            const o = n.props.cluster || module26(n.props.formTemplate, "cluster");
            n.props.store.checkName({
                cluster: o
            }, {
                fieldSelector: `spec.uniqueDomainPattern=${a}`
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("INVALID_CREATE_DOMAIN_NAME"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.handleOk = function(e) {
            const n_props = n.props;
            const { onOk, store, detail } = n_props;
            const store_list = store.list;
            const u = module14.toJS(store_list.selectedRowKeys);
            const c = u ? u.filter((e)=>e !== detail.uid) : "";
            onOk(e);
            if (u) {
                store_list.setSelectRowKeys(c);
            }
        };
        n.state = {
            formData: e.isEdit ? module831(module14.toJS(e.detail._originData || e.detail)) : e.formTemplate
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel, isEdit } = props;
                const formData = this.state.formData;
                return <module788.Form data={formData} width={691} title={this.props.title} onOk={this.handleOk} okText={t("OK")} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("NAME")} desc={isEdit ? "" : t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: t("NAME_DESC")
                        })
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" maxLength={63} disabled={isEdit}/></module186.Form.Item><module186.Form.Item label={t("DOMAIN_NAME_TCAP")} desc={isEdit ? "" : t("CREATE_DOMAIN_NAME_DES")} rules={[
                    {
                        required: true,
                        message: t("DOMAIN_NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_HOST,
                        message: t("INVALID_DOMAIN_DESC")
                    },
                    {
                        validator: this.domainValidator
                    }
                ]}><module186.Input name="spec.uniqueDomainPattern" maxLength={63} disabled={isEdit}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
y.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
