export default function(e) {
    let t;
    let n;
    let e_length = e.length;
    if (!e_length) {
        return "";
    }
    for(t = String(e[n = 0]); --e_length;){
        t += `${e[++n]}`;
    }
    return t;
};
