import "./module-15.js";
import "./module-11.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module831 from "./module-831.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import Module1356 from "./module-1356.js";
import module441 from "./module-441.js";
let l;
let o;
let u;
const _ = observer((u = o = ((Component_1)=>{
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
        t.roleStore = new module441;
        t.handleOk = function(e) {
            const t_props = t.props;
            const { onOk, store, detail } = t_props;
            const store_list = store.list;
            const u = module14.toJS(store_list.selectedRowKeys).filter((e)=>e !== detail.uid);
            onOk(e);
            store_list.setSelectRowKeys(u);
        };
        t.state = {
            formData: module831(module14.toJS(e.detail._originData))
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        formData: module831(module14.toJS(this.props.detail._originData))
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, visible, onCancel, isSubmitting, cluster, namespace } = props;
                const formData = this.state.formData;
                return <module788.Form width={600} title={title || t("CHANGE_ROLE")} icon="client" data={formData} onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("PROJECT_ROLE_SI")} desc={t("SERVICE_ACCOUNT_PROJECT_ROLE_DESC")}><Module1356 name="metadata.annotations['iam.kubesphere.io/role']" cluster={cluster} namespace={namespace} placeholder=" "/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    detail: module1.object,
    title: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default _;
