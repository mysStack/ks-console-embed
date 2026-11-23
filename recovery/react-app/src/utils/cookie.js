import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-140.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-251.js";
import "unpacked/module-252.js";
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
