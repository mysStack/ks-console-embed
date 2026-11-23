const n = function(e) {
    this.value = e;
};
n.math = {
    isDegree: true,
    acos: function(e) {
        if (n.math.isDegree) {
            return 180 / Math.PI * Math.acos(e);
        }
        return Math.acos(e);
    },
    add: function(e, t) {
        return e + t;
    },
    asin: function(e) {
        if (n.math.isDegree) {
            return 180 / Math.PI * Math.asin(e);
        }
        return Math.asin(e);
    },
    atan: function(e) {
        if (n.math.isDegree) {
            return 180 / Math.PI * Math.atan(e);
        }
        return Math.atan(e);
    },
    acosh: function(e) {
        return Math.log(e + Math.sqrt(e * e - 1));
    },
    asinh: function(e) {
        return Math.log(e + Math.sqrt(e * e + 1));
    },
    atanh: function(e) {
        return Math.log((1 + e) / (1 - e));
    },
    C: function(e, t) {
        let r = 1;
        let o = e - t;
        let i = t;
        if (i < o) {
            i = o;
            o = t;
        }
        for(let a = i + 1; a <= e; a++){
            r *= a;
        }
        return r / n.math.fact(o);
    },
    changeSign: function(e) {
        return -e;
    },
    cos: function(e) {
        if (n.math.isDegree) {
            e = n.math.toRadian(e);
        }
        return Math.cos(e);
    },
    cosh: function(e) {
        return (Math.E ** e + Math.E ** (-1 * e)) / 2;
    },
    div: function(e, t) {
        return e / t;
    },
    fact: function(e) {
        if (e % 1 != 0) {
            return "NaN";
        }
        let t = 1;
        for(let n = 2; n <= e; n++){
            t *= n;
        }
        return t;
    },
    inverse: function(e) {
        return 1 / e;
    },
    log: function(e) {
        return Math.log(e) / Math.log(10);
    },
    mod: function(e, t) {
        return e % t;
    },
    mul: function(e, t) {
        return e * t;
    },
    P: function(e, t) {
        let n = 1;
        for(let r = Math.floor(e) - Math.floor(t) + 1; r <= Math.floor(e); r++){
            n *= r;
        }
        return n;
    },
    Pi: function(e, t, n) {
        let r = 1;
        for(let o = e; o <= t; o++){
            r *= Number(n.postfixEval({
                n: o
            }));
        }
        return r;
    },
    pow10x: function(e) {
        let t = 1;
        while(e--){
            t *= 10;
        }
        return t;
    },
    sigma: function(e, t, n) {
        let r = 0;
        for(let o = e; o <= t; o++){
            r += Number(n.postfixEval({
                n: o
            }));
        }
        return r;
    },
    sin: function(e) {
        if (n.math.isDegree) {
            e = n.math.toRadian(e);
        }
        return Math.sin(e);
    },
    sinh: function(e) {
        return (Math.E ** e - Math.E ** (-1 * e)) / 2;
    },
    sub: function(e, t) {
        return e - t;
    },
    tan: function(e) {
        if (n.math.isDegree) {
            e = n.math.toRadian(e);
        }
        return Math.tan(e);
    },
    tanh: function(e) {
        return n.sinha(e) / n.cosha(e);
    },
    toRadian: function(e) {
        return e * Math.PI / 180;
    }
};
n.Exception = function(e) {
    this.message = e;
};
export default n;
