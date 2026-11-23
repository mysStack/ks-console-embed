function n() {
    n = Object.assign || function(e) {
        for(let t = 1; t < arguments.length; t++){
            const n = arguments[t];
            for(const r in n){
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    e[r] = n[r];
                }
            }
        }
        return e;
    };
    n.default = n;
    return n.apply(this, arguments);
}
export { n as default };
n.default = n;
