import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module903 from "unpacked/module-903.js";
let u;
let o;
let i;
let c;
let s;
u = (()=>{
    function e(t) {
        const _this = this;
        module36(this, e);
        this.username = module26(globals, "user.username", "");
        module65(this, "kubectl", o, this);
        module65(this, "kubeconfig", i, this);
        module65(this, "connected", c, this);
        module65(this, "setNodename", s, this);
        this.reject = function(e) {
            _this.kubectl.isLoading = false;
            window.onunhandledrejection(e);
        };
        module903(this.kubectl, t);
    }
    let r;
    module37(e, [
        {
            key: "getClusterPath",
            value: function({ cluster } = {}) {
                if (cluster) {
                    return `/klusters/${cluster}`;
                }
                return "";
            }
        },
        {
            key: "kubeWebsocketUrl",
            value: (r = module44(module41.mark(function e() {
                let t;
                let cluster;
                let r;
                let n;
                let u;
                let o;
                let c;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                t = this.kubectl;
                                ({ cluster, namespace: r, nodename: n, pod: u, container: o, shell: c = "sh" } = t);
                                if (!n) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return", `kapis/terminal.kubesphere.io/v1alpha2${this.getClusterPath({
                                    cluster
                                })}/nodes/${n}/exec`);
                            case 3:
                                e.next = 5;
                                return request.get(`kapis/terminal.kubesphere.io/v1alpha2${this.getClusterPath({
                                    cluster
                                })}/namespaces/${r}/pods/${u}/exec?container=${o}&shell=${c}`, null, null, function(e) {
                                    return e.status !== 404;
                                });
                            case 5:
                                if (e.sent) {
                                    e.next = 8;
                                    break;
                                }
                                return e.abrupt("return", `kapis/terminal.kubesphere.io/v1alpha2${this.getClusterPath({
                                    cluster
                                })}/namespaces/${r}/pods/${u}?container=${o}&shell=${c}`);
                            case 8:
                                return e.abrupt("return", `kapis/terminal.kubesphere.io/v1alpha2${this.getClusterPath({
                                    cluster
                                })}/namespaces/${r}/pods/${u}/exec?container=${o}&shell=${c}`);
                            case 9:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return r.apply(this, arguments);
            })
        },
        {
            key: "fetchKubeCtl",
            value: async function(t) {
                let cluster;
                cluster = t.cluster;
                this.kubectl.isLoading = true;
                this.kubectl = {
                    ...this.kubectl,
                    cluster,
                    isLoading: false
                };
            }
        },
        {
            key: "fetchKubeConfig",
            value: async function(t) {
                let a;
                a = await request.get(`kapis/resources.kubesphere.io/v1alpha2${this.getClusterPath(t)}/users/${this.username}/kubeconfig`);
                this.kubeconfig = a;
            }
        },
        {
            key: "connect",
            value: function() {
                this.connected = true;
            }
        },
        {
            key: "disconnect",
            value: function() {
                this.connected = false;
            }
        }
    ]);
    return e;
})();
o = module49(u.prototype, "kubectl", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            cluster: "",
            namespace: "",
            pod: "",
            container: "",
            nodename: "",
            shell: "bash",
            isLoading: true
        };
    }
});
i = module49(u.prototype, "kubeconfig", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
c = module49(u.prototype, "connected", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
module49(u.prototype, "fetchKubeCtl", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchKubeCtl"), u.prototype);
s = module49(u.prototype, "setNodename", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.kubectl.nodename = t;
        };
    }
});
module49(u.prototype, "fetchKubeConfig", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchKubeConfig"), u.prototype);
module49(u.prototype, "connect", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "connect"), u.prototype);
module49(u.prototype, "disconnect", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "disconnect"), u.prototype);
export default u;
