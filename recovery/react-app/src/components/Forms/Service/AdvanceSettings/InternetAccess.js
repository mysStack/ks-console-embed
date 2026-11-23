import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module242 from "unpacked/module-242.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module1049 from "components/Inputs/AnnotationsInput";
import { CLUSTER_PROVIDERS_ANNOTATIONS } from "pages/projects/components/Modals/GatewaySetting/contants";
import { updateFederatedAnnotations } from "utils/index";
import { CLUSTER_PROVIDERS } from "utils/constants";
import module1327 from "stores/openelb";
import module1604 from "unpacked/module-1604.js";
import module2581 from "unpacked/module-2581.js";
const C = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
    })(n);
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.openELBStore = a.props.isEdgeWize ? new module1604 : new module1327;
        a.checkOpenELBStatus = async function e() {
            let t;
            let clusters;
            let namespace;
            let openELBOpened;
            t = a.props;
            clusters = t.clusters;
            namespace = t.namespace;
            if (!(openELBOpened = await a.openELBStore.isActive({
                clusters,
                namespace
            }))) {
                a.setState({
                    openELBOpened
                });
            }
        };
        a.handleAccessModeChange = function(mode) {
            if (mode !== "LoadBalancer") {
                Object.keys(globals.config.loadBalancerDefaultAnnotations).forEach((e)=>{
                    module242(a.formTemplate, `metadata.annotations["${e}"]`);
                });
                a.providerOptions.forEach((e)=>{
                    module242(a.formTemplate, `metadata.annotations["${e}"]`);
                });
                module242(a.formTemplate, "metadata.annotations['kubesphere.io/annotations']");
            }
            if (a.props.isFederated) {
                updateFederatedAnnotations(a.formTemplate);
            }
            a.setState({
                mode
            });
        };
        a.handleAnnotationsChange = function() {
            if (a.props.isFederated) {
                updateFederatedAnnotations(a.formTemplate);
            }
        };
        a.optionRenderer = function(e) {
            return <div className={module2581.option}><div>{e.label}</div><p>{e.desc}</p></div>;
        };
        a.providerOptionRenderer = function(e) {
            return <div className={module2581.selectOption}><module186.Icon className="margin-r8" name={e.icon} type="light" size={20}/><span className={module2581.text}>{e.label}</span>{e.disabled && <module186.Tooltip content={t("OPENELB_NOT_READY")}><module186.Icon name="question" size="16"/></module186.Tooltip>}</div>;
        };
        a.handleProvideChange = function(provider) {
            a.setState({
                provider
            });
        };
        a.state = {
            mode: module26(a.formTemplate, "spec.type", "ClusterIP"),
            provider: "QingCloud Kubernetes Engine",
            openELBOpened: true
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                this.checkOpenELBStatus();
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { mode, provider, openELBOpened } = state;
                const options = [].concat(module61(CLUSTER_PROVIDERS), [
                    {
                        label: "OpenELB",
                        value: "OpenELB",
                        icon: "kubernetes",
                        disabled: !openELBOpened,
                        tip: ""
                    }
                ]);
                return <><module186.Columns><module186.Column><module186.Form.Item label={t("ACCESS_MODE")}><module186.Select name={`Service.${this.fedPreifx}spec.type`} options={this.accessModes} onChange={this.handleAccessModeChange}/></module186.Form.Item></module186.Column>{mode === "LoadBalancer" && <module186.Column><module186.Form.Item label={t("LOAD_BALANCER_PROVIDER")}><module186.Select name="Service.metadata.annotations['kubesphere.io/annotations']" options={options} placeholder=" " optionRenderer={this.providerOptionRenderer} onChange={this.handleProvideChange} value={provider}/></module186.Form.Item></module186.Column>}</module186.Columns>{mode === "LoadBalancer" && <module186.Columns><module186.Column><module186.Form.Item label={t("ANNOTATION_PL")}><Module1049 name="Service.metadata.annotations" options={this.providerOptions} hiddenKeys={globals.config.preservedAnnotations} onChange={this.handleAnnotationsChange} addText={t("ADD")}/></module186.Form.Item></module186.Column></module186.Columns>}</>;
            }
        },
        {
            key: "fedPreifx",
            get: function() {
                if (this.props.isFederated) {
                    return "spec.template.";
                }
                return "";
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate.Service;
            }
        },
        {
            key: "accessModes",
            get: function() {
                return [
                    {
                        label: "NodePort",
                        desc: t("ACCESS_NODEPORT_TIP"),
                        value: "NodePort"
                    },
                    {
                        label: "LoadBalancer",
                        desc: t("ACCESS_LOADBALANCER_TIP"),
                        value: "LoadBalancer"
                    }
                ];
            }
        },
        {
            key: "providerOptions",
            get: function() {
                const provider = this.state.provider;
                if (provider === "") {
                    return [];
                }
                return Object.keys(CLUSTER_PROVIDERS_ANNOTATIONS[provider]);
            }
        }
    ]);
    return n;
})(Component);
export default C;
