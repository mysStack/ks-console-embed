import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module451 from "./module-451.js";
import Module790 from "./module-790.js";
import module4284 from "./module-4284.js";
export default function({ component, type }) {
    const n = component || type;
    return <Module790 className="margin-t12 margin-b12"><div className={module4284.empty}><div className={module4284.icon}><module186.Icon name="loadbalancer" size={48}/></div><div className={module4284.text}><div>{t(`${module451(n).toUpperCase()}_GATEWAY_NOT_ENABLED`)}</div><p>{t(`ENT_${n.toUpperCase()}_ENABLE_GATEWAY_DESC`)}</p></div></div></Module790>;
};
