import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import { safeAtob } from "utils/base64";
import { getValueObj } from "utils/yaml";
import { API_VERSIONS } from "utils/constants";
import module_68 from "stores/base";
let i;
function S(e) {
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
        const r = module51(e);
        if (t) {
            const n = module51(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return module56(this, a);
    };
}
i = ((module_68_1)=>{
    module55(p, module_68_1);
    let n;
    var i = S(p);
    function p(...a) {
        let e;
        module36(this, p);
        e = i.call(this, ...a);
        e.module = "secrets";
        return e;
    }
    module37(p, [
        {
            key: "validateImageRegistrySecret",
            value: async function(a) {
                let r;
                let cluster;
                let namespace;
                let u;
                let i;
                r = a.fedFormTemplate;
                cluster = a.cluster;
                namespace = a.namespace;
                u = a.name;
                i = {
                    validate: true,
                    reason: ""
                };
                await request.post(` kapis/resources.kubesphere.io/v1alpha3${this.getPath({
                    namespace,
                    cluster
                })}/registrysecrets/${u}/verify`, r, {}, function(e, a) {
                    const r = module26(a, "message", "");
                    if (r) {
                        i.reason = t(r);
                    }
                    i.validate = false;
                });
                return i;
            }
        },
        {
            key: "setDefault",
            value: (n = module44(module41.mark(function e(t, a) {
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (!a.name) {
                                    e.next = 3;
                                    break;
                                }
                                e.next = 3;
                                return this.patch(a, {
                                    metadata: {
                                        annotations: {
                                            "secret.kubesphere.io/is-default-class": "false"
                                        }
                                    }
                                });
                            case 3:
                                return e.abrupt("return", this.patch(t, {
                                    metadata: {
                                        annotations: {
                                            "secret.kubesphere.io/is-default-class": "true"
                                        }
                                    }
                                }));
                            case 4:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, t) {
                return n.apply(this, arguments);
            })
        },
        {
            key: "fetchListByK8s",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let module;
                let l;
                let i;
                let c;
                let s;
                const _this = this;
                const d = arguments;
                t = d.length > 0 && d[0] !== undefined ? d[0] : {};
                ({ cluster, namespace, module, ...l } = t);
                this.list.isLoading = true;
                if (module) {
                    this.module = module;
                }
                i = l;
                c = await request.get(this.getListUrl({
                    cluster,
                    namespace,
                    module
                }), i, {}, function() {
                    return {
                        items: []
                    };
                });
                s = Array.isArray(c.items) ? c.items.map((e)=>({
                        cluster,
                        module: module || _this.module,
                        config: getValueObj(safeAtob(module26(e, 'data["sink.yaml"]', ""))),
                        ..._this.mapper(e)
                    })) : [];
                this.list.update({
                    data: s,
                    total: c.items.length || 0,
                    isLoading: false
                });
                return s;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t) {
                let a;
                let r;
                this.isLoading = true;
                a = await request.get(this.getDetailUrl(t));
                r = {
                    ...t,
                    ...this.mapper(a)
                };
                r.config = getValueObj(safeAtob(module26(r._originData, 'data["sink.yaml"]', "")));
                this.detail = r;
                this.isLoading = false;
                return r;
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return API_VERSIONS[this.module];
            }
        }
    ]);
    return p;
})(module_68);
module49(i.prototype, "validateImageRegistrySecret", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "validateImageRegistrySecret"), i.prototype);
module49(i.prototype, "setDefault", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "setDefault"), i.prototype);
module49(i.prototype, "fetchListByK8s", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchListByK8s"), i.prototype);
module49(i.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(i.prototype, "fetchDetail"), i.prototype);
export default i;
