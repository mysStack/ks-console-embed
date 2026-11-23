import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import module3 from "unpacked/module-3.js";
import Module789 from "components/Base/Avatar";
import module243 from "unpacked/module-243.js";
import "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import { showNameAndAlias } from "utils/index";
import module4526 from "unpacked/module-4526.js";
export default function({ className, detail = {} }) {
    return <div className={module3(module4526.wrapper, className)}><div className={module4526.header}><Module789 noLink className={module4526.avatar} icon="project" title={showNameAndAlias(detail)} desc={detail.description || "-"} iconSize={48} iconType="light"/></div><div className={module4526.content}><div className={module4526.title}>{t("BASIC_INFORMATION")}</div><div className={module4526.infoList}><div className={module4526.text}><div>{showNameAndAlias(detail.cluster, "cluster", {}, false, undefined, true) || "-"}</div><p>{t("CLUSTER")}</p></div><div className={module4526.text}><div>{detail.workspace ? <Link to={`/workspaces/${detail.workspace}/overview`}>{showNameAndAlias(detail.workspace, "workspace", {}, undefined, undefined, true)}</Link> : "-"}</div><p>{t("WORKSPACE")}</p></div><div className={module4526.text}><div>{detail.creator || "-"}</div><p>{t("CREATOR")}</p></div><div className={module4526.text}><div>{detail.createTime ? module243(detail.createTime).format("YYYY-MM-DD HH:mm:ss") : "-"}</div><p>{t("CREATION_TIME")}</p></div></div></div></div>;
};
