export default function(e) {
    let t = 0;
    let r = 0;
    return function() {
        const o = Date.now();
        const a = 16 - (o - r);
        r = o;
        if (a > 0) {
            if (++t >= 800) {
                return arguments[0];
            }
        } else {
            t = 0;
        }
        return e(...arguments);
    };
};
