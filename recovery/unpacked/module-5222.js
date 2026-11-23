import "./module-15.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module5223 from "./module-5223.js";
export default function({ className = "", content }) {
    const o = module553.useState(true);
    const d = module96(o, 2);
    const f = d[0];
    const p = d[1];
    return module553.default.createElement("div", {
        className: module3(module5223.manage, className)
    }, module553.default.createElement(module186.Dropdown, {
        theme: "dark",
        content,
        trigger: "click",
        placement: "bottomRight",
        onClick: function() {
            return p(!f);
        }
    }, module553.default.createElement("div", {
        className: module5223.button
    }, module553.default.createElement("span", null, t("MANAGE")), module553.default.createElement(module186.Icon, {
        name: f ? "caret-down" : "caret-up",
        type: "dark"
    }))));
};
