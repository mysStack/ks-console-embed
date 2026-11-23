import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module997 from "unpacked/module-997.js";
import { showNameAndAlias } from "utils/index";
import module3821 from "unpacked/module-3821.js";
const v = ((e)=>{
    module55(r, e);
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.valueRenderer = function(e) {
            return module553.default.createElement("div", {
                title: showNameAndAlias(e.cluster)
            }, t("CLUSTER_VALUE", {
                value: showNameAndAlias(e.cluster)
            }));
        };
        e.optionRenderer = function(e) {
            const title = showNameAndAlias(e.cluster);
            return module553.default.createElement("div", {
                title
            }, module553.default.createElement("div", null, title), !e.cluster.isReady && module553.default.createElement("div", null, module553.default.createElement(module997, {
                data: e.cluster,
                noTip: true
            })));
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, clusters, onChange } = props;
                return module553.default.createElement(module186.Select, {
                    className: module3821.select,
                    value: cluster,
                    onChange,
                    options: clusters,
                    valueRenderer: this.valueRenderer,
                    optionRenderer: this.optionRenderer,
                    showTip: true
                });
            }
        }
    ]);
    return r;
})(module553.Component);
export default v;
