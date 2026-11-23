import module202 from "./module-202.js";
export default function(e) {
    if (module202(e) === "Symbol") {
        throw new TypeError("Cannot convert a Symbol value to a string");
    }
    return String(e);
};
