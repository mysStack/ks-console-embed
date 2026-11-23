import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import { renderRoutes } from "./module-317.js";
import module961 from "./module-961.js";
import Module793 from "./module-793.js";
import Module1597 from "./module-1597.js";
let o;
const _ = inject("rootStore")(o = observer(o = ((Component_1)=>{
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
            showDeployApp: false,
            sampleApp: ""
        };
        e.store = new module961;
        e.hideDeployAppModal = function() {
            e.setState({
                showDeployApp: false,
                sampleApp: ""
            });
        };
        e.handleDeployApp = function(t) {
            const params = e.props.match.params;
            const { workspace, cluster, namespace } = params;
            e.store.create(t).then(()=>{
                e.hideDeployAppModal();
                e.routing.push(`/${workspace}/clusters/${cluster}/projects/${namespace}/composing/${module26(t, "application.metadata.name")}`);
            });
        };
        e.showDeploySampleApp = function() {
            e.setState({
                showDeployApp: true,
                sampleApp: "bookinfo"
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const route = this.props.route;
                const state = this.state;
                const { showDeployApp, sampleApp } = state;
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                return <div><Module793 icon="bird" module="grayrelease" title={t("GRAYSCALE_RELEASE")} description={t("GRAYSCALE_RELEASE_DESC")} tips={this.tips} routes={route.routes}/>{renderRoutes(route.routes)}<Module1597 store={this.store} visible={showDeployApp} namespace={namespace} cluster={cluster} sampleApp={sampleApp} onOk={this.handleDeployApp} onCancel={this.hideDeployAppModal} isSubmitting={this.store.isSubmitting}/></div>;
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("PREREQUEST_FOR_USE_GRAYRELEASE_Q"),
                        description: t("PREREQUEST_FOR_USE_GRAYRELEASE_A")
                    }
                ];
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default _;
