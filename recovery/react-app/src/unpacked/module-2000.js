import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import module58 from "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { getContainerEngineSofts, getEdgeSofts, getNodeSpecification } from "unpacked/module-983.js";
import module_1038 from "unpacked/module-1038.js";
let u;
u = ((module_1038_1)=>{
    module55(o, module_1038_1);
    var n = ((e)=>{
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(o);
    function o() {
        module36(this, o);
        return n.apply(this, arguments);
    }
    module37(o, [
        {
            key: "mapper",
            value: function(t = {}) {
                const status = module26(t, "nodeStatus", "");
                const createTime = module26(t, "createTime", "");
                const agentUpdateTime = module26(t, "agentUpdateTime", "");
                const o = module26(t, "agentInfo.modules.nodeInfo", {});
                const taskList = module26(t, "taskList.tasks", []);
                const { alias, nodeIP, hostName, description, systemHardInfo } = o;
                const versionList = module26(t, "agentInfo.modules.nodeInfo.tags.versionList", {});
                const osType = module26(systemHardInfo, "os", "");
                const arch = module26(systemHardInfo, "arch", "");
                const osVersion = module26(systemHardInfo, "osVersion", "");
                const timesync = module26(systemHardInfo, "timesync", "");
                const kernelVersion = module26(systemHardInfo, "kernelRelease", "");
                const b = (module26(o, "systemSoftInfo.softInfo", []) ?? []).filter((e)=>e.installationStatus !== "uninstalled");
                const containerEngineSofts = getContainerEngineSofts(b);
                const edgeSofts = getEdgeSofts(b);
                return {
                    name: hostName,
                    arch,
                    alias,
                    status,
                    nodeIP,
                    osType,
                    taskList,
                    timesync,
                    edgeSofts,
                    osVersion,
                    createTime,
                    description,
                    versionList,
                    kernelVersion,
                    agentUpdateTime,
                    containerEngineSofts,
                    specification: module63(systemHardInfo) ? "-" : getNodeSpecification(systemHardInfo)
                };
            }
        },
        {
            key: "fetchList",
            value: async function() {
                let a;
                let n;
                let o;
                let l;
                let s;
                let d;
                let f;
                let p;
                const _this = this;
                const g = arguments;
                a = g.length > 0 && g[0] !== undefined ? g[0] : {};
                ({ silentLoading: n, cluster: o, limit: l = 10, page: s = 1 } = a);
                d = module58(a, [
                    "silentLoading",
                    "cluster",
                    "limit",
                    "page"
                ]);
                if (!(!(g.length > 1 ? g[1] : undefined) && n)) {
                    this.list.isLoading = true;
                }
                if (l === Infinity || l === -1) {
                    d.limit = -1;
                    d.page = 1;
                } else {
                    d.limit = l;
                    d.page = s;
                }
                f = await request.get(`${this.apiVersion}${this.getPath({
                    cluster: o
                })}/${this.module}`, d);
                p = module26(f, "data.items", []).map((e)=>({
                        ..._this.mapper(e),
                        cluster: o
                    }));
                this.list.update({
                    data: p,
                    total: f?.data?.totalItems,
                    limit: Number(d.limit),
                    page: Number(d.page),
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return p;
            }
        },
        {
            key: "fetchDetail",
            value: async function(t, a) {
                let n;
                let nodeName;
                let i;
                let u;
                let l;
                let c;
                n = t.cluster;
                nodeName = t.name;
                if (a) {
                    this.isLoading = true;
                }
                i = {
                    limit: 10,
                    page: 1,
                    nodeName
                };
                u = await request.get(`${this.apiVersion}${this.getPath({
                    cluster: n
                })}/${this.module}`, i);
                l = module26(u, "data.items.[0]");
                c = {
                    ...this.mapper(l),
                    cluster: n
                };
                this.detail = c;
                this.isLoading = false;
                return c;
            }
        },
        {
            key: "nodeRegister",
            value: function(e) {
                const t = `${this.apiVersion}${this.getPath({
                    cluster: e.clusterName
                })}/${this.module}/register`;
                return this.submitting(request.post(t, e));
            }
        },
        {
            key: "patchNode",
            value: function(e, t) {
                const a = `${this.apiVersion}${this.getPath({
                    cluster: e
                })}/${this.module}/tasks`;
                return request.post(a, t);
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "kapis/ota.edgewize.io/v1alpha1";
            }
        }
    ]);
    return o;
})(module_1038);
module49(u.prototype, "mapper", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "mapper"), u.prototype);
module49(u.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchList"), u.prototype);
module49(u.prototype, "fetchDetail", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "fetchDetail"), u.prototype);
module49(u.prototype, "nodeRegister", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "nodeRegister"), u.prototype);
module49(u.prototype, "patchNode", [
    module14.action
], Object.getOwnPropertyDescriptor(u.prototype, "patchNode"), u.prototype);
export default u;
