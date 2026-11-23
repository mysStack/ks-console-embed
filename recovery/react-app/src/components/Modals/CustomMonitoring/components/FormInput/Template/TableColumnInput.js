import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-320.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module1053 from "unpacked/module-1053.js";
import Module1112 from "unpacked/module-1112.js";
import Module2805 from "components/Modals/CustomMonitoring/components/FormInput/TableColumnStyle";
import module2820 from "unpacked/module-2820.js";
export default function({ prefix, onUpClick, onDownClick, onDelete }) {
    return <div className={module2820.wrapper}><div className={module2820.sort}><module186.Icon name="sort-ascending" onClick={onUpClick}/><module186.Icon name="sort-descending" onClick={onDownClick}/></div><div className={module2820.form}><div className={module2820.firstLine}><div><module186.Form.Item className={module2820.name}><Module1053 name={`${prefix}.alias`}>{function({ onChange, value }) {
        return <div><Module1112 label={t("COLUMN_NAME")} tips=""><module186.Input className={module2820.input} value={value} onChange={onChange}/></Module1112></div>;
    }}</Module1053></module186.Form.Item><module186.Form.Item className={module2820.interval}><Module1053 name={`${prefix}.pattern`}>{function({ onChange, value }) {
        return <div><Module1112 label={t("FIELD_NAME")} tips=""><module186.Input className={module2820.input} value={value} onChange={onChange}/></Module1112></div>;
    }}</Module1053></module186.Form.Item></div><module186.Icon name="trash" onClick={onDelete}/></div><div className={module2820.exprInput}><module186.Form.Item><Module1053 name={`${prefix}`}>{function({ onChange, value }) {
        return <Module1112 label={t("DISPLAY_FORMAT")} tips=""><Module2805 value={value} onChange={function(e) {
            return onChange({
                ...value,
                ...e
            });
        }}/></Module1112>;
    }}</Module1053></module186.Form.Item></div></div></div>;
};
