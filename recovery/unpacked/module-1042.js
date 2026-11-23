import "./module-15.js";
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
import module26 from "./module-26.js";
import module199 from "./module-199.js";
import { Component, createRef } from "./module-553.js";
import { observer } from "./module-239.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import Module1549 from "./module-1549.js";
import Module1568 from "./module-1568.js";
import Module2439 from "./module-2439.js";
import Module2440 from "./module-2440.js";
let l;
const _ = observer(l = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.groupRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formRef, store, module, cluster, prefix, isFederated, isEdgeWize, onlyMetaData, isProject, isEdge } = props;
                const metadata = this.fedFormTemplate.metadata;
                const C = metadata === undefined ? {} : metadata;
                const D = {
                    project: C.namespace,
                    nodeGroup: C.labels?.["apps.edgewize.io/nodegroup"] || "",
                    nodeName: C.labels?.["apps.edgewize.io/node"] || ""
                };
                return <module186.Form data={this.fedFormTemplate} ref={formRef}>{!onlyMetaData && globals.app.hasClusterExtensionModule(cluster, "network") && !isFederated && <Module1549 isEdgeWize={isEdgeWize} prefix={prefix} cluster={cluster} namespace={this.namespace} replicas={module26(this.formTemplate, "spec.replicas")} rootStore={this.props.rootStore} formTemplate={this.formTemplate}/>}{!onlyMetaData && module !== "daemonsets" && <>{isProject && isEdge || isEdgeWize ? <Module1568 cluster={cluster} namespace={this.namespace} value={D.nodeGroup ? [
                    D
                ] : []} max={1} onChange={function(e) {
                    const n = e?.[0];
                    const l = n?.nodeGroup ?? "";
                    const nodeName = n?.nodeName ?? "";
                    const labels = {
                        "apps.edgewize.io/nodegroup": l,
                        "apps.edgewize.io/node": nodeName
                    };
                    const i = {
                        metadata: {
                            labels
                        },
                        spec: {
                            template: {
                                metadata: {
                                    labels
                                },
                                spec: {
                                    nodeName
                                }
                            }
                        }
                    };
                    module199(_this.fedFormTemplate, i);
                }}/> : <module186.Form.Group label={t("SELECT_NODES")} desc={t("SELECT_NODES_DESC")} checkable><Module2440 isEdgeWize={isEdgeWize} prefix={prefix} cluster={cluster} namespace={this.namespace} formTemplate={this.fedFormTemplate}/></module186.Form.Group>}</>}<module186.Form.Group ref={this.groupRef} label={t("ADD_METADATA")} desc={t("ADD_METADATA_DESC")} keepDataWhenUnCheck checkable><Module2439 store={store} module={module} cluster={cluster} namespace={this.namespace} formTemplate={this.formTemplate} isFederated={isFederated} formGroupRef={this.groupRef}/></module186.Form.Group></module186.Form>;
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
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "spec.template.spec";
            }
        }
    ]);
    return r;
})(Component)) || l;
export default _;
