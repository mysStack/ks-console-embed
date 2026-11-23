import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module31 from "unpacked/module-31.js";
import "unpacked/module-58.js";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module826 from "components/Modals/Create";
import module3347 from "pages/projects/components/Modals/ServiceCreate";
import module3349 from "pages/projects/components/Modals/ServiceSetting";
import module3352 from "pages/projects/components/Modals/ServiceGatewaySetting";
import module1613 from "pages/projects/components/Modals/ServiceMonitor";
import module3356 from "pages/projects/components/Modals/ServiceDelete";
import { MODULE_KIND_MAP } from "utils/constants";
import { getOverrides } from "utils/cluster";
import module902 from "utils/form.persist";
import module435 from "utils/form.templates";
import module1325 from "configs/steps/services";
import module1178 from "stores/monitoring/service.monitor";
import module1380 from "unpacked/module-1380.js";
const P = {
    "service.create": {
        on: function({ store, cluster, namespace, module, success, ...rest }) {
            const s = MODULE_KIND_MAP[module];
            var i = module788.open({
                onOk: function(e) {
                    let u = e;
                    if (u) {
                        if (s && Object.keys(e).length === 1 && e[s]) {
                            u = e[s];
                        }
                        store.create(u, {
                            cluster,
                            namespace
                        }).then(()=>{
                            module788.close(i);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                            module902.delete(`${module}_create_form`);
                        });
                    }
                },
                cluster,
                namespace,
                modal: module3347,
                store,
                ...rest
            });
        }
    },
    "service.simple.create": {
        on: function({ store, cluster, namespace, module, success, ...rest }) {
            const f = MODULE_KIND_MAP[module];
            const d = module31({}, f, module435[module]({
                namespace
            }));
            var p = module788.open({
                onOk: function(e) {
                    const u = module26(e, f);
                    if (u) {
                        store.create(u, {
                            cluster,
                            namespace: namespace || module26(u, "metadata.namespace")
                        }).then(()=>{
                            module788.close(p);
                            module240.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                            module902.delete(`${module}_create_form`);
                        });
                    }
                },
                module,
                cluster,
                namespace,
                name: f,
                formTemplate: d,
                steps: module1325.simpleservice,
                modal: module826,
                store,
                ...rest
            });
        }
    },
    "service.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module3349,
                detail: module136(module14.toJS(detail)),
                type: detail.type,
                cluster: detail.cluster,
                store,
                ...rest
            });
        }
    },
    "service.gateway.edit": {
        on: function({ store, detail, isEdgeWize, success, ...rest }) {
            var u = module788.open({
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                isEdgeWize,
                modal: module3352,
                detail,
                store,
                ...rest
            });
        }
    },
    "fedservice.gateway.edit": {
        on: function({ store, cluster, detail, resources, success, ...rest }) {
            var s = module788.open({
                onOk: function(e) {
                    const { name, namespace, template, overrides } = detail;
                    const f = {};
                    let p = overrides.find((e)=>e.clusterName === cluster);
                    if (!p) {
                        p = {
                            clusterName: cluster,
                            clusterOverrides: []
                        };
                        overrides.push(p);
                    }
                    p.clusterOverrides = getOverrides(template, e, [
                        "metadata.annotations",
                        "spec.type",
                        "spec.ports"
                    ]);
                    module74(f, "spec.overrides", overrides);
                    store.patch({
                        name,
                        namespace
                    }, f).then(()=>{
                        module788.close(s);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal: module3352,
                detail: module26(resources, `${cluster}`),
                store,
                ...rest
            });
        }
    },
    "service.delete": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function() {
                    module788.close(o);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module3356,
                resource: detail,
                ...rest
            });
        }
    },
    "service.batch.delete": {
        on: function({ store, success, rowKey = "name", ...rest }) {
            const u = module14.toJS(store.list);
            const { data, selectedRowKeys } = u;
            const resource = data.filter((e)=>selectedRowKeys.includes(e[rowKey]));
            var d = module788.open({
                onOk: function() {
                    module788.close(d);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module3356,
                resource,
                store,
                ...rest
            });
        }
    },
    "service.monitor.edit": {
        on: function(e) {
            e.store;
            let t;
            const { store: _store, cluster, namespace, success, isEdgeWize, detail, ...rest } = e;
            const store = isEdgeWize ? new module1380 : new module1178;
            const h = module435.servicemonitors({
                name: detail.name,
                namespace
            });
            var E = module788.open({
                onOk: (t = module44(module41.mark(function e(t) {
                    let o;
                    let u;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    o = module26(t, "metadata.name");
                                    e.next = 3;
                                    return store.checkName({
                                        name: o,
                                        cluster,
                                        namespace
                                    });
                                case 3:
                                    u = e.sent;
                                    module74(t, "metadata.ownerReferences", [
                                        {
                                            apiVersion: "v1",
                                            kind: "Service",
                                            name: detail.name,
                                            uid: detail.uid
                                        }
                                    ]);
                                    if (u.exist) {
                                        e.next = 10;
                                        break;
                                    }
                                    e.next = 8;
                                    return store.create(t, {
                                        cluster,
                                        namespace
                                    });
                                case 8:
                                    e.next = 17;
                                    break;
                                case 10:
                                    if (!module63(module26(t, "spec.endpoints"))) {
                                        e.next = 15;
                                        break;
                                    }
                                    e.next = 13;
                                    return store.delete({
                                        name: o,
                                        cluster,
                                        namespace
                                    });
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    e.next = 17;
                                    return store.update({
                                        name: o,
                                        cluster,
                                        namespace
                                    }, t);
                                case 17:
                                    module788.close(E);
                                    if (success) {
                                        success();
                                    }
                                case 19:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return t.apply(this, arguments);
                }),
                isEdgeWize,
                cluster,
                namespace,
                formTemplate: h,
                detail,
                store,
                modal: module1613,
                ...rest
            });
        }
    }
};
export default P;
