import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-48.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
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
import module801 from "unpacked/module-801.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { observer } from "unpacked/module-239.js";
import { updateLabels } from "utils/index";
import { APP_LABEL_MODULES, MODULE_KIND_MAP, PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
import Module1106 from "components/Inputs/ProjectSelect";
import module439 from "stores/project";
let l;
const S = observer(l = ((Component_1)=>{
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
        e.projectStore = new module439;
        e.nameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            e.props.store.checkName({
                name: r,
                namespace: e.namespace,
                cluster: e.cluster
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
        e.projectValidator = function(e, t, a) {
            a();
        };
        e.handleNameChange = module801(function(t) {
            const e_props = e.props;
            const { module, isFederated } = e_props;
            const l = module26(e.fedFormTemplate, "metadata.labels", {});
            if (APP_LABEL_MODULES.includes(module)) {
                l.app = t.slice(0, 63);
            }
            updateLabels(e.fedFormTemplate, module, l);
            if (isFederated && APP_LABEL_MODULES.includes(module)) {
                module74(e.formTemplate, "metadata.labels.app", t.slice(0, 63));
            }
        }, 200);
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { formRef, maxNameLength = 253, isEdgeWize } = this.props;
                const o = maxNameLength === 253 ? t("LONG_NAME_DESC") : t("NAME_DESC");
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={o} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: o
                        })
                    }
                ]}><module186.Input name="metadata.name" onChange={this.handleNameChange} maxLength={maxNameLength} autoFocus/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns>{!this.props.namespace && <module186.Column><module186.Form.Item label={t("PROJECT")} desc={t("SELECT_PROJECT_DESC")} rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    },
                    {
                        validator: this.projectValidator
                    }
                ]}><Module1106 isEdgeWize={isEdgeWize} name="metadata.namespace" cluster={this.props.cluster} defaultValue={this.namespace}/></module186.Form.Item></module186.Column>}<module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default S;
