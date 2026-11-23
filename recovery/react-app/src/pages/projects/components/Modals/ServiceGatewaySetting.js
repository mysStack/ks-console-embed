import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
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
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module189 from "unpacked/module-189.js";
import module831 from "unpacked/module-831.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module1049 from "components/Inputs/AnnotationsInput";
import Module3353 from "unpacked/module-3353.js";
import { CLUSTER_PROVIDERS } from "utils/constants";
import module1327 from "stores/openelb";
import module1604 from "unpacked/module-1604.js";
import { CLUSTER_PROVIDERS_ANNOTATIONS } from "pages/projects/components/Modals/GatewaySetting/contants";
import module3355 from "unpacked/module-3355.js";
const I = ((Component_1)=>{
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
            let r;
            let namespace;
            let openELBOpened;
            t = a.props.detail;
            r = t.cluster;
            namespace = t.namespace;
            if (!(openELBOpened = await a.openELBStore.isActive({
                clusters: [
                    r
                ],
                namespace
            }))) {
                a.setState({
                    openELBOpened
                });
            }
        };
        a.providerOptionRenderer = function(e) {
            return <div className={module3355.selectOption}><module186.Icon className="margin-r8" name={e.icon} type="light" size={20}/><span className={module3355.text}>{e.label}</span>{e.disabled && <module186.Tooltip content={t("OPENELB_NOT_READY")}><module186.Icon name="question" size="16"/></module186.Tooltip>}</div>;
        };
        a.handleProvideChange = function(provider) {
            a.setState({
                provider
            });
        };
        a.handleTypeChange = function(e) {
            if (e !== "LoadBalancer" && (module242(a.state.formTemplate, "metadata.annotations['kubesphere.io/annotations']"), Object.keys(globals.config.loadBalancerDefaultAnnotations).forEach((e)=>{
                module242(a.state.formTemplate, `metadata.annotations["${e}"]`);
            }), a.providerOptions.forEach((e)=>{
                module242(a.state.formTemplate, `metadata.annotations["${e}"]`);
            }), e === "ClusterIP")) {
                const t = module26(a.state.formTemplate, "spec.ports", []).map((e)=>module189(e, [
                        "nodePort"
                    ]));
                module74(a.state.formTemplate, "spec.ports", t);
            }
            a.setState({
                type: e
            });
        };
        a.optionRenderer = function(e) {
            return <div className={module3355.option}><div>{e.label}</div><p>{e.desc}</p></div>;
        };
        a.handleOk = function(e) {
            const a_props = a.props;
            const { onOk, store, detail } = a_props;
            const store_list = store.list;
            const u = module14.toJS(store_list.selectedRowKeys).filter((e)=>e !== detail.uid);
            onOk(e);
            store_list.setSelectRowKeys(u);
        };
        a.state = {
            type: module26(module14.toJS(e.detail._originData), "spec.type"),
            formTemplate: module831(module14.toJS(e.detail._originData)),
            openELBOpened: true,
            provider: "QingCloud Kubernetes Engine"
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
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                const state = this.state;
                const { type, formTemplate, provider, openELBOpened } = state;
                const options = [].concat(module61(CLUSTER_PROVIDERS), [
                    {
                        label: "OpenELB",
                        value: "OpenELB",
                        icon: "kubernetes",
                        disabled: !openELBOpened,
                        tip: ""
                    }
                ]);
                return <module788.Form width={1162} title={t("EDIT_EXTERNAL_ACCESS")} data={formTemplate} onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><div><Module3353 title={t("EXTERNAL_ACCESS")} desc={t("SERVICE_EXTERNAL_ACCESS_DESC")}/><div className={module3355.wrapper}><div className={module3355.contentWrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("ACCESS_MODE")} className={module3355.types}><module186.Select name="spec.type" options={this.accessModes} onChange={this.handleTypeChange} optionRenderer={this.optionRenderer}/></module186.Form.Item></module186.Column>{type === "LoadBalancer" && <module186.Column><module186.Form.Item label={t("LOAD_BALANCER_PROVIDER")}><module186.Select options={options} placeholder=" " optionRenderer={this.providerOptionRenderer} onChange={this.handleProvideChange} value={provider} name="metadata.annotations['kubesphere.io/annotations']"/></module186.Form.Item></module186.Column>}</module186.Columns>{type === "LoadBalancer" && <module186.Form.Item label={t("ANNOTATION_PL")}><Module1049 name="metadata.annotations" options={this.providerOptions} hiddenKeys={[
                    /^kubesphere.io\//,
                    "openpitrix_runtime"
                ]} addText={t("ADD")}/></module186.Form.Item>}</div></div></div></module788.Form>;
            }
        },
        {
            key: "accessModes",
            get: function() {
                return [
                    {
                        label: t("NONE"),
                        desc: t("ACCESS_NONE_TIP"),
                        value: "ClusterIP"
                    },
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
export default I;
I.propTypes = {
    isEdgeWize: module1.bool,
    visible: module1.bool,
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
I.defaultProps = {
    isEdgeWize: false,
    visible: false,
    isSubmitting: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
};
