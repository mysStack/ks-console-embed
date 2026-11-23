import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module242 from "unpacked/module-242.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module818 from "components/Base/TypeSelect";
import { NETWORK_PLUGIN_ICONS, STORAGE_PLUGIN_ICONS } from "components/Forms/Cluster/constants";
import module2681 from "unpacked/module-2681.js";
import Module1179 from "components/Forms/Cluster/Title";
import Module2682 from "components/Forms/Cluster/ClusterSettings/KubernetesParams";
import Module2684 from "components/Forms/Cluster/ClusterSettings/NetworkParams";
import Module2687 from "components/Forms/Cluster/ClusterSettings/StorageParams";
let l;
let o;
const N = observer((o = ((Component_1)=>{
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
        t.handleNetworkPluginChange = function(e) {
            const a = t.networkPlugins.find((t)=>t.value === e);
            const networkParams = t.state.networkParams;
            t.setState({
                networkParams: module26(a, "params", [])
            }, function() {
                const networkParams_1 = t.state.networkParams;
                const formTemplate = t.props.formTemplate;
                networkParams.forEach((e)=>{
                    module242(formTemplate, `spec.network.${e.name}`);
                });
                networkParams_1.forEach((e)=>{
                    if ("default" in e) {
                        module74(formTemplate, `spec.network.${e.name}`, e.default);
                    }
                });
            });
        };
        t.handleStoragePluginChange = function(e) {
            const a = t.storagePlugins.find((t)=>t.value === e);
            if (a) {
                a.template = a.template || {};
                module74(t.props.formTemplate, "spec.addons[0]", module14.toJS(a.template));
                t.setState({
                    storageParams: module26(a, "params", [])
                });
            }
        };
        const n = module26(e.formTemplate, "spec.network.plugin");
        const l = t.networkPlugins.find((e)=>e.value === n);
        const o = module26(e.formTemplate, "spec.storagePlugin") || module26(t.storagePlugins, "[0].value");
        module74(e.formTemplate, "spec.storagePlugin", o);
        const c = t.storagePlugins.find((e)=>e.value === o);
        if (c && c.template && module63(module26(e.formTemplate, "spec.addons[0]"))) {
            module74(e.formTemplate, "spec.addons[0]", module14.toJS(c.template));
        }
        t.state = {
            networkParams: module26(l, "params", []),
            storageParams: module26(c, "params", [])
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                const state = this.state;
                const { networkParams, storageParams } = state;
                return <div className={module2681.wrapper}><Module1179 title={t("CLUSTER_SETTINGS")} description={t("K8S_CLUSTER_SETTINGS_DESC")}/><module186.Form className={module2681.form} data={formTemplate} ref={formRef}><module186.Form.Item label={t("KUBERNETES_VERSION")}><Module818 name="spec.kubernetes.version" options={this.versions} defaultValue={module26(this.versions, "0.value")}/></module186.Form.Item><module186.Form.Item><Module2682 name="spec.kubernetes"/></module186.Form.Item><module186.Form.Item label={t("NETWORK_PLUGIN")}><Module818 name="spec.network.plugin" options={this.networkPlugins} onChange={this.handleNetworkPluginChange}/></module186.Form.Item><module186.Form.Item><Module2684 name="spec.network" params={networkParams}/></module186.Form.Item><module186.Form.Item label={t("DEFAULT_STORAGE_PLUGIN")}><Module818 name="spec.storagePlugin" options={this.storagePlugins} onChange={this.handleStoragePluginChange}/></module186.Form.Item><module186.Form.Item><Module2687 name="spec.addons[0]" params={storageParams}/></module186.Form.Item></module186.Form></div>;
            }
        },
        {
            key: "versions",
            get: function() {
                return module14.toJS(module26(this.props.store.kubekey, "parameters.kubernetes.supportedVersions", [])).map((e)=>({
                        icon: "kubernetes",
                        label: e,
                        value: e,
                        description: "-"
                    }));
            }
        },
        {
            key: "networkPlugins",
            get: function() {
                return module26(this.props.store.kubekey, "parameters.kubernetes.supportedCNIs", []).map((e)=>({
                        label: e.title,
                        value: e.name,
                        icon: NETWORK_PLUGIN_ICONS[e.name] || "network",
                        description: t(e.description),
                        params: e.parameters
                    }));
            }
        },
        {
            key: "storagePlugins",
            get: function() {
                return module26(this.props.store.kubekey, "parameters.storagePlugins", []).map((e)=>({
                        label: e.title,
                        value: e.name,
                        icon: STORAGE_PLUGIN_ICONS[e.name] || "network",
                        description: t(e.description),
                        params: e.parameters,
                        template: e.template
                    }));
            }
        }
    ]);
    return r;
})(Component), module49(o.prototype, "versions", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "versions"), o.prototype), module49(o.prototype, "networkPlugins", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "networkPlugins"), o.prototype), module49(o.prototype, "storagePlugins", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "storagePlugins"), o.prototype), l = o)) || l;
export default N;
