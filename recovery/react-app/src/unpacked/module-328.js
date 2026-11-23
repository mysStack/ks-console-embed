export default function(e, t) {
    if (e < t) {
        throw new TypeError("Not enough arguments");
    }
    return e;
};
