import "./module-15.js";
import "./module-84.js";
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
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import Module818 from "./module-818.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import { ReactComponent } from "./module-882.js";
import { CREATE_TRIGGER_TYPE_OPTIONS } from "./module-72.js";
import Module2895 from "./module-2895.js";
import Module2896 from "./module-2896.js";
import Module2897 from "./module-2897.js";
import module1358 from "./module-1358.js";
let l;
let o;
let u;
const C = observer((u = o = ((Component_1)=>{
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
        t.handleGoBack = function() {
            const resetSubRoute = t.context.resetSubRoute;
            if (resetSubRoute) {
                resetSubRoute();
            }
            t.props.onCancel();
        };
        t.handleSubmit = function(e) {
            const onSave = t.props.onSave;
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    const t = current.getData();
                    onSave(t);
                    if (e) {
                        e();
                    }
                });
            }
        };
        t.renderTrigger = function() {
            let e;
            switch(t.state.triggerType){
                case "cron":
                    e = <Module2895/>;
                    break;
                case "prometheus":
                    e = <Module2896/>;
                    break;
                default:
                    e = <Module2897/>;
            }
            return e;
        };
        t.handleChange = function(triggerType) {
            t.setState({
                triggerType,
                formData: {}
            });
        };
        t.formRef = createRef();
        const n = [
            "cron",
            "prometheus"
        ].includes(e.trigger.type);
        t.state = {
            formData: e.trigger,
            triggerType: e.trigger.type ? n ? e.trigger.type : "custom" : "cron"
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const onCancel = this.props.onCancel;
                const registerSubRoute = this.context.registerSubRoute;
                if (registerSubRoute) {
                    registerSubRoute(this.handleSubmit, onCancel);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { formData, triggerType } = state;
                return <div className={module1358.wrapper}><div className="h6"><a className="custom-icon" onClick={this.handleGoBack}><ReactComponent/></a>{t("ADD_TRIGGER")}</div><div className={module1358.contentWrapper}><div className={module1358.card}><module186.Form data={formData} ref={this.formRef}><div>{t("TRIGGER_TYPE")}</div><module186.Form.Item><Module818 value={triggerType} options={CREATE_TRIGGER_TYPE_OPTIONS} onChange={this.handleChange}/></module186.Form.Item><div className="form-group">{this.renderTrigger()}</div></module186.Form></div></div></div>;
            }
        }
    ]);
    return r;
})(Component), o.defaultProps = {
    onSave: function() {},
    onCancel: function() {}
}, o.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
}, l = u)) || l;
export default C;
