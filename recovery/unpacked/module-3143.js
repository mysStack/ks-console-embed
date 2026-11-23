import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-138.js";
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
import "./module-41.js";
import module31 from "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module997 from "./module-997.js";
import module791 from "./module-791.js";
import module829 from "./module-829.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import * as module553 from "./module-553.js";
import module439 from "./module-439.js";
import module445 from "./module-445.js";
import { showNameAndAlias } from "./module-52.js";
import module3144 from "./module-3144.js";
let c;
let s;
const M = observer((s = ((e)=>{
    module55(c, e);
    var l = ((e)=>{
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
    })(c);
    function c(...r_1) {
        let e;
        module36(this, c);
        e = l.call(this, ...r_1);
        e.state = {
            showForm: false,
            initializing: true,
            formData: e.props.formData
        };
        e.formRef = module553.default.createRef();
        e.workspaceStore = new module445;
        e.projectStore = new module439;
        e.fetchNamespaces = async function t() {
            let a;
            let r;
            let n;
            let l;
            const u = arguments;
            a = u.length > 0 && u[0] !== undefined ? u[0] : {};
            r = e.state.formData;
            n = r.workspace;
            l = r.cluster;
            if (!(!n || !l)) {
                await e.projectStore.fetchList({
                    ...a,
                    workspace: n,
                    cluster: l,
                    ascending: true
                });
            }
        };
        e.handleWorkspaceChange = function() {
            e.fetchClusters();
            module74(e.state.formData, "cluster", "");
            module74(e.state.formData, "namespace", "");
        };
        e.handleClusterChange = function() {
            e.fetchNamespaces();
            module74(e.state.formData, "namespace", "");
        };
        e.handleSubmit = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    Object.assign(e.props.formData, {
                        ...e.state.formData
                    });
                    e.hideForm();
                });
            }
        };
        e.showForm = function() {
            e.setState({
                showForm: true
            });
        };
        e.hideForm = function() {
            e.setState({
                showForm: false
            });
        };
        e.projectOptionRenderer = function(e) {
            return module553.default.createElement("span", {
                className: module3144.option
            }, e.isFedManaged ? module553.default.createElement("img", {
                className: module3144.indicator,
                src: "/assets/cluster.svg"
            }) : module553.default.createElement(module186.Icon, {
                name: "project"
            }), e.label, e.isFedManaged && module553.default.createElement(module186.Tooltip, {
                content: t("FEDPROJECT_CANNOT_DEPLOY_APP_TIP")
            }, module553.default.createElement(module186.Icon, {
                className: module3144.tip,
                name: "question"
            })));
        };
        e.clusterOptionRenderer = function(e) {
            return module553.default.createElement("div", null, module553.default.createElement("div", null, e.label), !e.cluster.isReady && module553.default.createElement("div", null, module553.default.createElement(module997, {
                data: e.cluster,
                noTip: true
            })));
        };
        return e;
    }
    module37(c, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "init",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let l;
                this.setState({
                    initializing: true
                });
                t = this.state.formData;
                a = t.workspace;
                r = t.cluster;
                n = t.namespace;
                await this.fetchWorkspaces();
                if (!a) {
                    module74(this.state.formData, "workspace", module26(this.workspaces, "[0].value"));
                }
                await this.fetchClusters();
                if (!r) {
                    module74(this.state.formData, "cluster", module26(this.clusters, "[0].value"));
                }
                await this.fetchNamespaces();
                if (!n) {
                    l = this.namespaces.find((e)=>!e.disabled) || {};
                    module74(this.state.formData, "namespace", l.value || "");
                }
                Object.assign(this.props.formData, this.state.formData);
                this.setState({
                    initializing: false
                });
            }
        },
        {
            key: "fetchWorkspaces",
            value: async function() {
                let t;
                const a = arguments;
                t = a.length > 0 && a[0] !== undefined ? a[0] : {};
                await this.workspaceStore.fetchList({
                    ...t,
                    limit: -1,
                    ascending: true
                });
            }
        },
        {
            key: "fetchClusters",
            value: async function() {
                let t;
                let a;
                const r = arguments;
                t = r.length > 0 && r[0] !== undefined ? r[0] : {};
                if (a = this.state.formData.workspace) {
                    await this.workspaceStore.fetchClusters({
                        ...t,
                        workspace: a,
                        limit: -1,
                        ascending: true
                    });
                }
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const formData = this.props.formData;
                const { namespace, workspace, cluster } = formData;
                return module553.default.createElement("div", {
                    className: module3144.placement
                }, module553.default.createElement(module791, {
                    className: module3144.text,
                    title: showNameAndAlias(workspace, "workspace"),
                    description: t("WORKSPACE")
                }), module553.default.createElement(module791, {
                    className: module3144.text,
                    title: showNameAndAlias(cluster, "cluster"),
                    description: t("CLUSTER")
                }), module553.default.createElement(module791, {
                    className: module3144.text,
                    icon: "project",
                    title: showNameAndAlias(namespace, "project", {
                        cluster
                    }),
                    description: t("PROJECT")
                }), module553.default.createElement(module186.Icon, {
                    className: module3144.icon,
                    name: "chevron-down",
                    size: 20
                }));
            }
        },
        {
            key: "renderForm",
            value: function() {
                const workspace = this.props.workspace;
                return module553.default.createElement("div", {
                    className: module3144.form
                }, module553.default.createElement(module186.Form, {
                    ref: this.formRef,
                    type: "inner",
                    data: this.state.formData
                }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("WORKSPACE")
                }, module553.default.createElement(module186.Select, {
                    name: "workspace",
                    placeholder: t("WORKSPACE_EMPTY_DESC"),
                    options: this.workspaces,
                    onChange: this.handleWorkspaceChange,
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: "enterprise",
                        size: 16
                    }),
                    disabled: !!workspace
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("CLUSTER")
                }, module553.default.createElement(module186.Select, {
                    name: "cluster",
                    placeholder: " ",
                    options: this.clusters,
                    onChange: this.handleClusterChange,
                    optionRenderer: this.clusterOptionRenderer,
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: "cluster",
                        size: 16
                    }),
                    showTip: true
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("PROJECT"),
                    rules: [
                        {
                            required: true,
                            message: t("PROJECT_NOT_SELECT_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Select, {
                    name: "namespace",
                    placeholder: " ",
                    options: this.namespaces,
                    pagination: module241(this.projectStore.list, [
                        "page",
                        "limit",
                        "total"
                    ]),
                    isLoading: this.projectStore.list.isLoading,
                    onFetch: this.fetchNamespaces,
                    valueRenderer: this.projectOptionRenderer,
                    optionRenderer: this.projectOptionRenderer,
                    clearable: true
                }))))), module553.default.createElement(module829, {
                    className: module3144.confirm,
                    onOk: this.handleSubmit,
                    onCancel: this.hideForm
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { showForm, formData, initializing } = state;
                if (showForm) {
                    return this.renderForm();
                }
                return module553.default.createElement("div", {
                    className: module3(module3144.wrapper, module31({}, module3144.expand, showForm)),
                    onClick: this.showForm
                }, formData.namespace ? this.renderPlacement() : module553.default.createElement("div", {
                    className: module3144.placeholder
                }, initializing ? module553.default.createElement(module186.Loading, {
                    className: "text-center"
                }) : t("PROJECT_NOT_SELECT_DESC")));
            }
        },
        {
            key: "workspaces",
            get: function() {
                return this.workspaceStore.list.data.filter((e)=>e.name !== globals.config.systemWorkspace).map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name
                    }));
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.workspaceStore.clusters.data.map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        disabled: !e.isReady,
                        cluster: e
                    }));
            }
        },
        {
            key: "namespaces",
            get: function() {
                return this.projectStore.list.data.filter((e)=>e.status !== "Terminating").map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        disabled: e.isFedManaged,
                        isFedManaged: e.isFedManaged
                    }));
            }
        }
    ]);
    return c;
})(module553.Component), module49(s.prototype, "workspaces", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "workspaces"), s.prototype), module49(s.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "clusters"), s.prototype), module49(s.prototype, "namespaces", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "namespaces"), s.prototype), c = s)) || c;
export default M;
