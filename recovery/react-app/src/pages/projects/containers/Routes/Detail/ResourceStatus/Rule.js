import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-85.js";
import "unpacked/module-4.js";
import "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module454 from "unpacked/module-454.js";
import module63 from "unpacked/module-63.js";
import module1822 from "unpacked/module-1822.js";
const PComponent = function({ gateway, rule, tls = [], prefix }) {
    const m = tls.find((e)=>e.hosts && e.hosts.includes(rule.host));
    const h = m ? "https" : "http";
    let rule_host = rule.host;
    const g = module26(gateway, "service", []);
    if (!module63(g)) {
        const y = module454(g, function(e) {
            return e.name === h;
        });
        if (y && (h === "http" && y.nodePort !== 80 || h === "https" && y.nodePort !== 443)) {
            rule_host = `${rule_host}:${y.nodePort}`;
        }
    }
    return <div className={module1822.card}><div className={module1822.content}><module186.Icon name="earth" size={40}/><div className={module1822.title}>{rule_host}<div><span>{t("PROTOCOL_VALUE", {
        value: h.toUpperCase()
    })}</span>{h === "https" && <span>{t("CERTIFICATE_VALUE", {
        value: m.secretName
    })}</span>}<span className={module1822.tip}>{t("UNABLE_TO_ACCESS")}  <module186.Tooltip content={t.html("UNABLE_TO_ACCESS_TIP")}><module186.Icon name="question"/></module186.Tooltip></span></div></div></div>{rule.http.paths.map((e, a)=><div key={`${e.path}-${a}`} className={module1822.path}><module186.Columns><module186.Column><span>{t.html("ROUTE_PATH_VALUE", {
            value: e.path
        })}</span></module186.Column><module186.Column><span>{t("SERVICE_COLON")}<strong><Link to={`${prefix}/services/${e.backend.service.name}`}>{e.backend.service.name}</Link></strong></span></module186.Column><module186.Column><span>{t.html("ROUTE_PORT_VALUE", {
            value: e.backend.service.port.number
        })}</span></module186.Column><module186.Column><a href={`${h}://${rule_host}${e.path}`} target="_blank" rel="noreferrer noopener"><module186.Button className={module1822.access}>{t("ACCESS_SERVICE")}</module186.Button></a></module186.Column></module186.Columns></div>)}</div>;
};
PComponent.propTypes = {
    rule: module1.object
};
export default PComponent;
