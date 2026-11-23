import "./module-15.js";
import "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import Module2072 from "./module-2072.js";
import Module2074 from "./module-2074.js";
export default function(e) {
    const e_rule = e.rule;
    if ((module63(module26(e_rule, "exprBuilder", "")) ? "custom" : "template") == "template") {
        return <Module2074 {...e}/>;
    }
    return <Module2072 {...e}/>;
};
