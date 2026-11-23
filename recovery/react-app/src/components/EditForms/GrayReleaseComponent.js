import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module26 from "unpacked/module-26.js";
import * as module553 from "unpacked/module-553.js";
import * as VersionNS from "components/Forms/GrayRelease/Version";
const Parent = VersionNS.default || module553.Component || (module553.default && module553.default.Component);
const d = ((defaultExport_1)=>{
    module55(r, defaultExport_1);
    var a = ((e)=>{
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
    })(r);
    function r(...c_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...c_1);
        e.versionValidator = function(a, r, n) {
            if (!r) {
                return n();
            }
            if (r === module26(e.formTemplate, 'metadata.labels["version"]', "")) {
                return n();
            }
            const o = module26(e.formTemplate, "metadata.labels.app", "");
            const name = `${o}-${r}`;
            e.workloadStore.checkName({
                name,
                namespace: e.namespace,
                cluster: e.props.cluster
            }).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("VERSION_EXISTS"),
                        field: a.field
                    });
                }
                n();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "templatePrefix",
            get: function() {
                return "workload";
            }
        },
        {
            key: "isEdit",
            get: function() {
                return true;
            }
        }
    ]);
    return r;
})(Parent);
export default d;
