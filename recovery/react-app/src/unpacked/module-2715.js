import "./module-15.js";
import "./module-187.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-813.js";
import "./module-315.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import { Component, createRef } from "./module-553.js";
import module788 from "components/Base/Modal";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module1624 from "./module-1624.js";
import Module2716 from "./module-2716.js";
const _ = ((Component_1)=>{
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
            const value = n.state.value;
            n.ref.current?.validate(function() {
                onOk(value);
            });
        };
        n.handleTagsInputError = function(e) {
            if (e?.message) {
                return n.setState({
                    notValidTags: true
                });
            }
            n.setState({
                notValidTags: false
            });
        };
        n.labelsValidator = function(e, a, r) {
            if (module159(a)) {
                return r();
            }
            if (module63(a)) {
                return r({
                    message: t("CLUSTER_TAG_EMPTY_DESC")
                });
            }
            return !!a.every((e)=>{
                const t = e.key.trim();
                const a = e.value.trim();
                return t.length <= 63 && a.length <= 63 && t !== "" && a !== "";
            }) || r({
                message: t("ENT_CLUSTER_TAG_DESC")
            });
        };
        n.state = {
            value: e.detail,
            notValidTags: false
        };
        n.ref = createRef();
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.detail !== this.props.detail && this.props.detail !== this.state.value) {
                    this.setState({
                        value: this.props.item
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { isAdd = true, ...rest } = props;
                return <module788.Form width={960} {...rest} formRef={this.ref} data={this.state} onOk={this.handleOk} disableOk={this.state.notValidTags}>{isAdd && <><module186.Alert type="info" message={t("CREATE_TAGS_DESC")}/><div className={module3(module1624.tagAddTitle)}>{t("TAG_PL")}</div></>}<module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("CLUSTER_TAG_EMPTY_DESC")
                    },
                    {
                        validator: this.labelsValidator
                    }
                ]}><Module2716 name="value" addText={t("ADD")} onError={this.handleTagsInputError} className={module3(module1624.tagItem, module31({}, module1624.tagItemUpdate, !isAdd))}/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default _;
