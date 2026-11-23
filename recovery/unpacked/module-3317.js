import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module1360 from "./module-1360.js";
import module3318 from "./module-3318.js";
import module1081 from "./module-1081.js";
const y = {
    "resource.baseinfo.edit": {
        on: function({ store, detail, success, k8sVersion = "", ...rest }) {
            const i = module26(store, "module", "");
            var m = module788.open({
                onOk: function(e) {
                    let l = i === "workspace" ? null : e;
                    if (module26(store, "module", "") === "workspaces") {
                        l = [
                            {
                                op: "add",
                                path: "/metadata/annotations",
                                value: module26(e, "metadata.annotations")
                            },
                            {
                                op: "add",
                                path: "/spec",
                                value: module26(e, "spec")
                            }
                        ];
                    }
                    store.patch(detail, l, k8sVersion).then(()=>{
                        module788.close(m);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                detail,
                modal: module1360,
                store,
                ...rest
            });
        }
    },
    "resource.annotations.edit": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    store.update(detail, e).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("UPDATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                detail,
                modal: module3318,
                store,
                ...rest
            });
        }
    },
    "resource.yaml.edit": {
        on: function({ store, detail, success, k8sVersion = "", ...rest }) {
            var h = module788.open({
                onOk: async (a)=>{
                    if (store.isScheduleProject) {
                        module74(a[0], "metadata.resourceVersion", detail.resourceVersion);
                        await store.update(detail, a[0], k8sVersion);
                        await store.updateScheduleYaml(detail, a[1], k8sVersion);
                    } else {
                        module74(a, "metadata.resourceVersion", detail.resourceVersion);
                        await store.update(detail, a, k8sVersion);
                    }
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    module788.close(h);
                    if (success) {
                        success();
                    }
                },
                detail,
                store,
                modal: module1081,
                k8sVersion,
                ...rest
            });
        }
    }
};
export default y;
