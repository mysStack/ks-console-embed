import "./module-15.js";
import "./module-5.js";
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
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module831 from "./module-831.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import Module1336 from "./module-1336.js";
import { PATTERN_NAME } from "./module-72.js";
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.formRef = createRef();
        e.formTemplate = e.getFormTemplate();
        e.state = {
            codeData: e.getCodeData()
        };
        e.handleData = function(codeData) {
            e.setState({
                codeData
            });
        };
        e.handleOk = function(a) {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    const codeData = e.state.codeData;
                    const { mode, config } = codeData;
                    const u = module26(a, "metadata.name");
                    if (module63(config)) {
                        return module240.error({
                            content: t("CONFIGURATION_CONTENT_EMPTY_DESC")
                        });
                    }
                    a.data = module31({}, `${u}.${mode}`, config);
                    module74(a, 'metadata.labels["springcloud.kubesphere.io/configuration.name"]', u);
                    module74(a, 'metadata.annotations["springcloud.kubesphere.io/extension"]', mode);
                    module74(a, 'metadata.annotations["kubesphere.io/configuration-data"]', config);
                    module74(a, 'metadata.annotations["springcloud.kubesphere.io/dataid"]', `${u}.${mode}`);
                    e.props.onOk(a);
                });
            }
        };
        e.nameValidator = function(a, r, n) {
            const e_props = e.props;
            const { store, namespace, cluster } = e_props;
            if (!r) {
                return n();
            }
            store.checkName({
                name: r,
                namespace,
                cluster
            }).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("NAME_EXIST_DESC"),
                        field: a.field
                    });
                }
                n();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getFormTemplate",
            value: function() {
                const e = this.props.formTemplate || module831(module14.toJS(this.props.detail._originData));
                if (this.props.isCopy) {
                    module74(e, "metadata.name", "");
                }
                return e;
            }
        },
        {
            key: "getCodeData",
            value: function() {
                return {
                    mode: module26(this.formTemplate, 'metadata.annotations["springcloud.kubesphere.io/extension"]', "yaml"),
                    config: module26(this.formTemplate, 'metadata.annotations["kubesphere.io/configuration-data"]', "")
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, title, isSubmitting, onCancel } = props;
                const codeData = this.state.codeData;
                return <module788.Form width={960} title={title} visible={visible} onCancel={onCancel} onOk={this.handleOk} isSubmitting={isSubmitting} formRef={this.formRef} data={this.formTemplate}><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("PATTERN_NAME_INVALID_TIP")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" autoFocus maxLength={63}/></module186.Form.Item><module186.Form.Item><Module1336 data={codeData} title={t("CONFIGURATION_CONTENT")} onChange={this.handleData}/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default _;
