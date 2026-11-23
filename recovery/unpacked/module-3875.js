import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module851 from "./module-851.js";
import Module945 from "./module-945.js";
import Module1226 from "./module-1226.js";
import Module3877 from "./module-3877.js";
import { isEdgeWizePage } from "./module-52.js";
import Module3879 from "./module-3879.js";
import module3881 from "./module-3881.js";
let l;
const C = inject("detailStore", "serviceMonitorStore")(l = observer(l = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.isEdgeWize = isEdgeWizePage();
        e.store = e.props.detailStore;
        return e;
    }
    module37(r, [
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "renderPods",
            value: function() {
                const selector = this.store.detail.selector;
                if (module63(selector)) {
                    return null;
                }
                return <Module851 prefix={this.prefix} detail={this.store.detail} isEdgeWize={this.isEdgeWize}/>;
            }
        },
        {
            key: "renderExternal",
            value: function() {
                const e = module14.toJS(this.store.detail);
                return <Module790 title={t("EXTERNAL_SERVICE")}><Module791 title={e.externalName} description={t("EXTERNALNAME")}/></Module790>;
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const params = this.props.match.params;
                const { name, namespace } = params;
                if (this.store.detail.isFedManaged) {
                    return <Module945 module={this.store.module} name={name} namespace={namespace} isEdgeWize={this.isEdgeWize}/>;
                }
                return null;
            }
        },
        {
            key: "renderPorts",
            value: function() {
                const detail = module14.toJS(this.store.detail);
                return <Module790 title={t("PORT_PL")}><Module3879 detail={detail}/></Module790>;
            }
        },
        {
            key: "renderWorkloads",
            value: function() {
                const detail = this.store.detail;
                const { cluster, namespace, selector, workloadType } = detail;
                if (module63(selector)) {
                    return null;
                }
                return <Module1226 selector={selector} cluster={cluster} namespace={namespace} prefix={`${this.prefix}/projects/${namespace}`} module={`${workloadType.toLowerCase()}s`} isEdgeWize={this.isEdgeWize}/>;
            }
        },
        {
            key: "renderServiceMonitors",
            value: function() {
                const serviceMonitorStore = this.props.serviceMonitorStore;
                const detail = this.store.detail;
                const { cluster, namespace, selector, labels } = detail;
                if (module63(selector)) {
                    return null;
                }
                return <Module3877 cluster={cluster} namespace={namespace} labels={labels} store={serviceMonitorStore} isEdgeWize={this.isEdgeWize}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const detail = this.store.detail;
                if (detail.specType === "ExternalName") {
                    return this.renderExternal();
                }
                return <div>{this.renderPlacement()}{this.renderPorts()}{globals.app.hasClusterModule(detail.cluster, "whizard-monitoring") && this.renderServiceMonitors()}{this.renderWorkloads()}{this.renderPods()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3881.main}>{this.renderContent()}</div>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster } = params;
                let r = `${workspace ? `/${workspace}` : ""}/clusters/${cluster}`;
                if (this.isEdgeWize) {
                    r = `/v2/edgewize${r}`;
                }
                return r;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default C;
