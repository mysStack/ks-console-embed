import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module1730 from "components/Modals/EditAuthorization";
import { PATTERN_NAME } from "utils/constants";
let l;
let o;
let u;
const O = observer((u = o = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            showEditAuthorization: false
        };
        e.showEditAuthorization = function() {
            e.setState({
                showEditAuthorization: true
            });
        };
        e.hideEditAuthorization = function() {
            e.setState({
                showEditAuthorization: false
            });
        };
        e.handleCreate = function(t) {
            const basicRoleTemplates = e.props.basicRoleTemplates;
            const r = basicRoleTemplates ? basicRoleTemplates.map((e)=>e.name) : [];
            module74(e.props.formTemplate, "aggregationRoleTemplates.templateNames", [].concat(module61(t), module61(r)));
            e.props.onOk(e.props.formTemplate);
        };
        e.roleNameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            const e_props = e.props;
            const { workspace, cluster, namespace } = e_props;
            const s = module26(e.props.formTemplate, "metadata.name");
            if (e.props.edit && s === r) {
                return n();
            }
            e.props.store.checkName({
                name: r,
                workspace,
                cluster,
                namespace
            }).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("NAME_EXIST_DESC"),
                        field: a.field
                    });
                }
                n();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, visible, module, onCancel, formTemplate, roleTemplates, isSubmitting, roleModules, isEdge } = props;
                const showEditAuthorization = this.state.showEditAuthorization;
                const d = module === "workspaceroles";
                if (showEditAuthorization) {
                    return <Module1730 module={module} visible={showEditAuthorization} roleModules={roleModules} formTemplate={formTemplate} roleTemplates={roleTemplates} onOk={this.handleCreate} onCancel={this.hideEditAuthorization} isSubmitting={isSubmitting} isEdge={isEdge}/>;
                }
                return <module788.Form width={600} title={title || t("CREATE_ROLE")} icon="role" data={formTemplate} onCancel={onCancel} onOk={this.showEditAuthorization} okText={t("EDIT_PERMISSIONS")} visible={visible}><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} tip={d ? t("WORKSPACE_ROLE_NAME_TIP") : null} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.roleNameValidator
                    }
                ]}><module186.Input name="metadata.name" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_DESC")}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item><module186.Alert className="margin-t12" title={t("NEXT_STEP")} message={t("NEXT_STEP_DESC")}/></module788.Form>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    store: module1.object,
    module: module1.string,
    roleTemplates: module1.array,
    formTemplate: module1.object,
    title: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool,
    roleModules: module1.array
}, o.defaultProps = {
    visible: false,
    isSubmitting: false,
    module: "roles",
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default O;
