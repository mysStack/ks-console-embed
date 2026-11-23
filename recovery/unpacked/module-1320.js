import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-18.js";
import "./module-87.js";
import "./module-192.js";
import "./module-16.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module136 from "./module-136.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import { joinSelector } from "./module-52.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module853 from "./module-853.js";
import module443 from "./module-443.js";
import module437 from "./module-437.js";
import Module2553 from "./module-2553.js";
import Module2555 from "./module-2555.js";
let l;
l = ((Component_1)=>{
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
        n.showRule = function(e) {
            n.setState({
                showRule: true,
                selectRuleIndex: e,
                operation: "add"
            });
        };
        n.closeModal = function() {
            n.setState({
                showRule: false,
                selectRuleIndex: -1,
                operation: ""
            });
        };
        n.closeEditModal = function() {
            if (n.state.operation === "edit") {
                const e = n.state.oldTemplate;
                module74(n.fedFormTemplate, "spec", e.spec);
                if (n.props.isFederated) {
                    n.updateOverrides();
                }
            }
            n.closeModal();
        };
        n.showEdit = function(e) {
            n.setState({
                showRule: true,
                selectRuleIndex: e,
                operation: "edit",
                oldTemplate: module136(module14.toJS(n.fedFormTemplate))
            });
        };
        n.handleRule = function(e) {
            const isFederated = n.props.isFederated;
            const selectRuleIndex = n.state.selectRuleIndex;
            const n_fedFormTemplate = n.fedFormTemplate;
            const l = module26(n_fedFormTemplate, "spec.rules", []);
            if (selectRuleIndex >= 0) {
                l[selectRuleIndex] = e;
            } else {
                l.push(e);
            }
            module74(n_fedFormTemplate, "spec.rules", l);
            n.updateTLS(n_fedFormTemplate);
            if (isFederated) {
                n.updateOverrides();
            }
            n.closeModal();
        };
        n.handleDelete = function(e) {
            const isFederated = n.props.isFederated;
            const n_fedFormTemplate = n.fedFormTemplate;
            const r = module26(n_fedFormTemplate, "spec.rules", []);
            r.splice(e, 1);
            module74(n_fedFormTemplate, "spec.rules", r);
            n.updateTLS(n_fedFormTemplate);
            if (isFederated) {
                n.updateOverrides();
            }
            n.closeModal();
        };
        n.rulesValidator = function(e, a, r) {
            if (module63(a)) {
                return r({
                    message: t("ROUTING_RULE_EMPTY_DESC")
                });
            }
            r();
        };
        n.state = {
            showRule: false,
            selectRuleIndex: -1,
            gateway: {},
            oldTemplate: {},
            isLoading: false,
            operation: ""
        };
        n.secretStore = new module853;
        n.serviceStore = new module443;
        if (e.isFederated) {
            n.secretStore = new module437({
                module: n.secretStore.module
            });
            n.serviceStore = new module437({
                module: n.serviceStore.module
            });
        }
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.secretStore.fetchList({
                    namespace: this.namespace,
                    cluster: this.cluster,
                    limit: -1
                });
                this.serviceStore.fetchList({
                    namespace: this.namespace,
                    cluster: this.cluster,
                    limit: -1,
                    labelSelector: joinSelector(this.props.selector)
                });
            }
        },
        {
            key: "updateTLS",
            value: function(e) {
                const t = module26(e, "spec.rules", []).filter((e)=>e.protocol === "https" && e.secretName).reduce((acc, { secretName, host, clusters })=>{
                    const l = acc.find((e)=>e.secretName === secretName);
                    if (l) {
                        l.hosts = l.hosts || [];
                        if (l.hosts.indexOf(host) === -1) {
                            l.hosts.push(host);
                        }
                    } else {
                        acc.push({
                            hosts: [
                                host
                            ],
                            secretName,
                            clusters
                        });
                    }
                    return acc;
                }, []);
                module74(e, "spec.tls", t);
            }
        },
        {
            key: "updateOverrides",
            value: function() {
                const e = [];
                const t = module26(this.fedFormTemplate, "spec.rules", []);
                const a = module26(this.fedFormTemplate, "spec.tls", []);
                module26(this.props.projectDetail, "clusters", []).forEach((r)=>{
                    const n = (e)=>e.filter((e)=>e.clusters.includes(r.name)).map((e)=>module189(e, "clusters"));
                    e.push({
                        clusterName: r.name,
                        clusterOverrides: [
                            {
                                path: "/spec/rules",
                                value: n(t)
                            },
                            {
                                path: "/spec/tls",
                                value: n(a)
                            }
                        ]
                    });
                });
                module74(this.formTemplate, "spec.overrides", e);
            }
        },
        {
            key: "renderRuleForm",
            value: function(e) {
                const props = this.props;
                const { isFederated, projectDetail, namespace, formTemplate, detail } = props;
                const services = module14.toJS(this.services);
                const data = module14.toJS(this.secretStore.list).data;
                const data_1 = module26(this.fedFormTemplate, `spec.rules[${e}]`, {});
                return <Module2555 data={data_1} gateway={this.state.gateway} secrets={data} services={services} isFederated={isFederated} projectDetail={projectDetail} cluster={this.cluster} detail={detail} namespace={namespace} validData={module136(formTemplate?.ingress || formTemplate?.Ingress)} onSave={this.handleRule} onCancel={this.closeEditModal}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, isFederated, projectDetail } = props;
                const state = this.state;
                const { showRule, selectRuleIndex, gateway, isLoading } = state;
                if (showRule) {
                    return this.renderRuleForm(selectRuleIndex);
                }
                const disabled = module63(gateway) && !isLoading;
                return <module186.Form data={this.fedFormTemplate} ref={formRef}><module186.Form.Item rules={[
                    {
                        validator: this.rulesValidator
                    }
                ]}><Module2553 name="spec.rules" onShow={this.showRule} onEdit={this.showEdit} onDelete={this.handleDelete} disabled={disabled} isFederated={isFederated} projectDetail={projectDetail}/></module186.Form.Item></module186.Form>;
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
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "services",
            get: function() {
                return this.serviceStore.list.data;
            }
        }
    ]);
    return r;
})(Component);
module49(l.prototype, "services", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "services"), l.prototype);
const N = l;
const k = observer(N);
export default k;
const I = N;
export { I as Component };
