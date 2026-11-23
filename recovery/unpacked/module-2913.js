import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-326.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-85.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module61 from "./module-61.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module2914 from "./module-2914.js";
import module2916 from "./module-2916.js";
import module2917 from "./module-2917.js";
import module823 from "./module-823.js";
const S = (e)=>{
    if (e.length > 0) {
        const t = new Map;
        let a = [];
        e.forEach(({ name })=>{
            if (name) {
                const n = e.filter((e)=>e.name === name);
                t.set(name, n);
            }
        });
        if (t.has("*")) {
            return a = module61(t.get("*"));
        }
        t.forEach((e)=>{
            const t = e.length && e.filter((e)=>e.namespace === "*");
            if (t.length > 0) {
                a.push(t[0]);
            } else {
                a = a.concat(e);
            }
        });
        return a;
    }
    return e;
};
const _ = {
    "devops.create": {
        on: function({ store, workspace, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    const cluster = module26(e, "spec.placement.cluster");
                    store.create(e, {
                        cluster,
                        workspace
                    }).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        if (success) {
                            success(cluster);
                        }
                    });
                },
                formTemplate: {},
                modal: module2914,
                store,
                workspace,
                hideCluster: !globals.app.isMultiCluster,
                ...rest
            });
        }
    },
    "devops.edit": {
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
                modal: module2916,
                detail,
                store,
                ...rest
            });
        }
    },
    "devops.edit.allowlist": {
        on: function({ store, detail, success, ...rest }) {
            var v = module788.open({
                onOk: async (a)=>{
                    let o;
                    let c;
                    let s;
                    let h;
                    let E;
                    o = module136(a);
                    c = module26(o, "spec.argo.sourceRepos", []);
                    s = module26(o, "spec.argo.destinations", []);
                    if ((h = c.filter((e)=>e === "*")).length > 0) {
                        module74(o, "spec.argo.sourceRepos", h);
                    }
                    E = S(s);
                    module74(o, "spec.argo.destinations", E);
                    await store.editAllowlist(detail, o);
                    module788.close(v);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module2917,
                store,
                ...rest
            });
        }
    },
    "devops.batch.delete": {
        on: function({ store, success, rowKey, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const v = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>e.name);
            var h = module788.open({
                onOk: async ()=>{
                    const a = [];
                    data.forEach((e)=>{
                        if (selectedRowKeys.includes(e[rowKey])) {
                            a.push(store.delete(e));
                        }
                    });
                    await Promise.all(a);
                    module788.close(h);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                title: v.length === 1 ? t("DELETE_DEVOPS_PROJECT") : t("DELETE_MULTIPLE_DEVOPS_PROJECTS"),
                desc: v.length === 1 ? t.html("DELETE_DEVOPS_PROJECT_TIP", {
                    resource: v.join(", ")
                }) : t.html("DELETE_DEVOPS_PROJECT_TIP_PL", {
                    resource: v.join(", ")
                }),
                resource: v.join(", "),
                modal: module823,
                store,
                ...rest
            });
        }
    }
};
export default _;
