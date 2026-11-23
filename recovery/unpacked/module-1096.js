import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-193.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { PATTERN_PORT_NAME } from "./module-72.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import Module1533 from "./module-1533.js";
import Module1534 from "./module-1534.js";
import Module830 from "./module-830.js";
import module2250 from "./module-2250.js";
const b = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.portsValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            if (r.length > 0) {
                const l = [];
                r.forEach((a)=>{
                    if (!a.name || !a.containerPort || e.props.withService && !a.servicePort) {
                        return n({
                            message: t("INVALID_PORT")
                        });
                    }
                    if (l.includes(a.name)) {
                        return n({
                            message: t("PORT_INPUT_DESC")
                        });
                    }
                    if (a.name && (a.name.length > 15 || !PATTERN_PORT_NAME.test(a.name))) {
                        return n({
                            message: t("WORKLOAD_PORT_NAME_DESC")
                        });
                    }
                    l.push(a.name);
                });
            }
            n();
        };
        e.checkContainerPortValid = function(t) {
            if (e.props.withService) {
                return t && t.name && t.containerPort && t.servicePort;
            }
            return t && t.name && t.containerPort;
        };
        e.handleFillPorts = function() {
            let t;
            const exposedPorts = e.context.imageDetail.exposedPorts;
            const r = (exposedPorts === undefined ? [] : exposedPorts).map((e)=>{
                const t = e.split("/")[1];
                const a = Number(e.split("/")[0]);
                return {
                    name: `${t}-${a}`,
                    protocol: t.toUpperCase(),
                    containerPort: a,
                    servicePort: a
                };
            });
            if (!module63(r)) {
                module74(e.props.data, "ports", r);
                if (!((t = e.context) === null || t === undefined)) {
                    t.forceUpdate();
                }
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { withService, className } = props;
                return <module186.Form.Group className={className} label={t("PORT_SETTINGS")} desc={t("PORT_SETTINGS_DESC")}><module186.Form.Item rules={[
                    {
                        required: withService,
                        message: t("PORT_EMPTY")
                    },
                    {
                        validator: this.portsValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name={`${this.prefix}ports`} itemType="object" addText={t("ADD_PORT")} checkItemValid={this.checkContainerPortValid} extraAdd={!module63(this.context?.imageDetail?.exposedPorts ?? []) && <module186.Button className={module2250.defaultButton} onClick={this.handleFillPorts}>{t("USE_IMAGE_DEFAULT_PORTS")}</module186.Button>}>{withService ? <Module1534/> : <Module1533/>}</Module830></module186.Form.Item></module186.Form.Group>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}.`;
                }
                return "";
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.defaultProps = {
    prefix: ""
};
b.contextTypes = {
    imageDetail: module1.object,
    forceUpdate: module1.func
};
