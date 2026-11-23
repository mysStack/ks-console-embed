import module1018 from "unpacked/module-1018.js";
const forEach = Array.prototype.forEach;
const a = (e, t)=>{
    let n;
    for(n in e){
        t[n] = e[n];
    }
};
export default function(e) {
    const t = Object.create(null);
    forEach.call(arguments, function(e) {
        if (module1018(e)) {
            a(Object(e), t);
        }
    });
    return t;
};
