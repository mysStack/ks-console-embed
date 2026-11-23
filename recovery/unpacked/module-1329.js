import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module818 from "./module-818.js";
import Module830 from "./module-830.js";
import Module1330 from "./module-1330.js";
import { isValidLabel } from "./module-52.js";
import { MODULE_KIND_MAP, PATTERN_PORT_NAME } from "./module-72.js";
import Module1606 from "./module-1606.js";
import module2592 from "./module-2592.js";
const S = ((Component_1)=>{
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
        e.state = {
            serviceType: "virtualIP"
        };
        e.handleTypeChange = function(serviceType) {
            e.setState({
                serviceType
            }, function() {
                if (serviceType === "virtualIP") {
                    module242(e.formTemplate, "spec.clusterIP");
                } else {
                    module74(e.formTemplate, "spec.clusterIP", "None");
                }
            });
        };
        e.portsValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            if (a.length > 0) {
                const n = [];
                a.forEach((e)=>{
                    if (e.name && e.port) {
                        if (n.includes(e.name)) {
                            return r({
                                message: t("PORT_INPUT_DESC")
                            });
                        }
                        if (e.name && (e.name.length > 63 || !PATTERN_PORT_NAME.test(e.name))) {
                            return r({
                                message: t("PORT_NAME_DESC")
                            });
                        }
                        return void n.push(e.name);
                    }
                    return r({
                        message: t("INVALID_PORT")
                    });
                });
            }
            r();
        };
        e.labelsValidator = function(e, a, r) {
            if (a) {
                if (module63(a)) {
                    return r({
                        message: t("ENTER_SELECTOR_TIP")
                    });
                }
                if (isValidLabel(a)) {
                    return r();
                }
                return r({
                    message: t("LABEL_FORMAT_DESC")
                });
            }
            return r();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderTypeSelect",
            value: function() {
                return <module186.Form.Item label={t("INTERNAL_ACCESS_MODE")}><Module818 className="margin-b12" value={this.state.serviceType} onChange={this.handleTypeChange} options={this.types}/></module186.Form.Item>;
            }
        },
        {
            key: "renderLabelSelector",
            value: function() {
                return <module186.Form.Item label={t("WORKLOAD_SELECTOR")} rules={[
                    {
                        required: true,
                        message: t("ENTER_SELECTOR_TIP")
                    },
                    {
                        validator: this.labelsValidator
                    }
                ]}><Module1606 name="spec.selector" cluster={this.props.cluster} namespace={this.namespace} addText={t("ADD")}/></module186.Form.Item>;
            }
        },
        {
            key: "renderPorts",
            value: function() {
                return <module186.Form.Group label={t("PORT_PL")} desc={t("SERVICE_PORTS_DESC")}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PORT_EMPTY")
                    },
                    {
                        validator: this.portsValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name="spec.ports" itemType="object" addText={t("ADD")}><Module1330/></Module830></module186.Form.Item></module186.Form.Group>;
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return <div className={module2592.wrapper}><module186.Form data={this.formTemplate} ref={formRef}>{this.renderTypeSelect()}{this.renderLabelSelector()}{this.renderPorts()}</module186.Form></div>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "types",
            get: function() {
                return [
                    {
                        icon: "cluster",
                        label: t("VIRTUAL_IP_TITLE"),
                        description: t("VIRTUAL_IP_DESC"),
                        value: "virtualIP"
                    },
                    {
                        icon: "blockchain",
                        label: t("INTERNAL_DOMAIN_NAME"),
                        description: t("INTERNAL_DOMAIN_NAME_DESC"),
                        value: "headlessSelector"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default S;
