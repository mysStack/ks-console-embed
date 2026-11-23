import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
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
import module63 from "./module-63.js";
import module454 from "./module-454.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import Module790 from "./module-790.js";
import Module945 from "./module-945.js";
import module834 from "./module-834.js";
import Module963 from "./module-963.js";
import Module3885 from "./module-3885.js";
import module1822 from "./module-1822.js";
let u;
const C = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getProjectGateway = function(e) {
            return t.gatewayStore.getNewGatewayByProject({
                namespace: e.namespace,
                cluster: e.cluster
            });
        };
        t.getInitGateway = async (a)=>{
            let r;
            let gateway;
            r = await t.getProjectGateway(a);
            gateway = module454(r, function(e) {
                return e.ingressClass === a.ingressClassName;
            });
            t.setState({
                gateway
            });
        };
        t.state = {
            gateway: {}
        };
        t.store = e.detailStore;
        t.gatewayStore = new module834;
        t.module = t.store.module;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const e = module14.toJS(this.store.detail);
                this.getInitGateway(e);
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const params = this.props.match.params;
                const { name, namespace } = params;
                if (this.store.detail.isFedManaged) {
                    return <Module945 module={this.module} name={name} namespace={namespace}/>;
                }
                return null;
            }
        },
        {
            key: "renderRules",
            value: function() {
                const _this = this;
                const a = module14.toJS(this.store.detail);
                const tls = a.tls || [];
                if (module63(a.rules)) {
                    return <Module963 desc={t("NO_DATA")}/>;
                }
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return <Module790 title={t("RULES")}>{a.rules.map((rule, a)=><Module3885 key={`${rule.host}-${a}`} tls={tls} rule={rule} gateway={_this.state.gateway} prefix={`${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects/${namespace}`}/>)}</Module790>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderPlacement()}{this.renderRules()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module1822.main}>{this.renderContent()}</div>;
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default C;
