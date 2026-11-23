import module3463 from "./module-3463.js";
const o = /[\n\r\u2028\u2029]/g;
export default function(e) {
    let t = module3463(e);
    if (t.length > 100) {
        t = `${t.slice(0, 99)}…`;
    }
    return t.replace(o, (e)=>JSON.stringify(e).slice(1, -1));
};
