import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-75.js";
import "./module-7.js";
import module96 from "./module-96.js";
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
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
import Module800 from "./module-800.js";
import { RESOURCE_METRICS_CONFIG } from "./module-924.js";
import Module1029 from "./module-1029.js";
import { severityOptions } from "./module-994.js";
import module2204 from "./module-2204.js";
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
const P = severityOptions.map((e)=>({
        label: e.label,
        value: e.value
    }));
const A = ((Component_1)=>{
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
            const t = module26(e.value, "metricThreshold", {});
            if (module63(t)) {
                return n.metricConfig[0].value;
            }
            const a = Object.keys(t)[0];
            return `${a}:${Object.keys(t[a])[0]}`;
        };
        n.getStateFromProps = function({ value }) {
            const a = module26(value, "metricThreshold", {});
            const r = n.metricConfig[0].value.split(":");
            let l = r[0];
            let o = r[1];
            if (!module63(a)) {
                const u = Object.keys(a)[0];
                l = u;
                o = Object.keys(a[u])[0];
            }
            const c = module26(value, "for", "");
            const s = module26(value, "severity", "");
            return {
                nodeResourceType: l,
                monitorType: o,
                comparator: module26(value, "comparator", ""),
                duration: c !== "" ? c : I[0].value,
                severity: s !== "" ? s : P[0].value
            };
        };
        n.getSelectOptions = function(e = []) {
            return e.map(({ prefixIcon, color, type, label, value, disabled })=>{
                const c = {
                    label: t(label, {
                        value
                    }),
                    value
                };
                if (prefixIcon) {
                    c.label = <div className={module3(module2204.optionLabel, module2204[type])}><module186.Icon name={prefixIcon} size={20} color={color}/>{c.label}</div>;
                }
                if (disabled) {
                    c.disabled = disabled;
                }
                return c;
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
                    kind: n.props.value.kind,
                    metricThreshold: module31({}, t, module31({}, a, "")),
                    comparator,
                    for: duration,
                    severity
                });
            });
        };
        n.handleItemChange = function(e, t) {
            return function(a, r) {
                const onChange = n.props.onChange;
                let o = module76(r) || !r ? a : r;
                if (e === "thresholds") {
                    o = (o = String(o).replace(/([a-zA-Z%/])+$/g, "")) !== "" ? module447(o, ".") ? o : t(Number(o)) : "";
                }
                n.setState(module31({}, e, o), function() {
                    const n_state = n.state;
                    const { nodeResourceType, monitorType, comparator, duration, severity } = n_state;
                    const f = module26(n.props.value, `metricThreshold.${nodeResourceType}.${monitorType}`);
                    onChange({
                        names: n.props.value.names,
                        kind: n.props.value.kind,
                        metricThreshold: module31({}, nodeResourceType, module31({}, monitorType, e === "comparator" ? f : o)),
                        comparator: e === "comparator" ? o : comparator,
                        for: duration,
                        severity
                    });
                });
            };
        };
        n.handleDurationChange = function(duration) {
            const n_state = n.state;
            const { severity, nodeResourceType, monitorType, comparator } = n_state;
            const u = module26(n.props.value, `metricThreshold.${nodeResourceType}.${monitorType}`);
            n.setState({
                duration
            }, function() {
                n.props.onChange({
                    names: n.props.value.names,
                    kind: n.props.value.kind,
                    metricThreshold: module31({}, nodeResourceType, module31({}, monitorType, u)),
                    for: duration,
                    severity,
                    comparator
                });
            });
        };
        n.handleSeverityChange = function(severity) {
            const n_state = n.state;
            const { duration, nodeResourceType, monitorType, comparator } = n_state;
            const u = module26(n.props.value, `metricThreshold.${nodeResourceType}.${monitorType}`);
            n.setState({
                severity
            }, function() {
                n.props.onChange({
                    names: n.props.value.names,
                    kind: n.props.value.kind,
                    metricThreshold: module31({}, nodeResourceType, module31({}, monitorType, u)),
                    for: duration,
                    comparator,
                    severity
                });
            });
        };
        n.renderConfigItem = function(a = {}) {
            let e;
            const value = n.props.value;
            const n_state = n.state;
            const { nodeResourceType, monitorType } = n_state;
            const { type, name, placeholder, options = [], converter, reverser, ...rest } = a;
            if (reverser) {
                const b = module26(value, `metricThreshold.${nodeResourceType}.${monitorType}`, "");
                e = b !== "" ? module447(b, ".") ? b : reverser(Number(b)) : "";
            }
            const C = {
                key: name,
                className: module2204[name],
                placeholder: t(placeholder),
                value: name === "comparator" ? n.state.comparator : e,
                onChange: n.handleItemChange(name, converter)
            };
            if (type === "number") {
                return <Module800 showUnit {...C} {...rest}/>;
            }
            const options_1 = n.getSelectOptions(options);
            return <module186.Select options={options_1} {...C} {...rest}/>;
        };
        n.state = {
            metricType: n.getMetricType(e),
            ...n.getStateFromProps(e)
        };
        n.metricOps = n.getSelectOptions(n.metricConfig);
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { metricType, duration, severity } = state;
                const ruleConfig = this.ruleConfig;
                return <div className={module2204.inputs}><div className={module2204.type}><module186.Select options={this.metricOps} value={metricType} onChange={this.handleMetricTypeChange}/></div>{ruleConfig.map(this.renderConfigItem)}<module186.Select className={module2204.normalSelect} value={duration} options={I} onChange={this.handleDurationChange} placeholder={t("DURATION")}/><Module1029 className={module2204.normalSelect} value={severity} options={P} onChange={this.handleSeverityChange} placeholder={t("SEVERITY")}/></div>;
            }
        },
        {
            key: "resourceMetricsConfig",
            get: function() {
                const resourceType = this.props.resourceType;
                return module136(RESOURCE_METRICS_CONFIG[resourceType || "node"]) || {};
            }
        },
        {
            key: "metricConfig",
            get: function() {
                const props = this.props;
                const { isEdge, resourceType } = props;
                const resourceMetricsConfig = this.resourceMetricsConfig;
                return Object.entries(resourceMetricsConfig).map((e)=>{
                    const t = module96(e, 2);
                    return {
                        value: t[0],
                        ...t[1]
                    };
                }).filter(({ value })=>!isEdge || resourceType !== "node" || !value.startsWith("disk:"));
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
A.propTypes = {
    metricConfig: module1.array,
    value: module1.object,
    isEdge: module1.bool,
    onChange: module1.func
};
A.defaultProps = {
    metricConfig: [],
    value: {},
    onChange: function() {}
};
export default A;
