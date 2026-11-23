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
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import Module997 from "unpacked/module-997.js";
import Module833 from "unpacked/module-833.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import { getDisplayNameNew, getDomTitle } from "utils/index";
import module4445 from "unpacked/module-4445.js";
import Module4446 from "pages/workspaces/containers/Overview/ResourceUsage/Physical";
import Module4447 from "pages/workspaces/containers/Overview/ResourceUsage/Statistics";
import Module4451 from "pages/workspaces/containers/Overview/ResourceUsage/Virtual";
let o;
const S = inject("rootStore", "workspaceStore")(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
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
        e.workspaceStore = e.props.workspaceStore;
        e.valueRenderer = function(e) {
            return <div title={e.label}>{t("CLUSTER_VALUE", {
                value: e.label
            })}</div>;
        };
        e.optionRenderer = function(e) {
            return <div><div>{getDomTitle(e.label)}</div>{!e.cluster.isReady && <div><Module997 data={e.cluster} noTip/></div>}</div>;
        };
        e.handleClusterChange = function(t) {
            e.workspaceStore.selectCluster(t);
        };
        return e;
    }
    module37(a, [
        {
            key: "renderEmpty",
            value: function() {
                return <Module833 icon="cluster" title={t("NO_CLUSTER_AVAILABLE")} desc={t("WORKSPACE_NO_CLUSTER_TIP")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{!globals.app.isMultiCluster && <Module4447 workspace={this.workspace}/>}{this.props.workspaceStore.clusters.data.length > 0 ? <><Module4446 workspace={this.workspace} {...this.clusterProps}/><Module4451 workspace={this.workspace} isEdge={this.workspaceStore.isEdge} {...this.clusterProps}/></> : this.renderEmpty()}</div>;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.workspaceStore.clusters.data;
            }
        },
        {
            key: "clustersOpts",
            get: function() {
                return this.clusters.map((cluster)=>({
                        label: getDisplayNameNew(cluster),
                        value: cluster.name,
                        disabled: !cluster.isReady,
                        cluster
                    }));
            }
        },
        {
            key: "clusterProps",
            get: function() {
                return {
                    className: module4445.clusterSelector,
                    cluster: this.workspaceStore.cluster,
                    options: this.clustersOpts,
                    onChange: this.handleClusterChange,
                    valueRenderer: this.valueRenderer,
                    optionRenderer: this.optionRenderer,
                    workspaceStore: this.workspaceStore
                };
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default S;
