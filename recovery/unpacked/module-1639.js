import "./module-15.js";
import "./module-320.js";
import "./module-16.js";
import "./module-315.js";
import "./module-58.js";
import "./module-553.js";
import module186 from "./module-186.js";
import Module1053 from "./module-1053.js";
import Module1112 from "./module-1112.js";
import Module1272 from "./module-1272.js";
import module2800 from "./module-2800.js";
export default function({ prefix, onUpClick, onDownClick, onDelete, ...rest }) {
    return <div className={module2800.wrapper}><div className={module2800.sort}><module186.Icon name="sort-ascending" onClick={onUpClick}/><module186.Icon name="sort-descending" onClick={onDownClick}/></div><div className={module2800.form}><div className={module2800.firstLine}><div><module186.Form.Item className={module2800.name}><Module1053 name={`${prefix}.legendFormat`} debounce={800}>{function({ onChange, value }) {
        return <div><Module1112 label={t("METRIC_NAME")} tips=""><module186.Input className={module2800.input} value={value} onChange={onChange}/></Module1112></div>;
    }}</Module1053></module186.Form.Item><module186.Form.Item className={module2800.interval}><Module1053 name={`${prefix}.step`} debounce={500}>{function({ onChange, value }) {
        return <div><Module1112 label={t("INTERVAL")} tips=""><module186.Input className={module2800.input} value={value} onChange={onChange}/></Module1112></div>;
    }}</Module1053></module186.Form.Item></div><module186.Icon name="trash" onClick={onDelete}/></div><div className={module2800.exprInput}><module186.Form.Item><Module1053 name={`${prefix}.expr`} debounce={500}>{function({ onChange, value }) {
        return <Module1272 value={value} onChange={onChange} {...rest}/>;
    }}</Module1053></module186.Form.Item></div></div></div>;
};
