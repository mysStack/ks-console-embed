import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
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
import "unpacked/module-31.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module789 from "components/Base/Avatar";
import Module790 from "components/Base/Panel";
import Module791 from "components/Base/Text";
import Module793 from "unpacked/module-793.js";
import Module797 from "components/Tables/List";
import Module4635 from "unpacked/module-4635.js";
import { getDisplayName } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module1443 from "unpacked/module-1443.js";
import module1026 from "unpacked/module-1026.js";
import module318 from "stores/workload/index";
import module439 from "stores/project";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module186 from "unpacked/module-186.js";
import module14 from "unpacked/module-14.js";
import module240 from "unpacked/module-240.js";
import module4637 from "unpacked/module-4637.js";
import Module4638 from "unpacked/module-4638.js";
let l;
const U = withProjectList({
    store: new module1443,
    module: "microservices",
    name: "MICROSERVICE",
    rowKey: "uid",
    authKey: "springcloud-microservices"
})(l = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.workloadStore = new module318("deployments");
        e.instanceStore = new module1026;
        e.projectStore = new module439;
        e.state = {
            overview: {},
            isRefresh: false
        };
        e.fetchProjectDetail = function() {
            const params = e.props.match.params;
            const { cluster, namespace, workspace } = params;
            e.projectStore.fetchDetail({
                cluster,
                workspace,
                namespace
            });
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sortOrder: getSortOrder("name"),
                    search: true,
                    searchKey: "serviceName",
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={a.description || "-"} to={`${e.prefix}/${module}/${t}`}/>;
                    }
                },
                {
                    title: t("MICROSERVICE_HEALTHY_INSTANCE_COUNT"),
                    dataIndex: "healthyInstanceCount",
                    isHideable: true,
                    width: "18%"
                },
                {
                    title: t("MICROSERVICE_INSTANCE_COUNT"),
                    dataIndex: "instanceCount",
                    isHideable: true,
                    width: "18%"
                },
                {
                    title: t("HEALTH_PROTECTION_TRIGGERED"),
                    dataIndex: "triggerFlag",
                    isHideable: true,
                    width: "18%"
                }
            ];
        };
        e.openProjectSpringCloud = async function a() {
            let r;
            let n;
            r = module14.toJS(e.projectStore.detail);
            n = module26(r, "_originData");
            module74(n, 'metadata.labels["springcloud.kubesphere.io/enabled"]', "true");
            await e.projectStore.update(r, n);
            module240.success({
                content: `${t("UPDATE_SUCCESSFUL")}`
            });
            e.fetchProjectDetail();
        };
        e.getData = async (a)=>{
            let overview;
            await e.props.store.fetchList({
                ...a,
                ...e.props.match.params
            });
            overview = await e.instanceStore.fetchStatistics({
                ...e.props.match.params
            });
            e.setState({
                overview,
                isRefresh: false
            });
        };
        e.handleRefresh = function() {
            e.getData();
            e.setState({
                isRefresh: true
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchProjectDetail();
            }
        },
        {
            key: "renderProjectLabelSpringCloud",
            value: function() {
                return <Module790 className="margin-t12 margin-b12"><div className="flexbox"><module186.Icon className="margin-r12" name="springcloudgateway" size={40}/><Module791 className={module4637.text} title={t("SPRING_CLOUD_PROJECT_NOT_LABEL")} description={t("SPRING_CLOUD_PROJECT_NOT_LABEL_DESC")}/><module186.Button className={module4637.button} type="control" onClick={this.openProjectSpringCloud}>{t("OPEN_PROJECT_SPRING_CLOUD")}</module186.Button></div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps, trigger } = props;
                const params = this.props.match.params;
                const { workspace, namespace, cluster } = params;
                const state = this.state;
                const { overview, isRefresh } = state;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} tips={this.tips}/>{!this.projectSpringCloudEnabled && this.getProjectEditEnabled && this.renderProjectLabelSpringCloud()}<Module4638 detail={overview} cluster={cluster}/><Module797 {...tableProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} expandedRowRender={function({ name, status }) {
                    return <Module4635 serviceName={name} serviceStatus={status} isRefresh={isRefresh} workspace={workspace} cluster={cluster} namespace={namespace} trigger={trigger}/>;
                }} rowExpandable={function(e) {
                    return e.instanceCount;
                }} onRefresh={this.handleRefresh}/></ListPage>;
            }
        },
        {
            key: "getProjectEditEnabled",
            get: function() {
                return globals.app.getActions({
                    workspace: this.props.match.params.workspace,
                    module: "projects"
                }).includes("edit");
            }
        },
        {
            key: "projectSpringCloudEnabled",
            get: function() {
                return module26(this.projectStore.detail, 'labels["springcloud.kubesphere.io/enabled"]', "false") === "true";
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace, cluster } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("WHAT_IS_SERVICE_REGISTRATION_CENTER_Q"),
                        description: t("WHAT_IS_SERVICE_REGISTRATION_CENTER_A")
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, tableProps, match, projectStore } = props;
                return {
                    ...tableProps.tableActions,
                    actions: [
                        {
                            key: "create",
                            type: "control",
                            action: "manage",
                            text: t("CREATE"),
                            onClick: function() {
                                trigger("microservice.create", {
                                    title: t("CREATE_MICROSERVICE"),
                                    module: "deployments",
                                    store: _this.workloadStore,
                                    projectDetail: projectStore.detail,
                                    namespace: match.params.namespace,
                                    cluster: match.params.cluster,
                                    supportGpuSelect: true,
                                    success: _this.getData
                                });
                            }
                        }
                    ],
                    selectActions: []
                };
            }
        }
    ]);
    return r;
})(Component)) || l;
export default U;
