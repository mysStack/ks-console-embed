import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-48.js";
import "./module-97.js";
import "./module-27.js";
import "./module-190.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-64.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module807 from "./module-807.js";
import module1039 from "./module-1039.js";
import module63 from "./module-63.js";
import module926 from "./module-926.js";
import module159 from "./module-159.js";
import module186 from "./module-186.js";
import { cpuFormat, memoryFormat } from "./module-52.js";
import Module1295 from "./module-1295.js";
import module2263 from "./module-2263.js";
const T = ((Component_1)=>{
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
        n.cpuFormatter = function(e) {
            if (e > 0 && e < 1) {
                return e.toFixed(2);
            }
            if (e > 1 && e !== Infinity) {
                return e.toFixed(1);
            }
            return e;
        };
        n.memoryFormatter = function(e) {
            if ((e = Math.round(e)) > 0 && e < 1000) {
                return e - e % 10;
            }
            if (e > 1000 && e < 2000) {
                return e - e % 50;
            }
            if (e > 2000 && e !== Infinity) {
                return e - e % 100;
            }
            return e;
        };
        n.checkError = function(e) {
            let cpuError = "";
            let memoryError = "";
            const { requests, limits } = e;
            if (limits.cpu && !String(limits.cpu).endsWith(".") && Number(requests.cpu) > Number(limits.cpu)) {
                cpuError = "RequestExceed";
            }
            if (limits.memory && !String(limits.memory).endsWith(".") && Number(requests.memory) > Number(limits.memory)) {
                memoryError = "RequestExceed";
            }
            return {
                cpuError,
                memoryError
            };
        };
        n.checkAndTrigger = function() {
            const n_state = n.state;
            const { requests, limits, gpu, workspaceLimits, workspaceRequests } = n_state;
            n.setState({
                workspaceLimitCheck: {
                    requestCpuError: n.checkNumOutLimit(requests.cpu, workspaceRequests.cpu),
                    requestMemoryError: n.checkNumOutLimit(requests.memory, workspaceRequests.memory),
                    limitCpuError: n.checkNumOutLimit(limits.cpu, workspaceLimits.cpu),
                    limitMemoryError: n.checkNumOutLimit(limits.memory, workspaceLimits.memory),
                    gpuLimitError: n.checkGpuOutOfLimit(gpu)
                }
            }, n.triggerChange);
        };
        n.checkGpuOutOfLimit = function(e) {
            const e_type = e.type;
            const a = module26(n.props, "workspaceLimitProps.gpuLimit", []).filter((e)=>Object.keys(e)[0].endsWith(e_type));
            const r = a.length > 0 ? Object.values(a[0])[0] : "Not Limited";
            return n.checkNumOutLimit(e.value, r);
        };
        n.checkNumOutLimit = function(e, t) {
            const omitQuotaCheck = n.props.omitQuotaCheck;
            if (omitQuotaCheck !== undefined && omitQuotaCheck) {
                return "";
            }
            if (t !== "Not Limited" && module1039(Number(e)) && Number(e) > t) {
                return "workspaceRequestExceed";
            }
            return "";
        };
        n.triggerChange = function() {
            const n_props = n.props;
            const { onChange, onError } = n_props;
            const n_state = n.state;
            const { requests, limits, cpuError, memoryError, workspaceLimitCheck, gpu } = n_state;
            const n_memoryUnit = n.memoryUnit;
            const p = n.cpuUnit === "Core" ? "" : n.cpuUnit;
            const m = n.getWorkspaceCheckError();
            if (m.length > 0) {
                onError(cpuError || memoryError || workspaceLimitCheck[m[0]]);
            } else {
                onError(cpuError || memoryError);
            }
            const h = {};
            if (requests.cpu !== "" && requests.cpu >= 0 && requests.cpu < Infinity) {
                module74(h, "requests.cpu", `${requests.cpu}${p}`);
            }
            if (requests.memory !== "" && requests.memory >= 0 && requests.memory < Infinity) {
                module74(h, "requests.memory", `${requests.memory}${n_memoryUnit}`);
            }
            if (limits.cpu !== "" && limits.cpu >= 0 && limits.cpu < Infinity) {
                module74(h, "limits.cpu", `${limits.cpu}${p}`);
            }
            if (limits.memory !== "" && limits.memory >= 0 && limits.memory < Infinity) {
                module74(h, "limits.memory", `${limits.memory}${n_memoryUnit}`);
            }
            if (gpu.type && gpu.value) {
                module74(h, "limits", {
                    ...h.limits,
                    ...module31({}, `${gpu.type}`, gpu.value)
                });
                module74(h, "requests", {
                    ...h.requests,
                    ...module31({}, `${gpu.type}`, gpu.value)
                });
            }
            onChange(h);
        };
        n.getWorkspaceCheckError = function() {
            return Object.keys(n.state.workspaceLimitCheck).filter((e)=>n.state.workspaceLimitCheck[e] !== "");
        };
        n.handleCPUChange = function(e) {
            n.setState(function({ requests, limits }) {
                return {
                    requests: {
                        ...requests,
                        cpu: e[0] === 0 ? "" : e[0]
                    },
                    limits: {
                        ...limits,
                        cpu: e[1] === 0 ? "" : e[1]
                    }
                };
            }, n.checkAndTrigger);
        };
        n.handleMemoryChange = function(e) {
            n.setState(function({ requests, limits }) {
                return {
                    requests: {
                        ...requests,
                        memory: e[0] === 0 ? "" : e[0]
                    },
                    limits: {
                        ...limits,
                        memory: e[1] === 0 ? "" : e[1]
                    }
                };
            }, n.checkAndTrigger);
        };
        n.handleInputChange = function(e) {
            return function(t) {
                let a;
                a = t === "" || t === undefined ? "" : t;
                n.setState(function(t) {
                    module74(t, e, module926(a) ? "" : a);
                    return {
                        ...t,
                        ...n.checkError(t)
                    };
                }, n.checkAndTrigger);
            };
        };
        n.handleGpuInputChange = function(e) {
            let t;
            if (e === "") {
                t = "";
            } else {
                const a = /^(0|[1-9][0-9]*)$/.exec(e);
                t = a == null ? module26(n.state, "gpu.value", "") : a[0];
            }
            n.setState({
                gpu: {
                    type: n.state.gpu.type,
                    value: t
                }
            }, n.checkAndTrigger);
        };
        n.gpuSelectChange = function(type) {
            n.setState({
                gpu: {
                    type,
                    value: n.state.gpu.value
                }
            }, n.checkAndTrigger);
        };
        n.renderLimitTip = function(e, a) {
            if (e !== "Not Limited") {
                return `${e} ${a}`;
            }
            return t("NO_LIMIT");
        };
        n.renderGpuTip = function() {
            const workspaceLimitProps = n.props.workspaceLimitProps;
            const gpu = n.state.gpu;
            const r = workspaceLimitProps == null ? undefined : workspaceLimitProps.gpuLimit.filter((e)=>{
                if (module63(e)) {
                    return e;
                }
                return Object.keys(e)[0].endsWith(gpu.type);
            })[0];
            return <div className={module2263.message}>{!module159(r) && <><span>{t("GPU_TYPE")}:</span><span>{gpu.type}</span><br/></>}<span>{t("GPU_LIMIT")}:</span><span>{module159(r) ? t("NO_LIMIT") : Object.values(r)[0]}</span></div>;
        };
        n.renderGpuSelect = function() {
            return <module186.Column><div className={module2263.inputGroup}><img src="/assets/GPU.svg" size={48}/><div className={module3(module2263.input)}><div className={module2263.label}><span>{t("GPU_TYPE")}</span></div><div className={module2263.inputBox}><module186.Select options={n.gpuOption} value={n.state.gpu.type} onChange={n.gpuSelectChange} placeholder=" "/></div></div><div className={module3(module2263.input)}><div className={module2263.label}><span>{t("GPU_LIMIT")}</span></div><div className={module2263.inputBox}><Module1295 name="gpu.value" value={n.state.gpu.value} onChange={n.handleGpuInputChange} placeholder={t("NO_LIMIT")}/></div></div></div></module186.Column>;
        };
        n.state = {
            ...r.getValue(e),
            defaultValue: e.defaultValue,
            cpuError: "",
            memoryError: "",
            workspaceLimitCheck: {}
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (e.isEdit && !this.props.isEdit && module807(e.defaultValue, t.defaultValue)) {
                    this.setState({
                        ...r.getValue(this.props),
                        defaultValue: this.props.defaultProps
                    });
                }
            }
        },
        {
            key: "getLimit",
            value: function(e) {
                if (module1039(Number(e))) {
                    return e;
                }
                return "";
            }
        },
        {
            key: "getRequest",
            value: function(e) {
                return e ?? "";
            }
        },
        {
            key: "renderQuotasTip",
            value: function() {
                const _this = this;
                const props = this.props;
                const { workspaceLimitProps, supportGpuSelect } = props;
                const state = this.state;
                const { workspaceLimits, workspaceRequests } = state;
                const memoryUnit = this.memoryUnit;
                const cpuUnit = this.cpuUnit;
                const title = t("AVAILABLE_QUOTAS");
                return <module186.Alert title={title} type="info" className="margin-t12" message=<><div><div className={module2263.message}><span>{t("RESOURCE_REQUESTS")}:</span><span>CPU {_this.renderLimitTip(workspaceRequests.cpu, cpuUnit)}, {t("MEMORY")} {_this.renderLimitTip(workspaceRequests.memory, memoryUnit)}</span></div><div className={module2263.message}><span>{t("RESOURCE_LIMITS")}:</span><span>CPU {_this.renderLimitTip(workspaceLimits.cpu, cpuUnit)}, {t("MEMORY")} {_this.renderLimitTip(workspaceLimits.memory, memoryUnit)}</span></div>{supportGpuSelect && workspaceLimitProps.gpuLimit && _this.renderGpuTip()}</div></>/>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { cpuError, memoryError, workspaceLimitCheck } = state;
                const supportGpuSelect = this.props.supportGpuSelect;
                const o = this.getWorkspaceCheckError();
                return <div className={module2263.wrapper}><div className={module2263.inputWrapper}><module186.Columns className="is-gapless"><module186.Column><div className={module2263.inputGroup}><module186.Icon name="cpu" size={48}/><div className={module3(module2263.input, module31({}, module2263.error, cpuError || workspaceLimitCheck.requestCpuError))}><span className={module2263.label}>{t("CPU_REQUEST")}</span><div className={module2263.inputBox}><Module1295 name="requests.cpu" value={this.getRequest(this.state.requests.cpu)} onChange={this.handleInputChange("requests.cpu")} placeholder={t("NO_REQUEST")}/><span className={module2263.unit}>{this.cpuUnit}</span></div></div><div className={module3(module2263.input, module31({}, module2263.error, cpuError || workspaceLimitCheck.limitCpuError))}><span className={module2263.label}>{t("CPU_LIMIT")}</span><div className={module2263.inputBox}><Module1295 name="limits.cpu" value={this.getLimit(this.state.limits.cpu)} onChange={this.handleInputChange("limits.cpu")} placeholder={t("NO_LIMIT")}/><span className={module2263.unit}>{this.cpuUnit}</span></div></div></div></module186.Column><module186.Column><div className={module2263.inputGroup}><module186.Icon name="memory" size={48}/><div className={module3(module2263.input, module31({}, module2263.error, memoryError || workspaceLimitCheck.requestMemoryError))}><span className={module2263.label}>{t("MEMORY_REQUEST")}</span><div className={module2263.inputBox}><Module1295 name="requests.memory" value={this.getRequest(this.state.requests.memory)} onChange={this.handleInputChange("requests.memory")} placeholder={t("NO_REQUEST")}/><span className={module2263.unit}>{this.memoryUnit}</span></div></div><div className={module3(module2263.input, module31({}, module2263.error, memoryError || workspaceLimitCheck.limitMemoryError))}><span className={module2263.label}>{t("MEMORY_LIMIT")}</span><div className={module2263.inputBox}><Module1295 name="limits.memory" value={this.getLimit(this.state.limits.memory)} onChange={this.handleInputChange("limits.memory")} placeholder={t("NO_LIMIT")}/><span className={module2263.unit}>{this.memoryUnit}</span></div></div></div></module186.Column>{supportGpuSelect && this.renderGpuSelect()}</module186.Columns></div>{this.ifRenderTip && this.renderQuotasTip()}{(cpuError || memoryError) && <module186.Alert type="error" className="margin-t12" message={t("REQUEST_EXCEED_LIMIT")}/>}{o.length > 0 && <module186.Alert type="error" className="margin-t12" message={t("REQUEST_EXCEED_AVAILABLE_QUOTA")}/>}</div>;
            }
        },
        {
            key: "cpuUnit",
            get: function() {
                return this.props.cpuProps.unit || "Core";
            }
        },
        {
            key: "memoryUnit",
            get: function() {
                return this.props.memoryProps.unit || "Mi";
            }
        },
        {
            key: "gpuOption",
            get: function() {
                return globals.config.supportGpuType.reduce((acc, item)=>[].concat(module61(acc), [
                        {
                            value: item,
                            label: t(item.replace(/[-/.]/g, "_").toUpperCase())
                        }
                    ]), []);
            }
        },
        {
            key: "gpuType",
            get: function() {
                return this.state.gpu.type;
            }
        },
        {
            key: "ifRenderTip",
            get: function() {
                const workspaceLimitProps = this.props.workspaceLimitProps;
                return !module63(workspaceLimitProps);
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (module807(e.defaultValue, t.defaultValue) && module807(e.workspaceLimitProps, t.workspaceLimitProps)) {
                    return null;
                }
                return {
                    ...r.getValue(e),
                    defaultValue: e.defaultValue,
                    workspaceLimitProps: e.workspaceLimitProps
                };
            }
        },
        {
            key: "allowInputDot",
            value: function(e, t, a) {
                const r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
                if (e === Infinity) {
                    return e;
                }
                const n = e && r ? e.slice(0, -2) : e;
                if (n && String(n).endsWith(".")) {
                    const l = a(e, t);
                    return `${l}.`;
                }
                if (n && String(n).endsWith(".0")) {
                    const u = a(e, t);
                    return `${u}.0`;
                }
                return a(e, t);
            }
        },
        {
            key: "getValue",
            value: function(e) {
                const t = module26(e, "cpuProps.unit", "Core");
                const a = module26(e, "memoryProps.unit", "Mi");
                const n = r.getDefaultRequestValue(e, "cpu");
                const l = r.getDefaultRequestValue(e, "memory");
                const u = r.getDefaultLimitValue(e, "cpu");
                const o = r.getDefaultLimitValue(e, "memory");
                const i = r.allowInputDot(n, t, cpuFormat);
                const c = r.allowInputDot(l, a, memoryFormat, true);
                const s = r.allowInputDot(u, t, cpuFormat);
                const f = r.allowInputDot(o, a, memoryFormat, true);
                const d = memoryFormat(`${r.getWorkspaceRequestLimit(e, "memory")}Mi`, a);
                const p = memoryFormat(`${r.getWorkspaceLimitValue(e, "memory")}Mi`, a);
                const m = cpuFormat(r.getWorkspaceRequestLimit(e, "cpu"), t);
                const v = cpuFormat(r.getWorkspaceLimitValue(e, "cpu"), t);
                return {
                    requests: {
                        cpu: i,
                        memory: c
                    },
                    limits: {
                        cpu: s,
                        memory: f
                    },
                    workspaceRequests: {
                        cpu: module926(m) ? "Not Limited" : m,
                        memory: module926(d) ? "Not Limited" : d
                    },
                    workspaceLimits: {
                        cpu: module926(v) ? "Not Limited" : v,
                        memory: module926(p) ? "Not Limited" : p
                    },
                    gpu: r.gpuSetting(e)
                };
            }
        },
        {
            key: "getGpuFromProps",
            value: function(e) {
                const supportGpuType = globals.config.supportGpuType;
                if (!e) {
                    return {
                        type: supportGpuType[0],
                        value: ""
                    };
                }
                const a = Object.keys(module26(e, "requests", {})).filter((e)=>supportGpuType.some((t)=>e.endsWith(t)));
                const r = module63(a) ? supportGpuType[0] : a[0];
                return {
                    type: r,
                    value: module63(a) ? "" : e.requests[`${r}`]
                };
            }
        },
        {
            key: "gpuSetting",
            value: function(e) {
                const t = module26(e, "value", {});
                const a = module26(e, "defaultValue", {});
                if (module63(t)) {
                    if (module63(a)) {
                        return r.getGpuFromProps();
                    }
                    return r.getGpuFromProps(a);
                }
                return r.getGpuFromProps(t);
            }
        },
        {
            key: "getDefaultRequestValue",
            value: function(e, t) {
                return module26(e, `value.requests.${t}`, module26(e, `defaultValue.requests.${t}`) ?? "");
            }
        },
        {
            key: "getDefaultLimitValue",
            value: function(e, t) {
                return module26(e, `value.limits.${t}`, module26(e, `defaultValue.limits.${t}`) ?? Infinity);
            }
        },
        {
            key: "getWorkspaceRequestLimit",
            value: function(e, t) {
                return module26(e, `workspaceLimitProps.requests.${t}`, "Not Limited");
            }
        },
        {
            key: "getWorkspaceLimitValue",
            value: function(e, t) {
                return module26(e, `workspaceLimitProps.limits.${t}`, "Not Limited");
            }
        }
    ]);
    return r;
})(Component);
export default T;
T.propTypes = {
    value: module1.object,
    defaultValue: module1.object,
    onChange: module1.func,
    onError: module1.func,
    supportGpuSelect: module1.bool
};
T.defaultProps = {
    value: {},
    onChange: function() {},
    onError: function() {},
    cpuProps: {},
    memoryProps: {},
    supportGpuSelect: false
};
