import module1424 from "unpacked/module-1424.js";
export default function(e, t) {
    if (typeof e !== "number" && module1424(e) != "Number") {
        throw TypeError(t);
    }
    return +e;
};
