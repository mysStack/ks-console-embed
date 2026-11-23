"use strict";
require("unpacked/module-15.js");
const module20 = require("utils/babel-helpers/interopRequireDefault").default;
require("unpacked/module-5.js");
require("unpacked/module-29.js");
require("unpacked/module-16.js");
require("unpacked/module-4.js");
require("unpacked/module-23.js");
require("unpacked/module-17.js");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;
require("unpacked/module-45.js");
require("unpacked/module-5.js");
require("unpacked/module-29.js");
require("unpacked/module-42.js");
require("unpacked/module-16.js");
require("unpacked/module-4.js");
require("unpacked/module-22.js");
require("unpacked/module-23.js");
require("unpacked/module-57.js");
require("unpacked/module-17.js");
const n = module20(require("unpacked/module-41.js"));
require("unpacked/module-41.js");
let l;
let u;
const o = module20(require("utils/babel-helpers/asyncToGenerator").default);
const i = module20(require("unpacked/module-65.js").default);
const c = module20(require("unpacked/module-36.js").default);
const s = module20(require("unpacked/module-37.js").default);
const f = module20(require("unpacked/module-88.js").default);
const d = module20(require("unpacked/module-55.js").default);
const p = module20(require("utils/babel-helpers/possibleConstructorReturn").default);
const m = module20(require("unpacked/module-51.js"));
const h = module20(require("unpacked/module-49.js").default);
module20(require("utils/babel-helpers/initializerWarningHelper").default);
const module14 = require("unpacked/module-14.js");
const module52 = require("utils/index");
const y = module20(require("stores/volumeSnapshot"));
function E(e) {
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
        const r = m.default(e);
        if (t) {
            const n = m.default(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return p.default(this, a);
    };
}
l = ((e)=>{
    d.default(m, e);
    var p = E(m);
    function m(...a) {
        let e;
        c.default(this, m);
        e = p.call(this, ...a);
        i.default(e, "mountedPods", u, f.default(e));
        e.module = "persistentvolumeclaims";
        e.snapshotType = [];
        return e;
    }
    s.default(m, [
        {
            key: "getSnapshotType",
            value: async function(t) {
                this.snapshotType = await request.get(`clusters/${t.cluster}/kapis/snapshot.storage.k8s.io/v1/volumesnapshotclasses`);
            }
        },
        {
            key: "fetchVolumeMountStatus",
            value: async function() {
                let t;
                let a;
                let r;
                let l;
                let u;
                let o;
                const _this = this;
                t = this.detail;
                a = t.name;
                r = t.namespace;
                l = await module52.to(request.get(this.getResourceUrl({
                    namespace: r
                }), {
                    name: a
                }));
                u = l.items || [];
                o = u.find((e)=>_this.mapper(e).name === a) || {};
                this.detail.inUse = this.mapper(o).inUse;
            }
        },
        {
            key: "cloneVolume",
            value: async function(t) {
                let a;
                let r;
                let l;
                let u;
                let o;
                let accessModes;
                let storage;
                let storageClassName;
                let f;
                let d;
                a = t.name;
                r = this.detail;
                l = r.cluster;
                u = r.namespace;
                o = r.name;
                accessModes = r.accessModes;
                storage = r.capacity;
                storageClassName = r.storageClassName;
                f = {
                    apiVersion: "v1",
                    kind: this.resourceKind,
                    metadata: {
                        name: a
                    },
                    spec: {
                        accessModes,
                        resources: {
                            requests: {
                                storage
                            }
                        },
                        dataSource: {
                            kind: this.resourceKind,
                            name: o
                        },
                        storageClassName
                    }
                };
                d = this.getListUrl({
                    cluster: l,
                    namespace: u
                });
                await this.submitting(request.post(d, f));
            }
        },
        {
            key: "createSnapshot",
            value: async function(t) {
                let a;
                let volumeSnapshotClassName;
                let l;
                let u;
                let o;
                let i;
                let persistentVolumeClaimName;
                let s;
                let f;
                a = t.name;
                volumeSnapshotClassName = t.type;
                l = new y.default;
                u = this.detail;
                o = u.cluster;
                i = u.namespace;
                persistentVolumeClaimName = u.name;
                s = l.getListUrl({
                    cluster: o,
                    namespace: i
                });
                f = {
                    apiVersion: "snapshot.storage.k8s.io/v1",
                    kind: l.resourceKind,
                    metadata: {
                        name: a
                    },
                    spec: {
                        volumeSnapshotClassName,
                        source: {
                            kind: this.resourceKind,
                            persistentVolumeClaimName
                        }
                    }
                };
                await this.submitting(request.post(s, f));
            }
        },
        {
            key: "resourceKind",
            get: function() {
                return "PersistentVolumeClaim";
            }
        }
    ]);
    return m;
})(module20(require("stores/base")).default);
u = h.default(l.prototype, "mountedPods", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: [],
            isLoading: true
        };
    }
});
exports.default = l;
