import module169 from "./module-169.js";
export default function(e, t) {
    for(let n = e.length; n--;){
        if (module169(e[n][0], t)) {
            return n;
        }
    }
    return -1;
};
