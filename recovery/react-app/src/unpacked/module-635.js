import module636 from "./module-636.js";
export default function(e) {
    const t = module636(e, function(e) {
        if (t_cache.size === 500) {
            t_cache.clear();
        }
        return e;
    });
    var t_cache = t.cache;
    return t;
};
