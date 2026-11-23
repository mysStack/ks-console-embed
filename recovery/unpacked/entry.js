import "./module-6.js";
import "./module-98.js";
import "./module-75.js";
import "./module-7.js";
import "./module-41.js";
import "./module-44.js";
import module96 from "./module-96.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-552.js";
import * as module553 from "./module-553.js";
import module106 from "./module-106.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import { isAppsPage, isMemberClusterPage } from "./module-52.js";
import module529 from "./module-529.js";
import module63 from "./module-63.js";
import module759 from "./module-759.js";
import module773 from "./module-773.js";
import module775 from "./module-775.js";
window.onunhandledrejection = function(e) {
    const o = e?.req;
    const a = e?.data;
    const i = (o?.method ?? "").toUpperCase();
    const l = a?.code;
    const s = a?.reason;
    const u = i === "GET" && l === 403 && s === "Forbidden";
    if (e && (e.status === "Failure" || e.status >= 400)) {
        if (e.status === 401 || e.reason === "Unauthorized") {
            if (isAppsPage() || isMemberClusterPage(location.pathname, e.message)) {
                module240.error({
                    title: e.reason,
                    content: t(e.message),
                    duration: 6000
                });
            } else {
                if (window.self !== window.top) {
                    window.top.location.href = `/login?referer=${location.pathname}`;
                } else {
                    location.href = `/login?referer=${location.pathname}`;
                }
                window.alert(t("LOGIN_AGAIN_DESC"));
            }
        } else if (u) {
            window.$wujie?.bus.$emit("consoleV3.apiForbiddenError");
        } else if (e.reason === "Forbidden" && e.message?.startsWith("forbidden: invalid license")) {
            window.$wujie?.bus.$emit("consoleV3.licenseError", "consolev3");
        } else {
            if (globals.config.enableErrorNotify && (e.reason || e.message)) {
                module240.error({
                    title: e.reason,
                    content: t(e.message),
                    duration: 6000
                });
            }
        }
    }
};
if (!module63(globals?.ksConfig?.enabledExtensionModulesStatus)) {
    Object.entries(globals.ksConfig.enabledExtensionModulesStatus).forEach((e)=>{
        const t = module96(e, 2);
        const n = t[0];
        const r = t[1];
        if (r.annotations) {
            globals.ksConfig.enabledExtensionModulesStatus[n].annotations = JSON.parse(decodeURIComponent(r.annotations));
        }
    });
}
window.t = module775.t;
window.request = module529;
globals.app = new module773;
const C = async (t)=>{
    let n;
    let locales;
    n = await module775.init();
    locales = n.locales;
    module106.render(module553.default.createElement(module553.Suspense, {
        fallback: module553.default.createElement(module186.Loading, {
            className: "ks-page-loading"
        })
    }, module553.default.createElement(module186.LocaleProvider, {
        locales,
        localeKey: "lang",
        ignoreWarnings: true
    }, t)), document.getElementById("root"));
};
if (window.__POWERED_BY_WUJIE__) {
    window.__WUJIE_MOUNT = function() {
        C(module553.default.createElement(module759, null));
    };
    window.__WUJIE_UNMOUNT = function() {
        module106.unmountComponentAtNode(document.getElementById("root"));
    };
} else {
    C(module553.default.createElement(module759, null));
}
module.hot;
