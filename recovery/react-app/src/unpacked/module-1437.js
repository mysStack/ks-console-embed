export const a = function(e) {
    return function() {
        return this.matches(e);
    };
};
