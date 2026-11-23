import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module856 from "./module-856.js";
import module14 from "./module-14.js";
import Module796 from "./module-796.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import { getLocalTime } from "./module-52.js";
import { ALERTING_STATUS } from "./module-879.js";
import { SEVERITY_LEVEL } from "./module-832.js";
import module4883 from "./module-4883.js";
import module325 from "./module-325.js";
import module4884 from "./module-4884.js";
let u;
const I = module794({
    store: new module4883,
    module: "applications",
    injectStores: [
        "rootStore",
        "detailStore"
    ]
})(u = ((Component_1)=>{
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
        n.getData = async function e() {
            let t;
            let a;
            let r;
            let o;
            const c = arguments;
            t = c.length > 0 && c[0] !== undefined ? c[0] : {};
            ({ silent: a, ...r } = t);
            o = n.props.store;
            if (a) {
                o.list.silent = true;
            }
            await o.fetchList({
                ...n.props.match.params,
                ...r
            });
            o.list.silent = false;
        };
        n.throttleGetData = module856(n.getData, 1000);
        n.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: 200
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    render: function(e) {
                        return <Module796 type={e} name={t(e)} flicker/>;
                    }
                },
                {
                    title: t("PARTITION_COUNT"),
                    dataIndex: "partitions"
                },
                {
                    title: t("REPLICA_COUNT"),
                    dataIndex: "replicas"
                },
                {
                    title: t("MESSAGE_RETENTION_TIME"),
                    dataIndex: 'config["retention.ms"]',
                    render: function(e) {
                        if (e) {
                            return <span>{e}ms</span>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("CREATION_TIME"),
                    dataIndex: "creationTimestamp",
                    render: function(e) {
                        if (e) {
                            return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                        }
                        return "-";
                    }
                }
            ];
        };
        n.showCreate = function() {
            const n_props = n.props;
            const { match, getData, store, detailStore } = n_props;
            return n.props.trigger("openpitrix.db.topic.create", {
                store,
                cluster: match.params.cluster,
                namespace: match.params.namespace,
                title: t("CREATE_TOPIC"),
                app_id: module26(detailStore, "detail.app_id"),
                kafkaReplicas: module26(detailStore, "detail.nodes.kafka"),
                cluster_id: match.params.id,
                success: getData
            });
        };
        n.websocket = new module325;
        n.initWebsocket();
        return n;
    }
    module37(r, [
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const params = this.props.match.params;
                const { cluster, namespace, id: cluster_id } = params;
                const o = this.props.store.getWatchListUrl({
                    namespace,
                    cluster,
                    cluster_id
                });
                if (o && namespace) {
                    this.websocket.watch(o);
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(t) {
                        if (t.object.kind === "KafkaTopic" && [
                            "MODIFIED",
                            "DELETED",
                            "ADDED"
                        ].includes(t.type)) {
                            _this.throttleGetData();
                        }
                    });
                }
            }
        },
        {
            key: "getStatus",
            value: function() {
                return ALERTING_STATUS.map((e)=>({
                        text: t(`ALERT_RULE_${e.toUpperCase()}`),
                        value: e
                    }));
            }
        },
        {
            key: "getAlertingTypes",
            value: function() {
                return SEVERITY_LEVEL.map((e)=>({
                        text: t(e.label),
                        value: e.value
                    }));
            }
        },
        {
            key: "getTableProps",
            value: function() {
                const _this = this;
                const props = this.props;
                const { tableProps, detailStore, store } = props;
                const actions = [
                    {
                        key: "deploy",
                        type: "control",
                        text: t("CREATE"),
                        action: "create",
                        forbidden: !detailStore.detail.isRunning,
                        onClick: this.showCreate
                    }
                ];
                if (!detailStore.detail.isRunning) {
                    actions[0].tooltip = {
                        message: t("TOPIC_CREATION_NOT_ALLOWED"),
                        placement: module26(store, "list.data.length") ? "bottomRight" : "bottom"
                    };
                }
                const selectActions = [
                    {
                        key: "delete",
                        type: "danger",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function() {
                            return _this.props.trigger("resource.batch.delete", {
                                type: "APP",
                                rowKey: tableProps.rowKey,
                                success: _this.getData,
                                ..._this.props.match.params,
                                ..._this.props.query
                            });
                        }
                    }
                ];
                return {
                    tableActions: {
                        ...tableProps.tableActions,
                        selectActions: [],
                        actions
                    },
                    selectActions,
                    emptyProps: {
                        title: t("NO_TOPIC_FOUND"),
                        icon: "record",
                        desc: t("TOPIC_EMPTY_DESC")
                    },
                    searchType: "keyword"
                };
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                const itemActions = this.itemActions;
                return <div className={module4884.policy}><ListPage {...this.props} getData={this.getData} noWatch><Module797 {...tableProps} {...this.getTableProps()} rowKey="name" itemActions={itemActions} columns={this.getColumns()}/></ListPage></div>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, routing, match, getData, name, store, detailStore } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function({ name, partitions, replicas, config }) {
                            return trigger("openpitrix.db.topic.create", {
                                cluster: match.params.cluster,
                                namespace: match.params.namespace,
                                title: t("EDIT_TOPIC"),
                                detail: {
                                    name,
                                    partitions,
                                    replicas,
                                    ...config
                                },
                                kafkaReplicas: module26(detailStore, "detail.nodes.kafka"),
                                isEdit: true,
                                store,
                                success: getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(detail) {
                            return trigger("resource.delete", {
                                type: name,
                                detail,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || u;
export default I;
