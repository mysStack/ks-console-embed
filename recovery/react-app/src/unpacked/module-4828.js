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
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-436.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createContext } from "unpacked/module-553.js";
import { Provider, inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module243 from "unpacked/module-243.js";
import Module790 from "components/Base/Panel";
import Module796 from "components/Base/Status";
import Module836 from "components/Base/Image";
import { cpuFormat } from "utils/index";
import { RadonDBAppId } from "unpacked/module-817.js";
import { DMPStatus } from "unpacked/module-1430.js";
import Module4829 from "unpacked/module-4829.js";
import module4866 from "unpacked/module-4866.js";
let o;
let c;
let s;
const DContext = createContext({
    nodeIP: "",
    updateState: null
});
const C = inject("detailStore")(o = observer((s = c = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.deleteNode = function(podName) {
            const params = t.props.match.params;
            const { cluster, namespace, id: cluster_id, workspace } = params;
            t.store.deleteNode({
                workspace,
                podName,
                namespace,
                cluster,
                cluster_id
            });
        };
        t.store = e.detailStore;
        t.module = e.module;
        t.state = {
            nodeIP: ""
        };
        return t;
    }
    module37(r, [
        {
            key: "hasDeleteAction",
            get: function() {
                return (globals.app.getActions({
                    workspace: this.props.match.params.workspace,
                    module: "applications"
                }) || []).includes("delete");
            }
        }
    ]);
    module37(r, [
        {
            key: "renderPanel",
            value: function() {
                const detail = this.store.detail;
                const { app_id, status, creationTimestamp, shardsCount, cpu, memory, storage, replicasCount } = detail;
                const u = module243(creationTimestamp);
                const d = [];
                if (app_id === RadonDBAppId.Elasticsearch) {
                    d.push({
                        iconSrc: "/assets/pod.svg",
                        label: this.store.detail.nodes.master,
                        desc: this.store.detail.nodes.master === 1 ? t("PRIMARY_NODE") : t("PRIMARY_NODE_PL")
                    }, {
                        iconName: "database",
                        label: this.store.detail.nodes.hot,
                        desc: this.store.detail.nodes.hot === 1 ? t("HOT_NODE") : t("HOT_NODE_PL")
                    }, {
                        iconName: "cluster",
                        label: this.store.detail.nodes.warm,
                        desc: this.store.detail.nodes.warm === 1 ? t("WARM_NODE") : t("WARM_NODE_PL")
                    }, {
                        iconName: "cluster",
                        label: this.store.detail.nodes.cold,
                        desc: this.store.detail.nodes.cold === 1 ? t("COLD_NODE") : t("COLD_NODE_PL")
                    }, {
                        iconName: "cluster",
                        label: this.store.detail.nodes.kibana,
                        desc: this.store.detail.nodes.cold === 1 ? t("KIBANA_NODE") : t("KIBANA_NODE_PL")
                    });
                } else if (app_id === RadonDBAppId.OpenSearch) {
                    d.push({
                        iconSrc: "/assets/pod.svg",
                        label: this.store.detail.nodes.master,
                        desc: this.store.detail.nodes.master === 1 ? t("PRIMARY_NODE") : t("PRIMARY_NODE_PL")
                    }, {
                        iconName: "database",
                        label: this.store.detail.nodes.hot,
                        desc: this.store.detail.nodes.hot === 1 ? t("HOT_NODE") : t("HOT_NODE_PL")
                    }, {
                        iconName: "cluster",
                        label: this.store.detail.nodes.warm,
                        desc: this.store.detail.nodes.warm === 1 ? t("WARM_NODE") : t("WARM_NODE_PL")
                    }, {
                        iconName: "cluster",
                        label: this.store.detail.nodes.cold,
                        desc: this.store.detail.nodes.cold === 1 ? t("COLD_NODE") : t("COLD_NODE_PL")
                    }, {
                        iconName: "cluster",
                        label: this.store.detail.nodes.dashboard,
                        desc: t("DASHBOARD_NODE")
                    }, {
                        iconName: "cluster",
                        label: this.store.detail.nodes.logstash,
                        desc: t("LOGSTASH_NODE")
                    });
                } else if (app_id === RadonDBAppId.Kafka) {
                    const f = this.store.detail.specifications.kafka;
                    const p = this.store.detail.specifications.zookeeper;
                    d.push({
                        iconSrc: "/assets/radondb_kafka.svg",
                        label: this.store.detail.nodes.kafka,
                        desc: this.store.detail.nodes.kafka ? t("KAFKA_NODE") : t("KAFKA_NODE_PL")
                    }, {
                        iconName: "cpu",
                        label: `${parseFloat(f.cpu) > 500 ? t("VALUE_CORES", {
                            value: cpuFormat(f.cpu)
                        }) : f.cpu || ""} ${f.memory || ""} | ${this.store.detail.storages.kafka}`,
                        desc: t("KAFKA_RESOURCES")
                    }, {
                        iconSrc: "/assets/radondb_zookeeper.svg",
                        label: this.store.detail.nodes.zookeeper,
                        desc: this.store.detail.nodes.zookeeper === 1 ? t("ZOOKEEPER_NODE") : t("ZOOKEEPER_NODE_PL")
                    }, {
                        iconName: "cpu",
                        label: `${parseFloat(p.cpu) > 500 ? t("VALUE_CORES", {
                            value: cpuFormat(p.cpu)
                        }) : p.cpu || ""} ${p.memory || ""} | ${this.store.detail.storages.zookeeper}`,
                        desc: t("ZOOKEEPER_RESOURCES")
                    });
                } else {
                    if (app_id === RadonDBAppId.ClickHouse) {
                        d.push({
                            iconSrc: "/assets/pod.svg",
                            label: shardsCount,
                            desc: shardsCount === 1 ? t("SHARD") : t("SHARD_PL")
                        });
                        d.push({
                            iconName: "database",
                            label: replicasCount,
                            desc: replicasCount === 1 ? t("REPLICA") : t("REPLICA_PL")
                        });
                    } else if (app_id === RadonDBAppId.RedisSentinel) {
                        d.push({
                            iconSrc: "/assets/pod.svg",
                            label: 1,
                            desc: t("PRIMARY_NODE_PL")
                        });
                        d.push({
                            iconName: "database",
                            label: replicasCount,
                            desc: replicasCount === 1 ? t("STANDBY_NODE") : t("STANDBY_NODE_PL")
                        });
                    } else if (app_id === RadonDBAppId.RedisCluster) {
                        d.push({
                            iconSrc: "/assets/pod.svg",
                            label: shardsCount,
                            desc: t("PRIMARY_NODE_PL")
                        });
                        d.push({
                            iconName: "database",
                            label: replicasCount,
                            desc: replicasCount === 1 ? t("STANDBY_NODE") : t("STANDBY_NODE_PL")
                        });
                    } else {
                        const label = app_id === RadonDBAppId.PostgreSQL ? shardsCount + 1 : shardsCount;
                        d.push({
                            iconSrc: "/assets/pod.svg",
                            label,
                            desc: t("NODE_PL")
                        });
                        d.push({
                            iconName: "database",
                            label: shardsCount > 0 ? shardsCount - 1 : shardsCount,
                            desc: shardsCount - 1 == 1 ? t("REPLICA") : t("REPLICA_PL")
                        });
                    }
                    d.push({
                        iconName: "cpu",
                        label: `${parseFloat(cpu) > 500 ? `${cpuFormat(cpu)}Core` : cpu || ""} ${memory || ""}`,
                        desc: t("RESOURCES")
                    });
                    d.push({
                        iconName: "storage",
                        label: storage,
                        desc: t("VOLUME")
                    });
                }
                return <Module790 className={module4866.overview}><div><div className={module4866.title}>{t("BASIC_INFORMATION")}</div><div className={module4866.desc}>{t("DATABASE_RUNNING_FOR_VALUE", {
                    value: u.toNow(true)
                })}</div></div><div className={module4866.info}><div className={module4866.card}><div>{status ? <Module796 name={t(`DATABASE_STATUS_${status.replace(/[-\s]/g, "_").toUpperCase()}`)} type={DMPStatus[status] || status} flicker/> : "-"}<div className={module4866.desc}>{t("STATUS")}</div></div></div>{d.map(({ iconSrc, iconName, label, desc })=><div className={module4866.card} key={`${label}${desc}`}>{iconSrc && <Module836 src={iconSrc} iconSize={40}/>}{iconName && <module186.Icon name={iconName} size={40}/>}<div className={module4866.detail}><div className={module4866.label}>{label}</div><div className={module4866.desc}>{desc}</div></div></div>)}</div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const detail = this.store.detail;
                const { cluster, namespace, name, app_id } = detail;
                const { Provider: Provider_1, Consumer } = DContext;
                return <Provider_1 value={{
                    state: this.state,
                    updateState: function(t) {
                        _this.setState({
                            ..._this.state,
                            ...t
                        });
                    }
                }}><Provider Consumer={Consumer}>{this.renderPanel()}<Module4829 cluster={cluster} chi={name} namespace={namespace} prefix={this.prefix} app_id={app_id} replicasCount={this.store.detail.replicasCount} showDelete={this.hasDeleteAction} deleteNode={this.deleteNode}/></Provider></Provider_1>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        }
    ]);
    return r;
})(Component), c.contextType = DContext, o = s)) || o) || o;
export default C;
