import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-86.js";
import "./module-73.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-98.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module447 from "./module-447.js";
import module857 from "./module-857.js";
import module63 from "./module-63.js";
import module195 from "./module-195.js";
import module186 from "./module-186.js";
import { memoryFormat } from "./module-52.js";
import { QUOTAS_MAP } from "./module-72.js";
import Module790 from "./module-790.js";
import Module816 from "./module-816.js";
import { trigger } from "./module-792.js";
import module886 from "./module-886.js";
import module867 from "./module-867.js";
import Module1413 from "./module-1413.js";
import Module1412 from "./module-1412.js";
import Module4967 from "./module-4967.js";
import module4969 from "./module-4969.js";
let o;
const x = [
    "limits.cpu",
    "limits.memory",
    "pods"
];
const L = [
    "requests.storage",
    "persistentvolumeclaims"
];
const U = "storageclass.storage.k8s.io/requests.storage";
const Y = "storageclass.storage.k8s.io/persistentvolumeclaims";
const F = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...n_1);
        e.store = new module886;
        e.storageClassStore = new module867;
        e.state = {
            isFold: true
        };
        e.showEdit = function() {
            const e_props = e.props;
            const { namespace, cluster, workspace } = e_props;
            e.trigger("project.quota.edit", {
                detail: {
                    name: namespace,
                    namespace,
                    cluster: cluster.name,
                    workspace
                },
                success: e.fetchData,
                isFederated: true
            });
        };
        e.toggleFold = function() {
            e.setState(function(e) {
                return {
                    isFold: !e.isFold
                };
            });
        };
        e.fetchData = function() {
            const e_props = e.props;
            const { namespace, cluster } = e_props;
            e.store.fetch({
                namespace,
                cluster: cluster.name
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const cluster = this.props.cluster;
                this.fetchData();
                this.storageClassStore.fetchList({
                    cluster: cluster.name
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const isFold = this.state.isFold;
                const props = this.props;
                const { cluster, canEdit } = props;
                return <Module790><div className={module4969.cluster}><Module816 cluster={cluster} theme="light"/></div>{canEdit && <div className={module4969.actions}><module186.Button onClick={this.showEdit}>{t("EDIT_QUOTAS")}</module186.Button></div>}<div className={module3(module4969.content, module31({}, module4969.fold, isFold))}>{this.items.map((e)=><Module4967 {...e}/>)}</div>{this.storageClassResource.map((e)=>{
                    const t = e.name.indexOf("requests.storage") !== -1;
                    let e_used = e.used;
                    let e_total = e.total;
                    if (t && module195(e.used)) {
                        e_used = memoryFormat(e.used, "Gi");
                    }
                    if (t && module195(e.total)) {
                        e_total = memoryFormat(e.total, "Gi");
                    }
                    return <Module1413 iconName="storage" {...e} used={e_used} total={e_total}/>;
                })}{!module63(this.relateStorageClass) && Object.entries(this.relateStorageClass).map((t)=>{
                    const r = module96(t, 2);
                    const a = r[0];
                    const data = r[1];
                    return <Module1412 key={a} name={a} data={data} allStorageClass={_this.allStorageClass}/>;
                })}{this.items.length > 3 && <div className={module4969.folder}><module186.Button icon={isFold ? "chevron-down" : "chevron-up"} onClick={this.toggleFold}>{isFold ? t("UNFOLD") : t("FOLD")}</module186.Button></div>}</Module790>;
            }
        },
        {
            key: "allSpec",
            get: function() {
                const data = this.store.data;
                const t = module26(data, "hard", {});
                const r = Object.values(QUOTAS_MAP).map((e)=>e.name);
                const a = Object.keys(t).filter((e)=>r.indexOf(e) === -1).map((e)=>[
                        e,
                        {
                            name: e,
                            type: "userDefined"
                        }
                    ]);
                return Object.entries(QUOTAS_MAP).concat(a).map((t)=>{
                    const a = module96(t, 2);
                    const n = a[0];
                    const o = a[1];
                    return {
                        key: n,
                        name: n,
                        total: module26(data, `hard["${o.name}"]`),
                        used: module26(data, `used["${o.name}"]`, 0),
                        left: module26(data, `left["${o.name}"]`),
                        type: o?.type ?? "system"
                    };
                }).filter(({ total, used, name })=>!(!total && !Number(used) && x.indexOf(name) === -1));
            }
        },
        {
            key: "allStorageClass",
            get: function() {
                return module14.toJS(this.storageClassStore.list.data);
            }
        },
        {
            key: "items",
            get: function() {
                return this.allSpec.filter((e)=>e.name.indexOf(L[0]) === -1 && e.name.indexOf(L[1]) === -1);
            }
        },
        {
            key: "storageLimit",
            get: function() {
                return this.allSpec.filter((e)=>e.name.indexOf(L[0]) !== -1 || e.name.indexOf(L[1]) !== -1);
            }
        },
        {
            key: "storageClassResource",
            get: function() {
                const e = module14.toJS(this.store.data);
                const { hard, used } = e;
                return L.map((e)=>{
                    const a = module26(hard, [
                        e
                    ], e.includes("claims") ? "0" : "0Gi");
                    const n = module26(used, [
                        e
                    ], e.includes("claims") ? "0" : "0Gi");
                    const o = e.includes("claims") ? a : memoryFormat(a, "Gi");
                    return {
                        key: e,
                        name: e,
                        total: o > 0 ? e.includes("claims") ? o : `${o}Gi` : undefined,
                        used: e.includes("claims") ? n : memoryFormat(n, "Gi")
                    };
                });
            }
        },
        {
            key: "relateStorageClass",
            get: function() {
                const e = module14.toJS(this.store.data);
                const t = module26(e, "hard", {});
                const r = module26(e, "used", {});
                const a = Object.entries(t).filter((e)=>{
                    const t = module96(e, 1)[0];
                    return module447(t, U) || module447(t, Y);
                }).map((e)=>{
                    const t = module96(e, 2);
                    const r = t[0];
                    const a = t[1];
                    return module31({}, r, a);
                });
                const n = a.map((e)=>{
                    const t = Object.keys(e)[0];
                    return module31({}, t, module26(r, t));
                });
                const o = {
                    total: module61(a),
                    used: module61(n)
                };
                if (o.total.length > 0) {
                    let l;
                    const s = module857(module61(o.total), function(e) {
                        return Object.keys(e)[0].split(".").slice(1).join(".");
                    });
                    l = {};
                    module31(l, U, module26(s, [
                        U
                    ], []).map((e)=>{
                        const t = Object.keys(e)[0];
                        const r = o.used.filter((e)=>Object.keys(e)[0] === t)[0];
                        return {
                            name: t,
                            total: Object.values(e)[0],
                            used: Object.values(r)[0]
                        };
                    }));
                    module31(l, Y, module26(s, [
                        Y
                    ], []).map((e)=>{
                        const t = Object.keys(e)[0];
                        const r = o.used.filter((e)=>Object.keys(e)[0] === t)[0];
                        return {
                            name: t,
                            total: Object.values(e)[0],
                            used: Object.values(r)[0]
                        };
                    }));
                    return l;
                }
                return {};
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default F;
