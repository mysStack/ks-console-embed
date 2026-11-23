import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import module58 from "./module-58.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import module68 from "./module-68.js";
import { getStatusFromYaml } from "./module-1016.js";
import { kafkaYaml } from "./module-1093.js";
let s;
let l;
s = ((e)=>{
    module55(o, e);
    var r = ((e)=>{
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
    })(o);
    function o(...a_1) {
        let e;
        module36(this, o);
        e = r.call(this, ...a_1);
        module65(e, "targetsMetadata", l, module88(e));
        e.statusMap = {
            "True-Ready": "Success",
            "True-NotReady": "Failed"
        };
        e.getWatchListUrl = function({ cluster_id, cluster, namespace }) {
            return `/apis${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/kafka.strimzi.io/v1beta2/watch/namespaces/${namespace}/kafkatopics?labelSelector=strimzi.io/cluster=${cluster_id}`;
        };
        e.getListUrl = function({ cluster, namespace, id }) {
            return `/apis${globals.app.isMultiCluster && cluster ? `/clusters/${cluster}` : ""}/kafka.strimzi.io/v1beta2/namespaces/${namespace}/kafkatopics${id ? `?labelSelector=strimzi.io/cluster=${id}` : ""}`;
        };
        e.getResourceUrl = e.getListUrl;
        return e;
    }
    module37(o, [
        {
            key: "fetchList",
            value: async function() {
                let t;
                let cluster;
                let namespace;
                let id;
                let s;
                let i;
                let d;
                let keyword;
                let p;
                let m;
                let total;
                const _this = this;
                const g = arguments;
                t = g.length > 0 && g[0] !== undefined ? g[0] : {};
                cluster = t.cluster;
                t.workspace;
                namespace = t.namespace;
                t.more;
                id = t.id;
                s = module58(t, [
                    "cluster",
                    "workspace",
                    "namespace",
                    "more",
                    "id"
                ]);
                ({ page: i = 1, limit: d = 10, keyword } = s);
                this.list.isLoading = true;
                s.limit = s.limit || 10;
                p = await request.get(this.getResourceUrl({
                    cluster,
                    namespace,
                    id
                }));
                m = (module26(p, "items") || []).filter((e)=>!keyword || e.metadata.name.includes(keyword)).map((e)=>{
                    const t = getStatusFromYaml(e);
                    return {
                        cluster,
                        namespace,
                        name: module26(e, "metadata.name"),
                        partitions: module26(e, "spec.partitions"),
                        replicas: module26(e, "spec.replicas"),
                        config: module26(e, "spec.config", {}),
                        creationTimestamp: module26(e, "metadata.creationTimestamp"),
                        status: _this.statusMap[t] || "Creating"
                    };
                });
                total = Number(p.total || m.length);
                this.list.update({
                    data: m.slice((i - 1) * d, i * d),
                    total,
                    limit: Number(d) || 10,
                    page: Number(i) || 1,
                    isLoading: false,
                    filters: keyword ? {
                        keyword
                    } : {},
                    ...!this.list.silent ? {
                        selectedRowKeys: []
                    } : {}
                });
                return m;
            }
        },
        {
            key: "getYamlFromData",
            value: function(e, { cluster_id }) {
                const r = JSON.parse(JSON.stringify(kafkaYaml.topic));
                const { name, partitions, replicas, ...rest } = e;
                module74(r, "metadata.name", name);
                module74(r, 'metadata.labels["strimzi.io/cluster"]', cluster_id);
                module74(r, "spec", {
                    partitions: parseInt(partitions, 10),
                    replicas,
                    config: rest
                });
                return r;
            }
        },
        {
            key: "create",
            value: function({ topic, ...rest }) {
                const r = this.getYamlFromData(topic, rest);
                return request.post(this.getListUrl(rest), r);
            }
        },
        {
            key: "edit",
            value: async function(t) {
                let a;
                let r;
                let o;
                let s;
                let l;
                let i;
                let u;
                let d;
                let f;
                ({ topic: a, oldTopicName: r, ...o } = t);
                s = a.name;
                l = a.partitions;
                a.replicas;
                i = module58(a, [
                    "name",
                    "partitions",
                    "replicas"
                ]);
                if (!(s !== r)) {
                    u = await request.get(this.getDetailUrl({
                        ...o,
                        name: s
                    }));
                    d = module26(u, "spec.config", {});
                    module74(u, "spec.config", {
                        ...d,
                        ...i
                    });
                    module74(u, "spec.partitions", parseInt(l, 10));
                    await request.patch(this.getDetailUrl({
                        ...o,
                        name: s
                    }), u);
                } else {
                    f = this.getYamlFromData(a, o);
                    await this.delete({
                        ...o,
                        name: r
                    });
                    await request.post(this.getListUrl(o), f);
                }
            }
        }
    ]);
    return o;
})(module68);
l = module49(s.prototype, "targetsMetadata", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
module49(s.prototype, "fetchList", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "fetchList"), s.prototype);
module49(s.prototype, "create", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "create"), s.prototype);
module49(s.prototype, "edit", [
    module14.action
], Object.getOwnPropertyDescriptor(s.prototype, "edit"), s.prototype);
export default s;
