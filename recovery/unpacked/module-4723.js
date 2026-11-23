import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
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
import "./module-57.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module1397 from "./module-1397.js";
import module1026 from "./module-1026.js";
import Module1398 from "./module-1398.js";
import Module790 from "./module-790.js";
import module1911 from "./module-1911.js";
let o;
function O(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const R = [
    "systemProperties",
    "systemEnvironment"
];
const A = inject("instanceDetailStore", "detailStore")(o = observer(o = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.fetchData = function() {
            t.envStore.fetchList({
                namespace: t.namespace,
                cluster: t.cluster,
                containers: t.containers,
                initContainers: t.initContainers
            });
        };
        t.fentchInstanceData = function() {
            const instanceId = t.props.instanceDetailStore.detail.instanceId;
            t.instanceStore.fetchEnv({
                namespace: t.namespace,
                cluster: t.cluster,
                instanceId
            }).then((instanceEnv)=>{
                t.setState({
                    instanceEnv
                });
            });
        };
        t.state = {
            instanceEnv: {}
        };
        t.envStore = new module1397;
        t.instanceStore = new module1026;
        t.fetchData();
        t.fentchInstanceData();
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.envStore.list);
                const { data, isLoading } = e;
                const instanceEnv = this.state.instanceEnv;
                const { activeProfiles, propertySources } = instanceEnv;
                return <div>{!module63(propertySources) && <Module790 className={module1911.envWrapper} title={t("SPRING_BOOT_CONFIGURATION_INFOMATION", {
                    resources: `(${activeProfiles.join(", ")})`
                })}>{propertySources.filter((e)=>!R.includes(e.name)).map(({ name, properties }, a)=><Module1398 key={a} icon="springcloud" emptyText={t("PROPERTY_NOT_SET")} detail={{
                        name,
                        variables: Object.entries(properties).map((e)=>{
                            const t = module96(e, 2);
                            return {
                                name: t[0],
                                ...t[1]
                            };
                        })
                    }} expand={a === 0} loading={false}/>)}</Module790>}<Module790 className={module1911.envWrapper} title={t("POD_ENVIRONMENT_VARIABLE")}>{data.map((detail, t)=><Module1398 key={t} detail={detail} expand={t === 0} loading={isLoading}/>)}</Module790></div>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.store.module;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.store.detail.namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.store.detail.cluster;
            }
        },
        {
            key: "containers",
            get: function() {
                const e = module14.toJS(this.store.detail);
                const { spec, containers } = e;
                const r = containers === undefined ? [] : containers;
                if (this.module === "containers") {
                    return [
                        e
                    ];
                }
                if (module63(r)) {
                    if (module63(spec)) {
                        return [];
                    }
                    return module26(spec, "template.spec.containers", []);
                }
                return r;
            }
        },
        {
            key: "initContainers",
            get: function() {
                const e = module14.toJS(this.store.detail);
                const { spec, initContainers } = e;
                const r = initContainers === undefined ? [] : initContainers;
                if (this.module === "containers") {
                    return [
                        e
                    ];
                }
                if (module63(r)) {
                    if (module63(spec)) {
                        return [];
                    }
                    return module26(spec, "template.spec.initContainers", []);
                }
                return r;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default A;
