import module909 from "unpacked/module-909.js";
import module1896 from "unpacked/module-1896.js";
export default function(e) {
    return module909.filter(module1896(e), function(t) {
        return t.length > 1 || t.length === 1 && e.hasEdge(t[0], t[0]);
    });
};
