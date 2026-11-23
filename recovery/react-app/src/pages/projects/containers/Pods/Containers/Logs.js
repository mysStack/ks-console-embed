import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import { isEdgeWizePage } from "utils/index";
import Module802 from "components/Base/Card";
import Module848 from "components/Base/Empty";
import Module1364 from "unpacked/module-1364.js";
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                if (module26(this.store, "detail.containerID")) {
                    return <Module1364 isEdgeWize={isEdgeWizePage()} {...this.props.match.params}/>;
                }
                return <Module802><Module848 desc="CONTAINER_LOGS_NOT_SUPPORTED"/></Module802>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default y;
