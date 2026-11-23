import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import Module806 from "./module-806.js";
import { Component } from "./module-553.js";
import module961 from "./module-961.js";
import module437 from "./module-437.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import routes from "./module-4977.js";
let o;
const T = inject("rootStore", "projectStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.store = new module437(new module961);
        e.fetchData = function() {
            const params = e.props.match.params;
            e.store.fetchDetail(params);
        };
        e.getOperations = function() {
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
                    key: "addComponent",
                    icon: "add",
                    text: t("ADD_SERVICE"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("crd.app.addservice", {
                            isFederated: true,
                            detail: module14.toJS(e.store.detail),
                            projectDetail: e.props.projectStore.detail,
                            success: e.fetchData,
                            ...e.props.match.params
                        });
                    }
                },
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
            const r = module14.toJS(e.store.detail);
            const namespace = e.props.match.params.namespace;
            if (!module63(r)) {
                const value = module26(r, 'labels["app.kubernetes.io/name"]');
                return [
                    {
                        name: t("PROJECT"),
                        value: showNameAndAlias(namespace, "federatedProject")
                    },
                    {
                        name: t("APP"),
                        value
                    },
                    {
                        name: t("VERSION"),
                        value: r.version
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
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store,
                    fedDetailStore: this.fedStore
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
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
                const { workspace, namespace } = params;
                return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default T;
