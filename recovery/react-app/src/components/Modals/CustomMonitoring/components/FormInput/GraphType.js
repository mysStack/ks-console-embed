import "unpacked/module-15.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module2782 from "unpacked/module-2782.js";
export default function({ type }) {
    const r = {
        singlestat: {
            i18n: t("SINGLE_STATE_CHART"),
            icon: "text"
        },
        line: {
            i18n: t("LINE_CHART"),
            icon: "linechart"
        },
        bar: {
            i18n: t("BAR_CHART"),
            icon: "barchart"
        },
        table: {
            i18n: t("TABLE"),
            icon: "table-chart"
        }
    };
    const icon = r[type].icon;
    const i18n = r[type].i18n;
    return <div className={module2782.wrapper}><header>{t("CHART_TYPES")}</header><div><module186.Icon name={icon} type="light" size={40}/><h3>{i18n}</h3></div></div>;
};
