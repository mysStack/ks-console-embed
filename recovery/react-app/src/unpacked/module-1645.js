const toString = Function.prototype.toString;
export const a = function(e) {
    if (e != null) {
        try {
            return toString.call(e);
        } catch (e) {}
        try {
            return `${e}`;
        } catch (e) {}
    }
    return "";
};
