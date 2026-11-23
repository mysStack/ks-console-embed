import "./module-15.js";
import "./module-315.js";
import module96 from "./module-96.js";
import "./module-58.js";
import * as module553 from "./module-553.js";
import module1039 from "./module-1039.js";
import module1295 from "./module-1295.js";
const f = (e)=>{
    if (module1039(e)) {
        return e;
    }
    return "";
};
export default function({ onChange, value, ...rest }) {
    const n = module553.useState(f(value));
    const s = module96(n, 2);
    const value_1 = s[0];
    const p = s[1];
    module553.useEffect(function() {
        p(f(value));
    }, [
        value
    ]);
    return module553.default.createElement(module1295, {
        ...rest,
        value: value_1,
        onChange: function(e) {
            p(e);
            onChange(e);
        }
    });
};
