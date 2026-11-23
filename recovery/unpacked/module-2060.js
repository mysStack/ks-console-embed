import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "./module-72.js";
export default function({ formRef, formTemplate }) {
    return <module186.Form ref={formRef} data={formTemplate.PersistentVolume}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("LONG_NAME_DESC")} rules={[
        {
            required: true,
            message: t("NAME_EMPTY_DESC")
        },
        {
            pattern: PATTERN_NAME,
            message: t("LONG_NAME_DESC")
        }
    ]}><module186.Input name="metadata.name" maxLength={253}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
        {
            pattern: PATTERN_ALIAS_NAME,
            message: t("INVALID_ALIAS_NAME_DESC")
        }
    ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>;
};
