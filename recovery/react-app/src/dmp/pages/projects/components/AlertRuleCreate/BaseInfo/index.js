import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module1082 from "components/Forms/AlertingPolicy/BaseInfo/UnitInput";
import { SEVERITY_LEVEL } from "configs/alerting/metrics/rule.config";
import { observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
let l;
const E = observer(l = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.nameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            e.props.store.checkName({
                name: `${e.props.cluster_id}-${r}`,
                namespace: e.namespace,
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
        e.timeValidator = function(e, a, r) {
            const n = a.slice(0, -1);
            if (!/^[0-9]*$/.test(n)) {
                return r({
                    message: t("INVALID_TIME_DESC")
                });
            }
            r();
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { isEdit, formRef, formTemplate } = props;
                const rules = isEdit ? [] : [
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
                ];
                return <module186.Form data={formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={rules}><module186.Input name="metadata.name" onChange={this.handleNameChange} maxLength={63} readOnly={isEdit}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("CHECK_INTERVAL")} desc={t("ALERTING_POLICY_CHECK_INTERVAL_DESC")} rules={[
                    {
                        validator: this.timeValidator
                    }
                ]}><Module1082 name="spec.interval" unitOptions={this.durationUnitOptions} defaultValue={this.durationUnitOptions[1].value}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.namespace;
            }
        },
        {
            key: "durationUnitOptions",
            get: function() {
                return [
                    {
                        label: t("SECONDS"),
                        value: "s"
                    },
                    {
                        label: t("MINUTES"),
                        value: "m"
                    },
                    {
                        label: t("HOURS"),
                        value: "h"
                    }
                ];
            }
        },
        {
            key: "severities",
            get: function() {
                return SEVERITY_LEVEL.map((level)=>({
                        label: t(level.label),
                        value: level.value,
                        level
                    }));
            }
        }
    ]);
    return r;
})(Component)) || l;
export default E;
