import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-1134.js";
import Module851 from "unpacked/module-851.js";
import module186 from "unpacked/module-186.js";
let n;
const _ = inject("detailStore", "s2iRunStore")(n = observer(n = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "renderPods",
            value: function() {
                const params = this.props.match.params;
                const { workspace, cluster } = params;
                return <Module851 prefix={`/${workspace ? `/${workspace}` : ""}/clusters/${cluster}`} detail={{
                    cluster,
                    ...this.store.jobDetail
                }}/>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                if (this.store.isLoading) {
                    return <module186.Loading/>;
                }
                return <div>{this.renderContainerPorts()}{this.renderPods()}</div>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.s2iRunStore;
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default _;
