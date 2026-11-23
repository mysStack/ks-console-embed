import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module844 from "unpacked/module-844.js";
import { safeAtob } from "utils/base64";
let o;
let i;
let c;
o = (()=>{
    function e() {
        module36(this, e);
        module65(this, "list", i, this);
        module65(this, "variables", c, this);
    }
    module37(e, [
        {
            key: "getPath",
            value: function({ cluster, namespace } = {}) {
                let r = "";
                if (cluster) {
                    r += `/klusters/${cluster}`;
                }
                if (namespace) {
                    r += `/namespaces/${namespace}`;
                }
                return r;
            }
        },
        {
            key: "fetchList",
            value: async function(t) {
                let a;
                let r;
                let o;
                let c;
                let s;
                let f;
                const _this = this;
                ({ cluster: a, namespace: r, containers: o = [], initContainers: c = [] } = t);
                this.list.isLoading = true;
                o = module844(o) ? [] : o;
                c = module844(c) ? [] : c;
                s = [].concat(module61(c.map((e)=>({
                        ...e,
                        type: "init"
                    }))), module61(o.map((e)=>({
                        ...e,
                        type: "work"
                    }))));
                f = await Promise.all(s.map((e)=>{
                    e.cluster = a;
                    e.namespace = r;
                    return _this.fetchVariables(e);
                }));
                this.list = {
                    data: f,
                    isLoading: false
                };
            }
        },
        {
            key: "fetchVariables",
            value: async function(t) {
                let cluster;
                let namespace;
                let l;
                let u;
                let o;
                let i;
                let c;
                const _this = this;
                this.variables.isLoading = true;
                cluster = t.cluster;
                namespace = t.namespace;
                l = t.env;
                u = [];
                o = [];
                (l === undefined ? [] : l).forEach((e)=>{
                    if ("valueFrom" in e) {
                        const t = e.valueFrom;
                        const { secretKeyRef, configMapKeyRef } = t;
                        if (secretKeyRef) {
                            o.push({
                                name: e.name,
                                key: secretKeyRef.key
                            });
                            u.push(request.get(`api/v1${_this.getPath({
                                cluster,
                                namespace
                            })}/secrets/${secretKeyRef.name}`));
                        }
                        if (configMapKeyRef) {
                            o.push({
                                name: e.name,
                                key: configMapKeyRef.key
                            });
                            u.push(request.get(`api/v1${_this.getPath({
                                cluster,
                                namespace
                            })}/configmaps/${configMapKeyRef.name}`));
                        }
                    } else {
                        o.push(e);
                        u.push(e.value || "");
                    }
                });
                i = await Promise.all(u);
                c = o.map((e, t)=>{
                    const a = i[t];
                    if (a.kind === "Secret" && e.key) {
                        return {
                            name: e.name,
                            value: safeAtob(module26(a.data, e.key, ""))
                        };
                    }
                    if (a.kind === "ConfigMap" && e.key) {
                        return {
                            name: e.name,
                            value: module26(a.data, e.key, "")
                        };
                    }
                    return {
                        value: "",
                        ...e
                    };
                });
                this.variables = {
                    data: c,
                    isLoading: false
                };
                t.variables = c;
                return t;
            }
        }
    ]);
    return e;
})();
i = module49(o.prototype, "list", [
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
c = module49(o.prototype, "variables", [
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
module49(o.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchList"), o.prototype);
module49(o.prototype, "fetchVariables", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "fetchVariables"), o.prototype);
export default o;
