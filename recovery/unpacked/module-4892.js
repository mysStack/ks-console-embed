import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import module441 from "./module-441.js";
import Module806 from "./module-806.js";
import module4893 from "./module-4893.js";
let o;
const S = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.store = new module441;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            const detail = e.store.detail;
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    show: e.showEdit,
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
                            module: e.module,
                            detail: module14.toJS(e.store.detail),
                            roleTemplates: module14.toJS(e.store.roleTemplates.data),
                            basicRoleTemplates: module14.toJS(e.store.basicRoleTemplates.data),
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
            const a = module14.toJS(e.store.detail);
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            if (!module63(a)) {
                return [
                    {
                        name: t("CLUSTER"),
                        value: cluster
                    },
                    {
                        name: t("PROJECT"),
                        value: namespace
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("UPDATE_TIME_TCAP"),
                        value: getLocalTime(a.updateTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.creator
                    }
                ];
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.store.fetchRoleTemplates("namespace", "iam.kubesphere.io/scope=namespace,kubesphere.io/managed=true,iam.kubesphere.io/hidden-role-template!=true");
                this.store.fetchBasicRoleTemplates("namespace", "iam.kubesphere.io/scope=namespace,iam.kubesphere.io/basic-role-template=true,kubesphere.io/managed=true");
                this.store.fetchTemplatesCategory("namespace");
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
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("PROJECT_ROLE_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module4893(this.props.match.path)}/>;
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
                return "PROJECT_ROLE";
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
                return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
            }
        },
        {
            key: "showEdit",
            get: function() {
                const name = this.props.match.params.name;
                return !globals.config.presetRoles.includes(name);
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default S;
