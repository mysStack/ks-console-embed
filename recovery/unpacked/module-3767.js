import "./module-15.js";
import "./module-16.js";
import "./module-315.js";
import module31 from "./module-31.js";
import "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module3768 from "./module-3768.js";
export default function({ active, icon, name, title }) {
    return <div className={module3(module3768.tab, module31({}, module3768.active, active))}><module186.Icon name={icon} size={40} {...active ? {
        color: {
            primary: "#fff",
            secondary: "#fff"
        }
    } : null}/><div className={module3768.info}><div className={module3768.title}>{t(name)}</div><p dangerouslySetInnerHTML={{
        __html: t(title)
    }}/></div></div>;
};
