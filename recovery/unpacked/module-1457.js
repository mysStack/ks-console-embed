import module99 from "./module-99.js";
export default function(e, t, n) {
    for(var o = 0, i = arguments.length > 2 ? n : module99(t), a = new e(i); i > o;){
        a[o] = t[o++];
    }
    return a;
};
