export default function(e) {
    if (typeof e !== "function") {
        throw new TypeError(`${e} is not a function`);
    }
    return e;
};
