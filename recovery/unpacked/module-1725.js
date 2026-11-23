import "./module-15.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module1378 from "./module-1378.js";
export default function({ src, style, className }) {
    const n = module553.useState(true);
    const s = module96(n, 2);
    const f = s[0];
    const d = s[1];
    return module553.default.createElement("div", {
        className: module3(className, module1378.loadingImage)
    }, f && module553.default.createElement(module186.Loading, {
        className: module1378.loading
    }), module553.default.createElement("img", {
        style,
        src,
        alt: "",
        onLoad: function() {
            return d(false);
        }
    }));
};
