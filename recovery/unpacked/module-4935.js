import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
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
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import { showNameAndAlias } from "./module-52.js";
import Module4936 from "./module-4936.js";
import Module4938 from "./module-4938.js";
import Module4940 from "./module-4940.js";
import Module4948 from "./module-4948.js";
let o;
const C = inject("rootStore", "projectStore")(o = observer(o = ((Component_1)=>{
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
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.state = {
            cluster: module26(e.project, "detail.clusters[0].name")
        };
        e.handleClusterChange = function(cluster) {
            e.setState({
                cluster
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const detail = this.project.detail;
                const r = {
                    cluster: this.state.cluster,
                    clusters: this.clusters,
                    onClusterChange: this.handleClusterChange
                };
                return <div><div className="h3 margin-b12">{t("OVERVIEW")}</div><module186.Columns><module186.Column className="is-8"><Module4936 className="margin-b12" detail={detail} workspace={this.workspace}/>{this.enabledActions.includes("edit") && <Module4938 match={this.props.match}/>}<Module4940 match={this.props.match} {...r}/></module186.Column><module186.Column className="is-4"><Module4948 match={this.props.match} {...r}/></module186.Column></module186.Columns></div>;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.props.match, "params.namespace");
            }
        },
        {
            key: "workspace",
            get: function() {
                return module26(this.props.match, "params.workspace");
            }
        },
        {
            key: "project",
            get: function() {
                return this.props.projectStore;
            }
        },
        {
            key: "clusters",
            get: function() {
                return module14.toJS(this.project.detail.clusters).map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name
                    }));
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "project-settings",
                    ...this.props.match.params,
                    project: this.namespace,
                    fedproject: true
                });
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default C;
