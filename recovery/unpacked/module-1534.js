import "./module-15.js";
import "./module-5.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-75.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module801 from "./module-801.js";
import module159 from "./module-159.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import Module1097 from "./module-1097.js";
import { PROTOCOLS } from "./module-72.js";
import module2249 from "./module-2249.js";
const y = (e)=>{
    let t = "HTTP";
    const e_value = e.value;
    const { name, containerPort, servicePort } = e_value;
    const e_index = e.index;
    if (!module159(name)) {
        const o = name.match(/^(\w+)-(.*)/);
        if (o) {
            t = (o[1] || "HTTP").toUpperCase();
        }
    }
    return {
        name: module159(name) ? `${t.toLowerCase()}-${e_index}` : name,
        protocol: PROTOCOLS.some((e)=>e.value === t) ? t : e.value.protocol,
        containerPort,
        servicePort,
        propsValue: e.value
    };
};
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.triggerChange = module801(function() {
            const t_state = t.state;
            const { name, protocol, containerPort, servicePort } = t_state;
            t.props.onChange({
                name,
                protocol: protocol === "UDP" ? "UDP" : "TCP",
                containerPort,
                servicePort
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
            const index = t.props.index;
            a = name.startsWith(n) ? `${protocol.toLowerCase()}-${name.replace(n, "")}` : `${protocol.toLowerCase()}-${index}`;
            t.setState({
                name: a,
                protocol
            }, function() {
                return t.triggerChange();
            });
        };
        t.handleContainerPortChange = function(containerPort) {
            t.setState({
                containerPort
            }, function() {
                return t.triggerChange();
            });
        };
        t.handleServicePortChange = function(servicePort) {
            t.setState({
                servicePort
            }, function() {
                return t.triggerChange();
            });
        };
        t.state = y(e);
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { name, protocol, containerPort, servicePort } = state;
                return <div className={module2249.wrapper}><Module1097 prefix=<div className={module2249.tip}><span>{t("PROTOCOL")}</span><module186.Tooltip content={t("ISTIO_PROTOCOL_TIP")}><module186.Icon name="question"/></module186.Tooltip></div>><module186.Select name="protocol" value={protocol} options={PROTOCOLS} defaultValue="HTTP" onChange={this.handleProtocolChange}/></Module1097><Module1097 prefix={t("NAME")}><module186.Input name="name" value={name} placeholder={t("REQUIRED")} onChange={this.handleNameChange}/></Module1097><Module1097 prefix={t("CONTAINER_PORT")}><Module800 name="containerPort" min={1} max={65535} value={containerPort} integer placeholder={t("REQUIRED")} onChange={this.handleContainerPortChange}/></Module1097><Module1097 prefix={t("SERVICE_PORT")}><Module800 name="servicePort" min={1} max={65535} value={servicePort} integer placeholder={t("REQUIRED")} onChange={this.handleServicePortChange}/></Module1097></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.value !== t.propsValue) {
                    return y(e);
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.defaultProps = {
    value: {},
    onChange: function() {}
};
