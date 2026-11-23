import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module788 from "components/Base/Modal";
import Module864 from "components/Base/ScrollLoad";
import Module916 from "components/Tables/Base/FilterInput";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module323 from "stores/devops";
import module439 from "stores/project";
import module494 from "stores/project.federated";
import module445 from "stores/workspace";
import { compareVersion, showNameAndAlias } from "utils/index";
import Module5046 from "unpacked/module-5046.js";
import Module5048 from "unpacked/module-5048.js";
import module5050 from "unpacked/module-5050.js";
let o;
function R(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let n = Object.getOwnPropertySymbols(e);
        if (t) {
            n = n.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, n);
    }
    return r;
}
const C = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.fetchData = function(e) {
            const workspace = a.props.workspace;
            const a_state = a.state;
            const { cluster, search } = a_state;
            const l = {
                workspace,
                ...e
            };
            if (a.state.type === "federatedprojects") {
                l.labelSelector = `kubesphere.io/workspace=${workspace}`;
            } else {
                l.cluster = cluster;
            }
            if (search) {
                l.name = search;
            }
            a.stores[a.state.type].fetchList(l);
        };
        a.handleRefresh = function() {
            return a.fetchData();
        };
        a.handleTypeChange = function(e) {
            if (a.state.type !== e) {
                a.setState({
                    type: e,
                    search: ""
                }, a.fetchData);
            }
        };
        a.handleClusterChange = function(cluster) {
            a.setState({
                cluster,
                search: ""
            }, a.fetchData);
        };
        a.handleEnterWorkspace = function() {
            const a_props = a.props;
            const e_workspace = a_props.workspace;
            return a_props.onChange(`/workspaces/${e_workspace}`);
        };
        a.handleOnEnter = function(e) {
            const a_props = a.props;
            const { workspace, onChange } = a_props;
            const cluster = a.state.cluster;
            if (a.state.type === "projects") {
                onChange(`/${workspace}/clusters/${cluster}/projects/${e.name}`);
            } else if (a.state.type === "federatedprojects") {
                onChange(`/${workspace}/federatedprojects/${e.name}`);
            } else if (e.namespace && cluster) {
                onChange(`/${workspace}/clusters/${cluster}/devops/${e.namespace}`);
            }
        };
        a.clusterRenderer = function(e) {
            return t("CLUSTER_VALUE", {
                value: e.label
            });
        };
        a.showCreate = function() {
            const a_props = a.props;
            const { workspace, rootStore, isEdge } = a_props;
            const cluster = a.state.cluster;
            if (a.state.type === "projects") {
                rootStore.triggerAction("project.create", {
                    store: a.projectStore,
                    workspace,
                    isEdgeWize: isEdge,
                    type: isEdge ? "edge" : undefined,
                    defaultCluster: cluster,
                    success: function() {
                        return a.fetchData();
                    }
                });
            } else if (a.state.type === "federatedprojects") {
                rootStore.triggerAction("federated.project.create", {
                    store: a.projectStore,
                    workspace,
                    clusters: a.store.clusters.data.slice(),
                    success: function() {
                        return a.fetchData();
                    }
                });
            } else {
                rootStore.triggerAction("devops.create", {
                    store: a.devopsStore,
                    cluster,
                    workspace,
                    success: function() {
                        return a.fetchData();
                    }
                });
            }
        };
        a.store = new module445;
        a.projectStore = new module439;
        a.fedProjectStore = new module494({
            module: "namespaces"
        });
        a.devopsStore = new module323;
        a.stores = {
            devops: a.devopsStore,
            federatedprojects: a.fedProjectStore,
            projects: a.projectStore
        };
        a.state = {
            type: e.defaultType || "projects",
            cluster: e.cluster || "",
            search: "",
            filters: {}
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.store.fetchDetail({
                    workspace: this.props.workspace
                });
                this.store.fetchClusters({
                    workspace: this.props.workspace
                }).then(()=>{
                    if (!_this.state.cluster) {
                        _this.setState({
                            cluster: module26(_this.store.clusters, "data[0].name", "")
                        });
                    }
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, workspace, onCancel } = props;
                const state = this.state;
                const { type, cluster } = state;
                const detail = this.store.detail;
                const list = this.stores[type].list;
                const b = module14.toJS(list);
                const { data, total, page, isLoading } = b;
                const R = globals.app.isMultiCluster && type !== "federatedprojects";
                return <Module788 bodyClassName={module5050.body} visible={visible} onCancel={onCancel} width={960} icon="enterprise" title=<a onClick={this.handleEnterWorkspace}>{showNameAndAlias(workspace, "workspace")}</a> description={module26(detail, "description") || t("WORKSPACE")} hideFooter><div className={module5050.bar}><module186.Columns className="is-variable is-1"><module186.Column className="is-narrow"><module186.RadioGroup mode="button" value={type} options={this.types} onChange={this.handleTypeChange}/></module186.Column><module186.Column><div className={module5050.searchWrapper}>{R && <Module5048 className={module5050.cluster} options={this.clusters} value={cluster} onChange={this.handleClusterChange}/>}<Module916 className={module3(module5050.search, module31({}, module5050.withSelect, R))} placeholder={t("SEARCH_BY_NAME")} columns={this.columns} contentClassName={module5050.content} onChange={function(filters) {
                    _this.setState({
                        filters
                    });
                    _this.fetchData(filters);
                }} filters={this.state.filters}/></div></module186.Column><module186.Column className="is-narrow"><div><module186.Button icon="refresh" type="flat" onClick={this.handleRefresh}/>{this.canCreate && <module186.Button type="control" onClick={this.showCreate}>{t("CREATE_PROJECT")}</module186.Button>}</div></module186.Column></module186.Columns></div><div className={module5050.list}><Module864 wrapperClassName={module5050.listWrapper} data={data} total={total} page={page} loading={isLoading} onFetch={this.fetchData}>{data.map((t)=><Module5046 key={t.uid || t.devops} data={t} type={type} onEnter={_this.handleOnEnter}/>)}</Module864></div></Module788>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.store.clusters.data.map((cluster)=>({
                        label: showNameAndAlias(cluster),
                        value: cluster.name,
                        cluster,
                        disabled: !cluster.isReady,
                        ksVersion: module26(cluster, "configz.ksVersion")
                    }));
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const workspace = this.props.workspace;
                return {
                    projects: globals.app.getActions({
                        workspace,
                        module: "projects"
                    }),
                    federatedprojects: globals.app.getActions({
                        workspace,
                        module: "federatedprojects"
                    }),
                    devops: globals.app.getActions({
                        workspace,
                        module: "devops"
                    })
                };
            }
        },
        {
            key: "types",
            get: function() {
                this.props.isEdge;
                const e = [
                    {
                        label: t("PROJECT_PL"),
                        value: "projects"
                    }
                ];
                if (globals.app.hasKSModule("devops")) {
                    e.push({
                        label: t("DEVOPS_PROJECT_PL"),
                        value: "devops"
                    });
                }
                return e;
            }
        },
        {
            key: "canCreate",
            get: function() {
                return this.enabledActions[this.state.type].includes("create");
            }
        },
        {
            key: "columns",
            get: function() {
                const cluster = this.state.cluster;
                const n = this.clusters.find((e)=>e.value === cluster)?.ksVersion;
                const search = compareVersion(n, "3.4.0") >= 0;
                return [
                    {
                        dataIndex: "name",
                        title: t("NAME"),
                        search: true
                    },
                    {
                        dataIndex: "alias",
                        title: t("ALIAS"),
                        search
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default C;
