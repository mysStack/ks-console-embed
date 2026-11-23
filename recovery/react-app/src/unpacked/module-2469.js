import "./module-15.js";
import "./module-5.js";
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
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import { MODULE_KIND_MAP, PATTERN_NAME } from "utils/constants";
import module1316 from "./module-1316.js";
let l;
const g = observer(l = ((Component_1)=>{
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
        e.nameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            const e_props = e.props;
            const { cluster, workspace } = e_props;
            e_props.store.checkName({
                name: r,
                workspace,
                cluster
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
        e.versionValidator = function(e, a, r) {
            if (a) {
                if (module1316.isSemVer(a)) {
                    return void r();
                }
                return r({
                    message: t("INVALID_APP_TEMPLATE_VERSION_DESC", {
                        message: t("APP_TEMPLATE_VERSION_DESC")
                    }),
                    field: e.field
                });
            }
            return r();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { formRef, maxNameLength = 253 } = this.props;
                const l = maxNameLength === 253 ? t("LONG_NAME_DESC") : t("NAME_DESC");
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={l} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: l
                        })
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" maxLength={maxNameLength} autoFocus/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("APP_TEMPLATE_VERSION")} desc={t("APP_TEMPLATE_VERSION_DESC")} rules={[
                    {
                        required: true,
                        message: t("APP_TEMPLATE_VERSION_EMPTY_DESC")
                    },
                    {
                        validator: this.versionValidator
                    }
                ]}><module186.Input name="version" maxLength={63} placeholder={t("APP_TEMPLATE_VERSION_DESC")}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_DESC")}><module186.Input name={[
                    "metadata",
                    "annotations",
                    "kubesphere.io/alias-name"
                ]} maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name={[
                    "metadata",
                    "annotations",
                    "kubesphere.io/description"
                ]} maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>;
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
export default g;
