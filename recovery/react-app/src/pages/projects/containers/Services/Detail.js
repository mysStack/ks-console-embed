import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { inject, observer } from "unpacked/module-239.js";
import { getDisplayName, getLocalTime, isEdgeWizePage, joinSelector, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import { SERVICE_TYPES } from "utils/constants";
import module443 from "stores/service";
import module1091 from "unpacked/module-1091.js";
import module1178 from "stores/monitoring/service.monitor";
import module1380 from "unpacked/module-1380.js";
import Module806 from "pages/projects/containers/Base/Detail";
import module3874 from "pages/projects/containers/Services/Detail/routes";
const R = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.isEdgeWize = isEdgeWizePage();
        e.store = e.isEdgeWize ? new module1091 : new module443;
        e.serviceMonitorStore = e.isEdgeWize ? new module1380 : new module1178;
        e.fetchData = function() {
            const params = e.props.match.params;
            e.store.fetchDetail(params);
            e.store.fetchEndpoints(params);
        };
        e.fetchServiceMonitors = function() {
            const detail = e.store.detail;
            const { cluster, namespace, labels } = detail;
            if (!module63(labels) && globals.app.hasClusterModule(cluster, "whizard-monitoring")) {
                e.serviceMonitorStore.fetchListByK8s({
                    cluster,
                    namespace,
                    labelSelector: joinSelector(labels)
                });
            }
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e.name,
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editService",
                    icon: "network-router",
                    text: t("EDIT_SERVICE"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("service.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editGateway",
                    icon: "ip",
                    text: t("EDIT_EXTERNAL_ACCESS"),
                    action: "edit",
                    show: e.store.detail.type === SERVICE_TYPES.VirtualIP,
                    onClick: function() {
                        return e.trigger("service.gateway.edit", {
                            isEdgeWize: e.isEdgeWize,
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "serviceMonitor",
                    icon: "linechart",
                    text: t("EDIT_MONITORING_EXPORTER"),
                    action: "edit",
                    show: globals.app.hasClusterModule(e.props.match.params.cluster, "whizard-monitoring"),
                    onClick: function() {
                        return e.trigger("service.monitor.edit", {
                            isEdgeWize: e.isEdgeWize,
                            ...e.props.match.params,
                            detail: e.store.detail,
                            success: e.fetchServiceMonitors
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        return e.trigger("service.delete", {
                            type: e.name,
                            detail: e.store.detail,
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            if (!module63(a)) {
                let u;
                if (a.type === "ExternalName") {
                    u = a.externalName;
                } else if (a.specType === "LoadBalancer") {
                    u = a.loadBalancerIngress.join("\r\n");
                } else if (a.externalIPs) {
                    u = a.externalIPs.join("\r\n");
                }
                const o = module26(a, 'annotations["kubesphere.io/serviceType"]', "");
                return [
                    {
                        name: t("CLUSTER"),
                        value: showNameAndAlias(cluster, "cluster")
                    },
                    {
                        name: t("PROJECT"),
                        value: showNameAndAlias(namespace, "project")
                    },
                    {
                        name: t("TYPE"),
                        value: <span>{o ? t(`SERVICE_TYPE_${o.toUpperCase()}`) : t("CUSTOM_SERVICE")}<span className="text-desc"> ({t(a.type)})</span></span>
                    },
                    {
                        name: t("APP"),
                        value: a.app
                    },
                    {
                        name: t("VIRTUAL_IP_ADDRESS"),
                        value: a.clusterIP
                    },
                    {
                        name: t("EXTERNAL_IP_ADDRESS"),
                        value: u
                    },
                    {
                        name: t("SESSION_AFFINITY"),
                        value: a.sessionAffinity === "None" ? t("DISABLED") : t("ENABLED")
                    },
                    {
                        name: t("SELECTOR"),
                        value: joinSelector(a.selector)
                    },
                    {
                        name: t("DNS"),
                        value: e.renderDNS()
                    },
                    {
                        name: t("ENDPOINT"),
                        value: e.renderEndpoints()
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.creator
                    }
                ];
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderDNS",
            value: function() {
                const store = this.store;
                const { detail, workloads, pods } = store;
                if (workloads.isLoading || workloads.type !== "statefulsets" || pods.isLoading || pods.data.length === 0) {
                    return `${detail.name}.${detail.namespace}`;
                }
                return pods.data.map((e)=><p key={e.uid}>{e.name}.{detail.name}.{detail.namespace}</p>);
            }
        },
        {
            key: "renderEndpoints",
            value: function() {
                if (this.store.detail.type === "Headless(ExternalName)") {
                    return null;
                }
                const endpoints = this.store.endpoints;
                const { isLoading, data } = endpoints;
                if (isLoading) {
                    return <module186.Loading size={12}/>;
                }
                if (data.length === 0) {
                    return "-";
                }
                const r = [];
                data.forEach((e)=>{
                    e.addresses.forEach((t)=>{
                        e.ports.forEach((e)=>{
                            if (t.ip && e.port) {
                                r.push(`${t.ip}:${e.port}`);
                            }
                        });
                    });
                });
                return r.map((e, key)=><p key={key}>{e}</p>);
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store,
                    serviceMonitorStore: this.serviceMonitorStore
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.isFedManaged ? [] : this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t(`${this.name}_PL`),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module3874(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "services";
            }
        },
        {
            key: "name",
            get: function() {
                return "SERVICE";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
                }
                if (this.isEdgeWize) {
                    return `/v2/edgewize/clusters/${cluster}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.store.detail.isFedManaged;
            }
        }
    ]);
    return r;
})(Component);
const I = inject("rootStore")(observer(trigger(R)));
export default I;
const w = R;
export { w as Component };
