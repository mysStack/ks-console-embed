export const dumpClassLists = function() {};
const r = {};
const o = {};
export const add = function(e, t) {
    n = e.classList;
    i = e.nodeName.toLowerCase() == "html" ? r : o;
    return void t.split(" ").forEach((e)=>{
        ((e, t)=>{
            if (!e[t]) {
                e[t] = 0;
            }
            e[t] += 1;
        })(i, e);
        n.add(e);
    });
    var n;
    var i;
};
export const remove = function(e, t) {
    n = e.classList;
    i = e.nodeName.toLowerCase() == "html" ? r : o;
    return void t.split(" ").forEach((e)=>{
        ((e, t)=>{
            if (e[t]) {
                e[t] -= 1;
            }
        })(i, e);
        if (i[e] === 0) {
            n.remove(e);
        }
    });
    var n;
    var i;
};
