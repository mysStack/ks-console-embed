import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module441 from "stores/role";
import Module900 from "unpacked/module-900.js";
import module5072 from "pages/devops/containers/Roles/Detail/routes";
let o;
const D = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.store = new module441;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            const detail = e.store.detail;
            const isHostCluster = e.props.isHostCluster;
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editRole",
                    icon: "pen",
                    text: t("EDIT_PERMISSIONS"),
                    action: "edit",
                    show: e.showEdit,
                    onClick: function() {
                        return e.trigger("role.edit", {
                            detail: module14.toJS(e.store.detail),
                            module: isHostCluster ? "devopsroles" : "devopsrolesNotHostCluster",
                            roleTemplates: module14.toJS(e.store.roleTemplates.data),
                            roleModules: module14.toJS(e.store.roleCategory),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    show: e.showEdit,
                    onClick: function() {
                        return e.trigger("role.delete", {
                            detail,
                            type: e.name,
                            cluster: e.props.match.params.cluster,
                            namespace: e.props.match.params.namespace,
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const r = module14.toJS(e.store.detail);
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            if (!module63(r)) {
                return [
                    {
                        name: t("CLUSTER"),
                        value: showNameAndAlias(cluster, "cluster")
                    },
                    {
                        name: t("DEVOPS_PROJECT"),
                        value: showNameAndAlias(namespace, "project")
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(r.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("UPDATE_TIME_TCAP"),
                        value: getLocalTime(r.updateTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: r.creator
                    }
                ];
            }
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.store.fetchRoleTemplates("devops", "iam.kubesphere.io/scope=namespace,devops.kubesphere.io/managed=true");
                this.store.fetchTemplatesCategory("namespace", "devops");
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    isDevops: true,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("DEVOPS_PROJECT_ROLE_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module900 stores={stores} {...r} routes={module5072(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "roles";
            }
        },
        {
            key: "name",
            get: function() {
                return "DEVOPS_PROJECT_ROLE";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return `/${workspace}/clusters/${cluster}/devops/${namespace}/${this.module}`;
            }
        },
        {
            key: "showEdit",
            get: function() {
                const name = this.props.match.params.name;
                return !globals.config.presetDevOpsRoles.includes(name);
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default D;
