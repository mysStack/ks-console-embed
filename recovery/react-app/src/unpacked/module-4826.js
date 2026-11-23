import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-27.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-245.js";
import "unpacked/module-442.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import module61 from "unpacked/module-61.js";
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
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import module68 from "stores/base";
import { getStatusFromYaml } from "unpacked/module-1016.js";
import { kafkaYaml } from "unpacked/module-1093.js";
let l;
l = ((e)=>{
    module55(r, e);
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.getListUrl = function({ cluster, namespace, id }) {
            return `/apis${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/kafka.strimzi.io/v1beta2/namespaces/${namespace}/kafkarebalances${id ? `?labelSelector=strimzi.io/cluster=${id}` : ""}`;
        };
        e.getResourceUrl = e.getListUrl;
        e.statusMap = {
            "True-Ready": "Success",
            "True-NotReady": "Failed"
        };
        e.statusNameMap = {
            Success: "REBALANCE_SUCCESS",
            Failed: "REBALANCE_FAILED",
            Creating: "REBALANCING"
        };
        return e;
    }
    module37(r, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let c;
                let id;
                let i;
                let u;
                let d;
                let total;
                const _this = this;
                const m = arguments;
                t = m.length > 0 && m[0] !== undefined ? m[0] : {};
                cluster = t.cluster;
                t.workspace;
                namespace = t.namespace;
                c = t.more;
                id = t.id;
                i = module58(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "id"
                ]);
                this.list.isLoading = true;
                i.sortBy = "createTime";
                if (!(i.limit !== Infinity && i.limit !== -1)) {
                    i.limit = -1;
                    i.page = 1;
                }
                i.limit = i.limit || 10;
                u = await request.get(this.getResourceUrl({
                    cluster,
                    namespace,
                    id
                }));
                d = (module26(u, "items") || []).reverse().slice(0, 3).map((e)=>{
                    const status = _this.statusMap[getStatusFromYaml(e)] || "Creating";
                    return {
                        cluster,
                        namespace,
                        status,
                        name: module26(e, "metadata.name"),
                        creationTimestamp: module26(e, "metadata.creationTimestamp"),
                        statusName: _this.statusNameMap[status]
                    };
                });
                total = Number(u.total || d.length);
                this.list.update({
                    data: c ? [].concat(module61(this.list.data), module61(d)) : d,
                    total,
                    ...i,
                    limit: Number(i.limit) || 10,
                    page: Number(i.page) || 1,
                    isLoading: false,
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return d;
            }
        },
        {
            key: "getYamlFromData",
            value: function(e) {
                const t = JSON.parse(JSON.stringify(kafkaYaml.rebalance));
                module74(t, "metadata.name", `${e}-${Date.now()}`);
                module74(t, 'metadata.labels["strimzi.io/cluster"]', e);
                return t;
            }
        },
        {
            key: "create",
            value: function(e) {
                const t = {
                    ...e
                };
                const a = this.getYamlFromData(t.id);
                delete t.id;
                return request.post(this.getListUrl(t), a);
            }
        }
    ]);
    return r;
})(module68);
module49(l.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "fetchList"), l.prototype);
module49(l.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(l.prototype, "create"), l.prototype);
export default l;
