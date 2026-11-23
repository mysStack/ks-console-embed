import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module844 from "./module-844.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import { silentPolicyTypes } from "./module-72.js";
import module481 from "./module-481.js";
import module3371 from "./module-3371.js";
import Module3372 from "./module-3372.js";
import Module3374 from "./module-3374.js";
import Module1363 from "./module-1363.js";
let o;
const options = [
    {
        label: t("SILENCE_EVERY_DAY"),
        value: 1
    },
    {
        label: t("SILENCE_EVERY_WEEK"),
        value: 2
    },
    {
        label: t("SILENCE_EVERY_MONTH"),
        value: 3
    }
];
const k = {
    hour: undefined,
    minute: Boolean,
    second: Boolean
};
const I = {
    hour: undefined,
    minute: function(e) {
        return e < 59;
    },
    second: function(e) {
        return e < 59;
    }
};
const P = observer(o = ((Component_1)=>{
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
        e.types = Object.values(silentPolicyTypes).map((e)=>({
                label: t(e.name),
                value: e.value
            }));
        e.validateCron = function(e, a, r) {
            if (!a) {
                return r();
            }
            try {
                module481.parseExpression(a);
            } catch (e) {
                return r(t("CRON_EXPRESSION_ERROR_DESC"));
            }
            r();
        };
        e.renderCron = function() {
            return <module186.Form.Item label={t("CRON_EXPRESSION")} desc={t("CRON_EXPRESSION_DESC")} rules={[
                {
                    validator: e.validateCron
                },
                {
                    required: true,
                    message: t("CRON_EXPRESSION_REQUIRE_DESC")
                }
            ]}><module186.Input name="cron"/></module186.Form.Item>;
        };
        e.validateDateRange = function(e) {
            return function(a, r, n) {
                const l = module96(r, 2);
                const o = l[0];
                const u = l[1];
                if (module844(o) || module844(u)) {
                    return n(t("SILENCE_TIME_RANGE_EMPTY_DESC"));
                }
                if (e ? new Date(o).getTime() >= new Date(u).getTime() : o >= u) {
                    return n(t("TIMERANGE_SELECTOR_MSG"));
                }
                return n();
            };
        };
        e.renderSpecific = function() {
            return <module186.Form.Item label={t("TIME_RANGE")} desc={t("SELECT_START_TIME_AND_END_TIME")} rules={[
                {
                    required: true,
                    message: t("SILENCE_TIME_RANGE_EMPTY_DESC")
                },
                {
                    validator: e.validateDateRange(true)
                }
            ]}><Module3374 type="date" name="dateRange"/></module186.Form.Item>;
        };
        e.renderSilentTime = function() {
            return <module186.Form.Item label={t("TIME_RANGE")} desc={t("SELECT_START_TIME_AND_END_TIME")} rules={[
                {
                    required: true,
                    message: t("SILENCE_TIME_RANGE_EMPTY_DESC")
                },
                {
                    validator: e.validateDateRange(false)
                }
            ]}><Module3374 type="time" name="timeRange" disabled={[
                k,
                I
            ]} minuteStep={59} secondStep={59}/></module186.Form.Item>;
        };
        e.renderDays = function(e) {
            return <module186.Form.Item rules={[
                {
                    required: true,
                    message: t("SELECT_DATE")
                }
            ]}><Module3372 {...e}/></module186.Form.Item>;
        };
        e.renderWeek = function() {
            const formTemplate = e.props.formTemplate;
            return e.renderDays({
                name: "week",
                type: "week",
                defaultValue: formTemplate.week ?? [],
                multi: true
            });
        };
        e.renderMonth = function() {
            const formTemplate = e.props.formTemplate;
            return e.renderDays({
                name: "month",
                type: "month",
                defaultValue: formTemplate.month ?? [],
                multi: true
            });
        };
        e.renderSilentPeriod = function() {
            return <module186.Form.Item label={t("SILENCE_DATE")}><module186.Select name="timeType" options={options} defaultValue={e.props.formTemplate.timeType} onChange={function(timeType) {
                e.handleChange({
                    timeType,
                    week: [],
                    month: []
                });
            }}/></module186.Form.Item>;
        };
        e.renderPeriodic = function() {
            const timeType = e.props.formTemplate.timeType;
            return <>{e.renderSilentPeriod()}{timeType === 2 && e.renderWeek()}{timeType === 3 && e.renderMonth()}{e.renderSilentTime()}</>;
        };
        e.handleChange = function(t) {
            Object.entries(t).forEach((t)=>{
                module74(...[
                    e.props.formTemplate
                ].concat(module61(t)));
            });
            e.forceUpdate();
        };
        e.renderSilent = function() {
            const type = e.props.formTemplate.type;
            return <><module186.Form.Item label={t("TYPE")} desc={t("SILENCE_TIME_TYPE_DESC")}><module186.Select name="type" options={e.unCustomTypes} defaultValue={type} onChange={function(type_1) {
                e.handleChange({
                    type: type_1,
                    duration: null
                });
            }}/></module186.Form.Item>{type === 2 && e.renderSpecific()}{type === 3 && e.renderPeriodic()}</>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                return <div>{formTemplate.isDefaultCron && <Module1363 {...this.tabs}/>}<div className={module3371.formContainer}><div>{formTemplate.isCron ? <module186.Form key={formTemplate.isCron.toString()} ref={formRef} data={formTemplate}>{this.renderCron()}</module186.Form> : <module186.Form ref={formRef} data={formTemplate}>{this.renderSilent()}</module186.Form>}</div></div></div>;
            }
        },
        {
            key: "unCustomTypes",
            get: function() {
                return this.types.filter((e)=>e.value !== 4);
            }
        },
        {
            key: "tabs",
            get: function() {
                const _this = this;
                return {
                    value: this.props.formTemplate.isCron,
                    onChange: function(isCron) {
                        return _this.handleChange({
                            isCron
                        });
                    },
                    options: [
                        {
                            value: false,
                            label: t("SILENT_TEMPLATE")
                        },
                        {
                            value: true,
                            label: t("SILENT_CRON")
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(Component)) || o;
export default P;
