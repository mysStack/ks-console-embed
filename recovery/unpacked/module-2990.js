import "./module-15.js";
import "./module-84.js";
import "./module-30.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-32.js";
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
import Module1357 from "./module-1357.js";
import { SEVERITY_LEVEL } from "./module-832.js";
import module2991 from "./module-2991.js";
const v = ((Component_1)=>{
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
        t.handleNameChange = function(e, keyName) {
            t.setState({
                keyName
            });
        };
        t.handleKeyChange = function(key) {
            t.setState({
                key,
                values: []
            }, function() {
                return t.handleChange();
            });
        };
        t.handleOperatorChange = function(operator) {
            let values = t.state.values;
            if ([
                "Exists",
                "DoesNotExist"
            ].includes(operator)) {
                values = undefined;
            }
            if (operator === "Match") {
                values = "";
            }
            t.setState({
                operator,
                values
            }, function() {
                return t.handleChange();
            });
        };
        t.handleValueChange = function(values) {
            t.setState({
                values
            }, function() {
                return t.handleChange();
            });
        };
        t.handleChange = function() {
            const t_state = t.state;
            const { key, operator, values } = t_state;
            const l = [
                "Exists",
                "DoesNotExist"
            ].includes(operator) ? undefined : values || [];
            const o = {
                key,
                operator
            };
            if (l) {
                o.values = l;
            }
            if (operator === "Match") {
                o.regexValue = values;
                delete o.values;
            }
            t.props.onChange(o);
        };
        t.state = t.getInitialData();
        return t;
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
                return {
                    key: e.key,
                    operator: e.operator,
                    values: e.values
                };
            }
        },
        {
            key: "renderValues",
            value: function() {
                const _this = this;
                const state = this.state;
                const { operator, values } = state;
                if (operator === "Exists" || operator === "DoesNotExist") {
                    return null;
                }
                if (operator === "Match") {
                    return <div><module186.Input name="regexValue" value={values} onChange={function(t, a) {
                        return _this.handleValueChange(a);
                    }} placeholder={t("VALUES")}/></div>;
                }
                return <Module1357 name="values" placeholder={t("VALUES")} value={values} onChange={this.handleValueChange}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { key, operator } = state;
                return <div className={module2991.selectWrapper}><module186.Input name="key" value={key} placeholder={t("KEY")} className={module2991.input} onChange={function(t, a) {
                    return _this.handleKeyChange(a);
                }}/><module186.Select name="operator" value={operator} options={this.operators} onChange={this.handleOperatorChange} placeholder={t("CONDITION_OPERATOR")}/>{this.renderValues()}</div>;
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
export default v;
