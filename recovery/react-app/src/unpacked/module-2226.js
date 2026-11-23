import "./module-12.js";
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
import "./module-7.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
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
import { cacheFunc } from "utils/index";
import module186 from "./module-186.js";
import Module800 from "components/Inputs/NumberInput";
import Module1029 from "./module-1029.js";
import module2227 from "./module-2227.js";
import { severityOptions } from "./module-931.js";
import { RESOURCE_METRICS_CONFIG } from "./module-1285.js";
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
        n.getStateFromProps = function(e) {
            const e_thresholds = e.thresholds;
            return {
                comparator: e.comparator,
                thresholds: e_thresholds !== "" ? Number(e_thresholds) : e_thresholds,
                duration: module26(e, "for", I[0].value),
                severity: module26(e, "severity", P[0].value)
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
                    c.label = <div className={module3(module2227.optionLabel, module2227[type])}><module186.Icon name={prefixIcon} size={20} color={color}/>{c.label}</div>;
                }
                if (disabled) {
                    c.disabled = disabled;
                }
                return c;
            });
        };
        n.handleMetricTypeChange = function(metricType) {
            const n_state = n.state;
            const { severity, duration } = n_state;
            const l = n.metricConfig.find((t)=>t.value === metricType);
            const comparator = module26(l, "ruleConfig[0].value", "");
            n.setState({
                metricType,
                thresholds: "",
                comparator
            }, function() {
                n.props.handleMetricChange({
                    thresholds: "",
                    comparator,
                    severity,
                    duration
                }, metricType, {
                    unit: module26(l, "ruleConfig[1].unit")
                });
            });
        };
        n.handleItemChange = function(e) {
            return cacheFunc(e, function(t, a) {
                const handleMetricChange = n.props.handleMetricChange;
                let l = module76(a) || !a ? t : a;
                if (e === "thresholds") {
                    l = String(l).replace(/([a-zA-Z%/])+$/g, "");
                }
                n.setState(module31({}, e, l), function() {
                    const n_state = n.state;
                    const { comparator, thresholds, duration, severity } = n_state;
                    handleMetricChange({
                        thresholds: e === "thresholds" ? Number(l) : thresholds,
                        comparator: e === "comparator" ? l : comparator,
                        duration,
                        severity
                    });
                });
            }, module88(n));
        };
        n.handleDurationChange = function(duration) {
            const n_state = n.state;
            const { severity, thresholds, comparator } = n_state;
            n.setState({
                duration
            }, function() {
                n.props.handleMetricChange({
                    thresholds,
                    duration,
                    severity,
                    comparator
                });
            });
        };
        n.handleSeverityChange = function(severity) {
            const n_state = n.state;
            const { duration, thresholds, comparator } = n_state;
            n.setState({
                severity
            }, function() {
                n.props.handleMetricChange({
                    thresholds,
                    duration,
                    comparator,
                    severity
                });
            });
        };
        n.renderConfigItem = function({ type, name, placeholder, options = [], converter: _converter, ...rest } = {}) {
            const f = {
                key: name,
                className: module2227[name],
                placeholder: t(placeholder),
                value: module26(n.state, name),
                onChange: n.handleItemChange(name)
            };
            if (type === "number") {
                return <Module800 showUnit {...f} {...rest}/>;
            }
            const options_1 = n.getSelectOptions(options);
            return <module186.Select options={options_1} {...f} {...rest}/>;
        };
        n.state = {
            metricType: e.metricType || n.metricConfig[0].value,
            ...n.getStateFromProps(e)
        };
        n.metricOps = n.getSelectOptions(n.metricConfig);
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                if (!this.props.metricType) {
                    const t = this.state;
                    const { comparator, thresholds } = t;
                    this.setState({
                        comparator: comparator || module26(this.ruleConfig, "[0].value", comparator),
                        thresholds: thresholds !== "" ? Number(thresholds) : module26(this.ruleConfig, "[1].value", thresholds)
                    }, function() {
                        _this.props.handleMetricChange({
                            thresholds: _this.state.thresholds,
                            duration: _this.state.duration,
                            severity: _this.state.severity,
                            comparator: _this.state.comparator
                        }, _this.state.metricType, {
                            unit: module26(_this.ruleConfig, "[1].unit")
                        });
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { metricType, duration, severity } = state;
                const ruleConfig = this.ruleConfig;
                return <div className={module2227.inputs}><module186.Select className={module2227.type} options={this.metricOps} value={metricType} onChange={this.handleMetricTypeChange}/>{ruleConfig.map(this.renderConfigItem)}<module186.Select value={duration} options={I} onChange={this.handleDurationChange}/><Module1029 value={severity} options={P} onChange={this.handleSeverityChange}/></div>;
            }
        },
        {
            key: "resourceMetricsConfig",
            get: function() {
                const resourceType = this.props.resourceType;
                return module136(RESOURCE_METRICS_CONFIG[resourceType]) || {};
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
A.propTypes = {
    value: module1.object,
    onChange: module1.func
};
A.defaultProps = {
    metricConfig: [],
    value: {},
    onChange: function() {}
};
export default A;
