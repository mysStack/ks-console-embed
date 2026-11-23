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
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import Module1632 from "./module-1632.js";
import Module2858 from "./module-2858.js";
import module1667 from "./module-1667.js";
import Module826 from "./module-826.js";
import steps from "./module-2863.js";
import module1669 from "./module-1669.js";
const C = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            finishBasis: false
        };
        e.handleOk = async (a)=>{
            let r;
            r = e.state.type === "Grafana" ? a : e.store.toJS();
            e.props.onOk(r);
        };
        e.handleBasicConfirm = function(t) {
            const e_props = e.props;
            const { cluster, namespace } = e_props;
            const l = module26(module1669, `${t.spec.title}.settings`, {});
            module74(t, "spec", l, {});
            e.store = new module1667({
                cluster,
                namespace,
                formTemplate: t,
                name: module26(t, "metadata.name"),
                description: module26(t, 'metadata.annotations["kubesphere.io/description"]'),
                isEditing: true,
                ...t.spec
            });
            e.setState({
                finishBasis: true,
                type: t.spec.title,
                formData: t
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { finishBasis, type, formData } = state;
                const props = this.props;
                const { cluster, namespace, formTemplate, isSubmitting, onCancel, store } = props;
                const store_module = store.module;
                if (finishBasis) {
                    if (type === "Grafana") {
                        return <Module2858 formTemplate={formData} onCancel={onCancel} onOk={this.handleOk}/>;
                    }
                    return <Module1632 store={this.store} cluster={cluster} onOk={this.handleOk} onCancel={onCancel} isSubmitting={isSubmitting}/>;
                }
                return <Module826 visible module={store_module} name="CUSTOM_MONITORING_DASHBOARD" cluster={cluster} namespace={namespace} formTemplate={formTemplate} steps={steps} store={store} onOk={this.handleBasicConfirm} onCancel={onCancel} okBtnText={t("NEXT")}/>;
            }
        }
    ]);
    return r;
})(Component);
export default C;
