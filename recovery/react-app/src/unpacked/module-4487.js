import module1239 from "unpacked/module-1239.js";
export default function(e, t) {
    if ((e = module1239(e)) < 0) {
        return Math.max(e + t, 0);
    }
    return Math.min(e, t);
};
