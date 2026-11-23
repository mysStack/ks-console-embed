import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-553.js";
import Module789 from "components/Base/Avatar";
import module63 from "unpacked/module-63.js";
import Module1978 from "unpacked/module-1978.js";
import module1251 from "unpacked/module-1251.js";
export default function({ metadata = {}, authenticationRef = {} }) {
    const d = [
        {
            title: metadata.serverAddress,
            desc: t("ADDRESS"),
            icon: "network-duotone"
        },
        {
            title: metadata.metricName,
            desc: t("INDICATOR_NAME"),
            icon: "textarea-duotone"
        },
        {
            title: metadata.threshold,
            desc: t("THRESHOLD"),
            icon: "proportion-chart"
        },
        {
            title: metadata.query,
            desc: t("EXPRESSION"),
            icon: "apps-duotone"
        }
    ];
    return <div className={module1251.itemBox}><div className={module1251.itemBoxTitle}><Module789 icon="prometheus" iconSize={40} title="Prometheus" desc={t("SCALING_Prometheus_DESC")} noLink/></div><div className={module1251.itemBoxBody2Column}>{d.map((e, key)=><div className={module1251.itemBoxBodyItem} key={key}><Module789 icon={e.icon} iconSize={40} title={e.title} desc={e.desc} noLink/></div>)}</div>{!module63(authenticationRef) && <div className={module1251.authentication}><section>{t("TOGGLER_AUTHOR")}</section><Module1978 data={authenticationRef}/></div>}</div>;
};
