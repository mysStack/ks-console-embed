import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-98.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-137.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module447 from "unpacked/module-447.js";
import module26 from "unpacked/module-26.js";
import module857 from "unpacked/module-857.js";
import module63 from "unpacked/module-63.js";
import module195 from "unpacked/module-195.js";
import module844 from "unpacked/module-844.js";
import module186 from "unpacked/module-186.js";
import { compareVersion, memoryFormat } from "utils/index";
import { WORKSPACE_QUOTAS_MAP } from "utils/constants";
import Module790 from "components/Base/Panel";
import Module816 from "components/Clusters/ClusterTitle";
import { trigger } from "utils/action";
import module914 from "stores/workspace.quota";
import module867 from "stores/storageClass";
import Module1413 from "unpacked/module-1413.js";
import Module1412 from "unpacked/module-1412.js";
import module4360 from "unpacked/module-4360.js";
let o;
const M = [
    "limits.cpu",
    "limits.memory"
];
const x = [
    "requests.storage",
    "persistentvolumeclaims"
];
const L = "storageclass.storage.k8s.io/requests.storage";
const U = "storageclass.storage.k8s.io/persistentvolumeclaims";
const V = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
        e.store = new module914;
        e.storageClassStore = new module867;
        e.showEdit = function() {
            const e_props = e.props;
            const { workspace, cluster } = e_props;
            e.trigger("workspace.quota.edit", {
                detail: {
                    name: workspace,
                    workspace,
                    cluster: cluster.name
                },
                success: e.fetchData,
                isFederated: true
            });
        };
        e.fetchStorageClass = function() {
            const cluster = e.props.cluster;
            e.storageClassStore.fetchList({
                cluster: cluster.name
            });
        };
        e.fetchData = function() {
            const e_props = e.props;
            const { workspace, cluster } = e_props;
            if (!e_props.needUpgrade) {
                e.store.fetchDetail({
                    workspace,
                    name: workspace,
                    cluster: cluster.name
                });
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, canEdit } = props;
                if (this.needUpgrade) {
                    return <Module790><div className={module4360.cluster}><Module816 cluster={cluster} theme="light" noStatus={!globals.app.isMultiCluster}/></div><div className={module4360.disabledTip}>{t("CLUSTER_UPGRADE_REQUIRED", {
                        version: this.requiredVersion
                    })}</div></Module790>;
                }
                const items = this.items;
                return <Module790><div className={module4360.cluster}><Module816 cluster={cluster} theme="light" noStatus={!globals.app.isMultiCluster}/></div>{canEdit && <div className={module4360.actions}><module186.Button onClick={this.showEdit}>{t("EDIT_QUOTAS")}</module186.Button></div>}<div className={module4360.content}>{items.map((e)=><Module1413 {...e}/>)}{this.storageClassResource.map((e)=>{
                    const t = e.name.indexOf("requests.storage") !== -1;
                    let e_used = e.used;
                    let e_total = e.total;
                    if (t && module195(e.used)) {
                        e_used = memoryFormat(e.used, "Gi");
                    }
                    if (t && module195(e.total)) {
                        e_total = memoryFormat(e.total, "Gi");
                    }
                    if (isNaN(e_total) || module844(e_total) || e_total === "") {
                        e_total = undefined;
                    }
                    return <Module1413 iconName="storage" {...e} used={e_used} total={e_total}/>;
                })}{!module63(this.relateStorageClass) && Object.entries(this.relateStorageClass).map((t)=>{
                    const r = module96(t, 2);
                    const a = r[0];
                    const data = r[1];
                    return <Module1412 key={a} name={a} data={data} allStorageClass={_this.allStorageClass}/>;
                })}</div></Module790>;
            }
        },
        {
            key: "requiredVersion",
            get: function() {
                return "v3.1.0";
            }
        },
        {
            key: "needUpgrade",
            get: function() {
                return compareVersion(globals.app.isMultiCluster ? this.props.cluster.configz.ksVersion : module26(globals, "ksConfig.ksVersion"), this.requiredVersion) < 0;
            }
        },
        {
            key: "items",
            get: function() {
                const e = module14.toJS(this.store.detail);
                return Object.entries(WORKSPACE_QUOTAS_MAP).map((t)=>{
                    const r = module96(t, 2);
                    const a = r[0];
                    const n = r[1];
                    return {
                        key: a,
                        name: a,
                        total: module26(e, `spec.quota.hard["${n.name}"]`),
                        used: module26(e, `status.total.used["${n.name}"]`, 0)
                    };
                }).filter(({ total, used, name })=>!(!total && !Number(used) && M.indexOf(name) === -1));
            }
        },
        {
            key: "storageClassResource",
            get: function() {
                const e = module14.toJS(this.store.detail);
                return x.map((t)=>{
                    const r = module26(e, `spec.quota.hard["${t}"]`);
                    const used = module26(e, `status.total.used["${t}"]`, t.includes("claims") ? "0" : "0Gi");
                    return {
                        key: t,
                        name: t,
                        total: t.indexOf("requests.storage") !== -1 ? `${memoryFormat(r, "Gi")}Gi` : r,
                        used
                    };
                });
            }
        },
        {
            key: "relateStorageClass",
            get: function() {
                const e = module14.toJS(this.store.detail);
                const t = module26(e, "spec.quota.hard", {});
                const r = module26(e, "status.total.used", {});
                const a = Object.entries(t).filter((e)=>{
                    const t = module96(e, 1)[0];
                    return module447(t, L) || module447(t, U);
                }).map((e)=>{
                    const t = module96(e, 2);
                    const r = t[0];
                    const a = t[1];
                    return module31({}, r, a);
                });
                const n = a.map((e)=>module31({}, Object.keys(e)[0], module26(r, [
                        `${Object.keys(e)[0]}`
                    ])));
                const o = {
                    total: module61(a),
                    used: module61(n)
                };
                if (o.total.length > 0) {
                    let s;
                    const i = module857(module61(o.total), function(e) {
                        return Object.keys(e)[0].split(".").slice(1).join(".");
                    });
                    s = {};
                    module31(s, L, module26(i, [
                        L
                    ], []).map((e)=>{
                        const t = Object.keys(e)[0];
                        const r = o.used.filter((e)=>Object.keys(e)[0] === t)[0];
                        return {
                            name: t,
                            total: Object.values(e)[0],
                            used: Object.values(r)[0]
                        };
                    }));
                    module31(s, U, module26(i, [
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
                    return s;
                }
                return {};
            }
        },
        {
            key: "allStorageClass",
            get: function() {
                return module14.toJS(this.storageClassStore.list.data);
            }
        }
    ]);
    return a;
})(Component)) || o) || o) || o;
export default V;
