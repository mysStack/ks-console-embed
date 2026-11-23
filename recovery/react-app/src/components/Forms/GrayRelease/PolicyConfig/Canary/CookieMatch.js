import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module801 from "unpacked/module-801.js";
import module186 from "unpacked/module-186.js";
import module4691 from "unpacked/module-4691.js";
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
        t.triggerChange = module801(function() {
            const t_state = t.state;
            const { match, value } = t_state;
            const onChange = t.props.onChange;
            if (match) {
                onChange(module31({}, match, value || ""));
            }
        }, 200);
        t.handleMatchChange = function(match) {
            t.setState({
                match
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
        const match = Object.keys(e.value)[0] || t.matchTypes[0].value;
        t.state = {
            match,
            value: e.value[match] || ""
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { match, value } = state;
                return <div className={module4691.match}><module186.Select value={match} options={this.matchTypes} onChange={this.handleMatchChange}/><module186.Input value={value} placeholder={this.props.placeholder || t("KEY_EQ_VALUE")} onChange={this.handleValueChange}/></div>;
            }
        },
        {
            key: "matchTypes",
            get: function() {
                const matchTypes = this.props.matchTypes;
                return [
                    {
                        label: t("EXACT_MATCH"),
                        value: "exact"
                    },
                    {
                        label: t("PREFIX_MATCH"),
                        value: "prefix"
                    },
                    {
                        label: t("REGEX_MATCH"),
                        value: "regex"
                    }
                ].filter(({ value })=>matchTypes.includes(value));
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    value: module1.object,
    onChange: module1.func,
    matchTypes: module1.array
};
v.defaultProps = {
    value: {},
    onChange: function() {},
    matchTypes: [
        "exact",
        "regex"
    ]
};
