import module111 from "./module-111.js";
export default function(e, t) {
    const n = module111(e);
    if (n < 0) {
        return Math.max(n + t, 0);
    }
    return Math.min(n, t);
};
