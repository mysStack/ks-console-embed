import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module4603 from "unpacked/module-4603.js";
const v = {
    cloud: "cloud",
    heptagon: "appcenter"
};
const g = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleClick = function() {
            const e_props = e.props;
            e_props.onClick(e_props.data);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { data, isSelected } = props;
                const { label, labelMinor, x, y } = data;
                if (data && data.metadata) {
                    const u = data.metadata.find((e)=>e.id === "kubernetes_ip");
                    if (u) {
                        e = u.value;
                    }
                }
                return module553.default.createElement("g", {
                    className: module4603.wrapper,
                    transform: `translate(${x - 75}, ${y - 50})`
                }, module553.default.createElement("rect", {
                    width: 150,
                    height: 100,
                    rx: 4
                }), module553.default.createElement("foreignObject", {
                    width: 150,
                    height: 100
                }, module553.default.createElement("div", {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    className: module3(module4603.service, module31({}, module4603.selected, isSelected)),
                    onClick: this.handleClick
                }, module553.default.createElement("div", {
                    className: module4603.header
                }, module553.default.createElement("div", {
                    className: module4603.icon
                }, module553.default.createElement(module186.Icon, {
                    name: v[data.shape],
                    size: 40
                })), module553.default.createElement("div", {
                    className: module4603.text
                }, module553.default.createElement("div", {
                    className: module4603.title,
                    title: label
                }, label), module553.default.createElement("div", {
                    className: module4603.description
                }, t("POD_COUNT_VALUE", {
                    value: labelMinor.replace(/[ a-z]/g, "")
                })))), module553.default.createElement("div", {
                    className: module4603.footer
                }, e ? t(e.toUpperCase()) : label))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
