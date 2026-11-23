function r() {
    return [];
}
export const a = function(e) {
    if (e == null) {
        return r;
    }
    return function() {
        return this.querySelectorAll(e);
    };
};
