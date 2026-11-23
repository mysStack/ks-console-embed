import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import modal from "pages/clusters/components/Modals/ClusterVisibility";
import module445 from "stores/workspace";
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
