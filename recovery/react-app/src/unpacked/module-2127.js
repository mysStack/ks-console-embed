((t)=>{
    (()=>{
        let n;
        let r;
        let o;
        let i;
        let a;
        let l;
        if (typeof performance !== "undefined" && performance !== null && performance.now) {
            module.exports = function() {
                return performance.now();
            };
        } else if (t != null && t.hrtime) {
            module.exports = function() {
                return (n() - a) / 1000000;
            };
            r = t.hrtime;
            i = (n = function() {
                let e;
                return 1000000000 * (e = r())[0] + e[1];
            })();
            l = 1000000000 * t.uptime();
            a = i - l;
        } else if (Date.now) {
            module.exports = function() {
                return Date.now() - o;
            };
            o = Date.now();
        } else {
            module.exports = function() {
                return (new Date).getTime() - o;
            };
            o = (new Date).getTime();
        }
    })();
})(require("unpacked/module-257.js").default);
