const r = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g;
const o = /\u0000/g;
export default function(e) {
    let t;
    t = (t = e.src.replace(r, "\n")).replace(o, "�");
    e.src = t;
};
