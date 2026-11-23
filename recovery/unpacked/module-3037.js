import "./module-15.js";
import "./module-315.js";
import "./module-58.js";
import "./module-553.js";
import module186 from "./module-186.js";
import Module868 from "./module-868.js";
import module1696 from "./module-1696.js";
export default function({ onSelect, onDelete, disabled, ...rest }) {
    const options = [
        {
            label: t("NOSCHEDULE"),
            value: "NoSchedule"
        },
        {
            label: t("PREFERNOSCHEDULE"),
            value: "PreferNoSchedule"
        },
        {
            label: t("NOEXECUTE"),
            value: "NoExecute"
        }
    ];
    return <div className={module1696.item}><Module868 className={module1696.inputs} {...rest}><module186.Input name="key" placeholder={t("KEY")}/><module186.Input name="value" placeholder={t("VALUE")}/><module186.Select name="effect" options={options} defaultValue="NoSchedule"/></Module868><div className={module1696.tips}><module186.Tooltip content=<div style={{
        width: 200
    }} dangerouslySetInnerHTML={{
        __html: t("TAINTS_TIPS")
    }}/>><module186.Icon name="question" size={16}/></module186.Tooltip></div><div className={module1696.actions}>{onSelect && <module186.Tooltip content={t("TAINT_SELECT_TIPS")}><module186.Button type="flat" icon="add" className={module1696.select} disabled={disabled} onClick={onSelect}/></module186.Tooltip>}{onDelete && <module186.Tooltip content={t("TAINT_DELETE_TIP")}><module186.Button type="flat" icon="trash" className={module1696.delete} onClick={onDelete}/></module186.Tooltip>}</div></div>;
};
