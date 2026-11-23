import "./module-15.js";
import "./module-18.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module800 from "./module-800.js";
import { unitTransformMap } from "./module-795.js";
import module1638 from "./module-1638.js";
import module1639 from "./module-1639.js";
import module1111 from "./module-1111.js";
import module1640 from "./module-1640.js";
import module1053 from "./module-1053.js";
import module1112 from "./module-1112.js";
import module2802 from "./module-2802.js";
const options = Object.keys(unitTransformMap).map((e)=>({
        label: e,
        value: e
    }));
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { supportMetrics, labelsets, onLabelSearch } = props;
                return module553.default.createElement("div", {
                    className: module2802.wrapper
                }, module553.default.createElement(module1111, {
                    label: t("BASIC_INFORMATION")
                }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                    name: "title"
                }, function({ onChange, value }) {
                    return module553.default.createElement(module1112, {
                        label: t("GRAPH_NAME")
                    }, module553.default.createElement(module186.Input, {
                        value,
                        onChange
                    }));
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                    name: "description"
                }, function({ onChange, value }) {
                    return module553.default.createElement(module1112, {
                        label: t("DESCRIPTION")
                    }, module553.default.createElement(module186.Input, {
                        value,
                        onChange
                    }));
                })))))), module553.default.createElement(module1111, {
                    label: t("DATA")
                }, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1638, {
                    name: "targets",
                    header: function({ add, value }) {
                        return module553.default.createElement(module1640, {
                            right: module553.default.createElement(module186.Button, {
                                type: "control",
                                onClick: function() {
                                    return add({
                                        step: module26(value, "[0].step", ""),
                                        legendFormat: "",
                                        expr: "",
                                        refId: Math.max.apply(null, value.map((e)=>e.refId)) + 1
                                    });
                                }
                            }, t("ADD"))
                        });
                    }
                }, function({ formItemName, onDelete, onUpClick, onDownClick, index }) {
                    return module553.default.createElement(module1639, {
                        key: index,
                        onDelete,
                        onUpClick,
                        onDownClick,
                        prefix: formItemName,
                        labelsets,
                        onLabelSearch,
                        supportMetrics
                    });
                }))), module553.default.createElement(module1111, {
                    label: t("Y_AXIS")
                }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                    name: "yaxes[0].format",
                    debounce: 100
                }, function({ onChange, value }) {
                    return module553.default.createElement(module1112, {
                        label: t("UNIT"),
                        tips: ""
                    }, module553.default.createElement(module186.Select, {
                        defaultValue: "none",
                        options,
                        value,
                        onChange
                    }));
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, null, module553.default.createElement(module1053, {
                    name: "yaxes[0].decimals",
                    debounce: 100
                }, function({ onChange, value }) {
                    return module553.default.createElement(module1112, {
                        label: t("DECIMALS"),
                        tips: ""
                    }, module553.default.createElement(module800, {
                        defaultValue: 0,
                        value,
                        max: 5,
                        min: 0,
                        onChange
                    }));
                }))))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default C;
