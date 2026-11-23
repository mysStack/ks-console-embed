import module2141 from "unpacked/module-2141.js";
module2141.prototype.postfixEval = function(e) {
    "use strict";
    e = e || {};
    e.PI = Math.PI;
    e.E = Math.E;
    let t;
    let n;
    let o;
    const i = [];
    for(let a = this.value, l = e.n !== undefined, u = 0; u < a.length; u++){
        if (a[u].type === 1) {
            i.push({
                value: a[u].value,
                type: 1
            });
        } else if (a[u].type === 3) {
            i.push({
                value: e[a[u].value],
                type: 1
            });
        } else if (a[u].type === 0 || a[u].type === 7) {
            if (i[i.length - 1].type === undefined) {
                i[i.length - 1].value.push(a[u]);
            } else {
                i[i.length - 1].value = a[u].value(i[i.length - 1].value);
            }
        } else if (a[u].type === 8) {
            t = i.pop();
            n = i.pop();
            i.push({
                type: 1,
                value: a[u].value(n.value, t.value)
            });
        } else if (a[u].type === 10) {
            t = i.pop();
            if ((n = i.pop()).type === undefined) {
                n.value = n.concat(t);
                n.value.push(a[u]);
                i.push(n);
            } else if (t.type === undefined) {
                t.unshift(n);
                t.push(a[u]);
                i.push(t);
            } else {
                i.push({
                    type: 1,
                    value: a[u].value(n.value, t.value)
                });
            }
        } else if (a[u].type === 2 || a[u].type === 9) {
            t = i.pop();
            if ((n = i.pop()).type === undefined) {
                console.log(n);
                (n = n.concat(t)).push(a[u]);
                i.push(n);
            } else if (t.type === undefined) {
                t.unshift(n);
                t.push(a[u]);
                i.push(t);
            } else {
                i.push({
                    type: 1,
                    value: a[u].value(n.value, t.value)
                });
            }
        } else if (a[u].type === 12) {
            if ((t = i.pop()).type !== undefined) {
                t = [
                    t
                ];
            }
            n = i.pop();
            o = i.pop();
            i.push({
                type: 1,
                value: a[u].value(o.value, n.value, new module2141(t))
            });
        } else {
            if (a[u].type === 13) {
                if (l) {
                    i.push({
                        value: e[a[u].value],
                        type: 3
                    });
                } else {
                    i.push([
                        a[u]
                    ]);
                }
            }
        }
    }
    if (i.length > 1) {
        throw new module2141.exception("Uncaught Syntax error");
    }
    if (i[0].value > 1000000000000000) {
        return "Infinity";
    }
    return parseFloat(i[0].value.toFixed(15));
};
module2141.eval = function(e, t, n) {
    if (t === undefined) {
        return this.lex(e).toPostfix().postfixEval();
    }
    if (n === undefined) {
        if (t.length !== undefined) {
            return this.lex(e, t).toPostfix().postfixEval();
        }
        return this.lex(e).toPostfix().postfixEval(t);
    }
    return this.lex(e, t).toPostfix().postfixEval(n);
};
export default module2141;
