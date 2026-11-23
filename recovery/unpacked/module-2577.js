import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-48.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { observer } from "./module-239.js";
import Module1106 from "./module-1106.js";
import { updateLabels } from "./module-52.js";
import { MODULE_KIND_MAP, PATTERN_ALIAS_NAME, PATTERN_SERVICE_NAME, PATTERN_SERVICE_VERSION } from "./module-72.js";
import module443 from "./module-443.js";
import module318 from "./module-318.js";
import module437 from "./module-437.js";
import module1091 from "./module-1091.js";
import module859 from "./module-859.js";
import module1000 from "./module-1000.js";
let l;
const D = observer(l = ((Component_1)=>{
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
        n.formTemplate = n.props.formTemplate.Service;
        n.handleNameChange = function(e) {
            const n_props = n.props;
            const { isFederated, noWorkload } = n_props;
            const l = module26(n.formTemplate, "metadata.labels", {});
            l.app = e.slice(0, 63);
            updateLabels(isFederated ? module26(n.formTemplate, "spec.template") : n.formTemplate, "services", l);
            if (isFederated) {
                module74(n.formTemplate, "metadata.labels.app", e.slice(0, 63));
            }
            if (!noWorkload) {
                n.updateWorkload(e);
            }
        };
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            if (n.props.components) {
                const u = Object.keys(n.props.components)?.filter(function(e) {
                    return e !== n.state.originName;
                });
                if (u?.includes(a)) {
                    return r({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
            }
            n.store.checkName({
                name: a,
                namespace: n.namespace,
                cluster: n.props.cluster
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
        n.versionValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const l = module26(n.formTemplate, "metadata.name");
            const name = `${l}-${a}`;
            n.workloadStore.checkName({
                name,
                namespace: n.namespace,
                cluster: n.props.cluster
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NEW_VERSION_NUMBER_EXIST_DESC", {
                            name
                        }),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.handleVersionChange = function(e) {
            const t = module26(n.formTemplate, "metadata.name");
            const a = `${t}-${e}`;
            const n_props = n.props;
            const { formTemplate, isFederated } = n_props;
            module74(formTemplate[n.workloadKind], "metadata.name", a);
            if (isFederated) {
                module74(formTemplate.Service, 'metadata.annotations["kubesphere.io/workloadName"]', a);
            }
        };
        n.state = {
            showServiceMesh: false,
            selectApp: {},
            originName: module26(e.formTemplate, "Service.metadata.name")
        };
        const e_isEdgeWize = e.isEdgeWize;
        n.store = e_isEdgeWize ? new module1091 : new module443;
        n.workloadStore = e_isEdgeWize ? new module859(e.module) : new module318(e.module);
        if (e.isFederated) {
            n.store = e_isEdgeWize ? new module1000(n.store) : new module437(n.store);
            n.workloadStore = e_isEdgeWize ? new module1000(n.workloadStore) : new module437(n.workloadStore);
        }
        return n;
    }
    module37(r, [
        {
            key: "updateWorkload",
            value: function(e) {
                const props = this.props;
                const { module, formTemplate, isFederated } = props;
                const l = module26(this.formTemplate, "metadata.labels", {});
                const u = module26(this.formTemplate, "metadata.namespace");
                const o = `${e}-${l.version}`;
                module74(formTemplate[this.workloadKind], "metadata.name", o);
                module74(formTemplate[this.workloadKind], "metadata.namespace", u);
                module74(formTemplate[this.workloadKind], "metadata.labels.app", e);
                updateLabels(isFederated ? module26(formTemplate[this.workloadKind], "spec.template") : formTemplate[this.workloadKind], module, l);
                if (this.workloadKind === "StatefulSet") {
                    module74(formTemplate[this.workloadKind], isFederated ? "spec.template.spec.serviceName" : "spec.serviceName", e);
                }
                if (isFederated) {
                    module74(formTemplate.Service, 'metadata.annotations["kubesphere.io/workloadName"]', o);
                    module74(formTemplate.Service, 'metadata.annotations["kubesphere.io/workloadModule"]', module);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, noWorkload, cluster, namespace, isEdgeWize } = props;
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("SERVICE_NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_SERVICE_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: t("SERVICE_NAME_DESC")
                        })
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" onChange={this.handleNameChange} autoFocus maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns>{!namespace && <module186.Column><module186.Form.Item label={t("PROJECT")} desc={t("PROJECT_DESC")} rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    }
                ]}><Module1106 name="metadata.namespace" cluster={cluster} isEdgeWize={isEdgeWize} defaultValue={this.namespace}/></module186.Form.Item></module186.Column>}{!noWorkload && <module186.Column><module186.Form.Item label={t("VERSION")} desc={t("VERSION_DESC")} rules={[
                    {
                        required: true,
                        message: t("VERSION_DESC")
                    },
                    {
                        pattern: PATTERN_SERVICE_VERSION,
                        message: t("VERSION_DESC")
                    },
                    {
                        validator: this.versionValidator
                    }
                ]}><module186.Input name="metadata.labels.version" defaultValue="v1" maxLength={16} onChange={this.handleVersionChange}/></module186.Form.Item></module186.Column>}<module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>;
            }
        },
        {
            key: "workloadKind",
            get: function() {
                const props = this.props;
                const e_module = props.module;
                if (props.noWorkload) {
                    return "";
                }
                return MODULE_KIND_MAP[e_module];
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "serviceMeshOptions",
            get: function() {
                return [
                    {
                        label: t("OFF"),
                        value: "false"
                    },
                    {
                        label: t("ON"),
                        value: "true"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || l;
export default D;
