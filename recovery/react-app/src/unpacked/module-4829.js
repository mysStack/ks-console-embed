import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
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
import "unpacked/module-4830.js";
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
import module106 from "unpacked/module-106.js";
import { withRouter } from "unpacked/module-47.js";
import module3 from "unpacked/module-3.js";
import { inject, observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module856 from "unpacked/module-856.js";
import module26 from "unpacked/module-26.js";
import module1435 from "unpacked/module-1435.js";
import Module1963 from "unpacked/module-1963.js";
import { RadonDBAppId } from "unpacked/module-817.js";
import Module790 from "components/Base/Panel";
import Module797 from "components/Tables/List";
import { withProjectList } from "components/HOCs/withList";
import module325 from "stores/websocket";
import Module4865 from "unpacked/module-4865.js";
import module1974 from "unpacked/module-1974.js";
let l;
let i;
let u;
export const DBNODE_STATUS = [
    {
        text: "RUNNING",
        value: "Running"
    },
    {
        text: "UPDATING",
        value: "Updating"
    },
    {
        text: "STOPPED",
        value: "Stopped"
    },
    {
        text: "PENDING",
        value: "Pending"
    }
];
l = inject("Consumer");
i = withProjectList({
    store: new module1435,
    module: "applications",
    name: "NODE",
    rowKey: "name"
});
const j = l(u = withRouter(u = i(u = observer(u = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.store = null;
        n.searchName = "";
        n.state = {
            currentMonitorDbNode: [],
            isShowMonitor: false,
            nodeRole: ""
        };
        n.fetchData = module856(function() {
            const n_props = n.props;
            const { chi, namespace, getData, app_id } = n_props;
            getData({
                namespace,
                chi,
                app_id,
                esKibana: app_id === RadonDBAppId.Elasticsearch
            });
        }, 2000);
        n.deleteNode = function(e) {
            return function(t) {
                t.stopPropagation();
                t.preventDefault();
                n.props.trigger("resource.delete", {
                    detail: e,
                    type: "NODE",
                    success: async ()=>{
                        await n.props.deleteNode(e.deploymentName);
                        n.searchName = "";
                        n.fetchData();
                    }
                });
            };
        };
        n.switchItemShowMonitor = function(currentMonitorDbNode) {
            return function(t) {
                t.stopPropagation();
                t.preventDefault();
                n.setState({
                    ...n.state,
                    currentMonitorDbNode,
                    nodeRole: module26(currentMonitorDbNode, "nodeRole", "")
                }, function() {
                    n.switchShowMonitor(true);
                });
            };
        };
        n.getColumns = function() {
            const n_props = n.props;
            const { getSortOrder, app_id, showDelete } = n_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <div> <Module4865 key={`${t.name}-${t.status}`} detail={t} app_id={app_id} switchShowMonitor={n.switchItemShowMonitor(t)} deleteNode={n.deleteNode(t)} showDelete={showDelete}/></div>;
                    }
                }
            ];
        };
        const e_store = e.store;
        n.store = e_store;
        n.websocket = new module325;
        n.initWebsocket();
        return n;
    }
    module37(r, [
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const props = this.props;
                const { chi, namespace, app_id } = props;
                const cluster = this.props.match.params.cluster;
                const c = this.props.store.getWatchListUrl({
                    namespace,
                    chi,
                    app_id,
                    cluster
                });
                if (c && namespace) {
                    this.websocket.watch(c);
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(t) {
                        if (t.object.kind === "Pod" && [
                            "MODIFIED",
                            "DELETED",
                            "ADDED"
                        ].includes(t.type)) {
                            _this.fetchData();
                        }
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                localStorage.setItem("pod-detail-referrer", location.pathname);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
                this.store.clear();
            }
        },
        {
            key: "switchShowMonitor",
            value: function(isShowMonitor) {
                this.setState({
                    ...this.state,
                    isShowMonitor
                });
            }
        },
        {
            key: "getStatus",
            value: function() {
                return DBNODE_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const Consumer = this.props.Consumer;
                return <>{<Consumer>{function({ updateState }) {
                    _this.updateState = updateState;
                }}</Consumer>}{this.state.isShowMonitor && module106.createPortal(<div className={module1974.fullScreen}><Module1963 monitorDbNode={this.state.currentMonitorDbNode} nodeRole={this.state.nodeRole} exitHandler={function() {
                    _this.switchShowMonitor(false);
                }}/></div>, document.body)}</>;
            }
        },
        {
            key: "getTableProps",
            value: function() {
                const _this = this;
                const props = this.props;
                const { tableProps, store } = props;
                const onFetch = function(dataFilters) {
                    if (dataFilters) {
                        if (Object.hasOwn(dataFilters, "name")) {
                            if (dataFilters.name === undefined) {
                                dataFilters.name = "";
                            }
                            _this.searchName = dataFilters.name;
                        } else {
                            dataFilters.name = _this.searchName;
                        }
                    } else {
                        _this.searchName = "";
                    }
                    const props = _this.props;
                    const { chi, namespace, getData, app_id } = props;
                    store.list.isLoading = true;
                    getData({
                        namespace,
                        chi,
                        dataFilters,
                        app_id,
                        esKibana: app_id === RadonDBAppId.Elasticsearch
                    });
                };
                return {
                    tableActions: {
                        ...tableProps.tableActions,
                        onFetch,
                        onRefresh: function() {
                            onFetch({
                                limit: tableProps.pagination.limit,
                                page: tableProps.pagination.page
                            });
                            _this.initWebsocket();
                        },
                        actions: [],
                        onCreate: null
                    },
                    selectActions: [],
                    emptyProps: {
                        desc: ""
                    },
                    emptyText: store.list.isLoading ? " " : null,
                    searchType: "name"
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, tableProps, replicasCount } = props;
                return <Module790 className={module3(module1974.container, className)} title={t("NODE_PL")}><Module797 {...tableProps} itemActions={[]} columns={this.getColumns()} {...this.getTableProps()} className={replicasCount > 0 ? `split-${replicasCount}` : ""}/>{this.renderContent()}</Module790>;
            }
        }
    ]);
    return r;
})(Component)) || u) || u) || u) || u;
export default j;
