import module562 from "unpacked/module-562.js";
import module563 from "unpacked/module-563.js";
import module564 from "unpacked/module-564.js";
import "unpacked/module-565.js";
import "unpacked/module-553.js";
import module568 from "unpacked/module-568.js";
import module577 from "unpacked/module-577.js";
import { parse } from "unpacked/module-578.js";
import { parse as parse_1 } from "unpacked/module-579.js";
import module486 from "unpacked/module-486.js";
import "unpacked/module-582.js";
import module583 from "unpacked/module-583.js";
const h = function(e) {
    return e || "";
};
String.prototype.defaultMessage = h;
String.prototype.d = h;
const v = new ((()=>{
    function e() {
        const _this = this;
        module562(this, e);
        module564(this, "options", {
            currentLocale: null,
            urlLocaleKey: null,
            cookieLocaleKey: null,
            locales: {},
            escapeHtml: true,
            ignoreWarnings: false
        });
        module564(this, "getInitOptions", function() {
            return _this.options;
        });
        module564(this, "getLocaleFromCookie", function({ cookieLocaleKey }) {
            if (cookieLocaleKey) {
                const n = parse(document.cookie);
                return n && n[cookieLocaleKey];
            }
            return null;
        });
        module564(this, "getLocaleFromURL", function({ urlLocaleKey }) {
            const window_location = window.location;
            if (urlLocaleKey) {
                const r = window_location.search.split("?");
                if (r.length >= 2) {
                    const o = parse_1(r[1]);
                    return o && o[urlLocaleKey];
                }
            }
            return null;
        });
        module564(this, "getDescendantProp", function(e, t) {
            if (e[t]) {
                return e[t];
            }
            return t.split(".").reduce((acc, item)=>{
                if (acc !== undefined) {
                    return acc[item];
                }
                return acc;
            }, e);
        });
        module564(this, "getLocaleFromBrowser", function() {
            return navigator.language || navigator.userLanguage;
        });
        module564(this, "determineLocale", function(e = {}) {
            return _this.getLocaleFromURL(e) || _this.getLocaleFromCookie(e) || _this.getLocaleFromBrowser();
        });
        module564(this, "get", function(e, n) {
            module486(e, "key is required");
            const options = _this.options;
            const { locales, currentLocale, formats, escapeHtml } = options;
            if (!locales || !locales[currentLocale]) {
                _this.warningHandler(`locales data "${currentLocale}" not exists.`);
                return e;
            }
            const c = _this.getDescendantProp(locales[currentLocale], e);
            if (c == null) {
                _this.warningHandler(`key "${e}" not defined in ${currentLocale}`);
                return e;
            }
            const f = {
                ...n
            };
            if (n) {
                Object.keys(f).forEach((e)=>{
                    let t = f[e];
                    if (escapeHtml === true && (typeof t === "string" || t instanceof String) && t.indexOf("<") >= 0 && t.indexOf(">") >= 0) {
                        t = module577(t);
                    }
                    f[e] = t;
                });
            }
            try {
                return new module568(c, currentLocale, formats).format(f);
            } catch (error) {
                _this.warningHandler(`format message failed for key='${e}'.`, error.message);
                return c;
            }
        });
        module564(this, "getHTML", function(e, n) {
            const __html = _this.get(e, n);
            if (__html) {
                const o = <span dangerouslySetInnerHTML={{
                    __html
                }}/>;
                const a = function() {
                    return o;
                };
                return {
                    defaultMessage: a,
                    d: a,
                    ...o
                };
            }
            return "";
        });
        module564(this, "formatMessage", function({ id, defaultMessage }, n) {
            return _this.get(id, n).defaultMessage(defaultMessage);
        });
        module564(this, "formatHTMLMessage", function({ id, defaultMessage }, n) {
            return _this.getHTML(id, n).defaultMessage(defaultMessage);
        });
    }
    module563(e, [
        {
            key: "warningHandler",
            value: function(e) {
                if (!this.options.ignoreWarnings) {
                    console.warn(e);
                }
            }
        },
        {
            key: "init",
            value: function(t = {}) {
                const _this = this;
                module486(t.locales, "options.locales is required");
                Object.assign(this.options, t);
                if (!this.options.currentLocale) {
                    this.options.currentLocale = this.determineLocale();
                }
                const options = this.options;
                const { formats, locales, currentLocale } = options;
                this.options.formats = {
                    ...formats,
                    ...module583
                };
                const i = currentLocale.split("-")[0].split("_")[0];
                const l = locales[currentLocale];
                return new Promise((resolve, reject)=>{
                    if (!l) {
                        _this.warningHandler(`${currentLocale} not defined in current locales`, i);
                        reject();
                    }
                    resolve();
                });
            }
        },
        {
            key: "setCurrentLocale",
            value: function(e, t) {
                module486(e, "lang is required");
                const options = this.options;
                const { locales, currentLocale } = options;
                if (Object.keys(locales).find((t)=>t === e)) {
                    this.options.currentLocale = e;
                    if (t && typeof t === "function") {
                        t.call();
                    }
                } else {
                    this.warningHandler(`${currentLocale} not defined in current locales`, e);
                }
            }
        }
    ]);
    return e;
})());
export default v;
