import "./module-15.js";
import "./module-315.js";
import module96 from "./module-96.js";
import "./module-58.js";
import { useState } from "./module-553.js";
import Module1199 from "./module-1199.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module14 from "./module-14.js";
export default function({ value: _value, onChange, devops, ...rest }) {
    const l = useState(false);
    const m = module96(l, 2);
    const visible = m[0];
    const v = m[1];
    const g = useState();
    const y = module96(g, 2);
    const E = y[0];
    const onChange_1 = y[1];
    return <div><module186.Button style={{
        height: 24
    }} size="small" onClick={function() {
        return v(true);
    }}>{t("IMPORT_FROM_CODE_REPO")}</module186.Button><Module788 title={t("IMPORT_FROM_CODE_REPO")} visible={visible} onCancel={function() {
        return v(false);
    }} onOk={function() {
        onChange(module14.toJS(E));
        v(false);
    }}><div style={{
        minHeight: 270
    }}><Module1199 {...rest} isCreatePipeline={false} devops={devops} onChange={onChange_1} value={E}/></div></Module788></div>;
};
