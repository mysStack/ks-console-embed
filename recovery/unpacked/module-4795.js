import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-38.js";
import "./module-62.js";
import "./module-64.js";
import "./module-7.js";
import "./module-32.js";
import "./module-1246.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-319.js";
import "./module-57.js";
import "./module-1923.js";
import "./module-1924.js";
import "./module-1925.js";
import "./module-1926.js";
import "./module-1927.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module1430, { DMPStatus } from "./module-1430.js";
import module1928 from "./module-1928.js";
import module1929 from "./module-1929.js";
import module4826 from "./module-4826.js";
import { binaryStringToBlob, copyToClipboard } from "./module-1247.js";
import { RadonDBAppId, getCpuAndMemoryFromSpecifications } from "./module-817.js";
import module325 from "./module-325.js";
import Module836 from "./module-836.js";
import Module796 from "./module-796.js";
import Module1217 from "./module-1217.js";
import Module806 from "./module-806.js";
import module4827 from "./module-4827.js";
import module4885 from "./module-4885.js";
let c;
const U = inject("rootStore")(c = observer(c = trigger(c = ((Component_1)=>{
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
        e.store = new module1430;
        e.rebalanceStore = new module4826;
        e.backupStore = new module1928;
        e.websocket = new module325;
        e.fetchData = function() {
            const params = e.props.match.params;
            return e.store.fetchDetail(params);
        };
        e.getOperations = function() {
            const params = e.props.match.params;
            const { cluster, workspace, namespace, id: cluster_id } = params;
            const detail = module14.toJS(e.store.detail);
            const l = {
                cluster,
                workspace,
                namespace,
                cluster_id,
                app_id: detail.app_id
            };
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("openpitrix.db.app.edit", {
                            type: t(e.name),
                            detail: {
                                ...l,
                                name: detail.name,
                                description: detail.description
                            },
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "createDBNode",
                    icon: "backup",
                    text: t("SCALE_OUT"),
                    action: "create",
                    onClick: function() {
                        return e.trigger("openpitrix.db.createDBNode", {
                            type: t(e.name),
                            ...l,
                            shardsCount: detail.shardsCount,
                            nodes: detail.nodes,
                            icon: "backup",
                            specificationsObject: detail.specifications,
                            storage: detail.storage,
                            storages: detail.storages
                        });
                    },
                    disabled: !detail.isRunning
                },
                {
                    key: "rebalance",
                    icon: "loadbalancer",
                    text: t("REBALANCE_NODES"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.db.kafka.rebalance", {
                            type: t(e.name),
                            icon: "loadbalancer",
                            title: t("REBALANCE_NODES"),
                            store: e.rebalanceStore,
                            ...l
                        });
                    },
                    disabled: !detail.isRunning,
                    includeApp: [
                        RadonDBAppId.Kafka
                    ]
                },
                {
                    key: "Specification",
                    icon: "scaling",
                    text: t("ADJUST_RESOURCES"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.db.adjustSpecification", {
                            ...e.props.match.params,
                            icon: "scaling",
                            cpu: detail.cpu,
                            memory: detail.memory,
                            specificationsObject: detail.specifications,
                            nodes: detail.nodes,
                            ...l,
                            success: function(e) {
                                if (detail.app_id === RadonDBAppId.RedisCluster || detail.app_id === RadonDBAppId.RedisSentinel) {
                                    const t = getCpuAndMemoryFromSpecifications(e).memory;
                                    (new module1929).updateParams({
                                        ...l,
                                        params: {
                                            maxmemory: 1024 * parseFloat(t) - 50
                                        }
                                    });
                                }
                            }
                        });
                    },
                    disabled: !detail.isRunning
                },
                {
                    key: "storage",
                    icon: "storage",
                    text: t("EXPAND_VOLUME"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.db.adjustCapacity", {
                            type: t(e.name),
                            icon: "storage",
                            storage: detail.realStorage || detail.storage,
                            storages: detail.realStorages || detail.storages,
                            nodes: detail.nodes,
                            ...l
                        });
                    },
                    disabled: !detail.allowVolumeExpansion || !detail.isRunning
                },
                {
                    key: "backup",
                    icon: "backup",
                    text: t("BACK_UP"),
                    action: "manage",
                    onClick: function() {
                        return e.trigger("openpitrix.db.backup.create", {
                            type: t(e.name),
                            icon: "backup",
                            title: t("BACK_UP"),
                            store: e.backupStore,
                            image: detail.sidecarImage,
                            success: e.fetchData,
                            ...l
                        });
                    },
                    disabled: !detail.isRunning,
                    includeApp: [
                        RadonDBAppId.MySQL,
                        RadonDBAppId.PostgreSQL
                    ]
                },
                {
                    key: "autoBackup",
                    icon: "storage",
                    text: t("SET_AUTO_BACKUP"),
                    action: "manage",
                    onClick: function() {
                        let s_backupSchedule = detail.backupSchedule;
                        let r = 0;
                        let isScheduledDelete = false;
                        if (detail.app_id === RadonDBAppId.PostgreSQL) {
                            s_backupSchedule = module26(detail, "spec.backupCluster.backupToS3.cron.schedule", "");
                            isScheduledDelete = module26(detail, "spec.backupCluster.backupToS3.policy.retention", "REDUNDANCY 10") !== "REDUNDANCY 10";
                            r = module26(detail, "spec.backupCluster.backupToS3.policy.retention", "REDUNDANCY 10").replace(/[^\d]/g, "");
                        }
                        return e.trigger("openpitrix.db.backup.auto", {
                            type: t(e.name),
                            icon: "backup",
                            title: t("SET_AUTO_BACKUP"),
                            store: e.backupStore,
                            backupSchedule: s_backupSchedule,
                            isScheduledDelete,
                            retentionTime: isScheduledDelete ? parseInt(r, 10) : 30,
                            success: e.fetchData,
                            ...l
                        });
                    },
                    disabled: !detail.isRunning,
                    includeApp: [
                        RadonDBAppId.MySQL,
                        RadonDBAppId.PostgreSQL
                    ]
                },
                {
                    key: "update",
                    icon: "update",
                    text: t("UPDATE_VERSION"),
                    action: "edit",
                    show: e.showUpdateVersion,
                    onClick: function() {
                        e.trigger("openpitrix.db.app.update", {
                            resource: detail.name,
                            title: t("UPDATE_VERSION"),
                            detail: {
                                ...l
                            },
                            success: function() {
                                return e.fetchData;
                            }
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
                            detail,
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
                        name: t("APP_TEMPLATE"),
                        value: module26(a, "app_name", "-")
                    },
                    {
                        name: t("VERSION"),
                        value: module26(a, "version", "-")
                    },
                    {
                        name: t("KERNEL_VERSION"),
                        value: module26(a, "databaseVersionText")
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(module26(a, "creationTimestamp")).format("YYYY-MM-DD HH:mm:ss")
                    }
                ].filter((e)=>e.value);
            }
        };
        e.getCustomAttrs = function() {
            const { services = [], secret } = e.store.detail;
            const c = secret ? binaryStringToBlob(secret.cert) : new Blob;
            const s = services.filter((e)=>e.type === "ClusterIP");
            const l = services.filter((e)=>e.type === "NodePort");
            return <div data-test="detail-attrs"><div style={{
                margin: "24px 0 12px"
            }} className="h6">{t("ACCESS_ADDRESS_PL")}</div>{s.length > 0 && <><div style={{
                margin: "12px 0 4px"
            }}>CluserIP</div><Module1217>{s.map(({ label, value })=><Module1217.Item name={t(label)} value={value || "-"}/>)}</Module1217></>}{l.length > 0 && <><div style={{
                margin: "12px 0 4px"
            }}>NodePort</div><Module1217>{l.map(({ label, value })=><Module1217.Item name={t(label)} value={value || "-"}/>)}</Module1217></>}{secret && <><div style={{
                margin: "24px 0 12px"
            }} className="h6">传输加密</div><Module1217><Module1217.Item name={t("CA_CERTIFICATE")} value={secret.cert ? <div className={module4885.flexRow}><span>ca.p12</span><a href={URL.createObjectURL(c)} download="ca.p12">{t("DOWNLOAD")}</a></div> : "-"}/><Module1217.Item name={t("CA_PASSWORD")} value=<div className={module4885.flexRow}><span>{secret.password || "-"}</span><a href="#" onClick={function(e) {
                e.preventDefault();
                copyToClipboard(secret.password).then(()=>{
                    module240.success({
                        content: t("COPY_SUCCESSFUL")
                    });
                });
            }}>{t("COPY")}</a></div>/><Module1217.Item name={t("VALIDITY_PERIOD")} value={secret.validDate || "-"}/></Module1217></>}</div>;
        };
        e.renderStatus = function() {
            const a = module14.toJS(e.store.detail);
            const a_status = a.status;
            if (a_status) {
                if (a.additional_info) {
                    return <module186.Tooltip content={a.additional_info}><Module796 name={t(`DATABASE_STATUS_${a_status.replace(/[-\s]/g, "_").toUpperCase()}`)} type={DMPStatus[a_status] || a_status}/></module186.Tooltip>;
                }
                return <Module796 name={t(`DATABASE_STATUS_${a_status.replace(/[-\s]/g, "_").toUpperCase()}`)} type={DMPStatus[a_status] || a_status} flicker/>;
            }
            return "-";
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.fetchData().then(()=>{
                    _this.initWebsocket();
                    if (module26(_this.store, "detail.app_id") === RadonDBAppId.Kafka) {
                        _this.rebalanceStore.fetchList(_this.props.match.params);
                    }
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
                this.websocket.close();
            }
        },
        {
            key: "checkAlertRulesPermission",
            value: function() {
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                return globals.app.hasClusterModule(cluster, "alerting") && globals.app.hasPermission({
                    cluster,
                    project: namespace,
                    action: "view",
                    module: "alert-rules"
                });
            }
        },
        {
            key: "initWebsocket",
            value: function() {
                const _this = this;
                const name = this.props.match.params.id;
                const a = this.store.getWatchUrl({
                    name
                });
                if (a) {
                    this.websocket.watch(a);
                    this.disposer = module14.reaction(function() {
                        return _this.websocket.message;
                    }, function(t) {
                        if (t.object.kind === "Manifest" && [
                            "MODIFIED",
                            "DELETED"
                        ].includes(t.type)) {
                            _this.fetchData();
                        }
                    }, {
                        name: a
                    });
                }
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
                const icon = <label className={module4885.icon}><Module836 iconLetter={this.store.detail.kind} src={this.store.detail.icon} alt=""/></label>;
                const app_id = this.store.detail.app_id;
                const n = {
                    icon,
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations().filter((e)=>!e.includeApp || e.includeApp.includes(app_id)),
                    attrs: this.getAttrs(),
                    customAttrs: this.getCustomAttrs(),
                    breadcrumbs: [
                        {
                            label: t("APP_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                let routes = module4827;
                if (!this.checkAlertRulesPermission()) {
                    routes = module4827.filter((e)=>!e.path.includes("alerting"));
                }
                const c = module4827.find((e)=>e.path.includes("account"));
                if (c) {
                    if (app_id === RadonDBAppId.Kafka) {
                        c.title = "KAFKA_USERS";
                    } else {
                        c.title = "DATABASE_USERS";
                    }
                }
                routes = routes.filter((e)=>{
                    if (e.excludeApp) {
                        return !e.excludeApp.includes(app_id);
                    }
                    return !e.only || e.only === app_id;
                });
                return <Module806 stores={stores} {...n} routes={routes}/>;
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
                return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}/database`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "showUpdateVersion",
            get: function() {
                const e = module14.toJS(this.store.detail);
                return !(e.app_id !== RadonDBAppId.OpenSearch || !e.databaseVersionText.includes("2.3.0"));
            }
        }
    ]);
    return r;
})(Component)) || c) || c) || c;
export default U;
