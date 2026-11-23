import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-30.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import * as module553 from "unpacked/module-553.js";
import module1002 from "components/Base/Markdown";
import { getBrowserLang } from "utils/index";
import module26 from "unpacked/module-26.js";
import module4067 from "unpacked/module-4067.js";
const f = module26(globals.user, "lang") || getBrowserLang();
const d = {
    zh: import("unpacked/module-5768.js"),
    en: import("unpacked/module-5769.js")
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
