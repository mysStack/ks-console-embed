import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { getLocalTime } from "utils/index";
import { getAreaChartOps } from "utils/monitoring";
import module186 from "unpacked/module-186.js";
import Module838 from "components/Base/Indicator";
import { TinyArea } from "components/Charts/index";
import Module1219 from "components/Cards/Containers/Item";
import Module805 from "unpacked/module-805.js";
import module1853 from "unpacked/module-1853.js";
const A = ((PureComponent_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
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
            if (!e.isRunning) {
                const a = e.status;
                const { name, type } = a;
                return <Module805 status={type} reason={name} data={e.props.detail} type="pod"/>;
            }
            return <p>{t("CREATED_AGO", {
                diff: getLocalTime(e.props.detail.createTime).fromNow()
            })}</p>;
        };
        e.getLink = function() {
            const detail = e.props.detail;
            return `${e.props.prefix}/projects/${detail.namespace}/pods/${detail.name}`;
        };
        e.getMonitoringCfgs = function(e) {
            return [
                {
                    type: "cpu",
                    title: "CPU",
                    unitType: "cpu",
                    legend: [
                        "USED"
                    ],
                    data: [
                        e.cpu
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
                        e.memory
                    ],
                    bgColor: "transparent"
                }
            ];
        };
        e.getNodeContent = function() {
            const detail = e.props.detail;
            const { cluster, node, nodeIp } = detail;
            const l = globals.app.hasPermission({
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
            if (l) {
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
            return <div className={module1853.ipTip}><div>{t("POD_IP_ADDRESS")}</div><ul>{e.map((e)=><li key={e}><module186.Icon name="ip" size={20} type="light"/><span>{e}</span></li>)}</ul></div>;
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
                const u = this.getContainerStatus();
                const { readyCount, total } = u;
                return <module186.Tooltip content=<div className={module1853.statusTip}><strong>{name_1}</strong><p>{t("READY")}: {readyCount}/{total}</p><p>{t("STATUS")}: {t(name)}</p></div>><Module838 className={module1853.indicator} type={type} flicker/></module186.Tooltip>;
            }
        },
        {
            key: "renderMonitorings",
            value: function() {
                const props = this.props;
                const e_metrics = props.metrics;
                const r = e_metrics === undefined ? {} : e_metrics;
                const e_isExpand = props.isExpand;
                if (props.loading) {
                    return <div className={module1853.monitors}>{t("LOADING")}</div>;
                }
                if (module63(r.cpu) && module63(r.memory)) {
                    return <div className={module1853.monitors}>{t("NO_MONITORING_DATA")}</div>;
                }
                const u = this.getMonitoringCfgs(r);
                return <div className={module1853.monitors}><div className={module1853.charts}>{u.map((e)=>{
                    const t = getAreaChartOps(e);
                    return <TinyArea key={e.type} width="50%" height={40} {...t} darkMode={e_isExpand}/>;
                })}</div></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const e_detail = props.detail;
                const { name, podIp } = e_detail;
                const e_isExpand = props.isExpand;
                return <div className={module1853.content}><div className={module1853.text}><div><span onClick={this.handleLinkClick}>{name}</span></div>{this.getUpdateStatus()}</div>{!(location.pathname.indexOf("/nodes") !== -1) && <div className={module1853.text}><div>{this.getNodeContent()}</div><p>{t("NODE")}</p></div>}<div className={module1853.text}><div><span>{podIp || "-"}</span>{!module63(this.networkIPs) && this.networkIPs.length > 1 && <module186.Tooltip content={this.renderPodIPContent(this.networkIPs)}><div className={module1853.podip}>{this.networkIPs.length}</div></module186.Tooltip>}</div><p>{t("POD_IP_ADDRESS_SCAP")}</p></div>{this.renderMonitorings()}<div className={module1853.arrow}><module186.Icon name="chevron-down" type={e_isExpand ? "light" : ""} size={20}/></div></div>;
            }
        },
        {
            key: "renderExtraContent",
            value: function() {
                const _this = this;
                const prefix = this.props.prefix;
                const { cluster, containers = [], initContainers = [], name } = this.props.detail;
                if (module63(containers)) {
                    return null;
                }
                const prefix_1 = globals.app.hasPermission({
                    module: "clusters",
                    action: "view"
                }) && prefix ? this.getLink() : "";
                return <div className={module1853.itemExtra}><div className="margin-b8"><strong>{t("CONTAINER_PL")}</strong></div><div className={module1853.containers}>{containers.map((t)=><Module1219 key={t.name} prefix={prefix_1} podName={name} detail={t} cluster={cluster} onContainerClick={_this.handleLinkClick} isCreating={_this.isCreating} hideterminal/>)}{initContainers.map((t)=><Module1219 key={t.name} prefix={prefix_1} podName={name} detail={t} cluster={cluster} onContainerClick={_this.handleLinkClick} isCreating={_this.isCreating} isInit hideterminal/>)}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, isExpand } = props;
                return <div className={module3(module1853.item, className, module31({}, module1853.expanded, isExpand))}><div className={module1853.itemMain} onClick={this.handleExpandExtra}><div className={module1853.icon}><module186.Icon name="pod" size={40} type={isExpand ? "light" : "dark"}/>{this.renderStatusTip()}</div>{this.renderContent()}</div>{this.renderExtraContent()}</div>;
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
                return this.props.detail.networksStatus.reduce((acc, item)=>[].concat(module61(acc), module61(item.ips)), []);
            }
        }
    ]);
    return r;
})(PureComponent);
export default A;
A.propTypes = {
    className: module1.string,
    prefix: module1.string,
    detail: module1.object,
    metrics: module1.object,
    loading: module1.bool,
    isExpand: module1.bool,
    onExpand: module1.func
};
A.defaultProps = {
    prefix: "",
    detail: {},
    isExpand: false,
    onExpand: function() {}
};
