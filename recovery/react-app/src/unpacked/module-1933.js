import module4806 from "unpacked/module-4806.js";
export default function(e, t) {
    const n = module4806(e);
    if (n % t) {
        throw new RangeError("Wrong offset");
    }
    return n;
};
