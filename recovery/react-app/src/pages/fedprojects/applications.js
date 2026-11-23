import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
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
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import { inject } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import Module796 from "components/Base/Status";
import Module789 from "components/Base/Avatar";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import Module793 from "unpacked/module-793.js";
import Module1107 from "components/Clusters/ClusterWrapper";
import { getDisplayName, getLocalTime } from "utils/index";
import module437 from "stores/federated";
import module961 from "stores/application/crd";
let o;
const P = inject("projectStore")(o = withProjectList({
    store: new module437(new module961),
    module: "applications",
    name: "APP"
})(o = ((Component_1)=>{
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...o_1);
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(t, r) {
                        return <Module789 title={getDisplayName(r)} avatar={r.icon || "/assets/default-app.svg"} to={r.deletionTime ? null : `${e.props.match.url}/${t}`} desc={module26(r, 'annotations["kubesphere.io/description"]', "-")}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "20%",
                    render: function(r, record) {
                        if (r === "Deleting") {
                            return <Module796 type={r} name={t(r.toUpperCase())} flicker/>;
                        }
                        return <Module1107 clusters={record.clusters} clustersDetail={e.props.projectStore.detail.clusters}>{function(t) {
                            return e.renderStatus({
                                cluster: t,
                                record
                            });
                        }}</Module1107>;
                    }
                },
                {
                    title: t("VERSION"),
                    dataIndex: "version",
                    isHideable: true,
                    width: "20%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    isHideable: true,
                    width: 180,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, getData, projectStore } = e_props;
            return e.props.trigger("crd.app.create", {
                module,
                isFederated: true,
                namespace: match.params.namespace,
                projectDetail: projectStore.detail,
                cluster: e.cluster,
                success: getData
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "renderStatus",
            value: function({ cluster, record }) {
                const o = module26(record, `resources[${cluster.name}]`);
                if (o) {
                    return <Module796 name={t(o.status?.toUpperCase())} type={o.status}/>;
                }
                return t("WAITING");
            }
        },
        {
            key: "getTableProps",
            value: function() {
                return {
                    tableActions: this.tableActions,
                    emptyProps: {
                        title: t("NO_COMPOSED_APP_FOUND"),
                        desc: t("COMPOSED_APP_EMPTY_DESC")
                    },
                    searchType: "name"
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} isFederated><Module793 {...bannerProps} tips={this.tips} description={t("APPLICATIONS_DESC")}/><Module797 {...tableProps} {...this.getTableProps()} columns={this.getColumns()}/></ListPage>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("HOW_TO_USE_APP_GOVERN_Q"),
                        description: t("HOW_TO_USE_APP_GOVERN_A"),
                        closable: false
                    }
                ];
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.projectStore;
            }
        },
        {
            key: "clusters",
            get: function() {
                return module14.toJS(this.project.detail.clusters).map((e)=>e.name);
            }
        },
        {
            key: "cluster",
            get: function() {
                if (this.clusters.includes("host")) {
                    return "host";
                }
                return this.clusters[0];
            }
        },
        {
            key: "canCreate",
            get: function() {
                const namespace = this.props.match.params.namespace;
                const t = this.clusters.join("_");
                const r = globals.app.getActions({
                    cluster: t,
                    project: namespace,
                    module: "deployments",
                    fedproject: true
                }).includes("create");
                const a = globals.app.getActions({
                    cluster: t,
                    project: namespace,
                    module: "services",
                    fedproject: true
                }).includes("create");
                return r && a;
            }
        },
        {
            key: "tableActions",
            get: function() {
                const tableProps = this.props.tableProps;
                const actions = this.canCreate ? [
                    {
                        key: "create",
                        type: "control",
                        text: t("CREATE"),
                        onClick: this.showCreate
                    }
                ] : [];
                return {
                    ...tableProps.tableActions,
                    actions,
                    onCreate: null,
                    selectActions: []
                };
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default P;
