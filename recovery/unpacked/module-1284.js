import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module2193 from "./module-2193.js";
export default function(e) {
    const { onCancel, title, visible, isSubmitting, desc, icon } = e;
    return <Module788 width={600} onOk={function() {
        e.onOk();
    }} okText={t("OK")} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting} hideHeader><div className={module2193.title}>{icon ? <module186.Icon name={icon} size={20}/> : <module186.Icon name="information" size={20} className={module2193.icon}/>}{title}</div><p className={module2193.desc}>{desc}</p></Module788>;
};
