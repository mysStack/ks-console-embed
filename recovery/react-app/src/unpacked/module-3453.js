import module1385 from "unpacked/module-1385.js";
export default function() {
    let e = 0;
    let t = [];
    let n = [];
    return {
        get: function(e) {
            const o = module1385.call(t, e[0]);
            if (o === -1) {
                return null;
            }
            return n[o];
        },
        set: function(r) {
            t.push(r[0]);
            n.push(++e);
            return e;
        },
        delete: function(e) {
            const o = module1385.call(n, e);
            if (o !== -1) {
                t.splice(o, 1);
                n.splice(o, 1);
            }
        },
        clear: function() {
            t = [];
            n = [];
        }
    };
};
