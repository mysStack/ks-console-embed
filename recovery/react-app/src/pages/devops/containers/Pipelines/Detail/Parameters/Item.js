import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-118.js";
import "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module5114 from "unpacked/module-5114.js";
export default function({ title, list }) {
    return <div className={module3(module5114.card, {})}><div className={module5114.header}><div className={module5114.title}>{title}</div></div><div className={module3(module5114.content, {})}>{list.map((e, key)=><div key={key} className={module5114.item}>{Array.isArray(e) && e.map((e)=><span key={e} className={module5114.kv}>{e}</span>)}{typeof e === "string" && <span className={module5114.kv}>{e}</span>}</div>)}</div></div>;
};
