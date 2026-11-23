import module474 from "unpacked/module-474.js";
import module76 from "unpacked/module-76.js";
export default function(e) {
    return function() {
        const t = arguments;
        switch(t.length){
            case 0:
                return new e;
            case 1:
                return new e(t[0]);
            case 2:
                return new e(t[0], t[1]);
            case 3:
                return new e(t[0], t[1], t[2]);
            case 4:
                return new e(t[0], t[1], t[2], t[3]);
            case 5:
                return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
        }
        const n = module474(e.prototype);
        const i = e.apply(n, t);
        if (module76(i)) {
            return i;
        }
        return n;
    };
};
