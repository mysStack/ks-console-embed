import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module801 from "unpacked/module-801.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { PATTERN_NAME, PATTERN_SERVICE_VERSION } from "utils/constants";
import { generateId, learnMoreTip, updateFederatedAnnotations } from "utils/index";
import module2569 from "unpacked/module-2569.js";
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.nameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            e.props.store.checkName({
                name: r,
                namespace: e.props.namespace,
                cluster: e.props.cluster
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
        e.handleNameChange = module801(function(t) {
            module74(e.formTemplate, 'metadata.labels["app.kubernetes.io/name"]', t);
            module74(e.fedFormTemplate, 'metadata.labels["app.kubernetes.io/name"]', t);
            module74(e.fedFormTemplate, 'spec.selector.matchLabels["app.kubernetes.io/name"]', t);
            e.props.onLabelsChange(module26(e.fedFormTemplate, "spec.selector.matchLabels"));
            module74(e.props.formData, "ingress.metadata.name", `${t}-ingress-${generateId()}`);
            if (e.props.isFederated) {
                updateFederatedAnnotations(e.formTemplate);
            }
        }, 200);
        e.handleVersionChange = module801(function(t) {
            module74(e.fedFormTemplate, 'spec.selector.matchLabels["app.kubernetes.io/version"]', t);
            e.props.onLabelsChange(module26(e.fedFormTemplate, "spec.selector.matchLabels"));
        }, 200);
        e.handleGovernanceChange = function(t) {
            e.props.onGovernanceChange(t);
            if (e.props.isFederated) {
                updateFederatedAnnotations(e.formTemplate);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, serviceMeshEnable } = props;
                const n = t.html("APPLICATION_GOVERNANCE_DESC");
                return <div className={module2569.wrapper}><div className={module2569.step}><div>{t("BASIC_INFORMATION")}</div><p>{t("APP_BASIC_INFORMATION_DESC")}</p></div><module186.Form data={this.formTemplate} ref={formRef}><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
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
                ]}><module186.Input name="metadata.name" onChange={this.handleNameChange} maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("VERSION")} desc={t("VERSION_DESC")} rules={[
                    {
                        pattern: PATTERN_SERVICE_VERSION,
                        message: t("VERSION_DESC")
                    }
                ]}><module186.Input name="metadata.labels['app.kubernetes.io/version']" onChange={this.handleVersionChange} maxLength={16}/></module186.Form.Item><module186.Form.Item label={t("APPLICATION_GOVERNANCE")} desc={learnMoreTip(n)}><module186.Select name="metadata.annotations['servicemesh.kubesphere.io/enabled']" placeholder=" " options={this.governances} onChange={this.handleGovernanceChange} disabled={!serviceMeshEnable}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Form></div>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formData.application;
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
        },
        {
            key: "governances",
            get: function() {
                return [
                    {
                        label: t("ON"),
                        value: "true"
                    },
                    {
                        label: t("OFF"),
                        value: "false"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    onLabelsChange: module1.PropTypes.func
};
E.defaultProps = {
    onLabelsChange: function() {}
};
