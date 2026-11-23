import "unpacked/module-12.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module321 from "unpacked/module-321.js";
import module136 from "unpacked/module-136.js";
import module63 from "unpacked/module-63.js";
import module856 from "unpacked/module-856.js";
import module318 from "stores/workload/index";
import module437 from "stores/federated";
import Module851 from "unpacked/module-851.js";
import Module1984 from "pages/fedprojects/components/ClusterWorkloadStatus";
import module5009 from "unpacked/module-5009.js";
let c;
const P = inject("detailStore", "projectStore")(c = observer(c = ((Component_1)=>{
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
    function r(e) {
        let a;
        module36(this, r);
        a = t.call(this, e);
        a.fetchData = async function e() {
            let namespace;
            let r;
            let n;
            namespace = a.props.match.params.namespace;
            r = a.state.workloadName;
            n = a.store.detail.clusters.map((e)=>e.name);
            if ((await a.workloadStore.checkName({
                name: r,
                namespace
            })).exist) {
                a.workloadStore.fetchDetail({
                    name: r,
                    namespace
                });
                a.workloadStore.fetchResources({
                    name: r,
                    namespace,
                    clusters: n
                });
                a.setState({
                    workloadExist: true
                });
            } else {
                a.setState({
                    workloadExist: false
                });
            }
        };
        a.fetchReplica = module856(module44(module41.mark(function* e() {
            let t;
            let r;
            let n;
            t = a.state.workloadExist;
            r = a.props.match.params;
            if (t) {
                n = yield a.workloadStore.fetchDetailSilent({
                    clusters: a.workloadStore.detail.clusters.map((e)=>e.name),
                    ...r,
                    name: a.state.workloadName
                });
                a.setState({
                    resources: n
                });
            }
        })), 2000);
        a.store = e.detailStore;
        a.state = {
            workloadExist: true,
            workloadName: module26(a.store.detail.annotations, '["kubesphere.io/workloadName"]'),
            resources: {}
        };
        const n = module26(a.store.detail.annotations, '["kubesphere.io/workloadModule"]', "deployments");
        a.workloadStore = new module437(new module318(n));
        return a;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                const detail = this.props.detailStore.detail;
                const t_workloadName = t.workloadName;
                const workloadName = module26(detail, 'annotations["kubesphere.io/workloadName"]');
                if (t_workloadName !== workloadName) {
                    this.setState({
                        workloadName
                    });
                    this.fetchData();
                }
            }
        },
        {
            key: "renderReplicaInfo",
            value: function() {
                const clusters = (this.store.detail || {}).clusters;
                const workloadStore = this.workloadStore;
                const { detail, resources, isResourcesLoading } = workloadStore;
                const clustersDetail = module321(this.props.projectStore.detail.clusters, "name");
                const c = module136(module14.toJS(resources));
                const resources_1 = this.state.resources;
                if (!module63(resources_1)) {
                    Object.keys(c).forEach((e)=>{
                        c[e] = {
                            ...c[e],
                            ...module26(resources_1, e, {})
                        };
                    });
                }
                return <Module1984 module={this.workloadStore.module} store={this.workloadStore} detail={detail} resources={c} clusters={clusters} clustersDetail={clustersDetail} isLoading={isResourcesLoading} canEdit={this.enabledActions.includes("edit")}/>;
            }
        },
        {
            key: "renderWorkloadPods",
            value: function() {
                const resources = this.workloadStore.resources;
                const t = this.store.detail.clusters.map((e)=>e.name);
                return <Module851 prefix={this.prefix} details={module14.toJS(resources)} clusters={t} getReplica={this.fetchReplica} isFederated/>;
            }
        },
        {
            key: "renderPods",
            value: function() {
                const store = this.store;
                const { resources, isResourcesLoading } = store;
                const a = this.store.detail.clusters.map((e)=>e.name);
                return <Module851 prefix={this.prefix} details={module14.toJS(resources)} clusters={a} isLoading={isResourcesLoading} isFederated/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const state = this.state;
                const { workloadName, workloadExist } = state;
                if (workloadName && workloadExist) {
                    return <div>{this.renderReplicaInfo()}{this.renderWorkloadPods()}</div>;
                }
                return this.renderPods();
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module5009.main}>{this.renderContent()}</div>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: this.store.module,
                    project: this.props.match.params.namespace,
                    fedproject: true
                });
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
        }
    ]);
    return r;
})(Component)) || c) || c;
export default P;
