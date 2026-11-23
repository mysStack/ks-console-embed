function n(e, resolve, reject, r, o, a, i) {
    try {
        var l = e[a](i);
        var s = l.value;
    } catch (error) {
        return void reject(error);
    }
    if (l.done) {
        resolve(s);
    } else {
        Promise.resolve(s).then(r, o);
    }
}
export default function(e) {
    return function() {
        const _this = this;
        const r = arguments;
        return new Promise((resolve, reject)=>{
            const i = e.apply(_this, r);
            function l(e) {
                n(i, resolve, reject, l, s, "next", e);
            }
            function s(e) {
                n(i, resolve, reject, l, s, "throw", e);
            }
            l(undefined);
        });
    };
};
