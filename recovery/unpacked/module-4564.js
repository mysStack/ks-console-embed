import module1894 from "./module-1894.js";
import module909 from "./module-909.js";
export default function(e, t, n) {
    return module909.transform(e.nodes(), function(o, i) {
        o[i] = module1894(e, i, t, n);
    }, {});
};
