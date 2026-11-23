import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module1 from "./module-1.js";
import module2295 from "./module-2295.js";
import module2297 from "./module-2297.js";
let u;
let o;
let i;
const S = observer((i = o = ((e)=>{
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
        e.getScheduleValue = function(t) {
            return module26(e.props.scheduleTemplate, "spec.clusters", {})[t].weight;
        };
        e.handleClusterChange = function(t, a) {
            const scheduleTemplate = e.props.scheduleTemplate;
            module74(scheduleTemplate, `spec.clusters.${a}.weight`, t);
        };
        e.totalChange = function(t) {
            const scheduleTemplate = e.props.scheduleTemplate;
            if (/^\+?[1-9][0-9]*$/.test(t)) {
                module74(scheduleTemplate, "spec.totalReplicas", Number(t));
            }
        };
        e.totalValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            if (/^\+?[1-9][0-9]*$/.test(a)) {
                r();
            } else {
                r({
                    message: t("ENTER_POSITIVE_INTEGER_DESC"),
                    field: e.field
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const clusters = this.props.clusters;
                return module553.default.createElement("div", null, module553.default.createElement(module186.Form.Item, {
                    label: t("TOTAL_REPLICAS"),
                    className: module2297.InputItem,
                    rules: [
                        {
                            required: true,
                            message: t("TOTAL_REPLICAS_EMPTY_DESC")
                        },
                        {
                            validator: this.totalValidator
                        }
                    ]
                }, module553.default.createElement(module186.Input, {
                    name: "totalReplicas",
                    onChange: this.totalChange
                })), module553.default.createElement("div", {
                    className: module2297.wrapper
                }, module553.default.createElement("div", {
                    className: module2297.clusterBox
                }, module14.toJS(clusters).map((t)=>module553.default.createElement(module2295, {
                        key: t.name,
                        cluster: t.name,
                        weight: _this.getScheduleValue(t.name),
                        handleClusterChange: _this.handleClusterChange
                    })))));
            }
        }
    ]);
    return r;
})(module553.Component), o.propsTypes = {
    scheduleTemplate: module1.object,
    clusters: module1.array
}, o.defaultProps = {
    clusters: [],
    scheduleTemplate: {
        weight: 1
    },
    seconds: 5,
    showConfirm: false
}, u = i)) || u;
export default S;
