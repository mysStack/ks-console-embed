import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import Module838 from "./module-838.js";
import Module797 from "./module-797.js";
import module240 from "./module-240.js";
import { getLocalTime } from "./module-52.js";
import module1026 from "./module-1026.js";
import module4636 from "./module-4636.js";
let o;
let c;
let s;
const C = observer((s = c = ((Component_1)=>{
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
        e.name = "microserviceinstances";
        e.module = "microserviceinstances";
        e.authKey = "springcloud-microservices";
        e.store = new module1026;
        e.getData = function() {
            const e_props = e.props;
            const { serviceName, cluster, namespace } = e_props;
            e.store.fetchList({
                cluster,
                namespace,
                labelSelector: `springcloud.kubesphere.io/app=${serviceName}`,
                limit: -1
            });
        };
        e.addWeightToSpec = function(t) {
            let a;
            const weight = module26(t, "spec.weight");
            const n = module26(t, "spec.podName");
            const o = module26(t, "spec.namespace");
            const c = module14.toJS(e.store.list.data);
            const s = [];
            c.forEach((e)=>{
                if (e.namespace === o && e.podName === n) {
                    a = {
                        ...e
                    };
                } else {
                    s.push({
                        ...e
                    });
                }
            });
            e.store.list.update({
                data: [].concat(s, [
                    {
                        ...a,
                        weight
                    }
                ])
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "podName",
                    render: e.renderAvatar
                },
                {
                    title: t("WEIGHT"),
                    dataIndex: "weight",
                    width: "15%"
                },
                {
                    title: t("IP_ADDRESS"),
                    dataIndex: "ip",
                    width: "15%"
                },
                {
                    title: t("PORT"),
                    dataIndex: "port",
                    width: "15%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "podStartTime",
                    width: "15%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.renderAvatar = function(a, { enabled, instanceId }) {
            const e_props = e.props;
            const { workspace, cluster, namespace } = e_props;
            return <div className={module4636.avatar}><div className={module4636.icon}><module186.Icon name="pod" size={40}/><Module838 className={module4636.indicator} type={enabled ? "running" : "stopped"} flicker/></div><div><Link className={module4636.title} to={`/${workspace}/clusters/${cluster}/projects/${namespace}/microservice-instances/${a}/${encodeURIComponent(instanceId)}`}>{a}</Link><div className={module4636.desc}>{enabled ? t("MICROSERVICE_INSTANCE_STATUS_RUNNING") : t("MICROSERVICE_INSTANCE_STATUS_OFFLINE")}</div></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { serviceStatus, isRefresh } = props;
                if (e.serviceStatus !== serviceStatus || e.isRefresh !== isRefresh && isRefresh) {
                    this.getData();
                }
            }
        },
        {
            key: "renderEmptyText",
            value: function() {
                return <div className={module4636.emptyText}><span className={module4636.emptyTipIcon}><module186.Icon name="exclamation" size={48}/></span><div>{t("NO_MATCHING_RESULT_FOUND")}</div><p>{t("YOU_CAN_TRY_TO")}<span className={module4636.action} onClick={this.getData}>{t("REFRESH_DATA")}</span></p></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.store.list;
                const { data, isLoading } = list;
                return <Module797 className={module4636.table} hideHeader hideFooter module={this.module} name={this.name} data={data} isLoading={isLoading} columns={this.getColumns()} itemActions={this.itemActions} enabledActions={this.enabledActions} emptyText={this.renderEmptyText()} rowKey="podName"/>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const props = this.props;
                const { cluster, namespace } = props;
                return globals.app.getActions({
                    module: this.authKey,
                    cluster,
                    project: namespace
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                return [
                    {
                        key: "offline",
                        icon: "circle-down",
                        text: t("TAKE_OFFLINE"),
                        action: "edit",
                        show: function(e) {
                            return e.specEnabled;
                        },
                        onClick: function(a) {
                            return _this.store.offLine(a).then(()=>{
                                setTimeout(()=>{
                                    module240.success({
                                        content: t("TAKE_OFFLINE_SUCCESS")
                                    });
                                    _this.getData();
                                }, 1000);
                            });
                        }
                    },
                    {
                        key: "online",
                        icon: "circle-up",
                        text: t("TAKE_ONLINE"),
                        action: "edit",
                        show: function(e) {
                            return !e.specEnabled;
                        },
                        onClick: function(a) {
                            return _this.store.onLine(a).then(()=>{
                                setTimeout(()=>{
                                    module240.success({
                                        content: t("TAKE_ONLINE_SUCCESS")
                                    });
                                    _this.getData();
                                }, 1000);
                            });
                        }
                    },
                    {
                        key: "weight",
                        icon: "pen",
                        text: t("EDIT_WEIGHT"),
                        action: "edit",
                        onClick: function(detail) {
                            _this.props.trigger("microservice.instance.weight.edit", {
                                title: t("EDIT_WEIGHT"),
                                detail,
                                store: _this.store,
                                namespace: detail.namespace,
                                cluster: detail.cluster,
                                success: _this.addWeightToSpec
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component), c.propTypes = {
    serviceName: module1.string
}, c.defaultProps = {
    serviceName: ""
}, o = s)) || o;
export default C;
