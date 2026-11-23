import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module1485 from "./module-1485.js";
export default function({ component, index, value, arrayValue, onChange, onDelete }) {
    const d = module553.useState("");
    const p = module96(d, 2);
    const m = p[0];
    const h = p[1];
    const v = module553.default.cloneElement(component, {
        ...component.props,
        index,
        value,
        onChange,
        arrayValue,
        handleKeyError: function(e) {
            const a = e?.message ?? "";
            h(a);
        }
    });
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module1485.item
    }, v, module553.default.createElement(module186.Button, {
        type: "flat",
        icon: "trash",
        className: module1485.delete,
        onClick: onDelete
    })), m !== "" && module553.default.createElement("div", {
        className: module1485.errorText
    }, m));
};
