import "./module-15.js";
import "./module-315.js";
import * as module553 from "./module-553.js";
import module2099 from "./module-2099.js";
const i = module553.forwardRef(function(e, t) {
    const aRef = module553.useRef();
    module553.useImperativeHandle(t, function() {
        return {
            target: aRef.current.target
        };
    });
    return module553.default.createElement(module2099, {
        ref: aRef,
        ...e
    });
});
export default i;
