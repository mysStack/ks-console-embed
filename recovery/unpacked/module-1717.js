import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import { observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module960 from "./module-960.js";
import module1628 from "./module-1628.js";
import { getLocalTime, learnMoreTip } from "./module-52.js";
import { REPO_KEY_MAP, TIMETRIGGERINTERVALS } from "./module-72.js";
import Module3214 from "./module-3214.js";
import Module3216 from "./module-3216.js";
import module3218 from "./module-3218.js";
let o;
let u;
let c;
const k = observer((c = u = ((Component_1)=>{
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
        n.handleChange = function(e) {
            return function(t) {
                const formTemplate = n.props.formTemplate;
                module74(formTemplate, e, t);
                n.forceUpdate();
            };
        };
        n.removeCronError = function() {
            if (n.state.cronMessage) {
                n.setState({
                    cronMessage: {}
                });
            }
        };
        n.checkCronScript = (()=>{
            const e = module44(module41.mark(function e(a, r, o) {
                let u;
                let c;
                let s;
                let i;
                let cluster;
                let devops;
                let script;
                let m;
                let message;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                u = n.props;
                                c = u.formTemplate;
                                s = u.type;
                                i = c.name;
                                cluster = c.cluster;
                                devops = c.devops;
                                script = r;
                                e.next = 5;
                                return n.scmStore.checkCronScript({
                                    devops,
                                    script,
                                    cluster,
                                    pipeline: s === "create" ? undefined : i
                                });
                            case 5:
                                if ((m = e.sent).result !== "error") {
                                    e.next = 10;
                                    break;
                                }
                                n.setState({
                                    cronMessage: {
                                        error: m.message
                                    }
                                }, function() {});
                                o(m.message);
                                return e.abrupt("return");
                            case 10:
                                if (m.result === "ok") {
                                    message = t("PIPELINE_CRON_DESC", {
                                        nextTime: getLocalTime(m.nextTime).format("YYYY-MM-DD HH:mm:ss")
                                    });
                                    n.setState({
                                        cronMessage: {
                                            message
                                        }
                                    });
                                    o();
                                }
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t, a, r) {
                return e.apply(this, arguments);
            };
        })();
        n.handleScrollToBottom = function() {
            const formTemplate = n.props.formTemplate;
            const { devopsName, cluster, devops } = formTemplate;
            const list = n.pipelineStore.list;
            const { total, page } = list;
            if (!(total <= list.limit * page)) {
                n.pipelineStore.fetchList({
                    devopsName,
                    cluster,
                    devops,
                    filter: "no-folders",
                    page: page + 1
                });
            }
        };
        n.renderDisCarder = function() {
            const formTemplate = n.props.formTemplate;
            const a = module26(formTemplate, "multi_branch_pipeline");
            if (formTemplate.enable_discarder) {
                if (module63(a)) {
                    return <div className={module3218.wrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("BUILD_RECORD_RETENTION_PERIOD_DAYS")} desc={t("BUILD_RECORD_RETENTION_PERIOD_DAYS_DESC")} rules={[
                        {
                            pattern: /^(?!0)\d+$/,
                            message: t("BUILD_RECORD_RETENTION_PERIOD_DAYS_INVALID_TIP")
                        }
                    ]}><module186.Input name={`${n.prefix}.discarder.days_to_keep`} defaultValue="7"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("MAXIMUM_BUILD_RECORDS")} desc={t("MAXIMUM_BUILD_RECORDS_DESC")} rules={[
                        {
                            pattern: /^(?!0)\d+$/,
                            message: t("MAXIMUM_BUILD_RECORDS_INVALID_TIP")
                        }
                    ]}><module186.Input name={`${n.prefix}.discarder.num_to_keep`} defaultValue="10"/></module186.Form.Item></module186.Column></module186.Columns></div>;
                }
                return <div className={module3218.wrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("BRANCH_RETENTION_PERIOD_DAYS")} desc={t("BRANCH_RETENTION_PERIOD_DAYS_DESC")} rules={[
                    {
                        pattern: /^(?!0)\d+$/,
                        message: t("BUILD_RECORD_RETENTION_PERIOD_DAYS_INVALID_TIP")
                    }
                ]}><module186.Input name={`${n.prefix}.discarder.days_to_keep`} defaultValue="7"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("MAXIMUM_BRANCHES")} desc={t("MAXIMUM_BRANCHES_DESC")} rules={[
                    {
                        pattern: /^(?!0)\d+$/,
                        message: t("MAXIMUM_BUILD_RECORDS_INVALID_TIP")
                    }
                ]}><module186.Input name={`${n.prefix}.discarder.num_to_keep`} defaultValue="5"/></module186.Form.Item></module186.Column></module186.Columns></div>;
            }
        };
        n.scmStore = new module1628;
        n.pipelineStore = new module960;
        n.state = {
            cronMessage: {}
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const { devopsName, cluster, devops } = formTemplate;
                this.pipelineStore.fetchList({
                    devopsName,
                    devops,
                    cluster,
                    filter: "no-folders"
                });
            }
        },
        {
            key: "renderTip",
            value: function(content) {
                return <module186.Tooltip content={content} placement="right"><module186.Icon name="question" className="margin-l12"/></module186.Tooltip>;
            }
        },
        {
            key: "renderNoSource",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const a = module26(formTemplate, "enable_timer_trigger");
                const r = t.html("PIPELINE_SCHEDULE_DESC");
                return <div><module186.Form.Item desc={t("NO_CONCURRENT_BUILD_DESC")}><module186.Checkbox name={`${this.prefix}.disable_concurrent`} checked={module26(formTemplate, `${this.prefix}.disable_concurrent`)} onChange={this.handleChange(`${this.prefix}.disable_concurrent`)}>{t("NO_CONCURRENT_BUILDS")}</module186.Checkbox></module186.Form.Item><div className="h6"><>{t("BUILD_PARAMETERS")}{this.renderTip(t("BUILD_PARAMETERS_TIP"))}</></div><Module3216 name={`${this.prefix}.parameters`} formTemplate={this.props.formTemplate}/><div className="h6">{t("BUILD_TRIGGER")}</div><module186.Form.Item><module186.Checkbox name="enable_timer_trigger" checked={a} onChange={this.handleChange("enable_timer_trigger")}>{t("BUILD_PERIODICALLY")}{this.renderTip(t("BUILD_PERIODICALLY_TIP"))}</module186.Checkbox></module186.Form.Item>{a && <div className={module3218.wrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("SCHEDULE")} desc={this.state.cronMessage.message || learnMoreTip(r)} tip={t("tips_timer_trigger")} rules={[
                    {
                        validator: this.checkCronScript
                    }
                ]}><module186.Input name={`${this.prefix}.timer_trigger.cron`} placeholder=" " onChange={this.removeCronError}/></module186.Form.Item></module186.Column></module186.Columns></div>}</div>;
            }
        },
        {
            key: "renderGitOptions",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const a = `${this.scmPrefix}.git_clone_option.shallow`;
                const r = module26(formTemplate, a);
                return <><div className="h6">{t("CLONE_SETTINGS")}</div><module186.Form.Item><module186.Checkbox checked={r} name={a} onChange={this.handleChange(a)}>{t("ENABLE_SHALLOW_CLONE")}</module186.Checkbox></module186.Form.Item>{r && <div className={module3218.wrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("CLONE_DEPTH")}><Module800 name={`${this.scmPrefix}.git_clone_option.depth`} defaultValue={1}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("CLONE_TIMEOUT_PERIOD")}><Module800 name={`${this.scmPrefix}.git_clone_option.timeout`} defaultValue={20}/></module186.Form.Item></module186.Column></module186.Columns></div>}<div className="h6">Webhook</div><module186.Form.Item label={t("WEBHOOK_PUSH_URL")} desc={t("WEBHOOK_PUSH_DESC")}><div className="disabled-input">{this.webhookUrl}</div></module186.Form.Item></>;
            }
        },
        {
            key: "renderRegFilter",
            value: function() {
                const enable_regex_filter = this.props.formTemplate.enable_regex_filter;
                return <><div className="h6">{t("FILTER_BY_REGEX")}</div><module186.Form.Item><module186.Checkbox checked={enable_regex_filter} name="enable_regex_filter" onChange={this.handleChange("enable_regex_filter")}>{t("FILTER_BY_REGEX_DESC")}</module186.Checkbox></module186.Form.Item>{enable_regex_filter && <div className={module3218.wrapper}><module186.Form.Item label={t("REGEX")}><module186.Input name={`${this.scmPrefix}.regex_filter`} defaultValue=".*"/></module186.Form.Item></div>}</>;
            }
        },
        {
            key: "renderWithSource",
            value: function() {
                const formTemplate = this.props.formTemplate;
                const sourceType = module26(formTemplate, "multi_branch_pipeline.source_type", "");
                const { enable_timer_trigger, enable_multibranch_job_trigger } = formTemplate;
                const isLoading = this.pipelineStore.list.isLoading;
                const o = [
                    "git",
                    "github",
                    "bitbucket_server"
                ].includes(sourceType);
                const u = [
                    "git",
                    "github",
                    "bitbucket_server",
                    "gitlab"
                ].includes(sourceType);
                return <div>{sourceType !== "git" && sourceType !== "svn" ? <><div className="h6">{t("STRATEGY_SETTINGS")}</div><div className={module3218.wrapper}><module186.Form.Item><Module3214 sourceType={sourceType} name={`multi_branch_pipeline.${sourceType}_source`}/></module186.Form.Item></div></> : null}{u ? this.renderRegFilter() : null}<div className="h6">{t("SCRIPT_PATH")}</div><module186.Form.Item label={t("PATH")} desc={t("SCRIPT_PATH_DESC")}><module186.Input name={`${this.prefix}.script_path`} defaultValue="Jenkinsfile"/></module186.Form.Item><div className="h6">{t("SCAN_TRIGGER")}</div><module186.Form.Item><module186.Checkbox checked={enable_timer_trigger} name="enable_timer_trigger" onChange={this.handleChange("enable_timer_trigger")}>{t("SCAN_PERIODICALLY")}{this.renderTip(t("TIME_TRIGGER_DESC"))}</module186.Checkbox></module186.Form.Item>{enable_timer_trigger && <div className={module3218.wrapper}><module186.Form.Item label={t("SCAN_INTERVAL")}><module186.Select name={`${this.prefix}.timer_trigger.interval`} options={TIMETRIGGERINTERVALS} defaultValue={sourceType === "svn" || sourceType === "single_svn" ? "600000" : "3600000"}/></module186.Form.Item></div>}<div className="h6">{t("BUILD_TRIGGER")}</div><module186.Form.Item><module186.Checkbox checked={enable_multibranch_job_trigger} name="enable_multibranch_job_trigger" onChange={this.handleChange("enable_multibranch_job_trigger")}>{t("PIPELINE_EVENT_TRIGGER")}</module186.Checkbox></module186.Form.Item>{enable_multibranch_job_trigger && <div className={module3218.wrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("WHEN_CREATE_PIPELINE")} desc={t("WHEN_CREATE_PIPELINE_DESC")}><module186.Select name={`${this.prefix}.multibranch_job_trigger.create_action_job_to_trigger`} isLoading={isLoading} isLoadingAtBottom onMenuScrollToBottom={this.handleScrollToBottom} options={this.pipelineLists} placeholder={t("SELECT_PIPELINE_SCAP")}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("WHEN_DELETE_PIPELINE")} desc={t("WHEN_DELETE_PIPELINE_DESC")}><module186.Select name={`${this.prefix}.multibranch_job_trigger.delete_action_job_to_trigger`} isLoading={isLoading} isLoadingAtBottom onMenuScrollToBottom={this.handleScrollToBottom} options={this.pipelineLists} placeholder={t("SELECT_PIPELINE_SCAP")}/></module186.Form.Item></module186.Column></module186.Columns></div>}{o ? this.renderGitOptions() : null}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                const n = module26(formTemplate, "multi_branch_pipeline");
                return <div className={module3218.advance}><module186.Form data={formTemplate} ref={formRef}><div className="h6">{module63(n) ? t("BUILD_SETTINGS") : t("BRANCH_SETTINGS")}</div><module186.Form.Item><module186.Checkbox checked={formTemplate.enable_discarder} name="enable_discarder" onChange={this.handleChange("enable_discarder")}>{module63(n) ? t("DELETE_OUTDATED_BUILD_RECORDS") : t("DELETE_OUTDATED_BRANCHES")}{this.renderTip(module63(n) ? t("DELETE_OUTDATED_BUILD_RECORDS_TIP") : t("DELETE_OUTDATED_BRANCHES_TIP"))}</module186.Checkbox></module186.Form.Item>{this.renderDisCarder()}{module63(n) ? this.renderNoSource() : this.renderWithSource()}</module186.Form></div>;
            }
        },
        {
            key: "sourceType",
            get: function() {
                const formTemplate = this.props.formTemplate;
                return module26(formTemplate, "multi_branch_pipeline.source_type", "");
            }
        },
        {
            key: "prefix",
            get: function() {
                if (this.sourceType) {
                    return "multi_branch_pipeline";
                }
                return "pipeline";
            }
        },
        {
            key: "scmPrefix",
            get: function() {
                return `multi_branch_pipeline.${REPO_KEY_MAP[this.sourceType]}`;
            }
        },
        {
            key: "webhookUrl",
            get: function() {
                const formTemplate = this.props.formTemplate;
                let t = module26(formTemplate, `${this.scmPrefix}.url`, "");
                const a = module26(formTemplate, `${this.scmPrefix}.api_uri`, "");
                const r = module26(formTemplate, `${this.scmPrefix}.owner`, "");
                const n = module26(formTemplate, `${this.scmPrefix}.repo`, "");
                const l = `${window.location.protocol}//${window.location.host}/kapis/devops.kubesphere.io/v1alpha2/webhook/git?url=`;
                switch(this.sourceType){
                    case "bitbucket_server":
                        t = `${a}/scm/${r}/${n}.git`;
                        break;
                    case "github":
                        t = `https://github.com/${r}/${n}.git`;
                }
                return `${l}${encodeURIComponent(t)}`;
            }
        },
        {
            key: "pipelineLists",
            get: function() {
                return this.pipelineStore.list.data.map((e)=>({
                        label: e.name,
                        value: e.fullName
                    }));
            }
        }
    ]);
    return r;
})(Component), u.defaultProps = {
    type: "create"
}, o = c)) || o;
export default k;
