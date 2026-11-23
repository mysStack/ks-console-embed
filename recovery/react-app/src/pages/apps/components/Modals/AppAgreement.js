import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module3208 from "unpacked/module-3208.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleChangeCheck = function(e) {
            localStorage.setItem(`${globals.user.username}-app-agreement`, e);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onOk, ...rest } = props;
                return module553.default.createElement(module788, {
                    width: 600,
                    bodyClassName: module3208.body,
                    visible,
                    hideHeader: true,
                    onOk,
                    okText: t("AGREE"),
                    ...rest
                }, module553.default.createElement("div", {
                    className: module3208.wrapper
                }, module553.default.createElement("img", {
                    src: "/assets/app-safety.svg",
                    alt: ""
                }), module553.default.createElement("div", {
                    className: module3208.content
                }, module553.default.createElement("div", {
                    className: module3208.title
                }, " ", t("APP_DEPLOY_AGREEMENT")), module553.default.createElement("ul", null, module553.default.createElement("li", null, t("APP_DEPLOY_AGREEMENT_DESC_1")), module553.default.createElement("li", null, t("APP_DEPLOY_AGREEMENT_DESC_2"))), module553.default.createElement(module186.Checkbox, {
                    onChange: this.handleChangeCheck
                }, t("DO_NOT_REMIND_AGAIN")))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default y;
y.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
y.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
