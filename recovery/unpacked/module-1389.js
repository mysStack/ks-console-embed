import "./module-15.js";
import "./module-16.js";
import "./module-553.js";
import module186 from "./module-186.js";
import Module836 from "./module-836.js";
import module3520 from "./module-3520.js";
export default function(e) {
    const { type, name, isActive } = e;
    const i = isActive !== undefined && isActive;
    const { icon, crumb } = e;
    const f = crumb !== undefined && crumb ? 18 : type === "openpitrixs" ? 35 : 40;
    return <>{type === "openpitrixs" ? <div className={module3520.img}><Module836 src={null} iconLetter={name} iconSize={f}/></div> : <module186.Icon name={icon} size={f} type={i ? "light" : "dark"}/>}</>;
};
