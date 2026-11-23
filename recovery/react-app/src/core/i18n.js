import "unpacked/module-15.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import module243 from "unpacked/module-243.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module201 from "utils/cookie";
import { getBrowserLang } from "utils/index";
const locale = module186.LocaleProvider.locale;
const init = (()=>{
    const e = module44(module41.mark(function e() {
        let t;
        let locales;
        let r;
        let a;
        return module41.wrap(function(e) {
            while(true){
                switch(e.prev = e.next){
                    case 0:
                        if ((t = module26(globals.user, "lang") || getBrowserLang()) && module201("lang") !== t) {
                            module201("lang", t);
                        }
                        if (t === "zh") {
                            module243.locale("zh", {
                                relativeTime: {
                                    s: "1 秒",
                                    ss: "%d 秒",
                                    m: "1 分钟",
                                    mm: "%d 分钟",
                                    h: "1 小时",
                                    hh: "%d 小时",
                                    d: "1 天",
                                    dd: "%d 天",
                                    M: "1 个月",
                                    MM: "%d 个月",
                                    y: "1 年",
                                    yy: "%d 年",
                                    past: "%s前",
                                    future: "在 %s后"
                                }
                            });
                        }
                        locales = {};
                        r = globals.localeManifest[`locale-${t}.json`];
                        if (!t || !r) {
                            e.next = 10;
                            break;
                        }
                        e.next = 8;
                        return request.get(`dist/v3dist/${r}`);
                    case 8:
                        a = e.sent;
                        locales[t] = a;
                    case 10:
                        return e.abrupt("return", {
                            locales
                        });
                    case 11:
                    case "end":
                        return e.stop();
                }
            }
        }, e);
    }));
    return function() {
        return e.apply(this, arguments);
    };
})();
const t = function(e, t) {
    let n = e && locale.get(e, t);
    if (t && t.defaultValue && n === e) {
        n = t.defaultValue;
    }
    return n;
};
t.html = function(e, t) {
    return e && locale.getHTML(e, t);
};
const h = {
    init,
    t
};
export default h;
