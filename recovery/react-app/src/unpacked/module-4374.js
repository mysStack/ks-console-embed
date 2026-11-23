import "unpacked/module-15.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
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
import module49 from "unpacked/module-49.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module807 from "unpacked/module-807.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { showNameAndAlias } from "utils/index";
import module441 from "stores/role";
import module439 from "stores/project";
import module1417 from "unpacked/module-1417.js";
let u;
let l;
let c;
let s;
const C = observer((s = c = ((e)=>{
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
        n.handleChange = function() {
            const n_state = n.state;
            const { cluster, namespace, role } = n_state;
            n.props.onChange({
                cluster,
                namespace,
                role
            });
        };
        n.handleClusterChange = function(cluster) {
            n.setState({
                cluster,
                namespace: "",
                role: ""
            }, function() {
                n.handleChange();
                n.fetchProjects();
                n.roleStore.list.update({
                    data: []
                });
            });
        };
        n.handleProjectsChange = function(namespace) {
            n.setState({
                namespace,
                role: ""
            }, function() {
                n.handleChange();
                n.fetchRoles();
            });
        };
        n.handleRoleChange = function(role) {
            n.setState({
                role
            }, function() {
                return n.handleChange();
            });
        };
        n.clusterRenderer = function(e) {
            return module553.default.createElement("span", null, module553.default.createElement("span", null, showNameAndAlias(e.item)), e.needUpgrade && module553.default.createElement(module186.Tooltip, {
                content: t("CLUSTER_UPGRADE_REQUIRED", {
                    version: "v3.1.0"
                }),
                placement: "bottom"
            }, module553.default.createElement(module186.Icon, {
                name: "update",
                className: module1417.tip,
                color: {
                    primary: "#ffc781",
                    secondary: "#f5a623"
                }
            })));
        };
        n.workspaceStore = e.workspaceStore;
        n.projectStore = new module439;
        n.roleStore = new module441;
        n.state = {
            cluster: module63(e.value) ? "" : e.value.cluster,
            namespace: module63(e.value) ? "" : e.value.namespace,
            role: module63(e.value) ? "" : e.value.role
        };
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchProjects();
                this.fetchRoles();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                if (!module807(e.value, this.props.value)) {
                    this.setState({
                        cluster: this.props.value.cluster || "",
                        namespace: this.props.value.namespace || "",
                        role: this.props.value.role || ""
                    }, function() {
                        _this.fetchProjects();
                        _this.fetchRoles();
                    });
                }
            }
        },
        {
            key: "fetchProjects",
            value: function() {
                const cluster = this.state.cluster;
                const showClusterSelect = this.props.showClusterSelect;
                if (!(!cluster && showClusterSelect)) {
                    this.projectStore.fetchList({
                        workspace: this.props.workspace,
                        cluster,
                        limit: -1,
                        sortBy: "createTime"
                    });
                }
            }
        },
        {
            key: "fetchRoles",
            value: function() {
                const state = this.state;
                const { cluster, namespace } = state;
                if (namespace) {
                    this.roleStore.fetchList({
                        workspace: this.props.workspace,
                        cluster,
                        namespace,
                        limit: -1,
                        sortBy: "createTime"
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { clusters, value, showClusterSelect } = props;
                const state = this.state;
                const { cluster, namespace, role } = state;
                const disabled = !module63(value) && value.disabled;
                return module553.default.createElement("div", {
                    className: module1417.selectWrapper
                }, showClusterSelect && module553.default.createElement(module186.Select, {
                    name: "cluster",
                    value: cluster,
                    disabled,
                    options: clusters,
                    placeholder: t("CLUSTER"),
                    valueRenderer: function(e) {
                        return t("CLUSTER_VALUE", {
                            value: showNameAndAlias(e.item)
                        });
                    },
                    optionRenderer: this.clusterRenderer,
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: "cluster",
                        size: 16
                    }),
                    onChange: this.handleClusterChange,
                    showTip: true
                }), module553.default.createElement(module186.Select, {
                    name: "namespace",
                    value: namespace,
                    disabled,
                    options: this.projects,
                    placeholder: t("PROJECT"),
                    valueRenderer: function(r) {
                        const a = _this.projectStore.list.data.filter((e)=>e.name === r.value)[0] || "";
                        return t("PROJECT_VALUE", {
                            value: showNameAndAlias(a)
                        });
                    },
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: "project",
                        size: 16
                    }),
                    onChange: this.handleProjectsChange
                }), module553.default.createElement(module186.Select, {
                    name: "role",
                    value: role,
                    disabled,
                    options: this.roles,
                    valueRenderer: function(e) {
                        return t("PROJECT_ROLE_VALUE", {
                            value: e.value
                        });
                    },
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: "role",
                        size: 16
                    }),
                    placeholder: t("ROLE"),
                    onChange: this.handleRoleChange
                }));
            }
        },
        {
            key: "projects",
            get: function() {
                const _this = this;
                const arrayValue = this.props.arrayValue;
                const r = arrayValue === undefined ? [] : arrayValue;
                return this.projectStore.list.data.filter((t)=>r.every((r)=>r.cluster !== _this.state.cluster || r.namespace !== t.name)).map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        item: e
                    }));
            }
        },
        {
            key: "roles",
            get: function() {
                return this.roleStore.list.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        item: e
                    }));
            }
        }
    ]);
    return a;
})(module553.Component), c.propTypes = {
    clusters: module1.array
}, l = s, module49(l.prototype, "projects", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "projects"), l.prototype), module49(l.prototype, "roles", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "roles"), l.prototype), u = l)) || u;
export default C;
