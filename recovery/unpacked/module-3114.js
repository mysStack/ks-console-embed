import { format } from "./module-850.js";
import module1710 from "./module-1710.js";
const l = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var u = {
    integer: function(e) {
        return u.number(e) && parseInt(e, 10) === e;
    },
    float: function(e) {
        return u.number(e) && !u.integer(e);
    },
    array: function(e) {
        return Array.isArray(e);
    },
    regexp: function(e) {
        if (e instanceof RegExp) {
            return true;
        }
        try {
            return !!new RegExp(e);
        } catch (e) {
            return false;
        }
    },
    date: function(e) {
        return typeof e.getTime === "function" && typeof e.getMonth === "function" && typeof e.getYear === "function";
    },
    number: function(e) {
        return !isNaN(e) && typeof e === "number";
    },
    object: function(e) {
        return (e === undefined ? "undefined" : typeof e) === "object" && !u.array(e);
    },
    method: function(e) {
        return typeof e === "function";
    },
    email: function(e) {
        return typeof e === "string" && !!e.match(l.email) && e.length < 255;
    },
    url: function(e) {
        return typeof e === "string" && !!e.match(l.url);
    },
    hex: function(e) {
        return typeof e === "string" && !!e.match(l.hex);
    }
};
export default function(e, t, n, r, l) {
    if (e.required && t === undefined) {
        module1710(e, t, n, r, l);
    } else {
        const s = e.type;
        if ([
            "integer",
            "float",
            "array",
            "regexp",
            "object",
            "method",
            "email",
            "number",
            "date",
            "url",
            "hex"
        ].indexOf(s) > -1) {
            if (!u[s](t)) {
                r.push(format(l.messages.types[s], e.fullField, e.type));
            }
        } else if (s && (t === undefined ? "undefined" : typeof t) !== e.type) {
            r.push(format(l.messages.types[s], e.fullField, e.type));
        }
    }
};
