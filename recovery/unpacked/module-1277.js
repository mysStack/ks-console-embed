export const a = function(e, t) {
    e = +e;
    t = +t;
    return function(n) {
        return e * (1 - n) + t * n;
    };
};
