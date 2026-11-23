import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-85.js";
import "./module-7.js";
import "./module-4.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import "./module-553.js";
import module1 from "./module-1.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import { getDisplayName } from "./module-52.js";
import module4748 from "./module-4748.js";
const PComponent = function({ detail, gateway, prefix }) {
    const l = {};
    const p = module26(gateway, "service", []);
    if (!(module63(p) || p == null)) {
        p.forEach((e)=>{
            if (e.name === "http" && e.nodePort !== 80) {
                l.http = e.nodePort;
            }
            if (e.name === "https" && e.nodePort !== 443) {
                l.https = e.nodePort;
            }
        });
    }
    if (module63(detail.rules)) {
        return null;
    }
    const m = detail.tls || [];
    const h = getDisplayName(detail);
    return <div className={module4748.card}><div className={module4748.content}><module186.Icon name="loadbalancer" size={40}/><div className={module4748.text}><Link to={`${prefix}/ingresses/${detail.name}`}>{h}</Link><p>{t("DOMAIN_NAME_VALUE", {
        value: detail.rules.map((e)=>e.host).join(", ")
    })}</p></div></div><ul className={module4748.rules}>{detail.rules.map((e)=>{
        const a = m.hosts && m.hosts.includes(e.host) ? "https" : "http";
        let r = `${a}://${e.host}`;
        if (l[a]) {
            r = `${r}:${l[a]}`;
        }
        return e.http.paths.map((a)=><li key={`${e.host}${a.path}`}><span>URL:  </span><span><strong>{r}{a.path}</strong></span><a href={`${r}${a.path}`} target="_blank" rel="noreferrer noopener"><module186.Button className={module4748.access}>{t("ACCESS_SERVICE")}</module186.Button></a></li>);
    })}</ul></div>;
};
PComponent.propTypes = {
    rule: module1.object
};
export default PComponent;
