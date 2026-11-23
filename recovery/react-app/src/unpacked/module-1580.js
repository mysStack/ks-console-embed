import module798 from "./module-798.js";
import module1581 from "./module-1581.js";
import module1318 from "./module-1318.js";
import module1176 from "./module-1176.js";
import module883 from "./module-883.js";
export default function(e, t) {
    module798(e);
    if ((t = module883(t, s)).require_display_name || t.allow_display_name) {
        const n = e.match(c);
        if (n) {
            let u = n[1];
            e = e.replace(u, "").replace(/(^<|>$)/g, "");
            if (u.endsWith(" ")) {
                u = u.slice(0, -1);
            }
            if (!((e)=>{
                const t = e.replace(/^"(.+)"$/, "$1");
                if (!t.trim()) {
                    return false;
                }
                if (/[\.";<>]/.test(t)) {
                    if (t === e) {
                        return false;
                    }
                    if (t.split('"').length !== t.split('\\"').length) {
                        return false;
                    }
                }
                return true;
            })(u)) {
                return false;
            }
        } else if (t.require_display_name) {
            return false;
        }
    }
    if (!t.ignore_max_length && e.length > 254) {
        return false;
    }
    const g = e.split("@");
    const y = g.pop();
    const m = y.toLowerCase();
    if (t.host_blacklist.includes(m)) {
        return false;
    }
    if (t.host_whitelist.length > 0 && !t.host_whitelist.includes(m)) {
        return false;
    }
    let b = g.join("@");
    if (t.domain_specific_validation && (m === "gmail.com" || m === "googlemail.com")) {
        const x = (b = b.toLowerCase()).split("+")[0];
        if (!module1581(x.replace(/\./g, ""), {
            min: 6,
            max: 30
        })) {
            return false;
        }
        for(let w = x.split("."), _ = 0; _ < w.length; _++){
            if (!d.test(w[_])) {
                return false;
            }
        }
    }
    if (!(t.ignore_max_length !== false || module1581(b, {
        max: 64
    }) && module1581(y, {
        max: 254
    }))) {
        return false;
    }
    if (!module1318(y, {
        require_tld: t.require_tld,
        ignore_max_length: t.ignore_max_length,
        allow_underscores: t.allow_underscores
    })) {
        if (!t.allow_ip_domain) {
            return false;
        }
        if (!module1176(y)) {
            if (!y.startsWith("[") || !y.endsWith("]")) {
                return false;
            }
            const C = y.slice(1, -1);
            if (C.length === 0 || !module1176(C)) {
                return false;
            }
        }
    }
    if (b[0] === '"') {
        b = b.slice(1, b.length - 1);
        if (t.allow_utf8_local_part) {
            return v.test(b);
        }
        return p.test(b);
    }
    const O = t.allow_utf8_local_part ? h : f;
    for(let E = b.split("."), M = 0; M < E.length; M++){
        if (!O.test(E[M])) {
            return false;
        }
    }
    return !t.blacklisted_chars || b.search(new RegExp(`[${t.blacklisted_chars}]+`, "g")) === -1;
};
var s = {
    allow_display_name: false,
    allow_underscores: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: "",
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: []
};
var c = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var f = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var d = /^[a-z\d]+$/;
var p = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var h = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var v = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;

