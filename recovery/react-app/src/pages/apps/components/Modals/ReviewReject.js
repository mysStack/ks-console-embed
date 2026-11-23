import "unpacked/module-15.js";
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
import module3164 from "unpacked/module-3164.js";
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
        t.handleReject = function() {
            return t.formRef.validate(function() {
                return t.props.onOk({
                    version_id: t.props.versionId,
                    message: t.state.message
                });
            });
        };
        t.changeMessage = function(message) {
            t.setState({
                message
            });
        };
        t.state = {
            message: ""
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, ...rest } = props;
                const data = {
                    message: this.state.message
                };
                return module553.default.createElement(module788, {
                    width: 600,
                    visible,
                    ...rest,
                    onOk: this.handleReject,
                    footerClassName: module3164.footer
                }, module553.default.createElement(module186.Form, {
                    data,
                    ref: function(t) {
                        _this.formRef = t;
                    },
                    className: module3164.rejectForm
                }, module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            required: true,
                            message: t("REJECT_REASON_TIP")
                        }
                    ]
                }, module553.default.createElement(module186.TextArea, {
                    name: "message",
                    onChange: this.changeMessage
                }))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default y;
y.propTypes = {
    versionId: module1.string,
    onOk: module1.func,
    onCancel: module1.func
};
y.defaultProps = {
    versionId: "",
    onOk: function() {},
    onCancel: function() {}
};
