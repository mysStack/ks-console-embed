import "unpacked/module-15.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module3800 from "unpacked/module-3800.js";
export default function({ className = "", content }) {
    const l = module553.useState(true);
    const f = module96(l, 2);
    const d = f[0];
    const p = f[1];
    return module553.default.createElement("div", {
        className: module3(module3800.manage, className)
    }, module553.default.createElement(module186.Dropdown, {
        theme: "dark",
        content,
        trigger: "click",
        placement: "bottomRight",
        onClick: function() {
            return p(!d);
        }
    }, module553.default.createElement("div", {
        className: module3800.button
    }, module553.default.createElement("span", null, t("MANAGE")), module553.default.createElement(module186.Icon, {
        name: d ? "caret-down" : "caret-up",
        type: "dark"
    }))));
};
