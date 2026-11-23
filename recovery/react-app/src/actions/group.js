import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import module26 from "unpacked/module-26.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import modal from "components/Modals/Delete";
function p(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const m = {
    "group.user.remove": {
        on: function({ store, detail, workspace, success, ...rest }) {
            var E = module788.open({
                onOk: async ()=>{
                    let a;
                    let o;
                    a = await store.getGroupBinding({
                        user: detail.name,
                        group: detail.group
                    }, {
                        workspace
                    });
                    o = module26(a.items[0], "metadata.name");
                    store.deleteGroupBinding(o, {
                        workspace
                    }).then(()=>{
                        module788.close(E);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                modal,
                title: t("REMOVE_MEMBER"),
                desc: t.html("REMOVE_MEMBER_TIP", {
                    resource: detail.name
                }),
                resource: detail.name,
                store,
                ...rest
            });
        }
    }
};
export default m;
