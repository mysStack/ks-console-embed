import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module831 from "./module-831.js";
import module240 from "./module-240.js";
import Module788 from "./module-788.js";
import Module1336 from "./module-1336.js";
import module2752 from "./module-2752.js";
const S = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.state = {
            data: e.getData()
        };
        e.handleData = function(data) {
            e.setState({
                data
            });
        };
        e.handleOk = function() {
            const name = e.props.detail.name;
            const data = e.state.data;
            const { mode, config } = data;
            const e_formTemplate = e.formTemplate;
            if (module63(config)) {
                return module240.error({
                    content: t("CONFIGURATION_CONTENT_EMPTY_DESC")
                });
            }
            e_formTemplate.data = module31({}, `${name}.${mode}`, config);
            module74(e_formTemplate, 'metadata.annotations["kubesphere.io/configuration-data"]', config);
            e.props.onOk(e_formTemplate);
        };
        return e;
    }
    module37(r, [
        {
            key: "getData",
            value: function() {
                return {
                    mode: module26(this.formTemplate, 'metadata.annotations["springcloud.kubesphere.io/extension"]'),
                    config: module26(this.formTemplate, 'metadata.annotations["kubesphere.io/configuration-data"]', "")
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                const data = this.state.data;
                return <Module788 width={1400} title={t("EDIT_CONFIGURATION")} icon="pen" visible={visible} onCancel={onCancel} onOk={this.handleOk} isSubmitting={isSubmitting}><div className={module2752.wrapper}><Module1336 showSelect selectDisabled readOnly editorClassName={module2752.readOnly} data={this.getData()} title={t("ORIGINAL_CONFIGURATION_CONTENT_READONLY")}/><Module1336 showSelect selectDisabled data={data} title={t("CURRENT_CONFIGURATION_CONTENT")} onChange={this.handleData}/></div></Module788>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return module831(module14.toJS(this.props.detail._originData));
            }
        }
    ]);
    return r;
})(Component);
export default S;
