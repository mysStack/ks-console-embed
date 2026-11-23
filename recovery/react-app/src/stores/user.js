import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module58 from "unpacked/module-58.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import module241 from "unpacked/module-241.js";
import module74 from "unpacked/module-74.js";
import module247 from "unpacked/module-247.js";
import module495 from "unpacked/module-495.js";
import module14 from "unpacked/module-14.js";
import { safeParseJSON } from "utils/index";
import module105 from "utils/object.mapper";
import module201 from "utils/cookie";
import module68 from "stores/base";
import module120 from "stores/base.list";
let s;
let u;
let c;
function H(e) {
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
        let n;
        const r = module51(e);
        if (t) {
            const o = module51(this).constructor;
            n = Reflect.construct(r, arguments, o);
        } else {
            n = r.apply(this, arguments);
        }
        return module56(this, n);
    };
}
s = ((e)=>{
    module55(A, e);
    let k;
    let z;
    var P = H(A);
    function A(...n) {
        let e;
        module36(this, A);
        e = P.call(this, ...n);
        e.records = new module120;
        e.ingroup = new module120;
        e.notingroup = new module120;
        module65(e, "roles", u, module88(e));
        e.module = "users";
        module65(e, "allUserStatus", c, module88(e));
        e.getResourceUrl = function(t = {}) {
            return `kapis/iam.kubesphere.io/v1beta1${e.getPath(t)}/${e.getModule(t)}`;
        };
        e.getListUrl = e.getResourceUrl;
        return e;
    }
    module37(A, [
        {
            key: "getAllUserStatus",
            value: async function() {
                let t;
                let n;
                const _this = this;
                t = await request.get(this.getResourceUrl(), {
                    limit: -1
                });
                n = {};
                t.items.forEach((e)=>{
                    const t = _this.mapper(e);
                    n[t.name] = t;
                });
                this.allUserStatus = n;
            }
        },
        {
            key: "getPath",
            value: function({ cluster, workspace, namespace, devops, nodegroup } = {}) {
                let i = "";
                if (cluster) {
                    i += `/klusters/${cluster}`;
                }
                if (nodegroup) {
                    return `${i}/nodegroups/${nodegroup}`;
                }
                if (namespace) {
                    return `${i}/namespaces/${namespace}`;
                }
                if (devops) {
                    return `${i}/namespaces/${devops}`;
                }
                if (workspace) {
                    return `/workspaces/${workspace}`;
                }
                return i;
            }
        },
        {
            key: "getModule",
            value: function({ cluster, workspace, namespace, devops, nodegroup } = {}) {
                if (namespace || devops) {
                    return "namespacemembers";
                }
                if (workspace) {
                    return "workspacemembers";
                }
                if (nodegroup) {
                    return "members";
                }
                if (cluster) {
                    return "clustermembers";
                }
                return "users";
            }
        },
        {
            key: "fetchRules",
            value: (z = module44(module41.mark(function e(t) {
                let r;
                let o;
                let s;
                let u;
                let f;
                let d;
                let p;
                let h;
                let v;
                let m;
                let g;
                let y;
                let b;
                let k;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                t.name;
                                r = module58(t, [
                                    "name"
                                ]);
                                o = "globalroles";
                                s = "";
                                u = "";
                                if (r.namespace || r.devops) {
                                    o = "roles";
                                    s = `scope=namespace&namespace=${r.namespace ?? r.devops}`;
                                    u = this.getPath(module241(r, [
                                        "cluster"
                                    ]));
                                } else if (r.workspace) {
                                    o = "workspaceroles";
                                    s = `scope=workspace&workspace=${r.workspace}`;
                                    u = this.getPath(module241(r, [
                                        "cluster"
                                    ]));
                                } else if (r.nodegroup) {
                                    o = "nodegrouproles";
                                } else if (r.cluster) {
                                    o = "clusterroles";
                                    s = `scope=cluster&cluster=${r.cluster}`;
                                }
                                f = `/kapis/iam.kubesphere.io${u}/v1beta1/users/${globals.user?.username}/roletemplates?${s}`;
                                e.next = 8;
                                return request.get(f, {}, {}, function() {
                                    return [];
                                });
                            case 8:
                                d = e.sent;
                                p = module26(d, "items", []);
                                h = {};
                                if (p.length > 0) {
                                    p.forEach((e)=>{
                                        const t = module26(e, "metadata.name");
                                        const n = safeParseJSON(module26(e, "metadata.annotations['iam.kubesphere.io/role-template-rules']"), {});
                                        Object.keys(n).forEach((e)=>{
                                            let r;
                                            h[e] = h[e] || [];
                                            if (module60(n[e])) {
                                                (r = h[e]).push.apply(r, module61(n[e]).concat([
                                                    t
                                                ]));
                                            } else {
                                                h[e].push(n[e], t);
                                            }
                                            h[e] = module247(h[e]);
                                        });
                                    });
                                }
                                e.t0 = o;
                                e.next = e.t0 === "globaleroles" ? 15 : e.t0 === "clusterroles" ? 17 : e.t0 === "nodegrouproles" ? 20 : e.t0 === "workspaceroles" ? 23 : e.t0 === "roles" ? 29 : 33;
                                break;
                            case 15:
                                module74(globals.user, "globalRules", h);
                                return e.abrupt("break", 33);
                            case 17:
                                v = globals.app.getActions({
                                    module: "clusters"
                                });
                                module74(globals.user, `clusterRules[${r.cluster}]`, {
                                    ...h,
                                    _: module495(v)
                                });
                                return e.abrupt("break", 33);
                            case 20:
                                m = globals.app.getActions({
                                    module: "nodegroups"
                                });
                                module74(globals.user, [
                                    "nodegroupRules",
                                    r.cluster,
                                    r.nodegroup
                                ], {
                                    ...h,
                                    _: module495(m, [
                                        "view",
                                        "manage"
                                    ])
                                });
                                return e.abrupt("break", 33);
                            case 23:
                                if (r.workspace !== globals.config.systemWorkspace) {
                                    e.next = 26;
                                    break;
                                }
                                module74(globals.user, `workspaceRules[${r.workspace}]`, {
                                    ...globals.config.systemWorkspaceRules
                                });
                                return e.abrupt("break", 33);
                            case 26:
                                g = globals.app.getActions({
                                    module: "workspaces"
                                });
                                module74(globals.user, `workspaceRules[${r.workspace}]`, {
                                    ...h,
                                    _: module247(g)
                                });
                                return e.abrupt("break", 33);
                            case 29:
                                y = {};
                                if (r.workspace) {
                                    y.workspace = r.workspace;
                                } else if (r.cluster) {
                                    y.cluster = r.cluster;
                                }
                                if (r.namespace) {
                                    b = globals.app.getActions({
                                        ...y,
                                        module: "projects"
                                    });
                                    if (r.workspace === globals.config.systemWorkspace) {
                                        h = globals.config.systemWorkspaceProjectRules;
                                    }
                                    module74(globals.user, `projectRules[${r.cluster || r.fedProCluster}][${r.namespace}]`, {
                                        ...h,
                                        _: module247(b)
                                    });
                                    if (r.fedProCluster) {
                                        module74(globals.user, "fedProCluster", r.fedProCluster);
                                    }
                                } else if (r.devops) {
                                    k = globals.app.getActions({
                                        ...y,
                                        module: "devops"
                                    });
                                    module74(globals.user, `devopsRules[${r.cluster}][${r.devops}]`, {
                                        ...h,
                                        _: module247(k)
                                    });
                                }
                                return e.abrupt("break", 33);
                            case 33:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e) {
                return z.apply(this, arguments);
            })
        },
        {
            key: "checkEmail",
            value: function(e) {
                return request.get(`${this.getListUrl()}`, {
                    fieldSelector: `spec.email=${e}`
                }, {
                    headers: {
                        "x-check-exist": true
                    }
                });
            }
        },
        {
            key: "update",
            value: (k = module44(module41.mark(function e(t, n) {
                let r;
                let o;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                r = t.name;
                                o = module58(t, [
                                    "name"
                                ]);
                                e.next = 3;
                                return this.submitting(request.put(this.getDetailUrl({
                                    name: r,
                                    ...o
                                }), n));
                            case 3:
                                if (!n.password || r !== globals.user.username) {
                                    e.next = 7;
                                    break;
                                }
                                e.next = 6;
                                return request.post("logout");
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 7:
                                if (module26(n, "spec.lang") && n.lang !== module201("lang")) {
                                    window.location.reload();
                                }
                            case 9:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, t) {
                return k.apply(this, arguments);
            })
        },
        {
            key: "jsonPatch",
            value: async function(t, n) {
                let r;
                r = t.name;
                await this.submitting(request.patch(`apis/iam.kubesphere.io/v1beta1/users/${r}`, n, {
                    headers: {
                        "content-type": "application/json-patch+json"
                    }
                }));
            }
        },
        {
            key: "modifyPassword",
            value: async function(t, n) {
                let r;
                r = t.name;
                return this.submitting(request.put(`${this.getDetailUrl({
                    name: r
                })}/password`, n));
            }
        },
        {
            key: "batchDelete",
            value: async function(t) {
                let n;
                let r;
                const _this = this;
                ({ rowKeys: n, ...r } = t);
                await this.submitting(Promise.all(n.map((name)=>request.delete(`${_this.getDetailUrl({
                        name,
                        ...r
                    })}`))));
                this.list.selectedRowKeys = [];
            }
        },
        {
            key: "batchChangeStatus",
            value: async function(t) {
                let n;
                let r;
                const _this = this;
                n = this.list.data.filter((e)=>_this.list.selectedRowKeys.includes(e.name));
                r = [];
                n.forEach((e)=>{
                    const n = {
                        apiVersion: "iam.kubesphere.io/v1beta1",
                        kind: "User",
                        ...module26(e, "_originData", {})
                    };
                    module74(n, "status.state", t === "active" ? "Active" : "Disabled");
                    module74(n, "metadata.resourceVersion", e.resourceVersion);
                    r.push(request.put(_this.getDetailUrl({
                        ...e
                    }), n));
                });
                await this.submitting(Promise.all(r));
                this.list.selectedRowKeys = [];
            }
        },
        {
            key: "handlechangeStatus",
            value: async function(t) {
                let n;
                n = {
                    apiVersion: "iam.kubesphere.io/v1beta1",
                    kind: "User",
                    ...module26(t, "_originData", {})
                };
                module74(n, "status.state", t.status === "Active" ? "Disabled" : "Active");
                module74(n, "metadata.resourceVersion", t.resourceVersion);
                return await this.submitting(request.put(this.getDetailUrl({
                    ...t
                }), n));
            }
        },
        {
            key: "delete",
            value: function(e) {
                return this.submitting(request.delete(`${this.getDetailUrl(e)}`));
            }
        },
        {
            key: "fetchLoginRecords",
            value: async function(t) {
                let n;
                let r;
                let o;
                let a;
                ({ name: n, ...r } = t);
                this.records.isLoading = true;
                if (!(r.limit !== Infinity && r.limit !== -1)) {
                    r.limit = -1;
                    r.page = 1;
                }
                r.limit = r.limit || 10;
                o = await request.get(`kapis/iam.kubesphere.io/v1beta1/users/${n}/loginrecords`, r);
                a = o.items.map(module105.default);
                this.records.update({
                    data: a,
                    total: o.totalItems || 0,
                    ...r,
                    limit: Number(r.limit) || 10,
                    page: Number(r.page) || 1,
                    isLoading: false
                });
            }
        },
        {
            key: "confirm",
            value: async function(t) {
                return await this.submitting(request.post("login/confirm", t));
            }
        },
        {
            key: "fetchGroupUser",
            value: async function() {
                let t;
                let n;
                let r;
                let o;
                let s;
                let u;
                const _this = this;
                const f = arguments;
                t = f.length > 0 && f[0] !== undefined ? f[0] : {};
                ({ type: n, more: r, ...o } = t);
                this[n].isLoading = true;
                if (!(o.sortBy || o.ascending !== undefined)) {
                    o.sortBy = "createTime";
                }
                s = await request.get(this.getResourceUrl(o), o);
                u = module26(s, "items", []).map((e)=>({
                        ..._this.mapper(e)
                    }));
                this[n].update({
                    data: r ? [].concat(module61(this[n].data), module61(u)) : u,
                    total: s.totalItems || 0,
                    ...o,
                    limit: Number(o.limit) || 10,
                    page: Number(o.page) || 1,
                    isLoading: false,
                    ...!this[n].silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return u;
            }
        }
    ]);
    return A;
})(module68);
u = module49(s.prototype, "roles", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
c = module49(s.prototype, "allUserStatus", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
module49(s.prototype, "fetchRules", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchRules"), s.prototype);
module49(s.prototype, "checkEmail", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "checkEmail"), s.prototype);
module49(s.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "update"), s.prototype);
module49(s.prototype, "jsonPatch", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "jsonPatch"), s.prototype);
module49(s.prototype, "modifyPassword", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "modifyPassword"), s.prototype);
module49(s.prototype, "batchDelete", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "batchDelete"), s.prototype);
module49(s.prototype, "batchChangeStatus", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "batchChangeStatus"), s.prototype);
module49(s.prototype, "handlechangeStatus", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "handlechangeStatus"), s.prototype);
module49(s.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "delete"), s.prototype);
module49(s.prototype, "fetchLoginRecords", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchLoginRecords"), s.prototype);
module49(s.prototype, "confirm", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "confirm"), s.prototype);
module49(s.prototype, "fetchGroupUser", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchGroupUser"), s.prototype);
export default s;
