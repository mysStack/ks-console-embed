import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
import "./module-85.js";
import "./module-315.js";
import "./module-4.js";
import module60 from "./module-60.js";
import "./module-553.js";
import module186 from "./module-186.js";
import { ACCESS_MODES } from "./module-72.js";
import module2869 from "./module-2869.js";
const FComponent = function({ name, value }) {
    return <div className={module2869.accessMode}><p className="name">{`${name}(${value})`}</p><p className="desc">{t(`ACCESS_MODE_${value}`)}</p></div>;
};
export default function(e) {
    if (e.loading) {
        return null;
    }
    let options = Object.keys(ACCESS_MODES).map((e)=>({
            label: <FComponent name={e} value={ACCESS_MODES[e]}/>,
            value: e
        }));
    if (module60(e.supportedAccessModes)) {
        options = options.filter((t)=>e.supportedAccessModes.includes(t.value));
    }
    return <div className={module2869.accessModeWrapper}><module186.RadioGroup options={options} {...e}/></div>;
};
