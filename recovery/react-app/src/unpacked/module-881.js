import "./module-15.js";
import "./module-29.js";
import "./module-4.js";
import "./module-553.js";
import { severityOptions } from "./module-994.js";
export default function({ data }) {
    if (data) {
        const r = severityOptions.find((e)=>e.value === data);
        if (r) {
            return <span style={{
                backgroundColor: r.bgColor,
                color: r.color,
                fontWeight: 600,
                padding: "0px 4px",
                whiteSpace: "nowrap"
            }}>{t(r.label)}</span>;
        }
    }
    return "-";
};
