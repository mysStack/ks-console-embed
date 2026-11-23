import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import module26 from "unpacked/module-26.js";
const c = {
    getConfig: function(e, t) {
        const namespace = e.detail.namespace;
        const t_name = t.name;
        return [
            {
                targets: [
                    {
                        expr: `predixy_used_memory{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `predixy_redis_cluster_connections{namespace="${namespace}",pod="${t_name}"}`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `rate(predixy_redis_cluster_total_recv_client_bytes{namespace="${namespace}",pod="${t_name}"}[1m])`
                    },
                    {
                        expr: `rate(predixy_redis_cluster_total_recv_server_bytes{namespace="${namespace}",pod="${t_name}"}[1m])`
                    },
                    {
                        expr: `rate(predixy_redis_cluster_total_send_client_bytes{namespace="${namespace}",pod="${t_name}"}[1m])`
                    },
                    {
                        expr: `rate(predixy_redis_cluster_total_send_server_bytes{namespace="${namespace}",pod="${t_name}"}[1m])`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `rate(predixy_total_requests{namespace="${namespace}",pod="${t_name}"}[1m])`
                    }
                ]
            },
            {
                targets: [
                    {
                        expr: `count(predixy_redis_cluster_server_connections{namespace="${namespace}",pod="${t_name}"})`
                    }
                ]
            }
        ];
    },
    getMonitoringCfgs: function(e) {
        return [
            {
                title: t("PREDIXY_MEMORY_USAGE"),
                legend: [
                    t("PREDIXY_MEMORY_USAGE")
                ],
                unitType: "memory",
                data: [
                    module26(e, "1.data.result[0]", {})
                ]
            },
            {
                title: t("CLIENT_COUNT"),
                unit: "%",
                dot: 2,
                legend: [
                    t("CLIENT_COUNT")
                ],
                data: [
                    module26(e, "2.data.result[0]", {})
                ]
            },
            {
                title: t("NETWORK_IO"),
                legend: [
                    t("RECV_CLIENT_BYTES"),
                    t("RECV_SERVER_BYTES"),
                    t("SEND_CLIENT_BYTES"),
                    t("SEND_SERVER_BYTES")
                ],
                data: [
                    module26(e, "3.data.result[0]", {}),
                    module26(e, "4.data.result[0]", {}),
                    module26(e, "5.data.result[0]", {}),
                    module26(e, "6.data.result[0]", {})
                ]
            },
            {
                title: t("COMMANDS_EXECUTED_PER_MINUTE"),
                legend: [
                    t("COMMANDS_EXECUTED_PER_MINUTE")
                ],
                data: [
                    module26(e, "7.data.result[0]", {})
                ]
            },
            {
                title: t("REDIS_CLUSTER_COUNT"),
                legend: [
                    t("REDIS_CLUSTER_COUNT")
                ],
                data: [
                    module26(e, "8.data.result[0]", {})
                ]
            }
        ];
    }
};
export default c;
