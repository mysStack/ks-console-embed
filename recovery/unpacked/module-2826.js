import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module2827 from "./module-2827.js";
export default function({ title, description, children }) {
    return <div className={module2827.wrapper}><header><h3>{title}{description && <module186.Tooltip content={description}><module186.Icon name="question"/></module186.Tooltip>}</h3></header>{children}</div>;
};
