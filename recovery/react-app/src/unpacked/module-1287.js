"use strict";
((module)=>{
    const module20 = require("utils/babel-helpers/interopRequireDefault").default;
    require("./module-12.js");
    require("./module-11.js");
    require("./module-29.js");
    require("./module-6.js");
    require("./module-84.js");
    require("./module-73.js");
    require("./module-18.js");
    require("./module-16.js");
    require("./module-9.js");
    require("./module-13.js");
    require("./module-10.js");
    require("./module-316.js");
    require("./module-7.js");
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;
    const l = module20(require("utils/babel-helpers/slicedToArray").default);
    const u = module20(require("./module-41.js"));
    require("./module-41.js");
    const o = module20(require("utils/babel-helpers/asyncToGenerator").default);
    const i = module20(require("./module-31.js").default);
    const c = module20(require("./module-58.js").default);
    require("./module-12.js");
    require("./module-11.js");
    require("./module-29.js");
    require("./module-6.js");
    require("./module-84.js");
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
    require("./module-316.js");
    require("./module-22.js");
    require("./module-85.js");
    require("./module-7.js");
    const s = module20(require("./module-26.js").default);
    const f = module20(require("./module-195.js").default);
    const d = module20(require("./module-240.js"));
    const module440 = require("utils/base64");
    const m = module20(require("utils/form.templates"));
    const h = module20(require("components/Base/Modal"));
    const v = module20(require("components/Modals/Create"));
    const g = module20(require("./module-2241.js"));
    const y = module20(require("./module-1545.js"));
    const E = module20(require("pages/projects/components/Modals/WorkloadDelete"));
    const b = module20(require("pages/apps/components/Modals/AppEdit"));
    const _ = module20(require("utils/object.mapper"));
    const module1576 = require("./module-1576.js");
    const module895 = require("utils/yaml");
    function C(e, t) {
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
                C(Object(a), true).forEach((t)=>{
                    i.default(e, t, a[t]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
            } else {
                C(Object(a)).forEach((t)=>{
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                });
            }
        }
        return e;
    }
    const k = (e)=>{
        if ([
            undefined,
            null
        ].includes(e)) {
            return "";
        }
        if (e?.metadata) {
            return module895.getValue(e);
        }
        if (f.default(e)) {
            return e;
        }
        return Object.values(e).map((e)=>module895.getValue(e || {})).join("---\n");
    };
    const N = {
        "app.template.create.v2": {
            on: function(e) {
                let a;
                const { store, cluster, workspace, success, module, appName, onOk } = e;
                const E = c.default(e, [
                    "store",
                    "cluster",
                    "workspace",
                    "success",
                    "module",
                    "appName",
                    "onOk"
                ]);
                const b = m.default[module]({
                    workspace
                });
                var _ = h.default.open(D({
                    onOk: (a = o.default(u.default.mark(function* e(a) {
                        let c;
                        let f;
                        let v;
                        let E;
                        let b;
                        let O;
                        c = a?.version;
                        f = s.default(a, "metadata.name");
                        v = s.default(a, 'metadata.annotations["kubesphere.io/alias-name"]');
                        E = m.default.edgeappsets({
                            name: f,
                            namespace: v,
                            version: c
                        });
                        a.spec.template.spec.containers = a.spec.template.spec.containers?.map(function(e) {
                            if (e.pullSecret) {
                                delete e.pullSecret;
                            }
                            return e;
                        });
                        b = D(D({}, E), {}, {
                            metadata: D(D({}, E.metadata), a.metadata),
                            spec: D(D({}, a.spec), {}, {
                                appTemplateName: f,
                                version: c,
                                deploymentTemplate: {
                                    spec: a.spec
                                },
                                nodeSelectors: []
                            })
                        });
                        O = {
                            appName: f,
                            versionName: c,
                            appType: "edge",
                            description: b.metadata.annotations["kubesphere.io/description"],
                            aliasName: b.metadata.annotations["kubesphere.io/alias-name"],
                            maintainers: [
                                {
                                    name: globals.user.username
                                }
                            ],
                            package: module440.safeBtoa(k(b))
                        };
                        if (onOk) {
                            yield onOk(O);
                        } else {
                            yield store.createTemplate({
                                workspace,
                                cluster,
                                appName
                            }, O);
                        }
                        d.default.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        if (success) {
                            success(O);
                        }
                        h.default.close(_);
                    })), function(e) {
                        return a.apply(this, arguments);
                    }),
                    store,
                    module,
                    cluster,
                    workspace,
                    title: t("CREATE_EDGE_APP_TEMPLATE"),
                    formTemplate: b,
                    onlyDockerHub: true,
                    modal: v.default,
                    steps: module1576.APP_TEMPLATES_FORM
                }, E));
            }
        },
        "openpitrix.template.edit.v2": {
            on: function(e) {
                let a;
                const { store, success, workspace } = e;
                const i = c.default(e, [
                    "store",
                    "success",
                    "workspace"
                ]);
                var s = h.default.open(D({
                    onOk: (a = o.default(u.default.mark(function* e(a) {
                        yield store.update(D(D({}, a), {}, {
                            workspace,
                            app_id: a.name
                        }));
                        h.default.close(s);
                        d.default.success({
                            content: t("MODIFY_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    })), function(e) {
                        return a.apply(this, arguments);
                    }),
                    store,
                    modal: b.default,
                    success
                }, i));
            }
        },
        "batch.deploy.app.create.v2": {
            on: function(a) {
                return o.default(u.default.mark(function* r() {
                    let store;
                    let cluster;
                    let workspace;
                    let s;
                    let appName;
                    let versionId;
                    let v;
                    let y;
                    let E;
                    let b;
                    store = a.store;
                    cluster = a.cluster;
                    workspace = a.workspace;
                    s = a.namespace;
                    appName = a.appName;
                    versionId = a.versionId;
                    v = a.onCancel;
                    y = c.default(a, [
                        "store",
                        "cluster",
                        "workspace",
                        "namespace",
                        "appName",
                        "versionId",
                        "onCancel"
                    ]);
                    E = yield store.getVersionList(appName);
                    b = E.items;
                    if (!versionId) {
                        versionId = b[0].metadata.name;
                    }
                    store.getEdgeFiles({
                        appName,
                        versionId
                    }).then((a)=>{
                        let r;
                        r = module440.safeAtob(a["all.yaml"]);
                        const u = module895.getAllYAMLValue(r);
                        const c = l.default(u, 1)[0];
                        const versionList = b.map((e)=>({
                                metadata: D(D({}, e.metadata), e.spec),
                                spec: D(D({}, e.spec), {}, {
                                    deploymentSpec: c.spec?.deploymentTemplate.spec
                                })
                            }));
                        const C = versionList.find((e)=>e.metadata.name === versionId) || versionList[0];
                        const k = {
                            metadata: c.metadata,
                            spec: D(D({}, c.spec), {}, {
                                latestVersion: C.version,
                                versionList
                            })
                        };
                        const app = _.default.apptemplates(k);
                        const T = m.default[y.module]({
                            workspace
                        });
                        var R = h.default.open(D(D({
                            store,
                            setType: function() {
                                return h.default.close(R);
                            },
                            onCancel: function() {
                                h.default.close(R);
                                v?.();
                            },
                            close: function() {
                                h.default.close(R);
                            },
                            module,
                            cluster,
                            workspace,
                            namespace: s,
                            title: t("CREATE_EDGE_APP_TEMPLATE"),
                            formTemplate: T,
                            onlyDockerHub: true,
                            modal: g.default,
                            steps: module1576.APP_TEMPLATES_FORM
                        }, y), {}, {
                            appName,
                            versionId: C.metadata.name,
                            app
                        }));
                    });
                }))();
            }
        },
        "app.template.deploy.v2": {
            on: function(e) {
                const { store, module, formTemplate, success, cluster, namespace, app, workspace, onOK } = e;
                e.onClose;
                const v = c.default(e, [
                    "store",
                    "module",
                    "formTemplate",
                    "success",
                    "cluster",
                    "namespace",
                    "app",
                    "workspace",
                    "onOK",
                    "onClose"
                ]);
                v.close?.();
                sessionStorage.removeItem("edge-ipPool");
                let g;
                var E = h.default.open(D(D({}, v), {}, {
                    onOk: (g = o.default(u.default.mark(function* e(t) {
                        let o;
                        let g;
                        let y;
                        let params;
                        o = t.spec.nodeSelectors[0].project;
                        try {
                            t.metadata.namespace = o;
                            g = t.spec.deploymentTemplate.spec.template.spec.deploymentTemplate.spec;
                            t.spec.deploymentTemplate.spec = g;
                            t.spec.deploymentTemplate.metadata = D(D({}, t.spec.deploymentTemplate.metadata), {}, {
                                annotations: D(D({}, t.spec.deploymentTemplate.annotations), {}, {
                                    "application.kubesphere.io/app-alias-name": app.aliasName
                                }),
                                labels: D(D({}, t.spec.deploymentTemplate.metadata?.labels), {}, {
                                    "application.kubesphere.io/app-id": app.name
                                })
                            });
                            if (!t.spec.deploymentTemplate.spec.template.spec.imagePullSecrets) {
                                t.spec.deploymentTemplate.spec.template.spec.imagePullSecrets = [];
                            }
                            t.spec.deploymentTemplate.spec.template.spec.containers = t.spec.deploymentTemplate.spec.template.spec.containers?.map(function(e) {
                                delete e.pullSecret;
                                return e;
                            });
                        } catch (e) {}
                        y = k(t);
                        params = {
                            kind: "ApplicationRelease",
                            metadata: {
                                name: t.metadata.name,
                                labels: {
                                    "kubesphere.io/namespace": o,
                                    "kubesphere.io/workspace": workspace,
                                    "kubesphere.io/cluster": cluster,
                                    "application.kubesphere.io/app-id": app.name
                                },
                                annotations: D(D({}, t.metadata.annotations), {}, {
                                    "application.kubesphere.io/app-alias-name": app.aliasName
                                })
                            },
                            spec: {
                                appID: app.name,
                                appType: "edge",
                                appVersionID: app.latestVersion.name,
                                values: module440.safeBtoa(y)
                            }
                        };
                        if (onOK) {
                            yield onOK(params);
                        } else {
                            yield store.createInstance({
                                cluster,
                                namespace: o
                            }, params);
                        }
                        if (success) {
                            success({
                                params,
                                workspace,
                                namespace: o,
                                cluster,
                                appName: app.name
                            });
                        }
                        h.default.close(E);
                        v.onClose?.();
                        v.close?.();
                    })), function(e) {
                        return g.apply(this, arguments);
                    }),
                    onCancel: function() {
                        h.default.close(E);
                        v.onCancel();
                    },
                    store,
                    module,
                    namespace,
                    formTemplate,
                    modal: y.default,
                    cluster
                }));
            }
        },
        "workload.batch.delete.v2": {
            on: function(e) {
                const { store, success, resource } = e;
                const l = c.default(e, [
                    "store",
                    "success",
                    "resource"
                ]);
                var u = h.default.open(D({
                    onOk: function() {
                        h.default.close(u);
                        d.default.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    },
                    onCancel: function() {
                        h.default.close(u);
                        l?.close();
                    },
                    modal: E.default,
                    resource,
                    store
                }, l));
            }
        }
    };
    exports.default = N;
})(require("./module-139.js").default(module));
