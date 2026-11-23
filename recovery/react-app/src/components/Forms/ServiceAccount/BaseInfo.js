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
import module186 from "unpacked/module-186.js";
import Module1106 from "components/Inputs/ProjectSelect";
import Module1356 from "components/Inputs/RoleSelect";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module441 from "stores/role";
import { MODULE_KIND_MAP, PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
let l;
const b = observer(l = ((Component_1)=>{
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
        n.roleStore = new module441;
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            n.props.store.checkName({
                name: a,
                namespace: n.state.namespace,
                cluster: n.state.cluster
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
        n.handleChange = function(namespace) {
            module74(n.formTemplate, 'metadata.annotations["iam.kubesphere.io/role"]', "");
            n.setState({
                namespace
            });
        };
        n.state = {
            cluster: e.cluster,
            workspace: e.workspace,
            namespace: e.namespace
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                const state = this.state;
                const { cluster, namespace } = state;
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" autoFocus maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns>{!this.props.namespace && <module186.Column><module186.Form.Item label={t("PROJECT")} desc={t("SELECT_PROJECT_DESC")} rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    }
                ]}><Module1106 name="metadata.namespace" cluster={this.props.cluster} onChange={this.handleChange}/></module186.Form.Item></module186.Column>}<module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("PROJECT_ROLE_SI")} desc={t("SELECT_PROJECT_ROLE_DESC")}><Module1356 name="metadata.annotations['iam.kubesphere.io/role']" cluster={cluster} namespace={namespace} placeholder=" "/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        }
    ]);
    return r;
})(Component)) || l;
export default b;
