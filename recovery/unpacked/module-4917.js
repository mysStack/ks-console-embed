import "./module-15.js";
import "./module-18.js";
import "./module-553.js";
import Module789 from "./module-789.js";
import module1251 from "./module-1251.js";
export default function({ metadata = {} }) {
    const n = [
        {
            title: metadata?.timezone,
            desc: t("TIME_ZONE"),
            icon: "map-time"
        },
        {
            title: metadata?.desiredReplicas,
            desc: t("REPLICAS_DESIRED"),
            icon: "pod"
        },
        {
            title: metadata?.start,
            desc: t("START_TIME"),
            icon: "clock-duotone"
        },
        {
            title: metadata?.end,
            desc: t("END_TIME"),
            icon: "clock-duotone"
        }
    ];
    return <div className={module1251.itemBox}><div className={module1251.itemBoxTitle}><Module789 icon="cronjob-duotone" iconSize={40} title="Cron" desc={t("CORN_DESC")} noLink/></div><div className={module1251.itemBoxBody}>{n.map((e, key)=><div className={module1251.itemBoxBodyItem} key={key}><Module789 icon={e.icon} iconSize={40} title={e.title} desc={e.desc} noLink/></div>)}</div></div>;
};
