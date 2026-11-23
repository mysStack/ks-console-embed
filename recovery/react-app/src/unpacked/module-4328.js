import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module4329 from "unpacked/module-4329.js";
const h = ((e)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.valueRenderer = function(e) {
            const r = e?.cluster?.name;
            return module553.default.createElement("div", {
                title: r
            }, t("CLUSTER_VALUE", {
                value: r
            }));
        };
        e.optionRenderer = function(e) {
            const name = e.cluster.name;
            return module553.default.createElement("div", {
                title: name
            }, module553.default.createElement("div", null, name), !e.cluster.isReady && module553.default.createElement("div", null, module553.default.createElement(module997, {
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
                    className: module4329.select,
                    value: cluster,
                    onChange,
                    options: clusters,
                    placeholder: t("WHIZARD_MONITORING.OBSERVABILITY_ALL_CLUSTERS"),
                    valueRenderer: this.valueRenderer,
                    optionRenderer: this.optionRenderer,
                    showTip: true,
                    clearable: true
                });
            }
        }
    ]);
    return r;
})(module553.Component);
export default h;
