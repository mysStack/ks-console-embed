import "unpacked/module-15.js";
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
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import { PATTERN_NAME } from "utils/constants";
const v = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleOk = function() {
            const onOk = n.props.onOk;
            const current = n.form.current;
            if (current) {
                current.validate(function() {
                    const a = current.getData();
                    onOk(a);
                });
            }
        };
        n.validator = function(e, a, r) {
            if (!a) {
                return r();
            }
            n.props.store.checkPipelineName({
                name: a,
                cluster: n.props.cluster,
                devops: n.props.devops
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        field: e.field,
                        message: t("NAME_EXIST_DESC")
                    });
                }
                r();
            });
        };
        n.form = createRef();
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { visible, onCancel, title, icon, formTemplate = {} } = this.props;
                return <Module788 width={691} title={title} icon={icon} onOk={this.handleOk} onCancel={onCancel} visible={visible}><module186.Form ref={this.form} data={formTemplate}><module186.Form.Item label={t("NAME")} desc={t("PIPELINE_NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("PIPELINE_NAME_TIP")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.validator
                    }
                ]}><module186.Input name="name" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="description" maxLength={256}/></module186.Form.Item></module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    formTemplate: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
v.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
