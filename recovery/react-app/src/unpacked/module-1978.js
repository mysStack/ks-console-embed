import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import * as module553 from "unpacked/module-553.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import module4919 from "unpacked/module-4919.js";
const u = module553.memo(function({ data }) {
    if (module63(data)) {
        return module553.default.createElement("ul", {
            className: module4919.annotations
        }, module553.default.createElement("li", null, t("NO_DATA")));
    }
    return module553.default.createElement("ul", {
        className: module4919.annotations
    }, Object.keys(data).filter((e)=>!module63(data[e])).map((e)=>module553.default.createElement("li", {
            key: e
        }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, {
            className: "is-narrow"
        }, module553.default.createElement("p", {
            style: {
                width: 317
            }
        }, e)), module553.default.createElement(module186.Column, null, module553.default.createElement("p", null, data[e]))))));
});
export default u;
