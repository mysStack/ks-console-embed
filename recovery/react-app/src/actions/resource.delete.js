import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
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
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module823 from "components/Modals/Delete";
import module3315 from "components/Modals/Stop";
import module443 from "stores/service";
const h = {
    "resource.delete": {
        on: function({ store, detail, success, onOk, k8sVersion = "", ...rest }) {
            var p = module788.open({
                onOk: function() {
                    if (onOk) {
                        if (onOk == null) {
                            return undefined;
                        }
                        return onOk().then(()=>{
                            module788.close(p);
                            if (success) {
                                success();
                            }
                        });
                    }
                    store.delete(detail, k8sVersion).then(()=>{
                        module788.close(p);
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
                resource: detail.name,
                ...rest
            });
        }
    },
    "resource.batch.delete": {
        on: function({ store, success, rowKey, once, k8sVersion = "", ...rest }) {
            const y = new module443;
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const _ = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>({
                    name: e.name,
                    namespace: e.namespace
                }));
            const O = _.map((e)=>e.name);
            var C = module788.open({
                onOk: async ()=>{
                    let selectedItems;
                    let o;
                    if (once) {
                        selectedItems = data.filter((e)=>_.find((t)=>t.name === e.name && t.namespace === e.namespace));
                        await store.batchDelete({
                            selectedItems,
                            ...rest
                        });
                    } else {
                        o = [];
                        data.forEach((e)=>{
                            if (_.find((t)=>t.name === e.name && t.namespace === e.namespace)) {
                                o.push(store.delete(e, k8sVersion));
                                if (store.module === "statefulsets") {
                                    o.push(y.delete({
                                        ...e,
                                        name: e.spec.serviceName
                                    }));
                                }
                            }
                        });
                        await Promise.all(o);
                    }
                    module788.close(C);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: O.join(", "),
                modal: module823,
                store,
                ...rest
            });
        }
    },
    "resource.batch.stop": {
        on: function({ store, success, rowKey, ...rest }) {
            const store_list = store.list;
            const { data, selectedRowKeys } = store_list;
            const E = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>({
                    name: e.name,
                    namespace: e.namespace
                }));
            const y = E.map((e)=>e.name);
            var g = module788.open({
                onOk: async ()=>{
                    const a = [];
                    data.forEach((e)=>{
                        if (E.find((t)=>t.name === e.name && t.namespace === e.namespace)) {
                            a.push(store.stop(e));
                        }
                    });
                    await Promise.all(a);
                    module788.close(g);
                    module240.success({
                        content: `${t("STOP_SUCCESS_DESC")}`
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: y.join(", "),
                modal: module3315,
                store,
                ...rest
            });
        }
    }
};
export default h;
