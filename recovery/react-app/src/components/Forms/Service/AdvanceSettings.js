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
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module189 from "unpacked/module-189.js";
import module242 from "unpacked/module-242.js";
import { MODULE_KIND_MAP } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module2579 from "components/Forms/Workload/AdvanceSettings/PodIPRange";
import Module800 from "components/Inputs/NumberInput";
import Module2580 from "components/Forms/Service/AdvanceSettings/InternetAccess";
import Module2582 from "components/Forms/Service/AdvanceSettings/Metadata";
import Module2583 from "components/Forms/Service/AdvanceSettings/NodeSchedule";
const S = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.metadataRef = createRef();
        e.handleLabelsChange = function(t) {
            const e_props = e.props;
            const a_formTemplate = e_props.formTemplate;
            if (!e_props.noWorkload) {
                module74(a_formTemplate, `Service.${e.fedPrefix}spec.selector`, module189(t, "version"));
                module74(a_formTemplate, `Service.${e.fedPrefix}metadata.labels`, t);
                module74(a_formTemplate, "Service.metadata.labels", t);
            }
        };
        e.handleSessionAffinityChange = function(t) {
            const formTemplate = e.props.formTemplate;
            module74(formTemplate, `Service.${e.fedPrefix}spec.sessionAffinity`, t ? "ClientIP" : "None");
            if (t) {
                module74(formTemplate, `Service.${e.fedPrefix}spec.sessionAffinityConfig.clientIP.timeoutSeconds`, 10800);
            } else {
                module242(formTemplate, `Service.${e.fedPrefix}spec.sessionAffinityConfig`);
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.metadataRef.current.setState({
                    isCheck: true
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate, cluster, module, store, noWorkload, isFederated, isEdgeWize } = props;
                return <module186.Form data={formTemplate} ref={formRef}>{!noWorkload && !isFederated && globals.app.hasClusterModule(cluster, "ippool") && <Module2579 isEdgeWize={isEdgeWize} cluster={cluster} namespace={this.namespace} prefix={`${this.kind}.${this.fedPrefix}spec.template.`} replicas={formTemplate?.Deployment?.spec?.replicas}/>}{(noWorkload || module !== "statefulsets") && <module186.Form.Group label={t("EXTERNAL_ACCESS")} desc={t("SERVICE_EXTERNAL_ACCESS_DESC")} checkable><Module2580 isEdgeWize={isEdgeWize} formTemplate={formTemplate} isFederated={isFederated} clusters={this.clusters}/></module186.Form.Group>}<module186.Form.Group label={t("SESSION_PERSISTENCE")} desc={t("SESSION_PERSISTENCE_DESC")} onChange={this.handleSessionAffinityChange} checkable><module186.Form.Item label={t("MAXIMUM_STICKINESS_DURATION")} desc={t("MAXIMUM_STICKINESS_DURATION_DESC")}><Module800 name={`Service.${this.fedPrefix}spec.sessionAffinityConfig.clientIP.timeoutSeconds`} min={0} max={86400}/></module186.Form.Item></module186.Form.Group>{!noWorkload && <module186.Form.Group label={t("SELECT_NODES")} desc={t("SELECT_NODES_DESC")} checkable><Module2583 isEdgeWize={isEdgeWize} kind={this.kind} cluster={cluster} namespace={this.namespace} formTemplate={formTemplate} isFederated={isFederated}/></module186.Form.Group>}<module186.Form.Group label={t("ADD_METADATA")} desc={t("SERVICE_ADD_METADATA_DESC")} ref={this.metadataRef} keepDataWhenUnCheck checkable><Module2582 store={store} module={module} kind={this.kind} namespace={this.namespace} cluster={cluster} formTemplate={formTemplate} onLabelsChange={this.handleLabelsChange} isFederated={isFederated} noWorkload={noWorkload}/></module186.Form.Group></module186.Form>;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.props.formTemplate, "Service.metadata.namespace");
            }
        },
        {
            key: "fedPrefix",
            get: function() {
                if (this.props.isFederated) {
                    return "spec.template.";
                }
                return "";
            }
        },
        {
            key: "kind",
            get: function() {
                const module = this.props.module;
                return MODULE_KIND_MAP[module];
            }
        },
        {
            key: "clusters",
            get: function() {
                const props = this.props;
                const { projectDetail, cluster } = props;
                if (props.isFederated) {
                    return module14.toJS(projectDetail.clusters).map((e)=>e.name);
                }
                return [
                    cluster
                ];
            }
        }
    ]);
    return r;
})(Component);
export default S;
