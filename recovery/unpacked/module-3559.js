import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-6.js";
import "./module-48.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-75.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module136 from "./module-136.js";
import module862 from "./module-862.js";
import module3 from "./module-3.js";
import module3560 from "./module-3560.js";
import module1100 from "./module-1100.js";
import module3562 from "./module-3562.js";
const O = ((e)=>{
    module55(r, e);
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
            formData: e.getFormData(),
            isEdit: false
        };
        e.showEdit = function() {
            e.setState({
                isEdit: true
            });
            e.props.onSelect(e.props.cluster);
        };
        e.hideEdit = function() {
            e.setState({
                isEdit: false
            });
        };
        e.handleSubmit = function(t) {
            const e_props = e.props;
            const { cluster, formTemplate } = e_props;
            const clusterOverrides = [];
            Object.keys(t.spec).forEach((e)=>{
                const a = `spec.${e}`;
                const r = module26(t, a);
                if (module26(formTemplate, `spec.template.${a}`) !== r) {
                    clusterOverrides.push({
                        path: `/${a.replace(/\./g, "/")}`,
                        value: r
                    });
                }
            });
            const o = module26(formTemplate, "spec.overrides", []);
            const c = o.find((e)=>e.clusterName === cluster);
            if (c) {
                c.clusterOverrides = module862([].concat(clusterOverrides, module61(c.clusterOverrides || [])), "path");
            } else {
                o.push({
                    clusterName: cluster,
                    clusterOverrides
                });
            }
            module74(formTemplate, "spec.overrides", o);
            e.setState({
                formData: e.getFormData(),
                isEdit: false
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getFormData",
            value: function() {
                const props = this.props;
                const { cluster, formTemplate } = props;
                const r = module26(formTemplate, "spec.overrides", []).find((e)=>e.clusterName === cluster) || {};
                const n = {
                    spec: module136(module26(formTemplate, "spec.template.spec"))
                };
                if (r && !module63(r.clusterOverrides)) {
                    r.clusterOverrides.forEach((e)=>{
                        if (e.path.startsWith("/spec")) {
                            const t = e.path.slice(1).replace(/\//g, ".");
                            module74(n, t, e.value);
                        }
                    });
                }
                return n;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, namespace, selected, editModalTitle, title, onChange } = props;
                const state = this.state;
                const { formData, isEdit } = state;
                return module553.default.createElement("div", {
                    className: module3(module3562.wrapper, module31({}, module3562.selected, selected))
                }, module553.default.createElement(module3560, {
                    title: t("STORAGE_CLASS_VALUE", {
                        value: module26(formData, "spec.storageClassName")
                    }),
                    formData,
                    isEdit,
                    showEdit: this.showEdit,
                    hideEdit: this.hideEdit,
                    onOk: this.handleSubmit,
                    onChange
                }, module553.default.createElement(module1100, {
                    cluster,
                    namespace,
                    editModalTitle,
                    tabTitle: title
                })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default O;
