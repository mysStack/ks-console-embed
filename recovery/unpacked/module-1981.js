import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-85.js";
import "./module-4.js";
import "./module-553.js";
import module1 from "./module-1.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import module4986 from "./module-4986.js";
const FComponent = function({ gateway, rule, tls = {}, prefix }) {
    const d = tls.hosts && tls.hosts.includes(rule.host) ? "https" : "http";
    let rule_host = rule.host;
    if (gateway && gateway.ports && gateway.type === "NodePort") {
        const m = gateway.ports.find((e)=>e.name === d);
        if (m && (d === "http" && m.nodePort !== 80 || d === "https" && m.nodePort !== 443)) {
            rule_host = `${rule_host}:${m.nodePort}`;
        }
    }
    const description = <><span>{t("PROTOCOL_VALUE", {
        value: d.toUpperCase()
    })}</span>  {d === "https" && <span>{t("CERTIFICATE_VALUE", {
        value: tls.secretName
    })}</span>}</>;
    return <div className={module4986.card}><span className={module4986.tip}>{t("UNABLE_TO_ACCESS")}  <module186.Tooltip content={t.html("UNABLE_TO_ACCESS_TIP")}><module186.Icon name="question"/></module186.Tooltip></span><Module791 icon="ip" title={rule_host} description={description}/>{rule.http.paths.map((e)=><div key={e.path} className={module4986.path}><module186.Columns><module186.Column><span>{t.html("ROUTE_PATH_VALUE", {
            value: e.path
        })}</span></module186.Column><module186.Column><span>{t("SERVICE_COLON")}<strong><Link to={`${prefix}/services/${e.backend.service.name}`}>{e.backend.service.name}</Link></strong></span></module186.Column><module186.Column><span>{t.html("ROUTE_PORT_VALUE", {
            value: e.backend.service.port.number
        })}</span></module186.Column><module186.Column><a href={`${d}://${rule_host}${e.path}`} target="_blank" rel="noreferrer noopener"><module186.Button className={module4986.access}>{t("ACCESS_SERVICE")}</module186.Button></a></module186.Column></module186.Columns></div>)}</div>;
};
FComponent.propTypes = {
    rule: module1.object
};
export default FComponent;
