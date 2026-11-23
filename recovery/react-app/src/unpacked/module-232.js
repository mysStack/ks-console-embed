import module620 from "./module-620.js";
export default function({ __data__ }, t) {
    if (module620(t)) {
        return __data__[typeof t === "string" ? "string" : "hash"];
    }
    return __data__.map;
};
