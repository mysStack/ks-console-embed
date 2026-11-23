import module635 from "./module-635.js";
const o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const a = /\\(\\)?/g;
const i = module635(function(e) {
    const t = [];
    if (e.charCodeAt(0) === 46) {
        t.push("");
    }
    e.replace(o, (e, n, r, o)=>{
        t.push(r ? o.replace(a, "$1") : n || e);
    });
    return t;
});
export default i;
