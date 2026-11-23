import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import module240 from "./module-240.js";
import module1081 from "./module-1081.js";
import module788 from "./module-788.js";
import module823 from "./module-823.js";
import module826 from "./module-826.js";
import component from "./module-1152.js";
import module1497 from "./module-1497.js";
import module1498 from "./module-1498.js";
import module1284 from "./module-1284.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module435 from "./module-435.js";
import module902 from "./module-902.js";
import steps from "./module-2194.js";
import { capitalize } from "./module-52.js";
const I = {
    "alerting.multi.policy.create": {
        on: function({ store, cluster, namespace, module, success, detail, ...rest }) {
            let a;
            const name = MODULE_KIND_MAP[module];
            const formTemplate = detail ? module136(detail) : module435[module]({
                multi: true
            });
            var _ = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    let o;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (!((o = module26(a, "spec.rules", [])).length < 1)) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return", module240.warning({
                                        content: t("RULES_LIST_EMPTY")
                                    }));
                                case 3:
                                    o.forEach((e)=>{
                                        const t = module26(e, "exprBuilder", {});
                                        const a = module26(e, "namespaceSelector.inValues", []);
                                        if (module63(t) && !module63(a)) {
                                            const r = a.map((e)=>e.namespace);
                                            e.namespaceSelector.inValues = r;
                                        }
                                        if (!module63(t)) {
                                            if (t.workload) {
                                                const n = e.exprBuilder.workload.kind;
                                                module74(e, "exprBuilder.workload.kind", capitalize(n));
                                            }
                                            delete e.clusterSelector;
                                        }
                                    });
                                    if (!detail) {
                                        e.next = 10;
                                        break;
                                    }
                                    e.next = 7;
                                    return store.update(detail, a);
                                case 7:
                                    module240.success({
                                        content: t("UPDATE_SUCCESSFUL")
                                    });
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.next = 12;
                                    return store.create(a, {
                                        name: a.metadata.name,
                                        cluster,
                                        namespace
                                    });
                                case 12:
                                    module240.success({
                                        content: t("CREATE_SUCCESSFUL")
                                    });
                                case 13:
                                    module788.close(_);
                                    if (success) {
                                        success();
                                    }
                                    module902.delete(`${module}_create_form`);
                                case 16:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                module,
                cluster,
                namespace,
                name,
                formTemplate,
                modal: module826,
                steps,
                noCodeEdit: true,
                isEdit: !!detail,
                okBtnText: detail ? t("OK") : t("CREATE"),
                store,
                ...rest
            });
        }
    },
    "multi.alerting.baseInfo.edit": {
        on: function({ type, store, detail, success, ...rest }) {
            var u = module788.open({
                onOk: function(e) {
                    const o = module136(e);
                    if (module26(o, "spec.interval").length < 2) {
                        module74(o, "spec.interval", "");
                    }
                    store.patch({
                        ...detail,
                        type
                    }, o).then(()=>{
                        module788.close(u);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                detail,
                modal: module1497,
                store,
                ...rest
            });
        }
    },
    "multi.alerting.yaml.edit": {
        on: function({ type, store, detail, success, cluster: _cluster, namespace: _namespace, ...rest }) {
            let f = "";
            if (type === "builtin") {
                f = module26(detail._originData, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', "");
            }
            var E = module788.open({
                onOk: async (o)=>{
                    if (type === "builtin") {
                        module74(o, "apiVersion", store.yamlApiVersion);
                        module74(o, "kind", "GlobalRuleGroup");
                        module74(o, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', f);
                    }
                    await store.update({
                        ...detail,
                        type
                    }, o);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(E);
                    if (success) {
                        success();
                    }
                },
                detail: {
                    ...detail,
                    type
                },
                store,
                type,
                modal: module1081,
                ...rest
            });
        }
    },
    "multi.alerting.rule.edit": {
        on: function({ type, store, detail, success, cluster, namespace, title: _title, ...rest }) {
            let E = "";
            if (type === "builtin") {
                E = module26(detail._originData, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', "");
            }
            var S = module788.open({
                onOk: async (o)=>{
                    if (module26(detail, "_originData.apiVersion", "") === "") {
                        module74(o, "apiVersion", store.yamlApiVersion);
                        module74(o, "kind", "GlobalRuleGroup");
                    }
                    module26(o, "spec.rules", []).forEach((e)=>{
                        const t = module26(e, "exprBuilder", {});
                        const a = module26(e, "namespaceSelector.inValues", []);
                        if (module63(t) && !module63(a)) {
                            const r = a.map((e)=>e.namespace);
                            e.namespaceSelector.inValues = r;
                        }
                        if (!module63(t)) {
                            if (t.workload) {
                                const n = e.exprBuilder.workload.kind;
                                module74(e, "exprBuilder.workload.kind", capitalize(n));
                            }
                            delete e.clusterSelector;
                        }
                    });
                    if (type === "builtin") {
                        module74(o, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', E);
                    }
                    await store.update({
                        ...detail,
                        type
                    }, o);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(S);
                    if (success) {
                        success();
                    }
                },
                store,
                resource: detail.name,
                detail,
                title: t("EDIT_ALERT_RULES"),
                icon: "pen",
                modal: module826,
                steps: [
                    {
                        title: "ALERTING_RULE",
                        component,
                        required: true
                    }
                ],
                noCodeEdit: true,
                okBtnText: t("OK"),
                formTemplate: detail._originData,
                namespace,
                cluster,
                editMode: true,
                type,
                ...rest
            });
        }
    },
    "multi.enable.alarm.rule": {
        on: function({ type, store, detail, success, cluster = "", namespace = "", batchMode, enabled }) {
            const v = enabled !== undefined && enabled;
            const h = module26(module14.toJS(store.list), "selectedRowKeys", []);
            if (batchMode) {
                store.batchPatch(h, {
                    cluster,
                    namespace,
                    type
                }, {
                    metadata: {
                        labels: {
                            "alerting.kubesphere.io/enable": JSON.stringify(!v)
                        }
                    }
                }).then(()=>{
                    module240.success({
                        content: t("ENABLE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                });
            } else {
                store.patch({
                    cluster,
                    namespace,
                    name: detail.name,
                    type
                }, {
                    metadata: {
                        labels: {
                            "alerting.kubesphere.io/enable": JSON.stringify(!v)
                        }
                    }
                }).then(()=>{
                    module240.success({
                        content: t("ENABLE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                });
            }
        }
    },
    "multi.alarm.rule.update": {
        on: function({ type, store, detail, success, cluster = "", namespace = "", title, batchMode, resourceName, enabled = false, ...rest }) {
            const _ = module26(module14.toJS(store.list), "selectedRowKeys", []);
            const resource = batchMode ? _.join(",") : detail.name;
            var C = module788.open({
                onOk: function() {
                    if (batchMode) {
                        store.batchPatch(_, {
                            cluster,
                            namespace,
                            type
                        }, {
                            metadata: {
                                labels: {
                                    "alerting.kubesphere.io/enable": JSON.stringify(!enabled)
                                }
                            }
                        }).then(()=>{
                            module788.close(C);
                            module240.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    } else {
                        store.patch({
                            cluster,
                            namespace,
                            name: detail.name,
                            type
                        }, {
                            metadata: {
                                labels: {
                                    "alerting.kubesphere.io/enable": JSON.stringify(!enabled)
                                }
                            }
                        }).then(()=>{
                            module788.close(C);
                            module240.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    }
                },
                store,
                icon: "information",
                modal: module823,
                type: resourceName,
                resource,
                title,
                ...rest
            });
        }
    },
    "multi.alerting.rule.delete": {
        on: function({ type, store, detail, success, name, ...rest }) {
            var s = module788.open({
                onOk: function() {
                    store.delete({
                        ...detail,
                        type
                    }).then(()=>{
                        module788.close(s);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                type: name,
                modal: module823,
                resource: detail.name,
                ...rest
            });
        }
    },
    "multi.alerting.rule.monitor": {
        on: function({ store, expr, rule, ...rest }) {
            var l = module788.open({
                onOk: function() {
                    module788.close(l);
                },
                rule,
                expr,
                store,
                modal: module1498,
                ...rest
            });
        }
    },
    "multi.alarm.rule.reset": {
        on: function({ store, detail, success, type }) {
            let a;
            const s = module26(module14.toJS(store.list), "data", []);
            const f = module26(module14.toJS(store.list), "selectedRowKeys", []);
            const v = s.filter((e)=>f.indexOf(e.name) !== -1);
            var E = module788.open({
                onOk: (a = module44(module41.mark(function e() {
                    let a;
                    let o;
                    let s;
                    let p;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (!(f.length > 0)) {
                                        e.next = 7;
                                        break;
                                    }
                                    a = [];
                                    v.forEach((e)=>{
                                        const t = module26(e._originData, "metadata.annotations", "");
                                        const n = module26(e._originData, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', "");
                                        if (n !== "") {
                                            const l = JSON.parse(n);
                                            const o = module74(l, "metadata.annotations", t);
                                            a.push(store.update({
                                                ...e,
                                                type
                                            }, o));
                                        }
                                    });
                                    e.next = 5;
                                    return Promise.all(a);
                                case 5:
                                    e.next = 14;
                                    break;
                                case 7:
                                    if ((o = module26(detail._originData, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', "")) !== "") {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 10:
                                    s = JSON.parse(o);
                                    p = module74(s, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', o);
                                    e.next = 14;
                                    return store.update({
                                        ...detail,
                                        type
                                    }, p);
                                case 14:
                                    module240.success({
                                        content: t("RESET_SUCCESSFUL")
                                    });
                                    module788.close(E);
                                    if (success) {
                                        success();
                                    }
                                case 17:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function() {
                    return a.apply(this, arguments);
                }),
                title: t("RESET_ALERTING_POLICY"),
                desc: f.length > 0 ? t.html("RESET_MULTIPLE_ALERTING_POLICIES_DESC", {
                    name: f.join(",")
                }) : t("RESET_ALERTING_POLICY_DESC"),
                modal: module1284
            });
        }
    }
};
export default I;
