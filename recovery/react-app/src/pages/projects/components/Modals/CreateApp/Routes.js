import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-860.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module189 from "unpacked/module-189.js";
import module63 from "unpacked/module-63.js";
import module807 from "unpacked/module-807.js";
import module136 from "unpacked/module-136.js";
import module896 from "unpacked/module-896.js";
import module186 from "unpacked/module-186.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module853 from "stores/secret";
import module437 from "stores/federated";
import module834 from "stores/gateway";
import { generateId } from "utils/index";
import module105 from "utils/object.mapper";
import Module2621 from "unpacked/module-2621.js";
import Module2623 from "unpacked/module-2623.js";
import module2624 from "unpacked/module-2624.js";
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
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.showAdd = function(e) {
            t.setState({
                showAdd: true,
                selectRuleIndex: e,
                operation: "add"
            });
        };
        t.showEdit = function(e) {
            const ingress = t.state.ingress;
            t.setState({
                showAdd: true,
                selectRuleIndex: e,
                operation: "edit",
                old: module136(ingress)
            });
        };
        t.closeEditModal = function() {
            if (t.state.operation === "edit") {
                const e = t.props.formData;
                const a = t.state.old;
                t.setState({
                    ingress: a
                }, function() {
                    module74(e, "ingress", a);
                });
            }
            t.closeModal();
        };
        t.closeModal = function() {
            t.setState({
                showAdd: false,
                selectRuleIndex: -1,
                operation: ""
            });
        };
        t.updateName = function() {
            const formData = t.props.formData;
            const ingress = t.state.ingress;
            const r = module26(formData, "application.metadata.name");
            if (!module26(ingress, "metadata.name")) {
                module74(ingress, "metadata.name", `${r}-ingress-${generateId()}`);
            }
        };
        t.updateAnnotations = function() {
            const t_props = t.props;
            const { formData, isFederated, isGovernance } = t_props;
            const ingress = t.state.ingress;
            const u = module26(formData, "application.metadata.namespace");
            if (isGovernance) {
                const o = isFederated ? module26(ingress, "spec.template") : ingress;
                const i = module26(o, "spec.rules[0].http.paths[0].backend.service.name");
                if (i) {
                    module74(o, 'metadata.annotations["nginx.ingress.kubernetes.io/upstream-vhost"]', `${i}.${u}.svc.cluster.local`);
                }
            }
        };
        t.handleAdd = function(e) {
            const isFederated = t.props.isFederated;
            const t_state = t.state;
            const { ingress, selectRuleIndex } = t_state;
            const u = isFederated ? module26(ingress, "spec.template") : ingress;
            const o = module26(u, "spec.rules", []);
            if (selectRuleIndex >= 0) {
                o[selectRuleIndex] = e;
            } else {
                o.push(e);
            }
            module74(u, "spec.rules", o);
            t.updateTLS(u);
            t.updateAnnotations();
            if (isFederated) {
                t.updateOverrides();
            }
            t.closeModal();
        };
        t.handleDelete = function(e) {
            const isFederated = t.props.isFederated;
            const ingress = t.state.ingress;
            const n = isFederated ? module26(ingress, "spec.template") : ingress;
            const l = module26(n, "spec.rules", []);
            l.splice(e, 1);
            module74(n, "spec.rules", l);
            t.updateTLS(n);
            t.updateAnnotations();
            if (isFederated) {
                t.updateOverrides();
            }
            t.closeModal();
        };
        t.changeIngressClassName = function(e) {
            const ingress = t.state.ingress;
            if (t.props.isFederated) {
                module74(ingress, "spec.template.spec.ingressClassName", e);
            } else {
                module74(ingress, "spec.ingressClassName", e);
            }
        };
        t.mapper = e.isFederated ? module105.federated(module105.services) : module105.services;
        t.secretStore = new module853;
        t.gatewayStore = new module834;
        if (e.isFederated) {
            t.secretStore = new module437({
                module: t.secretStore.module
            });
        }
        const a = module26(t.props.formData, "ingress", {});
        t.state = {
            ingress: a,
            old: module136(a),
            services: Object.values(module189(t.props.formData, [
                "application",
                "ingress"
            ]) || {}).map((e)=>t.mapper(e.service)),
            showAdd: false,
            selectRuleIndex: -1,
            operation: "",
            ingressNameOption: []
        };
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { cluster, namespace } = props;
                this.secretStore.fetchList({
                    namespace,
                    cluster,
                    limit: -1
                });
                this.updateName();
                this.getIngressNameOptions();
            }
        },
        {
            key: "getIngressNameOptions",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let n;
                let ingressNameOption;
                t = this.props;
                cluster = t.cluster;
                namespace = t.namespace;
                n = await this.gatewayStore.getNewGatewayByProject({
                    cluster,
                    namespace
                });
                ingressNameOption = module896(n, function(e) {
                    return {
                        label: `${e.ingressClass}(${e.name})`,
                        value: e.ingressClass
                    };
                });
                this.setState({
                    ingressNameOption
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                const formData = this.props.formData;
                if (!module807(formData, e.formData)) {
                    this.setState({
                        ingress: module26(formData, "ingress", {}),
                        services: Object.values(module189(this.props.formData, [
                            "application",
                            "ingress"
                        ]) || {}).map((e)=>_this.mapper(e.service))
                    });
                    this.updateName();
                }
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
                const props = this.props;
                const { isFederated, projectDetail } = props;
                const ingress = this.state.ingress;
                const l = isFederated ? module26(ingress, "spec.template") : ingress;
                const u = module26(l, "metadata.annotations", []);
                const o = module26(l, "spec.rules", []);
                const i = module26(l, "spec.tls", []);
                module26(projectDetail, "clusters", []).forEach((t)=>{
                    const a = (e)=>e.filter((e)=>e.clusters.includes(t.name)).map((e)=>module189(e, "clusters"));
                    const clusterOverrides = [
                        {
                            path: "/spec/rules",
                            value: a(o)
                        },
                        {
                            path: "/spec/tls",
                            value: a(i)
                        }
                    ];
                    if (!module63(u)) {
                        clusterOverrides.unshift({
                            path: "/metadata/annotations",
                            value: u
                        });
                    }
                    e.push({
                        clusterName: t.name,
                        clusterOverrides
                    });
                });
                module74(ingress, "spec.overrides", e);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, namespace, gateway, isFederated, projectDetail, formData } = props;
                const state = this.state;
                const { showAdd, ingress, services, selectRuleIndex, ingressNameOption } = state;
                const v = isFederated ? module26(ingress, "spec.template") : ingress;
                const data = module26(v, `spec.rules[${selectRuleIndex}]`, {});
                const secrets = module14.toJS(this.secretStore.list.data);
                return <div className={module2624.wrapper}><div className={module2624.step}><div>{t("ROUTE_SETTINGS")}</div><p>{t("ROUTE_SETTINGS_DESC")}</p></div>{!module63(ingressNameOption) && <><div className={module2624.title}>{t("SELECT_INGRESSCLASSNAME")}</div><div className={module2624.ingressClassName}><module186.Select name="spec.ingressClassName" options={ingressNameOption} onChange={this.changeIngressClassName}/></div></>}<div className={module2624.title}>{t("ROUTING_RULES")}</div><div className={module2624.rules}><Module2621 data={v} gateway={gateway} isFederated={isFederated} projectDetail={projectDetail} onEdit={this.showEdit} onAdd={this.showAdd} onDelete={this.handleDelete}/></div><Module2623 visible={showAdd} data={data} cluster={cluster} namespace={namespace} isFederated={isFederated} projectDetail={projectDetail} onOk={this.handleAdd} onCancel={this.closeEditModal} gateway={gateway} services={services} secrets={secrets} validData={module136(formData?.ingress || formData?.Ingress)}/></div>;
            }
        }
    ]);
    return n;
})(Component);
export default I;
