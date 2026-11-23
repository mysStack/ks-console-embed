import "./module-15.js";
import "./module-5.js";
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
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import module454 from "./module-454.js";
import Module790 from "./module-790.js";
import { joinSelector } from "./module-52.js";
import module918 from "./module-918.js";
import module834 from "./module-834.js";
import Module4747 from "./module-4747.js";
let c;
let s;
let l;
const A = observer((l = s = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            gateway: {}
        };
        e.store = new module918;
        e.gatewayStore = new module834;
        e.getData = async function t() {
            let a;
            let cluster;
            let namespace;
            let c;
            let s;
            let gateway;
            a = e.props;
            cluster = a.cluster;
            namespace = a.namespace;
            c = a.selector;
            if (!module63(c)) {
                s = {
                    cluster,
                    namespace,
                    labelSelector: joinSelector(c)
                };
                gateway = await e.gatewayStore.getNewGatewayByProject({
                    cluster,
                    namespace
                });
                e.setState({
                    gateway
                });
                e.store.fetchListByK8s(s);
            }
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
            key: "renderContent",
            value: function() {
                const prefix = this.props.prefix;
                const data = this.store.list.data;
                const gateway = this.state.gateway;
                if (module63(data)) {
                    return null;
                }
                return data.map((detail)=>{
                    const gateway_1 = module454(gateway, function(e) {
                        return e.ingressClass === detail.ingressClassName;
                    });
                    return <Module4747 key={detail.name} prefix={prefix} detail={detail} gateway={gateway_1}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title } = props;
                const n = this.renderContent();
                if (n) {
                    return <Module790 className={className} title={title || t("ROUTE_PL")}>{n}</Module790>;
                }
                return null;
            }
        }
    ]);
    return r;
})(Component), s.propTypes = {
    className: module1.string,
    prefix: module1.string,
    selector: module1.object,
    title: module1.string
}, s.defaultProps = {
    prefix: ""
}, c = l)) || c;
export default A;
