import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import { ICON_TYPES } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import module1795 from "unpacked/module-1795.js";
export default function({ prefix = "", data = {} }) {
    const { node_name, node_ip, isOnline, hasLeader, isLeader, leaderChanges } = data;
    const y = !node_name;
    const type = isOnline ? "running" : "error";
    return <div key={node_ip} className={module1795.item}><div className={module1795.icon}><module186.Icon name={ICON_TYPES.etcd} size={40}/><Module796 className={module1795.status} type={type}/></div><div className={module1795.info}><p><strong>{y ? t("EXTERNAL_ETCD") : <Link to={`${prefix}/${node_name}`}>{node_name}</Link>}{isLeader && <module186.Tag className={module1795.tag}>leader</module186.Tag>}</strong><span>{t("NODE_IP_ADDRESS_VALUE", {
        value: node_ip || "-"
    })}</span></p><p><strong>{hasLeader ? t("YES") : t("NO")}</strong><span>{t("ETCD_LEADER_TITLE")}</span></p><p><strong>{leaderChanges}</strong><span>{t("ETCD_CHANGES_TITLE")}</span></p></div></div>;
};
