import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import Module4979 from "pages/fedprojects/containers/Applications/Detail/AppComponents/Components";
let n;
const p = inject("detailStore")(n = observer(n = ((Component_1)=>{
    module55(r, Component_1);
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
    })(r);
    function r(e) {
        let a;
        module36(this, r);
        a = t.call(this, e);
        a.store = e.detailStore;
        return a;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const workspace = this.props.match.params.workspace;
                const detail = this.store.detail;
                const { clusters, namespace } = detail;
                return clusters.map((r)=><Module4979 key={r.name} cluster={r.name} namespace={namespace} workspace={workspace} detail={_this.store.detail}/>);
            }
        }
    ]);
    return r;
})(Component)) || n) || n;
export default p;
