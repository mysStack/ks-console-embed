import "unpacked/module-15.js";
import "unpacked/module-73.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PRESET_GROUPS, CLUSTER_PROVIDERS, PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
import { ClusterTagAdd } from "unpacked/module-925.js";
import Module2671 from "components/Forms/Cluster/NodeList";
import Module2673 from "components/Forms/Cluster/SubTitle";
import module2675 from "unpacked/module-2675.js";
let l;
const S = observer(l = ((Component_1)=>{
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
        n.groupOptionRenderer = function(e) {
            return <><module186.Tag type={CLUSTER_GROUP_TAG_TYPE[e.value]}>{t(`ENV_${e.label.toUpperCase()}`)}</module186.Tag>  {e.label}</>;
        };
        n.toggleAdvanced = function() {
            n.setState(function(e) {
                return {
                    toggleAdvanced: !e.toggleAdvanced
                };
            });
        };
        n.providerOptionRenderer = function(e) {
            return <><module186.Icon className="margin-r8" name={e.icon} type="light" size={20}/>{e.label}</>;
        };
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            n.props.store.checkName({
                name: a
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.nodesValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const l = module26(n.props.formTemplate, "spec.roleGroups.master.length", 0);
            const o = module26(n.props.formTemplate, "spec.roleGroups.worker.length", 0);
            const u = [];
            if (l !== 1 && l !== 3) {
                u.push(t("MASTER_NODE_COUNT_TIP"));
            }
            if (o === 0) {
                u.push(t("WORKER_NODE_COUNT_TIP"));
            }
            if (u.length > 0) {
                return r({
                    message: u.join("; "),
                    field: e.field
                });
            }
            r();
        };
        n.handleTags = function(tagsValue_1) {
            n.setState({
                tagsValue: tagsValue_1
            });
            module74(n.props.formTemplate, "tags", tagsValue_1);
        };
        const tagsValue = module26(n.props.formTemplate, "tags", []);
        n.state = {
            toggleAdvanced: false,
            tagsValue
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate } = props;
                const tagsGroup = props.tagsStore.tagsGroup;
                const tagsGroup_1 = tagsGroup === undefined ? {} : tagsGroup;
                const e_onAddTags = props.onAddTags;
                const method = this.method;
                return <div className={module2675.wrapper}><module186.Form data={formTemplate} ref={formRef}><module186.Form.Item label={t("CLUSTER_NAME")} desc={t("NAME_DESC_LENGTH", {
                    length: 60
                })} rules={[
                    {
                        required: true,
                        message: t("CLUSTER_NAME_EMPTY")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC_LENGTH", {
                            length: 60
                        })
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" maxLength={60}/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item><module186.Form.Item label=<div className={module2675.iconTooltip}><span>{t("CLUSTER_TAG")}</span><module186.Tooltip content={t("CLUSTER_TAG_TOOLTIP_CONTENT")}><module186.Icon name="question" size={16}/></module186.Tooltip></div>><div className={module2675.clusterTags}><ClusterTagAdd tagsGroup={tagsGroup_1} defaultValue={[]} value={this.state.tagsValue} name="tags" onAddTags={e_onAddTags} onChange={this.handleTags}/></div></module186.Form.Item><module186.Form.Item label={t("PROVIDER")} desc={t("CLUSTER_PROVIDER_DESC")}><module186.Select name="spec.provider" options={CLUSTER_PROVIDERS} placeholder=" " optionRenderer={this.providerOptionRenderer} searchable/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item>{method === "new" && <><Module2673 className={module2675.nodesTitle} title={t("NODE_SETTINGS")} description={t("CLUSTER_NODE_SETTINGS_DESC")}/><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PLEASE_ADD_AT_LEAST_ONE_CLUSTER_NODE")
                    },
                    {
                        validator: this.nodesValidator
                    }
                ]}><Module2671 name="spec.hosts" formTemplate={formTemplate}/></module186.Form.Item></>}<div className={module2675.advanced} onClick={this.toggleAdvanced}><span>{t("ADVANCED_SETTINGS")}</span><module186.Icon name={this.state.showAdvanced ? "chevron-up" : "chevron-down"} size="20"/></div>{this.state.toggleAdvanced && <module186.Form.Item label=<div className={module2675.iconTooltip}><span>{t("CLUSTER_LABEL")}</span><module186.Tooltip content={t("CLUSTER_LABEL_TOOLTIP_CONTENT")}><module186.Icon name="question" size={16}/></module186.Tooltip></div> desc={t("CLUSTER_LABEL_DESC")}><module186.Select name="metadata.labels['cluster.kubesphere.io/group']" options={CLUSTER_PRESET_GROUPS} placeholder=" " optionRenderer={this.groupOptionRenderer} searchable/></module186.Form.Item>}</module186.Form></div>;
            }
        },
        {
            key: "method",
            get: function() {
                return module26(this.props.formTemplate, "metadata.annotations['kubesphere.io/way-to-add']");
            }
        }
    ]);
    return r;
})(Component)) || l;
export default S;
