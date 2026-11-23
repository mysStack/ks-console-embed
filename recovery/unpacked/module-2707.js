import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module186 from "./module-186.js";
import Module885 from "./module-885.js";
import Module816 from "./module-816.js";
import Module791 from "./module-791.js";
import Module788 from "./module-788.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import module2708 from "./module-2708.js";
let l;
let o;
let u;
const T = observer((u = o = ((Component_1)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.formRef = createRef();
        e.configValidator = function(e, a, r) {
            if (a) {
                if (module63(a)) {
                    return r({
                        message: t("INPUT_KUBECONFIG"),
                        field: e.field
                    });
                }
                return void r();
            }
            return r();
        };
        e.handleSubmit = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    const e_props = e.props;
                    const t_formTemplate = e_props.formTemplate;
                    e_props.onOk(t_formTemplate);
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, formTemplate, visible, store, readOnly, isEdgeWize, ...rest } = props;
                const detail_expiredDay = detail.expiredDay;
                const isExpired = detail_expiredDay && detail_expiredDay < 0;
                return <Module788 width={960} visible={visible} {...rest} onOk={this.handleSubmit} okText={t("UPDATE")} isSubmitting={store.isSubmitting} store={store} hideFooter={readOnly}><module186.Columns><module186.Column className="is-6"><Module816 cluster={detail} onClick={this.handleClick} isExpired={isExpired}/></module186.Column><module186.Column className="is-6"><Module791 title={isEdgeWize ? detail.hostCluster : detail.provider} description={t(isEdgeWize ? "HOSTED_IN" : "PROVIDER")}/></module186.Column></module186.Columns><module186.Form data={formTemplate} ref={this.formRef}><div className={module2708.editor}><div className={module2708.editorTitle}><module186.Icon name="kubernetes" size={20}/><span>{t("INPUT_KUBECONFIG")}</span></div><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("INPUT_KUBECONFIG")
                    },
                    {
                        validator: this.configValidator
                    }
                ]} unControl><Module885 mode="yaml" name="kubeconfig" readOnly={readOnly}/></module186.Form.Item></div></module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    formTemplate: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    readOnly: module1.bool,
    onCancel: module1.func
}, o.defaultProps = {
    formTemplate: {},
    visible: false,
    readOnly: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default T;
