import module798 from "./module-798.js";
export default function(e) {
    module798(e);
    const t = e.split(",");
    if (t.length < 2) {
        return false;
    }
    const n = t.shift().trim().split(";");
    const r = n.shift();
    if (r.slice(0, 5) !== "data:") {
        return false;
    }
    const u = r.slice(5);
    if (u !== "" && !i.test(u)) {
        return false;
    }
    for(let s = 0; s < n.length; s++){
        if ((s !== n.length - 1 || n[s].toLowerCase() !== "base64") && !a.test(n[s])) {
            return false;
        }
    }
    for(let c = 0; c < t.length; c++){
        if (!l.test(t[c])) {
            return false;
        }
    }
    return true;
};
var i = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
var a = /^[a-z\-]+=[a-z0-9\-]+$/i;
var l = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

