import "./module-15.js";
import "./module-5.js";
import "./module-73.js";
import "./module-140.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-251.js";
import "./module-252.js";
export default function(e, t, n) {
    if (t === undefined) {
        if (t = window.document.cookie.match(new RegExp(`(?:\\s|^)${e}\\=([^;]*)`))) {
            return decodeURIComponent(t[1]);
        }
        return null;
    }
    window.document.cookie = `${[
        e,
        "=",
        encodeURIComponent(t)
    ].join("")};path=${n || "/"}`;
};
