import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-85.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import modal from "./module-3652.js";
import module445 from "./module-445.js";
function h(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let n = Object.getOwnPropertySymbols(e);
        if (t) {
            n = n.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, n);
    }
    return r;
}
const g = {
    "cluster.visibility.edit": {
        on: function({ store, success, cluster, ...rest }) {
            let r;
            const v = new module445;
            var _ = module788.open({
                onOk: (r = module44(module41.mark(function e(r) {
                    let u;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (r) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return", module788.close(_));
                                case 2:
                                    if (!globals.user.globalRules.clusters.includes("manage")) {
                                        e.next = 5;
                                        break;
                                    }
                                    e.next = 5;
                                    return store.patch({
                                        name: store.detail.name
                                    }, {
                                        metadata: {
                                            labels: {
                                                "cluster.kubesphere.io/visibility": r.public ? "public" : "private"
                                            }
                                        }
                                    });
                                case 5:
                                    u = [];
                                    if (r.addWorkspaces) {
                                        r.addWorkspaces.forEach((e)=>{
                                            let t;
                                            const r = module26(e, "_originData.spec.placement.clusters", {});
                                            t = module63(r) ? [
                                                {
                                                    op: "add",
                                                    path: "/spec/placement",
                                                    value: {
                                                        clusters: [
                                                            {
                                                                name: cluster.name
                                                            }
                                                        ]
                                                    }
                                                }
                                            ] : [
                                                {
                                                    op: "add",
                                                    path: "/spec/placement/clusters/-",
                                                    value: {
                                                        name: cluster.name
                                                    }
                                                }
                                            ];
                                            u.push(v.editVisible(e, t));
                                        });
                                    }
                                    if (r.deleteWorkspaces) {
                                        r.deleteWorkspaces.forEach((e)=>{
                                            const t = (e.clusters.map((e)=>e.name) || []).indexOf(cluster.name);
                                            const r = [
                                                {
                                                    op: "remove",
                                                    path: `/spec/placement/clusters/${t}`,
                                                    value: {
                                                        name: cluster.name
                                                    }
                                                }
                                            ];
                                            u.push(v.editVisible(e, r));
                                        });
                                    }
                                    e.next = 10;
                                    return Promise.all(u);
                                case 10:
                                    module788.close(_);
                                    if (success) {
                                        success();
                                    }
                                    module240.success({
                                        content: t("UPDATE_SUCCESSFUL")
                                    });
                                case 13:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return r.apply(this, arguments);
                }),
                modal,
                store,
                cluster,
                ...rest
            });
        }
    }
};
export default g;
