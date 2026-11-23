import "./module-15.js";
import "./module-315.js";
import * as module553 from "./module-553.js";
import module2203 from "./module-2203.js";
import module2208 from "./module-2208.js";
const s = module553.forwardRef(function(e, t) {
    const e_namespace = e.namespace;
    const rRef = module553.useRef();
    const nRef = module553.useRef();
    module553.useImperativeHandle(t, function() {
        return {
            target: e_namespace ? nRef.current.target : rRef.current.target
        };
    });
    if (e_namespace) {
        return module553.default.createElement(module2208, {
            ref: nRef,
            ...e
        });
    }
    return module553.default.createElement(module2203, {
        ref: rRef,
        ...e
    });
});
export default s;
