import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import module26 from "unpacked/module-26.js";
const c = {
    getConfig: function({ detail }, t) {
        const { name, namespace } = detail;
        const t_name = t.name;
        return [
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**Max Connections** \n\nMax Connections is the maximum permitted number of simultaneous client connections. By default, this is 151. Increasing this value increases the number of file descriptors that mysqld requires. If the required number of descriptors are not available, the server reduces the value of Max Connections.\n\nmysqld actually permits Max Connections + 1 clients to connect. The extra connection is reserved for use by accounts that have the SUPER privilege, such as root.\n\nMax Used Connections is the maximum number of connections that have been in use simultaneously since the server started.\n\nConnections is the number of connection attempts (successful or not) to the MySQL server.",
                id: 92,
                lines: true,
                targets: [
                    {
                        expr: `mysql_global_status_threads_connected{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Connections",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_status_max_used_connections{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Max Used Connections",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_max_connections{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Max Connections",
                        refId: 3,
                        step: "1m"
                    }
                ],
                title: "MYSQL_CONNECTIONS",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Active Threads**\n\nThreads Connected is the number of open connections, while Threads Running is the number of threads not sleeping.",
                id: 10,
                lines: true,
                targets: [
                    {
                        expr: `max_over_time(mysql_global_status_threads_connected{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[3m])`,
                        legendFormat: "Peak Threads Connected",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `max_over_time(mysql_global_status_threads_running{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[3m])`,
                        legendFormat: "Peak Threads Running",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `avg_over_time(mysql_global_status_threads_running{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[3m])`,
                        legendFormat: "Avg Threads Running",
                        refId: 3,
                        step: "1m"
                    }
                ],
                title: "MYSQL_CLIENT_THREAD_ACTIVITY",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Questions**\n\nThe number of statements executed by the server. This includes only statements sent to the server by clients and not statements executed within stored programs, unlike the Queries used in the QPS calculation. \n\nThis variable does not count the following commands:\n* ``COM_PING``\n* ``COM_STATISTICS``\n* ``COM_STMT_PREPARE``\n* ``COM_STMT_CLOSE``\n* ``COM_STMT_RESET``",
                id: 53,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_questions{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Questions",
                        refId: 1,
                        step: "1m"
                    }
                ],
                title: "MYSQL_QUESTIONS",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Thread Cache**\n\nThe thread_cache_size variable sets how many threads the server should cache to reuse. When a client disconnects, the client's threads are put in the cache if the cache is not full. It is autosized in MySQL 5.6.8 and above (capped to 100). Requests for threads are satisfied by reusing threads taken from the cache if possible, and only when the cache is empty is a new thread created.\n\n* *Threads_created*: The number of threads created to handle connections.\n* *Threads_cached*: The number of threads in the thread cache.",
                id: 11,
                lines: true,
                targets: [
                    {
                        expr: `mysql_global_variables_thread_cache_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Thread Cache Size",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_status_threads_cached{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Threads Cached",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_threads_created{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Threads Created",
                        refId: 3,
                        step: "1m"
                    }
                ],
                title: "MYSQL_THREAD_CACHE",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                id: 22,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_created_tmp_tables{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "CREATED_TEMP_TABLES",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_created_tmp_disk_tables{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Created Tmp Disk Tables",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_created_tmp_files{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Created Tmp Files",
                        refId: 3,
                        step: "1m"
                    }
                ],
                title: "MySQL Temporary Objects",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Select Types**\n\nAs with most relational databases, selecting based on indexes is more efficient than scanning an entire table's data. Here we see the counters for selects not done with indexes.\n\n* ***Select Scan*** is how many queries caused full table scans, in which all the data in the table had to be read and either discarded or returned.\n* ***Select Range*** is how many queries used a range scan, which means MySQL scanned all rows in a given range.\n* ***Select Full Join*** is the number of joins that are not joined on an index, this is usually a huge performance hit.",
                id: 311,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_select_full_join{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Select Full Join",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_select_full_range_join{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Select Full Range Join",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_select_range{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Select Range",
                        refId: 3,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_select_range_check{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Select Range Check",
                        refId: 4,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_select_scan{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Select Scan",
                        refId: 5,
                        step: "1m"
                    }
                ],
                title: "MySQL Select Types",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Sorts**\n\nDue to a query's structure, order, or other requirements, MySQL sorts the rows before returning them. For example, if a table is ordered 1 to 10 but you want the results reversed, MySQL then has to sort the rows to return 10 to 1.\n\nThis graph also shows when sorts had to scan a whole table or a given range of a table in order to return the results and which could not have been sorted via an index.",
                id: 30,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_sort_rows{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Sort Rows",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_sort_range{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Sort Range",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_sort_merge_passes{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Sort Merge Passes",
                        refId: 3,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_sort_scan{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Sort Scan",
                        refId: 4,
                        step: "1m"
                    }
                ],
                title: "MySQL Sorts",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Slow Queries**\n\nSlow queries are defined as queries being slower than the long_query_time setting. For example, if you have long_query_time set to 3, all queries that take longer than 3 seconds to complete will show on this graph.",
                id: 48,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_slow_queries{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Slow Queries",
                        refId: 1,
                        step: "1m"
                    }
                ],
                title: "MySQL Slow Queries",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**Aborted Connections**\n\nWhen a given host connects to MySQL and the connection is interrupted in the middle (for example due to bad credentials), MySQL keeps that info in a system table (since 5.6 this table is exposed in performance_schema).\n\nIf the amount of failed requests without a successful connection reaches the value of max_connect_errors, mysqld assumes that something is wrong and blocks the host from further connection.\n\nTo allow connections from that host again, you need to issue the ``FLUSH HOSTS`` statement.",
                id: 47,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_aborted_connects{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Aborted Connects (attempts)",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_aborted_clients{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Aborted Clients (timeout)",
                        refId: 2,
                        step: "1m"
                    }
                ],
                title: "MySQL Aborted Connections",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**Table Locks**\n\nMySQL takes a number of different locks for varying reasons. In this graph we see how many Table level locks MySQL has requested from the storage engine. In the case of InnoDB, many times the locks could actually be row locks as it only takes table level locks in a few specific cases.\n\nIt is most useful to compare Locks Immediate and Locks Waited. If Locks waited is rising, it means you have lock contention. Otherwise, Locks Immediate rising and falling is normal activity.",
                id: 32,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_table_locks_immediate{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Table Locks Immediate",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_table_locks_waited{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Table Locks Waited",
                        refId: 2,
                        step: "1m"
                    }
                ],
                title: "MySQL Table Locks",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Network Traffic**\n\nHere we can see how much network traffic is generated by MySQL. Outbound is network traffic sent from MySQL and Inbound is network traffic MySQL has received.",
                id: 9,
                lines: true,
                stack: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_bytes_received{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Inbound",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_bytes_sent{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Outbound",
                        refId: 2,
                        step: "1m"
                    }
                ],
                title: "MySQL Network Traffic",
                type: "graph",
                yaxes: [
                    {
                        format: "Byte"
                    }
                ]
            },
            {
                bars: true,
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Network Usage Hourly**\n\nHere we can see how much network traffic is generated by MySQL per hour. You can use the bar graph to compare data sent by MySQL and data received by MySQL.",
                id: 381,
                stack: true,
                targets: [
                    {
                        expr: `increase(mysql_global_status_bytes_received{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[1h])`,
                        legendFormat: "Received",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `increase(mysql_global_status_bytes_sent{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[1h])`,
                        legendFormat: "Sent",
                        refId: 2,
                        step: "1m"
                    }
                ],
                title: "MySQL Network Usage Hourly",
                type: "graph",
                yaxes: [
                    {
                        format: "Byte"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "***System Memory***: Total Memory for the system.\\\n***InnoDB Buffer Pool Data***: InnoDB maintains a storage area called the buffer pool for caching data and indexes in memory.\\\n***TokuDB Cache Size***: Similar in function to the InnoDB Buffer Pool,  TokuDB will allocate 50% of the installed RAM for its own cache.\\\n***Key Buffer Size***: Index blocks for MYISAM tables are buffered and are shared by all threads. key_buffer_size is the size of the buffer used for index blocks.\\\n***Adaptive Hash Index Size***: When InnoDB notices that some index values are being accessed very frequently, it builds a hash index for them in memory on top of B-Tree indexes.\\\n ***Query Cache Size***: The query cache stores the text of a SELECT statement together with the corresponding result that was sent to the client. The query cache has huge scalability problems in that only one thread can do an operation in the query cache at the same time.\\\n***InnoDB Dictionary Size***: The data dictionary is InnoDB ‘s internal catalog of tables. InnoDB stores the data dictionary on disk, and loads entries into memory while the server is running.\\\n***InnoDB Log Buffer Size***: The MySQL InnoDB log buffer allows transactions to run without having to write the log to disk before the transactions commit.",
                id: 50,
                lines: true,
                stack: true,
                targets: [
                    {
                        expr: `node_memory_MemTotal_bytes{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "System Memory",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_status_innodb_page_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "InnoDB Buffer Pool Data",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_innodb_log_buffer_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "InnoDB Log Buffer Size",
                        refId: 3,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_innodb_additional_mem_pool_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "InnoDB Additional Memory Pool Size",
                        refId: 4,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_status_innodb_mem_dictionary{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "InnoDB Dictionary Size",
                        refId: 5,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_key_buffer_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Key Buffer Size",
                        refId: 6,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_query_cache_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Query Cache Size",
                        refId: 7,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_status_innodb_mem_adaptive_hash{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Adaptive Hash Index Size",
                        refId: 8,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_tokudb_cache_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "TokuDB Cache Size",
                        refId: 9,
                        step: "1m"
                    }
                ],
                title: "MySQL Internal Memory Overview",
                type: "graph",
                yaxes: [
                    {
                        format: "Byte"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**Top Command Counters**\n\nThe Com_{{xxx}} statement counter variables indicate the number of times each xxx statement has been executed. There is one status variable for each type of statement. For example, Com_delete and Com_update count [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements, respectively. Com_delete_multi and Com_update_multi are similar but apply to [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements that use multiple-table syntax.",
                id: 14,
                lines: true,
                targets: [
                    {
                        expr: `topk(5, rate(mysql_global_status_commands_total{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m]))`,
                        legendFormat: "Com_{{command}}",
                        refId: 1,
                        step: "1m"
                    }
                ],
                title: "Top Command Counters",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                bars: true,
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**Top Command Counters Hourly**\n\nThe Com_{{xxx}} statement counter variables indicate the number of times each xxx statement has been executed. There is one status variable for each type of statement. For example, Com_delete and Com_update count [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements, respectively. Com_delete_multi and Com_update_multi are similar but apply to [``DELETE``](https://dev.mysql.com/doc/refman/5.7/en/delete.html) and [``UPDATE``](https://dev.mysql.com/doc/refman/5.7/en/update.html) statements that use multiple-table syntax.",
                id: 39,
                stack: true,
                targets: [
                    {
                        expr: `topk(5, increase(mysql_global_status_commands_total{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[1h]))`,
                        legendFormat: "Com_{{command}}",
                        refId: 1,
                        step: "1m"
                    }
                ],
                title: "Top Command Counters Hourly",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Handlers**\n\nHandler statistics are internal statistics on how MySQL is selecting, updating, inserting, and modifying rows, tables, and indexes.\n\nThis is in fact the layer between the Storage Engine and MySQL.\n\n* `read_rnd_next` is incremented when the server performs a full table scan and this is a counter you don't really want to see with a high value.\n* `read_key` is incremented when a read is done with an index.\n* `read_next` is incremented when the storage engine is asked to 'read the next index entry'. A high value means a lot of index scans are being done.",
                id: 8,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_handlers_total{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "{{handler}}",
                        refId: 1,
                        step: "1m"
                    }
                ],
                title: "MySQL Handlers",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                id: 28,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_handlers_total{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "{{handler}}",
                        refId: 1,
                        step: "1m"
                    }
                ],
                title: "MySQL Transaction Handlers",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Query Cache Memory**\n\nThe query cache has huge scalability problems in that only one thread can do an operation in the query cache at the same time. This serialization is true not only for SELECTs, but also for INSERT/UPDATE/DELETE.\n\nThis also means that the larger the `query_cache_size` is set to, the slower those operations become. In concurrent environments, the MySQL Query Cache quickly becomes a contention point, decreasing performance. MariaDB and AWS Aurora have done work to try and eliminate the query cache contention in their flavors of MySQL, while MySQL 8.0 has eliminated the query cache feature.\n\nThe recommended settings for most environments is to set:\n  ``query_cache_type=0``\n  ``query_cache_size=0``\n\nNote that while you can dynamically change these values, to completely remove the contention point you have to restart the database.",
                id: 46,
                lines: true,
                targets: [
                    {
                        expr: `mysql_global_status_qcache_free_memory{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Free Memory",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_query_cache_size{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Query Cache Size",
                        refId: 2,
                        step: "1m"
                    }
                ],
                title: "MySQL Query Cache Memory",
                type: "graph",
                yaxes: [
                    {
                        format: "Byte"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Query Cache Activity**\n\nThe query cache has huge scalability problems in that only one thread can do an operation in the query cache at the same time. This serialization is true not only for SELECTs, but also for INSERT/UPDATE/DELETE.\n\nThis also means that the larger the `query_cache_size` is set to, the slower those operations become. In concurrent environments, the MySQL Query Cache quickly becomes a contention point, decreasing performance. MariaDB and AWS Aurora have done work to try and eliminate the query cache contention in their flavors of MySQL, while MySQL 8.0 has eliminated the query cache feature.\n\nThe recommended settings for most environments is to set:\n``query_cache_type=0``\n``query_cache_size=0``\n\nNote that while you can dynamically change these values, to completely remove the contention point you have to restart the database.",
                id: 45,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_qcache_hits{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Hits",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_qcache_inserts{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Inserts",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_qcache_not_cached{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Not Cached",
                        refId: 3,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_qcache_lowmem_prunes{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Prunes",
                        refId: 4,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_status_qcache_queries_in_cache{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Queries in Cache",
                        refId: 5,
                        step: "1m"
                    }
                ],
                title: "MySQL Query Cache Activity",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                id: 43,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_opened_files{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Openings",
                        refId: 1,
                        step: "1m"
                    }
                ],
                title: "MySQL File Openings",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                id: 41,
                lines: true,
                targets: [
                    {
                        expr: `mysql_global_status_open_files{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Open Files",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_open_files_limit{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Open Files Limit",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_status_innodb_num_open_files{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "InnoDB Open Files",
                        refId: 3,
                        step: "1m"
                    }
                ],
                title: "MySQL Open Files",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Table Open Cache Status**\n\nThe recommendation is to set the `table_open_cache_instances` to a loose correlation to virtual CPUs, keeping in mind that more instances means the cache is split more times. If you have a cache set to 500 but it has 10 instances, each cache will only have 50 cached.\n\nThe `table_definition_cache` and `table_open_cache` can be left as default as they are auto-sized MySQL 5.6 and above (ie: do not set them to any value).",
                id: 44,
                lines: true,
                targets: [
                    {
                        expr: `rate(mysql_global_status_opened_tables{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Openings",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_table_open_cache_hits{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Hits",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_table_open_cache_misses{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Misses",
                        refId: 3,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_table_open_cache_overflows{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Misses due to Overflows",
                        refId: 4,
                        step: "1m"
                    },
                    {
                        expr: `(rate(mysql_global_status_table_open_cache_hits{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m]))`,
                        legendFormat: "Table Open Cache Hit Ratio",
                        refId: 5,
                        step: "1m"
                    }
                ],
                title: "MySQL Table Open Cache Status",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Open Tables**\n\nThe recommendation is to set the `table_open_cache_instances` to a loose correlation to virtual CPUs, keeping in mind that more instances means the cache is split more times. If you have a cache set to 500 but it has 10 instances, each cache will only have 50 cached.\n\nThe `table_definition_cache` and `table_open_cache` can be left as default as they are auto-sized MySQL 5.6 and above (ie: do not set them to any value).",
                id: 42,
                lines: true,
                targets: [
                    {
                        expr: `mysql_global_status_open_tables{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Open Tables",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_table_open_cache{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Table Open Cache",
                        refId: 2,
                        step: "1m"
                    }
                ],
                title: "MySQL Open Tables",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            },
            {
                colors: [
                    "#60acfc",
                    "#23c2db",
                    "#64d5b2",
                    "#d5ec5a",
                    "#ffb64e",
                    "#fb816d",
                    "#d15c7f"
                ],
                description: "**MySQL Table Definition Cache**\n\nThe recommendation is to set the `table_open_cache_instances` to a loose correlation to virtual CPUs, keeping in mind that more instances means the cache is split more times. If you have a cache set to 500 but it has 10 instances, each cache will only have 50 cached.\n\nThe `table_definition_cache` and `table_open_cache` can be left as default as they are auto-sized MySQL 5.6 and above (ie: do not set them to any value).",
                id: 54,
                lines: true,
                targets: [
                    {
                        expr: `mysql_global_status_open_table_definitions{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Open Table Definitions",
                        refId: 1,
                        step: "1m"
                    },
                    {
                        expr: `mysql_global_variables_table_definition_cache{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}`,
                        legendFormat: "Table Definitions Cache Size",
                        refId: 2,
                        step: "1m"
                    },
                    {
                        expr: `rate(mysql_global_status_opened_table_definitions{${`service="${name}-metrics",namespace="${namespace}",pod="${t_name}"`}}[5m])`,
                        legendFormat: "Opened Table Definitions",
                        refId: 3,
                        step: "1m"
                    }
                ],
                title: "MySQL Table Definition Cache",
                type: "graph",
                yaxes: [
                    {
                        format: "none"
                    }
                ]
            }
        ];
    },
    getMonitoringCfgs: function(e) {
        return [
            {
                type: "utilisation",
                title: t("MAX_USED_CONNECTIONS"),
                legend: [
                    t("MAX_USED_CONNECTIONS")
                ],
                data: [
                    module26(e, "[2].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: "THREADS",
                legend: [
                    t("PEAK_THREADS_CONNECTED"),
                    t("PEAK_THREADS_RUNNING"),
                    t("AVG_THREADS_RUNNING")
                ],
                data: [
                    module26(e, "[4].data.result[0]", {}),
                    module26(e, "[5].data.result[0]", {}),
                    module26(e, "[6].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("ABORTED_CONNECTIONS"),
                legend: [
                    t("ABORTED_CONNECTION_ATTEMPTS"),
                    t("ABORTED_CLIENT_TIMEOUTS")
                ],
                data: [
                    module26(e, "[24].data.result[0]", {}),
                    module26(e, "[25].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("QUESTIONS"),
                legend: [
                    t("QUESTIONS")
                ],
                data: [
                    module26(e, "[7].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("SELECT_BY_TYPE"),
                legend: [
                    t("SELECT_FULL_JOIN"),
                    t("SELECT_FULL_RANGE_JOIN"),
                    t("SELECT_RANGE"),
                    t("SELECT_RANGE_CHECK"),
                    t("SELECT_SCAN")
                ],
                data: [
                    module26(e, "[14].data.result[0]", {}),
                    module26(e, "[15].data.result[0]", {}),
                    module26(e, "[16].data.result[0]", {}),
                    module26(e, "[17].data.result[0]", {}),
                    module26(e, "[18].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("SORT_BY_TYPE"),
                legend: [
                    t("SORT_ROWS"),
                    t("SORT_RANGE"),
                    t("SORT_MERGE_PASSES"),
                    t("SORT_SCAN")
                ],
                data: [
                    module26(e, "[19].data.result[0]", {}),
                    module26(e, "[20].data.result[0]", {}),
                    module26(e, "[21].data.result[0]", {}),
                    module26(e, "[22].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("SLOW_QUERIES"),
                legend: [
                    t("SLOW_QUERIES")
                ],
                data: [
                    module26(e, "[23].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("TABLE_LOCKS"),
                legend: [
                    t("TABLE_LOCKS_IMMEDIATE"),
                    t("TABLE_LOCKS_WAITED")
                ],
                data: [
                    module26(e, "[26].data.result[0]", {}),
                    module26(e, "[27].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("TMP_TABLES_AND_FILES"),
                legend: [
                    t("CREATED_TMP_TABLES"),
                    t("CREATED_TMP_DISK_TABLES"),
                    t("CREATED_TMP_FILES")
                ],
                data: [
                    module26(e, "[11].data.result[0]", {}),
                    module26(e, "[12].data.result[0]", {}),
                    module26(e, "[13].data.result[0]", {})
                ]
            },
            {
                type: "utilisation",
                title: t("MYSQL_NETWORK_TRAFFIC"),
                legend: [
                    t("MYSQL_INBOUND"),
                    t("MYSQL_OUTBOUND")
                ],
                data: [
                    module26(e, "[28].data.result[0]", {}),
                    module26(e, "[29].data.result[0]", {})
                ]
            }
        ];
    }
};
export default c;
