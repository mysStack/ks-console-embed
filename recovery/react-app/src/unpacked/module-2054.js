let _webpackDefault = {};
let r;
(()=>{
    function n(e) {
        if ((e = e.toString(16)).length < 2) {
            e = `0${e}`;
        }
        return e;
    }
    function o() {
        let e = (()=>{
            try {
                return Array.from((window.crypto || window.msCrypto).getRandomValues(new Uint8Array(16)));
            } catch (t) {
                for(var e = []; e.length < 16;){
                    e.push(256 * Math.random() & 255);
                }
                return e;
            }
        })();
        e[6] = 15 & e[6] | 64;
        e[8] = 63 & e[8] | 128;
        (e = e.map(n).join("").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/)).shift();
        return e.join("-");
    }
    const i = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
    o.valid = function(e) {
        return i.test(e);
    };
    if (window) {
        window.uuid4 = o;
    }
    if (_webpackDefault) {
        _webpackDefault = o;
    }
    if ((r = o) !== undefined) {
        _webpackDefault = r;
    }
})();
export default _webpackDefault;
