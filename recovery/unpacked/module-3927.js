import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import Module3928 from "./module-3928.js";
let n;
const y = inject("detailStore")(n = observer(n = ((Component_1)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.fetchData = function(t) {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            if (e.store.fetchDetail) {
                e.store.fetchDetail({
                    cluster,
                    namespace,
                    name,
                    type: e.type,
                    ...t
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
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                return <Module3928 store={this.store} cluster={cluster} namespace={namespace} rules={this.rules} handleRefresh={this.fetchData}/>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "module",
            get: function() {
                return this.store.module;
            }
        },
        {
            key: "params",
            get: function() {
                return this.props.match.params;
            }
        },
        {
            key: "type",
            get: function() {
                if (this.props.match.url.indexOf("alert-rules/builtin") > 0) {
                    return "builtin";
                }
                return "";
            }
        },
        {
            key: "rules",
            get: function() {
                return module14.toJS(module26(this.store, "detail._originDataWithStatus.spec.rules", []));
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default y;
