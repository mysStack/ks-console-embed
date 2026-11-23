import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module186 from "./module-186.js";
import module933 from "./module-933.js";
const b = ((e)=>{
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
        e.handleContainer = function(t) {
            const formProps = e.props.formProps;
            module933.prototype.handleContainer.call(module88(e), t);
            formProps.onChange();
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formProps, isFederated, isEdit } = props;
                const state = this.state;
                const { showContainer, selectContainer } = state;
                const s = isFederated && isEdit ? this.fedFormTemplate : this.formTemplate;
                const annotationOfImagePullSecrets = JSON.parse(module26(s, 'spec.template.metadata.annotations["kubesphere.io/imagepullsecrets"]', "{}"));
                if (showContainer) {
                    return this.renderContainerForm({
                        ...selectContainer,
                        annotationOfImagePullSecrets
                    });
                }
                module26(s, "spec.template.spec.containers", []).forEach((e)=>{
                    const t = {
                        ...e
                    };
                    const a = module26(t, "resources.requests");
                    const r = module63(a) ? null : module189(a, [
                        "cpu",
                        "memory"
                    ]);
                    if (!module63(r)) {
                        const n = Object.keys(r)[0];
                        const l = {
                            type: n,
                            value: r[n]
                        };
                        e.resources.gpu = l;
                    }
                });
                return <module186.Form data={s} ref={formRef} {...formProps}>{this.renderContainerList()}</module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate;
            }
        }
    ]);
    return a;
})(module933);
export default b;
