import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module14 from "./module-14.js";
import module936 from "stores/openpitrix/file";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import { ValuesJSON, ValuesSchema } from "./module-817.js";
let n;
let l;
n = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
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
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.resourceName = "files";
        module65(e, "loadRadonDB", l, module88(e));
        return e;
    }
    return a;
})(module936);
l = module49(n.prototype, "loadRadonDB", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ app_id, restoreParams }) {
            _this.files = {
                "values.schema": module136(ValuesSchema[app_id]),
                "values.json": module136(ValuesJSON[app_id])
            };
            if (restoreParams) {
                if (restoreParams.databaseVersion) {
                    module74(_this.files, '["values.schema"].properties.version.disabled', true);
                    module74(_this.files, '["values.json"].version', restoreParams.databaseVersion);
                }
                if (restoreParams.nodes) {
                    module74(_this.files, '["values.schema"].properties.nodes.disabled', true);
                    module74(_this.files, '["values.json"].nodes', restoreParams.nodes);
                }
                if (restoreParams.volume) {
                    module74(_this.files, '["values.schema"].properties.volume.disabled', true);
                    module74(_this.files, '["values.schema"].properties.volumeType.disabled', true);
                    module74(_this.files, '["values.json"].volume', restoreParams.volume);
                }
                if (restoreParams.specifications) {
                    module74(_this.files, '["values.schema"].properties.specifications.disabled', true);
                    module74(_this.files, '["values.json"].specifications', restoreParams.specifications);
                }
            }
            _this.isLoading = false;
            _this.isRadonDB = true;
        };
    }
});
export default n;
