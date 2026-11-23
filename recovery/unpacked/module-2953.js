import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
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
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import modal from "./module-823.js";
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
