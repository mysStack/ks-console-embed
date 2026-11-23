import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-41.js";
import module61 from "./module-61.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module240 from "./module-240.js";
import module823 from "./module-823.js";
import module136 from "./module-136.js";
import module450 from "./module-450.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module247 from "./module-247.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import * as module553 from "./module-553.js";
import { safeParseJSON, showNameAndAlias } from "./module-52.js";
import { getBreadCrumbData } from "./module-1733.js";
import module4370 from "./module-4370.js";
import module4372 from "./module-4372.js";
import module4375 from "./module-4375.js";
let i;
let f;
let d;
const L = observer((d = f = ((e)=>{
    module55(a, e);
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
        n.handleAdd = function() {
            n.setState({
                mode: "create",
                formTemplate: module136(n.initialFormTemplate)
            });
            n.props.toggleForm();
        };
        n.handleDelete = function(resource) {
            n.setState({
                showConfirm: true,
                resource
            });
        };
        n.handleConfirm = function() {
            const workspace = n.props.workspace;
            const group_id = n.state.resource.group_id;
            n.store.deleteGroup(group_id, {
                workspace
            }).then(()=>{
                n.setState({
                    showConfirm: false,
                    deleteKeys: [
                        group_id
                    ]
                });
                module240.success({
                    content: t("DELETED_SUCCESSFULLY")
                });
            });
        };
        n.hideConfirm = function() {
            n.setState({
                showConfirm: false
            });
        };
        n.handleEdit = async (t)=>{
            let formTemplate;
            let a;
            let o;
            let u;
            let clusters;
            let i;
            formTemplate = module136(t._originData);
            a = safeParseJSON(module26(formTemplate, 'metadata.annotations["kubesphere.io/project-roles"]', []));
            o = safeParseJSON(module26(formTemplate, 'metadata.annotations["kubesphere.io/devops-roles"]', []));
            u = n.props.workspace;
            clusters = module247([].concat(module61(a), module61(o)).map((e)=>e.cluster));
            i = await n.store.fetchRoleBinding(t.group_id, {
                workspace: u,
                clusters
            });
            module74(formTemplate, 'metadata.annotations["kubesphere.io/project-roles"]', n.getRoleJSON(a, i));
            module74(formTemplate, 'metadata.annotations["kubesphere.io/devops-roles"]', n.getRoleJSON(o, i));
            n.setState({
                mode: "edit",
                formTemplate
            });
            n.props.onChange(t.group_id);
            n.props.toggleForm();
        };
        n.handleSave = async (r, a)=>{
            let o;
            o = n.props.workspace;
            if (a) {
                await n.store.update(r, a, {
                    workspace: o
                });
                module240.success({
                    content: t("UPDATE_SUCCESSFUL")
                });
            } else {
                await n.store.createGroup(r, {
                    workspace: o
                });
                module240.success({
                    content: `${t("ADDED_SUCCESS_DESC")}`
                });
            }
            n.props.toggleForm();
        };
        n.handleCancel = function() {
            const n_props = n.props;
            const { onChange, toggleForm, onCancel } = n_props;
            const o = n.getTreeNode(n.props);
            if (n.isEmptyTreeNode(o)) {
                onCancel();
            } else {
                onChange(n.props.groupId);
                toggleForm();
            }
        };
        n.store = e.store;
        n.initialFormTemplate = {
            apiVersion: "iam.kubesphere.io/v1beta1",
            kind: "Group",
            metadata: {
                annotations: {
                    "kubesphere.io/workspace-role": `${e.workspace}-regular`
                },
                labels: {
                    "kubesphere.io/workspace": "wsp1"
                }
            }
        };
        n.state = {
            treeNode: n.getTreeNode(e),
            mode: "create",
            formTemplate: module136(n.initialFormTemplate),
            showConfirm: false,
            resource: "",
            deleteKeys: []
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(this.props.treeNodeId === e.treeNodeId && this.props.rowTreeData === e.rowTreeData)) {
                    this.setState({
                        treeNode: this.getTreeNode(this.props)
                    });
                }
            }
        },
        {
            key: "getTreeNode",
            value: function(e) {
                const e_treeNodeId = e.treeNodeId;
                return e.rowTreeData[e_treeNodeId] || {};
            }
        },
        {
            key: "isEmptyTreeNode",
            value: function(e) {
                return !e.group_id || e.group_id === "root" && !e.children.length;
            }
        },
        {
            key: "getRoleJSON",
            value: function(e, t) {
                return e.map((e)=>{
                    const r = module450(t).find((t)=>module26(t, "metadata.namespace") === e.namespace && module26(t, "roleRef.name") === e.role);
                    return {
                        ...e,
                        name: module26(r, "metadata.name"),
                        disabled: true
                    };
                });
            }
        },
        {
            key: "renderBreadcrumbs",
            value: function() {
                const props = this.props;
                const { showForm, treeNodeId } = props;
                const mode = this.state.mode;
                let o = getBreadCrumbData(treeNodeId, this.props.rowTreeData).map((e, t)=>{
                    if (t) {
                        if (e.aliasName) {
                            return `${e.aliasName}(${e.group_name})`;
                        }
                        return e.group_name;
                    }
                    return showNameAndAlias(e.group_name, "workspace");
                });
                if (showForm && mode === "create") {
                    o = [].concat(module61(o), [
                        t("CREATE_DEPARTMENT")
                    ]);
                }
                return module553.default.createElement("ul", {
                    className: module4375.breadcrumbs
                }, o.map((e, t)=>module553.default.createElement("li", {
                        key: `${e}-${t}`
                    }, module553.default.createElement("span", null, e), t !== o.length - 1 && module553.default.createElement("span", {
                        className: module4375.separator
                    }, ">"))));
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { formTemplate, mode, showConfirm, resource } = state;
                const { group_name, children } = resource;
                const { treeNode, deleteKeys } = state;
                const props = this.props;
                const { groupId, showForm } = props;
                const desc = module63(children) ? t.html("DELETE_GROUP_TIP", {
                    group_name
                }) : t.html("DELETE_PARENT_GROUP_TIP", {
                    group_name
                });
                return module553.default.createElement("div", {
                    className: module4375.detailWrapper
                }, this.renderBreadcrumbs(), showForm ? module553.default.createElement(module4372, {
                    ...this.props,
                    formTemplate,
                    mode,
                    groupId,
                    onCancel: this.handleCancel,
                    onSave: this.handleSave
                }) : module553.default.createElement(module4370, {
                    treeNode,
                    deleteKeys,
                    onAdd: this.handleAdd,
                    onEdit: this.handleEdit,
                    onDelete: this.handleDelete
                }), module553.default.createElement(module823, {
                    visible: showConfirm,
                    onOk: this.handleConfirm,
                    onCancel: this.hideConfirm,
                    resource: group_name,
                    desc
                }));
            }
        }
    ]);
    return a;
})(module553.Component), f.propTypes = {
    rowTreeData: module1.object,
    groupId: module1.string
}, i = d)) || i;
export default L;
