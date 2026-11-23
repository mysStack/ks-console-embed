"use strict";
((module)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("unpacked/module-12.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    require("unpacked/module-12.js");
    require("unpacked/module-11.js");
    require("unpacked/module-6.js");
    require("unpacked/module-28.js");
    require("unpacked/module-34.js");
    require("unpacked/module-15.js");
    require("unpacked/module-9.js");
    require("unpacked/module-13.js");
    require("unpacked/module-10.js");
    require("unpacked/module-4.js");
    require("unpacked/module-7.js");
    const l = module20(require("unpacked/module-31.js").default);
    const o = module20(require("unpacked/module-58.js").default);
    const u = module20(require("unpacked/module-26.js").default);
    const c = module20(require("unpacked/module-240.js"));
    const s = module20(require("components/Base/Modal"));
    const i = module20(require("components/Modals/Create"));
    const f = module20(require("components/Modals/EditServiceAccount"));
    const d = module20(require("components/Modals/ModifyServiceAccountRole"));
    const module72 = require("utils/constants");
    const m = module20(require("utils/form.templates"));
    const v = module20(require("configs/steps/serviceaccounts"));
    function h(e, t) {
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
    function E(e) {
        for(let t = 1; t < arguments.length; t++){
            var a = arguments[t] ?? {};
            if (t % 2) {
                h(Object(a), true).forEach((t)=>{
                    l.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                h(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    const y = {
        "serviceaccount.create": {
            on: function(e) {
                const { store, cluster, namespace, workspace, module, success } = e;
                const y = o.default(e, [
                    "store",
                    "cluster",
                    "namespace",
                    "workspace",
                    "module",
                    "success"
                ]);
                const g = module72.MODULE_KIND_MAP[module];
                const formTemplate = l.default({}, g, m.default[module]({
                    namespace
                }));
                var S = s.default.open(E({
                    onOk: function(e) {
                        const l = u.default(e, g);
                        if (l) {
                            store.create(l, {
                                cluster,
                                namespace: namespace || u.default(l, "metadata.namespace")
                            }).then(()=>{
                                s.default.close(S);
                                c.default.success({
                                    content: t("CREATE_SUCCESSFUL")
                                });
                                if (success) {
                                    success();
                                }
                            });
                        } else {
                            c.default.error({
                                content: t("INVALID_YAML_FILE_FORMAT")
                            });
                        }
                    },
                    modal: i.default,
                    steps: v.default,
                    formTemplate,
                    name: "SERVICE_ACCOUNT",
                    store,
                    module,
                    cluster,
                    namespace,
                    workspace
                }, y));
            }
        },
        "serviceaccount.edit": {
            on: function(e) {
                const { store, detail, success } = e;
                const l = o.default(e, [
                    "store",
                    "detail",
                    "success"
                ]);
                var u = s.default.open(E({
                    onOk: function(e) {
                        store.patch(detail, e).then(()=>{
                            s.default.close(u);
                            c.default.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    detail,
                    modal: f.default,
                    namespace: detail.namespace,
                    store
                }, l));
            }
        },
        "serviceaccount.role.edit": {
            on: function(a) {
                const { store, detail, success } = a;
                const u = o.default(a, [
                    "store",
                    "detail",
                    "success"
                ]);
                var i = s.default.open(E({
                    onOk: function(e) {
                        store.patch(detail, e).then(()=>{
                            s.default.close(i);
                            c.default.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    },
                    detail,
                    modal: d.default,
                    store,
                    module,
                    namespace: detail.namespace
                }, u));
            }
        }
    };
    exports.default = y;
})(require("unpacked/module-139.js").default(module));
