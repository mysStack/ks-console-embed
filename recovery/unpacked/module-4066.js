import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import module96 from "./module-96.js";
import "./module-30.js";
import "./module-38.js";
import "./module-32.js";
import * as module553 from "./module-553.js";
import module1002 from "./module-1002.js";
import { getBrowserLang } from "./module-52.js";
import module26 from "./module-26.js";
import module4067 from "./module-4067.js";
const f = module26(globals.user, "lang") || getBrowserLang();
const d = {
    zh: import("./module-5768.js"),
    en: import("./module-5769.js")
};
export default function() {
    const e = module553.useState("");
    const t = module96(e, 2);
    const source = t[0];
    const r = t[1];
    module553.useEffect(function() {
        d[f].then(({ default: _default })=>{
            r(_default);
        });
    }, []);
    return module553.default.createElement("div", {
        className: module4067.eula
    }, module553.default.createElement(module1002, {
        source,
        className: module4067.markdown
    }));
};
