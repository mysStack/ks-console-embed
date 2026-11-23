import "./module-15.js";
import "./module-828.js";
import "./module-18.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import { copyToClipboard } from "./module-1247.js";
export default function({ password, color }) {
    const n = module553.useState(false);
    const o = module96(n, 2);
    const d = o[0];
    const f = o[1];
    return module553.default.createElement(module553.default.Fragment, null, d ? module553.default.createElement("span", null, password) : Array(10).fill("").map((e, key)=>module553.default.createElement(module186.Icon, {
            key,
            size: 12,
            name: "dot",
            style: {
                marginRight: -6
            },
            color
        })), password && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Icon, {
        name: "eye",
        onClick: function() {
            return f(!d);
        },
        style: {
            margin: "0 4px 0 6px"
        }
    }), module553.default.createElement("a", {
        href: "#",
        style: {
            color: "#329dce"
        },
        onClick: function(e) {
            e.preventDefault();
            copyToClipboard(password).then(()=>{
                module240.success({
                    content: t("COPY_SUCCESSFUL")
                });
            });
        }
    }, t("COPY"))));
};
