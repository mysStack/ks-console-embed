import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module1397 from "stores/workload/env";
import Module1398 from "components/Cards/Containers/EnvVariables";
const v = ((Component_1)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.fetchData = function() {
            r.envStore.fetchList({
                namespace: r.namespace,
                cluster: r.cluster,
                containers: r.containers,
                initContainers: r.initContainers
            });
        };
        r.envStore = new module1397;
        r.fetchData();
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.envStore.list);
                const { data, isLoading } = e;
                return <div>{data.map((detail, t)=><Module1398 key={t} detail={detail} expand={t === 0} loading={isLoading}/>)}</div>;
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
    return a;
})(Component);
const g = inject("rootStore", "detailStore")(observer(v));
export default g;
const y = v;
export { y as Component };
