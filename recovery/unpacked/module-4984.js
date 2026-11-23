import "./module-15.js";
import "./module-5.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module321 from "./module-321.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import { joinSelector } from "./module-52.js";
import module186 from "./module-186.js";
import module790 from "./module-790.js";
import module791 from "./module-791.js";
import module816 from "./module-816.js";
import module834 from "./module-834.js";
import module918 from "./module-918.js";
import module4985 from "./module-4985.js";
import module4988 from "./module-4988.js";
let u;
const T = inject("projectStore")(u = observer(u = ((e)=>{
    module55(o, e);
    var n = ((e)=>{
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
    })(o);
    function o(...r) {
        let e;
        module36(this, o);
        e = n.call(this, ...r);
        e.gatewayStore = new module834;
        e.ingressStore = new module918;
        e.state = {
            gateway: {}
        };
        return e;
    }
    module37(o, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "getData",
            value: async function() {
                let t;
                let r;
                let a;
                let n;
                let o;
                let u;
                t = this.props;
                r = t.cluster;
                a = t.namespace;
                n = t.detail;
                if (o = n.selector) {
                    u = {
                        cluster: r,
                        namespace: a,
                        labelSelector: joinSelector(o)
                    };
                    this.ingressStore.fetchListByK8s(u);
                }
                await this.getGateway();
            }
        },
        {
            key: "getGateway",
            value: async function() {
                let t;
                let r;
                let a;
                let n;
                t = this.props;
                r = t.cluster;
                a = t.namespace;
                n = await this.gatewayStore.getGatewayByProject({
                    cluster: r,
                    namespace: a
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
                return t;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const cluster = this.props.cluster;
                const list = this.ingressStore.list;
                const { data, isLoading } = list;
                const c = module321(this.props.projectStore.detail.clusters, "name");
                const gateway = this.state.gateway || {};
                return module553.default.createElement(module790, null, module553.default.createElement("div", {
                    className: module4988.header
                }, module553.default.createElement("div", {
                    className: module4988.cluster
                }, module553.default.createElement(module816, {
                    cluster: c[cluster],
                    theme: "light",
                    tagClass: "float-right"
                })), module553.default.createElement(module791, {
                    icon: "eip-pool",
                    title: gateway.type,
                    description: t("GATEWAY_ACCESS_MODE")
                }), gateway.type === "NodePort" ? module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module791, {
                    title: gateway.loadBalancerIngress || "-",
                    description: t("GATEWAY_IP_ADDRESS")
                }), module553.default.createElement(module791, {
                    title: this.getNodePorts(gateway),
                    description: t("NODE_PORTS_SCAP")
                })) : module553.default.createElement(module791, {
                    title: this.getExternalIP(gateway),
                    description: t("LOAD_BALANCER_SCAP")
                })), module553.default.createElement("div", {
                    className: module4988.content
                }, module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, module553.default.createElement(module553.default.Fragment, null, data.map((detail)=>module553.default.createElement(module4985, {
                        key: detail.name,
                        detail,
                        prefix: _this.prefix,
                        gateway
                    }))))));
            }
        },
        {
            key: "prefix",
            get: function() {
                const props = this.props;
                const { workspace, namespace } = props;
                return `/${workspace}/federatedprojects/${namespace}`;
            }
        }
    ]);
    return o;
})(module553.Component)) || u) || u;
export default T;
