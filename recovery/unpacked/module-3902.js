import "./module-15.js";
import "./module-73.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module814 from "./module-814.js";
import Module790 from "./module-790.js";
import module3903 from "./module-3903.js";
const h = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderProbe",
            value: function() {
                const detail = this.props.detail;
                const { livenessProbe, readinessProbe, startupProbe } = detail;
                if (livenessProbe || readinessProbe || startupProbe) {
                    return <div className={module3903.probe}>{this.renderProbeRecord({
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
            value: function({ probe, title, tagType }) {
                if (!probe) {
                    return null;
                }
                let l;
                const delay = probe.initialDelaySeconds || 0;
                const timeout = probe.timeoutSeconds || 0;
                let details = [];
                if ("httpGet" in probe) {
                    const c = probe.httpGet;
                    const { path, port } = c;
                    l = "HTTP_REQUEST";
                    details = [
                        {
                            title: c.scheme,
                            description: t("REQUEST_TYPE")
                        },
                        {
                            title: path,
                            description: t("PATH")
                        },
                        {
                            title: port,
                            description: t("PORT")
                        }
                    ];
                } else if ("tcpSocket" in probe) {
                    l = "TCP_PORT";
                    details = [
                        {
                            title: probe.tcpSocket.port,
                            description: t("PORT")
                        }
                    ];
                } else if ("grpc" in probe) {
                    l = "GRPC_PORT";
                    details = [
                        {
                            title: probe.grpc.port,
                            description: t("PORT")
                        }
                    ];
                } else {
                    const v = probe.exec.command;
                    l = "COMMAND";
                    details = [
                        {
                            title: (v === undefined ? [] : v).join(" "),
                            description: t("COMMANDS")
                        }
                    ];
                }
                const title_1 = <><module186.Tag type={tagType}>{title}</module186.Tag><span className={module3903.probeType}>{t(l)}</span></>;
                const description = <span>{t("INITIAL_DELAY_TIMEOUT_VALUE", {
                    delay,
                    timeout
                })}</span>;
                return <module814.Item icon="monitor" title={title_1} description={description} details={details}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <Module790 title={t("HEALTH_CHECK")}><div className={module3903.wrapper}>{this.renderProbe()}</div></Module790>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
