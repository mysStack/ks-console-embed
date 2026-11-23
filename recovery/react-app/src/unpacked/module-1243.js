function r() {}
export const a = function(e) {
    if (e == null) {
        return r;
    }
    return function() {
        return this.querySelector(e);
    };
};
