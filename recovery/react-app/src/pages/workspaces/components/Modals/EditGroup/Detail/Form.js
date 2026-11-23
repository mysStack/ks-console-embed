import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import module186 from "unpacked/module-186.js";
import Module830 from "components/Inputs/ArrayInput";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component, createRef } from "unpacked/module-553.js";
import module441 from "stores/role";
import { compareVersion } from "utils/index";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
import Module4373 from "pages/workspaces/components/Modals/EditGroup/Detail/Form/DevopsSelect";
import module1417 from "unpacked/module-1417.js";
import Module4374 from "unpacked/module-4374.js";
let o;
let u;
let l;
let c;
const N = observer((c = l = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.nameValidator = function(e, r, a) {
            const n_props = n.props;
            const { workspace, mode } = n_props;
            if (!r || mode === "edit") {
                return a();
            }
            n.props.store.checkName({
                name: r,
                workspace
            }).then((r)=>{
                if (r.exist) {
                    return a({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                a();
            });
        };
        n.checkItemValid = function(e) {
            return e.role;
        };
        n.handleSave = function() {
            const n_props = n.props;
            const { onSave, groupId, mode } = n_props;
            const o = module136(n.state.formTemplate);
            const current = n.formRef.current;
            if (current) {
                current.validate(function() {
                    if (groupId) {
                        module74(o, 'metadata.labels["iam.kubesphere.io/group-parent"]', groupId);
                    }
                    if (mode === "edit") {
                        onSave(o, n.props.formTemplate);
                    } else {
                        onSave(o);
                    }
                });
            }
        };
        n.formRef = createRef();
        n.workspaceStore = e.workspaceStore;
        n.workspaceRoleStore = new module441("workspaceroles");
        n.state = {
            formTemplate: module136(e.formTemplate)
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.formTemplate !== e.formTemplate) {
                    this.setState({
                        formTemplate: module136(this.props.formTemplate)
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchWorkspaceRoles();
            }
        },
        {
            key: "fetchWorkspaceRoles",
            value: function() {
                this.workspaceRoleStore.fetchList({
                    workspace: this.props.workspace,
                    limit: -1,
                    sortBy: "createTime"
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { onCancel, mode } = props;
                const formTemplate = this.state.formTemplate;
                return <div className={module1417.formWrapper}><module186.Form data={formTemplate} className={module1417.form} ref={this.formRef}><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.generateName" autoFocus maxLength={63} autoComplete="off" disabled={mode === "edit"}/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63} autoComplete="off"/></module186.Form.Item><module186.Form.Item label={t("WORKSPACE_ROLE")} desc={t("GROUP_WORKSPACE_ROLE_DESC") + (this.needUpgrade ? t("MEMBER_CLUSTER_UPGRADE_TIP", {
                    version: "v3.1.0"
                }) : "")}><module186.Select name="metadata.annotations['kubesphere.io/workspace-role']" options={this.workspaceRoles} onChange={this.handleRolesChange}/></module186.Form.Item><module186.Form.Group label={t("PROJECT_ROLE")}><module186.Form.Item><Module830 name="metadata.annotations['kubesphere.io/project-roles']" itemType="object" addText={t("ADD_PROJECT")} checkItemValid={this.checkItemValid}><Module4374 clusters={this.clusters} showClusterSelect={globals.app.isMultiCluster} {...this.props}/></Module830></module186.Form.Item></module186.Form.Group>{globals.app.hasKSModule("devops") && <module186.Form.Group label={t("DEVOPS_PROJECT_ROLE")}><module186.Form.Item><Module830 name="metadata.annotations['kubesphere.io/devops-roles']" itemType="object" addText={t("ADD_DEVOPS_PROJECT")} checkItemValid={this.checkItemValid}><Module4373 clusters={this.clusters} showClusterSelect={globals.app.isMultiCluster} {...this.props}/></Module830></module186.Form.Item></module186.Form.Group>}</module186.Form><div className={module1417.footer}><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="primary" onClick={this.handleSave}>{t("OK")}</module186.Button></div></div>;
            }
        },
        {
            key: "needUpgrade",
            get: function() {
                return this.workspaceStore.clusters.data.some((e)=>compareVersion(globals.app.isMultiCluster ? module26(e, "configz.ksVersion", "") : module26(globals, "ksConfig.ksVersion"), "v3.1.0") < 0);
            }
        },
        {
            key: "workspaceRoles",
            get: function() {
                return this.workspaceRoleStore.list.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        item: e
                    }));
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.workspaceStore.clusters.data.map((e)=>{
                    const needUpgrade = compareVersion(globals.app.isMultiCluster ? module26(e, "configz.ksVersion", "") : module26(globals, "ksConfig.ksVersion"), "v3.1.0") < 0;
                    return {
                        label: e.name,
                        value: e.name,
                        disabled: !e.isReady || needUpgrade,
                        needUpgrade,
                        item: e
                    };
                });
            }
        }
    ]);
    return a;
})(Component), l.propTypes = {
    workspace: module1.string,
    groupId: module1.string
}, u = c, module49(u.prototype, "workspaceRoles", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "workspaceRoles"), u.prototype), module49(u.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(u.prototype, "clusters"), u.prototype), o = u)) || o;
export default N;
