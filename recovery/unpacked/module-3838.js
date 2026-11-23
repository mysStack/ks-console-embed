import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import { Link } from "./module-433.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { getLocalTime, hideGPUByLicense } from "./module-52.js";
import { getAreaChartOps } from "./module-795.js";
import module186 from "./module-186.js";
import Module838 from "./module-838.js";
import { TinyArea } from "./module-799.js";
import Module1219 from "./module-1219.js";
import Module805 from "./module-805.js";
import module1810 from "./module-1810.js";
const N = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.getContainerStatus = function() {
            const t = module26(e.props.detail, "status.containerStatuses") || [];
            let readyCount = 0;
            t.forEach((e)=>{
                if (e.ready) {
                    readyCount += 1;
                }
            });
            return {
                readyCount,
                total: t.length
            };
        };
        e.getUpdateStatus = function() {
            const e_props = e.props;
            const { onShowEvents, detail } = e_props;
            if (!e.isRunning) {
                const l = e.status;
                const { name, type } = l;
                return <Module805 status={type} reason={name} data={e.props.detail} type="pod" onShowEvents={onShowEvents ? function() {
                    return onShowEvents(detail);
                } : undefined}/>;
            }
            return <p>{t("CREATED_TIME", {
                diff: getLocalTime(e.props.detail.createTime).format("YYYY-MM-DD HH:mm:ss")
            })}</p>;
        };
        e.getLink = function() {
            const detail = e.props.detail;
            return `${e.props.prefix}/projects/${detail.namespace}/pods/${detail.name}`;
        };
        e.getMonitoringCfgs = function(t) {
            const cluster = e.props.detail.cluster;
            const r = [
                {
                    type: "cpu",
                    title: "CPU",
                    unitType: "cpu",
                    legend: [
                        "USED"
                    ],
                    data: [
                        t.cpu
                    ],
                    bgColor: "transparent"
                },
                {
                    type: "memory",
                    title: "MEMORY",
                    unitType: "memory",
                    legend: [
                        "USED"
                    ],
                    data: [
                        t.memory
                    ],
                    bgColor: "transparent"
                },
                {
                    type: "gpu",
                    title: "GPU",
                    unitType: "gpu",
                    legend: [
                        "USED"
                    ],
                    data: [
                        t.gpu
                    ],
                    bgColor: "transparent"
                },
                {
                    type: "gpu_memory",
                    title: "GPU_MEMORY",
                    unitType: "memory",
                    legend: [
                        "USED"
                    ],
                    data: [
                        t.gpu_memory
                    ],
                    bgColor: "transparent"
                }
            ];
            return hideGPUByLicense(r, cluster);
        };
        e.getNodeContent = function() {
            const detail = e.props.detail;
            const { cluster, node, nodeIp } = detail;
            const u = globals.app.hasPermission({
                cluster,
                module: "nodes",
                action: "view"
            });
            if (!node) {
                return "-";
            }
            const o = t("NODE_IP", {
                node,
                ip: nodeIp
            });
            if (u) {
                return <Link to={`/clusters/${cluster}/nodes/${node}`}>{o}</Link>;
            }
            return o;
        };
        e.handleExpandExtra = function() {
            const e_props = e.props;
            const t_detail = e_props.detail;
            e_props.onExpand(t_detail.uid);
        };
        e.handleLinkClick = function() {
            localStorage.setItem("pod-detail-referrer", location.pathname);
        };
        e.renderPodIPContent = function(e) {
            return <div className={module1810.ipTip}><div>{t("POD_IP_ADDRESS")}</div><ul>{e.map((e)=><li key={e}><module186.Icon name="ip" size={20} type="light"/><span>{e}</span></li>)}</ul></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderStatusTip",
            value: function() {
                const name_1 = this.props.detail.name;
                const status = this.status;
                const { type, name } = status;
                const l = this.getContainerStatus();
                const { readyCount, total } = l;
                return <module186.Tooltip content=<div className={module1810.statusTip}><strong>{name_1}</strong><p>{t("READY_VALUE", {
                    readyCount,
                    total
                })}</p><p>{t("STATUS_VALUE", {
                    value: t(name)
                })}</p></div>><Module838 className={module1810.indicator} type={type} flicker/></module186.Tooltip>;
            }
        },
        {
            key: "renderMonitorings",
            value: function() {
                const { metrics = {}, isExpand, loading, showMonitoring, detail } = this.props;
                if (!globals.app.hasClusterModule(detail.cluster, "whizard-monitoring") || !showMonitoring) {
                    return null;
                }
                const c = Object.values(metrics).every((e)=>module63(e));
                if (loading) {
                    return <div className={module1810.monitors}>{t("LOADING")}</div>;
                }
                if (c) {
                    return <div className={module1810.monitors}>{t("NO_MONITORING_DATA")}</div>;
                }
                const s = this.getMonitoringCfgs(metrics);
                return <div className={module1810.monitors}><div className={module1810.charts}>{s.map((e)=>{
                    const t = getAreaChartOps(e);
                    return <div key={e.type}><TinyArea key={e.type} width="100%" height={40} {...t} darkMode={isExpand}/></div>;
                })}</div></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { prefix, detail } = props;
                const { name, podIp } = detail;
                const e_isExpand = props.isExpand;
                return <div className={module1810.content}><div className={module1810.text}><div>{prefix ? <Link to={this.getLink()}><span onClick={this.handleLinkClick}>{name}</span></Link> : name}</div>{this.getUpdateStatus()}</div>{!(location.pathname.indexOf("/nodes") !== -1) && <div className={module1810.text}><div>{this.getNodeContent()}</div><p>{t("NODE")}</p></div>}<div className={module1810.text}><div><span>{podIp || "-"}</span>{!module63(this.networkIPs) && this.networkIPs.length > 1 && <module186.Tooltip content={this.renderPodIPContent(this.networkIPs)}><div className={module1810.podip}>{this.networkIPs.length}</div></module186.Tooltip>}</div><p>{t("POD_IP_ADDRESS_SCAP")}</p></div>{this.renderMonitorings()}<div className={module1810.arrow}><module186.Icon name="chevron-down" type={e_isExpand ? "light" : ""} size={20}/></div></div>;
            }
        },
        {
            key: "renderExtraContent",
            value: function() {
                const _this = this;
                const props = this.props;
                const { prefix, isEdgeWize } = props;
                const { cluster, containers = [], initContainers = [], name } = this.props.detail;
                if (module63(containers)) {
                    return null;
                }
                return <div className={module1810.itemExtra}><div className="margin-b8"><strong>{t("CONTAINER_PL")}</strong></div><div className={module1810.containers}>{containers.map((t)=><Module1219 isEdgeWize={isEdgeWize} key={t.name} prefix={prefix && _this.getLink()} podName={name} detail={t} cluster={cluster} onContainerClick={_this.handleLinkClick} isCreating={_this.isCreating}/>)}{initContainers.map((t)=><Module1219 key={t.name} isEdgeWize={isEdgeWize} prefix={prefix && _this.getLink()} podName={name} detail={t} cluster={cluster} onContainerClick={_this.handleLinkClick} isCreating={_this.isCreating} isInit/>)}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, isExpand } = props;
                return <div className={module3(module1810.item, className, module31({}, module1810.expanded, isExpand))}><div className={module1810.itemMain} onClick={this.handleExpandExtra}><div className={module1810.icon}><module186.Icon name="pod" size={40} type={isExpand ? "light" : "dark"}/>{this.renderStatusTip()}</div>{this.renderContent()}</div>{this.renderExtraContent()}</div>;
            }
        },
        {
            key: "status",
            get: function() {
                const podStatus = this.props.detail.podStatus;
                const e_status = podStatus.status;
                return {
                    type: podStatus.type.toLowerCase(),
                    name: e_status
                };
            }
        },
        {
            key: "isCreating",
            get: function() {
                return this.status.type === "warning" && this.status.name === "ContainerCreating";
            }
        },
        {
            key: "isRunning",
            get: function() {
                return this.status.type === "running" || this.status.type === "completed";
            }
        },
        {
            key: "networkIPs",
            get: function() {
                return this.props.detail.networksStatus.reduce((acc, item)=>{
                    if (item.ips) {
                        return [].concat(module61(acc), module61(item.ips));
                    }
                    return module61(acc);
                }, []);
            }
        }
    ]);
    return r;
})(PureComponent);
export default N;
N.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    prefix: module1.string,
    detail: module1.object,
    metrics: module1.object,
    loading: module1.bool,
    isExpand: module1.bool,
    onExpand: module1.func,
    onShowEvents: module1.func,
    showMonitoring: module1.bool
};
N.defaultProps = {
    prefix: "",
    detail: {},
    isEdgeWize: false,
    isExpand: false,
    onExpand: function() {},
    showMonitoring: true
};
