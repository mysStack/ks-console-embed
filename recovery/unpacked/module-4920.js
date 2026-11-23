import "./module-15.js";
import "./module-18.js";
import * as module553 from "./module-553.js";
import module789 from "./module-789.js";
import module1978 from "./module-1978.js";
import module1251 from "./module-1251.js";
const u = module553.memo(function(e) {
    const a = module553.useMemo(function() {
        return [
            {
                title: e.type,
                desc: t("TYPE"),
                icon: "appcenter"
            }
        ];
    }, [
        e
    ]);
    return module553.default.createElement("div", {
        className: module1251.itemBox
    }, module553.default.createElement("div", {
        className: module1251.itemBoxTitle
    }, module553.default.createElement(module789, {
        icon: "computing-setting",
        iconSize: 40,
        title: e.type,
        desc: t("SCALING_CUSTOM_DESC"),
        noLink: true
    })), module553.default.createElement("div", {
        className: module1251.itemBoxBody
    }, a.map((e, key)=>module553.default.createElement("div", {
            className: module1251.itemBoxBodyItem,
            key
        }, module553.default.createElement(module789, {
            icon: e.icon,
            iconSize: 40,
            title: e.title,
            desc: e.desc,
            noLink: true
        })))), module553.default.createElement("div", {
        className: module1251.authentication
    }, module553.default.createElement("section", null, t("TOGGLER_PARAMS")), module553.default.createElement(module1978, {
        data: e.metadata
    })), module553.default.createElement("div", {
        className: module1251.authentication
    }, module553.default.createElement("section", null, t("TOGGLER_AUTHOR")), module553.default.createElement(module1978, {
        data: e.authenticationRef
    })));
});
export default u;
