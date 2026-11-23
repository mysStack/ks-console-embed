import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-75.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module74 from "unpacked/module-74.js";
import module247 from "unpacked/module-247.js";
import module63 from "unpacked/module-63.js";
import module791 from "components/Base/Text";
import module852 from "components/Base/Switch";
import { COMPONENT_ICON_MAP } from "utils/constants";
import module2695 from "components/Forms/Cluster/ServiceComponents/ComponentSelect/Params";
import module2697 from "unpacked/module-2697.js";
const C = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleSwitch = function(t) {
            let a;
            const e_props = e.props;
            const { data, value, onChange } = e_props;
            if (t) {
                const u = data.parameters.filter((e)=>"default" in e && e.name !== "enabled").map((e)=>`${data.name}.${e.name}=${e.default}`);
                a = module247([].concat(module61(value), [
                    `${data.name}.enabled=true`
                ], module61(u)));
            } else {
                a = value.filter((e)=>!e.startsWith(data.name));
            }
            onChange(a);
        };
        e.handleParamsChange = function(t) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            const name = e.props.data.name;
            const o = Object.keys(t).reduce((acc, key)=>[].concat(module61(acc), [
                    `${name}.${key}=${t[key]}`
                ]), []);
            onChange(module247([].concat(module61(value.filter((e)=>!e.startsWith(name))), module61(o))));
        };
        return e;
    }
    module37(r, [
        {
            key: "renderParams",
            value: function() {
                const props = this.props;
                const { data, value } = props;
                const r = data.parameters.filter((e)=>e.name !== "enabled");
                if (module63(r)) {
                    return null;
                }
                const value_1 = value.filter((e)=>e.startsWith(data.name)).reduce((acc, item)=>{
                    const r = item.split("=");
                    const n = module96(r, 2);
                    const l = n[0];
                    const o = n[1];
                    module74(acc, l.replace(`${data.name}.`, ""), o);
                    return acc;
                }, {});
                return module553.default.createElement("div", {
                    className: "margin-b12"
                }, module553.default.createElement(module2695, {
                    data: r,
                    value: value_1,
                    onChange: this.handleParamsChange
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, value } = props;
                if (!data.parameters || !data.parameters.some((e)=>e.name === "enabled")) {
                    return null;
                }
                const checked = value.some((e)=>e === `${data.name}.enabled=true`);
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module3(module2697.item, module31({}, module2697.on, checked || data.always))
                }, module553.default.createElement(module791, {
                    icon: COMPONENT_ICON_MAP[data.name] || "apps",
                    title: t(data.title),
                    description: t(data.description)
                }), module553.default.createElement(module852, {
                    className: module2697.switch,
                    text: checked ? t("ENABLED") : t("DISABLED"),
                    onChange: this.handleSwitch,
                    checked
                })), checked && this.renderParams());
            }
        }
    ]);
    return r;
})(module553.Component);
export default C;
