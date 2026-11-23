import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module450 from "unpacked/module-450.js";
import module862 from "unpacked/module-862.js";
import module844 from "unpacked/module-844.js";
import Module851 from "unpacked/module-851.js";
import Module1070 from "unpacked/module-1070.js";
import Module1220 from "unpacked/module-1220.js";
import module4737 from "unpacked/module-4737.js";
let n;
const R = inject("detailStore")(n = observer(n = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            e.store.fetchDetail({
                cluster,
                namespace,
                name
            });
        };
        e.handleScale = function(t) {
            const detail = e.store.detail;
            const { cluster, namespace, name } = detail;
            e.store.scale({
                cluster,
                namespace,
                name
            }, t).then(e.fetchData);
        };
        return e;
    }
    module37(a, [
        {
            key: "renderReplicaInfo",
            value: function() {
                const detail = module14.toJS(this.store.detail);
                return <Module1220 module={this.module} detail={detail} onScale={this.handleScale} enableScale={this.enableScaleReplica}/>;
            }
        },
        {
            key: "renderContainerPorts",
            value: function() {
                const isLoading = this.store.isLoading;
                let containers = module14.toJS(this.store.detail).containers;
                containers = module844(containers) ? [] : containers;
                const ports = module862(module450(containers.map((e)=>{
                    if (module63(e.ports)) {
                        return [];
                    }
                    return e.ports;
                })), "name");
                if (module63(ports)) {
                    return null;
                }
                return <Module1070 ports={ports} loading={isLoading}/>;
            }
        },
        {
            key: "renderPods",
            value: function() {
                return <Module851 prefix={this.prefix} detail={{
                    ...this.store.detail,
                    kind: "ReplicaSet"
                }}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4737.main}>{this.renderReplicaInfo()}{this.renderContainerPorts()}{this.renderPods()}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "module",
            get: function() {
                return "microservicegateways";
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster } = params;
                return `${workspace ? `/${workspace}` : ""}/clusters/${cluster}`;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: this.module,
                    ...this.props.match.params,
                    project: this.props.match.params.namespace
                });
            }
        },
        {
            key: "enableScaleReplica",
            get: function() {
                return this.enabledActions.includes("edit") && !this.store.detail.isFedManaged;
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default R;
