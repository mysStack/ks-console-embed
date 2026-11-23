import "unpacked/module-15.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module5247 from "unpacked/module-5247.js";
export default function({ data }) {
    return <div className={module5247.card}><module186.Columns><module186.Column><p><span>{t("KEY")}:</span>{data.key}</p></module186.Column><module186.Column><p><span>{t("VALUE")}:</span>{data.value}</p></module186.Column><module186.Column><p><span>{t("POLICY")}:</span> {t(data.effect.toUpperCase())}</p></module186.Column></module186.Columns></div>;
};
