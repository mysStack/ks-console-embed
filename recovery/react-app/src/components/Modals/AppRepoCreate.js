import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-48.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-57.js";
import "unpacked/module-193.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module3108 from "components/Modals/AppRepoCreate/time.input";
import module3109 from "components/Modals/AppRepoCreate/url.input";
import module1372 from "unpacked/module-1372.js";
function _(e, t) {
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getFormData = function(e) {
            let t = "https";
            if (e && e.url) {
                const a = e.url.match(/^(.*):\/\//);
                if (a[1]) {
                    t = a[1];
                }
            }
            return {
                type: t,
                name: "",
                sync_period: module26(e, "sync_period", "0s"),
                repoType: "Helm",
                visibility: "public",
                credential: "{}",
                providers: [
                    "kubernetes"
                ],
                ...e
            };
        };
        n.getSeconds = function(e) {
            const t = e.slice(-1);
            const a = e.slice(0, -1);
            const r = parseFloat(e);
            if (r.toString() !== a) {
                return 179;
            }
            switch(t){
                default:
                    return r;
                case "m":
                    return 60 * r;
                case "h":
                    return 60 * r * 60;
            }
        };
        n.timeValidator = function(e, a, r) {
            const l = n.getSeconds(a);
            if (l) {
                if (/^[0-9]*$/.test(l)) {
                    if (l !== 0 && (l > 86400 || l < 180)) {
                        return r({
                            message: t("SYNC_INTERVAL_TIP")
                        });
                    }
                    return void r();
                }
                return r({
                    message: t("SYNC_INTERVAL_INVALID")
                });
            }
            return r();
        };
        n.handleSubmit = function(e) {
            n.props.onOk(e).then(()=>{
                n.setState({
                    formData: n.getFormData({})
                });
            });
        };
        n.handleCancel = function() {
            n.props.onCancel();
            n.setState({
                formData: n.getFormData({})
            });
        };
        n.handleUrlValidate = function(e) {
            n.setState({
                isValid: e.isValid
            });
        };
        n.formRef = module553.default.createRef();
        n.state = {
            formData: n.getFormData(e.detail)
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.detail !== e.detail) {
                    this.setState({
                        formData: this.getFormData(this.props.detail)
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, store, onOk: _onOk, onCancel: _onCancel, workspace, ...rest } = props;
                const c = detail ? "EDIT_APP_REPO" : "ADD_APP_REPO";
                return module553.default.createElement(module788.Form, {
                    bodyClassName: module1372.body,
                    title: t(c),
                    icon: "firewall",
                    width: 691,
                    data: this.state.formData,
                    onOk: this.handleSubmit,
                    onCancel: this.handleCancel,
                    ...rest
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("NAME"),
                    rules: [
                        {
                            required: true,
                            message: t("NAME_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "name",
                    autoFocus: true
                })), module553.default.createElement(module3109, {
                    store,
                    workspace,
                    formData: this.state.formData,
                    onValidate: this.handleUrlValidate,
                    isSubmitting: this.props.isSubmitting
                }), module553.default.createElement(module186.Form.Item, {
                    label: t("SYNC_INTERVAL"),
                    desc: t("SYNC_INTERVAL_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("SYNC_PERIOD_EMPTY_DESC")
                        },
                        {
                            validator: this.timeValidator
                        }
                    ]
                }, module553.default.createElement(module3108, {
                    name: "sync_period"
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("DESCRIPTION"),
                    desc: t("DESCRIPTION_DESC")
                }, module553.default.createElement(module186.TextArea, {
                    name: "description",
                    maxLength: 256
                })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default O;
O.propTypes = {
    store: module1.object,
    detail: module1.object,
    visible: module1.bool,
    isSubmitting: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
O.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
