import "./module-15.js";
import "./module-18.js";
import "./module-27.js";
import "./module-4.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-319.js";
import module26 from "./module-26.js";
export const getCKParams = function({ replicasCount, tcpPort, httpPort, max_server_memory_usage, max_memory_usage }) {
    return [
        {
            key: "replicasCount",
            name: t("REPLICA_COUNT"),
            value: replicasCount,
            description: t("DBPARAM_REPLICACOUNT_DESC"),
            range: {
                min: 1,
                max: 3
            },
            disable: true
        },
        {
            key: "tcpPort",
            name: t("TCP_PORT"),
            value: module26(tcpPort, "port"),
            description: t("DBPARAM_TCPPORT_DESC"),
            range: {
                min: 1,
                max: 65535
            },
            disable: true
        },
        {
            key: "httpPort",
            name: t("HTTP_PORT"),
            value: module26(httpPort, "port"),
            description: t("DBPARAM_HTTPPORT_DESC"),
            range: {
                min: 1,
                max: 65535
            },
            disable: true
        },
        {
            key: "max_server_memory_usage",
            name: "max_server_memory_usage",
            value: Number(max_server_memory_usage),
            description: t("DBPARAM_MAX_SERVER_MEMORY_USAGE"),
            restart: t("YES"),
            range: {
                min: 1000000000,
                max: 128000000000
            }
        },
        {
            key: "max_memory_usage",
            name: "max_memory_usage",
            value: Number(max_memory_usage),
            description: t("DBPARAM_MAX_MEMORY_USAGE"),
            restart: t("NO"),
            range: {
                min: 20000000,
                max: 128000000000
            }
        }
    ];
};
export const getPGParams = function(e) {
    return [
        {
            key: "database_version",
            name: t("DBPARAM_DATABASE_VERSION"),
            value: module26(e, "pgVersion", "12"),
            description: t("DBPARAM_DATABASE_VERSION_DESC"),
            restart: "-",
            disable: true
        },
        {
            key: "port",
            name: "port",
            value: module26(e, "port", 5432),
            description: t("DBPARAM_PG_PORT_DESC"),
            range: {
                min: 1,
                max: 65534
            },
            restart: t("YES")
        },
        {
            key: "fsync",
            name: "fsync",
            value: module26(e, "fsync", true).toString(),
            description: t("DBPARAM_FSYNC_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "full_page_writes",
            name: "full_page_writes",
            value: module26(e, "full_page_writes", true).toString(),
            description: t("DBPARAM_FULL_PAGE_WRITES_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                }
            ]
        },
        {
            key: "wal_compression",
            name: "wal_compression",
            value: module26(e, "wal_compression", false).toString(),
            description: t("DBPARAM_WAL_COMPRESSION_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "jit",
            name: "jit",
            value: module26(e, "jit", false).toString(),
            description: t("DBPARAM_JIT_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "autovacuum",
            name: "autovacuum",
            value: module26(e, "autovacuum", true).toString(),
            description: t("DBPARAM_AUTOVACUUM_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "synchronous_commit",
            name: "synchronous_commit",
            value: module26(e, "synchronous_commit", "on"),
            description: t("DBPARAM_SYNCHRONOUS_COMMIT_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "off",
                    value: "off"
                },
                {
                    label: "local",
                    value: "local"
                },
                {
                    label: "on",
                    value: "on"
                },
                {
                    label: "remote_write",
                    value: "remote_write"
                },
                {
                    label: "remote_apply",
                    value: "remote_apply"
                }
            ]
        },
        {
            key: "wal_level",
            name: "wal_level",
            value: module26(e, "wal_level", "replica"),
            description: t("DBPARAM_LOG_WAL_LEVEL_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "replica",
                    value: "replica"
                },
                {
                    label: "logical",
                    value: "logical"
                }
            ]
        },
        {
            key: "temp_buffers",
            name: "temp_buffers",
            value: parseInt(module26(e, "temp_buffers", "1MB"), 10),
            description: t("DBPARAM_TEMP_BUFFERS_DESC"),
            restart: t("NO"),
            range: {
                min: 1,
                max: 32768
            }
        },
        {
            key: "work_mem",
            name: "work_mem",
            value: parseInt(module26(e, "work_mem", "4MB"), 10),
            description: t("DBPARAM_WORK_MEM_DESC"),
            range: {
                min: 1,
                max: 1024
            },
            restart: t("NO")
        },
        {
            key: "maintenance_work_mem",
            name: "maintenance_work_mem",
            value: parseInt(module26(e, "maintenance_work_mem", "64MB"), 10),
            description: t("DBPARAM_MAINTENANCE_WORK_MEM_DESC"),
            range: {
                min: 64,
                max: 1024
            },
            restart: t("NO")
        },
        {
            key: "shared_buffers",
            name: "shared_buffers",
            value: parseInt(module26(e, "shared_buffers", "128MB"), 10),
            description: t("DBPARAM_SHARED_BUFFERS_DESC"),
            range: {
                min: 128,
                max: 10240
            },
            restart: t("YES")
        },
        {
            key: "max_connections",
            name: "max_connections",
            value: module26(e, "max_connections", 100),
            description: t("DBPARAM_MAX_CONNECTIONS_DESC"),
            range: {
                min: 100,
                max: 262143
            },
            restart: t("YES")
        },
        {
            key: "max_worker_processes",
            name: "max_worker_processes",
            value: module26(e, "max_worker_processes", 20),
            description: t("DBPARAM_WORKER_PROCESSES_DESC"),
            range: {
                min: 10,
                max: 65536
            },
            restart: t("YES")
        },
        {
            key: "wal_writer_delay",
            name: "wal_writer_delay",
            value: module26(e, "wal_writer_delay", 10),
            description: t("DBPARAM_WAL_WRITER_DELAY_DESC"),
            range: {
                min: 1,
                max: 10000
            },
            restart: t("NO")
        },
        {
            key: "wal_writer_flush_after",
            name: "wal_writer_flush_after",
            value: parseInt(module26(e, "wal_writer_flush_after", "1MB"), 10),
            description: t("DBPARAM_WAL_WRITER_FLUSH_AFTER_DESC"),
            restart: t("NO"),
            range: {
                min: 1,
                max: 1024
            }
        },
        {
            key: "commit_delay",
            name: "commit_delay",
            value: module26(e, "commit_delay", 0),
            description: t("DBPARAM_COMMIT_DELAY_DESC"),
            range: {
                min: 0,
                max: 100000
            },
            restart: t("NO")
        },
        {
            key: "commit_siblings",
            name: "commit_siblings",
            value: module26(e, "commit_siblings", 5),
            description: t("DBPARAM_COMMIT_SIBLINGS_DESC"),
            range: {
                min: 0,
                max: 1000
            },
            restart: t("NO")
        },
        {
            key: "bgwriter_delay",
            name: "bgwriter_delay",
            value: module26(e, "bgwriter_delay", 10),
            description: t("DBPARAM_BGWRITER_DELAY_DESC"),
            range: {
                min: 10,
                max: 10000
            },
            restart: t("NO")
        },
        {
            key: "bgwriter_lru_maxpages",
            name: "bgwriter_lru_maxpages",
            value: module26(e, "bgwriter_lru_maxpages", 1000),
            description: t("DBPARAM_BGWRITER_LRU_MAXPAGES_DESC"),
            range: {
                min: 0,
                max: 1073741823
            },
            restart: t("NO")
        },
        {
            key: "bgwriter_flush_after",
            name: "bgwriter_flush_after",
            value: parseInt(module26(e, "bgwriter_flush_after", "512KB"), 10),
            description: t("DBPARAM_BGWRITER_FLUSH_AFTER_DESC"),
            restart: t("NO"),
            range: {
                min: 0,
                max: 2048
            }
        },
        {
            key: "statement_timeout",
            name: "statement_timeout",
            value: module26(e, "statement_timeout", 0),
            description: t("DBPARAM_STATEMENT_TIMEOUT_DESC"),
            range: {
                min: 0,
                max: 2147483647
            },
            restart: t("NO")
        },
        {
            key: "idle_in_transaction_session_timeout",
            name: "idle_in_transaction_session_timeout",
            value: module26(e, "idle_in_transaction_session_timeout", 86400000),
            description: t("DBPARAM_IDLE_IN_TRANSACTION_SESSION_TIMEOUT_DESC"),
            range: {
                min: 0,
                max: 2147483647
            },
            restart: t("NO")
        },
        {
            key: "log_min_duration_statement",
            name: "log_min_duration_statement",
            value: module26(e, "log_min_duration_statement", 10000),
            description: t("DBPARAM_LOG_MIN_DURATION_STATEMENT_DESC"),
            range: {
                min: -1,
                max: 2147483647
            },
            restart: t("NO")
        },
        {
            key: "checkpoint_timeout",
            name: "checkpoint_timeout",
            value: module26(e, "checkpoint_timeout", 300),
            description: t("DBPARAM_CHECKPOINT_TIMEOUT_DESC"),
            range: {
                min: 30,
                max: 86400
            },
            restart: t("NO")
        },
        {
            key: "autovacuum_vacuum_cost_delay",
            name: "autovacuum_vacuum_cost_delay",
            value: module26(e, "autovacuum_vacuum_cost_delay", 0),
            description: t("DBPARAM_AUTOVACUUM_VACUUM_COST_DELAY_DESC"),
            range: {
                min: -1,
                max: 100
            },
            restart: t("NO")
        },
        {
            key: "autovacuum_vacuum_cost_limit",
            name: "autovacuum_vacuum_cost_limit",
            value: module26(e, "autovacuum_vacuum_cost_limit", 10000),
            description: t("DBPARAM_AUTOVACUUM_VACUUM_COST_LIMIT_DESC"),
            restart: t("NO"),
            range: {
                min: -1,
                max: 10000
            }
        },
        {
            key: "autovacuum_vacuum_scale_factor",
            name: "autovacuum_vacuum_scale_factor",
            value: module26(e, "autovacuum_vacuum_scale_factor", 0.02),
            description: t("DBPARAM_AUTOVACUUM_VACUUM_SCALE_FACTOR_DESC"),
            restart: t("NO"),
            integer: false,
            range: {
                min: 0.01,
                max: 100
            }
        },
        {
            key: "autovacuum_analyze_scale_factor",
            name: "autovacuum_analyze_scale_factor",
            value: module26(e, "autovacuum_analyze_scale_factor", 0.05),
            description: t("DBPARAM_AUTOVACUUM_ANALYZE_SCALE_FACTOR_DESC"),
            restart: t("NO"),
            integer: false,
            range: {
                min: 0.01,
                max: 100
            }
        },
        {
            key: "vacuum_defer_cleanup_age",
            name: "vacuum_defer_cleanup_age",
            value: module26(e, "vacuum_defer_cleanup_age", 10000),
            description: t("DBPARAM_VACUUM_DEFER_CLEANUP_AGE_DESC"),
            restart: t("NO"),
            range: {
                min: 0,
                max: 1000000
            }
        },
        {
            key: "seq_page_cost",
            name: "seq_page_cost",
            value: module26(e, "seq_page_cost", 1),
            description: t("DBPARAM_SEQ_PAGE_COST_DESC"),
            restart: t("NO"),
            integer: false,
            range: {
                min: 0,
                max: 100000000
            }
        },
        {
            key: "random_page_cost",
            name: "random_page_cost",
            value: module26(e, "random_page_cost", 1.1),
            description: t("DBPARAM_RANDOM_PAGE_COST_DESC"),
            restart: t("NO"),
            integer: false,
            range: {
                min: 0,
                max: 100000000
            }
        },
        {
            key: "cpu_tuple_cost",
            name: "cpu_tuple_cost",
            value: module26(e, "cpu_tuple_cost", 0.01),
            description: t("DBPARAM_CPU_TUPLE_COST_DESC"),
            restart: t("NO"),
            integer: false,
            range: {
                min: 0,
                max: 100000000
            }
        },
        {
            key: "cpu_index_tuple_cost",
            name: "cpu_index_tuple_cost",
            value: module26(e, "cpu_index_tuple_cost", 0.005),
            description: t("DBPARAM_CPU_INDEX_TUPLE_COST_DESC"),
            restart: t("NO"),
            integer: false,
            range: {
                min: 0,
                max: 100000000
            }
        },
        {
            key: "log_min_messages",
            name: "log_min_messages",
            value: module26(e, "log_min_messages", "WARNING"),
            description: t("DBPARAM_LOG_MIN_MESSAGES_DESC"),
            restart: t("NO"),
            type: "select",
            options: c.map((e)=>({
                    label: e,
                    value: e
                }))
        },
        {
            key: "log_statement",
            name: "log_statement",
            value: module26(e, "log_statement", "none"),
            description: t("DBPARAM_LOG_STATEMENT_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "none",
                    value: "none"
                },
                {
                    label: "ddl",
                    value: "ddl"
                },
                {
                    label: "mod",
                    value: "mod"
                },
                {
                    label: "all",
                    value: "all"
                }
            ]
        },
        {
            key: "max_wal_senders",
            name: "max_wal_senders",
            value: module26(e, "max_wal_senders", 15),
            description: t("DBPARAM_MAX_WAL_SENDERS_DESC"),
            restart: t("YES"),
            range: {
                min: 10,
                max: 262143
            }
        },
        {
            key: "max_replication_slots",
            name: "max_replication_slots",
            value: module26(e, "max_replication_slots", 15),
            description: t("DBPARAM_MAX_REPLICATION_SLOTS_DESC"),
            restart: t("YES"),
            range: {
                min: 10,
                max: 262143
            }
        }
    ];
};
export const getMySQLParams = function(e) {
    return [
        {
            key: "audit_log_policy",
            name: "audit_log_policy",
            value: e.audit_log_policy || "NONE",
            description: t("DBPARAM_AUDIT_LOG_POLICY_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "ALL",
                    value: "ALL"
                },
                {
                    label: "LOGINS",
                    value: "LOGINS"
                },
                {
                    label: "QEURIES",
                    value: "QEURIES"
                },
                {
                    label: "NONE",
                    value: "NONE"
                }
            ]
        },
        {
            key: "audit_log_format",
            name: "audit_log_format",
            value: e.audit_log_format || "OLD",
            description: t("DBPARAM_AUDIT_LOG_FORMAT_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "OLD",
                    value: "OLD"
                },
                {
                    label: "NEW",
                    value: "NEW"
                },
                {
                    label: "JSON",
                    value: "JSON"
                }
            ]
        },
        {
            key: "audit_log_rotate_on_size",
            name: "audit_log_rotate_on_size",
            value: parseInt(e.audit_log_rotate_on_size || 104857600, 10),
            description: t("DBPARAM_AUDIT_LOG_ROTATE_ON_SIZE_DESC"),
            restart: t("YES"),
            range: {
                min: 20971520,
                max: 2147483648
            }
        },
        {
            key: "audit_log_rotations",
            name: "audit_log_rotations",
            value: e.audit_log_rotations || 6,
            description: t("DBPARAM_AUDIT_LOG_ROTATIONS_DESC"),
            restart: t("YES"),
            range: {
                min: 6,
                max: 48
            }
        },
        {
            key: "default_storage_engine",
            name: "default_storage_engine",
            value: e.default_storage_engine || "InnoDB",
            description: t("DBPARAM_DEFAULT_STORAGE_ENGINE_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "InnoDB",
                    value: "InnoDB"
                },
                {
                    label: "TokuDB",
                    value: "TokuDB"
                }
            ]
        },
        {
            key: "innodb_buffer_pool_size",
            name: "innodb_buffer_pool_size",
            value: parseInt(module26(e, "innodb_buffer_pool_size", "-1"), 10),
            description: t("DBPARAM_INNODB_BUFFER_POOL_SIZE_DESC"),
            restart: t("YES"),
            range: {
                min: -1
            }
        },
        {
            key: "character_set_server",
            name: "character_set_server",
            value: module26(e, "character_set_server", "utf8mb4"),
            description: t("DBPARAM_CHARACTER_SET_SERVER_DESC"),
            restart: t("YES"),
            type: "text"
        },
        {
            key: "expire_logs_days",
            name: "expire_logs_days",
            value: parseInt(module26(e, "expire_logs_days", "7"), 10),
            description: t("DBPARAM_EXPIRE_LOGS_DAYS_DESC"),
            restart: t("YES"),
            range: {
                min: 0,
                max: 14
            }
        },
        {
            key: "long_query_time",
            name: "long_query_time",
            value: parseInt(module26(e, "long_query_time", "3"), 10),
            description: t("DBPARAM_LONG_QUERY_TIME_DESC"),
            restart: t("YES"),
            range: {
                min: 0,
                max: 300
            }
        },
        {
            key: "max_connections",
            name: "max_connections",
            value: parseInt(module26(e, "max_connections", "1024"), 10),
            description: t("DBPARAM_MAX_CONNECTIONS_DESC"),
            restart: t("YES"),
            range: {
                min: 1024,
                max: 16384
            }
        },
        {
            key: "max_connect_errors",
            name: "max_connect_errors",
            value: parseInt(module26(e, "max_connect_errors", "655360"), 10),
            description: t("DBPARAM_MAX_CONNECT_ERRORS_DESC"),
            restart: t("YES"),
            range: {
                min: 1,
                max: 4294967295
            }
        },
        {
            key: "wait_timeout",
            name: "wait_timeout",
            value: parseInt(module26(e, "wait_timeout", "3600"), 10),
            description: t("DBPARAM_WAIT_TIMEOUT_DESC"),
            restart: t("YES"),
            range: {
                min: 1,
                max: 2147483
            }
        },
        {
            key: "max_allowed_packet",
            name: "max_allowed_packet",
            value: parseInt(module26(e, "max_allowed_packet", "1073741824"), 10),
            description: t("DBPARAM_MAX_ALLOWED_PACKET_DESC"),
            restart: t("YES"),
            range: {
                min: 1024,
                max: 1073741824
            }
        },
        {
            key: "slave_parallel_workers",
            name: "slave_parallel_workers",
            value: parseInt(module26(e, "slave_parallel_workers", "8"), 10),
            description: t("DBPARAM_SLAVE_PARALLEL_WORKERS_DESC"),
            restart: t("YES"),
            range: {
                min: 0,
                max: 1024
            }
        },
        {
            key: "skip_name_resolve",
            name: "skip_name_resolve",
            value: module26(e, "skip_name_resolve", "0"),
            description: t("DBPARAM_SKIP_NAME_RESOLVE_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        },
        {
            key: "autocommit",
            name: "autocommit",
            value: module26(e, "autocommit", "1"),
            description: t("DBPARAM_AUTOCOMMIT_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        },
        {
            key: "transaction_isolation",
            name: "transaction_isolation",
            value: module26(e, "transaction_isolation", "READ-COMMITTED"),
            description: t("DBPARAM_TRANSACTION_ISOLATION_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "REPEATABLE-READ",
                    value: "REPEATABLE-READ"
                },
                {
                    label: "READ-UNCOMMITTED",
                    value: "READ-UNCOMMITTED"
                },
                {
                    label: "READ-COMMITTED",
                    value: "READ-COMMITTED"
                },
                {
                    label: "SERIALIZABLE",
                    value: "SERIALIZABLE"
                }
            ]
        },
        {
            key: "innodb_flush_method",
            name: "innodb_flush_method",
            value: module26(e, "innodb_flush_method", "O_DIRECT"),
            description: t("DBPARAM_INNODB_FLUSH_METHOD_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "O_DIRECT",
                    value: "O_DIRECT"
                },
                {
                    label: "fsync",
                    value: "fsync"
                }
            ]
        },
        {
            key: "innodb_use_native_aio",
            name: "innodb_use_native_aio",
            value: module26(e, "innodb_use_native_aio", "1"),
            description: t("DBPARAM_INNODB_USE_NATIVE_AIO_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        }
    ];
};
export const getMongoDBParams = function(e) {
    return [
        {
            key: "port",
            name: "port",
            value: module26(e, "port", 27017),
            description: t("DBPARAM_MONGODB_PORT_DESC"),
            restart: t("YES")
        },
        {
            key: "oplogSizeMB",
            name: "oplogSizeMB",
            value: module26(e, "oplogSizeMB", 10240),
            description: t("DBPARAM_OPLOGSIZEMB_DESC"),
            range: {
                min: 1024,
                max: 51200
            },
            restart: t("NO")
        },
        {
            key: "maxIncomingConnections",
            name: "maxIncomingConnections",
            value: module26(e, "maxIncomingConnections", 10000),
            description: t("DBPARAM_MAXINCOMINGCONNECTIONS_DESC"),
            range: {
                min: 3000,
                max: 20000
            },
            restart: t("YES")
        },
        {
            key: "cursorTimeoutMillis",
            name: "cursorTimeoutMillis",
            value: module26(e, "cursorTimeoutMillis", 600000),
            description: t("DBPARAM_CURSORTIMEOUTMILLIS_DESC"),
            restart: t("YES")
        },
        {
            key: "profilingMode",
            name: "profilingMode",
            value: module26(e, "profilingMode", "off"),
            description: t("DBPARAM_PROFILINGMODE_MODE"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "off",
                    value: "off"
                },
                {
                    label: "slowOp",
                    value: "slowOp"
                },
                {
                    label: "all",
                    value: "all"
                }
            ]
        },
        {
            key: "slowOpThresholdMs",
            name: "slowOpThresholdMs",
            value: module26(e, "slowOpThresholdMs", 100),
            description: t("DBPARAM_SLOWOPTHRESHOLDMS_DESC"),
            restart: t("YES")
        },
        {
            key: "enableMajorityReadConcern",
            name: "enableMajorityReadConcern",
            value: module26(e, "enableMajorityReadConcern", "true").toString(),
            description: t("DBPARAM_ENABLEMAJORITYREADCONCERN_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "commandVerbosity",
            name: "commandVerbosity",
            value: module26(e, "commandVerbosity", "0"),
            description: t("DBPARAM_COMMANDVERBOSITY_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        },
        {
            key: "indexVerbosity",
            name: "indexVerbosity",
            value: module26(e, "indexVerbosity", "0"),
            description: t("DBPARAM_INDEXVERBOSITY_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        },
        {
            key: "queryVerbosity",
            name: "queryVerbosity",
            value: module26(e, "queryVerbosity", "0"),
            description: t("DBPARAM_QUERYVERBOSITY_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        },
        {
            key: "networkVerbosity",
            name: "networkVerbosity",
            value: module26(e, "networkVerbosity", "0"),
            description: t("DBPARAM_NETWORKVERBOSITY_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        },
        {
            key: "writeVerbosity",
            name: "writeVerbosity",
            value: module26(e, "writeVerbosity", "0"),
            description: t("DBPARAM_WRITEVERBOSITY_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "0",
                    value: "0"
                },
                {
                    label: "1",
                    value: "1"
                }
            ]
        }
    ];
};
export const getRedisParams = function(e) {
    return [
        {
            key: "endpointType",
            name: t("ENDPOINT_TYPE"),
            value: module26(e, "endpointType", "false").toString(),
            description: t("ENDPOINT_TYPE_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: t("ENABLED"),
                    value: "true"
                },
                {
                    label: t("DISABLED"),
                    value: "false"
                }
            ]
        },
        {
            key: "maxmemory",
            name: "maxmemory",
            value: parseInt(module26(e, "maxmemory", 0), 10),
            description: t("DBPARAM_MAXMEMORY_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "activerehashing",
            name: "activerehashing",
            value: module26(e, "activerehashing", "yes"),
            description: t("DBPARAM_ACTIVEREHASHING_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "yes",
                    value: "yes"
                },
                {
                    label: "no",
                    value: "no"
                }
            ]
        },
        {
            key: "appendonly",
            name: "appendonly",
            value: module26(e, "appendonly", "yes"),
            description: t("DBPARAM_APPENDONLY_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "yes",
                    value: "yes"
                },
                {
                    label: "no",
                    value: "no"
                }
            ]
        },
        {
            key: "appendfsync",
            name: "appendfsync",
            value: module26(e, "appendfsync", "everysec"),
            description: t("DBPARAM_APPENDFSYNC_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "no",
                    value: "no"
                },
                {
                    label: "everysec",
                    value: "everysec"
                },
                {
                    label: "always",
                    value: "always"
                }
            ]
        },
        {
            key: "cluster-node-timeout",
            name: "cluster-node-timeout",
            value: parseInt(module26(e, "cluster-node-timeout", 15000), 10),
            description: t("DBPARAM_CLUSTER_NODE_TIMEOUT_DESC"),
            range: {
                min: 1000,
                max: 6000000
            },
            restart: t("NO")
        },
        {
            key: "latency-monitor-threshold",
            name: "latency-monitor-threshold",
            value: parseInt(module26(e, "latency-monitor-threshold", 0), 10),
            description: t("DBPARAM_LATENCY_MONITOR_THRESHOLD_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "maxclients",
            name: "maxclients",
            value: parseInt(module26(e, "maxclients", 102400), 10),
            description: t("DBPARAM_MAXCLIENTS_DESC"),
            range: {
                min: 10
            },
            restart: t("NO")
        },
        {
            key: "maxmemory-policy",
            name: "maxmemory-policy",
            value: module26(e, "maxmemory-policy", "volatile-lru"),
            description: t("DBPARAM_MAXMEMORY_POLICY_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "volatile-lru",
                    value: "volatile-lru"
                },
                {
                    label: "allkeys-lru",
                    value: "allkeys-lru"
                },
                {
                    label: "volatile-random",
                    value: "volatile-random"
                },
                {
                    label: "allkeys-random",
                    value: "allkeys-random"
                },
                {
                    label: "volatile-ttl",
                    value: "volatile-ttl"
                },
                {
                    label: "noevtication",
                    value: "noevtication"
                }
            ]
        },
        {
            key: "maxmemory-samples",
            name: "maxmemory-samples",
            value: parseInt(module26(e, "maxmemory-samples", 3), 10),
            description: t("DBPARAM_MAXMEMORY_SAMPLES_DESC"),
            range: {
                min: 1,
                max: 100
            },
            restart: t("NO")
        },
        {
            key: "min-slaves-max-lag",
            name: "min-slaves-max-lag",
            value: parseInt(module26(e, "min-slaves-max-lag", 10), 10),
            description: t("DBPARAM_MIN_SLAVES_MAX_LAG_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "min-slaves-to-write",
            name: "min-slaves-to-write",
            value: parseInt(module26(e, "min-slaves-to-write", 0), 10),
            description: t("DBPARAM_MIN_SLAVES_TO_WRITE_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "no-appendfsync-on-rewrite",
            name: "no-appendfsync-on-rewrite",
            value: module26(e, "no-appendfsync-on-rewrite", "no"),
            description: t("DBPARAM_NO_APPENDFSYNC_ON_REWRITE_DESC"),
            restart: t("NO"),
            type: "select",
            options: [
                {
                    label: "yes",
                    value: "yes"
                },
                {
                    label: "no",
                    value: "no"
                }
            ]
        },
        {
            key: "notify-keyspace-events",
            name: "notify-keyspace-events",
            value: module26(e, "notify-keyspace-events", ""),
            description: t("DBPARAM_NOTIFY_KEYSPACE_EVENTS_DESC"),
            restart: t("NO")
        },
        {
            key: "repl-backlog-size",
            name: "repl-backlog-size",
            value: parseInt(module26(e, "repl-backlog-size", 1), 10),
            description: t("DBPARAM_REPL_BACKLOG_SIZE_DESC"),
            range: {
                min: 1,
                max: 1024
            },
            restart: t("NO")
        },
        {
            key: "repl-backlog-ttl",
            name: "repl-backlog-ttl",
            value: parseInt(module26(e, "repl-backlog-ttl", 3600), 10),
            description: t("DBPARAM_REPL_BACKLOG_TTL_DESC"),
            range: {
                min: 1,
                max: 864000
            },
            restart: t("NO")
        },
        {
            key: "repl-timeout",
            name: "repl-timeout",
            value: parseInt(module26(e, "repl-timeout", 60), 10),
            description: t("DBPARAM_REPL_TIMEOUT_DESC"),
            range: {
                min: 1,
                max: 86400
            },
            restart: t("NO")
        },
        {
            key: "set-max-intset-entries",
            name: "set-max-intset-entries",
            value: parseInt(module26(e, "set-max-intset-entries", 512), 10),
            description: t("DBPARAM_SET_MAX_INTSET_ENTRIES_DESC"),
            restart: t("NO")
        },
        {
            key: "slowlog-log-slower-than",
            name: "slowlog-log-slower-than",
            value: parseInt(module26(e, "slowlog-log-slower-than", -1), 10),
            description: t("DBPARAM_SLOWLOG_LOG_SLOWER_THAN_DESC"),
            range: {
                min: -1,
                max: 60000000
            },
            restart: t("NO")
        },
        {
            key: "slowlog-max-len",
            name: "slowlog-max-len",
            value: parseInt(module26(e, "slowlog-max-len", 128), 10),
            description: t("DBPARAM_SLOWLOG_MAX_LEN_DESC"),
            range: {
                min: 1
            },
            restart: t("NO")
        },
        {
            key: "hash-max-ziplist-entries",
            name: "hash-max-ziplist-entries",
            value: parseInt(module26(e, "hash-max-ziplist-entries", 512), 10),
            description: t("DBPARAM_HASH_MAX_ZIPLIST_ENTRIES_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "hash-max-ziplist-value",
            name: "hash-max-ziplist-value",
            value: parseInt(module26(e, "hash-max-ziplist-value", 64), 10),
            description: t("DBPARAM_HASH_MAX_ZIPLIST_VALUE_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "list-max-ziplist-entries",
            name: "list-max-ziplist-entries",
            value: parseInt(module26(e, "list-max-ziplist-entries", 512), 10),
            description: t("DBPARAM_LIST_MAX_ZIPLIST_ENTRIES_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "list-max-ziplist-value",
            name: "list-max-ziplist-value",
            value: parseInt(module26(e, "list-max-ziplist-value", 64), 10),
            description: t("DBPARAM_LIST_MAX_ZIPLIST_VALUE_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "zset-max-ziplist-entries",
            name: "zset-max-ziplist-entries",
            value: parseInt(module26(e, "zset-max-ziplist-entries", 128), 10),
            description: t("DBPARAM_ZSET_MAX_ZIPLIST_ENTRIES_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "zset-max-ziplist-value",
            name: "zset-max-ziplist-value",
            value: parseInt(module26(e, "zset-max-ziplist-value", 64), 10),
            description: t("DBPARAM_ZSET_MAX_ZIPLIST_VALUE_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "lua-time-limit",
            name: "lua-time-limit",
            value: parseInt(module26(e, "lua-time-limit", 5000), 10),
            description: t("DBPARAM_LUA_TIME_LIMIT_DESC"),
            range: {
                min: 0
            },
            restart: t("NO")
        },
        {
            key: "io-threads-do-reads",
            name: "io-threads-do-reads",
            value: module26(e, "io-threads-do-reads", "no"),
            description: t("DBPARAM_IO_THREADS_DO_READS_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "yes",
                    value: "yes"
                },
                {
                    label: "no",
                    value: "no"
                }
            ]
        },
        {
            key: "io-threads",
            name: "io-threads",
            value: parseInt(module26(e, "io-threads", 1), 10),
            description: t("DBPARAM_IO_THREADS_DESC"),
            range: {
                min: 1,
                max: 100
            },
            restart: t("YES")
        },
        {
            key: "logfile",
            name: "logfile",
            value: module26(e, "logfile", "logfile"),
            description: t("DBPARAM_LOGFILE_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "logfile",
                    value: "logfile"
                },
                {
                    label: "stdout",
                    value: "stdout"
                }
            ]
        }
    ];
};
export const getECKParams = function(e) {
    return [
        {
            key: "thread_pool.write.queue_size",
            name: "thread_pool.write.queue_size",
            value: module26(e, '["thread_pool.write.queue_size"]', 10000),
            description: t("DBPARAM_THREAD_POOL_WRITE_QUEUE_SIZE_DESC"),
            range: {
                min: 1000,
                max: 20000
            },
            restart: t("YES")
        },
        {
            key: "thread_pool.search.queue_size",
            name: "thread_pool.search.queue_size",
            value: module26(e, '["thread_pool.search.queue_size"]', 1000),
            description: t("DBPARAM_THREAD_POOL_SEARCH_QUEUE_SIZE_DESC"),
            range: {
                min: 1000,
                max: 20000
            },
            restart: t("YES")
        },
        {
            key: "action.destructive_requires_name",
            name: "action.destructive_requires_name",
            value: module26(e, '["action.destructive_requires_name"]', "true").toString(),
            description: t("DBPARAM_ACTION_DESTRUCTIVE_REQUIRES_NAME_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "http.cors.enabled",
            name: "http.cors.enabled",
            value: module26(e, '["http.cors.enabled"]', "false").toString(),
            description: t("DBPARAM_HTTP_CORS_ENABLED_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "http.cors.allow-origin",
            name: "http.cors.allow-origin",
            value: module26(e, '["http.cors.allow-origin"]', ""),
            description: t("DBPARAM_HTTP_CORS_ALLOW_ORIGIN_DESC"),
            restart: t("YES")
        },
        {
            key: "indices.fielddata.cache.size",
            name: "indices.fielddata.cache.size",
            value: module26(e, '["indices.fielddata.cache.size"]', "-1b"),
            description: t("DBPARAM_INDICES_FIELDDATA_CACHE_SIZE"),
            restart: t("YES")
        },
        {
            key: "indices.memory.index_buffer_size",
            name: "indices.memory.index_buffer_size",
            value: module26(e, '["indices.memory.index_buffer_size"]', "10%"),
            description: t("DBPARAM_INDICES_MEMORY_INDEX_BUFFER_SIZE_DESC"),
            restart: t("YES")
        },
        {
            key: "indices.queries.cache.size",
            name: "indices.queries.cache.size",
            value: module26(e, '["indices.queries.cache.size"]', "10%"),
            description: t("DBPARAM_INDICES_QUERIES_CACHE_SIZE_DESC"),
            restart: t("YES")
        },
        {
            key: "indices.requests.cache.size",
            name: "indices.requests.cache.size",
            value: module26(e, '["indices.requests.cache.size"]', "1%"),
            description: t("DBPARAM_INDICES_REQUESTS_CACHE_SIZE_DESC"),
            restart: t("YES")
        },
        {
            key: "reindex.remote.whitelist",
            name: "reindex.remote.whitelist",
            value: module26(e, '["reindex.remote.whitelist"]', ""),
            description: t("DBPARAM_REINDEX_REMOTE_WHITELIST_DESC"),
            restart: t("YES")
        },
        {
            key: "cluster.routing.allocation.awareness.attributes",
            name: "cluster.routing.allocation.awareness.attributes",
            value: module26(e, '["cluster.routing.allocation.awareness.attributes"]', ""),
            description: t("DBPARAM_CLUSTER_ROUTING_ALLOCATION_AWARENESS_ATTRIBUTES_DESC"),
            restart: t("YES")
        }
    ];
};
export const getKafkaParams = function(e, a) {
    if (a === "kafka") {
        return [
            {
                key: "num.partitions",
                name: "num.partitions",
                value: module26(e, "num.partitions", 3),
                description: t("DBPARAM_KAFKA_PARTITIONS_DESC"),
                range: {
                    min: 1,
                    max: 1000
                },
                restart: t("YES")
            },
            {
                key: "tls",
                name: "TLS",
                value: module26(e, "tls", "true").toString(),
                description: t("DBPARAM_KAFKA_TLS_DESC"),
                restart: t("YES"),
                type: "select",
                options: [
                    {
                        label: "true",
                        value: "true"
                    },
                    {
                        label: "false",
                        value: "false"
                    }
                ]
            },
            {
                key: "authentication",
                name: t("DBPARAM_AUTHENTICATION_TYPE"),
                value: module26(e, "authentication", "tls").toString(),
                description: t("DBPARAM_KAFKA_AUTHENTICATION_TYPE_DESC"),
                restart: t("YES"),
                type: "select",
                options: [
                    {
                        label: t("NO_AUTH"),
                        value: "no"
                    },
                    {
                        label: "TLS",
                        value: "tls"
                    },
                    {
                        label: "SCRAM-SHA-512",
                        value: "scram-sha-512"
                    }
                ]
            },
            {
                key: "nodePort",
                name: t("DBPARAM_NODE_PORT"),
                value: module26(e, "nodePort", "false").toString(),
                description: t("DBPARAM_NODE_PORT_DESC"),
                restart: t("YES"),
                type: "select",
                options: [
                    {
                        label: "true",
                        value: "true"
                    },
                    {
                        label: "false",
                        value: "false"
                    }
                ]
            },
            {
                key: "log.retention.bytes",
                name: "log.retention.bytes",
                value: module26(e, '["log.retention.bytes"]', -1),
                description: t("DBPARAM_LOG_RETENTION_BYTES_DESC"),
                range: {
                    min: -1,
                    max: 2147483647
                },
                restart: t("YES")
            },
            {
                key: "log.retention.hours",
                name: "log.retention.hours",
                value: module26(e, '["log.retention.hours"]', 168),
                description: t("DBPARAM_LOG_RETENTION_HOURS_DESC"),
                range: {
                    min: 1,
                    max: 8760
                },
                restart: t("YES")
            },
            {
                key: "log.segment.bytes",
                name: "log.segment.bytes",
                value: module26(e, '["log.segment.bytes"]', 1073741824),
                description: t("DBPARAM_LOG_SEGMENT_BYTES_DESC"),
                range: {
                    min: 1048576,
                    max: 2147483647
                },
                restart: t("YES")
            },
            {
                key: "log.segment.delete.delay.ms",
                name: "log.segment.delete.delay.ms",
                value: module26(e, '["log.segment.delete.delay.ms"]', 60000),
                description: t("DBPARAM_LOG_SEGMENT_DELETE_DELAY_MS_DESC"),
                range: {
                    min: 0
                },
                restart: t("YES")
            },
            {
                key: "log.roll.hours",
                name: "log.roll.hours",
                value: module26(e, '["log.roll.hours"]', 168),
                description: t("DBPARAM_LOG_ROLL_HOURS_DESC"),
                range: {
                    min: 1
                },
                restart: t("YES")
            },
            {
                key: "offsets.topic.replication.factor",
                name: "offsets.topic.replication.factor",
                value: module26(e, '["offsets.topic.replication.factor"]', 3),
                description: t("DBPARAM_OFFSETS_TOPIC_REPLICATION_FACTOR"),
                range: {
                    min: 1,
                    max: 100
                },
                restart: t("YES")
            },
            {
                key: "log.cleanup.policy",
                name: "log.cleanup.policy",
                value: module26(e, '["log.cleanup.policy"]', "delete"),
                description: t("DBPARAM_LOG_CLEANUP_POLICY_DESC"),
                restart: t("YES"),
                type: "select",
                options: [
                    {
                        label: "delete",
                        value: "delete"
                    },
                    {
                        label: "compact",
                        value: "compact"
                    }
                ]
            },
            {
                key: "log.cleaner.enable",
                name: "log.cleaner.enable",
                value: module26(e, '["log.cleaner.enable"]', "true").toString(),
                description: t("DBPARAM_LOG_CLEANER_ENABLE_DESC"),
                restart: t("YES"),
                type: "select",
                options: [
                    {
                        label: "true",
                        value: "true"
                    },
                    {
                        label: "false",
                        value: "false"
                    }
                ]
            },
            {
                key: "compression.type",
                name: "compression.type",
                value: module26(e, '["compression.type"]', "producer"),
                description: t("DBPARAM_COMPRESSION_TYPE_DESC."),
                restart: t("YES"),
                type: "select",
                options: [
                    "uncompressed",
                    "zstd",
                    "lz4",
                    "snappy",
                    "gzip",
                    "producer"
                ].map((e)=>({
                        label: e,
                        value: e
                    }))
            },
            {
                key: "message.max.bytes",
                name: "message.max.bytes",
                value: module26(e, '["message.max.bytes"]', 1000000),
                description: t("DBPARAM_MESSAGE_MAX_BYTES_DESC"),
                range: {
                    min: 1024,
                    max: 2147483647
                },
                restart: t("YES")
            },
            {
                key: "num.network.threads",
                name: "num.network.threads",
                value: module26(e, '["num.network.threads"]', 3),
                description: t("DBPARAM_NUM_NETWORK_THREADS_DESC"),
                range: {
                    min: 1
                },
                restart: t("YES")
            },
            {
                key: "num.io.threads",
                name: "num.io.threads",
                value: module26(e, '["num.io.threads"]', 8),
                description: t("DBPARAM_NUM_IO_THREADS_DESC"),
                range: {
                    min: 1,
                    max: 20
                },
                restart: t("YES")
            },
            {
                key: "num.recovery.threads.per.data.dir",
                name: "num.recovery.threads.per.data.dir",
                value: module26(e, '["num.recovery.threads.per.data.dir"]', 1),
                description: t("DBPARAM_NUM_RECOVERY_THREADS_PER_DATA_DIR_DESC"),
                range: {
                    min: 1
                },
                restart: t("YES")
            },
            {
                key: "num.replica.fetchers",
                name: "num.replica.fetchers",
                value: module26(e, '["num.replica.fetchers"]', 1),
                description: t("DBPARAM_NUM_REPLICA_FETCHERS_DESC"),
                range: {
                    min: 1,
                    max: 10
                },
                restart: t("YES")
            },
            {
                key: "queued.max.requests",
                name: "queued.max.requests",
                value: module26(e, '["queued.max.requests"]', 500),
                description: t("DBPARAM_QUEUED_MAX_REQUESTS_DESC"),
                range: {
                    min: 1,
                    max: 5000
                },
                restart: t("YES")
            },
            {
                key: "replica.lag.time.max.ms",
                name: "replica.lag.time.max.ms",
                value: module26(e, '["replica.lag.time.max.ms"]', 10000),
                description: t("DBPARAM_REPLICA_LAG_TIME_MAX_MS_DESC"),
                range: {
                    min: 6000,
                    max: 99999
                },
                restart: t("YES")
            },
            {
                key: "group.max.session.timeout.ms",
                name: "group.max.session.timeout.ms",
                value: module26(e, '["group.max.session.timeout.ms"]', 1800000),
                description: t("DBPARAM_GROUP_MAX_SESSION_TIMEOUT_MS_DESC"),
                range: {
                    min: 0,
                    max: 9999999
                },
                restart: t("YES")
            },
            {
                key: "group.min.session.timeout.ms",
                name: "group.min.session.timeout.ms",
                value: module26(e, '["group.min.session.timeout.ms"]', 6000),
                description: t("DBPARAM_GROUP_MIN_SESSION_TIMEOUT_MS_DESC"),
                range: {
                    min: 0,
                    max: 60000
                },
                restart: t("YES")
            },
            {
                key: "auto.create.topics.enable",
                name: "auto.create.topics.enable",
                value: module26(e, '["auto.create.topics.enable"]', "true").toString(),
                description: t("DBPARAM_AUTO_CREATE_TOPICS_ENABLE_DESC"),
                restart: t("YES"),
                type: "select",
                options: [
                    {
                        label: "true",
                        value: "true"
                    },
                    {
                        label: "false",
                        value: "false"
                    }
                ]
            },
            {
                key: "min.insync.replicas",
                name: "min.insync.replicas",
                value: module26(e, '["min.insync.replicas"]', 2),
                description: t("DBPARAM_MIN_INSYNC_REPLICAS_DESC"),
                range: {
                    min: 1,
                    max: 6
                },
                restart: t("YES")
            },
            {
                key: "default.replication.factor",
                name: "default.replication.factor",
                value: module26(e, '["default.replication.factors"]', 3),
                description: t("DBPARAM_DEFAULT_REPLICATION_FACTORS_DESC"),
                range: {
                    min: 1,
                    max: 6
                },
                restart: t("YES")
            },
            {
                key: "jmxOptions",
                name: "jmxOptions",
                value: module26(e, "jmxOptions", "disable"),
                description: t("DBPARAM_JMXOPTIONS_DESC"),
                restart: t("YES"),
                type: "select",
                options: [
                    {
                        label: "disable",
                        value: "disable"
                    },
                    {
                        label: "enable",
                        value: "enable"
                    },
                    {
                        label: "password",
                        value: "password"
                    }
                ]
            }
        ];
    }
    return [
        {
            key: "tickTime",
            name: "tickTime",
            value: module26(e, "tickTime", 2000),
            range: {
                min: 1,
                max: 1000000
            },
            description: t("DBPARAM_TICKTIME_DESC"),
            restart: t("YES")
        },
        {
            key: "initLimit",
            name: "initLimit",
            value: module26(e, "initLimit", 5),
            range: {
                min: 1,
                max: 1000000
            },
            description: t("DBPARAM_INITLIMIT_DESC"),
            restart: t("YES")
        },
        {
            key: "syncLimit",
            name: "syncLimit",
            value: module26(e, "syncLimit", 2),
            range: {
                min: 1,
                max: 1000000
            },
            description: t("DBPARAM_SYNCLIMIT_DESC"),
            restart: t("YES")
        },
        {
            key: "maxClientCnxns",
            name: "maxClientCnxns",
            value: module26(e, "maxClientCnxns", 1000),
            range: {
                min: 1,
                max: 1000000
            },
            description: t("DBPARAM_MAXCLIENTCNXNS_DESC"),
            restart: t("YES")
        },
        {
            key: "autopurge.snapRetainCount",
            name: "autopurge.snapRetainCount",
            value: module26(e, '["autopurge.snapRetainCount"]', 3),
            range: {
                min: 3,
                max: 100000000
            },
            description: t("DBPARAM_AUTOPURGE_SNAPRETAINCOUNT_DESC"),
            restart: t("YES")
        },
        {
            key: "autopurge.purgeInterval",
            name: "autopurge.purgeInterval",
            value: module26(e, '["autopurge.purgeInterval"]', 1),
            range: {
                min: 0,
                max: 720
            },
            description: t("DBPARAM_AUTOPURGE_PURGEINTERVAL_DESC"),
            restart: t("YES")
        },
        {
            key: "jmxOptions",
            name: "jmxOptions",
            value: module26(e, "jmxOptions", "disable"),
            description: t("DBPARAM_JMXOPTIONS_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "disable",
                    value: "disable"
                },
                {
                    label: "enable",
                    value: "enable"
                },
                {
                    label: "password",
                    value: "password"
                }
            ]
        }
    ];
};
export const getOpenSearchParams = function(e) {
    return [
        {
            key: "thread_pool.write.queue_size",
            name: "thread_pool.write.queue_size",
            value: module26(e, '["thread_pool.write.queue_size"]', 10000),
            description: t("DBPARAM_THREAD_POOL_WRITE_QUEUE_SIZE_DESC"),
            range: {
                min: 1000,
                max: 20000
            },
            restart: t("YES")
        },
        {
            key: "thread_pool.search.queue_size",
            name: "thread_pool.search.queue_size",
            value: module26(e, '["thread_pool.search.queue_size"]', 1000),
            description: t("DBPARAM_THREAD_POOL_SEARCH_QUEUE_SIZE_DESC"),
            range: {
                min: 1000,
                max: 20000
            },
            restart: t("YES")
        },
        {
            key: "action.destructive_requires_name",
            name: "action.destructive_requires_name",
            value: module26(e, '["action.destructive_requires_name"]', "true").toString(),
            description: t("DBPARAM_ACTION_DESTRUCTIVE_REQUIRES_NAME_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "http.cors.enabled",
            name: "http.cors.enabled",
            value: module26(e, '["http.cors.enabled"]', "false").toString(),
            description: t("DBPARAM_HTTP_CORS_ENABLED_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "http.cors.allow-origin",
            name: "http.cors.allow-origin",
            value: module26(e, '["http.cors.allow-origin"]', ""),
            description: t("DBPARAM_HTTP_CORS_ALLOW_ORIGIN_DESC"),
            restart: t("YES")
        },
        {
            key: "indices.fielddata.cache.size",
            name: "indices.fielddata.cache.size",
            value: module26(e, '["indices.fielddata.cache.size"]', "-1b"),
            description: t("DBPARAM_INDICES_FIELDDATA_CACHE_SIZE"),
            restart: t("YES")
        },
        {
            key: "indices.memory.index_buffer_size",
            name: "indices.memory.index_buffer_size",
            value: module26(e, '["indices.memory.index_buffer_size"]', "10%"),
            description: t("DBPARAM_INDICES_MEMORY_INDEX_BUFFER_SIZE_DESC"),
            restart: t("YES")
        },
        {
            key: "indices.queries.cache.size",
            name: "indices.queries.cache.size",
            value: module26(e, '["indices.queries.cache.size"]', "10%"),
            description: t("DBPARAM_INDICES_QUERIES_CACHE_SIZE_DESC"),
            restart: t("YES")
        },
        {
            key: "indices.requests.cache.size",
            name: "indices.requests.cache.size",
            value: module26(e, '["indices.requests.cache.size"]', "1%"),
            description: t("DBPARAM_INDICES_REQUESTS_CACHE_SIZE_DESC"),
            restart: t("YES")
        },
        {
            key: "reindex.remote.whitelist",
            name: "reindex.remote.whitelist",
            value: module26(e, '["reindex.remote.whitelist"]', ""),
            description: t("DBPARAM_REINDEX_REMOTE_WHITELIST_DESC"),
            restart: t("YES")
        },
        {
            key: "logstash.PIPELINE_WORKERS",
            name: "LOGSTASH_PIPELINE_WORKERS",
            value: Number(module26(e, "logstash.PIPELINE_WORKERS", 1)),
            description: t("DBPARAM_PIPELINE_WORKERS_DESC"),
            range: {
                min: 1
            },
            restart: t("YES")
        },
        {
            key: "logstash.PIPELINE_BATCH_SIZE",
            name: "LOGSTASH_PIPELINE_BATCH_SIZE",
            value: Number(module26(e, "logstash.PIPELINE_BATCH_SIZE", 125)),
            description: t("DBPARAM_PIPELINE_BATCH_SIZE_DESC"),
            range: {
                min: 1
            },
            restart: t("YES")
        },
        {
            key: "logstash.PIPELINE_BATCH_DELAY",
            name: "LOGSTASH_PIPELINE_BATCH_DELAY",
            value: Number(module26(e, "logstash.PIPELINE_BATCH_DELAY", 50)),
            description: t("DBPARAM_PIPELINE_BATCH_DELAY_DESC"),
            range: {
                min: 1
            },
            restart: t("YES")
        },
        {
            key: "logstash.PIPELINE_UNSAFE_SHUTDOWN",
            name: "LOGSTASH_PIPELINE_UNSAFE_SHUTDOWN",
            value: module26(e, "logstash.PIPELINE_UNSAFE_SHUTDOWN", "false").toString(),
            description: t("DBPARAM_PIPELINE_UNSAFE_SHUTDOWN_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "logstash.PIPELINE_ORDERED",
            name: "LOGSTASH_PIPELINE_ORDERED",
            value: module26(e, "logstash.PIPELINE_ORDERED", "auto"),
            description: t("DBPARAM_PIPELINE_ORDERED_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "auto",
                    value: "auto"
                },
                {
                    label: "true",
                    value: "true"
                },
                {
                    label: "false",
                    value: "false"
                }
            ]
        },
        {
            key: "logstash.PIPELINE.ECS_COMPATIBILITY",
            name: "LOGSTASH_PIPELINE.ECS_COMPATIBILITY",
            value: module26(e, 'logstash["PIPELINE.ECS_COMPATIBILITY"]', "v8"),
            description: t("DBPARAM_ECS_COMPATIBILITY_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "disabled",
                    value: "disabled"
                },
                {
                    label: "v1",
                    value: "v1"
                },
                {
                    label: "v8",
                    value: "v8"
                }
            ]
        },
        {
            key: "logstash.LOG_LEVEL",
            name: "LOGSTASH_LOG_LEVEL",
            value: module26(e, "logstash.LOG_LEVEL", "info"),
            description: t("DBPARAM_LOG_LEVEL_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "fatal",
                    value: "fatal"
                },
                {
                    label: "error",
                    value: "error"
                },
                {
                    label: "warn",
                    value: "warn"
                },
                {
                    label: "info",
                    value: "info"
                },
                {
                    label: "debug",
                    value: "debug"
                },
                {
                    label: "trace",
                    value: "trace"
                }
            ]
        },
        {
            key: "logstash.LOG_FORMAT",
            name: "LOGSTASH_LOG_FORMAT",
            value: module26(e, "logstash.LOG_FORMAT", "plain"),
            description: t("DBPARAM_LOG_FORMAT_DESC"),
            restart: t("YES"),
            type: "select",
            options: [
                {
                    label: "plain",
                    value: "plain"
                },
                {
                    label: "json",
                    value: "json"
                }
            ]
        },
        {
            key: "logstash.jvm",
            name: "LOGSTASH_JVM",
            value: Number(module26(e, "logstash.jvm", "50")),
            description: t("DBPARAM_LOG_JVM_DESC"),
            range: {
                min: 50,
                max: 75
            },
            restart: t("YES")
        }
    ];
};
var c = [
    "DEBUG5",
    "DEBUG",
    "INFO",
    "NOTICE",
    "WARNING",
    "ERROR"
];
