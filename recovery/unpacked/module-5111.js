import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
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
import module26 from "./module-26.js";
import Module1396 from "./module-1396.js";
const y = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.eventStore = new module1109;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "fetchData",
            value: async function() {
                let t;
                let r;
                let namespace;
                let o;
                t = this.store.runDetail._originData;
                r = t === undefined ? {} : t;
                namespace = module26(r, "metadata.namespace", "");
                o = {
                    "involvedObject.name": module26(r, "metadata.name", ""),
                    "involvedObject.namespace": namespace,
                    "involvedObject.kind": r.kind,
                    "involvedObject.uid": module26(r, "metadata.uid", "")
                };
                this.eventStore.fetchList({
                    namespace,
                    cluster: this.cluster,
                    fieldSelector: joinSelector(o)
                });
            }
        },
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
                return this.props.detailStore;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "module",
            get: function() {
                return this.store.module;
            }
        }
    ]);
    return n;
})(Component);
const b = inject("detailStore")(observer(y));
export default b;
const E = y;
export { E as Component };
