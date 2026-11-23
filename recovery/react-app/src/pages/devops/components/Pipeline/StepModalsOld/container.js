import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import { observer } from "unpacked/module-239.js";
import Module788 from "components/Base/Modal";
import module186 from "unpacked/module-186.js";
import module855 from "unpacked/module-855.js";
let l;
let u;
let o;
const b = observer((o = u = ((Component_1)=>{
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
        t.handleOk = function() {
            const e = t.formRef.current.getData();
            t.formRef.current.validate(function() {
                t.props.onAddStep({
                    name: "container",
                    arguments: {
                        isLiteral: true,
                        value: e.name
                    },
                    children: []
                });
            });
        };
        t.formRef = createRef();
        t.state = {
            formData: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 width={680} bodyClassName={module855.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("container")}><module186.Form data={this.state.formData} ref={this.formRef}><module186.Form.Item label={t("name")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Input name="name"/></module186.Form.Item></module186.Form></Module788>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e) {
                if (e.edittingData.type === "container") {
                    return {
                        formData: {
                            name: module26(e.edittingData, "data.value", "")
                        }
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    name: module1.string
}, u.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, l = o)) || l;
export default b;
