import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import Module851 from "unpacked/module-851.js";
import module443 from "stores/service";
let a;
const m = inject("detailStore")(a = observer(a = ((Component_1)=>{
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r(...a) {
        let e;
        module36(this, r);
        e = t.call(this, ...a);
        e.serviceStore = new module443;
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.serviceStore.fetchDetail(this.props.match.params);
            }
        },
        {
            key: "render",
            value: function() {
                const cluster = this.props.match.params.cluster;
                if (this.serviceStore.isLoading) {
                    return null;
                }
                return <Module851 detail={this.serviceStore.detail} prefix={`/clusters/${cluster}`}/>;
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
                return this.props.detailStore;
            }
        }
    ]);
    return r;
})(Component)) || a) || a;
export default m;
