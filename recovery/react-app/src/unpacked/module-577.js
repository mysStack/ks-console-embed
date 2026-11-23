const r = /["'&<>]/;
export default function(e) {
    let t;
    const n = `${e}`;
    const o = r.exec(n);
    if (!o) {
        return n;
    }
    let a = "";
    let i = 0;
    let l = 0;
    for(i = o.index; i < n.length; i++){
        switch(n.charCodeAt(i)){
            case 34:
                t = "&quot;";
                break;
            case 38:
                t = "&amp;";
                break;
            case 39:
                t = "&#39;";
                break;
            case 60:
                t = "&lt;";
                break;
            case 62:
                t = "&gt;";
                break;
            default:
                continue;
        }
        if (l !== i) {
            a += n.substring(l, i);
        }
        l = i + 1;
        a += t;
    }
    if (l !== i) {
        return a + n.substring(l, i);
    }
    return a;
};
