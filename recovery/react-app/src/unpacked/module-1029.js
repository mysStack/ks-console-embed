import "./module-15.js";
import "./module-16.js";
import "./module-315.js";
import "./module-553.js";
import module186 from "./module-186.js";
import { severityOptions } from "./module-994.js";
import module2091 from "./module-2091.js";
export default function(e) {
    return <module186.Select options={severityOptions} optionRenderer={function({ label, value }) {
        return <span className={module2091[value]} style={{
            paddingTop: 2,
            paddingBottom: 2
        }}>{label}</span>;
    }} valueRenderer={function({ label, value }) {
        return <span className={module2091[value]}>{label}</span>;
    }} placeholder=" " {...e} name={e.name || "severity"}/>;
};
