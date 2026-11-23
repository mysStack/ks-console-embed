import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-64.js";
import "./module-75.js";
import "./module-813.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module41 from "./module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module967 from "components/Inputs/UnitSlider";
import module788 from "components/Base/Modal";
import module1198 from "./module-1198.js";
import module984 from "./module-984.js";
import { RadonDBAppId, SpecificationOptionsObject, SpecificationsOptions, getNodeRoleOptions, validateStorage } from "./module-817.js";
const R = ((e)=>{
    module55(r, e);
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
        n.handleChange = function(shardsCount_1) {
            let errorMessage = "";
            if (n.oldShardsCount > shardsCount_1 && ![
                RadonDBAppId.MySQL,
                RadonDBAppId.PostgreSQL,
                RadonDBAppId.RedisCluster,
                RadonDBAppId.RedisSentinel,
                RadonDBAppId.MongoDB,
                RadonDBAppId.Elasticsearch,
                RadonDBAppId.OpenSearch
            ].includes(n.props.app_id)) {
                errorMessage = t("CANNOT_REDUCE_DATABASE_NODES");
            }
            if (shardsCount_1 === "") {
                errorMessage = t("ENTER_POSITIVE_INTEGER_DESC");
            }
            n.setState({
                shardsCount: shardsCount_1,
                errorMessage
            });
        };
        n.onOk = module44(module41.mark(function e() {
            let t;
            let workspace;
            let namespace;
            let cluster;
            let cluster_id;
            let u;
            let specifications;
            let i;
            let f;
            let d;
            let p;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            t = n.props;
                            workspace = t.workspace;
                            namespace = t.namespace;
                            cluster = t.cluster;
                            cluster_id = t.cluster_id;
                            u = n.state;
                            specifications = u.specifications;
                            i = u.nodeRole;
                            f = u.errorMessage;
                            d = u.storageErrorMessage;
                            p = u.storage;
                            if (!f && !d) {
                                e.next = 4;
                                break;
                            }
                            return e.abrupt("return");
                        case 4:
                            e.next = 6;
                            return n.props.store.updateShardsCount({
                                workspace,
                                namespace,
                                cluster,
                                cluster_id,
                                shardsCount: n.state.shardsCount,
                                nodeRole: i,
                                specifications,
                                storage: p
                            });
                        case 6:
                            n.props.onOk(n.oldShardsCount > n.state.shardsCount);
                        case 7:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.onCancel = function() {
            n.props.onCancel();
        };
        n.onRoleChange = function(e) {
            const { nodes = {}, specificationsObject = {}, storages = {}, app_id } = n.props;
            n.oldShardsCount = nodes[e];
            switch(app_id){
                case RadonDBAppId.Elasticsearch:
                    n.input.range = e === "kibana" ? {
                        min: 0,
                        max: 8
                    } : {
                        min: n.oldShardsCount === 0 ? n.oldShardsCount : 1,
                        max: 200
                    };
                    break;
                case RadonDBAppId.RedisCluster:
                    n.input.range = e === "proxy" ? {
                        min: 0,
                        max: 50
                    } : {
                        min: 3,
                        max: 50
                    };
                    break;
                case RadonDBAppId.Kafka:
                    n.input = e === "zookeeper" ? {
                        type: "select",
                        title: "NODE_COUNT",
                        description: " ",
                        options: [
                            1,
                            3,
                            5,
                            7,
                            9
                        ].map((e)=>({
                                label: e,
                                value: e
                            }))
                    } : {
                        type: "integer",
                        title: "NODE_COUNT",
                        range: {
                            min: 1,
                            max: 100
                        },
                        showFunc: true
                    };
                    break;
                case RadonDBAppId.OpenSearch:
                    n.input.range = e === "dashboard" ? {
                        min: 0,
                        max: 8
                    } : e === "logstash" ? {
                        min: 0,
                        max: 10
                    } : {
                        min: n.oldShardsCount === 0 ? n.oldShardsCount : 1,
                        max: 200
                    };
            }
            const i = specificationsObject[e] || {};
            const { cpu, memory } = i;
            n.setSpecificationsOptions(e);
            const storage_1 = storages[e] || {};
            n.setState({
                nodeRole: e,
                shardsCount: nodes[e],
                specifications: `${cpu}, ${memory}`,
                storage: storage_1,
                errorMessage: ""
            });
        };
        n.onSpecificationsChange = function(specifications) {
            n.setState({
                specifications
            });
        };
        n.onStorageChange = function(e) {
            const message = validateStorage(e, {
                app_id: n.props.app_id
            }).message;
            const storageErrorMessage = message === undefined ? "" : message;
            const r = parseFloat(e);
            if (e && r > 0 && e.trim().startsWith("0")) {
                n.setState({
                    storage: e.replace(/^0*/, ""),
                    storageErrorMessage
                });
            } else {
                n.setState({
                    storage: e,
                    storageErrorMessage
                });
            }
        };
        const { shardsCount, nodes, specificationsObject, storages, storage, app_id } = e;
        n.roleOptions = getNodeRoleOptions(app_id, "node").map((e)=>({
                ...e,
                disabled: module26(nodes, e.value) === undefined
            }));
        const m = module26(n.roleOptions, "[0].value", "");
        const v = (specificationsObject || {})[m] || {};
        const { cpu, memory } = v;
        n.state = {
            shardsCount: nodes ? nodes[m] : shardsCount,
            specifications: `${cpu || n.props.cpu}, ${memory || n.props.memory}`,
            storage: storages ? storages[m] : storage,
            nodeRole: m,
            errorMessage: "",
            storageErrorMessage: ""
        };
        switch(app_id){
            case RadonDBAppId.ClickHouse:
                n.input = {
                    type: "integer",
                    title: "SHARD_COUNT",
                    description: "SHARDS_DESC",
                    range: {
                        min: 1,
                        max: 100
                    },
                    showFunc: true
                };
                break;
            case RadonDBAppId.MySQL:
                n.input = {
                    type: "select",
                    title: "NODE_COUNT",
                    description: "MYSQL_NODES_DESC",
                    options: [
                        2,
                        3,
                        5
                    ].map((e)=>({
                            label: e,
                            value: e
                        }))
                };
                break;
            case RadonDBAppId.PostgreSQL:
                n.input = {
                    type: "integer",
                    title: "DATA_NODE_COUNT",
                    range: {
                        min: 2,
                        max: 8
                    },
                    showFunc: true
                };
                break;
            case RadonDBAppId.RedisCluster:
                n.input = {
                    type: "integer",
                    title: "NODE_COUNT",
                    range: {
                        min: 3,
                        max: 50
                    },
                    showFunc: true
                };
                break;
            case RadonDBAppId.RedisSentinel:
                n.input = {
                    type: "select",
                    title: "NODE_COUNT",
                    description: "REDIS_SENTINEL_NODES_DESC",
                    options: [
                        3,
                        5,
                        7
                    ].map((e)=>({
                            label: e,
                            value: e
                        }))
                };
                break;
            case RadonDBAppId.MongoDB:
                n.input = {
                    type: "select",
                    title: "NODE_COUNT",
                    description: "MONGODB_NODES_DESC",
                    options: [
                        1,
                        3,
                        5,
                        7
                    ].map((e)=>({
                            label: e,
                            value: e
                        }))
                };
                break;
            case RadonDBAppId.Elasticsearch:
                n.input = {
                    type: "integer",
                    title: "NODE_COUNT",
                    range: {
                        min: n.oldShardsCount === 0 ? n.oldShardsCount : 1,
                        max: 200
                    },
                    showFunc: true
                };
                break;
            case RadonDBAppId.Kafka:
                n.input = {
                    type: "integer",
                    title: "NODE_COUNT",
                    range: {
                        min: 3,
                        max: 100
                    },
                    showFunc: true
                };
                break;
            case RadonDBAppId.OpenSearch:
                n.input = {
                    type: "integer",
                    title: "NODE_COUNT",
                    range: {
                        min: n.oldShardsCount === 0 ? n.oldShardsCount : 1,
                        max: 200
                    },
                    showFunc: true
                };
                break;
            default:
                n.input = {
                    range: {}
                };
        }
        n.setSpecificationsOptions(m);
        n.oldShardsCount = n.state.shardsCount;
        return n;
    }
    module37(r, [
        {
            key: "setSpecificationsOptions",
            value: function(e) {
                this.specificationsOptions = this.props.specificationsObject ? SpecificationOptionsObject[this.props.app_id][e] : SpecificationOptionsObject[this.props.app_id] || SpecificationsOptions;
            }
        },
        {
            key: "render",
            value: function() {
                const e = {
                    ...this.props
                };
                const input = this.input;
                const { description, type, title, options, range, showFunc } = input;
                const state = this.state;
                const { errorMessage, nodeRole, shardsCount, storageErrorMessage } = state;
                const h = errorMessage ? {
                    message: errorMessage
                } : null;
                const y = storageErrorMessage ? {
                    message: storageErrorMessage
                } : null;
                const O = this.oldShardsCount === 0 && this.state.shardsCount !== 0;
                const C = O && ![
                    "kibana",
                    "proxy",
                    "dashboard",
                    "logstash"
                ].includes(nodeRole);
                return module553.default.createElement(module788, {
                    width: 600,
                    footerClassName: module984.footer,
                    ...e,
                    onOk: this.onOk,
                    onCancel: this.onCancel
                }, module553.default.createElement(module186.Alert, {
                    className: module984.alert,
                    type: "warning",
                    message: t("DATABASE_OPERATION_WARNING")
                }), module553.default.createElement(module186.Form, {
                    className: module984.form
                }, nodeRole && module553.default.createElement(module186.Form.Item, {
                    label: t("NODE_ROLE")
                }, module553.default.createElement(module186.Select, {
                    name: "nodeRole",
                    value: nodeRole,
                    defaultValue: nodeRole,
                    options: this.roleOptions,
                    onChange: this.onRoleChange
                })), module553.default.createElement(module186.Form.Item, {
                    label: t(title),
                    desc: description ? t(description) : t("NODE_COUNT_DESC", {
                        min: range.min,
                        max: range.max
                    }),
                    error: h
                }, type === "select" ? module553.default.createElement(module186.Select, {
                    value: shardsCount,
                    defaultValue: shardsCount,
                    onChange: this.handleChange,
                    options: options.map((e)=>({
                            ...e,
                            label: typeof e.label === "number" ? e.label : t(e.label)
                        }))
                }) : module553.default.createElement(module1198, {
                    value: shardsCount,
                    onChange: this.handleChange,
                    min: range.min,
                    max: range.max,
                    showFunc,
                    integer: true
                })), O && module553.default.createElement(module186.Form.Item, {
                    label: t("RESOURCES"),
                    desc: t("RESOURCES_DESC")
                }, module553.default.createElement(module186.Select, {
                    name: "specifications",
                    value: this.state.specifications,
                    defaultValue: this.state.specifications,
                    options: this.specificationsOptions,
                    onChange: this.onSpecificationsChange
                })), C && module553.default.createElement(module186.Form.Item, {
                    label: t("VOLUME"),
                    error: y
                }, module553.default.createElement(module967, {
                    max: 2048,
                    marks: {
                        0: "0",
                        512: "512 Gi",
                        1024: "1024 Gi",
                        1536: "1536 Gi",
                        2048: "2048 Gi"
                    },
                    value: this.state.storage,
                    unit: "Gi",
                    onChange: this.onStorageChange,
                    withInput: true
                }))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default R;
R.propTypes = {
    specificationsObject: module1.object,
    shardsCount: module1.number,
    onOk: module1.func,
    onCancel: module1.func,
    app_id: module1.string
};
R.defaultProps = {
    shardsCount: 1,
    onOk: function() {},
    onCancel: function() {}
};
