import "./module-15.js";
import "./module-187.js";
import "./module-97.js";
import "./module-10.js";
import "./module-4.js";
import "./module-24.js";
import "./module-193.js";
import "./module-553.js";
import module3 from "./module-3.js";
import Module843 from "components/Inputs/PropertiesInput";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import { LIMIT_RULE_LABELS_MAPPER } from "utils/constants";
import module2093 from "./module-2093.js";
export default function() {
    return <><div className={module2093.label}>{t("RULE_LABEL_SETTING")}</div><div className={module3(module2093.contentGroup, module2093.lineContent)}><module186.Form.Item label={t("RULE_LABEL_SETTING")} desc={t("RULE_LABEL_SETTING_DESC")} rules={[
        {
            validator: function(e, a, r) {
                const n = Object.keys(a ?? {});
                if (n.some((e)=>module63(e))) {
                    return r(t("EMPTY_KEY"));
                }
                if (n.every((e)=>/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e))) {
                    return void r();
                }
                return r(t("INCORRECT_KEY_DESC"));
            }
        }
    ]}><Module843 name="labels" addText={t("ADD")} controlled readOnlyKeys={LIMIT_RULE_LABELS_MAPPER}/></module186.Form.Item></div></>;
};
