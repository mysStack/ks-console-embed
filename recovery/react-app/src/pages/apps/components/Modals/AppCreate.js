import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
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
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module3133 from "unpacked/module-3133.js";
import module3135 from "unpacked/module-3135.js";
const b = ((e)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onOk, ...rest } = props;
                return module553.default.createElement(module788, {
                    width: 600,
                    bodyClassName: module3135.body,
                    visible,
                    hideHeader: true,
                    ...rest
                }, module553.default.createElement("div", {
                    className: module3(module3135.header, "clearfix")
                }, module553.default.createElement("img", {
                    src: "/assets/application.svg",
                    alt: ""
                }), module553.default.createElement("div", {
                    className: module3135.title
                }, " ", t("CREATE_APP_TEMPLATE")), module553.default.createElement("div", {
                    className: module3135.description
                }, t("CREATE_APP_TEMPLATE_DESC"))), module553.default.createElement(module3133, {
                    className: module3135.item,
                    title: t("UPLOAD_HELM_TITLE"),
                    show: true
                }, module553.default.createElement("div", {
                    className: module3135.more
                }, module553.default.createElement("div", {
                    className: module3135.description
                }, t("HELM_CHART_FORMAT_DESC")), module553.default.createElement(module186.Button, {
                    type: "control",
                    onClick: onOk
                }, t("UPLOAD")))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default b;
b.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
b.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
