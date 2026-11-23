import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-87.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module198 from "./module-198.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module885 from "./module-885.js";
import Module788 from "./module-788.js";
import Module852 from "./module-852.js";
import Module843 from "./module-843.js";
import Module1049 from "./module-1049.js";
import { CLUSTER_PROVIDERS, PATTERN_NAME } from "./module-72.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import Module2947 from "./module-2947.js";
import { CLUSTER_PROVIDERS_ANNOTATIONS } from "./module-1326.js";
import module2949 from "./module-2949.js";
let c;
let s;
let i;
let f;
let d;
let p;
let m;
const z = observer((m = p = ((Component_1)=>{
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
        module65(a, "template", i, module88(a));
        module65(a, "store", f, module88(a));
        module65(a, "options", d, module88(a));
        a.getNginxVersion = module44(module41.mark(function e() {
            let t;
            let r;
            let n;
            let l;
            let versionOption;
            let c;
            let s;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            t = a.props;
                            r = t.cluster;
                            n = t.isEdit;
                            e.next = 3;
                            return a.store.getGatewayAppVersions({
                                cluster: r
                            });
                        case 3:
                            l = e.sent;
                            versionOption = [];
                            for(c in l){
                                versionOption.push({
                                    label: c,
                                    value: c
                                });
                            }
                            s = "";
                            if (!n) {
                                e.next = 11;
                                break;
                            }
                            s = module26(a.template, "spec.appVersion", "");
                            e.next = 15;
                            break;
                        case 11:
                            s = module26(versionOption, "[0].value", "");
                            if (module63(s)) {
                                e.next = 15;
                                break;
                            }
                            e.next = 15;
                            return a.fetchHelmChart(s);
                        case 15:
                            a.setState({
                                versionOption,
                                version: s
                            });
                        case 16:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        a.fetchHelmChart = async (appversion)=>{
            let r;
            let n;
            let l;
            let o;
            r = a.props;
            n = r.cluster;
            l = r.name;
            o = await a.store.getHelmChart({
                appversion,
                cluster: n
            });
            module74(o, "controller.ingressClassResource.name", l);
            module74(o, "controller.electionID", l);
            module74(o, "controller.ingressClass", l);
            module74(o, "controller.ingressClassResource.controllerValue", `k8s.io/${l}`);
            module74(a.template, "spec.values", o);
            module74(a.template, "spec.appVersion", appversion);
            a.initAnnotations();
        };
        a.getData = function() {
            return a.editor.current.getData();
        };
        a.nameValidator = function(e, r, n) {
            if (!r) {
                return n();
            }
            a.props.store.checkName({
                name: r
            }).then((a)=>{
                if (a.exist) {
                    return n({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                n();
            });
        };
        a.getTypeOptions = function() {
            return [
                {
                    label: "NodePort",
                    value: "NodePort"
                },
                {
                    label: "LoadBalancer",
                    value: "LoadBalancer"
                }
            ];
        };
        a.initAnnotations = function() {
            const e = module26(a.template, "spec.values.controller.service.annotations");
            const t = module26(a.template, "spec.values.controller.service.type");
            const r = module26(a.template, "spec.values.controller.service['kubesphere.io/loadbalancer-provider']");
            if (module63(e) && t === "LoadBalancer" && r === "QingCloud Kubernetes Engine") {
                module74(a.template, "spec.values.controller.service.annotations", globals.config.loadBalancerDefaultAnnotations);
            }
            if (r) {
                a.options = Object.keys(CLUSTER_PROVIDERS_ANNOTATIONS[r]);
            }
            const n = module26(a.template, "spec.values.controller.config", {});
            if (!module198(n, "worker-processes")) {
                module74(a.template, "spec.values.controller.config", {
                    ...n,
                    "worker-processes": "4"
                });
            }
            a.forceUpdate();
        };
        a.handleOk = function() {
            const onOk = a.props.onOk;
            const a_state = a.state;
            const t_isChecked = a_state.isChecked;
            if (a_state.isCodeMode) {
                a.template = a.parseFormFromCode(a.getData());
                return void onOk(a.template);
            }
            module74(a.template, "spec.values.controller.integrateKubeSphere.tracing", !!t_isChecked);
            a.form.current.validate(function() {
                onOk(a.template);
            });
        };
        a.parseFormFromCode = function(e) {
            if (Array.isArray(e)) {
                return e.reduce((acc, item)=>({
                        ...acc,
                        ...item
                    }), {});
            }
            return e;
        };
        a.handleTypeChange = function(e) {
            const t = module26(a.template, "spec.values.controller.service.annotations", {});
            if (e === "LoadBalancer") {
                module74(a.template, "spec.values.controller.service.annotations", module63(t) ? globals.config.loadBalancerDefaultAnnotations : t);
                module74(a.template, "spec.values.controller.service['kubesphere.io/loadbalancer-provider']", "QingCloud Kubernetes Engine");
                module74(a.template, "spec.values.controller.publishService.enabled", true);
            } else {
                module74(a.template, "spec.values.controller.service.annotations", {});
                module74(a.template, "spec.values.controller.publishService.enabled", false);
                module74(a.template, "spec.values.controller.service['kubesphere.io/loadbalancer-provider']", "");
            }
            a.setState({
                type: e
            });
        };
        a.providerOptionRenderer = function(e) {
            return <><module186.Icon className="margin-r8" name={e.icon} type="light" size={20}/>{e.label}</>;
        };
        a.handleAnnotations = function(e) {
            a.options = Object.keys(CLUSTER_PROVIDERS_ANNOTATIONS[e]);
            if (e === "QingCloud Kubernetes Engine") {
                a.setAnnotations(globals.config.loadBalancerDefaultAnnotations);
            } else {
                a.setAnnotations({});
            }
        };
        a.setAnnotations = function(e) {
            module74(a.template, "spec.service.annotations", e);
            a.forceUpdate();
        };
        a.renderLoadBalancerSupport = function() {
            const options = [].concat(module61(CLUSTER_PROVIDERS), [
                {
                    label: "OpenELB",
                    value: "OpenELB",
                    icon: "kubernetes"
                }
            ]);
            return <div className={module2949.loadBalancer}><module186.Form.Item label={t("LOAD_BALANCER_PROVIDER")}><module186.Select options={options} placeholder=" " optionRenderer={a.providerOptionRenderer} onChange={a.handleAnnotations} name="spec.values.controller.service['kubesphere.io/loadbalancer-provider']"/></module186.Form.Item></div>;
        };
        a.handleToggleChange = function(isChecked) {
            a.setState({
                isChecked
            });
        };
        a.handleVersionChange = function(e) {
            a.setState({
                version: e
            });
            a.fetchHelmChart(e);
        };
        a.handleModeChange = function() {
            const isCodeMode = a.state.isCodeMode;
            if (isCodeMode) {
                a.template = a.parseFormFromCode(a.getData());
            }
            a.setState({
                isCodeMode: !isCodeMode
            });
        };
        a.handleIngressClassNameChange = function(e) {
            module74(a.template, "spec.values.controller.electionID", e);
            module74(a.template, "spec.values.controller.ingressClass", e);
            module74(a.template, "spec.values.controller.ingressClassResource.controllerValue", `k8s.io/${e}`);
            if (!a.props.isEdit) {
                module74(a.template, "metadata.name", e);
            }
        };
        a.renderTitle = function() {
            return <div className={module2949.modalTitle}><module186.Icon name="loadbalancer" size={32}/><div className={module2949.modalTitleContent}><div>{t("ENABLE_GATEWAY")}</div><p> {t("ENABLE_GATEWAY_DESC")}</p></div></div>;
        };
        a.operations = function() {
            return <Module852 className={module2949.switch} text={t("EDIT_YAML")} onChange={a.handleModeChange} checked={a.state.isCodeMode}/>;
        };
        a.handleConfigError = function(configError = "") {
            a.setState({
                configError
            });
        };
        a.form = createRef();
        a.editor = createRef();
        a.state = {
            isChecked: JSON.parse(module26(a.template, "spec.values.controller.integrateKubeSphere.tracing", false)),
            configError: "",
            isCodeMode: false,
            versionOption: [],
            version: ""
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                await this.getNginxVersion();
            }
        },
        {
            key: "renderYamlEdit",
            value: function() {
                return <div className={module2949.codeWrapper}><Module885 ref={this.editor} value={this.template}/></div>;
            }
        },
        {
            key: "renderForm",
            value: function() {
                const props = this.props;
                const { cluster, isEdit } = props;
                const state = this.state;
                const { isChecked, versionOption, version } = state;
                return <div className={module2949.wrapper}><module186.Form ref={this.form} data={this.template}><module186.Form.Item label={t("NGINX_INGRESS_VERSION")}><module186.Select options={versionOption} disabled={isEdit} value={version} onChange={this.handleVersionChange}/></module186.Form.Item><module186.Form.Item label="IngressClassName" desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="spec.values.controller.ingressClassResource.name" maxLength={63} onChange={this.handleIngressClassNameChange}/></module186.Form.Item><module186.Form.Item><Module2947 name="spec.values.controller.replicaCount" template={this.template} replicas={module26(this.template, "spec.values.controller.replicaCount")}/></module186.Form.Item><module186.Form.Item label={t("ACCESS_MODE")} className={module2949.types}><module186.RadioGroup name="spec.values.controller.service.type" mode="button" buttonWidth={155} onChange={this.handleTypeChange} size="small"><module186.RadioButton value="NodePort">NodePort</module186.RadioButton><module186.RadioButton value="LoadBalancer">LoadBalancer</module186.RadioButton></module186.RadioGroup></module186.Form.Item><div className={module2949.content}>{globals.app.hasClusterModule(cluster, "servicemesh") && <div className={module2949.wrapperContent}><div className={module2949.toggle}><module186.Toggle checked={isChecked} onChange={this.handleToggleChange}/>{t("TRACING")}</div><div className={module2949.toggleTip}>{t.html("GATEWAY_TRACING_TIP")}</div></div>}{module26(this.template, "spec.values.controller.service.type") === "LoadBalancer" && <>{this.renderLoadBalancerSupport()}<div className={module2949.wrapperContent}><module186.Form.Item label={t("ANNOTATION_PL")}><Module1049 controlled options={module14.toJS(this.options)} className={module2949.objectBg} name="spec.values.controller.service.annotations" addText={t("ADD")}/></module186.Form.Item></div></>}<div className={module2949.wrapperContent}><module186.Form.Item label={t("CONFIGURATION_OPTIONS")}><Module843 className={module2949.objectBg} name="spec.values.controller.config" addText={t("ADD")} controlled onError={this.handleConfigError}/></module186.Form.Item></div></div></module186.Form></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                const state = this.state;
                const { configError, isCodeMode } = state;
                return <Module788 width={960} title={this.renderTitle()} onCancel={onCancel} visible={visible} bodyClassName={module2949.modalBody} headerClassName={module2949.modalHead} closable={false} operations={this.operations()} hideFooter><div className={module2949.body}>{isCodeMode ? this.renderYamlEdit() : this.renderForm()}</div><div className={module2949.footer}><module186.Button onClick={onCancel} loading={isSubmitting} disabled={isSubmitting}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOk} loading={isSubmitting} disabled={isSubmitting || configError !== ""}>{t("OK")}</module186.Button></div></Module788>;
            }
        }
    ]);
    return n;
})(Component), p.propTypes = {
    template: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, p.defaultProps = {
    template: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, s = m, i = module49(s.prototype, "template", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return this.props.detail || {};
    }
}), f = module49(s.prototype, "store", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return this.props.store;
    }
}), d = module49(s.prototype, "options", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), c = s)) || c;
export default z;
