import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module2774 from "./module-2774.js";
export default function({ errorMessage, children }) {
    return <div className={module2774.wrapper}>{errorMessage && <module186.Tooltip content={errorMessage}><div className={module2774.error}/></module186.Tooltip>}{children}</div>;
};
