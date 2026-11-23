import "./module-15.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
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
import Module1398 from "./module-1398.js";
let n;
const g = inject("s2iRunStore")(n = observer(n = ((Component_1)=>{
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
                cluster: r.cluster,
                namespace: r.namespace,
                containers: r.containers
            });
        };
        r.envStore = new module1397;
        return r;
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
                const e = module14.toJS(this.envStore.list);
                const { data, isLoading } = e;
                return <div>{data.map((detail, t)=><Module1398 key={t} detail={detail} expand={t === 0} loading={isLoading}/>)}</div>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.props.module;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.s2iRunStore;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.store.jobDetail.namespace;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "containers",
            get: function() {
                const e = module14.toJS(this.store.jobDetail);
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
            key: "test",
            get: function() {
                return "2";
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default g;
