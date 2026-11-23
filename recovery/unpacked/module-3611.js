import "./module-15.js";
import "./module-5.js";
import "./module-48.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import Module1106 from "./module-1106.js";
import Module951 from "./module-951.js";
import module801 from "./module-801.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { Component } from "./module-553.js";
import { learnMoreTip } from "./module-52.js";
import { MODULE_KIND_MAP, PATTERN_ALIAS_NAME, PATTERN_NAME } from "./module-72.js";
const b = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.handleNameChange = module801(function(t) {
            const a = module26(e.formTemplate, "metadata.labels", {});
            a.app = t.slice(0, 63);
            module74(e.formTemplate, "spec.jobTemplate.metadata.labels", a);
        }, 200);
        e.nameValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            e.props.store.checkName({
                name: r,
                namespace: e.namespace,
                cluster: e.props.cluster
            }, "", e.k8sVersion).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("NAME_EXIST_DESC"),
                        field: a.field
                    });
                }
                n();
            });
        };
        e.getConcurrencyPolicyOptions = function() {
            return [
                {
                    label: t("RUN_JOBS_CONCURRENTLY"),
                    value: "Allow"
                },
                {
                    label: t("SKIP_NEW_JOB"),
                    value: "Forbid"
                },
                {
                    label: t("SKIP_OLD_JOB"),
                    value: "Replace"
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "getCronOptions",
            value: function() {
                return [
                    {
                        label: t("EVERY_HOUR"),
                        value: "0 * * * *"
                    },
                    {
                        label: t("EVERY_DAY"),
                        value: "0 0 * * *"
                    },
                    {
                        label: t("EVERY_WEEK"),
                        value: "0 0 * * 0"
                    },
                    {
                        label: t("EVERY_MONTH"),
                        value: "0 0 1 * *"
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, isEdgeWize } = props;
                const n = t.html("CRONJOB_CRON_DESC");
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
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
                ]}><module186.Input name="metadata.name" onChange={this.handleNameChange} autoFocus maxLength={52}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns className="is-multiline">{!this.props.namespace && <module186.Column className="is-6"><module186.Form.Item label={t("PROJECT")} desc={t("PROJECT_DESC")} rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    }
                ]}><Module1106 isEdgeWize={isEdgeWize} name="metadata.namespace" cluster={this.props.cluster} defaultValue={this.namespace}/></module186.Form.Item></module186.Column>}<module186.Column className="is-6"><module186.Form.Item label={t("SCHEDULE")} desc={learnMoreTip(n)} rules={[
                    {
                        required: true,
                        message: t("ENTER_SCHEDULE_TIP")
                    }
                ]}><module186.Select name="spec.schedule" options={this.getCronOptions()} searchable placeholder=" "/></module186.Form.Item></module186.Column><module186.Column className="is-6"><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns><Module951><module186.Columns className="margin-t8"><module186.Column><module186.Form.Item label={t("MAXIMUM_DELAY")} desc={t("MAXIMUM_DELAY_DESC")}><Module800 min={0} name="spec.startingDeadlineSeconds" integer/></module186.Form.Item><module186.Form.Item label={t("FAILED_JOBS_RETAINED")} desc={t("FAILED_JOBS_RETAINED_DESC")}><Module800 min={0} name="spec.failedJobsHistoryLimit" integer/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("SUCCESSFUL_JOBS_RETAINED")} desc={t("SUCCESSFUL_JOBS_RETAINED_DESC")}><Module800 min={0} name="spec.successfulJobsHistoryLimit" integer/></module186.Form.Item><module186.Form.Item label={t("CONCURRENCY_POLICY")} desc={t("CONCURRENCY_POLICY_DESC")}><module186.Select name="spec.concurrencyPolicy" options={this.getConcurrencyPolicyOptions()}/></module186.Form.Item></module186.Column></module186.Columns></Module951></module186.Form>;
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
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "k8sVersion",
            get: function() {
                return globals.clusterConfig?.[this.props.cluster]?.k8sVersion;
            }
        }
    ]);
    return r;
})(Component);
export default b;
