"use strict";
const module20 = require("./module-20.js").default;
require("./module-12.js");
require("./module-5.js");
require("./module-11.js");
require("./module-29.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-18.js");
require("./module-97.js");
require("./module-16.js");
require("./module-27.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-17.js");
require("./module-38.js");
require("./module-7.js");
require("./module-32.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("./module-12.js");
require("./module-45.js");
require("./module-5.js");
require("./module-11.js");
require("./module-29.js");
require("./module-6.js");
require("./module-30.js").default;
require("./module-18.js");
require("./module-28.js");
require("./module-97.js");
require("./module-191.js");
require("./module-42.js");
require("./module-16.js");
require("./module-160.js");
require("./module-27.js");
require("./module-34.js");
require("./module-15.js");
require("./module-9.js");
require("./module-13.js");
require("./module-10.js");
require("./module-4.js");
require("./module-22.js");
require("./module-23.js");
require("./module-57.js");
require("./module-17.js");
require("./module-38.js");
require("./module-7.js");
require("./module-32.js");
const n = module20(require("./module-61.js").default);
const l = module20(require("./module-41.js"));
const u = module20(require("./module-31.js").default);
require("./module-41.js");
let o;
let i;
let c;
const s = module20(require("./module-44.js").default);
const f = module20(require("./module-58.js").default);
const d = module20(require("./module-65.js").default);
const p = module20(require("./module-36.js").default);
const m = module20(require("./module-37.js").default);
const h = module20(require("./module-88.js").default);
const v = module20(require("./module-55.js").default);
const g = module20(require("./module-56.js").default);
const y = module20(require("./module-51.js"));
const E = module20(require("./module-49.js").default);
module20(require("./module-66.js").default);
const module14 = require("./module-14.js");
const _ = module20(require("./module-26.js").default);
const O = module20(require("./module-74.js").default);
const S = module20(require("./module-136.js").default);
const module1733 = require("./module-1733.js");
const D = module20(require("./module-435.js"));
function T(e) {
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
        const r = y.default(e);
        if (t) {
            const n = y.default(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return g.default(this, a);
    };
}
o = ((e)=>{
    v.default(y, e);
    let a;
    let r;
    var g = T(y);
    function y(...a_1) {
        let e;
        p.default(this, y);
        e = g.call(this, ...a_1);
        e.module = "groups";
        d.default(e, "treeData", i, h.default(e));
        d.default(e, "rowTreeData", c, h.default(e));
        e.getResourceUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/groups`;
        };
        e.getDetailUrl = function(t = {}) {
            return `${e.getResourceUrl(t)}/${t.name}`;
        };
        e.getWatchListUrl = function(t) {
            const t_workspace = t.workspace;
            const r = f.default(t, [
                "workspace"
            ]);
            return `apis/iam.kubesphere.io/v1beta1/watch${e.getPath(r)}/groups?labelSelector=kubesphere.io/workspace=${t_workspace}`;
        };
        return e;
    }
    m.default(y, [
        {
            key: "getPath",
            value: function({ cluster, workspace, namespace, devops }) {
                let l = "";
                if (cluster) {
                    l += `/klusters/${cluster}`;
                }
                if (namespace) {
                    return `${l}/namespaces/${namespace}`;
                }
                if (devops) {
                    return `${l}/namespaces/${devops}`;
                }
                if (workspace) {
                    return `${l}/workspaces/${workspace}`;
                }
                return l;
            }
        },
        {
            key: "fetchGroup",
            value: async function() {
                let a;
                let r;
                let n;
                let u;
                let o;
                const _this = this;
                const c = arguments;
                a = c.length > 0 && c[0] !== undefined ? c[0] : {};
                r = a.workspace;
                n = f.default(a, [
                    "workspace"
                ]);
                this.isLoading = true;
                n.sortBy = "createTime";
                n.limit = -1;
                u = await request.get(this.getResourceUrl({
                    workspace: r,
                    ...n
                }));
                o = _.default(u, "items", [])?.map(function(e) {
                    return {
                        ..._this.mapper(e)
                    };
                });
                this.total = _.default(u, "totalItems");
                this.treeData = [
                    {
                        key: "root",
                        title: r,
                        group_id: "root",
                        group_name: r,
                        path: [
                            r
                        ],
                        children: module1733.formatTreeData(o, r)
                    }
                ];
                this.rowTreeData = module1733.flattenTreeData(this.treeData);
                this.isLoading = false;
                this.list.update({
                    data: o,
                    total: u.totalItems || 0,
                    ...n,
                    limit: Number(n.limit) || 10,
                    page: Number(n.page) || 1,
                    isLoading: false
                });
            }
        },
        {
            key: "create",
            value: function(e, t) {
                const a = _.default(e, 'metadata.annotations["kubesphere.io/project-roles"]', []);
                const r = _.default(e, 'metadata.annotations["kubesphere.io/devops-roles"]', []);
                O.default(e, 'metadata.annotations["kubesphere.io/project-roles"]', JSON.stringify(a));
                O.default(e, 'metadata.annotations["kubesphere.io/devops-roles"]', JSON.stringify(r));
                return this.submitting(request.post(this.getResourceUrl(t), e));
            }
        },
        {
            key: "createGroup",
            value: async function(t, a) {
                let r;
                let username;
                let roleRef;
                let i;
                let c;
                let s;
                let d;
                const _this = this;
                r = await this.create(S.default(t), a);
                username = _.default(r, "metadata.name");
                roleRef = _.default(t, 'metadata.annotations["kubesphere.io/workspace-role"]');
                i = _.default(t, 'metadata.annotations["kubesphere.io/project-roles"]', []);
                c = _.default(t, 'metadata.annotations["kubesphere.io/devops-roles"]', []);
                s = [
                    this.addWorkspaceRoleBinding([
                        {
                            username,
                            roleRef
                        }
                    ], a)
                ];
                if ((d = [].concat(n.default(i), n.default(c))).length > 0) {
                    d.forEach((e)=>{
                        const e_role = e.role;
                        const a = f.default(e, [
                            "role"
                        ]);
                        return e_role && s.push(_this.addRolebindings([
                            {
                                username,
                                roleRef: e_role
                            }
                        ], {
                            ...a
                        }));
                    });
                }
                return this.submitting(Promise.all(s));
            }
        },
        {
            key: "update",
            value: (r = s.default(l.default.mark(function e(t, a, r) {
                let u;
                let o;
                let i;
                let role;
                let s;
                let f;
                let d;
                let p;
                let m;
                let h;
                let v;
                let g;
                let y;
                let E;
                return l.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                u = _.default(t, "metadata.name");
                                o = {};
                                i = _.default(t, 'metadata.annotations["kubesphere.io/alias-name"]');
                                role = _.default(t, 'metadata.annotations["kubesphere.io/workspace-role"]');
                                s = _.default(t, 'metadata.annotations["kubesphere.io/project-roles"]', []);
                                f = _.default(t, 'metadata.annotations["kubesphere.io/devops-roles"]', []);
                                O.default(o, 'metadata.annotations["kubesphere.io/alias-name"]', i);
                                O.default(o, 'metadata.annotations["kubesphere.io/workspace-role"]', role);
                                O.default(o, 'metadata.annotations["kubesphere.io/project-roles"]', JSON.stringify(s));
                                O.default(o, 'metadata.annotations["kubesphere.io/devops-roles"]', JSON.stringify(f));
                                d = [
                                    request.patch(this.getDetailUrl({
                                        ...r,
                                        name: u
                                    }), o)
                                ];
                                p = _.default(a, 'metadata.annotations["kubesphere.io/workspace-role"]');
                                if (role === p) {
                                    e.next = 19;
                                    break;
                                }
                                e.next = 15;
                                return this.getWorkspaceRoleBinding(u, r);
                            case 15:
                                m = e.sent;
                                e.next = 18;
                                return this.deleteWorkspaceRoleBinding(_.default(m, "items[0].metadata.name"), r);
                            case 18:
                                d.push(this.addWorkspaceRoleBinding([
                                    D.default.workspacerolebinding({
                                        name: u,
                                        role
                                    })
                                ], r));
                            case 19:
                                h = _.default(a, 'metadata.annotations["kubesphere.io/project-roles"]');
                                v = _.default(a, 'metadata.annotations["kubesphere.io/devops-roles"]');
                                g = [].concat(n.default(s), n.default(f));
                                y = [].concat(n.default(h), n.default(v));
                                if ((E = this.getUpdateRolebindsRequests(g, y, t)).length > 0) {
                                    d.push(E);
                                }
                                return e.abrupt("return", this.submitting(Promise.all(d)));
                            case 26:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, t, a) {
                return r.apply(this, arguments);
            })
        },
        {
            key: "getUpdateRolebindsRequests",
            value: function(e, t, a) {
                const _this = this;
                const name = _.default(a, "metadata.name");
                const l = [];
                e.forEach(({ role, namespace, cluster })=>{
                    if (!t.find((e)=>e.cluster === cluster && e.namespace === namespace && e.role === role)) {
                        l.push(_this.addRolebindings([
                            D.default.rolebinding({
                                name,
                                role
                            })
                        ], {
                            cluster,
                            namespace
                        }));
                    }
                });
                t.forEach(({ namespace, cluster, role, name })=>{
                    if (!e.find((e)=>e.cluster === cluster && e.namespace === namespace && e.role === role)) {
                        l.push(_this.deleteRolebindings(name, {
                            cluster,
                            namespace
                        }));
                    }
                });
                return l;
            }
        },
        {
            key: "checkName",
            value: (a = s.default(l.default.mark(function e(t) {
                let a;
                let r;
                let n;
                return l.default.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.name;
                                r = f.default(t, [
                                    "name"
                                ]);
                                e.next = 3;
                                return request.get(`${this.getResourceUrl(r)}`, {
                                    name: a
                                });
                            case 3:
                                if (!(n = e.sent).items || !n.items.some((e)=>_.default(e, "metadata.generateName") === a)) {
                                    e.next = 6;
                                    break;
                                }
                                return e.abrupt("return", {
                                    exist: true
                                });
                            case 6:
                                return e.abrupt("return", {
                                    exist: false
                                });
                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return a.apply(this, arguments);
            })
        },
        {
            key: "addGroupBinding",
            value: function(e, t = {}) {
                return request.post(`${this.apiVersion}${this.getPath(t)}/groupbindings`, e);
            }
        },
        {
            key: "deleteGroupBinding",
            value: function(e, t = {}) {
                return request.delete(`${this.apiVersion}${this.getPath(t)}/groupbindings/${e}`);
            }
        },
        {
            key: "addWorkspaceRoleBinding",
            value: function(e, t = {}) {
                return request.post(`${this.apiVersion}${this.getPath(t)}/workspacemembers`, e);
            }
        },
        {
            key: "deleteWorkspaceRoleBinding",
            value: function(e, t = {}) {
                return request.delete(`${this.apiVersion}${this.getPath(t)}/workspacemembers/${e}`);
            }
        },
        {
            key: "addRolebindings",
            value: function(e, t = {}) {
                return request.post(`${this.apiVersion}${this.getPath(t)}/namespacemembers`, e);
            }
        },
        {
            key: "deleteRolebindings",
            value: function(e, t = {}) {
                return request.delete(`${this.apiVersion}${this.getPath(t)}/namespacemembers/${e}`);
            }
        },
        {
            key: "getGroupBinding",
            value: function({ group, user }, r = {}) {
                return request.get(`${this.apiVersion}${this.getPath(r)}/groupbindings`, {
                    labelSelector: `iam.kubesphere.io/group-ref=${group},iam.kubesphere.io/user-ref=${user}`
                });
            }
        },
        {
            key: "getWorkspaceRoleBinding",
            value: async function(t, a) {
                let cluster;
                let workspace;
                let namespace;
                let i;
                cluster = a.cluster;
                workspace = a.workspace;
                namespace = a.namespace;
                i = f.default(a, [
                    "cluster",
                    "workspace",
                    "namespace"
                ]);
                if (t) {
                    i.labelSelector = `iam.kubesphere.io/group-ref=${t}`;
                }
                return await request.get(`${this.apiVersion}${this.getPath({
                    cluster,
                    workspace,
                    namespace
                })}/workspacemembers`, i);
            }
        },
        {
            key: "getRoleBinding",
            value: function(e, t = {}) {
                return request.get(`${this.apiVersion}${this.getPath(t)}/namespacemembers`, {
                    labelSelector: `iam.kubesphere.io/group-ref=${e}`
                });
            }
        },
        {
            key: "fetchRoleBinding",
            value: function(e, t) {
                const _this = this;
                const t_clusters = t.clusters;
                const n = f.default(t, [
                    "clusters"
                ]);
                const l = [];
                if (t_clusters.length > 0) {
                    t_clusters.forEach((cluster)=>{
                        l.push(_this.getRoleBinding(e, {
                            cluster,
                            ...n
                        }));
                    });
                } else {
                    l.push(this.getRoleBinding(e, {
                        ...n
                    }));
                }
                return Promise.all(l);
            }
        },
        {
            key: "deleteGroup",
            value: function(e, t = {}) {
                return request.delete(`${this.apiVersion}${this.getPath(t)}/groups/${e}`);
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/iam.kubesphere.io/v1beta1";
            }
        }
    ]);
    return y;
})(module20(require("./module-68.js")).default);
i = E.default(o.prototype, "treeData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
c = E.default(o.prototype, "rowTreeData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
E.default(o.prototype, "fetchGroup", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchGroup"), o.prototype);
E.default(o.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "create"), o.prototype);
E.default(o.prototype, "createGroup", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "createGroup"), o.prototype);
E.default(o.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "update"), o.prototype);
E.default(o.prototype, "checkName", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "checkName"), o.prototype);
E.default(o.prototype, "addGroupBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "addGroupBinding"), o.prototype);
E.default(o.prototype, "deleteGroupBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "deleteGroupBinding"), o.prototype);
E.default(o.prototype, "addWorkspaceRoleBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "addWorkspaceRoleBinding"), o.prototype);
E.default(o.prototype, "deleteWorkspaceRoleBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "deleteWorkspaceRoleBinding"), o.prototype);
E.default(o.prototype, "addRolebindings", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "addRolebindings"), o.prototype);
E.default(o.prototype, "deleteRolebindings", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "deleteRolebindings"), o.prototype);
E.default(o.prototype, "getGroupBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "getGroupBinding"), o.prototype);
E.default(o.prototype, "getWorkspaceRoleBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "getWorkspaceRoleBinding"), o.prototype);
E.default(o.prototype, "getRoleBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "getRoleBinding"), o.prototype);
E.default(o.prototype, "fetchRoleBinding", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchRoleBinding"), o.prototype);
E.default(o.prototype, "deleteGroup", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "deleteGroup"), o.prototype);
exports.default = o;
