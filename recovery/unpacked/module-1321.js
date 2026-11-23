import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module459 from "./module-459.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module868 from "./module-868.js";
import module2557 from "./module-2557.js";
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
        t.handleChange = function(e) {
            const onChange = t.props.onChange;
            const r = module26(e, "backend.service.port.number");
            if (module459(r)) {
                module74(e, "backend.service.port.number", r);
            } else if (!module63(r)) {
                const n = r.replace(/\D/g, "");
                module74(e, "backend.service.port.number", Number(n));
            }
            module74(e, "pathType", "ImplementationSpecific");
            if (onChange) {
                onChange(e);
            }
        };
        t.handleServiceChange = function(service) {
            t.setState({
                service
            });
        };
        const n = module26(t.props, "value.backend.service.name");
        t.state = {
            service: n,
            defaultService: n
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const options = this.services.map((e)=>({
                        label: e.value,
                        value: e.value
                    }));
                return <Module868 {...this.props} onChange={this.handleChange}><module186.Input name="path" placeholder={t("PATH")} defaultValue="/"/><module186.Select className={module2557.autocomplete} name="backend.service.name" placeholder={t("PATH_SERVICE_TIP")} onChange={this.handleServiceChange} options={options}/><module186.Select className={module2557.input} name="backend.service.port.number" defaultValue={module26(this.props.value, "backend.service.port.number")} placeholder={t("PORT")} options={this.ports} searchable/></Module868>;
            }
        },
        {
            key: "services",
            get: function() {
                return this.props.services.map((e)=>({
                        label: e.name,
                        value: e.name
                    }));
            }
        },
        {
            key: "ports",
            get: function() {
                const _this = this;
                const t = this.props.services.find((t)=>t.name === _this.state.service);
                if (t) {
                    return t.ports.map((e)=>({
                            label: e.port,
                            value: Number(e.port)
                        }));
                }
                return [];
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                const a = module26(e, "value.backend.service.name");
                if (a && a !== t.defaultService) {
                    return {
                        service: a,
                        defaultService: a
                    };
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
