import "./module-15.js";
import module31 from "./module-31.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module2761 from "./module-2761.js";
export default function({ title, isEditing, onChange, theme }) {
    return <div className={module3(module2761.wrapper, module31({}, module2761.dark, theme === "dark"))}>{isEditing ? <module186.Input onChange={onChange} value={title} placeholder={t("DASHBOARD_TITILE")}/> : <span className={module3(module2761.title, module31({}, module2761.dark, theme === "dark"))}>{title}</span>}</div>;
};
