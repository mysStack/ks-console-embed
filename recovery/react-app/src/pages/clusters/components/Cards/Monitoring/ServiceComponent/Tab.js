import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module3765 from "unpacked/module-3765.js";
export default function({ active, icon, name, title }) {
    return <div className={module3(module3765.tab, module31({}, module3765.active, active))}><module186.Icon name={icon} size={40} {...active ? {
        color: {
            primary: "#fff",
            secondary: "#fff"
        }
    } : null}/><div className={module3765.info}><div className={module3765.title}>{t(name)}</div><p dangerouslySetInnerHTML={{
        __html: t(title)
    }}/></div></div>;
};
