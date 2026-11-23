import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-73.js";
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
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module823 from "./module-823.js";
import module826 from "./module-826.js";
import module435 from "./module-435.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import steps from "./module-2059.js";
const g = {
    "pv.delete": {
        on: function({ store, detail, type: _type, rowKey: _rowKey, success, ...rest }) {
            var o = module788.open({
                onOk: function() {
                    store.delete(detail).then(()=>{
                        module788.close(o);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                modal: module823,
                type: "PERSISTENT_VOLUME",
                resource: detail.name,
                ...rest
            });
        }
    },
    "pv.batch.delete": {
        on: function({ store, success, rowKey, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const h = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>({
                    name: e.name,
                    namespace: e.namespace
                }));
            const E = h.map((e)=>e.name);
            var g = module788.open({
                onOk: async ()=>{
                    const a = [];
                    data.forEach((e)=>{
                        if (h.find((t)=>t.name === e.name && t.namespace === e.namespace)) {
                            a.push(store.delete(e));
                        }
                    });
                    await Promise.all(a);
                    module788.close(g);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: E.join(", "),
                type: "PERSISTENT_VOLUME",
                modal: module823,
                store,
                ...rest
            });
        }
    },
    "pv.create": {
        on: function({ store, success, ...rest }) {
            const formTemplate = {
                PersistentVolume: module435[store.module]?.() ?? {}
            };
            var f = module788.open({
                onOk: function(e) {
                    const a = module26(e, "PersistentVolume");
                    store.create(module241(rest, [
                        "cluster",
                        "workspace",
                        "namespace"
                    ]), a).then(()=>{
                        module788.close(f);
                        module240.success({
                            content: t("CREATED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                name: "PERSISTENT_VOLUME",
                formTemplate,
                modal: module826,
                module: store.module,
                steps,
                store,
                ...rest
            });
        }
    }
};
export default g;
