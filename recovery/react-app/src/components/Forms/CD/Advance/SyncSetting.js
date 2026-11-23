import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module818 from "components/Base/TypeSelect";
import { SYNC_STRATEGY } from "utils/constants";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module1617 from "unpacked/module-1617.js";
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
    function r(...c_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...c_1);
        e.handleCheckboxChange = function(t) {
            return function(a) {
                const formTemplate = e.props.formTemplate;
                module74(formTemplate, t, a);
                e.forceUpdate();
            };
        };
        e.handleChange = function(t) {
            const formTemplate = e.props.formTemplate;
            module74(formTemplate, "syncPolicy.type", t);
            e.forceUpdate();
        };
        e.handlePruneChange = function(t) {
            const formTemplate = e.props.formTemplate;
            module74(formTemplate, "syncOptions.PrunePropagationPolicy", t);
            e.forceUpdate();
        };
        e.handleReplace = function(t) {
            const formTemplate = e.props.formTemplate;
            module74(formTemplate, "syncOptions.Replace", t);
            e.forceUpdate();
        };
        e.renderCheckboxItem = function({ title, desc, name, displayTitle, displayDesc, ...rest }) {
            return <module186.Form.Item key={name}><div className={module1617.checkbox_item}><module186.Checkbox name={name} checked={module26(e.props.formTemplate, name, false)} onChange={e.handleCheckboxChange(name)} {...rest}/><div className={module1617.checkbox_item_info}><p>{displayTitle ?? t(title)}</p><span>{displayDesc ?? t(desc)}</span></div></div></module186.Form.Item>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                return <module186.Form data={formTemplate} ref={formRef}><div className={module1617.wrapper}><h6>{t("SYNC_STRATEGY_TCAP")}</h6><div className={module1617.wrapper_item}><div className={module1617.wrapper_item_com}><module186.Form.Item><Module818 name="syncPolicy.type" defaultValue="manual" options={this.syncOptions} onChange={this.handleChange}/></module186.Form.Item></div>{this.syncPolicyType === "automated" && <div className={module1617.columns}>{this.syncPolicyTypeOptions.map(this.renderCheckboxItem)}</div>}</div></div><div className={module1617.wrapper}><h6>{t("SYNC_SETTINGS")}</h6><div className={module1617.wrapper_item}><div className={`${module1617.columns} ${module1617.wrapper_item_com}`}>{this.syncOptionsOptions.map(this.renderCheckboxItem)}</div><module186.Form.Item label={t("PRUNE_PROPAGATION_POLICY")}><Module818 name="syncOptions.PrunePropagationPolicy" defaultValue="foreground" options={this.prunePropagationPolicyOptions} onChange={this.handlePruneChange}/></module186.Form.Item><module186.Form.Item><div className={module1617.checkbox_item}><module186.Checkbox name="syncOptions.Replace" checked={this.getReplace} onChange={this.handleReplace}/><div className={module1617.checkbox_item_info}><p>{t("REPLACE_RESOURCE")}</p><span>{t("REPLACE_RESOURCE_DESC")}</span></div></div></module186.Form.Item></div></div></module186.Form>;
            }
        },
        {
            key: "syncPolicyTypeOptions",
            get: function() {
                return [
                    {
                        title: "PRUNE_RESOURCES",
                        desc: "PRUNE_RESOURCES_DESC",
                        name: "syncPolicy.prune"
                    },
                    {
                        title: "SELF_HEAL",
                        desc: "SELF_HEAL_DESC",
                        name: "syncPolicy.selfHeal"
                    }
                ];
            }
        },
        {
            key: "syncOptionsOptions",
            get: function() {
                return [
                    {
                        title: "SKIP_SCHEMA_VALIDATION",
                        desc: "SKIP_SCHEMA_VALIDATION_DESC",
                        name: "syncOptions.Validate"
                    },
                    {
                        title: "AUTO_CREATE_PROJECT",
                        desc: "AUTO_CREATE_PROJECT_DESC",
                        name: "syncOptions.CreateNamespace"
                    },
                    {
                        title: "PRUNE_LAST",
                        desc: "PRUNE_LAST_DESC",
                        name: "syncOptions.PruneLast"
                    },
                    {
                        title: "APPLY_OUT_OF_SYNC_ONLY",
                        desc: "APPLY_OUT_OF_SYNC_ONLY_DESC",
                        name: "syncOptions.ApplyOutOfSyncOnly"
                    }
                ];
            }
        },
        {
            key: "prunePropagationPolicyOptions",
            get: function() {
                return [
                    {
                        label: "foreground",
                        value: "foreground",
                        description: t("FOREGROUND_DESC")
                    },
                    {
                        label: "background",
                        value: "background",
                        description: t("BACKGROUND_DESC")
                    },
                    {
                        label: "orphan",
                        value: "orphan",
                        description: t("ORPHAN_DESC")
                    }
                ];
            }
        },
        {
            key: "syncPolicyType",
            get: function() {
                const formTemplate = this.props.formTemplate;
                return formTemplate?.syncPolicy?.type ?? "manual";
            }
        },
        {
            key: "syncOptions",
            get: function() {
                return SYNC_STRATEGY.map(({ label, value, description })=>({
                        label: t(label),
                        description: t(description),
                        icon: "timed-task",
                        value
                    }));
            }
        },
        {
            key: "getReplace",
            get: function() {
                const formTemplate = this.props.formTemplate;
                return module26(formTemplate, "syncOptions.Replace", false);
            }
        }
    ]);
    return r;
})(Component);
export default g;
