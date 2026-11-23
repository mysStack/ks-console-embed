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
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module843 from "components/Inputs/PropertiesInput";
const p = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.metaError = "";
        e.handleMetaError = function(t = "") {
            e.metaError = t;
        };
        e.metaDataValidator = function(t, a, r) {
            if (e.metaError === "") {
                r();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <><module186.Form.Item label={t("ANNOTATION_PL")} rules={[
                    {
                        validator: this.metaDataValidator
                    }
                ]}><Module843 name="spec.template.metadata.annotations" addText={t("ADD")} hiddenKeys={globals.config.preservedAnnotations} onError={this.handleMetaError}/></module186.Form.Item></>;
            }
        }
    ]);
    return r;
})(Component);
export default p;
