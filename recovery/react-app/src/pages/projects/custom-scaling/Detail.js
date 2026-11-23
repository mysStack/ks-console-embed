import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
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
import module1047 from "unpacked/module-1047.js";
import Module806 from "pages/projects/containers/Base/Detail";
import module4912 from "unpacked/module-4912.js";
let o;
const A = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        e.store = new module1047;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
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
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editScale",
                    icon: "pen",
                    text: t("EDIT_SCALING_SETTINGS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("customScaling.edit.setting", {
                            detail: e.store.detail,
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
            const a = module14.toJS(e.store.detail) || {};
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
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
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
                const l = {
                    module: this.module,
                    name: getDisplayName(this.store?.detail ?? {}),
                    desc: this.store?.detail?.description ?? "",
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("CUSTOM_SCALING_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...l} routes={module4912(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "customScalings";
            }
        },
        {
            key: "name",
            get: function() {
                return "CUSTOM_SCALING";
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
                return `/${workspace}/clusters/${cluster}/projects/${namespace}/custom-scaling`;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default A;
