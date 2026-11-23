import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-24.js";
import "unpacked/module-38.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import module240 from "unpacked/module-240.js";
import module1081 from "components/Modals/EditYaml";
import module788 from "components/Base/Modal";
import module823 from "components/Modals/Delete";
import module826 from "components/Modals/Create";
import component from "components/Forms/AlertingPolicy/AlertingRules";
import module1497 from "components/Forms/AlertingPolicy/EditBasicInfo";
import module1498 from "components/Modals/Monitoring/AlertMonitoring";
import module1284 from "pages/projects/components/Modals/AlertingConfirm";
import { MODULE_KIND_MAP } from "utils/constants";
import module435 from "utils/form.templates";
import module902 from "utils/form.persist";
import module2214 from "configs/steps/alerting.policy";
import module2215 from "unpacked/module-2215.js";
const k = ({ namespace, type })=>{
    if (namespace) {
        return "RuleGroup";
    }
    if (type === "builtin") {
        return "GlobalRuleGroup";
    }
    return "ClusterRuleGroup";
};
const I = {
    "alerting.policy.create": {
        on: function({ store, cluster, namespace, module, success, detail, ...rest }) {
            let a;
            const name = MODULE_KIND_MAP[module];
            const formTemplate = detail ? module136(detail) : module435[module]({
                namespace
            });
            var b = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (!(module26(a, "spec.rules", []).length < 1)) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return", module240.warning({
                                        content: t("RULES_LIST_EMPTY")
                                    }));
                                case 3:
                                    if (!detail) {
                                        e.next = 9;
                                        break;
                                    }
                                    e.next = 6;
                                    return store.update(detail, a);
                                case 6:
                                    module240.success({
                                        content: t("UPDATE_SUCCESSFUL")
                                    });
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.next = 11;
                                    return store.create(a, {
                                        name: a.metadata.name,
                                        cluster,
                                        namespace,
                                        ...rest
                                    });
                                case 11:
                                    module240.success({
                                        content: t("CREATE_SUCCESSFUL")
                                    });
                                case 12:
                                    module788.close(b);
                                    if (success) {
                                        success();
                                    }
                                    module902.delete(`${module}_create_form`);
                                case 15:
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
                steps: rest.app_id ? module2215 : module2214,
                noCodeEdit: true,
                isEdit: !!detail,
                okBtnText: detail ? t("OK") : t("CREATE"),
                store,
                ...rest
            });
        }
    },
    "alerting.baseinfo.edit": {
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
    "alerting.yaml.edit": {
        on: function({ type, store, detail, success, cluster: _cluster, namespace, ...rest }) {
            let h = "";
            const E = k({
                namespace,
                type
            });
            if (type === "builtin") {
                h = module26(detail._originData, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', "");
            }
            var g = module788.open({
                onOk: async (o)=>{
                    if (type === "builtin") {
                        module74(o, "apiVersion", store.yamlApiVersion);
                        module74(o, "kind", E);
                        module74(o, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', h);
                    }
                    await store.update({
                        ...detail,
                        type
                    }, o);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(g);
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
    "alerting.rule.edit": {
        on: function({ type, store, detail, success, isEdgeWize, cluster, namespace, title: _title, ...rest }) {
            const b = k({
                namespace,
                type
            });
            var S = module788.open({
                onOk: async (a)=>{
                    if (!(type !== "builtin" && a.Kind)) {
                        module74(a, "apiVersion", store.yamlApiVersion);
                        module74(a, "kind", b);
                    }
                    await store.update({
                        ...detail,
                        type
                    }, a);
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
                steps: module26(detail, "_originData.metadata.labels.openpitrix_app_id") ? [
                    module2215[1]
                ] : [
                    {
                        title: "ALERTING_RULE",
                        component,
                        required: true
                    }
                ],
                isEdgeWize,
                noCodeEdit: true,
                okBtnText: t("OK"),
                formTemplate: detail._originData,
                namespace,
                cluster,
                type,
                ...rest
            });
        }
    },
    "enable.alerting.rule": {
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
    "alerting.rule.update": {
        on: function({ type, store, detail, success, cluster = "", namespace = "", title: _title, batchMode, resourceName, enabled = false, ...rest }) {
            const S = module26(module14.toJS(store.list), "selectedRowKeys", []);
            const resource = batchMode ? S.join(", ") : detail.name;
            var O = module788.open({
                onOk: function() {
                    if (batchMode) {
                        store.batchPatch(S, {
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
                            module788.close(O);
                            module240.success({
                                content: t("DISABLE_SUCCESSFUL")
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
                            module788.close(O);
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
                tip: enabled ? t("DISABLE_ALARM_TIP") : "",
                type: resourceName,
                title: resource.split(", ").length === 1 ? t("DISABLE_ALERTING_POLICY") : t("DISABLE_MULTIPLE_ALERTING_POLICIES"),
                resource,
                ...rest
            });
        }
    },
    "alerting.rule.delete": {
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
    "alerting.rule.monitor": {
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
    "alerting.rule.reset": {
        on: function({ store, detail, success, type }) {
            let a;
            const s = module26(module14.toJS(store.list), "data", []);
            const m = module26(module14.toJS(store.list), "selectedRowKeys", []);
            const h = s.filter((e)=>m.indexOf(e.name) !== -1);
            var E = module788.open({
                onOk: (a = module44(module41.mark(function e() {
                    let a;
                    let o;
                    let s;
                    let d;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (!(m.length > 0)) {
                                        e.next = 7;
                                        break;
                                    }
                                    a = [];
                                    h.forEach((e)=>{
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
                                    d = module74(s, 'metadata.annotations["alerting.kubesphere.io/initial-configuration"]', o);
                                    e.next = 14;
                                    return store.update({
                                        ...detail,
                                        type
                                    }, d);
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
                title: m.length > 0 ? t("RESET_MULTIPLE_ALERTING_POLICIES") : t("RESET_ALERTING_POLICY"),
                desc: m.length > 0 ? t.html("RESET_MULTIPLE_ALERTING_POLICIES_DESC", {
                    name: m.join(",")
                }) : t("RESET_ALERTING_POLICY_DESC"),
                modal: module1284
            });
        }
    }
};
export default I;
