import "./module-15.js";
import "./module-11.js";
import "./module-18.js";
import "./module-48.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import { SEVERITY_LEVEL } from "./module-832.js";
import module831 from "./module-831.js";
import module14 from "./module-14.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import { PATTERN_ALIAS_NAME } from "./module-72.js";
import Module1082 from "./module-1082.js";
import module2125 from "./module-2125.js";
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleOk = function(e) {
            const n_props = n.props;
            const { onOk, store, detail } = n_props;
            const store_list = store.list;
            const u = module14.toJS(store_list.selectedRowKeys);
            const c = u ? u.filter((e)=>e !== detail.uid) : "";
            onOk(e);
            if (u) {
                store_list.setSelectRowKeys(c);
            }
        };
        n.timeValidator = function(e, a, r) {
            const n = a.slice(0, -1);
            if (!/^[0-9]*$/.test(n)) {
                return r({
                    message: t("INVALID_TIME_DESC")
                });
            }
            r();
        };
        n.state = {
            formData: module831(module14.toJS(e.detail._originData || e.detail))
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        formData: module831(module14.toJS(this.props.detail._originData || this.props.detail))
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                const formData = this.state.formData;
                return <module788.Form data={formData} width={691} title={t("EDIT_INFORMATION")} icon="pen" onOk={this.handleOk} okText={t("OK")} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("NAME")}><module186.Input name="metadata.name" disabled/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("CHECK_INTERVAL")} desc={t("ALERTING_POLICY_CHECK_INTERVAL_DESC")} rules={[
                    {
                        validator: this.timeValidator
                    }
                ]}><Module1082 className={module2125.duration} name="spec.interval" unitOptions={this.durationUnitOptions} defaultValue={this.durationUnitOptions[1].value}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module788.Form>;
            }
        },
        {
            key: "durationUnitOptions",
            get: function() {
                return [
                    {
                        label: t("SECONDS"),
                        value: "s"
                    },
                    {
                        label: t("MINUTES"),
                        value: "m"
                    },
                    {
                        label: t("HOURS"),
                        value: "h"
                    }
                ];
            }
        },
        {
            key: "severities",
            get: function() {
                return SEVERITY_LEVEL.map((level)=>({
                        label: t(level.label),
                        value: level.value,
                        level
                    }));
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
b.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
