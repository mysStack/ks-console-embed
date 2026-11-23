import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module41 from "./module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module435 from "utils/form.templates";
import module456 from "stores/s2i/builder";
import module2597 from "./module-2597.js";
let u;
let o;
u = ((e)=>{
    module55(r, e);
    let t;
    var a = ((e)=>{
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
    })(r);
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.runStore = new module2597;
        e.getListUrl = function(t = {}) {
            return `/${e.apiVersion}${e.getPath(t)}/${e.module}${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getWatchListUrl = function(t = {}) {
            return `/${e.apiVersion}/watch${e.getPath(t)}/${e.module}`;
        };
        e.getResourceUrl = function(t = {}) {
            return `/kapis/resources.kubesphere.io/v1alpha3${e.getPath(t)}/${e.module}`;
        };
        e.getBuilderTemplate = async (a)=>await request.get(`/apis/devops.kubesphere.io/v1alpha1${e.getPath(a)}/s2ibuildertemplates`);
        module65(e, "fetchDetail", o, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "creatBinary",
            value: function(e, t, a) {
                const r = module435.b2iBuilders({
                    name: e,
                    namespace: t
                });
                return request.post(`/apis/devops.kubesphere.io/v1alpha1${this.getPath({
                    namespace: t,
                    cluster: a
                })}/s2ibinaries/${e}`, r);
            }
        },
        {
            key: "verifyRepoReadable",
            value: (t = module44(module41.mark(function e(remoteUrl, a, r, n) {
                let u;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (remoteUrl) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");
                            case 2:
                                u = a ? {
                                    remoteUrl,
                                    secretRef: {
                                        name: a,
                                        namespace: r
                                    }
                                } : {
                                    remoteUrl
                                };
                                e.next = 5;
                                return request.post(`/kapis/resources.kubesphere.io/v1alpha2${this.getPath({
                                    cluster: n
                                })}git/verify`, u, {}, function(e) {
                                    const message = module26(e, "message", "");
                                    if (message) {
                                        return Promise.resolve({
                                            message
                                        });
                                    }
                                    return Promise.reject(e);
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function(e, a, r, n) {
                return t.apply(this, arguments);
            })
        }
    ]);
    return r;
})(module456);
o = module49(u.prototype, "fetchDetail", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            let n;
            let u;
            let o;
            r = a.cluster;
            n = a.namespace;
            u = a.name;
            _this.isLoading = true;
            o = await request.get(`/apis/devops.kubesphere.io/v1alpha1${_this.getPath({
                namespace: n
            })}/s2ibuilders/${u}`, undefined, undefined, function(e) {
                if (e.reason === "NotFound") {
                    return e;
                }
                Promise.reject(e);
            });
            _this.detail = _this.mapper(o);
            _this.detail.cluster = r;
            _this.isLoading = false;
            return _this.detail;
        };
    }
});
export default u;
