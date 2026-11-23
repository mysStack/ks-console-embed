import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
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
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module834 from "stores/gateway";
import module790 from "components/Base/Panel";
import module791 from "components/Base/Text";
import module816 from "components/Clusters/ClusterTitle";
import module1691 from "unpacked/module-1691.js";
import module26 from "unpacked/module-26.js";
import module5012 from "pages/fedprojects/containers/Services/Detail/Ports";
import module5014 from "unpacked/module-5014.js";
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
