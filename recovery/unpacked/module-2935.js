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
import "./module-553.js";
import { generateId, gpuLimitsArr } from "./module-52.js";
import { PATTERN_NAME } from "./module-72.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import Module873 from "./module-873.js";
import Module951 from "./module-951.js";
import module1294 from "./module-1294.js";
import module2936 from "./module-2936.js";
const b = ((e)=>{
    module55(r, e);
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "getGpuLimit",
            value: function() {
                return gpuLimitsArr(this.workspaceQuota);
            }
        },
        {
            key: "renderAdvancedSettings",
            value: function() {
                const props = this.props;
                const { defaultContainerType, onContainerTypeChange, isEdit } = props;
                const defaultResourceLimit = this.defaultResourceLimit;
                return <Module951 defaultShow><><module186.Columns className={module2936.columns}><module186.Column><module186.Form.Item label={t("CONTAINER_NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: t("NAME_DESC")
                        })
                    }
                ]}><module186.Input name="name" defaultValue={`container-${generateId()}`} maxLength={63}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("CONTAINER_TYPE")}><module186.Select name="type" defaultValue={defaultContainerType} options={this.containerTypes} onChange={onContainerTypeChange} valueRenderer={this.valueRenderer}/></module186.Form.Item></module186.Column></module186.Columns><module186.Alert className="margin-b12" type="info" message={t("CONTAINER_RESOURCE_LIMIT_TIP")}/><module186.Form.Item rules={[
                    {
                        validator: this.limitValidator,
                        checkOnSubmit: true
                    }
                ]}><Module873 name="resources" defaultValue={defaultResourceLimit} onError={this.handleError} isEdit={isEdit} supportGpuSelect workspaceLimitProps={this.workspaceLimitProps}/></module186.Form.Item></></Module951>;
            }
        },
        {
            key: "defaultResourceLimit",
            get: function() {
                const limitRanges = this.props.limitRanges;
                const t = limitRanges === undefined ? {} : limitRanges;
                if (t.limits || t.requests) {
                    return {
                        requests: t.requests || {},
                        limits: t.limits || {}
                    };
                }
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
})(module1294);
export default b;
