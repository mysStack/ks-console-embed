import module111 from "unpacked/module-111.js";
export default function(e) {
    const t = module111(e);
    if (t < 0) {
        throw new RangeError("The argument can't be less than 0");
    }
    return t;
};
