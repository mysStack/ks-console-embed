import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module831 from "unpacked/module-831.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import { joinSelector, mergeLabels } from "utils/index";
import { MODULE_KIND_MAP } from "utils/constants";
import module435 from "utils/form.templates";
import module961 from "stores/application/crd";
import module443 from "stores/service";
import Module4673 from "components/Forms/GrayRelease/Components/SelectComponent";
import module4677 from "unpacked/module-4677.js";
let s;
const I = [
    "http",
    "http2",
    "grpc"
];
const w = observer(s = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.valueRenderer = function(e) {
            return <p className={module4677.option}><img src={e.icon || "/assets/default-app.svg"} alt=""/>{t("GRAY_APP_NAME", {
                name: e.name
            })}{e.disabled && <module186.Tooltip trigger="click" content={t("NO_SERVICE_MESH_TIP")} positionFixed placement="left"><module186.Icon name="question" className="float-right"/></module186.Tooltip>}</p>;
        };
        n.optionRenderer = n.valueRenderer;
        n.updateAppInfo = function(e) {
            module74(n.formTemplate, "metadata.labels", e.selector);
            module74(n.formTemplate, "spec.selector.matchLabels", e.selector);
            module74(n.formTemplate, 'metadata.annotations["app.kubernetes.io/icon"]', e.icon);
        };
        n.selectApp = async (t)=>{
            let a;
            n.updateAppInfo(t);
            n.setState({
                isLoading: true
            });
            a = {
                namespace: n.namespace,
                cluster: n.props.cluster,
                labelSelector: joinSelector(t.selector)
            };
            await Promise.all([
                n.store.fetchList(a),
                n.serviceStore.fetchListByK8s(a),
                n.serviceStore.fetchWorkloads(a)
            ]).then(()=>{
                const e = module14.toJS(n.serviceStore.list.data);
                const t = module14.toJS(n.serviceStore.workloads.data);
                const a = module14.toJS(n.store.list.data);
                module242(n.formTemplate, "spec.hosts");
                n.setState({
                    components: e.map((e)=>{
                        e.workloads = [];
                        const r = module26(e, "labels.app");
                        t.forEach((t)=>{
                            if (r === module26(t, "labels.app")) {
                                e.workloads.push(t);
                            }
                        });
                        const n = module26(e.workloads, "[0].type", "");
                        e.workloadType = MODULE_KIND_MAP[n] || "";
                        e.strategies = a.filter((t)=>t.hosts.includes(e.name)) || [];
                        return e;
                    }),
                    isLoading: false
                });
            });
        };
        n.handleAppChange = function(selectApp) {
            n.setState({
                selectApp
            }, function() {
                const t = module14.toJS(n.appStore.list.data).find((t)=>t.name === selectApp) || {};
                if (t.selector) {
                    n.selectApp(t);
                }
            });
        };
        n.handleComponentSelect = function(e, t) {
            const a = n.state.components.find((t)=>t.name === e) || {};
            if (!module63(a.selector)) {
                const r = module831(a.workloads[0]);
                const o = module435[r.type]({
                    namespace: n.namespace
                });
                const c = module26(a, "ports[0].name", "");
                const s = I.includes((c.split("-")[0] || "").toLowerCase()) ? "http" : "tcp";
                const l = r.labels.version;
                module74(n.formTemplate, "metadata.labels.app", e);
                module74(n.formTemplate, "spec.selector.matchLabels.app", e);
                module74(n.formTemplate, "spec.template.spec", {
                    hosts: [
                        e
                    ]
                });
                module74(n.formTemplate, "spec.principal", l);
                module74(n.formTemplate, "spec.protocol", s);
                module74(n.formTemplate, 'metadata.annotations["servicemesh.kubesphere.io/oldWorkloadName"]', r.name);
                module74(n.formTemplate, 'metadata.annotations["servicemesh.kubesphere.io/workloadType"]', r.type);
                module74(n.formTemplate, 'metadata.annotations["servicemesh.kubesphere.io/workloadReplicas"]', String(r.podNums));
                n.props.formTemplate.workload = {
                    apiVersion: o.apiVersion,
                    kind: o.kind,
                    metadata: {
                        name: "",
                        namespace: r.namespace,
                        labels: r.labels,
                        annotations: r.annotations
                    },
                    spec: r.spec
                };
                mergeLabels(n.props.formTemplate.workload, {
                    version: ""
                });
            }
            if (t) {
                t(e);
            }
        };
        n.handleIstioProxyChange = function(istioProxyChecked) {
            n.setState({
                istioProxyChecked
            });
        };
        n.state = {
            istioProxyChecked: true,
            selectApp: "",
            components: [],
            isLoading: false
        };
        n.store = e.store;
        n.appStore = new module961;
        n.serviceStore = new module443;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.appStore.fetchList({
                    namespace: this.namespace,
                    cluster: this.props.cluster,
                    limit: -1
                }).then(()=>{
                    const t = module14.toJS(_this.appStore.list.data).find((e)=>e.serviceMeshEnable) || {};
                    _this.setState({
                        selectApp: t.name
                    });
                    if (t.selector) {
                        _this.selectApp(t);
                    }
                });
            }
        },
        {
            key: "getApplications",
            value: function() {
                return module14.toJS(this.appStore.list.data).map((e)=>({
                        ...e,
                        value: e.name,
                        disabled: !e.serviceMeshEnable
                    }));
            }
        },
        {
            key: "renderForm",
            value: function() {
                const formRef = this.props.formRef;
                const state = this.state;
                const { components, isLoading } = state;
                return <module186.Form data={this.formTemplate} ref={formRef}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("SELECT_GRAY_COMPONENT_TIP")
                    }
                ]}><Module4673 name="spec.hosts" data={components} loading={isLoading} onSelect={this.handleComponentSelect}/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "render",
            value: function() {
                const selectApp = this.state.selectApp;
                return <div><div className={module4677.bar}><module186.Select value={selectApp} onChange={this.handleAppChange} options={this.getApplications()} isLoading={this.appStore.list.isLoading} valueRenderer={this.valueRenderer} optionRenderer={this.optionRenderer} placeholder=" "/></div><div className={module4677.formWrapper}>{this.renderForm()}</div></div>;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate.strategy;
            }
        },
        {
            key: "strategyType",
            get: function() {
                return module26(this.formTemplate, "spec.type");
            }
        }
    ]);
    return r;
})(Component)) || s;
export default w;
