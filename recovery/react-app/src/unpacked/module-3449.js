import module1385 from "unpacked/module-1385.js";
export default function() {
    let e = 0;
    let t = [];
    let n = Object.create(null);
    return {
        get: function(e) {
            let n;
            let o = 0;
            let i = t;
            const e_length = e.length;
            if (e_length === 0) {
                return i[e_length] || null;
            }
            if (i = i[e_length]) {
                while(o < e_length - 1){
                    if ((n = module1385.call(i[0], e[o])) === -1) {
                        return null;
                    }
                    i = i[1][n];
                    ++o;
                }
                if ((n = module1385.call(i[0], e[o])) === -1) {
                    return null;
                }
                return i[1][n] || null;
            }
            return null;
        },
        set: function(o) {
            let i;
            let a = 0;
            let l = t;
            const o_length = o.length;
            if (o_length === 0) {
                l[o_length] = ++e;
            } else {
                if (!l[o_length]) {
                    l[o_length] = [
                        [],
                        []
                    ];
                }
                for(l = l[o_length]; a < o_length - 1;){
                    if ((i = module1385.call(l[0], o[a])) === -1) {
                        i = l[0].push(o[a]) - 1;
                        l[1].push([
                            [],
                            []
                        ]);
                    }
                    l = l[1][i];
                    ++a;
                }
                if ((i = module1385.call(l[0], o[a])) === -1) {
                    i = l[0].push(o[a]) - 1;
                }
                l[1][i] = ++e;
            }
            n[e] = o;
            return e;
        },
        delete: function(e) {
            let o;
            let i = 0;
            let a = t;
            const l = n[e];
            const l_length = l.length;
            const s = [];
            if (l_length === 0) {
                delete a[l_length];
            } else if (a = a[l_length]) {
                while(i < l_length - 1){
                    if ((o = module1385.call(a[0], l[i])) === -1) {
                        return;
                    }
                    s.push(a, o);
                    a = a[1][o];
                    ++i;
                }
                if ((o = module1385.call(a[0], l[i])) === -1) {
                    return;
                }
                e = a[1][o];
                a[0].splice(o, 1);
                a[1].splice(o, 1);
                while(!a[0].length && s.length){
                    o = s.pop();
                    (a = s.pop())[0].splice(o, 1);
                    a[1].splice(o, 1);
                }
            }
            delete n[e];
        },
        clear: function() {
            t = [];
            n = Object.create(null);
        }
    };
};
