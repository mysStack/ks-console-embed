import "./module-15.js";
import "./module-10.js";
import "./module-315.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module2081 from "./module-2081.js";
import module2094 from "./module-2094.js";
const f = module553.forwardRef(function(e, t) {
    const e_editRule = e.editRule;
    const r = module26(e_editRule, "exprBuilder", {
        node: {}
    });
    const n = module553.useState(Object.keys(r)[0]);
    const f = module96(n, 2);
    const d = f[0];
    const exprBuilderTypeChange = f[1];
    const mRef = module553.useRef();
    const hRef = module553.useRef();
    module553.useImperativeHandle(t, function() {
        return {
            target: d === "node" ? mRef.current.target : hRef.current.target
        };
    });
    if (d === "node") {
        return module553.default.createElement(module2081, {
            ref: mRef,
            exprBuilderTypeChange,
            ...e
        });
    }
    return module553.default.createElement(module2094, {
        ref: hRef,
        exprBuilderTypeChange,
        ...e
    });
});
export default f;
