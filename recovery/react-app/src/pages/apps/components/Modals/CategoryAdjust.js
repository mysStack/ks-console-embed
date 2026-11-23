import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module3168 from "unpacked/module-3168.js";
const y = ((e)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleChange = function(categoryId) {
            t.setState({
                categoryId
            });
        };
        t.adjustCategory = function() {
            t.props.onOk({
                category_id: t.state.categoryId
            });
        };
        t.onCancel = function() {
            t.setState({
                categoryId: ""
            });
            t.props.onCancel();
        };
        t.state = {
            categoryId: t.props.categoryId
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const a = {
                    ...this.props
                };
                const data = {
                    category_id: this.state.categoryId
                };
                return module553.default.createElement(module788, {
                    width: 600,
                    footerClassName: module3168.footer,
                    ...a,
                    onOk: this.adjustCategory,
                    onCancel: this.onCancel
                }, module553.default.createElement(module186.Form, {
                    className: module3168.form,
                    data,
                    ref: function(t) {
                        _this.formRef = t;
                    }
                }, module553.default.createElement(module186.Form.Item, {
                    label: t("CHANGE_CATEGORY"),
                    desc: t("CHANGE_CATEGORY_DESC")
                }, module553.default.createElement(module186.Select, {
                    name: "category_id",
                    options: this.categories,
                    value: this.state.categoryId,
                    onChange: this.handleChange
                }))));
            }
        },
        {
            key: "categories",
            get: function() {
                return module61(this.props.categories.map(({ name, category_id })=>({
                        label: t(`APP_CATE_${name.toUpperCase().replace(/[^A-Z]+/g, "_")}`, {
                            defaultValue: name
                        }),
                        value: category_id
                    })));
            }
        }
    ]);
    return r;
})(module553.Component);
export default y;
y.propTypes = {
    categories: module1.array,
    categoryId: module1.string,
    onOk: module1.func,
    onCancel: module1.func
};
y.defaultProps = {
    categories: [],
    categoryId: "",
    onOk: function() {},
    onCancel: function() {}
};
