import module883 from "./module-883.js";
export default function(e, t) {
    t = module883(t, i);
    const n = e.split("@");
    const r = n.pop();
    const f = [
        n.join("@"),
        r
    ];
    f[1] = f[1].toLowerCase();
    if (f[1] === "gmail.com" || f[1] === "googlemail.com") {
        if (t.gmail_remove_subaddress) {
            f[0] = f[0].split("+")[0];
        }
        if (t.gmail_remove_dots) {
            f[0] = f[0].replace(/\.+/g, c);
        }
        if (!f[0].length) {
            return false;
        }
        if (t.all_lowercase || t.gmail_lowercase) {
            f[0] = f[0].toLowerCase();
        }
        f[1] = t.gmail_convert_googlemaildotcom ? "gmail.com" : f[1];
    } else if (a.indexOf(f[1]) >= 0) {
        if (t.icloud_remove_subaddress) {
            f[0] = f[0].split("+")[0];
        }
        if (!f[0].length) {
            return false;
        }
        if (t.all_lowercase || t.icloud_lowercase) {
            f[0] = f[0].toLowerCase();
        }
    } else if (l.indexOf(f[1]) >= 0) {
        if (t.outlookdotcom_remove_subaddress) {
            f[0] = f[0].split("+")[0];
        }
        if (!f[0].length) {
            return false;
        }
        if (t.all_lowercase || t.outlookdotcom_lowercase) {
            f[0] = f[0].toLowerCase();
        }
    } else if (u.indexOf(f[1]) >= 0) {
        if (t.yahoo_remove_subaddress) {
            const d = f[0].split("-");
            f[0] = d.length > 1 ? d.slice(0, -1).join("-") : d[0];
        }
        if (!f[0].length) {
            return false;
        }
        if (t.all_lowercase || t.yahoo_lowercase) {
            f[0] = f[0].toLowerCase();
        }
    } else {
        if (s.indexOf(f[1]) >= 0) {
            if (t.all_lowercase || t.yandex_lowercase) {
                f[0] = f[0].toLowerCase();
            }
            f[1] = "yandex.ru";
        } else if (t.all_lowercase) {
            f[0] = f[0].toLowerCase();
        }
    }
    return f.join("@");
};
var i = {
    all_lowercase: true,
    gmail_lowercase: true,
    gmail_remove_dots: true,
    gmail_remove_subaddress: true,
    gmail_convert_googlemaildotcom: true,
    outlookdotcom_lowercase: true,
    outlookdotcom_remove_subaddress: true,
    yahoo_lowercase: true,
    yahoo_remove_subaddress: true,
    yandex_lowercase: true,
    icloud_lowercase: true,
    icloud_remove_subaddress: true
};
var a = [
    "icloud.com",
    "me.com"
];
var l = [
    "hotmail.at",
    "hotmail.be",
    "hotmail.ca",
    "hotmail.cl",
    "hotmail.co.il",
    "hotmail.co.nz",
    "hotmail.co.th",
    "hotmail.co.uk",
    "hotmail.com",
    "hotmail.com.ar",
    "hotmail.com.au",
    "hotmail.com.br",
    "hotmail.com.gr",
    "hotmail.com.mx",
    "hotmail.com.pe",
    "hotmail.com.tr",
    "hotmail.com.vn",
    "hotmail.cz",
    "hotmail.de",
    "hotmail.dk",
    "hotmail.es",
    "hotmail.fr",
    "hotmail.hu",
    "hotmail.id",
    "hotmail.ie",
    "hotmail.in",
    "hotmail.it",
    "hotmail.jp",
    "hotmail.kr",
    "hotmail.lv",
    "hotmail.my",
    "hotmail.ph",
    "hotmail.pt",
    "hotmail.sa",
    "hotmail.sg",
    "hotmail.sk",
    "live.be",
    "live.co.uk",
    "live.com",
    "live.com.ar",
    "live.com.mx",
    "live.de",
    "live.es",
    "live.eu",
    "live.fr",
    "live.it",
    "live.nl",
    "msn.com",
    "outlook.at",
    "outlook.be",
    "outlook.cl",
    "outlook.co.il",
    "outlook.co.nz",
    "outlook.co.th",
    "outlook.com",
    "outlook.com.ar",
    "outlook.com.au",
    "outlook.com.br",
    "outlook.com.gr",
    "outlook.com.pe",
    "outlook.com.tr",
    "outlook.com.vn",
    "outlook.cz",
    "outlook.de",
    "outlook.dk",
    "outlook.es",
    "outlook.fr",
    "outlook.hu",
    "outlook.id",
    "outlook.ie",
    "outlook.in",
    "outlook.it",
    "outlook.jp",
    "outlook.kr",
    "outlook.lv",
    "outlook.my",
    "outlook.ph",
    "outlook.pt",
    "outlook.sa",
    "outlook.sg",
    "outlook.sk",
    "passport.com"
];
var u = [
    "rocketmail.com",
    "yahoo.ca",
    "yahoo.co.uk",
    "yahoo.com",
    "yahoo.de",
    "yahoo.fr",
    "yahoo.in",
    "yahoo.it",
    "ymail.com"
];
var s = [
    "yandex.ru",
    "yandex.ua",
    "yandex.kz",
    "yandex.com",
    "yandex.by",
    "ya.ru"
];
function c(e) {
    if (e.length > 1) {
        return e;
    }
    return "";
}

