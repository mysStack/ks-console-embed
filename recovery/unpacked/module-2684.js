import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
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
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module1180 from "./module-1180.js";
import module2686 from "./module-2686.js";
const g = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            visible: false
        };
        e.showEdit = function() {
            e.setState({
                visible: true
            });
        };
        e.hideEdit = function() {
            e.setState({
                visible: false
            });
        };
        e.handleEdit = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange({
                ...a_value,
                ...t
            });
            e.hideEdit();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderPreview",
            value: function() {
                const value = this.props.value;
                return module553.default.createElement("div", {
                    className: module2686.preview
                }, module553.default.createElement("div", {
                    className: module2686.item
                }, module553.default.createElement("span", null, t("PODS_CIDR"), ": "), module553.default.createElement("span", null, value.kubePodsCIDR)), module553.default.createElement("div", {
                    className: module2686.item
                }, module553.default.createElement("span", null, t("SERVICE_CIDR"), ": "), module553.default.createElement("span", null, value.kubeServiceCIDR)), module553.default.createElement("a", {
                    className: module2686.edit,
                    onClick: this.showEdit
                }, t("EDIT")));
            }
        },
        {
            key: "renderModal",
            value: function() {
                const props = this.props;
                const { value, params } = props;
                return module553.default.createElement(module788.Form, {
                    title: t("EDIT"),
                    data: value,
                    onOk: this.handleEdit,
                    onCancel: this.hideEdit,
                    visible: this.state.visible
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("PODS_CIDR"),
                    desc: t("KUBE_PODS_CIDR_DESC")
                }, module553.default.createElement(module186.Input, {
                    name: "kubePodsCIDR"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("SERVICE_CIDR"),
                    desc: t("KUBE_SERVICE_CIDR_DESC")
                }, module553.default.createElement(module186.Input, {
                    name: "kubeServiceCIDR"
                })), params.map((param)=>module553.default.createElement(module186.Form.Item, {
                        key: param.name,
                        label: t(param.title),
                        desc: t(param.description)
                    }, module553.default.createElement(module1180, {
                        name: param.name,
                        defaultValue: param.default,
                        param
                    }))));
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", null, this.renderPreview(), this.renderModal());
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
