"use strict";
((e)=>{
    require.d(exports, "d", function() {
        return useO;
    });
    require.d(exports, "c", function() {
        return a;
    });
    require.d(exports, "b", function() {
        return i;
    });
    require.d(exports, "a", function() {
        return s;
    });
    var module553 = require("./module-553.js");
    function useO() {
        const e = ((e)=>{
            let t = 2;
            let n = typeof Symbol === "function" && e[Symbol.iterator];
            if (!n) {
                return e;
            }
            let r;
            let o;
            const a = n.call(e);
            const i = [];
            try {
                while((t === undefined || t-- > 0) && !(r = a.next()).done){
                    i.push(r.value);
                }
            } catch (error) {
                o = {
                    error
                };
            } finally{
                try {
                    if (r && !r.done && (n = a.return)) {
                        n.call(a);
                    }
                } finally{
                    if (o) {
                        throw o.error;
                    }
                }
            }
            return i;
        })(module553.useState(0))[1];
        return module553.useCallback(function() {
            e(function(e) {
                return e + 1;
            });
        }, []);
    }
    function a(e) {
        if (!e || typeof e !== "object") {
            return false;
        }
        const t = Object.getPrototypeOf(e);
        return !t || t === Object.prototype;
    }
    function i(e) {
        if (typeof Symbol === "function") {
            return Symbol.for(e);
        }
        return `__\$mobx-react ${e}__`;
    }
    var l = {};
    function s() {
        if (typeof window !== "undefined") {
            return window;
        }
        if (e !== undefined) {
            return e;
        }
        if (typeof self !== "undefined") {
            return self;
        }
        return l;
    }
})(require("./module-69.js").default);
