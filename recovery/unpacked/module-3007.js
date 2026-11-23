import "./module-15.js";
import module186 from "./module-186.js";
import Module800 from "./module-800.js";
import "./module-553.js";
import { PATTERN_IP } from "./module-72.js";
export default function({ formRef, formTemplate }) {
    return <module186.Form ref={formRef} data={formTemplate}><module186.Columns><module186.Column><module186.Form.Item label={t("IP_ADDRESS")} rules={[
        {
            required: true,
            message: t("IP_ADDRESS_EMPTY_DESC")
        },
        {
            pattern: PATTERN_IP,
            message: t("INVALID_IP_DESC")
        }
    ]}><module186.Input name="ip"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("MASK")} rules={[
        {
            required: true,
            message: t("MASK_TIP")
        }
    ]}><Module800 name="mask" defaultValue={24} integer min={0} max={32}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("QUANTITY")} desc={t("IP_POOL_CREATE_COUNT_DESC")} rules={[
        {
            required: true,
            message: t("IP_POOL_NUM_TIP")
        }
    ]}><Module800 name="count" defaultValue={1} integer min={1} max={10}/></module186.Form.Item></module186.Form>;
};
