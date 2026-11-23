import module1385 from "./module-1385.js";
export default function(e) {
    let t = 0;
    let n = [
        [],
        []
    ];
    let i = Object.create(null);
    return {
        get: function(t) {
            let o;
            for(var i = 0, a = n; i < e - 1;){
                if ((o = module1385.call(a[0], t[i])) === -1) {
                    return null;
                }
                a = a[1][o];
                ++i;
            }
            if ((o = module1385.call(a[0], t[i])) === -1) {
                return null;
            }
            return a[1][o] || null;
        },
        set: function(o) {
            let a;
            for(var l = 0, u = n; l < e - 1;){
                if ((a = module1385.call(u[0], o[l])) === -1) {
                    a = u[0].push(o[l]) - 1;
                    u[1].push([
                        [],
                        []
                    ]);
                }
                u = u[1][a];
                ++l;
            }
            if ((a = module1385.call(u[0], o[l])) === -1) {
                a = u[0].push(o[l]) - 1;
            }
            u[1][a] = ++t;
            i[t] = o;
            return t;
        },
        delete: function(t) {
            let o;
            for(var a = 0, l = n, u = [], s = i[t]; a < e - 1;){
                if ((o = module1385.call(l[0], s[a])) === -1) {
                    return;
                }
                u.push(l, o);
                l = l[1][o];
                ++a;
            }
            if ((o = module1385.call(l[0], s[a])) !== -1) {
                t = l[1][o];
                l[0].splice(o, 1);
                l[1].splice(o, 1);
                while(!l[0].length && u.length){
                    o = u.pop();
                    (l = u.pop())[0].splice(o, 1);
                    l[1].splice(o, 1);
                }
                delete i[t];
            }
        },
        clear: function() {
            n = [
                [],
                []
            ];
            i = Object.create(null);
        }
    };
};
