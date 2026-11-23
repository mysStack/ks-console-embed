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
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import modal from "./module-2961.js";
function i(e, t) {
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
const f = {
    "license.update": {
        on: function({ store, success, ...rest }) {
            var f = module788.open({
                onOk: function(e) {
                    store.updateLicense(e).then(()=>{
                        module788.close(f);
                        module240.success({
                            content: `${t("UPDATE_SUCCESSFUL")}`
                        });
                        localStorage.removeItem("hideLicenseTip");
                        if (success) {
                            success();
                        }
                    });
                },
                modal,
                store,
                ...rest
            });
        }
    }
};
export default f;
