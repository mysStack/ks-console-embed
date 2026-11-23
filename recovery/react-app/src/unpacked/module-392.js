const toString = Function.prototype.toString;
export default function(e) {
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
