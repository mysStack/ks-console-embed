import module111 from "./module-111.js";
export default function(e) {
    const t = module111(e);
    if (t > 0) {
        return Math.min(t, 9007199254740991);
    }
    return 0;
};
