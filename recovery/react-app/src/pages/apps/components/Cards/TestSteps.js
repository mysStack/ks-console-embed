import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module943 from "stores/openpitrix/version";
import module936 from "stores/openpitrix/file";
import module4419 from "unpacked/module-4419.js";
let o;
let u;
let l;
const E = observer((l = u = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.state = {};
        t.store = new module943;
        t.fileStore = new module936;
        return t;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                return <div className={module4419.main}><p className={module4419.note}>{t("VERSION_SUBMIT_NOTE")}</p><div className={module4419.steps}>{t.html("VERSION_SUBMIT_TEST_STEPS")}</div></div>;
            }
        }
    ]);
    return a;
})(Component), u.propTypes = {
    detail: module1.object,
    appId: module1.string,
    appName: module1.string
}, u.defaultProps = {
    detail: {},
    appId: "",
    appName: ""
}, o = l)) || o;
export default E;
