import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
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
                        expr: `sum by(hostname) (chi_clickhouse_metric_TCPConnection{namespace="${namespace}",pod="${t_name}"})`
                    },
                    {
                        expr: `sum by(hostname) (chi_clickhouse_metric_HTTPConnection{namespace="${namespace}",pod="${t_name}"})`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_DiskDataBytes{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_SelectQuery{namespace="${namespace}",pod="${t_name}"}[2m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_Query{namespace="${namespace}",pod="${t_name}"}[2m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_InsertedBytes{namespace="${namespace}",pod="${t_name}"}[2m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_InsertedRows{namespace="${namespace}",pod="${t_name}"}[2m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_ReplicasMaxAbsoluteDelay{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `chi_clickhouse_metric_ReplicasMaxRelativeDelay{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_TotalPartsOfMergeTreeTables{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_DelayedInserts{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `increase(chi_clickhouse_event_DelayedInserts{namespace="${namespace}",pod="${t_name}"}[1m])`
                    },
                    {
                        expr: `increase(chi_clickhouse_event_RejectedInserts{namespace="${namespace}",pod="${t_name}"}[1m])`
                    },
                    {
                        expr: `chi_clickhouse_metric_DistributedFilesToInsert{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_CompressedReadBufferBytes{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReadCompressedBytes{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReadBufferFromFileDescriptorReadBytes{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_OSReadBytes{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_MemoryTracking{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReplicatedDataLoss{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReplicatedPartChecks{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReplicatedPartChecksFailed{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReplicatedPartFetches{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReplicatedPartFailedFetches{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReplicatedPartFetchesOfMerged{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_ReplicatedPartMerges{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    },
                    {
                        expr: `chi_clickhouse_metric_ReplicasMaxQueueSize{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_Merge{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_MergedRows{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_MergedUncompressedBytes{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (chi_clickhouse_table_parts{namespace="${namespace}",pod="${t_name}",active="1"})`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (chi_clickhouse_table_parts{namespace="${namespace}",pod="${t_name}",active="0"})`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_MaxPartCountForPartition{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_MemoryCode{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `chi_clickhouse_metric_MemoryResident{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `chi_clickhouse_metric_MemoryShared{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_MemoryPrimaryKeyBytesAllocated{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_MemoryDictionaryBytesAllocated{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `irate(chi_clickhouse_event_MarkCacheHits{namespace="${namespace}",pod="${t_name}"}[1m]) / (irate(chi_clickhouse_event_MarkCacheHits{namespace="${namespace}",pod="${t_name}"}[1m]))`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `chi_clickhouse_metric_BackgroundPoolTask{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `chi_clickhouse_metric_BackgroundSchedulePoolTask{namespace="${namespace}",pod="${t_name}"}`
                    },
                    {
                        expr: `chi_clickhouse_metric_BackgroundMovePoolTask{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by (pod) (chi_clickhouse_table_mutations{namespace="${namespace}",pod="${t_name}"})`
                    },
                    {
                        expr: `sum by (pod) (chi_clickhouse_table_mutations_parts_to_do{namespace="${namespace}",pod="${t_name}"})`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_DiskReadElapsedMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_DiskWriteElapsedMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_NetworkReceiveElapsedMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_NetworkSendElapsedMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_RealTimeMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_UserTimeMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_SystemTimeMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_OSIOWaitMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_OSCPUWaitMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    },
                    {
                        expr: `sum by(pod) (irate(chi_clickhouse_event_OSCPUVirtualTimeMicroseconds{namespace="${namespace}",pod=~"${t_name}"}[1m]))`
                    }
                ]
            }
        ];
    },
    getMonitoringCfgs: function(e) {
        return [
            {
                title: t("CONNECTIONS"),
                legend: [
                    "TCP",
                    "HTTP"
                ],
                data: [
                    module26(e, "1.data.result[0]", {}),
                    module26(e, "2.data.result[0]", {})
                ]
            },
            {
                title: t("CLICKHOUSE_DATA_SIZE_ON_DISK"),
                unit: "MB",
                legend: [
                    t("CLICKHOUSE_DATA_SIZE_ON_DISK")
                ],
                data: [
                    module26(e, "3.data.result[0]", {})
                ]
            },
            {
                title: t("QUERIES"),
                legend: [
                    t("SELECT_QUERIES"),
                    t("ALL_QUERIES")
                ],
                data: [
                    module26(e, "4.data.result[0]", {}),
                    module26(e, "5.data.result[0]", {})
                ]
            },
            {
                title: t("INSERTED_BYTES"),
                unit: "KiB",
                legend: module26(e, "6.data.result", []).map(()=>t("INSERTED_BYTES")),
                data: module26(e, "6.data.result", [])
            },
            {
                title: t("INSERTED_ROWS"),
                legend: module26(e, "7.data.result", []).map(()=>t("INSERTED_ROWS")),
                data: module26(e, "7.data.result", [])
            },
            {
                title: t("MAXIMUM_REPLICATION_DEPLAY"),
                legend: [
                    t("RELATIVE_DELAY"),
                    t("ABSOLUTE_DELAY")
                ],
                unit: "s",
                data: [
                    module26(e, "8.data.result[0]", {}),
                    module26(e, "9.data.result[0]", {})
                ]
            },
            {
                title: t("TOTAL_PARTS_OF_MERGETREE_TABLES"),
                legend: [
                    t("TOTAL_PARTS_OF_MERGETREE_TABLES")
                ],
                data: [
                    module26(e, "10.data.result[0]", {})
                ]
            },
            {
                title: t("DELAYED_REJECTED_INSERTS"),
                legend: [
                    t("DELAYED_QUERIES"),
                    t("DELAYED_BLOCKS"),
                    t("REJECTED_BLOCKS"),
                    t("DELAYED_DISTRIBUTED_FILES")
                ],
                data: [
                    module26(e, "11.data.result[0]", {}),
                    module26(e, "12.data.result[0]", {}),
                    module26(e, "13.data.result[0]", {}),
                    module26(e, "14.data.result[0]", {})
                ]
            },
            {
                title: t("READ_BYTES"),
                legend: [
                    t("UNCOMPRESSED"),
                    t("COMPRESSED"),
                    t("FILE_DESCRIPTOR"),
                    t("CLICKHOUSE_OS")
                ],
                unitType: "memory",
                data: [
                    module26(e, "15.data.result[0]", {}),
                    module26(e, "16.data.result[0]", {}),
                    module26(e, "17.data.result[0]", {}),
                    module26(e, "18.data.result[0]", {})
                ]
            },
            {
                title: t("MEMORY_FOR_QUERIES"),
                legend: [
                    t("MEMORY_FOR_QUERIES")
                ],
                unitType: "memory",
                data: [
                    module26(e, "19.data.result[0]", {})
                ]
            },
            {
                title: t("REPLICATION_QUEUE_JOBS"),
                legend: [
                    t("DATA_LOSS"),
                    t("CHECK"),
                    t("CHECK_FAIL"),
                    t("FETCH"),
                    t("FETCH_FAIL"),
                    t("FETCH_MERGED"),
                    t("REPLICATED_MERGED"),
                    t("MAX_QUEUE_SIZE")
                ],
                unitType: "memory",
                data: [
                    module26(e, "20.data.result[0]", {}),
                    module26(e, "21.data.result[0]", {}),
                    module26(e, "22.data.result[0]", {}),
                    module26(e, "23.data.result[0]", {}),
                    module26(e, "24.data.result[0]", {}),
                    module26(e, "25.data.result[0]", {}),
                    module26(e, "26.data.result[0]", {}),
                    module26(e, "27.data.result[0]", {})
                ]
            },
            {
                title: t("MERGES"),
                legend: [
                    t("MERGES")
                ],
                data: [
                    module26(e, "28.data.result[0]", {})
                ]
            },
            {
                title: t("MERGED_ROWS"),
                legend: [
                    t("MERGED_ROWS")
                ],
                data: [
                    module26(e, "29.data.result[0]", {})
                ]
            },
            {
                title: t("MERGED_UNCOMPRESSED_BYTES"),
                legend: [
                    t("MERGED_UNCOMPRESSED_BYTES")
                ],
                unitType: "disk",
                data: [
                    module26(e, "30.data.result[0]", {})
                ]
            },
            {
                title: t("ACTIVE_PARTS"),
                legend: [
                    t("ACTIVE_PARTS")
                ],
                data: [
                    module26(e, "31.data.result[0]", {})
                ]
            },
            {
                title: t("DETACHED_PARTS"),
                legend: [
                    t("DETACHED_PARTS")
                ],
                data: [
                    module26(e, "32.data.result[0]", {})
                ]
            },
            {
                title: t("MAX_PART_COUNT_FOR_PARTITION"),
                legend: [
                    t("MAX_PART_COUNT_FOR_PARTITION")
                ],
                data: [
                    module26(e, "33.data.result[0]", {})
                ]
            },
            {
                title: t("CLICKHOUSE_SERVER_PROCESS_MEMORY"),
                legend: [
                    "CODE",
                    "RES",
                    "SHR"
                ],
                unitType: "memory",
                data: [
                    module26(e, "34.data.result[0]", {}),
                    module26(e, "35.data.result[0]", {}),
                    module26(e, "36.data.result[0]", {})
                ]
            },
            {
                title: t("PRIMARY_KEYS_MEMORY"),
                legend: [
                    t("PRIMARY_KEYS_MEMORY")
                ],
                unitType: "memory",
                data: [
                    module26(e, "37.data.result[0]", {})
                ]
            },
            {
                title: t("DICTIONARY_MEMORY"),
                legend: [
                    t("DICTIONARY_MEMORY")
                ],
                unitType: "memory",
                data: [
                    module26(e, "38.data.result[0]", {})
                ]
            },
            {
                title: t("BACKGROUND_TASKS"),
                legend: [
                    t("MERGE_MUTATE_FETCH"),
                    t("CLEAN_ALTER_REPLICA_REINIT"),
                    t("MOVES")
                ],
                unitType: "memory",
                data: [
                    module26(e, "40.data.result[0]", {}),
                    module26(e, "41.data.result[0]", {}),
                    module26(e, "42.data.result[0]", {})
                ]
            },
            {
                title: t("CPU_TIME_PER_SECOND"),
                legend: [
                    t("DISK_READ_SYSCALL"),
                    t("DISK_WRITE_SYSCALL"),
                    t("NETWORK_RECEIVE"),
                    t("NETWORK_SEND"),
                    t("REAL_TIME"),
                    t("USER_TIME"),
                    t("SYSTEM_TIME"),
                    t("OS_IO_WAIT"),
                    t("OS_CPU_WAIT"),
                    t("OS_CPU_VIRTUAL")
                ],
                unit: "µs",
                data: [
                    module26(e, "45.data.result[0]", {}),
                    module26(e, "46.data.result[0]", {}),
                    module26(e, "47.data.result[0]", {}),
                    module26(e, "48.data.result[0]", {}),
                    module26(e, "49.data.result[0]", {}),
                    module26(e, "50.data.result[0]", {}),
                    module26(e, "51.data.result[0]", {}),
                    module26(e, "52.data.result[0]", {}),
                    module26(e, "53.data.result[0]", {}),
                    module26(e, "54.data.result[0]", {})
                ]
            }
        ];
    }
};
export default c;
