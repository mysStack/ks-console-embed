import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-98.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module801 from "unpacked/module-801.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
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
        t.triggerChange = module801(function(e) {
            t.props.onChange(e);
        }, 500);
        t.handleTypeChange = function(e) {
            t.setState({
                type: e,
                value: ""
            }, function() {
                if (e === "useSourceIp") {
                    t.triggerChange(module31({}, e, true));
                } else {
                    t.triggerChange(module31({}, e, ""));
                }
            });
        };
        t.handleValueChange = function(e, a) {
            t.setState({
                value: a
            }, function() {
                const type = t.state.type;
                if (type === "httpCookie") {
                    const r = ((e)=>{
                        let status = true;
                        for(var a = e.replace(/\s+/g, "").split(";"), result = {}, n = 0; n < a.length; n++){
                            const l = a[n].split("=");
                            if (l.length > 1) {
                                result[l[0]] = l[1];
                            } else {
                                status = false;
                            }
                        }
                        return {
                            result,
                            status
                        };
                    })(a);
                    const n = r.result;
                    if (r.status) {
                        t.triggerChange(module31({}, type, n));
                    }
                } else {
                    t.triggerChange(module31({}, type, a));
                }
            });
        };
        const n = t.getOptions();
        const i = Object.keys(e.value)[0] || n[0].value;
        let c = e.value[i];
        if (i === "httpCookie" && c) {
            c = Object.entries(c).map((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const r = t[1];
                return `${a}=${r}`;
            }).join("; ");
        }
        t.state = {
            type: i,
            value: c,
            propsValue: e.value
        };
        return t;
    }
    module37(r, [
        {
            key: "getOptions",
            value: function() {
                const protocol = this.props.protocol;
                const a = [
                    {
                        label: t("HASH_BASED_ON_SOURCE_IP_ADDRESS"),
                        value: "useSourceIp"
                    },
                    {
                        label: t("HASH_BASED_ON_RINGHASH"),
                        value: "ringHash"
                    },
                    {
                        label: t("HASH_BASED_ON_MAGLEV"),
                        value: "maglev"
                    }
                ];
                if (protocol === "http") {
                    return [
                        {
                            label: t("HASH_BASED_ON_HTTP_HEADER"),
                            value: "httpHeaderName"
                        },
                        {
                            label: t("HASH_BASED_ON_HTTP_COOKIE"),
                            value: "httpCookie"
                        },
                        {
                            label: t("HASH_BASED_ON_HTTP_QUERY_PARAMETE_NAME"),
                            value: "httpQueryParameterName"
                        },
                        ...a
                    ];
                }
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { type, value } = state;
                return <div><module186.Select value={type} options={this.getOptions()} onChange={this.handleTypeChange}/>{type === "httpHeaderName" && <><div className="margin-t12">{t("HTTP_HEADER")}</div><module186.Input value={value} onChange={this.handleValueChange}/></>}{type === "httpCookie" && <><div className="margin-t12">{t("HTTP_COOKIE")}</div><module186.Input value={value} onChange={this.handleValueChange} placeholder="key1=value1; key2=value2"/></>}</div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.value !== t.propsValue) {
                    const a = Object.keys(e.value)[0];
                    let r = e.value[a];
                    if (a === "httpCookie" && r) {
                        r = Object.entries(r).map((e)=>{
                            const t = module96(e, 2);
                            const a = t[0];
                            const r = t[1];
                            return `${a}=${r}`;
                        }).join("; ");
                    }
                    return {
                        type: a,
                        value: r,
                        propsValue: e.value
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    value: module1.object,
    onChange: module1.func
};
v.defaultProps = {
    value: {},
    onChange: function() {}
};
