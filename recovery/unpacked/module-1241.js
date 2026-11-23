import { a as a_1 } from "./module-1242.js";
export const a = function(local) {
    let t = local += "";
    const n = t.indexOf(":");
    if (n >= 0 && (t = local.slice(0, n)) !== "xmlns") {
        local = local.slice(n + 1);
    }
    if (a_1.hasOwnProperty(t)) {
        return {
            space: a_1[t],
            local
        };
    }
    return local;
};
