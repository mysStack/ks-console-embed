import module207 from "./module-207.js";
import module335 from "./module-335.js";
import module119 from "./module-119.js";
export default function(e, t) {
    const n = {};
    t = module119(t, 3);
    module335(e, function(e, o, i) {
        module207(n, o, t(e, o, i));
    });
    return n;
};
