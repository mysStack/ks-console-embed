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
import module49 from "unpacked/module-49.js";
import { Component } from "unpacked/module-553.js";
import Module1144 from "unpacked/module-1144.js";
import { trigger } from "utils/action";
import module1193 from "stores/cd";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module241 from "unpacked/module-241.js";
import { getDisplayName, getLocalTime } from "utils/index";
import module14 from "unpacked/module-14.js";
import module438 from "stores/cluster";
import routes from "pages/devops/containers/CD/detail/routes";
import Module1461 from "unpacked/module-1461.js";
import Module1986 from "unpacked/module-1986.js";
let o;
let i;
const C = inject("rootStore")(o = observer(o = trigger((i = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.state = {
            showEdit: false,
            showYamlEdit: false,
            deleteModule: false,
            isLoading: true
        };
        e.store = new module1193;
        e.clusterStore = new module438;
        e.fetchData = function() {
            const params = e.props.match.params;
            e.store.fetchDetail({
                name: params.cd,
                devops: e.devops,
                cluster: e.cluster
            });
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    type: "control",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        e.trigger("resource.baseinfo.edit", {
                            formTemplate: e.store.detail,
                            detail: {
                                ...e.store.detail,
                                cluster: e.cluster
                            },
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "sync",
                    icon: "changing-over",
                    text: t("SYNC"),
                    action: "edit",
                    onClick: function() {
                        e.trigger("cd.sync", {
                            title: t("SYNC_RESOURCE"),
                            formTemplate: module241(module14.toJS(e.store.detail), "repoSource"),
                            devops: e.devops,
                            cluster: e.cluster,
                            noCodeEdit: true,
                            application: e.store.detail.name,
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
                        e.trigger("resource.yaml.edit", {
                            detail: {
                                ...e.store.detail,
                                cluster: e.cluster
                            },
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
                        e.trigger("cd.delete", {
                            type: "CONTINUOUS_DEPLOYMENT",
                            detail: {
                                ...e.store.detail,
                                cluster: e.cluster
                            },
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const n = module26(detail, "status.reconciledAt");
            return [
                {
                    name: t("HEALTH_STATUS"),
                    value: <Module1461 type={detail.healthStatus} label={detail.healthStatus} noBolder/>
                },
                {
                    name: t("DEPLOY_LOCATION"),
                    value: <Module1986 destination={detail.destination} clustersDetail={e.clusters}/>
                },
                {
                    name: t("CODE_REPOSITORY_URL"),
                    value: module26(detail, "repoSource.repoURL", "-")
                },
                {
                    name: t("REVISION"),
                    value: module26(detail, "repoSource.targetRevision", "-")
                },
                {
                    name: t("CODE_RELATIVE_PATH"),
                    value: module26(detail, "repoSource.path", "-")
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")
                },
                {
                    name: t("UPDATE_TIME_TCAP"),
                    value: n ? getLocalTime(n).format("YYYY-MM-DD HH:mm:ss") : "-"
                },
                {
                    name: t("CREATOR"),
                    value: detail.creator
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.clusterStore.fetchList({
                    limit: -1
                });
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                const stores = {
                    detailStore: this.store
                };
                const n = {
                    module: "applications",
                    name: getDisplayName(detail),
                    desc: detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("CONTINUOUS_DEPLOYMENT_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module1144 routes={routes} {...n} stores={stores}/>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.clusterStore.list.data;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, devops } = params;
                return `/${workspace}/clusters/${cluster}/devops/${devops}/cd`;
            }
        },
        {
            key: "devops",
            get: function() {
                return this.props.match.params.devops;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return n;
})(Component), module49(i.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(i.prototype, "clusters"), i.prototype), o = i)) || o) || o) || o;
export default C;
