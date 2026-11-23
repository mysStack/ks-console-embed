import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-87.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1085 from "unpacked/module-1085.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module967 from "components/Inputs/UnitSlider";
import module3558 from "unpacked/module-3558.js";
const S = ((e)=>{
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
            key: "getMarks",
            value: function() {
                const max = this.props.max;
                return module1085(5).reduce((acc, item)=>{
                    const r = max * item / 4;
                    const n = r === 0 ? "0" : `${Math.floor(r)}Gi`;
                    return {
                        ...acc,
                        ...module31({}, r, n)
                    };
                }, {});
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, visible, onOk, okText, onCancel, detail } = props;
                return module553.default.createElement(module788.Form, {
                    title: t(title),
                    visible,
                    icon: "scaling",
                    data: detail,
                    okText: t(okText),
                    onCancel,
                    onOk
                }, this.renderInput());
            }
        },
        {
            key: "renderAlert",
            value: function() {
                return module553.default.createElement(module186.Alert, {
                    className: module3558.alert,
                    type: "warning",
                    title: t("EXPAND_VOLUME"),
                    icon: "exclamation",
                    message: t("VOLUME_EXPAND_TIP")
                });
            }
        },
        {
            key: "renderInput",
            value: function() {
                const props = this.props;
                const { max, min, unit } = props;
                const marks = this.getMarks();
                return module553.default.createElement(module186.Form.Item, {
                    label: t("VOLUME_CAPACITY")
                }, module553.default.createElement(module967, {
                    name: "spec.resources.requests.storage",
                    max,
                    min,
                    marks,
                    unit,
                    withInput: true,
                    onChange: this.handleChange
                }));
            }
        }
    ]);
    return r;
})(module553.Component);
export default S;
S.propTypes = {
    value: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    detail: module1.object,
    max: module1.number,
    min: module1.number,
    visible: module1.bool,
    title: module1.string,
    okText: module1.string
};
S.defaultProps = {
    detail: {},
    min: 0,
    max: 1024,
    unit: "Gi",
    title: "EXPAND_VOLUME",
    okText: "OK"
};
