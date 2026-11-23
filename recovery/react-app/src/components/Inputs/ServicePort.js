import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-75.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module801 from "unpacked/module-801.js";
import module159 from "unpacked/module-159.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module800 from "components/Inputs/NumberInput";
import Module1097 from "components/Inputs/AddonsInput";
import { PROTOCOLS } from "utils/constants";
import module2588 from "unpacked/module-2588.js";
const _ = (e)=>{
    let t = "HTTP";
    const e_value = e.value;
    const { name, targetPort, port } = e_value;
    if (!module159(name)) {
        const u = name.match(/^(\w+)-(.*)/);
        if (u) {
            t = (u[1] || "HTTP").toUpperCase();
        }
    }
    return {
        name: module159(name) ? `${t.toLowerCase()}-` : name,
        protocol: PROTOCOLS.some((e)=>e.value === t) ? t : e.value.protocol,
        targetPort,
        port
    };
};
const O = ((Component_1)=>{
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
            const { name, protocol, targetPort, port } = t_state;
            t.props.onChange({
                name,
                protocol: protocol === "UDP" ? "UDP" : "TCP",
                targetPort,
                port
            });
        }, 300);
        t.handleNameChange = function(e, name) {
            t.setState({
                name
            }, function() {
                return t.triggerChange();
            });
        };
        t.handleProtocolChange = function(protocol) {
            let a;
            const name = t.state.name;
            const n = `${t.state.protocol.toLowerCase()}-`;
            a = name.startsWith(n) ? `${protocol.toLowerCase()}-${name.replace(n, "")}` : `${protocol.toLowerCase()}-`;
            t.setState({
                name: a,
                protocol
            }, function() {
                return t.triggerChange();
            });
        };
        t.handleTargetPortChange = function(targetPort) {
            t.setState({
                targetPort
            }, function() {
                return t.triggerChange();
            });
        };
        t.handlePortChange = function(port) {
            t.setState({
                port
            }, function() {
                return t.triggerChange();
            });
        };
        t.state = {
            ..._(e),
            value: e.value
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { name, protocol, targetPort, port } = state;
                return <div className={module2588.wrapper}><Module1097 prefix=<div className={module2588.tip}><span>{t("PROTOCOL")}</span><module186.Tooltip content={t("ISTIO_PROTOCOL_TIP")}><module186.Icon name="question"/></module186.Tooltip></div>><module186.Select name="protocol" value={protocol} options={PROTOCOLS} defaultValue="HTTP" onChange={this.handleProtocolChange}/></Module1097><Module1097 prefix={t("NAME")} placeholder={t("REQUIRED")}><module186.Input name="name" value={name} onChange={this.handleNameChange}/></Module1097><Module1097 prefix={t("CONTAINER_PORT")}><Module800 name="targetPort" min={1} max={65535} value={targetPort} integer onChange={this.handleTargetPortChange}/></Module1097><Module1097 prefix={t("SERVICE_PORT")}><Module800 name="port" min={1} max={65535} value={port} integer placeholder={t("REQUIRED")} onChange={this.handlePortChange}/></Module1097></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.value !== t.value) {
                    return {
                        ..._(e),
                        value: e.value
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.defaultProps = {
    value: {},
    onChange: function() {}
};
