import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-30.js";
import "./module-97.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module74 from "./module-74.js";
import { TypeSelect } from "components/Base/index";
import { ArrayInput } from "components/Inputs/index";
import Module1368 from "components/Forms/Notification/BaseForm/ConditionSelect";
import module3378 from "./module-3378.js";
const options = [
    {
        label: t("ALL_SILENT_NOTIFICATIONS_TCAP"),
        description: t("ALL_SILENT_NOTIFICATIONS_DESC"),
        icon: "timed-task",
        value: 1
    },
    {
        label: t("CUSTOM_SILENT_NOTIFICATIONS_TCAP"),
        description: t("CUSTOM_SILENT_NOTIFICATIONS_DESC"),
        icon: "timed-task",
        value: 2
    }
];
const g = ((Component_1)=>{
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
        e.handleChange = function(t) {
            const formTemplate = e.props.formTemplate;
            module74(formTemplate, "condition", t);
            if (t === 1) {
                module74(formTemplate, "matchExpressions", []);
            } else {
                module74(formTemplate, "matchExpressions", [
                    {}
                ]);
            }
            e.forceUpdate();
        };
        e.checkItemValid = function(e) {
            let t = e.key && e.operator;
            if (t && [
                "In",
                "NotIn"
            ].includes(e.operator)) {
                t = t && e.values.length > 0;
            }
            if (e.operator === "Match") {
                t = t && e.regexValue;
            }
            return t;
        };
        e.itemValidator = function(a, r, n) {
            if (r) {
                if (r.some((t)=>!e.checkItemValid(t))) {
                    return n({
                        message: t("INVALID_SILENCE_CONDITION")
                    });
                }
                return void n();
            }
            return n();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderControlAnnotation",
            value: function() {
                return <div className={module3378.annotation}><module186.Icon name="question"/><p className={module3378.desc}>{t.html("NOTIFICATION_CONDITION_SETTING_TIP")}</p></div>;
            }
        },
        {
            key: "renderControlSetting",
            value: function() {
                return <div className={module3378.conditionContainer}><module186.Form.Item rules={[
                    {
                        validator: this.itemValidator,
                        checkOnSubmit: true
                    }
                ]}><ArrayInput name="matchExpressions" itemType="object" addText={t("ADD")} checkItemValid={this.checkItemValid} desc={this.renderControlAnnotation()}><Module1368/></ArrayInput></module186.Form.Item></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                return <module186.Form ref={formRef} data={formTemplate}><module186.Form.Item><TypeSelect name="condition" defaultValue={1} options={options} onChange={this.handleChange}/></module186.Form.Item>{formTemplate.condition === 2 && this.renderControlSetting()}</module186.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
