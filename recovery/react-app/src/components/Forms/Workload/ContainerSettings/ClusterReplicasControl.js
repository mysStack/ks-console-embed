import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module862 from "unpacked/module-862.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import { getDisplayNameNew } from "utils/index";
import module2291 from "unpacked/module-2291.js";
import Module2292 from "components/Forms/Workload/ContainerSettings/ClusterReplicasControl/Placement";
import Module2294 from "components/Forms/Workload/ContainerSettings/ClusterReplicasControl/Scheduling";
let l;
let u;
let o;
const D = observer((o = u = ((Component_1)=>{
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
        e.handleChange = function(t, a) {
            let r = module26(e.props.template, "spec.overrides", []);
            let n = r.find((e)=>e.clusterName === t);
            if (!n) {
                n = {
                    clusterName: t,
                    clusterOverrides: []
                };
                r.push(n);
            }
            n.clusterOverrides = n.clusterOverrides || [];
            const l = n.clusterOverrides.find((e)=>e.path === "/spec/replicas");
            if (l) {
                l.value = a;
            } else {
                n.clusterOverrides.push({
                    path: "/spec/replicas",
                    value: a
                });
            }
            if (a === 0) {
                r = r.filter((e)=>e.clusterName !== t);
            }
            module74(e.props.template, "spec.overrides", r);
            const u = module26(e.props.template, "spec.placement.clusters", []);
            module74(e.props.template, "spec.placement.clusters", a === 0 ? u.filter((e)=>e.name !== t) : module862([].concat(module61(u), [
                {
                    name: t
                }
            ]), "name"));
            if (e.props.onClusterUpdate) {
                e.props.onClusterUpdate();
            }
        };
        e.getValue = function(t) {
            if (module26(e.props.template, "spec.placement.clusters", []).every((e)=>e.name !== t)) {
                return 0;
            }
            let a;
            const r = module26(e.props.template, "spec.overrides", []);
            const n = module26(e.props.template, "spec.template.spec.replicas", 0);
            r.forEach((e)=>{
                if (e.clusterName === t && e.clusterOverrides) {
                    a = e.clusterOverrides.find((e)=>e.path === "/spec/replicas");
                }
            });
            if (a) {
                return a.value;
            }
            return n;
        };
        e.switchMode = function() {
            const store = e.props.store;
            if (store.isScheduleDeployment) {
                store.switchSchedule(false);
            } else {
                store.switchSchedule(true);
            }
        };
        e.getTotalReplicas = function() {
            return module26(e.props.scheduleTemplate, "spec.totalReplicas", "");
        };
        return e;
    }
    module37(r, [
        {
            key: "renderPlacement",
            value: function(e) {
                const _this = this;
                const omitAlias = this.props.omitAlias;
                const r = omitAlias !== undefined && omitAlias;
                return <div className={module2291.wrapper}>{e.map((e)=><Module2292 key={e.name} cluster={getDisplayNameNew(e, r)} replicas={_this.getValue(e.name)} onChange={_this.handleChange}/>)}</div>;
            }
        },
        {
            key: "renderSchedule",
            value: function() {
                const clusters = this.props.clusters;
                const store = this.props.store;
                const TabPanel = module186.Tabs.TabPanel;
                return <><module186.Tabs type="button" onChange={this.switchMode}>{<TabPanel label={t("SPECIFY_REPLICAS")} name="Normal" icon="cluster">{this.renderPlacement(clusters)}</TabPanel>}{<TabPanel label={t("SPECIFY_WEIGHTS")} name="Scheduling" icon="cluster"><Module2294 clusters={clusters} scheduleTemplate={store.scheduleTemplate} onError={this.props.onError}/></TabPanel>}</module186.Tabs></>;
            }
        },
        {
            key: "render",
            value: function() {
                const clusters = this.props.clusters;
                if (module26(this.props.store, "renderScheduleTab", false)) {
                    return this.renderSchedule();
                }
                return this.renderPlacement(clusters);
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    template: module1.object,
    value: module1.array,
    omitAlias: module1.bool
}, u.defaultProps = {
    value: []
}, l = o)) || l;
export default D;
