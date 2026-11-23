import "./module-15.js";
import "./module-18.js";
import * as module553 from "./module-553.js";
import module790 from "./module-790.js";
import module4917 from "./module-4917.js";
import module4918 from "./module-4918.js";
import module4920 from "./module-4920.js";
import module1251 from "./module-1251.js";
const f = module553.memo(function({ detail }) {
    if (detail.triggers.length < 1) {
        return null;
    }
    return module553.default.createElement(module790, {
        title: t("TRIGGER")
    }, module553.default.createElement("div", {
        className: module1251.triggerBox
    }, detail.triggers?.map(function(e, key) {
        const a = e.type === "cron" ? module553.default.createElement(module4917, e) : e.type === "prometheus" ? module553.default.createElement(module4918, e) : module553.default.createElement(module4920, e);
        return module553.default.createElement("div", {
            key
        }, a);
    })));
});
export default f;
