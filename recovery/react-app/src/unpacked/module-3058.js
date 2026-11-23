import "./module-15.js";
import "./module-11.js";
import "./module-16.js";
import "./module-4.js";
import "./module-553.js";
import module186 from "./module-186.js";
import { getSoftIconName } from "./module-983.js";
import module814 from "components/Base/List";
import Module796 from "components/Base/Status";
import module3059 from "./module-3059.js";
export default function({ software, simpleMode, onClick, className }) {
    const { name, runningStatus, version } = software;
    const checked = runningStatus === "running";
    const h = [
        {
            title: <Module796 type={runningStatus} className={module3059.status} name={t(`NODE_STATUS_${runningStatus?.toLocaleUpperCase()}`)}/>,
            description: t("STATUS"),
            show: !simpleMode && !!runningStatus
        },
        {
            title: t(version),
            description: t("VERSIONS"),
            show: !!version
        }
    ];
    return <module814.Item className={className} icon={getSoftIconName(name)} title={name} status={simpleMode ? runningStatus : undefined} description={t("EDGE_SOFT")} details={h.filter((e)=>!!e.show)} operations={!simpleMode && <><module186.Tooltip content={t("UNINSTALL")} placement="bottom"><module186.Button type="flat" icon="trash" onClick={function() {
        return onClick("uninstall", software);
    }}/></module186.Tooltip><module186.Tooltip content={t("SOFT_RESTART")} placement="bottom"><module186.Button type="flat" icon="refresh" onClick={function() {
        return onClick("restart", software);
    }} style={{
        marginRight: "12px"
    }}/></module186.Tooltip><module186.Toggle checked={checked} onText={t("ENABLE")} offText={t("STOP_SOFT_TEXT")} onChange={function(e) {
        onClick(e ? "start" : "stop", software);
    }}/></>}/>;
};
