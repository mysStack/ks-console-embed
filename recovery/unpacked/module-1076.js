export default function(e) {
    if (typeof e === "object") {
        return e !== null;
    }
    return typeof e === "function";
};
