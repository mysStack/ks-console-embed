import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-553.js";
import Module802 from "components/Base/Card";
import module186 from "unpacked/module-186.js";
import module201 from "utils/cookie";
import module3508 from "unpacked/module-3508.js";
export default function({ handleSelected, cardConfigRule }) {
    const n = module201("lang") === "zh";
    return <div className={module3508.billHome}><div className={module3508.billHome__container}><div className={module3508.nav}><module186.Button icon="chevron-left" iconType="light"/><module186.Button icon="chevron-right" iconType="light"/><span className={module3508.message}>{t("RESOURCE_CONSUMPTION_DESC")}</span></div><div className={module3508.container}>{cardConfigRule && cardConfigRule.map((e)=><Module802 key={e.type} title=<module186.Icon name={e.icon} size={48}/>>{(({ subTitle, desc, infos, type })=><><h3 className={module3508.subTitle}>{t(subTitle)}</h3><p className={module3508.desc}>{t(desc)}</p><ul className={module3508.infos} style={{
                minHeight: n ? "25%" : "32%"
            }}>{infos.map((e, key)=><li key={key}>{t.html(e)}</li>)}</ul><module186.Button type="control" onClick={function() {
                return handleSelected(type);
            }}>{t("VIEW")}</module186.Button></>)(e)}</Module802>)}</div></div></div>;
};
