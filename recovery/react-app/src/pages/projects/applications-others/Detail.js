import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
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
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module1889 from "unpacked/module-1889.js";
import Module836 from "components/Base/Image";
import Module796 from "components/Base/Status";
import Module806 from "pages/projects/containers/Base/Detail";
import routes from "unpacked/module-4887.js";
import module4891 from "unpacked/module-4891.js";
let o;
const T = inject("rootStore", "projectStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        e.store = new module1889;
        e.fetchData = function() {
            const params = e.props.match.params;
            e.store.fetchDetail(params);
        };
        e.getOperations = function() {
            return [
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: e.store.detail,
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
                        value: showNameAndAlias(cluster, "cluster")
                    },
                    {
                        name: t("PROJECT"),
                        value: showNameAndAlias(namespace, "project")
                    },
                    {
                        name: t("STATUS"),
                        value: e.renderStatus()
                    },
                    {
                        name: t("APP"),
                        value: module26(a, "app.name", "-")
                    },
                    {
                        name: t("VERSION"),
                        value: module26(a, "version.name", "-")
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(module26(a, "create_time")).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("UPDATE_TIME_TCAP"),
                        value: getLocalTime(module26(a, "status_time")).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.owner
                    }
                ];
            }
        };
        e.renderStatus = function() {
            const a = module14.toJS(e.store.detail);
            const a_status = a.status;
            if (a.additional_info) {
                return <module186.Tooltip content={a.additional_info}><Module796 name={t(a_status)} type={a_status}/></module186.Tooltip>;
            }
            return <Module796 name={t(a_status)} type={a_status}/>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    icon: <label className={module4891.icon}><Module836 iconLetter={module26(e, "app.name")} src={module26(e, "app.icon")} alt=""/></label>,
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("APP_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...r} routes={routes}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "applications";
            }
        },
        {
            key: "name",
            get: function() {
                return "APP";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { cluster, workspace, namespace } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}/others`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default T;
