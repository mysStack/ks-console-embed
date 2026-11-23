import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module189 from "unpacked/module-189.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import Module790 from "components/Base/Panel";
import Module791 from "components/Base/Text";
import Module816 from "components/Clusters/ClusterTitle";
import Module5020 from "pages/projects/components/Cards/Annotations";
import module834 from "stores/gateway";
import Module1981 from "unpacked/module-1981.js";
import module5022 from "unpacked/module-5022.js";
let c;
const C = observer(c = ((Component_1)=>{
    module55(n, Component_1);
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...r) {
        let e;
        module36(this, n);
        e = a.call(this, ...r);
        e.store = new module834;
        e.state = {
            gateway: {}
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getGateway();
            }
        },
        {
            key: "getGateway",
            value: async function() {
                let t;
                let r;
                let namespace;
                let n;
                t = this.props;
                r = t.cluster;
                namespace = t.namespace;
                n = await this.store.getGatewayByProject({
                    cluster: r.name,
                    namespace
                });
                this.setState({
                    gateway: n[0] || n[1] || n[2] || {}
                });
            }
        },
        {
            key: "getNodePorts",
            value: function(e) {
                if (e.ports) {
                    return e.ports.map((e)=>`${e.name.toUpperCase()}: ${e.nodePort}`).join("/");
                }
                return "-";
            }
        },
        {
            key: "getExternalIP",
            value: function(e) {
                let t = "-";
                if (module63(e.loadBalancerIngress)) {
                    if (!module63(e.externalIPs)) {
                        t = e.externalIPs.join("; ");
                    }
                } else {
                    t = e.loadBalancerIngress.join("; ");
                }
                return t || "-";
            }
        },
        {
            key: "renderRules",
            value: function() {
                const props = this.props;
                const { workspace, namespace, detail } = props;
                const gateway = module14.toJS(this.state.gateway) || {};
                if (!detail || module63(detail.rules)) {
                    return t("NO_DATA");
                }
                const tls = detail.tls || [];
                return <div className={module5022.rules}>{detail.rules.map((rule)=><Module1981 key={rule.host} tls={tls} rule={rule} gateway={gateway} prefix={`/${workspace}/federatedprojects/${namespace}`}/>)}</div>;
            }
        },
        {
            key: "renderAnnotations",
            value: function() {
                const detail = this.props.detail;
                if (detail) {
                    return <Module5020 data={module189(detail.annotations, [
                        "displayName",
                        "desc",
                        "creator"
                    ])}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const cluster = this.props.cluster;
                const r = module14.toJS(this.state.gateway) || {};
                return <Module790><div className={module5022.header}><div className={module5022.cluster}><Module816 cluster={cluster} theme="light" tagClass="float-right"/></div><Module791 icon="eip-pool" title={r.type} description={t("GATEWAY_ACCESS_MODE")}/>{r.type === "NodePort" ? <><Module791 title={r.loadBalancerIngress || "-"} description={t("GATEWAY_IP_ADDRESS")}/><Module791 title={this.getNodePorts(r)} description={t("NODE_PORTS_SCAP")}/></> : <Module791 title={this.getExternalIP(r)} description={t("EXTERNAL_IP_ADDRESS")}/>}</div><div className={module5022.content}>{this.renderRules()}{this.renderAnnotations()}</div></Module790>;
            }
        }
    ]);
    return n;
})(Component)) || c;
export default C;
