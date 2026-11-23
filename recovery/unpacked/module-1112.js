import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module2790 from "./module-2790.js";
export default function({ label: label_1, children, tips, className }) {
    return <div className={module3(module2790.wrapper, className)}><label className={module2790.label}><span>{label_1}</span>{tips && <module186.Tooltip content={tips}><module186.Icon name="information"/></module186.Tooltip>}</label><div className={module2790.content}>{children}</div></div>;
};
