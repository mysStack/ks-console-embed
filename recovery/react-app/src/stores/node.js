"use strict";
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-12.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-84.js");
require("unpacked/module-30.js").default;
require("unpacked/module-18.js");
require("unpacked/module-16.js");
require("unpacked/module-27.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
require("unpacked/module-85.js");
require("unpacked/module-38.js");
require("unpacked/module-7.js");
require("unpacked/module-32.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-12.js");
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-11.js");
require("unpacked/module-6.js");
require("unpacked/module-84.js");
require("unpacked/module-30.js").default;
require("unpacked/module-18.js");
require("unpacked/module-28.js");
require("unpacked/module-42.js");
require("unpacked/module-16.js");
require("unpacked/module-27.js");
require("unpacked/module-34.js");
require("unpacked/module-15.js");
require("unpacked/module-9.js");
require("unpacked/module-13.js");
require("unpacked/module-10.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
require("unpacked/module-85.js");
require("unpacked/module-38.js");
require("unpacked/module-7.js");
require("unpacked/module-32.js");
const n = module20(require("unpacked/module-41.js"));
const l = module20(require("unpacked/module-61.js").default);
const u = module20(require("unpacked/module-58.js").default);
require("unpacked/module-41.js");
let o;
let i;
let c;
let s;
let f;
let d;
const p = module20(require("utils/babel-helpers/asyncToGenerator").default);
const m = module20(require("unpacked/module-31.js").default);
const h = module20(require("unpacked/module-65.js").default);
const v = module20(require("unpacked/module-36.js").default);
const g = module20(require("unpacked/module-37.js").default);
const y = module20(require("unpacked/module-88.js").default);
const E = module20(require("unpacked/module-55.js").default);
const b = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const _ = module20(require("unpacked/module-51.js"));
const O = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const module444 = require("utils/node");
const D = module20(require("unpacked/module-26.js").default);
const k = module20(require("unpacked/module-189.js").default);
const module72 = require("utils/constants");
function I(e) {
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
        const r = _.default(e);
        if (t) {
            const n = _.default(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return b.default(this, a);
    };
}
o = ((e)=>{
    E.default(S, e);
    var O = I(S);
    function S(...a_1) {
        let e;
        v.default(this, S);
        e = O.call(this, ...a_1);
        h.default(e, "nodesMetrics", i, y.default(e));
        h.default(e, "nodeMetrics", c, y.default(e));
        h.default(e, "masterNum", s, y.default(e));
        h.default(e, "masterCount", f, y.default(e));
        h.default(e, "masterWorkerCount", d, y.default(e));
        e.module = "nodes";
        e.withTypeSelectParams = function(e, t) {
            const a = {
                ...e
            };
            if (t === "node") {
                a.labelSelector = a.labelSelector ? ",!node-role.kubernetes.io/edge" : "!node-role.kubernetes.io/edge";
            } else if (t === "edgenode") {
                a.labelSelector = a.labelSelector ? ",node-role.kubernetes.io/edge=" : "node-role.kubernetes.io/edge=";
            }
            if (a.role) {
                a.labelSelector += `,node-role.kubernetes.io/${e.role}=`;
                delete a.role;
            }
            if (a.nodeGroup) {
                a.labelSelector += `,apps.edgewize.io/nodegroup in (${a.nodeGroup})`;
            }
            delete a.nodeGroup;
            return a;
        };
        return e;
    }
    g.default(S, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let workspace;
                let namespace;
                let i;
                let devops;
                let f;
                let d;
                let p;
                let m;
                const _this = this;
                const v = arguments;
                t = v.length > 0 && v[0] !== undefined ? v[0] : {};
                ({ cluster, workspace, namespace, more: i, devops, type: f = "node" } = t);
                d = u.default(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "devops",
                    "type"
                ]);
                this.list.isLoading = true;
                if (!(d.sortBy || d.ascending !== undefined)) {
                    d.sortBy = module72.LIST_DEFAULT_ORDER[this.module] || "createTime";
                }
                if (!(d.limit !== Infinity && d.limit !== -1)) {
                    d.limit = -1;
                    d.page = 1;
                }
                d.limit = d.limit || 10;
                p = await request.get(this.getResourceUrl({
                    cluster,
                    workspace,
                    devops
                }), this.withTypeSelectParams(d, f));
                m = (D.default(p, "items") || []).map((e)=>({
                        cluster,
                        namespace,
                        ...e,
                        ..._this.mapper(e)
                    }));
                this.list.update({
                    data: i ? [].concat(l.default(this.list.data), l.default(m)) : m,
                    total: p.totalItems || p.total_count || m.length || 0,
                    ...k.default(d, "labelSelector"),
                    limit: Number(d.limit) || 10,
                    page: Number(d.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return m;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(`${this.getResourceUrl(t)}/${t.name}`);
                r = {
                    ...t,
                    ...this.mapper(a),
                    kind: "Node"
                };
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "fetchCount",
            value: async function(t) {
                let a;
                let r;
                a = await request.get(this.getResourceUrl(t), {
                    labelSelector: "node-role.kubernetes.io/master"
                });
                r = a.items.filter((e)=>module444.getNodeRoles(e.metadata.labels).includes("worker")).length;
                this.masterNum = a.items.filter((e)=>{
                    const t = module444.getNodeRoles(e.metadata.labels);
                    return t.includes("master") || t.includes("control-plane");
                }).length;
                this.masterCount = a.totalItems;
                this.masterWorkerCount = r;
            }
        },
        {
            key: "batchPatchTaints",
            value: async function(t) {
                const _this = this;
                await this.submitting(Promise.all(t.map((e)=>{
                    const e_taints = e.taints;
                    return request.patch(_this.getDetailUrl(e), {
                        spec: {
                            taints: e_taints
                        }
                    });
                })));
            }
        },
        {
            key: "cordon",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                a = t.cluster;
                r = t.name;
                l = {
                    spec: {
                        unschedulable: true
                    }
                };
                u = await request.patch(this.getDetailUrl({
                    cluster: a,
                    name: r
                }), l);
                this.detail = this.mapper(u);
                this.originDetail = u;
            }
        },
        {
            key: "uncordon",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                a = t.cluster;
                r = t.name;
                l = {
                    spec: {
                        unschedulable: null
                    }
                };
                u = await request.patch(this.getDetailUrl({
                    cluster: a,
                    name: r
                }), l);
                this.detail = this.mapper(u);
                this.originDetail = u;
            }
        },
        {
            key: "deleteSelected",
            value: async function(t) {
                const _this = this;
                await Promise.all(t.map((e)=>{
                    const t = _this.list.data[e];
                    if (t.role === "master") {
                        return null;
                    }
                    return request.delete(_this.getDetailUrl(t), {
                        orphanDependents: false
                    });
                }));
                this.list.selectedRowKeys = [];
            }
        }
    ]);
    return S;
})(module20(require("stores/base")).default);
i = O.default(o.prototype, "nodesMetrics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
c = O.default(o.prototype, "nodeMetrics", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
s = O.default(o.prototype, "masterNum", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
f = O.default(o.prototype, "masterCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
d = O.default(o.prototype, "masterWorkerCount", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 0;
    }
});
O.default(o.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchList"), o.prototype);
O.default(o.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchDetail"), o.prototype);
O.default(o.prototype, "fetchCount", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchCount"), o.prototype);
O.default(o.prototype, "batchPatchTaints", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "batchPatchTaints"), o.prototype);
O.default(o.prototype, "cordon", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "cordon"), o.prototype);
O.default(o.prototype, "uncordon", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "uncordon"), o.prototype);
O.default(o.prototype, "deleteSelected", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "deleteSelected"), o.prototype);
exports.default = o;
