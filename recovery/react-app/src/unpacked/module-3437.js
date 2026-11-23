const n = ()=>{
    if (typeof self === "object" && self) {
        return self;
    }
    if (typeof window === "object" && window) {
        return window;
    }
    throw new Error("Unable to resolve global `this`");
};
export default (function() {
    if (this) {
        return this;
    }
    try {
        Object.defineProperty(Object.prototype, "__global__", {
            get: function() {
                return this;
            },
            configurable: true
        });
    } catch (e) {
        return n();
    }
    try {
        return __global__ || n();
    } finally{
        delete Object.prototype.__global__;
    }
})();
