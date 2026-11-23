import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module63 from "./module-63.js";
import Module788 from "components/Base/Modal";
import Module2925 from "components/Modals/Edit/Form";
import module2927 from "./module-2927.js";
const y = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, title, module, store, forms, onOk, onCancel, cluster, namespace, ...rest } = props;
                return <Module788 width={1162} bodyClassName={module2927.body} title={t(title)} visible={visible} onCancel={onCancel} hideFooter {...rest}><Module2925 {...rest} module={module} store={store} forms={forms} cluster={cluster} namespace={namespace} data={this.formData} onSubmit={onOk} onCancel={onCancel}/></Module788>;
            }
        },
        {
            key: "formData",
            get: function() {
                const props = this.props;
                const { detail, formData } = props;
                if (module63(formData)) {
                    return detail;
                }
                return formData;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    visible: module1.bool,
    title: module1.string,
    module: module1.string,
    store: module1.object,
    forms: module1.array,
    formData: module1.object,
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func
};
y.defaultProps = {
    visible: false,
    title: "EDIT",
    store: {},
    forms: [],
    formData: {},
    detail: {},
    onCancel: function() {}
};
