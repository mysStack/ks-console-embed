export const a = function(e) {
    let t = 0;
    let n = 0;
    return function() {
        const o = Date.now();
        const i = 16 - (o - n);
        n = o;
        if (i > 0) {
            if (++t >= 800) {
                return arguments[0];
            }
        } else {
            t = 0;
        }
        return e(...arguments);
    };
};
