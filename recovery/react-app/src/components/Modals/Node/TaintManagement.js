import "unpacked/module-15.js";
import "unpacked/module-6.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import Module1695 from "components/Modals/Node/TaintManagement/TaintInput";
import module1697 from "unpacked/module-1697.js";
const b = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleSubmit = function(e) {
            const a = module26(e, "spec.taints");
            if (module63(a)) {
                t.props.onOk(e);
            } else {
                const r = {};
                let n = true;
                a.forEach((e)=>{
                    if (r[e.key]) {
                        n = false;
                    } else {
                        r[e.key] = 1;
                    }
                });
                if (n) {
                    t.props.onOk(e);
                }
            }
        };
        t.state = {
            formData: {
                spec: {
                    taints: e.value
                }
            }
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { visible, value } = props;
                if (visible && visible !== e.visible && e.value !== value) {
                    this.setState({
                        formData: {
                            spec: {
                                taints: value
                            }
                        }
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value: _value, onOk: _onOk, ...rest } = props;
                return <module788.Form width={1162} bodyClassName={module1697.body} title={t("EDIT_TAINTS")} icon="wrench" okText={t("OK")} data={this.state.formData} onOk={this.handleSubmit} {...rest}><div className={module1697.wrapper}><div className={module1697.title}>{t("TAINTS")}</div><module186.Alert type="info" message={t("TAINTS_DESC")}/><div className={module1697.content}><module186.Form.Item><Module1695 name="spec.taints"/></module186.Form.Item></div></div></module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    value: module1.array,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
b.defaultProps = {
    visible: false,
    value: [
        {}
    ],
    onOk: function() {},
    onCancel: function() {}
};
