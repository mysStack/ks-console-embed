import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
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
import module63 from "unpacked/module-63.js";
import module454 from "unpacked/module-454.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import Module790 from "components/Base/Panel";
import Module945 from "pages/projects/components/Cards/Placement";
import module834 from "stores/gateway";
import Module963 from "unpacked/module-963.js";
import Module3885 from "pages/projects/containers/Routes/Detail/ResourceStatus/Rule";
import module1822 from "unpacked/module-1822.js";
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
