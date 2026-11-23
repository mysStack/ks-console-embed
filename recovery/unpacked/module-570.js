import { extend, hop } from "./module-381.js";
import { defineProperty, objCreate } from "./module-571.js";
import module572 from "./module-572.js";
import module573 from "./module-573.js";
function l(e, t, n) {
    const r = typeof e === "string" ? l.__parse(e) : e;
    if (!r || r.type !== "messageFormatPattern") {
        throw new TypeError("A message must be provided as a String or AST.");
    }
    n = this._mergeFormats(l.formats, n);
    defineProperty(this, "_locale", {
        value: this._resolveLocale(t)
    });
    const a = this._findPluralRuleFunction(this._locale);
    const i = this._compilePattern(r, t, n, a);
    const _this = this;
    this.format = function(t) {
        try {
            return _this._format(i, t);
        } catch (error) {
            throw error.variableId ? new Error(`The intl string context variable '${error.variableId}' was not provided to the string '${e}'`) : error;
        }
    };
}
export default l;
defineProperty(l, "formats", {
    enumerable: true,
    value: {
        number: {
            currency: {
                style: "currency"
            },
            percent: {
                style: "percent"
            }
        },
        date: {
            short: {
                month: "numeric",
                day: "numeric",
                year: "2-digit"
            },
            medium: {
                month: "short",
                day: "numeric",
                year: "numeric"
            },
            long: {
                month: "long",
                day: "numeric",
                year: "numeric"
            },
            full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        },
        time: {
            short: {
                hour: "numeric",
                minute: "numeric"
            },
            medium: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            },
            long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            },
            full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            }
        }
    }
});
defineProperty(l, "__localeData__", {
    value: objCreate(null)
});
defineProperty(l, "__addLocaleData", {
    value: function(e) {
        if (!e || !e.locale) {
            throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
        }
        l.__localeData__[e.locale.toLowerCase()] = e;
    }
});
defineProperty(l, "__parse", {
    value: module573.default.parse
});
defineProperty(l, "defaultLocale", {
    enumerable: true,
    writable: true,
    value: undefined
});
l.prototype.resolvedOptions = function() {
    return {
        locale: this._locale
    };
};
l.prototype._compilePattern = function(e, t, n, r) {
    return new module572(t, n, r).compile(e);
};
l.prototype._findPluralRuleFunction = function(e) {
    const l___localeData__ = l.__localeData__;
    for(let n = l___localeData__[e.toLowerCase()]; n;){
        if (n.pluralRuleFunction) {
            return n.pluralRuleFunction;
        }
        n = n.parentLocale && l___localeData__[n.parentLocale.toLowerCase()];
    }
    throw new Error(`Locale data added to IntlMessageFormat is missing a \`pluralRuleFunction\` for :${e}`);
};
l.prototype._format = function(e, t) {
    let n;
    let o;
    let a;
    let i;
    let l;
    let s;
    let u = "";
    n = 0;
    for(o = e.length; n < o; n += 1){
        if (typeof (a = e[n]) !== "string") {
            i = a.id;
            if (!t || !hop.call(t, i)) {
                s = new Error(`A value must be provided for: ${i}`);
                s.variableId = i;
                throw s;
            }
            l = t[i];
            if (a.options) {
                u += this._format(a.getOption(l), t);
            } else {
                u += a.format(l);
            }
        } else {
            u += a;
        }
    }
    return u;
};
l.prototype._mergeFormats = function(e, t) {
    let n;
    let a;
    const i = {};
    for(n in e){
        if (hop.call(e, n)) {
            i[n] = a = objCreate(e[n]);
            if (t && hop.call(t, n)) {
                extend(a, t[n]);
            }
        }
    }
    return i;
};
l.prototype._resolveLocale = function(e) {
    if (typeof e === "string") {
        e = [
            e
        ];
    }
    e = (e || []).concat(l.defaultLocale);
    let t;
    let n;
    let r;
    let o;
    const l___localeData__ = l.__localeData__;
    t = 0;
    for(n = e.length; t < n; t += 1){
        for(r = e[t].toLowerCase().split("-"); r.length;){
            if (o = l___localeData__[r.join("-")]) {
                return o.locale;
            }
            r.pop();
        }
    }
    const i = e.pop();
    throw new Error(`No locale data has been added to IntlMessageFormat for: ${e.join(", ")}, or the default locale: ${i}`);
};
