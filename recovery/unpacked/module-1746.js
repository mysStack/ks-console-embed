import module1019 from "./module-1019.js";
export default function(e, t, n) {
    let o;
    if (isNaN(e)) {
        if ((o = t) >= 0) {
            if (n && o) {
                return o - 1;
            }
            return o;
        }
        return 1;
    }
    return e !== false && module1019(e);
};
