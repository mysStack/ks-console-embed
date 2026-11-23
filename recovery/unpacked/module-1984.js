import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module790 from "./module-790.js";
import module1770 from "./module-1770.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import module4996 from "./module-4996.js";
import module4997 from "./module-4997.js";
import module4998 from "./module-4998.js";
import module1252 from "./module-1252.js";
const R = ((e)=>{
    module55(a, e);
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...n_1);
        e.getWeight = function(t) {
            const store = e.props.store;
            return module26(store.deployedScheduleTemplate, `spec.clusters.${t}.weight`, 0);
        };
        e.handleReplicasChange = async (r, a)=>{
            let n;
            let o;
            let u;
            let l;
            let overrides;
            let s;
            let f;
            n = e.props;
            o = n.detail;
            u = n.store;
            l = o.overrides;
            if (s = (overrides = l === undefined ? [] : l).find((e)=>e.clusterName === r)) {
                if (f = s.clusterOverrides.find((e)=>e.path === "/spec/replicas")) {
                    f.value = a;
                } else {
                    s.clusterOverrides.push({
                        path: "/spec/replicas",
                        value: a
                    });
                }
            } else {
                overrides.push({
                    clusterName: r,
                    clusterOverrides: [
                        {
                            path: "/spec/replicas",
                            value: a
                        }
                    ]
                });
            }
            await u.patch(o, {
                spec: {
                    overrides
                }
            });
            await u.resourceStore.patch({
                ...o,
                cluster: r
            }, {
                spec: {
                    replicas: a
                }
            });
        };
        e.updateSchedule = async function t() {
            let r;
            let a;
            let n;
            let o;
            let u;
            let clusters;
            let i;
            r = e.props;
            a = r.store;
            n = r.detail;
            o = r.projectStore;
            u = r.clustersDetail;
            clusters = Object.keys(module14.toJS(u));
            i = {
                name: n.name,
                namespace: o.detail.namespace,
                workspace: o.detail.workspace
            };
            await a.updateScheduleYaml(n, a.deployedScheduleTemplate);
            await a.fetchResources({
                clusters,
                ...i
            });
        };
        e.handleWeightChange = async (r, a)=>{
            let n;
            n = e.props.store;
            module74(n.deployedScheduleTemplate, `spec.clusters.${r}.weight`, a);
            await e.updateSchedule();
        };
        e.totalChange = async (r)=>{
            let a;
            a = e.props.store;
            module74(a.deployedScheduleTemplate, "spec.totalReplicas", Number(r));
            await e.updateSchedule();
        };
        return e;
    }
    module37(a, [
        {
            key: "renderTittleText",
            value: function() {
                const e = this.props.store.isScheduleProject ? {
                    Icon: "stretch",
                    title: t("WEIGHTS"),
                    des: t("SPECIFY_WEIGHTS_DESC")
                } : {
                    Icon: "backup",
                    title: t("REPLICA_COUNT"),
                    des: t("SPECIFY_REPLICAS_DESC")
                };
                return module553.default.createElement("div", {
                    className: module1252.titleBox
                }, module553.default.createElement("div", {
                    className: module1252.IconBox
                }, module553.default.createElement(module1770, {
                    name: e.Icon,
                    size: "40"
                })), module553.default.createElement("div", {
                    className: module1252.right
                }, module553.default.createElement("span", {
                    className: module1252.title
                }, e.title), module553.default.createElement("span", {
                    className: module1252.des
                }, e.des)));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { store, resources, clusters, clustersDetail, canEdit, projectStore } = props;
                if (clusters) {
                    return module553.default.createElement(module790, {
                        title: t("POD_REPLICAS")
                    }, this.renderTittleText(), module553.default.createElement("div", {
                        className: module1252.wrapper
                    }, store.isScheduleProject && module553.default.createElement("div", {
                        className: module1252.totalBox
                    }, module553.default.createElement(module1770, {
                        name: "pod",
                        size: "40"
                    }), module553.default.createElement("div", {
                        className: module1252.total
                    }, t("TOTAL_REPLICAS")), module553.default.createElement(module4998, {
                        desire: this.getTotalReplicas,
                        onChange: this.totalChange
                    })), clusters.map((t)=>{
                        if (clustersDetail[t.name]) {
                            if (store.isScheduleProject) {
                                return module553.default.createElement(module4997, {
                                    key: t.name,
                                    cluster: clustersDetail[t.name],
                                    workload: resources[t.name],
                                    store,
                                    projectStore,
                                    onWeightChange: _this.handleWeightChange,
                                    onReplicasChange: canEdit ? _this.handleReplicasChange : null
                                });
                            }
                            return module553.default.createElement(module4996, {
                                key: t.name,
                                cluster: clustersDetail[t.name],
                                workload: resources[t.name],
                                onReplicasChange: canEdit ? _this.handleReplicasChange : null,
                                store
                            });
                        }
                        return null;
                    })));
                }
                return null;
            }
        },
        {
            key: "getTotalReplicas",
            get: function() {
                const store = this.props.store;
                return module26(store.deployedScheduleTemplate, "spec.totalReplicas", 0);
            }
        }
    ]);
    return a;
})(module553.Component);
export default R;
