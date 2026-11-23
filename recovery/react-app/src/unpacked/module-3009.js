"use strict";
((module)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-30.js").default;
    require("./module-73.js");
    require("./module-18.js");
    require("./module-16.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-1692.js");
    require("./module-24.js");
    require("./module-38.js");
    require("./module-137.js");
    require("./module-7.js");
    require("./module-32.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("./module-12.js");
    require("./module-135.js");
    require("./module-11.js");
    require("./module-6.js");
    require("./module-30.js").default;
    require("./module-73.js");
    require("./module-18.js");
    require("./module-28.js");
    require("./module-16.js");
    require("./module-34.js");
    require("./module-15.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-4.js");
    require("./module-22.js");
    require("./module-1692.js");
    require("./module-38.js");
    require("./module-7.js");
    require("./module-32.js");
    const l = module20(require("./module-41.js"));
    require("./module-41.js");
    const o = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const u = module20(require("./module-31.js").default);
    const c = module20(require("./module-58.js").default);
    const s = module20(require("components/Base/Modal"));
    const i = module20(require("./module-74.js").default);
    const f = module20(require("./module-26.js").default);
    const module14 = require("./module-14.js");
    const p = module20(require("./module-240.js"));
    const m = module20(require("utils/form.templates"));
    const v = module20(require("./module-3010.js"));
    const h = module20(require("./module-3012.js"));
    const module3013 = require("./module-3013.js");
    const y = module20(require("./module-3015.js"));
    const g = module20(require("./module-3017.js"));
    const b = module20(require("components/Modals/Delete"));
    const S = module20(require("./module-3024.js"));
    const _ = module20(require("components/Modals/ModifyMember"));
    const O = module20(require("./module-3026.js"));
    const C = module20(require("./module-854.js"));
    const T = module20(require("./module-953.js"));
    function R(e, t) {
        const a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            let r = Object.getOwnPropertySymbols(e);
            if (t) {
                r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
            }
            a.push.apply(a, r);
        }
        return a;
    }
    function D(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                R(Object(a), true).forEach((t)=>{
                    u.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                R(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    const N = {
        "node.group.create": {
            on: function(e) {
                const { store, success } = e;
                const n = c.default(e, [
                    "store",
                    "success"
                ]);
                const { module, cluster } = n;
                var u = s.default.open(D({
                    modal: v.default,
                    onOk: function(e) {
                        store.create(D({
                            cluster,
                            nodetree: e.metadata.name
                        }, e)).then(()=>{
                            s.default.close(u);
                            p.default.success({
                                content: t("CREATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    formTemplate: m.default[module](),
                    store
                }, n));
            }
        },
        "node.group.tree.baseinfo.edit": {
            on: function(e) {
                const { store, detail, success, onOk } = e;
                const o = c.default(e, [
                    "store",
                    "detail",
                    "success",
                    "onOk"
                ]);
                var u = s.default.open(D({
                    onOk: function(e) {
                        const a = {
                            alias: e.spec.alias,
                            description: e.spec.description
                        };
                        return onOk(a).then(()=>{
                            s.default.close(u);
                            p.default.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    detail,
                    modal: h.default,
                    store
                }, o));
            }
        },
        "node.group.tree.move": {
            on: function(e) {
                const { store, detail, success, onOk } = e;
                const o = c.default(e, [
                    "store",
                    "detail",
                    "success",
                    "onOk"
                ]);
                var u = s.default.open(D({
                    onOk: function(e) {
                        return onOk(e?.key || "").then(()=>{
                            s.default.close(u);
                            p.default.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    detail,
                    modal: module3013.BoundNodeGroupModal,
                    visible: true,
                    onCancel: function() {
                        s.default.close(u);
                    },
                    store
                }, o));
            }
        },
        "node.group.baseinfo.edit": {
            on: function(e) {
                const { store, detail, success } = e;
                const l = c.default(e, [
                    "store",
                    "detail",
                    "success"
                ]);
                var o = s.default.open(D({
                    onOk: function(e) {
                        i.default(e, "apiVersion", "infra.kubesphere.io/v1alpha1");
                        i.default(e, "kind", "NodeGroup");
                        store.update(detail, e).then(()=>{
                            s.default.close(o);
                            p.default.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    detail,
                    modal: h.default,
                    store
                }, l));
            }
        },
        "bound.node.group": {
            on: function(e) {
                let a;
                const { store, cluster } = e;
                e.detail;
                const e_success = e.success;
                const i = c.default(e, [
                    "store",
                    "cluster",
                    "detail",
                    "success"
                ]);
                const selectedRowKeys = module14.toJS(store.list).selectedRowKeys;
                var m = s.default.open(D({
                    onOk: (a = o.default(l.default.mark(function* e(a) {
                        let r;
                        let o;
                        r = new T.default;
                        o = selectedRowKeys.map((e)=>r.bindNodeGroup({
                                cluster,
                                node: e,
                                parentNode: a.key
                            }));
                        yield Promise.all(o);
                        p.default.success({
                            content: t("BOUND_SUCCESSFULLY")
                        });
                        s.default.close(m);
                        if (e_success) {
                            e_success();
                        }
                    })), function(e) {
                        return a.apply(this, arguments);
                    }),
                    onCancel: function() {
                        s.default.close(m);
                    },
                    modal: module3013.BoundNodeGroupModal,
                    visible: true,
                    cluster,
                    store
                }, i));
            }
        },
        "node.bound.node.group": {
            on: function(e) {
                let a;
                const { store, cluster } = e;
                e.detail;
                const { success, parentKey } = e;
                const f = c.default(e, [
                    "store",
                    "cluster",
                    "detail",
                    "success",
                    "parentKey"
                ]);
                var d = s.default.open(D({
                    onOk: (a = o.default(l.default.mark(function* e(a) {
                        let r;
                        let o;
                        r = new T.default;
                        o = a.map((e)=>r.bindNodeGroup({
                                cluster,
                                node: e,
                                parentNode: parentKey
                            }));
                        yield Promise.all(o);
                        p.default.success({
                            content: t("BOUND_SUCCESSFULLY")
                        });
                        s.default.close(d);
                        if (success) {
                            success();
                        }
                    })), function(e) {
                        return a.apply(this, arguments);
                    }),
                    onCancel: function() {
                        s.default.close(d);
                    },
                    modal: y.default,
                    visible: true,
                    cluster,
                    store
                }, f));
            }
        },
        "node.group.bound.project": {
            on: function(e) {
                const { store, cluster, group, success } = e;
                const o = c.default(e, [
                    "store",
                    "cluster",
                    "group",
                    "success"
                ]);
                var u = s.default.open(D({
                    onOk: function(e) {
                        const namespaces = e.map((e)=>e.name);
                        store.batchBoundNamespaces({
                            cluster,
                            group,
                            namespaces
                        }).then(()=>{
                            p.default.success({
                                content: t("BOUND_SUCCESSFULLY")
                            });
                            s.default.close(u);
                            if (success) {
                                success();
                            }
                        });
                    },
                    modal: g.default,
                    store,
                    cluster,
                    group
                }, o));
            }
        },
        "node.group.unbound.namespace": {
            on: function({ store, cluster, group, resource, success }) {
                const namespaces = resource || f.default(module14.toJS(store.list), "selectedRowKeys", []);
                var c = s.default.open({
                    onOk: function() {
                        store.batchUnboundNamespaces({
                            cluster,
                            group,
                            namespaces
                        }).then(()=>{
                            p.default.success({
                                content: t("UNBOUND_SUCCESSFULLY")
                            });
                            s.default.close(c);
                            if (success) {
                                success();
                            }
                        });
                    },
                    store,
                    type: "PROJECT",
                    modal: b.default,
                    resource: namespaces.join(",")
                });
            }
        },
        "node.group.member.invite": {
            on: function(e) {
                const { store, cluster, group, roles, success } = e;
                const u = c.default(e, [
                    "store",
                    "cluster",
                    "group",
                    "roles",
                    "success"
                ]);
                var i = s.default.open(D({
                    onOk: function(data) {
                        store.addMember({
                            cluster,
                            group,
                            data
                        }).then(()=>{
                            s.default.close(i);
                            p.default.success({
                                content: t("INVITED_SUCCESSFULLY")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    modal: S.default,
                    store,
                    cluster,
                    group,
                    roles
                }, u));
            }
        },
        "node.group.member.edit": {
            on: function(a) {
                const { store, detail, cluster, group, success } = a;
                const i = c.default(a, [
                    "store",
                    "detail",
                    "cluster",
                    "group",
                    "success"
                ]);
                var f = s.default.open(D({
                    onOk: function(roleRef) {
                        const a = {
                            cluster,
                            group,
                            name: detail.name,
                            data: {
                                username: detail.name,
                                roleRef
                            }
                        };
                        store.updateMember(a).then(()=>{
                            s.default.close(f);
                            p.default.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    modal: _.default,
                    store,
                    module
                }, i));
            }
        },
        "node.group.member.remove": {
            on: function({ store, cluster, group, resources, success }) {
                let a;
                let resource;
                resource = resources ? resources.join(",") : (a = module14.toJS(store.list.selectedRowKeys)).join(", ");
                var i = s.default.open({
                    onOk: function() {
                        const e = [];
                        if (resources) {
                            resources.forEach((t)=>e.push(store.removeMember({
                                    cluster,
                                    group,
                                    name: t
                                })));
                        } else {
                            a.forEach((t)=>e.push(store.removeMember({
                                    cluster,
                                    group,
                                    name: t
                                })));
                        }
                        Promise.allSettled(e).then(()=>{
                            s.default.close(i);
                            p.default.success({
                                content: t("DELETED_SUCCESSFULLY")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    modal: b.default,
                    title: resource.split(", ").length === 1 ? t("REMOVE_MEMBER") : t("REMOVE_MULTIPLE_MEMBERS"),
                    desc: resource.split(", ").length === 1 ? t.html("REMOVE_MEMBER_TIP", {
                        resource
                    }) : t.html("REMOVE_MULTIPLE_MEMBERS_TIP", {
                        resource
                    }),
                    resource,
                    store
                });
            }
        },
        "node.group.add.cluster": {
            on: function(e) {
                const { store, cluster, group } = e;
                e.success;
                var l = s.default.open({
                    onOk: function(e) {
                        (new C.default).addGroupNode({
                            cluster,
                            group,
                            node: e
                        }).then(()=>{
                            p.default.success({
                                content: t("BOUND_SUCCESSFULLY")
                            });
                            s.default.close(l);
                        });
                    },
                    modal: O.default,
                    cluster,
                    store
                });
            }
        },
        "node.group.unbound.node": {
            on: function({ resource, params, store, success }) {
                var o = s.default.open({
                    onOk: function() {
                        store.removeNodeGroupEdgeNode(params).then(()=>{
                            p.default.success({
                                content: t("UNBOUND_NODE_GROUP_SUCCESSFULLY")
                            });
                            s.default.close(o);
                            if (success) {
                                success();
                            }
                        });
                    },
                    store,
                    modal: b.default,
                    resource,
                    title: t("UNBOUND_NODE_GROUP"),
                    desc: t.html("UNBOUND_NODE_GROUP_TIP", {
                        resource
                    })
                });
            }
        }
    };
    exports.default = N;
})(require("./module-139.js").default(module));
