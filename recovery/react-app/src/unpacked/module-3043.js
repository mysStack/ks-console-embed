import module3044 from "unpacked/module-3044.js";
const o = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
};
export default function(e, t) {
    let n;
    let i;
    let a;
    let l;
    let u;
    let s;
    let c = false;
    if (!t) {
        t = {};
    }
    n = t.debug || false;
    try {
        a = module3044();
        l = document.createRange();
        u = document.getSelection();
        s = document.createElement("span");
        s.textContent = e;
        s.style.all = "unset";
        s.style.position = "fixed";
        s.style.top = 0;
        s.style.clip = "rect(0, 0, 0, 0)";
        s.style.whiteSpace = "pre";
        s.style.webkitUserSelect = "text";
        s.style.MozUserSelect = "text";
        s.style.msUserSelect = "text";
        s.style.userSelect = "text";
        s.addEventListener("copy", function(r) {
            r.stopPropagation();
            if (t.format) {
                r.preventDefault();
                if (r.clipboardData === undefined) {
                    if (n) {
                        console.warn("unable to use e.clipboardData");
                    }
                    if (n) {
                        console.warn("trying IE specific stuff");
                    }
                    window.clipboardData.clearData();
                    const i = o[t.format] || o.default;
                    window.clipboardData.setData(i, e);
                } else {
                    r.clipboardData.clearData();
                    r.clipboardData.setData(t.format, e);
                }
            }
            if (t.onCopy) {
                r.preventDefault();
                t.onCopy(r.clipboardData);
            }
        });
        document.body.appendChild(s);
        l.selectNodeContents(s);
        u.addRange(l);
        if (!document.execCommand("copy")) {
            throw new Error("copy command was unsuccessful");
        }
        c = true;
    } catch (error) {
        if (n) {
            console.error("unable to copy using execCommand: ", error);
        }
        if (n) {
            console.warn("trying IE specific stuff");
        }
        try {
            window.clipboardData.setData(t.format || "text", e);
            if (t.onCopy) {
                t.onCopy(window.clipboardData);
            }
            c = true;
        } catch (err) {
            if (n) {
                console.error("unable to copy using clipboardData: ", err);
            }
            if (n) {
                console.error("falling back to prompt");
            }
            i = ((e)=>{
                const t = `${/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl"}+C`;
                return e.replace(/#{\s*key\s*}/g, t);
            })("message" in t ? t.message : "Copy to clipboard: #{key}, Enter");
            window.prompt(i, e);
        }
    } finally{
        if (u) {
            if (typeof u.removeRange === "function") {
                u.removeRange(l);
            } else {
                u.removeAllRanges();
            }
        }
        if (s) {
            document.body.removeChild(s);
        }
        a();
    }
    return c;
};
