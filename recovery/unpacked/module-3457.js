(function(e, t) {
    ((e, n)=>{
        "use strict";
        if (!e.setImmediate) {
            let r;
            let o;
            let i;
            let a;
            let l;
            let u = 1;
            var s = {};
            var c = false;
            const f = e.document;
            let d = Object.getPrototypeOf && Object.getPrototypeOf(e);
            d = d && d.setTimeout ? d : e;
            if (Object.prototype.toString.call(e.process) === "[object process]") {
                r = function(e) {
                    t.nextTick(function() {
                        h(e);
                    });
                };
            } else if ((()=>{
                if (e.postMessage && !e.importScripts) {
                    let t = true;
                    const n = e.onmessage;
                    e.onmessage = function() {
                        t = false;
                    };
                    e.postMessage("", "*");
                    e.onmessage = n;
                    return t;
                }
            })()) {
                a = `setImmediate\$${Math.random()}\$`;
                l = function(t) {
                    if (t.source === e && typeof t.data === "string" && t.data.indexOf(a) === 0) {
                        h(+t.data.slice(a.length));
                    }
                };
                if (e.addEventListener) {
                    e.addEventListener("message", l, false);
                } else {
                    e.attachEvent("onmessage", l);
                }
                r = function(t) {
                    e.postMessage(a + t, "*");
                };
            } else if (e.MessageChannel) {
                (i = new MessageChannel).port1.onmessage = function(e) {
                    h(e.data);
                };
                r = function(e) {
                    i.port2.postMessage(e);
                };
            } else if (f && "onreadystatechange" in f.createElement("script")) {
                o = f.documentElement;
                r = function(e) {
                    let t = f.createElement("script");
                    t.onreadystatechange = function() {
                        h(e);
                        t.onreadystatechange = null;
                        o.removeChild(t);
                        t = null;
                    };
                    o.appendChild(t);
                };
            } else {
                r = function(e) {
                    setTimeout(h, 0, e);
                };
            }
            d.setImmediate = function(callback) {
                if (typeof callback !== "function") {
                    callback = new Function(`${callback}`);
                }
                for(var args = new Array(arguments.length - 1), n = 0; n < args.length; n++){
                    args[n] = arguments[n + 1];
                }
                const o = {
                    callback,
                    args
                };
                s[u] = o;
                r(u);
                return u++;
            };
            d.clearImmediate = p;
        }
        function p(e) {
            delete s[e];
        }
        function h(e) {
            if (c) {
                setTimeout(h, 0, e);
            } else {
                const t = s[e];
                if (t) {
                    c = true;
                    try {
                        (({ callback, args })=>{
                            switch(args.length){
                                case 0:
                                    callback();
                                    break;
                                case 1:
                                    callback(args[0]);
                                    break;
                                case 2:
                                    callback(args[0], args[1]);
                                    break;
                                case 3:
                                    callback(args[0], args[1], args[2]);
                                    break;
                                default:
                                    callback.apply(undefined, args);
                            }
                        })(t);
                    } finally{
                        p(e);
                        c = false;
                    }
                }
            }
        }
    })(typeof self === "undefined" ? e === undefined ? this : e : self);
}).call(this, require("./module-69.js").default, require("./module-257.js").default);
