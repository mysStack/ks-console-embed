import "./module-12.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-18.js";
import "./module-48.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-85.js";
import "./module-137.js";
import "./module-7.js";
import "./module-28.js";
import "./module-191.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module26 from "./module-26.js";
import module247 from "./module-247.js";
import module63 from "./module-63.js";
import module250 from "./module-250.js";
import module136 from "./module-136.js";
import module195 from "./module-195.js";
import module159 from "./module-159.js";
import { checkComponentAuthorized, compareVersion, safeParseJSON } from "./module-52.js";
import { getLicenseErrorInfoFromLicenses } from "./module-774.js";
const C = (()=>{
    function e() {
        module36(this, e);
        this._cache_ = {};
    }
    module37(e, [
        {
            key: "getActions",
            value: function(e) {
                let e_cluster = e.cluster;
                const { nodegroup, workspace, project, fedproject, devops, module } = e;
                if (e.skipAuth || globals.config.disableAuthorization) {
                    return [
                        "view",
                        "edit",
                        "create",
                        "delete",
                        "manage"
                    ];
                }
                const f = (e)=>{
                    const t = [];
                    e.forEach((e)=>{
                        if (module195(e)) {
                            t.push(e);
                        } else {
                            Object.keys(e).forEach((n)=>{
                                t.push(n);
                                t.push(e[n]);
                            });
                        }
                    });
                    if (t.includes("manage")) {
                        return module247([].concat(t, [
                            "view",
                            "edit",
                            "create",
                            "delete"
                        ]));
                    }
                    return module247(t);
                };
                if (devops) {
                    const d = module26(globals.user, `devopsRules[${e_cluster}][${devops}]._`, []);
                    return f([].concat(module61(module26(globals.user, `devopsRules[${e_cluster}][${devops}][${module}]`, [])), module61(d)));
                }
                if (project) {
                    if (fedproject) {
                        e_cluster = module26(globals, "user.fedProCluster", e_cluster);
                    }
                    const p = module26(globals.user, `projectRules[${e_cluster}][${project}]._`, this.getActions({
                        cluster: e_cluster,
                        module
                    }));
                    return f([].concat(module61(module26(globals.user, `projectRules[${e_cluster}][${project}][${module}]`, [])), module61(p)));
                }
                if (workspace) {
                    const v = module26(globals.user, `workspaceRules[${workspace}]._`, []);
                    return f([].concat(module61(module26(globals.user, `workspaceRules[${workspace}][${module}]`, [])), module61(v)));
                }
                if (nodegroup) {
                    const m = module26(globals.user, [
                        "nodegroupRules",
                        e_cluster,
                        nodegroup,
                        "_"
                    ], []);
                    return f([].concat(module61(module26(globals.user, [
                        "nodegroupRules",
                        e_cluster,
                        nodegroup,
                        module
                    ], [])), module61(m)));
                }
                if (e_cluster) {
                    const g = module26(globals.user, `clusterRules[${e_cluster}]._`, []);
                    return f([].concat(module61(module26(globals.user, `clusterRules[${e_cluster}][${module}]`, [])), module61(g)));
                }
                return f(module26(globals.user, `globalRules[${module}]`, []));
            }
        },
        {
            key: "hasPermission",
            value: function(e) {
                const { cluster, workspace, project, devops, module, action, actions } = e;
                return !(!e.skipAuth && !window.parent.globals.config.disableAuthorization) || (module63(actions) ? this.getActions({
                    cluster,
                    workspace,
                    project,
                    devops,
                    module
                }).includes(action) : module250(...[
                    this.getActions({
                        cluster,
                        workspace,
                        project,
                        devops,
                        module
                    })
                ].concat(module61(actions))));
            }
        },
        {
            key: "checkNavItem",
            value: function(e, t) {
                const _this = this;
                return !(e.multiCluster && !globals.app.isMultiCluster) && !(e.ksModule && !this.hasKSModule(e.ksModule)) && (!e.clusterModule || !e.clusterModule.split("|").every((t)=>!_this.hasClusterModule(e.cluster, t))) && !(e.admin && !globals.app.isPlatformAdmin) && (!!e.skipAuth || (e._children || (e._children = e.children), e._children ? (e.children = e._children.filter((r)=>{
                    const e_cluster = e.cluster;
                    if (r.tabs) {
                        return r.tabs.some((e)=>{
                            e.cluster = e_cluster;
                            return _this.checkNavItem(e, t);
                        });
                    }
                    r.cluster = e_cluster;
                    return _this.checkNavItem(r, t);
                }), delete e._children, e.children.length > 0) : e.authKey && e.authKey.indexOf("|") !== -1 ? e.authKey.split("|").some((module)=>t({
                        module,
                        action: "view"
                    })) : t({
                    module: e.authKey || e.name,
                    action: e.authAction || "view"
                })));
            }
        },
        {
            key: "getGlobalNavs",
            value: function() {
                const _this = this;
                if (!this._cache_.globalNavs) {
                    const t = [];
                    module136(globals.config.globalNavs).forEach((n)=>{
                        if (_this.checkNavItem(n, function(t) {
                            return _this.hasPermission(t);
                        })) {
                            t.push(n);
                        }
                    });
                    this._cache_.globalNavs = t;
                }
                return this._cache_.globalNavs;
            }
        },
        {
            key: "getClusterNavs",
            value: function(e) {
                const _this = this;
                const n = module26(globals, `need_rebuild_${e}_nav`, false);
                if (!module26(globals.user, `clusterRules[${e}]`)) {
                    return [];
                }
                if (!this._cache_[`cluster_${e}_navs`] || n) {
                    const r = [];
                    module136(globals.config.clusterNavs).forEach((n)=>{
                        const o = n.items.filter((n)=>{
                            n.cluster = e;
                            return _this.checkNavItem(n, function(n) {
                                return _this.hasPermission({
                                    ...n,
                                    cluster: e
                                });
                            });
                        });
                        if (!module63(o)) {
                            _this.checkClusterVersionRequired(o, e);
                            r.push({
                                ...n,
                                items: o
                            });
                        }
                    });
                    this._cache_[`cluster_${e}_navs`] = r;
                }
                return this._cache_[`cluster_${e}_navs`];
            }
        },
        {
            key: "getEdgeCalculationNavs",
            value: function(e) {
                const _this = this;
                const o = globals.user?.clusterRules?.[e];
                const a = o && Object.keys(o).length === 2 && Object.prototype.hasOwnProperty.call(o, "nodegroups");
                const i = module26(globals, `need_rebuild_edgewize_${e}_nav`, false);
                if (!this._cache_[`cluster_${e}_edgewize_navs`] || i) {
                    const l = [];
                    module136(globals.config.edgeCalculationNavs || []).forEach((t)=>{
                        const n = t.children.filter((t)=>{
                            t.cluster = e;
                            return _this.checkNavItem(t, function(t) {
                                return _this.hasPermission({
                                    ...t,
                                    cluster: e
                                });
                            });
                        });
                        if (!module63(n)) {
                            const o = a ? n.filter((e)=>e.name === "node-groups") : n;
                            l.push({
                                ...t,
                                items: o
                            });
                        }
                    });
                    this._cache_[`cluster_${e}_edgewize_navs`] = l;
                }
                return this._cache_[`cluster_${e}_edgewize_navs`];
            }
        },
        {
            key: "getNodeGroupNavs",
            value: function(e) {
                const t = module26(globals, `need_rebuild_nodegroup_${e}_nav`, false);
                if (!this._cache_[`cluster_${e}_nodegroup_navs`] || t) {
                    const n = [];
                    module136(globals.config.nodeGroupNavs || []).forEach((t)=>{
                        const r = t.items.map((t)=>({
                                ...t,
                                cluster: e
                            }));
                        n.push({
                            ...t,
                            items: r
                        });
                    });
                    this._cache_[`cluster_${e}_nodegroup_navs`] = n;
                }
                return this._cache_[`cluster_${e}_nodegroup_navs`];
            }
        },
        {
            key: "getObservabilityNavs",
            value: function(e) {
                const _this = this;
                const n = module26(globals, `need_rebuild_observability_${e}_nav`, false);
                const r = module26(globals, "user.globalrole");
                const o = module26(globals.user, `clusterRules[${e}]`);
                if (r !== "platform-admin" || !o) {
                    return [];
                }
                if (!this._cache_[`observability_${e}_navs`] || n) {
                    const a = [];
                    module136(globals.config.observabilityNavs.children).forEach((n)=>{
                        const r = n.items.filter((n)=>{
                            n.cluster = e;
                            return _this.checkNavItem(n, function(n) {
                                return _this.hasPermission({
                                    ...n,
                                    cluster: e
                                });
                            });
                        });
                        if (!module63(r)) {
                            _this.checkClusterVersionRequired(r, e);
                            a.push({
                                ...n,
                                items: r
                            });
                        }
                    });
                    this._cache_[`observability_${e}_navs`] = a;
                }
                return this._cache_[`observability_${e}_navs`];
            }
        },
        {
            key: "getAccessNavs",
            value: function() {
                const _this = this;
                if (!this._cache_.accessNavs) {
                    const n = [];
                    module136(globals.config.accessNavs?.[0].items).forEach((t)=>{
                        const r = _this.checkNavItem(t, function(t) {
                            return _this.hasPermission(t);
                        });
                        if (!module63(r)) {
                            n.push({
                                ...t,
                                items: r
                            });
                        }
                    });
                    this._cache_.accessNavs = n;
                }
                return this._cache_.accessNavs;
            }
        },
        {
            key: "filterEdgeNavs",
            value: function({ navs, isEdge }) {
                const r = [];
                navs.forEach(({ isHiddenInKs, isHiddenInEdge, children = [], ...rest })=>{
                    const u = children.filter((e)=>{
                        if (isEdge) {
                            return !e.isHiddenInEdge;
                        }
                        return !e.isHiddenInKs;
                    });
                    const c = {
                        isHiddenInKs,
                        isHiddenInEdge,
                        ...rest,
                        ...u.length > 0 ? {
                            children: u
                        } : {}
                    };
                    if (isEdge) {
                        if (!isHiddenInEdge) {
                            r.push(c);
                        }
                    } else if (!isHiddenInKs) {
                        r.push(c);
                    }
                });
                return r;
            }
        },
        {
            key: "getWorkspaceNavs",
            value: function(workspace, n = {}) {
                const _this = this;
                const n_isEdge = n.isEdge;
                if (!module26(globals.user, `workspaceRules[${workspace}]`)) {
                    return [];
                }
                if (!this._cache_[`workspace_${workspace}_navs`]) {
                    const o = [];
                    module136(globals.config.workspaceNavs.children || []).forEach((n)=>{
                        const i = n.children?.filter(function(n) {
                            return _this.checkNavItem(n, function(n) {
                                return _this.hasPermission({
                                    ...n,
                                    workspace
                                });
                            });
                        });
                        if (!module63(i)) {
                            const l = _this.filterEdgeNavs({
                                navs: i,
                                isEdge: n_isEdge
                            });
                            o.push({
                                ...n,
                                items: l
                            });
                        }
                    });
                    this._cache_[`workspace_${workspace}_navs`] = o;
                }
                return this._cache_[`workspace_${workspace}_navs`];
            }
        },
        {
            key: "getManageAppNavs",
            value: function() {
                return globals.config.manageAppNavs;
            }
        },
        {
            key: "getProjectNavs",
            value: function(e) {
                const _this = this;
                const { cluster, workspace, project, licenseInfo, isEdge } = e;
                if (!module26(globals.user, `projectRules[${cluster}][${project}]`)) {
                    return [];
                }
                if (!this._cache_[`project_${cluster}_${project}_navs`]) {
                    const d = [];
                    const h = module136(globals.config.projectNavs);
                    const v = (h?.[0]?.items ?? h?.children ?? []).filter((e)=>{
                        e.cluster = cluster;
                        return _this.checkNavItem(e, function(e) {
                            return _this.hasPermission({
                                ...e,
                                cluster,
                                workspace,
                                project
                            });
                        });
                    });
                    if (!module63(v)) {
                        const m = this.filterEdgeNavs({
                            navs: v,
                            isEdge
                        });
                        this.checkClusterVersionRequired(m, cluster);
                        this.checkAuthordRequiredByConfig(m, licenseInfo);
                        d.push({
                            ...h,
                            children: m
                        });
                    }
                    this._cache_[`project_${cluster}_${project}_navs`] = d;
                }
                return this._cache_[`project_${cluster}_${project}_navs`];
            }
        },
        {
            key: "getFederatedProjectNavs",
            value: function() {
                return window.parent.globals.config.federatedProjectNavs;
            }
        },
        {
            key: "getDevOpsNavs",
            value: function(e) {
                const _this = this;
                const { cluster, workspace, devops } = e;
                if (!module26(globals.user, `devopsRules[${cluster}][${devops}]`)) {
                    return [];
                }
                if (!this._cache_[`devops_${cluster}_${devops}_navs`]) {
                    const a = [];
                    const i = module136(globals.config.devopsNavs);
                    const l = i.children.filter((e)=>{
                        e.cluster = cluster;
                        return _this.checkNavItem(e, function(e) {
                            return _this.hasPermission({
                                ...e,
                                cluster,
                                workspace,
                                devops
                            });
                        });
                    });
                    if (!module63(l)) {
                        this.checkClusterVersionRequired(l, cluster);
                        a.push({
                            ...i,
                            children: l
                        });
                    }
                    this._cache_[`devops_${cluster}_${devops}_navs`] = a;
                }
                return this._cache_[`devops_${cluster}_${devops}_navs`];
            }
        },
        {
            key: "getPlatformSettingsNavs",
            value: function(e) {
                const _this = this;
                if (!this._cache_.platformSettingsNavs || !module159(e)) {
                    const n = [];
                    module136([
                        globals.config.platformSettingsNavs
                    ]).forEach((r)=>{
                        const o = r.children.filter((e)=>_this.checkNavItem(e, function(e) {
                                return _this.hasPermission({
                                    ...e
                                });
                            }));
                        if (!module63(o)) {
                            _this.checkAuthordRequired(o, e);
                            n.push({
                                ...r,
                                items: o
                            });
                        }
                    });
                    this._cache_.platformSettingsNavs = n;
                }
                return this._cache_.platformSettingsNavs;
            }
        },
        {
            key: "getWhizardTelemetryNavs",
            value: function(e) {
                const _this = this;
                if (!this._cache_.whizardTelemetry || !module159(e)) {
                    const n = [];
                    const r = module136(globals.config.whizardTelemetryNavs);
                    const o = r.children.filter((e)=>_this.checkNavItem(e, function(e) {
                            return _this.hasPermission({
                                ...e
                            });
                        }));
                    if (!module63(o)) {
                        this.checkAuthordRequired(o, e);
                        n.push({
                            ...r,
                            items: o
                        });
                    }
                    this._cache_.whizardTelemetry = n;
                }
                return this._cache_.whizardTelemetry;
            }
        },
        {
            key: "checkClusterVersionRequired",
            value: function(e, t) {
                const _this = this;
                const r = this.isMultiCluster ? module26(window.parent.globals, `clusterConfig.${t}.ksVersion`) : module26(window.parent.globals, "ksConfig.ksVersion");
                e.forEach((e)=>{
                    if (e.requiredClusterVersion && compareVersion(r, e.requiredClusterVersion) < 0) {
                        e.disabled = true;
                        e.reason = "CLUSTER_UPGRADE_REQUIRED";
                    }
                    if (e.children && e.children.length > 0) {
                        _this.checkClusterVersionRequired(e.children, t);
                    }
                });
            }
        },
        {
            key: "checkAuthordRequired",
            value: function(e, t) {
                const _this = this;
                const r = t;
                e.forEach((e)=>{
                    if (e.name === "notification-history" && r) {
                        e.disabled = true;
                        e.reason = "UNAUTHORIZED";
                    }
                    if (e.children && e.children.length > 0) {
                        _this.checkAuthordRequired(e.children, t);
                    }
                });
            }
        },
        {
            key: "checkAuthordRequiredByConfig",
            value: function(e, n = {}) {
                const _this = this;
                const n_componentConstraints = n.componentConstraints;
                const componentConstraints = n_componentConstraints === undefined ? [] : n_componentConstraints;
                e.forEach((e)=>{
                    if (e.requiredAuth && !checkComponentAuthorized({
                        componentName: e.requiredAuth,
                        componentConstraints
                    })) {
                        e.disabled = true;
                        e.reason = "UNAUTHORIZED";
                    }
                    if (e.children && e.children.length > 0) {
                        _this.checkAuthordRequiredByConfig(e.children, n);
                    }
                });
            }
        },
        {
            key: "hasKSModule",
            value: function(e) {
                return module26(window.parent.globals, `ksConfig["${e}"]`);
            }
        },
        {
            key: "hasClusterModule",
            value: function(e, t) {
                if (this.isMultiCluster && e) {
                    return module26(window.parent.globals, `ksConfig.enabledExtensionModulesStatus.${t}.clusterSchedulingStatuses.${e}`, false);
                }
                return this.hasKSModule(t);
            }
        },
        {
            key: "hasClusterExtensionModule",
            value: function(e, t) {
                return module26(window.parent.globals, `ksConfig.enabledExtensionModulesStatus.${t}.clusterSchedulingStatuses.${e}`, false);
            }
        },
        {
            key: "hasExtensionModuleAnnotation",
            value: function(e, t) {
                return module26(globals, `ksConfig.enabledExtensionModulesStatus.${e}.annotations['${t}']`, "false") === "true";
            }
        },
        {
            key: "hasMonitoringExtensionExtraModule",
            value: function(e) {
                return module26(window.parent.globals, `ksConfig.enabledExtensionModulesStatus.whizard-monitoring.annotations.${e}`, false);
            }
        },
        {
            key: "cacheHistory",
            value: function(url, t) {
                let n = safeParseJSON(localStorage.getItem("history-cache"), {});
                n = (n = n[globals.user.username] || []).filter((t)=>t.url !== url);
                localStorage.setItem("history-cache", JSON.stringify(module31({}, globals.user.username, [
                    {
                        url,
                        ...t
                    }
                ].concat(module61(n)).slice(0, 8))));
            }
        },
        {
            key: "isLicenseAuthorized",
            value: function(extensionName) {
                return !!window.parent?.globals?.config?.isKsEdition || getLicenseErrorInfoFromLicenses({
                    extensionName
                }).isLicenseAuthorized;
            }
        },
        {
            key: "enableGlobalNav",
            get: function() {
                return this.getGlobalNavs().length > 0;
            }
        },
        {
            key: "workspaces",
            get: function() {
                return window.parent.globals.user.workspaces || [];
            }
        },
        {
            key: "enableAppStore",
            get: function() {
                return this.hasKSModule("openpitrix.appstore");
            }
        },
        {
            key: "isPlatformAdmin",
            get: function() {
                return globals.user.globalrole === "platform-admin";
            }
        },
        {
            key: "isMultiCluster",
            get: function() {
                return window.parent.globals.ksConfig?.multicluster?.clusterRole !== "none";
            }
        },
        {
            key: "showLicenseTip",
            get: function() {
                return globals.licenseInfo?.showLicenseTip;
            }
        }
    ]);
    return e;
})();
export default C;
