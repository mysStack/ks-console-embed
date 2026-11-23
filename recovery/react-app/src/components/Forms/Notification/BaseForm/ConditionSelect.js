import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module1357 from "components/Inputs/TagInput";
import { SEVERITY_LEVEL } from "configs/alerting/metrics/rule.config";
import { PATTERN_TAG } from "utils/constants";
import module3078 from "unpacked/module-3078.js";
const E = ((Component_1)=>{
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
        n.handleNameChange = function(e, keyName) {
            n.setState({
                keyName
            });
        };
        n.handleAddItem = function() {
            const n_state = n.state;
            const { keyItems, keyName } = n_state;
            if (PATTERN_TAG.test(keyName)) {
                n.setState({
                    keyItems: [].concat(module61(keyItems), [
                        {
                            label: keyName,
                            value: keyName
                        }
                    ]),
                    keyName: ""
                });
            } else {
                module240.error({
                    content: t("PATTERN_TAG_INVALID_TIP")
                });
            }
        };
        n.handleKeyChange = function(key) {
            n.setState({
                key,
                values: []
            }, function() {
                return n.handleChange();
            });
        };
        n.handleOperatorChange = function(operator) {
            let values = n.state.values;
            if ([
                "Exists",
                "DoesNotExist"
            ].includes(operator)) {
                values = undefined;
            }
            if (operator === "Match") {
                values = "";
            }
            n.setState({
                operator,
                values
            }, function() {
                return n.handleChange();
            });
        };
        n.handleValueChange = function(values) {
            n.setState({
                values
            }, function() {
                return n.handleChange();
            });
        };
        n.handleChange = function() {
            const n_state = n.state;
            const { key, operator, values } = n_state;
            const l = [
                "Exists",
                "DoesNotExist"
            ].includes(operator) ? undefined : values || [];
            const u = {
                key,
                operator
            };
            if (l) {
                u.values = l;
            }
            if (operator === "Match") {
                u.regexValue = values;
                delete u.values;
            }
            n.props.onChange(u);
        };
        n.dorpdownRender = function(e) {
            const keyName = n.state.keyName;
            return <div className={module3078.optionsContainer}><div className={module3078.optionsList}>{e}</div><div className={module3078.customSelect}><module186.Input className={module3078.customInput} value={keyName} onChange={n.handleNameChange}/><div className={module3078.iconWrapper} onClick={n.handleAddItem}><module186.Icon name="add" type="light" size={12}/></div></div></div>;
        };
        n.state = n.getInitialData();
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.value !== this.props.value) {
                    const { key = "", operator = "", values = [], regexValue } = this.props.value || {};
                    this.setState({
                        values: regexValue || values,
                        key,
                        operator
                    });
                }
            }
        },
        {
            key: "getInitialData",
            value: function() {
                const e = this.props.value || {};
                const { key, operator, values, regexValue } = e;
                return {
                    key,
                    operator,
                    values: regexValue || values,
                    keyName: "",
                    keyItems: key && module63(this.keys.find((e)=>e.value === key)) ? [].concat(module61(this.keys), [
                        {
                            label: key,
                            value: key
                        }
                    ]) : module61(this.keys)
                };
            }
        },
        {
            key: "renderValues",
            value: function() {
                const _this = this;
                const state = this.state;
                const { key, operator, values } = state;
                if (operator === "Exists" || operator === "DoesNotExist") {
                    return null;
                }
                if (operator === "Match") {
                    return <div><module186.Input name="regexValue" value={values} onChange={function(t, a) {
                        return _this.handleValueChange(a);
                    }} placeholder={t("VALUES")}/></div>;
                }
                if (key === "severity") {
                    return <module186.Select name="values" value={values} options={this.severities} multi onChange={this.handleValueChange} placeholder={t("VALUES")}/>;
                }
                return <Module1357 name="values" placeholder={t("VALUES")} value={values} onChange={this.handleValueChange}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { key, operator, keyItems } = state;
                return <div className={module3078.selectWrapper}><module186.Select name="key" value={key} options={keyItems} placeholder={t("KEY")} onChange={this.handleKeyChange} dorpdownRender={this.dorpdownRender}/><module186.Select name="operator" value={operator} options={this.operators} onChange={this.handleOperatorChange} placeholder={t("CONDITION_OPERATOR")}/>{this.renderValues()}</div>;
            }
        },
        {
            key: "keys",
            get: function() {
                return [
                    {
                        label: t("ALERTING_NAME"),
                        value: "alertname"
                    },
                    {
                        label: t("ALERTING_SEVERITY"),
                        value: "severity"
                    },
                    {
                        label: t("CLUSTER"),
                        value: "cluster"
                    },
                    {
                        label: t("PROJECT"),
                        value: "namespace"
                    },
                    {
                        label: t("POD"),
                        value: "pod"
                    },
                    {
                        label: t("CONTAINER"),
                        value: "container"
                    }
                ];
            }
        },
        {
            key: "operators",
            get: function() {
                return [
                    {
                        label: t("CONTAIN"),
                        value: "In"
                    },
                    {
                        label: t("NOT_CONTAIN"),
                        value: "NotIn"
                    },
                    {
                        label: t("EXIST"),
                        value: "Exists"
                    },
                    {
                        label: t("NOT_EXIST"),
                        value: "DoesNotExist"
                    },
                    {
                        label: t("REGEX_MATCH"),
                        value: "Match"
                    }
                ];
            }
        },
        {
            key: "severities",
            get: function() {
                return SEVERITY_LEVEL.map((level)=>({
                        label: t(level.label),
                        value: level.value,
                        level
                    }));
            }
        }
    ]);
    return r;
})(Component);
export default E;
