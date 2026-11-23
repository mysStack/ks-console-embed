import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module332 from "utils/babel-helpers/get";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module26 from "unpacked/module-26.js";
import module198 from "unpacked/module-198.js";
import module14 from "unpacked/module-14.js";
import module68 from "stores/base";
import { getTransformData, transformEmptyFn, withDryRun } from "utils/index";
import { MODULE_KIND_MAP } from "utils/constants";
import module443 from "stores/service";
import module469 from "stores/workload/hpa";
let l;
function O(e) {
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
l = ((e)=>{
    module55(h, e);
    var l = O(h);
    function h(e) {
        let t;
        module36(this, h);
        t = l.call(this, e);
        t.transform = getTransformData.apply(undefined, module61([
            "spec.template.spec.terminationGracePeriodSeconds"
        ].map(transformEmptyFn)));
        t.getServiceRequest = function(e, t) {
            const n = new module443;
            t.namespace = t.namespace || module26(e, "metadata.namespace");
            return {
                url: n.getListUrl(t),
                data: e
            };
        };
        t.getWorkloadRequest = function(e, n, r) {
            n.namespace = n.namespace || module26(e, "metadata.namespace");
            return {
                url: t.getListUrl(n, r),
                data: t.transform(e)
            };
        };
        t.hpaStore = new module469;
        return t;
    }
    module37(h, [
        {
            key: "create",
            value: async function(t, n, r) {
                let a;
                const o = [];
                if (module198(t, "metadata")) {
                    o.push(this.getWorkloadRequest(t, n, r));
                } else {
                    a = MODULE_KIND_MAP[this.module];
                    o.push(this.getWorkloadRequest(t[a], n, r));
                    if (module198(t, "Service")) {
                        o.push(this.getServiceRequest(t.Service, n));
                    }
                }
                return this.submitting(withDryRun(o));
            }
        },
        {
            key: "update",
            value: async function(t, n, r) {
                let o;
                o = this.transform(n);
                return module332(module51(h.prototype), "update", this).call(this, t, o, r);
            }
        },
        {
            key: "delete",
            value: function({ name, cluster, namespace, annotations }, t) {
                const i = [];
                const l = (annotations === undefined ? {} : annotations)["kubesphere.io/relatedHPA"];
                if (l) {
                    i.push(this.hpaStore.delete({
                        name: l,
                        cluster,
                        namespace
                    }, t));
                }
                i.push(request.delete(this.getDetailUrl({
                    name,
                    cluster,
                    namespace
                }, t), {
                    kind: "DeleteOptions",
                    apiVersion: "v1",
                    propagationPolicy: "Background"
                }));
                return this.submitting(Promise.all(i));
            }
        },
        {
            key: "batchDelete",
            value: function(e) {
                const _this = this;
                const n = [];
                e.forEach((e)=>{
                    const r = _this.list.data.find((t)=>t.name === e);
                    n.push(request.delete(_this.getDetailUrl(r), {
                        kind: "DeleteOptions",
                        apiVersion: "v1",
                        propagationPolicy: "Background"
                    }));
                    const o = module26(r, "annotations['kubesphere.io/relatedHPA']");
                    if (o) {
                        n.push(_this.hpaStore.delete({
                            name: o,
                            namespace: r.namespace
                        }));
                    }
                });
                return this.submitting(Promise.all(n));
            }
        },
        {
            key: "scale",
            value: function(e, replicas) {
                const n = {
                    spec: {
                        replicas
                    }
                };
                return this.submitting(request.patch(this.getDetailUrl(e), n));
            }
        },
        {
            key: "rerun",
            value: async function(t) {
                let n;
                let cluster;
                let namespace;
                let a;
                let l;
                n = t.name;
                cluster = t.cluster;
                namespace = t.namespace;
                a = await request.get(this.getDetailUrl({
                    name: n,
                    cluster,
                    namespace
                }));
                l = module26(a, "metadata.resourceVersion");
                return this.submitting(request.post(`kapis/operations.kubesphere.io/v1alpha2${this.getPath({
                    cluster,
                    namespace
                })}/jobs/${n}?action=rerun&resourceVersion=${l}`));
            }
        },
        {
            key: "switch",
            value: function(e, _param_1, n = "") {
                const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
                const r = {
                    spec: {
                        suspend: !t
                    }
                };
                return this.submitting(request.patch(this.getDetailUrl(e, n), r));
            }
        },
        {
            key: "rollBack",
            value: function({ module, ...rest }, t) {
                return this.submitting(request.patch(this.getDetailUrl(rest), t, module === "deployments" ? {
                    headers: {
                        "content-type": "application/json-patch+json"
                    }
                } : null));
            }
        },
        {
            key: "stop",
            value: function({ name, cluster, namespace }) {
                const o = [];
                const a = this.module === "daemonsets" ? {
                    spec: {
                        template: {
                            spec: {
                                nodeSelector: {
                                    "non-existing": "true"
                                }
                            }
                        }
                    }
                } : {
                    spec: {
                        replicas: 0
                    }
                };
                o.push(request.patch(this.getDetailUrl({
                    name,
                    cluster,
                    namespace
                }), a));
                return this.submitting(Promise.all(o));
            }
        },
        {
            key: "getReplica",
            value: async function(t) {
                let n;
                let r;
                n = await request.get(this.getDetailUrl(t));
                r = {
                    ...t,
                    ...this.mapper(n)
                };
                return r;
            }
        }
    ]);
    return h;
})(module68);
module49(l.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "create"), l.prototype);
module49(l.prototype, "update", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "update"), l.prototype);
module49(l.prototype, "delete", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "delete"), l.prototype);
module49(l.prototype, "batchDelete", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "batchDelete"), l.prototype);
module49(l.prototype, "scale", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "scale"), l.prototype);
module49(l.prototype, "rerun", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "rerun"), l.prototype);
module49(l.prototype, "switch", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "switch"), l.prototype);
module49(l.prototype, "rollBack", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "rollBack"), l.prototype);
module49(l.prototype, "stop", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "stop"), l.prototype);
export default l;
