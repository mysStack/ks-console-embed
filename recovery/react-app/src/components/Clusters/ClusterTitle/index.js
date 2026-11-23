import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-4.js";
import "unpacked/module-553.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "utils/constants";
import Module789 from "components/Base/Avatar";
import Module838 from "components/Base/Indicator";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module997 from "unpacked/module-997.js";
import { ClusterTagGroup } from "unpacked/module-925.js";
import { showNameAndAlias } from "utils/index";
import Module4318 from "unpacked/module-4318.js";
import module4320 from "unpacked/module-4320.js";
export default function({ gridType = "row", clusterDetail = {}, tagGroupList = [] }) {
    const icon = CLUSTER_PROVIDER_ICON[clusterDetail.provider] || "kubernetes";
    const clusterDetail_group = clusterDetail.group;
    const O = gridType !== "row";
    return <div className={module3(module4320.card, module31({}, `${module4320.grid}`, O))}><div className={module4320.header}><><Module789 className={module4320.headTitle} title=<div className={module4320.avatarTitle}><span className={module4320.avatarText} title={showNameAndAlias(clusterDetail)}>{showNameAndAlias(clusterDetail)}</span>{O && clusterDetail_group && <module186.Tag type={CLUSTER_GROUP_TAG_TYPE[clusterDetail_group]}>{t(`ENV_${clusterDetail_group.toUpperCase()}`, {
        defaultValue: clusterDetail_group
    })}</module186.Tag>}</div> desc=<div className={module4320.desc}><span style={{
        marginRight: "8px"
    }}>{clusterDetail.isHost ? t("HOST_CLUSTER") : t("MEMBER_CLUSTER_SCAP")}</span>{!clusterDetail.isReady && <Module997 data={clusterDetail} placement="right" tooltipModifiers={{
        preventOverflow: {
            enabled: false
        }
    }}/>}</div> icon={icon} iconSize={40} to={clusterDetail.isReady ? `/whizard-telemetry/${clusterDetail.name}/overview` : ""}/>{clusterDetail.isReady && <Module838 className={module4320.indicator} status="ready"/>}</></div>{O && <div className={module4320.content}><div className={module4320.contentItem}><Module4318 title={t("NODE_COUNT")} desc={clusterDetail.nodeCount}/></div><div className={module4320.contentItem}><Module4318 title={t("KUBERNETES_VERSION")} desc={clusterDetail.kubernetesVersion}/></div><div className={module4320.contentItem}><Module4318 className={module4320.groupTags} title={t("CLUSTER_TAGS")} desc=<ClusterTagGroup className={module4320.clusterTagGroup} data={(clusterDetail.tags ?? []).map((e)=>(tagGroupList || []).find((t)=>e.name === t.name)).filter(Boolean)} empty="-"/>/></div></div>}</div>;
};
