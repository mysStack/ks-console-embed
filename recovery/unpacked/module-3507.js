import "./module-15.js";
import "./module-18.js";
import "./module-553.js";
import Module802 from "./module-802.js";
import module186 from "./module-186.js";
import module201 from "./module-201.js";
import module3508 from "./module-3508.js";
export default function({ handleSelected, cardConfigRule }) {
    const n = module201("lang") === "zh";
    return <div className={module3508.billHome}><div className={module3508.billHome__container}><div className={module3508.nav}><module186.Button icon="chevron-left" iconType="light"/><module186.Button icon="chevron-right" iconType="light"/><span className={module3508.message}>{t("RESOURCE_CONSUMPTION_DESC")}</span></div><div className={module3508.container}>{cardConfigRule && cardConfigRule.map((e)=><Module802 key={e.type} title=<module186.Icon name={e.icon} size={48}/>>{(({ subTitle, desc, infos, type })=><><h3 className={module3508.subTitle}>{t(subTitle)}</h3><p className={module3508.desc}>{t(desc)}</p><ul className={module3508.infos} style={{
                minHeight: n ? "25%" : "32%"
            }}>{infos.map((e, key)=><li key={key}>{t.html(e)}</li>)}</ul><module186.Button type="control" onClick={function() {
                return handleSelected(type);
            }}>{t("VIEW")}</module186.Button></>)(e)}</Module802>)}</div></div></div>;
};
