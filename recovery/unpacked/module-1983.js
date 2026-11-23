import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module450 from "./module-450.js";
import module862 from "./module-862.js";
import module321 from "./module-321.js";
import module856 from "./module-856.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import Module851 from "./module-851.js";
import Module1070 from "./module-1070.js";
import Module1984 from "./module-1984.js";
import module4999 from "./module-4999.js";
const w = ((Component_1)=>{
    module55(r, Component_1);
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
    })(r);
    function r(...n) {
        let e;
        module36(this, r);
        e = t.call(this, ...n);
        e.state = {
            resources: {}
        };
        e.fetchReplica = module856(module44(module41.mark(function* t() {
            let r;
            let a;
            r = e.props.match.params;
            a = yield e.store.fetchDetailSilent({
                clusters: e.store.detail.clusters.map((e)=>e.name),
                ...r
            });
            e.setState({
                resources: a
            });
        })), 1000);
        return e;
    }
    module37(r, [
        {
            key: "renderReplicaInfo",
            value: function() {
                const { detail = {}, resources, isResourcesLoading } = this.store;
                const o = module136(module14.toJS(resources));
                const resources_1 = this.state.resources;
                const clustersDetail = module321(this.props.projectStore.detail.clusters, "name");
                if (!module63(resources_1)) {
                    Object.keys(o).forEach((e)=>{
                        o[e] = {
                            ...o[e],
                            ...module26(resources_1, e, {})
                        };
                    });
                }
                return <Module1984 module={this.module} store={this.store} detail={detail} resources={o} clustersDetail={clustersDetail} clusters={detail.clusters} isLoading={isResourcesLoading} canEdit={this.enabledActions.includes("edit")} projectStore={this.props.projectStore}/>;
            }
        },
        {
            key: "renderContainerPorts",
            value: function() {
                if (this.props.noPorts) {
                    return null;
                }
                const store = this.store;
                const { resources, isResourcesLoading } = store;
                const ports = [];
                Object.values(resources).forEach((e)=>{
                    if (e && e.containers) {
                        ports.push.apply(ports, module61(module862(module450(e.containers.map((e)=>{
                            if (module63(e.ports)) {
                                return [];
                            }
                            return e.ports.slice();
                        })), "name").map((t)=>({
                                ...t,
                                cluster: e.cluster
                            }))));
                    }
                });
                if (module63(ports)) {
                    return null;
                }
                return <Module1070 ports={ports} loading={isResourcesLoading} isFederated/>;
            }
        },
        {
            key: "renderPods",
            value: function() {
                const store = this.store;
                const { detail, resources } = store;
                const a = module321(this.props.projectStore.detail.clusters, "name");
                const clusters = detail.clusters.filter((e)=>a[e.name]).map((e)=>e.name);
                return <Module851 prefix={this.prefix} details={module14.toJS(resources)} clusters={clusters} getReplica={this.fetchReplica} isFederated/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderReplicaInfo()}{this.renderContainerPorts()}{this.renderPods()}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module4999.main}>{this.renderContent()}</div>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.props.detailStore.module;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "prefix",
            get: function() {
                const workspace = this.props.match.params.workspace;
                if (workspace) {
                    return `/${workspace}`;
                }
                return "";
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: this.module,
                    project: this.props.match.params.namespace,
                    fedproject: true
                });
            }
        }
    ]);
    return r;
})(Component);
const D = inject("projectStore", "detailStore")(observer(w));
export default D;
const A = w;
export { A as Component };
