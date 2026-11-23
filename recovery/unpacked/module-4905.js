import "./module-15.js";
import "./module-16.js";
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
import { joinSelector } from "./module-52.js";
import module1109 from "./module-1109.js";
import Module1396 from "./module-1396.js";
const h = ((Component_1)=>{
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
            const jobDetail = r.store.jobDetail;
            const { uid, name, namespace } = jobDetail;
            const cluster = r.props.match.params.cluster;
            const c = {
                "involvedObject.name": name,
                "involvedObject.namespace": namespace,
                "involvedObject.kind": "Job",
                "involvedObject.uid": uid
            };
            r.eventStore.fetchList({
                cluster,
                namespace: r.namespace,
                fieldSelector: joinSelector(c)
            });
        };
        r.eventStore = new module1109;
        r.fetchData();
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.eventStore.list);
                const { data, isLoading } = e;
                return <Module1396 data={data} loading={isLoading}/>;
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
        }
    ]);
    return a;
})(Component);
const v = inject("s2iRunStore")(observer(h));
export default v;
const g = h;
export { g as Component };
