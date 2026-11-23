import "./module-15.js";
import "./module-5.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module896 from "./module-896.js";
import module74 from "./module-74.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module186 from "./module-186.js";
import module834 from "./module-834.js";
import Module2562 from "./module-2562.js";
const S = ((Component_1)=>{
    module55(n, Component_1);
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
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.getGateway = async function e() {
            let a;
            let r;
            let gateway;
            if (!t.props.isFederated) {
                a = function() {
                    return t.gatewayStore.getGatewayByProject({
                        namespace: t.namespace,
                        cluster: t.cluster,
                        includeUpper: true
                    });
                };
                t.setState({
                    isLoading: true
                });
                r = await a();
                if ((gateway = r[0] || r[1] || r[2] || {}).serviceMeshEnable) {
                    module74(t.formTemplate, 'metadata.annotations["nginx.ingress.kubernetes.io/service-upstream"]', "true");
                }
                t.setState({
                    gateway,
                    isLoading: false
                });
            }
        };
        t.gatewayStore = new module834;
        t.state = {
            ingressNameOption: []
        };
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.getIngressNameOptions();
            }
        },
        {
            key: "getIngressNameOptions",
            value: async function() {
                let t;
                let ingressNameOption;
                if ((t = await this.gatewayStore.getNewGatewayByProject({
                    cluster: this.cluster,
                    namespace: this.namespace
                })).length) {
                    this.getGateway();
                }
                ingressNameOption = module896(t, function(e) {
                    return {
                        label: `${e.ingressClass}(${e.name})`,
                        value: e.ingressClass
                    };
                });
                this.setState({
                    ingressNameOption
                });
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                const ingressNameOption = this.state.ingressNameOption;
                return <module186.Form data={this.formTemplate} ref={formRef}>{!module63(ingressNameOption) && <module186.Form.Item label={t("SELECT_INGRESSCLASSNAME")}><module186.Select name="spec.ingressClassName" options={ingressNameOption}/></module186.Form.Item>}<module186.Form.Group label={t("ADD_METADATA")} desc={t("ROUTE_ADD_METADATA_DESC")} keepDataWhenUnCheck checkable><Module2562/></module186.Form.Group></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.namespace || module26(this.formTemplate, "metadata.namespace");
            }
        }
    ]);
    return n;
})(Component);
export default S;
