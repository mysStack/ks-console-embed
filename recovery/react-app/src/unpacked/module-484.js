import "./module-15.js";
import "./module-5.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module14 from "./module-14.js";
import module_68 from "stores/base";
let o;
o = ((module_68_1)=>{
    module55(n, module_68_1);
    var t = ((e)=>{
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
    })(n);
    function n(...o) {
        let e;
        module36(this, n);
        e = t.call(this, ...o);
        e.module = "edgeapptemplate";
        return e;
    }
    module37(n, [
        {
            key: "getCluster",
            value: function(e) {
                if (e) {
                    return `?cluster=${e}&create=1`;
                }
                return "?create=1";
            }
        },
        {
            key: "createInstance",
            value: function({ cluster = "", namespace } = {}, o) {
                const a = `/kapis/application.kubesphere.io/v2/${namespace ? `namespaces/${namespace}/` : ""}applications${this.getCluster(cluster)}`;
                return this.submitting(request.post(a, o));
            }
        },
        {
            key: "createTemplate",
            value: function({ cluster, appName, workspace }, t) {
                let a = `/kapis/application.kubesphere.io/v2/apps${this.getCluster(cluster)}`;
                if (workspace) {
                    a = `/kapis/application.kubesphere.io/v2/workspaces/${workspace}/apps?create=1`;
                }
                if (appName) {
                    a = `/kapis/application.kubesphere.io/v2/apps/${appName}/versions${this.getCluster(cluster)}`;
                }
                return this.submitting(request.post(a, t));
            }
        },
        {
            key: "getVersionList",
            value: function(e) {
                const t = `/kapis/application.kubesphere.io/v2/apps/${e}/versions`;
                return this.submitting(request.get(t));
            }
        },
        {
            key: "getEdgeFiles",
            value: function({ appName, versionId }) {
                const r = `/kapis/application.kubesphere.io/v2/apps/${appName}/versions/${versionId}/files`;
                return this.submitting(request.get(r));
            }
        }
    ]);
    return n;
})(module_68);
module49(o.prototype, "createInstance", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "createInstance"), o.prototype);
module49(o.prototype, "createTemplate", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "createTemplate"), o.prototype);
module49(o.prototype, "getVersionList", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "getVersionList"), o.prototype);
module49(o.prototype, "getEdgeFiles", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "getEdgeFiles"), o.prototype);
export default o;
