import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component, createRef } from "./module-553.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import Module788 from "./module-788.js";
import module186 from "./module-186.js";
import module14 from "./module-14.js";
import { PATTERN_URL } from "./module-72.js";
import module2859 from "./module-2859.js";
import Module2860 from "./module-2860.js";
let l;
let o;
let u;
let c;
let s;
const I = observer((o = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        module65(e, "type", u, module88(e));
        e.formRef = createRef();
        module65(e, "formData", c, module88(e));
        module65(e, "handleTypeChange", s, module88(e));
        e.handleSave = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    const e_props = e.props;
                    const { onOk, formTemplate } = e_props;
                    const e_formData = e.formData;
                    const l = module26(formTemplate, "metadata.name");
                    const description = module26(formTemplate, 'metadata.annotations["kubesphere.io/description"]');
                    onOk({
                        ...e_formData,
                        type: "grafana",
                        name: l,
                        description,
                        grafanaDashboardName: l
                    });
                });
            }
        };
        e.renderUpload = function() {
            if (e.type === "json") {
                return <module186.Form.Item label={t("SUPPORT_JSON_FILE")} rules={[
                    {
                        required: true,
                        message: t("UPLOAD_FILE_TIP")
                    }
                ]}><Module2860 name="grafanaDashboardContent"/></module186.Form.Item>;
            }
            return null;
        };
        e.renderUrl = function() {
            if (e.type === "json") {
                return null;
            }
            return <module186.Form.Item label={t("UPLOAD_GRAFANA_URL")} rules={[
                {
                    required: true,
                    message: t("ENTER_GRAFANA_URL")
                },
                {
                    pattern: PATTERN_URL,
                    message: t("INVALID_URL_DESC")
                }
            ]}><module186.Input name="grafanaDashboardUrl" autoFocus maxLength={63}/></module186.Form.Item>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const onCancel = this.props.onCancel;
                return <Module788 visible width={600} onCancel={onCancel} title={t("UPLOAD_GRAFANA_DASHBOARD")} onOk={this.handleSave}><div className={module2859.container}><module186.Form data={this.formData} ref={this.formRef}><module186.RadioGroup mode="button" value={this.type} onChange={this.handleTypeChange} size="small"><module186.RadioButton value="json">{t("UPLOAD_FROM_LOCAL_STORAGE")}</module186.RadioButton><module186.RadioButton value="url">{t("UPLOAD_FROM_URL")}</module186.RadioButton></module186.RadioGroup>{this.renderUpload()}{this.renderUrl()}</module186.Form></div></Module788>;
            }
        }
    ]);
    return r;
})(Component), u = module49(o.prototype, "type", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "json";
    }
}), c = module49(o.prototype, "formData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), s = module49(o.prototype, "handleTypeChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.type = t;
            _this.formData = {};
        };
    }
}), l = o)) || l;
export default I;
