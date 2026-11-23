import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module807 from "./module-807.js";
import module788 from "./module-788.js";
import { CATEGORY_ICONS } from "./module-327.js";
import module3166 from "./module-3166.js";
const _ = ((e)=>{
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
        n.changeName = function(name) {
            n.setState({
                name
            });
        };
        n.changeIcon = function(description) {
            n.setState({
                description
            });
        };
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const n_props = n.props;
            const { detail, categoryNames } = n_props;
            if (a !== detail.name && categoryNames.includes(a)) {
                return r({
                    message: t("NAME_EXIST_DESC"),
                    field: e.field
                });
            }
            r();
        };
        n.createOrModify = function() {
            const e = {
                name: n.state.name,
                description: n.state.description,
                locale: "{}"
            };
            const category_id = n.props.detail.category_id;
            if (category_id) {
                e.category_id = category_id;
            }
            n.formRef.validate(function() {
                n.props.onOk(e);
            });
        };
        n.onCancel = function() {
            n.setState({
                name: "",
                description: ""
            });
            n.props.onCancel();
        };
        n.state = {
            name: n.props.detail.name,
            description: n.props.detail.description
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const detail = this.props.detail;
                if (!module807(detail, e.detail)) {
                    this.setState({
                        name: detail.name,
                        description: detail.description
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, ...rest } = props;
                const l = {
                    name: this.state.name,
                    description: this.state.description
                };
                return module553.default.createElement(module788, {
                    width: 600,
                    visible,
                    footerClassName: module3166.footer,
                    ...rest,
                    onOk: this.createOrModify,
                    onCancel: this.onCancel
                }, module553.default.createElement(module186.Form, {
                    data: l,
                    ref: function(t) {
                        _this.formRef = t;
                    }
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("NAME"),
                    desc: t("CATEGORY_NAME_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("ENTER_CATEGORY_NAME_TIP")
                        },
                        {
                            validator: this.nameValidator
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "name",
                    onChange: this.changeName,
                    maxLength: 20
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("ICON")
                }, module553.default.createElement("div", {
                    name: "description",
                    className: module3166.icons,
                    value: l.description
                }, CATEGORY_ICONS.map((t)=>module553.default.createElement("label", {
                        key: t,
                        onClick: function() {
                            return _this.changeIcon(t);
                        },
                        className: module3(module31({}, module3166.active, t === l.description))
                    }, module553.default.createElement(module186.Icon, {
                        name: t,
                        size: 20
                    })))))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default _;
_.propTypes = {
    detail: module1.object,
    categoryNames: module1.array,
    onOk: module1.func,
    onCancel: module1.func
};
_.defaultProps = {
    detail: {},
    categoryNames: [],
    onOk: function() {},
    onCancel: function() {}
};
