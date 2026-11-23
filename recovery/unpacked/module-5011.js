import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
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
import { inject, observer } from "./module-239.js";
import module834 from "./module-834.js";
import module790 from "./module-790.js";
import module791 from "./module-791.js";
import module816 from "./module-816.js";
import module1691 from "./module-1691.js";
import module26 from "./module-26.js";
import module5012 from "./module-5012.js";
import module5014 from "./module-5014.js";
let u;
const b = inject("rootStore")(u = observer(u = ((e)=>{
    module55(a, e);
    var r = ((e)=>{
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
    })(a);
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.gatewayStore = new module834;
        e.state = {
            gateway: {}
        };
        e.getProjectGateway = function() {
            const namespace = e.props.detail.namespace;
            return e.gatewayStore.getGatewayByProject({
                namespace,
                cluster: e.cluster
            });
        };
        e.getInitGateway = async (r)=>{
            let a;
            let gateway;
            a = await e.getProjectGateway(r);
            gateway = a[0] || a[1] || a[2] || {};
            e.setState({
                gateway
            });
        };
        e.getOperations = function() {
            return [
                {
                    key: "editGateway",
                    icon: "ip",
                    text: t("EDIT_EXTERNAL_ACCESS"),
                    action: "edit",
                    onClick: function() {
                        return e.props.updateService(e.cluster);
                    }
                }
            ];
        };
        e.getEnabledOperations = function() {
            return (e.isStateless ? e.getOperations() : []).filter((t)=>!t.action || e.props.enabledActions.includes(t.action));
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.getInitGateway();
            }
        },
        {
            key: "renderPorts",
            value: function() {
                const detail = this.props.detail;
                const gateway = this.state.gateway;
                return module553.default.createElement(module5012, {
                    gateway,
                    detail
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, detail } = props;
                return module553.default.createElement(module790, null, module553.default.createElement("div", {
                    className: module5014.header
                }, module553.default.createElement("div", {
                    className: module5014.cluster
                }, module553.default.createElement(module816, {
                    cluster,
                    theme: "light",
                    tagClass: "float-right"
                })), module553.default.createElement(module791, {
                    icon: "eip-pool",
                    title: `${detail.name}.${detail.namespace}.svc`,
                    description: t("INTERNAL_DOMAIN_NAME_SCAP")
                }), module553.default.createElement(module791, {
                    title: detail.clusterIP,
                    description: t("VIRTUAL_IP_ADDRESS")
                }), module553.default.createElement(module1691, {
                    className: module5014.more,
                    options: this.getEnabledOperations()
                })), module553.default.createElement("div", {
                    className: module5014.content
                }, this.renderPorts()));
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster.name;
            }
        },
        {
            key: "isStateless",
            get: function() {
                return module26(this.props.store.detail, 'annotations["kubesphere.io/serviceType"]') === "statelessservice";
            }
        }
    ]);
    return a;
})(module553.Component)) || u) || u;
export default b;
