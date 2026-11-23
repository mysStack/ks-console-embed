import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module818 from "components/Base/TypeSelect";
import Module830 from "components/Inputs/ArrayInput";
import Module1330 from "components/Inputs/ServicePort";
import { isValidLabel } from "utils/index";
import { MODULE_KIND_MAP, PATTERN_PORT_NAME } from "utils/constants";
import Module1606 from "components/Forms/Service/ServiceSettings/SelectorsInput";
import module2940 from "unpacked/module-2940.js";
const C = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
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
        e.handleLabelsChange = function(t) {
            const formTemplate = e.props.formTemplate;
            module74(formTemplate, "metadata.labels", t);
            module74(formTemplate, 'metadata.annotations["kubesphere.io/workloadName"]', `${t.app}-${t.version}`);
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
                const isFederated = this.props.isFederated;
                return <module186.Form.Item label={t("WORKLOAD_SELECTOR")} rules={[
                    {
                        required: true,
                        message: t("ENTER_SELECTOR_TIP")
                    },
                    {
                        validator: this.labelsValidator
                    }
                ]}><Module1606 name={isFederated ? "spec.template.spec.selector" : "spec.selector"} cluster={this.props.cluster} namespace={this.namespace} addText={t("ADD")} isFederated={isFederated} onChange={this.handleLabelsChange}/></module186.Form.Item>;
            }
        },
        {
            key: "renderPorts",
            value: function() {
                const isFederated = this.props.isFederated;
                return <module186.Form.Group label={t("PORT_PL")} desc={t("SERVICE_PORTS_DESC")}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PORT_EMPTY")
                    },
                    {
                        validator: this.portsValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name={isFederated ? "spec.template.spec.ports" : "spec.ports"} itemType="object" addText={t("ADD_PORT")}><Module1330/></Module830></module186.Form.Item></module186.Form.Group>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formProps } = props;
                return <div className={module2940.wrapper}><module186.Form data={this.formTemplate} ref={formRef} {...formProps}>{this.renderTypeSelect()}{this.renderLabelSelector()}{this.renderPorts()}</module186.Form></div>;
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
export default C;
