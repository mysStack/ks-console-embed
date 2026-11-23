export default function(e, t, n, r, o, a, i, l) {
    if (!e) {
        let s;
        if (t === undefined) {
            s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
            const u = [
                n,
                r,
                o,
                a,
                i,
                l
            ];
            let c = 0;
            s = new Error(t.replace(/%s/g, ()=>u[c++]));
            s.name = "Invariant Violation";
        }
        s.framesToPop = 1;
        throw s;
    }
};
