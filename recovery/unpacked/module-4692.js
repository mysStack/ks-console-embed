import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
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
import module801 from "./module-801.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import module4693 from "./module-4693.js";
function g(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const _ = [
    "cookie",
    "User-Agent"
];
const y = ((Component_1)=>{
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
        t.triggerChange = module801(function() {
            const t_state = t.state;
            const { match, key, value } = t_state;
            const t_props = t.props;
            const { onChange, value: value_1 } = t_props;
            onChange(function(e) {
                for(let t = 1; t < arguments.length; t++){
                    var a = arguments[t] ?? {};
                    if (t % 2) {
                        g(Object(a), true).forEach((t)=>{
                            module31(e, t, a[t]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
                    } else {
                        g(Object(a)).forEach((t)=>{
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                        });
                    }
                }
                return e;
            }(module31({}, key, module31({}, match, value)), module241(value_1, _)));
        }, 200);
        t.handleMatchChange = function(match) {
            t.setState({
                match
            }, function() {
                t.triggerChange();
            });
        };
        t.handleKeyChange = function(e, key) {
            t.setState({
                key
            }, function() {
                t.triggerChange();
            });
        };
        t.handleValueChange = function(e, value) {
            t.setState({
                value
            }, function() {
                t.triggerChange();
            });
        };
        t.state = ((e)=>{
            const t = Object.keys(e.value).filter((e)=>!_.includes(e))[0];
            return {
                key: t,
                match: (t ? Object.keys(e.value[t])[0] : "exact") || "exact",
                value: (t ? Object.values(e.value[t])[0] : "") || ""
            };
        })(e);
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { match, key, value } = state;
                return <div className={module4693.match}><module186.Select value={match} defaultValue="exact" options={this.matchTypes} onChange={this.handleMatchChange}/><module186.Input value={key} placeholder={t("KEY")} onChange={this.handleKeyChange}/><module186.Input value={value} placeholder={t("VALUE")} onChange={this.handleValueChange}/></div>;
            }
        },
        {
            key: "matchTypes",
            get: function() {
                return [
                    {
                        label: t("EXACT_MATCH"),
                        value: "exact"
                    },
                    {
                        label: t("REGEX_MATCH"),
                        value: "regex"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    value: module1.object,
    onChange: module1.func
};
y.defaultProps = {
    value: {},
    onChange: function() {}
};
