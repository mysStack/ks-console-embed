import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import module26 from "./module-26.js";
const c = {
    getConfig: function(e, t) {
        const namespace = e.detail.namespace;
        const t_name = t.name;
        return [
            {
                targets: [
                    {
                        expr: `sum(max_over_time(mongodb_opcounters_insert{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcounters_insert{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcounters_query{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcounters_query{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcounters_update{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcounters_update{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcounters_delete{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcounters_delete{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcounters_getmore{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcounters_getmore{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcounters_command{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcounters_command{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum(max_over_time(mongodb_opcountersRepl_insert{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcountersRepl_insert{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcountersRepl_query{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcountersRepl_query{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcountersRepl_update{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcountersRepl_update{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcountersRepl_delete{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcountersRepl_delete{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcountersRepl_getmore{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcountersRepl_getmore{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    },
                    {
                        expr: `sum(max_over_time(mongodb_opcountersRepl_command{namespace="${namespace}",pod="${t_name}"}[1m]) or vector(0)) - sum(max_over_time(mongodb_opcountersRepl_command{namespace="${namespace}",pod="${t_name}"}[1m] offset 1m) or vector(0))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_connections_current{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_connections_totalCreated{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_connections_available{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_connections_active{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_metrics_cursor_timedOut{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_metrics_cursor_open_noTimeout{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_metrics_cursor_open_pinned{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_metrics_cursor_open_total{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_network_bytesIn{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_network_bytesOut{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_wiredTiger_concurrentTransactions_write_out{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_wiredTiger_concurrentTransactions_write_available{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_wiredTiger_concurrentTransactions_read_out{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_wiredTiger_concurrentTransactions_read_available{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_metrics_document_deleted{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_metrics_document_inserted{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_metrics_document_returned{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_metrics_document_updated{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_metrics_queryExecutor_scanned{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_metrics_queryExecutor_scannedObjects{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_globalLock_activeClients_total{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_globalLock_activeClients_readers{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_globalLock_activeClients_writers{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_globalLock_currentQueue_total{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_globalLock_currentQueue_readers{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_globalLock_currentQueue_writers{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `mongodb_wiredTiger_cache_tracked_dirty_bytes_in_the_cache{namespace="${namespace}",pod="${t_name}"} / mongodb_wiredTiger_cache_maximum_bytes_configured{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `mongodb_wiredTiger_cache_bytes_currently_in_the_cache{namespace="${namespace}",pod="${t_name}"} / mongodb_wiredTiger_cache_maximum_bytes_configured{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            }
        ];
    },
    getMonitoringCfgs: function(e) {
        return [
            {
                title: t("OP_COUNTERS"),
                legend: [
                    t("OP_INSERT"),
                    t("OP_QUERY"),
                    t("OP_UPDATE"),
                    t("OP_DELETE"),
                    t("OP_GETMORE"),
                    t("OP_COMMAND")
                ],
                data: [
                    module26(e, "1.data.result[0]", {}),
                    module26(e, "2.data.result[0]", {}),
                    module26(e, "3.data.result[0]", {}),
                    module26(e, "4.data.result[0]", {}),
                    module26(e, "5.data.result[0]", {}),
                    module26(e, "6.data.result[0]", {})
                ]
            },
            {
                title: t("OPREPL_COUNTERS"),
                legend: [
                    t("OPREPL_INSERT"),
                    t("OPREPL_QUERY"),
                    t("OPREPL_UPDATE"),
                    t("OPREPL_DELETE"),
                    t("OPREPL_GETMORE"),
                    t("OPREPL_COMMAND")
                ],
                data: [
                    module26(e, "7.data.result[0]", {}),
                    module26(e, "8.data.result[0]", {}),
                    module26(e, "9.data.result[0]", {}),
                    module26(e, "10.data.result[0]", {}),
                    module26(e, "11.data.result[0]", {}),
                    module26(e, "12.data.result[0]", {})
                ]
            },
            {
                title: t("CONNECTIONS"),
                legend: [
                    t("CONNECTIONS_CURRENT"),
                    t("CONNECTIONS_TOTALCREATED"),
                    t("CONNECTIONS_AVAILABLE"),
                    t("CONNECTIONS_ACTIVE")
                ],
                data: [
                    module26(e, "13.data.result[0]", {}),
                    module26(e, "14.data.result[0]", {}),
                    module26(e, "15.data.result[0]", {}),
                    module26(e, "16.data.result[0]", {})
                ]
            },
            {
                title: t("CURSOR_COUNT"),
                legend: [
                    t("CURSOR_TIMEDOUT"),
                    t("CURSOR_OPEN_NOTIMEOUT"),
                    t("CURSOR_OPEN_PINNED"),
                    t("CURSOR_OPEN_TOTAL")
                ],
                data: [
                    module26(e, "17.data.result[0]", {}),
                    module26(e, "18.data.result[0]", {}),
                    module26(e, "19.data.result[0]", {}),
                    module26(e, "20.data.result[0]", {})
                ]
            },
            {
                title: t("MONGODB_NETWORK_TRAFFIC"),
                legend: [
                    t("NETWORK_BYTESIN"),
                    t("NETWORK_BYTESOUT")
                ],
                unitType: "memory",
                data: [
                    module26(e, "21.data.result[0]", {}),
                    module26(e, "22.data.result[0]", {})
                ]
            },
            {
                title: t("WIREDTIGER_OPERATION_COUNT"),
                legend: [
                    t("WT_WRITE_OUT"),
                    t("WT_WRITE_AVAILABLE"),
                    t("WT_READ_OUT"),
                    t("WT_READ_AVAILABLE")
                ],
                data: [
                    module26(e, "23.data.result[0]", {}),
                    module26(e, "24.data.result[0]", {}),
                    module26(e, "25.data.result[0]", {}),
                    module26(e, "26.data.result[0]", {})
                ]
            },
            {
                title: t("DOC_COUNT"),
                legend: [
                    t("DOC_DELETED"),
                    t("DOC_INSERTED"),
                    t("DOC_RETURNED"),
                    t("DOC_UPDATED")
                ],
                data: [
                    module26(e, "27.data.result[0]", {}),
                    module26(e, "28.data.result[0]", {}),
                    module26(e, "29.data.result[0]", {}),
                    module26(e, "30.data.result[0]", {})
                ]
            },
            {
                title: t("QUERYEXECUTOR"),
                legend: [
                    t("SCANNEDKEYS"),
                    t("SCANNEDDOCS")
                ],
                data: [
                    module26(e, "31.data.result[0]", {}),
                    module26(e, "32.data.result[0]", {})
                ]
            },
            {
                title: t("ACTIVECLIENTS"),
                legend: [
                    t("CLIENTS_TOTAL"),
                    t("CLIENTS_READERS"),
                    t("CLIENTS_WRITERS")
                ],
                data: [
                    module26(e, "33.data.result[0]", {}),
                    module26(e, "34.data.result[0]", {}),
                    module26(e, "35.data.result[0]", {})
                ]
            },
            {
                title: t("QUEUED_OPERATIONS"),
                legend: [
                    t("QUEUE_TOTAL"),
                    t("QUEUE_READERS"),
                    t("QUEUE_WRITERS")
                ],
                unitType: "%",
                data: [
                    module26(e, "36.data.result[0]", {}),
                    module26(e, "37.data.result[0]", {}),
                    module26(e, "38.data.result[0]", {})
                ]
            },
            {
                title: t("WIREDTIGER_CACHE"),
                legend: [
                    t("WIREDTIGER_CACHE_USAGED"),
                    t("WIREDTIGER_CACHE_DIRTY_USAGE")
                ],
                unitType: "%",
                data: [
                    module26(e, "39.data.result[0]", {}),
                    module26(e, "40.data.result[0]", {})
                ]
            }
        ];
    }
};
export default c;
