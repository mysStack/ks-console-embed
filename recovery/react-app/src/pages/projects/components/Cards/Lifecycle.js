import "unpacked/module-15.js";
import "unpacked/module-73.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module814 from "components/Base/List";
import Module790 from "components/Base/Panel";
import module3905 from "unpacked/module-3905.js";
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
                const lifecycle = this.props.detail.lifecycle;
                if (!lifecycle) {
                    return null;
                }
                const { postStart, preStop } = lifecycle;
                return <div className={module3905.probe}>{this.renderProbeRecord({
                    probe: postStart,
                    title: t("POSTSTART_ACTION"),
                    tagType: "primary"
                })}{this.renderProbeRecord({
                    probe: preStop,
                    title: t("PRESTOP_ACTION"),
                    tagType: "warning"
                })}</div>;
            }
        },
        {
            key: "renderProbeRecord",
            value: function({ probe, title, tagType }) {
                if (!probe) {
                    return null;
                }
                let l;
                let details = [];
                if ("httpGet" in probe) {
                    const o = probe.httpGet;
                    const { path, port } = o;
                    l = "HTTP_REQUEST";
                    details = [
                        {
                            title: o.scheme,
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
                    const p = probe.exec.command;
                    l = "COMMAND";
                    details = [
                        {
                            title: (p === undefined ? [] : p).join(" "),
                            description: t("COMMANDS")
                        }
                    ];
                }
                const title_1 = <><module186.Tag type={tagType}>{title}</module186.Tag><span className={module3905.probeType}>{t(l)}</span></>;
                return <module814.Item titleClass={module3905.title} icon="monitor" title={title_1} details={details}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <Module790 title={t("LIFECYCLE_MANAGEMENT")}><div className={module3905.wrapper}>{this.renderProbe()}</div></Module790>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
