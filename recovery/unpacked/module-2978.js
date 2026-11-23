import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-48.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module2979 from "./module-2979.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import Module873 from "./module-873.js";
import Module1291 from "./module-1291.js";
import Module1096 from "./module-1096.js";
import Module1292 from "./module-1292.js";
import Module1293 from "./module-1293.js";
import Module1288 from "./module-1288.js";
import { PATTERN_NAME } from "./module-72.js";
import { getLeftQuota, getUsedQuota } from "./module-248.js";
import module886 from "./module-886.js";
import module914 from "./module-914.js";
import module2981 from "./module-2981.js";
const w = [
    "limits.cpu",
    "limits.memory",
    "requests.cpu",
    "requests.memory"
];
const M = ((Component_1)=>{
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
        e.quotaStore = new module886;
        e.workspaceQuotaStore = new module914;
        e.state = {
            leftQuota: ""
        };
        e.nameValidator = function(a, r, n) {
            const e_props = e.props;
            const { namespace, cluster } = e_props;
            if (e_props.isEdit) {
                return n();
            }
            if (r) {
                return void e.props.store.checkName({
                    name: r,
                    namespace,
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
            }
            return n();
        };
        e.handleNameChange = function(t) {
            const a = t.slice(0, 63);
            module74(e.formTemplate, "spec.deployment.template.metadata.labels.app", a);
            module74(e.formTemplate, 'spec.deployment.template.metadata.labels["springcloud.kubesphere.io/app"]', a);
            module74(e.formTemplate, "spec.deployment.template.spec.containers[0].name", a);
            module74(e.formTemplate, "spec.deployment.selector.matchLabels.app", a);
            module74(e.formTemplate, 'spec.deployment.labels["springcloud.kubesphere.io/app"]', a);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.initContainerPorts();
                this.fetchQuota();
            }
        },
        {
            key: "initContainerPorts",
            value: function() {
                const e = module26(this.formTemplate, `${this.prefix}.ports`);
                const t = module26(this.formTemplate, "spec.service.ports");
                if (!module63(e)) {
                    const a = e.map((e, a)=>({
                            ...e,
                            servicePort: module26(t, `${a}.port`)
                        }));
                    module74(this.formTemplate, `${this.prefix}.ports`, a);
                }
            }
        },
        {
            key: "fetchQuota",
            value: function() {
                const _this = this;
                const props = this.props;
                const { workspace, cluster, namespace } = props;
                Promise.all([
                    this.quotaStore.fetch({
                        cluster,
                        namespace
                    }),
                    this.workspaceQuotaStore.fetchDetail({
                        workspace,
                        name: workspace,
                        cluster
                    })
                ]).then((t)=>{
                    const workspace = getLeftQuota(t[1], module26(t[0], "data")).workspace;
                    const r = getUsedQuota(module26(t[0], "data"));
                    const leftQuota = {};
                    w.forEach((e)=>{
                        const t = workspace[e];
                        const l = r[e];
                        if (t && !module159(t)) {
                            leftQuota[e] = module2979(t, l);
                        } else {
                            leftQuota[e] = undefined;
                        }
                    });
                    _this.setState({
                        leftQuota
                    });
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, rootStore, namespace, cluster, isEdit } = props;
                return <module186.Form ref={formRef} data={this.formTemplate}><module186.Columns className={module2981.columns}><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
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
                ]}><module186.Input name="metadata.name" maxLength={63} autoFocus={!isEdit} disabled={isEdit} onChange={this.handleNameChange}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns className={module2981.columns}><module186.Column><module186.Form.Item label={t("IMAGE")} rules={[
                    {
                        required: true,
                        message: t("GATEWAY_IMAGE_EMPTY_DESC")
                    }
                ]}><module186.Input name="spec.deployment.template.spec.containers[0].image" placeholder="nginx:latest"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("REPLICA_COUNT")} rules={[
                    {
                        required: true,
                        message: t("REPLICA_COUNT_EMPTY_DESC")
                    }
                ]}><Module800 name="spec.deployment.replicas" defaultValue={1} min={1} integer controls/></module186.Form.Item></module186.Column></module186.Columns><div className={module2981.wrapper}><module186.Form.Item><Module873 name={`${this.prefix}.resources`} {...this.resourceLimitProps}/></module186.Form.Item></div><Module1096 prefix={this.prefix} withService/><Module1292 prefix={this.prefix}/><Module1293 prefix={this.prefix}/><module186.Form.Group label={t("ENVIRONMENT_VARIABLE_PL")} desc={t("CONTAINER_ENVIRONMENT_DESC")} checkable><module186.Form.Item><Module1291 name="spec.deployment.template.spec.containers[0].env" rootStore={rootStore} namespace={namespace} cluster={cluster}/></module186.Form.Item></module186.Form.Group><Module1288 prefix={this.prefix}/></module186.Form>;
            }
        },
        {
            key: "prefix",
            get: function() {
                return "spec.deployment.template.spec.containers[0]";
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate;
            }
        },
        {
            key: "resourceLimitProps",
            get: function() {
                const leftQuota = this.state.leftQuota;
                return {
                    defaultValue: {
                        limits: {
                            cpu: module26(this.formTemplate, `${this.prefix}.resources["limits.cpu"]`),
                            memory: module26(this.formTemplate, `${this.prefix}.resources["limits.memory"]`)
                        },
                        requests: {
                            cpu: module26(this.formTemplate, `${this.prefix}.resources["requests.cpu"]`),
                            memory: module26(this.formTemplate, `${this.prefix}.resources["requests.memory"]`)
                        }
                    },
                    workspaceLimitProps: module63(leftQuota) ? {} : {
                        limits: {
                            cpu: module26(leftQuota, "limits.cpu"),
                            memory: module26(leftQuota, "limits.memory")
                        },
                        requests: {
                            cpu: module26(leftQuota, "requests.cpu"),
                            memory: module26(leftQuota, "requests.memory")
                        }
                    }
                };
            }
        }
    ]);
    return r;
})(Component);
export default M;
