import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-85.js";
import "unpacked/module-315.js";
import "unpacked/module-4.js";
import module60 from "unpacked/module-60.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import { ACCESS_MODES } from "utils/constants";
import module2869 from "unpacked/module-2869.js";
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
