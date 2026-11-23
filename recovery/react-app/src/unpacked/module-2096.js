import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-27.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-137.js";
import "./module-7.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module76 from "./module-76.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import module63 from "./module-63.js";
import module447 from "./module-447.js";
import module186 from "./module-186.js";
import Module800 from "components/Inputs/NumberInput";
import { RESOURCE_METRICS_CONFIG } from "./module-924.js";
import Module1029 from "./module-1029.js";
import { severityOptions } from "./module-994.js";
import module2097 from "./module-2097.js";
const I = [
    1,
    5,
    15,
    30,
    60
].map((minutes)=>({
        label: t.html("LASTING_MINUTES", {
            minutes
        }),
        value: `${minutes}m`
    }));
const w = severityOptions.map((e)=>({
        label: e.label,
        value: e.value
    }));
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getMetricType = function(e) {
            const value = n.metricConfig[0].value;
            const a = module26(e, "value.metricThreshold", {});
            if (module63(a)) {
                return n.metricConfig[0].value;
            }
            const r = Object.keys(a)[0];
            const l = Object.keys(a[r])[0];
            if (n.metricConfig.some((e)=>e.value === `${r}:${l}`)) {
                return `${r}:${l}`;
            }
            return value;
        };
        n.getStateFromProps = function({ value = {} }) {
            const r = module26(value, "metricThreshold", {});
            const l = n.metricConfig[0].value.split(":");
            let u = l[0];
            let o = l[1];
            if (!module63(r)) {
                const i = Object.keys(r)[0];
                if (n.metricConfig.some((e)=>e.value === `${i}:${Object.keys(r[i])[0]}`)) {
                    u = i;
                    o = Object.keys(r[i])[0];
                }
            }
            const c = module26(value, "for", "");
            const s = module26(value, "severity", "");
            return {
                resourceType: "workload",
                nodeResourceType: u,
                monitorType: o,
                comparator: module26(value, "comparator", ""),
                duration: c !== "" ? c : I[0].value,
                severity: s !== "" ? s : w[0].value
            };
        };
        n.getSelectOptions = function(e = []) {
            return e.map(({ prefixIcon, color, type, label, value, disabled })=>{
                const i = {
                    label: t(label, {
                        value
                    }),
                    value
                };
                if (prefixIcon) {
                    i.label = <div className={module3(module2097.optionLabel, module2097[type])}><module186.Icon name={prefixIcon} size={20} color={color}/>{i.label}</div>;
                }
                if (disabled) {
                    i.disabled = disabled;
                }
                return i;
            });
        };
        n.handleMetricTypeChange = function(metricType) {
            const t = metricType.split(":")[0];
            const a = metricType.split(":")[1];
            const n_state = n.state;
            const { comparator, severity, duration } = n_state;
            n.setState({
                metricType,
                nodeResourceType: t,
                monitorType: a,
                thresholds: ""
            }, function() {
                n.props.onChange({
                    names: n.props.value.names,
                    metricThreshold: module31({}, t, module31({}, a, "")),
                    kind: n.props.value.kind,
                    comparator,
                    severity,
                    for: duration
                });
            });
        };
        n.handleItemChange = function(e, t) {
            return function(a, r) {
                const onChange = n.props.onChange;
                let u = module76(r) || !r ? a : r;
                if (e === "thresholds") {
                    u = (u = String(u).replace(/([a-zA-Z%/])+$/g, "")) !== "" ? module447(u, ".") ? u : t(Number(u)) : "";
                }
                n.setState(module31({}, e, u), function() {
                    const n_state = n.state;
                    const { nodeResourceType, monitorType, comparator, duration, severity } = n_state;
                    const f = module26(n.props.value, `metricThreshold.${nodeResourceType}.${monitorType}`);
                    onChange({
                        names: n.props.value.names,
                        metricThreshold: module31({}, nodeResourceType, module31({}, monitorType, e === "comparator" ? f : u)),
                        comparator: e === "comparator" ? u : comparator,
                        for: duration,
                        kind: n.props.value.kind,
                        severity
                    });
                });
            };
        };
        n.handleDurationChange = function(duration) {
            const n_state = n.state;
            const { severity, nodeResourceType, monitorType, comparator } = n_state;
            const o = module26(n.props.value, `metricThreshold.${nodeResourceType}.${monitorType}`);
            n.setState({
                duration
            }, function() {
                n.props.onChange({
                    names: n.props.value.names,
                    metricThreshold: module31({}, nodeResourceType, module31({}, monitorType, o)),
                    kind: n.props.value.kind,
                    for: duration,
                    severity,
                    comparator
                });
            });
        };
        n.handleSeverityChange = function(severity) {
            const n_state = n.state;
            const { duration, nodeResourceType, monitorType, comparator } = n_state;
            const o = module26(n.props.value, `metricThreshold.${nodeResourceType}.${monitorType}`);
            n.setState({
                severity
            }, function() {
                n.props.onChange({
                    names: n.props.value.names,
                    metricThreshold: module31({}, nodeResourceType, module31({}, monitorType, o)),
                    kind: n.props.value.kind,
                    for: duration,
                    comparator,
                    severity
                });
            });
        };
        n.renderConfigItem = function(t = {}) {
            let e;
            const value = n.props.value;
            const n_state = n.state;
            const { nodeResourceType, monitorType } = n_state;
            const { type, name, placeholder: _placeholder, options = [], reverser, converter, ...rest } = t;
            if (reverser) {
                const g = module26(value, `metricThreshold.${nodeResourceType}.${monitorType}`, "");
                e = g !== "" ? module447(g, ".") ? g : reverser(Number(g)) : "";
            }
            const E = {
                key: name,
                className: module2097[name],
                value: name === "comparator" ? n.state.comparator : e,
                onChange: n.handleItemChange(name, converter)
            };
            if (type === "number") {
                return <Module800 showUnit {...E} {...rest} integer={false}/>;
            }
            const options_1 = n.getSelectOptions(options);
            return <module186.Select options={options_1} {...E} {...rest}/>;
        };
        n.state = {
            metricType: n.getMetricType(e),
            ...n.getStateFromProps(e),
            metricOps: n.getSelectOptions(n.metricConfig)
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { metricType, duration, severity } = state;
                const ruleConfig = this.ruleConfig;
                return <div className={module2097.inputs}><div className={module2097.type}><module186.Select options={this.state.metricOps} value={metricType} onChange={this.handleMetricTypeChange}/></div>{ruleConfig.map(this.renderConfigItem)}<module186.Select className={module2097.normalSelect} value={duration} options={I} onChange={this.handleDurationChange} placeholder={t("DURATION")}/><Module1029 className={module2097.normalSelect} value={severity} options={w} onChange={this.handleSeverityChange} placeholder={t("SEVERITY")}/></div>;
            }
        },
        {
            key: "resourceMetricsConfig",
            get: function() {
                return module136(RESOURCE_METRICS_CONFIG.workload) || {};
            }
        },
        {
            key: "metricConfig",
            get: function() {
                const resourceMetricsConfig = this.resourceMetricsConfig;
                return Object.entries(resourceMetricsConfig).map((e)=>{
                    const t = module96(e, 2);
                    return {
                        value: t[0],
                        ...t[1]
                    };
                });
            }
        },
        {
            key: "selectMetricConfig",
            get: function() {
                const metricType = this.state.metricType;
                return this.metricConfig.find((t)=>t.value === metricType);
            }
        },
        {
            key: "ruleConfig",
            get: function() {
                return module26(this.selectMetricConfig, "ruleConfig") || [];
            }
        }
    ]);
    return r;
})(Component);
M.propTypes = {
    metricConfig: module1.array,
    value: module1.object,
    onChange: module1.func
};
M.defaultProps = {
    metricConfig: [],
    value: {},
    onChange: function() {}
};
export default M;
