import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module800 from "components/Inputs/NumberInput";
import { unitTransformMap } from "utils/monitoring";
import module1272 from "unpacked/module-1272.js";
import module1053 from "unpacked/module-1053.js";
import module1112 from "unpacked/module-1112.js";
import module2791 from "unpacked/module-2791.js";
const options = Object.keys(unitTransformMap).map((e)=>({
        label: e,
        value: e
    }));
const S = ((e)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", {
                    className: module2791.wrapper
                }, module553.default.createElement("div", {
                    className: module2791.config
                }, module553.default.createElement(module186.Form.Item, {
                    rules: [
                        {
                            required: true,
                            message: t("NAME_EMPTY_DESC")
                        }
                    ]
                }, module553.default.createElement(module1053, {
                    name: "title"
                }, function({ onChange, value }) {
                    return module553.default.createElement(module1112, {
                        label: t("GRAPH_NAME"),
                        tips: ""
                    }, module553.default.createElement(module186.Input, {
                        className: module2791.input,
                        value,
                        onChange
                    }));
                })), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                    name: "format",
                    defaultValue: options[0]
                }, function({ onChange, value }) {
                    return module553.default.createElement(module1112, {
                        label: t("UNIT"),
                        tips: ""
                    }, module553.default.createElement(module186.Select, {
                        options,
                        value,
                        onChange
                    }));
                })), module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                    name: "decimals",
                    defaultValue: 0
                }, function({ onChange, value }) {
                    return module553.default.createElement(module1112, {
                        label: t("DECIMALS"),
                        tips: ""
                    }, module553.default.createElement(module800, {
                        value,
                        max: 5,
                        min: 0,
                        onChange
                    }));
                }))), module553.default.createElement("div", {
                    className: module2791.metric
                }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1272, {
                    name: "targets[0].expr",
                    ...this.props
                }))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default S;
