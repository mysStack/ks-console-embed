let n;
let r;
const o = {};
export default o;
function a() {
    throw new Error("setTimeout has not been defined");
}
function i() {
    throw new Error("clearTimeout has not been defined");
}
function l(e) {
    if (n === setTimeout) {
        return setTimeout(e, 0);
    }
    if ((n === a || !n) && setTimeout) {
        n = setTimeout;
        return setTimeout(e, 0);
    }
    try {
        return n(e, 0);
    } catch (t) {
        try {
            return n.call(null, e, 0);
        } catch (t) {
            return n.call(this, e, 0);
        }
    }
}
(()=>{
    try {
        n = typeof setTimeout === "function" ? setTimeout : a;
    } catch (e) {
        n = a;
    }
    try {
        r = typeof clearTimeout === "function" ? clearTimeout : i;
    } catch (e) {
        r = i;
    }
})();
let s;
let u = [];
let c = false;
let f = -1;
function d() {
    if (c && s) {
        c = false;
        if (s.length) {
            u = s.concat(u);
        } else {
            f = -1;
        }
        if (u.length) {
            p();
        }
    }
}
function p() {
    if (!c) {
        const e = l(d);
        c = true;
        for(let t = u.length; t;){
            s = u;
            for(u = []; ++f < t;){
                if (s) {
                    s[f].run();
                }
            }
            f = -1;
            t = u.length;
        }
        s = null;
        c = false;
        (function(e) {
            if (r === clearTimeout) {
                return clearTimeout(e);
            }
            if ((r === i || !r) && clearTimeout) {
                r = clearTimeout;
                return clearTimeout(e);
            }
            try {
                r(e);
            } catch (t) {
                try {
                    return r.call(null, e);
                } catch (t) {
                    return r.call(this, e);
                }
            }
        })(e);
    }
}
class h {
    constructor(e, t){
        this.fun = e;
        this.array = t;
    }
    run() {
        this.fun.apply(null, this.array);
    }
}
function v() {}
o.nextTick = function(e) {
    const t = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for(let n = 1; n < arguments.length; n++){
            t[n - 1] = arguments[n];
        }
    }
    u.push(new h(e, t));
    if (!(u.length !== 1 || c)) {
        l(p);
    }
};
o.title = "browser";
o.browser = true;
o.env = {};
o.argv = [];
o.version = "";
o.versions = {};
o.on = v;
o.addListener = v;
o.once = v;
o.off = v;
o.removeListener = v;
o.removeAllListeners = v;
o.emit = v;
o.prependListener = v;
o.prependOnceListener = v;
o.listeners = function(e) {
    return [];
};
o.binding = function(e) {
    throw new Error("process.binding is not supported");
};
o.cwd = function() {
    return "/";
};
o.chdir = function(e) {
    throw new Error("process.chdir is not supported");
};
o.umask = function() {
    return 0;
};
