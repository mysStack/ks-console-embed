import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import "./module-58.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { API_VERSIONS } from "./module-72.js";
import module26 from "./module-26.js";
import defaultExport from "./module-858.js";
const g = ((defaultExport_1)=>{
    module55(a, defaultExport_1);
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
    })(a);
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.module = "nodes";
        e.nodeTreeData = [];
        e.getAllNodeTree = async (a)=>{
            let r;
            let n;
            r = `/clusters/${a}${e.apiVersion}/nodetrees`;
            if ((n = await request.get(r)) == null ? undefined : n.spec) {
                e.nodeTreeData = n.spec.children || [];
            }
            return e.nodeTreeData;
        };
        e.getNodeTree = async (a, r)=>{
            let n;
            n = `/clusters/${a}${e.apiVersion}/nodetrees/${r}`;
            return await request.get(n);
        };
        e.create = async (a)=>{
            let r;
            let n;
            let o;
            let i;
            ({ cluster: r, nodetree: n, ...o } = a);
            i = `/clusters/${r}${e.apiVersion}/nodetrees/${n}`;
            return await request.post(i, o);
        };
        e.deleteNodeTree = async (a, r)=>{
            let n;
            n = `/clusters/${a}${e.apiVersion}/nodetrees/${r}`;
            return await request.delete(n);
        };
        e.bindNodeGroup = async (a)=>{
            let r;
            let n;
            let l;
            let o;
            r = a.cluster;
            n = a.node;
            l = a.parentNode;
            o = `/clusters/${r}${e.apiVersion}/nodegroups/${l}/nodes/${n}`;
            return await request.post(o);
        };
        e.updateNodeTree = async (a)=>{
            let r;
            let n;
            let o;
            let i;
            ({ cluster: r, nodetree: n, ...o } = a);
            i = `/clusters/${r}${e.apiVersion}/nodetrees/${n}`;
            return await request.put(i, o);
        };
        e.moveTreeNode = async (a)=>{
            let r;
            let n;
            let l;
            let o;
            r = a.cluster;
            n = a.nodetree;
            l = a.params;
            o = `/clusters/${r}${e.apiVersion}/nodetrees/${n}`;
            return await request.patch(o, l);
        };
        e.getListUrl = function(t = {}) {
            return `${e.apiVersion}${e.getPath(t)}/nodes${t.dryRun ? "?dryRun=All" : ""}`;
        };
        e.getResourceUrl = function({ cluster }) {
            return `/kapis/resources.kubesphere.io/v1alpha3${e.getPath({
                cluster
            })}/nodes`;
        };
        e.createEdgeNode = async (a)=>{
            let r;
            let node_name;
            let node_ip;
            let add_default_taint;
            let runtime;
            let c;
            let s;
            let f;
            let d;
            let p;
            r = a.cluster;
            node_name = a.name;
            node_ip = a.ip;
            add_default_taint = a.defaultTaint;
            runtime = a.runtime;
            c = a.imageRepository;
            s = a.nodegroup;
            f = `/kapis/infra.edgewize.io/v1alpha1${e.getPath({
                cluster: r
            })}/nodes/join`;
            d = {
                node_name,
                node_ip,
                add_default_taint,
                runtime,
                "image-repository": c
            };
            if (s) {
                d.node_group = s;
            }
            p = await request.get(f, d, {}, function(e) {
                return e;
            });
            return p;
        };
        e.getTreeNode = async (a)=>{
            let r;
            let n;
            let namespace;
            let i;
            let c;
            let s;
            ({ cluster: r, nodetree: n, namespace, ...i } = a);
            c = `/clusters/${r}${e.apiVersion}/nodegroups/${n}/nodes`;
            s = await request.get(c, i);
            s.items = (module26(s, "items") || []).map((e)=>({
                    cluster: r,
                    namespace,
                    ...e,
                    name: e.metadata.name
                }));
            return s;
        };
        e.checkNodeGroupEdgeNode = async (a)=>{
            let r;
            let n;
            let l;
            let o;
            r = a.cluster;
            n = a.nodegroup;
            l = a.name;
            o = `/clusters/${r}${e.apiVersion}/nodegroups/${n}/nodes/${l}`;
            return await request.get(o);
        };
        e.removeNodeGroupEdgeNode = async (a)=>{
            let r;
            let n;
            let l;
            let o;
            r = a.cluster;
            n = a.nodegroup;
            l = a.name;
            o = `/clusters/${r}${e.apiVersion}/nodegroups/${n}/nodes/${l}`;
            return await request.delete(o);
        };
        return e;
    }
    module37(a, [
        {
            key: "apiVersion",
            get: function() {
                return API_VERSIONS.nodegroups || "";
            }
        }
    ]);
    return a;
})(defaultExport);
export default g;
