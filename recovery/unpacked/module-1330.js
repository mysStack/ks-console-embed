import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-75.js";
import "./module-7.js";
import "./module-31.js";
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
import module801 from "./module-801.js";
import module159 from "./module-159.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import Module1097 from "./module-1097.js";
import { PROTOCOLS } from "./module-72.js";
import module2588 from "./module-2588.js";
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
