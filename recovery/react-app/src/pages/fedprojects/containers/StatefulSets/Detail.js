import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import Module806 from "pages/projects/containers/Base/Detail";
import { Component } from "unpacked/module-553.js";
import module437 from "stores/federated";
import module318 from "stores/workload/index";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module5002 from "pages/fedprojects/containers/StatefulSets/Detail/routes";
let l;
const P = inject("rootStore", "projectStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
        e.store = new module437(new module318(e.module));
        e.fetchData = async function t() {
            let r;
            r = e.props.match.params;
            await e.store.fetchDetail(r);
            await e.store.fetchResources({
                ...r,
                clusters: e.store.detail.clusters.map((e)=>e.name)
            });
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
                    key: "editConfigTemplate",
                    icon: "storage",
                    text: t("EDIT_SETTINGS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("federated.workload.template.edit", {
                            detail: e.store.detail,
                            projectDetail: e.props.projectStore.detail,
                            module: e.module,
                            ...e.props.match.params,
                            success: e.fetchData,
                            isFederated: true
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
            const r = module14.toJS(e.store.detail);
            const namespace = e.props.match.params.namespace;
            if (!module63(r)) {
                return [
                    {
                        name: t("PROJECT"),
                        value: showNameAndAlias(namespace, "federatedProject")
                    },
                    {
                        name: t("APP"),
                        value: r.app
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(r.createTime).format("YYYY-MM-DD HH:mm:ss")
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
                    detailStore: this.store
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
                            label: t("STATEFULSET_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...r} routes={module5002(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "statefulsets";
            }
        },
        {
            key: "name",
            get: function() {
                return "STATEFULSET";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
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
})(Component)) || l) || l) || l;
export default P;
