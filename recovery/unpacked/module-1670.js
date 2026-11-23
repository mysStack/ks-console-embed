import "./module-15.js";
import "./module-97.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module1098 from "./module-1098.js";
import { NumberInput, TimeUnitInput } from "./module-1192.js";
import Module951 from "./module-951.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import { Component, createRef } from "./module-553.js";
import module2889 from "./module-2889.js";
import Module2890 from "./module-2890.js";
import Module2894 from "./module-2894.js";
import Module2898 from "./module-2898.js";
const O = ((Component_1)=>{
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
        n.minCountRef = createRef();
        n.onShowAddTrigger = function() {
            n.setState({
                visible: true,
                currentTrigger: {},
                currentTriggerIndex: undefined
            });
        };
        n.onShowEdit = function(currentTrigger, currentTriggerIndex) {
            n.setState({
                visible: true,
                currentTrigger,
                currentTriggerIndex
            });
        };
        n.resetState = function() {
            n.setState({
                visible: false,
                currentTrigger: {},
                currentTriggerIndex: undefined
            });
        };
        n.handleFallback = function(fallback) {
            if (fallback) {
                module74(n.props.formTemplate, "spec.fallback", {
                    failureThreshold: 3,
                    replicas: 6
                });
            } else {
                module242(n.props.formTemplate, "spec.fallback");
            }
            n.setState({
                fallback
            });
        };
        n.onSave = function(e) {
            const currentTriggerIndex = n.state.currentTriggerIndex;
            const a = module26(n.props.formTemplate, "spec.triggers", []);
            if (currentTriggerIndex !== undefined) {
                a[currentTriggerIndex] = e;
            } else {
                a.push(e);
            }
            module74(n.props.formTemplate, "spec.triggers", a);
            n.setState({
                visible: false,
                currentTrigger: {},
                currentTriggerIndex: undefined,
                shouldValidate: n.state.shouldValidate + 1
            });
        };
        n.validator = function(e, a, r) {
            if (a || !module26(n.props.formTemplate, "spec.triggers", []).some((e)=>e.type === "prometheus")) {
                if (a && a > module26(n.props.formTemplate, "spec.maxReplicaCount", 0)) {
                    r(t("MIN_REPLICA_COUNT_LESS_THAN_MAX"));
                }
                r();
            } else {
                r(t("PROMETHEUS_MIN_REPLICA_COUNT_DESC"));
            }
        };
        n.state = {
            visible: false,
            currentTriggerIndex: undefined,
            currentTrigger: {},
            fallback: !!module26(e.formTemplate, "spec.fallback"),
            shouldValidate: 0
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                let a;
                if (t.shouldValidate !== this.state.shouldValidate) {
                    if (!((a = this.minCountRef.current) === null || a === undefined)) {
                        a.validate({
                            "spec.minReplicaCount": module26(this.props.formTemplate, "spec.minReplicaCount")
                        });
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formRef, formTemplate } = props;
                const state = this.state;
                const { visible, currentTrigger } = state;
                if (visible) {
                    return <Module2894 trigger={module136(currentTrigger)} onCancel={this.resetState} onSave={this.onSave}/>;
                }
                return <module186.Form data={formTemplate} ref={formRef}><module186.Columns><module186.Column><module186.Form.Item ref={this.minCountRef} label={t("MINIMUM_REPLICAS")} desc={t("SCALE_MINIMUM_REPLICAS_DESC")} rules={[
                    {
                        validator: this.validator
                    }
                ]}><NumberInput name="spec.minReplicaCount" integer min={0}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("MAXIMUM_REPLICAS")} desc={t("SCALE_MAXIMUM_REPLICAS_DESC")}><NumberInput name="spec.maxReplicaCount" integer min={0}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("POLLING_INTERVAL")} desc={t("POLLING_INTERVAL_DESC")}><TimeUnitInput name="spec.pollingInterval" integer min={0}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("WAITING_TIME")} desc={t("WAITING_TIME_DESC")}><TimeUnitInput name="spec.cooldownPeriod" integer min={0}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Group label={t("ROLL_BACK")} desc={t("SCALE_ROLL_BACK_DESC")} checkable onChange={this.handleFallback} key={this.state.fallback}><div className="padding-12"><module186.Columns><module186.Column><module186.Form.Item label={t("FAILURE_THRESHOLD")} desc={t("SCALE_FAILURE_THRESHOLD_DESC")} rules={[
                    {
                        required: this.state.fallback,
                        message: t("EMPTY_FAILURE_THRESHOLD")
                    }
                ]}><NumberInput name="spec.fallback.failureThreshold" integer min={0}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("FALLBACK_NUMBER")} desc={t("FALLBACK_NUMBER_DESC")} rules={[
                    {
                        required: this.state.fallback,
                        message: t("EMPTY_FALLBACK_NUMBER_DESC")
                    }
                ]}><NumberInput name="spec.fallback.replicas" integer min={0}/></module186.Form.Item></module186.Column></module186.Columns></div></module186.Form.Group><div className={module2889.triggerWrapper}><div className={module2889.title}>{t("TRIGGER_SETTING")}</div><div className={module2889.desc}>{t("TRIGGER_SETTING_DESC")}</div><module186.Form.Item><Module2898 name="spec.triggers" onShowTrigger={this.onShowAddTrigger} onShowEdit={this.onShowEdit} onCancel={this.resetState} onChange={function(t) {
                    module74(formTemplate, "spec.triggers", t);
                    _this.setState({
                        shouldValidate: _this.state.shouldValidate + 1
                    });
                }}/></module186.Form.Item></div><Module951 className={module2889.advanced}><div className={module2889.checkableText}><module186.Form.Item><Module1098 name="spec.advanced.restoreToOriginalReplicaCount" title={t("RESTORE_TO_ORIGINAL_REPLICA_COUNT")} description={t("RESTORE_TO_ORIGINAL_REPLICA_COUNT_DESC")}/></module186.Form.Item></div><module186.Form.Group label={t("SCALE_BEHAVIOR")} desc={t("SCALE_BEHAVIOR_DESC")} keepDataWhenUnCheck checkable><Module2890 type="scaleUp" prefix="spec.advanced.horizontalPodAutoscalerConfig.behavior.scaleUp"/><Module2890 type="scaleDown" prefix="spec.advanced.horizontalPodAutoscalerConfig.behavior.scaleDown"/></module186.Form.Group></Module951></module186.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default O;
