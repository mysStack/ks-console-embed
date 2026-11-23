import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module1485 from "unpacked/module-1485.js";
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
