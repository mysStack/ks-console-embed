import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-87.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "./module-44.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module826 from "./module-826.js";
import { CD_FORM } from "./module-2649.js";
import module788 from "./module-788.js";
import module2656 from "./module-2656.js";
import module240 from "./module-240.js";
import module2658 from "./module-2658.js";
import module435 from "./module-435.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module136 from "./module-136.js";
import module14 from "./module-14.js";
const _ = {
    "cd.create": {
        on: function({ store, cluster, workspace: _workspace, module, success, ...rest }) {
            const g = module435[module]();
            var b = module788.open({
                onOk: async (a)=>{
                    let o;
                    let syncPolicy;
                    let source;
                    let i;
                    let d;
                    o = a.syncPolicy.type;
                    syncPolicy = o === "automated" ? module31({}, o, {
                        prune: a.syncPolicy.prune,
                        selfHeal: a.syncPolicy.selfHeal
                    }) : module31({}, o, {});
                    source = {
                        repoURL: a.repoURL.match(/\(([\w\W]+)\)/)[1],
                        ...a.source
                    };
                    i = module63(a.syncOptions) ? undefined : Object.entries(a.syncOptions).reduce((acc, entry)=>{
                        const a = `${entry[0]}=${entry[1]}`;
                        acc.push(a);
                        return acc;
                    }, []);
                    syncPolicy.syncOptions = i;
                    d = {
                        destination: a.destination,
                        source,
                        syncPolicy
                    };
                    module74(g, "metadata", a.metadata);
                    module74(g, "spec.argoApp.spec", d);
                    await store.create({
                        data: g,
                        devops: rest.devops,
                        cluster
                    });
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                    module788.close(b);
                },
                store,
                module,
                cluster,
                formTemplate: {},
                modal: module826,
                steps: CD_FORM,
                ...rest
            });
        }
    },
    "cd.sync": {
        on: function({ store, cluster, workspace: _workspace, module, success, formTemplate, application, ...rest }) {
            var g = module788.open({
                onOk: async (a)=>{
                    let o;
                    let u;
                    o = module136(a);
                    u = module63(o.syncOptions) ? undefined : Object.entries(o.syncOptions).reduce((acc, entry)=>{
                        const a = `${entry[0]}=${entry[1]}`;
                        acc.push(a);
                        return acc;
                    }, []);
                    module74(o, "syncOptions", u);
                    module74(o, "revision", a.repoSource.targetRevision);
                    await store.updateSync({
                        data: o,
                        devops: rest.devops,
                        cluster,
                        application
                    });
                    module240.success({
                        content: t("SYNC_TRIGGERED")
                    });
                    if (success) {
                        success();
                    }
                    module788.close(g);
                },
                store,
                ...rest,
                module,
                cluster,
                formTemplate,
                modal: module2656,
                ...rest
            });
        }
    },
    "cd.delete": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function() {
                    module788.close(o);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module2658,
                resource: detail,
                ...rest
            });
        }
    },
    "cd.batch.delete": {
        on: function({ store, success, rowKey = "name", ...rest }) {
            const u = module14.toJS(store.list);
            const { data, selectedRowKeys } = u;
            const resource = data.filter((e)=>selectedRowKeys.includes(e[rowKey]));
            if (!module63(resource)) var v = module788.open({
                onOk: function() {
                    module788.close(v);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module2658,
                resource,
                store,
                ...rest
            });
        }
    }
};
export default _;
