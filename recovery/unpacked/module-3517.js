export default function(e) {
    let t;
    let n;
    let r;
    let o;
    let i;
    if (document.addEventListener) {
        if ([
            "complete",
            "loaded",
            "interactive"
        ].indexOf(document.readyState) > -1) {
            setTimeout(e, 0);
        } else {
            document.addEventListener("DOMContentLoaded", function t() {
                document.removeEventListener("DOMContentLoaded", t, false);
                e();
            }, false);
        }
    } else if (document.attachEvent) {
        t = window;
        n = e;
        r = t.document;
        o = false;
        i = function() {
            if (!o) {
                o = true;
                n();
            }
        };
        (function e() {
            try {
                r.documentElement.doScroll("left");
            } catch (t) {
                return void setTimeout(e, 50);
            }
            i();
        })();
        r.onreadystatechange = function() {
            if (r.readyState === "complete") {
                r.onreadystatechange = null;
                i();
            }
        };
    }
};
