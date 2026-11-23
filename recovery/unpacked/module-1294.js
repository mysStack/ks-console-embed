import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { generateId, gpuLimitsArr } from "./module-52.js";
import { PATTERN_NAME } from "./module-72.js";
import module186 from "./module-186.js";
import Module873 from "./module-873.js";
import Module951 from "./module-951.js";
import Module2265 from "./module-2265.js";
import module2275 from "./module-2275.js";
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.limitError = "";
        n.valueRenderer = function(e) {
            return <module186.Tag className={module2275.type} type={e.value === "init" ? "warning" : "default"}>{e.label}</module186.Tag>;
        };
        n.renderImageForm = function() {
            const n_props = n.props;
            const { data, namespace, cluster, type, isEdit, isEdgeWize } = n_props;
            const n_imageRegistries = n.imageRegistries;
            const formTemplate = n.getFormTemplate(data, n_imageRegistries);
            return <Module2265 className={module2275.imageSearch} name="image" namespace={namespace} formTemplate={formTemplate} imageRegistries={n_imageRegistries} isEdgeWize={isEdgeWize} cluster={cluster} type={isEdit ? "Edit" : type}/>;
        };
        n.handleError = function(e) {
            n.limitError = e;
        };
        n.limitValidator = function(e, t, a) {
            if (n.limitError !== "") {
                a({
                    message: ""
                });
            }
            a();
        };
        n.duplicatedNameValidator = function(e, a, r) {
            if (n.props.containers.map((e)=>e.name).filter((e)=>e !== n.state.originName).includes(a)) {
                r({
                    message: t("NAME_EXIST_DESC")
                });
            }
            r();
        };
        n.state = {
            originName: e.data.name
        };
        return n;
    }
    module37(r, [
        {
            key: "getGpuLimit",
            value: function() {
                return gpuLimitsArr(this.props.workspaceQuota);
            }
        },
        {
            key: "getFormTemplate",
            value: function(e) {
                if (e && e.image && !e.pullSecret) {
                    const t = e.annotationOfImagePullSecrets;
                    if (!module63(e.annotationOfImagePullSecrets) && t[e.name]) {
                        e.pullSecret = t[e.name];
                    }
                }
                return e;
            }
        },
        {
            key: "renderAdvancedSettings",
            value: function() {
                const props = this.props;
                const { defaultContainerType, onContainerTypeChange, supportGpuSelect } = props;
                const defaultResourceLimit = this.defaultResourceLimit;
                return <Module951 defaultShow={module63(defaultResourceLimit)}><><module186.Columns className={module2275.columns}><module186.Column><module186.Form.Item label={t("CONTAINER_NAME")} desc={t("NAME_DESC")} rules={[
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
                        validator: this.duplicatedNameValidator
                    }
                ]}><module186.Input name="name" defaultValue={`container-${generateId()}`} maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("CONTAINER_TYPE")}><module186.Select name="type" defaultValue={defaultContainerType} options={this.containerTypes} onChange={onContainerTypeChange} valueRenderer={this.valueRenderer}/></module186.Form.Item></module186.Column></module186.Columns><module186.Alert className="margin-b12" type="info" message={t("CONTAINER_RESOURCE_LIMIT_TIP")}/><module186.Form.Item rules={[
                    {
                        validator: this.limitValidator,
                        checkOnSubmit: true
                    }
                ]}><Module873 name="resources" defaultValue={defaultResourceLimit} onError={this.handleError} workspaceLimitProps={this.workspaceLimitProps} supportGpuSelect={supportGpuSelect}/></module186.Form.Item></></Module951>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <module186.Form.Group className={className} label={t("CONTAINER_SETTINGS")} desc={t("CONTAINER_SETTINGS_DESC")} noWrapper>{this.renderImageForm()}{this.renderAdvancedSettings()}</module186.Form.Group>;
            }
        },
        {
            key: "defaultResourceLimit",
            get: function() {
                const limitRange = this.props.limitRange;
                const t = limitRange === undefined ? {} : limitRange;
                if (t.defaultRequest || t.default) {
                    return {
                        requests: t.defaultRequest || {},
                        limits: t.default || {}
                    };
                }
            }
        },
        {
            key: "containerTypes",
            get: function() {
                return [
                    {
                        label: t("WORKER_CONTAINER"),
                        value: "worker"
                    },
                    {
                        label: t("INIT_CONTAINER"),
                        value: "init"
                    }
                ];
            }
        },
        {
            key: "imageRegistries",
            get: function() {
                const imageRegistries = this.props.imageRegistries;
                return (imageRegistries === undefined ? [] : imageRegistries).map((e)=>{
                    const t = module26(e, 'data[".dockerconfigjson"].auths', {});
                    const url = Object.keys(t)[0] || "";
                    const username = module26(t[url], "username");
                    const cluster = e.isFedManaged ? module26(e, "clusters[0].name") : e.cluster;
                    const isSkipTLS = Boolean(module26(e, 'annotations["secret.kubesphere.io/force-insecure"]', false));
                    const isDefault = Boolean(module26(e, "isDefault", false));
                    const auth = module26(t[url], "auth");
                    return {
                        url,
                        username,
                        label: e.aliasName ? `${e.aliasName}（${e.name}）` : e.name,
                        value: e.name,
                        cluster,
                        isSkipTLS,
                        isDefault,
                        auth
                    };
                });
            }
        },
        {
            key: "workspaceLimitProps",
            get: function() {
                const workspaceQuota = this.props.workspaceQuota;
                if (module63(workspaceQuota)) {
                    return {};
                }
                return {
                    limits: {
                        cpu: module26(workspaceQuota, "limits.cpu"),
                        memory: module26(workspaceQuota, "limits.memory")
                    },
                    requests: {
                        cpu: module26(workspaceQuota, "requests.cpu"),
                        memory: module26(workspaceQuota, "requests.memory")
                    },
                    gpuLimit: this.getGpuLimit()
                };
            }
        }
    ]);
    return r;
})(Component);
export default b;
