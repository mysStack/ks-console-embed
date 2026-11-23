import module798 from "./module-798.js";
export default function(e, t) {
    module798(e);
    for(let n = e.length - 1; n >= 0; n--){
        if (t.indexOf(e[n]) === -1) {
            return false;
        }
    }
    return true;
};

