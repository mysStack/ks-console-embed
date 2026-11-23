import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module2778 from "./module-2778.js";
export default function({ formData, children, onCancel, onSubmit }) {
    return <module186.Form className={module2778.wrapper} data={formData} onSubmit={onSubmit}><div className={module2778.form}>{children}</div><div className={module2778.formFooter}><module186.Button type="control" icon="close" iconType="light" onClick={onCancel}/><module186.Button type="control" icon="check" iconType="light" htmlType="submit"/></div></module186.Form>;
};
