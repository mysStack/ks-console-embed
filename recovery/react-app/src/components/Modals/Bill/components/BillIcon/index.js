import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module836 from "components/Base/Image";
import module3520 from "unpacked/module-3520.js";
export default function(e) {
    const { type, name, isActive } = e;
    const i = isActive !== undefined && isActive;
    const { icon, crumb } = e;
    const f = crumb !== undefined && crumb ? 18 : type === "openpitrixs" ? 35 : 40;
    return <>{type === "openpitrixs" ? <div className={module3520.img}><Module836 src={null} iconLetter={name} iconSize={f}/></div> : <module186.Icon name={icon} size={f} type={i ? "light" : "dark"}/>}</>;
};
