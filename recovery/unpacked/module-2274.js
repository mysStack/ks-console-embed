import "./module-15.js";
import module31 from "./module-31.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module1539 from "./module-1539.js";
export default function({ tag, selectedImageTag }) {
    return <div className={module3(module1539.imageTagDetailItem, module31({}, module1539.checked, tag === selectedImageTag))}><module186.Icon name="tag" className={module1539.icon} size={20} type={tag === selectedImageTag ? "light" : "dark"}/><p className={module1539.tagName}>{tag}</p></div>;
};
