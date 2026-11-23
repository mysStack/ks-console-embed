import module1476 from "./module-1476.js";
export default function(e, t) {
    const n = module1476(e);
    if (n.length) {
        let r;
        const i = t.shiftKey;
        const a = n[0];
        const l = n[n.length - 1];
        if (e === document.activeElement) {
            if (!i) {
                return;
            }
            r = l;
        }
        if (!(l !== document.activeElement || i)) {
            r = a;
        }
        if (a === document.activeElement && i) {
            r = l;
        }
        if (r) {
            t.preventDefault();
            return void r.focus();
        }
        const u = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
        if (u != null && u[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null) {
            let s = n.indexOf(document.activeElement);
            if (s > -1) {
                s += i ? -1 : 1;
            }
            if ((r = n[s]) === undefined) {
                t.preventDefault();
                return void (r = i ? l : a).focus();
            }
            t.preventDefault();
            r.focus();
        }
    } else {
        t.preventDefault();
    }
};
