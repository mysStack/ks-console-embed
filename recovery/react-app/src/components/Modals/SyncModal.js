import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { PRUNE_PROPAGATION_POLICY_OPTIONS } from "utils/constants";
import module2657 from "unpacked/module-2657.js";
let l;
let o;
let u;
const _ = observer((u = o = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.form = createRef();
        e.handleSubmit = function() {
            e.props.onOk(e.form.current.getData());
        };
        e.handleCheckboxChange = function(t) {
            return function(a) {
                const formTemplate = e.props.formTemplate;
                module74(formTemplate, t, a);
                e.forceUpdate();
            };
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { title, visible, onCancel, formTemplate } = props;
                const u = module26(formTemplate, "syncOptions.Validate", true);
                return <Module788 width={960} title={title || t("CREATE_ROLE")} onCancel={onCancel} onOk={this.handleSubmit} visible={visible}><module186.Form ref={this.form} data={formTemplate}><div className={module2657.columns}><div className={module2657.column}><module186.Form.Item label={t("CODE_REPOSITORY_URL")}><module186.Input name="repoSource.repoURL" disabled/></module186.Form.Item></div><div className={module2657.column}><module186.Form.Item label={t("REVISION")} desc={t("REVISION_DESC")}><module186.Input name="repoSource.targetRevision"/></module186.Form.Item></div></div><div className={module2657.columns}><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="prune" checked={module26(formTemplate, "prune", false)} onChange={this.handleCheckboxChange("prune")}>{t("PRUNE")}</module186.Checkbox></module186.Form.Item></div><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="dryRun" checked={module26(formTemplate, "dryRun", false)} onChange={this.handleCheckboxChange("dryRun")}>{t("DRY_RUN")}</module186.Checkbox></module186.Form.Item></div><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="applyOnly" checked={module26(formTemplate, "applyOnly", false)} onChange={this.handleCheckboxChange("applyOnly")}>{t("APPLY_ONLY")}</module186.Checkbox></module186.Form.Item></div><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="syncStrategy.apply.force" checked={module26(formTemplate, "syncStrategy.apply.force", false)} onChange={this.handleCheckboxChange("syncStrategy.apply.force")}>{t("FORCE")}</module186.Checkbox></module186.Form.Item></div></div><div className={module2657.wrapper}><h6>{t("SYNC_SETTINGS")}</h6><div className={module2657.wrapper_item}><div className={`${module2657.columns} ${module2657.wrapper_item_com}`}><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="syncOptions.Validate" checked={!u} onChange={function(t) {
                    _this.handleCheckboxChange("syncOptions.Validate")(!t);
                }}>{t("SKIP_SCHEMA_VALIDATION")}</module186.Checkbox></module186.Form.Item></div><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="syncOptions.CreateNamespace" checked={module26(formTemplate, "syncOptions.CreateNamespace", false)} onChange={this.handleCheckboxChange("syncOptions.CreateNamespace")}>{t("AUTO_CREATE_PROJECT")}</module186.Checkbox></module186.Form.Item></div><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="syncOptions.PruneLast" checked={module26(formTemplate, "syncOptions.PruneLast", false)} onChange={this.handleCheckboxChange("syncOptions.PruneLast")}>{t("PRUNE_LAST")}</module186.Checkbox></module186.Form.Item></div><div className={`${module2657.column} ${module2657.column_card}`}><module186.Form.Item><module186.Checkbox name="syncOptions.ApplyOutOfSyncOnly" checked={module26(formTemplate, "syncOptions.ApplyOutOfSyncOnly", false)} onChange={this.handleCheckboxChange("syncOptions.ApplyOutOfSyncOnly")}>{t("APPLY_OUT_OF_SYNC_ONLY")}</module186.Checkbox></module186.Form.Item></div></div><module186.Form.Item label={t("PRUNE_PROPAGATION_POLICY")}><module186.Select name="syncOptions.PrunePropagationPolicy" options={PRUNE_PROPAGATION_POLICY_OPTIONS}/></module186.Form.Item><module186.Form.Item><div className={module2657.checkbox_item}><module186.Checkbox name="syncOptions.Replace" checked={module26(formTemplate, "syncOptions.Replace", false)} onChange={this.handleCheckboxChange("syncOptions.Replace")}/><div className={module2657.checkbox_item_info}><p>{t("REPLACE_RESOURCE")}</p><span>{t("REPLACE_RESOURCE_DESC")}</span></div></div></module186.Form.Item></div></div></module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    store: module1.object,
    module: module1.string,
    formTemplate: module1.object,
    title: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default _;
