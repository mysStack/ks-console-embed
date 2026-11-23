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
import module159 from "unpacked/module-159.js";
import Module788 from "components/Base/Modal";
import Module885 from "components/EditMode";
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleOk = function() {
            const t_props = t.props;
            const { onOk, onCancel } = t_props;
            const n = t.editor.current.getData();
            if (module159(n)) {
                onCancel();
            } else {
                onOk(n);
            }
        };
        t.state = {
            value: {
                kind: "NetworkPolicy",
                apiVersion: "networking.k8s.io/v1",
                metadata: {
                    name: "",
                    namespace: ""
                },
                spec: {
                    podSelector: {}
                }
            }
        };
        t.editor = createRef();
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                return <Module788 icon="firewall" title={t("CREATE_NETWORK_POLICY_TCAP")} description={t("CREATE_NETWORK_POLICY_DESC")} onOk={this.handleOk} onCancel={onCancel} okText={t("OK")} visible={visible} isSubmitting={isSubmitting} width={960}><Module885 ref={this.editor} value={this.state.value}/></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool,
    readOnly: module1.bool
};
v.defaultProps = {
    visible: false,
    isSubmitting: false,
    readOnly: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
};
