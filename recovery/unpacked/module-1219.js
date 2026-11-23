import "./module-15.js";
import "./module-5.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module159 from "./module-159.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module838 from "./module-838.js";
import { createCenterWindowOpt } from "./module-453.js";
import { getContainerStatus } from "./module-434.js";
import Module3839 from "./module-3839.js";
import module1809 from "./module-1809.js";
const C = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            showContainerLog: false
        };
        e.getLink = function(t) {
            return `${e.props.prefix}/containers/${t}`;
        };
        e.handleOpenTerminal = function() {
            const e_props = e.props;
            const { cluster, podName, isEdgeWize } = e_props;
            const detail = e.props.detail;
            const { namespace, name } = detail;
            const i = `/terminal${isEdgeWize ? "/v2/edgewize" : "/cluster"}/${cluster}/projects/${namespace}/pods/${podName}/containers/${name}`;
            window.open(i, `Connecting ${name}`, createCenterWindowOpt({
                width: 1200,
                height: 800,
                scrollbars: 1,
                resizable: 1
            }));
        };
        e.showContainerLog = function() {
            e.setState({
                showContainerLog: true
            });
        };
        e.hideContainerLog = function() {
            e.setState({
                showContainerLog: false
            });
        };
        e.renderLife = function() {
            const lifecycle = e.props.detail.lifecycle;
            const { preStop, postStart } = lifecycle;
            if (lifecycle) {
                return <div className={module1809.probe}>{e.renderProbeRecord({
                    probe: postStart,
                    title: t("POSTSTART_ACTION"),
                    tagType: "primary",
                    noTime: true
                })}{e.renderProbeRecord({
                    probe: preStop,
                    title: t("PRESTOP_ACTION"),
                    tagType: "warning",
                    noTime: true
                })}</div>;
            }
            return null;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderProbe",
            value: function() {
                const detail = this.props.detail;
                const { livenessProbe, readinessProbe, startupProbe } = detail;
                if (livenessProbe || readinessProbe || startupProbe) {
                    return <div className={module1809.probe}>{this.renderProbeRecord({
                        probe: readinessProbe,
                        title: t("READINESS_PROBE"),
                        tagType: "primary"
                    })}{this.renderProbeRecord({
                        probe: livenessProbe,
                        title: t("LIVENESS_PROBE"),
                        tagType: "warning"
                    })}{this.renderProbeRecord({
                        probe: startupProbe,
                        title: t("STARTUP_PROBE"),
                        tagType: "info"
                    })}</div>;
                }
                return null;
            }
        },
        {
            key: "renderProbeRecord",
            value: function({ probe, title, tagType, noTime }) {
                const u = noTime !== undefined && noTime;
                if (!probe) {
                    return null;
                }
                let o;
                let i;
                const delay = probe.initialDelaySeconds || 0;
                const timeout = probe.timeoutSeconds || 0;
                if ("httpGet" in probe) {
                    const f = probe.httpGet;
                    const { path, port, scheme } = f;
                    o = "HTTP_REQUEST";
                    i = `GET ${path} on port ${port} (${scheme})`;
                } else if ("tcpSocket" in probe) {
                    o = "TCP_PORT";
                    i = `Open socket on port ${probe.tcpSocket.port} (TCP)`;
                } else if ("grpc" in probe) {
                    o = "GRPC_PORT";
                    i = `Open grpc on port ${probe.grpc.port} (GRPC)`;
                } else {
                    const v = probe.exec.command;
                    o = "COMMAND";
                    i = (v === undefined ? [] : v).join(" ");
                }
                return <div className={module1809.probeItem}><div><module186.Tag type={tagType}>{title}</module186.Tag><span className={module1809.probeType}>{t(o)}</span><br/>{!u && <span className={module1809.probeTime}>{t("INITIAL_DELAY_TIMEOUT_VALUE", {
                    delay,
                    timeout
                })}</span>}</div><p>{i}</p></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, detail, isCreating, prefix, podName, cluster, isInit, isEdgeWize, onContainerClick, hideLink = false, ...rest } = props;
                const showContainerLog = this.state.showContainerLog;
                const to = this.getLink(detail.name);
                const T = getContainerStatus(detail);
                const { status, reason } = T;
                const w = detail.livenessProbe || detail.readinessProbe || detail.startupProbe;
                const M = detail.lifecycle && !module63(detail.lifecycle);
                return <div className={module3(module1809.item, className)} {...rest}><div className={module1809.icon}><module186.Icon name="docker" size={40}/>{!module159(detail.ready) && <Module838 className={module1809.indicator} type={status} flicker/>}</div><div className={module3(module1809.text, module1809.name)}><div>{prefix && status !== "terminated" && !hideLink ? <Link to={to}><span onClick={onContainerClick}>{detail.name}</span></Link> : <span className={module1809.noLink}>{detail.name}</span>}{prefix && !isCreating && <module186.Tooltip content={t("CONTAINER_LOGS")}><module186.Icon className="margin-l8" name="log" size={16} clickable onClick={this.showContainerLog}/></module186.Tooltip>}{status === "running" && prefix && this.canViewTerminal && <module186.Tooltip content={t("TERMINAL")}><module186.Icon className="margin-l8" name="terminal" size={16} clickable onClick={this.handleOpenTerminal}/></module186.Tooltip>}{isInit && <module186.Tag className="margin-l8" type="warning">{t("INIT_CONTAINER")}</module186.Tag>}{w && <module186.Tooltip content={this.renderProbe()}><module186.Tag className="margin-l8">{t("PROBE_PL")}</module186.Tag></module186.Tooltip>}{M && <module186.Tooltip content={this.renderLife()}><module186.Tag color="#55BC8A" className="margin-l8">{t("HOOK_PL")}</module186.Tag></module186.Tooltip>}</div>{reason ? <p>{t(reason)}</p> : <p>{t("IMAGE_VALUE", {
                    value: detail.image
                })}</p>}</div><div className={module1809.text}><div>{module159(status) ? "-" : t(status.toUpperCase())}</div><p>{t("STATUS")}</p></div><div className={module1809.text}><div>{module159(detail.restartCount) ? "-" : detail.restartCount}</div><p>{module159(detail.restartCount) || detail.restartCount !== 1 ? t("RESTART_PL") : t("RESTART")}</p></div><div className={module1809.text}><div>{module63(detail.ports) ? "-" : detail.ports.map((e)=>`${e.containerPort}/${e.protocol}`).join(", ")}</div><p>{module63(detail.ports) || detail.ports.length !== 1 ? t("PORT_PL") : t("PORT")}</p></div><Module3839 isEdgeWize={isEdgeWize} visible={showContainerLog} podName={podName} container={detail} cluster={cluster} onCancel={this.hideContainerLog}/></div>;
            }
        },
        {
            key: "canViewTerminal",
            get: function() {
                const props = this.props;
                const { cluster, hideterminal, isEdgeWize } = props;
                const namespace = this.props.detail.namespace;
                return !hideterminal && globals.app.hasPermission({
                    skipAuth: isEdgeWize,
                    module: "pods",
                    project: namespace,
                    action: "edit",
                    cluster
                });
            }
        }
    ]);
    return r;
})(Component);
export default C;
C.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    prefix: module1.string,
    detail: module1.object,
    podName: module1.string,
    isCreating: module1.bool
};
C.defaultProps = {
    prefix: "",
    detail: {},
    isCreating: false
};
