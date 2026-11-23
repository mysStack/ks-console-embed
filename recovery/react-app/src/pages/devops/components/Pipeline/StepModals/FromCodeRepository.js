import "unpacked/module-15.js";
import "unpacked/module-315.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-58.js";
import { useState } from "unpacked/module-553.js";
import Module1199 from "components/CodeRepoSelector";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module14 from "unpacked/module-14.js";
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
