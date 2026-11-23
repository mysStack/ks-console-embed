import "./module-15.js";
import "./module-553.js";
import module1316 from "./module-1316.js";
import module186 from "./module-186.js";
export default function({ isEdit }) {
    return <module186.Form.Item label={t("APP_TEMPLATE_VERSION")} desc={t("APP_TEMPLATE_VERSION_DESC")} rules={[
        {
            required: true,
            message: t("APP_TEMPLATE_VERSION_EMPTY_DESC")
        },
        {
            validator: function(e, a, r) {
                if (a) {
                    if (module1316.isSemVer(a)) {
                        return void r();
                    }
                    return r({
                        message: t("INVALID_APP_TEMPLATE_VERSION_DESC", {
                            message: t("APP_TEMPLATE_VERSION_DESC")
                        }),
                        field: e.field
                    });
                }
                return r();
            }
        }
    ]}><module186.Input name="spec.version" maxLength={63} disabled={isEdit}/></module186.Form.Item>;
};
