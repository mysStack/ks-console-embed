export default function(e) {
    return {
        all: e = e || new Map,
        on: function(t, n) {
            const r = e.get(t);
            if (r) {
                r.push(n);
            } else {
                e.set(t, [
                    n
                ]);
            }
        },
        off: function(t, n) {
            const r = e.get(t);
            if (r) {
                if (n) {
                    r.splice(r.indexOf(n) >>> 0, 1);
                } else {
                    e.set(t, []);
                }
            }
        },
        emit: function(t, n) {
            let r = e.get(t);
            if (r) {
                r.slice().map((e)=>{
                    e(n);
                });
            }
            if (r = e.get("*")) {
                r.slice().map((e)=>{
                    e(t, n);
                });
            }
        }
    };
};
