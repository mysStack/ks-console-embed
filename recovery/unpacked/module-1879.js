import module4460 from "./module-4460.js";
export default function(e, t, n) {
    module4460(e);
    if (t === undefined) {
        return e;
    }
    switch(n){
        case 1:
            return function(n) {
                return e.call(t, n);
            };
        case 2:
            return function(n, r) {
                return e.call(t, n, r);
            };
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o);
            };
    }
    return function() {
        return e.apply(t, arguments);
    };
};
